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
  ResourceGroupsTaggingAPIClientConfig,
  ResourceGroupsTaggingAPIClientResolvedConfig,
} from "../ResourceGroupsTaggingAPIClient";

/**
 * @internal
 */
export interface ResourceGroupsTaggingAPIHttpAuthSchemeParameters extends HttpAuthSchemeParameters {
  region?: string;
}

/**
 * @internal
 */
export interface ResourceGroupsTaggingAPIHttpAuthSchemeParametersProvider
  extends HttpAuthSchemeParametersProvider<
    ResourceGroupsTaggingAPIClientResolvedConfig,
    HandlerExecutionContext,
    ResourceGroupsTaggingAPIHttpAuthSchemeParameters,
    object
  > {}

/**
 * @internal
 */
export const defaultResourceGroupsTaggingAPIHttpAuthSchemeParametersProvider = async (
  config: ResourceGroupsTaggingAPIClientResolvedConfig,
  context: HandlerExecutionContext,
  input: object
): Promise<ResourceGroupsTaggingAPIHttpAuthSchemeParameters> => {
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
  authParameters: ResourceGroupsTaggingAPIHttpAuthSchemeParameters
): HttpAuthOption {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "tagging",
      region: authParameters.region,
    },
    propertiesExtractor: (config: Partial<ResourceGroupsTaggingAPIClientConfig>, context) => ({
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
export interface ResourceGroupsTaggingAPIHttpAuthSchemeProvider
  extends HttpAuthSchemeProvider<ResourceGroupsTaggingAPIHttpAuthSchemeParameters> {}

/**
 * @internal
 */
export const defaultResourceGroupsTaggingAPIHttpAuthSchemeProvider: ResourceGroupsTaggingAPIHttpAuthSchemeProvider = (
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
  httpAuthSchemeProvider?: ResourceGroupsTaggingAPIHttpAuthSchemeProvider;
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
  readonly httpAuthSchemeProvider: ResourceGroupsTaggingAPIHttpAuthSchemeProvider;
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
