// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { ElasticLoadBalancingClientConfig } from "./ElasticLoadBalancingClient";
import { defaultEndpointResolver } from "./endpoint/endpointResolver";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ElasticLoadBalancingClientConfig) => ({
  apiVersion: "2012-06-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Elastic Load Balancing",
  urlParser: config?.urlParser ?? parseUrl,
});
