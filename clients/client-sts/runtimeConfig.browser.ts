import packageInfo from "./package.json";

import { Sha256 } from "@aws-crypto/sha256-browser";
import { FetchHttpHandler, streamCollector } from "@aws-sdk/fetch-http-handler";
import { invalidProvider } from "@aws-sdk/invalid-dependency";
import { DEFAULT_MAX_ATTEMPTS, DEFAULT_RETRY_MODE } from "@aws-sdk/middleware-retry";
import { fromBase64, toBase64 } from "@aws-sdk/util-base64-browser";
import { calculateBodyLength } from "@aws-sdk/util-body-length-browser";
import { defaultUserAgent } from "@aws-sdk/util-user-agent-browser";
import { fromUtf8, toUtf8 } from "@aws-sdk/util-utf8-browser";
import { STSClientConfig } from "./STSClient";
import { getRuntimeConfig as getSharedRuntimeConfig } from "./runtimeConfig.shared";

/**
 * @internal
 */
export const getRuntimeConfig = (config: STSClientConfig) => {
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
    region: config?.region ?? invalidProvider("Region is missing"),
    requestHandler: config?.requestHandler ?? new FetchHttpHandler(),
    retryMode: config?.retryMode ?? (() => Promise.resolve(DEFAULT_RETRY_MODE)),
    sha256: config?.sha256 ?? Sha256,
    streamCollector: config?.streamCollector ?? streamCollector,
    utf8Decoder: config?.utf8Decoder ?? fromUtf8,
    utf8Encoder: config?.utf8Encoder ?? toUtf8,
  };
};
