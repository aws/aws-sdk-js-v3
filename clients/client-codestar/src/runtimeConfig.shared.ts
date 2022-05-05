// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { CodeStarClientConfig } from "./CodeStarClient";
import { defaultRegionInfoProvider } from "./endpoints";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CodeStarClientConfig) => ({
  apiVersion: "2017-04-19",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "CodeStar",
  urlParser: config?.urlParser ?? parseUrl,
});
