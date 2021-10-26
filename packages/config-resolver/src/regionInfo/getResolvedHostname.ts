import { getHostnameTemplate } from "./getHostnameTemplate";

export interface GetResolvedHostnameOptions {
  signingService: string;
  regionHostname?: string;
  partitionHostname?: string;
}

export const getResolvedHostname = (
  resolvedRegion: string,
  { signingService, regionHostname, partitionHostname }: GetResolvedHostnameOptions
) => regionHostname ?? getHostnameTemplate(signingService, { partitionHostname }).replace("{region}", resolvedRegion);
