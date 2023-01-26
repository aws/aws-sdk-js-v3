import { memoize, memoizeIdentity } from "@aws-sdk/property-provider";
import { Identity, IdentityProvider, MemoizedIdentityProvider, MemoizedProvider } from "@aws-sdk/types";
import { normalizeProvider } from "@aws-sdk/util-middleware";

const CREDENTIAL_EXPIRE_WINDOW = 300_000;

const isIdentityWithExpiry = <IdentityT extends Identity>(identity: IdentityT) => identity.expiration !== undefined;
const isIdentityExpiringWithinFiveMins = <IdentityT extends Identity>(identity: IdentityT) =>
  isIdentityWithExpiry(identity) && identity.expiration!.getTime() - Date.now() < CREDENTIAL_EXPIRE_WINDOW;

/**
 * TODO(identityandauth)
 */
export const normalizeIdentityProvider = <IdentityT extends Identity>(
  identity: IdentityT | IdentityProvider<IdentityT>
): MemoizedIdentityProvider<IdentityT> => {
  if (typeof identity === "function") {
    return memoizeIdentity(identity, isIdentityExpiringWithinFiveMins, isIdentityWithExpiry);
  }
  return normalizeProvider(identity);
};
