import { SignatureV4, SignatureV4CryptoInit, SignatureV4Init } from "@aws-sdk/signature-v4";
import { AuthScheme, AwsCredentialIdentity, MemoizedProvider, RegionInfoProvider, RequestSigner } from "@aws-sdk/types";
import { normalizeProvider } from "@aws-sdk/util-middleware";

import { AuthPreviouslyResolved, AwsAuthInputConfig, AwsAuthPreviouslyResolved } from "../../configurations";

interface EndpointsV1SignerOptions extends
  Pick<AwsAuthPreviouslyResolved, "region" | "sha256" | "regionInfoProvider" | "useFipsEndpoint" | "useDualstackEndpoint" | "serviceId">,
  Partial<Pick<AwsAuthPreviouslyResolved, "signingName">>,
  Partial<Pick<AwsAuthInputConfig, "signingRegion" | "signingEscapePath" | "signerConstructor">> { }

export const getEndpointsV1Signer = (
  credentials: MemoizedProvider<AwsCredentialIdentity>,
  input: EndpointsV1SignerOptions
): ((authScheme?: AuthScheme) => Promise<RequestSigner>) =>
  async () => {
    const region = await normalizeProvider(input.region)();
    const regionInfo = await input.regionInfoProvider(region, {
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
