export type PartitionHash = {
  [key: string]: { regions: string[]; hostname?: string; endpoint?: string };
};
