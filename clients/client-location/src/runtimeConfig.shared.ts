import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { LocationClientConfig } from "./LocationClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: LocationClientConfig) => ({
  apiVersion: "2020-11-19",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Location",
  urlParser: config?.urlParser ?? parseUrl,
});
