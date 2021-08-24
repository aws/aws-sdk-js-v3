import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { CodeBuildClientConfig } from "./CodeBuildClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CodeBuildClientConfig) => ({
  apiVersion: "2016-10-06",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "CodeBuild",
  urlParser: config?.urlParser ?? parseUrl,
});
