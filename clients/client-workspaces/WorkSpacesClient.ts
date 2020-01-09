import {
  AssociateIpGroupsRequest,
  AssociateIpGroupsResult,
  AuthorizeIpRulesRequest,
  AuthorizeIpRulesResult,
  CopyWorkspaceImageRequest,
  CopyWorkspaceImageResult,
  CreateIpGroupRequest,
  CreateIpGroupResult,
  CreateTagsRequest,
  CreateTagsResult,
  CreateWorkspacesRequest,
  CreateWorkspacesResult,
  DeleteIpGroupRequest,
  DeleteIpGroupResult,
  DeleteTagsRequest,
  DeleteTagsResult,
  DeleteWorkspaceImageRequest,
  DeleteWorkspaceImageResult,
  DeregisterWorkspaceDirectoryRequest,
  DeregisterWorkspaceDirectoryResult,
  DescribeAccountModificationsRequest,
  DescribeAccountModificationsResult,
  DescribeAccountRequest,
  DescribeAccountResult,
  DescribeClientPropertiesRequest,
  DescribeClientPropertiesResult,
  DescribeIpGroupsRequest,
  DescribeIpGroupsResult,
  DescribeTagsRequest,
  DescribeTagsResult,
  DescribeWorkspaceBundlesRequest,
  DescribeWorkspaceBundlesResult,
  DescribeWorkspaceDirectoriesRequest,
  DescribeWorkspaceDirectoriesResult,
  DescribeWorkspaceImagesRequest,
  DescribeWorkspaceImagesResult,
  DescribeWorkspaceSnapshotsRequest,
  DescribeWorkspaceSnapshotsResult,
  DescribeWorkspacesConnectionStatusRequest,
  DescribeWorkspacesConnectionStatusResult,
  DescribeWorkspacesRequest,
  DescribeWorkspacesResult,
  DisassociateIpGroupsRequest,
  DisassociateIpGroupsResult,
  ImportWorkspaceImageRequest,
  ImportWorkspaceImageResult,
  ListAvailableManagementCidrRangesRequest,
  ListAvailableManagementCidrRangesResult,
  ModifyAccountRequest,
  ModifyAccountResult,
  ModifyClientPropertiesRequest,
  ModifyClientPropertiesResult,
  ModifySelfservicePermissionsRequest,
  ModifySelfservicePermissionsResult,
  ModifyWorkspaceAccessPropertiesRequest,
  ModifyWorkspaceAccessPropertiesResult,
  ModifyWorkspaceCreationPropertiesRequest,
  ModifyWorkspaceCreationPropertiesResult,
  ModifyWorkspacePropertiesRequest,
  ModifyWorkspacePropertiesResult,
  ModifyWorkspaceStateRequest,
  ModifyWorkspaceStateResult,
  RebootWorkspacesRequest,
  RebootWorkspacesResult,
  RebuildWorkspacesRequest,
  RebuildWorkspacesResult,
  RegisterWorkspaceDirectoryRequest,
  RegisterWorkspaceDirectoryResult,
  RestoreWorkspaceRequest,
  RestoreWorkspaceResult,
  RevokeIpRulesRequest,
  RevokeIpRulesResult,
  StartWorkspacesRequest,
  StartWorkspacesResult,
  StopWorkspacesRequest,
  StopWorkspacesResult,
  TerminateWorkspacesRequest,
  TerminateWorkspacesResult,
  UpdateRulesOfIpGroupRequest,
  UpdateRulesOfIpGroupResult
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
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | AssociateIpGroupsRequest
  | AuthorizeIpRulesRequest
  | CopyWorkspaceImageRequest
  | CreateIpGroupRequest
  | CreateTagsRequest
  | CreateWorkspacesRequest
  | DeleteIpGroupRequest
  | DeleteTagsRequest
  | DeleteWorkspaceImageRequest
  | DeregisterWorkspaceDirectoryRequest
  | DescribeAccountModificationsRequest
  | DescribeAccountRequest
  | DescribeClientPropertiesRequest
  | DescribeIpGroupsRequest
  | DescribeTagsRequest
  | DescribeWorkspaceBundlesRequest
  | DescribeWorkspaceDirectoriesRequest
  | DescribeWorkspaceImagesRequest
  | DescribeWorkspaceSnapshotsRequest
  | DescribeWorkspacesConnectionStatusRequest
  | DescribeWorkspacesRequest
  | DisassociateIpGroupsRequest
  | ImportWorkspaceImageRequest
  | ListAvailableManagementCidrRangesRequest
  | ModifyAccountRequest
  | ModifyClientPropertiesRequest
  | ModifySelfservicePermissionsRequest
  | ModifyWorkspaceAccessPropertiesRequest
  | ModifyWorkspaceCreationPropertiesRequest
  | ModifyWorkspacePropertiesRequest
  | ModifyWorkspaceStateRequest
  | RebootWorkspacesRequest
  | RebuildWorkspacesRequest
  | RegisterWorkspaceDirectoryRequest
  | RestoreWorkspaceRequest
  | RevokeIpRulesRequest
  | StartWorkspacesRequest
  | StopWorkspacesRequest
  | TerminateWorkspacesRequest
  | UpdateRulesOfIpGroupRequest;

export type ServiceOutputTypes =
  | AssociateIpGroupsResult
  | AuthorizeIpRulesResult
  | CopyWorkspaceImageResult
  | CreateIpGroupResult
  | CreateTagsResult
  | CreateWorkspacesResult
  | DeleteIpGroupResult
  | DeleteTagsResult
  | DeleteWorkspaceImageResult
  | DeregisterWorkspaceDirectoryResult
  | DescribeAccountModificationsResult
  | DescribeAccountResult
  | DescribeClientPropertiesResult
  | DescribeIpGroupsResult
  | DescribeTagsResult
  | DescribeWorkspaceBundlesResult
  | DescribeWorkspaceDirectoriesResult
  | DescribeWorkspaceImagesResult
  | DescribeWorkspaceSnapshotsResult
  | DescribeWorkspacesConnectionStatusResult
  | DescribeWorkspacesResult
  | DisassociateIpGroupsResult
  | ImportWorkspaceImageResult
  | ListAvailableManagementCidrRangesResult
  | ModifyAccountResult
  | ModifyClientPropertiesResult
  | ModifySelfservicePermissionsResult
  | ModifyWorkspaceAccessPropertiesResult
  | ModifyWorkspaceCreationPropertiesResult
  | ModifyWorkspacePropertiesResult
  | ModifyWorkspaceStateResult
  | RebootWorkspacesResult
  | RebuildWorkspacesResult
  | RegisterWorkspaceDirectoryResult
  | RestoreWorkspaceResult
  | RevokeIpRulesResult
  | StartWorkspacesResult
  | StopWorkspacesResult
  | TerminateWorkspacesResult
  | UpdateRulesOfIpGroupResult;

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

export type WorkSpacesClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type WorkSpacesClientResolvedConfig = __SmithyResolvedConfiguration<
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
 *
 *          <fullname>Amazon WorkSpaces Service</fullname>
 *          <p>Amazon WorkSpaces enables you to provision virtual, cloud-based Microsoft Windows and
 *          Amazon Linux desktops for your users.</p>
 *
 */
export class WorkSpacesClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  WorkSpacesClientResolvedConfig
> {
  readonly config: WorkSpacesClientResolvedConfig;

  constructor(configuration: WorkSpacesClientConfig) {
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
