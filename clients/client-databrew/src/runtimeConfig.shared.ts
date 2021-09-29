import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { DataBrewClientConfig } from "./DataBrewClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: DataBrewClientConfig) => ({
  apiVersion: "2017-07-25",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "DataBrew",
  urlParser: config?.urlParser ?? parseUrl,
});
