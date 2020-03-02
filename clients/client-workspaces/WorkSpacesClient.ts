import {
  AssociateIpGroupsCommandInput,
  AssociateIpGroupsCommandOutput
} from "./commands/AssociateIpGroupsCommand";
import {
  AuthorizeIpRulesCommandInput,
  AuthorizeIpRulesCommandOutput
} from "./commands/AuthorizeIpRulesCommand";
import {
  CopyWorkspaceImageCommandInput,
  CopyWorkspaceImageCommandOutput
} from "./commands/CopyWorkspaceImageCommand";
import {
  CreateIpGroupCommandInput,
  CreateIpGroupCommandOutput
} from "./commands/CreateIpGroupCommand";
import {
  CreateTagsCommandInput,
  CreateTagsCommandOutput
} from "./commands/CreateTagsCommand";
import {
  CreateWorkspacesCommandInput,
  CreateWorkspacesCommandOutput
} from "./commands/CreateWorkspacesCommand";
import {
  DeleteIpGroupCommandInput,
  DeleteIpGroupCommandOutput
} from "./commands/DeleteIpGroupCommand";
import {
  DeleteTagsCommandInput,
  DeleteTagsCommandOutput
} from "./commands/DeleteTagsCommand";
import {
  DeleteWorkspaceImageCommandInput,
  DeleteWorkspaceImageCommandOutput
} from "./commands/DeleteWorkspaceImageCommand";
import {
  DeregisterWorkspaceDirectoryCommandInput,
  DeregisterWorkspaceDirectoryCommandOutput
} from "./commands/DeregisterWorkspaceDirectoryCommand";
import {
  DescribeAccountCommandInput,
  DescribeAccountCommandOutput
} from "./commands/DescribeAccountCommand";
import {
  DescribeAccountModificationsCommandInput,
  DescribeAccountModificationsCommandOutput
} from "./commands/DescribeAccountModificationsCommand";
import {
  DescribeClientPropertiesCommandInput,
  DescribeClientPropertiesCommandOutput
} from "./commands/DescribeClientPropertiesCommand";
import {
  DescribeIpGroupsCommandInput,
  DescribeIpGroupsCommandOutput
} from "./commands/DescribeIpGroupsCommand";
import {
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput
} from "./commands/DescribeTagsCommand";
import {
  DescribeWorkspaceBundlesCommandInput,
  DescribeWorkspaceBundlesCommandOutput
} from "./commands/DescribeWorkspaceBundlesCommand";
import {
  DescribeWorkspaceDirectoriesCommandInput,
  DescribeWorkspaceDirectoriesCommandOutput
} from "./commands/DescribeWorkspaceDirectoriesCommand";
import {
  DescribeWorkspaceImagesCommandInput,
  DescribeWorkspaceImagesCommandOutput
} from "./commands/DescribeWorkspaceImagesCommand";
import {
  DescribeWorkspaceSnapshotsCommandInput,
  DescribeWorkspaceSnapshotsCommandOutput
} from "./commands/DescribeWorkspaceSnapshotsCommand";
import {
  DescribeWorkspacesCommandInput,
  DescribeWorkspacesCommandOutput
} from "./commands/DescribeWorkspacesCommand";
import {
  DescribeWorkspacesConnectionStatusCommandInput,
  DescribeWorkspacesConnectionStatusCommandOutput
} from "./commands/DescribeWorkspacesConnectionStatusCommand";
import {
  DisassociateIpGroupsCommandInput,
  DisassociateIpGroupsCommandOutput
} from "./commands/DisassociateIpGroupsCommand";
import {
  ImportWorkspaceImageCommandInput,
  ImportWorkspaceImageCommandOutput
} from "./commands/ImportWorkspaceImageCommand";
import {
  ListAvailableManagementCidrRangesCommandInput,
  ListAvailableManagementCidrRangesCommandOutput
} from "./commands/ListAvailableManagementCidrRangesCommand";
import {
  MigrateWorkspaceCommandInput,
  MigrateWorkspaceCommandOutput
} from "./commands/MigrateWorkspaceCommand";
import {
  ModifyAccountCommandInput,
  ModifyAccountCommandOutput
} from "./commands/ModifyAccountCommand";
import {
  ModifyClientPropertiesCommandInput,
  ModifyClientPropertiesCommandOutput
} from "./commands/ModifyClientPropertiesCommand";
import {
  ModifySelfservicePermissionsCommandInput,
  ModifySelfservicePermissionsCommandOutput
} from "./commands/ModifySelfservicePermissionsCommand";
import {
  ModifyWorkspaceAccessPropertiesCommandInput,
  ModifyWorkspaceAccessPropertiesCommandOutput
} from "./commands/ModifyWorkspaceAccessPropertiesCommand";
import {
  ModifyWorkspaceCreationPropertiesCommandInput,
  ModifyWorkspaceCreationPropertiesCommandOutput
} from "./commands/ModifyWorkspaceCreationPropertiesCommand";
import {
  ModifyWorkspacePropertiesCommandInput,
  ModifyWorkspacePropertiesCommandOutput
} from "./commands/ModifyWorkspacePropertiesCommand";
import {
  ModifyWorkspaceStateCommandInput,
  ModifyWorkspaceStateCommandOutput
} from "./commands/ModifyWorkspaceStateCommand";
import {
  RebootWorkspacesCommandInput,
  RebootWorkspacesCommandOutput
} from "./commands/RebootWorkspacesCommand";
import {
  RebuildWorkspacesCommandInput,
  RebuildWorkspacesCommandOutput
} from "./commands/RebuildWorkspacesCommand";
import {
  RegisterWorkspaceDirectoryCommandInput,
  RegisterWorkspaceDirectoryCommandOutput
} from "./commands/RegisterWorkspaceDirectoryCommand";
import {
  RestoreWorkspaceCommandInput,
  RestoreWorkspaceCommandOutput
} from "./commands/RestoreWorkspaceCommand";
import {
  RevokeIpRulesCommandInput,
  RevokeIpRulesCommandOutput
} from "./commands/RevokeIpRulesCommand";
import {
  StartWorkspacesCommandInput,
  StartWorkspacesCommandOutput
} from "./commands/StartWorkspacesCommand";
import {
  StopWorkspacesCommandInput,
  StopWorkspacesCommandOutput
} from "./commands/StopWorkspacesCommand";
import {
  TerminateWorkspacesCommandInput,
  TerminateWorkspacesCommandOutput
} from "./commands/TerminateWorkspacesCommand";
import {
  UpdateRulesOfIpGroupCommandInput,
  UpdateRulesOfIpGroupCommandOutput
} from "./commands/UpdateRulesOfIpGroupCommand";
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
  | AssociateIpGroupsCommandInput
  | AuthorizeIpRulesCommandInput
  | CopyWorkspaceImageCommandInput
  | CreateIpGroupCommandInput
  | CreateTagsCommandInput
  | CreateWorkspacesCommandInput
  | DeleteIpGroupCommandInput
  | DeleteTagsCommandInput
  | DeleteWorkspaceImageCommandInput
  | DeregisterWorkspaceDirectoryCommandInput
  | DescribeAccountCommandInput
  | DescribeAccountModificationsCommandInput
  | DescribeClientPropertiesCommandInput
  | DescribeIpGroupsCommandInput
  | DescribeTagsCommandInput
  | DescribeWorkspaceBundlesCommandInput
  | DescribeWorkspaceDirectoriesCommandInput
  | DescribeWorkspaceImagesCommandInput
  | DescribeWorkspaceSnapshotsCommandInput
  | DescribeWorkspacesCommandInput
  | DescribeWorkspacesConnectionStatusCommandInput
  | DisassociateIpGroupsCommandInput
  | ImportWorkspaceImageCommandInput
  | ListAvailableManagementCidrRangesCommandInput
  | MigrateWorkspaceCommandInput
  | ModifyAccountCommandInput
  | ModifyClientPropertiesCommandInput
  | ModifySelfservicePermissionsCommandInput
  | ModifyWorkspaceAccessPropertiesCommandInput
  | ModifyWorkspaceCreationPropertiesCommandInput
  | ModifyWorkspacePropertiesCommandInput
  | ModifyWorkspaceStateCommandInput
  | RebootWorkspacesCommandInput
  | RebuildWorkspacesCommandInput
  | RegisterWorkspaceDirectoryCommandInput
  | RestoreWorkspaceCommandInput
  | RevokeIpRulesCommandInput
  | StartWorkspacesCommandInput
  | StopWorkspacesCommandInput
  | TerminateWorkspacesCommandInput
  | UpdateRulesOfIpGroupCommandInput;

export type ServiceOutputTypes =
  | AssociateIpGroupsCommandOutput
  | AuthorizeIpRulesCommandOutput
  | CopyWorkspaceImageCommandOutput
  | CreateIpGroupCommandOutput
  | CreateTagsCommandOutput
  | CreateWorkspacesCommandOutput
  | DeleteIpGroupCommandOutput
  | DeleteTagsCommandOutput
  | DeleteWorkspaceImageCommandOutput
  | DeregisterWorkspaceDirectoryCommandOutput
  | DescribeAccountCommandOutput
  | DescribeAccountModificationsCommandOutput
  | DescribeClientPropertiesCommandOutput
  | DescribeIpGroupsCommandOutput
  | DescribeTagsCommandOutput
  | DescribeWorkspaceBundlesCommandOutput
  | DescribeWorkspaceDirectoriesCommandOutput
  | DescribeWorkspaceImagesCommandOutput
  | DescribeWorkspaceSnapshotsCommandOutput
  | DescribeWorkspacesCommandOutput
  | DescribeWorkspacesConnectionStatusCommandOutput
  | DisassociateIpGroupsCommandOutput
  | ImportWorkspaceImageCommandOutput
  | ListAvailableManagementCidrRangesCommandOutput
  | MigrateWorkspaceCommandOutput
  | ModifyAccountCommandOutput
  | ModifyClientPropertiesCommandOutput
  | ModifySelfservicePermissionsCommandOutput
  | ModifyWorkspaceAccessPropertiesCommandOutput
  | ModifyWorkspaceCreationPropertiesCommandOutput
  | ModifyWorkspacePropertiesCommandOutput
  | ModifyWorkspaceStateCommandOutput
  | RebootWorkspacesCommandOutput
  | RebuildWorkspacesCommandOutput
  | RegisterWorkspaceDirectoryCommandOutput
  | RestoreWorkspaceCommandOutput
  | RevokeIpRulesCommandOutput
  | StartWorkspacesCommandOutput
  | StopWorkspacesCommandOutput
  | TerminateWorkspacesCommandOutput
  | UpdateRulesOfIpGroupCommandOutput;

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
 * <fullname>Amazon WorkSpaces Service</fullname>
 *          <p>Amazon WorkSpaces enables you to provision virtual, cloud-based Microsoft Windows and
 *          Amazon Linux desktops for your users.</p>
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
