// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultRegionInfoProvider } from "./endpoints";
import { RedshiftServerlessClientConfig } from "./RedshiftServerlessClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: RedshiftServerlessClientConfig) => ({
  apiVersion: "2021-04-21",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "RedshiftServerless",
  urlParser: config?.urlParser ?? parseUrl,
});
