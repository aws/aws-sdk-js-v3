// smithy-typescript generated code
import { AwsSdkSigV4Signer } from "@aws-sdk/core/httpAuthSchemes";
import { AwsJson1_0Protocol } from "@aws-sdk/core/protocols";
import { NoOpLogger } from "@smithy/smithy-client";
import type { IdentityProviderConfig } from "@smithy/types";
import { parseUrl } from "@smithy/url-parser";
import { fromBase64, toBase64 } from "@smithy/util-base64";
import { Retry, StandardRetryStrategy } from "@smithy/util-retry";
import { fromUtf8, toUtf8 } from "@smithy/util-utf8";

import { defaultDynamoDBStreamsHttpAuthSchemeProvider } from "./auth/httpAuthSchemeProvider";
import type { DynamoDBStreamsClientConfig } from "./DynamoDBStreamsClient";
import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { errorTypeRegistries } from "./schemas/schemas_0";

/**
 * @internal
 */
export const getRuntimeConfig = (config: DynamoDBStreamsClientConfig) => {
  return {
    apiVersion: "2012-08-10",
    base64Decoder: config?.base64Decoder ?? fromBase64,
    base64Encoder: config?.base64Encoder ?? toBase64,
    disableHostPrefix: config?.disableHostPrefix ?? false,
    endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
    extensions: config?.extensions ?? [],
    httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultDynamoDBStreamsHttpAuthSchemeProvider,
    httpAuthSchemes: config?.httpAuthSchemes ?? [
      {
        schemeId: "aws.auth#sigv4",
        identityProvider: (ipc: IdentityProviderConfig) =>
          ipc.getIdentityProvider("aws.auth#sigv4"),
        signer: new AwsSdkSigV4Signer(),
      },
    ],
    logger: config?.logger ?? new NoOpLogger(),
    protocol: config?.protocol ?? AwsJson1_0Protocol,
    protocolSettings: config?.protocolSettings ?? {
      defaultNamespace: "com.amazonaws.dynamodbstreams",
      errorTypeRegistries,
      xmlNamespace: "http://dynamodb.amazonaws.com/doc/2012-08-10/",
      version: "2012-08-10",
      serviceTarget: "DynamoDBStreams_20120810",
    },
    retryStrategy: config?.retryStrategy ?? (
      config?.maxAttempts == null && config?.retryMode == null && Retry.v2026
        ? new StandardRetryStrategy({
            maxAttempts: 4,
            baseDelay: 25,
          })
        : undefined
    ),
    serviceId: config?.serviceId ?? "DynamoDB Streams",
    urlParser: config?.urlParser ?? parseUrl,
    utf8Decoder: config?.utf8Decoder ?? fromUtf8,
    utf8Encoder: config?.utf8Encoder ?? toUtf8,
  };
};
