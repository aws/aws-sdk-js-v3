import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ApplicationInsightsClientConfig } from "./ApplicationInsightsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ApplicationInsightsClientConfig) => ({
  apiVersion: "2018-11-25",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Application Insights",
  urlParser: config?.urlParser ?? parseUrl,
});
