import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { NetworkManagerClientConfig } from "./NetworkManagerClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: NetworkManagerClientConfig) => ({
  apiVersion: "2019-07-05",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "NetworkManager",
  urlParser: config?.urlParser ?? parseUrl,
});
