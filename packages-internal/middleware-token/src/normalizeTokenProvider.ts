import type { TokenIdentity, TokenIdentityProvider } from "@aws-sdk/types";
import { normalizeProvider } from "@smithy/core/client";
import { memoize } from "@smithy/core/config";
import type { MemoizedProvider } from "@smithy/types";

const isTokenWithExpiry = (token: TokenIdentity) => token.expiration !== undefined;
const isTokenExpiringWithinFiveMins = (token: TokenIdentity) =>
  isTokenWithExpiry(token) && token.expiration!.getTime() - Date.now() < 300000;

/**
 * @internal
 */
export const normalizeTokenProvider = (
  token: TokenIdentity | TokenIdentityProvider
): MemoizedProvider<TokenIdentity> => {
  if (typeof token === "function") {
    return memoize(token, isTokenExpiringWithinFiveMins, isTokenWithExpiry);
  }
  return normalizeProvider(token);
};
