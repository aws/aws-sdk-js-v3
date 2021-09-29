import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { CloudWatchLogsClientConfig } from "./CloudWatchLogsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CloudWatchLogsClientConfig) => ({
  apiVersion: "2014-03-28",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "CloudWatch Logs",
  urlParser: config?.urlParser ?? parseUrl,
});
