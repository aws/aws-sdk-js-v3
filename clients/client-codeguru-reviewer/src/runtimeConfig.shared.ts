// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { CodeGuruReviewerClientConfig } from "./CodeGuruReviewerClient";
import { defaultEndpointResolver } from "./endpoint/endpointResolver";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CodeGuruReviewerClientConfig) => ({
  apiVersion: "2019-09-19",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "CodeGuru Reviewer",
  urlParser: config?.urlParser ?? parseUrl,
});
