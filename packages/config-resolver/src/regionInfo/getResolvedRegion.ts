import { PartitionHash } from "./PartitionHash";

export interface GetResolvedPartitionOptions {
  partition: string;
  partitionHash: PartitionHash;
}

export const getResolvedRegion = (region: string, { partition, partitionHash }: GetResolvedPartitionOptions) =>
  partitionHash[partition]?.endpoint ?? region;
