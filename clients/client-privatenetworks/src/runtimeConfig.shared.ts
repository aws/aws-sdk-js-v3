// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultRegionInfoProvider } from "./endpoints";
import { PrivateNetworksClientConfig } from "./PrivateNetworksClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: PrivateNetworksClientConfig) => ({
  apiVersion: "2021-12-03",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "PrivateNetworks",
  urlParser: config?.urlParser ?? parseUrl,
});
