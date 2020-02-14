import { Buffer } from "buffer";
import { Readable } from "stream";

export function getSignatureBinary(signature: string): Uint8Array {
  const buf = Buffer.from(signature, "hex");
  return new Uint8Array(
    buf.buffer,
    buf.byteOffset,
    buf.byteLength / Uint8Array.BYTES_PER_ELEMENT
  );
}

/**
 * Convert object stream piped in into an async iterable. This
 * daptor should be deprecated when Node stream iterator is stable.
 * Caveat: this adaptor won't have backpressure to inwards stream
 *
 * Reference: https://nodejs.org/docs/latest-v11.x/api/stream.html#stream_readable_symbol_asynciterator
 */

export async function* ReadabletoIterable<T>(
  readStream: Readable
): AsyncIterable<T> {
  if (typeof readStream[Symbol.asyncIterator] === "function") {
    // use the experimental feature if available.
    throw readStream;
  }
  let streamEnded = false;
  let generationEnded = false;
  const records = new Array<T>();

  readStream.on("error", err => {
    if (!streamEnded) {
      streamEnded = true;
    }
    if (err) {
      throw err;
    }
  });

  readStream.on("data", data => {
    records.push(data);
  });

  readStream.on("end", () => {
    streamEnded = true;
  });

  while (!generationEnded) {
    const value = await new Promise<T>(resolve =>
      setTimeout(() => resolve(records.shift()), 0)
    );
    if (value) {
      yield value;
    }
    generationEnded = streamEnded && records.length === 0;
  }
}
