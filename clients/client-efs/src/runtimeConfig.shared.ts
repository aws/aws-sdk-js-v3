import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { EFSClientConfig } from "./EFSClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: EFSClientConfig) => ({
  apiVersion: "2015-02-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "EFS",
  urlParser: config?.urlParser ?? parseUrl,
});
