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
  type SageMakerRuntimeHTTP2ClientResolvedConfig,
  SageMakerRuntimeHTTP2ClientConfig,
} from "../SageMakerRuntimeHTTP2Client";

/**
 * @internal
 */
export interface SageMakerRuntimeHTTP2HttpAuthSchemeParameters extends HttpAuthSchemeParameters {
  region?: string;
}

/**
 * @internal
 */
export interface SageMakerRuntimeHTTP2HttpAuthSchemeParametersProvider
  extends HttpAuthSchemeParametersProvider<
    SageMakerRuntimeHTTP2ClientResolvedConfig,
    HandlerExecutionContext,
    SageMakerRuntimeHTTP2HttpAuthSchemeParameters,
    object
  > {}

/**
 * @internal
 */
export const defaultSageMakerRuntimeHTTP2HttpAuthSchemeParametersProvider = async (
  config: SageMakerRuntimeHTTP2ClientResolvedConfig,
  context: HandlerExecutionContext,
  input: object
): Promise<SageMakerRuntimeHTTP2HttpAuthSchemeParameters> => {
  return {
    operation: getSmithyContext(context).operation as string,
    region: await normalizeProvider(config.region)() || (() => {
      throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
    })(),
  };
};

function createAwsAuthSigv4HttpAuthOption(authParameters: SageMakerRuntimeHTTP2HttpAuthSchemeParameters): HttpAuthOption {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "sagemaker",
      region: authParameters.region,
    },
    propertiesExtractor: (config: Partial<SageMakerRuntimeHTTP2ClientConfig>, context) => ({
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
export interface SageMakerRuntimeHTTP2HttpAuthSchemeProvider
  extends HttpAuthSchemeProvider<SageMakerRuntimeHTTP2HttpAuthSchemeParameters> {}

/**
 * @internal
 */
export const defaultSageMakerRuntimeHTTP2HttpAuthSchemeProvider: SageMakerRuntimeHTTP2HttpAuthSchemeProvider = (authParameters) => {
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
  httpAuthSchemeProvider?: SageMakerRuntimeHTTP2HttpAuthSchemeProvider;
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
  readonly httpAuthSchemeProvider: SageMakerRuntimeHTTP2HttpAuthSchemeProvider;
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
