import { DEFAULT } from "../upload/defaults";
import { DataPart } from "./yield-chunk";

export async function* chunkFromBuffer(data: Buffer, chunkSize: number): AsyncGenerator<DataPart, void, unknown> {
  let startByte = 0;
  let endByte = startByte + chunkSize;
  let part = DEFAULT.MIN_PART_NUMBER;

  while (startByte < data.length && part < DEFAULT.MAX_PART_NUMBER) {
    yield {
      PartNumber: part,
      Body: data.slice(startByte, endByte),
    };
    startByte = endByte;
    endByte += chunkSize;
    part += 1;
  }
  if (part >= DEFAULT.MAX_PART_NUMBER) {
    throw `Exceeded ${DEFAULT.MAX_PART_NUMBER} parts, multipart upload failed`;
  }
}
