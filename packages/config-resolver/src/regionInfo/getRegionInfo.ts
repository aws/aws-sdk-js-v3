import { RegionInfo } from "@aws-sdk/types";

import { getResolvedHostname } from "./getResolvedHostname";
import { getResolvedPartition } from "./getResolvedPartition";
import { getResolvedRegion } from "./getResolvedRegion";
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
  const resolvedRegion = getResolvedRegion(region, { partition, partitionHash });

  const hostname = getResolvedHostname(resolvedRegion, { signingService, regionHash, partitionHash });
  const signingRegion = getResolvedSigningRegion(region, {
    hostname,
    resolvedRegionHash: regionHash[resolvedRegion],
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
