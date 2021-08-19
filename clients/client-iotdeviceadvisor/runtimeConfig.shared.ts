import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { IotDeviceAdvisorClientConfig } from "./IotDeviceAdvisorClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IotDeviceAdvisorClientConfig) => ({
  apiVersion: "2020-09-18",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "IotDeviceAdvisor",
  urlParser: config?.urlParser ?? parseUrl,
});
