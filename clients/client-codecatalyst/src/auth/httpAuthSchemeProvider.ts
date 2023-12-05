// smithy-typescript generated code
import { FromSsoInit } from "@aws-sdk/token-providers";
import { doesIdentityRequireRefresh, isIdentityExpired, memoizeIdentityProvider } from "@smithy/core";
import {
  HandlerExecutionContext,
  HttpAuthOption,
  HttpAuthScheme,
  HttpAuthSchemeParameters,
  HttpAuthSchemeParametersProvider,
  HttpAuthSchemeProvider,
  TokenIdentity,
  TokenIdentityProvider,
} from "@smithy/types";
import { getSmithyContext } from "@smithy/util-middleware";

import { CodeCatalystClientResolvedConfig } from "../CodeCatalystClient";

/**
 * @internal
 */
export interface CodeCatalystHttpAuthSchemeParameters extends HttpAuthSchemeParameters {}

/**
 * @internal
 */
export interface CodeCatalystHttpAuthSchemeParametersProvider
  extends HttpAuthSchemeParametersProvider<
    CodeCatalystClientResolvedConfig,
    HandlerExecutionContext,
    CodeCatalystHttpAuthSchemeParameters,
    object
  > {}

/**
 * @internal
 */
export const defaultCodeCatalystHttpAuthSchemeParametersProvider = async (
  config: CodeCatalystClientResolvedConfig,
  context: HandlerExecutionContext,
  input: object
): Promise<CodeCatalystHttpAuthSchemeParameters> => {
  return {
    operation: getSmithyContext(context).operation as string,
  };
};

function createSmithyApiHttpBearerAuthHttpAuthOption(
  authParameters: CodeCatalystHttpAuthSchemeParameters
): HttpAuthOption {
  return {
    schemeId: "smithy.api#httpBearerAuth",
    propertiesExtractor: <T>(
      { profile, filepath, configFilepath, ignoreCache }: T & FromSsoInit,
      context: HandlerExecutionContext
    ) => ({
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
export interface CodeCatalystHttpAuthSchemeProvider
  extends HttpAuthSchemeProvider<CodeCatalystHttpAuthSchemeParameters> {}

/**
 * @internal
 */
export const defaultCodeCatalystHttpAuthSchemeProvider: CodeCatalystHttpAuthSchemeProvider = (authParameters) => {
  const options: HttpAuthOption[] = [];
  switch (authParameters.operation) {
    default: {
      options.push(createSmithyApiHttpBearerAuthHttpAuthOption(authParameters));
    }
  }
  return options;
};

/**
 * @internal
 */
export interface HttpAuthSchemeInputConfig {
  /**
   * experimentalIdentityAndAuth: Configuration of HttpAuthSchemes for a client which provides default identity providers and signers per auth scheme.
   * @internal
   */
  httpAuthSchemes?: HttpAuthScheme[];

  /**
   * experimentalIdentityAndAuth: Configuration of an HttpAuthSchemeProvider for a client which resolves which HttpAuthScheme to use.
   * @internal
   */
  httpAuthSchemeProvider?: CodeCatalystHttpAuthSchemeProvider;

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
   * experimentalIdentityAndAuth: Configuration of HttpAuthSchemes for a client which provides default identity providers and signers per auth scheme.
   * @internal
   */
  readonly httpAuthSchemes: HttpAuthScheme[];

  /**
   * experimentalIdentityAndAuth: Configuration of an HttpAuthSchemeProvider for a client which resolves which HttpAuthScheme to use.
   * @internal
   */
  readonly httpAuthSchemeProvider: CodeCatalystHttpAuthSchemeProvider;

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
  return {
    ...config,
    token,
  } as T & HttpAuthSchemeResolvedConfig;
};
