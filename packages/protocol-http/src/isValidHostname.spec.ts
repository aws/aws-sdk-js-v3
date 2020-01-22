import { isValidHostname } from "./isValidHostname";

describe("implementation selection", () => {
  it("should return true for valid hostnames", () => {
    expect(isValidHostname("foo")).toBe(true);
  });

  it("should return false for invalid hostnames", () => {
    expect(isValidHostname("foo.com/?bar")).toBe(false);
  });
});
