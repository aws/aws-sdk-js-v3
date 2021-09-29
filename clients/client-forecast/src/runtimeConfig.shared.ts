import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ForecastClientConfig } from "./ForecastClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ForecastClientConfig) => ({
  apiVersion: "2018-06-26",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "forecast",
  urlParser: config?.urlParser ?? parseUrl,
});
