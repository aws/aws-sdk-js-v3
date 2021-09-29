import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { IoT1ClickDevicesServiceClientConfig } from "./IoT1ClickDevicesServiceClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IoT1ClickDevicesServiceClientConfig) => ({
  apiVersion: "2018-05-14",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "IoT 1Click Devices Service",
  urlParser: config?.urlParser ?? parseUrl,
});
