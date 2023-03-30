/**
 * @internal
 */
export const isFipsRegion = (region: string) =>
  typeof region === "string" && (region.startsWith("fips-") || region.endsWith("-fips"));
