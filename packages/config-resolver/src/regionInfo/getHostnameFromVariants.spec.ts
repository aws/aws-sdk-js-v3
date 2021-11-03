import { EndpointVariant } from "./EndpointVariant";
import { getHostnameFromVariants, GetHostnameFromVariantsOptions } from "./getHostnameFromVariants";

describe(getHostnameFromVariants.name, () => {
  const getMockHostname = (options: GetHostnameFromVariantsOptions) => JSON.stringify(options);
  const getMockTags = ({ isFipsEndpoint, isDualstackEndpoint }: GetHostnameFromVariantsOptions) => [
    ...(isFipsEndpoint ? ["fips"] : []),
    ...(isDualstackEndpoint ? ["dualstack"] : []),
  ];
  const getMockVariants = () =>
    [
      { isFipsEndpoint: false, isDualstackEndpoint: false },
      { isFipsEndpoint: false, isDualstackEndpoint: true },
      { isFipsEndpoint: true, isDualstackEndpoint: false },
      { isFipsEndpoint: true, isDualstackEndpoint: true },
    ].map((options) => ({
      hostname: getMockHostname(options),
      tags: getMockTags(options),
    }));

  const testCases = [
    [false, false],
    [false, true],
    [true, false],
    [true, true],
  ];

  describe("returns hostname if present in variants", () => {
    it.each(testCases)("isFipsEndpoint: %s, isDualstackEndpoint: %s", (isFipsEndpoint, isDualstackEndpoint) => {
      const options = { isFipsEndpoint, isDualstackEndpoint };
      const variants = getMockVariants() as EndpointVariant[];
      expect(getHostnameFromVariants(variants, options)).toEqual(getMockHostname(options));
    });
  });

  describe("returns undefined if not present in variants", () => {
    it.each(testCases)("isFipsEndpoint: %s, isDualstackEndpoint: %s", (isFipsEndpoint, isDualstackEndpoint) => {
      const options = { isFipsEndpoint, isDualstackEndpoint };
      const variants = getMockVariants() as EndpointVariant[];
      expect(
        getHostnameFromVariants(
          variants.filter(({ tags }) => JSON.stringify(tags) !== JSON.stringify(getMockTags(options))),
          options
        )
      ).toBeUndefined();
    });
  });

  describe("returns undefined if variants in undefined", () => {
    it.each(testCases)("isFipsEndpoint: %s, isDualstackEndpoint: %s", (isFipsEndpoint, isDualstackEndpoint) => {
      const options = { isFipsEndpoint, isDualstackEndpoint };
      expect(getHostnameFromVariants(undefined, options)).toBeUndefined();
    });
  });
});
