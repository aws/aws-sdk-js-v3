import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { Route53ResolverClientConfig } from "./Route53ResolverClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: Route53ResolverClientConfig) => ({
  apiVersion: "2018-04-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Route53Resolver",
  urlParser: config?.urlParser ?? parseUrl,
});
