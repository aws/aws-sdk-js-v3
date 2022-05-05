// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { CodeGuruReviewerClientConfig } from "./CodeGuruReviewerClient";
import { defaultRegionInfoProvider } from "./endpoints";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CodeGuruReviewerClientConfig) => ({
  apiVersion: "2019-09-19",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "CodeGuru Reviewer",
  urlParser: config?.urlParser ?? parseUrl,
});
