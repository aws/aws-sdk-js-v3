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
  type SageMakerGeospatialClientResolvedConfig,
  SageMakerGeospatialClientConfig,
} from "../SageMakerGeospatialClient";

/**
 * @internal
 */
export interface SageMakerGeospatialHttpAuthSchemeParameters extends HttpAuthSchemeParameters {
  region?: string;
}

/**
 * @internal
 */
export interface SageMakerGeospatialHttpAuthSchemeParametersProvider
  extends HttpAuthSchemeParametersProvider<
    SageMakerGeospatialClientResolvedConfig,
    HandlerExecutionContext,
    SageMakerGeospatialHttpAuthSchemeParameters,
    object
  > {}

/**
 * @internal
 */
export const defaultSageMakerGeospatialHttpAuthSchemeParametersProvider = async (
  config: SageMakerGeospatialClientResolvedConfig,
  context: HandlerExecutionContext,
  input: object
): Promise<SageMakerGeospatialHttpAuthSchemeParameters> => {
  return {
    operation: getSmithyContext(context).operation as string,
    region: await normalizeProvider(config.region)() || (() => {
      throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
    })(),
  };
};

function createAwsAuthSigv4HttpAuthOption(authParameters: SageMakerGeospatialHttpAuthSchemeParameters): HttpAuthOption {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "sagemaker-geospatial",
      region: authParameters.region,
    },
    propertiesExtractor: (config: Partial<SageMakerGeospatialClientConfig>, context) => ({
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
export interface SageMakerGeospatialHttpAuthSchemeProvider
  extends HttpAuthSchemeProvider<SageMakerGeospatialHttpAuthSchemeParameters> {}

/**
 * @internal
 */
export const defaultSageMakerGeospatialHttpAuthSchemeProvider: SageMakerGeospatialHttpAuthSchemeProvider = (authParameters) => {
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
  httpAuthSchemeProvider?: SageMakerGeospatialHttpAuthSchemeProvider;
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
  readonly httpAuthSchemeProvider: SageMakerGeospatialHttpAuthSchemeProvider;
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
