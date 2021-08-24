import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { CloudWatchClientConfig } from "./CloudWatchClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CloudWatchClientConfig) => ({
  apiVersion: "2010-08-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "CloudWatch",
  urlParser: config?.urlParser ?? parseUrl,
});
