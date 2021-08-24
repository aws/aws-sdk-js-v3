import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { LexRuntimeServiceClientConfig } from "./LexRuntimeServiceClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: LexRuntimeServiceClientConfig) => ({
  apiVersion: "2016-11-28",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Lex Runtime Service",
  urlParser: config?.urlParser ?? parseUrl,
});
