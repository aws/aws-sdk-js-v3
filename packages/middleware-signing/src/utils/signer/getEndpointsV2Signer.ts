import { SignatureV4, SignatureV4CryptoInit, SignatureV4Init } from "@aws-sdk/signature-v4";
import { AuthScheme, AwsCredentialIdentity, MemoizedProvider, RequestSigner } from "@aws-sdk/types";
import { normalizeProvider } from "@aws-sdk/util-middleware";

import { AwsAuthInputConfig, AwsAuthPreviouslyResolved } from "../../configurations";

interface EndpointsV2SignerOptions extends
  Partial<Pick<AwsAuthInputConfig, "signingRegion" | "signingEscapePath" | "signerConstructor">>,
  Pick<AwsAuthPreviouslyResolved, "defaultSigningName" | "region" | "serviceId" | "sha256">,
  Partial<Pick<AwsAuthPreviouslyResolved, "signingName">> { };

export const getEndpointsV2Signer = (
  credentials: MemoizedProvider<AwsCredentialIdentity>,
  input: EndpointsV2SignerOptions
): ((authScheme?: AuthScheme) => Promise<RequestSigner>) =>
  async (authScheme?: AuthScheme) => {
    const decoratedAuthScheme = {
      name: "sigv4",
      signingName: input.signingName || input.defaultSigningName!,
      signingRegion: await normalizeProvider(input.region)(),
      properties: {},
      ...authScheme,
    };

    // update client's singing region and signing service config if they are resolved.
    // signing region resolving order: user supplied signingRegion -> endpoints.json inferred region -> client region
    const updatedSigningRegion = input.signingRegion || decoratedAuthScheme.signingRegion;
    // signing name resolving order:
    // user supplied signingName -> endpoints.json inferred (credential scope -> model arnNamespace) -> model service id
    const updatedSigningService = input.signingName || decoratedAuthScheme.signingName || input.serviceId;

    const params: SignatureV4Init & SignatureV4CryptoInit = {
      ...input,
      credentials: credentials,
      region: updatedSigningRegion,
      service: updatedSigningService,
      sha256: input.sha256,
      uriEscapePath: input.signingEscapePath,
    };

    const signerConstructor = input.signerConstructor || SignatureV4;
    return new signerConstructor(params);
  };
