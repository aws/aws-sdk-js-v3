import { isFipsRegion } from "./isFipsRegion";

export interface GetResolvedSigningRegionOptions {
  hostname: string;
  regionRegex: string;
  signingRegion?: string;
}

export const getResolvedSigningRegion = (
  region: string,
  { hostname, signingRegion, regionRegex }: GetResolvedSigningRegionOptions
) => {
  if (signingRegion) {
    return signingRegion;
  } else if (isFipsRegion(region)) {
    const regionRegexJs = regionRegex.replace("\\\\", "\\").replace(/^\^/g, "\\.").replace(/\$$/g, "\\.");
    const regionRegexmatchArray = hostname.match(regionRegexJs);
    if (regionRegexmatchArray) {
      return regionRegexmatchArray[0].slice(1, -1);
    }
  }
};
