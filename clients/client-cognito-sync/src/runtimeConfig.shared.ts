// smithy-typescript generated code
import { AwsSdkSigV4Signer } from "@aws-sdk/core/httpAuthSchemes";
import { AwsRestJsonProtocol } from "@aws-sdk/core/protocols";
import { NoOpLogger } from "@smithy/core/client";
import { parseUrl } from "@smithy/core/protocols";
import { fromBase64, fromUtf8, toBase64, toUtf8 } from "@smithy/core/serde";
import type { IdentityProviderConfig } from "@smithy/types";

import { defaultCognitoSyncHttpAuthSchemeProvider } from "./auth/httpAuthSchemeProvider";
import type { CognitoSyncClientConfig } from "./CognitoSyncClient";
import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { errorTypeRegistries } from "./schemas/schemas_0";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CognitoSyncClientConfig) => {
  return {
    apiVersion: "2014-06-30",
    base64Decoder: config?.base64Decoder ?? fromBase64,
    base64Encoder: config?.base64Encoder ?? toBase64,
    disableHostPrefix: config?.disableHostPrefix ?? false,
    endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
    extensions: config?.extensions ?? [],
    httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultCognitoSyncHttpAuthSchemeProvider,
    httpAuthSchemes: config?.httpAuthSchemes ?? [
      {
        schemeId: "aws.auth#sigv4",
        identityProvider: (ipc: IdentityProviderConfig) =>
          ipc.getIdentityProvider("aws.auth#sigv4"),
        signer: new AwsSdkSigV4Signer(),
      },
    ],
    logger: config?.logger ?? new NoOpLogger(),
    protocol: config?.protocol ?? AwsRestJsonProtocol,
    protocolSettings: config?.protocolSettings ?? {
      defaultNamespace: "com.amazonaws.cognitosync",
      errorTypeRegistries,
      xmlNamespace: "http://cognito-sync.amazonaws.com/doc/2014-06-30/",
      version: "2014-06-30",
      serviceTarget: "AWSCognitoSyncService",
    },
    serviceId: config?.serviceId ?? "Cognito Sync",
    urlParser: config?.urlParser ?? parseUrl,
    utf8Decoder: config?.utf8Decoder ?? fromUtf8,
    utf8Encoder: config?.utf8Encoder ?? toUtf8,
  };
};
