// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { DatabaseMigrationServiceClientConfig } from "./DatabaseMigrationServiceClient";
import { defaultEndpointResolver } from "./endpoint/endpointResolver";

/**
 * @internal
 */
export const getRuntimeConfig = (config: DatabaseMigrationServiceClientConfig) => ({
  apiVersion: "2016-01-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Database Migration Service",
  urlParser: config?.urlParser ?? parseUrl,
});
