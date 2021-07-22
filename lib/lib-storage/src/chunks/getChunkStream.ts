import { Buffer } from "buffer";

import { RawDataPart } from "../Upload";

interface Buffers {
  chunks: (Buffer | Uint8Array)[];
  length: number;
}

export async function* getChunkStream<T>(
  data: T,
  partSize: number,
  getNextData: (data: T) => AsyncGenerator<Buffer | Uint8Array>
): AsyncGenerator<RawDataPart, void, undefined> {
  let partNumber = 1;
  const currentBuffer: Buffers = { chunks: [], length: 0 };

  for await (const datum of getNextData(data)) {
    currentBuffer.chunks.push(datum);
    currentBuffer.length += datum.byteLength;

    while (currentBuffer.length >= partSize) {
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
    }
  }
  yield {
    partNumber,
    data: currentBuffer.chunks.length !== 1 ? Buffer.concat(currentBuffer.chunks) : currentBuffer.chunks[0],
    lastPart: true,
  };
}
