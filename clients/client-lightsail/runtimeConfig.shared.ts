import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { LightsailClientConfig } from "./LightsailClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: LightsailClientConfig) => ({
  apiVersion: "2016-11-28",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Lightsail",
  urlParser: config.urlParser ?? parseUrl,
});
