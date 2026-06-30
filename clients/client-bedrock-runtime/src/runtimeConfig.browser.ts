// smithy-typescript generated code
// @ts-ignore: package.json will be imported from dist folders
import packageInfo from "../package.json"; // eslint-disable-line

import { createDefaultUserAgentProvider } from "@aws-sdk/core/client";
import {
  eventStreamPayloadHandlerProvider,
  WebSocketFetchHandler as WebSocketRequestHandler,
  WebSocketFetchHandlerOptions,
} from "@aws-sdk/middleware-websocket";
import { invalidProvider, loadConfigsForDefaultMode } from "@smithy/core/client";
import {
  DEFAULT_USE_DUALSTACK_ENDPOINT,
  DEFAULT_USE_FIPS_ENDPOINT,
  resolveDefaultsModeConfig,
} from "@smithy/core/config";
import { eventStreamSerdeProvider } from "@smithy/core/event-streams";
import { DEFAULT_MAX_ATTEMPTS, DEFAULT_RETRY_MODE } from "@smithy/core/retry";
import { calculateBodyLength } from "@smithy/core/serde";
import { FetchHttpHandler as HttpRequestHandler, streamCollector } from "@smithy/fetch-http-handler";

import type { BedrockRuntimeClientConfig } from "./BedrockRuntimeClient";
import { getRuntimeConfig as getSharedRuntimeConfig } from "./runtimeConfig.shared";

/**
 * @internal
 */
export const getRuntimeConfig = (config: BedrockRuntimeClientConfig) => {
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
    eventStreamPayloadHandlerProvider: config?.eventStreamPayloadHandlerProvider ?? eventStreamPayloadHandlerProvider,
    eventStreamSerdeProvider: config?.eventStreamSerdeProvider ?? eventStreamSerdeProvider,
    maxAttempts: config?.maxAttempts ?? DEFAULT_MAX_ATTEMPTS,
    region: config?.region ?? invalidProvider("Region is missing"),
    requestHandler: WebSocketRequestHandler.create(
        config?.requestHandler as
            WebSocketRequestHandler |
            WebSocketFetchHandlerOptions |
            (() => Promise<WebSocketFetchHandlerOptions>)
          ?? defaultConfigProvider,
        HttpRequestHandler.create(defaultConfigProvider)
    )
,
    retryMode: config?.retryMode ?? (async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE),
    streamCollector: config?.streamCollector ?? streamCollector,
    useDualstackEndpoint: config?.useDualstackEndpoint ?? (() => Promise.resolve(DEFAULT_USE_DUALSTACK_ENDPOINT)),
    useFipsEndpoint: config?.useFipsEndpoint ?? (() => Promise.resolve(DEFAULT_USE_FIPS_ENDPOINT)),
  };
};
