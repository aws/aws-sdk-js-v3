// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { TextractClientConfig } from "./TextractClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: TextractClientConfig) => ({
  apiVersion: "2018-06-27",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Textract",
  urlParser: config?.urlParser ?? parseUrl,
});
