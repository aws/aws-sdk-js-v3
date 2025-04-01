// smithy-typescript generated code
// @ts-ignore: package.json will be imported from dist folders
import packageInfo from "../package.json"; // eslint-disable-line

import { Sha256 } from "@aws-crypto/sha256-browser";
import {
  WebSocketFetchHandlerOptions,
  WebSocketFetchHandler as WebSocketRequestHandler,
  eventStreamPayloadHandlerProvider,
} from "@aws-sdk/middleware-websocket";
import { createDefaultUserAgentProvider } from "@aws-sdk/util-user-agent-browser";
import { DEFAULT_USE_DUALSTACK_ENDPOINT, DEFAULT_USE_FIPS_ENDPOINT } from "@smithy/config-resolver";
import { eventStreamSerdeProvider } from "@smithy/eventstream-serde-browser";
import { FetchHttpHandler as HttpRequestHandler, streamCollector } from "@smithy/fetch-http-handler";
import { invalidProvider } from "@smithy/invalid-dependency";
import { calculateBodyLength } from "@smithy/util-body-length-browser";
import { DEFAULT_MAX_ATTEMPTS, DEFAULT_RETRY_MODE } from "@smithy/util-retry";
import { RekognitionStreamingClientConfig } from "./RekognitionStreamingClient";
import { getRuntimeConfig as getSharedRuntimeConfig } from "./runtimeConfig.shared";
import { loadConfigsForDefaultMode } from "@smithy/smithy-client";
import { resolveDefaultsModeConfig } from "@smithy/util-defaults-mode-browser";

/**
 * @internal
 */
export const getRuntimeConfig = (config: RekognitionStreamingClientConfig) => {
  const defaultsMode = resolveDefaultsModeConfig(config);
  const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
  const clientSharedValues = getSharedRuntimeConfig(config);
  return {
    ...clientSharedValues,
    ...config,
    runtime: "browser",
    defaultsMode,
    bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
    credentialDefaultProvider:
      config?.credentialDefaultProvider ?? ((_: unknown) => () => Promise.reject(new Error("Credential is missing"))),
    defaultUserAgentProvider:
      config?.defaultUserAgentProvider ??
      createDefaultUserAgentProvider({ serviceId: clientSharedValues.serviceId, clientVersion: packageInfo.version }),
    eventStreamPayloadHandlerProvider: config?.eventStreamPayloadHandlerProvider ?? eventStreamPayloadHandlerProvider,
    eventStreamSerdeProvider: config?.eventStreamSerdeProvider ?? eventStreamSerdeProvider,
    maxAttempts: config?.maxAttempts ?? DEFAULT_MAX_ATTEMPTS,
    region: config?.region ?? invalidProvider("Region is missing"),
    requestHandler: WebSocketRequestHandler.create(
      (config?.requestHandler as
        | WebSocketRequestHandler
        | WebSocketFetchHandlerOptions
        | (() => Promise<WebSocketFetchHandlerOptions>)) ?? defaultConfigProvider,
      HttpRequestHandler.create(defaultConfigProvider)
    ),
    retryMode: config?.retryMode ?? (async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE),
    sha256: config?.sha256 ?? Sha256,
    streamCollector: config?.streamCollector ?? streamCollector,
    useDualstackEndpoint: config?.useDualstackEndpoint ?? (() => Promise.resolve(DEFAULT_USE_DUALSTACK_ENDPOINT)),
    useFipsEndpoint: config?.useFipsEndpoint ?? (() => Promise.resolve(DEFAULT_USE_FIPS_ENDPOINT)),
  };
};
