import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { TimestreamWriteClientConfig } from "./TimestreamWriteClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: TimestreamWriteClientConfig) => ({
  apiVersion: "2018-11-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Timestream Write",
  urlParser: config?.urlParser ?? parseUrl,
});
