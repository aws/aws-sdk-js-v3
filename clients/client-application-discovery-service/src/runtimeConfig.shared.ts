// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { ApplicationDiscoveryServiceClientConfig } from "./ApplicationDiscoveryServiceClient";
import { defaultEndpointResolver } from "./endpoint/endpointResolver";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ApplicationDiscoveryServiceClientConfig) => ({
  apiVersion: "2015-11-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Application Discovery Service",
  urlParser: config?.urlParser ?? parseUrl,
});
