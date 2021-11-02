import { EndpointVariant } from "./EndpointVariant";
import { getHostnameTemplate } from "./getHostnameTemplate";

export interface GetResolvedHostnameOptions {
  isFipsEndpoint: boolean;
  isDualstackEndpoint: boolean;
  signingService: string;
  regionVariants: EndpointVariant[];
  partitionVariants: EndpointVariant[];
}

export const getResolvedHostname = (
  resolvedRegion: string,
  { signingService, regionVariants, partitionVariants }: GetResolvedHostnameOptions
) => regionHostname ?? getHostnameTemplate(signingService, { partitionVariants }).replace("{region}", resolvedRegion);
