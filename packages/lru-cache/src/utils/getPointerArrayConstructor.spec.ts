import { getPointerArrayConstructor } from "./getPointerArrayConstructor";
import { PointerArrayConstructor } from "./PointerArray";

describe(getPointerArrayConstructor.name, () => {
  const validatePointerArrayConstructor = (min: number, max: number, expectedCtor: PointerArrayConstructor) => {
    it(`returns ${expectedCtor} for ${min}`, () => {
      expect(getPointerArrayConstructor(min)).toStrictEqual(expectedCtor);
    });
    it(`returns ${expectedCtor} for ${(max - min) / 2}`, () => {
      expect(getPointerArrayConstructor((max - min) / 2)).toStrictEqual(expectedCtor);
    });
    it(`returns ${expectedCtor} for ${max}`, () => {
      expect(getPointerArrayConstructor(max)).toStrictEqual(expectedCtor);
    });
  };

  describe("returns Uint8Array for capacity <= Math.pow(2, 8)", () => {
    validatePointerArrayConstructor(0, Math.pow(2, 8), Uint8Array);
  });

  describe("returns Uint16Array for Math.pow(2, 8) < capacity <= Math.pow(2, 16)", () => {
    validatePointerArrayConstructor(Math.pow(2, 8) + 1, Math.pow(2, 16), Uint16Array);
  });

  describe("returns Uint32Array for Math.pow(2, 16) < capacity <= Math.pow(2, 32)", () => {
    validatePointerArrayConstructor(Math.pow(2, 16) + 1, Math.pow(2, 32), Uint32Array);
  });

  describe("returns Float64Array for capacity > Math.pow(2, 32)", () => {
    expect(getPointerArrayConstructor(Math.pow(2, 32) + 1)).toStrictEqual(Float64Array);
  });
});
