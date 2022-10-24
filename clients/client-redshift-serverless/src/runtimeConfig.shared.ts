// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { RedshiftServerlessClientConfig } from "./RedshiftServerlessClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: RedshiftServerlessClientConfig) => ({
  apiVersion: "2021-04-21",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Redshift Serverless",
  urlParser: config?.urlParser ?? parseUrl,
});
