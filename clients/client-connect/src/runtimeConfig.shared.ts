import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ConnectClientConfig } from "./ConnectClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ConnectClientConfig) => ({
  apiVersion: "2017-08-08",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Connect",
  urlParser: config?.urlParser ?? parseUrl,
});
