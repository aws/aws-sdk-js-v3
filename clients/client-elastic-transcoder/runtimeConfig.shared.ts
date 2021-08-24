import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ElasticTranscoderClientConfig } from "./ElasticTranscoderClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ElasticTranscoderClientConfig) => ({
  apiVersion: "2012-09-25",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Elastic Transcoder",
  urlParser: config?.urlParser ?? parseUrl,
});
