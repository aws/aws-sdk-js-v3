// smithy-typescript generated code
import { type HttpAuthScheme, TokenIdentity, TokenIdentityProvider } from "@smithy/types";

import type { AccountAccessRuntimeHttpAuthSchemeProvider } from "./httpAuthSchemeProvider";

/**
 * @internal
 */
export interface HttpAuthExtensionConfiguration {
  setHttpAuthScheme(httpAuthScheme: HttpAuthScheme): void;
  httpAuthSchemes(): HttpAuthScheme[];
  setHttpAuthSchemeProvider(httpAuthSchemeProvider: AccountAccessRuntimeHttpAuthSchemeProvider): void;
  httpAuthSchemeProvider(): AccountAccessRuntimeHttpAuthSchemeProvider;
  setToken(token: TokenIdentity | TokenIdentityProvider): void;
  token(): TokenIdentity | TokenIdentityProvider | undefined;
}

/**
 * @internal
 */
export type HttpAuthRuntimeConfig = Partial<{
  httpAuthSchemes: HttpAuthScheme[];
  httpAuthSchemeProvider: AccountAccessRuntimeHttpAuthSchemeProvider;
  token: TokenIdentity | TokenIdentityProvider;
}>;

/**
 * @internal
 */
export const getHttpAuthExtensionConfiguration = (
  runtimeConfig: HttpAuthRuntimeConfig
): HttpAuthExtensionConfiguration => {
  const _httpAuthSchemes = runtimeConfig.httpAuthSchemes!;
  let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider!;
  let _token = runtimeConfig.token;
  return {
    setHttpAuthScheme(httpAuthScheme: HttpAuthScheme): void {
      const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
      if (index === -1) {
        _httpAuthSchemes.push(httpAuthScheme);
      } else {
        _httpAuthSchemes.splice(index, 1, httpAuthScheme);
      }
    },
    httpAuthSchemes(): HttpAuthScheme[] {
      return _httpAuthSchemes;
    },
    setHttpAuthSchemeProvider(httpAuthSchemeProvider: AccountAccessRuntimeHttpAuthSchemeProvider): void {
      _httpAuthSchemeProvider = httpAuthSchemeProvider;
    },
    httpAuthSchemeProvider(): AccountAccessRuntimeHttpAuthSchemeProvider {
      return _httpAuthSchemeProvider;
    },
    setToken(token: TokenIdentity | TokenIdentityProvider): void {
      _token = token;
    },
    token(): TokenIdentity | TokenIdentityProvider | undefined {
      return _token;
    },
  };
};

/**
 * @internal
 */
export const resolveHttpAuthRuntimeConfig = (config: HttpAuthExtensionConfiguration): HttpAuthRuntimeConfig => {
  return {
    httpAuthSchemes: config.httpAuthSchemes(),
    httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
    token: config.token(),
  };
};
