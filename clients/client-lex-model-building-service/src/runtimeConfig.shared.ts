import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { LexModelBuildingServiceClientConfig } from "./LexModelBuildingServiceClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: LexModelBuildingServiceClientConfig) => ({
  apiVersion: "2017-04-19",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Lex Model Building Service",
  urlParser: config?.urlParser ?? parseUrl,
});
