// smithy-typescript generated code
// @ts-ignore: package.json will be imported from dist folders
import packageInfo from "../package.json"; // eslint-disable-line

import { NODE_SIGV4A_CONFIG_OPTIONS, emitWarningIfUnsupportedVersion as awsCheckVersion } from "@aws-sdk/core";
import { defaultProvider as credentialDefaultProvider } from "@aws-sdk/credential-provider-node";
import { NODE_USE_ARN_REGION_CONFIG_OPTIONS } from "@aws-sdk/middleware-bucket-endpoint";
import {
  NODE_REQUEST_CHECKSUM_CALCULATION_CONFIG_OPTIONS,
  NODE_RESPONSE_CHECKSUM_VALIDATION_CONFIG_OPTIONS,
} from "@aws-sdk/middleware-flexible-checksums";
import { NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_OPTIONS } from "@aws-sdk/middleware-sdk-s3";
import { ChecksumConstructor as __ChecksumConstructor, HashConstructor as __HashConstructor } from "@aws-sdk/types";
import { NODE_APP_ID_CONFIG_OPTIONS, createDefaultUserAgentProvider } from "@aws-sdk/util-user-agent-node";
import {
  NODE_REGION_CONFIG_FILE_OPTIONS,
  NODE_REGION_CONFIG_OPTIONS,
  NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS,
  NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS,
} from "@smithy/config-resolver";
import { eventStreamSerdeProvider } from "@smithy/eventstream-serde-node";
import { Hash } from "@smithy/hash-node";
import { readableStreamHasher as streamHasher } from "@smithy/hash-stream-node";
import { NODE_MAX_ATTEMPT_CONFIG_OPTIONS, NODE_RETRY_MODE_CONFIG_OPTIONS } from "@smithy/middleware-retry";
import { loadConfig as loadNodeConfig } from "@smithy/node-config-provider";
import { NodeHttpHandler as RequestHandler, streamCollector } from "@smithy/node-http-handler";
import { calculateBodyLength } from "@smithy/util-body-length-node";
import { DEFAULT_RETRY_MODE } from "@smithy/util-retry";
import { S3ClientConfig } from "./S3Client";
import { getRuntimeConfig as getSharedRuntimeConfig } from "./runtimeConfig.shared";
import { loadConfigsForDefaultMode } from "@smithy/smithy-client";
import { resolveDefaultsModeConfig } from "@smithy/util-defaults-mode-node";
import { emitWarningIfUnsupportedVersion } from "@smithy/smithy-client";

/**
 * @internal
 */
export const getRuntimeConfig = (config: S3ClientConfig) => {
  emitWarningIfUnsupportedVersion(process.version);
  const defaultsMode = resolveDefaultsModeConfig(config);
  const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
  const clientSharedValues = getSharedRuntimeConfig(config);
  awsCheckVersion(process.version);
  return {
    ...clientSharedValues,
    ...config,
    runtime: "node",
    defaultsMode,
    bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
    credentialDefaultProvider: config?.credentialDefaultProvider ?? credentialDefaultProvider,
    defaultUserAgentProvider:
      config?.defaultUserAgentProvider ??
      createDefaultUserAgentProvider({ serviceId: clientSharedValues.serviceId, clientVersion: packageInfo.version }),
    disableS3ExpressSessionAuth:
      config?.disableS3ExpressSessionAuth ?? loadNodeConfig(NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_OPTIONS),
    eventStreamSerdeProvider: config?.eventStreamSerdeProvider ?? eventStreamSerdeProvider,
    maxAttempts: config?.maxAttempts ?? loadNodeConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
    md5: config?.md5 ?? Hash.bind(null, "md5"),
    region: config?.region ?? loadNodeConfig(NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS),
    requestChecksumCalculation:
      config?.requestChecksumCalculation ?? loadNodeConfig(NODE_REQUEST_CHECKSUM_CALCULATION_CONFIG_OPTIONS),
    requestHandler: RequestHandler.create(config?.requestHandler ?? defaultConfigProvider),
    responseChecksumValidation:
      config?.responseChecksumValidation ?? loadNodeConfig(NODE_RESPONSE_CHECKSUM_VALIDATION_CONFIG_OPTIONS),
    retryMode:
      config?.retryMode ??
      loadNodeConfig({
        ...NODE_RETRY_MODE_CONFIG_OPTIONS,
        default: async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE,
      }),
    sha1: config?.sha1 ?? Hash.bind(null, "sha1"),
    sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
    sigv4aSigningRegionSet: config?.sigv4aSigningRegionSet ?? loadNodeConfig(NODE_SIGV4A_CONFIG_OPTIONS),
    streamCollector: config?.streamCollector ?? streamCollector,
    streamHasher: config?.streamHasher ?? streamHasher,
    useArnRegion: config?.useArnRegion ?? loadNodeConfig(NODE_USE_ARN_REGION_CONFIG_OPTIONS),
    useDualstackEndpoint: config?.useDualstackEndpoint ?? loadNodeConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
    useFipsEndpoint: config?.useFipsEndpoint ?? loadNodeConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS),
    userAgentAppId: config?.userAgentAppId ?? loadNodeConfig(NODE_APP_ID_CONFIG_OPTIONS),
  };
};
