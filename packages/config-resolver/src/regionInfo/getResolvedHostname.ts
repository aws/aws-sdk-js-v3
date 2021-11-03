export interface GetResolvedHostnameOptions {
  regionHostname?: string;
  partitionHostname?: string;
}

export const getResolvedHostname = (
  resolvedRegion: string,
  { regionHostname, partitionHostname }: GetResolvedHostnameOptions
): string | undefined =>
  regionHostname
    ? regionHostname
    : partitionHostname
    ? partitionHostname.replace("{region}", resolvedRegion)
    : undefined;
