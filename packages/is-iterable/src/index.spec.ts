import { isIterable } from "./";

describe("isIterable", () => {
  it("should return true when input is string", () => {
    expect(isIterable("string")).toBe(true);
  });

  it("should return true when input is a list", () => {
    expect(isIterable([1, 2, 3])).toBe(true);
  });

  it("should return true when input is an empty list", () => {
    expect(isIterable([])).toBe(true);
  });

  for (let scalar of [null, {}, void 0, true]) {
    it(`should return false when input is ${scalar}`, () => {
      expect(isIterable(scalar)).toBe(false);
    });
  }
  const iterator = function*() {
    yield 0;
    yield 1;
  };

  it("should return true when input is an iterator", () => {
    expect(isIterable(iterator())).toBe(true);
  });
});
