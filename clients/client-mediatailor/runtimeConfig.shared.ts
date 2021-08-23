import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { MediaTailorClientConfig } from "./MediaTailorClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MediaTailorClientConfig) => ({
  apiVersion: "2018-04-23",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "MediaTailor",
  urlParser: config?.urlParser ?? parseUrl,
});
