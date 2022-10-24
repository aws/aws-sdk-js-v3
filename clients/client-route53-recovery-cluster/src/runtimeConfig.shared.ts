// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { Route53RecoveryClusterClientConfig } from "./Route53RecoveryClusterClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: Route53RecoveryClusterClientConfig) => ({
  apiVersion: "2019-12-02",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Route53 Recovery Cluster",
  urlParser: config?.urlParser ?? parseUrl,
});
