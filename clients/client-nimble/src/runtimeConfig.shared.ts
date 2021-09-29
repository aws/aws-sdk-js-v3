import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { NimbleClientConfig } from "./NimbleClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: NimbleClientConfig) => ({
  apiVersion: "2020-08-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "nimble",
  urlParser: config?.urlParser ?? parseUrl,
});
