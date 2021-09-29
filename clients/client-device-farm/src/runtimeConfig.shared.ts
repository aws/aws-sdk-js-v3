import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { DeviceFarmClientConfig } from "./DeviceFarmClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: DeviceFarmClientConfig) => ({
  apiVersion: "2015-06-23",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Device Farm",
  urlParser: config?.urlParser ?? parseUrl,
});
