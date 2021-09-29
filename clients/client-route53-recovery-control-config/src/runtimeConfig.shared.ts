import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { Route53RecoveryControlConfigClientConfig } from "./Route53RecoveryControlConfigClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: Route53RecoveryControlConfigClientConfig) => ({
  apiVersion: "2020-11-02",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Route53 Recovery Control Config",
  urlParser: config?.urlParser ?? parseUrl,
});
