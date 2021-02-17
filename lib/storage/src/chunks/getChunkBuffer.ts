import { RawDataPart } from "../Upload";

export async function* getChunk(data: Buffer, partSize: number): AsyncGenerator<RawDataPart> {
  let partNumber = 1;
  let startByte = 0;
  let endByte = startByte + partSize;

  while (endByte < data.length) {
    yield {
      partNumber,
      data: data.slice(startByte, endByte),
    };
    partNumber += 1;
    startByte = endByte;
    endByte = startByte + partSize;
  }

  yield {
    partNumber,
    data: data.slice(startByte),
  };
}
