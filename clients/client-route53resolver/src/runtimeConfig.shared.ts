// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { Route53ResolverClientConfig } from "./Route53ResolverClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: Route53ResolverClientConfig) => ({
  apiVersion: "2018-04-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Route53Resolver",
  urlParser: config?.urlParser ?? parseUrl,
});
