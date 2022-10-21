// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { MigrationHubClientConfig } from "./MigrationHubClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MigrationHubClientConfig) => ({
  apiVersion: "2017-05-31",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Migration Hub",
  urlParser: config?.urlParser ?? parseUrl,
});
