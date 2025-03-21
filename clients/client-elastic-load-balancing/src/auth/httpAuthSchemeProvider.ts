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
  ElasticLoadBalancingClientConfig,
  ElasticLoadBalancingClientResolvedConfig,
} from "../ElasticLoadBalancingClient";

/**
 * @internal
 */
export interface ElasticLoadBalancingHttpAuthSchemeParameters extends HttpAuthSchemeParameters {
  region?: string;
}

/**
 * @internal
 */
export interface ElasticLoadBalancingHttpAuthSchemeParametersProvider
  extends HttpAuthSchemeParametersProvider<
    ElasticLoadBalancingClientResolvedConfig,
    HandlerExecutionContext,
    ElasticLoadBalancingHttpAuthSchemeParameters,
    object
  > {}

/**
 * @internal
 */
export const defaultElasticLoadBalancingHttpAuthSchemeParametersProvider = async (
  config: ElasticLoadBalancingClientResolvedConfig,
  context: HandlerExecutionContext,
  input: object
): Promise<ElasticLoadBalancingHttpAuthSchemeParameters> => {
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
  authParameters: ElasticLoadBalancingHttpAuthSchemeParameters
): HttpAuthOption {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "elasticloadbalancing",
      region: authParameters.region,
    },
    propertiesExtractor: (config: Partial<ElasticLoadBalancingClientConfig>, context) => ({
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
export interface ElasticLoadBalancingHttpAuthSchemeProvider
  extends HttpAuthSchemeProvider<ElasticLoadBalancingHttpAuthSchemeParameters> {}

/**
 * @internal
 */
export const defaultElasticLoadBalancingHttpAuthSchemeProvider: ElasticLoadBalancingHttpAuthSchemeProvider = (
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
  httpAuthSchemeProvider?: ElasticLoadBalancingHttpAuthSchemeProvider;
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
  readonly httpAuthSchemeProvider: ElasticLoadBalancingHttpAuthSchemeProvider;
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
