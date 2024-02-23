import { getEndpoint } from "./getEndpoint";

// ToDo: this returns a host, should be renamed
export const getMetadataServiceEndpoint = (): string => {
  return getEndpoint().IPv4;
};
