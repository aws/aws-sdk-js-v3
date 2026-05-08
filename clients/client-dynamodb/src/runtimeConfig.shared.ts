// smithy-typescript generated code
import { AwsSdkSigV4Signer } from "@aws-sdk/core/httpAuthSchemes";
import { AwsJson1_0Protocol } from "@aws-sdk/core/protocols";
import { DynamoDBJsonCodec } from "@aws-sdk/dynamodb-codec";
import { NoOpLogger } from "@smithy/core/client";
import { parseUrl } from "@smithy/core/protocols";
import { Retry, StandardRetryStrategy } from "@smithy/core/retry";
import { fromBase64, fromUtf8, toBase64, toUtf8 } from "@smithy/core/serde";
import type { IdentityProviderConfig } from "@smithy/types";

import { defaultDynamoDBHttpAuthSchemeProvider } from "./auth/httpAuthSchemeProvider";
import type { DynamoDBClientConfig } from "./DynamoDBClient";
import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { errorTypeRegistries } from "./schemas/schemas_0";

/**
 * @internal
 */
export const getRuntimeConfig = (config: DynamoDBClientConfig) => {
  return {
    apiVersion: "2012-08-10",
    base64Decoder: config?.base64Decoder ?? fromBase64,
    base64Encoder: config?.base64Encoder ?? toBase64,
    disableHostPrefix: config?.disableHostPrefix ?? false,
    endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
    extensions: config?.extensions ?? [],
    httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultDynamoDBHttpAuthSchemeProvider,
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
      defaultNamespace: "com.amazonaws.dynamodb",
      errorTypeRegistries,
      xmlNamespace: "http://dynamodb.amazonaws.com/doc/2012-08-10/",
      version: "2012-08-10",
      serviceTarget: "DynamoDB_20120810",
      jsonCodec: new DynamoDBJsonCodec(),
    },
    retryStrategy: config?.retryStrategy ?? (
      config?.maxAttempts == null && config?.retryMode == null && Retry.v2026
        ? new StandardRetryStrategy({
            maxAttempts: 4,
            baseDelay: 25,
          })
        : undefined
    ),
    serviceId: config?.serviceId ?? "DynamoDB",
    urlParser: config?.urlParser ?? parseUrl,
    utf8Decoder: config?.utf8Decoder ?? fromUtf8,
    utf8Encoder: config?.utf8Encoder ?? toUtf8,
  };
};
