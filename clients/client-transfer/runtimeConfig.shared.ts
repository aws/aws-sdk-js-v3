import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { TransferClientConfig } from "./TransferClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: TransferClientConfig) => ({
  apiVersion: "2018-11-05",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Transfer",
  urlParser: config?.urlParser ?? parseUrl,
});
