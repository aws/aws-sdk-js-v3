// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  AssociateConnectionAliasCommandInput,
  AssociateConnectionAliasCommandOutput,
} from "../commands/AssociateConnectionAliasCommand";
import { AssociateIpGroupsCommandInput, AssociateIpGroupsCommandOutput } from "../commands/AssociateIpGroupsCommand";
import { AuthorizeIpRulesCommandInput, AuthorizeIpRulesCommandOutput } from "../commands/AuthorizeIpRulesCommand";
import { CopyWorkspaceImageCommandInput, CopyWorkspaceImageCommandOutput } from "../commands/CopyWorkspaceImageCommand";
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
  DeregisterWorkspaceDirectoryCommandInput,
  DeregisterWorkspaceDirectoryCommandOutput,
} from "../commands/DeregisterWorkspaceDirectoryCommand";
import { DescribeAccountCommandInput, DescribeAccountCommandOutput } from "../commands/DescribeAccountCommand";
import {
  DescribeAccountModificationsCommandInput,
  DescribeAccountModificationsCommandOutput,
} from "../commands/DescribeAccountModificationsCommand";
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
import { DescribeIpGroupsCommandInput, DescribeIpGroupsCommandOutput } from "../commands/DescribeIpGroupsCommand";
import { DescribeTagsCommandInput, DescribeTagsCommandOutput } from "../commands/DescribeTagsCommand";
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
  DisassociateConnectionAliasCommandInput,
  DisassociateConnectionAliasCommandOutput,
} from "../commands/DisassociateConnectionAliasCommand";
import {
  DisassociateIpGroupsCommandInput,
  DisassociateIpGroupsCommandOutput,
} from "../commands/DisassociateIpGroupsCommand";
import {
  ImportClientBrandingCommandInput,
  ImportClientBrandingCommandOutput,
} from "../commands/ImportClientBrandingCommand";
import {
  ImportWorkspaceImageCommandInput,
  ImportWorkspaceImageCommandOutput,
} from "../commands/ImportWorkspaceImageCommand";
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
  ModifySamlPropertiesCommandInput,
  ModifySamlPropertiesCommandOutput,
} from "../commands/ModifySamlPropertiesCommand";
import {
  ModifySelfservicePermissionsCommandInput,
  ModifySelfservicePermissionsCommandOutput,
} from "../commands/ModifySelfservicePermissionsCommand";
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
import { RestoreWorkspaceCommandInput, RestoreWorkspaceCommandOutput } from "../commands/RestoreWorkspaceCommand";
import { RevokeIpRulesCommandInput, RevokeIpRulesCommandOutput } from "../commands/RevokeIpRulesCommand";
import { StartWorkspacesCommandInput, StartWorkspacesCommandOutput } from "../commands/StartWorkspacesCommand";
import { StopWorkspacesCommandInput, StopWorkspacesCommandOutput } from "../commands/StopWorkspacesCommand";
import {
  TerminateWorkspacesCommandInput,
  TerminateWorkspacesCommandOutput,
} from "../commands/TerminateWorkspacesCommand";
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
  AccessDeniedException,
  AccountModification,
  Application,
  AssociateConnectionAliasRequest,
  AssociateConnectionAliasResult,
  AssociateIpGroupsRequest,
  AssociateIpGroupsResult,
  AuthorizeIpRulesRequest,
  AuthorizeIpRulesResult,
  CertificateBasedAuthProperties,
  ClientDeviceType,
  ClientProperties,
  ClientPropertiesResult,
  ComputeType,
  ConnectClientAddIn,
  ConnectionAlias,
  ConnectionAliasAssociation,
  ConnectionAliasPermission,
  CopyWorkspaceImageRequest,
  CopyWorkspaceImageResult,
  CreateConnectClientAddInRequest,
  CreateConnectClientAddInResult,
  CreateConnectionAliasRequest,
  CreateConnectionAliasResult,
  CreateIpGroupRequest,
  CreateIpGroupResult,
  CreateStandbyWorkspacesRequest,
  CreateStandbyWorkspacesResult,
  CreateTagsRequest,
  CreateTagsResult,
  CreateUpdatedWorkspaceImageRequest,
  CreateUpdatedWorkspaceImageResult,
  CreateWorkspaceBundleRequest,
  CreateWorkspaceBundleResult,
  CreateWorkspaceImageRequest,
  CreateWorkspaceImageResult,
  CreateWorkspacesRequest,
  CreateWorkspacesResult,
  DefaultClientBrandingAttributes,
  DefaultImportClientBrandingAttributes,
  DefaultWorkspaceCreationProperties,
  DeletableCertificateBasedAuthProperty,
  DeletableSamlProperty,
  DeleteClientBrandingRequest,
  DeleteClientBrandingResult,
  DeleteConnectClientAddInRequest,
  DeleteConnectClientAddInResult,
  DeleteConnectionAliasRequest,
  DeleteConnectionAliasResult,
  DeleteIpGroupRequest,
  DeleteIpGroupResult,
  DeleteTagsRequest,
  DeleteTagsResult,
  DeleteWorkspaceBundleRequest,
  DeleteWorkspaceBundleResult,
  DeleteWorkspaceImageRequest,
  DeleteWorkspaceImageResult,
  DeregisterWorkspaceDirectoryRequest,
  DeregisterWorkspaceDirectoryResult,
  DescribeAccountModificationsRequest,
  DescribeAccountModificationsResult,
  DescribeAccountRequest,
  DescribeAccountResult,
  DescribeClientBrandingRequest,
  DescribeClientBrandingResult,
  DescribeClientPropertiesRequest,
  DescribeClientPropertiesResult,
  DescribeConnectClientAddInsRequest,
  DescribeConnectClientAddInsResult,
  DescribeConnectionAliasesRequest,
  DescribeConnectionAliasesResult,
  DescribeConnectionAliasPermissionsRequest,
  DescribeConnectionAliasPermissionsResult,
  DescribeIpGroupsRequest,
  DescribeIpGroupsResult,
  DescribeTagsRequest,
  DescribeTagsResult,
  DescribeWorkspaceBundlesRequest,
  DescribeWorkspaceBundlesResult,
  DescribeWorkspaceDirectoriesRequest,
  DescribeWorkspaceDirectoriesResult,
  DescribeWorkspaceImagePermissionsRequest,
  DescribeWorkspaceImagePermissionsResult,
  DescribeWorkspaceImagesRequest,
  DescribeWorkspaceImagesResult,
  DescribeWorkspacesConnectionStatusRequest,
  DescribeWorkspacesConnectionStatusResult,
  DescribeWorkspaceSnapshotsRequest,
  DescribeWorkspaceSnapshotsResult,
  DescribeWorkspacesRequest,
  DescribeWorkspacesResult,
  DisassociateConnectionAliasRequest,
  DisassociateConnectionAliasResult,
  DisassociateIpGroupsRequest,
  DisassociateIpGroupsResult,
  FailedCreateStandbyWorkspacesRequest,
  FailedCreateWorkspaceRequest,
  FailedWorkspaceChangeRequest,
  ImagePermission,
  ImportClientBrandingRequest,
  ImportClientBrandingResult,
  ImportWorkspaceImageRequest,
  ImportWorkspaceImageResult,
  InvalidParameterValuesException,
  InvalidResourceStateException,
  IosClientBrandingAttributes,
  IosImportClientBrandingAttributes,
  IpRuleItem,
  ListAvailableManagementCidrRangesRequest,
  ListAvailableManagementCidrRangesResult,
  MigrateWorkspaceRequest,
  MigrateWorkspaceResult,
  ModificationState,
  ModifyAccountRequest,
  ModifyAccountResult,
  ModifyCertificateBasedAuthPropertiesRequest,
  ModifyCertificateBasedAuthPropertiesResult,
  ModifyClientPropertiesRequest,
  ModifyClientPropertiesResult,
  ModifySamlPropertiesRequest,
  ModifySamlPropertiesResult,
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
  OperatingSystem,
  OperationInProgressException,
  OperationNotSupportedException,
  PendingCreateStandbyWorkspacesRequest,
  Protocol,
  RebootRequest,
  RebootWorkspacesRequest,
  RebootWorkspacesResult,
  RebuildRequest,
  RebuildWorkspacesRequest,
  RebuildWorkspacesResult,
  RegisterWorkspaceDirectoryRequest,
  RegisterWorkspaceDirectoryResult,
  RelatedWorkspaceProperties,
  ResourceAlreadyExistsException,
  ResourceAssociatedException,
  ResourceCreationFailedException,
  ResourceLimitExceededException,
  ResourceNotFoundException,
  ResourceUnavailableException,
  RestoreWorkspaceRequest,
  RestoreWorkspaceResult,
  RevokeIpRulesRequest,
  RevokeIpRulesResult,
  RootStorage,
  SamlProperties,
  SelfservicePermissions,
  Snapshot,
  StandbyWorkspace,
  StartRequest,
  StartWorkspacesRequest,
  StartWorkspacesResult,
  StopRequest,
  StopWorkspacesRequest,
  StopWorkspacesResult,
  Tag,
  TerminateRequest,
  TerminateWorkspacesRequest,
  TerminateWorkspacesResult,
  UnsupportedNetworkConfigurationException,
  UnsupportedWorkspaceConfigurationException,
  UpdateConnectClientAddInRequest,
  UpdateConnectClientAddInResult,
  UpdateConnectionAliasPermissionRequest,
  UpdateConnectionAliasPermissionResult,
  UpdateResult,
  UpdateRulesOfIpGroupRequest,
  UpdateRulesOfIpGroupResult,
  UpdateWorkspaceBundleRequest,
  UpdateWorkspaceBundleResult,
  UpdateWorkspaceImagePermissionRequest,
  UpdateWorkspaceImagePermissionResult,
  UserStorage,
  Workspace,
  WorkspaceAccessProperties,
  WorkspaceBundle,
  WorkspaceConnectionStatus,
  WorkspaceCreationProperties,
  WorkspaceDirectory,
  WorkspaceImage,
  WorkspaceProperties,
  WorkspaceRequest,
  WorkspacesDefaultRoleNotFoundException,
  WorkspacesIpGroup,
} from "../models/models_0";
import { WorkSpacesServiceException as __BaseException } from "../models/WorkSpacesServiceException";

/**
 * serializeAws_json1_1AssociateConnectionAliasCommand
 */
export const se_AssociateConnectionAliasCommand = async (
  input: AssociateConnectionAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.AssociateConnectionAlias",
  };
  let body: any;
  body = JSON.stringify(se_AssociateConnectionAliasRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateIpGroupsCommand
 */
export const se_AssociateIpGroupsCommand = async (
  input: AssociateIpGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.AssociateIpGroups",
  };
  let body: any;
  body = JSON.stringify(se_AssociateIpGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AuthorizeIpRulesCommand
 */
export const se_AuthorizeIpRulesCommand = async (
  input: AuthorizeIpRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.AuthorizeIpRules",
  };
  let body: any;
  body = JSON.stringify(se_AuthorizeIpRulesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CopyWorkspaceImageCommand
 */
export const se_CopyWorkspaceImageCommand = async (
  input: CopyWorkspaceImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.CopyWorkspaceImage",
  };
  let body: any;
  body = JSON.stringify(se_CopyWorkspaceImageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateConnectClientAddInCommand
 */
export const se_CreateConnectClientAddInCommand = async (
  input: CreateConnectClientAddInCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.CreateConnectClientAddIn",
  };
  let body: any;
  body = JSON.stringify(se_CreateConnectClientAddInRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateConnectionAliasCommand
 */
export const se_CreateConnectionAliasCommand = async (
  input: CreateConnectionAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.CreateConnectionAlias",
  };
  let body: any;
  body = JSON.stringify(se_CreateConnectionAliasRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateIpGroupCommand
 */
export const se_CreateIpGroupCommand = async (
  input: CreateIpGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.CreateIpGroup",
  };
  let body: any;
  body = JSON.stringify(se_CreateIpGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateStandbyWorkspacesCommand
 */
export const se_CreateStandbyWorkspacesCommand = async (
  input: CreateStandbyWorkspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.CreateStandbyWorkspaces",
  };
  let body: any;
  body = JSON.stringify(se_CreateStandbyWorkspacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateTagsCommand
 */
export const se_CreateTagsCommand = async (
  input: CreateTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.CreateTags",
  };
  let body: any;
  body = JSON.stringify(se_CreateTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateUpdatedWorkspaceImageCommand
 */
export const se_CreateUpdatedWorkspaceImageCommand = async (
  input: CreateUpdatedWorkspaceImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.CreateUpdatedWorkspaceImage",
  };
  let body: any;
  body = JSON.stringify(se_CreateUpdatedWorkspaceImageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateWorkspaceBundleCommand
 */
export const se_CreateWorkspaceBundleCommand = async (
  input: CreateWorkspaceBundleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.CreateWorkspaceBundle",
  };
  let body: any;
  body = JSON.stringify(se_CreateWorkspaceBundleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateWorkspaceImageCommand
 */
export const se_CreateWorkspaceImageCommand = async (
  input: CreateWorkspaceImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.CreateWorkspaceImage",
  };
  let body: any;
  body = JSON.stringify(se_CreateWorkspaceImageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateWorkspacesCommand
 */
export const se_CreateWorkspacesCommand = async (
  input: CreateWorkspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.CreateWorkspaces",
  };
  let body: any;
  body = JSON.stringify(se_CreateWorkspacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteClientBrandingCommand
 */
export const se_DeleteClientBrandingCommand = async (
  input: DeleteClientBrandingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DeleteClientBranding",
  };
  let body: any;
  body = JSON.stringify(se_DeleteClientBrandingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteConnectClientAddInCommand
 */
export const se_DeleteConnectClientAddInCommand = async (
  input: DeleteConnectClientAddInCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DeleteConnectClientAddIn",
  };
  let body: any;
  body = JSON.stringify(se_DeleteConnectClientAddInRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteConnectionAliasCommand
 */
export const se_DeleteConnectionAliasCommand = async (
  input: DeleteConnectionAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DeleteConnectionAlias",
  };
  let body: any;
  body = JSON.stringify(se_DeleteConnectionAliasRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteIpGroupCommand
 */
export const se_DeleteIpGroupCommand = async (
  input: DeleteIpGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DeleteIpGroup",
  };
  let body: any;
  body = JSON.stringify(se_DeleteIpGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteTagsCommand
 */
export const se_DeleteTagsCommand = async (
  input: DeleteTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DeleteTags",
  };
  let body: any;
  body = JSON.stringify(se_DeleteTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteWorkspaceBundleCommand
 */
export const se_DeleteWorkspaceBundleCommand = async (
  input: DeleteWorkspaceBundleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DeleteWorkspaceBundle",
  };
  let body: any;
  body = JSON.stringify(se_DeleteWorkspaceBundleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteWorkspaceImageCommand
 */
export const se_DeleteWorkspaceImageCommand = async (
  input: DeleteWorkspaceImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DeleteWorkspaceImage",
  };
  let body: any;
  body = JSON.stringify(se_DeleteWorkspaceImageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeregisterWorkspaceDirectoryCommand
 */
export const se_DeregisterWorkspaceDirectoryCommand = async (
  input: DeregisterWorkspaceDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DeregisterWorkspaceDirectory",
  };
  let body: any;
  body = JSON.stringify(se_DeregisterWorkspaceDirectoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAccountCommand
 */
export const se_DescribeAccountCommand = async (
  input: DescribeAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DescribeAccount",
  };
  let body: any;
  body = JSON.stringify(se_DescribeAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAccountModificationsCommand
 */
export const se_DescribeAccountModificationsCommand = async (
  input: DescribeAccountModificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DescribeAccountModifications",
  };
  let body: any;
  body = JSON.stringify(se_DescribeAccountModificationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeClientBrandingCommand
 */
export const se_DescribeClientBrandingCommand = async (
  input: DescribeClientBrandingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DescribeClientBranding",
  };
  let body: any;
  body = JSON.stringify(se_DescribeClientBrandingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeClientPropertiesCommand
 */
export const se_DescribeClientPropertiesCommand = async (
  input: DescribeClientPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DescribeClientProperties",
  };
  let body: any;
  body = JSON.stringify(se_DescribeClientPropertiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeConnectClientAddInsCommand
 */
export const se_DescribeConnectClientAddInsCommand = async (
  input: DescribeConnectClientAddInsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DescribeConnectClientAddIns",
  };
  let body: any;
  body = JSON.stringify(se_DescribeConnectClientAddInsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeConnectionAliasesCommand
 */
export const se_DescribeConnectionAliasesCommand = async (
  input: DescribeConnectionAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DescribeConnectionAliases",
  };
  let body: any;
  body = JSON.stringify(se_DescribeConnectionAliasesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeConnectionAliasPermissionsCommand
 */
export const se_DescribeConnectionAliasPermissionsCommand = async (
  input: DescribeConnectionAliasPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DescribeConnectionAliasPermissions",
  };
  let body: any;
  body = JSON.stringify(se_DescribeConnectionAliasPermissionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeIpGroupsCommand
 */
export const se_DescribeIpGroupsCommand = async (
  input: DescribeIpGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DescribeIpGroups",
  };
  let body: any;
  body = JSON.stringify(se_DescribeIpGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTagsCommand
 */
export const se_DescribeTagsCommand = async (
  input: DescribeTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DescribeTags",
  };
  let body: any;
  body = JSON.stringify(se_DescribeTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeWorkspaceBundlesCommand
 */
export const se_DescribeWorkspaceBundlesCommand = async (
  input: DescribeWorkspaceBundlesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DescribeWorkspaceBundles",
  };
  let body: any;
  body = JSON.stringify(se_DescribeWorkspaceBundlesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeWorkspaceDirectoriesCommand
 */
export const se_DescribeWorkspaceDirectoriesCommand = async (
  input: DescribeWorkspaceDirectoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DescribeWorkspaceDirectories",
  };
  let body: any;
  body = JSON.stringify(se_DescribeWorkspaceDirectoriesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeWorkspaceImagePermissionsCommand
 */
export const se_DescribeWorkspaceImagePermissionsCommand = async (
  input: DescribeWorkspaceImagePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DescribeWorkspaceImagePermissions",
  };
  let body: any;
  body = JSON.stringify(se_DescribeWorkspaceImagePermissionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeWorkspaceImagesCommand
 */
export const se_DescribeWorkspaceImagesCommand = async (
  input: DescribeWorkspaceImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DescribeWorkspaceImages",
  };
  let body: any;
  body = JSON.stringify(se_DescribeWorkspaceImagesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeWorkspacesCommand
 */
export const se_DescribeWorkspacesCommand = async (
  input: DescribeWorkspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DescribeWorkspaces",
  };
  let body: any;
  body = JSON.stringify(se_DescribeWorkspacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeWorkspacesConnectionStatusCommand
 */
export const se_DescribeWorkspacesConnectionStatusCommand = async (
  input: DescribeWorkspacesConnectionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DescribeWorkspacesConnectionStatus",
  };
  let body: any;
  body = JSON.stringify(se_DescribeWorkspacesConnectionStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeWorkspaceSnapshotsCommand
 */
export const se_DescribeWorkspaceSnapshotsCommand = async (
  input: DescribeWorkspaceSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DescribeWorkspaceSnapshots",
  };
  let body: any;
  body = JSON.stringify(se_DescribeWorkspaceSnapshotsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateConnectionAliasCommand
 */
export const se_DisassociateConnectionAliasCommand = async (
  input: DisassociateConnectionAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DisassociateConnectionAlias",
  };
  let body: any;
  body = JSON.stringify(se_DisassociateConnectionAliasRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateIpGroupsCommand
 */
export const se_DisassociateIpGroupsCommand = async (
  input: DisassociateIpGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DisassociateIpGroups",
  };
  let body: any;
  body = JSON.stringify(se_DisassociateIpGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ImportClientBrandingCommand
 */
export const se_ImportClientBrandingCommand = async (
  input: ImportClientBrandingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.ImportClientBranding",
  };
  let body: any;
  body = JSON.stringify(se_ImportClientBrandingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ImportWorkspaceImageCommand
 */
export const se_ImportWorkspaceImageCommand = async (
  input: ImportWorkspaceImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.ImportWorkspaceImage",
  };
  let body: any;
  body = JSON.stringify(se_ImportWorkspaceImageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAvailableManagementCidrRangesCommand
 */
export const se_ListAvailableManagementCidrRangesCommand = async (
  input: ListAvailableManagementCidrRangesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.ListAvailableManagementCidrRanges",
  };
  let body: any;
  body = JSON.stringify(se_ListAvailableManagementCidrRangesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1MigrateWorkspaceCommand
 */
export const se_MigrateWorkspaceCommand = async (
  input: MigrateWorkspaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.MigrateWorkspace",
  };
  let body: any;
  body = JSON.stringify(se_MigrateWorkspaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ModifyAccountCommand
 */
export const se_ModifyAccountCommand = async (
  input: ModifyAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.ModifyAccount",
  };
  let body: any;
  body = JSON.stringify(se_ModifyAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ModifyCertificateBasedAuthPropertiesCommand
 */
export const se_ModifyCertificateBasedAuthPropertiesCommand = async (
  input: ModifyCertificateBasedAuthPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.ModifyCertificateBasedAuthProperties",
  };
  let body: any;
  body = JSON.stringify(se_ModifyCertificateBasedAuthPropertiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ModifyClientPropertiesCommand
 */
export const se_ModifyClientPropertiesCommand = async (
  input: ModifyClientPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.ModifyClientProperties",
  };
  let body: any;
  body = JSON.stringify(se_ModifyClientPropertiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ModifySamlPropertiesCommand
 */
export const se_ModifySamlPropertiesCommand = async (
  input: ModifySamlPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.ModifySamlProperties",
  };
  let body: any;
  body = JSON.stringify(se_ModifySamlPropertiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ModifySelfservicePermissionsCommand
 */
export const se_ModifySelfservicePermissionsCommand = async (
  input: ModifySelfservicePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.ModifySelfservicePermissions",
  };
  let body: any;
  body = JSON.stringify(se_ModifySelfservicePermissionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ModifyWorkspaceAccessPropertiesCommand
 */
export const se_ModifyWorkspaceAccessPropertiesCommand = async (
  input: ModifyWorkspaceAccessPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.ModifyWorkspaceAccessProperties",
  };
  let body: any;
  body = JSON.stringify(se_ModifyWorkspaceAccessPropertiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ModifyWorkspaceCreationPropertiesCommand
 */
export const se_ModifyWorkspaceCreationPropertiesCommand = async (
  input: ModifyWorkspaceCreationPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.ModifyWorkspaceCreationProperties",
  };
  let body: any;
  body = JSON.stringify(se_ModifyWorkspaceCreationPropertiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ModifyWorkspacePropertiesCommand
 */
export const se_ModifyWorkspacePropertiesCommand = async (
  input: ModifyWorkspacePropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.ModifyWorkspaceProperties",
  };
  let body: any;
  body = JSON.stringify(se_ModifyWorkspacePropertiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ModifyWorkspaceStateCommand
 */
export const se_ModifyWorkspaceStateCommand = async (
  input: ModifyWorkspaceStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.ModifyWorkspaceState",
  };
  let body: any;
  body = JSON.stringify(se_ModifyWorkspaceStateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RebootWorkspacesCommand
 */
export const se_RebootWorkspacesCommand = async (
  input: RebootWorkspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.RebootWorkspaces",
  };
  let body: any;
  body = JSON.stringify(se_RebootWorkspacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RebuildWorkspacesCommand
 */
export const se_RebuildWorkspacesCommand = async (
  input: RebuildWorkspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.RebuildWorkspaces",
  };
  let body: any;
  body = JSON.stringify(se_RebuildWorkspacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterWorkspaceDirectoryCommand
 */
export const se_RegisterWorkspaceDirectoryCommand = async (
  input: RegisterWorkspaceDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.RegisterWorkspaceDirectory",
  };
  let body: any;
  body = JSON.stringify(se_RegisterWorkspaceDirectoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RestoreWorkspaceCommand
 */
export const se_RestoreWorkspaceCommand = async (
  input: RestoreWorkspaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.RestoreWorkspace",
  };
  let body: any;
  body = JSON.stringify(se_RestoreWorkspaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RevokeIpRulesCommand
 */
export const se_RevokeIpRulesCommand = async (
  input: RevokeIpRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.RevokeIpRules",
  };
  let body: any;
  body = JSON.stringify(se_RevokeIpRulesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartWorkspacesCommand
 */
export const se_StartWorkspacesCommand = async (
  input: StartWorkspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.StartWorkspaces",
  };
  let body: any;
  body = JSON.stringify(se_StartWorkspacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopWorkspacesCommand
 */
export const se_StopWorkspacesCommand = async (
  input: StopWorkspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.StopWorkspaces",
  };
  let body: any;
  body = JSON.stringify(se_StopWorkspacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TerminateWorkspacesCommand
 */
export const se_TerminateWorkspacesCommand = async (
  input: TerminateWorkspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.TerminateWorkspaces",
  };
  let body: any;
  body = JSON.stringify(se_TerminateWorkspacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateConnectClientAddInCommand
 */
export const se_UpdateConnectClientAddInCommand = async (
  input: UpdateConnectClientAddInCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.UpdateConnectClientAddIn",
  };
  let body: any;
  body = JSON.stringify(se_UpdateConnectClientAddInRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateConnectionAliasPermissionCommand
 */
export const se_UpdateConnectionAliasPermissionCommand = async (
  input: UpdateConnectionAliasPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.UpdateConnectionAliasPermission",
  };
  let body: any;
  body = JSON.stringify(se_UpdateConnectionAliasPermissionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateRulesOfIpGroupCommand
 */
export const se_UpdateRulesOfIpGroupCommand = async (
  input: UpdateRulesOfIpGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.UpdateRulesOfIpGroup",
  };
  let body: any;
  body = JSON.stringify(se_UpdateRulesOfIpGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateWorkspaceBundleCommand
 */
export const se_UpdateWorkspaceBundleCommand = async (
  input: UpdateWorkspaceBundleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.UpdateWorkspaceBundle",
  };
  let body: any;
  body = JSON.stringify(se_UpdateWorkspaceBundleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateWorkspaceImagePermissionCommand
 */
export const se_UpdateWorkspaceImagePermissionCommand = async (
  input: UpdateWorkspaceImagePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.UpdateWorkspaceImagePermission",
  };
  let body: any;
  body = JSON.stringify(se_UpdateWorkspaceImagePermissionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AssociateConnectionAliasCommand
 */
export const de_AssociateConnectionAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateConnectionAliasCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateConnectionAliasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateConnectionAliasResult(data, context);
  const response: AssociateConnectionAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssociateConnectionAliasCommandError
 */
const de_AssociateConnectionAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateConnectionAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
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
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AssociateIpGroupsCommand
 */
export const de_AssociateIpGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateIpGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateIpGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateIpGroupsResult(data, context);
  const response: AssociateIpGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssociateIpGroupsCommandError
 */
const de_AssociateIpGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateIpGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      throw await de_InvalidResourceStateExceptionRes(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await de_OperationNotSupportedExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AuthorizeIpRulesCommand
 */
export const de_AuthorizeIpRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AuthorizeIpRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AuthorizeIpRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AuthorizeIpRulesResult(data, context);
  const response: AuthorizeIpRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AuthorizeIpRulesCommandError
 */
const de_AuthorizeIpRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AuthorizeIpRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      throw await de_InvalidResourceStateExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CopyWorkspaceImageCommand
 */
export const de_CopyWorkspaceImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyWorkspaceImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CopyWorkspaceImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CopyWorkspaceImageResult(data, context);
  const response: CopyWorkspaceImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CopyWorkspaceImageCommandError
 */
const de_CopyWorkspaceImageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyWorkspaceImageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await de_OperationNotSupportedExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.workspaces#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.workspaces#ResourceUnavailableException":
      throw await de_ResourceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateConnectClientAddInCommand
 */
export const de_CreateConnectClientAddInCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectClientAddInCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateConnectClientAddInCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateConnectClientAddInResult(data, context);
  const response: CreateConnectClientAddInCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateConnectClientAddInCommandError
 */
const de_CreateConnectClientAddInCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectClientAddInCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.workspaces#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceCreationFailedException":
    case "com.amazonaws.workspaces#ResourceCreationFailedException":
      throw await de_ResourceCreationFailedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateConnectionAliasCommand
 */
export const de_CreateConnectionAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectionAliasCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateConnectionAliasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateConnectionAliasResult(data, context);
  const response: CreateConnectionAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateConnectionAliasCommandError
 */
const de_CreateConnectionAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectionAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      throw await de_InvalidResourceStateExceptionRes(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await de_OperationNotSupportedExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.workspaces#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateIpGroupCommand
 */
export const de_CreateIpGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIpGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateIpGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateIpGroupResult(data, context);
  const response: CreateIpGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateIpGroupCommandError
 */
const de_CreateIpGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIpGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.workspaces#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceCreationFailedException":
    case "com.amazonaws.workspaces#ResourceCreationFailedException":
      throw await de_ResourceCreationFailedExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateStandbyWorkspacesCommand
 */
export const de_CreateStandbyWorkspacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStandbyWorkspacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateStandbyWorkspacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateStandbyWorkspacesResult(data, context);
  const response: CreateStandbyWorkspacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateStandbyWorkspacesCommandError
 */
const de_CreateStandbyWorkspacesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStandbyWorkspacesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await de_OperationNotSupportedExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateTagsCommand
 */
export const de_CreateTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateTagsResult(data, context);
  const response: CreateTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateTagsCommandError
 */
const de_CreateTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateUpdatedWorkspaceImageCommand
 */
export const de_CreateUpdatedWorkspaceImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUpdatedWorkspaceImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateUpdatedWorkspaceImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateUpdatedWorkspaceImageResult(data, context);
  const response: CreateUpdatedWorkspaceImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateUpdatedWorkspaceImageCommandError
 */
const de_CreateUpdatedWorkspaceImageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUpdatedWorkspaceImageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      throw await de_InvalidResourceStateExceptionRes(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await de_OperationNotSupportedExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.workspaces#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateWorkspaceBundleCommand
 */
export const de_CreateWorkspaceBundleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkspaceBundleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateWorkspaceBundleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateWorkspaceBundleResult(data, context);
  const response: CreateWorkspaceBundleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateWorkspaceBundleCommandError
 */
const de_CreateWorkspaceBundleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkspaceBundleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.workspaces#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.workspaces#ResourceUnavailableException":
      throw await de_ResourceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateWorkspaceImageCommand
 */
export const de_CreateWorkspaceImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkspaceImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateWorkspaceImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateWorkspaceImageResult(data, context);
  const response: CreateWorkspaceImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateWorkspaceImageCommandError
 */
const de_CreateWorkspaceImageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkspaceImageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      throw await de_InvalidResourceStateExceptionRes(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await de_OperationNotSupportedExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.workspaces#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateWorkspacesCommand
 */
export const de_CreateWorkspacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkspacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateWorkspacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateWorkspacesResult(data, context);
  const response: CreateWorkspacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateWorkspacesCommandError
 */
const de_CreateWorkspacesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkspacesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteClientBrandingCommand
 */
export const de_DeleteClientBrandingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClientBrandingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteClientBrandingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteClientBrandingResult(data, context);
  const response: DeleteClientBrandingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteClientBrandingCommandError
 */
const de_DeleteClientBrandingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClientBrandingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteConnectClientAddInCommand
 */
export const de_DeleteConnectClientAddInCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectClientAddInCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteConnectClientAddInCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteConnectClientAddInResult(data, context);
  const response: DeleteConnectClientAddInCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteConnectClientAddInCommandError
 */
const de_DeleteConnectClientAddInCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectClientAddInCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteConnectionAliasCommand
 */
export const de_DeleteConnectionAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionAliasCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteConnectionAliasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteConnectionAliasResult(data, context);
  const response: DeleteConnectionAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteConnectionAliasCommandError
 */
const de_DeleteConnectionAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
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
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteIpGroupCommand
 */
export const de_DeleteIpGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIpGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteIpGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteIpGroupResult(data, context);
  const response: DeleteIpGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteIpGroupCommandError
 */
const de_DeleteIpGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIpGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "ResourceAssociatedException":
    case "com.amazonaws.workspaces#ResourceAssociatedException":
      throw await de_ResourceAssociatedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteTagsCommand
 */
export const de_DeleteTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteTagsResult(data, context);
  const response: DeleteTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteTagsCommandError
 */
const de_DeleteTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteWorkspaceBundleCommand
 */
export const de_DeleteWorkspaceBundleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkspaceBundleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteWorkspaceBundleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteWorkspaceBundleResult(data, context);
  const response: DeleteWorkspaceBundleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteWorkspaceBundleCommandError
 */
const de_DeleteWorkspaceBundleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkspaceBundleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "ResourceAssociatedException":
    case "com.amazonaws.workspaces#ResourceAssociatedException":
      throw await de_ResourceAssociatedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteWorkspaceImageCommand
 */
export const de_DeleteWorkspaceImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkspaceImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteWorkspaceImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteWorkspaceImageResult(data, context);
  const response: DeleteWorkspaceImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteWorkspaceImageCommandError
 */
const de_DeleteWorkspaceImageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkspaceImageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      throw await de_InvalidResourceStateExceptionRes(parsedOutput, context);
    case "ResourceAssociatedException":
    case "com.amazonaws.workspaces#ResourceAssociatedException":
      throw await de_ResourceAssociatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeregisterWorkspaceDirectoryCommand
 */
export const de_DeregisterWorkspaceDirectoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterWorkspaceDirectoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeregisterWorkspaceDirectoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeregisterWorkspaceDirectoryResult(data, context);
  const response: DeregisterWorkspaceDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeregisterWorkspaceDirectoryCommandError
 */
const de_DeregisterWorkspaceDirectoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterWorkspaceDirectoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      throw await de_InvalidResourceStateExceptionRes(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await de_OperationNotSupportedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeAccountCommand
 */
export const de_DescribeAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAccountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAccountResult(data, context);
  const response: DescribeAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeAccountCommandError
 */
const de_DescribeAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeAccountModificationsCommand
 */
export const de_DescribeAccountModificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountModificationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAccountModificationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAccountModificationsResult(data, context);
  const response: DescribeAccountModificationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeAccountModificationsCommandError
 */
const de_DescribeAccountModificationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountModificationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeClientBrandingCommand
 */
export const de_DescribeClientBrandingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClientBrandingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeClientBrandingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeClientBrandingResult(data, context);
  const response: DescribeClientBrandingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeClientBrandingCommandError
 */
const de_DescribeClientBrandingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClientBrandingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeClientPropertiesCommand
 */
export const de_DescribeClientPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClientPropertiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeClientPropertiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeClientPropertiesResult(data, context);
  const response: DescribeClientPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeClientPropertiesCommandError
 */
const de_DescribeClientPropertiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClientPropertiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeConnectClientAddInsCommand
 */
export const de_DescribeConnectClientAddInsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectClientAddInsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeConnectClientAddInsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeConnectClientAddInsResult(data, context);
  const response: DescribeConnectClientAddInsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeConnectClientAddInsCommandError
 */
const de_DescribeConnectClientAddInsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectClientAddInsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeConnectionAliasesCommand
 */
export const de_DescribeConnectionAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectionAliasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeConnectionAliasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeConnectionAliasesResult(data, context);
  const response: DescribeConnectionAliasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeConnectionAliasesCommandError
 */
const de_DescribeConnectionAliasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectionAliasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await de_OperationNotSupportedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeConnectionAliasPermissionsCommand
 */
export const de_DescribeConnectionAliasPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectionAliasPermissionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeConnectionAliasPermissionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeConnectionAliasPermissionsResult(data, context);
  const response: DescribeConnectionAliasPermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeConnectionAliasPermissionsCommandError
 */
const de_DescribeConnectionAliasPermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectionAliasPermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await de_OperationNotSupportedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeIpGroupsCommand
 */
export const de_DescribeIpGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIpGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeIpGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeIpGroupsResult(data, context);
  const response: DescribeIpGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeIpGroupsCommandError
 */
const de_DescribeIpGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIpGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeTagsCommand
 */
export const de_DescribeTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTagsResult(data, context);
  const response: DescribeTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeTagsCommandError
 */
const de_DescribeTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeWorkspaceBundlesCommand
 */
export const de_DescribeWorkspaceBundlesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspaceBundlesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeWorkspaceBundlesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeWorkspaceBundlesResult(data, context);
  const response: DescribeWorkspaceBundlesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeWorkspaceBundlesCommandError
 */
const de_DescribeWorkspaceBundlesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspaceBundlesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeWorkspaceDirectoriesCommand
 */
export const de_DescribeWorkspaceDirectoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspaceDirectoriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeWorkspaceDirectoriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeWorkspaceDirectoriesResult(data, context);
  const response: DescribeWorkspaceDirectoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeWorkspaceDirectoriesCommandError
 */
const de_DescribeWorkspaceDirectoriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspaceDirectoriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeWorkspaceImagePermissionsCommand
 */
export const de_DescribeWorkspaceImagePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspaceImagePermissionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeWorkspaceImagePermissionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeWorkspaceImagePermissionsResult(data, context);
  const response: DescribeWorkspaceImagePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeWorkspaceImagePermissionsCommandError
 */
const de_DescribeWorkspaceImagePermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspaceImagePermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeWorkspaceImagesCommand
 */
export const de_DescribeWorkspaceImagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspaceImagesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeWorkspaceImagesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeWorkspaceImagesResult(data, context);
  const response: DescribeWorkspaceImagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeWorkspaceImagesCommandError
 */
const de_DescribeWorkspaceImagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspaceImagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeWorkspacesCommand
 */
export const de_DescribeWorkspacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeWorkspacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeWorkspacesResult(data, context);
  const response: DescribeWorkspacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeWorkspacesCommandError
 */
const de_DescribeWorkspacesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspacesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.workspaces#ResourceUnavailableException":
      throw await de_ResourceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeWorkspacesConnectionStatusCommand
 */
export const de_DescribeWorkspacesConnectionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspacesConnectionStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeWorkspacesConnectionStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeWorkspacesConnectionStatusResult(data, context);
  const response: DescribeWorkspacesConnectionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeWorkspacesConnectionStatusCommandError
 */
const de_DescribeWorkspacesConnectionStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspacesConnectionStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeWorkspaceSnapshotsCommand
 */
export const de_DescribeWorkspaceSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspaceSnapshotsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeWorkspaceSnapshotsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeWorkspaceSnapshotsResult(data, context);
  const response: DescribeWorkspaceSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeWorkspaceSnapshotsCommandError
 */
const de_DescribeWorkspaceSnapshotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspaceSnapshotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DisassociateConnectionAliasCommand
 */
export const de_DisassociateConnectionAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateConnectionAliasCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateConnectionAliasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisassociateConnectionAliasResult(data, context);
  const response: DisassociateConnectionAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisassociateConnectionAliasCommandError
 */
const de_DisassociateConnectionAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateConnectionAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      throw await de_InvalidResourceStateExceptionRes(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await de_OperationNotSupportedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DisassociateIpGroupsCommand
 */
export const de_DisassociateIpGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateIpGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateIpGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisassociateIpGroupsResult(data, context);
  const response: DisassociateIpGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisassociateIpGroupsCommandError
 */
const de_DisassociateIpGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateIpGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      throw await de_InvalidResourceStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ImportClientBrandingCommand
 */
export const de_ImportClientBrandingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportClientBrandingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ImportClientBrandingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ImportClientBrandingResult(data, context);
  const response: ImportClientBrandingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ImportClientBrandingCommandError
 */
const de_ImportClientBrandingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportClientBrandingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ImportWorkspaceImageCommand
 */
export const de_ImportWorkspaceImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportWorkspaceImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ImportWorkspaceImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ImportWorkspaceImageResult(data, context);
  const response: ImportWorkspaceImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ImportWorkspaceImageCommandError
 */
const de_ImportWorkspaceImageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportWorkspaceImageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await de_OperationNotSupportedExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.workspaces#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListAvailableManagementCidrRangesCommand
 */
export const de_ListAvailableManagementCidrRangesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableManagementCidrRangesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAvailableManagementCidrRangesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAvailableManagementCidrRangesResult(data, context);
  const response: ListAvailableManagementCidrRangesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListAvailableManagementCidrRangesCommandError
 */
const de_ListAvailableManagementCidrRangesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableManagementCidrRangesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1MigrateWorkspaceCommand
 */
export const de_MigrateWorkspaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MigrateWorkspaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_MigrateWorkspaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_MigrateWorkspaceResult(data, context);
  const response: MigrateWorkspaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1MigrateWorkspaceCommandError
 */
const de_MigrateWorkspaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MigrateWorkspaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "OperationInProgressException":
    case "com.amazonaws.workspaces#OperationInProgressException":
      throw await de_OperationInProgressExceptionRes(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await de_OperationNotSupportedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.workspaces#ResourceUnavailableException":
      throw await de_ResourceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ModifyAccountCommand
 */
export const de_ModifyAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyAccountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyAccountResult(data, context);
  const response: ModifyAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ModifyAccountCommandError
 */
const de_ModifyAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      throw await de_InvalidResourceStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.workspaces#ResourceUnavailableException":
      throw await de_ResourceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ModifyCertificateBasedAuthPropertiesCommand
 */
export const de_ModifyCertificateBasedAuthPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyCertificateBasedAuthPropertiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyCertificateBasedAuthPropertiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyCertificateBasedAuthPropertiesResult(data, context);
  const response: ModifyCertificateBasedAuthPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ModifyCertificateBasedAuthPropertiesCommandError
 */
const de_ModifyCertificateBasedAuthPropertiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyCertificateBasedAuthPropertiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await de_OperationNotSupportedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ModifyClientPropertiesCommand
 */
export const de_ModifyClientPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClientPropertiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyClientPropertiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyClientPropertiesResult(data, context);
  const response: ModifyClientPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ModifyClientPropertiesCommandError
 */
const de_ModifyClientPropertiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClientPropertiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ModifySamlPropertiesCommand
 */
export const de_ModifySamlPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifySamlPropertiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifySamlPropertiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifySamlPropertiesResult(data, context);
  const response: ModifySamlPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ModifySamlPropertiesCommandError
 */
const de_ModifySamlPropertiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifySamlPropertiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await de_OperationNotSupportedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ModifySelfservicePermissionsCommand
 */
export const de_ModifySelfservicePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifySelfservicePermissionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifySelfservicePermissionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifySelfservicePermissionsResult(data, context);
  const response: ModifySelfservicePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ModifySelfservicePermissionsCommandError
 */
const de_ModifySelfservicePermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifySelfservicePermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ModifyWorkspaceAccessPropertiesCommand
 */
export const de_ModifyWorkspaceAccessPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyWorkspaceAccessPropertiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyWorkspaceAccessPropertiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyWorkspaceAccessPropertiesResult(data, context);
  const response: ModifyWorkspaceAccessPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ModifyWorkspaceAccessPropertiesCommandError
 */
const de_ModifyWorkspaceAccessPropertiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyWorkspaceAccessPropertiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ModifyWorkspaceCreationPropertiesCommand
 */
export const de_ModifyWorkspaceCreationPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyWorkspaceCreationPropertiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyWorkspaceCreationPropertiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyWorkspaceCreationPropertiesResult(data, context);
  const response: ModifyWorkspaceCreationPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ModifyWorkspaceCreationPropertiesCommandError
 */
const de_ModifyWorkspaceCreationPropertiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyWorkspaceCreationPropertiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await de_OperationNotSupportedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ModifyWorkspacePropertiesCommand
 */
export const de_ModifyWorkspacePropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyWorkspacePropertiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyWorkspacePropertiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyWorkspacePropertiesResult(data, context);
  const response: ModifyWorkspacePropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ModifyWorkspacePropertiesCommandError
 */
const de_ModifyWorkspacePropertiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyWorkspacePropertiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      throw await de_InvalidResourceStateExceptionRes(parsedOutput, context);
    case "OperationInProgressException":
    case "com.amazonaws.workspaces#OperationInProgressException":
      throw await de_OperationInProgressExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.workspaces#ResourceUnavailableException":
      throw await de_ResourceUnavailableExceptionRes(parsedOutput, context);
    case "UnsupportedWorkspaceConfigurationException":
    case "com.amazonaws.workspaces#UnsupportedWorkspaceConfigurationException":
      throw await de_UnsupportedWorkspaceConfigurationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ModifyWorkspaceStateCommand
 */
export const de_ModifyWorkspaceStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyWorkspaceStateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyWorkspaceStateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyWorkspaceStateResult(data, context);
  const response: ModifyWorkspaceStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ModifyWorkspaceStateCommandError
 */
const de_ModifyWorkspaceStateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyWorkspaceStateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      throw await de_InvalidResourceStateExceptionRes(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await de_OperationNotSupportedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RebootWorkspacesCommand
 */
export const de_RebootWorkspacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootWorkspacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RebootWorkspacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RebootWorkspacesResult(data, context);
  const response: RebootWorkspacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RebootWorkspacesCommandError
 */
const de_RebootWorkspacesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootWorkspacesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await de_OperationNotSupportedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RebuildWorkspacesCommand
 */
export const de_RebuildWorkspacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebuildWorkspacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RebuildWorkspacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RebuildWorkspacesResult(data, context);
  const response: RebuildWorkspacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RebuildWorkspacesCommandError
 */
const de_RebuildWorkspacesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebuildWorkspacesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await de_OperationNotSupportedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RegisterWorkspaceDirectoryCommand
 */
export const de_RegisterWorkspaceDirectoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterWorkspaceDirectoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterWorkspaceDirectoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RegisterWorkspaceDirectoryResult(data, context);
  const response: RegisterWorkspaceDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RegisterWorkspaceDirectoryCommandError
 */
const de_RegisterWorkspaceDirectoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterWorkspaceDirectoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      throw await de_InvalidResourceStateExceptionRes(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await de_OperationNotSupportedExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedNetworkConfigurationException":
    case "com.amazonaws.workspaces#UnsupportedNetworkConfigurationException":
      throw await de_UnsupportedNetworkConfigurationExceptionRes(parsedOutput, context);
    case "WorkspacesDefaultRoleNotFoundException":
    case "com.amazonaws.workspaces#WorkspacesDefaultRoleNotFoundException":
      throw await de_WorkspacesDefaultRoleNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RestoreWorkspaceCommand
 */
export const de_RestoreWorkspaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreWorkspaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RestoreWorkspaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RestoreWorkspaceResult(data, context);
  const response: RestoreWorkspaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RestoreWorkspaceCommandError
 */
const de_RestoreWorkspaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreWorkspaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await de_OperationNotSupportedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RevokeIpRulesCommand
 */
export const de_RevokeIpRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeIpRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RevokeIpRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RevokeIpRulesResult(data, context);
  const response: RevokeIpRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RevokeIpRulesCommandError
 */
const de_RevokeIpRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeIpRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      throw await de_InvalidResourceStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartWorkspacesCommand
 */
export const de_StartWorkspacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartWorkspacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartWorkspacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartWorkspacesResult(data, context);
  const response: StartWorkspacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartWorkspacesCommandError
 */
const de_StartWorkspacesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartWorkspacesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1StopWorkspacesCommand
 */
export const de_StopWorkspacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopWorkspacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopWorkspacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopWorkspacesResult(data, context);
  const response: StopWorkspacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StopWorkspacesCommandError
 */
const de_StopWorkspacesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopWorkspacesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1TerminateWorkspacesCommand
 */
export const de_TerminateWorkspacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateWorkspacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TerminateWorkspacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TerminateWorkspacesResult(data, context);
  const response: TerminateWorkspacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TerminateWorkspacesCommandError
 */
const de_TerminateWorkspacesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateWorkspacesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1UpdateConnectClientAddInCommand
 */
export const de_UpdateConnectClientAddInCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectClientAddInCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateConnectClientAddInCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateConnectClientAddInResult(data, context);
  const response: UpdateConnectClientAddInCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateConnectClientAddInCommandError
 */
const de_UpdateConnectClientAddInCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectClientAddInCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateConnectionAliasPermissionCommand
 */
export const de_UpdateConnectionAliasPermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectionAliasPermissionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateConnectionAliasPermissionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateConnectionAliasPermissionResult(data, context);
  const response: UpdateConnectionAliasPermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateConnectionAliasPermissionCommandError
 */
const de_UpdateConnectionAliasPermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectionAliasPermissionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
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
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateRulesOfIpGroupCommand
 */
export const de_UpdateRulesOfIpGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRulesOfIpGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateRulesOfIpGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateRulesOfIpGroupResult(data, context);
  const response: UpdateRulesOfIpGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateRulesOfIpGroupCommandError
 */
const de_UpdateRulesOfIpGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRulesOfIpGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      throw await de_InvalidResourceStateExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateWorkspaceBundleCommand
 */
export const de_UpdateWorkspaceBundleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkspaceBundleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateWorkspaceBundleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateWorkspaceBundleResult(data, context);
  const response: UpdateWorkspaceBundleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateWorkspaceBundleCommandError
 */
const de_UpdateWorkspaceBundleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkspaceBundleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await de_OperationNotSupportedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.workspaces#ResourceUnavailableException":
      throw await de_ResourceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateWorkspaceImagePermissionCommand
 */
export const de_UpdateWorkspaceImagePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkspaceImagePermissionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateWorkspaceImagePermissionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateWorkspaceImagePermissionResult(data, context);
  const response: UpdateWorkspaceImagePermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateWorkspaceImagePermissionCommandError
 */
const de_UpdateWorkspaceImagePermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkspaceImagePermissionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await de_InvalidParameterValuesExceptionRes(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await de_OperationNotSupportedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.workspaces#ResourceUnavailableException":
      throw await de_ResourceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
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
  const deserialized: any = de_AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
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
  const deserialized: any = de_InvalidParameterValuesException(body, context);
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
  const deserialized: any = de_InvalidResourceStateException(body, context);
  const exception = new InvalidResourceStateException({
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
  const deserialized: any = de_OperationInProgressException(body, context);
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
  const deserialized: any = de_OperationNotSupportedException(body, context);
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
  const deserialized: any = de_ResourceAlreadyExistsException(body, context);
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
  const deserialized: any = de_ResourceAssociatedException(body, context);
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
  const deserialized: any = de_ResourceCreationFailedException(body, context);
  const exception = new ResourceCreationFailedException({
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
  const deserialized: any = de_ResourceLimitExceededException(body, context);
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
  const deserialized: any = de_ResourceNotFoundException(body, context);
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
  const deserialized: any = de_ResourceUnavailableException(body, context);
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
  const deserialized: any = de_UnsupportedNetworkConfigurationException(body, context);
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
  const deserialized: any = de_UnsupportedWorkspaceConfigurationException(body, context);
  const exception = new UnsupportedWorkspaceConfigurationException({
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
  const deserialized: any = de_WorkspacesDefaultRoleNotFoundException(body, context);
  const exception = new WorkspacesDefaultRoleNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1ApplicationList
 */
const se_ApplicationList = (input: (Application | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1AssociateConnectionAliasRequest
 */
const se_AssociateConnectionAliasRequest = (input: AssociateConnectionAliasRequest, context: __SerdeContext): any => {
  return {
    ...(input.AliasId != null && { AliasId: input.AliasId }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

/**
 * serializeAws_json1_1AssociateIpGroupsRequest
 */
const se_AssociateIpGroupsRequest = (input: AssociateIpGroupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.GroupIds != null && { GroupIds: se_IpGroupIdList(input.GroupIds, context) }),
  };
};

/**
 * serializeAws_json1_1AuthorizeIpRulesRequest
 */
const se_AuthorizeIpRulesRequest = (input: AuthorizeIpRulesRequest, context: __SerdeContext): any => {
  return {
    ...(input.GroupId != null && { GroupId: input.GroupId }),
    ...(input.UserRules != null && { UserRules: se_IpRuleList(input.UserRules, context) }),
  };
};

/**
 * serializeAws_json1_1BundleIdList
 */
const se_BundleIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1CertificateBasedAuthProperties
 */
const se_CertificateBasedAuthProperties = (input: CertificateBasedAuthProperties, context: __SerdeContext): any => {
  return {
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

/**
 * serializeAws_json1_1ClientDeviceTypeList
 */
const se_ClientDeviceTypeList = (input: (ClientDeviceType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ClientProperties
 */
const se_ClientProperties = (input: ClientProperties, context: __SerdeContext): any => {
  return {
    ...(input.LogUploadEnabled != null && { LogUploadEnabled: input.LogUploadEnabled }),
    ...(input.ReconnectEnabled != null && { ReconnectEnabled: input.ReconnectEnabled }),
  };
};

/**
 * serializeAws_json1_1ComputeType
 */
const se_ComputeType = (input: ComputeType, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1ConnectionAliasIdList
 */
const se_ConnectionAliasIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ConnectionAliasPermission
 */
const se_ConnectionAliasPermission = (input: ConnectionAliasPermission, context: __SerdeContext): any => {
  return {
    ...(input.AllowAssociation != null && { AllowAssociation: input.AllowAssociation }),
    ...(input.SharedAccountId != null && { SharedAccountId: input.SharedAccountId }),
  };
};

/**
 * serializeAws_json1_1CopyWorkspaceImageRequest
 */
const se_CopyWorkspaceImageRequest = (input: CopyWorkspaceImageRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SourceImageId != null && { SourceImageId: input.SourceImageId }),
    ...(input.SourceRegion != null && { SourceRegion: input.SourceRegion }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateConnectClientAddInRequest
 */
const se_CreateConnectClientAddInRequest = (input: CreateConnectClientAddInRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.URL != null && { URL: input.URL }),
  };
};

/**
 * serializeAws_json1_1CreateConnectionAliasRequest
 */
const se_CreateConnectionAliasRequest = (input: CreateConnectionAliasRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionString != null && { ConnectionString: input.ConnectionString }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateIpGroupRequest
 */
const se_CreateIpGroupRequest = (input: CreateIpGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.GroupDesc != null && { GroupDesc: input.GroupDesc }),
    ...(input.GroupName != null && { GroupName: input.GroupName }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.UserRules != null && { UserRules: se_IpRuleList(input.UserRules, context) }),
  };
};

/**
 * serializeAws_json1_1CreateStandbyWorkspacesRequest
 */
const se_CreateStandbyWorkspacesRequest = (input: CreateStandbyWorkspacesRequest, context: __SerdeContext): any => {
  return {
    ...(input.PrimaryRegion != null && { PrimaryRegion: input.PrimaryRegion }),
    ...(input.StandbyWorkspaces != null && {
      StandbyWorkspaces: se_StandbyWorkspacesList(input.StandbyWorkspaces, context),
    }),
  };
};

/**
 * serializeAws_json1_1CreateTagsRequest
 */
const se_CreateTagsRequest = (input: CreateTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateUpdatedWorkspaceImageRequest
 */
const se_CreateUpdatedWorkspaceImageRequest = (
  input: CreateUpdatedWorkspaceImageRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SourceImageId != null && { SourceImageId: input.SourceImageId }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateWorkspaceBundleRequest
 */
const se_CreateWorkspaceBundleRequest = (input: CreateWorkspaceBundleRequest, context: __SerdeContext): any => {
  return {
    ...(input.BundleDescription != null && { BundleDescription: input.BundleDescription }),
    ...(input.BundleName != null && { BundleName: input.BundleName }),
    ...(input.ComputeType != null && { ComputeType: se_ComputeType(input.ComputeType, context) }),
    ...(input.ImageId != null && { ImageId: input.ImageId }),
    ...(input.RootStorage != null && { RootStorage: se_RootStorage(input.RootStorage, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.UserStorage != null && { UserStorage: se_UserStorage(input.UserStorage, context) }),
  };
};

/**
 * serializeAws_json1_1CreateWorkspaceImageRequest
 */
const se_CreateWorkspaceImageRequest = (input: CreateWorkspaceImageRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.WorkspaceId != null && { WorkspaceId: input.WorkspaceId }),
  };
};

/**
 * serializeAws_json1_1CreateWorkspacesRequest
 */
const se_CreateWorkspacesRequest = (input: CreateWorkspacesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Workspaces != null && { Workspaces: se_WorkspaceRequestList(input.Workspaces, context) }),
  };
};

/**
 * serializeAws_json1_1DefaultImportClientBrandingAttributes
 */
const se_DefaultImportClientBrandingAttributes = (
  input: DefaultImportClientBrandingAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.ForgotPasswordLink != null && { ForgotPasswordLink: input.ForgotPasswordLink }),
    ...(input.LoginMessage != null && { LoginMessage: se_LoginMessage(input.LoginMessage, context) }),
    ...(input.Logo != null && { Logo: context.base64Encoder(input.Logo) }),
    ...(input.SupportEmail != null && { SupportEmail: input.SupportEmail }),
    ...(input.SupportLink != null && { SupportLink: input.SupportLink }),
  };
};

/**
 * serializeAws_json1_1DeletableCertificateBasedAuthPropertiesList
 */
const se_DeletableCertificateBasedAuthPropertiesList = (
  input: (DeletableCertificateBasedAuthProperty | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DeletableSamlPropertiesList
 */
const se_DeletableSamlPropertiesList = (input: (DeletableSamlProperty | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DeleteClientBrandingRequest
 */
const se_DeleteClientBrandingRequest = (input: DeleteClientBrandingRequest, context: __SerdeContext): any => {
  return {
    ...(input.Platforms != null && { Platforms: se_ClientDeviceTypeList(input.Platforms, context) }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

/**
 * serializeAws_json1_1DeleteConnectClientAddInRequest
 */
const se_DeleteConnectClientAddInRequest = (input: DeleteConnectClientAddInRequest, context: __SerdeContext): any => {
  return {
    ...(input.AddInId != null && { AddInId: input.AddInId }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

/**
 * serializeAws_json1_1DeleteConnectionAliasRequest
 */
const se_DeleteConnectionAliasRequest = (input: DeleteConnectionAliasRequest, context: __SerdeContext): any => {
  return {
    ...(input.AliasId != null && { AliasId: input.AliasId }),
  };
};

/**
 * serializeAws_json1_1DeleteIpGroupRequest
 */
const se_DeleteIpGroupRequest = (input: DeleteIpGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.GroupId != null && { GroupId: input.GroupId }),
  };
};

/**
 * serializeAws_json1_1DeleteTagsRequest
 */
const se_DeleteTagsRequest = (input: DeleteTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1DeleteWorkspaceBundleRequest
 */
const se_DeleteWorkspaceBundleRequest = (input: DeleteWorkspaceBundleRequest, context: __SerdeContext): any => {
  return {
    ...(input.BundleId != null && { BundleId: input.BundleId }),
  };
};

/**
 * serializeAws_json1_1DeleteWorkspaceImageRequest
 */
const se_DeleteWorkspaceImageRequest = (input: DeleteWorkspaceImageRequest, context: __SerdeContext): any => {
  return {
    ...(input.ImageId != null && { ImageId: input.ImageId }),
  };
};

/**
 * serializeAws_json1_1DeregisterWorkspaceDirectoryRequest
 */
const se_DeregisterWorkspaceDirectoryRequest = (
  input: DeregisterWorkspaceDirectoryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
  };
};

/**
 * serializeAws_json1_1DescribeAccountModificationsRequest
 */
const se_DescribeAccountModificationsRequest = (
  input: DescribeAccountModificationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeAccountRequest
 */
const se_DescribeAccountRequest = (input: DescribeAccountRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1DescribeClientBrandingRequest
 */
const se_DescribeClientBrandingRequest = (input: DescribeClientBrandingRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

/**
 * serializeAws_json1_1DescribeClientPropertiesRequest
 */
const se_DescribeClientPropertiesRequest = (input: DescribeClientPropertiesRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceIds != null && { ResourceIds: se_ResourceIdList(input.ResourceIds, context) }),
  };
};

/**
 * serializeAws_json1_1DescribeConnectClientAddInsRequest
 */
const se_DescribeConnectClientAddInsRequest = (
  input: DescribeConnectClientAddInsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

/**
 * serializeAws_json1_1DescribeConnectionAliasesRequest
 */
const se_DescribeConnectionAliasesRequest = (input: DescribeConnectionAliasesRequest, context: __SerdeContext): any => {
  return {
    ...(input.AliasIds != null && { AliasIds: se_ConnectionAliasIdList(input.AliasIds, context) }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

/**
 * serializeAws_json1_1DescribeConnectionAliasPermissionsRequest
 */
const se_DescribeConnectionAliasPermissionsRequest = (
  input: DescribeConnectionAliasPermissionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AliasId != null && { AliasId: input.AliasId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeIpGroupsRequest
 */
const se_DescribeIpGroupsRequest = (input: DescribeIpGroupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.GroupIds != null && { GroupIds: se_IpGroupIdList(input.GroupIds, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeTagsRequest
 */
const se_DescribeTagsRequest = (input: DescribeTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

/**
 * serializeAws_json1_1DescribeWorkspaceBundlesRequest
 */
const se_DescribeWorkspaceBundlesRequest = (input: DescribeWorkspaceBundlesRequest, context: __SerdeContext): any => {
  return {
    ...(input.BundleIds != null && { BundleIds: se_BundleIdList(input.BundleIds, context) }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Owner != null && { Owner: input.Owner }),
  };
};

/**
 * serializeAws_json1_1DescribeWorkspaceDirectoriesRequest
 */
const se_DescribeWorkspaceDirectoriesRequest = (
  input: DescribeWorkspaceDirectoriesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryIds != null && { DirectoryIds: se_DirectoryIdList(input.DirectoryIds, context) }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeWorkspaceImagePermissionsRequest
 */
const se_DescribeWorkspaceImagePermissionsRequest = (
  input: DescribeWorkspaceImagePermissionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ImageId != null && { ImageId: input.ImageId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeWorkspaceImagesRequest
 */
const se_DescribeWorkspaceImagesRequest = (input: DescribeWorkspaceImagesRequest, context: __SerdeContext): any => {
  return {
    ...(input.ImageIds != null && { ImageIds: se_WorkspaceImageIdList(input.ImageIds, context) }),
    ...(input.ImageType != null && { ImageType: input.ImageType }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeWorkspacesConnectionStatusRequest
 */
const se_DescribeWorkspacesConnectionStatusRequest = (
  input: DescribeWorkspacesConnectionStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.WorkspaceIds != null && { WorkspaceIds: se_WorkspaceIdList(input.WorkspaceIds, context) }),
  };
};

/**
 * serializeAws_json1_1DescribeWorkspaceSnapshotsRequest
 */
const se_DescribeWorkspaceSnapshotsRequest = (
  input: DescribeWorkspaceSnapshotsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.WorkspaceId != null && { WorkspaceId: input.WorkspaceId }),
  };
};

/**
 * serializeAws_json1_1DescribeWorkspacesRequest
 */
const se_DescribeWorkspacesRequest = (input: DescribeWorkspacesRequest, context: __SerdeContext): any => {
  return {
    ...(input.BundleId != null && { BundleId: input.BundleId }),
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.UserName != null && { UserName: input.UserName }),
    ...(input.WorkspaceIds != null && { WorkspaceIds: se_WorkspaceIdList(input.WorkspaceIds, context) }),
  };
};

/**
 * serializeAws_json1_1DirectoryIdList
 */
const se_DirectoryIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DisassociateConnectionAliasRequest
 */
const se_DisassociateConnectionAliasRequest = (
  input: DisassociateConnectionAliasRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AliasId != null && { AliasId: input.AliasId }),
  };
};

/**
 * serializeAws_json1_1DisassociateIpGroupsRequest
 */
const se_DisassociateIpGroupsRequest = (input: DisassociateIpGroupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.GroupIds != null && { GroupIds: se_IpGroupIdList(input.GroupIds, context) }),
  };
};

/**
 * serializeAws_json1_1ImportClientBrandingRequest
 */
const se_ImportClientBrandingRequest = (input: ImportClientBrandingRequest, context: __SerdeContext): any => {
  return {
    ...(input.DeviceTypeAndroid != null && {
      DeviceTypeAndroid: se_DefaultImportClientBrandingAttributes(input.DeviceTypeAndroid, context),
    }),
    ...(input.DeviceTypeIos != null && {
      DeviceTypeIos: se_IosImportClientBrandingAttributes(input.DeviceTypeIos, context),
    }),
    ...(input.DeviceTypeLinux != null && {
      DeviceTypeLinux: se_DefaultImportClientBrandingAttributes(input.DeviceTypeLinux, context),
    }),
    ...(input.DeviceTypeOsx != null && {
      DeviceTypeOsx: se_DefaultImportClientBrandingAttributes(input.DeviceTypeOsx, context),
    }),
    ...(input.DeviceTypeWeb != null && {
      DeviceTypeWeb: se_DefaultImportClientBrandingAttributes(input.DeviceTypeWeb, context),
    }),
    ...(input.DeviceTypeWindows != null && {
      DeviceTypeWindows: se_DefaultImportClientBrandingAttributes(input.DeviceTypeWindows, context),
    }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

/**
 * serializeAws_json1_1ImportWorkspaceImageRequest
 */
const se_ImportWorkspaceImageRequest = (input: ImportWorkspaceImageRequest, context: __SerdeContext): any => {
  return {
    ...(input.Applications != null && { Applications: se_ApplicationList(input.Applications, context) }),
    ...(input.Ec2ImageId != null && { Ec2ImageId: input.Ec2ImageId }),
    ...(input.ImageDescription != null && { ImageDescription: input.ImageDescription }),
    ...(input.ImageName != null && { ImageName: input.ImageName }),
    ...(input.IngestionProcess != null && { IngestionProcess: input.IngestionProcess }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1IosImportClientBrandingAttributes
 */
const se_IosImportClientBrandingAttributes = (
  input: IosImportClientBrandingAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.ForgotPasswordLink != null && { ForgotPasswordLink: input.ForgotPasswordLink }),
    ...(input.LoginMessage != null && { LoginMessage: se_LoginMessage(input.LoginMessage, context) }),
    ...(input.Logo != null && { Logo: context.base64Encoder(input.Logo) }),
    ...(input.Logo2x != null && { Logo2x: context.base64Encoder(input.Logo2x) }),
    ...(input.Logo3x != null && { Logo3x: context.base64Encoder(input.Logo3x) }),
    ...(input.SupportEmail != null && { SupportEmail: input.SupportEmail }),
    ...(input.SupportLink != null && { SupportLink: input.SupportLink }),
  };
};

/**
 * serializeAws_json1_1IpGroupIdList
 */
const se_IpGroupIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1IpRevokedRuleList
 */
const se_IpRevokedRuleList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1IpRuleItem
 */
const se_IpRuleItem = (input: IpRuleItem, context: __SerdeContext): any => {
  return {
    ...(input.ipRule != null && { ipRule: input.ipRule }),
    ...(input.ruleDesc != null && { ruleDesc: input.ruleDesc }),
  };
};

/**
 * serializeAws_json1_1IpRuleList
 */
const se_IpRuleList = (input: IpRuleItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_IpRuleItem(entry, context);
    });
};

/**
 * serializeAws_json1_1ListAvailableManagementCidrRangesRequest
 */
const se_ListAvailableManagementCidrRangesRequest = (
  input: ListAvailableManagementCidrRangesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ManagementCidrRangeConstraint != null && {
      ManagementCidrRangeConstraint: input.ManagementCidrRangeConstraint,
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1LoginMessage
 */
const se_LoginMessage = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1MigrateWorkspaceRequest
 */
const se_MigrateWorkspaceRequest = (input: MigrateWorkspaceRequest, context: __SerdeContext): any => {
  return {
    ...(input.BundleId != null && { BundleId: input.BundleId }),
    ...(input.SourceWorkspaceId != null && { SourceWorkspaceId: input.SourceWorkspaceId }),
  };
};

/**
 * serializeAws_json1_1ModifyAccountRequest
 */
const se_ModifyAccountRequest = (input: ModifyAccountRequest, context: __SerdeContext): any => {
  return {
    ...(input.DedicatedTenancyManagementCidrRange != null && {
      DedicatedTenancyManagementCidrRange: input.DedicatedTenancyManagementCidrRange,
    }),
    ...(input.DedicatedTenancySupport != null && { DedicatedTenancySupport: input.DedicatedTenancySupport }),
  };
};

/**
 * serializeAws_json1_1ModifyCertificateBasedAuthPropertiesRequest
 */
const se_ModifyCertificateBasedAuthPropertiesRequest = (
  input: ModifyCertificateBasedAuthPropertiesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateBasedAuthProperties != null && {
      CertificateBasedAuthProperties: se_CertificateBasedAuthProperties(input.CertificateBasedAuthProperties, context),
    }),
    ...(input.PropertiesToDelete != null && {
      PropertiesToDelete: se_DeletableCertificateBasedAuthPropertiesList(input.PropertiesToDelete, context),
    }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

/**
 * serializeAws_json1_1ModifyClientPropertiesRequest
 */
const se_ModifyClientPropertiesRequest = (input: ModifyClientPropertiesRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientProperties != null && { ClientProperties: se_ClientProperties(input.ClientProperties, context) }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

/**
 * serializeAws_json1_1ModifySamlPropertiesRequest
 */
const se_ModifySamlPropertiesRequest = (input: ModifySamlPropertiesRequest, context: __SerdeContext): any => {
  return {
    ...(input.PropertiesToDelete != null && {
      PropertiesToDelete: se_DeletableSamlPropertiesList(input.PropertiesToDelete, context),
    }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.SamlProperties != null && { SamlProperties: se_SamlProperties(input.SamlProperties, context) }),
  };
};

/**
 * serializeAws_json1_1ModifySelfservicePermissionsRequest
 */
const se_ModifySelfservicePermissionsRequest = (
  input: ModifySelfservicePermissionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.SelfservicePermissions != null && {
      SelfservicePermissions: se_SelfservicePermissions(input.SelfservicePermissions, context),
    }),
  };
};

/**
 * serializeAws_json1_1ModifyWorkspaceAccessPropertiesRequest
 */
const se_ModifyWorkspaceAccessPropertiesRequest = (
  input: ModifyWorkspaceAccessPropertiesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.WorkspaceAccessProperties != null && {
      WorkspaceAccessProperties: se_WorkspaceAccessProperties(input.WorkspaceAccessProperties, context),
    }),
  };
};

/**
 * serializeAws_json1_1ModifyWorkspaceCreationPropertiesRequest
 */
const se_ModifyWorkspaceCreationPropertiesRequest = (
  input: ModifyWorkspaceCreationPropertiesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.WorkspaceCreationProperties != null && {
      WorkspaceCreationProperties: se_WorkspaceCreationProperties(input.WorkspaceCreationProperties, context),
    }),
  };
};

/**
 * serializeAws_json1_1ModifyWorkspacePropertiesRequest
 */
const se_ModifyWorkspacePropertiesRequest = (input: ModifyWorkspacePropertiesRequest, context: __SerdeContext): any => {
  return {
    ...(input.WorkspaceId != null && { WorkspaceId: input.WorkspaceId }),
    ...(input.WorkspaceProperties != null && {
      WorkspaceProperties: se_WorkspaceProperties(input.WorkspaceProperties, context),
    }),
  };
};

/**
 * serializeAws_json1_1ModifyWorkspaceStateRequest
 */
const se_ModifyWorkspaceStateRequest = (input: ModifyWorkspaceStateRequest, context: __SerdeContext): any => {
  return {
    ...(input.WorkspaceId != null && { WorkspaceId: input.WorkspaceId }),
    ...(input.WorkspaceState != null && { WorkspaceState: input.WorkspaceState }),
  };
};

/**
 * serializeAws_json1_1ProtocolList
 */
const se_ProtocolList = (input: (Protocol | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1RebootRequest
 */
const se_RebootRequest = (input: RebootRequest, context: __SerdeContext): any => {
  return {
    ...(input.WorkspaceId != null && { WorkspaceId: input.WorkspaceId }),
  };
};

/**
 * serializeAws_json1_1RebootWorkspaceRequests
 */
const se_RebootWorkspaceRequests = (input: RebootRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RebootRequest(entry, context);
    });
};

/**
 * serializeAws_json1_1RebootWorkspacesRequest
 */
const se_RebootWorkspacesRequest = (input: RebootWorkspacesRequest, context: __SerdeContext): any => {
  return {
    ...(input.RebootWorkspaceRequests != null && {
      RebootWorkspaceRequests: se_RebootWorkspaceRequests(input.RebootWorkspaceRequests, context),
    }),
  };
};

/**
 * serializeAws_json1_1RebuildRequest
 */
const se_RebuildRequest = (input: RebuildRequest, context: __SerdeContext): any => {
  return {
    ...(input.WorkspaceId != null && { WorkspaceId: input.WorkspaceId }),
  };
};

/**
 * serializeAws_json1_1RebuildWorkspaceRequests
 */
const se_RebuildWorkspaceRequests = (input: RebuildRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RebuildRequest(entry, context);
    });
};

/**
 * serializeAws_json1_1RebuildWorkspacesRequest
 */
const se_RebuildWorkspacesRequest = (input: RebuildWorkspacesRequest, context: __SerdeContext): any => {
  return {
    ...(input.RebuildWorkspaceRequests != null && {
      RebuildWorkspaceRequests: se_RebuildWorkspaceRequests(input.RebuildWorkspaceRequests, context),
    }),
  };
};

/**
 * serializeAws_json1_1RegisterWorkspaceDirectoryRequest
 */
const se_RegisterWorkspaceDirectoryRequest = (
  input: RegisterWorkspaceDirectoryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.EnableSelfService != null && { EnableSelfService: input.EnableSelfService }),
    ...(input.EnableWorkDocs != null && { EnableWorkDocs: input.EnableWorkDocs }),
    ...(input.SubnetIds != null && { SubnetIds: se_SubnetIds(input.SubnetIds, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.Tenancy != null && { Tenancy: input.Tenancy }),
  };
};

/**
 * serializeAws_json1_1ResourceIdList
 */
const se_ResourceIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1RestoreWorkspaceRequest
 */
const se_RestoreWorkspaceRequest = (input: RestoreWorkspaceRequest, context: __SerdeContext): any => {
  return {
    ...(input.WorkspaceId != null && { WorkspaceId: input.WorkspaceId }),
  };
};

/**
 * serializeAws_json1_1RevokeIpRulesRequest
 */
const se_RevokeIpRulesRequest = (input: RevokeIpRulesRequest, context: __SerdeContext): any => {
  return {
    ...(input.GroupId != null && { GroupId: input.GroupId }),
    ...(input.UserRules != null && { UserRules: se_IpRevokedRuleList(input.UserRules, context) }),
  };
};

/**
 * serializeAws_json1_1RootStorage
 */
const se_RootStorage = (input: RootStorage, context: __SerdeContext): any => {
  return {
    ...(input.Capacity != null && { Capacity: input.Capacity }),
  };
};

/**
 * serializeAws_json1_1SamlProperties
 */
const se_SamlProperties = (input: SamlProperties, context: __SerdeContext): any => {
  return {
    ...(input.RelayStateParameterName != null && { RelayStateParameterName: input.RelayStateParameterName }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.UserAccessUrl != null && { UserAccessUrl: input.UserAccessUrl }),
  };
};

/**
 * serializeAws_json1_1SelfservicePermissions
 */
const se_SelfservicePermissions = (input: SelfservicePermissions, context: __SerdeContext): any => {
  return {
    ...(input.ChangeComputeType != null && { ChangeComputeType: input.ChangeComputeType }),
    ...(input.IncreaseVolumeSize != null && { IncreaseVolumeSize: input.IncreaseVolumeSize }),
    ...(input.RebuildWorkspace != null && { RebuildWorkspace: input.RebuildWorkspace }),
    ...(input.RestartWorkspace != null && { RestartWorkspace: input.RestartWorkspace }),
    ...(input.SwitchRunningMode != null && { SwitchRunningMode: input.SwitchRunningMode }),
  };
};

/**
 * serializeAws_json1_1StandbyWorkspace
 */
const se_StandbyWorkspace = (input: StandbyWorkspace, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.PrimaryWorkspaceId != null && { PrimaryWorkspaceId: input.PrimaryWorkspaceId }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.VolumeEncryptionKey != null && { VolumeEncryptionKey: input.VolumeEncryptionKey }),
  };
};

/**
 * serializeAws_json1_1StandbyWorkspacesList
 */
const se_StandbyWorkspacesList = (input: StandbyWorkspace[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_StandbyWorkspace(entry, context);
    });
};

/**
 * serializeAws_json1_1StartRequest
 */
const se_StartRequest = (input: StartRequest, context: __SerdeContext): any => {
  return {
    ...(input.WorkspaceId != null && { WorkspaceId: input.WorkspaceId }),
  };
};

/**
 * serializeAws_json1_1StartWorkspaceRequests
 */
const se_StartWorkspaceRequests = (input: StartRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_StartRequest(entry, context);
    });
};

/**
 * serializeAws_json1_1StartWorkspacesRequest
 */
const se_StartWorkspacesRequest = (input: StartWorkspacesRequest, context: __SerdeContext): any => {
  return {
    ...(input.StartWorkspaceRequests != null && {
      StartWorkspaceRequests: se_StartWorkspaceRequests(input.StartWorkspaceRequests, context),
    }),
  };
};

/**
 * serializeAws_json1_1StopRequest
 */
const se_StopRequest = (input: StopRequest, context: __SerdeContext): any => {
  return {
    ...(input.WorkspaceId != null && { WorkspaceId: input.WorkspaceId }),
  };
};

/**
 * serializeAws_json1_1StopWorkspaceRequests
 */
const se_StopWorkspaceRequests = (input: StopRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_StopRequest(entry, context);
    });
};

/**
 * serializeAws_json1_1StopWorkspacesRequest
 */
const se_StopWorkspacesRequest = (input: StopWorkspacesRequest, context: __SerdeContext): any => {
  return {
    ...(input.StopWorkspaceRequests != null && {
      StopWorkspaceRequests: se_StopWorkspaceRequests(input.StopWorkspaceRequests, context),
    }),
  };
};

/**
 * serializeAws_json1_1SubnetIds
 */
const se_SubnetIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1TerminateRequest
 */
const se_TerminateRequest = (input: TerminateRequest, context: __SerdeContext): any => {
  return {
    ...(input.WorkspaceId != null && { WorkspaceId: input.WorkspaceId }),
  };
};

/**
 * serializeAws_json1_1TerminateWorkspaceRequests
 */
const se_TerminateWorkspaceRequests = (input: TerminateRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TerminateRequest(entry, context);
    });
};

/**
 * serializeAws_json1_1TerminateWorkspacesRequest
 */
const se_TerminateWorkspacesRequest = (input: TerminateWorkspacesRequest, context: __SerdeContext): any => {
  return {
    ...(input.TerminateWorkspaceRequests != null && {
      TerminateWorkspaceRequests: se_TerminateWorkspaceRequests(input.TerminateWorkspaceRequests, context),
    }),
  };
};

/**
 * serializeAws_json1_1UpdateConnectClientAddInRequest
 */
const se_UpdateConnectClientAddInRequest = (input: UpdateConnectClientAddInRequest, context: __SerdeContext): any => {
  return {
    ...(input.AddInId != null && { AddInId: input.AddInId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.URL != null && { URL: input.URL }),
  };
};

/**
 * serializeAws_json1_1UpdateConnectionAliasPermissionRequest
 */
const se_UpdateConnectionAliasPermissionRequest = (
  input: UpdateConnectionAliasPermissionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AliasId != null && { AliasId: input.AliasId }),
    ...(input.ConnectionAliasPermission != null && {
      ConnectionAliasPermission: se_ConnectionAliasPermission(input.ConnectionAliasPermission, context),
    }),
  };
};

/**
 * serializeAws_json1_1UpdateRulesOfIpGroupRequest
 */
const se_UpdateRulesOfIpGroupRequest = (input: UpdateRulesOfIpGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.GroupId != null && { GroupId: input.GroupId }),
    ...(input.UserRules != null && { UserRules: se_IpRuleList(input.UserRules, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateWorkspaceBundleRequest
 */
const se_UpdateWorkspaceBundleRequest = (input: UpdateWorkspaceBundleRequest, context: __SerdeContext): any => {
  return {
    ...(input.BundleId != null && { BundleId: input.BundleId }),
    ...(input.ImageId != null && { ImageId: input.ImageId }),
  };
};

/**
 * serializeAws_json1_1UpdateWorkspaceImagePermissionRequest
 */
const se_UpdateWorkspaceImagePermissionRequest = (
  input: UpdateWorkspaceImagePermissionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllowCopyImage != null && { AllowCopyImage: input.AllowCopyImage }),
    ...(input.ImageId != null && { ImageId: input.ImageId }),
    ...(input.SharedAccountId != null && { SharedAccountId: input.SharedAccountId }),
  };
};

/**
 * serializeAws_json1_1UserStorage
 */
const se_UserStorage = (input: UserStorage, context: __SerdeContext): any => {
  return {
    ...(input.Capacity != null && { Capacity: input.Capacity }),
  };
};

/**
 * serializeAws_json1_1WorkspaceAccessProperties
 */
const se_WorkspaceAccessProperties = (input: WorkspaceAccessProperties, context: __SerdeContext): any => {
  return {
    ...(input.DeviceTypeAndroid != null && { DeviceTypeAndroid: input.DeviceTypeAndroid }),
    ...(input.DeviceTypeChromeOs != null && { DeviceTypeChromeOs: input.DeviceTypeChromeOs }),
    ...(input.DeviceTypeIos != null && { DeviceTypeIos: input.DeviceTypeIos }),
    ...(input.DeviceTypeLinux != null && { DeviceTypeLinux: input.DeviceTypeLinux }),
    ...(input.DeviceTypeOsx != null && { DeviceTypeOsx: input.DeviceTypeOsx }),
    ...(input.DeviceTypeWeb != null && { DeviceTypeWeb: input.DeviceTypeWeb }),
    ...(input.DeviceTypeWindows != null && { DeviceTypeWindows: input.DeviceTypeWindows }),
    ...(input.DeviceTypeZeroClient != null && { DeviceTypeZeroClient: input.DeviceTypeZeroClient }),
  };
};

/**
 * serializeAws_json1_1WorkspaceCreationProperties
 */
const se_WorkspaceCreationProperties = (input: WorkspaceCreationProperties, context: __SerdeContext): any => {
  return {
    ...(input.CustomSecurityGroupId != null && { CustomSecurityGroupId: input.CustomSecurityGroupId }),
    ...(input.DefaultOu != null && { DefaultOu: input.DefaultOu }),
    ...(input.EnableInternetAccess != null && { EnableInternetAccess: input.EnableInternetAccess }),
    ...(input.EnableMaintenanceMode != null && { EnableMaintenanceMode: input.EnableMaintenanceMode }),
    ...(input.EnableWorkDocs != null && { EnableWorkDocs: input.EnableWorkDocs }),
    ...(input.UserEnabledAsLocalAdministrator != null && {
      UserEnabledAsLocalAdministrator: input.UserEnabledAsLocalAdministrator,
    }),
  };
};

/**
 * serializeAws_json1_1WorkspaceIdList
 */
const se_WorkspaceIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1WorkspaceImageIdList
 */
const se_WorkspaceImageIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1WorkspaceProperties
 */
const se_WorkspaceProperties = (input: WorkspaceProperties, context: __SerdeContext): any => {
  return {
    ...(input.ComputeTypeName != null && { ComputeTypeName: input.ComputeTypeName }),
    ...(input.Protocols != null && { Protocols: se_ProtocolList(input.Protocols, context) }),
    ...(input.RootVolumeSizeGib != null && { RootVolumeSizeGib: input.RootVolumeSizeGib }),
    ...(input.RunningMode != null && { RunningMode: input.RunningMode }),
    ...(input.RunningModeAutoStopTimeoutInMinutes != null && {
      RunningModeAutoStopTimeoutInMinutes: input.RunningModeAutoStopTimeoutInMinutes,
    }),
    ...(input.UserVolumeSizeGib != null && { UserVolumeSizeGib: input.UserVolumeSizeGib }),
  };
};

/**
 * serializeAws_json1_1WorkspaceRequest
 */
const se_WorkspaceRequest = (input: WorkspaceRequest, context: __SerdeContext): any => {
  return {
    ...(input.BundleId != null && { BundleId: input.BundleId }),
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.RootVolumeEncryptionEnabled != null && {
      RootVolumeEncryptionEnabled: input.RootVolumeEncryptionEnabled,
    }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.UserName != null && { UserName: input.UserName }),
    ...(input.UserVolumeEncryptionEnabled != null && {
      UserVolumeEncryptionEnabled: input.UserVolumeEncryptionEnabled,
    }),
    ...(input.VolumeEncryptionKey != null && { VolumeEncryptionKey: input.VolumeEncryptionKey }),
    ...(input.WorkspaceProperties != null && {
      WorkspaceProperties: se_WorkspaceProperties(input.WorkspaceProperties, context),
    }),
  };
};

/**
 * serializeAws_json1_1WorkspaceRequestList
 */
const se_WorkspaceRequestList = (input: WorkspaceRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_WorkspaceRequest(entry, context);
    });
};

/**
 * deserializeAws_json1_1AccessDeniedException
 */
const de_AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1AccountModification
 */
const de_AccountModification = (output: any, context: __SerdeContext): AccountModification => {
  return {
    DedicatedTenancyManagementCidrRange: __expectString(output.DedicatedTenancyManagementCidrRange),
    DedicatedTenancySupport: __expectString(output.DedicatedTenancySupport),
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    ModificationState: __expectString(output.ModificationState),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AccountModificationList
 */
const de_AccountModificationList = (output: any, context: __SerdeContext): AccountModification[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AccountModification(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AssociateConnectionAliasResult
 */
const de_AssociateConnectionAliasResult = (output: any, context: __SerdeContext): AssociateConnectionAliasResult => {
  return {
    ConnectionIdentifier: __expectString(output.ConnectionIdentifier),
  } as any;
};

/**
 * deserializeAws_json1_1AssociateIpGroupsResult
 */
const de_AssociateIpGroupsResult = (output: any, context: __SerdeContext): AssociateIpGroupsResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AuthorizeIpRulesResult
 */
const de_AuthorizeIpRulesResult = (output: any, context: __SerdeContext): AuthorizeIpRulesResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1BundleList
 */
const de_BundleList = (output: any, context: __SerdeContext): WorkspaceBundle[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WorkspaceBundle(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CertificateBasedAuthProperties
 */
const de_CertificateBasedAuthProperties = (output: any, context: __SerdeContext): CertificateBasedAuthProperties => {
  return {
    CertificateAuthorityArn: __expectString(output.CertificateAuthorityArn),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1ClientProperties
 */
const de_ClientProperties = (output: any, context: __SerdeContext): ClientProperties => {
  return {
    LogUploadEnabled: __expectString(output.LogUploadEnabled),
    ReconnectEnabled: __expectString(output.ReconnectEnabled),
  } as any;
};

/**
 * deserializeAws_json1_1ClientPropertiesList
 */
const de_ClientPropertiesList = (output: any, context: __SerdeContext): ClientPropertiesResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ClientPropertiesResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ClientPropertiesResult
 */
const de_ClientPropertiesResult = (output: any, context: __SerdeContext): ClientPropertiesResult => {
  return {
    ClientProperties:
      output.ClientProperties != null ? de_ClientProperties(output.ClientProperties, context) : undefined,
    ResourceId: __expectString(output.ResourceId),
  } as any;
};

/**
 * deserializeAws_json1_1ComputeType
 */
const de_ComputeType = (output: any, context: __SerdeContext): ComputeType => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1ConnectClientAddIn
 */
const de_ConnectClientAddIn = (output: any, context: __SerdeContext): ConnectClientAddIn => {
  return {
    AddInId: __expectString(output.AddInId),
    Name: __expectString(output.Name),
    ResourceId: __expectString(output.ResourceId),
    URL: __expectString(output.URL),
  } as any;
};

/**
 * deserializeAws_json1_1ConnectClientAddInList
 */
const de_ConnectClientAddInList = (output: any, context: __SerdeContext): ConnectClientAddIn[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConnectClientAddIn(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConnectionAlias
 */
const de_ConnectionAlias = (output: any, context: __SerdeContext): ConnectionAlias => {
  return {
    AliasId: __expectString(output.AliasId),
    Associations:
      output.Associations != null ? de_ConnectionAliasAssociationList(output.Associations, context) : undefined,
    ConnectionString: __expectString(output.ConnectionString),
    OwnerAccountId: __expectString(output.OwnerAccountId),
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_json1_1ConnectionAliasAssociation
 */
const de_ConnectionAliasAssociation = (output: any, context: __SerdeContext): ConnectionAliasAssociation => {
  return {
    AssociatedAccountId: __expectString(output.AssociatedAccountId),
    AssociationStatus: __expectString(output.AssociationStatus),
    ConnectionIdentifier: __expectString(output.ConnectionIdentifier),
    ResourceId: __expectString(output.ResourceId),
  } as any;
};

/**
 * deserializeAws_json1_1ConnectionAliasAssociationList
 */
const de_ConnectionAliasAssociationList = (output: any, context: __SerdeContext): ConnectionAliasAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConnectionAliasAssociation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConnectionAliasList
 */
const de_ConnectionAliasList = (output: any, context: __SerdeContext): ConnectionAlias[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConnectionAlias(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConnectionAliasPermission
 */
const de_ConnectionAliasPermission = (output: any, context: __SerdeContext): ConnectionAliasPermission => {
  return {
    AllowAssociation: __expectBoolean(output.AllowAssociation),
    SharedAccountId: __expectString(output.SharedAccountId),
  } as any;
};

/**
 * deserializeAws_json1_1ConnectionAliasPermissions
 */
const de_ConnectionAliasPermissions = (output: any, context: __SerdeContext): ConnectionAliasPermission[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConnectionAliasPermission(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CopyWorkspaceImageResult
 */
const de_CopyWorkspaceImageResult = (output: any, context: __SerdeContext): CopyWorkspaceImageResult => {
  return {
    ImageId: __expectString(output.ImageId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateConnectClientAddInResult
 */
const de_CreateConnectClientAddInResult = (output: any, context: __SerdeContext): CreateConnectClientAddInResult => {
  return {
    AddInId: __expectString(output.AddInId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateConnectionAliasResult
 */
const de_CreateConnectionAliasResult = (output: any, context: __SerdeContext): CreateConnectionAliasResult => {
  return {
    AliasId: __expectString(output.AliasId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateIpGroupResult
 */
const de_CreateIpGroupResult = (output: any, context: __SerdeContext): CreateIpGroupResult => {
  return {
    GroupId: __expectString(output.GroupId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateStandbyWorkspacesResult
 */
const de_CreateStandbyWorkspacesResult = (output: any, context: __SerdeContext): CreateStandbyWorkspacesResult => {
  return {
    FailedStandbyRequests:
      output.FailedStandbyRequests != null
        ? de_FailedCreateStandbyWorkspacesRequestList(output.FailedStandbyRequests, context)
        : undefined,
    PendingStandbyRequests:
      output.PendingStandbyRequests != null
        ? de_PendingCreateStandbyWorkspacesRequestList(output.PendingStandbyRequests, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateTagsResult
 */
const de_CreateTagsResult = (output: any, context: __SerdeContext): CreateTagsResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1CreateUpdatedWorkspaceImageResult
 */
const de_CreateUpdatedWorkspaceImageResult = (
  output: any,
  context: __SerdeContext
): CreateUpdatedWorkspaceImageResult => {
  return {
    ImageId: __expectString(output.ImageId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateWorkspaceBundleResult
 */
const de_CreateWorkspaceBundleResult = (output: any, context: __SerdeContext): CreateWorkspaceBundleResult => {
  return {
    WorkspaceBundle: output.WorkspaceBundle != null ? de_WorkspaceBundle(output.WorkspaceBundle, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateWorkspaceImageResult
 */
const de_CreateWorkspaceImageResult = (output: any, context: __SerdeContext): CreateWorkspaceImageResult => {
  return {
    Created:
      output.Created != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Created))) : undefined,
    Description: __expectString(output.Description),
    ImageId: __expectString(output.ImageId),
    Name: __expectString(output.Name),
    OperatingSystem: output.OperatingSystem != null ? de_OperatingSystem(output.OperatingSystem, context) : undefined,
    OwnerAccountId: __expectString(output.OwnerAccountId),
    RequiredTenancy: __expectString(output.RequiredTenancy),
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_json1_1CreateWorkspacesResult
 */
const de_CreateWorkspacesResult = (output: any, context: __SerdeContext): CreateWorkspacesResult => {
  return {
    FailedRequests:
      output.FailedRequests != null ? de_FailedCreateWorkspaceRequests(output.FailedRequests, context) : undefined,
    PendingRequests: output.PendingRequests != null ? de_WorkspaceList(output.PendingRequests, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DedicatedTenancyCidrRangeList
 */
const de_DedicatedTenancyCidrRangeList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DefaultClientBrandingAttributes
 */
const de_DefaultClientBrandingAttributes = (output: any, context: __SerdeContext): DefaultClientBrandingAttributes => {
  return {
    ForgotPasswordLink: __expectString(output.ForgotPasswordLink),
    LoginMessage: output.LoginMessage != null ? de_LoginMessage(output.LoginMessage, context) : undefined,
    LogoUrl: __expectString(output.LogoUrl),
    SupportEmail: __expectString(output.SupportEmail),
    SupportLink: __expectString(output.SupportLink),
  } as any;
};

/**
 * deserializeAws_json1_1DefaultWorkspaceCreationProperties
 */
const de_DefaultWorkspaceCreationProperties = (
  output: any,
  context: __SerdeContext
): DefaultWorkspaceCreationProperties => {
  return {
    CustomSecurityGroupId: __expectString(output.CustomSecurityGroupId),
    DefaultOu: __expectString(output.DefaultOu),
    EnableInternetAccess: __expectBoolean(output.EnableInternetAccess),
    EnableMaintenanceMode: __expectBoolean(output.EnableMaintenanceMode),
    EnableWorkDocs: __expectBoolean(output.EnableWorkDocs),
    UserEnabledAsLocalAdministrator: __expectBoolean(output.UserEnabledAsLocalAdministrator),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteClientBrandingResult
 */
const de_DeleteClientBrandingResult = (output: any, context: __SerdeContext): DeleteClientBrandingResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteConnectClientAddInResult
 */
const de_DeleteConnectClientAddInResult = (output: any, context: __SerdeContext): DeleteConnectClientAddInResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteConnectionAliasResult
 */
const de_DeleteConnectionAliasResult = (output: any, context: __SerdeContext): DeleteConnectionAliasResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteIpGroupResult
 */
const de_DeleteIpGroupResult = (output: any, context: __SerdeContext): DeleteIpGroupResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteTagsResult
 */
const de_DeleteTagsResult = (output: any, context: __SerdeContext): DeleteTagsResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteWorkspaceBundleResult
 */
const de_DeleteWorkspaceBundleResult = (output: any, context: __SerdeContext): DeleteWorkspaceBundleResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteWorkspaceImageResult
 */
const de_DeleteWorkspaceImageResult = (output: any, context: __SerdeContext): DeleteWorkspaceImageResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeregisterWorkspaceDirectoryResult
 */
const de_DeregisterWorkspaceDirectoryResult = (
  output: any,
  context: __SerdeContext
): DeregisterWorkspaceDirectoryResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DescribeAccountModificationsResult
 */
const de_DescribeAccountModificationsResult = (
  output: any,
  context: __SerdeContext
): DescribeAccountModificationsResult => {
  return {
    AccountModifications:
      output.AccountModifications != null
        ? de_AccountModificationList(output.AccountModifications, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeAccountResult
 */
const de_DescribeAccountResult = (output: any, context: __SerdeContext): DescribeAccountResult => {
  return {
    DedicatedTenancyManagementCidrRange: __expectString(output.DedicatedTenancyManagementCidrRange),
    DedicatedTenancySupport: __expectString(output.DedicatedTenancySupport),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeClientBrandingResult
 */
const de_DescribeClientBrandingResult = (output: any, context: __SerdeContext): DescribeClientBrandingResult => {
  return {
    DeviceTypeAndroid:
      output.DeviceTypeAndroid != null
        ? de_DefaultClientBrandingAttributes(output.DeviceTypeAndroid, context)
        : undefined,
    DeviceTypeIos:
      output.DeviceTypeIos != null ? de_IosClientBrandingAttributes(output.DeviceTypeIos, context) : undefined,
    DeviceTypeLinux:
      output.DeviceTypeLinux != null ? de_DefaultClientBrandingAttributes(output.DeviceTypeLinux, context) : undefined,
    DeviceTypeOsx:
      output.DeviceTypeOsx != null ? de_DefaultClientBrandingAttributes(output.DeviceTypeOsx, context) : undefined,
    DeviceTypeWeb:
      output.DeviceTypeWeb != null ? de_DefaultClientBrandingAttributes(output.DeviceTypeWeb, context) : undefined,
    DeviceTypeWindows:
      output.DeviceTypeWindows != null
        ? de_DefaultClientBrandingAttributes(output.DeviceTypeWindows, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeClientPropertiesResult
 */
const de_DescribeClientPropertiesResult = (output: any, context: __SerdeContext): DescribeClientPropertiesResult => {
  return {
    ClientPropertiesList:
      output.ClientPropertiesList != null ? de_ClientPropertiesList(output.ClientPropertiesList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeConnectClientAddInsResult
 */
const de_DescribeConnectClientAddInsResult = (
  output: any,
  context: __SerdeContext
): DescribeConnectClientAddInsResult => {
  return {
    AddIns: output.AddIns != null ? de_ConnectClientAddInList(output.AddIns, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeConnectionAliasesResult
 */
const de_DescribeConnectionAliasesResult = (output: any, context: __SerdeContext): DescribeConnectionAliasesResult => {
  return {
    ConnectionAliases:
      output.ConnectionAliases != null ? de_ConnectionAliasList(output.ConnectionAliases, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeConnectionAliasPermissionsResult
 */
const de_DescribeConnectionAliasPermissionsResult = (
  output: any,
  context: __SerdeContext
): DescribeConnectionAliasPermissionsResult => {
  return {
    AliasId: __expectString(output.AliasId),
    ConnectionAliasPermissions:
      output.ConnectionAliasPermissions != null
        ? de_ConnectionAliasPermissions(output.ConnectionAliasPermissions, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeIpGroupsResult
 */
const de_DescribeIpGroupsResult = (output: any, context: __SerdeContext): DescribeIpGroupsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Result: output.Result != null ? de_WorkspacesIpGroupsList(output.Result, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeTagsResult
 */
const de_DescribeTagsResult = (output: any, context: __SerdeContext): DescribeTagsResult => {
  return {
    TagList: output.TagList != null ? de_TagList(output.TagList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeWorkspaceBundlesResult
 */
const de_DescribeWorkspaceBundlesResult = (output: any, context: __SerdeContext): DescribeWorkspaceBundlesResult => {
  return {
    Bundles: output.Bundles != null ? de_BundleList(output.Bundles, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeWorkspaceDirectoriesResult
 */
const de_DescribeWorkspaceDirectoriesResult = (
  output: any,
  context: __SerdeContext
): DescribeWorkspaceDirectoriesResult => {
  return {
    Directories: output.Directories != null ? de_DirectoryList(output.Directories, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeWorkspaceImagePermissionsResult
 */
const de_DescribeWorkspaceImagePermissionsResult = (
  output: any,
  context: __SerdeContext
): DescribeWorkspaceImagePermissionsResult => {
  return {
    ImageId: __expectString(output.ImageId),
    ImagePermissions:
      output.ImagePermissions != null ? de_ImagePermissions(output.ImagePermissions, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeWorkspaceImagesResult
 */
const de_DescribeWorkspaceImagesResult = (output: any, context: __SerdeContext): DescribeWorkspaceImagesResult => {
  return {
    Images: output.Images != null ? de_WorkspaceImageList(output.Images, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeWorkspacesConnectionStatusResult
 */
const de_DescribeWorkspacesConnectionStatusResult = (
  output: any,
  context: __SerdeContext
): DescribeWorkspacesConnectionStatusResult => {
  return {
    NextToken: __expectString(output.NextToken),
    WorkspacesConnectionStatus:
      output.WorkspacesConnectionStatus != null
        ? de_WorkspaceConnectionStatusList(output.WorkspacesConnectionStatus, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeWorkspaceSnapshotsResult
 */
const de_DescribeWorkspaceSnapshotsResult = (
  output: any,
  context: __SerdeContext
): DescribeWorkspaceSnapshotsResult => {
  return {
    RebuildSnapshots: output.RebuildSnapshots != null ? de_SnapshotList(output.RebuildSnapshots, context) : undefined,
    RestoreSnapshots: output.RestoreSnapshots != null ? de_SnapshotList(output.RestoreSnapshots, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeWorkspacesResult
 */
const de_DescribeWorkspacesResult = (output: any, context: __SerdeContext): DescribeWorkspacesResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Workspaces: output.Workspaces != null ? de_WorkspaceList(output.Workspaces, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DirectoryList
 */
const de_DirectoryList = (output: any, context: __SerdeContext): WorkspaceDirectory[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WorkspaceDirectory(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DisassociateConnectionAliasResult
 */
const de_DisassociateConnectionAliasResult = (
  output: any,
  context: __SerdeContext
): DisassociateConnectionAliasResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DisassociateIpGroupsResult
 */
const de_DisassociateIpGroupsResult = (output: any, context: __SerdeContext): DisassociateIpGroupsResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DnsIpAddresses
 */
const de_DnsIpAddresses = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FailedCreateStandbyWorkspacesRequest
 */
const de_FailedCreateStandbyWorkspacesRequest = (
  output: any,
  context: __SerdeContext
): FailedCreateStandbyWorkspacesRequest => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    StandbyWorkspaceRequest:
      output.StandbyWorkspaceRequest != null ? de_StandbyWorkspace(output.StandbyWorkspaceRequest, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1FailedCreateStandbyWorkspacesRequestList
 */
const de_FailedCreateStandbyWorkspacesRequestList = (
  output: any,
  context: __SerdeContext
): FailedCreateStandbyWorkspacesRequest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FailedCreateStandbyWorkspacesRequest(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FailedCreateWorkspaceRequest
 */
const de_FailedCreateWorkspaceRequest = (output: any, context: __SerdeContext): FailedCreateWorkspaceRequest => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    WorkspaceRequest:
      output.WorkspaceRequest != null ? de_WorkspaceRequest(output.WorkspaceRequest, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1FailedCreateWorkspaceRequests
 */
const de_FailedCreateWorkspaceRequests = (output: any, context: __SerdeContext): FailedCreateWorkspaceRequest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FailedCreateWorkspaceRequest(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FailedRebootWorkspaceRequests
 */
const de_FailedRebootWorkspaceRequests = (output: any, context: __SerdeContext): FailedWorkspaceChangeRequest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FailedWorkspaceChangeRequest(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FailedRebuildWorkspaceRequests
 */
const de_FailedRebuildWorkspaceRequests = (output: any, context: __SerdeContext): FailedWorkspaceChangeRequest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FailedWorkspaceChangeRequest(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FailedStartWorkspaceRequests
 */
const de_FailedStartWorkspaceRequests = (output: any, context: __SerdeContext): FailedWorkspaceChangeRequest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FailedWorkspaceChangeRequest(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FailedStopWorkspaceRequests
 */
const de_FailedStopWorkspaceRequests = (output: any, context: __SerdeContext): FailedWorkspaceChangeRequest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FailedWorkspaceChangeRequest(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FailedTerminateWorkspaceRequests
 */
const de_FailedTerminateWorkspaceRequests = (output: any, context: __SerdeContext): FailedWorkspaceChangeRequest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FailedWorkspaceChangeRequest(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FailedWorkspaceChangeRequest
 */
const de_FailedWorkspaceChangeRequest = (output: any, context: __SerdeContext): FailedWorkspaceChangeRequest => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    WorkspaceId: __expectString(output.WorkspaceId),
  } as any;
};

/**
 * deserializeAws_json1_1ImagePermission
 */
const de_ImagePermission = (output: any, context: __SerdeContext): ImagePermission => {
  return {
    SharedAccountId: __expectString(output.SharedAccountId),
  } as any;
};

/**
 * deserializeAws_json1_1ImagePermissions
 */
const de_ImagePermissions = (output: any, context: __SerdeContext): ImagePermission[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ImagePermission(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ImportClientBrandingResult
 */
const de_ImportClientBrandingResult = (output: any, context: __SerdeContext): ImportClientBrandingResult => {
  return {
    DeviceTypeAndroid:
      output.DeviceTypeAndroid != null
        ? de_DefaultClientBrandingAttributes(output.DeviceTypeAndroid, context)
        : undefined,
    DeviceTypeIos:
      output.DeviceTypeIos != null ? de_IosClientBrandingAttributes(output.DeviceTypeIos, context) : undefined,
    DeviceTypeLinux:
      output.DeviceTypeLinux != null ? de_DefaultClientBrandingAttributes(output.DeviceTypeLinux, context) : undefined,
    DeviceTypeOsx:
      output.DeviceTypeOsx != null ? de_DefaultClientBrandingAttributes(output.DeviceTypeOsx, context) : undefined,
    DeviceTypeWeb:
      output.DeviceTypeWeb != null ? de_DefaultClientBrandingAttributes(output.DeviceTypeWeb, context) : undefined,
    DeviceTypeWindows:
      output.DeviceTypeWindows != null
        ? de_DefaultClientBrandingAttributes(output.DeviceTypeWindows, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ImportWorkspaceImageResult
 */
const de_ImportWorkspaceImageResult = (output: any, context: __SerdeContext): ImportWorkspaceImageResult => {
  return {
    ImageId: __expectString(output.ImageId),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidParameterValuesException
 */
const de_InvalidParameterValuesException = (output: any, context: __SerdeContext): InvalidParameterValuesException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidResourceStateException
 */
const de_InvalidResourceStateException = (output: any, context: __SerdeContext): InvalidResourceStateException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1IosClientBrandingAttributes
 */
const de_IosClientBrandingAttributes = (output: any, context: __SerdeContext): IosClientBrandingAttributes => {
  return {
    ForgotPasswordLink: __expectString(output.ForgotPasswordLink),
    LoginMessage: output.LoginMessage != null ? de_LoginMessage(output.LoginMessage, context) : undefined,
    Logo2xUrl: __expectString(output.Logo2xUrl),
    Logo3xUrl: __expectString(output.Logo3xUrl),
    LogoUrl: __expectString(output.LogoUrl),
    SupportEmail: __expectString(output.SupportEmail),
    SupportLink: __expectString(output.SupportLink),
  } as any;
};

/**
 * deserializeAws_json1_1IpGroupIdList
 */
const de_IpGroupIdList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1IpRuleItem
 */
const de_IpRuleItem = (output: any, context: __SerdeContext): IpRuleItem => {
  return {
    ipRule: __expectString(output.ipRule),
    ruleDesc: __expectString(output.ruleDesc),
  } as any;
};

/**
 * deserializeAws_json1_1IpRuleList
 */
const de_IpRuleList = (output: any, context: __SerdeContext): IpRuleItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_IpRuleItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListAvailableManagementCidrRangesResult
 */
const de_ListAvailableManagementCidrRangesResult = (
  output: any,
  context: __SerdeContext
): ListAvailableManagementCidrRangesResult => {
  return {
    ManagementCidrRanges:
      output.ManagementCidrRanges != null
        ? de_DedicatedTenancyCidrRangeList(output.ManagementCidrRanges, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1LoginMessage
 */
const de_LoginMessage = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1MigrateWorkspaceResult
 */
const de_MigrateWorkspaceResult = (output: any, context: __SerdeContext): MigrateWorkspaceResult => {
  return {
    SourceWorkspaceId: __expectString(output.SourceWorkspaceId),
    TargetWorkspaceId: __expectString(output.TargetWorkspaceId),
  } as any;
};

/**
 * deserializeAws_json1_1ModificationState
 */
const de_ModificationState = (output: any, context: __SerdeContext): ModificationState => {
  return {
    Resource: __expectString(output.Resource),
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_json1_1ModificationStateList
 */
const de_ModificationStateList = (output: any, context: __SerdeContext): ModificationState[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ModificationState(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ModifyAccountResult
 */
const de_ModifyAccountResult = (output: any, context: __SerdeContext): ModifyAccountResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ModifyCertificateBasedAuthPropertiesResult
 */
const de_ModifyCertificateBasedAuthPropertiesResult = (
  output: any,
  context: __SerdeContext
): ModifyCertificateBasedAuthPropertiesResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ModifyClientPropertiesResult
 */
const de_ModifyClientPropertiesResult = (output: any, context: __SerdeContext): ModifyClientPropertiesResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ModifySamlPropertiesResult
 */
const de_ModifySamlPropertiesResult = (output: any, context: __SerdeContext): ModifySamlPropertiesResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ModifySelfservicePermissionsResult
 */
const de_ModifySelfservicePermissionsResult = (
  output: any,
  context: __SerdeContext
): ModifySelfservicePermissionsResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ModifyWorkspaceAccessPropertiesResult
 */
const de_ModifyWorkspaceAccessPropertiesResult = (
  output: any,
  context: __SerdeContext
): ModifyWorkspaceAccessPropertiesResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ModifyWorkspaceCreationPropertiesResult
 */
const de_ModifyWorkspaceCreationPropertiesResult = (
  output: any,
  context: __SerdeContext
): ModifyWorkspaceCreationPropertiesResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ModifyWorkspacePropertiesResult
 */
const de_ModifyWorkspacePropertiesResult = (output: any, context: __SerdeContext): ModifyWorkspacePropertiesResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ModifyWorkspaceStateResult
 */
const de_ModifyWorkspaceStateResult = (output: any, context: __SerdeContext): ModifyWorkspaceStateResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1OperatingSystem
 */
const de_OperatingSystem = (output: any, context: __SerdeContext): OperatingSystem => {
  return {
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1OperationInProgressException
 */
const de_OperationInProgressException = (output: any, context: __SerdeContext): OperationInProgressException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1OperationNotSupportedException
 */
const de_OperationNotSupportedException = (output: any, context: __SerdeContext): OperationNotSupportedException => {
  return {
    message: __expectString(output.message),
    reason: __expectString(output.reason),
  } as any;
};

/**
 * deserializeAws_json1_1PendingCreateStandbyWorkspacesRequest
 */
const de_PendingCreateStandbyWorkspacesRequest = (
  output: any,
  context: __SerdeContext
): PendingCreateStandbyWorkspacesRequest => {
  return {
    DirectoryId: __expectString(output.DirectoryId),
    State: __expectString(output.State),
    UserName: __expectString(output.UserName),
    WorkspaceId: __expectString(output.WorkspaceId),
  } as any;
};

/**
 * deserializeAws_json1_1PendingCreateStandbyWorkspacesRequestList
 */
const de_PendingCreateStandbyWorkspacesRequestList = (
  output: any,
  context: __SerdeContext
): PendingCreateStandbyWorkspacesRequest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PendingCreateStandbyWorkspacesRequest(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProtocolList
 */
const de_ProtocolList = (output: any, context: __SerdeContext): (Protocol | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RebootWorkspacesResult
 */
const de_RebootWorkspacesResult = (output: any, context: __SerdeContext): RebootWorkspacesResult => {
  return {
    FailedRequests:
      output.FailedRequests != null ? de_FailedRebootWorkspaceRequests(output.FailedRequests, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RebuildWorkspacesResult
 */
const de_RebuildWorkspacesResult = (output: any, context: __SerdeContext): RebuildWorkspacesResult => {
  return {
    FailedRequests:
      output.FailedRequests != null ? de_FailedRebuildWorkspaceRequests(output.FailedRequests, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RegisterWorkspaceDirectoryResult
 */
const de_RegisterWorkspaceDirectoryResult = (
  output: any,
  context: __SerdeContext
): RegisterWorkspaceDirectoryResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1RelatedWorkspaceProperties
 */
const de_RelatedWorkspaceProperties = (output: any, context: __SerdeContext): RelatedWorkspaceProperties => {
  return {
    Region: __expectString(output.Region),
    State: __expectString(output.State),
    Type: __expectString(output.Type),
    WorkspaceId: __expectString(output.WorkspaceId),
  } as any;
};

/**
 * deserializeAws_json1_1RelatedWorkspaces
 */
const de_RelatedWorkspaces = (output: any, context: __SerdeContext): RelatedWorkspaceProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RelatedWorkspaceProperties(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResourceAlreadyExistsException
 */
const de_ResourceAlreadyExistsException = (output: any, context: __SerdeContext): ResourceAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceAssociatedException
 */
const de_ResourceAssociatedException = (output: any, context: __SerdeContext): ResourceAssociatedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceCreationFailedException
 */
const de_ResourceCreationFailedException = (output: any, context: __SerdeContext): ResourceCreationFailedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceLimitExceededException
 */
const de_ResourceLimitExceededException = (output: any, context: __SerdeContext): ResourceLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    ResourceId: __expectString(output.ResourceId),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceUnavailableException
 */
const de_ResourceUnavailableException = (output: any, context: __SerdeContext): ResourceUnavailableException => {
  return {
    ResourceId: __expectString(output.ResourceId),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1RestoreWorkspaceResult
 */
const de_RestoreWorkspaceResult = (output: any, context: __SerdeContext): RestoreWorkspaceResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1RevokeIpRulesResult
 */
const de_RevokeIpRulesResult = (output: any, context: __SerdeContext): RevokeIpRulesResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1RootStorage
 */
const de_RootStorage = (output: any, context: __SerdeContext): RootStorage => {
  return {
    Capacity: __expectString(output.Capacity),
  } as any;
};

/**
 * deserializeAws_json1_1SamlProperties
 */
const de_SamlProperties = (output: any, context: __SerdeContext): SamlProperties => {
  return {
    RelayStateParameterName: __expectString(output.RelayStateParameterName),
    Status: __expectString(output.Status),
    UserAccessUrl: __expectString(output.UserAccessUrl),
  } as any;
};

/**
 * deserializeAws_json1_1SelfservicePermissions
 */
const de_SelfservicePermissions = (output: any, context: __SerdeContext): SelfservicePermissions => {
  return {
    ChangeComputeType: __expectString(output.ChangeComputeType),
    IncreaseVolumeSize: __expectString(output.IncreaseVolumeSize),
    RebuildWorkspace: __expectString(output.RebuildWorkspace),
    RestartWorkspace: __expectString(output.RestartWorkspace),
    SwitchRunningMode: __expectString(output.SwitchRunningMode),
  } as any;
};

/**
 * deserializeAws_json1_1Snapshot
 */
const de_Snapshot = (output: any, context: __SerdeContext): Snapshot => {
  return {
    SnapshotTime:
      output.SnapshotTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SnapshotTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SnapshotList
 */
const de_SnapshotList = (output: any, context: __SerdeContext): Snapshot[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Snapshot(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StandbyWorkspace
 */
const de_StandbyWorkspace = (output: any, context: __SerdeContext): StandbyWorkspace => {
  return {
    DirectoryId: __expectString(output.DirectoryId),
    PrimaryWorkspaceId: __expectString(output.PrimaryWorkspaceId),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
    VolumeEncryptionKey: __expectString(output.VolumeEncryptionKey),
  } as any;
};

/**
 * deserializeAws_json1_1StartWorkspacesResult
 */
const de_StartWorkspacesResult = (output: any, context: __SerdeContext): StartWorkspacesResult => {
  return {
    FailedRequests:
      output.FailedRequests != null ? de_FailedStartWorkspaceRequests(output.FailedRequests, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StopWorkspacesResult
 */
const de_StopWorkspacesResult = (output: any, context: __SerdeContext): StopWorkspacesResult => {
  return {
    FailedRequests:
      output.FailedRequests != null ? de_FailedStopWorkspaceRequests(output.FailedRequests, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SubnetIds
 */
const de_SubnetIds = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TerminateWorkspacesResult
 */
const de_TerminateWorkspacesResult = (output: any, context: __SerdeContext): TerminateWorkspacesResult => {
  return {
    FailedRequests:
      output.FailedRequests != null ? de_FailedTerminateWorkspaceRequests(output.FailedRequests, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UnsupportedNetworkConfigurationException
 */
const de_UnsupportedNetworkConfigurationException = (
  output: any,
  context: __SerdeContext
): UnsupportedNetworkConfigurationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1UnsupportedWorkspaceConfigurationException
 */
const de_UnsupportedWorkspaceConfigurationException = (
  output: any,
  context: __SerdeContext
): UnsupportedWorkspaceConfigurationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateConnectClientAddInResult
 */
const de_UpdateConnectClientAddInResult = (output: any, context: __SerdeContext): UpdateConnectClientAddInResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateConnectionAliasPermissionResult
 */
const de_UpdateConnectionAliasPermissionResult = (
  output: any,
  context: __SerdeContext
): UpdateConnectionAliasPermissionResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateResult
 */
const de_UpdateResult = (output: any, context: __SerdeContext): UpdateResult => {
  return {
    Description: __expectString(output.Description),
    UpdateAvailable: __expectBoolean(output.UpdateAvailable),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateRulesOfIpGroupResult
 */
const de_UpdateRulesOfIpGroupResult = (output: any, context: __SerdeContext): UpdateRulesOfIpGroupResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateWorkspaceBundleResult
 */
const de_UpdateWorkspaceBundleResult = (output: any, context: __SerdeContext): UpdateWorkspaceBundleResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateWorkspaceImagePermissionResult
 */
const de_UpdateWorkspaceImagePermissionResult = (
  output: any,
  context: __SerdeContext
): UpdateWorkspaceImagePermissionResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UserStorage
 */
const de_UserStorage = (output: any, context: __SerdeContext): UserStorage => {
  return {
    Capacity: __expectString(output.Capacity),
  } as any;
};

/**
 * deserializeAws_json1_1Workspace
 */
const de_Workspace = (output: any, context: __SerdeContext): Workspace => {
  return {
    BundleId: __expectString(output.BundleId),
    ComputerName: __expectString(output.ComputerName),
    DirectoryId: __expectString(output.DirectoryId),
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    IpAddress: __expectString(output.IpAddress),
    ModificationStates:
      output.ModificationStates != null ? de_ModificationStateList(output.ModificationStates, context) : undefined,
    RelatedWorkspaces:
      output.RelatedWorkspaces != null ? de_RelatedWorkspaces(output.RelatedWorkspaces, context) : undefined,
    RootVolumeEncryptionEnabled: __expectBoolean(output.RootVolumeEncryptionEnabled),
    State: __expectString(output.State),
    SubnetId: __expectString(output.SubnetId),
    UserName: __expectString(output.UserName),
    UserVolumeEncryptionEnabled: __expectBoolean(output.UserVolumeEncryptionEnabled),
    VolumeEncryptionKey: __expectString(output.VolumeEncryptionKey),
    WorkspaceId: __expectString(output.WorkspaceId),
    WorkspaceProperties:
      output.WorkspaceProperties != null ? de_WorkspaceProperties(output.WorkspaceProperties, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1WorkspaceAccessProperties
 */
const de_WorkspaceAccessProperties = (output: any, context: __SerdeContext): WorkspaceAccessProperties => {
  return {
    DeviceTypeAndroid: __expectString(output.DeviceTypeAndroid),
    DeviceTypeChromeOs: __expectString(output.DeviceTypeChromeOs),
    DeviceTypeIos: __expectString(output.DeviceTypeIos),
    DeviceTypeLinux: __expectString(output.DeviceTypeLinux),
    DeviceTypeOsx: __expectString(output.DeviceTypeOsx),
    DeviceTypeWeb: __expectString(output.DeviceTypeWeb),
    DeviceTypeWindows: __expectString(output.DeviceTypeWindows),
    DeviceTypeZeroClient: __expectString(output.DeviceTypeZeroClient),
  } as any;
};

/**
 * deserializeAws_json1_1WorkspaceBundle
 */
const de_WorkspaceBundle = (output: any, context: __SerdeContext): WorkspaceBundle => {
  return {
    BundleId: __expectString(output.BundleId),
    BundleType: __expectString(output.BundleType),
    ComputeType: output.ComputeType != null ? de_ComputeType(output.ComputeType, context) : undefined,
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Description: __expectString(output.Description),
    ImageId: __expectString(output.ImageId),
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    Name: __expectString(output.Name),
    Owner: __expectString(output.Owner),
    RootStorage: output.RootStorage != null ? de_RootStorage(output.RootStorage, context) : undefined,
    State: __expectString(output.State),
    UserStorage: output.UserStorage != null ? de_UserStorage(output.UserStorage, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1WorkspaceConnectionStatus
 */
const de_WorkspaceConnectionStatus = (output: any, context: __SerdeContext): WorkspaceConnectionStatus => {
  return {
    ConnectionState: __expectString(output.ConnectionState),
    ConnectionStateCheckTimestamp:
      output.ConnectionStateCheckTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ConnectionStateCheckTimestamp)))
        : undefined,
    LastKnownUserConnectionTimestamp:
      output.LastKnownUserConnectionTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastKnownUserConnectionTimestamp)))
        : undefined,
    WorkspaceId: __expectString(output.WorkspaceId),
  } as any;
};

/**
 * deserializeAws_json1_1WorkspaceConnectionStatusList
 */
const de_WorkspaceConnectionStatusList = (output: any, context: __SerdeContext): WorkspaceConnectionStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WorkspaceConnectionStatus(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1WorkspaceDirectory
 */
const de_WorkspaceDirectory = (output: any, context: __SerdeContext): WorkspaceDirectory => {
  return {
    Alias: __expectString(output.Alias),
    CertificateBasedAuthProperties:
      output.CertificateBasedAuthProperties != null
        ? de_CertificateBasedAuthProperties(output.CertificateBasedAuthProperties, context)
        : undefined,
    CustomerUserName: __expectString(output.CustomerUserName),
    DirectoryId: __expectString(output.DirectoryId),
    DirectoryName: __expectString(output.DirectoryName),
    DirectoryType: __expectString(output.DirectoryType),
    DnsIpAddresses: output.DnsIpAddresses != null ? de_DnsIpAddresses(output.DnsIpAddresses, context) : undefined,
    IamRoleId: __expectString(output.IamRoleId),
    RegistrationCode: __expectString(output.RegistrationCode),
    SamlProperties: output.SamlProperties != null ? de_SamlProperties(output.SamlProperties, context) : undefined,
    SelfservicePermissions:
      output.SelfservicePermissions != null
        ? de_SelfservicePermissions(output.SelfservicePermissions, context)
        : undefined,
    State: __expectString(output.State),
    SubnetIds: output.SubnetIds != null ? de_SubnetIds(output.SubnetIds, context) : undefined,
    Tenancy: __expectString(output.Tenancy),
    WorkspaceAccessProperties:
      output.WorkspaceAccessProperties != null
        ? de_WorkspaceAccessProperties(output.WorkspaceAccessProperties, context)
        : undefined,
    WorkspaceCreationProperties:
      output.WorkspaceCreationProperties != null
        ? de_DefaultWorkspaceCreationProperties(output.WorkspaceCreationProperties, context)
        : undefined,
    WorkspaceSecurityGroupId: __expectString(output.WorkspaceSecurityGroupId),
    ipGroupIds: output.ipGroupIds != null ? de_IpGroupIdList(output.ipGroupIds, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1WorkspaceImage
 */
const de_WorkspaceImage = (output: any, context: __SerdeContext): WorkspaceImage => {
  return {
    Created:
      output.Created != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Created))) : undefined,
    Description: __expectString(output.Description),
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    ImageId: __expectString(output.ImageId),
    Name: __expectString(output.Name),
    OperatingSystem: output.OperatingSystem != null ? de_OperatingSystem(output.OperatingSystem, context) : undefined,
    OwnerAccountId: __expectString(output.OwnerAccountId),
    RequiredTenancy: __expectString(output.RequiredTenancy),
    State: __expectString(output.State),
    Updates: output.Updates != null ? de_UpdateResult(output.Updates, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1WorkspaceImageList
 */
const de_WorkspaceImageList = (output: any, context: __SerdeContext): WorkspaceImage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
      return de_Workspace(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1WorkspaceProperties
 */
const de_WorkspaceProperties = (output: any, context: __SerdeContext): WorkspaceProperties => {
  return {
    ComputeTypeName: __expectString(output.ComputeTypeName),
    Protocols: output.Protocols != null ? de_ProtocolList(output.Protocols, context) : undefined,
    RootVolumeSizeGib: __expectInt32(output.RootVolumeSizeGib),
    RunningMode: __expectString(output.RunningMode),
    RunningModeAutoStopTimeoutInMinutes: __expectInt32(output.RunningModeAutoStopTimeoutInMinutes),
    UserVolumeSizeGib: __expectInt32(output.UserVolumeSizeGib),
  } as any;
};

/**
 * deserializeAws_json1_1WorkspaceRequest
 */
const de_WorkspaceRequest = (output: any, context: __SerdeContext): WorkspaceRequest => {
  return {
    BundleId: __expectString(output.BundleId),
    DirectoryId: __expectString(output.DirectoryId),
    RootVolumeEncryptionEnabled: __expectBoolean(output.RootVolumeEncryptionEnabled),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
    UserName: __expectString(output.UserName),
    UserVolumeEncryptionEnabled: __expectBoolean(output.UserVolumeEncryptionEnabled),
    VolumeEncryptionKey: __expectString(output.VolumeEncryptionKey),
    WorkspaceProperties:
      output.WorkspaceProperties != null ? de_WorkspaceProperties(output.WorkspaceProperties, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1WorkspacesDefaultRoleNotFoundException
 */
const de_WorkspacesDefaultRoleNotFoundException = (
  output: any,
  context: __SerdeContext
): WorkspacesDefaultRoleNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1WorkspacesIpGroup
 */
const de_WorkspacesIpGroup = (output: any, context: __SerdeContext): WorkspacesIpGroup => {
  return {
    groupDesc: __expectString(output.groupDesc),
    groupId: __expectString(output.groupId),
    groupName: __expectString(output.groupName),
    userRules: output.userRules != null ? de_IpRuleList(output.userRules, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1WorkspacesIpGroupsList
 */
const de_WorkspacesIpGroupsList = (output: any, context: __SerdeContext): WorkspacesIpGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WorkspacesIpGroup(entry, context);
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

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

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

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
