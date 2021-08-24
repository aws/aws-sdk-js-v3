import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { IoTAnalyticsClientConfig } from "./IoTAnalyticsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IoTAnalyticsClientConfig) => ({
  apiVersion: "2017-11-27",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "IoTAnalytics",
  urlParser: config?.urlParser ?? parseUrl,
});
