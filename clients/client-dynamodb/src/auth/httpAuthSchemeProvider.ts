// smithy-typescript generated code
import {
  AWSSDKSigV4AuthInputConfig,
  AWSSDKSigV4AuthResolvedConfig,
  AWSSDKSigV4PreviouslyResolved,
  resolveAWSSDKSigV4Config,
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

import { DynamoDBClientConfig, DynamoDBClientResolvedConfig } from "../DynamoDBClient";

/**
 * @internal
 */
export interface DynamoDBHttpAuthSchemeParameters extends HttpAuthSchemeParameters {
  region?: string;
}

/**
 * @internal
 */
export interface DynamoDBHttpAuthSchemeParametersProvider
  extends HttpAuthSchemeParametersProvider<
    DynamoDBClientResolvedConfig,
    HandlerExecutionContext,
    DynamoDBHttpAuthSchemeParameters,
    object
  > {}

/**
 * @internal
 */
export const defaultDynamoDBHttpAuthSchemeParametersProvider = async (
  config: DynamoDBClientResolvedConfig,
  context: HandlerExecutionContext,
  input: object
): Promise<DynamoDBHttpAuthSchemeParameters> => {
  return {
    operation: getSmithyContext(context).operation as string,
    region:
      (await normalizeProvider(config.region)()) ||
      (() => {
        throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
      })(),
  };
};

function createAwsAuthSigv4HttpAuthOption(authParameters: DynamoDBHttpAuthSchemeParameters): HttpAuthOption {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "dynamodb",
      region: authParameters.region,
    },
    propertiesExtractor: (config: DynamoDBClientConfig, context) => ({
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
export interface DynamoDBHttpAuthSchemeProvider extends HttpAuthSchemeProvider<DynamoDBHttpAuthSchemeParameters> {}

/**
 * @internal
 */
export const defaultDynamoDBHttpAuthSchemeProvider: DynamoDBHttpAuthSchemeProvider = (authParameters) => {
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
export interface HttpAuthSchemeInputConfig extends AWSSDKSigV4AuthInputConfig {
  /**
   * experimentalIdentityAndAuth: Configuration of HttpAuthSchemes for a client which provides default identity providers and signers per auth scheme.
   * @internal
   */
  httpAuthSchemes?: HttpAuthScheme[];

  /**
   * experimentalIdentityAndAuth: Configuration of an HttpAuthSchemeProvider for a client which resolves which HttpAuthScheme to use.
   * @internal
   */
  httpAuthSchemeProvider?: DynamoDBHttpAuthSchemeProvider;
}

/**
 * @internal
 */
export interface HttpAuthSchemeResolvedConfig extends AWSSDKSigV4AuthResolvedConfig {
  /**
   * experimentalIdentityAndAuth: Configuration of HttpAuthSchemes for a client which provides default identity providers and signers per auth scheme.
   * @internal
   */
  readonly httpAuthSchemes: HttpAuthScheme[];

  /**
   * experimentalIdentityAndAuth: Configuration of an HttpAuthSchemeProvider for a client which resolves which HttpAuthScheme to use.
   * @internal
   */
  readonly httpAuthSchemeProvider: DynamoDBHttpAuthSchemeProvider;
}

/**
 * @internal
 */
export const resolveHttpAuthSchemeConfig = <T>(
  config: T & HttpAuthSchemeInputConfig & AWSSDKSigV4PreviouslyResolved
): T & HttpAuthSchemeResolvedConfig => {
  const config_0 = resolveAWSSDKSigV4Config(config);
  return {
    ...config_0,
  } as T & HttpAuthSchemeResolvedConfig;
};
