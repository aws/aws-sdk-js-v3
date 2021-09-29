import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { CodeCommitClientConfig } from "./CodeCommitClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CodeCommitClientConfig) => ({
  apiVersion: "2015-04-13",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "CodeCommit",
  urlParser: config?.urlParser ?? parseUrl,
});
