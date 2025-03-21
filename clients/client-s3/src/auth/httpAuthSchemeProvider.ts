// smithy-typescript generated code
import {
  AwsSdkSigV4AAuthInputConfig,
  AwsSdkSigV4AAuthResolvedConfig,
  AwsSdkSigV4APreviouslyResolved,
  AwsSdkSigV4AuthInputConfig,
  AwsSdkSigV4AuthResolvedConfig,
  AwsSdkSigV4PreviouslyResolved,
  resolveAwsSdkSigV4AConfig,
  resolveAwsSdkSigV4Config,
} from "@aws-sdk/core";
import { signatureV4CrtContainer } from "@aws-sdk/signature-v4-multi-region";
import { EndpointParameterInstructions, resolveParams } from "@smithy/middleware-endpoint";
import {
  EndpointV2,
  HandlerExecutionContext,
  HttpAuthOption,
  HttpAuthScheme,
  HttpAuthSchemeId,
  HttpAuthSchemeParameters,
  HttpAuthSchemeParametersProvider,
  HttpAuthSchemeProvider,
  Logger,
} from "@smithy/types";
import { getSmithyContext, normalizeProvider } from "@smithy/util-middleware";

import { EndpointParameters } from "../endpoint/EndpointParameters";
import { defaultEndpointResolver } from "../endpoint/endpointResolver";
import { S3ClientConfig, S3ClientResolvedConfig } from "../S3Client";

/**
 * @internal
 */
interface _S3HttpAuthSchemeParameters extends HttpAuthSchemeParameters {
  region?: string;
}

/**
 * @internal
 */
export interface S3HttpAuthSchemeParameters extends _S3HttpAuthSchemeParameters, EndpointParameters {
  region?: string;
}

/**
 * @internal
 */
export interface S3HttpAuthSchemeParametersProvider
  extends HttpAuthSchemeParametersProvider<
    S3ClientResolvedConfig,
    HandlerExecutionContext,
    S3HttpAuthSchemeParameters,
    object
  > {}

/**
 * @internal
 */
interface EndpointRuleSetSmithyContext {
  commandInstance?: {
    constructor?: {
      getEndpointParameterInstructions(): EndpointParameterInstructions;
    };
  };
}
/**
 * @internal
 */
interface EndpointRuleSetHttpAuthSchemeParametersProvider<
  TConfig extends object,
  TContext extends HandlerExecutionContext,
  TParameters extends HttpAuthSchemeParameters & EndpointParameters,
  TInput extends object
> extends HttpAuthSchemeParametersProvider<TConfig, TContext, TParameters, TInput> {}
/**
 * @internal
 */
const createEndpointRuleSetHttpAuthSchemeParametersProvider =
  <
    TConfig extends object,
    TContext extends HandlerExecutionContext,
    THttpAuthSchemeParameters extends HttpAuthSchemeParameters,
    TEndpointParameters extends EndpointParameters,
    TParameters extends THttpAuthSchemeParameters & TEndpointParameters,
    TInput extends object
  >(
    defaultHttpAuthSchemeParametersProvider: HttpAuthSchemeParametersProvider<
      TConfig,
      TContext,
      THttpAuthSchemeParameters,
      TInput
    >
  ): EndpointRuleSetHttpAuthSchemeParametersProvider<
    TConfig,
    TContext,
    THttpAuthSchemeParameters & TEndpointParameters,
    TInput
  > =>
  async (config: TConfig, context: TContext, input: TInput): Promise<TParameters> => {
    if (!input) {
      throw new Error(`Could not find \`input\` for \`defaultEndpointRuleSetHttpAuthSchemeParametersProvider\``);
    }
    const defaultParameters = await defaultHttpAuthSchemeParametersProvider(config, context, input);
    const instructionsFn = (getSmithyContext(context) as EndpointRuleSetSmithyContext)?.commandInstance?.constructor
      ?.getEndpointParameterInstructions;
    if (!instructionsFn) {
      throw new Error(`getEndpointParameterInstructions() is not defined on \`${context.commandName!}\``);
    }
    const endpointParameters = await resolveParams(
      input as Record<string, unknown>,
      { getEndpointParameterInstructions: instructionsFn! },
      config as Record<string, unknown>
    );
    return Object.assign(defaultParameters, endpointParameters) as TParameters;
  };
/**
 * @internal
 */
const _defaultS3HttpAuthSchemeParametersProvider = async (
  config: S3ClientResolvedConfig,
  context: HandlerExecutionContext,
  input: object
): Promise<_S3HttpAuthSchemeParameters> => {
  return {
    operation: getSmithyContext(context).operation as string,
    region:
      (await normalizeProvider(config.region)()) ||
      (() => {
        throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
      })(),
  };
};
/**
 * @internal
 */
export const defaultS3HttpAuthSchemeParametersProvider: S3HttpAuthSchemeParametersProvider =
  createEndpointRuleSetHttpAuthSchemeParametersProvider(_defaultS3HttpAuthSchemeParametersProvider);

function createAwsAuthSigv4HttpAuthOption(authParameters: S3HttpAuthSchemeParameters): HttpAuthOption {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "s3",
      region: authParameters.region,
    },
    propertiesExtractor: (config: Partial<S3ClientConfig>, context) => ({
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

function createAwsAuthSigv4aHttpAuthOption(authParameters: S3HttpAuthSchemeParameters): HttpAuthOption {
  return {
    schemeId: "aws.auth#sigv4a",
    signingProperties: {
      name: "s3",
      region: authParameters.region,
    },
    propertiesExtractor: (config: Partial<S3ClientConfig>, context) => ({
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
interface _S3HttpAuthSchemeProvider extends HttpAuthSchemeProvider<S3HttpAuthSchemeParameters> {}

/**
 * @internal
 */
export interface S3HttpAuthSchemeProvider extends HttpAuthSchemeProvider<S3HttpAuthSchemeParameters> {}

/**
 * @internal
 */
interface EndpointRuleSetHttpAuthSchemeProvider<
  EndpointParametersT extends EndpointParameters,
  HttpAuthSchemeParametersT extends HttpAuthSchemeParameters
> extends HttpAuthSchemeProvider<EndpointParametersT & HttpAuthSchemeParametersT> {}
/**
 * @internal
 */
interface DefaultEndpointResolver<EndpointParametersT extends EndpointParameters> {
  (params: EndpointParametersT, context?: { logger?: Logger }): EndpointV2;
}
/**
 * @internal
 */
const createEndpointRuleSetHttpAuthSchemeProvider = <
  EndpointParametersT extends EndpointParameters,
  HttpAuthSchemeParametersT extends HttpAuthSchemeParameters
>(
  defaultEndpointResolver: DefaultEndpointResolver<EndpointParametersT>,
  defaultHttpAuthSchemeResolver: HttpAuthSchemeProvider<HttpAuthSchemeParametersT>,
  createHttpAuthOptionFunctions: Record<
    HttpAuthSchemeId,
    (authParameters: EndpointParametersT & HttpAuthSchemeParametersT) => HttpAuthOption
  >
): EndpointRuleSetHttpAuthSchemeProvider<EndpointParametersT, HttpAuthSchemeParametersT> => {
  const endpointRuleSetHttpAuthSchemeProvider: EndpointRuleSetHttpAuthSchemeProvider<
    EndpointParametersT,
    HttpAuthSchemeParametersT
  > = (authParameters) => {
    const endpoint: EndpointV2 = defaultEndpointResolver(authParameters);
    const authSchemes = endpoint.properties?.authSchemes;
    if (!authSchemes) {
      return defaultHttpAuthSchemeResolver(authParameters);
    }
    const options: HttpAuthOption[] = [];
    for (const scheme of authSchemes) {
      const { name: resolvedName, properties = {}, ...rest } = scheme;
      const name = resolvedName.toLowerCase();
      if (resolvedName !== name) {
        console.warn(`HttpAuthScheme has been normalized with lowercasing: \`${resolvedName}\` to \`${name}\``);
      }
      let schemeId;
      if (name === "sigv4a") {
        schemeId = "aws.auth#sigv4a";
        const sigv4Present = authSchemes.find((s) => {
          const name = s.name.toLowerCase();
          return name !== "sigv4a" && name.startsWith("sigv4");
        });
        if (!signatureV4CrtContainer.CrtSignerV4 && sigv4Present) {
          // sigv4a -> sigv4 fallback.
          continue;
        }
      } else if (name.startsWith("sigv4")) {
        schemeId = "aws.auth#sigv4";
      } else {
        throw new Error(`Unknown HttpAuthScheme found in \`@smithy.rules#endpointRuleSet\`: \`${name}\``);
      }
      const createOption = createHttpAuthOptionFunctions[schemeId];
      if (!createOption) {
        throw new Error(`Could not find HttpAuthOption create function for \`${schemeId}\``);
      }
      const option = createOption(authParameters);
      option.schemeId = schemeId;
      option.signingProperties = { ...(option.signingProperties || {}), ...rest, ...properties };
      options.push(option);
    }
    return options;
  };

  return endpointRuleSetHttpAuthSchemeProvider;
};
/**
 * @internal
 */
const _defaultS3HttpAuthSchemeProvider: _S3HttpAuthSchemeProvider = (authParameters) => {
  const options: HttpAuthOption[] = [];
  switch (authParameters.operation) {
    default: {
      options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
      options.push(createAwsAuthSigv4aHttpAuthOption(authParameters));
    }
  }
  return options;
};
/**
 * @internal
 */
export const defaultS3HttpAuthSchemeProvider: S3HttpAuthSchemeProvider = createEndpointRuleSetHttpAuthSchemeProvider(
  defaultEndpointResolver,
  _defaultS3HttpAuthSchemeProvider,
  {
    "aws.auth#sigv4": createAwsAuthSigv4HttpAuthOption,
    "aws.auth#sigv4a": createAwsAuthSigv4aHttpAuthOption,
  }
);

/**
 * @internal
 */
export interface HttpAuthSchemeInputConfig extends AwsSdkSigV4AuthInputConfig, AwsSdkSigV4AAuthInputConfig {
  /**
   * Configuration of HttpAuthSchemes for a client which provides default identity providers and signers per auth scheme.
   * @internal
   */
  httpAuthSchemes?: HttpAuthScheme[];

  /**
   * Configuration of an HttpAuthSchemeProvider for a client which resolves which HttpAuthScheme to use.
   * @internal
   */
  httpAuthSchemeProvider?: S3HttpAuthSchemeProvider;
}

/**
 * @internal
 */
export interface HttpAuthSchemeResolvedConfig extends AwsSdkSigV4AuthResolvedConfig, AwsSdkSigV4AAuthResolvedConfig {
  /**
   * Configuration of HttpAuthSchemes for a client which provides default identity providers and signers per auth scheme.
   * @internal
   */
  readonly httpAuthSchemes: HttpAuthScheme[];

  /**
   * Configuration of an HttpAuthSchemeProvider for a client which resolves which HttpAuthScheme to use.
   * @internal
   */
  readonly httpAuthSchemeProvider: S3HttpAuthSchemeProvider;
}

/**
 * @internal
 */
export const resolveHttpAuthSchemeConfig = <T, R extends object>(
  config: T & HttpAuthSchemeInputConfig & AwsSdkSigV4PreviouslyResolved & AwsSdkSigV4APreviouslyResolved,
  { client }: { client: () => { config: R } }
): T & HttpAuthSchemeResolvedConfig => {
  const config_0 = resolveAwsSdkSigV4Config(config, client);
  const config_1 = resolveAwsSdkSigV4AConfig(config_0);
  return {
    ...config_1,
  } as T & HttpAuthSchemeResolvedConfig;
};
