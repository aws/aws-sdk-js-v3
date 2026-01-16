import { describe, expect, test as it } from "vitest";

import { getOutpostEndpoint } from "./getOutpostEndpoint";

describe(getOutpostEndpoint.name, () => {
  const mockInput = { isCustomEndpoint: false, useFipsEndpoint: false };
  it("returns hostname if custom endpoint is set", () => {
    const mockHostname = "mock.hostname.com";
    expect(getOutpostEndpoint(mockHostname, { ...mockInput, isCustomEndpoint: true })).toStrictEqual(mockHostname);
  });

  describe("returns outpost endpoint", () => {
    const mockRegion = "region";
    const mockDnsSuffix = "mockDnsSuffix";

    const testOutpostEndpoint = (useFipsEndpoint: boolean) => {
      const mockHostname = `s3-control${useFipsEndpoint ? "-fips" : ""}.${mockRegion}.${mockDnsSuffix}`;
      it("uses region from hostname if regionOverride if provided", () => {
        expect(getOutpostEndpoint(mockHostname, { ...mockInput, useFipsEndpoint })).toStrictEqual(
          `s3-outposts${useFipsEndpoint ? "-fips" : ""}.${mockRegion}.${mockDnsSuffix}`
        );
      });

      it("uses region from regionOverride if provided", () => {
        const mockRegionOverride = "mockRegionOverride";
        expect(
          getOutpostEndpoint(mockHostname, { ...mockInput, useFipsEndpoint, regionOverride: mockRegionOverride })
        ).toStrictEqual(`s3-outposts${useFipsEndpoint ? "-fips" : ""}.${mockRegionOverride}.${mockDnsSuffix}`);
      });
    };

    describe("with FIPS", () => {
      testOutpostEndpoint(true);
    });

    describe("without FIPS", () => {
      testOutpostEndpoint(false);
    });
  });
});
