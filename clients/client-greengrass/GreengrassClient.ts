import {
  AssociateRoleToGroupRequest,
  AssociateRoleToGroupResponse,
  AssociateServiceRoleToAccountRequest,
  AssociateServiceRoleToAccountResponse,
  CreateConnectorDefinitionRequest,
  CreateConnectorDefinitionResponse,
  CreateConnectorDefinitionVersionRequest,
  CreateConnectorDefinitionVersionResponse,
  CreateCoreDefinitionRequest,
  CreateCoreDefinitionResponse,
  CreateCoreDefinitionVersionRequest,
  CreateCoreDefinitionVersionResponse,
  CreateDeploymentRequest,
  CreateDeploymentResponse,
  CreateDeviceDefinitionRequest,
  CreateDeviceDefinitionResponse,
  CreateDeviceDefinitionVersionRequest,
  CreateDeviceDefinitionVersionResponse,
  CreateFunctionDefinitionRequest,
  CreateFunctionDefinitionResponse,
  CreateFunctionDefinitionVersionRequest,
  CreateFunctionDefinitionVersionResponse,
  CreateGroupCertificateAuthorityRequest,
  CreateGroupCertificateAuthorityResponse,
  CreateGroupRequest,
  CreateGroupResponse,
  CreateGroupVersionRequest,
  CreateGroupVersionResponse,
  CreateLoggerDefinitionRequest,
  CreateLoggerDefinitionResponse,
  CreateLoggerDefinitionVersionRequest,
  CreateLoggerDefinitionVersionResponse,
  CreateResourceDefinitionRequest,
  CreateResourceDefinitionResponse,
  CreateResourceDefinitionVersionRequest,
  CreateResourceDefinitionVersionResponse,
  CreateSoftwareUpdateJobRequest,
  CreateSoftwareUpdateJobResponse,
  CreateSubscriptionDefinitionRequest,
  CreateSubscriptionDefinitionResponse,
  CreateSubscriptionDefinitionVersionRequest,
  CreateSubscriptionDefinitionVersionResponse,
  DeleteConnectorDefinitionRequest,
  DeleteConnectorDefinitionResponse,
  DeleteCoreDefinitionRequest,
  DeleteCoreDefinitionResponse,
  DeleteDeviceDefinitionRequest,
  DeleteDeviceDefinitionResponse,
  DeleteFunctionDefinitionRequest,
  DeleteFunctionDefinitionResponse,
  DeleteGroupRequest,
  DeleteGroupResponse,
  DeleteLoggerDefinitionRequest,
  DeleteLoggerDefinitionResponse,
  DeleteResourceDefinitionRequest,
  DeleteResourceDefinitionResponse,
  DeleteSubscriptionDefinitionRequest,
  DeleteSubscriptionDefinitionResponse,
  DisassociateRoleFromGroupRequest,
  DisassociateRoleFromGroupResponse,
  DisassociateServiceRoleFromAccountRequest,
  DisassociateServiceRoleFromAccountResponse,
  GetAssociatedRoleRequest,
  GetAssociatedRoleResponse,
  GetBulkDeploymentStatusRequest,
  GetBulkDeploymentStatusResponse,
  GetConnectivityInfoRequest,
  GetConnectivityInfoResponse,
  GetConnectorDefinitionRequest,
  GetConnectorDefinitionResponse,
  GetConnectorDefinitionVersionRequest,
  GetConnectorDefinitionVersionResponse,
  GetCoreDefinitionRequest,
  GetCoreDefinitionResponse,
  GetCoreDefinitionVersionRequest,
  GetCoreDefinitionVersionResponse,
  GetDeploymentStatusRequest,
  GetDeploymentStatusResponse,
  GetDeviceDefinitionRequest,
  GetDeviceDefinitionResponse,
  GetDeviceDefinitionVersionRequest,
  GetDeviceDefinitionVersionResponse,
  GetFunctionDefinitionRequest,
  GetFunctionDefinitionResponse,
  GetFunctionDefinitionVersionRequest,
  GetFunctionDefinitionVersionResponse,
  GetGroupCertificateAuthorityRequest,
  GetGroupCertificateAuthorityResponse,
  GetGroupCertificateConfigurationRequest,
  GetGroupCertificateConfigurationResponse,
  GetGroupRequest,
  GetGroupResponse,
  GetGroupVersionRequest,
  GetGroupVersionResponse,
  GetLoggerDefinitionRequest,
  GetLoggerDefinitionResponse,
  GetLoggerDefinitionVersionRequest,
  GetLoggerDefinitionVersionResponse,
  GetResourceDefinitionRequest,
  GetResourceDefinitionResponse,
  GetResourceDefinitionVersionRequest,
  GetResourceDefinitionVersionResponse,
  GetServiceRoleForAccountRequest,
  GetServiceRoleForAccountResponse,
  GetSubscriptionDefinitionRequest,
  GetSubscriptionDefinitionResponse,
  GetSubscriptionDefinitionVersionRequest,
  GetSubscriptionDefinitionVersionResponse,
  ListBulkDeploymentDetailedReportsRequest,
  ListBulkDeploymentDetailedReportsResponse,
  ListBulkDeploymentsRequest,
  ListBulkDeploymentsResponse,
  ListConnectorDefinitionVersionsRequest,
  ListConnectorDefinitionVersionsResponse,
  ListConnectorDefinitionsRequest,
  ListConnectorDefinitionsResponse,
  ListCoreDefinitionVersionsRequest,
  ListCoreDefinitionVersionsResponse,
  ListCoreDefinitionsRequest,
  ListCoreDefinitionsResponse,
  ListDeploymentsRequest,
  ListDeploymentsResponse,
  ListDeviceDefinitionVersionsRequest,
  ListDeviceDefinitionVersionsResponse,
  ListDeviceDefinitionsRequest,
  ListDeviceDefinitionsResponse,
  ListFunctionDefinitionVersionsRequest,
  ListFunctionDefinitionVersionsResponse,
  ListFunctionDefinitionsRequest,
  ListFunctionDefinitionsResponse,
  ListGroupCertificateAuthoritiesRequest,
  ListGroupCertificateAuthoritiesResponse,
  ListGroupVersionsRequest,
  ListGroupVersionsResponse,
  ListGroupsRequest,
  ListGroupsResponse,
  ListLoggerDefinitionVersionsRequest,
  ListLoggerDefinitionVersionsResponse,
  ListLoggerDefinitionsRequest,
  ListLoggerDefinitionsResponse,
  ListResourceDefinitionVersionsRequest,
  ListResourceDefinitionVersionsResponse,
  ListResourceDefinitionsRequest,
  ListResourceDefinitionsResponse,
  ListSubscriptionDefinitionVersionsRequest,
  ListSubscriptionDefinitionVersionsResponse,
  ListSubscriptionDefinitionsRequest,
  ListSubscriptionDefinitionsResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ResetDeploymentsRequest,
  ResetDeploymentsResponse,
  StartBulkDeploymentRequest,
  StartBulkDeploymentResponse,
  StopBulkDeploymentRequest,
  StopBulkDeploymentResponse,
  TagResourceRequest,
  UntagResourceRequest,
  UpdateConnectivityInfoRequest,
  UpdateConnectivityInfoResponse,
  UpdateConnectorDefinitionRequest,
  UpdateConnectorDefinitionResponse,
  UpdateCoreDefinitionRequest,
  UpdateCoreDefinitionResponse,
  UpdateDeviceDefinitionRequest,
  UpdateDeviceDefinitionResponse,
  UpdateFunctionDefinitionRequest,
  UpdateFunctionDefinitionResponse,
  UpdateGroupCertificateConfigurationRequest,
  UpdateGroupCertificateConfigurationResponse,
  UpdateGroupRequest,
  UpdateGroupResponse,
  UpdateLoggerDefinitionRequest,
  UpdateLoggerDefinitionResponse,
  UpdateResourceDefinitionRequest,
  UpdateResourceDefinitionResponse,
  UpdateSubscriptionDefinitionRequest,
  UpdateSubscriptionDefinitionResponse
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
  | AssociateRoleToGroupRequest
  | AssociateServiceRoleToAccountRequest
  | CreateConnectorDefinitionRequest
  | CreateConnectorDefinitionVersionRequest
  | CreateCoreDefinitionRequest
  | CreateCoreDefinitionVersionRequest
  | CreateDeploymentRequest
  | CreateDeviceDefinitionRequest
  | CreateDeviceDefinitionVersionRequest
  | CreateFunctionDefinitionRequest
  | CreateFunctionDefinitionVersionRequest
  | CreateGroupCertificateAuthorityRequest
  | CreateGroupRequest
  | CreateGroupVersionRequest
  | CreateLoggerDefinitionRequest
  | CreateLoggerDefinitionVersionRequest
  | CreateResourceDefinitionRequest
  | CreateResourceDefinitionVersionRequest
  | CreateSoftwareUpdateJobRequest
  | CreateSubscriptionDefinitionRequest
  | CreateSubscriptionDefinitionVersionRequest
  | DeleteConnectorDefinitionRequest
  | DeleteCoreDefinitionRequest
  | DeleteDeviceDefinitionRequest
  | DeleteFunctionDefinitionRequest
  | DeleteGroupRequest
  | DeleteLoggerDefinitionRequest
  | DeleteResourceDefinitionRequest
  | DeleteSubscriptionDefinitionRequest
  | DisassociateRoleFromGroupRequest
  | DisassociateServiceRoleFromAccountRequest
  | GetAssociatedRoleRequest
  | GetBulkDeploymentStatusRequest
  | GetConnectivityInfoRequest
  | GetConnectorDefinitionRequest
  | GetConnectorDefinitionVersionRequest
  | GetCoreDefinitionRequest
  | GetCoreDefinitionVersionRequest
  | GetDeploymentStatusRequest
  | GetDeviceDefinitionRequest
  | GetDeviceDefinitionVersionRequest
  | GetFunctionDefinitionRequest
  | GetFunctionDefinitionVersionRequest
  | GetGroupCertificateAuthorityRequest
  | GetGroupCertificateConfigurationRequest
  | GetGroupRequest
  | GetGroupVersionRequest
  | GetLoggerDefinitionRequest
  | GetLoggerDefinitionVersionRequest
  | GetResourceDefinitionRequest
  | GetResourceDefinitionVersionRequest
  | GetServiceRoleForAccountRequest
  | GetSubscriptionDefinitionRequest
  | GetSubscriptionDefinitionVersionRequest
  | ListBulkDeploymentDetailedReportsRequest
  | ListBulkDeploymentsRequest
  | ListConnectorDefinitionVersionsRequest
  | ListConnectorDefinitionsRequest
  | ListCoreDefinitionVersionsRequest
  | ListCoreDefinitionsRequest
  | ListDeploymentsRequest
  | ListDeviceDefinitionVersionsRequest
  | ListDeviceDefinitionsRequest
  | ListFunctionDefinitionVersionsRequest
  | ListFunctionDefinitionsRequest
  | ListGroupCertificateAuthoritiesRequest
  | ListGroupVersionsRequest
  | ListGroupsRequest
  | ListLoggerDefinitionVersionsRequest
  | ListLoggerDefinitionsRequest
  | ListResourceDefinitionVersionsRequest
  | ListResourceDefinitionsRequest
  | ListSubscriptionDefinitionVersionsRequest
  | ListSubscriptionDefinitionsRequest
  | ListTagsForResourceRequest
  | ResetDeploymentsRequest
  | StartBulkDeploymentRequest
  | StopBulkDeploymentRequest
  | TagResourceRequest
  | UntagResourceRequest
  | UpdateConnectivityInfoRequest
  | UpdateConnectorDefinitionRequest
  | UpdateCoreDefinitionRequest
  | UpdateDeviceDefinitionRequest
  | UpdateFunctionDefinitionRequest
  | UpdateGroupCertificateConfigurationRequest
  | UpdateGroupRequest
  | UpdateLoggerDefinitionRequest
  | UpdateResourceDefinitionRequest
  | UpdateSubscriptionDefinitionRequest;

export type ServiceOutputTypes =
  | __MetadataBearer
  | AssociateRoleToGroupResponse
  | AssociateServiceRoleToAccountResponse
  | CreateConnectorDefinitionResponse
  | CreateConnectorDefinitionVersionResponse
  | CreateCoreDefinitionResponse
  | CreateCoreDefinitionVersionResponse
  | CreateDeploymentResponse
  | CreateDeviceDefinitionResponse
  | CreateDeviceDefinitionVersionResponse
  | CreateFunctionDefinitionResponse
  | CreateFunctionDefinitionVersionResponse
  | CreateGroupCertificateAuthorityResponse
  | CreateGroupResponse
  | CreateGroupVersionResponse
  | CreateLoggerDefinitionResponse
  | CreateLoggerDefinitionVersionResponse
  | CreateResourceDefinitionResponse
  | CreateResourceDefinitionVersionResponse
  | CreateSoftwareUpdateJobResponse
  | CreateSubscriptionDefinitionResponse
  | CreateSubscriptionDefinitionVersionResponse
  | DeleteConnectorDefinitionResponse
  | DeleteCoreDefinitionResponse
  | DeleteDeviceDefinitionResponse
  | DeleteFunctionDefinitionResponse
  | DeleteGroupResponse
  | DeleteLoggerDefinitionResponse
  | DeleteResourceDefinitionResponse
  | DeleteSubscriptionDefinitionResponse
  | DisassociateRoleFromGroupResponse
  | DisassociateServiceRoleFromAccountResponse
  | GetAssociatedRoleResponse
  | GetBulkDeploymentStatusResponse
  | GetConnectivityInfoResponse
  | GetConnectorDefinitionResponse
  | GetConnectorDefinitionVersionResponse
  | GetCoreDefinitionResponse
  | GetCoreDefinitionVersionResponse
  | GetDeploymentStatusResponse
  | GetDeviceDefinitionResponse
  | GetDeviceDefinitionVersionResponse
  | GetFunctionDefinitionResponse
  | GetFunctionDefinitionVersionResponse
  | GetGroupCertificateAuthorityResponse
  | GetGroupCertificateConfigurationResponse
  | GetGroupResponse
  | GetGroupVersionResponse
  | GetLoggerDefinitionResponse
  | GetLoggerDefinitionVersionResponse
  | GetResourceDefinitionResponse
  | GetResourceDefinitionVersionResponse
  | GetServiceRoleForAccountResponse
  | GetSubscriptionDefinitionResponse
  | GetSubscriptionDefinitionVersionResponse
  | ListBulkDeploymentDetailedReportsResponse
  | ListBulkDeploymentsResponse
  | ListConnectorDefinitionVersionsResponse
  | ListConnectorDefinitionsResponse
  | ListCoreDefinitionVersionsResponse
  | ListCoreDefinitionsResponse
  | ListDeploymentsResponse
  | ListDeviceDefinitionVersionsResponse
  | ListDeviceDefinitionsResponse
  | ListFunctionDefinitionVersionsResponse
  | ListFunctionDefinitionsResponse
  | ListGroupCertificateAuthoritiesResponse
  | ListGroupVersionsResponse
  | ListGroupsResponse
  | ListLoggerDefinitionVersionsResponse
  | ListLoggerDefinitionsResponse
  | ListResourceDefinitionVersionsResponse
  | ListResourceDefinitionsResponse
  | ListSubscriptionDefinitionVersionsResponse
  | ListSubscriptionDefinitionsResponse
  | ListTagsForResourceResponse
  | ResetDeploymentsResponse
  | StartBulkDeploymentResponse
  | StopBulkDeploymentResponse
  | UpdateConnectivityInfoResponse
  | UpdateConnectorDefinitionResponse
  | UpdateCoreDefinitionResponse
  | UpdateDeviceDefinitionResponse
  | UpdateFunctionDefinitionResponse
  | UpdateGroupCertificateConfigurationResponse
  | UpdateGroupResponse
  | UpdateLoggerDefinitionResponse
  | UpdateResourceDefinitionResponse
  | UpdateSubscriptionDefinitionResponse;

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

export type GreengrassClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type GreengrassClientResolvedConfig = __SmithyResolvedConfiguration<
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
 * AWS IoT Greengrass seamlessly extends AWS onto physical devices so they can act locally on the data they generate, while still using the cloud for management, analytics, and durable storage. AWS IoT Greengrass ensures your devices can respond quickly to local events and operate with intermittent connectivity. AWS IoT Greengrass minimizes the cost of transmitting data to the cloud by allowing you to author AWS Lambda functions that execute locally.
 */
export class GreengrassClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  GreengrassClientResolvedConfig
> {
  readonly config: GreengrassClientResolvedConfig;

  constructor(configuration: GreengrassClientConfig) {
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
