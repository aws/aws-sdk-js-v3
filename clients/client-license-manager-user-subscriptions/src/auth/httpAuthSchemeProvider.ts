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
  LicenseManagerUserSubscriptionsClientConfig,
  LicenseManagerUserSubscriptionsClientResolvedConfig,
} from "../LicenseManagerUserSubscriptionsClient";

/**
 * @internal
 */
export interface LicenseManagerUserSubscriptionsHttpAuthSchemeParameters extends HttpAuthSchemeParameters {
  region?: string;
}

/**
 * @internal
 */
export interface LicenseManagerUserSubscriptionsHttpAuthSchemeParametersProvider
  extends HttpAuthSchemeParametersProvider<
    LicenseManagerUserSubscriptionsClientResolvedConfig,
    HandlerExecutionContext,
    LicenseManagerUserSubscriptionsHttpAuthSchemeParameters,
    object
  > {}

/**
 * @internal
 */
export const defaultLicenseManagerUserSubscriptionsHttpAuthSchemeParametersProvider = async (
  config: LicenseManagerUserSubscriptionsClientResolvedConfig,
  context: HandlerExecutionContext,
  input: object
): Promise<LicenseManagerUserSubscriptionsHttpAuthSchemeParameters> => {
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
  authParameters: LicenseManagerUserSubscriptionsHttpAuthSchemeParameters
): HttpAuthOption {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "license-manager-user-subscriptions",
      region: authParameters.region,
    },
    propertiesExtractor: (config: Partial<LicenseManagerUserSubscriptionsClientConfig>, context) => ({
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
export interface LicenseManagerUserSubscriptionsHttpAuthSchemeProvider
  extends HttpAuthSchemeProvider<LicenseManagerUserSubscriptionsHttpAuthSchemeParameters> {}

/**
 * @internal
 */
export const defaultLicenseManagerUserSubscriptionsHttpAuthSchemeProvider: LicenseManagerUserSubscriptionsHttpAuthSchemeProvider =
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
  httpAuthSchemeProvider?: LicenseManagerUserSubscriptionsHttpAuthSchemeProvider;
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
  readonly httpAuthSchemeProvider: LicenseManagerUserSubscriptionsHttpAuthSchemeProvider;
}

/**
 * @internal
 */
export const resolveHttpAuthSchemeConfig = <T>(
  config: T & HttpAuthSchemeInputConfig & AwsSdkSigV4PreviouslyResolved
): T & HttpAuthSchemeResolvedConfig => {
  const config_0 = resolveAwsSdkSigV4Config(config);
  return {
    ...config_0,
  } as T & HttpAuthSchemeResolvedConfig;
};
