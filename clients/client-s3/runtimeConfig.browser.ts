import packageInfo from "./package.json";

import { Sha256 } from "@aws-crypto/sha256-browser";
import { eventStreamSerdeProvider } from "@aws-sdk/eventstream-serde-browser";
import { FetchHttpHandler, streamCollector } from "@aws-sdk/fetch-http-handler";
import { blobHasher as streamHasher } from "@aws-sdk/hash-blob-browser";
import { invalidProvider } from "@aws-sdk/invalid-dependency";
import { Md5 } from "@aws-sdk/md5-js";
import { DEFAULT_MAX_ATTEMPTS, DEFAULT_RETRY_MODE } from "@aws-sdk/middleware-retry";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { fromBase64, toBase64 } from "@aws-sdk/util-base64-browser";
import { calculateBodyLength } from "@aws-sdk/util-body-length-browser";
import { defaultUserAgent } from "@aws-sdk/util-user-agent-browser";
import { fromUtf8, toUtf8 } from "@aws-sdk/util-utf8-browser";
import { S3ClientConfig } from "./S3Client";
import { getRuntimeConfig as getSharedRuntimeConfig } from "./runtimeConfig.shared";

/**
 * @internal
 */
export const getRuntimeConfig = (config: S3ClientConfig) => {
  const clientSharedValues = getSharedRuntimeConfig(config);
  return {
    ...clientSharedValues,
    runtime: "browser",
    base64Decoder: coalesce(config.base64Decoder, fromBase64),
    base64Encoder: coalesce(config.base64Encoder, toBase64),
    bodyLengthChecker: coalesce(config.bodyLengthChecker, calculateBodyLength),
    credentialDefaultProvider: coalesce(
      config.credentialDefaultProvider,
      (_: unknown) => () => Promise.reject(new Error("Credential is missing"))
    ),
    defaultUserAgentProvider: coalesce(
      config.defaultUserAgentProvider,
      defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: packageInfo.version })
    ),
    eventStreamSerdeProvider: coalesce(config.eventStreamSerdeProvider, eventStreamSerdeProvider),
    maxAttempts: coalesce(config.maxAttempts, DEFAULT_MAX_ATTEMPTS),
    md5: coalesce(config.md5, Md5),
    region: coalesce(config.region, invalidProvider("Region is missing")),
    requestHandler: coalesce(config.requestHandler, new FetchHttpHandler()),
    retryModeProvider: coalesce(config.retryModeProvider, () => Promise.resolve(DEFAULT_RETRY_MODE)),
    sha256: coalesce(config.sha256, Sha256),
    streamCollector: coalesce(config.streamCollector, streamCollector),
    streamHasher: coalesce(config.streamHasher, streamHasher),
    utf8Decoder: coalesce(config.utf8Decoder, fromUtf8),
    utf8Encoder: coalesce(config.utf8Encoder, toUtf8),
  };
};
