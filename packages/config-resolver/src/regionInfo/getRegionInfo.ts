import { RegionInfo } from "@aws-sdk/types";

import { getResolvedHostname } from "./getResolvedHostname";
import { getResolvedPartition } from "./getResolvedPartition";
import { getResolvedSigningRegion } from "./getResolvedSigningRegion";
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
  const resolvedRegion = region in regionHash ? region : partitionHash[partition]?.endpoint ?? region;

  const hostname = getResolvedHostname(resolvedRegion, {
    signingService,
    regionHostname: regionHash[resolvedRegion]?.hostname,
    partitionHostname: partitionHash[partition]?.hostname,
  });
  const signingRegion = getResolvedSigningRegion(region, {
    hostname,
    signingRegion: regionHash[resolvedRegion]?.signingRegion,
    regionRegex: partitionHash[partition].regionRegex,
  });

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
