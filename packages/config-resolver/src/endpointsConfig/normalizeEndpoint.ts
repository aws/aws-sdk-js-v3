import { Endpoint, Provider } from "@aws-sdk/types";

import { EndpointsInputConfig, PreviouslyResolved } from "./configurations";

export const normalizeEndpoint = ({
  endpoint,
  urlParser,
}: EndpointsInputConfig & PreviouslyResolved): Provider<Endpoint> => {
  if (typeof endpoint === "string") {
    const promisified = Promise.resolve(urlParser(endpoint));
    return () => promisified;
  } else if (typeof endpoint === "object") {
    const promisified = Promise.resolve(endpoint);
    return () => promisified;
  }
  return endpoint!;
};
