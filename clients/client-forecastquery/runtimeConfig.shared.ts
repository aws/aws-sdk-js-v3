import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ForecastqueryClientConfig } from "./ForecastqueryClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ForecastqueryClientConfig) => ({
  apiVersion: "2018-06-26",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "forecastquery",
  urlParser: config?.urlParser ?? parseUrl,
});
