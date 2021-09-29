import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ElasticLoadBalancingClientConfig } from "./ElasticLoadBalancingClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ElasticLoadBalancingClientConfig) => ({
  apiVersion: "2012-06-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Elastic Load Balancing",
  urlParser: config?.urlParser ?? parseUrl,
});
