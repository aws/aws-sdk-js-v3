import { getEndpointFromRegion } from "./getEndpointFromRegion";

describe(getEndpointFromRegion.name, () => {
  const mockRegion = jest.fn();
  const mockUrlParser = jest.fn();
  const mockRegionInfoProvider = jest.fn();

  const mockInput = { region: mockRegion, urlParser: mockUrlParser, regionInfoProvider: mockRegionInfoProvider };

  const mockRegionValue = "mockRegion";
  const mockEndpoint = {
    protocol: "http:",
    hostname: "localhost",
    path: "/",
  };
  const mockRegionInfo = { hostname: "mockHostname" };

  beforeEach(() => {
    mockRegion.mockResolvedValue(mockRegionValue);
    mockUrlParser.mockResolvedValue(mockEndpoint);
    mockRegionInfoProvider.mockResolvedValue(mockRegionInfo);
  });

  afterEach(() => {
    expect(mockRegion).toHaveBeenCalledTimes(1);
    jest.clearAllMocks();
  });

  describe("tls", () => {
    afterEach(() => {
      expect(mockRegionInfoProvider).toHaveBeenCalledWith(mockRegionValue);
    });

    it("uses protocol https when not defined", async () => {
      await getEndpointFromRegion(mockInput);
      expect(mockUrlParser).toHaveBeenCalledTimes(1);
      expect(mockUrlParser).toHaveBeenCalledWith(`https://${mockRegionInfo.hostname}`);
    });

    it.each([
      ["http:", false],
      ["https:", true],
    ])("uses protocol %s when set to %s", async (protocol, tls) => {
      await getEndpointFromRegion({ ...mockInput, tls });
      expect(mockUrlParser).toHaveBeenCalledTimes(1);
      expect(mockUrlParser).toHaveBeenCalledWith(`${protocol}//${mockRegionInfo.hostname}`);
    });
  });

  describe("throws if region is invalid", () => {
    const errorMsg = "Invalid region in client config";
    it.each([
      "",
      "has_underscore",
      "-starts-with-dash",
      "ends-with-dash-",
      "-starts-and-ends-with-dash-",
      "-",
      "a-",
      "c0nt@in$-$ymb01$",
      "a".repeat(64),
    ])("region: %s", async (region) => {
      mockRegion.mockResolvedValue(region);
      try {
        await getEndpointFromRegion(mockInput);
        fail(`expected Error: ${errorMsg}`);
      } catch (error) {
        expect(error.message).toEqual(errorMsg);
      }
      expect(mockRegionInfoProvider).not.toHaveBeenCalled();
      expect(mockUrlParser).not.toHaveBeenCalled();
    });
  });

  it("throws if hostname is not returned by regionInfoProvider", async () => {
    mockRegionInfoProvider.mockResolvedValue({});
    const errorMsg = "Cannot resolve hostname from client config";
    try {
      await getEndpointFromRegion(mockInput);
      fail(`expected Error: ${errorMsg}`);
    } catch (error) {
      expect(error.message).toEqual(errorMsg);
    }
    expect(mockRegionInfoProvider).toHaveBeenCalledWith(mockRegionValue);
    expect(mockUrlParser).not.toHaveBeenCalled();
  });

  it("returns parsed endpoint", async () => {
    const endpoint = await getEndpointFromRegion(mockInput);
    expect(endpoint).toEqual(mockEndpoint);
    expect(mockRegionInfoProvider).toHaveBeenCalledWith(mockRegionValue);
    expect(mockUrlParser).toHaveBeenCalledWith(`https://${mockRegionInfo.hostname}`);
  });
});
