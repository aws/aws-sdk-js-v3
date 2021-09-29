import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { IoTThingsGraphClientConfig } from "./IoTThingsGraphClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IoTThingsGraphClientConfig) => ({
  apiVersion: "2018-09-06",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "IoTThingsGraph",
  urlParser: config?.urlParser ?? parseUrl,
});
