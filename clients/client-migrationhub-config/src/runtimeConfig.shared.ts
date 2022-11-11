// smithy-typescript generated code
import { NoOpLogger } from "@aws-sdk/smithy-client";
import { parseUrl } from "@aws-sdk/url-parser";
import { fromBase64, toBase64 } from "@aws-sdk/util-base64";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { MigrationHubConfigClientConfig } from "./MigrationHubConfigClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MigrationHubConfigClientConfig) => ({
  apiVersion: "2019-06-30",
  base64Decoder: config?.base64Decoder ?? fromBase64,
  base64Encoder: config?.base64Encoder ?? toBase64,
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? new NoOpLogger(),
  serviceId: config?.serviceId ?? "MigrationHub Config",
  urlParser: config?.urlParser ?? parseUrl,
});
