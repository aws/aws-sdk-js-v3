import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemePlugin,
  getHttpSigningPlugin,
  NoAuthSigner,
} from "@smithy/core";
import { Client, NoOpLogger } from "@smithy/core/client";
import { getHostHeaderPlugin } from "@aws-sdk/core/client";
import { resolveRegionConfig } from "@smithy/core/config";
import { getEndpointPlugin, resolveEndpointConfig } from "@smithy/core/endpoints";
import { getContentLengthPlugin, parseUrl } from "@smithy/core/protocols";
import { getRetryPlugin, resolveRetryConfig } from "@smithy/core/retry";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import { fromBase64, fromUtf8, toBase64, toUtf8, calculateBodyLength } from "@smithy/core/serde";
import { resolveAwsSdkSigV4Config } from "@aws-sdk/core/httpAuthSchemes";
import { defaultProvider as credentialDefaultProvider } from "@aws-sdk/credential-provider-node";
import { Sha256 } from "@smithy/core/checksum";
import { NodeHttpHandler, streamCollector } from "@smithy/node-http-handler";
import { getRuntimeTypecheckPlugin, type RuntimeTypecheckOptions } from "@smithy/typecheck";
import type {
  HttpAuthScheme,
  HttpAuthSchemeParameters,
  HttpAuthSchemeProvider,
  IdentityProviderConfig,
} from "@smithy/types";

import { authSchemeParametersProvider, authSchemeProvider } from "../auth/authSchemeProvider";
import type { SigV4AuthConfig } from "../auth/sigv4";
import type { EndpointProvider } from "../endpoint/buildEndpointProvider";
import type { ClientProtocolCtor } from "../protocol/types";
import type { ProtocolSettings } from "../protocol/selectProtocol";

/**
 * Inputs required to build the dynamic client class.
 *
 * @internal
 */
export interface ClientBuildInputs {
  protocol: ClientProtocolCtor;
  protocolSettings: ProtocolSettings;
  endpointProvider: EndpointProvider;
  /**
   * Runtime typecheck (RTTC) behavior. Because the dynamic client emits no
   * static types, RTTC is installed to validate request inputs and response
   * outputs against the schemas at runtime.
   */
  typecheck: RuntimeTypecheckOptions;
  /**
   * When present, overrides the default NoAuth scheme with AWS SigV4 auth.
   */
  sigV4Auth?: SigV4AuthConfig;
}

/**
 * Builds a `Client` subclass wired with the generic, model-independent
 * middleware stack: schema (de)serialization, retry, content-length, endpoint
 * resolution, and HTTP auth/signing (NoAuth by default).
 *
 * The base `Client` instantiates the protocol constructor from
 * `protocolSettings`, so the subclass only assembles configuration and plugins.
 *
 * @param inputs - the protocol, its settings, and the endpoint provider.
 *
 * @returns a `Client` subclass constructor.
 *
 * @internal
 */
export function buildClient(
  inputs: ClientBuildInputs
): new (config?: Record<string, any>) => Client<any, any, any, any> {
  const { protocol, protocolSettings, endpointProvider, typecheck, sigV4Auth } = inputs;

  return class DynamicClient extends Client<any, any, any, any> {
    public readonly config: Record<string, any>;

    public constructor(config: Record<string, any> = {}) {
      const resolved = resolveConfig(config, protocol, protocolSettings, endpointProvider, sigV4Auth);
      super(resolved);
      this.config = resolved;
      const cfg = this.config as any;
      this.middlewareStack.use(getSchemaSerdePlugin(cfg));
      this.middlewareStack.use(getRetryPlugin(cfg));
      this.middlewareStack.use(getContentLengthPlugin(cfg));
      this.middlewareStack.use(getHostHeaderPlugin(cfg));
      this.middlewareStack.use(getEndpointPlugin(cfg, {} as never));
      this.middlewareStack.use(
        getHttpAuthSchemePlugin(cfg, {
          httpAuthSchemeParametersProvider: sigV4Auth?.httpAuthSchemeParametersProvider ?? authSchemeParametersProvider,
          identityProviderConfigProvider:
            sigV4Auth?.identityProviderConfigProvider ?? (async () => new DefaultIdentityProviderConfig({})),
        })
      );
      this.middlewareStack.use(getHttpSigningPlugin(cfg));
      // The dynamic client emits no static types, so runtime typechecking
      // validates inputs/outputs against the schemas instead.
      this.middlewareStack.use(getRuntimeTypecheckPlugin({ logger: cfg.logger, ...typecheck }));
    }
  };
}

/**
 * Applies runtime-config defaults and resolves config through the standard
 * resolver chain (region, retry, endpoint, auth) matching generated clients.
 *
 * @internal
 */
function resolveConfig(
  config: Record<string, any>,
  protocol: ClientProtocolCtor,
  protocolSettings: ProtocolSettings,
  endpointProvider: EndpointProvider,
  sigV4Auth?: SigV4AuthConfig
): Record<string, any> {
  const defaultHttpAuthSchemes: HttpAuthScheme[] = sigV4Auth?.httpAuthSchemes ?? [
    {
      schemeId: "smithy.api#noAuth",
      identityProvider: (ipc: IdentityProviderConfig) =>
        ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
      signer: new NoAuthSigner(),
    },
  ];

  const defaultHttpAuthSchemeProvider: HttpAuthSchemeProvider<HttpAuthSchemeParameters> =
    sigV4Auth?.httpAuthSchemeProvider ?? authSchemeProvider;

  const _config_0 = {
    ...config,
    apiVersion: config.apiVersion ?? "1.0",
    credentials: config.credentials ?? (sigV4Auth ? credentialDefaultProvider(config) : undefined),
    credentialDefaultProvider: config.credentialDefaultProvider ?? credentialDefaultProvider,
    defaultSigningName: config.defaultSigningName ?? sigV4Auth?.signingName,
    serviceId: config.serviceId ?? sigV4Auth?.signingName,
    sha256: config.sha256 ?? Sha256,
    requestHandler: config.requestHandler ?? NodeHttpHandler.create(config.requestHandler),
    bodyLengthChecker: config.bodyLengthChecker ?? calculateBodyLength,
    streamCollector: config.streamCollector ?? streamCollector,
    useFipsEndpoint: config.useFipsEndpoint ?? false,
    useDualstackEndpoint: config.useDualstackEndpoint ?? false,
    base64Decoder: config.base64Decoder ?? fromBase64,
    base64Encoder: config.base64Encoder ?? toBase64,
    utf8Decoder: config.utf8Decoder ?? fromUtf8,
    utf8Encoder: config.utf8Encoder ?? toUtf8,
    urlParser: config.urlParser ?? parseUrl,
    disableHostPrefix: config.disableHostPrefix ?? false,
    logger: config.logger ?? new NoOpLogger(),
    endpointProvider: config.endpointProvider ?? endpointProvider,
    protocol: config.protocol ?? protocol,
    protocolSettings: config.protocolSettings ?? protocolSettings,
    httpAuthSchemeProvider: config.httpAuthSchemeProvider ?? defaultHttpAuthSchemeProvider,
    httpAuthSchemes: config.httpAuthSchemes ?? defaultHttpAuthSchemes,
  };

  const _config_1 = resolveRegionConfig(_config_0 as any);
  const _config_2 = resolveRetryConfig(_config_1 as any);
  const _config_3 = resolveEndpointConfig(_config_2 as any);
  const _config_4 = sigV4Auth ? resolveAwsSdkSigV4Config(_config_3 as any) : _config_3;
  return _config_4 as Record<string, any>;
}
