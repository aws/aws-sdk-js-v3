import { CreateApiCommandInput, CreateApiCommandOutput } from "./commands/CreateApiCommand";
import { CreateApiMappingCommandInput, CreateApiMappingCommandOutput } from "./commands/CreateApiMappingCommand";
import { CreateAuthorizerCommandInput, CreateAuthorizerCommandOutput } from "./commands/CreateAuthorizerCommand";
import { CreateDeploymentCommandInput, CreateDeploymentCommandOutput } from "./commands/CreateDeploymentCommand";
import { CreateDomainNameCommandInput, CreateDomainNameCommandOutput } from "./commands/CreateDomainNameCommand";
import { CreateIntegrationCommandInput, CreateIntegrationCommandOutput } from "./commands/CreateIntegrationCommand";
import {
  CreateIntegrationResponseCommandInput,
  CreateIntegrationResponseCommandOutput,
} from "./commands/CreateIntegrationResponseCommand";
import { CreateModelCommandInput, CreateModelCommandOutput } from "./commands/CreateModelCommand";
import { CreateRouteCommandInput, CreateRouteCommandOutput } from "./commands/CreateRouteCommand";
import {
  CreateRouteResponseCommandInput,
  CreateRouteResponseCommandOutput,
} from "./commands/CreateRouteResponseCommand";
import { CreateStageCommandInput, CreateStageCommandOutput } from "./commands/CreateStageCommand";
import { CreateVpcLinkCommandInput, CreateVpcLinkCommandOutput } from "./commands/CreateVpcLinkCommand";
import {
  DeleteAccessLogSettingsCommandInput,
  DeleteAccessLogSettingsCommandOutput,
} from "./commands/DeleteAccessLogSettingsCommand";
import { DeleteApiCommandInput, DeleteApiCommandOutput } from "./commands/DeleteApiCommand";
import { DeleteApiMappingCommandInput, DeleteApiMappingCommandOutput } from "./commands/DeleteApiMappingCommand";
import { DeleteAuthorizerCommandInput, DeleteAuthorizerCommandOutput } from "./commands/DeleteAuthorizerCommand";
import {
  DeleteCorsConfigurationCommandInput,
  DeleteCorsConfigurationCommandOutput,
} from "./commands/DeleteCorsConfigurationCommand";
import { DeleteDeploymentCommandInput, DeleteDeploymentCommandOutput } from "./commands/DeleteDeploymentCommand";
import { DeleteDomainNameCommandInput, DeleteDomainNameCommandOutput } from "./commands/DeleteDomainNameCommand";
import { DeleteIntegrationCommandInput, DeleteIntegrationCommandOutput } from "./commands/DeleteIntegrationCommand";
import {
  DeleteIntegrationResponseCommandInput,
  DeleteIntegrationResponseCommandOutput,
} from "./commands/DeleteIntegrationResponseCommand";
import { DeleteModelCommandInput, DeleteModelCommandOutput } from "./commands/DeleteModelCommand";
import { DeleteRouteCommandInput, DeleteRouteCommandOutput } from "./commands/DeleteRouteCommand";
import {
  DeleteRouteRequestParameterCommandInput,
  DeleteRouteRequestParameterCommandOutput,
} from "./commands/DeleteRouteRequestParameterCommand";
import {
  DeleteRouteResponseCommandInput,
  DeleteRouteResponseCommandOutput,
} from "./commands/DeleteRouteResponseCommand";
import {
  DeleteRouteSettingsCommandInput,
  DeleteRouteSettingsCommandOutput,
} from "./commands/DeleteRouteSettingsCommand";
import { DeleteStageCommandInput, DeleteStageCommandOutput } from "./commands/DeleteStageCommand";
import { DeleteVpcLinkCommandInput, DeleteVpcLinkCommandOutput } from "./commands/DeleteVpcLinkCommand";
import { ExportApiCommandInput, ExportApiCommandOutput } from "./commands/ExportApiCommand";
import { GetApiCommandInput, GetApiCommandOutput } from "./commands/GetApiCommand";
import { GetApiMappingCommandInput, GetApiMappingCommandOutput } from "./commands/GetApiMappingCommand";
import { GetApiMappingsCommandInput, GetApiMappingsCommandOutput } from "./commands/GetApiMappingsCommand";
import { GetApisCommandInput, GetApisCommandOutput } from "./commands/GetApisCommand";
import { GetAuthorizerCommandInput, GetAuthorizerCommandOutput } from "./commands/GetAuthorizerCommand";
import { GetAuthorizersCommandInput, GetAuthorizersCommandOutput } from "./commands/GetAuthorizersCommand";
import { GetDeploymentCommandInput, GetDeploymentCommandOutput } from "./commands/GetDeploymentCommand";
import { GetDeploymentsCommandInput, GetDeploymentsCommandOutput } from "./commands/GetDeploymentsCommand";
import { GetDomainNameCommandInput, GetDomainNameCommandOutput } from "./commands/GetDomainNameCommand";
import { GetDomainNamesCommandInput, GetDomainNamesCommandOutput } from "./commands/GetDomainNamesCommand";
import { GetIntegrationCommandInput, GetIntegrationCommandOutput } from "./commands/GetIntegrationCommand";
import {
  GetIntegrationResponseCommandInput,
  GetIntegrationResponseCommandOutput,
} from "./commands/GetIntegrationResponseCommand";
import {
  GetIntegrationResponsesCommandInput,
  GetIntegrationResponsesCommandOutput,
} from "./commands/GetIntegrationResponsesCommand";
import { GetIntegrationsCommandInput, GetIntegrationsCommandOutput } from "./commands/GetIntegrationsCommand";
import { GetModelCommandInput, GetModelCommandOutput } from "./commands/GetModelCommand";
import { GetModelTemplateCommandInput, GetModelTemplateCommandOutput } from "./commands/GetModelTemplateCommand";
import { GetModelsCommandInput, GetModelsCommandOutput } from "./commands/GetModelsCommand";
import { GetRouteCommandInput, GetRouteCommandOutput } from "./commands/GetRouteCommand";
import { GetRouteResponseCommandInput, GetRouteResponseCommandOutput } from "./commands/GetRouteResponseCommand";
import { GetRouteResponsesCommandInput, GetRouteResponsesCommandOutput } from "./commands/GetRouteResponsesCommand";
import { GetRoutesCommandInput, GetRoutesCommandOutput } from "./commands/GetRoutesCommand";
import { GetStageCommandInput, GetStageCommandOutput } from "./commands/GetStageCommand";
import { GetStagesCommandInput, GetStagesCommandOutput } from "./commands/GetStagesCommand";
import { GetTagsCommandInput, GetTagsCommandOutput } from "./commands/GetTagsCommand";
import { GetVpcLinkCommandInput, GetVpcLinkCommandOutput } from "./commands/GetVpcLinkCommand";
import { GetVpcLinksCommandInput, GetVpcLinksCommandOutput } from "./commands/GetVpcLinksCommand";
import { ImportApiCommandInput, ImportApiCommandOutput } from "./commands/ImportApiCommand";
import { ReimportApiCommandInput, ReimportApiCommandOutput } from "./commands/ReimportApiCommand";
import {
  ResetAuthorizersCacheCommandInput,
  ResetAuthorizersCacheCommandOutput,
} from "./commands/ResetAuthorizersCacheCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateApiCommandInput, UpdateApiCommandOutput } from "./commands/UpdateApiCommand";
import { UpdateApiMappingCommandInput, UpdateApiMappingCommandOutput } from "./commands/UpdateApiMappingCommand";
import { UpdateAuthorizerCommandInput, UpdateAuthorizerCommandOutput } from "./commands/UpdateAuthorizerCommand";
import { UpdateDeploymentCommandInput, UpdateDeploymentCommandOutput } from "./commands/UpdateDeploymentCommand";
import { UpdateDomainNameCommandInput, UpdateDomainNameCommandOutput } from "./commands/UpdateDomainNameCommand";
import { UpdateIntegrationCommandInput, UpdateIntegrationCommandOutput } from "./commands/UpdateIntegrationCommand";
import {
  UpdateIntegrationResponseCommandInput,
  UpdateIntegrationResponseCommandOutput,
} from "./commands/UpdateIntegrationResponseCommand";
import { UpdateModelCommandInput, UpdateModelCommandOutput } from "./commands/UpdateModelCommand";
import { UpdateRouteCommandInput, UpdateRouteCommandOutput } from "./commands/UpdateRouteCommand";
import {
  UpdateRouteResponseCommandInput,
  UpdateRouteResponseCommandOutput,
} from "./commands/UpdateRouteResponseCommand";
import { UpdateStageCommandInput, UpdateStageCommandOutput } from "./commands/UpdateStageCommand";
import { UpdateVpcLinkCommandInput, UpdateVpcLinkCommandOutput } from "./commands/UpdateVpcLinkCommand";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { RetryInputConfig, RetryResolvedConfig, getRetryPlugin, resolveRetryConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  Provider,
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | CreateApiCommandInput
  | CreateApiMappingCommandInput
  | CreateAuthorizerCommandInput
  | CreateDeploymentCommandInput
  | CreateDomainNameCommandInput
  | CreateIntegrationCommandInput
  | CreateIntegrationResponseCommandInput
  | CreateModelCommandInput
  | CreateRouteCommandInput
  | CreateRouteResponseCommandInput
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
  | DeleteRouteCommandInput
  | DeleteRouteRequestParameterCommandInput
  | DeleteRouteResponseCommandInput
  | DeleteRouteSettingsCommandInput
  | DeleteStageCommandInput
  | DeleteVpcLinkCommandInput
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
  | GetRouteCommandInput
  | GetRouteResponseCommandInput
  | GetRouteResponsesCommandInput
  | GetRoutesCommandInput
  | GetStageCommandInput
  | GetStagesCommandInput
  | GetTagsCommandInput
  | GetVpcLinkCommandInput
  | GetVpcLinksCommandInput
  | ImportApiCommandInput
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
  | UpdateRouteCommandInput
  | UpdateRouteResponseCommandInput
  | UpdateStageCommandInput
  | UpdateVpcLinkCommandInput;

export type ServiceOutputTypes =
  | CreateApiCommandOutput
  | CreateApiMappingCommandOutput
  | CreateAuthorizerCommandOutput
  | CreateDeploymentCommandOutput
  | CreateDomainNameCommandOutput
  | CreateIntegrationCommandOutput
  | CreateIntegrationResponseCommandOutput
  | CreateModelCommandOutput
  | CreateRouteCommandOutput
  | CreateRouteResponseCommandOutput
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
  | DeleteRouteCommandOutput
  | DeleteRouteRequestParameterCommandOutput
  | DeleteRouteResponseCommandOutput
  | DeleteRouteSettingsCommandOutput
  | DeleteStageCommandOutput
  | DeleteVpcLinkCommandOutput
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
  | GetRouteCommandOutput
  | GetRouteResponseCommandOutput
  | GetRouteResponsesCommandOutput
  | GetRoutesCommandOutput
  | GetStageCommandOutput
  | GetStagesCommandOutput
  | GetTagsCommandOutput
  | GetVpcLinkCommandOutput
  | GetVpcLinksCommandOutput
  | ImportApiCommandOutput
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
  | UpdateRouteCommandOutput
  | UpdateRouteResponseCommandOutput
  | UpdateStageCommandOutput
  | UpdateVpcLinkCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Hash} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: (body: any) => number | undefined;

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
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   * @internal
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;
}

type ApiGatewayV2ClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of ApiGatewayV2Client class constructor that set the region, credentials and other options.
 */
export interface ApiGatewayV2ClientConfig extends ApiGatewayV2ClientConfigType {}

type ApiGatewayV2ClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of ApiGatewayV2Client class. This is resolved and normalized from the {@link ApiGatewayV2ClientConfig | constructor configuration interface}.
 */
export interface ApiGatewayV2ClientResolvedConfig extends ApiGatewayV2ClientResolvedConfigType {}

/**
 * <p>Amazon API Gateway V2</p>
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

  constructor(configuration: ApiGatewayV2ClientConfig) {
    let _config_0 = __getRuntimeConfig(configuration);
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveRetryConfig(_config_2);
    let _config_4 = resolveHostHeaderConfig(_config_3);
    let _config_5 = resolveAwsAuthConfig(_config_4);
    let _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
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
