import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { CodeDeployClientConfig } from "./CodeDeployClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CodeDeployClientConfig) => ({
  apiVersion: "2014-10-06",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "CodeDeploy",
  urlParser: config?.urlParser ?? parseUrl,
});
