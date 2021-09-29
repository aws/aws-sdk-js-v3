import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { GroundStationClientConfig } from "./GroundStationClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: GroundStationClientConfig) => ({
  apiVersion: "2019-05-23",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "GroundStation",
  urlParser: config?.urlParser ?? parseUrl,
});
