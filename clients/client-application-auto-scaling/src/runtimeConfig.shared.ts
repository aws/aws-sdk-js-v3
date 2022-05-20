// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { ApplicationAutoScalingClientConfig } from "./ApplicationAutoScalingClient";
import { defaultRegionInfoProvider } from "./endpoints";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ApplicationAutoScalingClientConfig) => ({
  apiVersion: "2016-02-06",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Application Auto Scaling",
  urlParser: config?.urlParser ?? parseUrl,
});
