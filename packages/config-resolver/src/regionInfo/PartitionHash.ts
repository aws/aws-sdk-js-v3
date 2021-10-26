export type PartitionHash = {
  [key: string]: { regions: string[]; regionRegex: string; hostname?: string; endpoint?: string };
};
