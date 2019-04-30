import { isNode } from "./";

describe("isNode", () => {
  const objToString = Object.prototype.toString;

  afterEach(() => {
    Object.prototype.toString = objToString;
  });

  it("should return true when running in a Node.JS environment", () => {
    Object.prototype.toString = () => "[object process]";
    expect(isNode()).toBe(true);
  });

  it("should return false when the global process object does not exist", () => {
    const process = global.process;
    try {
      global.process = undefined as any;
      expect(isNode()).toBe(false);
    } finally {
      global.process = process;
    }
  });
});
