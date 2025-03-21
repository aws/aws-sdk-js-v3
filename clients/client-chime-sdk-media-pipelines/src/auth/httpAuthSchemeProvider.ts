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
  ChimeSDKMediaPipelinesClientConfig,
  ChimeSDKMediaPipelinesClientResolvedConfig,
} from "../ChimeSDKMediaPipelinesClient";

/**
 * @internal
 */
export interface ChimeSDKMediaPipelinesHttpAuthSchemeParameters extends HttpAuthSchemeParameters {
  region?: string;
}

/**
 * @internal
 */
export interface ChimeSDKMediaPipelinesHttpAuthSchemeParametersProvider
  extends HttpAuthSchemeParametersProvider<
    ChimeSDKMediaPipelinesClientResolvedConfig,
    HandlerExecutionContext,
    ChimeSDKMediaPipelinesHttpAuthSchemeParameters,
    object
  > {}

/**
 * @internal
 */
export const defaultChimeSDKMediaPipelinesHttpAuthSchemeParametersProvider = async (
  config: ChimeSDKMediaPipelinesClientResolvedConfig,
  context: HandlerExecutionContext,
  input: object
): Promise<ChimeSDKMediaPipelinesHttpAuthSchemeParameters> => {
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
  authParameters: ChimeSDKMediaPipelinesHttpAuthSchemeParameters
): HttpAuthOption {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "chime",
      region: authParameters.region,
    },
    propertiesExtractor: (config: Partial<ChimeSDKMediaPipelinesClientConfig>, context) => ({
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
export interface ChimeSDKMediaPipelinesHttpAuthSchemeProvider
  extends HttpAuthSchemeProvider<ChimeSDKMediaPipelinesHttpAuthSchemeParameters> {}

/**
 * @internal
 */
export const defaultChimeSDKMediaPipelinesHttpAuthSchemeProvider: ChimeSDKMediaPipelinesHttpAuthSchemeProvider = (
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
  httpAuthSchemeProvider?: ChimeSDKMediaPipelinesHttpAuthSchemeProvider;
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
  readonly httpAuthSchemeProvider: ChimeSDKMediaPipelinesHttpAuthSchemeProvider;
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
