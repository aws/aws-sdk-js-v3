import { memoize } from "@aws-sdk/property-provider";
import { MemoizedProvider, Token, TokenProvider } from "@aws-sdk/types";
import { normalizeProvider } from "@aws-sdk/util-middleware";

export const normalizeTokenProvider = (token: Token | TokenProvider): MemoizedProvider<Token> => {
  if (typeof token === "function") {
    return memoize(
      token,
      (token) => token.expiration !== undefined && token.expiration.getTime() - Date.now() < 300000,
      (token) => token.expiration !== undefined
    );
  }
  return normalizeProvider(token);
};
