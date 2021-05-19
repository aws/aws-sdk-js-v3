import { PointerArrayConstructor } from "./PointerArray";

const MAX_8BIT_INTEGER = Math.pow(2, 8) - 1;
const MAX_16BIT_INTEGER = Math.pow(2, 16) - 1;
const MAX_32BIT_INTEGER = Math.pow(2, 32) - 1;

export const getPointerArrayConstructor = (size: number): PointerArrayConstructor => {
  const maxIndex = size - 1;

  if (maxIndex <= MAX_8BIT_INTEGER) return Uint8Array;
  if (maxIndex <= MAX_16BIT_INTEGER) return Uint16Array;
  if (maxIndex <= MAX_32BIT_INTEGER) return Uint32Array;

  return Float64Array;
};
