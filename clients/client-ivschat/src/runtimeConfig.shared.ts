// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { IvschatClientConfig } from "./IvschatClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IvschatClientConfig) => ({
  apiVersion: "2020-07-14",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "ivschat",
  urlParser: config?.urlParser ?? parseUrl,
});
