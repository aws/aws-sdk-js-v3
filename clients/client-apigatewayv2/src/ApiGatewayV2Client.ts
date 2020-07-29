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
  DeleteRouteResponseCommandInput,
  DeleteRouteResponseCommandOutput,
} from "./commands/DeleteRouteResponseCommand";
import {
  DeleteRouteSettingsCommandInput,
  DeleteRouteSettingsCommandOutput,
} from "./commands/DeleteRouteSettingsCommand";
import { DeleteStageCommandInput, DeleteStageCommandOutput } from "./commands/DeleteStageCommand";
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
import { ImportApiCommandInput, ImportApiCommandOutput } from "./commands/ImportApiCommand";
import { ReimportApiCommandInput, ReimportApiCommandOutput } from "./commands/ReimportApiCommand";
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
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
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
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
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
  | DeleteRouteResponseCommandInput
  | DeleteRouteSettingsCommandInput
  | DeleteStageCommandInput
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
  | ImportApiCommandInput
  | ReimportApiCommandInput
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
  | UpdateStageCommandInput;

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
  | DeleteRouteResponseCommandOutput
  | DeleteRouteSettingsCommandOutput
  | DeleteStageCommandOutput
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
  | ImportApiCommandOutput
  | ReimportApiCommandOutput
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
  | UpdateStageCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The string that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Provider function that return promise of a region string
   */
  regionDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Provider function that return promise of a maxAttempts string
   */
  maxAttemptsDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type ApiGatewayV2ClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type ApiGatewayV2ClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <p>Amazon API Gateway V2</p>
 */
export class ApiGatewayV2Client extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ApiGatewayV2ClientResolvedConfig
> {
  readonly config: ApiGatewayV2ClientResolvedConfig;

  constructor(configuration: ApiGatewayV2ClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration,
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
  }

  destroy(): void {
    super.destroy();
  }
}
