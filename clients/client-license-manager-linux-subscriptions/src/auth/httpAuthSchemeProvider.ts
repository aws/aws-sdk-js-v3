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
  LicenseManagerLinuxSubscriptionsClientConfig,
  LicenseManagerLinuxSubscriptionsClientResolvedConfig,
} from "../LicenseManagerLinuxSubscriptionsClient";

/**
 * @internal
 */
export interface LicenseManagerLinuxSubscriptionsHttpAuthSchemeParameters extends HttpAuthSchemeParameters {
  region?: string;
}

/**
 * @internal
 */
export interface LicenseManagerLinuxSubscriptionsHttpAuthSchemeParametersProvider
  extends HttpAuthSchemeParametersProvider<
    LicenseManagerLinuxSubscriptionsClientResolvedConfig,
    HandlerExecutionContext,
    LicenseManagerLinuxSubscriptionsHttpAuthSchemeParameters,
    object
  > {}

/**
 * @internal
 */
export const defaultLicenseManagerLinuxSubscriptionsHttpAuthSchemeParametersProvider = async (
  config: LicenseManagerLinuxSubscriptionsClientResolvedConfig,
  context: HandlerExecutionContext,
  input: object
): Promise<LicenseManagerLinuxSubscriptionsHttpAuthSchemeParameters> => {
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
  authParameters: LicenseManagerLinuxSubscriptionsHttpAuthSchemeParameters
): HttpAuthOption {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "license-manager-linux-subscriptions",
      region: authParameters.region,
    },
    propertiesExtractor: (config: Partial<LicenseManagerLinuxSubscriptionsClientConfig>, context) => ({
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
export interface LicenseManagerLinuxSubscriptionsHttpAuthSchemeProvider
  extends HttpAuthSchemeProvider<LicenseManagerLinuxSubscriptionsHttpAuthSchemeParameters> {}

/**
 * @internal
 */
export const defaultLicenseManagerLinuxSubscriptionsHttpAuthSchemeProvider: LicenseManagerLinuxSubscriptionsHttpAuthSchemeProvider =
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
  httpAuthSchemeProvider?: LicenseManagerLinuxSubscriptionsHttpAuthSchemeProvider;
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
  readonly httpAuthSchemeProvider: LicenseManagerLinuxSubscriptionsHttpAuthSchemeProvider;
}

/**
 * @internal
 */
export const resolveHttpAuthSchemeConfig = <T, R extends object>(
  config: T & HttpAuthSchemeInputConfig & AwsSdkSigV4PreviouslyResolved,
  { client }: { client: () => { config: R } }
): T & HttpAuthSchemeResolvedConfig => {
  const config_0 = resolveAwsSdkSigV4Config(config, client);
  return {
    ...config_0,
  } as T & HttpAuthSchemeResolvedConfig;
};
