import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { XRayClientConfig } from "./XRayClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: XRayClientConfig) => ({
  apiVersion: "2016-04-12",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "XRay",
  urlParser: config?.urlParser ?? parseUrl,
});
