import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { Cloud9ClientConfig } from "./Cloud9Client";

/**
 * @internal
 */
export const getRuntimeConfig = (config: Cloud9ClientConfig) => ({
  apiVersion: "2017-09-23",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Cloud9",
  urlParser: config?.urlParser ?? parseUrl,
});
