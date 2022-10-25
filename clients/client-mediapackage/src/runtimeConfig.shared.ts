// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { MediaPackageClientConfig } from "./MediaPackageClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MediaPackageClientConfig) => ({
  apiVersion: "2017-10-12",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "MediaPackage",
  urlParser: config?.urlParser ?? parseUrl,
});
