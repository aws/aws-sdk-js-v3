import { isFipsRegion } from "./isFipsRegion";
import { PartitionHash } from "./PartitionHash";
import { RegionHash } from "./RegionHash";

export interface GetSigningRegionOptions {
  hostname: string;
  partition: string;
  regionHash: RegionHash;
  partitionHash: PartitionHash;
}

export const getSigningRegion = (
  region: string,
  { hostname, partition, regionHash, partitionHash }: GetSigningRegionOptions
) => {
  const resolvedRegion = partitionHash[partition]?.endpoint ?? region;
  if (regionHash[resolvedRegion]?.signingRegion) {
    return regionHash[resolvedRegion].signingRegion;
  } else if (isFipsRegion(region)) {
    const regionRegex = partitionHash[partition].regionRegex
      .replace("\\\\", "\\")
      .replace(/^\^/g, "")
      .replace(/\$$/g, "");
    const regionRegexmatchArray = hostname.match(regionRegex);
    if (regionRegexmatchArray) {
      return regionRegexmatchArray[0];
    }
  }
};
