// smithy-typescript generated code
// @ts-ignore: package.json will be imported from dist folders
import packageInfo from "../package.json"; // eslint-disable-line

import { DEFAULT_ACCOUNT_ID_ENDPOINT_MODE } from "@aws-sdk/core/account-id-endpoint";
import { createDefaultUserAgentProvider } from "@aws-sdk/core/client";
import { invalidProvider, loadConfigsForDefaultMode } from "@smithy/core/client";
import {
  DEFAULT_USE_DUALSTACK_ENDPOINT,
  DEFAULT_USE_FIPS_ENDPOINT,
  resolveDefaultsModeConfig,
} from "@smithy/core/config";
import { DEFAULT_MAX_ATTEMPTS, DEFAULT_RETRY_MODE, Retry } from "@smithy/core/retry";
import { calculateBodyLength } from "@smithy/core/serde";
import { FetchHttpHandler as RequestHandler, streamCollector } from "@smithy/fetch-http-handler";

import type { DynamoDBClientConfig } from "./DynamoDBClient";
import { getRuntimeConfig as getSharedRuntimeConfig } from "./runtimeConfig.shared";

/**
 * @internal
 */
export const getRuntimeConfig = (config: DynamoDBClientConfig) => {
  const defaultsMode = resolveDefaultsModeConfig(config);
  const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
  const clientSharedValues = getSharedRuntimeConfig(config);
  return {
    ...clientSharedValues,
    ...config,
    runtime: "browser",
    defaultsMode,
    accountIdEndpointMode: config?.accountIdEndpointMode ?? (() => Promise.resolve(DEFAULT_ACCOUNT_ID_ENDPOINT_MODE)),
    bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
    credentialDefaultProvider: config?.credentialDefaultProvider ?? ((_: unknown) => () => Promise.reject(new Error("Credential is missing"))),
    defaultUserAgentProvider: config?.defaultUserAgentProvider ?? createDefaultUserAgentProvider({serviceId: clientSharedValues.serviceId, clientVersion: packageInfo.version}),
    endpointDiscoveryEnabledProvider: config?.endpointDiscoveryEnabledProvider ?? (() => Promise.resolve(undefined)),
    maxAttempts: config?.maxAttempts ?? (Retry.v2026 ? 4 : DEFAULT_MAX_ATTEMPTS),
    region: config?.region ?? invalidProvider("Region is missing"),
    requestHandler: RequestHandler.create(config?.requestHandler ?? defaultConfigProvider),
    retryMode: config?.retryMode ?? (async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE),
    streamCollector: config?.streamCollector ?? streamCollector,
    useDualstackEndpoint: config?.useDualstackEndpoint ?? (() => Promise.resolve(DEFAULT_USE_DUALSTACK_ENDPOINT)),
    useFipsEndpoint: config?.useFipsEndpoint ?? (() => Promise.resolve(DEFAULT_USE_FIPS_ENDPOINT)),
  };
};
