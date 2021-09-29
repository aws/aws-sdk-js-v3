import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { SnowballClientConfig } from "./SnowballClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SnowballClientConfig) => ({
  apiVersion: "2016-06-30",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Snowball",
  urlParser: config?.urlParser ?? parseUrl,
});
