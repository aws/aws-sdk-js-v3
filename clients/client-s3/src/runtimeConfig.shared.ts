// smithy-typescript generated code
import { SignatureV4MultiRegion } from "@aws-sdk/signature-v4-multi-region";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultRegionInfoProvider } from "./endpoints";
import { S3ClientConfig } from "./S3Client";

/**
 * @internal
 */
export const getRuntimeConfig = (config: S3ClientConfig) => ({
  apiVersion: "2006-03-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "S3",
  signerConstructor: config?.signerConstructor ?? SignatureV4MultiRegion,
  signingEscapePath: config?.signingEscapePath ?? false,
  urlParser: config?.urlParser ?? parseUrl,
  useArnRegion: config?.useArnRegion ?? false,
});
