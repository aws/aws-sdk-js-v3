import {
  Account,
  ApiKey,
  ApiKeyIds,
  ApiKeys,
  Authorizer,
  Authorizers,
  BasePathMapping,
  BasePathMappings,
  ClientCertificate,
  ClientCertificates,
  CreateApiKeyRequest,
  CreateAuthorizerRequest,
  CreateBasePathMappingRequest,
  CreateDeploymentRequest,
  CreateDocumentationPartRequest,
  CreateDocumentationVersionRequest,
  CreateDomainNameRequest,
  CreateModelRequest,
  CreateRequestValidatorRequest,
  CreateResourceRequest,
  CreateRestApiRequest,
  CreateStageRequest,
  CreateUsagePlanKeyRequest,
  CreateUsagePlanRequest,
  CreateVpcLinkRequest,
  DeleteApiKeyRequest,
  DeleteAuthorizerRequest,
  DeleteBasePathMappingRequest,
  DeleteClientCertificateRequest,
  DeleteDeploymentRequest,
  DeleteDocumentationPartRequest,
  DeleteDocumentationVersionRequest,
  DeleteDomainNameRequest,
  DeleteGatewayResponseRequest,
  DeleteIntegrationRequest,
  DeleteIntegrationResponseRequest,
  DeleteMethodRequest,
  DeleteMethodResponseRequest,
  DeleteModelRequest,
  DeleteRequestValidatorRequest,
  DeleteResourceRequest,
  DeleteRestApiRequest,
  DeleteStageRequest,
  DeleteUsagePlanKeyRequest,
  DeleteUsagePlanRequest,
  DeleteVpcLinkRequest,
  Deployment,
  Deployments,
  DocumentationPart,
  DocumentationPartIds,
  DocumentationParts,
  DocumentationVersion,
  DocumentationVersions,
  DomainName,
  DomainNames,
  ExportResponse,
  FlushStageAuthorizersCacheRequest,
  FlushStageCacheRequest,
  GatewayResponse,
  GatewayResponses,
  GenerateClientCertificateRequest,
  GetAccountRequest,
  GetApiKeyRequest,
  GetApiKeysRequest,
  GetAuthorizerRequest,
  GetAuthorizersRequest,
  GetBasePathMappingRequest,
  GetBasePathMappingsRequest,
  GetClientCertificateRequest,
  GetClientCertificatesRequest,
  GetDeploymentRequest,
  GetDeploymentsRequest,
  GetDocumentationPartRequest,
  GetDocumentationPartsRequest,
  GetDocumentationVersionRequest,
  GetDocumentationVersionsRequest,
  GetDomainNameRequest,
  GetDomainNamesRequest,
  GetExportRequest,
  GetGatewayResponseRequest,
  GetGatewayResponsesRequest,
  GetIntegrationRequest,
  GetIntegrationResponseRequest,
  GetMethodRequest,
  GetMethodResponseRequest,
  GetModelRequest,
  GetModelTemplateRequest,
  GetModelsRequest,
  GetRequestValidatorRequest,
  GetRequestValidatorsRequest,
  GetResourceRequest,
  GetResourcesRequest,
  GetRestApiRequest,
  GetRestApisRequest,
  GetSdkRequest,
  GetSdkTypeRequest,
  GetSdkTypesRequest,
  GetStageRequest,
  GetStagesRequest,
  GetTagsRequest,
  GetUsagePlanKeyRequest,
  GetUsagePlanKeysRequest,
  GetUsagePlanRequest,
  GetUsagePlansRequest,
  GetUsageRequest,
  GetVpcLinkRequest,
  GetVpcLinksRequest,
  ImportApiKeysRequest,
  ImportDocumentationPartsRequest,
  ImportRestApiRequest,
  Integration,
  IntegrationResponse,
  Method,
  MethodResponse,
  Model,
  Models,
  PutGatewayResponseRequest,
  PutIntegrationRequest,
  PutIntegrationResponseRequest,
  PutMethodRequest,
  PutMethodResponseRequest,
  PutRestApiRequest,
  RequestValidator,
  RequestValidators,
  Resource,
  Resources,
  RestApi,
  RestApis,
  SdkResponse,
  SdkType,
  SdkTypes,
  Stage,
  Stages,
  TagResourceRequest,
  Tags,
  Template,
  TestInvokeAuthorizerRequest,
  TestInvokeAuthorizerResponse,
  TestInvokeMethodRequest,
  TestInvokeMethodResponse,
  UntagResourceRequest,
  UpdateAccountRequest,
  UpdateApiKeyRequest,
  UpdateAuthorizerRequest,
  UpdateBasePathMappingRequest,
  UpdateClientCertificateRequest,
  UpdateDeploymentRequest,
  UpdateDocumentationPartRequest,
  UpdateDocumentationVersionRequest,
  UpdateDomainNameRequest,
  UpdateGatewayResponseRequest,
  UpdateIntegrationRequest,
  UpdateIntegrationResponseRequest,
  UpdateMethodRequest,
  UpdateMethodResponseRequest,
  UpdateModelRequest,
  UpdateRequestValidatorRequest,
  UpdateResourceRequest,
  UpdateRestApiRequest,
  UpdateStageRequest,
  UpdateUsagePlanRequest,
  UpdateUsageRequest,
  UpdateVpcLinkRequest,
  Usage,
  UsagePlan,
  UsagePlanKey,
  UsagePlanKeys,
  UsagePlans,
  VpcLink,
  VpcLinks,
} from "./models/index";
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
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@aws-sdk/middleware-retry";
import { getAcceptsHeaderPlugin } from "@aws-sdk/middleware-sdk-api-gateway";
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
  MetadataBearer as __MetadataBearer,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | CreateApiKeyRequest
  | CreateAuthorizerRequest
  | CreateBasePathMappingRequest
  | CreateDeploymentRequest
  | CreateDocumentationPartRequest
  | CreateDocumentationVersionRequest
  | CreateDomainNameRequest
  | CreateModelRequest
  | CreateRequestValidatorRequest
  | CreateResourceRequest
  | CreateRestApiRequest
  | CreateStageRequest
  | CreateUsagePlanKeyRequest
  | CreateUsagePlanRequest
  | CreateVpcLinkRequest
  | DeleteApiKeyRequest
  | DeleteAuthorizerRequest
  | DeleteBasePathMappingRequest
  | DeleteClientCertificateRequest
  | DeleteDeploymentRequest
  | DeleteDocumentationPartRequest
  | DeleteDocumentationVersionRequest
  | DeleteDomainNameRequest
  | DeleteGatewayResponseRequest
  | DeleteIntegrationRequest
  | DeleteIntegrationResponseRequest
  | DeleteMethodRequest
  | DeleteMethodResponseRequest
  | DeleteModelRequest
  | DeleteRequestValidatorRequest
  | DeleteResourceRequest
  | DeleteRestApiRequest
  | DeleteStageRequest
  | DeleteUsagePlanKeyRequest
  | DeleteUsagePlanRequest
  | DeleteVpcLinkRequest
  | FlushStageAuthorizersCacheRequest
  | FlushStageCacheRequest
  | GenerateClientCertificateRequest
  | GetAccountRequest
  | GetApiKeyRequest
  | GetApiKeysRequest
  | GetAuthorizerRequest
  | GetAuthorizersRequest
  | GetBasePathMappingRequest
  | GetBasePathMappingsRequest
  | GetClientCertificateRequest
  | GetClientCertificatesRequest
  | GetDeploymentRequest
  | GetDeploymentsRequest
  | GetDocumentationPartRequest
  | GetDocumentationPartsRequest
  | GetDocumentationVersionRequest
  | GetDocumentationVersionsRequest
  | GetDomainNameRequest
  | GetDomainNamesRequest
  | GetExportRequest
  | GetGatewayResponseRequest
  | GetGatewayResponsesRequest
  | GetIntegrationRequest
  | GetIntegrationResponseRequest
  | GetMethodRequest
  | GetMethodResponseRequest
  | GetModelRequest
  | GetModelTemplateRequest
  | GetModelsRequest
  | GetRequestValidatorRequest
  | GetRequestValidatorsRequest
  | GetResourceRequest
  | GetResourcesRequest
  | GetRestApiRequest
  | GetRestApisRequest
  | GetSdkRequest
  | GetSdkTypeRequest
  | GetSdkTypesRequest
  | GetStageRequest
  | GetStagesRequest
  | GetTagsRequest
  | GetUsagePlanKeyRequest
  | GetUsagePlanKeysRequest
  | GetUsagePlanRequest
  | GetUsagePlansRequest
  | GetUsageRequest
  | GetVpcLinkRequest
  | GetVpcLinksRequest
  | ImportApiKeysRequest
  | ImportDocumentationPartsRequest
  | ImportRestApiRequest
  | PutGatewayResponseRequest
  | PutIntegrationRequest
  | PutIntegrationResponseRequest
  | PutMethodRequest
  | PutMethodResponseRequest
  | PutRestApiRequest
  | TagResourceRequest
  | TestInvokeAuthorizerRequest
  | TestInvokeMethodRequest
  | UntagResourceRequest
  | UpdateAccountRequest
  | UpdateApiKeyRequest
  | UpdateAuthorizerRequest
  | UpdateBasePathMappingRequest
  | UpdateClientCertificateRequest
  | UpdateDeploymentRequest
  | UpdateDocumentationPartRequest
  | UpdateDocumentationVersionRequest
  | UpdateDomainNameRequest
  | UpdateGatewayResponseRequest
  | UpdateIntegrationRequest
  | UpdateIntegrationResponseRequest
  | UpdateMethodRequest
  | UpdateMethodResponseRequest
  | UpdateModelRequest
  | UpdateRequestValidatorRequest
  | UpdateResourceRequest
  | UpdateRestApiRequest
  | UpdateStageRequest
  | UpdateUsagePlanRequest
  | UpdateUsageRequest
  | UpdateVpcLinkRequest;

export type ServiceOutputTypes =
  | __MetadataBearer
  | Account
  | Account
  | ApiKey
  | ApiKey
  | ApiKey
  | ApiKeyIds
  | ApiKeys
  | Authorizer
  | Authorizer
  | Authorizer
  | Authorizers
  | BasePathMapping
  | BasePathMapping
  | BasePathMapping
  | BasePathMappings
  | ClientCertificate
  | ClientCertificate
  | ClientCertificate
  | ClientCertificates
  | Deployment
  | Deployment
  | Deployment
  | Deployments
  | DocumentationPart
  | DocumentationPart
  | DocumentationPart
  | DocumentationPartIds
  | DocumentationParts
  | DocumentationVersion
  | DocumentationVersion
  | DocumentationVersion
  | DocumentationVersions
  | DomainName
  | DomainName
  | DomainName
  | DomainNames
  | ExportResponse
  | GatewayResponse
  | GatewayResponse
  | GatewayResponse
  | GatewayResponses
  | Integration
  | Integration
  | Integration
  | IntegrationResponse
  | IntegrationResponse
  | IntegrationResponse
  | Method
  | Method
  | Method
  | MethodResponse
  | MethodResponse
  | MethodResponse
  | Model
  | Model
  | Model
  | Models
  | RequestValidator
  | RequestValidator
  | RequestValidator
  | RequestValidators
  | Resource
  | Resource
  | Resource
  | Resources
  | RestApi
  | RestApi
  | RestApi
  | RestApi
  | RestApi
  | RestApis
  | SdkResponse
  | SdkType
  | SdkTypes
  | Stage
  | Stage
  | Stage
  | Stages
  | Tags
  | Template
  | TestInvokeAuthorizerResponse
  | TestInvokeMethodResponse
  | Usage
  | Usage
  | UsagePlan
  | UsagePlan
  | UsagePlan
  | UsagePlanKey
  | UsagePlanKey
  | UsagePlanKeys
  | UsagePlans
  | VpcLink
  | VpcLink
  | VpcLink
  | VpcLinks;

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

export type APIGatewayClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>>
  & ClientDefaults
  & RegionInputConfig
  & EndpointsInputConfig
  & AwsAuthInputConfig
  & RetryInputConfig
  & UserAgentInputConfig
  & HostHeaderInputConfig

export type APIGatewayClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions>
  & Required<ClientDefaults>
  & RegionResolvedConfig
  & EndpointsResolvedConfig
  & AwsAuthResolvedConfig
  & RetryResolvedConfig
  & UserAgentResolvedConfig
  & HostHeaderResolvedConfig

/**
 * <fullname>
 *  Amazon API Gateway
 * </fullname>
 * <p>
 *  Amazon API Gateway helps developers deliver robust, secure, and scalable mobile and web application back ends. API Gateway allows developers to securely connect mobile and web applications to APIs that run on AWS Lambda, Amazon EC2, or other publicly addressable web services that are hosted outside of AWS.
 * </p>
 */
export class APIGatewayClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  APIGatewayClientResolvedConfig
> {
  readonly config: APIGatewayClientResolvedConfig;

  constructor(configuration: APIGatewayClientConfig) {
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
    this.middlewareStack.use(getAcceptsHeaderPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
  }

  destroy(): void {
  }
}
