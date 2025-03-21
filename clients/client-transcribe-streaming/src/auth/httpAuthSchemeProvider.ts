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

import { TranscribeStreamingClientConfig, TranscribeStreamingClientResolvedConfig } from "../TranscribeStreamingClient";

/**
 * @internal
 */
export interface TranscribeStreamingHttpAuthSchemeParameters extends HttpAuthSchemeParameters {
  region?: string;
}

/**
 * @internal
 */
export interface TranscribeStreamingHttpAuthSchemeParametersProvider
  extends HttpAuthSchemeParametersProvider<
    TranscribeStreamingClientResolvedConfig,
    HandlerExecutionContext,
    TranscribeStreamingHttpAuthSchemeParameters,
    object
  > {}

/**
 * @internal
 */
export const defaultTranscribeStreamingHttpAuthSchemeParametersProvider = async (
  config: TranscribeStreamingClientResolvedConfig,
  context: HandlerExecutionContext,
  input: object
): Promise<TranscribeStreamingHttpAuthSchemeParameters> => {
  return {
    operation: getSmithyContext(context).operation as string,
    region:
      (await normalizeProvider(config.region)()) ||
      (() => {
        throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
      })(),
  };
};

function createAwsAuthSigv4HttpAuthOption(authParameters: TranscribeStreamingHttpAuthSchemeParameters): HttpAuthOption {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "transcribe",
      region: authParameters.region,
    },
    propertiesExtractor: (config: Partial<TranscribeStreamingClientConfig>, context) => ({
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
export interface TranscribeStreamingHttpAuthSchemeProvider
  extends HttpAuthSchemeProvider<TranscribeStreamingHttpAuthSchemeParameters> {}

/**
 * @internal
 */
export const defaultTranscribeStreamingHttpAuthSchemeProvider: TranscribeStreamingHttpAuthSchemeProvider = (
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
  httpAuthSchemeProvider?: TranscribeStreamingHttpAuthSchemeProvider;
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
  readonly httpAuthSchemeProvider: TranscribeStreamingHttpAuthSchemeProvider;
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
