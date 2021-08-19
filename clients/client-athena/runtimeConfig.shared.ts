import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { AthenaClientConfig } from "./AthenaClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: AthenaClientConfig) => ({
  apiVersion: "2017-05-18",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Athena",
  urlParser: config?.urlParser ?? parseUrl,
});
