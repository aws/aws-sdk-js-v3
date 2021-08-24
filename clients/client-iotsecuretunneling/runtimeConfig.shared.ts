import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { IoTSecureTunnelingClientConfig } from "./IoTSecureTunnelingClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IoTSecureTunnelingClientConfig) => ({
  apiVersion: "2018-10-05",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "IoTSecureTunneling",
  urlParser: config?.urlParser ?? parseUrl,
});
