import { StreamingBlobPayloadOutputTypes } from "@smithy/types";
import { isBlob, isReadableStream, sdkStreamMixin } from "@smithy/util-stream";

import { JoinStreamIterationEvents } from "./types";

export async function joinStreams(
  streams: Promise<StreamingBlobPayloadOutputTypes>[],
  eventListeners?: JoinStreamIterationEvents
): Promise<StreamingBlobPayloadOutputTypes> {
  if (isReadableStream(streams[0])) {
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
    throw new Error("Unsupported Stream Type");
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
      const reader = stream.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }
        yield value;
        bytesTransferred += value.byteLength;
        eventListeners?.onBytes?.(bytesTransferred, index);
      }
      reader.releaseLock();
    } else {
      const failure = new Error(`unhandled stream type ${(stream as any)?.constructor?.name}`);
      eventListeners?.onFailure?.(failure, index);
      throw failure;
    }
    index++;
  }
  eventListeners?.onCompletion?.(bytesTransferred, index - 1);
}
