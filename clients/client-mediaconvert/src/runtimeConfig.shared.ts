import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { MediaConvertClientConfig } from "./MediaConvertClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MediaConvertClientConfig) => ({
  apiVersion: "2017-08-29",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "MediaConvert",
  urlParser: config?.urlParser ?? parseUrl,
});
