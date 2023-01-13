import { memoize } from "@aws-sdk/property-provider";
import { AwsCredentialIdentity, MemoizedProvider, Provider } from "@aws-sdk/types";
import { normalizeProvider } from "@aws-sdk/util-middleware";

// 5 minutes buffer time the refresh the credential before it really expires
const CREDENTIAL_EXPIRE_WINDOW = 300_000;

const isCredentialsWithExpiry = (credentials: AwsCredentialIdentity) => credentials.expiration !== undefined;
const isCredentialsExpiringWithinFiveMins = (credentials: AwsCredentialIdentity) =>
  isCredentialsWithExpiry(credentials) && credentials.expiration!.getTime() - Date.now() < CREDENTIAL_EXPIRE_WINDOW;

export const normalizeCredentialProvider = (
  credentials: AwsCredentialIdentity | Provider<AwsCredentialIdentity>
): MemoizedProvider<AwsCredentialIdentity> => {
  if (typeof credentials === "function") {
    return memoize(credentials, isCredentialsExpiringWithinFiveMins, isCredentialsWithExpiry);
  }
  return normalizeProvider(credentials);
};
