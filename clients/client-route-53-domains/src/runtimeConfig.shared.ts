import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { Route53DomainsClientConfig } from "./Route53DomainsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: Route53DomainsClientConfig) => ({
  apiVersion: "2014-05-15",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Route 53 Domains",
  urlParser: config?.urlParser ?? parseUrl,
});
