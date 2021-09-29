import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { EBSClientConfig } from "./EBSClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: EBSClientConfig) => ({
  apiVersion: "2019-11-02",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "EBS",
  urlParser: config?.urlParser ?? parseUrl,
});
