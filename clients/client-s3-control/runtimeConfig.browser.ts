import packageInfo from "./package.json";

import { Sha256 } from "@aws-crypto/sha256-browser";
import { FetchHttpHandler, streamCollector } from "@aws-sdk/fetch-http-handler";
import { blobHasher as streamHasher } from "@aws-sdk/hash-blob-browser";
import { invalidProvider } from "@aws-sdk/invalid-dependency";
import { Md5 } from "@aws-sdk/md5-js";
import { DEFAULT_MAX_ATTEMPTS, DEFAULT_RETRY_MODE } from "@aws-sdk/middleware-retry";
import { fromBase64, toBase64 } from "@aws-sdk/util-base64-browser";
import { calculateBodyLength } from "@aws-sdk/util-body-length-browser";
import { defaultUserAgent } from "@aws-sdk/util-user-agent-browser";
import { fromUtf8, toUtf8 } from "@aws-sdk/util-utf8-browser";
import { S3ControlClientConfig } from "./S3ControlClient";
import { getRuntimeConfig as getSharedRuntimeConfig } from "./runtimeConfig.shared";

/**
 * @internal
 */
export const getRuntimeConfig = (config: S3ControlClientConfig) => {
  const clientSharedValues = getSharedRuntimeConfig(config);
  return {
    ...clientSharedValues,
    ...config,
    runtime: "browser",
    base64Decoder: config?.base64Decoder ?? fromBase64,
    base64Encoder: config?.base64Encoder ?? toBase64,
    bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
    credentialDefaultProvider:
      config?.credentialDefaultProvider ?? ((_: unknown) => () => Promise.reject(new Error("Credential is missing"))),
    defaultUserAgentProvider:
      config?.defaultUserAgentProvider ??
      defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: packageInfo.version }),
    maxAttempts: config?.maxAttempts ?? DEFAULT_MAX_ATTEMPTS,
    md5: config?.md5 ?? Md5,
    region: config?.region ?? invalidProvider("Region is missing"),
    requestHandler: config?.requestHandler ?? new FetchHttpHandler(),
    retryMode: config?.retryMode ?? (() => Promise.resolve(DEFAULT_RETRY_MODE)),
    sha256: config?.sha256 ?? Sha256,
    streamCollector: config?.streamCollector ?? streamCollector,
    streamHasher: config?.streamHasher ?? streamHasher,
    utf8Decoder: config?.utf8Decoder ?? fromUtf8,
    utf8Encoder: config?.utf8Encoder ?? toUtf8,
  };
};
