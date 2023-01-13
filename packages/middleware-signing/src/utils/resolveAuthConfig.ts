import { AuthInputConfig, AuthPreviouslyResolved, AuthResolvedConfig } from "../configurations";
import { normalizeCredentialProvider } from "./normalizeCredentialProvider";

export const resolveAuthConfig = <T>(
  input: T & AuthInputConfig & AuthPreviouslyResolved
): T & Omit<AuthResolvedConfig, "signer"> => {
  const normalizedCreds = input.credentials
    ? normalizeCredentialProvider(input.credentials)
    : input.credentialDefaultProvider(input as any);
  const { signingEscapePath = true, systemClockOffset = 0 } = input;

  return {
    ...input,
    systemClockOffset,
    signingEscapePath,
    credentials: normalizedCreds,
  };
};
