import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { MediaLiveClientConfig } from "./MediaLiveClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MediaLiveClientConfig) => ({
  apiVersion: "2017-10-14",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "MediaLive",
  urlParser: config?.urlParser ?? parseUrl,
});
