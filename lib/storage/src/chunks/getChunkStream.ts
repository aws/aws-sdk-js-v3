import { RawDataPart } from "../Upload";
import { Buffer } from "buffer";

interface Buffers {
  chunks: Buffer[];
  length: number;
}

export async function* getChunk<T>(
  data: T,
  partSize: number,
  getNextData: (data: T) => AsyncGenerator<Buffer>
): AsyncGenerator<RawDataPart> {
  let partNumber = 1;
  const currentBuffer: Buffers = { chunks: [], length: 0 };

  for await (const datum of getNextData(data)) {
    currentBuffer.chunks.push(datum);
    currentBuffer.length += datum.length;

    while (currentBuffer.length >= partSize) {
      // concat all the buffers together once.
      const dataChunk: Buffer = Buffer.concat(currentBuffer.chunks);
      yield {
        partNumber,
        data: dataChunk.slice(0, partSize),
      };

      //reset the buffer
      currentBuffer.chunks = [dataChunk.slice(partSize)];
      currentBuffer.length = currentBuffer.chunks[0].length;
      partNumber += 1;
    }
  }
  yield {
    partNumber,
    data: Buffer.concat(currentBuffer.chunks),
  };
}
