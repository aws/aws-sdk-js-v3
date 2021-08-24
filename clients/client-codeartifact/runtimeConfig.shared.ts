import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { CodeartifactClientConfig } from "./CodeartifactClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CodeartifactClientConfig) => ({
  apiVersion: "2018-09-22",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "codeartifact",
  urlParser: config?.urlParser ?? parseUrl,
});
