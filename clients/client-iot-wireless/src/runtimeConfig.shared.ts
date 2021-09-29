import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { IoTWirelessClientConfig } from "./IoTWirelessClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IoTWirelessClientConfig) => ({
  apiVersion: "2020-11-22",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "IoT Wireless",
  urlParser: config?.urlParser ?? parseUrl,
});
