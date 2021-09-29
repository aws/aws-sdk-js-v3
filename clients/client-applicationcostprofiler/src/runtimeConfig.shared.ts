import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ApplicationCostProfilerClientConfig } from "./ApplicationCostProfilerClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ApplicationCostProfilerClientConfig) => ({
  apiVersion: "2020-09-10",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "ApplicationCostProfiler",
  urlParser: config?.urlParser ?? parseUrl,
});
