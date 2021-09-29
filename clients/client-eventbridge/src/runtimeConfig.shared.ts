import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { EventBridgeClientConfig } from "./EventBridgeClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: EventBridgeClientConfig) => ({
  apiVersion: "2015-10-07",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "EventBridge",
  urlParser: config?.urlParser ?? parseUrl,
});
