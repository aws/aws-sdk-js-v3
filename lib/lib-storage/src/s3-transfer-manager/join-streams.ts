import { StreamingBlobPayloadOutputTypes } from "@smithy/types";
import { isReadableStream, sdkStreamMixin } from "@smithy/util-stream";
import { Readable } from "stream";

import { JoinStreamIterationEvents } from "./types";

// TODO: check all types. needs to join nodejs and browser together
export async function joinStreams(
  streams: Promise<StreamingBlobPayloadOutputTypes>[],
  eventListeners?: JoinStreamIterationEvents
): Promise<StreamingBlobPayloadOutputTypes> {
  const firstStream = await streams[0];
  if (isReadableStream(firstStream)) {
    const newReadableStream = new ReadableStream({
      async start(controller) {
        for await (const chunk of iterateStreams(streams, eventListeners)) {
          controller.enqueue(chunk);
        }
        controller.close();
      },
    });
    return sdkStreamMixin(newReadableStream);
  } else {
    return sdkStreamMixin(Readable.from(iterateStreams(streams, eventListeners)));
  }
}

export async function* iterateStreams(
  streams: Promise<StreamingBlobPayloadOutputTypes>[],
  eventListeners?: JoinStreamIterationEvents
): AsyncIterable<StreamingBlobPayloadOutputTypes, void, void> {
  let bytesTransferred = 0;
  let index = 0;
  for (const streamPromise of streams) {
    const stream = await streamPromise;
    if (isReadableStream(stream)) {
      // TODO: May need to acquire reader before reaching the stream
      const reader = stream.getReader();
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            break;
          }
          yield value;
          bytesTransferred += value.byteLength;
          eventListeners?.onBytes?.(bytesTransferred, index);
        }
      } finally {
        reader.releaseLock();
      }
    } else if (stream instanceof Readable) {
      for await (const chunk of stream) {
        yield chunk;
        const chunkSize = Buffer.isBuffer(chunk) ? chunk.length : Buffer.byteLength(chunk);
        bytesTransferred += chunkSize;
        eventListeners?.onBytes?.(bytesTransferred, index);
      }
    } else {
      const failure = new Error(`unhandled stream type ${(stream as any)?.constructor?.name}`);
      eventListeners?.onFailure?.(failure, index);
      throw failure;
    }
    index++;
  }
  eventListeners?.onCompletion?.(bytesTransferred, index - 1);
}
