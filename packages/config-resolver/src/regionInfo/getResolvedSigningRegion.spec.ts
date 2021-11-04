import { getResolvedSigningRegion } from "./getResolvedSigningRegion";

describe(getResolvedSigningRegion.name, () => {
  const mockSigningRegion = "mockSigningRegion";
  const mockHostname = "mockHostname";
  const mockRegionRegex = "mockRegionRegex";

  const mockOptions = {
    regionRegex: mockRegionRegex,
    useFipsEndpoint: false,
  };

  it("returns signingRegion if passed in options", () => {
    expect(getResolvedSigningRegion(mockHostname, { ...mockOptions, signingRegion: mockSigningRegion })).toEqual(
      mockSigningRegion
    );
  });

  describe("returns undefined if signingRegion is not present and", () => {
    it("region is not FIPS", () => {
      expect(getResolvedSigningRegion(mockHostname, mockOptions)).not.toBeDefined();
    });

    it("regionRegex does not return a match in hostname", () => {
      const matchSpy = jest.spyOn(String.prototype, "match").mockReturnValueOnce(null);

      expect(getResolvedSigningRegion(mockHostname, { ...mockOptions, useFipsEndpoint: true })).not.toBeDefined();
      expect(matchSpy).toHaveBeenCalledTimes(1);
      expect(matchSpy).toHaveBeenCalledWith(mockRegionRegex);
    });

    it("region is not present between dots in a hostname", () => {
      const regionInHostname = "us-east-1";

      expect(
        getResolvedSigningRegion(`test-${regionInHostname}.amazonaws.com`, {
          ...mockOptions,
          regionRegex: "^(us|eu|ap|sa|ca|me|af)\\-\\w+\\-\\d+$",
        })
      ).not.toBeDefined();
    });
  });

  it("returns region from hostname if signingRegion is not present", () => {
    const regionInHostname = "us-east-1";

    expect(
      getResolvedSigningRegion(`test.${regionInHostname}.amazonaws.com`, {
        ...mockOptions,
        regionRegex: "^(us|eu|ap|sa|ca|me|af)\\-\\w+\\-\\d+$",
        useFipsEndpoint: true,
      })
    ).toEqual(regionInHostname);
  });
});
