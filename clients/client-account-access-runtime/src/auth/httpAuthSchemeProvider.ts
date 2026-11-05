// smithy-typescript generated code
import type { FromSsoInit } from "@aws-sdk/token-providers";
import { doesIdentityRequireRefresh, isIdentityExpired, memoizeIdentityProvider } from "@smithy/core";
import { getSmithyContext, normalizeProvider } from "@smithy/core/client";
import {
  type HandlerExecutionContext,
  type HttpAuthOption,
  type HttpAuthScheme,
  type HttpAuthSchemeParameters,
  type HttpAuthSchemeParametersProvider,
  type HttpAuthSchemeProvider,
  type Provider,
  TokenIdentity,
  TokenIdentityProvider,
} from "@smithy/types";

import type { AccountAccessRuntimeClientResolvedConfig } from "../AccountAccessRuntimeClient";

/**
 * @internal
 */
export interface AccountAccessRuntimeHttpAuthSchemeParameters extends HttpAuthSchemeParameters {}

/**
 * @internal
 */
export interface AccountAccessRuntimeHttpAuthSchemeParametersProvider
  extends HttpAuthSchemeParametersProvider<
    AccountAccessRuntimeClientResolvedConfig,
    HandlerExecutionContext,
    AccountAccessRuntimeHttpAuthSchemeParameters,
    object
  > {}

/**
 * @internal
 */
export const defaultAccountAccessRuntimeHttpAuthSchemeParametersProvider = async (
  config: AccountAccessRuntimeClientResolvedConfig,
  context: HandlerExecutionContext,
  input: object
): Promise<AccountAccessRuntimeHttpAuthSchemeParameters> => {
  return {
    operation: getSmithyContext(context).operation as string,
  };
};

function createSmithyApiHttpBearerAuthHttpAuthOption(authParameters: AccountAccessRuntimeHttpAuthSchemeParameters): HttpAuthOption {
  return {
    schemeId: "smithy.api#httpBearerAuth",
    propertiesExtractor: <T>({
      profile,
      filepath,
      configFilepath,
      ignoreCache,
    }: T & FromSsoInit, context: HandlerExecutionContext) => ({
      /**
       * @internal
       */
      identityProperties: {
        profile,
        filepath,
        configFilepath,
        ignoreCache,
      },
    }),
  };
}

/**
 * @internal
 */
export interface AccountAccessRuntimeHttpAuthSchemeProvider
  extends HttpAuthSchemeProvider<AccountAccessRuntimeHttpAuthSchemeParameters> {}

/**
 * @internal
 */
export const defaultAccountAccessRuntimeHttpAuthSchemeProvider: AccountAccessRuntimeHttpAuthSchemeProvider = (authParameters) => {
  const options: HttpAuthOption[] = [];
  switch (authParameters.operation) {
    default: {
      options.push(createSmithyApiHttpBearerAuthHttpAuthOption(authParameters));
    }
  }
  return options;
};

/**
 * @public
 */
export interface HttpAuthSchemeInputConfig {
  /**
   * A comma-separated list of case-sensitive auth scheme names.
   * An auth scheme name is a fully qualified auth scheme ID with the namespace prefix trimmed.
   * For example, the auth scheme with ID aws.auth#sigv4 is named sigv4.
   * @public
   */
  authSchemePreference?: string[] | Provider<string[]>;

  /**
   * Configuration of HttpAuthSchemes for a client which provides default identity providers and signers per auth scheme.
   * @internal
   */
  httpAuthSchemes?: HttpAuthScheme[];

  /**
   * Configuration of an HttpAuthSchemeProvider for a client which resolves which HttpAuthScheme to use.
   * @internal
   */
  httpAuthSchemeProvider?: AccountAccessRuntimeHttpAuthSchemeProvider;
  /**
   * The token used to authenticate requests.
   */
  token?: TokenIdentity | TokenIdentityProvider;
}

/**
 * @internal
 */
export interface HttpAuthSchemeResolvedConfig {
  /**
   * A comma-separated list of case-sensitive auth scheme names.
   * An auth scheme name is a fully qualified auth scheme ID with the namespace prefix trimmed.
   * For example, the auth scheme with ID aws.auth#sigv4 is named sigv4.
   * @public
   */
  readonly authSchemePreference: Provider<string[]>;

  /**
   * Configuration of HttpAuthSchemes for a client which provides default identity providers and signers per auth scheme.
   * @internal
   */
  readonly httpAuthSchemes: HttpAuthScheme[];

  /**
   * Configuration of an HttpAuthSchemeProvider for a client which resolves which HttpAuthScheme to use.
   * @internal
   */
  readonly httpAuthSchemeProvider: AccountAccessRuntimeHttpAuthSchemeProvider;
  /**
   * The token used to authenticate requests.
   */
  readonly token?: TokenIdentityProvider;
}

/**
 * @internal
 */
export const resolveHttpAuthSchemeConfig = <T>(
  config: T & HttpAuthSchemeInputConfig
): T & HttpAuthSchemeResolvedConfig => {
  const token = memoizeIdentityProvider(config.token, isIdentityExpired, doesIdentityRequireRefresh);
  return Object.assign(config, {
    authSchemePreference: normalizeProvider(config.authSchemePreference ?? []),
    token,
  }) as T & HttpAuthSchemeResolvedConfig;
};
