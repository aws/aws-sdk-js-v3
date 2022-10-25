// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { SchemasClientConfig } from "./SchemasClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SchemasClientConfig) => ({
  apiVersion: "2019-12-02",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "schemas",
  urlParser: config?.urlParser ?? parseUrl,
});
