// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultRegionInfoProvider } from "./endpoints";
import { RbinClientConfig } from "./RbinClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: RbinClientConfig) => ({
  apiVersion: "2021-06-15",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "rbin",
  urlParser: config?.urlParser ?? parseUrl,
});
