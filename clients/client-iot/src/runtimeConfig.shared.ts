import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { IoTClientConfig } from "./IoTClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IoTClientConfig) => ({
  apiVersion: "2015-05-28",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "IoT",
  urlParser: config?.urlParser ?? parseUrl,
});
