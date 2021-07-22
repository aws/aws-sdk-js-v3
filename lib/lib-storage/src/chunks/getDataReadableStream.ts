import { Buffer } from "buffer";

export async function* getDataReadableStream(data: ReadableStream): AsyncGenerator<Buffer | Uint8Array> {
  // Get a lock on the stream.
  const reader = data.getReader();

  try {
    while (true) {
      // Read from the stream.
      const { done, value } = await reader.read();
      // Exit if we're done.
      if (done) return;
      // check if is Buffer/Unit8Array
      if (Buffer.isBuffer(value) || value instanceof Uint8Array) {
        yield value;
      } else {
        yield Buffer.from(value);
      }
    }
  } catch (e) {
    throw e;
  } finally {
    // release the lock for reading from this stream.
    reader.releaseLock();
  }
}
