import { EndpointsInputConfig, EndpointsResolvedConfig, PreviouslyResolved } from "./configurations";
import { getEndpointFromRegion } from "./getEndpointFromRegion";
import { normalizeEndpoint } from "./normalizeEndpoint";

export const resolveEndpointsConfig = <T>(
  input: T & EndpointsInputConfig & PreviouslyResolved
): T & EndpointsResolvedConfig => ({
  ...input,
  tls: input.tls ?? true,
  endpoint: input.endpoint ? normalizeEndpoint(input) : () => getEndpointFromRegion(input),
  isCustomEndpoint: input.endpoint ? true : false,
});
