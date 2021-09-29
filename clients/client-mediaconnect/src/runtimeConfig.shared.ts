import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { MediaConnectClientConfig } from "./MediaConnectClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MediaConnectClientConfig) => ({
  apiVersion: "2018-11-14",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "MediaConnect",
  urlParser: config?.urlParser ?? parseUrl,
});
