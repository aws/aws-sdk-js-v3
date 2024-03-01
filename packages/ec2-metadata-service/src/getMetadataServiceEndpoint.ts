import { getEndpoint } from "./getEndpoint";
import { MetadataServiceOptions } from "./MetadataServiceOptions";

export const getMetadataServiceEndpoint = (options?: MetadataServiceOptions): string => {
  if (options.endpoint) {
    return options.endpoint;
  }
  return getEndpoint().IPv4;
};
