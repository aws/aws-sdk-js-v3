// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultRegionInfoProvider } from "./endpoints";
import { GrafanaClientConfig } from "./GrafanaClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: GrafanaClientConfig) => ({
  apiVersion: "2020-08-18",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "grafana",
  urlParser: config?.urlParser ?? parseUrl,
});
