import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { IoTFleetHubClientConfig } from "./IoTFleetHubClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IoTFleetHubClientConfig) => ({
  apiVersion: "2020-11-03",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "IoTFleetHub",
  urlParser: config?.urlParser ?? parseUrl,
});
