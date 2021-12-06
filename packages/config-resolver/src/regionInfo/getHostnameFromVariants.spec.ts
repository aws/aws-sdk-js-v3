import { EndpointVariant } from "./EndpointVariant";
import { getHostnameFromVariants, GetHostnameFromVariantsOptions } from "./getHostnameFromVariants";

describe(getHostnameFromVariants.name, () => {
  const getMockHostname = (options: GetHostnameFromVariantsOptions) => JSON.stringify(options);
  const getMockTags = ({ useFipsEndpoint, useDualstackEndpoint }: GetHostnameFromVariantsOptions) => [
    ...(useFipsEndpoint ? ["fips"] : []),
    ...(useDualstackEndpoint ? ["dualstack"] : []),
  ];
  const getMockVariants = () =>
    [
      { useFipsEndpoint: false, useDualstackEndpoint: false },
      { useFipsEndpoint: false, useDualstackEndpoint: true },
      { useFipsEndpoint: true, useDualstackEndpoint: false },
      { useFipsEndpoint: true, useDualstackEndpoint: true },
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
    it.each(testCases)("useFipsEndpoint: %s, useDualstackEndpoint: %s", (useFipsEndpoint, useDualstackEndpoint) => {
      const options = { useFipsEndpoint, useDualstackEndpoint };
      const variants = getMockVariants() as EndpointVariant[];
      expect(getHostnameFromVariants(variants, options)).toEqual(getMockHostname(options));
    });
  });

  describe("returns undefined if not present in variants", () => {
    it.each(testCases)("useFipsEndpoint: %s, useDualstackEndpoint: %s", (useFipsEndpoint, useDualstackEndpoint) => {
      const options = { useFipsEndpoint, useDualstackEndpoint };
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
    it.each(testCases)("useFipsEndpoint: %s, useDualstackEndpoint: %s", (useFipsEndpoint, useDualstackEndpoint) => {
      const options = { useFipsEndpoint, useDualstackEndpoint };
      expect(getHostnameFromVariants(undefined, options)).toBeUndefined();
    });
  });
});
