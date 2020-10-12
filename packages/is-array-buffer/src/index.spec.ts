import { isArrayBuffer } from "./";

describe("isArrayBuffer", () => {
  const arrayBufferConstructor = ArrayBuffer;

  afterEach(() => {
    (ArrayBuffer as any) = arrayBufferConstructor;
  });

  it("should return true for ArrayBuffer objects", () => {
    expect(isArrayBuffer(new ArrayBuffer(0))).toBe(true);
  });

  it("should return false for ArrayBufferView objects", () => {
    const view = new Uint8Array(0);

    expect(isArrayBuffer(view)).toBe(false);
    expect(isArrayBuffer(view.buffer)).toBe(true);
  });

  it("should return false for scalar values", () => {
    for (const scalar of ["string", 123.234, true, null, void 0]) {
      expect(isArrayBuffer(scalar)).toBe(false);
    }
  });

  it("should return true for ArrayBuffers created with a different instance of the ArrayBuffer constructor", () => {
    const buffer = new ArrayBuffer(0);
    (ArrayBuffer as any) = jest.fn(() => buffer);

    expect(buffer).not.toBeInstanceOf(ArrayBuffer);
    expect(isArrayBuffer(buffer)).toBe(true);
  });
});
