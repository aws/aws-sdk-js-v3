import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { IoTEventsDataClientConfig } from "./IoTEventsDataClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IoTEventsDataClientConfig) => ({
  apiVersion: "2018-10-23",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "IoT Events Data",
  urlParser: config?.urlParser ?? parseUrl,
});
