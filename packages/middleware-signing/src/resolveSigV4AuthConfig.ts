import { SignatureV4 } from "@aws-sdk/signature-v4";
import { Provider, RequestSigner } from "@aws-sdk/types";
import { normalizeIdentityProvider } from "@aws-sdk/util-identity-auth";
import { normalizeProvider } from "@aws-sdk/util-middleware";

import { SigV4AuthInputConfig, SigV4AuthResolvedConfig, SigV4PreviouslyResolved } from "./configurations";

export const resolveSigV4AuthConfig = <T>(
  input: T & SigV4AuthInputConfig & SigV4PreviouslyResolved
): T & SigV4AuthResolvedConfig => {
  const normalizedCreds = input.credentials
    ? normalizeIdentityProvider(input.credentials)
    : input.credentialDefaultProvider(input as any);
  const { signingEscapePath = true, systemClockOffset = input.systemClockOffset || 0, sha256 } = input;
  let signer: Provider<RequestSigner>;
  if (input.signer) {
    // if signer is supplied by user, normalize it to a function returning a promise for signer.
    signer = normalizeProvider(input.signer);
  } else {
    signer = normalizeProvider(
      new SignatureV4({
        credentials: normalizedCreds,
        region: input.region,
        service: input.signingName,
        sha256,
        uriEscapePath: signingEscapePath,
      })
    );
  }
  return {
    ...input,
    systemClockOffset,
    signingEscapePath,
    credentials: normalizedCreds,
    signer,
  };
};
