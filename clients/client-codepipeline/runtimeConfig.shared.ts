import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { CodePipelineClientConfig } from "./CodePipelineClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CodePipelineClientConfig) => ({
  apiVersion: "2015-07-09",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "CodePipeline",
  urlParser: config?.urlParser ?? parseUrl,
});
