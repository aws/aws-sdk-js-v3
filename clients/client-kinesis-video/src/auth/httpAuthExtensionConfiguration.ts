// smithy-typescript generated code
import { type HttpAuthScheme, AwsCredentialIdentity, AwsCredentialIdentityProvider } from "@smithy/types";

import type { KinesisVideoHttpAuthSchemeProvider } from "./httpAuthSchemeProvider";

/**
 * @internal
 */
export interface HttpAuthExtensionConfiguration {
  setHttpAuthScheme(httpAuthScheme: HttpAuthScheme): void;
  httpAuthSchemes(): HttpAuthScheme[];
  setHttpAuthSchemeProvider(httpAuthSchemeProvider: KinesisVideoHttpAuthSchemeProvider): void;
  httpAuthSchemeProvider(): KinesisVideoHttpAuthSchemeProvider;
  setCredentials(credentials: AwsCredentialIdentity | AwsCredentialIdentityProvider): void;
  credentials(): AwsCredentialIdentity | AwsCredentialIdentityProvider | undefined;
}

/**
 * @internal
 */
export type HttpAuthRuntimeConfig = Partial<{
  httpAuthSchemes: HttpAuthScheme[];
  httpAuthSchemeProvider: KinesisVideoHttpAuthSchemeProvider;
  credentials: AwsCredentialIdentity | AwsCredentialIdentityProvider;
}>;

/**
 * @internal
 */
export const getHttpAuthExtensionConfiguration = (
  runtimeConfig: HttpAuthRuntimeConfig
): HttpAuthExtensionConfiguration => {
  const _httpAuthSchemes = runtimeConfig.httpAuthSchemes!;
  let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider!;
  let _credentials = runtimeConfig.credentials;
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
    setHttpAuthSchemeProvider(httpAuthSchemeProvider: KinesisVideoHttpAuthSchemeProvider): void {
      _httpAuthSchemeProvider = httpAuthSchemeProvider;
    },
    httpAuthSchemeProvider(): KinesisVideoHttpAuthSchemeProvider {
      return _httpAuthSchemeProvider;
    },
    setCredentials(credentials: AwsCredentialIdentity | AwsCredentialIdentityProvider): void {
      _credentials = credentials;
    },
    credentials(): AwsCredentialIdentity | AwsCredentialIdentityProvider | undefined {
      return _credentials;
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
    credentials: config.credentials(),
  };
};
