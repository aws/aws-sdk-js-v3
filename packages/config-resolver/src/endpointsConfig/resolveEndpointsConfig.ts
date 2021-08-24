import { EndpointsInputConfig, EndpointsResolvedConfig, PreviouslyResolved } from "./configurations";
import { getEndPointFromRegion } from "./getEndPointFromRegion";
import { normalizeEndpoint } from "./normalizeEndpoint";

export const resolveEndpointsConfig = <T>(
  input: T & EndpointsInputConfig & PreviouslyResolved
): T & EndpointsResolvedConfig => ({
  ...input,
  tls: input.tls ?? true,
  endpoint: input.endpoint ? normalizeEndpoint(input) : () => getEndPointFromRegion(input),
  isCustomEndpoint: input.endpoint ? true : false,
});
