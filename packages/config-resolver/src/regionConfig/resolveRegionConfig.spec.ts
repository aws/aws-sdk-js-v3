import { normalizeRegion } from "./normalizeRegion";
import { resolveRegionConfig } from "./resolveRegionConfig";

jest.mock("./normalizeRegion");

describe("RegionConfig", () => {
  const mockRegionProvider = () => Promise.resolve("mockRegion");

  beforeEach(() => {
    (normalizeRegion as jest.Mock).mockReturnValue(mockRegionProvider);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("assigns value returned by normalizeRegion to region", async () => {
    const region = "mockRegion";
    expect(resolveRegionConfig({ region }).region).toBe(mockRegionProvider);
    expect(normalizeRegion).toHaveBeenCalledTimes(1);
    expect(normalizeRegion).toHaveBeenCalledWith(region);
  });

  it("throw if region is not supplied", () => {
    expect(() => resolveRegionConfig({})).toThrow();
    expect(normalizeRegion).not.toHaveBeenCalled();
  });
});
