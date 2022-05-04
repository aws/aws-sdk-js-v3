// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultRegionInfoProvider } from "./endpoints";
import { KeyspacesClientConfig } from "./KeyspacesClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: KeyspacesClientConfig) => ({
  apiVersion: "2022-02-10",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Keyspaces",
  urlParser: config?.urlParser ?? parseUrl,
});
