import { normalizeRegion } from "./normalizeRegion";

describe(normalizeRegion.name, () => {
  const mockRegion = "mockRegion";

  it("returns Provider if value is string", async () => {
    const output = normalizeRegion(mockRegion);
    expect(await output()).toEqual(mockRegion);
  });

  it("returns Provider if it's a Provider", () => {
    const mockRegionProvider = () => Promise.resolve(mockRegion);
    expect(normalizeRegion(mockRegionProvider)).toBe(mockRegionProvider);
  });
});
