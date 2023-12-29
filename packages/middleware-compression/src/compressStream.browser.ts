import { AsyncGzip } from "fflate";

export const compressStream = async (body: ReadableStream): Promise<ReadableStream> => {
  let endCallback: () => void;
  const asyncGzip = new AsyncGzip();

  // Replace with Compression Streams API once supported in all browsers.
  // https://developer.mozilla.org/en-US/docs/Web/API/Compression_Streams_API
  const compressionStream = new TransformStream({
    start(controller) {
      asyncGzip.ondata = (err, data, final) => {
        if (err) {
          controller.error(err);
        } else {
          controller.enqueue(data);
          if (final) {
            if (endCallback) endCallback();
            else controller.terminate();
          }
        }
      };
    },
    transform(chunk) {
      asyncGzip.push(chunk);
    },
    flush() {
      return new Promise((resolve) => {
        endCallback = resolve;
        asyncGzip.push(new Uint8Array(0), true);
      });
    },
  });

  return body.pipeThrough(compressionStream);
};
