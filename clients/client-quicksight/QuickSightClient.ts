import {
  CancelIngestionRequest,
  CancelIngestionResponse,
  CreateDashboardRequest,
  CreateDashboardResponse,
  CreateDataSetRequest,
  CreateDataSetResponse,
  CreateDataSourceRequest,
  CreateDataSourceResponse,
  CreateGroupMembershipRequest,
  CreateGroupMembershipResponse,
  CreateGroupRequest,
  CreateGroupResponse,
  CreateIAMPolicyAssignmentRequest,
  CreateIAMPolicyAssignmentResponse,
  CreateIngestionRequest,
  CreateIngestionResponse,
  CreateTemplateAliasRequest,
  CreateTemplateAliasResponse,
  CreateTemplateRequest,
  CreateTemplateResponse,
  DeleteDashboardRequest,
  DeleteDashboardResponse,
  DeleteDataSetRequest,
  DeleteDataSetResponse,
  DeleteDataSourceRequest,
  DeleteDataSourceResponse,
  DeleteGroupMembershipRequest,
  DeleteGroupMembershipResponse,
  DeleteGroupRequest,
  DeleteGroupResponse,
  DeleteIAMPolicyAssignmentRequest,
  DeleteIAMPolicyAssignmentResponse,
  DeleteTemplateAliasRequest,
  DeleteTemplateAliasResponse,
  DeleteTemplateRequest,
  DeleteTemplateResponse,
  DeleteUserByPrincipalIdRequest,
  DeleteUserByPrincipalIdResponse,
  DeleteUserRequest,
  DeleteUserResponse,
  DescribeDashboardPermissionsRequest,
  DescribeDashboardPermissionsResponse,
  DescribeDashboardRequest,
  DescribeDashboardResponse,
  DescribeDataSetPermissionsRequest,
  DescribeDataSetPermissionsResponse,
  DescribeDataSetRequest,
  DescribeDataSetResponse,
  DescribeDataSourcePermissionsRequest,
  DescribeDataSourcePermissionsResponse,
  DescribeDataSourceRequest,
  DescribeDataSourceResponse,
  DescribeGroupRequest,
  DescribeGroupResponse,
  DescribeIAMPolicyAssignmentRequest,
  DescribeIAMPolicyAssignmentResponse,
  DescribeIngestionRequest,
  DescribeIngestionResponse,
  DescribeTemplateAliasRequest,
  DescribeTemplateAliasResponse,
  DescribeTemplatePermissionsRequest,
  DescribeTemplatePermissionsResponse,
  DescribeTemplateRequest,
  DescribeTemplateResponse,
  DescribeUserRequest,
  DescribeUserResponse,
  GetDashboardEmbedUrlRequest,
  GetDashboardEmbedUrlResponse,
  ListDashboardVersionsRequest,
  ListDashboardVersionsResponse,
  ListDashboardsRequest,
  ListDashboardsResponse,
  ListDataSetsRequest,
  ListDataSetsResponse,
  ListDataSourcesRequest,
  ListDataSourcesResponse,
  ListGroupMembershipsRequest,
  ListGroupMembershipsResponse,
  ListGroupsRequest,
  ListGroupsResponse,
  ListIAMPolicyAssignmentsForUserRequest,
  ListIAMPolicyAssignmentsForUserResponse,
  ListIAMPolicyAssignmentsRequest,
  ListIAMPolicyAssignmentsResponse,
  ListIngestionsRequest,
  ListIngestionsResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTemplateAliasesRequest,
  ListTemplateAliasesResponse,
  ListTemplateVersionsRequest,
  ListTemplateVersionsResponse,
  ListTemplatesRequest,
  ListTemplatesResponse,
  ListUserGroupsRequest,
  ListUserGroupsResponse,
  ListUsersRequest,
  ListUsersResponse,
  RegisterUserRequest,
  RegisterUserResponse,
  TagResourceRequest,
  TagResourceResponse,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateDashboardPermissionsRequest,
  UpdateDashboardPermissionsResponse,
  UpdateDashboardPublishedVersionRequest,
  UpdateDashboardPublishedVersionResponse,
  UpdateDashboardRequest,
  UpdateDashboardResponse,
  UpdateDataSetPermissionsRequest,
  UpdateDataSetPermissionsResponse,
  UpdateDataSetRequest,
  UpdateDataSetResponse,
  UpdateDataSourcePermissionsRequest,
  UpdateDataSourcePermissionsResponse,
  UpdateDataSourceRequest,
  UpdateDataSourceResponse,
  UpdateGroupRequest,
  UpdateGroupResponse,
  UpdateIAMPolicyAssignmentRequest,
  UpdateIAMPolicyAssignmentResponse,
  UpdateTemplateAliasRequest,
  UpdateTemplateAliasResponse,
  UpdateTemplatePermissionsRequest,
  UpdateTemplatePermissionsResponse,
  UpdateTemplateRequest,
  UpdateTemplateResponse,
  UpdateUserRequest,
  UpdateUserResponse,
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
  | CancelIngestionRequest
  | CreateDashboardRequest
  | CreateDataSetRequest
  | CreateDataSourceRequest
  | CreateGroupMembershipRequest
  | CreateGroupRequest
  | CreateIAMPolicyAssignmentRequest
  | CreateIngestionRequest
  | CreateTemplateAliasRequest
  | CreateTemplateRequest
  | DeleteDashboardRequest
  | DeleteDataSetRequest
  | DeleteDataSourceRequest
  | DeleteGroupMembershipRequest
  | DeleteGroupRequest
  | DeleteIAMPolicyAssignmentRequest
  | DeleteTemplateAliasRequest
  | DeleteTemplateRequest
  | DeleteUserByPrincipalIdRequest
  | DeleteUserRequest
  | DescribeDashboardPermissionsRequest
  | DescribeDashboardRequest
  | DescribeDataSetPermissionsRequest
  | DescribeDataSetRequest
  | DescribeDataSourcePermissionsRequest
  | DescribeDataSourceRequest
  | DescribeGroupRequest
  | DescribeIAMPolicyAssignmentRequest
  | DescribeIngestionRequest
  | DescribeTemplateAliasRequest
  | DescribeTemplatePermissionsRequest
  | DescribeTemplateRequest
  | DescribeUserRequest
  | GetDashboardEmbedUrlRequest
  | ListDashboardVersionsRequest
  | ListDashboardsRequest
  | ListDataSetsRequest
  | ListDataSourcesRequest
  | ListGroupMembershipsRequest
  | ListGroupsRequest
  | ListIAMPolicyAssignmentsForUserRequest
  | ListIAMPolicyAssignmentsRequest
  | ListIngestionsRequest
  | ListTagsForResourceRequest
  | ListTemplateAliasesRequest
  | ListTemplateVersionsRequest
  | ListTemplatesRequest
  | ListUserGroupsRequest
  | ListUsersRequest
  | RegisterUserRequest
  | TagResourceRequest
  | UntagResourceRequest
  | UpdateDashboardPermissionsRequest
  | UpdateDashboardPublishedVersionRequest
  | UpdateDashboardRequest
  | UpdateDataSetPermissionsRequest
  | UpdateDataSetRequest
  | UpdateDataSourcePermissionsRequest
  | UpdateDataSourceRequest
  | UpdateGroupRequest
  | UpdateIAMPolicyAssignmentRequest
  | UpdateTemplateAliasRequest
  | UpdateTemplatePermissionsRequest
  | UpdateTemplateRequest
  | UpdateUserRequest;

export type ServiceOutputTypes =
  | CancelIngestionResponse
  | CreateDashboardResponse
  | CreateDataSetResponse
  | CreateDataSourceResponse
  | CreateGroupMembershipResponse
  | CreateGroupResponse
  | CreateIAMPolicyAssignmentResponse
  | CreateIngestionResponse
  | CreateTemplateAliasResponse
  | CreateTemplateResponse
  | DeleteDashboardResponse
  | DeleteDataSetResponse
  | DeleteDataSourceResponse
  | DeleteGroupMembershipResponse
  | DeleteGroupResponse
  | DeleteIAMPolicyAssignmentResponse
  | DeleteTemplateAliasResponse
  | DeleteTemplateResponse
  | DeleteUserByPrincipalIdResponse
  | DeleteUserResponse
  | DescribeDashboardPermissionsResponse
  | DescribeDashboardResponse
  | DescribeDataSetPermissionsResponse
  | DescribeDataSetResponse
  | DescribeDataSourcePermissionsResponse
  | DescribeDataSourceResponse
  | DescribeGroupResponse
  | DescribeIAMPolicyAssignmentResponse
  | DescribeIngestionResponse
  | DescribeTemplateAliasResponse
  | DescribeTemplatePermissionsResponse
  | DescribeTemplateResponse
  | DescribeUserResponse
  | GetDashboardEmbedUrlResponse
  | ListDashboardVersionsResponse
  | ListDashboardsResponse
  | ListDataSetsResponse
  | ListDataSourcesResponse
  | ListGroupMembershipsResponse
  | ListGroupsResponse
  | ListIAMPolicyAssignmentsForUserResponse
  | ListIAMPolicyAssignmentsResponse
  | ListIngestionsResponse
  | ListTagsForResourceResponse
  | ListTemplateAliasesResponse
  | ListTemplateVersionsResponse
  | ListTemplatesResponse
  | ListUserGroupsResponse
  | ListUsersResponse
  | RegisterUserResponse
  | TagResourceResponse
  | UntagResourceResponse
  | UpdateDashboardPermissionsResponse
  | UpdateDashboardPublishedVersionResponse
  | UpdateDashboardResponse
  | UpdateDataSetPermissionsResponse
  | UpdateDataSetResponse
  | UpdateDataSourcePermissionsResponse
  | UpdateDataSourceResponse
  | UpdateGroupResponse
  | UpdateIAMPolicyAssignmentResponse
  | UpdateTemplateAliasResponse
  | UpdateTemplatePermissionsResponse
  | UpdateTemplateResponse
  | UpdateUserResponse;

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

export type QuickSightClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>>
  & ClientDefaults
  & RegionInputConfig
  & EndpointsInputConfig
  & AwsAuthInputConfig
  & RetryInputConfig
  & UserAgentInputConfig
  & HostHeaderInputConfig

export type QuickSightClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions>
  & Required<ClientDefaults>
  & RegionResolvedConfig
  & EndpointsResolvedConfig
  & AwsAuthResolvedConfig
  & RetryResolvedConfig
  & UserAgentResolvedConfig
  & HostHeaderResolvedConfig

/**
 *
 * 		       <fullname>Amazon QuickSight API Reference</fullname>
 * 		       <p>Amazon QuickSight is a fully managed, serverless business intelligence service for the AWS
 * 			Cloud that makes it easy to extend data and insights to every user in your organization.
 * 			This API reference contains documentation for a programming interface that you can use
 * 			to manage Amazon QuickSight. </p>
 * 	
 */
export class QuickSightClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  QuickSightClientResolvedConfig
> {
  readonly config: QuickSightClientResolvedConfig;

  constructor(configuration: QuickSightClientConfig) {
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

  destroy(): void {
  }
}
