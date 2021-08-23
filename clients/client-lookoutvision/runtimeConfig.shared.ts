import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { LookoutVisionClientConfig } from "./LookoutVisionClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: LookoutVisionClientConfig) => ({
  apiVersion: "2020-11-20",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "LookoutVision",
  urlParser: config?.urlParser ?? parseUrl,
});
