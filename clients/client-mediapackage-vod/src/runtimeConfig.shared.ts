import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { MediaPackageVodClientConfig } from "./MediaPackageVodClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MediaPackageVodClientConfig) => ({
  apiVersion: "2018-11-07",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "MediaPackage Vod",
  urlParser: config?.urlParser ?? parseUrl,
});
