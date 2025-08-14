// smithy-typescript generated code
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultWorkSpacesHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AcceptAccountLinkInvitationCommandInput,
  AcceptAccountLinkInvitationCommandOutput,
} from "./commands/AcceptAccountLinkInvitationCommand";
import {
  AssociateConnectionAliasCommandInput,
  AssociateConnectionAliasCommandOutput,
} from "./commands/AssociateConnectionAliasCommand";
import { AssociateIpGroupsCommandInput, AssociateIpGroupsCommandOutput } from "./commands/AssociateIpGroupsCommand";
import {
  AssociateWorkspaceApplicationCommandInput,
  AssociateWorkspaceApplicationCommandOutput,
} from "./commands/AssociateWorkspaceApplicationCommand";
import { AuthorizeIpRulesCommandInput, AuthorizeIpRulesCommandOutput } from "./commands/AuthorizeIpRulesCommand";
import { CopyWorkspaceImageCommandInput, CopyWorkspaceImageCommandOutput } from "./commands/CopyWorkspaceImageCommand";
import {
  CreateAccountLinkInvitationCommandInput,
  CreateAccountLinkInvitationCommandOutput,
} from "./commands/CreateAccountLinkInvitationCommand";
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
  CreateWorkspacesPoolCommandInput,
  CreateWorkspacesPoolCommandOutput,
} from "./commands/CreateWorkspacesPoolCommand";
import {
  DeleteAccountLinkInvitationCommandInput,
  DeleteAccountLinkInvitationCommandOutput,
} from "./commands/DeleteAccountLinkInvitationCommand";
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
  DeployWorkspaceApplicationsCommandInput,
  DeployWorkspaceApplicationsCommandOutput,
} from "./commands/DeployWorkspaceApplicationsCommand";
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
  DescribeApplicationAssociationsCommandInput,
  DescribeApplicationAssociationsCommandOutput,
} from "./commands/DescribeApplicationAssociationsCommand";
import {
  DescribeApplicationsCommandInput,
  DescribeApplicationsCommandOutput,
} from "./commands/DescribeApplicationsCommand";
import {
  DescribeBundleAssociationsCommandInput,
  DescribeBundleAssociationsCommandOutput,
} from "./commands/DescribeBundleAssociationsCommand";
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
import {
  DescribeCustomWorkspaceImageImportCommandInput,
  DescribeCustomWorkspaceImageImportCommandOutput,
} from "./commands/DescribeCustomWorkspaceImageImportCommand";
import {
  DescribeImageAssociationsCommandInput,
  DescribeImageAssociationsCommandOutput,
} from "./commands/DescribeImageAssociationsCommand";
import { DescribeIpGroupsCommandInput, DescribeIpGroupsCommandOutput } from "./commands/DescribeIpGroupsCommand";
import { DescribeTagsCommandInput, DescribeTagsCommandOutput } from "./commands/DescribeTagsCommand";
import {
  DescribeWorkspaceAssociationsCommandInput,
  DescribeWorkspaceAssociationsCommandOutput,
} from "./commands/DescribeWorkspaceAssociationsCommand";
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
  DescribeWorkspacesPoolsCommandInput,
  DescribeWorkspacesPoolsCommandOutput,
} from "./commands/DescribeWorkspacesPoolsCommand";
import {
  DescribeWorkspacesPoolSessionsCommandInput,
  DescribeWorkspacesPoolSessionsCommandOutput,
} from "./commands/DescribeWorkspacesPoolSessionsCommand";
import {
  DisassociateConnectionAliasCommandInput,
  DisassociateConnectionAliasCommandOutput,
} from "./commands/DisassociateConnectionAliasCommand";
import {
  DisassociateIpGroupsCommandInput,
  DisassociateIpGroupsCommandOutput,
} from "./commands/DisassociateIpGroupsCommand";
import {
  DisassociateWorkspaceApplicationCommandInput,
  DisassociateWorkspaceApplicationCommandOutput,
} from "./commands/DisassociateWorkspaceApplicationCommand";
import { GetAccountLinkCommandInput, GetAccountLinkCommandOutput } from "./commands/GetAccountLinkCommand";
import {
  ImportClientBrandingCommandInput,
  ImportClientBrandingCommandOutput,
} from "./commands/ImportClientBrandingCommand";
import {
  ImportCustomWorkspaceImageCommandInput,
  ImportCustomWorkspaceImageCommandOutput,
} from "./commands/ImportCustomWorkspaceImageCommand";
import {
  ImportWorkspaceImageCommandInput,
  ImportWorkspaceImageCommandOutput,
} from "./commands/ImportWorkspaceImageCommand";
import { ListAccountLinksCommandInput, ListAccountLinksCommandOutput } from "./commands/ListAccountLinksCommand";
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
  ModifyEndpointEncryptionModeCommandInput,
  ModifyEndpointEncryptionModeCommandOutput,
} from "./commands/ModifyEndpointEncryptionModeCommand";
import {
  ModifySamlPropertiesCommandInput,
  ModifySamlPropertiesCommandOutput,
} from "./commands/ModifySamlPropertiesCommand";
import {
  ModifySelfservicePermissionsCommandInput,
  ModifySelfservicePermissionsCommandOutput,
} from "./commands/ModifySelfservicePermissionsCommand";
import {
  ModifyStreamingPropertiesCommandInput,
  ModifyStreamingPropertiesCommandOutput,
} from "./commands/ModifyStreamingPropertiesCommand";
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
import {
  RejectAccountLinkInvitationCommandInput,
  RejectAccountLinkInvitationCommandOutput,
} from "./commands/RejectAccountLinkInvitationCommand";
import { RestoreWorkspaceCommandInput, RestoreWorkspaceCommandOutput } from "./commands/RestoreWorkspaceCommand";
import { RevokeIpRulesCommandInput, RevokeIpRulesCommandOutput } from "./commands/RevokeIpRulesCommand";
import { StartWorkspacesCommandInput, StartWorkspacesCommandOutput } from "./commands/StartWorkspacesCommand";
import {
  StartWorkspacesPoolCommandInput,
  StartWorkspacesPoolCommandOutput,
} from "./commands/StartWorkspacesPoolCommand";
import { StopWorkspacesCommandInput, StopWorkspacesCommandOutput } from "./commands/StopWorkspacesCommand";
import { StopWorkspacesPoolCommandInput, StopWorkspacesPoolCommandOutput } from "./commands/StopWorkspacesPoolCommand";
import {
  TerminateWorkspacesCommandInput,
  TerminateWorkspacesCommandOutput,
} from "./commands/TerminateWorkspacesCommand";
import {
  TerminateWorkspacesPoolCommandInput,
  TerminateWorkspacesPoolCommandOutput,
} from "./commands/TerminateWorkspacesPoolCommand";
import {
  TerminateWorkspacesPoolSessionCommandInput,
  TerminateWorkspacesPoolSessionCommandOutput,
} from "./commands/TerminateWorkspacesPoolSessionCommand";
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
  UpdateWorkspacesPoolCommandInput,
  UpdateWorkspacesPoolCommandOutput,
} from "./commands/UpdateWorkspacesPoolCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AcceptAccountLinkInvitationCommandInput
  | AssociateConnectionAliasCommandInput
  | AssociateIpGroupsCommandInput
  | AssociateWorkspaceApplicationCommandInput
  | AuthorizeIpRulesCommandInput
  | CopyWorkspaceImageCommandInput
  | CreateAccountLinkInvitationCommandInput
  | CreateConnectClientAddInCommandInput
  | CreateConnectionAliasCommandInput
  | CreateIpGroupCommandInput
  | CreateStandbyWorkspacesCommandInput
  | CreateTagsCommandInput
  | CreateUpdatedWorkspaceImageCommandInput
  | CreateWorkspaceBundleCommandInput
  | CreateWorkspaceImageCommandInput
  | CreateWorkspacesCommandInput
  | CreateWorkspacesPoolCommandInput
  | DeleteAccountLinkInvitationCommandInput
  | DeleteClientBrandingCommandInput
  | DeleteConnectClientAddInCommandInput
  | DeleteConnectionAliasCommandInput
  | DeleteIpGroupCommandInput
  | DeleteTagsCommandInput
  | DeleteWorkspaceBundleCommandInput
  | DeleteWorkspaceImageCommandInput
  | DeployWorkspaceApplicationsCommandInput
  | DeregisterWorkspaceDirectoryCommandInput
  | DescribeAccountCommandInput
  | DescribeAccountModificationsCommandInput
  | DescribeApplicationAssociationsCommandInput
  | DescribeApplicationsCommandInput
  | DescribeBundleAssociationsCommandInput
  | DescribeClientBrandingCommandInput
  | DescribeClientPropertiesCommandInput
  | DescribeConnectClientAddInsCommandInput
  | DescribeConnectionAliasPermissionsCommandInput
  | DescribeConnectionAliasesCommandInput
  | DescribeCustomWorkspaceImageImportCommandInput
  | DescribeImageAssociationsCommandInput
  | DescribeIpGroupsCommandInput
  | DescribeTagsCommandInput
  | DescribeWorkspaceAssociationsCommandInput
  | DescribeWorkspaceBundlesCommandInput
  | DescribeWorkspaceDirectoriesCommandInput
  | DescribeWorkspaceImagePermissionsCommandInput
  | DescribeWorkspaceImagesCommandInput
  | DescribeWorkspaceSnapshotsCommandInput
  | DescribeWorkspacesCommandInput
  | DescribeWorkspacesConnectionStatusCommandInput
  | DescribeWorkspacesPoolSessionsCommandInput
  | DescribeWorkspacesPoolsCommandInput
  | DisassociateConnectionAliasCommandInput
  | DisassociateIpGroupsCommandInput
  | DisassociateWorkspaceApplicationCommandInput
  | GetAccountLinkCommandInput
  | ImportClientBrandingCommandInput
  | ImportCustomWorkspaceImageCommandInput
  | ImportWorkspaceImageCommandInput
  | ListAccountLinksCommandInput
  | ListAvailableManagementCidrRangesCommandInput
  | MigrateWorkspaceCommandInput
  | ModifyAccountCommandInput
  | ModifyCertificateBasedAuthPropertiesCommandInput
  | ModifyClientPropertiesCommandInput
  | ModifyEndpointEncryptionModeCommandInput
  | ModifySamlPropertiesCommandInput
  | ModifySelfservicePermissionsCommandInput
  | ModifyStreamingPropertiesCommandInput
  | ModifyWorkspaceAccessPropertiesCommandInput
  | ModifyWorkspaceCreationPropertiesCommandInput
  | ModifyWorkspacePropertiesCommandInput
  | ModifyWorkspaceStateCommandInput
  | RebootWorkspacesCommandInput
  | RebuildWorkspacesCommandInput
  | RegisterWorkspaceDirectoryCommandInput
  | RejectAccountLinkInvitationCommandInput
  | RestoreWorkspaceCommandInput
  | RevokeIpRulesCommandInput
  | StartWorkspacesCommandInput
  | StartWorkspacesPoolCommandInput
  | StopWorkspacesCommandInput
  | StopWorkspacesPoolCommandInput
  | TerminateWorkspacesCommandInput
  | TerminateWorkspacesPoolCommandInput
  | TerminateWorkspacesPoolSessionCommandInput
  | UpdateConnectClientAddInCommandInput
  | UpdateConnectionAliasPermissionCommandInput
  | UpdateRulesOfIpGroupCommandInput
  | UpdateWorkspaceBundleCommandInput
  | UpdateWorkspaceImagePermissionCommandInput
  | UpdateWorkspacesPoolCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AcceptAccountLinkInvitationCommandOutput
  | AssociateConnectionAliasCommandOutput
  | AssociateIpGroupsCommandOutput
  | AssociateWorkspaceApplicationCommandOutput
  | AuthorizeIpRulesCommandOutput
  | CopyWorkspaceImageCommandOutput
  | CreateAccountLinkInvitationCommandOutput
  | CreateConnectClientAddInCommandOutput
  | CreateConnectionAliasCommandOutput
  | CreateIpGroupCommandOutput
  | CreateStandbyWorkspacesCommandOutput
  | CreateTagsCommandOutput
  | CreateUpdatedWorkspaceImageCommandOutput
  | CreateWorkspaceBundleCommandOutput
  | CreateWorkspaceImageCommandOutput
  | CreateWorkspacesCommandOutput
  | CreateWorkspacesPoolCommandOutput
  | DeleteAccountLinkInvitationCommandOutput
  | DeleteClientBrandingCommandOutput
  | DeleteConnectClientAddInCommandOutput
  | DeleteConnectionAliasCommandOutput
  | DeleteIpGroupCommandOutput
  | DeleteTagsCommandOutput
  | DeleteWorkspaceBundleCommandOutput
  | DeleteWorkspaceImageCommandOutput
  | DeployWorkspaceApplicationsCommandOutput
  | DeregisterWorkspaceDirectoryCommandOutput
  | DescribeAccountCommandOutput
  | DescribeAccountModificationsCommandOutput
  | DescribeApplicationAssociationsCommandOutput
  | DescribeApplicationsCommandOutput
  | DescribeBundleAssociationsCommandOutput
  | DescribeClientBrandingCommandOutput
  | DescribeClientPropertiesCommandOutput
  | DescribeConnectClientAddInsCommandOutput
  | DescribeConnectionAliasPermissionsCommandOutput
  | DescribeConnectionAliasesCommandOutput
  | DescribeCustomWorkspaceImageImportCommandOutput
  | DescribeImageAssociationsCommandOutput
  | DescribeIpGroupsCommandOutput
  | DescribeTagsCommandOutput
  | DescribeWorkspaceAssociationsCommandOutput
  | DescribeWorkspaceBundlesCommandOutput
  | DescribeWorkspaceDirectoriesCommandOutput
  | DescribeWorkspaceImagePermissionsCommandOutput
  | DescribeWorkspaceImagesCommandOutput
  | DescribeWorkspaceSnapshotsCommandOutput
  | DescribeWorkspacesCommandOutput
  | DescribeWorkspacesConnectionStatusCommandOutput
  | DescribeWorkspacesPoolSessionsCommandOutput
  | DescribeWorkspacesPoolsCommandOutput
  | DisassociateConnectionAliasCommandOutput
  | DisassociateIpGroupsCommandOutput
  | DisassociateWorkspaceApplicationCommandOutput
  | GetAccountLinkCommandOutput
  | ImportClientBrandingCommandOutput
  | ImportCustomWorkspaceImageCommandOutput
  | ImportWorkspaceImageCommandOutput
  | ListAccountLinksCommandOutput
  | ListAvailableManagementCidrRangesCommandOutput
  | MigrateWorkspaceCommandOutput
  | ModifyAccountCommandOutput
  | ModifyCertificateBasedAuthPropertiesCommandOutput
  | ModifyClientPropertiesCommandOutput
  | ModifyEndpointEncryptionModeCommandOutput
  | ModifySamlPropertiesCommandOutput
  | ModifySelfservicePermissionsCommandOutput
  | ModifyStreamingPropertiesCommandOutput
  | ModifyWorkspaceAccessPropertiesCommandOutput
  | ModifyWorkspaceCreationPropertiesCommandOutput
  | ModifyWorkspacePropertiesCommandOutput
  | ModifyWorkspaceStateCommandOutput
  | RebootWorkspacesCommandOutput
  | RebuildWorkspacesCommandOutput
  | RegisterWorkspaceDirectoryCommandOutput
  | RejectAccountLinkInvitationCommandOutput
  | RestoreWorkspaceCommandOutput
  | RevokeIpRulesCommandOutput
  | StartWorkspacesCommandOutput
  | StartWorkspacesPoolCommandOutput
  | StopWorkspacesCommandOutput
  | StopWorkspacesPoolCommandOutput
  | TerminateWorkspacesCommandOutput
  | TerminateWorkspacesPoolCommandOutput
  | TerminateWorkspacesPoolSessionCommandOutput
  | UpdateConnectClientAddInCommandOutput
  | UpdateConnectionAliasPermissionCommandOutput
  | UpdateRulesOfIpGroupCommandOutput
  | UpdateWorkspaceBundleCommandOutput
  | UpdateWorkspaceImagePermissionCommandOutput
  | UpdateWorkspacesPoolCommandOutput;

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
  defaultUserAgentProvider?: Provider<__UserAgent>;

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
export type WorkSpacesClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of WorkSpacesClient class constructor that set the region, credentials and other options.
 */
export interface WorkSpacesClientConfig extends WorkSpacesClientConfigType {}

/**
 * @public
 */
export type WorkSpacesClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of WorkSpacesClient class. This is resolved and normalized from the {@link WorkSpacesClientConfig | constructor configuration interface}.
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
 * @public
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

  constructor(...[configuration]: __CheckOptionalClientConfig<WorkSpacesClientConfig>) {
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
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultWorkSpacesHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: WorkSpacesClientResolvedConfig) =>
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
