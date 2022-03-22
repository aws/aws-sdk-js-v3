import { SignatureV4, SignatureV4CryptoInit, SignatureV4Init } from "@aws-sdk/signature-v4";
import { Provider, RegionInfo, RequestSigner } from "@aws-sdk/types";
import { normalizeProvider } from "@aws-sdk/util-middleware";

import { AwsAuthInputConfig, AwsAuthPreviouslyResolved, AwsAuthResolvedConfig } from "./configurations";
import { normalizeCredentialProvider } from "./utils/normalizeCredentialProvider";

export const resolveAwsAuthConfig = <T>(
  input: T & AwsAuthInputConfig & AwsAuthPreviouslyResolved
): T & AwsAuthResolvedConfig => {
  const normalizedCreds = input.credentials
    ? normalizeCredentialProvider(input.credentials)
    : input.credentialDefaultProvider(input as any);
  const { signingEscapePath = true, systemClockOffset = input.systemClockOffset || 0, sha256 } = input;
  let signer: Provider<RequestSigner>;
  if (input.signer) {
    //if signer is supplied by user, normalize it to a function returning a promise for signer.
    signer = normalizeProvider(input.signer);
  } else {
    //construct a provider inferring signing from region.
    signer = () =>
      normalizeProvider(input.region)()
        .then(
          async (region) =>
            [
              (await input.regionInfoProvider(region, {
                useFipsEndpoint: await input.useFipsEndpoint(),
                useDualstackEndpoint: await input.useDualstackEndpoint(),
              })) || {},
              region,
            ] as [RegionInfo, string]
        )
        .then(([regionInfo, region]) => {
          const { signingRegion, signingService } = regionInfo;
          //update client's singing region and signing service config if they are resolved.
          //signing region resolving order: user supplied signingRegion -> endpoints.json inferred region -> client region
          input.signingRegion = input.signingRegion || signingRegion || region;
          //signing name resolving order:
          //user supplied signingName -> endpoints.json inferred (credential scope -> model arnNamespace) -> model service id
          input.signingName = input.signingName || signingService || input.serviceId;

          const params: SignatureV4Init & SignatureV4CryptoInit = {
            ...input,
            credentials: normalizedCreds,
            region: input.signingRegion,
            service: input.signingName,
            sha256,
            uriEscapePath: signingEscapePath,
          };
          const signerConstructor = input.signerConstructor || SignatureV4;
          return new signerConstructor(params);
        });
  }

  return {
    ...input,
    systemClockOffset,
    signingEscapePath,
    credentials: normalizedCreds,
    signer,
  };
};
