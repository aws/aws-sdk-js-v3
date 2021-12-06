import { PartitionHash } from "./PartitionHash";

export interface GetResolvedPartitionOptions {
  partitionHash: PartitionHash;
}

export const getResolvedPartition = (region: string, { partitionHash }: GetResolvedPartitionOptions) =>
  Object.keys(partitionHash || {}).find((key) => partitionHash[key].regions.includes(region)) ?? "aws";
