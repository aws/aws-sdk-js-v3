import { RegionInfo } from "@aws-sdk/types";

import { getResolvedHostname } from "./getResolvedHostname";
import { getResolvedPartition } from "./getResolvedPartition";
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
  return {
    partition,
    signingService,
    hostname: getResolvedHostname(resolvedRegion, {
      signingService,
      regionHostname: regionHash[resolvedRegion]?.hostname,
      partitionHostname: partitionHash[partition]?.hostname,
    }),
    ...(regionHash[resolvedRegion]?.signingRegion && {
      signingRegion: regionHash[resolvedRegion].signingRegion,
    }),
    ...(regionHash[resolvedRegion]?.signingService && {
      signingService: regionHash[resolvedRegion].signingService,
    }),
  };
};
