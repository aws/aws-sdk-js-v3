import { resolveRegionConfig } from "./resolveRegionConfig";

describe("RegionConfig", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("assigns region provider if presented with a region string", async () => {
    const region = "us-foo-0";
    const output = await resolveRegionConfig({ region }).region();
    expect(output).toStrictEqual(region);
  });

  it("assigns region as it-is if presented with a region provider", async () => {
    const region = "us-foo-1";
    const regionProvider = jest.fn().mockResolvedValue(region);
    const output = await resolveRegionConfig({ region: regionProvider }).region();
    expect(output).toStrictEqual(region);
  });

  it("throw if region is not supplied", () => {
    expect(() => resolveRegionConfig({})).toThrow();
  });
});
