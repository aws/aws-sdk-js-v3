import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { IoTJobsDataPlaneClientConfig } from "./IoTJobsDataPlaneClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IoTJobsDataPlaneClientConfig) => ({
  apiVersion: "2017-09-29",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "IoT Jobs Data Plane",
  urlParser: config?.urlParser ?? parseUrl,
});
