import {
  CreateApiMappingRequest,
  CreateApiMappingResponse,
  CreateApiRequest,
  CreateApiResponse,
  CreateAuthorizerRequest,
  CreateAuthorizerResponse,
  CreateDeploymentRequest,
  CreateDeploymentResponse,
  CreateDomainNameRequest,
  CreateDomainNameResponse,
  CreateIntegrationRequest,
  CreateIntegrationResponseRequest,
  CreateIntegrationResponseResponse,
  CreateIntegrationResponseShape,
  CreateModelRequest,
  CreateModelResponse,
  CreateRouteRequest,
  CreateRouteResponseRequest,
  CreateRouteResponseResponse,
  CreateRouteResponseShape,
  CreateStageRequest,
  CreateStageResponse,
  DeleteApiMappingRequest,
  DeleteApiRequest,
  DeleteAuthorizerRequest,
  DeleteDeploymentRequest,
  DeleteDomainNameRequest,
  DeleteIntegrationRequest,
  DeleteIntegrationResponseRequest,
  DeleteModelRequest,
  DeleteRouteRequest,
  DeleteRouteResponseRequest,
  DeleteStageRequest,
  GetApiMappingRequest,
  GetApiMappingResponse,
  GetApiMappingsRequest,
  GetApiMappingsResponse,
  GetApiRequest,
  GetApiResponse,
  GetApisRequest,
  GetApisResponse,
  GetAuthorizerRequest,
  GetAuthorizerResponse,
  GetAuthorizersRequest,
  GetAuthorizersResponse,
  GetDeploymentRequest,
  GetDeploymentResponse,
  GetDeploymentsRequest,
  GetDeploymentsResponse,
  GetDomainNameRequest,
  GetDomainNameResponse,
  GetDomainNamesRequest,
  GetDomainNamesResponse,
  GetIntegrationRequest,
  GetIntegrationResponseRequest,
  GetIntegrationResponseResponse,
  GetIntegrationResponseShape,
  GetIntegrationResponsesRequest,
  GetIntegrationResponsesResponse,
  GetIntegrationsRequest,
  GetIntegrationsResponse,
  GetModelRequest,
  GetModelResponse,
  GetModelTemplateRequest,
  GetModelTemplateResponse,
  GetModelsRequest,
  GetModelsResponse,
  GetRouteRequest,
  GetRouteResponseRequest,
  GetRouteResponseResponse,
  GetRouteResponseShape,
  GetRouteResponsesRequest,
  GetRouteResponsesResponse,
  GetRoutesRequest,
  GetRoutesResponse,
  GetStageRequest,
  GetStageResponse,
  GetStagesRequest,
  GetStagesResponse,
  UpdateApiMappingRequest,
  UpdateApiMappingResponse,
  UpdateApiRequest,
  UpdateApiResponse,
  UpdateAuthorizerRequest,
  UpdateAuthorizerResponse,
  UpdateDeploymentRequest,
  UpdateDeploymentResponse,
  UpdateDomainNameRequest,
  UpdateDomainNameResponse,
  UpdateIntegrationRequest,
  UpdateIntegrationResponseRequest,
  UpdateIntegrationResponseResponse,
  UpdateIntegrationResponseShape,
  UpdateModelRequest,
  UpdateModelResponse,
  UpdateRouteRequest,
  UpdateRouteResponseRequest,
  UpdateRouteResponseResponse,
  UpdateRouteResponseShape,
  UpdateStageRequest,
  UpdateStageResponse
} from "./models/index";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig
} from "@aws-sdk/middleware-host-header";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig
} from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration
} from "@aws-sdk/smithy-client";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | CreateApiMappingRequest
  | CreateApiRequest
  | CreateAuthorizerRequest
  | CreateDeploymentRequest
  | CreateDomainNameRequest
  | CreateIntegrationRequest
  | CreateIntegrationResponseRequest
  | CreateModelRequest
  | CreateRouteRequest
  | CreateRouteResponseRequest
  | CreateStageRequest
  | DeleteApiMappingRequest
  | DeleteApiRequest
  | DeleteAuthorizerRequest
  | DeleteDeploymentRequest
  | DeleteDomainNameRequest
  | DeleteIntegrationRequest
  | DeleteIntegrationResponseRequest
  | DeleteModelRequest
  | DeleteRouteRequest
  | DeleteRouteResponseRequest
  | DeleteStageRequest
  | GetApiMappingRequest
  | GetApiMappingsRequest
  | GetApiRequest
  | GetApisRequest
  | GetAuthorizerRequest
  | GetAuthorizersRequest
  | GetDeploymentRequest
  | GetDeploymentsRequest
  | GetDomainNameRequest
  | GetDomainNamesRequest
  | GetIntegrationRequest
  | GetIntegrationResponseRequest
  | GetIntegrationResponsesRequest
  | GetIntegrationsRequest
  | GetModelRequest
  | GetModelTemplateRequest
  | GetModelsRequest
  | GetRouteRequest
  | GetRouteResponseRequest
  | GetRouteResponsesRequest
  | GetRoutesRequest
  | GetStageRequest
  | GetStagesRequest
  | UpdateApiMappingRequest
  | UpdateApiRequest
  | UpdateAuthorizerRequest
  | UpdateDeploymentRequest
  | UpdateDomainNameRequest
  | UpdateIntegrationRequest
  | UpdateIntegrationResponseRequest
  | UpdateModelRequest
  | UpdateRouteRequest
  | UpdateRouteResponseRequest
  | UpdateStageRequest;

export type ServiceOutputTypes =
  | __MetadataBearer
  | CreateApiMappingResponse
  | CreateApiResponse
  | CreateAuthorizerResponse
  | CreateDeploymentResponse
  | CreateDomainNameResponse
  | CreateIntegrationResponseResponse
  | CreateIntegrationResponseShape
  | CreateModelResponse
  | CreateRouteResponseResponse
  | CreateRouteResponseShape
  | CreateStageResponse
  | GetApiMappingResponse
  | GetApiMappingsResponse
  | GetApiResponse
  | GetApisResponse
  | GetAuthorizerResponse
  | GetAuthorizersResponse
  | GetDeploymentResponse
  | GetDeploymentsResponse
  | GetDomainNameResponse
  | GetDomainNamesResponse
  | GetIntegrationResponseResponse
  | GetIntegrationResponseShape
  | GetIntegrationResponsesResponse
  | GetIntegrationsResponse
  | GetModelResponse
  | GetModelTemplateResponse
  | GetModelsResponse
  | GetRouteResponseResponse
  | GetRouteResponseShape
  | GetRouteResponsesResponse
  | GetRoutesResponse
  | GetStageResponse
  | GetStagesResponse
  | UpdateApiMappingResponse
  | UpdateApiResponse
  | UpdateAuthorizerResponse
  | UpdateDeploymentResponse
  | UpdateDomainNameResponse
  | UpdateIntegrationResponseResponse
  | UpdateIntegrationResponseShape
  | UpdateModelResponse
  | UpdateRouteResponseResponse
  | UpdateRouteResponseShape
  | UpdateStageResponse;

export interface ClientDefaults
  extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
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
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type ApiGatewayV2ClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type ApiGatewayV2ClientResolvedConfig = __SmithyResolvedConfiguration<
  __HttpHandlerOptions
> &
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
      ...configuration
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

  destroy(): void {}
}
