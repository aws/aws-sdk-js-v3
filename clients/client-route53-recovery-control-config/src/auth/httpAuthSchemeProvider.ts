// smithy-typescript generated code
import {
  AwsSdkSigV4AuthInputConfig,
  AwsSdkSigV4AuthResolvedConfig,
  AwsSdkSigV4PreviouslyResolved,
  resolveAwsSdkSigV4Config,
} from "@aws-sdk/core";
import type {
  HandlerExecutionContext,
  HttpAuthOption,
  HttpAuthScheme,
  HttpAuthSchemeParameters,
  HttpAuthSchemeParametersProvider,
  HttpAuthSchemeProvider,
  Provider,
} from "@smithy/types";
import { getSmithyContext, normalizeProvider } from "@smithy/util-middleware";

import {
  type Route53RecoveryControlConfigClientResolvedConfig,
  Route53RecoveryControlConfigClientConfig,
} from "../Route53RecoveryControlConfigClient";

/**
 * @internal
 */
export interface Route53RecoveryControlConfigHttpAuthSchemeParameters extends HttpAuthSchemeParameters {
  region?: string;
}

/**
 * @internal
 */
export interface Route53RecoveryControlConfigHttpAuthSchemeParametersProvider
  extends HttpAuthSchemeParametersProvider<
    Route53RecoveryControlConfigClientResolvedConfig,
    HandlerExecutionContext,
    Route53RecoveryControlConfigHttpAuthSchemeParameters,
    object
  > {}

/**
 * @internal
 */
export const defaultRoute53RecoveryControlConfigHttpAuthSchemeParametersProvider = async (
  config: Route53RecoveryControlConfigClientResolvedConfig,
  context: HandlerExecutionContext,
  input: object
): Promise<Route53RecoveryControlConfigHttpAuthSchemeParameters> => {
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
  authParameters: Route53RecoveryControlConfigHttpAuthSchemeParameters
): HttpAuthOption {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "route53-recovery-control-config",
      region: authParameters.region,
    },
    propertiesExtractor: (config: Partial<Route53RecoveryControlConfigClientConfig>, context) => ({
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
export interface Route53RecoveryControlConfigHttpAuthSchemeProvider
  extends HttpAuthSchemeProvider<Route53RecoveryControlConfigHttpAuthSchemeParameters> {}

/**
 * @internal
 */
export const defaultRoute53RecoveryControlConfigHttpAuthSchemeProvider: Route53RecoveryControlConfigHttpAuthSchemeProvider =
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
 * @public
 */
export interface HttpAuthSchemeInputConfig extends AwsSdkSigV4AuthInputConfig {
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
  httpAuthSchemeProvider?: Route53RecoveryControlConfigHttpAuthSchemeProvider;
}

/**
 * @internal
 */
export interface HttpAuthSchemeResolvedConfig extends AwsSdkSigV4AuthResolvedConfig {
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
  readonly httpAuthSchemeProvider: Route53RecoveryControlConfigHttpAuthSchemeProvider;
}

/**
 * @internal
 */
export const resolveHttpAuthSchemeConfig = <T>(
  config: T & HttpAuthSchemeInputConfig & AwsSdkSigV4PreviouslyResolved
): T & HttpAuthSchemeResolvedConfig => {
  const config_0 = resolveAwsSdkSigV4Config(config);
  return Object.assign(config_0, {
    authSchemePreference: normalizeProvider(config.authSchemePreference ?? []),
  }) as T & HttpAuthSchemeResolvedConfig;
};
