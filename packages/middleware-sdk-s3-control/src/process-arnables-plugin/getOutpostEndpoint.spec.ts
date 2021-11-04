import { getOutpostEndpoint } from "./getOutpostEndpoint";

describe(getOutpostEndpoint.name, () => {
  const mockRegion = "region";
  const mockDnsSuffix = "mockDnsSuffix";
  const mockHostname = `s3-control.${mockRegion}.${mockDnsSuffix}`;
  const mockInput = { isCustomEndpoint: false, useFipsEndpoint: false };

  it("returns hostname if custom endpoint is set", () => {
    expect(getOutpostEndpoint(mockHostname, { ...mockInput, isCustomEndpoint: true })).toStrictEqual(mockHostname);
  });

  describe("returns outpost endpoint", () => {
    it("uses region from hostname if regionOverride if provided", () => {
      expect(getOutpostEndpoint(mockHostname, mockInput)).toStrictEqual(`s3-outposts.${mockRegion}.${mockDnsSuffix}`);
    });

    it("uses region from regionOverride if provided", () => {
      const mockRegionOverride = "mockRegionOverride";
      expect(getOutpostEndpoint(mockHostname, { ...mockInput, regionOverride: mockRegionOverride })).toStrictEqual(
        `s3-outposts.${mockRegionOverride}.${mockDnsSuffix}`
      );
    });

    it(`adds suffix "-fips" if useFipsEndpoint is set`, () => {
      expect(getOutpostEndpoint(mockHostname, { ...mockInput, useFipsEndpoint: true })).toStrictEqual(
        `s3-outposts-fips.${mockRegion}.${mockDnsSuffix}`
      );
    });
  });
});
