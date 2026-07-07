import { isReadableStream, sdkStreamMixin } from "@smithy/core/serde";
import type { StreamingBlobPayloadOutputTypes } from "@smithy/types";
import { Readable } from "node:stream";

import type { JoinStreamIterationEvents } from "./types";

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
    streams.forEach((stream) => stream?.catch(() => {}));

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
  for (const p of promises) {
    p?.catch(() => {});
  }
  let bytesTransferred = 0;
  let index = 0;
  for (const streamPromise of promises) {
    if (!streamPromise) {
      throw new Error("Stream promise is undefined - lazy prefetch may not have completed");
    }
    let stream: Awaited<(typeof promises)[0]>;
    try {
      stream = await streamPromise;
    } catch (e) {
      await destroyStreams(promises);
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
      } catch (e) {
        await destroyStreams(promises);
        eventListeners?.onFailure?.(e, index);
        throw e;
      } finally {
        reader.releaseLock();
      }
    } else if (stream instanceof Readable) {
      try {
        for await (const chunk of stream) {
          yield chunk;
          const chunkSize = Buffer.isBuffer(chunk) ? chunk.length : Buffer.byteLength(chunk);
          bytesTransferred += chunkSize;
          eventListeners?.onBytes?.(bytesTransferred, index);
        }
      } catch (e) {
        await destroyStreams(promises);
        eventListeners?.onFailure?.(e, index);
        throw e;
      }
    } else {
      await destroyStreams(promises);
      const failure = new Error(`unhandled stream type ${(stream as any)?.constructor?.name}`);
      eventListeners?.onFailure?.(failure, index);
      throw failure;
    }
    // Signal that this stream has been fully consumed, triggering next prefetch
    eventListeners?.onStreamConsumed?.(index);
    index++;
  }
  eventListeners?.onCompletion?.(bytesTransferred, index - 1);
}

/**
 * Destroys/cancels a set of stream promises, swallowing any errors.
 *
 * Used to clean up response bodies that were received but never fully consumed
 * (for example when a transfer is aborted). A no-op "error" handler is attached
 * to Node streams before destroying so that a socket-level error raised while
 * tearing down an unconsumed response body (e.g. "aborted"/ECONNRESET) does not
 * surface as an uncaught exception.
 *
 * @internal
 */
export async function destroyStreams(promises: Promise<StreamingBlobPayloadOutputTypes>[]): Promise<void> {
  await Promise.all(
    promises.map(async (streamPromise) => {
      if (!streamPromise) return;
      return streamPromise
        .then((stream) => {
          if (stream instanceof Readable) {
            stream.on("error", () => {});
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
