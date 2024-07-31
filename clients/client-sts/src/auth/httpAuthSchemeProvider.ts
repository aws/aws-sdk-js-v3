// smithy-typescript generated code
import {
  AwsSdkSigV4AuthInputConfig,
  AwsSdkSigV4AuthResolvedConfig,
  AwsSdkSigV4PreviouslyResolved,
  resolveAwsSdkSigV4Config,
} from "@aws-sdk/core";
import {
  Client,
  HandlerExecutionContext,
  HttpAuthOption,
  HttpAuthScheme,
  HttpAuthSchemeParameters,
  HttpAuthSchemeParametersProvider,
  HttpAuthSchemeProvider,
} from "@smithy/types";
import { getSmithyContext, normalizeProvider } from "@smithy/util-middleware";

import { STSClient, STSClientConfig, STSClientResolvedConfig } from "../STSClient";

/**
 * @internal
 */
export interface STSHttpAuthSchemeParameters extends HttpAuthSchemeParameters {
  region?: string;
}

/**
 * @internal
 */
export interface STSHttpAuthSchemeParametersProvider
  extends HttpAuthSchemeParametersProvider<
    STSClientResolvedConfig,
    HandlerExecutionContext,
    STSHttpAuthSchemeParameters,
    object
  > {}

/**
 * @internal
 */
export const defaultSTSHttpAuthSchemeParametersProvider = async (
  config: STSClientResolvedConfig,
  context: HandlerExecutionContext,
  input: object
): Promise<STSHttpAuthSchemeParameters> => {
  return {
    operation: getSmithyContext(context).operation as string,
    region:
      (await normalizeProvider(config.region)()) ||
      (() => {
        throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
      })(),
  };
};

function createAwsAuthSigv4HttpAuthOption(authParameters: STSHttpAuthSchemeParameters): HttpAuthOption {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "sts",
      region: authParameters.region,
    },
    propertiesExtractor: (config: Partial<STSClientConfig>, context) => ({
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

function createSmithyApiNoAuthHttpAuthOption(authParameters: STSHttpAuthSchemeParameters): HttpAuthOption {
  return {
    schemeId: "smithy.api#noAuth",
  };
}

/**
 * @internal
 */
export interface STSHttpAuthSchemeProvider extends HttpAuthSchemeProvider<STSHttpAuthSchemeParameters> {}

/**
 * @internal
 */
export const defaultSTSHttpAuthSchemeProvider: STSHttpAuthSchemeProvider = (authParameters) => {
  const options: HttpAuthOption[] = [];
  switch (authParameters.operation) {
    case "AssumeRoleWithSAML": {
      options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
      break;
    }
    case "AssumeRoleWithWebIdentity": {
      options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
      break;
    }
    default: {
      options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
    }
  }
  return options;
};

export interface StsAuthInputConfig {}

export interface StsAuthResolvedConfig {
  /**
   * Reference to STSClient class constructor.
   * @internal
   */
  stsClientCtor: new (clientConfig: any) => Client<any, any, any>;
}

export const resolveStsAuthConfig = <T>(input: T & StsAuthInputConfig): T & StsAuthResolvedConfig => ({
  ...input,
  stsClientCtor: STSClient,
});

/**
 * @internal
 */
export interface HttpAuthSchemeInputConfig extends StsAuthInputConfig, AwsSdkSigV4AuthInputConfig {
  /**
   * Configuration of HttpAuthSchemes for a client which provides default identity providers and signers per auth scheme.
   * @internal
   */
  httpAuthSchemes?: HttpAuthScheme[];

  /**
   * Configuration of an HttpAuthSchemeProvider for a client which resolves which HttpAuthScheme to use.
   * @internal
   */
  httpAuthSchemeProvider?: STSHttpAuthSchemeProvider;
}

/**
 * @internal
 */
export interface HttpAuthSchemeResolvedConfig extends StsAuthResolvedConfig, AwsSdkSigV4AuthResolvedConfig {
  /**
   * Configuration of HttpAuthSchemes for a client which provides default identity providers and signers per auth scheme.
   * @internal
   */
  readonly httpAuthSchemes: HttpAuthScheme[];

  /**
   * Configuration of an HttpAuthSchemeProvider for a client which resolves which HttpAuthScheme to use.
   * @internal
   */
  readonly httpAuthSchemeProvider: STSHttpAuthSchemeProvider;
}

/**
 * @internal
 */
export const resolveHttpAuthSchemeConfig = <T>(
  config: T & HttpAuthSchemeInputConfig & AwsSdkSigV4PreviouslyResolved
): T & HttpAuthSchemeResolvedConfig => {
  const config_0 = resolveStsAuthConfig(config);
  const config_1 = resolveAwsSdkSigV4Config(config_0);
  return {
    ...config_1,
  } as T & HttpAuthSchemeResolvedConfig;
};
