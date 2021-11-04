import { resolveRegionConfig } from "./resolveRegionConfig";

describe("RegionConfig", () => {
  const mockUseFipsEndpoint = () => Promise.resolve(false);

  it("assigns value returned by normalizeRegion to region", async () => {
    const region = "mockRegion";
    const resolvedRegionConfig = resolveRegionConfig({ region, useFipsEndpoint: mockUseFipsEndpoint });
    const resolvedRegion = await resolvedRegionConfig.region();
    expect(resolvedRegion).toBe(region);
  });

  it("throw if region is not supplied", () => {
    expect(() => resolveRegionConfig({ useFipsEndpoint: mockUseFipsEndpoint })).toThrow();
  });
});
