import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { FMSClientConfig } from "./FMSClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: FMSClientConfig) => ({
  apiVersion: "2018-01-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "FMS",
  urlParser: config?.urlParser ?? parseUrl,
});
