import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { CloudFormationClientConfig } from "./CloudFormationClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CloudFormationClientConfig) => ({
  apiVersion: "2010-05-15",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "CloudFormation",
  urlParser: config?.urlParser ?? parseUrl,
});
