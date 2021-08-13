import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ChimeSDKMessagingClientConfig } from "./ChimeSDKMessagingClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ChimeSDKMessagingClientConfig = {}) => ({
  apiVersion: "2021-05-15",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Chime SDK Messaging",
  urlParser: config.urlParser ?? parseUrl,
});
