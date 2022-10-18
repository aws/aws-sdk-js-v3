// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { ServiceDiscoveryClientConfig } from "./ServiceDiscoveryClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ServiceDiscoveryClientConfig) => ({
  apiVersion: "2017-03-14",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "ServiceDiscovery",
  urlParser: config?.urlParser ?? parseUrl,
});
