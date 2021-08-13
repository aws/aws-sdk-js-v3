import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { SnowDeviceManagementClientConfig } from "./SnowDeviceManagementClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SnowDeviceManagementClientConfig = {}) => ({
  apiVersion: "2021-08-04",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Snow Device Management",
  urlParser: config.urlParser ?? parseUrl,
});
