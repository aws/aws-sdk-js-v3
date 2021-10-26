import { isFipsRegion } from "./isFipsRegion";

export interface GetResolvedSigningRegionOptions {
  hostname: string;
  resolvedRegionHash: { signingRegion?: string };
  regionRegex: string;
}

export const getResolvedSigningRegion = (
  region: string,
  { hostname, resolvedRegionHash, regionRegex }: GetResolvedSigningRegionOptions
) => {
  if (resolvedRegionHash?.signingRegion) {
    return resolvedRegionHash.signingRegion;
  } else if (isFipsRegion(region)) {
    const regionRegexJs = regionRegex.replace("\\\\", "\\").replace(/^\^/g, "").replace(/\$$/g, "");
    const regionRegexmatchArray = hostname.match(regionRegexJs);
    if (regionRegexmatchArray) {
      return regionRegexmatchArray[0];
    }
  }
};
