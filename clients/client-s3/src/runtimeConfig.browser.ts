// smithy-typescript generated code
// @ts-ignore: package.json will be imported from dist folders
import packageInfo from "../package.json"; // eslint-disable-line

import { Sha1 } from "@aws-crypto/sha1-browser";
import { Sha256 } from "@aws-crypto/sha256-browser";
import { createDefaultUserAgentProvider } from "@aws-sdk/core/client";
import { blobHasher as streamHasher, Md5 } from "@smithy/core/checksum";
import { invalidProvider, loadConfigsForDefaultMode } from "@smithy/core/client";
import {
  DEFAULT_USE_DUALSTACK_ENDPOINT,
  DEFAULT_USE_FIPS_ENDPOINT,
  resolveDefaultsModeConfig,
} from "@smithy/core/config";
import { eventStreamSerdeProvider } from "@smithy/core/event-streams";
import { DEFAULT_MAX_ATTEMPTS, DEFAULT_RETRY_MODE } from "@smithy/core/retry";
import { calculateBodyLength } from "@smithy/core/serde";
import { FetchHttpHandler as RequestHandler, streamCollector } from "@smithy/fetch-http-handler";

import { getRuntimeConfig as getSharedRuntimeConfig } from "./runtimeConfig.shared";
import type { S3ClientConfig } from "./S3Client";

/**
 * @internal
 */
export const getRuntimeConfig = (config: S3ClientConfig) => {
  const defaultsMode = resolveDefaultsModeConfig(config);
  const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
  const clientSharedValues = getSharedRuntimeConfig(config);
  return {
    ...clientSharedValues,
    ...config,
    runtime: "browser",
    defaultsMode,
    bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
    credentialDefaultProvider: config?.credentialDefaultProvider ?? ((_: unknown) => () => Promise.reject(new Error("Credential is missing"))),
    defaultUserAgentProvider: config?.defaultUserAgentProvider ?? createDefaultUserAgentProvider({serviceId: clientSharedValues.serviceId, clientVersion: packageInfo.version}),
    eventStreamSerdeProvider: config?.eventStreamSerdeProvider ?? eventStreamSerdeProvider,
    maxAttempts: config?.maxAttempts ?? DEFAULT_MAX_ATTEMPTS,
    md5: config?.md5 ?? Md5,
    region: config?.region ?? invalidProvider("Region is missing"),
    requestHandler: RequestHandler.create(config?.requestHandler ?? defaultConfigProvider),
    retryMode: config?.retryMode ?? (async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE),
    sha1: config?.sha1 ?? Sha1,
    sha256: config?.sha256 ?? Sha256,
    streamCollector: config?.streamCollector ?? streamCollector,
    streamHasher: config?.streamHasher ?? streamHasher,
    useDualstackEndpoint: config?.useDualstackEndpoint ?? (() => Promise.resolve(DEFAULT_USE_DUALSTACK_ENDPOINT)),
    useFipsEndpoint: config?.useFipsEndpoint ?? (() => Promise.resolve(DEFAULT_USE_FIPS_ENDPOINT)),
  };
};
