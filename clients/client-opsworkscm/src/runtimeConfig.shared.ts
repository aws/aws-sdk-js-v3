import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { OpsWorksCMClientConfig } from "./OpsWorksCMClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: OpsWorksCMClientConfig) => ({
  apiVersion: "2016-11-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "OpsWorksCM",
  urlParser: config?.urlParser ?? parseUrl,
});
