import { memoize } from "@aws-sdk/property-provider";
import { Identity, IdentityProvider, MemoizedProvider } from "@aws-sdk/types";
import { normalizeProvider } from "@aws-sdk/util-middleware";

// 5 minutes buffer time the refresh the credential before it really expires
const IDENTITY_EXPIRE_WINDOW = 300_000;

const isIdentityWithExpiry = (credentials: Identity) => credentials.expiration !== undefined;
const isIdentityExpiringWithinFiveMins = (credentials: Identity) =>
  isIdentityWithExpiry(credentials) && credentials.expiration!.getTime() - Date.now() < IDENTITY_EXPIRE_WINDOW;

export const normalizeIdentityProvider = (
  identity: Identity | IdentityProvider<Identity>
): MemoizedProvider<Identity> => {
  if (typeof identity === "function") {
    return memoize(identity, isIdentityExpiringWithinFiveMins, isIdentityWithExpiry);
  }
  return normalizeProvider(identity);
};
