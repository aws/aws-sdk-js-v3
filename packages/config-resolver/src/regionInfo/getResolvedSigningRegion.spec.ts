import { getResolvedSigningRegion } from "./getResolvedSigningRegion";
import { isFipsRegion } from "./isFipsRegion";

jest.mock("./isFipsRegion");

describe(getResolvedSigningRegion.name, () => {
  const mockRegion = "mockRegion";
  const mockSigningRegion = "mockSigningRegion";
  const mockHostname = "mockHostname";
  const mockRegionRegex = "mockRegionRegex";

  const mockOptions = {
    hostname: mockHostname,
    regionRegex: mockRegionRegex,
  };

  beforeEach(() => {
    (isFipsRegion as jest.Mock).mockReturnValue(false);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns signingRegion if passed in options", () => {
    expect(getResolvedSigningRegion(mockRegion, { ...mockOptions, signingRegion: mockSigningRegion })).toEqual(
      mockSigningRegion
    );
    expect(isFipsRegion).not.toHaveBeenCalled();
  });

  describe("returns undefined if signingRegion is not present and", () => {
    it("region is not FIPS", () => {
      expect(getResolvedSigningRegion(mockRegion, mockOptions)).not.toBeDefined();
      expect(isFipsRegion).toHaveBeenCalledTimes(1);
      expect(isFipsRegion).toHaveBeenCalledWith(mockRegion);
    });

    it("regionRegex does not return a match in hostname", () => {
      (isFipsRegion as jest.Mock).mockReturnValueOnce(true);
      const matchSpy = jest.spyOn(String.prototype, "match").mockReturnValueOnce(null);

      expect(getResolvedSigningRegion(mockRegion, mockOptions)).not.toBeDefined();
      expect(matchSpy).toHaveBeenCalledTimes(1);
      expect(matchSpy).toHaveBeenCalledWith(mockRegionRegex);
      expect(isFipsRegion).toHaveBeenCalledTimes(1);
      expect(isFipsRegion).toHaveBeenCalledWith(mockRegion);
    });
  });

  it("returns region from hostname is signingRegion is not present", () => {
    (isFipsRegion as jest.Mock).mockReturnValueOnce(true);
    const matchSpy = jest.spyOn(String.prototype, "match").mockReturnValueOnce([mockSigningRegion]);

    expect(getResolvedSigningRegion(mockRegion, mockOptions)).toEqual(mockSigningRegion);
    expect(matchSpy).toHaveBeenCalledTimes(1);
    expect(matchSpy).toHaveBeenCalledWith(mockRegionRegex);
    expect(isFipsRegion).toHaveBeenCalledTimes(1);
    expect(isFipsRegion).toHaveBeenCalledWith(mockRegion);
  });
});
