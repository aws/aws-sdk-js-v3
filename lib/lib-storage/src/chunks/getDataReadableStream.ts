import { Buffer } from "buffer"; // do not remove this import: Node.js buffer or buffer NPM module for browser.

export async function* getDataReadableStream(data: ReadableStream): AsyncGenerator<Uint8Array> {
  // Get a lock on the stream.
  const reader = data.getReader();

  try {
    while (true) {
      // Read from the stream.
      const { done, value } = await reader.read();
      // Exit if we're done.
      if (done) {
        return;
      }

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
