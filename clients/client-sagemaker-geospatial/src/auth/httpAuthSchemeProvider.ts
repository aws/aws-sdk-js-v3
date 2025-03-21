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

import { SageMakerGeospatialClientConfig, SageMakerGeospatialClientResolvedConfig } from "../SageMakerGeospatialClient";

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
    region:
      (await normalizeProvider(config.region)()) ||
      (() => {
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
export const defaultSageMakerGeospatialHttpAuthSchemeProvider: SageMakerGeospatialHttpAuthSchemeProvider = (
  authParameters
) => {
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
  httpAuthSchemeProvider?: SageMakerGeospatialHttpAuthSchemeProvider;
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
  readonly httpAuthSchemeProvider: SageMakerGeospatialHttpAuthSchemeProvider;
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
