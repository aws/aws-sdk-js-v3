export type PartitionHash = { [key: string]: { regions: string[]; hostname?: string; endpoint?: string } };

export interface GetResolvedPartitionOptions {
  /**
   * The hash of partition with the information specific to that partition.
   * The information includes the list of regions belonging to that partition,
   * and the hostname to be used for the partition.
   */
  partitionHash: PartitionHash;
}

export const getResolvedPartition = (region: string, { partitionHash }: GetResolvedPartitionOptions) =>
  Object.keys(partitionHash || {}).find((key) => partitionHash[key].regions.includes(region)) ?? "aws";
