import { StreamingBlobPayloadOutputTypes } from "@smithy/types";
import { isReadableStream, sdkStreamMixin } from "@smithy/util-stream";
import { Readable } from "stream";

import { JoinStreamIterationEvents } from "./types";

/**
 * Joins multiple stream promises into a single stream with event callbacks.
 *
 * @internal
 */
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
    // TODO: The following line is a temp fix to handle error thrown in async iterable.
    // We should find a better solution to improve performance.
    await Promise.all(streams);
    return sdkStreamMixin(Readable.from(iterateStreams(streams, eventListeners)));
  }
}

/**
 * Iterates through stream promises sequentially, yielding chunks with progress tracking.
 *
 * @internal
 */
export async function* iterateStreams(
  promises: Promise<StreamingBlobPayloadOutputTypes>[],
  eventListeners?: JoinStreamIterationEvents
): AsyncIterable<StreamingBlobPayloadOutputTypes, void, void> {
  let bytesTransferred = 0;
  let index = 0;
  for (const streamPromise of promises) {
    let stream: Awaited<(typeof promises)[0]>;
    try {
      stream = await streamPromise;
    } catch (e) {
      await destroy(promises);
      eventListeners?.onFailure?.(e, index);
      throw e;
    }

    if (isReadableStream(stream)) {
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

/**
 * @internal
 */
async function destroy(promises: Promise<StreamingBlobPayloadOutputTypes>[]): Promise<void> {
  await Promise.all(
    promises.map(async (streamPromise) => {
      return streamPromise
        .then((stream) => {
          if (stream instanceof Readable) {
            stream.destroy();
            return;
          } else if (isReadableStream(stream)) {
            return stream.cancel();
          }
        })
        .catch((e: unknown) => {});
    })
  );
}
