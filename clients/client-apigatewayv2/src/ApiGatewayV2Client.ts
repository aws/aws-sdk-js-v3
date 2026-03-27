// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import {
  type EndpointInputConfig,
  type EndpointResolvedConfig,
  resolveEndpointConfig,
} from "@smithy/middleware-endpoint";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/middleware-retry";
import type { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/smithy-client";
import type {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultApiGatewayV2HttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type { CreateApiCommandInput, CreateApiCommandOutput } from "./commands/CreateApiCommand";
import type { CreateApiMappingCommandInput, CreateApiMappingCommandOutput } from "./commands/CreateApiMappingCommand";
import type { CreateAuthorizerCommandInput, CreateAuthorizerCommandOutput } from "./commands/CreateAuthorizerCommand";
import type { CreateDeploymentCommandInput, CreateDeploymentCommandOutput } from "./commands/CreateDeploymentCommand";
import type { CreateDomainNameCommandInput, CreateDomainNameCommandOutput } from "./commands/CreateDomainNameCommand";
import type {
  CreateIntegrationCommandInput,
  CreateIntegrationCommandOutput,
} from "./commands/CreateIntegrationCommand";
import type {
  CreateIntegrationResponseCommandInput,
  CreateIntegrationResponseCommandOutput,
} from "./commands/CreateIntegrationResponseCommand";
import type { CreateModelCommandInput, CreateModelCommandOutput } from "./commands/CreateModelCommand";
import type { CreatePortalCommandInput, CreatePortalCommandOutput } from "./commands/CreatePortalCommand";
import type {
  CreatePortalProductCommandInput,
  CreatePortalProductCommandOutput,
} from "./commands/CreatePortalProductCommand";
import type {
  CreateProductPageCommandInput,
  CreateProductPageCommandOutput,
} from "./commands/CreateProductPageCommand";
import type {
  CreateProductRestEndpointPageCommandInput,
  CreateProductRestEndpointPageCommandOutput,
} from "./commands/CreateProductRestEndpointPageCommand";
import type { CreateRouteCommandInput, CreateRouteCommandOutput } from "./commands/CreateRouteCommand";
import type {
  CreateRouteResponseCommandInput,
  CreateRouteResponseCommandOutput,
} from "./commands/CreateRouteResponseCommand";
import type {
  CreateRoutingRuleCommandInput,
  CreateRoutingRuleCommandOutput,
} from "./commands/CreateRoutingRuleCommand";
import type { CreateStageCommandInput, CreateStageCommandOutput } from "./commands/CreateStageCommand";
import type { CreateVpcLinkCommandInput, CreateVpcLinkCommandOutput } from "./commands/CreateVpcLinkCommand";
import type {
  DeleteAccessLogSettingsCommandInput,
  DeleteAccessLogSettingsCommandOutput,
} from "./commands/DeleteAccessLogSettingsCommand";
import type { DeleteApiCommandInput, DeleteApiCommandOutput } from "./commands/DeleteApiCommand";
import type { DeleteApiMappingCommandInput, DeleteApiMappingCommandOutput } from "./commands/DeleteApiMappingCommand";
import type { DeleteAuthorizerCommandInput, DeleteAuthorizerCommandOutput } from "./commands/DeleteAuthorizerCommand";
import type {
  DeleteCorsConfigurationCommandInput,
  DeleteCorsConfigurationCommandOutput,
} from "./commands/DeleteCorsConfigurationCommand";
import type { DeleteDeploymentCommandInput, DeleteDeploymentCommandOutput } from "./commands/DeleteDeploymentCommand";
import type { DeleteDomainNameCommandInput, DeleteDomainNameCommandOutput } from "./commands/DeleteDomainNameCommand";
import type {
  DeleteIntegrationCommandInput,
  DeleteIntegrationCommandOutput,
} from "./commands/DeleteIntegrationCommand";
import type {
  DeleteIntegrationResponseCommandInput,
  DeleteIntegrationResponseCommandOutput,
} from "./commands/DeleteIntegrationResponseCommand";
import type { DeleteModelCommandInput, DeleteModelCommandOutput } from "./commands/DeleteModelCommand";
import type { DeletePortalCommandInput, DeletePortalCommandOutput } from "./commands/DeletePortalCommand";
import type {
  DeletePortalProductCommandInput,
  DeletePortalProductCommandOutput,
} from "./commands/DeletePortalProductCommand";
import type {
  DeletePortalProductSharingPolicyCommandInput,
  DeletePortalProductSharingPolicyCommandOutput,
} from "./commands/DeletePortalProductSharingPolicyCommand";
import type {
  DeleteProductPageCommandInput,
  DeleteProductPageCommandOutput,
} from "./commands/DeleteProductPageCommand";
import type {
  DeleteProductRestEndpointPageCommandInput,
  DeleteProductRestEndpointPageCommandOutput,
} from "./commands/DeleteProductRestEndpointPageCommand";
import type { DeleteRouteCommandInput, DeleteRouteCommandOutput } from "./commands/DeleteRouteCommand";
import type {
  DeleteRouteRequestParameterCommandInput,
  DeleteRouteRequestParameterCommandOutput,
} from "./commands/DeleteRouteRequestParameterCommand";
import type {
  DeleteRouteResponseCommandInput,
  DeleteRouteResponseCommandOutput,
} from "./commands/DeleteRouteResponseCommand";
import type {
  DeleteRouteSettingsCommandInput,
  DeleteRouteSettingsCommandOutput,
} from "./commands/DeleteRouteSettingsCommand";
import type {
  DeleteRoutingRuleCommandInput,
  DeleteRoutingRuleCommandOutput,
} from "./commands/DeleteRoutingRuleCommand";
import type { DeleteStageCommandInput, DeleteStageCommandOutput } from "./commands/DeleteStageCommand";
import type { DeleteVpcLinkCommandInput, DeleteVpcLinkCommandOutput } from "./commands/DeleteVpcLinkCommand";
import type { DisablePortalCommandInput, DisablePortalCommandOutput } from "./commands/DisablePortalCommand";
import type { ExportApiCommandInput, ExportApiCommandOutput } from "./commands/ExportApiCommand";
import type { GetApiCommandInput, GetApiCommandOutput } from "./commands/GetApiCommand";
import type { GetApiMappingCommandInput, GetApiMappingCommandOutput } from "./commands/GetApiMappingCommand";
import type { GetApiMappingsCommandInput, GetApiMappingsCommandOutput } from "./commands/GetApiMappingsCommand";
import type { GetApisCommandInput, GetApisCommandOutput } from "./commands/GetApisCommand";
import type { GetAuthorizerCommandInput, GetAuthorizerCommandOutput } from "./commands/GetAuthorizerCommand";
import type { GetAuthorizersCommandInput, GetAuthorizersCommandOutput } from "./commands/GetAuthorizersCommand";
import type { GetDeploymentCommandInput, GetDeploymentCommandOutput } from "./commands/GetDeploymentCommand";
import type { GetDeploymentsCommandInput, GetDeploymentsCommandOutput } from "./commands/GetDeploymentsCommand";
import type { GetDomainNameCommandInput, GetDomainNameCommandOutput } from "./commands/GetDomainNameCommand";
import type { GetDomainNamesCommandInput, GetDomainNamesCommandOutput } from "./commands/GetDomainNamesCommand";
import type { GetIntegrationCommandInput, GetIntegrationCommandOutput } from "./commands/GetIntegrationCommand";
import type {
  GetIntegrationResponseCommandInput,
  GetIntegrationResponseCommandOutput,
} from "./commands/GetIntegrationResponseCommand";
import type {
  GetIntegrationResponsesCommandInput,
  GetIntegrationResponsesCommandOutput,
} from "./commands/GetIntegrationResponsesCommand";
import type { GetIntegrationsCommandInput, GetIntegrationsCommandOutput } from "./commands/GetIntegrationsCommand";
import type { GetModelCommandInput, GetModelCommandOutput } from "./commands/GetModelCommand";
import type { GetModelsCommandInput, GetModelsCommandOutput } from "./commands/GetModelsCommand";
import type { GetModelTemplateCommandInput, GetModelTemplateCommandOutput } from "./commands/GetModelTemplateCommand";
import type { GetPortalCommandInput, GetPortalCommandOutput } from "./commands/GetPortalCommand";
import type { GetPortalProductCommandInput, GetPortalProductCommandOutput } from "./commands/GetPortalProductCommand";
import type {
  GetPortalProductSharingPolicyCommandInput,
  GetPortalProductSharingPolicyCommandOutput,
} from "./commands/GetPortalProductSharingPolicyCommand";
import type { GetProductPageCommandInput, GetProductPageCommandOutput } from "./commands/GetProductPageCommand";
import type {
  GetProductRestEndpointPageCommandInput,
  GetProductRestEndpointPageCommandOutput,
} from "./commands/GetProductRestEndpointPageCommand";
import type { GetRouteCommandInput, GetRouteCommandOutput } from "./commands/GetRouteCommand";
import type { GetRouteResponseCommandInput, GetRouteResponseCommandOutput } from "./commands/GetRouteResponseCommand";
import type {
  GetRouteResponsesCommandInput,
  GetRouteResponsesCommandOutput,
} from "./commands/GetRouteResponsesCommand";
import type { GetRoutesCommandInput, GetRoutesCommandOutput } from "./commands/GetRoutesCommand";
import type { GetRoutingRuleCommandInput, GetRoutingRuleCommandOutput } from "./commands/GetRoutingRuleCommand";
import type { GetStageCommandInput, GetStageCommandOutput } from "./commands/GetStageCommand";
import type { GetStagesCommandInput, GetStagesCommandOutput } from "./commands/GetStagesCommand";
import type { GetTagsCommandInput, GetTagsCommandOutput } from "./commands/GetTagsCommand";
import type { GetVpcLinkCommandInput, GetVpcLinkCommandOutput } from "./commands/GetVpcLinkCommand";
import type { GetVpcLinksCommandInput, GetVpcLinksCommandOutput } from "./commands/GetVpcLinksCommand";
import type { ImportApiCommandInput, ImportApiCommandOutput } from "./commands/ImportApiCommand";
import type {
  ListPortalProductsCommandInput,
  ListPortalProductsCommandOutput,
} from "./commands/ListPortalProductsCommand";
import type { ListPortalsCommandInput, ListPortalsCommandOutput } from "./commands/ListPortalsCommand";
import type { ListProductPagesCommandInput, ListProductPagesCommandOutput } from "./commands/ListProductPagesCommand";
import type {
  ListProductRestEndpointPagesCommandInput,
  ListProductRestEndpointPagesCommandOutput,
} from "./commands/ListProductRestEndpointPagesCommand";
import type { ListRoutingRulesCommandInput, ListRoutingRulesCommandOutput } from "./commands/ListRoutingRulesCommand";
import type { PreviewPortalCommandInput, PreviewPortalCommandOutput } from "./commands/PreviewPortalCommand";
import type { PublishPortalCommandInput, PublishPortalCommandOutput } from "./commands/PublishPortalCommand";
import type {
  PutPortalProductSharingPolicyCommandInput,
  PutPortalProductSharingPolicyCommandOutput,
} from "./commands/PutPortalProductSharingPolicyCommand";
import type { PutRoutingRuleCommandInput, PutRoutingRuleCommandOutput } from "./commands/PutRoutingRuleCommand";
import type { ReimportApiCommandInput, ReimportApiCommandOutput } from "./commands/ReimportApiCommand";
import type {
  ResetAuthorizersCacheCommandInput,
  ResetAuthorizersCacheCommandOutput,
} from "./commands/ResetAuthorizersCacheCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type { UpdateApiCommandInput, UpdateApiCommandOutput } from "./commands/UpdateApiCommand";
import type { UpdateApiMappingCommandInput, UpdateApiMappingCommandOutput } from "./commands/UpdateApiMappingCommand";
import type { UpdateAuthorizerCommandInput, UpdateAuthorizerCommandOutput } from "./commands/UpdateAuthorizerCommand";
import type { UpdateDeploymentCommandInput, UpdateDeploymentCommandOutput } from "./commands/UpdateDeploymentCommand";
import type { UpdateDomainNameCommandInput, UpdateDomainNameCommandOutput } from "./commands/UpdateDomainNameCommand";
import type {
  UpdateIntegrationCommandInput,
  UpdateIntegrationCommandOutput,
} from "./commands/UpdateIntegrationCommand";
import type {
  UpdateIntegrationResponseCommandInput,
  UpdateIntegrationResponseCommandOutput,
} from "./commands/UpdateIntegrationResponseCommand";
import type { UpdateModelCommandInput, UpdateModelCommandOutput } from "./commands/UpdateModelCommand";
import type { UpdatePortalCommandInput, UpdatePortalCommandOutput } from "./commands/UpdatePortalCommand";
import type {
  UpdatePortalProductCommandInput,
  UpdatePortalProductCommandOutput,
} from "./commands/UpdatePortalProductCommand";
import type {
  UpdateProductPageCommandInput,
  UpdateProductPageCommandOutput,
} from "./commands/UpdateProductPageCommand";
import type {
  UpdateProductRestEndpointPageCommandInput,
  UpdateProductRestEndpointPageCommandOutput,
} from "./commands/UpdateProductRestEndpointPageCommand";
import type { UpdateRouteCommandInput, UpdateRouteCommandOutput } from "./commands/UpdateRouteCommand";
import type {
  UpdateRouteResponseCommandInput,
  UpdateRouteResponseCommandOutput,
} from "./commands/UpdateRouteResponseCommand";
import type { UpdateStageCommandInput, UpdateStageCommandOutput } from "./commands/UpdateStageCommand";
import type { UpdateVpcLinkCommandInput, UpdateVpcLinkCommandOutput } from "./commands/UpdateVpcLinkCommand";
import {
  type ClientInputEndpointParameters,
  type ClientResolvedEndpointParameters,
  type EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | CreateApiCommandInput
  | CreateApiMappingCommandInput
  | CreateAuthorizerCommandInput
  | CreateDeploymentCommandInput
  | CreateDomainNameCommandInput
  | CreateIntegrationCommandInput
  | CreateIntegrationResponseCommandInput
  | CreateModelCommandInput
  | CreatePortalCommandInput
  | CreatePortalProductCommandInput
  | CreateProductPageCommandInput
  | CreateProductRestEndpointPageCommandInput
  | CreateRouteCommandInput
  | CreateRouteResponseCommandInput
  | CreateRoutingRuleCommandInput
  | CreateStageCommandInput
  | CreateVpcLinkCommandInput
  | DeleteAccessLogSettingsCommandInput
  | DeleteApiCommandInput
  | DeleteApiMappingCommandInput
  | DeleteAuthorizerCommandInput
  | DeleteCorsConfigurationCommandInput
  | DeleteDeploymentCommandInput
  | DeleteDomainNameCommandInput
  | DeleteIntegrationCommandInput
  | DeleteIntegrationResponseCommandInput
  | DeleteModelCommandInput
  | DeletePortalCommandInput
  | DeletePortalProductCommandInput
  | DeletePortalProductSharingPolicyCommandInput
  | DeleteProductPageCommandInput
  | DeleteProductRestEndpointPageCommandInput
  | DeleteRouteCommandInput
  | DeleteRouteRequestParameterCommandInput
  | DeleteRouteResponseCommandInput
  | DeleteRouteSettingsCommandInput
  | DeleteRoutingRuleCommandInput
  | DeleteStageCommandInput
  | DeleteVpcLinkCommandInput
  | DisablePortalCommandInput
  | ExportApiCommandInput
  | GetApiCommandInput
  | GetApiMappingCommandInput
  | GetApiMappingsCommandInput
  | GetApisCommandInput
  | GetAuthorizerCommandInput
  | GetAuthorizersCommandInput
  | GetDeploymentCommandInput
  | GetDeploymentsCommandInput
  | GetDomainNameCommandInput
  | GetDomainNamesCommandInput
  | GetIntegrationCommandInput
  | GetIntegrationResponseCommandInput
  | GetIntegrationResponsesCommandInput
  | GetIntegrationsCommandInput
  | GetModelCommandInput
  | GetModelTemplateCommandInput
  | GetModelsCommandInput
  | GetPortalCommandInput
  | GetPortalProductCommandInput
  | GetPortalProductSharingPolicyCommandInput
  | GetProductPageCommandInput
  | GetProductRestEndpointPageCommandInput
  | GetRouteCommandInput
  | GetRouteResponseCommandInput
  | GetRouteResponsesCommandInput
  | GetRoutesCommandInput
  | GetRoutingRuleCommandInput
  | GetStageCommandInput
  | GetStagesCommandInput
  | GetTagsCommandInput
  | GetVpcLinkCommandInput
  | GetVpcLinksCommandInput
  | ImportApiCommandInput
  | ListPortalProductsCommandInput
  | ListPortalsCommandInput
  | ListProductPagesCommandInput
  | ListProductRestEndpointPagesCommandInput
  | ListRoutingRulesCommandInput
  | PreviewPortalCommandInput
  | PublishPortalCommandInput
  | PutPortalProductSharingPolicyCommandInput
  | PutRoutingRuleCommandInput
  | ReimportApiCommandInput
  | ResetAuthorizersCacheCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateApiCommandInput
  | UpdateApiMappingCommandInput
  | UpdateAuthorizerCommandInput
  | UpdateDeploymentCommandInput
  | UpdateDomainNameCommandInput
  | UpdateIntegrationCommandInput
  | UpdateIntegrationResponseCommandInput
  | UpdateModelCommandInput
  | UpdatePortalCommandInput
  | UpdatePortalProductCommandInput
  | UpdateProductPageCommandInput
  | UpdateProductRestEndpointPageCommandInput
  | UpdateRouteCommandInput
  | UpdateRouteResponseCommandInput
  | UpdateStageCommandInput
  | UpdateVpcLinkCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateApiCommandOutput
  | CreateApiMappingCommandOutput
  | CreateAuthorizerCommandOutput
  | CreateDeploymentCommandOutput
  | CreateDomainNameCommandOutput
  | CreateIntegrationCommandOutput
  | CreateIntegrationResponseCommandOutput
  | CreateModelCommandOutput
  | CreatePortalCommandOutput
  | CreatePortalProductCommandOutput
  | CreateProductPageCommandOutput
  | CreateProductRestEndpointPageCommandOutput
  | CreateRouteCommandOutput
  | CreateRouteResponseCommandOutput
  | CreateRoutingRuleCommandOutput
  | CreateStageCommandOutput
  | CreateVpcLinkCommandOutput
  | DeleteAccessLogSettingsCommandOutput
  | DeleteApiCommandOutput
  | DeleteApiMappingCommandOutput
  | DeleteAuthorizerCommandOutput
  | DeleteCorsConfigurationCommandOutput
  | DeleteDeploymentCommandOutput
  | DeleteDomainNameCommandOutput
  | DeleteIntegrationCommandOutput
  | DeleteIntegrationResponseCommandOutput
  | DeleteModelCommandOutput
  | DeletePortalCommandOutput
  | DeletePortalProductCommandOutput
  | DeletePortalProductSharingPolicyCommandOutput
  | DeleteProductPageCommandOutput
  | DeleteProductRestEndpointPageCommandOutput
  | DeleteRouteCommandOutput
  | DeleteRouteRequestParameterCommandOutput
  | DeleteRouteResponseCommandOutput
  | DeleteRouteSettingsCommandOutput
  | DeleteRoutingRuleCommandOutput
  | DeleteStageCommandOutput
  | DeleteVpcLinkCommandOutput
  | DisablePortalCommandOutput
  | ExportApiCommandOutput
  | GetApiCommandOutput
  | GetApiMappingCommandOutput
  | GetApiMappingsCommandOutput
  | GetApisCommandOutput
  | GetAuthorizerCommandOutput
  | GetAuthorizersCommandOutput
  | GetDeploymentCommandOutput
  | GetDeploymentsCommandOutput
  | GetDomainNameCommandOutput
  | GetDomainNamesCommandOutput
  | GetIntegrationCommandOutput
  | GetIntegrationResponseCommandOutput
  | GetIntegrationResponsesCommandOutput
  | GetIntegrationsCommandOutput
  | GetModelCommandOutput
  | GetModelTemplateCommandOutput
  | GetModelsCommandOutput
  | GetPortalCommandOutput
  | GetPortalProductCommandOutput
  | GetPortalProductSharingPolicyCommandOutput
  | GetProductPageCommandOutput
  | GetProductRestEndpointPageCommandOutput
  | GetRouteCommandOutput
  | GetRouteResponseCommandOutput
  | GetRouteResponsesCommandOutput
  | GetRoutesCommandOutput
  | GetRoutingRuleCommandOutput
  | GetStageCommandOutput
  | GetStagesCommandOutput
  | GetTagsCommandOutput
  | GetVpcLinkCommandOutput
  | GetVpcLinksCommandOutput
  | ImportApiCommandOutput
  | ListPortalProductsCommandOutput
  | ListPortalsCommandOutput
  | ListProductPagesCommandOutput
  | ListProductRestEndpointPagesCommandOutput
  | ListRoutingRulesCommandOutput
  | PreviewPortalCommandOutput
  | PublishPortalCommandOutput
  | PutPortalProductSharingPolicyCommandOutput
  | PutRoutingRuleCommandOutput
  | ReimportApiCommandOutput
  | ResetAuthorizersCacheCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateApiCommandOutput
  | UpdateApiMappingCommandOutput
  | UpdateAuthorizerCommandOutput
  | UpdateDeploymentCommandOutput
  | UpdateDomainNameCommandOutput
  | UpdateIntegrationCommandOutput
  | UpdateIntegrationResponseCommandOutput
  | UpdateModelCommandOutput
  | UpdatePortalCommandOutput
  | UpdatePortalProductCommandOutput
  | UpdateProductPageCommandOutput
  | UpdateProductRestEndpointPageCommandOutput
  | UpdateRouteCommandOutput
  | UpdateRouteResponseCommandOutput
  | UpdateStageCommandOutput
  | UpdateVpcLinkCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Setting a client profile is similar to setting a value for the
   * AWS_PROFILE environment variable. Setting a profile on a client
   * in code only affects the single client instance, unlike AWS_PROFILE.
   *
   * When set, and only for environments where an AWS configuration
   * file exists, fields configurable by this file will be retrieved
   * from the specified profile within that file.
   * Conflicting code configuration and environment variables will
   * still have higher priority.
   *
   * For client credential resolution that involves checking the AWS
   * configuration file, the client's profile (this value) will be
   * used unless a different profile is set in the credential
   * provider options.
   *
   */
  profile?: string;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: __Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type ApiGatewayV2ClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of ApiGatewayV2Client class constructor that set the region, credentials and other options.
 */
export interface ApiGatewayV2ClientConfig extends ApiGatewayV2ClientConfigType {}

/**
 * @public
 */
export type ApiGatewayV2ClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of ApiGatewayV2Client class. This is resolved and normalized from the {@link ApiGatewayV2ClientConfig | constructor configuration interface}.
 */
export interface ApiGatewayV2ClientResolvedConfig extends ApiGatewayV2ClientResolvedConfigType {}

/**
 * <p>Amazon API Gateway V2</p>
 * @public
 */
export class ApiGatewayV2Client extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ApiGatewayV2ClientResolvedConfig
> {
  /**
   * The resolved configuration of ApiGatewayV2Client class. This is resolved and normalized from the {@link ApiGatewayV2ClientConfig | constructor configuration interface}.
   */
  readonly config: ApiGatewayV2ClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<ApiGatewayV2ClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultApiGatewayV2HttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: ApiGatewayV2ClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
          }),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
