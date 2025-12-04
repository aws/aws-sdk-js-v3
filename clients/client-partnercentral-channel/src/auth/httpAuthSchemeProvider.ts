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
import { SignatureV4MultiRegion } from "@aws-sdk/signature-v4-multi-region";
import { EndpointParameterInstructions, resolveParams } from "@smithy/middleware-endpoint";
import {
  type HttpAuthOption,
  type HttpAuthScheme,
  type HttpAuthSchemeParametersProvider,
  type Provider,
  EndpointV2,
  HandlerExecutionContext,
  HttpAuthSchemeId,
  HttpAuthSchemeParameters,
  HttpAuthSchemeProvider,
  Logger,
} from "@smithy/types";
import { getSmithyContext, normalizeProvider } from "@smithy/util-middleware";

import { EndpointParameters } from "../endpoint/EndpointParameters";
import { defaultEndpointResolver } from "../endpoint/endpointResolver";
import {
  PartnerCentralChannelClientConfig,
  PartnerCentralChannelClientResolvedConfig,
} from "../PartnerCentralChannelClient";

/**
 * @internal
 */
interface _PartnerCentralChannelHttpAuthSchemeParameters extends HttpAuthSchemeParameters {
  region?: string;
}

/**
 * @internal
 */
export interface PartnerCentralChannelHttpAuthSchemeParameters
  extends _PartnerCentralChannelHttpAuthSchemeParameters,
    EndpointParameters {
  region?: string;
}

/**
 * @internal
 */
export interface PartnerCentralChannelHttpAuthSchemeParametersProvider
  extends HttpAuthSchemeParametersProvider<
    PartnerCentralChannelClientResolvedConfig,
    HandlerExecutionContext,
    PartnerCentralChannelHttpAuthSchemeParameters,
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
const _defaultPartnerCentralChannelHttpAuthSchemeParametersProvider = async (
  config: PartnerCentralChannelClientResolvedConfig,
  context: HandlerExecutionContext,
  input: object
): Promise<_PartnerCentralChannelHttpAuthSchemeParameters> => {
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
export const defaultPartnerCentralChannelHttpAuthSchemeParametersProvider: PartnerCentralChannelHttpAuthSchemeParametersProvider =
  createEndpointRuleSetHttpAuthSchemeParametersProvider(_defaultPartnerCentralChannelHttpAuthSchemeParametersProvider);

function createAwsAuthSigv4HttpAuthOption(
  authParameters: PartnerCentralChannelHttpAuthSchemeParameters
): HttpAuthOption {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "partnercentral-channel",
      region: authParameters.region,
    },
    propertiesExtractor: (config: Partial<PartnerCentralChannelClientConfig>, context) => ({
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

function createAwsAuthSigv4aHttpAuthOption(
  authParameters: PartnerCentralChannelHttpAuthSchemeParameters
): HttpAuthOption {
  return {
    schemeId: "aws.auth#sigv4a",
    signingProperties: {
      name: "partnercentral-channel",
      region: authParameters.region,
    },
    propertiesExtractor: (config: Partial<PartnerCentralChannelClientConfig>, context) => ({
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
interface _PartnerCentralChannelHttpAuthSchemeProvider
  extends HttpAuthSchemeProvider<PartnerCentralChannelHttpAuthSchemeParameters> {}

/**
 * @internal
 */
export interface PartnerCentralChannelHttpAuthSchemeProvider
  extends HttpAuthSchemeProvider<PartnerCentralChannelHttpAuthSchemeParameters> {}

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
        if (SignatureV4MultiRegion.sigv4aDependency() === "none" && sigv4Present) {
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
const _defaultPartnerCentralChannelHttpAuthSchemeProvider: _PartnerCentralChannelHttpAuthSchemeProvider = (
  authParameters
) => {
  const options: HttpAuthOption[] = [];
  switch (authParameters.operation) {
    default: {
      options.push(createAwsAuthSigv4aHttpAuthOption(authParameters));
      options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
    }
  }
  return options;
};
/**
 * @internal
 */
export const defaultPartnerCentralChannelHttpAuthSchemeProvider: PartnerCentralChannelHttpAuthSchemeProvider =
  createEndpointRuleSetHttpAuthSchemeProvider(
    defaultEndpointResolver,
    _defaultPartnerCentralChannelHttpAuthSchemeProvider,
    {
      "aws.auth#sigv4": createAwsAuthSigv4HttpAuthOption,
      "aws.auth#sigv4a": createAwsAuthSigv4aHttpAuthOption,
    }
  );

/**
 * @public
 */
export interface HttpAuthSchemeInputConfig extends AwsSdkSigV4AuthInputConfig, AwsSdkSigV4AAuthInputConfig {
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
  httpAuthSchemeProvider?: PartnerCentralChannelHttpAuthSchemeProvider;
}

/**
 * @internal
 */
export interface HttpAuthSchemeResolvedConfig extends AwsSdkSigV4AuthResolvedConfig, AwsSdkSigV4AAuthResolvedConfig {
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
  readonly httpAuthSchemeProvider: PartnerCentralChannelHttpAuthSchemeProvider;
}

/**
 * @internal
 */
export const resolveHttpAuthSchemeConfig = <T>(
  config: T & HttpAuthSchemeInputConfig & AwsSdkSigV4PreviouslyResolved & AwsSdkSigV4APreviouslyResolved
): T & HttpAuthSchemeResolvedConfig => {
  const config_0 = resolveAwsSdkSigV4Config(config);
  const config_1 = resolveAwsSdkSigV4AConfig(config_0);
  return Object.assign(config_1, {
    authSchemePreference: normalizeProvider(config.authSchemePreference ?? []),
  }) as T & HttpAuthSchemeResolvedConfig;
};
