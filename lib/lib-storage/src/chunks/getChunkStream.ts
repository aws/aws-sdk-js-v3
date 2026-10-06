// eslint-disable-next-line n/prefer-node-protocol
import { Buffer } from "buffer"; // do not remove this import: Node.js buffer or buffer NPM module for browser.

import type { RawDataPart } from "../Upload";

interface Buffers {
  chunks: Uint8Array[];
  length: number;
}

/**
 * Returns a chunk that is safe to retain: if `chunk` is a small view onto a
 * much larger backing ArrayBuffer (e.g. a Node Buffer pool slab), copy it into
 * a dedicated, non-pooled buffer so the large backing store can be collected.
 *
 * @internal
 */
const retainable = (chunk: Uint8Array): Uint8Array => {
  if (chunk.byteLength * 2 >= chunk.buffer.byteLength) {
    return chunk;
  }
  // Preserve the chunk type (Buffer vs plain Uint8Array); neither allocation uses the Buffer pool.
  const copy = Buffer.isBuffer(chunk) ? Buffer.allocUnsafeSlow(chunk.byteLength) : new Uint8Array(chunk.byteLength);
  copy.set(chunk);
  return copy;
};

export async function* getChunkStream<T>(
  data: T,
  partSize: number,
  getNextData: (data: T) => AsyncGenerator<Uint8Array>
): AsyncGenerator<RawDataPart, void, undefined> {
  let partNumber = 1;
  const currentBuffer: Buffers = { chunks: [], length: 0 };

  for await (const datum of getNextData(data)) {
    currentBuffer.chunks.push(retainable(datum));
    currentBuffer.length += datum.byteLength;

    let cut = false;
    while (currentBuffer.length > partSize) {
      /**
       * Concat all the buffers together once if there is more than one to concat. Attempt
       * to minimize concats as Buffer.Concat is an extremely expensive operation.
       */
      const dataChunk = currentBuffer.chunks.length > 1 ? Buffer.concat(currentBuffer.chunks) : currentBuffer.chunks[0];

      yield {
        partNumber,
        data: dataChunk.subarray(0, partSize),
      };

      // Reset the buffer.
      currentBuffer.chunks = [dataChunk.subarray(partSize)];
      currentBuffer.length = currentBuffer.chunks[0].byteLength;
      partNumber += 1;
      cut = true;
    }

    if (cut) {
      // Only the final remainder is retained while awaiting more data; release its backing store.
      currentBuffer.chunks[0] = retainable(currentBuffer.chunks[0]);
    }
  }

  yield {
    partNumber,
    data: currentBuffer.chunks.length !== 1 ? Buffer.concat(currentBuffer.chunks) : currentBuffer.chunks[0],
    lastPart: true,
  };
}
