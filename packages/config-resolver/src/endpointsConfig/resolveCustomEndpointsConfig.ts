import { Endpoint, Provider, UrlParser } from "@aws-sdk/types";

import { EndpointsInputConfig, EndpointsResolvedConfig } from "./resolveEndpointsConfig";
import { normalizeEndpoint } from "./utils/normalizeEndpoint";

export interface CustomEndpointsInputConfig extends EndpointsInputConfig {
  /**
   * The fully qualified endpoint of the webservice.
   */
  endpoint: string | Endpoint | Provider<Endpoint>;
}

interface PreviouslyResolved {
  urlParser: UrlParser;
}

export interface CustomEndpointsResolvedConfig extends EndpointsResolvedConfig {
  /**
   * Whether the endpoint is specified by caller.
   * @internal
   */
  isCustomEndpoint: true;
}

export const resolveCustomEndpointsConfig = <T>(
  input: T & CustomEndpointsInputConfig & PreviouslyResolved
): T & CustomEndpointsResolvedConfig => ({
  ...input,
  tls: input.tls ?? true,
  endpoint: normalizeEndpoint(input),
  isCustomEndpoint: true,
});
