import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { WellArchitectedClientConfig } from "./WellArchitectedClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WellArchitectedClientConfig) => ({
  apiVersion: "2020-03-31",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "WellArchitected",
  urlParser: config.urlParser ?? parseUrl,
});
