/**
 * Returns true if the given value is a streaming body.
 *
 * Streaming bodies are unbounded byte sources that must be consumed
 * incrementally:
 *   - Node.js Readable stream (has `.pipe()`)
 *   - Web ReadableStream (has `.getReader()`)
 *   - AsyncIterable (has `Symbol.asyncIterator`)
 *
 * Bounded byte-collection types (string, ArrayBuffer, ArrayBufferView,
 * Blob, File, etc.) are NOT streaming. They can be hashed directly
 * without being routed through aws-chunked encoding.
 *
 * See: https://github.com/aws/aws-sdk-js-v3/issues/6834
 */
export const isStreaming = (body: unknown): boolean => {
  if (body === undefined || body === null) {
    return false;
  }
  if (typeof body !== "object") {
    return false;
  }
  const candidate = body as {
    pipe?: unknown;
    getReader?: unknown;
    [Symbol.asyncIterator]?: unknown;
  };
  if (typeof candidate.pipe === "function") {
    return true;
  }
  if (typeof candidate.getReader === "function") {
    return true;
  }
  if (typeof candidate[Symbol.asyncIterator] === "function") {
    return true;
  }
  return false;
};
