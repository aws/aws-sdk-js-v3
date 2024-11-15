// smithy-typescript generated code
import { AwsSdkSigV4Signer } from "@aws-sdk/core";
import { NoOpLogger } from "@smithy/smithy-client";
import { IdentityProviderConfig } from "@smithy/types";
import { parseUrl } from "@smithy/url-parser";
import { fromBase64, toBase64 } from "@smithy/util-base64";
import { fromUtf8, toUtf8 } from "@smithy/util-utf8";

import { defaultConnectCampaignsV2HttpAuthSchemeProvider } from "./auth/httpAuthSchemeProvider";
import { ConnectCampaignsV2ClientConfig } from "./ConnectCampaignsV2Client";
import { defaultEndpointResolver } from "./endpoint/endpointResolver";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ConnectCampaignsV2ClientConfig) => {
  return {
    apiVersion: "2024-04-23",
    base64Decoder: config?.base64Decoder ?? fromBase64,
    base64Encoder: config?.base64Encoder ?? toBase64,
    disableHostPrefix: config?.disableHostPrefix ?? false,
    endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
    extensions: config?.extensions ?? [],
    httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultConnectCampaignsV2HttpAuthSchemeProvider,
    httpAuthSchemes: config?.httpAuthSchemes ?? [
      {
        schemeId: "aws.auth#sigv4",
        identityProvider: (ipc: IdentityProviderConfig) => ipc.getIdentityProvider("aws.auth#sigv4"),
        signer: new AwsSdkSigV4Signer(),
      },
    ],
    logger: config?.logger ?? new NoOpLogger(),
    serviceId: config?.serviceId ?? "ConnectCampaignsV2",
    urlParser: config?.urlParser ?? parseUrl,
    utf8Decoder: config?.utf8Decoder ?? fromUtf8,
    utf8Encoder: config?.utf8Encoder ?? toUtf8,
  };
};
