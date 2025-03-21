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

import { GlobalAcceleratorClientConfig, GlobalAcceleratorClientResolvedConfig } from "../GlobalAcceleratorClient";

/**
 * @internal
 */
export interface GlobalAcceleratorHttpAuthSchemeParameters extends HttpAuthSchemeParameters {
  region?: string;
}

/**
 * @internal
 */
export interface GlobalAcceleratorHttpAuthSchemeParametersProvider
  extends HttpAuthSchemeParametersProvider<
    GlobalAcceleratorClientResolvedConfig,
    HandlerExecutionContext,
    GlobalAcceleratorHttpAuthSchemeParameters,
    object
  > {}

/**
 * @internal
 */
export const defaultGlobalAcceleratorHttpAuthSchemeParametersProvider = async (
  config: GlobalAcceleratorClientResolvedConfig,
  context: HandlerExecutionContext,
  input: object
): Promise<GlobalAcceleratorHttpAuthSchemeParameters> => {
  return {
    operation: getSmithyContext(context).operation as string,
    region:
      (await normalizeProvider(config.region)()) ||
      (() => {
        throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
      })(),
  };
};

function createAwsAuthSigv4HttpAuthOption(authParameters: GlobalAcceleratorHttpAuthSchemeParameters): HttpAuthOption {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "globalaccelerator",
      region: authParameters.region,
    },
    propertiesExtractor: (config: Partial<GlobalAcceleratorClientConfig>, context) => ({
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
export interface GlobalAcceleratorHttpAuthSchemeProvider
  extends HttpAuthSchemeProvider<GlobalAcceleratorHttpAuthSchemeParameters> {}

/**
 * @internal
 */
export const defaultGlobalAcceleratorHttpAuthSchemeProvider: GlobalAcceleratorHttpAuthSchemeProvider = (
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
  httpAuthSchemeProvider?: GlobalAcceleratorHttpAuthSchemeProvider;
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
  readonly httpAuthSchemeProvider: GlobalAcceleratorHttpAuthSchemeProvider;
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
