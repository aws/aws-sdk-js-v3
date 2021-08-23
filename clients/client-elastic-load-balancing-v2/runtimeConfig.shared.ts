import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ElasticLoadBalancingV2ClientConfig } from "./ElasticLoadBalancingV2Client";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ElasticLoadBalancingV2ClientConfig) => ({
  apiVersion: "2015-12-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Elastic Load Balancing v2",
  urlParser: config?.urlParser ?? parseUrl,
});
