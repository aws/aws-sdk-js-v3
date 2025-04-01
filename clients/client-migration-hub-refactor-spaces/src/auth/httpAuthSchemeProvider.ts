// smithy-typescript generated code
import {
  AwsSdkSigV4AuthInputConfig,
  AwsSdkSigV4AuthResolvedConfig,
  AwsSdkSigV4PreviouslyResolved,
  resolveAwsSdkSigV4Config,
} from "@aws-sdk/core";
import {
  HandlerExecutionContext,
  HttpAuthOption,
  HttpAuthScheme,
  HttpAuthSchemeParameters,
  HttpAuthSchemeParametersProvider,
  HttpAuthSchemeProvider,
} from "@smithy/types";
import { getSmithyContext, normalizeProvider } from "@smithy/util-middleware";

import {
  MigrationHubRefactorSpacesClientConfig,
  MigrationHubRefactorSpacesClientResolvedConfig,
} from "../MigrationHubRefactorSpacesClient";

/**
 * @internal
 */
export interface MigrationHubRefactorSpacesHttpAuthSchemeParameters extends HttpAuthSchemeParameters {
  region?: string;
}

/**
 * @internal
 */
export interface MigrationHubRefactorSpacesHttpAuthSchemeParametersProvider
  extends HttpAuthSchemeParametersProvider<
    MigrationHubRefactorSpacesClientResolvedConfig,
    HandlerExecutionContext,
    MigrationHubRefactorSpacesHttpAuthSchemeParameters,
    object
  > {}

/**
 * @internal
 */
export const defaultMigrationHubRefactorSpacesHttpAuthSchemeParametersProvider = async (
  config: MigrationHubRefactorSpacesClientResolvedConfig,
  context: HandlerExecutionContext,
  input: object
): Promise<MigrationHubRefactorSpacesHttpAuthSchemeParameters> => {
  return {
    operation: getSmithyContext(context).operation as string,
    region:
      (await normalizeProvider(config.region)()) ||
      (() => {
        throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
      })(),
  };
};

function createAwsAuthSigv4HttpAuthOption(
  authParameters: MigrationHubRefactorSpacesHttpAuthSchemeParameters
): HttpAuthOption {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "refactor-spaces",
      region: authParameters.region,
    },
    propertiesExtractor: (config: Partial<MigrationHubRefactorSpacesClientConfig>, context) => ({
      /**
       * @internal
       */
      signingProperties: {
        config,
        context,
      },
    }),
  };
}

/**
 * @internal
 */
export interface MigrationHubRefactorSpacesHttpAuthSchemeProvider
  extends HttpAuthSchemeProvider<MigrationHubRefactorSpacesHttpAuthSchemeParameters> {}

/**
 * @internal
 */
export const defaultMigrationHubRefactorSpacesHttpAuthSchemeProvider: MigrationHubRefactorSpacesHttpAuthSchemeProvider =
  (authParameters) => {
    const options: HttpAuthOption[] = [];
    switch (authParameters.operation) {
      default: {
        options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
      }
    }
    return options;
  };

/**
 * @internal
 */
export interface HttpAuthSchemeInputConfig extends AwsSdkSigV4AuthInputConfig {
  /**
   * Configuration of HttpAuthSchemes for a client which provides default identity providers and signers per auth scheme.
   * @internal
   */
  httpAuthSchemes?: HttpAuthScheme[];

  /**
   * Configuration of an HttpAuthSchemeProvider for a client which resolves which HttpAuthScheme to use.
   * @internal
   */
  httpAuthSchemeProvider?: MigrationHubRefactorSpacesHttpAuthSchemeProvider;
}

/**
 * @internal
 */
export interface HttpAuthSchemeResolvedConfig extends AwsSdkSigV4AuthResolvedConfig {
  /**
   * Configuration of HttpAuthSchemes for a client which provides default identity providers and signers per auth scheme.
   * @internal
   */
  readonly httpAuthSchemes: HttpAuthScheme[];

  /**
   * Configuration of an HttpAuthSchemeProvider for a client which resolves which HttpAuthScheme to use.
   * @internal
   */
  readonly httpAuthSchemeProvider: MigrationHubRefactorSpacesHttpAuthSchemeProvider;
}

/**
 * @internal
 */
export const resolveHttpAuthSchemeConfig = <T>(
  config: T & HttpAuthSchemeInputConfig & AwsSdkSigV4PreviouslyResolved
): T & HttpAuthSchemeResolvedConfig => {
  const config_0 = resolveAwsSdkSigV4Config(config);
  return Object.assign(config_0, {}) as T & HttpAuthSchemeResolvedConfig;
};
