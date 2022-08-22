// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultRegionInfoProvider } from "./endpoints";
import { SupportAppClientConfig } from "./SupportAppClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SupportAppClientConfig) => ({
  apiVersion: "2021-08-20",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Support App",
  urlParser: config?.urlParser ?? parseUrl,
});
