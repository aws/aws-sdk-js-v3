import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { AutoScalingPlansClientConfig } from "./AutoScalingPlansClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: AutoScalingPlansClientConfig) => ({
  apiVersion: "2018-01-06",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Auto Scaling Plans",
  urlParser: config?.urlParser ?? parseUrl,
});
