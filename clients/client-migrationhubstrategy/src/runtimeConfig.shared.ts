// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { MigrationHubStrategyClientConfig } from "./MigrationHubStrategyClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MigrationHubStrategyClientConfig) => ({
  apiVersion: "2020-02-19",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "MigrationHubStrategy",
  urlParser: config?.urlParser ?? parseUrl,
});
