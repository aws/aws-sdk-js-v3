import { normalizeProvider } from "@aws-sdk/util-middleware";

import { SigV4AuthInputConfig, SigV4AuthPreviouslyResolved, SigV4AuthResolvedConfig } from "./configurations";
import { getSigV4Signer } from "./utils/getSigV4Signer";
import { normalizeCredentialProvider } from "./utils/normalizeCredentialProvider";

// TODO: reduce code duplication
export const resolveSigV4AuthConfig = <T>(
  input: T & SigV4AuthInputConfig & SigV4AuthPreviouslyResolved
): T & SigV4AuthResolvedConfig => {
  const normalizedCreds = input.credentials
    ? normalizeCredentialProvider(input.credentials)
    : input.credentialDefaultProvider(input as any);
  const { signingEscapePath = true, systemClockOffset = 0 } = input;

  return {
    ...input,
    systemClockOffset,
    signingEscapePath,
    credentials: normalizedCreds,
    signer: input.signer
      ? // if signer is supplied by user, normalize it to a function returning a promise for signer.
        normalizeProvider(input.signer)
      : getSigV4Signer(normalizedCreds, {
          region: input.region,
          service: input.signingName,
          sha256: input.sha256,
          uriEscapePath: signingEscapePath,
        }),
  };
};
