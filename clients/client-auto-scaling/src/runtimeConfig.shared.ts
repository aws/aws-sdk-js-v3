import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { AutoScalingClientConfig } from "./AutoScalingClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: AutoScalingClientConfig) => ({
  apiVersion: "2011-01-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Auto Scaling",
  urlParser: config?.urlParser ?? parseUrl,
});
