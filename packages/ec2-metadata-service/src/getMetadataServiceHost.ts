import { getEndpoint } from "./getEndpoint";

export const getMetadataServiceHost = (): string => {
  return getEndpoint().IPv4;
};
