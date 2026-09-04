import { AwsSdkSigV4Signer } from "@aws-sdk/core/httpAuthSchemes";
import { DefaultIdentityProviderConfig } from "@smithy/core";
import { getSmithyContext, normalizeProvider } from "@smithy/core/client";
import type {
  AwsCredentialIdentity,
  AwsCredentialIdentityProvider,
  HandlerExecutionContext,
  HttpAuthOption,
  HttpAuthScheme,
  HttpAuthSchemeParameters,
  HttpAuthSchemeParametersProvider,
  HttpAuthSchemeProvider,
  IdentityProviderConfig,
} from "@smithy/types";

import type { ModelIndex } from "../ast/ModelIndex";

/**
 * The value of the `aws.auth#sigv4` trait on a service shape.
 *
 * @internal
 */
interface SigV4Trait {
  name: string;
}

/**
 * Configuration required to wire SigV4 auth on a dynamic client.
 *
 * @internal
 */
export interface SigV4AuthConfig {
  signingName: string;
  httpAuthSchemes: HttpAuthScheme[];
  httpAuthSchemeProvider: HttpAuthSchemeProvider<SigV4AuthSchemeParameters>;
  httpAuthSchemeParametersProvider: HttpAuthSchemeParametersProvider<
    any,
    HandlerExecutionContext,
    SigV4AuthSchemeParameters,
    object
  >;
  identityProviderConfigProvider: (config: any) => Promise<IdentityProviderConfig>;
}

/**
 * @internal
 */
interface SigV4AuthSchemeParameters extends HttpAuthSchemeParameters {
  region?: string;
}

/**
 * Detects the `aws.auth#sigv4` trait on the service and returns the SigV4 auth
 * configuration for the dynamic client.
 *
 * @internal
 */
export function buildSigV4Auth(index: ModelIndex): SigV4AuthConfig | undefined {
  const service = index.getService();
  const traits = service?.traits;
  if (!traits || !("aws.auth#sigv4" in traits)) {
    return undefined;
  }

  const sigv4Trait = traits["aws.auth#sigv4"] as SigV4Trait;
  const signingName = sigv4Trait?.name ?? "service";

  const httpAuthSchemes: HttpAuthScheme[] = [
    {
      schemeId: "aws.auth#sigv4",
      identityProvider: (ipc: IdentityProviderConfig) => ipc.getIdentityProvider("aws.auth#sigv4"),
      signer: new AwsSdkSigV4Signer(),
    },
  ];

  const httpAuthSchemeProvider: HttpAuthSchemeProvider<SigV4AuthSchemeParameters> = (
    authParameters: SigV4AuthSchemeParameters
  ) => {
    const options: HttpAuthOption[] = [
      {
        schemeId: "aws.auth#sigv4",
        signingProperties: {
          name: signingName,
          region: authParameters.region,
        },
        propertiesExtractor: (config: any, context: any) => ({
          signingProperties: {
            config,
            context,
          },
        }),
      },
    ];
    return options;
  };

  const httpAuthSchemeParametersProvider: HttpAuthSchemeParametersProvider<
    any,
    HandlerExecutionContext,
    SigV4AuthSchemeParameters,
    object
  > = async (config: any, context: HandlerExecutionContext, input: object): Promise<SigV4AuthSchemeParameters> => {
    return {
      operation: getSmithyContext(context).operation as string,
      region:
        (await normalizeProvider(config.region)()) ||
        (() => {
          throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })(),
    };
  };

  const identityProviderConfigProvider = async (config: any) =>
    new DefaultIdentityProviderConfig({
      "aws.auth#sigv4": config.credentials,
    });

  return {
    signingName,
    httpAuthSchemes,
    httpAuthSchemeProvider,
    httpAuthSchemeParametersProvider,
    identityProviderConfigProvider,
  };
}
