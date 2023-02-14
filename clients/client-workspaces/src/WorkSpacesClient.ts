// smithy-typescript generated code
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@aws-sdk/middleware-endpoint";
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

import {
  AssociateConnectionAliasCommandInput,
  AssociateConnectionAliasCommandOutput,
} from "./commands/AssociateConnectionAliasCommand";
import { AssociateIpGroupsCommandInput, AssociateIpGroupsCommandOutput } from "./commands/AssociateIpGroupsCommand";
import { AuthorizeIpRulesCommandInput, AuthorizeIpRulesCommandOutput } from "./commands/AuthorizeIpRulesCommand";
import { CopyWorkspaceImageCommandInput, CopyWorkspaceImageCommandOutput } from "./commands/CopyWorkspaceImageCommand";
import {
  CreateConnectClientAddInCommandInput,
  CreateConnectClientAddInCommandOutput,
} from "./commands/CreateConnectClientAddInCommand";
import {
  CreateConnectionAliasCommandInput,
  CreateConnectionAliasCommandOutput,
} from "./commands/CreateConnectionAliasCommand";
import { CreateIpGroupCommandInput, CreateIpGroupCommandOutput } from "./commands/CreateIpGroupCommand";
import {
  CreateStandbyWorkspacesCommandInput,
  CreateStandbyWorkspacesCommandOutput,
} from "./commands/CreateStandbyWorkspacesCommand";
import { CreateTagsCommandInput, CreateTagsCommandOutput } from "./commands/CreateTagsCommand";
import {
  CreateUpdatedWorkspaceImageCommandInput,
  CreateUpdatedWorkspaceImageCommandOutput,
} from "./commands/CreateUpdatedWorkspaceImageCommand";
import {
  CreateWorkspaceBundleCommandInput,
  CreateWorkspaceBundleCommandOutput,
} from "./commands/CreateWorkspaceBundleCommand";
import {
  CreateWorkspaceImageCommandInput,
  CreateWorkspaceImageCommandOutput,
} from "./commands/CreateWorkspaceImageCommand";
import { CreateWorkspacesCommandInput, CreateWorkspacesCommandOutput } from "./commands/CreateWorkspacesCommand";
import {
  DeleteClientBrandingCommandInput,
  DeleteClientBrandingCommandOutput,
} from "./commands/DeleteClientBrandingCommand";
import {
  DeleteConnectClientAddInCommandInput,
  DeleteConnectClientAddInCommandOutput,
} from "./commands/DeleteConnectClientAddInCommand";
import {
  DeleteConnectionAliasCommandInput,
  DeleteConnectionAliasCommandOutput,
} from "./commands/DeleteConnectionAliasCommand";
import { DeleteIpGroupCommandInput, DeleteIpGroupCommandOutput } from "./commands/DeleteIpGroupCommand";
import { DeleteTagsCommandInput, DeleteTagsCommandOutput } from "./commands/DeleteTagsCommand";
import {
  DeleteWorkspaceBundleCommandInput,
  DeleteWorkspaceBundleCommandOutput,
} from "./commands/DeleteWorkspaceBundleCommand";
import {
  DeleteWorkspaceImageCommandInput,
  DeleteWorkspaceImageCommandOutput,
} from "./commands/DeleteWorkspaceImageCommand";
import {
  DeregisterWorkspaceDirectoryCommandInput,
  DeregisterWorkspaceDirectoryCommandOutput,
} from "./commands/DeregisterWorkspaceDirectoryCommand";
import { DescribeAccountCommandInput, DescribeAccountCommandOutput } from "./commands/DescribeAccountCommand";
import {
  DescribeAccountModificationsCommandInput,
  DescribeAccountModificationsCommandOutput,
} from "./commands/DescribeAccountModificationsCommand";
import {
  DescribeClientBrandingCommandInput,
  DescribeClientBrandingCommandOutput,
} from "./commands/DescribeClientBrandingCommand";
import {
  DescribeClientPropertiesCommandInput,
  DescribeClientPropertiesCommandOutput,
} from "./commands/DescribeClientPropertiesCommand";
import {
  DescribeConnectClientAddInsCommandInput,
  DescribeConnectClientAddInsCommandOutput,
} from "./commands/DescribeConnectClientAddInsCommand";
import {
  DescribeConnectionAliasesCommandInput,
  DescribeConnectionAliasesCommandOutput,
} from "./commands/DescribeConnectionAliasesCommand";
import {
  DescribeConnectionAliasPermissionsCommandInput,
  DescribeConnectionAliasPermissionsCommandOutput,
} from "./commands/DescribeConnectionAliasPermissionsCommand";
import { DescribeIpGroupsCommandInput, DescribeIpGroupsCommandOutput } from "./commands/DescribeIpGroupsCommand";
import { DescribeTagsCommandInput, DescribeTagsCommandOutput } from "./commands/DescribeTagsCommand";
import {
  DescribeWorkspaceBundlesCommandInput,
  DescribeWorkspaceBundlesCommandOutput,
} from "./commands/DescribeWorkspaceBundlesCommand";
import {
  DescribeWorkspaceDirectoriesCommandInput,
  DescribeWorkspaceDirectoriesCommandOutput,
} from "./commands/DescribeWorkspaceDirectoriesCommand";
import {
  DescribeWorkspaceImagePermissionsCommandInput,
  DescribeWorkspaceImagePermissionsCommandOutput,
} from "./commands/DescribeWorkspaceImagePermissionsCommand";
import {
  DescribeWorkspaceImagesCommandInput,
  DescribeWorkspaceImagesCommandOutput,
} from "./commands/DescribeWorkspaceImagesCommand";
import { DescribeWorkspacesCommandInput, DescribeWorkspacesCommandOutput } from "./commands/DescribeWorkspacesCommand";
import {
  DescribeWorkspacesConnectionStatusCommandInput,
  DescribeWorkspacesConnectionStatusCommandOutput,
} from "./commands/DescribeWorkspacesConnectionStatusCommand";
import {
  DescribeWorkspaceSnapshotsCommandInput,
  DescribeWorkspaceSnapshotsCommandOutput,
} from "./commands/DescribeWorkspaceSnapshotsCommand";
import {
  DisassociateConnectionAliasCommandInput,
  DisassociateConnectionAliasCommandOutput,
} from "./commands/DisassociateConnectionAliasCommand";
import {
  DisassociateIpGroupsCommandInput,
  DisassociateIpGroupsCommandOutput,
} from "./commands/DisassociateIpGroupsCommand";
import {
  ImportClientBrandingCommandInput,
  ImportClientBrandingCommandOutput,
} from "./commands/ImportClientBrandingCommand";
import {
  ImportWorkspaceImageCommandInput,
  ImportWorkspaceImageCommandOutput,
} from "./commands/ImportWorkspaceImageCommand";
import {
  ListAvailableManagementCidrRangesCommandInput,
  ListAvailableManagementCidrRangesCommandOutput,
} from "./commands/ListAvailableManagementCidrRangesCommand";
import { MigrateWorkspaceCommandInput, MigrateWorkspaceCommandOutput } from "./commands/MigrateWorkspaceCommand";
import { ModifyAccountCommandInput, ModifyAccountCommandOutput } from "./commands/ModifyAccountCommand";
import {
  ModifyCertificateBasedAuthPropertiesCommandInput,
  ModifyCertificateBasedAuthPropertiesCommandOutput,
} from "./commands/ModifyCertificateBasedAuthPropertiesCommand";
import {
  ModifyClientPropertiesCommandInput,
  ModifyClientPropertiesCommandOutput,
} from "./commands/ModifyClientPropertiesCommand";
import {
  ModifySamlPropertiesCommandInput,
  ModifySamlPropertiesCommandOutput,
} from "./commands/ModifySamlPropertiesCommand";
import {
  ModifySelfservicePermissionsCommandInput,
  ModifySelfservicePermissionsCommandOutput,
} from "./commands/ModifySelfservicePermissionsCommand";
import {
  ModifyWorkspaceAccessPropertiesCommandInput,
  ModifyWorkspaceAccessPropertiesCommandOutput,
} from "./commands/ModifyWorkspaceAccessPropertiesCommand";
import {
  ModifyWorkspaceCreationPropertiesCommandInput,
  ModifyWorkspaceCreationPropertiesCommandOutput,
} from "./commands/ModifyWorkspaceCreationPropertiesCommand";
import {
  ModifyWorkspacePropertiesCommandInput,
  ModifyWorkspacePropertiesCommandOutput,
} from "./commands/ModifyWorkspacePropertiesCommand";
import {
  ModifyWorkspaceStateCommandInput,
  ModifyWorkspaceStateCommandOutput,
} from "./commands/ModifyWorkspaceStateCommand";
import { RebootWorkspacesCommandInput, RebootWorkspacesCommandOutput } from "./commands/RebootWorkspacesCommand";
import { RebuildWorkspacesCommandInput, RebuildWorkspacesCommandOutput } from "./commands/RebuildWorkspacesCommand";
import {
  RegisterWorkspaceDirectoryCommandInput,
  RegisterWorkspaceDirectoryCommandOutput,
} from "./commands/RegisterWorkspaceDirectoryCommand";
import { RestoreWorkspaceCommandInput, RestoreWorkspaceCommandOutput } from "./commands/RestoreWorkspaceCommand";
import { RevokeIpRulesCommandInput, RevokeIpRulesCommandOutput } from "./commands/RevokeIpRulesCommand";
import { StartWorkspacesCommandInput, StartWorkspacesCommandOutput } from "./commands/StartWorkspacesCommand";
import { StopWorkspacesCommandInput, StopWorkspacesCommandOutput } from "./commands/StopWorkspacesCommand";
import {
  TerminateWorkspacesCommandInput,
  TerminateWorkspacesCommandOutput,
} from "./commands/TerminateWorkspacesCommand";
import {
  UpdateConnectClientAddInCommandInput,
  UpdateConnectClientAddInCommandOutput,
} from "./commands/UpdateConnectClientAddInCommand";
import {
  UpdateConnectionAliasPermissionCommandInput,
  UpdateConnectionAliasPermissionCommandOutput,
} from "./commands/UpdateConnectionAliasPermissionCommand";
import {
  UpdateRulesOfIpGroupCommandInput,
  UpdateRulesOfIpGroupCommandOutput,
} from "./commands/UpdateRulesOfIpGroupCommand";
import {
  UpdateWorkspaceBundleCommandInput,
  UpdateWorkspaceBundleCommandOutput,
} from "./commands/UpdateWorkspaceBundleCommand";
import {
  UpdateWorkspaceImagePermissionCommandInput,
  UpdateWorkspaceImagePermissionCommandOutput,
} from "./commands/UpdateWorkspaceImagePermissionCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | AssociateConnectionAliasCommandInput
  | AssociateIpGroupsCommandInput
  | AuthorizeIpRulesCommandInput
  | CopyWorkspaceImageCommandInput
  | CreateConnectClientAddInCommandInput
  | CreateConnectionAliasCommandInput
  | CreateIpGroupCommandInput
  | CreateStandbyWorkspacesCommandInput
  | CreateTagsCommandInput
  | CreateUpdatedWorkspaceImageCommandInput
  | CreateWorkspaceBundleCommandInput
  | CreateWorkspaceImageCommandInput
  | CreateWorkspacesCommandInput
  | DeleteClientBrandingCommandInput
  | DeleteConnectClientAddInCommandInput
  | DeleteConnectionAliasCommandInput
  | DeleteIpGroupCommandInput
  | DeleteTagsCommandInput
  | DeleteWorkspaceBundleCommandInput
  | DeleteWorkspaceImageCommandInput
  | DeregisterWorkspaceDirectoryCommandInput
  | DescribeAccountCommandInput
  | DescribeAccountModificationsCommandInput
  | DescribeClientBrandingCommandInput
  | DescribeClientPropertiesCommandInput
  | DescribeConnectClientAddInsCommandInput
  | DescribeConnectionAliasPermissionsCommandInput
  | DescribeConnectionAliasesCommandInput
  | DescribeIpGroupsCommandInput
  | DescribeTagsCommandInput
  | DescribeWorkspaceBundlesCommandInput
  | DescribeWorkspaceDirectoriesCommandInput
  | DescribeWorkspaceImagePermissionsCommandInput
  | DescribeWorkspaceImagesCommandInput
  | DescribeWorkspaceSnapshotsCommandInput
  | DescribeWorkspacesCommandInput
  | DescribeWorkspacesConnectionStatusCommandInput
  | DisassociateConnectionAliasCommandInput
  | DisassociateIpGroupsCommandInput
  | ImportClientBrandingCommandInput
  | ImportWorkspaceImageCommandInput
  | ListAvailableManagementCidrRangesCommandInput
  | MigrateWorkspaceCommandInput
  | ModifyAccountCommandInput
  | ModifyCertificateBasedAuthPropertiesCommandInput
  | ModifyClientPropertiesCommandInput
  | ModifySamlPropertiesCommandInput
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
  | UpdateConnectClientAddInCommandInput
  | UpdateConnectionAliasPermissionCommandInput
  | UpdateRulesOfIpGroupCommandInput
  | UpdateWorkspaceBundleCommandInput
  | UpdateWorkspaceImagePermissionCommandInput;

export type ServiceOutputTypes =
  | AssociateConnectionAliasCommandOutput
  | AssociateIpGroupsCommandOutput
  | AuthorizeIpRulesCommandOutput
  | CopyWorkspaceImageCommandOutput
  | CreateConnectClientAddInCommandOutput
  | CreateConnectionAliasCommandOutput
  | CreateIpGroupCommandOutput
  | CreateStandbyWorkspacesCommandOutput
  | CreateTagsCommandOutput
  | CreateUpdatedWorkspaceImageCommandOutput
  | CreateWorkspaceBundleCommandOutput
  | CreateWorkspaceImageCommandOutput
  | CreateWorkspacesCommandOutput
  | DeleteClientBrandingCommandOutput
  | DeleteConnectClientAddInCommandOutput
  | DeleteConnectionAliasCommandOutput
  | DeleteIpGroupCommandOutput
  | DeleteTagsCommandOutput
  | DeleteWorkspaceBundleCommandOutput
  | DeleteWorkspaceImageCommandOutput
  | DeregisterWorkspaceDirectoryCommandOutput
  | DescribeAccountCommandOutput
  | DescribeAccountModificationsCommandOutput
  | DescribeClientBrandingCommandOutput
  | DescribeClientPropertiesCommandOutput
  | DescribeConnectClientAddInsCommandOutput
  | DescribeConnectionAliasPermissionsCommandOutput
  | DescribeConnectionAliasesCommandOutput
  | DescribeIpGroupsCommandOutput
  | DescribeTagsCommandOutput
  | DescribeWorkspaceBundlesCommandOutput
  | DescribeWorkspaceDirectoriesCommandOutput
  | DescribeWorkspaceImagePermissionsCommandOutput
  | DescribeWorkspaceImagesCommandOutput
  | DescribeWorkspaceSnapshotsCommandOutput
  | DescribeWorkspacesCommandOutput
  | DescribeWorkspacesConnectionStatusCommandOutput
  | DisassociateConnectionAliasCommandOutput
  | DisassociateIpGroupsCommandOutput
  | ImportClientBrandingCommandOutput
  | ImportWorkspaceImageCommandOutput
  | ListAvailableManagementCidrRangesCommandOutput
  | MigrateWorkspaceCommandOutput
  | ModifyAccountCommandOutput
  | ModifyCertificateBasedAuthPropertiesCommandOutput
  | ModifyClientPropertiesCommandOutput
  | ModifySamlPropertiesCommandOutput
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
  | UpdateConnectClientAddInCommandOutput
  | UpdateConnectionAliasPermissionCommandOutput
  | UpdateRulesOfIpGroupCommandOutput
  | UpdateWorkspaceBundleCommandOutput
  | UpdateWorkspaceImagePermissionCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Checksum} interface
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
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

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
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The {@link __DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

type WorkSpacesClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of WorkSpacesClient class constructor that set the region, credentials and other options.
 */
export interface WorkSpacesClientConfig extends WorkSpacesClientConfigType {}

type WorkSpacesClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of WorkSpacesClient class. This is resolved and normalized from the {@link WorkSpacesClientConfig | constructor configuration interface}.
 */
export interface WorkSpacesClientResolvedConfig extends WorkSpacesClientResolvedConfigType {}

/**
 * <fullname>Amazon WorkSpaces Service</fullname>
 *          <p>Amazon WorkSpaces enables you to provision virtual, cloud-based Microsoft Windows
 *          or Amazon Linux desktops for your users, known as <i>WorkSpaces</i>.
 *             WorkSpaces eliminates the need to procure and deploy hardware or install complex
 *          software. You can quickly add or remove users as your needs change. Users can access their
 *          virtual desktops from multiple devices or web browsers.</p>
 *          <p>This API Reference provides detailed information about the actions, data types,
 *          parameters, and errors of the WorkSpaces service. For more information about the
 *          supported Amazon Web Services Regions, endpoints, and service quotas of the Amazon WorkSpaces service, see <a href="https://docs.aws.amazon.com/general/latest/gr/wsp.html">WorkSpaces endpoints and quotas</a> in the <i>Amazon Web Services
 *             General Reference</i>.</p>
 *          <p>You can also manage your WorkSpaces resources using the WorkSpaces
 *          console, Command Line Interface (CLI), and SDKs. For more information about
 *          administering WorkSpaces, see the <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/">Amazon WorkSpaces Administration Guide</a>.
 *          For more information about using the Amazon WorkSpaces client application or web
 *          browser to access provisioned WorkSpaces, see the <a href="https://docs.aws.amazon.com/workspaces/latest/userguide/">Amazon WorkSpaces User Guide</a>. For more
 *          information about using the CLI to manage your WorkSpaces resources,
 *          see the <a href="https://docs.aws.amazon.com/cli/latest/reference/workspaces/index.html">WorkSpaces section of the CLI Reference</a>.</p>
 */
export class WorkSpacesClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  WorkSpacesClientResolvedConfig
> {
  /**
   * The resolved configuration of WorkSpacesClient class. This is resolved and normalized from the {@link WorkSpacesClientConfig | constructor configuration interface}.
   */
  readonly config: WorkSpacesClientResolvedConfig;

  constructor(configuration: WorkSpacesClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
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
