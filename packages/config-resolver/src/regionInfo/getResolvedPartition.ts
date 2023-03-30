import { PartitionHash } from "./PartitionHash";

/**
 * @internal
 */
export interface GetResolvedPartitionOptions {
  partitionHash: PartitionHash;
}

/**
 * @internal
 */
export const getResolvedPartition = (region: string, { partitionHash }: GetResolvedPartitionOptions) =>
  Object.keys(partitionHash || {}).find((key) => partitionHash[key].regions.includes(region)) ?? "aws";
