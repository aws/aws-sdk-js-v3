// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { GrafanaClientConfig } from "./GrafanaClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: GrafanaClientConfig) => ({
  apiVersion: "2020-08-18",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "grafana",
  urlParser: config?.urlParser ?? parseUrl,
});
