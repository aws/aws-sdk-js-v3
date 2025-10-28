// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  AcceptAccountLinkInvitationCommandInput,
  AcceptAccountLinkInvitationCommandOutput,
} from "../commands/AcceptAccountLinkInvitationCommand";
import {
  AssociateConnectionAliasCommandInput,
  AssociateConnectionAliasCommandOutput,
} from "../commands/AssociateConnectionAliasCommand";
import { AssociateIpGroupsCommandInput, AssociateIpGroupsCommandOutput } from "../commands/AssociateIpGroupsCommand";
import {
  AssociateWorkspaceApplicationCommandInput,
  AssociateWorkspaceApplicationCommandOutput,
} from "../commands/AssociateWorkspaceApplicationCommand";
import { AuthorizeIpRulesCommandInput, AuthorizeIpRulesCommandOutput } from "../commands/AuthorizeIpRulesCommand";
import { CopyWorkspaceImageCommandInput, CopyWorkspaceImageCommandOutput } from "../commands/CopyWorkspaceImageCommand";
import {
  CreateAccountLinkInvitationCommandInput,
  CreateAccountLinkInvitationCommandOutput,
} from "../commands/CreateAccountLinkInvitationCommand";
import {
  CreateConnectClientAddInCommandInput,
  CreateConnectClientAddInCommandOutput,
} from "../commands/CreateConnectClientAddInCommand";
import {
  CreateConnectionAliasCommandInput,
  CreateConnectionAliasCommandOutput,
} from "../commands/CreateConnectionAliasCommand";
import { CreateIpGroupCommandInput, CreateIpGroupCommandOutput } from "../commands/CreateIpGroupCommand";
import {
  CreateStandbyWorkspacesCommandInput,
  CreateStandbyWorkspacesCommandOutput,
} from "../commands/CreateStandbyWorkspacesCommand";
import { CreateTagsCommandInput, CreateTagsCommandOutput } from "../commands/CreateTagsCommand";
import {
  CreateUpdatedWorkspaceImageCommandInput,
  CreateUpdatedWorkspaceImageCommandOutput,
} from "../commands/CreateUpdatedWorkspaceImageCommand";
import {
  CreateWorkspaceBundleCommandInput,
  CreateWorkspaceBundleCommandOutput,
} from "../commands/CreateWorkspaceBundleCommand";
import {
  CreateWorkspaceImageCommandInput,
  CreateWorkspaceImageCommandOutput,
} from "../commands/CreateWorkspaceImageCommand";
import { CreateWorkspacesCommandInput, CreateWorkspacesCommandOutput } from "../commands/CreateWorkspacesCommand";
import {
  CreateWorkspacesPoolCommandInput,
  CreateWorkspacesPoolCommandOutput,
} from "../commands/CreateWorkspacesPoolCommand";
import {
  DeleteAccountLinkInvitationCommandInput,
  DeleteAccountLinkInvitationCommandOutput,
} from "../commands/DeleteAccountLinkInvitationCommand";
import {
  DeleteClientBrandingCommandInput,
  DeleteClientBrandingCommandOutput,
} from "../commands/DeleteClientBrandingCommand";
import {
  DeleteConnectClientAddInCommandInput,
  DeleteConnectClientAddInCommandOutput,
} from "../commands/DeleteConnectClientAddInCommand";
import {
  DeleteConnectionAliasCommandInput,
  DeleteConnectionAliasCommandOutput,
} from "../commands/DeleteConnectionAliasCommand";
import { DeleteIpGroupCommandInput, DeleteIpGroupCommandOutput } from "../commands/DeleteIpGroupCommand";
import { DeleteTagsCommandInput, DeleteTagsCommandOutput } from "../commands/DeleteTagsCommand";
import {
  DeleteWorkspaceBundleCommandInput,
  DeleteWorkspaceBundleCommandOutput,
} from "../commands/DeleteWorkspaceBundleCommand";
import {
  DeleteWorkspaceImageCommandInput,
  DeleteWorkspaceImageCommandOutput,
} from "../commands/DeleteWorkspaceImageCommand";
import {
  DeployWorkspaceApplicationsCommandInput,
  DeployWorkspaceApplicationsCommandOutput,
} from "../commands/DeployWorkspaceApplicationsCommand";
import {
  DeregisterWorkspaceDirectoryCommandInput,
  DeregisterWorkspaceDirectoryCommandOutput,
} from "../commands/DeregisterWorkspaceDirectoryCommand";
import { DescribeAccountCommandInput, DescribeAccountCommandOutput } from "../commands/DescribeAccountCommand";
import {
  DescribeAccountModificationsCommandInput,
  DescribeAccountModificationsCommandOutput,
} from "../commands/DescribeAccountModificationsCommand";
import {
  DescribeApplicationAssociationsCommandInput,
  DescribeApplicationAssociationsCommandOutput,
} from "../commands/DescribeApplicationAssociationsCommand";
import {
  DescribeApplicationsCommandInput,
  DescribeApplicationsCommandOutput,
} from "../commands/DescribeApplicationsCommand";
import {
  DescribeBundleAssociationsCommandInput,
  DescribeBundleAssociationsCommandOutput,
} from "../commands/DescribeBundleAssociationsCommand";
import {
  DescribeClientBrandingCommandInput,
  DescribeClientBrandingCommandOutput,
} from "../commands/DescribeClientBrandingCommand";
import {
  DescribeClientPropertiesCommandInput,
  DescribeClientPropertiesCommandOutput,
} from "../commands/DescribeClientPropertiesCommand";
import {
  DescribeConnectClientAddInsCommandInput,
  DescribeConnectClientAddInsCommandOutput,
} from "../commands/DescribeConnectClientAddInsCommand";
import {
  DescribeConnectionAliasesCommandInput,
  DescribeConnectionAliasesCommandOutput,
} from "../commands/DescribeConnectionAliasesCommand";
import {
  DescribeConnectionAliasPermissionsCommandInput,
  DescribeConnectionAliasPermissionsCommandOutput,
} from "../commands/DescribeConnectionAliasPermissionsCommand";
import {
  DescribeCustomWorkspaceImageImportCommandInput,
  DescribeCustomWorkspaceImageImportCommandOutput,
} from "../commands/DescribeCustomWorkspaceImageImportCommand";
import {
  DescribeImageAssociationsCommandInput,
  DescribeImageAssociationsCommandOutput,
} from "../commands/DescribeImageAssociationsCommand";
import { DescribeIpGroupsCommandInput, DescribeIpGroupsCommandOutput } from "../commands/DescribeIpGroupsCommand";
import { DescribeTagsCommandInput, DescribeTagsCommandOutput } from "../commands/DescribeTagsCommand";
import {
  DescribeWorkspaceAssociationsCommandInput,
  DescribeWorkspaceAssociationsCommandOutput,
} from "../commands/DescribeWorkspaceAssociationsCommand";
import {
  DescribeWorkspaceBundlesCommandInput,
  DescribeWorkspaceBundlesCommandOutput,
} from "../commands/DescribeWorkspaceBundlesCommand";
import {
  DescribeWorkspaceDirectoriesCommandInput,
  DescribeWorkspaceDirectoriesCommandOutput,
} from "../commands/DescribeWorkspaceDirectoriesCommand";
import {
  DescribeWorkspaceImagePermissionsCommandInput,
  DescribeWorkspaceImagePermissionsCommandOutput,
} from "../commands/DescribeWorkspaceImagePermissionsCommand";
import {
  DescribeWorkspaceImagesCommandInput,
  DescribeWorkspaceImagesCommandOutput,
} from "../commands/DescribeWorkspaceImagesCommand";
import { DescribeWorkspacesCommandInput, DescribeWorkspacesCommandOutput } from "../commands/DescribeWorkspacesCommand";
import {
  DescribeWorkspacesConnectionStatusCommandInput,
  DescribeWorkspacesConnectionStatusCommandOutput,
} from "../commands/DescribeWorkspacesConnectionStatusCommand";
import {
  DescribeWorkspaceSnapshotsCommandInput,
  DescribeWorkspaceSnapshotsCommandOutput,
} from "../commands/DescribeWorkspaceSnapshotsCommand";
import {
  DescribeWorkspacesPoolsCommandInput,
  DescribeWorkspacesPoolsCommandOutput,
} from "../commands/DescribeWorkspacesPoolsCommand";
import {
  DescribeWorkspacesPoolSessionsCommandInput,
  DescribeWorkspacesPoolSessionsCommandOutput,
} from "../commands/DescribeWorkspacesPoolSessionsCommand";
import {
  DisassociateConnectionAliasCommandInput,
  DisassociateConnectionAliasCommandOutput,
} from "../commands/DisassociateConnectionAliasCommand";
import {
  DisassociateIpGroupsCommandInput,
  DisassociateIpGroupsCommandOutput,
} from "../commands/DisassociateIpGroupsCommand";
import {
  DisassociateWorkspaceApplicationCommandInput,
  DisassociateWorkspaceApplicationCommandOutput,
} from "../commands/DisassociateWorkspaceApplicationCommand";
import { GetAccountLinkCommandInput, GetAccountLinkCommandOutput } from "../commands/GetAccountLinkCommand";
import {
  ImportClientBrandingCommandInput,
  ImportClientBrandingCommandOutput,
} from "../commands/ImportClientBrandingCommand";
import {
  ImportCustomWorkspaceImageCommandInput,
  ImportCustomWorkspaceImageCommandOutput,
} from "../commands/ImportCustomWorkspaceImageCommand";
import {
  ImportWorkspaceImageCommandInput,
  ImportWorkspaceImageCommandOutput,
} from "../commands/ImportWorkspaceImageCommand";
import { ListAccountLinksCommandInput, ListAccountLinksCommandOutput } from "../commands/ListAccountLinksCommand";
import {
  ListAvailableManagementCidrRangesCommandInput,
  ListAvailableManagementCidrRangesCommandOutput,
} from "../commands/ListAvailableManagementCidrRangesCommand";
import { MigrateWorkspaceCommandInput, MigrateWorkspaceCommandOutput } from "../commands/MigrateWorkspaceCommand";
import { ModifyAccountCommandInput, ModifyAccountCommandOutput } from "../commands/ModifyAccountCommand";
import {
  ModifyCertificateBasedAuthPropertiesCommandInput,
  ModifyCertificateBasedAuthPropertiesCommandOutput,
} from "../commands/ModifyCertificateBasedAuthPropertiesCommand";
import {
  ModifyClientPropertiesCommandInput,
  ModifyClientPropertiesCommandOutput,
} from "../commands/ModifyClientPropertiesCommand";
import {
  ModifyEndpointEncryptionModeCommandInput,
  ModifyEndpointEncryptionModeCommandOutput,
} from "../commands/ModifyEndpointEncryptionModeCommand";
import {
  ModifySamlPropertiesCommandInput,
  ModifySamlPropertiesCommandOutput,
} from "../commands/ModifySamlPropertiesCommand";
import {
  ModifySelfservicePermissionsCommandInput,
  ModifySelfservicePermissionsCommandOutput,
} from "../commands/ModifySelfservicePermissionsCommand";
import {
  ModifyStreamingPropertiesCommandInput,
  ModifyStreamingPropertiesCommandOutput,
} from "../commands/ModifyStreamingPropertiesCommand";
import {
  ModifyWorkspaceAccessPropertiesCommandInput,
  ModifyWorkspaceAccessPropertiesCommandOutput,
} from "../commands/ModifyWorkspaceAccessPropertiesCommand";
import {
  ModifyWorkspaceCreationPropertiesCommandInput,
  ModifyWorkspaceCreationPropertiesCommandOutput,
} from "../commands/ModifyWorkspaceCreationPropertiesCommand";
import {
  ModifyWorkspacePropertiesCommandInput,
  ModifyWorkspacePropertiesCommandOutput,
} from "../commands/ModifyWorkspacePropertiesCommand";
import {
  ModifyWorkspaceStateCommandInput,
  ModifyWorkspaceStateCommandOutput,
} from "../commands/ModifyWorkspaceStateCommand";
import { RebootWorkspacesCommandInput, RebootWorkspacesCommandOutput } from "../commands/RebootWorkspacesCommand";
import { RebuildWorkspacesCommandInput, RebuildWorkspacesCommandOutput } from "../commands/RebuildWorkspacesCommand";
import {
  RegisterWorkspaceDirectoryCommandInput,
  RegisterWorkspaceDirectoryCommandOutput,
} from "../commands/RegisterWorkspaceDirectoryCommand";
import {
  RejectAccountLinkInvitationCommandInput,
  RejectAccountLinkInvitationCommandOutput,
} from "../commands/RejectAccountLinkInvitationCommand";
import { RestoreWorkspaceCommandInput, RestoreWorkspaceCommandOutput } from "../commands/RestoreWorkspaceCommand";
import { RevokeIpRulesCommandInput, RevokeIpRulesCommandOutput } from "../commands/RevokeIpRulesCommand";
import { StartWorkspacesCommandInput, StartWorkspacesCommandOutput } from "../commands/StartWorkspacesCommand";
import {
  StartWorkspacesPoolCommandInput,
  StartWorkspacesPoolCommandOutput,
} from "../commands/StartWorkspacesPoolCommand";
import { StopWorkspacesCommandInput, StopWorkspacesCommandOutput } from "../commands/StopWorkspacesCommand";
import { StopWorkspacesPoolCommandInput, StopWorkspacesPoolCommandOutput } from "../commands/StopWorkspacesPoolCommand";
import {
  TerminateWorkspacesCommandInput,
  TerminateWorkspacesCommandOutput,
} from "../commands/TerminateWorkspacesCommand";
import {
  TerminateWorkspacesPoolCommandInput,
  TerminateWorkspacesPoolCommandOutput,
} from "../commands/TerminateWorkspacesPoolCommand";
import {
  TerminateWorkspacesPoolSessionCommandInput,
  TerminateWorkspacesPoolSessionCommandOutput,
} from "../commands/TerminateWorkspacesPoolSessionCommand";
import {
  UpdateConnectClientAddInCommandInput,
  UpdateConnectClientAddInCommandOutput,
} from "../commands/UpdateConnectClientAddInCommand";
import {
  UpdateConnectionAliasPermissionCommandInput,
  UpdateConnectionAliasPermissionCommandOutput,
} from "../commands/UpdateConnectionAliasPermissionCommand";
import {
  UpdateRulesOfIpGroupCommandInput,
  UpdateRulesOfIpGroupCommandOutput,
} from "../commands/UpdateRulesOfIpGroupCommand";
import {
  UpdateWorkspaceBundleCommandInput,
  UpdateWorkspaceBundleCommandOutput,
} from "../commands/UpdateWorkspaceBundleCommand";
import {
  UpdateWorkspaceImagePermissionCommandInput,
  UpdateWorkspaceImagePermissionCommandOutput,
} from "../commands/UpdateWorkspaceImagePermissionCommand";
import {
  UpdateWorkspacesPoolCommandInput,
  UpdateWorkspacesPoolCommandOutput,
} from "../commands/UpdateWorkspacesPoolCommand";
import {
  AcceptAccountLinkInvitationRequest,
  AccessDeniedException,
  AccessEndpoint,
  AccessEndpointConfig,
  AccountLinkStatusEnum,
  AccountModification,
  ActiveDirectoryConfig,
  Application,
  ApplicationAssociatedResourceType,
  ApplicationNotSupportedException,
  ApplicationResourceAssociation,
  ApplicationSettingsRequest,
  AssociateConnectionAliasRequest,
  AssociateIpGroupsRequest,
  AssociateWorkspaceApplicationRequest,
  AssociateWorkspaceApplicationResult,
  AuthorizeIpRulesRequest,
  BundleAssociatedResourceType,
  BundleResourceAssociation,
  Capacity,
  CertificateBasedAuthProperties,
  ClientDeviceType,
  ClientProperties,
  Compute,
  ComputeNotCompatibleException,
  ComputeType,
  ConflictException,
  ConnectionAliasPermission,
  CopyWorkspaceImageRequest,
  CreateAccountLinkInvitationRequest,
  CreateConnectClientAddInRequest,
  CreateConnectionAliasRequest,
  CreateIpGroupRequest,
  CreateStandbyWorkspacesRequest,
  CreateTagsRequest,
  CreateUpdatedWorkspaceImageRequest,
  CreateWorkspaceBundleRequest,
  CreateWorkspaceBundleResult,
  CreateWorkspaceImageRequest,
  CreateWorkspaceImageResult,
  CreateWorkspacesPoolRequest,
  CreateWorkspacesPoolResult,
  CreateWorkspacesRequest,
  CreateWorkspacesResult,
  DataReplicationSettings,
  DefaultImportClientBrandingAttributes,
  DeletableCertificateBasedAuthProperty,
  DeletableSamlProperty,
  DeleteAccountLinkInvitationRequest,
  DeleteClientBrandingRequest,
  DeleteConnectClientAddInRequest,
  DeleteConnectionAliasRequest,
  DeleteIpGroupRequest,
  DeleteTagsRequest,
  DeleteWorkspaceBundleRequest,
  DeleteWorkspaceImageRequest,
  DeployWorkspaceApplicationsRequest,
  DeployWorkspaceApplicationsResult,
  DeregisterWorkspaceDirectoryRequest,
  DescribeAccountModificationsRequest,
  DescribeAccountModificationsResult,
  DescribeAccountRequest,
  DescribeApplicationAssociationsRequest,
  DescribeApplicationAssociationsResult,
  DescribeApplicationsRequest,
  DescribeApplicationsResult,
  DescribeBundleAssociationsRequest,
  DescribeBundleAssociationsResult,
  DescribeClientBrandingRequest,
  DescribeClientPropertiesRequest,
  DescribeConnectClientAddInsRequest,
  DescribeConnectionAliasesRequest,
  DescribeConnectionAliasPermissionsRequest,
  DescribeCustomWorkspaceImageImportRequest,
  DescribeCustomWorkspaceImageImportResult,
  DescribeImageAssociationsRequest,
  DescribeImageAssociationsResult,
  DescribeIpGroupsRequest,
  DescribeTagsRequest,
  DescribeWorkspaceAssociationsRequest,
  DescribeWorkspaceAssociationsResult,
  DescribeWorkspaceBundlesRequest,
  DescribeWorkspaceBundlesResult,
  DescribeWorkspaceDirectoriesFilter,
  DescribeWorkspaceDirectoriesRequest,
  DescribeWorkspaceImagePermissionsRequest,
  DescribeWorkspaceImagesRequest,
  DescribeWorkspaceImagesResult,
  DescribeWorkspacesConnectionStatusRequest,
  DescribeWorkspacesConnectionStatusResult,
  DescribeWorkspaceSnapshotsRequest,
  DescribeWorkspaceSnapshotsResult,
  DescribeWorkspacesPoolSessionsRequest,
  DescribeWorkspacesPoolSessionsResult,
  DescribeWorkspacesPoolsFilter,
  DescribeWorkspacesPoolsRequest,
  DescribeWorkspacesPoolsResult,
  DescribeWorkspacesRequest,
  DescribeWorkspacesResult,
  DisassociateConnectionAliasRequest,
  DisassociateIpGroupsRequest,
  DisassociateWorkspaceApplicationRequest,
  DisassociateWorkspaceApplicationResult,
  GetAccountLinkRequest,
  GlobalAcceleratorForDirectory,
  GlobalAcceleratorForWorkSpace,
  ImageAssociatedResourceType,
  ImageResourceAssociation,
  ImageSourceIdentifier,
  ImportClientBrandingRequest,
  ImportCustomWorkspaceImageRequest,
  ImportWorkspaceImageRequest,
  IncompatibleApplicationsException,
  InternalServerException,
  InternetFallbackProtocol,
  InvalidParameterCombinationException,
  InvalidParameterValuesException,
  InvalidResourceStateException,
  IosImportClientBrandingAttributes,
  IpRuleItem,
  ListAccountLinksRequest,
  ListAvailableManagementCidrRangesRequest,
  MicrosoftEntraConfig,
  MigrateWorkspaceRequest,
  ModifyAccountRequest,
  ModifyCertificateBasedAuthPropertiesRequest,
  ModifyClientPropertiesRequest,
  ModifyEndpointEncryptionModeRequest,
  ModifySamlPropertiesRequest,
  ModifySelfservicePermissionsRequest,
  OperatingSystemName,
  OperatingSystemNotCompatibleException,
  OperationInProgressException,
  OperationNotSupportedException,
  Protocol,
  ResourceAlreadyExistsException,
  ResourceAssociatedException,
  ResourceCreationFailedException,
  ResourceInUseException,
  ResourceLimitExceededException,
  ResourceNotFoundException,
  ResourceUnavailableException,
  RootStorage,
  SamlProperties,
  SelfservicePermissions,
  Snapshot,
  StandbyWorkspace,
  StandbyWorkspacesProperties,
  StorageConnector,
  StreamingProperties,
  Tag,
  TimeoutSettings,
  UserSetting,
  UserStorage,
  ValidationException,
  Workspace,
  WorkspaceAccessProperties,
  WorkSpaceApplication,
  WorkSpaceApplicationDeployment,
  WorkSpaceAssociatedResourceType,
  WorkspaceBundle,
  WorkspaceConnectionStatus,
  WorkspaceImage,
  WorkspaceProperties,
  WorkspaceRequest,
  WorkspaceResourceAssociation,
  WorkspacesPool,
  WorkspacesPoolSession,
} from "../models/models_0";
import {
  ModifyStreamingPropertiesRequest,
  ModifyWorkspaceAccessPropertiesRequest,
  ModifyWorkspaceCreationPropertiesRequest,
  ModifyWorkspacePropertiesRequest,
  ModifyWorkspaceStateRequest,
  RebootRequest,
  RebootWorkspacesRequest,
  RebuildRequest,
  RebuildWorkspacesRequest,
  RegisterWorkspaceDirectoryRequest,
  RejectAccountLinkInvitationRequest,
  RestoreWorkspaceRequest,
  RevokeIpRulesRequest,
  StartRequest,
  StartWorkspacesPoolRequest,
  StartWorkspacesRequest,
  StopRequest,
  StopWorkspacesPoolRequest,
  StopWorkspacesRequest,
  TerminateRequest,
  TerminateWorkspacesPoolRequest,
  TerminateWorkspacesPoolSessionRequest,
  TerminateWorkspacesRequest,
  UnsupportedNetworkConfigurationException,
  UnsupportedWorkspaceConfigurationException,
  UpdateConnectClientAddInRequest,
  UpdateConnectionAliasPermissionRequest,
  UpdateRulesOfIpGroupRequest,
  UpdateWorkspaceBundleRequest,
  UpdateWorkspaceImagePermissionRequest,
  UpdateWorkspacesPoolRequest,
  UpdateWorkspacesPoolResult,
  WorkspaceCreationProperties,
  WorkspacesDefaultRoleNotFoundException,
} from "../models/models_1";
import { WorkSpacesServiceException as __BaseException } from "../models/WorkSpacesServiceException";

/**
 * serializeAws_json1_1AcceptAccountLinkInvitationCommand
 */
export const se_AcceptAccountLinkInvitationCommand = async (
  input: AcceptAccountLinkInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AcceptAccountLinkInvitation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateConnectionAliasCommand
 */
export const se_AssociateConnectionAliasCommand = async (
  input: AssociateConnectionAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateConnectionAlias");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateIpGroupsCommand
 */
export const se_AssociateIpGroupsCommand = async (
  input: AssociateIpGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateIpGroups");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateWorkspaceApplicationCommand
 */
export const se_AssociateWorkspaceApplicationCommand = async (
  input: AssociateWorkspaceApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateWorkspaceApplication");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AuthorizeIpRulesCommand
 */
export const se_AuthorizeIpRulesCommand = async (
  input: AuthorizeIpRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AuthorizeIpRules");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CopyWorkspaceImageCommand
 */
export const se_CopyWorkspaceImageCommand = async (
  input: CopyWorkspaceImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CopyWorkspaceImage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAccountLinkInvitationCommand
 */
export const se_CreateAccountLinkInvitationCommand = async (
  input: CreateAccountLinkInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAccountLinkInvitation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateConnectClientAddInCommand
 */
export const se_CreateConnectClientAddInCommand = async (
  input: CreateConnectClientAddInCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateConnectClientAddIn");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateConnectionAliasCommand
 */
export const se_CreateConnectionAliasCommand = async (
  input: CreateConnectionAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateConnectionAlias");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateIpGroupCommand
 */
export const se_CreateIpGroupCommand = async (
  input: CreateIpGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateIpGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateStandbyWorkspacesCommand
 */
export const se_CreateStandbyWorkspacesCommand = async (
  input: CreateStandbyWorkspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateStandbyWorkspaces");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateTagsCommand
 */
export const se_CreateTagsCommand = async (
  input: CreateTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateTags");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateUpdatedWorkspaceImageCommand
 */
export const se_CreateUpdatedWorkspaceImageCommand = async (
  input: CreateUpdatedWorkspaceImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateUpdatedWorkspaceImage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateWorkspaceBundleCommand
 */
export const se_CreateWorkspaceBundleCommand = async (
  input: CreateWorkspaceBundleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateWorkspaceBundle");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateWorkspaceImageCommand
 */
export const se_CreateWorkspaceImageCommand = async (
  input: CreateWorkspaceImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateWorkspaceImage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateWorkspacesCommand
 */
export const se_CreateWorkspacesCommand = async (
  input: CreateWorkspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateWorkspaces");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateWorkspacesPoolCommand
 */
export const se_CreateWorkspacesPoolCommand = async (
  input: CreateWorkspacesPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateWorkspacesPool");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAccountLinkInvitationCommand
 */
export const se_DeleteAccountLinkInvitationCommand = async (
  input: DeleteAccountLinkInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAccountLinkInvitation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteClientBrandingCommand
 */
export const se_DeleteClientBrandingCommand = async (
  input: DeleteClientBrandingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteClientBranding");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteConnectClientAddInCommand
 */
export const se_DeleteConnectClientAddInCommand = async (
  input: DeleteConnectClientAddInCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteConnectClientAddIn");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteConnectionAliasCommand
 */
export const se_DeleteConnectionAliasCommand = async (
  input: DeleteConnectionAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteConnectionAlias");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteIpGroupCommand
 */
export const se_DeleteIpGroupCommand = async (
  input: DeleteIpGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteIpGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteTagsCommand
 */
export const se_DeleteTagsCommand = async (
  input: DeleteTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteTags");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteWorkspaceBundleCommand
 */
export const se_DeleteWorkspaceBundleCommand = async (
  input: DeleteWorkspaceBundleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteWorkspaceBundle");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteWorkspaceImageCommand
 */
export const se_DeleteWorkspaceImageCommand = async (
  input: DeleteWorkspaceImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteWorkspaceImage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeployWorkspaceApplicationsCommand
 */
export const se_DeployWorkspaceApplicationsCommand = async (
  input: DeployWorkspaceApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeployWorkspaceApplications");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeregisterWorkspaceDirectoryCommand
 */
export const se_DeregisterWorkspaceDirectoryCommand = async (
  input: DeregisterWorkspaceDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeregisterWorkspaceDirectory");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAccountCommand
 */
export const se_DescribeAccountCommand = async (
  input: DescribeAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAccount");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAccountModificationsCommand
 */
export const se_DescribeAccountModificationsCommand = async (
  input: DescribeAccountModificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAccountModifications");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeApplicationAssociationsCommand
 */
export const se_DescribeApplicationAssociationsCommand = async (
  input: DescribeApplicationAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeApplicationAssociations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeApplicationsCommand
 */
export const se_DescribeApplicationsCommand = async (
  input: DescribeApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeApplications");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeBundleAssociationsCommand
 */
export const se_DescribeBundleAssociationsCommand = async (
  input: DescribeBundleAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeBundleAssociations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeClientBrandingCommand
 */
export const se_DescribeClientBrandingCommand = async (
  input: DescribeClientBrandingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeClientBranding");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeClientPropertiesCommand
 */
export const se_DescribeClientPropertiesCommand = async (
  input: DescribeClientPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeClientProperties");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeConnectClientAddInsCommand
 */
export const se_DescribeConnectClientAddInsCommand = async (
  input: DescribeConnectClientAddInsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeConnectClientAddIns");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeConnectionAliasesCommand
 */
export const se_DescribeConnectionAliasesCommand = async (
  input: DescribeConnectionAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeConnectionAliases");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeConnectionAliasPermissionsCommand
 */
export const se_DescribeConnectionAliasPermissionsCommand = async (
  input: DescribeConnectionAliasPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeConnectionAliasPermissions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeCustomWorkspaceImageImportCommand
 */
export const se_DescribeCustomWorkspaceImageImportCommand = async (
  input: DescribeCustomWorkspaceImageImportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeCustomWorkspaceImageImport");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeImageAssociationsCommand
 */
export const se_DescribeImageAssociationsCommand = async (
  input: DescribeImageAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeImageAssociations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeIpGroupsCommand
 */
export const se_DescribeIpGroupsCommand = async (
  input: DescribeIpGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeIpGroups");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTagsCommand
 */
export const se_DescribeTagsCommand = async (
  input: DescribeTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeTags");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeWorkspaceAssociationsCommand
 */
export const se_DescribeWorkspaceAssociationsCommand = async (
  input: DescribeWorkspaceAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeWorkspaceAssociations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeWorkspaceBundlesCommand
 */
export const se_DescribeWorkspaceBundlesCommand = async (
  input: DescribeWorkspaceBundlesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeWorkspaceBundles");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeWorkspaceDirectoriesCommand
 */
export const se_DescribeWorkspaceDirectoriesCommand = async (
  input: DescribeWorkspaceDirectoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeWorkspaceDirectories");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeWorkspaceImagePermissionsCommand
 */
export const se_DescribeWorkspaceImagePermissionsCommand = async (
  input: DescribeWorkspaceImagePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeWorkspaceImagePermissions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeWorkspaceImagesCommand
 */
export const se_DescribeWorkspaceImagesCommand = async (
  input: DescribeWorkspaceImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeWorkspaceImages");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeWorkspacesCommand
 */
export const se_DescribeWorkspacesCommand = async (
  input: DescribeWorkspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeWorkspaces");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeWorkspacesConnectionStatusCommand
 */
export const se_DescribeWorkspacesConnectionStatusCommand = async (
  input: DescribeWorkspacesConnectionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeWorkspacesConnectionStatus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeWorkspaceSnapshotsCommand
 */
export const se_DescribeWorkspaceSnapshotsCommand = async (
  input: DescribeWorkspaceSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeWorkspaceSnapshots");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeWorkspacesPoolsCommand
 */
export const se_DescribeWorkspacesPoolsCommand = async (
  input: DescribeWorkspacesPoolsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeWorkspacesPools");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeWorkspacesPoolSessionsCommand
 */
export const se_DescribeWorkspacesPoolSessionsCommand = async (
  input: DescribeWorkspacesPoolSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeWorkspacesPoolSessions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateConnectionAliasCommand
 */
export const se_DisassociateConnectionAliasCommand = async (
  input: DisassociateConnectionAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateConnectionAlias");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateIpGroupsCommand
 */
export const se_DisassociateIpGroupsCommand = async (
  input: DisassociateIpGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateIpGroups");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateWorkspaceApplicationCommand
 */
export const se_DisassociateWorkspaceApplicationCommand = async (
  input: DisassociateWorkspaceApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateWorkspaceApplication");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAccountLinkCommand
 */
export const se_GetAccountLinkCommand = async (
  input: GetAccountLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAccountLink");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ImportClientBrandingCommand
 */
export const se_ImportClientBrandingCommand = async (
  input: ImportClientBrandingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ImportClientBranding");
  let body: any;
  body = JSON.stringify(se_ImportClientBrandingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ImportCustomWorkspaceImageCommand
 */
export const se_ImportCustomWorkspaceImageCommand = async (
  input: ImportCustomWorkspaceImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ImportCustomWorkspaceImage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ImportWorkspaceImageCommand
 */
export const se_ImportWorkspaceImageCommand = async (
  input: ImportWorkspaceImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ImportWorkspaceImage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAccountLinksCommand
 */
export const se_ListAccountLinksCommand = async (
  input: ListAccountLinksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAccountLinks");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAvailableManagementCidrRangesCommand
 */
export const se_ListAvailableManagementCidrRangesCommand = async (
  input: ListAvailableManagementCidrRangesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAvailableManagementCidrRanges");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1MigrateWorkspaceCommand
 */
export const se_MigrateWorkspaceCommand = async (
  input: MigrateWorkspaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("MigrateWorkspace");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ModifyAccountCommand
 */
export const se_ModifyAccountCommand = async (
  input: ModifyAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ModifyAccount");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ModifyCertificateBasedAuthPropertiesCommand
 */
export const se_ModifyCertificateBasedAuthPropertiesCommand = async (
  input: ModifyCertificateBasedAuthPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ModifyCertificateBasedAuthProperties");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ModifyClientPropertiesCommand
 */
export const se_ModifyClientPropertiesCommand = async (
  input: ModifyClientPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ModifyClientProperties");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ModifyEndpointEncryptionModeCommand
 */
export const se_ModifyEndpointEncryptionModeCommand = async (
  input: ModifyEndpointEncryptionModeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ModifyEndpointEncryptionMode");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ModifySamlPropertiesCommand
 */
export const se_ModifySamlPropertiesCommand = async (
  input: ModifySamlPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ModifySamlProperties");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ModifySelfservicePermissionsCommand
 */
export const se_ModifySelfservicePermissionsCommand = async (
  input: ModifySelfservicePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ModifySelfservicePermissions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ModifyStreamingPropertiesCommand
 */
export const se_ModifyStreamingPropertiesCommand = async (
  input: ModifyStreamingPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ModifyStreamingProperties");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ModifyWorkspaceAccessPropertiesCommand
 */
export const se_ModifyWorkspaceAccessPropertiesCommand = async (
  input: ModifyWorkspaceAccessPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ModifyWorkspaceAccessProperties");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ModifyWorkspaceCreationPropertiesCommand
 */
export const se_ModifyWorkspaceCreationPropertiesCommand = async (
  input: ModifyWorkspaceCreationPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ModifyWorkspaceCreationProperties");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ModifyWorkspacePropertiesCommand
 */
export const se_ModifyWorkspacePropertiesCommand = async (
  input: ModifyWorkspacePropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ModifyWorkspaceProperties");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ModifyWorkspaceStateCommand
 */
export const se_ModifyWorkspaceStateCommand = async (
  input: ModifyWorkspaceStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ModifyWorkspaceState");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RebootWorkspacesCommand
 */
export const se_RebootWorkspacesCommand = async (
  input: RebootWorkspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RebootWorkspaces");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RebuildWorkspacesCommand
 */
export const se_RebuildWorkspacesCommand = async (
  input: RebuildWorkspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RebuildWorkspaces");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterWorkspaceDirectoryCommand
 */
export const se_RegisterWorkspaceDirectoryCommand = async (
  input: RegisterWorkspaceDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RegisterWorkspaceDirectory");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RejectAccountLinkInvitationCommand
 */
export const se_RejectAccountLinkInvitationCommand = async (
  input: RejectAccountLinkInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RejectAccountLinkInvitation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RestoreWorkspaceCommand
 */
export const se_RestoreWorkspaceCommand = async (
  input: RestoreWorkspaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RestoreWorkspace");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RevokeIpRulesCommand
 */
export const se_RevokeIpRulesCommand = async (
  input: RevokeIpRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RevokeIpRules");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartWorkspacesCommand
 */
export const se_StartWorkspacesCommand = async (
  input: StartWorkspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartWorkspaces");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartWorkspacesPoolCommand
 */
export const se_StartWorkspacesPoolCommand = async (
  input: StartWorkspacesPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartWorkspacesPool");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopWorkspacesCommand
 */
export const se_StopWorkspacesCommand = async (
  input: StopWorkspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopWorkspaces");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopWorkspacesPoolCommand
 */
export const se_StopWorkspacesPoolCommand = async (
  input: StopWorkspacesPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopWorkspacesPool");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TerminateWorkspacesCommand
 */
export const se_TerminateWorkspacesCommand = async (
  input: TerminateWorkspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TerminateWorkspaces");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TerminateWorkspacesPoolCommand
 */
export const se_TerminateWorkspacesPoolCommand = async (
  input: TerminateWorkspacesPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TerminateWorkspacesPool");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TerminateWorkspacesPoolSessionCommand
 */
export const se_TerminateWorkspacesPoolSessionCommand = async (
  input: TerminateWorkspacesPoolSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TerminateWorkspacesPoolSession");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateConnectClientAddInCommand
 */
export const se_UpdateConnectClientAddInCommand = async (
  input: UpdateConnectClientAddInCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateConnectClientAddIn");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateConnectionAliasPermissionCommand
 */
export const se_UpdateConnectionAliasPermissionCommand = async (
  input: UpdateConnectionAliasPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateConnectionAliasPermission");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateRulesOfIpGroupCommand
 */
export const se_UpdateRulesOfIpGroupCommand = async (
  input: UpdateRulesOfIpGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateRulesOfIpGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateWorkspaceBundleCommand
 */
export const se_UpdateWorkspaceBundleCommand = async (
  input: UpdateWorkspaceBundleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateWorkspaceBundle");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateWorkspaceImagePermissionCommand
 */
export const se_UpdateWorkspaceImagePermissionCommand = async (
  input: UpdateWorkspaceImagePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateWorkspaceImagePermission");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateWorkspacesPoolCommand
 */
export const se_UpdateWorkspacesPoolCommand = async (
  input: UpdateWorkspacesPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateWorkspacesPool");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AcceptAccountLinkInvitationCommand
 */
export const de_AcceptAccountLinkInvitationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptAccountLinkInvitationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AcceptAccountLinkInvitationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AssociateConnectionAliasCommand
 */
export const de_AssociateConnectionAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateConnectionAliasCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AssociateConnectionAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AssociateIpGroupsCommand
 */
export const de_AssociateIpGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateIpGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AssociateIpGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AssociateWorkspaceApplicationCommand
 */
export const de_AssociateWorkspaceApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateWorkspaceApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateWorkspaceApplicationResult(data, context);
  const response: AssociateWorkspaceApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AuthorizeIpRulesCommand
 */
export const de_AuthorizeIpRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AuthorizeIpRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AuthorizeIpRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CopyWorkspaceImageCommand
 */
export const de_CopyWorkspaceImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyWorkspaceImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CopyWorkspaceImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateAccountLinkInvitationCommand
 */
export const de_CreateAccountLinkInvitationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccountLinkInvitationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateAccountLinkInvitationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateConnectClientAddInCommand
 */
export const de_CreateConnectClientAddInCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectClientAddInCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateConnectClientAddInCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateConnectionAliasCommand
 */
export const de_CreateConnectionAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectionAliasCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateConnectionAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateIpGroupCommand
 */
export const de_CreateIpGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIpGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateIpGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateStandbyWorkspacesCommand
 */
export const de_CreateStandbyWorkspacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStandbyWorkspacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateStandbyWorkspacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateTagsCommand
 */
export const de_CreateTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateUpdatedWorkspaceImageCommand
 */
export const de_CreateUpdatedWorkspaceImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUpdatedWorkspaceImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateUpdatedWorkspaceImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateWorkspaceBundleCommand
 */
export const de_CreateWorkspaceBundleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkspaceBundleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateWorkspaceBundleResult(data, context);
  const response: CreateWorkspaceBundleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateWorkspaceImageCommand
 */
export const de_CreateWorkspaceImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkspaceImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateWorkspaceImageResult(data, context);
  const response: CreateWorkspaceImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateWorkspacesCommand
 */
export const de_CreateWorkspacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkspacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateWorkspacesResult(data, context);
  const response: CreateWorkspacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateWorkspacesPoolCommand
 */
export const de_CreateWorkspacesPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkspacesPoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateWorkspacesPoolResult(data, context);
  const response: CreateWorkspacesPoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteAccountLinkInvitationCommand
 */
export const de_DeleteAccountLinkInvitationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountLinkInvitationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteAccountLinkInvitationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteClientBrandingCommand
 */
export const de_DeleteClientBrandingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClientBrandingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteClientBrandingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteConnectClientAddInCommand
 */
export const de_DeleteConnectClientAddInCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectClientAddInCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteConnectClientAddInCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteConnectionAliasCommand
 */
export const de_DeleteConnectionAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionAliasCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteConnectionAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteIpGroupCommand
 */
export const de_DeleteIpGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIpGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteIpGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteTagsCommand
 */
export const de_DeleteTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteWorkspaceBundleCommand
 */
export const de_DeleteWorkspaceBundleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkspaceBundleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteWorkspaceBundleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteWorkspaceImageCommand
 */
export const de_DeleteWorkspaceImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkspaceImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteWorkspaceImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeployWorkspaceApplicationsCommand
 */
export const de_DeployWorkspaceApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeployWorkspaceApplicationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeployWorkspaceApplicationsResult(data, context);
  const response: DeployWorkspaceApplicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeregisterWorkspaceDirectoryCommand
 */
export const de_DeregisterWorkspaceDirectoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterWorkspaceDirectoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeregisterWorkspaceDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeAccountCommand
 */
export const de_DescribeAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeAccountModificationsCommand
 */
export const de_DescribeAccountModificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountModificationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAccountModificationsResult(data, context);
  const response: DescribeAccountModificationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeApplicationAssociationsCommand
 */
export const de_DescribeApplicationAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationAssociationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeApplicationAssociationsResult(data, context);
  const response: DescribeApplicationAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeApplicationsCommand
 */
export const de_DescribeApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeApplicationsResult(data, context);
  const response: DescribeApplicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeBundleAssociationsCommand
 */
export const de_DescribeBundleAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBundleAssociationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeBundleAssociationsResult(data, context);
  const response: DescribeBundleAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeClientBrandingCommand
 */
export const de_DescribeClientBrandingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClientBrandingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeClientBrandingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeClientPropertiesCommand
 */
export const de_DescribeClientPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClientPropertiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeClientPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeConnectClientAddInsCommand
 */
export const de_DescribeConnectClientAddInsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectClientAddInsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeConnectClientAddInsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeConnectionAliasesCommand
 */
export const de_DescribeConnectionAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectionAliasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeConnectionAliasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeConnectionAliasPermissionsCommand
 */
export const de_DescribeConnectionAliasPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectionAliasPermissionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeConnectionAliasPermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeCustomWorkspaceImageImportCommand
 */
export const de_DescribeCustomWorkspaceImageImportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomWorkspaceImageImportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeCustomWorkspaceImageImportResult(data, context);
  const response: DescribeCustomWorkspaceImageImportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeImageAssociationsCommand
 */
export const de_DescribeImageAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImageAssociationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeImageAssociationsResult(data, context);
  const response: DescribeImageAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeIpGroupsCommand
 */
export const de_DescribeIpGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIpGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeIpGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeTagsCommand
 */
export const de_DescribeTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeWorkspaceAssociationsCommand
 */
export const de_DescribeWorkspaceAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspaceAssociationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeWorkspaceAssociationsResult(data, context);
  const response: DescribeWorkspaceAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeWorkspaceBundlesCommand
 */
export const de_DescribeWorkspaceBundlesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspaceBundlesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeWorkspaceBundlesResult(data, context);
  const response: DescribeWorkspaceBundlesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeWorkspaceDirectoriesCommand
 */
export const de_DescribeWorkspaceDirectoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspaceDirectoriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeWorkspaceDirectoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeWorkspaceImagePermissionsCommand
 */
export const de_DescribeWorkspaceImagePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspaceImagePermissionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeWorkspaceImagePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeWorkspaceImagesCommand
 */
export const de_DescribeWorkspaceImagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspaceImagesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeWorkspaceImagesResult(data, context);
  const response: DescribeWorkspaceImagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeWorkspacesCommand
 */
export const de_DescribeWorkspacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeWorkspacesResult(data, context);
  const response: DescribeWorkspacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeWorkspacesConnectionStatusCommand
 */
export const de_DescribeWorkspacesConnectionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspacesConnectionStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeWorkspacesConnectionStatusResult(data, context);
  const response: DescribeWorkspacesConnectionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeWorkspaceSnapshotsCommand
 */
export const de_DescribeWorkspaceSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspaceSnapshotsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeWorkspaceSnapshotsResult(data, context);
  const response: DescribeWorkspaceSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeWorkspacesPoolsCommand
 */
export const de_DescribeWorkspacesPoolsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspacesPoolsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeWorkspacesPoolsResult(data, context);
  const response: DescribeWorkspacesPoolsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeWorkspacesPoolSessionsCommand
 */
export const de_DescribeWorkspacesPoolSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspacesPoolSessionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeWorkspacesPoolSessionsResult(data, context);
  const response: DescribeWorkspacesPoolSessionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DisassociateConnectionAliasCommand
 */
export const de_DisassociateConnectionAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateConnectionAliasCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DisassociateConnectionAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DisassociateIpGroupsCommand
 */
export const de_DisassociateIpGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateIpGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DisassociateIpGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DisassociateWorkspaceApplicationCommand
 */
export const de_DisassociateWorkspaceApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateWorkspaceApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisassociateWorkspaceApplicationResult(data, context);
  const response: DisassociateWorkspaceApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetAccountLinkCommand
 */
export const de_GetAccountLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountLinkCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetAccountLinkCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ImportClientBrandingCommand
 */
export const de_ImportClientBrandingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportClientBrandingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ImportClientBrandingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ImportCustomWorkspaceImageCommand
 */
export const de_ImportCustomWorkspaceImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportCustomWorkspaceImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ImportCustomWorkspaceImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ImportWorkspaceImageCommand
 */
export const de_ImportWorkspaceImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportWorkspaceImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ImportWorkspaceImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListAccountLinksCommand
 */
export const de_ListAccountLinksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountLinksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListAccountLinksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListAvailableManagementCidrRangesCommand
 */
export const de_ListAvailableManagementCidrRangesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableManagementCidrRangesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListAvailableManagementCidrRangesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1MigrateWorkspaceCommand
 */
export const de_MigrateWorkspaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MigrateWorkspaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: MigrateWorkspaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ModifyAccountCommand
 */
export const de_ModifyAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ModifyAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ModifyCertificateBasedAuthPropertiesCommand
 */
export const de_ModifyCertificateBasedAuthPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyCertificateBasedAuthPropertiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ModifyCertificateBasedAuthPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ModifyClientPropertiesCommand
 */
export const de_ModifyClientPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClientPropertiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ModifyClientPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ModifyEndpointEncryptionModeCommand
 */
export const de_ModifyEndpointEncryptionModeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyEndpointEncryptionModeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ModifyEndpointEncryptionModeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ModifySamlPropertiesCommand
 */
export const de_ModifySamlPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifySamlPropertiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ModifySamlPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ModifySelfservicePermissionsCommand
 */
export const de_ModifySelfservicePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifySelfservicePermissionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ModifySelfservicePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ModifyStreamingPropertiesCommand
 */
export const de_ModifyStreamingPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyStreamingPropertiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ModifyStreamingPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ModifyWorkspaceAccessPropertiesCommand
 */
export const de_ModifyWorkspaceAccessPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyWorkspaceAccessPropertiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ModifyWorkspaceAccessPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ModifyWorkspaceCreationPropertiesCommand
 */
export const de_ModifyWorkspaceCreationPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyWorkspaceCreationPropertiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ModifyWorkspaceCreationPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ModifyWorkspacePropertiesCommand
 */
export const de_ModifyWorkspacePropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyWorkspacePropertiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ModifyWorkspacePropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ModifyWorkspaceStateCommand
 */
export const de_ModifyWorkspaceStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyWorkspaceStateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ModifyWorkspaceStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RebootWorkspacesCommand
 */
export const de_RebootWorkspacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootWorkspacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: RebootWorkspacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RebuildWorkspacesCommand
 */
export const de_RebuildWorkspacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebuildWorkspacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: RebuildWorkspacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RegisterWorkspaceDirectoryCommand
 */
export const de_RegisterWorkspaceDirectoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterWorkspaceDirectoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: RegisterWorkspaceDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RejectAccountLinkInvitationCommand
 */
export const de_RejectAccountLinkInvitationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectAccountLinkInvitationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: RejectAccountLinkInvitationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RestoreWorkspaceCommand
 */
export const de_RestoreWorkspaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreWorkspaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: RestoreWorkspaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RevokeIpRulesCommand
 */
export const de_RevokeIpRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeIpRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: RevokeIpRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartWorkspacesCommand
 */
export const de_StartWorkspacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartWorkspacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartWorkspacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartWorkspacesPoolCommand
 */
export const de_StartWorkspacesPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartWorkspacesPoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartWorkspacesPoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopWorkspacesCommand
 */
export const de_StopWorkspacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopWorkspacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StopWorkspacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopWorkspacesPoolCommand
 */
export const de_StopWorkspacesPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopWorkspacesPoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StopWorkspacesPoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1TerminateWorkspacesCommand
 */
export const de_TerminateWorkspacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateWorkspacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: TerminateWorkspacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1TerminateWorkspacesPoolCommand
 */
export const de_TerminateWorkspacesPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateWorkspacesPoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: TerminateWorkspacesPoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1TerminateWorkspacesPoolSessionCommand
 */
export const de_TerminateWorkspacesPoolSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateWorkspacesPoolSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: TerminateWorkspacesPoolSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateConnectClientAddInCommand
 */
export const de_UpdateConnectClientAddInCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectClientAddInCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateConnectClientAddInCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateConnectionAliasPermissionCommand
 */
export const de_UpdateConnectionAliasPermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectionAliasPermissionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateConnectionAliasPermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateRulesOfIpGroupCommand
 */
export const de_UpdateRulesOfIpGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRulesOfIpGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateRulesOfIpGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateWorkspaceBundleCommand
 */
export const de_UpdateWorkspaceBundleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkspaceBundleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateWorkspaceBundleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateWorkspaceImagePermissionCommand
 */
export const de_UpdateWorkspaceImagePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkspaceImagePermissionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateWorkspaceImagePermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateWorkspacesPoolCommand
 */
export const de_UpdateWorkspacesPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkspacesPoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateWorkspacesPoolResult(data, context);
  const response: UpdateWorkspacesPoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserialize_Aws_json1_1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.workspaces#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspaces#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspaces#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      throw await de_InvalidResourceStateExceptionRes(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await de_OperationNotSupportedExceptionRes(parsedOutput, context);
    case "ResourceAssociatedException":
    case "com.amazonaws.workspaces#ResourceAssociatedException":
      throw await de_ResourceAssociatedExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ApplicationNotSupportedException":
    case "com.amazonaws.workspaces#ApplicationNotSupportedException":
      throw await de_ApplicationNotSupportedExceptionRes(parsedOutput, context);
    case "ComputeNotCompatibleException":
    case "com.amazonaws.workspaces#ComputeNotCompatibleException":
      throw await de_ComputeNotCompatibleExceptionRes(parsedOutput, context);
    case "IncompatibleApplicationsException":
    case "com.amazonaws.workspaces#IncompatibleApplicationsException":
      throw await de_IncompatibleApplicationsExceptionRes(parsedOutput, context);
    case "OperatingSystemNotCompatibleException":
    case "com.amazonaws.workspaces#OperatingSystemNotCompatibleException":
      throw await de_OperatingSystemNotCompatibleExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.workspaces#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.workspaces#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.workspaces#ResourceUnavailableException":
      throw await de_ResourceUnavailableExceptionRes(parsedOutput, context);
    case "ResourceCreationFailedException":
    case "com.amazonaws.workspaces#ResourceCreationFailedException":
      throw await de_ResourceCreationFailedExceptionRes(parsedOutput, context);
    case "OperationInProgressException":
    case "com.amazonaws.workspaces#OperationInProgressException":
      throw await de_OperationInProgressExceptionRes(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.workspaces#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "UnsupportedWorkspaceConfigurationException":
    case "com.amazonaws.workspaces#UnsupportedWorkspaceConfigurationException":
      throw await de_UnsupportedWorkspaceConfigurationExceptionRes(parsedOutput, context);
    case "UnsupportedNetworkConfigurationException":
    case "com.amazonaws.workspaces#UnsupportedNetworkConfigurationException":
      throw await de_UnsupportedNetworkConfigurationExceptionRes(parsedOutput, context);
    case "WorkspacesDefaultRoleNotFoundException":
    case "com.amazonaws.workspaces#WorkspacesDefaultRoleNotFoundException":
      throw await de_WorkspacesDefaultRoleNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

/**
 * deserializeAws_json1_1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ApplicationNotSupportedExceptionRes
 */
const de_ApplicationNotSupportedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApplicationNotSupportedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ApplicationNotSupportedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ComputeNotCompatibleExceptionRes
 */
const de_ComputeNotCompatibleExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ComputeNotCompatibleException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ComputeNotCompatibleException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1IncompatibleApplicationsExceptionRes
 */
const de_IncompatibleApplicationsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncompatibleApplicationsException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new IncompatibleApplicationsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidParameterCombinationExceptionRes
 */
const de_InvalidParameterCombinationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterCombinationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidParameterCombinationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidParameterValuesExceptionRes
 */
const de_InvalidParameterValuesExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValuesException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidParameterValuesException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidResourceStateExceptionRes
 */
const de_InvalidResourceStateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidResourceStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidResourceStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OperatingSystemNotCompatibleExceptionRes
 */
const de_OperatingSystemNotCompatibleExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperatingSystemNotCompatibleException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new OperatingSystemNotCompatibleException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OperationInProgressExceptionRes
 */
const de_OperationInProgressExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationInProgressException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new OperationInProgressException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OperationNotSupportedExceptionRes
 */
const de_OperationNotSupportedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationNotSupportedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new OperationNotSupportedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceAlreadyExistsExceptionRes
 */
const de_ResourceAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceAssociatedExceptionRes
 */
const de_ResourceAssociatedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAssociatedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceAssociatedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceCreationFailedExceptionRes
 */
const de_ResourceCreationFailedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceCreationFailedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceCreationFailedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceInUseExceptionRes
 */
const de_ResourceInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceLimitExceededExceptionRes
 */
const de_ResourceLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceUnavailableExceptionRes
 */
const de_ResourceUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnsupportedNetworkConfigurationExceptionRes
 */
const de_UnsupportedNetworkConfigurationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedNetworkConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new UnsupportedNetworkConfigurationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnsupportedWorkspaceConfigurationExceptionRes
 */
const de_UnsupportedWorkspaceConfigurationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedWorkspaceConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new UnsupportedWorkspaceConfigurationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1WorkspacesDefaultRoleNotFoundExceptionRes
 */
const de_WorkspacesDefaultRoleNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WorkspacesDefaultRoleNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new WorkspacesDefaultRoleNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AcceptAccountLinkInvitationRequest omitted.

// se_AccessEndpoint omitted.

// se_AccessEndpointConfig omitted.

// se_AccessEndpointList omitted.

// se_ActiveDirectoryConfig omitted.

// se_ApplicationAssociatedResourceTypeList omitted.

// se_ApplicationList omitted.

// se_ApplicationSettingsRequest omitted.

// se_AssociateConnectionAliasRequest omitted.

// se_AssociateIpGroupsRequest omitted.

// se_AssociateWorkspaceApplicationRequest omitted.

// se_AuthorizeIpRulesRequest omitted.

// se_BundleAssociatedResourceTypeList omitted.

// se_BundleIdList omitted.

// se_Capacity omitted.

// se_CertificateBasedAuthProperties omitted.

// se_ClientDeviceTypeList omitted.

// se_ClientProperties omitted.

// se_ComputeList omitted.

// se_ComputeType omitted.

// se_ConnectionAliasIdList omitted.

// se_ConnectionAliasPermission omitted.

// se_CopyWorkspaceImageRequest omitted.

// se_CreateAccountLinkInvitationRequest omitted.

// se_CreateConnectClientAddInRequest omitted.

// se_CreateConnectionAliasRequest omitted.

// se_CreateIpGroupRequest omitted.

// se_CreateStandbyWorkspacesRequest omitted.

// se_CreateTagsRequest omitted.

// se_CreateUpdatedWorkspaceImageRequest omitted.

// se_CreateWorkspaceBundleRequest omitted.

// se_CreateWorkspaceImageRequest omitted.

// se_CreateWorkspacesPoolRequest omitted.

// se_CreateWorkspacesRequest omitted.

/**
 * serializeAws_json1_1DefaultImportClientBrandingAttributes
 */
const se_DefaultImportClientBrandingAttributes = (
  input: DefaultImportClientBrandingAttributes,
  context: __SerdeContext
): any => {
  return take(input, {
    ForgotPasswordLink: [],
    LoginMessage: _json,
    Logo: context.base64Encoder,
    SupportEmail: [],
    SupportLink: [],
  });
};

// se_DeletableCertificateBasedAuthPropertiesList omitted.

// se_DeletableSamlPropertiesList omitted.

// se_DeleteAccountLinkInvitationRequest omitted.

// se_DeleteClientBrandingRequest omitted.

// se_DeleteConnectClientAddInRequest omitted.

// se_DeleteConnectionAliasRequest omitted.

// se_DeleteIpGroupRequest omitted.

// se_DeleteTagsRequest omitted.

// se_DeleteWorkspaceBundleRequest omitted.

// se_DeleteWorkspaceImageRequest omitted.

// se_DeployWorkspaceApplicationsRequest omitted.

// se_DeregisterWorkspaceDirectoryRequest omitted.

// se_DescribeAccountModificationsRequest omitted.

// se_DescribeAccountRequest omitted.

// se_DescribeApplicationAssociationsRequest omitted.

// se_DescribeApplicationsRequest omitted.

// se_DescribeBundleAssociationsRequest omitted.

// se_DescribeClientBrandingRequest omitted.

// se_DescribeClientPropertiesRequest omitted.

// se_DescribeConnectClientAddInsRequest omitted.

// se_DescribeConnectionAliasesRequest omitted.

// se_DescribeConnectionAliasPermissionsRequest omitted.

// se_DescribeCustomWorkspaceImageImportRequest omitted.

// se_DescribeImageAssociationsRequest omitted.

// se_DescribeIpGroupsRequest omitted.

// se_DescribeTagsRequest omitted.

// se_DescribeWorkspaceAssociationsRequest omitted.

// se_DescribeWorkspaceBundlesRequest omitted.

// se_DescribeWorkspaceDirectoriesFilter omitted.

// se_DescribeWorkspaceDirectoriesFilterList omitted.

// se_DescribeWorkspaceDirectoriesFilterValues omitted.

// se_DescribeWorkspaceDirectoriesRequest omitted.

// se_DescribeWorkspaceImagePermissionsRequest omitted.

// se_DescribeWorkspaceImagesRequest omitted.

// se_DescribeWorkspacesConnectionStatusRequest omitted.

// se_DescribeWorkspaceSnapshotsRequest omitted.

// se_DescribeWorkspacesPoolSessionsRequest omitted.

// se_DescribeWorkspacesPoolsFilter omitted.

// se_DescribeWorkspacesPoolsFilters omitted.

// se_DescribeWorkspacesPoolsFilterValues omitted.

// se_DescribeWorkspacesPoolsRequest omitted.

// se_DescribeWorkspacesRequest omitted.

// se_DirectoryIdList omitted.

// se_DisassociateConnectionAliasRequest omitted.

// se_DisassociateIpGroupsRequest omitted.

// se_DisassociateWorkspaceApplicationRequest omitted.

// se_GetAccountLinkRequest omitted.

// se_GlobalAcceleratorForDirectory omitted.

// se_GlobalAcceleratorForWorkSpace omitted.

// se_ImageAssociatedResourceTypeList omitted.

// se_ImageSourceIdentifier omitted.

/**
 * serializeAws_json1_1ImportClientBrandingRequest
 */
const se_ImportClientBrandingRequest = (input: ImportClientBrandingRequest, context: __SerdeContext): any => {
  return take(input, {
    DeviceTypeAndroid: (_) => se_DefaultImportClientBrandingAttributes(_, context),
    DeviceTypeIos: (_) => se_IosImportClientBrandingAttributes(_, context),
    DeviceTypeLinux: (_) => se_DefaultImportClientBrandingAttributes(_, context),
    DeviceTypeOsx: (_) => se_DefaultImportClientBrandingAttributes(_, context),
    DeviceTypeWeb: (_) => se_DefaultImportClientBrandingAttributes(_, context),
    DeviceTypeWindows: (_) => se_DefaultImportClientBrandingAttributes(_, context),
    ResourceId: [],
  });
};

// se_ImportCustomWorkspaceImageRequest omitted.

// se_ImportWorkspaceImageRequest omitted.

// se_InternetFallbackProtocolList omitted.

/**
 * serializeAws_json1_1IosImportClientBrandingAttributes
 */
const se_IosImportClientBrandingAttributes = (
  input: IosImportClientBrandingAttributes,
  context: __SerdeContext
): any => {
  return take(input, {
    ForgotPasswordLink: [],
    LoginMessage: _json,
    Logo: context.base64Encoder,
    Logo2x: context.base64Encoder,
    Logo3x: context.base64Encoder,
    SupportEmail: [],
    SupportLink: [],
  });
};

// se_IpGroupIdList omitted.

// se_IpRevokedRuleList omitted.

// se_IpRuleItem omitted.

// se_IpRuleList omitted.

// se_LinkStatusFilterList omitted.

// se_ListAccountLinksRequest omitted.

// se_ListAvailableManagementCidrRangesRequest omitted.

// se_LoginMessage omitted.

// se_MicrosoftEntraConfig omitted.

// se_MigrateWorkspaceRequest omitted.

// se_ModifyAccountRequest omitted.

// se_ModifyCertificateBasedAuthPropertiesRequest omitted.

// se_ModifyClientPropertiesRequest omitted.

// se_ModifyEndpointEncryptionModeRequest omitted.

// se_ModifySamlPropertiesRequest omitted.

// se_ModifySelfservicePermissionsRequest omitted.

// se_ModifyStreamingPropertiesRequest omitted.

// se_ModifyWorkspaceAccessPropertiesRequest omitted.

// se_ModifyWorkspaceCreationPropertiesRequest omitted.

// se_ModifyWorkspacePropertiesRequest omitted.

// se_ModifyWorkspaceStateRequest omitted.

// se_OperatingSystemNameList omitted.

// se_ProtocolList omitted.

// se_RebootRequest omitted.

// se_RebootWorkspaceRequests omitted.

// se_RebootWorkspacesRequest omitted.

// se_RebuildRequest omitted.

// se_RebuildWorkspaceRequests omitted.

// se_RebuildWorkspacesRequest omitted.

// se_RegisterWorkspaceDirectoryRequest omitted.

// se_RejectAccountLinkInvitationRequest omitted.

// se_ResourceIdList omitted.

// se_RestoreWorkspaceRequest omitted.

// se_RevokeIpRulesRequest omitted.

// se_RootStorage omitted.

// se_SamlProperties omitted.

// se_SelfservicePermissions omitted.

// se_StandbyWorkspace omitted.

// se_StandbyWorkspacesList omitted.

// se_StartRequest omitted.

// se_StartWorkspaceRequests omitted.

// se_StartWorkspacesPoolRequest omitted.

// se_StartWorkspacesRequest omitted.

// se_StopRequest omitted.

// se_StopWorkspaceRequests omitted.

// se_StopWorkspacesPoolRequest omitted.

// se_StopWorkspacesRequest omitted.

// se_StorageConnector omitted.

// se_StorageConnectors omitted.

// se_StreamingProperties omitted.

// se_SubnetIds omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TerminateRequest omitted.

// se_TerminateWorkspaceRequests omitted.

// se_TerminateWorkspacesPoolRequest omitted.

// se_TerminateWorkspacesPoolSessionRequest omitted.

// se_TerminateWorkspacesRequest omitted.

// se_TimeoutSettings omitted.

// se_UpdateConnectClientAddInRequest omitted.

// se_UpdateConnectionAliasPermissionRequest omitted.

// se_UpdateRulesOfIpGroupRequest omitted.

// se_UpdateWorkspaceBundleRequest omitted.

// se_UpdateWorkspaceImagePermissionRequest omitted.

// se_UpdateWorkspacesPoolRequest omitted.

// se_UserSetting omitted.

// se_UserSettings omitted.

// se_UserStorage omitted.

// se_WorkspaceAccessProperties omitted.

// se_WorkSpaceApplicationIdList omitted.

// se_WorkSpaceAssociatedResourceTypeList omitted.

// se_WorkspaceCreationProperties omitted.

// se_WorkspaceDirectoryNameList omitted.

// se_WorkspaceIdList omitted.

// se_WorkspaceImageIdList omitted.

// se_WorkspaceProperties omitted.

// se_WorkspaceRequest omitted.

// se_WorkspaceRequestList omitted.

// se_WorkspacesPoolIds omitted.

// de_AcceptAccountLinkInvitationResult omitted.

// de_AccessDeniedException omitted.

// de_AccessEndpoint omitted.

// de_AccessEndpointConfig omitted.

// de_AccessEndpointList omitted.

// de_AccountLink omitted.

// de_AccountLinkList omitted.

/**
 * deserializeAws_json1_1AccountModification
 */
const de_AccountModification = (output: any, context: __SerdeContext): AccountModification => {
  return take(output, {
    DedicatedTenancyManagementCidrRange: __expectString,
    DedicatedTenancySupport: __expectString,
    ErrorCode: __expectString,
    ErrorMessage: __expectString,
    ModificationState: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1AccountModificationList
 */
const de_AccountModificationList = (output: any, context: __SerdeContext): AccountModification[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AccountModification(entry, context);
    });
  return retVal;
};

// de_ActiveDirectoryConfig omitted.

// de_ApplicationNotSupportedException omitted.

/**
 * deserializeAws_json1_1ApplicationResourceAssociation
 */
const de_ApplicationResourceAssociation = (output: any, context: __SerdeContext): ApplicationResourceAssociation => {
  return take(output, {
    ApplicationId: __expectString,
    AssociatedResourceId: __expectString,
    AssociatedResourceType: __expectString,
    Created: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
    StateReason: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1ApplicationResourceAssociationList
 */
const de_ApplicationResourceAssociationList = (
  output: any,
  context: __SerdeContext
): ApplicationResourceAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ApplicationResourceAssociation(entry, context);
    });
  return retVal;
};

// de_ApplicationSettingsResponse omitted.

// de_AssociateConnectionAliasResult omitted.

// de_AssociateIpGroupsResult omitted.

/**
 * deserializeAws_json1_1AssociateWorkspaceApplicationResult
 */
const de_AssociateWorkspaceApplicationResult = (
  output: any,
  context: __SerdeContext
): AssociateWorkspaceApplicationResult => {
  return take(output, {
    Association: (_: any) => de_WorkspaceResourceAssociation(_, context),
  }) as any;
};

// de_AssociationStateReason omitted.

// de_AuthorizeIpRulesResult omitted.

/**
 * deserializeAws_json1_1BundleList
 */
const de_BundleList = (output: any, context: __SerdeContext): WorkspaceBundle[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_WorkspaceBundle(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BundleResourceAssociation
 */
const de_BundleResourceAssociation = (output: any, context: __SerdeContext): BundleResourceAssociation => {
  return take(output, {
    AssociatedResourceId: __expectString,
    AssociatedResourceType: __expectString,
    BundleId: __expectString,
    Created: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
    StateReason: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1BundleResourceAssociationList
 */
const de_BundleResourceAssociationList = (output: any, context: __SerdeContext): BundleResourceAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BundleResourceAssociation(entry, context);
    });
  return retVal;
};

// de_CapacityStatus omitted.

// de_CertificateBasedAuthProperties omitted.

// de_ClientProperties omitted.

// de_ClientPropertiesList omitted.

// de_ClientPropertiesResult omitted.

// de_ComputeList omitted.

// de_ComputeNotCompatibleException omitted.

// de_ComputeType omitted.

// de_ConflictException omitted.

// de_ConnectClientAddIn omitted.

// de_ConnectClientAddInList omitted.

// de_ConnectionAlias omitted.

// de_ConnectionAliasAssociation omitted.

// de_ConnectionAliasAssociationList omitted.

// de_ConnectionAliasList omitted.

// de_ConnectionAliasPermission omitted.

// de_ConnectionAliasPermissions omitted.

// de_CopyWorkspaceImageResult omitted.

// de_CreateAccountLinkInvitationResult omitted.

// de_CreateConnectClientAddInResult omitted.

// de_CreateConnectionAliasResult omitted.

// de_CreateIpGroupResult omitted.

// de_CreateStandbyWorkspacesResult omitted.

// de_CreateTagsResult omitted.

// de_CreateUpdatedWorkspaceImageResult omitted.

/**
 * deserializeAws_json1_1CreateWorkspaceBundleResult
 */
const de_CreateWorkspaceBundleResult = (output: any, context: __SerdeContext): CreateWorkspaceBundleResult => {
  return take(output, {
    WorkspaceBundle: (_: any) => de_WorkspaceBundle(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateWorkspaceImageResult
 */
const de_CreateWorkspaceImageResult = (output: any, context: __SerdeContext): CreateWorkspaceImageResult => {
  return take(output, {
    Created: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    ImageId: __expectString,
    Name: __expectString,
    OperatingSystem: _json,
    OwnerAccountId: __expectString,
    RequiredTenancy: __expectString,
    State: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateWorkspacesPoolResult
 */
const de_CreateWorkspacesPoolResult = (output: any, context: __SerdeContext): CreateWorkspacesPoolResult => {
  return take(output, {
    WorkspacesPool: (_: any) => de_WorkspacesPool(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateWorkspacesResult
 */
const de_CreateWorkspacesResult = (output: any, context: __SerdeContext): CreateWorkspacesResult => {
  return take(output, {
    FailedRequests: _json,
    PendingRequests: (_: any) => de_WorkspaceList(_, context),
  }) as any;
};

// de_CustomWorkspaceImageImportErrorDetails omitted.

// de_CustomWorkspaceImageImportErrorDetailsList omitted.

/**
 * deserializeAws_json1_1DataReplicationSettings
 */
const de_DataReplicationSettings = (output: any, context: __SerdeContext): DataReplicationSettings => {
  return take(output, {
    DataReplication: __expectString,
    RecoverySnapshotTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_DedicatedTenancyCidrRangeList omitted.

// de_DefaultClientBrandingAttributes omitted.

// de_DefaultWorkspaceCreationProperties omitted.

// de_DeleteAccountLinkInvitationResult omitted.

// de_DeleteClientBrandingResult omitted.

// de_DeleteConnectClientAddInResult omitted.

// de_DeleteConnectionAliasResult omitted.

// de_DeleteIpGroupResult omitted.

// de_DeleteTagsResult omitted.

// de_DeleteWorkspaceBundleResult omitted.

// de_DeleteWorkspaceImageResult omitted.

/**
 * deserializeAws_json1_1DeployWorkspaceApplicationsResult
 */
const de_DeployWorkspaceApplicationsResult = (
  output: any,
  context: __SerdeContext
): DeployWorkspaceApplicationsResult => {
  return take(output, {
    Deployment: (_: any) => de_WorkSpaceApplicationDeployment(_, context),
  }) as any;
};

// de_DeregisterWorkspaceDirectoryResult omitted.

/**
 * deserializeAws_json1_1DescribeAccountModificationsResult
 */
const de_DescribeAccountModificationsResult = (
  output: any,
  context: __SerdeContext
): DescribeAccountModificationsResult => {
  return take(output, {
    AccountModifications: (_: any) => de_AccountModificationList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_DescribeAccountResult omitted.

/**
 * deserializeAws_json1_1DescribeApplicationAssociationsResult
 */
const de_DescribeApplicationAssociationsResult = (
  output: any,
  context: __SerdeContext
): DescribeApplicationAssociationsResult => {
  return take(output, {
    Associations: (_: any) => de_ApplicationResourceAssociationList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeApplicationsResult
 */
const de_DescribeApplicationsResult = (output: any, context: __SerdeContext): DescribeApplicationsResult => {
  return take(output, {
    Applications: (_: any) => de_WorkSpaceApplicationList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeBundleAssociationsResult
 */
const de_DescribeBundleAssociationsResult = (
  output: any,
  context: __SerdeContext
): DescribeBundleAssociationsResult => {
  return take(output, {
    Associations: (_: any) => de_BundleResourceAssociationList(_, context),
  }) as any;
};

// de_DescribeClientBrandingResult omitted.

// de_DescribeClientPropertiesResult omitted.

// de_DescribeConnectClientAddInsResult omitted.

// de_DescribeConnectionAliasesResult omitted.

// de_DescribeConnectionAliasPermissionsResult omitted.

/**
 * deserializeAws_json1_1DescribeCustomWorkspaceImageImportResult
 */
const de_DescribeCustomWorkspaceImageImportResult = (
  output: any,
  context: __SerdeContext
): DescribeCustomWorkspaceImageImportResult => {
  return take(output, {
    Created: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ErrorDetails: _json,
    ImageBuilderInstanceId: __expectString,
    ImageId: __expectString,
    ImageSource: (_: any) => _json(__expectUnion(_)),
    InfrastructureConfigurationArn: __expectString,
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeImageAssociationsResult
 */
const de_DescribeImageAssociationsResult = (output: any, context: __SerdeContext): DescribeImageAssociationsResult => {
  return take(output, {
    Associations: (_: any) => de_ImageResourceAssociationList(_, context),
  }) as any;
};

// de_DescribeIpGroupsResult omitted.

// de_DescribeTagsResult omitted.

/**
 * deserializeAws_json1_1DescribeWorkspaceAssociationsResult
 */
const de_DescribeWorkspaceAssociationsResult = (
  output: any,
  context: __SerdeContext
): DescribeWorkspaceAssociationsResult => {
  return take(output, {
    Associations: (_: any) => de_WorkspaceResourceAssociationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeWorkspaceBundlesResult
 */
const de_DescribeWorkspaceBundlesResult = (output: any, context: __SerdeContext): DescribeWorkspaceBundlesResult => {
  return take(output, {
    Bundles: (_: any) => de_BundleList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_DescribeWorkspaceDirectoriesResult omitted.

// de_DescribeWorkspaceImagePermissionsResult omitted.

/**
 * deserializeAws_json1_1DescribeWorkspaceImagesResult
 */
const de_DescribeWorkspaceImagesResult = (output: any, context: __SerdeContext): DescribeWorkspaceImagesResult => {
  return take(output, {
    Images: (_: any) => de_WorkspaceImageList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeWorkspacesConnectionStatusResult
 */
const de_DescribeWorkspacesConnectionStatusResult = (
  output: any,
  context: __SerdeContext
): DescribeWorkspacesConnectionStatusResult => {
  return take(output, {
    NextToken: __expectString,
    WorkspacesConnectionStatus: (_: any) => de_WorkspaceConnectionStatusList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeWorkspaceSnapshotsResult
 */
const de_DescribeWorkspaceSnapshotsResult = (
  output: any,
  context: __SerdeContext
): DescribeWorkspaceSnapshotsResult => {
  return take(output, {
    RebuildSnapshots: (_: any) => de_SnapshotList(_, context),
    RestoreSnapshots: (_: any) => de_SnapshotList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeWorkspacesPoolSessionsResult
 */
const de_DescribeWorkspacesPoolSessionsResult = (
  output: any,
  context: __SerdeContext
): DescribeWorkspacesPoolSessionsResult => {
  return take(output, {
    NextToken: __expectString,
    Sessions: (_: any) => de_WorkspacesPoolSessions(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeWorkspacesPoolsResult
 */
const de_DescribeWorkspacesPoolsResult = (output: any, context: __SerdeContext): DescribeWorkspacesPoolsResult => {
  return take(output, {
    NextToken: __expectString,
    WorkspacesPools: (_: any) => de_WorkspacesPools(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeWorkspacesResult
 */
const de_DescribeWorkspacesResult = (output: any, context: __SerdeContext): DescribeWorkspacesResult => {
  return take(output, {
    NextToken: __expectString,
    Workspaces: (_: any) => de_WorkspaceList(_, context),
  }) as any;
};

// de_DirectoryList omitted.

// de_DisassociateConnectionAliasResult omitted.

// de_DisassociateIpGroupsResult omitted.

/**
 * deserializeAws_json1_1DisassociateWorkspaceApplicationResult
 */
const de_DisassociateWorkspaceApplicationResult = (
  output: any,
  context: __SerdeContext
): DisassociateWorkspaceApplicationResult => {
  return take(output, {
    Association: (_: any) => de_WorkspaceResourceAssociation(_, context),
  }) as any;
};

// de_DnsIpAddresses omitted.

// de_DnsIpv6Addresses omitted.

// de_ErrorDetails omitted.

// de_ErrorDetailsList omitted.

// de_FailedCreateStandbyWorkspacesRequest omitted.

// de_FailedCreateStandbyWorkspacesRequestList omitted.

// de_FailedCreateWorkspaceRequest omitted.

// de_FailedCreateWorkspaceRequests omitted.

// de_FailedRebootWorkspaceRequests omitted.

// de_FailedRebuildWorkspaceRequests omitted.

// de_FailedStartWorkspaceRequests omitted.

// de_FailedStopWorkspaceRequests omitted.

// de_FailedTerminateWorkspaceRequests omitted.

// de_FailedWorkspaceChangeRequest omitted.

// de_GetAccountLinkResult omitted.

// de_GlobalAcceleratorForDirectory omitted.

// de_GlobalAcceleratorForWorkSpace omitted.

// de_IDCConfig omitted.

// de_ImagePermission omitted.

// de_ImagePermissions omitted.

/**
 * deserializeAws_json1_1ImageResourceAssociation
 */
const de_ImageResourceAssociation = (output: any, context: __SerdeContext): ImageResourceAssociation => {
  return take(output, {
    AssociatedResourceId: __expectString,
    AssociatedResourceType: __expectString,
    Created: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ImageId: __expectString,
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
    StateReason: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1ImageResourceAssociationList
 */
const de_ImageResourceAssociationList = (output: any, context: __SerdeContext): ImageResourceAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ImageResourceAssociation(entry, context);
    });
  return retVal;
};

// de_ImageSourceIdentifier omitted.

// de_ImportClientBrandingResult omitted.

// de_ImportCustomWorkspaceImageResult omitted.

// de_ImportWorkspaceImageResult omitted.

// de_IncompatibleApplicationsException omitted.

// de_InternalServerException omitted.

// de_InternetFallbackProtocolList omitted.

// de_InvalidParameterCombinationException omitted.

// de_InvalidParameterValuesException omitted.

// de_InvalidResourceStateException omitted.

// de_IosClientBrandingAttributes omitted.

// de_IpGroupIdList omitted.

// de_IpRuleItem omitted.

// de_IpRuleList omitted.

// de_ListAccountLinksResult omitted.

// de_ListAvailableManagementCidrRangesResult omitted.

// de_LoginMessage omitted.

// de_MicrosoftEntraConfig omitted.

// de_MigrateWorkspaceResult omitted.

// de_ModificationState omitted.

// de_ModificationStateList omitted.

// de_ModifyAccountResult omitted.

// de_ModifyCertificateBasedAuthPropertiesResult omitted.

// de_ModifyClientPropertiesResult omitted.

// de_ModifyEndpointEncryptionModeResponse omitted.

// de_ModifySamlPropertiesResult omitted.

// de_ModifySelfservicePermissionsResult omitted.

// de_ModifyStreamingPropertiesResult omitted.

// de_ModifyWorkspaceAccessPropertiesResult omitted.

// de_ModifyWorkspaceCreationPropertiesResult omitted.

// de_ModifyWorkspacePropertiesResult omitted.

// de_ModifyWorkspaceStateResult omitted.

// de_NetworkAccessConfiguration omitted.

// de_OperatingSystem omitted.

// de_OperatingSystemNameList omitted.

// de_OperatingSystemNotCompatibleException omitted.

// de_OperationInProgressException omitted.

// de_OperationNotSupportedException omitted.

// de_PendingCreateStandbyWorkspacesRequest omitted.

// de_PendingCreateStandbyWorkspacesRequestList omitted.

// de_ProtocolList omitted.

// de_RebootWorkspacesResult omitted.

// de_RebuildWorkspacesResult omitted.

// de_RegisterWorkspaceDirectoryResult omitted.

// de_RejectAccountLinkInvitationResult omitted.

// de_RelatedWorkspaceProperties omitted.

// de_RelatedWorkspaces omitted.

// de_ResourceAlreadyExistsException omitted.

// de_ResourceAssociatedException omitted.

// de_ResourceCreationFailedException omitted.

// de_ResourceInUseException omitted.

// de_ResourceLimitExceededException omitted.

// de_ResourceNotFoundException omitted.

// de_ResourceUnavailableException omitted.

// de_RestoreWorkspaceResult omitted.

// de_RevokeIpRulesResult omitted.

// de_RootStorage omitted.

// de_SamlProperties omitted.

// de_SelfservicePermissions omitted.

/**
 * deserializeAws_json1_1Snapshot
 */
const de_Snapshot = (output: any, context: __SerdeContext): Snapshot => {
  return take(output, {
    SnapshotTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1SnapshotList
 */
const de_SnapshotList = (output: any, context: __SerdeContext): Snapshot[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Snapshot(entry, context);
    });
  return retVal;
};

// de_StandbyWorkspace omitted.

/**
 * deserializeAws_json1_1StandbyWorkspacesProperties
 */
const de_StandbyWorkspacesProperties = (output: any, context: __SerdeContext): StandbyWorkspacesProperties => {
  return take(output, {
    DataReplication: __expectString,
    RecoverySnapshotTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StandbyWorkspaceId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1StandbyWorkspacesPropertiesList
 */
const de_StandbyWorkspacesPropertiesList = (output: any, context: __SerdeContext): StandbyWorkspacesProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StandbyWorkspacesProperties(entry, context);
    });
  return retVal;
};

// de_StartWorkspacesPoolResult omitted.

// de_StartWorkspacesResult omitted.

// de_StopWorkspacesPoolResult omitted.

// de_StopWorkspacesResult omitted.

// de_StorageConnector omitted.

// de_StorageConnectors omitted.

// de_StreamingProperties omitted.

// de_SubnetIds omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TerminateWorkspacesPoolResult omitted.

// de_TerminateWorkspacesPoolSessionResult omitted.

// de_TerminateWorkspacesResult omitted.

// de_TimeoutSettings omitted.

// de_UnsupportedNetworkConfigurationException omitted.

// de_UnsupportedWorkspaceConfigurationException omitted.

// de_UpdateConnectClientAddInResult omitted.

// de_UpdateConnectionAliasPermissionResult omitted.

// de_UpdateResult omitted.

// de_UpdateRulesOfIpGroupResult omitted.

// de_UpdateWorkspaceBundleResult omitted.

// de_UpdateWorkspaceImagePermissionResult omitted.

/**
 * deserializeAws_json1_1UpdateWorkspacesPoolResult
 */
const de_UpdateWorkspacesPoolResult = (output: any, context: __SerdeContext): UpdateWorkspacesPoolResult => {
  return take(output, {
    WorkspacesPool: (_: any) => de_WorkspacesPool(_, context),
  }) as any;
};

// de_UserSetting omitted.

// de_UserSettings omitted.

// de_UserStorage omitted.

// de_ValidationException omitted.

/**
 * deserializeAws_json1_1Workspace
 */
const de_Workspace = (output: any, context: __SerdeContext): Workspace => {
  return take(output, {
    BundleId: __expectString,
    ComputerName: __expectString,
    DataReplicationSettings: (_: any) => de_DataReplicationSettings(_, context),
    DirectoryId: __expectString,
    ErrorCode: __expectString,
    ErrorMessage: __expectString,
    IpAddress: __expectString,
    Ipv6Address: __expectString,
    ModificationStates: _json,
    RelatedWorkspaces: _json,
    RootVolumeEncryptionEnabled: __expectBoolean,
    StandbyWorkspacesProperties: (_: any) => de_StandbyWorkspacesPropertiesList(_, context),
    State: __expectString,
    SubnetId: __expectString,
    UserName: __expectString,
    UserVolumeEncryptionEnabled: __expectBoolean,
    VolumeEncryptionKey: __expectString,
    WorkspaceId: __expectString,
    WorkspaceName: __expectString,
    WorkspaceProperties: _json,
  }) as any;
};

// de_WorkspaceAccessProperties omitted.

/**
 * deserializeAws_json1_1WorkSpaceApplication
 */
const de_WorkSpaceApplication = (output: any, context: __SerdeContext): WorkSpaceApplication => {
  return take(output, {
    ApplicationId: __expectString,
    Created: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    LicenseType: __expectString,
    Name: __expectString,
    Owner: __expectString,
    State: __expectString,
    SupportedComputeTypeNames: _json,
    SupportedOperatingSystemNames: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1WorkSpaceApplicationDeployment
 */
const de_WorkSpaceApplicationDeployment = (output: any, context: __SerdeContext): WorkSpaceApplicationDeployment => {
  return take(output, {
    Associations: (_: any) => de_WorkspaceResourceAssociationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1WorkSpaceApplicationList
 */
const de_WorkSpaceApplicationList = (output: any, context: __SerdeContext): WorkSpaceApplication[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_WorkSpaceApplication(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1WorkspaceBundle
 */
const de_WorkspaceBundle = (output: any, context: __SerdeContext): WorkspaceBundle => {
  return take(output, {
    BundleId: __expectString,
    BundleType: __expectString,
    ComputeType: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    ImageId: __expectString,
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    Owner: __expectString,
    RootStorage: _json,
    State: __expectString,
    UserStorage: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1WorkspaceConnectionStatus
 */
const de_WorkspaceConnectionStatus = (output: any, context: __SerdeContext): WorkspaceConnectionStatus => {
  return take(output, {
    ConnectionState: __expectString,
    ConnectionStateCheckTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastKnownUserConnectionTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    WorkspaceId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1WorkspaceConnectionStatusList
 */
const de_WorkspaceConnectionStatusList = (output: any, context: __SerdeContext): WorkspaceConnectionStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_WorkspaceConnectionStatus(entry, context);
    });
  return retVal;
};

// de_WorkspaceDirectory omitted.

/**
 * deserializeAws_json1_1WorkspaceImage
 */
const de_WorkspaceImage = (output: any, context: __SerdeContext): WorkspaceImage => {
  return take(output, {
    Created: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    ErrorCode: __expectString,
    ErrorDetails: _json,
    ErrorMessage: __expectString,
    ImageId: __expectString,
    Name: __expectString,
    OperatingSystem: _json,
    OwnerAccountId: __expectString,
    RequiredTenancy: __expectString,
    State: __expectString,
    Updates: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1WorkspaceImageList
 */
const de_WorkspaceImageList = (output: any, context: __SerdeContext): WorkspaceImage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_WorkspaceImage(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1WorkspaceList
 */
const de_WorkspaceList = (output: any, context: __SerdeContext): Workspace[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Workspace(entry, context);
    });
  return retVal;
};

// de_WorkspaceProperties omitted.

// de_WorkspaceRequest omitted.

/**
 * deserializeAws_json1_1WorkspaceResourceAssociation
 */
const de_WorkspaceResourceAssociation = (output: any, context: __SerdeContext): WorkspaceResourceAssociation => {
  return take(output, {
    AssociatedResourceId: __expectString,
    AssociatedResourceType: __expectString,
    Created: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
    StateReason: _json,
    WorkspaceId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1WorkspaceResourceAssociationList
 */
const de_WorkspaceResourceAssociationList = (output: any, context: __SerdeContext): WorkspaceResourceAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_WorkspaceResourceAssociation(entry, context);
    });
  return retVal;
};

// de_WorkspacesDefaultRoleNotFoundException omitted.

// de_WorkspacesIpGroup omitted.

// de_WorkspacesIpGroupsList omitted.

/**
 * deserializeAws_json1_1WorkspacesPool
 */
const de_WorkspacesPool = (output: any, context: __SerdeContext): WorkspacesPool => {
  return take(output, {
    ApplicationSettings: _json,
    BundleId: __expectString,
    CapacityStatus: _json,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    DirectoryId: __expectString,
    Errors: _json,
    PoolArn: __expectString,
    PoolId: __expectString,
    PoolName: __expectString,
    RunningMode: __expectString,
    State: __expectString,
    TimeoutSettings: _json,
  }) as any;
};

// de_WorkspacesPoolError omitted.

// de_WorkspacesPoolErrors omitted.

/**
 * deserializeAws_json1_1WorkspacesPools
 */
const de_WorkspacesPools = (output: any, context: __SerdeContext): WorkspacesPool[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_WorkspacesPool(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1WorkspacesPoolSession
 */
const de_WorkspacesPoolSession = (output: any, context: __SerdeContext): WorkspacesPoolSession => {
  return take(output, {
    AuthenticationType: __expectString,
    ConnectionState: __expectString,
    ExpirationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InstanceId: __expectString,
    NetworkAccessConfiguration: _json,
    PoolId: __expectString,
    SessionId: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    UserId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1WorkspacesPoolSessions
 */
const de_WorkspacesPoolSessions = (output: any, context: __SerdeContext): WorkspacesPoolSession[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_WorkspacesPoolSession(entry, context);
    });
  return retVal;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const throwDefaultError = withBaseException(__BaseException);
const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `WorkspacesService.${operation}`,
  };
}
