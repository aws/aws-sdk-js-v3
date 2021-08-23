import { RegionInfo } from "@aws-sdk/types";

import { getResolvedPartition, GetResolvedPartitionOptions } from "./getResolvedPartition";

export type RegionHash = { [key: string]: Partial<Omit<RegionInfo, "partition" | "path">> };

export interface GetResolvedHostnameOptions extends GetResolvedPartitionOptions {
  /**
   * The hash of region with the information specific to that region.
   * The information can include hostname, signingService and signingRegion.
   */
  regionHash: RegionHash;
}

export const getResolvedHostName = (region: string, { regionHash, partitionHash }: GetResolvedHostnameOptions) =>
  regionHash[region]?.hostname ??
  partitionHash[getResolvedPartition(region, { partitionHash })].hostname.replace("{region}", region);
