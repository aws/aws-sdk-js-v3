import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { MacieClientConfig } from "./MacieClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MacieClientConfig) => ({
  apiVersion: "2017-12-19",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Macie",
  urlParser: config?.urlParser ?? parseUrl,
});
