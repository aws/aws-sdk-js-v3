import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { IvsClientConfig } from "./IvsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IvsClientConfig) => ({
  apiVersion: "2020-07-14",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "ivs",
  urlParser: config?.urlParser ?? parseUrl,
});
