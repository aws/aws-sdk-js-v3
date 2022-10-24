// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { RedshiftDataClientConfig } from "./RedshiftDataClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: RedshiftDataClientConfig) => ({
  apiVersion: "2019-12-20",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Redshift Data",
  urlParser: config?.urlParser ?? parseUrl,
});
