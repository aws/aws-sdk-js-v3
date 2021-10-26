import { RegionInfo } from "@aws-sdk/types";

import { getResolvedHostname } from "./getResolvedHostname";
import { getResolvedPartition } from "./getResolvedPartition";
import { isFipsRegion } from "./isFipsRegion";
import { PartitionHash } from "./PartitionHash";
import { RegionHash } from "./RegionHash";

export interface GetRegionInfoOptions {
  signingService: string;
  regionHash: RegionHash;
  partitionHash: PartitionHash;
}

export const getRegionInfo = (
  region: string,
  { signingService, regionHash, partitionHash }: GetRegionInfoOptions
): RegionInfo => {
  const partition = getResolvedPartition(region, { partitionHash });
  const resolvedRegion = partitionHash[partition]?.endpoint ?? region;

  const hostname = getResolvedHostname(resolvedRegion, { signingService, regionHash, partitionHash });

  let signingRegion: string | undefined;
  if (regionHash[resolvedRegion]?.signingRegion) {
    signingRegion = regionHash[resolvedRegion].signingRegion;
  } else if (isFipsRegion(region)) {
    const regionRegex = partitionHash[partition].regionRegex
      .replace("\\\\", "\\")
      .replace(/^\^/g, "")
      .replace(/\$$/g, "");
    const regionRegexmatchArray = hostname.match(regionRegex);
    if (regionRegexmatchArray) {
      signingRegion = regionRegexmatchArray[0];
    }
  }

  return {
    partition,
    signingService,
    hostname,
    ...(signingRegion && { signingRegion }),
    ...(regionHash[resolvedRegion]?.signingService && {
      signingService: regionHash[resolvedRegion].signingService,
    }),
  };
};
