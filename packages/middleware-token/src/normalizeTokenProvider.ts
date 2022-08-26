import { memoize } from "@aws-sdk/property-provider";
import { MemoizedProvider, Token, TokenProvider } from "@aws-sdk/types";
import { normalizeProvider } from "@aws-sdk/util-middleware";

const isTokenWithExpiry = (token: Token) => token.expiration !== undefined;
const isTokenExpiringWithinFiveMins = (token: Token) =>
  isTokenWithExpiry(token) && token.expiration!.getTime() - Date.now() < 300000;

export const normalizeTokenProvider = (token: Token | TokenProvider): MemoizedProvider<Token> => {
  if (typeof token === "function") {
    return memoize(token, isTokenExpiringWithinFiveMins, isTokenWithExpiry);
  }
  return normalizeProvider(token);
};
