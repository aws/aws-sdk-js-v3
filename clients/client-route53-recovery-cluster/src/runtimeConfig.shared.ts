import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { Route53RecoveryClusterClientConfig } from "./Route53RecoveryClusterClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: Route53RecoveryClusterClientConfig) => ({
  apiVersion: "2019-12-02",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Route53 Recovery Cluster",
  urlParser: config?.urlParser ?? parseUrl,
});
