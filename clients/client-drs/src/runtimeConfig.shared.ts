// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { DrsClientConfig } from "./DrsClient";
import { defaultRegionInfoProvider } from "./endpoints";

/**
 * @internal
 */
export const getRuntimeConfig = (config: DrsClientConfig) => ({
  apiVersion: "2020-02-26",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "drs",
  urlParser: config?.urlParser ?? parseUrl,
});
