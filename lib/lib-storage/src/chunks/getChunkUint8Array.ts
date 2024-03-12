import { RawDataPart } from "../Upload";

export async function* getChunkUint8Array(
  data: Uint8Array,
  partSize: number
): AsyncGenerator<RawDataPart, void, undefined> {
  let partNumber = 1;
  let startByte = 0;
  let endByte = partSize;

  while (endByte < data.byteLength) {
    yield {
      partNumber,
      data: data.subarray(startByte, endByte),
    };
    partNumber += 1;
    startByte = endByte;
    endByte = startByte + partSize;
  }

  yield {
    partNumber,
    data: data.subarray(startByte),
    lastPart: true,
  };
}
