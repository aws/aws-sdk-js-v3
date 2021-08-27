import { Endpoint, Provider, UrlParser } from "@aws-sdk/types";

interface NormalizeEndpointOptions {
  endpoint: string | Endpoint | Provider<Endpoint>;
  urlParser: UrlParser;
}

export const normalizeEndpoint = ({ endpoint, urlParser }: NormalizeEndpointOptions): Provider<Endpoint> => {
  if (typeof endpoint === "string") {
    const promisified = Promise.resolve(urlParser(endpoint));
    return () => promisified;
  } else if (typeof endpoint === "object") {
    const promisified = Promise.resolve(endpoint);
    return () => promisified;
  }
  return endpoint;
};
