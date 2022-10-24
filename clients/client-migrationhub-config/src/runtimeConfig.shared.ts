// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { MigrationHubConfigClientConfig } from "./MigrationHubConfigClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MigrationHubConfigClientConfig) => ({
  apiVersion: "2019-06-30",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "MigrationHub Config",
  urlParser: config?.urlParser ?? parseUrl,
});
