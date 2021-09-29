import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { DataPipelineClientConfig } from "./DataPipelineClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: DataPipelineClientConfig) => ({
  apiVersion: "2012-10-29",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Data Pipeline",
  urlParser: config?.urlParser ?? parseUrl,
});
