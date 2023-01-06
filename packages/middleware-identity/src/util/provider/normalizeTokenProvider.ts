import { memoize } from "@aws-sdk/property-provider";
import { MemoizedProvider, TokenIdentity, TokenIdentityProvider } from "@aws-sdk/types";
import { normalizeProvider } from "@aws-sdk/util-middleware";

const isTokenWithExpiry = (token: TokenIdentity) => token.expiration !== undefined;
const isTokenExpiringWithinFiveMins = (token: TokenIdentity) =>
  isTokenWithExpiry(token) && token.expiration!.getTime() - Date.now() < 300000;

export const normalizeTokenProvider = (token: TokenIdentity | TokenIdentityProvider): MemoizedProvider<TokenIdentity> => {
  if (typeof token === "function") {
    return memoize(token, isTokenExpiringWithinFiveMins, isTokenWithExpiry);
  }
  return normalizeProvider(token);
};
