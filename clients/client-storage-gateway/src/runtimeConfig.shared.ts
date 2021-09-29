import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { StorageGatewayClientConfig } from "./StorageGatewayClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: StorageGatewayClientConfig) => ({
  apiVersion: "2013-06-30",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Storage Gateway",
  urlParser: config?.urlParser ?? parseUrl,
});
