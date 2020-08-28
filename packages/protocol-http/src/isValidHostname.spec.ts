import { isValidHostname } from "./isValidHostname";

describe("implementation selection", () => {
  it("should return true for valid hostnames", () => {
    const validHostnames = ["foo", "foo.bar", "1foo.bar", "foo.bar1"];
    for (const hostname of validHostnames) {
      expect(isValidHostname(hostname)).toBe(true);
    }
  });

  it("should return false for invalid hostnames", () => {
    const invalidHostnames = ["foo.com/?bar", ".foo", `${new Array(64).fill("a").join("")}`];
    for (const hostname of invalidHostnames) {
      expect(isValidHostname(hostname)).toBe(false);
    }
  });
});
