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
  ServiceCatalogAppRegistryClientConfig,
  ServiceCatalogAppRegistryClientResolvedConfig,
} from "../ServiceCatalogAppRegistryClient";

/**
 * @internal
 */
export interface ServiceCatalogAppRegistryHttpAuthSchemeParameters extends HttpAuthSchemeParameters {
  region?: string;
}

/**
 * @internal
 */
export interface ServiceCatalogAppRegistryHttpAuthSchemeParametersProvider
  extends HttpAuthSchemeParametersProvider<
    ServiceCatalogAppRegistryClientResolvedConfig,
    HandlerExecutionContext,
    ServiceCatalogAppRegistryHttpAuthSchemeParameters,
    object
  > {}

/**
 * @internal
 */
export const defaultServiceCatalogAppRegistryHttpAuthSchemeParametersProvider = async (
  config: ServiceCatalogAppRegistryClientResolvedConfig,
  context: HandlerExecutionContext,
  input: object
): Promise<ServiceCatalogAppRegistryHttpAuthSchemeParameters> => {
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
  authParameters: ServiceCatalogAppRegistryHttpAuthSchemeParameters
): HttpAuthOption {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "servicecatalog",
      region: authParameters.region,
    },
    propertiesExtractor: (config: Partial<ServiceCatalogAppRegistryClientConfig>, context) => ({
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
export interface ServiceCatalogAppRegistryHttpAuthSchemeProvider
  extends HttpAuthSchemeProvider<ServiceCatalogAppRegistryHttpAuthSchemeParameters> {}

/**
 * @internal
 */
export const defaultServiceCatalogAppRegistryHttpAuthSchemeProvider: ServiceCatalogAppRegistryHttpAuthSchemeProvider = (
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
  httpAuthSchemeProvider?: ServiceCatalogAppRegistryHttpAuthSchemeProvider;
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
  readonly httpAuthSchemeProvider: ServiceCatalogAppRegistryHttpAuthSchemeProvider;
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
