import { SignatureV4, SignatureV4CryptoInit, SignatureV4Init } from "@aws-sdk/signature-v4";
import { AuthScheme, AwsCredentialIdentity, MemoizedProvider, RegionInfoProvider, RequestSigner } from "@aws-sdk/types";
import { normalizeProvider } from "@aws-sdk/util-middleware";

import { AwsAuthInputConfig, AwsAuthPreviouslyResolved } from "../../configurations";

export const getEndpointsV1Signer =
  (
    credentials: MemoizedProvider<AwsCredentialIdentity>,
    input: AwsAuthInputConfig & AwsAuthPreviouslyResolved,
    regionInfoProvider: RegionInfoProvider
  ): ((authScheme?: AuthScheme) => Promise<RequestSigner>) =>
  async () => {
    const region = await normalizeProvider(input.region)();
    const regionInfo = await regionInfoProvider(region, {
      useFipsEndpoint: await input.useFipsEndpoint(),
      useDualstackEndpoint: await input.useDualstackEndpoint(),
    });
    // Update client's singing region and signing service config if they are resolved.
    // signing region resolving order: user supplied signingRegion -> endpoints.json inferred region -> client region
    const updatedSigningRegion = input.signingRegion || regionInfo?.signingRegion || region;

    // Signing name resolving order:
    // user supplied signingName -> endpoints.json inferred (credential scope -> model arnNamespace) -> model service id
    const updatedSigningName = input.signingName || regionInfo?.signingService || input.serviceId;

    const params: SignatureV4Init & SignatureV4CryptoInit = {
      ...input,
      credentials: credentials,
      region: updatedSigningRegion,
      service: updatedSigningName,
      sha256: input.sha256,
      uriEscapePath: input.signingEscapePath,
    };
    const signerConstructor = input.signerConstructor || SignatureV4;
    return new signerConstructor(params);
  };
