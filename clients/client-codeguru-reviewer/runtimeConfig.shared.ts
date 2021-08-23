import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { CodeGuruReviewerClientConfig } from "./CodeGuruReviewerClient";

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
