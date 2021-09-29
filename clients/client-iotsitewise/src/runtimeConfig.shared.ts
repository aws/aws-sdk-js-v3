import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { IoTSiteWiseClientConfig } from "./IoTSiteWiseClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IoTSiteWiseClientConfig) => ({
  apiVersion: "2019-12-02",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "IoTSiteWise",
  urlParser: config?.urlParser ?? parseUrl,
});
