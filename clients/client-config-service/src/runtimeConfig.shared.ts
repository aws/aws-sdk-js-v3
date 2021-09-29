import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ConfigServiceClientConfig } from "./ConfigServiceClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ConfigServiceClientConfig) => ({
  apiVersion: "2014-11-12",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Config Service",
  urlParser: config?.urlParser ?? parseUrl,
});
