import { RegionInfo } from "@aws-sdk/types";

export type RegionHash = { [key: string]: Partial<Omit<RegionInfo, "partition" | "path">> };
export type PartitionHash = { [key: string]: { regions: string[]; hostname: string } };

export interface RegionInfoOptions {
  /**
   * The hash of region with the information specific to that region.
   * The information can include hostname, signingService and signingRegion.
   */
  regionHash: RegionHash;

  /**
   * The hash of partition with the information specific to that partition.
   * The information includes the list of regions belonging to that partition,
   * and the hostname to be used for the partition.
   */
  partitionHash: PartitionHash;
}
