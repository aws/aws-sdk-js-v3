import { RawDataPart } from "../Upload";
import { Buffer } from "buffer";

interface Buffers {
  chunks: Buffer[];
  length: number;
}

export async function* getChunkStream<T>(
  data: T,
  partSize: number,
  getNextData: (data: T) => AsyncGenerator<Buffer>
): AsyncGenerator<RawDataPart, void, undefined> {
  let partNumber = 1;
  const currentBuffer: Buffers = { chunks: [], length: 0 };

  for await (const datum of getNextData(data)) {
    currentBuffer.chunks.push(datum);
    currentBuffer.length += datum.length;

    while (currentBuffer.length >= partSize) {
      /**
       * Concat all the buffers together once if there is more than one to concat. Attempt
       * to minimize concats as Buffer.Concat is an extremely expensive operation.
       */
      const dataChunk = currentBuffer.chunks.length > 1 ? Buffer.concat(currentBuffer.chunks) : currentBuffer.chunks[0];

      yield {
        partNumber,
        data: dataChunk.slice(0, partSize),
      };

      // Reset the buffer.
      currentBuffer.chunks = [dataChunk.slice(partSize)];
      currentBuffer.length = currentBuffer.chunks[0].length;
      partNumber += 1;
    }
  }
  yield {
    partNumber,
    data: Buffer.concat(currentBuffer.chunks),
    lastPart: true,
  };
}
