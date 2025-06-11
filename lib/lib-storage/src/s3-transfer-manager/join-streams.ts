import { StreamingBlobPayloadOutputTypes } from "@smithy/types";
import { isBlob, isReadableStream, sdkStreamMixin } from "@smithy/util-stream";
import { Readable } from "stream";

import { JoinStreamIterationEvents } from "./types";

// TODO: check all types. needs to join nodejs and browser together
export function joinStreams(
  streams: StreamingBlobPayloadOutputTypes[],
  eventListeners?: JoinStreamIterationEvents
): StreamingBlobPayloadOutputTypes {
  if (streams.length === 1) {
    return streams[0];
  } else if (isReadableStream(streams[0])) {
    const newReadableStream = new ReadableStream({
      async start(controller) {
        for await (const chunk of iterateStreams(streams, eventListeners)) {
          controller.enqueue(chunk);
        }
        controller.close();
      },
    });
    return sdkStreamMixin(newReadableStream);
  } else if (isBlob(streams[0])) {
    throw new Error("Blob not supported yet");
  } else {
    return sdkStreamMixin(Readable.from(iterateStreams(streams, eventListeners)));
  }
}

export async function* iterateStreams(
  streams: StreamingBlobPayloadOutputTypes[],
  eventListeners?: JoinStreamIterationEvents
): AsyncIterable<StreamingBlobPayloadOutputTypes, void, void> {
  let bytesTransferred = 0;
  let index = 0;
  for (const stream of streams) {
    if (isReadableStream(stream)) {
      // const reader = stream.getReader();
      // while (true) {
      //   const { done, value } = await reader.read();
      //   if (done) {
      //     break;
      //   }
      //   yield value;
      //   bytesTransferred += value.byteLength;
      // }
      // reader.releaseLock();

      const failure = new Error(`ReadableStreams not supported yet ${(stream as any)?.constructor?.name}`);
      eventListeners?.onFailure?.(failure, index);
      throw failure;
    } else if (isBlob(stream)) {
      throw new Error("Blob not supported yet");
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
