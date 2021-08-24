import { Endpoint, Provider } from "@aws-sdk/types";

import { EndpointsInputConfig, EndpointsResolvedConfig, PreviouslyResolved } from "./configurations";
import { getEndPointFromRegion } from "./getEndPointFromRegion";

export const resolveEndpointsConfig = <T>(
  input: T & EndpointsInputConfig & PreviouslyResolved
): T & EndpointsResolvedConfig => ({
  ...input,
  tls: input.tls ?? true,
  endpoint: input.endpoint ? normalizeEndpoint(input) : () => getEndPointFromRegion(input),
  isCustomEndpoint: input.endpoint ? true : false,
});

const normalizeEndpoint = (input: EndpointsInputConfig & PreviouslyResolved): Provider<Endpoint> => {
  const { endpoint, urlParser } = input;
  if (typeof endpoint === "string") {
    const promisified = Promise.resolve(urlParser(endpoint));
    return () => promisified;
  } else if (typeof endpoint === "object") {
    const promisified = Promise.resolve(endpoint);
    return () => promisified;
  }
  return endpoint!;
};
