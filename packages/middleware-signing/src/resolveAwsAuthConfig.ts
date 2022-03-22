import { normalizeProvider } from "@aws-sdk/util-middleware";

import { AwsAuthInputConfig, AwsAuthPreviouslyResolved, AwsAuthResolvedConfig } from "./configurations";
import { getAwsAuthSigner } from "./utils/getAwsAuthSigner";
import { normalizeCredentialProvider } from "./utils/normalizeCredentialProvider";

export const resolveAwsAuthConfig = <T>(
  input: T & AwsAuthInputConfig & AwsAuthPreviouslyResolved
): T & AwsAuthResolvedConfig => {
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
      : getAwsAuthSigner(normalizedCreds, input),
  };
};
