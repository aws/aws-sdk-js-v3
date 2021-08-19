import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { CloudHSMClientConfig } from "./CloudHSMClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CloudHSMClientConfig) => ({
  apiVersion: "2014-05-30",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "CloudHSM",
  urlParser: config?.urlParser ?? parseUrl,
});
