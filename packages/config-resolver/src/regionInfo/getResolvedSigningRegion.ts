/**
 * @internal
 */
export interface GetResolvedSigningRegionOptions {
  regionRegex: string;
  signingRegion?: string;
  useFipsEndpoint: boolean;
}

/**
 * @internal
 */
export const getResolvedSigningRegion = (
  hostname: string,
  { signingRegion, regionRegex, useFipsEndpoint }: GetResolvedSigningRegionOptions
) => {
  if (signingRegion) {
    return signingRegion;
  } else if (useFipsEndpoint) {
    const regionRegexJs = regionRegex.replace("\\\\", "\\").replace(/^\^/g, "\\.").replace(/\$$/g, "\\.");
    const regionRegexmatchArray = hostname.match(regionRegexJs);
    if (regionRegexmatchArray) {
      return regionRegexmatchArray[0].slice(1, -1);
    }
  }
};
