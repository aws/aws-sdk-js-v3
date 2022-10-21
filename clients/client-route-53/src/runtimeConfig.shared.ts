// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { Route53ClientConfig } from "./Route53Client";

/**
 * @internal
 */
export const getRuntimeConfig = (config: Route53ClientConfig) => ({
  apiVersion: "2013-04-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Route 53",
  urlParser: config?.urlParser ?? parseUrl,
});
