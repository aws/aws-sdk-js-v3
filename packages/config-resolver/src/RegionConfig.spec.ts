import { resolveRegionConfig } from "./RegionConfig";

describe("RegionConfig", () => {
  const regionDefaultProvider = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("assigns input region if present", async () => {
    const region = "us-west-2";
    const output = await resolveRegionConfig({ region, regionDefaultProvider }).region();
    expect(output).toStrictEqual(region);
    expect(regionDefaultProvider).not.toHaveBeenCalled();
  });

  it("assigns value returned by regionDefaultProvider if region not present", () => {
    const mockRegion = jest.fn();
    regionDefaultProvider.mockReturnValueOnce(mockRegion);

    const input = { regionDefaultProvider };
    expect(resolveRegionConfig(input).region).toStrictEqual(mockRegion);

    expect(regionDefaultProvider).toHaveBeenCalledTimes(1);
    expect(regionDefaultProvider).toHaveBeenCalledWith(input);
  });
});
