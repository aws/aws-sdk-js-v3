import { memoize } from "@aws-sdk/property-provider";
import { Credentials, MemoizedProvider, Provider } from "@aws-sdk/types";
import { normalizeProvider } from "@aws-sdk/util-middleware";

// 5 minutes buffer time the refresh the credential before it really expires
const CREDENTIAL_EXPIRE_WINDOW = 300000;

export const normalizeCredentialProvider = (
  credentials: Credentials | Provider<Credentials>
): MemoizedProvider<Credentials> => {
  if (typeof credentials === "function") {
    return memoize(
      credentials,
      (credentials) =>
        credentials.expiration !== undefined &&
        credentials.expiration.getTime() - Date.now() < CREDENTIAL_EXPIRE_WINDOW,
      (credentials) => credentials.expiration !== undefined
    );
  }
  return normalizeProvider(credentials);
};
