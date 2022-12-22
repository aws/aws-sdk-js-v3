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

export const serializeAws_json1_1AssociateConnectionAliasCommand = async (
  input: AssociateConnectionAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.AssociateConnectionAlias",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateConnectionAliasRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AssociateIpGroupsCommand = async (
  input: AssociateIpGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.AssociateIpGroups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateIpGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AuthorizeIpRulesCommand = async (
  input: AuthorizeIpRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.AuthorizeIpRules",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AuthorizeIpRulesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CopyWorkspaceImageCommand = async (
  input: CopyWorkspaceImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.CopyWorkspaceImage",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CopyWorkspaceImageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateConnectClientAddInCommand = async (
  input: CreateConnectClientAddInCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.CreateConnectClientAddIn",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateConnectClientAddInRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateConnectionAliasCommand = async (
  input: CreateConnectionAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.CreateConnectionAlias",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateConnectionAliasRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateIpGroupCommand = async (
  input: CreateIpGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.CreateIpGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateIpGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateStandbyWorkspacesCommand = async (
  input: CreateStandbyWorkspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.CreateStandbyWorkspaces",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateStandbyWorkspacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateTagsCommand = async (
  input: CreateTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.CreateTags",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateUpdatedWorkspaceImageCommand = async (
  input: CreateUpdatedWorkspaceImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.CreateUpdatedWorkspaceImage",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateUpdatedWorkspaceImageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateWorkspaceBundleCommand = async (
  input: CreateWorkspaceBundleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.CreateWorkspaceBundle",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateWorkspaceBundleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateWorkspaceImageCommand = async (
  input: CreateWorkspaceImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.CreateWorkspaceImage",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateWorkspaceImageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateWorkspacesCommand = async (
  input: CreateWorkspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.CreateWorkspaces",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateWorkspacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteClientBrandingCommand = async (
  input: DeleteClientBrandingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DeleteClientBranding",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteClientBrandingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteConnectClientAddInCommand = async (
  input: DeleteConnectClientAddInCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DeleteConnectClientAddIn",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteConnectClientAddInRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteConnectionAliasCommand = async (
  input: DeleteConnectionAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DeleteConnectionAlias",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteConnectionAliasRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteIpGroupCommand = async (
  input: DeleteIpGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DeleteIpGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteIpGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteTagsCommand = async (
  input: DeleteTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DeleteTags",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteWorkspaceBundleCommand = async (
  input: DeleteWorkspaceBundleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DeleteWorkspaceBundle",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteWorkspaceBundleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteWorkspaceImageCommand = async (
  input: DeleteWorkspaceImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DeleteWorkspaceImage",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteWorkspaceImageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeregisterWorkspaceDirectoryCommand = async (
  input: DeregisterWorkspaceDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DeregisterWorkspaceDirectory",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeregisterWorkspaceDirectoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAccountCommand = async (
  input: DescribeAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DescribeAccount",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAccountModificationsCommand = async (
  input: DescribeAccountModificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DescribeAccountModifications",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeAccountModificationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeClientBrandingCommand = async (
  input: DescribeClientBrandingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DescribeClientBranding",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeClientBrandingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeClientPropertiesCommand = async (
  input: DescribeClientPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DescribeClientProperties",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeClientPropertiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeConnectClientAddInsCommand = async (
  input: DescribeConnectClientAddInsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DescribeConnectClientAddIns",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeConnectClientAddInsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeConnectionAliasesCommand = async (
  input: DescribeConnectionAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DescribeConnectionAliases",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeConnectionAliasesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeConnectionAliasPermissionsCommand = async (
  input: DescribeConnectionAliasPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DescribeConnectionAliasPermissions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeConnectionAliasPermissionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeIpGroupsCommand = async (
  input: DescribeIpGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DescribeIpGroups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeIpGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeTagsCommand = async (
  input: DescribeTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DescribeTags",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeWorkspaceBundlesCommand = async (
  input: DescribeWorkspaceBundlesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DescribeWorkspaceBundles",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeWorkspaceBundlesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeWorkspaceDirectoriesCommand = async (
  input: DescribeWorkspaceDirectoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DescribeWorkspaceDirectories",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeWorkspaceDirectoriesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeWorkspaceImagePermissionsCommand = async (
  input: DescribeWorkspaceImagePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DescribeWorkspaceImagePermissions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeWorkspaceImagePermissionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeWorkspaceImagesCommand = async (
  input: DescribeWorkspaceImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DescribeWorkspaceImages",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeWorkspaceImagesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeWorkspacesCommand = async (
  input: DescribeWorkspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DescribeWorkspaces",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeWorkspacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeWorkspacesConnectionStatusCommand = async (
  input: DescribeWorkspacesConnectionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DescribeWorkspacesConnectionStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeWorkspacesConnectionStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeWorkspaceSnapshotsCommand = async (
  input: DescribeWorkspaceSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DescribeWorkspaceSnapshots",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeWorkspaceSnapshotsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateConnectionAliasCommand = async (
  input: DisassociateConnectionAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DisassociateConnectionAlias",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociateConnectionAliasRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateIpGroupsCommand = async (
  input: DisassociateIpGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.DisassociateIpGroups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociateIpGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ImportClientBrandingCommand = async (
  input: ImportClientBrandingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.ImportClientBranding",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ImportClientBrandingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ImportWorkspaceImageCommand = async (
  input: ImportWorkspaceImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.ImportWorkspaceImage",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ImportWorkspaceImageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAvailableManagementCidrRangesCommand = async (
  input: ListAvailableManagementCidrRangesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.ListAvailableManagementCidrRanges",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAvailableManagementCidrRangesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1MigrateWorkspaceCommand = async (
  input: MigrateWorkspaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.MigrateWorkspace",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1MigrateWorkspaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ModifyAccountCommand = async (
  input: ModifyAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.ModifyAccount",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ModifyAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ModifyCertificateBasedAuthPropertiesCommand = async (
  input: ModifyCertificateBasedAuthPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.ModifyCertificateBasedAuthProperties",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ModifyCertificateBasedAuthPropertiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ModifyClientPropertiesCommand = async (
  input: ModifyClientPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.ModifyClientProperties",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ModifyClientPropertiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ModifySamlPropertiesCommand = async (
  input: ModifySamlPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.ModifySamlProperties",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ModifySamlPropertiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ModifySelfservicePermissionsCommand = async (
  input: ModifySelfservicePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.ModifySelfservicePermissions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ModifySelfservicePermissionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ModifyWorkspaceAccessPropertiesCommand = async (
  input: ModifyWorkspaceAccessPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.ModifyWorkspaceAccessProperties",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ModifyWorkspaceAccessPropertiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ModifyWorkspaceCreationPropertiesCommand = async (
  input: ModifyWorkspaceCreationPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.ModifyWorkspaceCreationProperties",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ModifyWorkspaceCreationPropertiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ModifyWorkspacePropertiesCommand = async (
  input: ModifyWorkspacePropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.ModifyWorkspaceProperties",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ModifyWorkspacePropertiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ModifyWorkspaceStateCommand = async (
  input: ModifyWorkspaceStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.ModifyWorkspaceState",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ModifyWorkspaceStateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RebootWorkspacesCommand = async (
  input: RebootWorkspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.RebootWorkspaces",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RebootWorkspacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RebuildWorkspacesCommand = async (
  input: RebuildWorkspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.RebuildWorkspaces",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RebuildWorkspacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RegisterWorkspaceDirectoryCommand = async (
  input: RegisterWorkspaceDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.RegisterWorkspaceDirectory",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RegisterWorkspaceDirectoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RestoreWorkspaceCommand = async (
  input: RestoreWorkspaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.RestoreWorkspace",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RestoreWorkspaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RevokeIpRulesCommand = async (
  input: RevokeIpRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.RevokeIpRules",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RevokeIpRulesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartWorkspacesCommand = async (
  input: StartWorkspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.StartWorkspaces",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartWorkspacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopWorkspacesCommand = async (
  input: StopWorkspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.StopWorkspaces",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopWorkspacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TerminateWorkspacesCommand = async (
  input: TerminateWorkspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.TerminateWorkspaces",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TerminateWorkspacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateConnectClientAddInCommand = async (
  input: UpdateConnectClientAddInCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.UpdateConnectClientAddIn",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateConnectClientAddInRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateConnectionAliasPermissionCommand = async (
  input: UpdateConnectionAliasPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.UpdateConnectionAliasPermission",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateConnectionAliasPermissionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateRulesOfIpGroupCommand = async (
  input: UpdateRulesOfIpGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.UpdateRulesOfIpGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateRulesOfIpGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateWorkspaceBundleCommand = async (
  input: UpdateWorkspaceBundleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.UpdateWorkspaceBundle",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateWorkspaceBundleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateWorkspaceImagePermissionCommand = async (
  input: UpdateWorkspaceImagePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkspacesService.UpdateWorkspaceImagePermission",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateWorkspaceImagePermissionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AssociateConnectionAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateConnectionAliasCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateConnectionAliasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateConnectionAliasResult(data, context);
  const response: AssociateConnectionAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateConnectionAliasCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      throw await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context);
    case "ResourceAssociatedException":
    case "com.amazonaws.workspaces#ResourceAssociatedException":
      throw await deserializeAws_json1_1ResourceAssociatedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1AssociateIpGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateIpGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateIpGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateIpGroupsResult(data, context);
  const response: AssociateIpGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateIpGroupsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      throw await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1AuthorizeIpRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AuthorizeIpRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AuthorizeIpRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AuthorizeIpRulesResult(data, context);
  const response: AuthorizeIpRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AuthorizeIpRulesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      throw await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CopyWorkspaceImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyWorkspaceImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CopyWorkspaceImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CopyWorkspaceImageResult(data, context);
  const response: CopyWorkspaceImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CopyWorkspaceImageCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.workspaces#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.workspaces#ResourceUnavailableException":
      throw await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateConnectClientAddInCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectClientAddInCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateConnectClientAddInCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateConnectClientAddInResult(data, context);
  const response: CreateConnectClientAddInCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateConnectClientAddInCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.workspaces#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceCreationFailedException":
    case "com.amazonaws.workspaces#ResourceCreationFailedException":
      throw await deserializeAws_json1_1ResourceCreationFailedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateConnectionAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectionAliasCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateConnectionAliasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateConnectionAliasResult(data, context);
  const response: CreateConnectionAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateConnectionAliasCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      throw await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.workspaces#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateIpGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIpGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateIpGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateIpGroupResult(data, context);
  const response: CreateIpGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateIpGroupCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.workspaces#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceCreationFailedException":
    case "com.amazonaws.workspaces#ResourceCreationFailedException":
      throw await deserializeAws_json1_1ResourceCreationFailedExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateStandbyWorkspacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStandbyWorkspacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateStandbyWorkspacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateStandbyWorkspacesResult(data, context);
  const response: CreateStandbyWorkspacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateStandbyWorkspacesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateTagsResult(data, context);
  const response: CreateTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateTagsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateUpdatedWorkspaceImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUpdatedWorkspaceImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateUpdatedWorkspaceImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateUpdatedWorkspaceImageResult(data, context);
  const response: CreateUpdatedWorkspaceImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateUpdatedWorkspaceImageCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      throw await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.workspaces#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateWorkspaceBundleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkspaceBundleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateWorkspaceBundleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateWorkspaceBundleResult(data, context);
  const response: CreateWorkspaceBundleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateWorkspaceBundleCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.workspaces#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.workspaces#ResourceUnavailableException":
      throw await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateWorkspaceImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkspaceImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateWorkspaceImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateWorkspaceImageResult(data, context);
  const response: CreateWorkspaceImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateWorkspaceImageCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      throw await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.workspaces#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateWorkspacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkspacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateWorkspacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateWorkspacesResult(data, context);
  const response: CreateWorkspacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateWorkspacesCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteClientBrandingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClientBrandingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteClientBrandingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteClientBrandingResult(data, context);
  const response: DeleteClientBrandingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteClientBrandingCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteConnectClientAddInCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectClientAddInCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteConnectClientAddInCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteConnectClientAddInResult(data, context);
  const response: DeleteConnectClientAddInCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteConnectClientAddInCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteConnectionAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionAliasCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteConnectionAliasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteConnectionAliasResult(data, context);
  const response: DeleteConnectionAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteConnectionAliasCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      throw await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context);
    case "ResourceAssociatedException":
    case "com.amazonaws.workspaces#ResourceAssociatedException":
      throw await deserializeAws_json1_1ResourceAssociatedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteIpGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIpGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteIpGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteIpGroupResult(data, context);
  const response: DeleteIpGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteIpGroupCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "ResourceAssociatedException":
    case "com.amazonaws.workspaces#ResourceAssociatedException":
      throw await deserializeAws_json1_1ResourceAssociatedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteTagsResult(data, context);
  const response: DeleteTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteTagsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteWorkspaceBundleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkspaceBundleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteWorkspaceBundleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteWorkspaceBundleResult(data, context);
  const response: DeleteWorkspaceBundleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteWorkspaceBundleCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "ResourceAssociatedException":
    case "com.amazonaws.workspaces#ResourceAssociatedException":
      throw await deserializeAws_json1_1ResourceAssociatedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteWorkspaceImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkspaceImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteWorkspaceImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteWorkspaceImageResult(data, context);
  const response: DeleteWorkspaceImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteWorkspaceImageCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      throw await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context);
    case "ResourceAssociatedException":
    case "com.amazonaws.workspaces#ResourceAssociatedException":
      throw await deserializeAws_json1_1ResourceAssociatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeregisterWorkspaceDirectoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterWorkspaceDirectoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeregisterWorkspaceDirectoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeregisterWorkspaceDirectoryResult(data, context);
  const response: DeregisterWorkspaceDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeregisterWorkspaceDirectoryCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      throw await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeAccountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAccountResult(data, context);
  const response: DescribeAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAccountCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeAccountModificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountModificationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeAccountModificationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAccountModificationsResult(data, context);
  const response: DescribeAccountModificationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAccountModificationsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeClientBrandingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClientBrandingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeClientBrandingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeClientBrandingResult(data, context);
  const response: DescribeClientBrandingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeClientBrandingCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeClientPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClientPropertiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeClientPropertiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeClientPropertiesResult(data, context);
  const response: DescribeClientPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeClientPropertiesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeConnectClientAddInsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectClientAddInsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeConnectClientAddInsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeConnectClientAddInsResult(data, context);
  const response: DescribeConnectClientAddInsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeConnectClientAddInsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeConnectionAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectionAliasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeConnectionAliasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeConnectionAliasesResult(data, context);
  const response: DescribeConnectionAliasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeConnectionAliasesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeConnectionAliasPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectionAliasPermissionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeConnectionAliasPermissionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeConnectionAliasPermissionsResult(data, context);
  const response: DescribeConnectionAliasPermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeConnectionAliasPermissionsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeIpGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIpGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeIpGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeIpGroupsResult(data, context);
  const response: DescribeIpGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeIpGroupsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTagsResult(data, context);
  const response: DescribeTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeTagsCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeWorkspaceBundlesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspaceBundlesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeWorkspaceBundlesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeWorkspaceBundlesResult(data, context);
  const response: DescribeWorkspaceBundlesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeWorkspaceBundlesCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeWorkspaceDirectoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspaceDirectoriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeWorkspaceDirectoriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeWorkspaceDirectoriesResult(data, context);
  const response: DescribeWorkspaceDirectoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeWorkspaceDirectoriesCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeWorkspaceImagePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspaceImagePermissionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeWorkspaceImagePermissionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeWorkspaceImagePermissionsResult(data, context);
  const response: DescribeWorkspaceImagePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeWorkspaceImagePermissionsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeWorkspaceImagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspaceImagesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeWorkspaceImagesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeWorkspaceImagesResult(data, context);
  const response: DescribeWorkspaceImagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeWorkspaceImagesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeWorkspacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeWorkspacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeWorkspacesResult(data, context);
  const response: DescribeWorkspacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeWorkspacesCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.workspaces#ResourceUnavailableException":
      throw await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeWorkspacesConnectionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspacesConnectionStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeWorkspacesConnectionStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeWorkspacesConnectionStatusResult(data, context);
  const response: DescribeWorkspacesConnectionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeWorkspacesConnectionStatusCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeWorkspaceSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspaceSnapshotsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeWorkspaceSnapshotsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeWorkspaceSnapshotsResult(data, context);
  const response: DescribeWorkspaceSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeWorkspaceSnapshotsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DisassociateConnectionAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateConnectionAliasCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateConnectionAliasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateConnectionAliasResult(data, context);
  const response: DisassociateConnectionAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateConnectionAliasCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      throw await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DisassociateIpGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateIpGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateIpGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateIpGroupsResult(data, context);
  const response: DisassociateIpGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateIpGroupsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      throw await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ImportClientBrandingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportClientBrandingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ImportClientBrandingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ImportClientBrandingResult(data, context);
  const response: ImportClientBrandingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ImportClientBrandingCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ImportWorkspaceImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportWorkspaceImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ImportWorkspaceImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ImportWorkspaceImageResult(data, context);
  const response: ImportWorkspaceImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ImportWorkspaceImageCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.workspaces#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListAvailableManagementCidrRangesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableManagementCidrRangesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAvailableManagementCidrRangesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAvailableManagementCidrRangesResult(data, context);
  const response: ListAvailableManagementCidrRangesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAvailableManagementCidrRangesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1MigrateWorkspaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MigrateWorkspaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1MigrateWorkspaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1MigrateWorkspaceResult(data, context);
  const response: MigrateWorkspaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1MigrateWorkspaceCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "OperationInProgressException":
    case "com.amazonaws.workspaces#OperationInProgressException":
      throw await deserializeAws_json1_1OperationInProgressExceptionResponse(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.workspaces#ResourceUnavailableException":
      throw await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ModifyAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ModifyAccountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ModifyAccountResult(data, context);
  const response: ModifyAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ModifyAccountCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      throw await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.workspaces#ResourceUnavailableException":
      throw await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ModifyCertificateBasedAuthPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyCertificateBasedAuthPropertiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ModifyCertificateBasedAuthPropertiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ModifyCertificateBasedAuthPropertiesResult(data, context);
  const response: ModifyCertificateBasedAuthPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ModifyCertificateBasedAuthPropertiesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ModifyClientPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClientPropertiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ModifyClientPropertiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ModifyClientPropertiesResult(data, context);
  const response: ModifyClientPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ModifyClientPropertiesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ModifySamlPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifySamlPropertiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ModifySamlPropertiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ModifySamlPropertiesResult(data, context);
  const response: ModifySamlPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ModifySamlPropertiesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ModifySelfservicePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifySelfservicePermissionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ModifySelfservicePermissionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ModifySelfservicePermissionsResult(data, context);
  const response: ModifySelfservicePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ModifySelfservicePermissionsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ModifyWorkspaceAccessPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyWorkspaceAccessPropertiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ModifyWorkspaceAccessPropertiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ModifyWorkspaceAccessPropertiesResult(data, context);
  const response: ModifyWorkspaceAccessPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ModifyWorkspaceAccessPropertiesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ModifyWorkspaceCreationPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyWorkspaceCreationPropertiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ModifyWorkspaceCreationPropertiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ModifyWorkspaceCreationPropertiesResult(data, context);
  const response: ModifyWorkspaceCreationPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ModifyWorkspaceCreationPropertiesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ModifyWorkspacePropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyWorkspacePropertiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ModifyWorkspacePropertiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ModifyWorkspacePropertiesResult(data, context);
  const response: ModifyWorkspacePropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ModifyWorkspacePropertiesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      throw await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context);
    case "OperationInProgressException":
    case "com.amazonaws.workspaces#OperationInProgressException":
      throw await deserializeAws_json1_1OperationInProgressExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.workspaces#ResourceUnavailableException":
      throw await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "UnsupportedWorkspaceConfigurationException":
    case "com.amazonaws.workspaces#UnsupportedWorkspaceConfigurationException":
      throw await deserializeAws_json1_1UnsupportedWorkspaceConfigurationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ModifyWorkspaceStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyWorkspaceStateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ModifyWorkspaceStateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ModifyWorkspaceStateResult(data, context);
  const response: ModifyWorkspaceStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ModifyWorkspaceStateCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      throw await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RebootWorkspacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootWorkspacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RebootWorkspacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RebootWorkspacesResult(data, context);
  const response: RebootWorkspacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RebootWorkspacesCommandError = async (
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
      throw await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RebuildWorkspacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebuildWorkspacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RebuildWorkspacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RebuildWorkspacesResult(data, context);
  const response: RebuildWorkspacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RebuildWorkspacesCommandError = async (
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
      throw await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RegisterWorkspaceDirectoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterWorkspaceDirectoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RegisterWorkspaceDirectoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterWorkspaceDirectoryResult(data, context);
  const response: RegisterWorkspaceDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RegisterWorkspaceDirectoryCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      throw await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedNetworkConfigurationException":
    case "com.amazonaws.workspaces#UnsupportedNetworkConfigurationException":
      throw await deserializeAws_json1_1UnsupportedNetworkConfigurationExceptionResponse(parsedOutput, context);
    case "WorkspacesDefaultRoleNotFoundException":
    case "com.amazonaws.workspaces#WorkspacesDefaultRoleNotFoundException":
      throw await deserializeAws_json1_1WorkspacesDefaultRoleNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RestoreWorkspaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreWorkspaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RestoreWorkspaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RestoreWorkspaceResult(data, context);
  const response: RestoreWorkspaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RestoreWorkspaceCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RevokeIpRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeIpRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RevokeIpRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RevokeIpRulesResult(data, context);
  const response: RevokeIpRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RevokeIpRulesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      throw await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartWorkspacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartWorkspacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartWorkspacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartWorkspacesResult(data, context);
  const response: StartWorkspacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartWorkspacesCommandError = async (
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

export const deserializeAws_json1_1StopWorkspacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopWorkspacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopWorkspacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopWorkspacesResult(data, context);
  const response: StopWorkspacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopWorkspacesCommandError = async (
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

export const deserializeAws_json1_1TerminateWorkspacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateWorkspacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TerminateWorkspacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TerminateWorkspacesResult(data, context);
  const response: TerminateWorkspacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TerminateWorkspacesCommandError = async (
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

export const deserializeAws_json1_1UpdateConnectClientAddInCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectClientAddInCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateConnectClientAddInCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateConnectClientAddInResult(data, context);
  const response: UpdateConnectClientAddInCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateConnectClientAddInCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateConnectionAliasPermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectionAliasPermissionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateConnectionAliasPermissionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateConnectionAliasPermissionResult(data, context);
  const response: UpdateConnectionAliasPermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateConnectionAliasPermissionCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      throw await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context);
    case "ResourceAssociatedException":
    case "com.amazonaws.workspaces#ResourceAssociatedException":
      throw await deserializeAws_json1_1ResourceAssociatedExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateRulesOfIpGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRulesOfIpGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateRulesOfIpGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateRulesOfIpGroupResult(data, context);
  const response: UpdateRulesOfIpGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateRulesOfIpGroupCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      throw await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      throw await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateWorkspaceBundleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkspaceBundleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateWorkspaceBundleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateWorkspaceBundleResult(data, context);
  const response: UpdateWorkspaceBundleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateWorkspaceBundleCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.workspaces#ResourceUnavailableException":
      throw await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateWorkspaceImagePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkspaceImagePermissionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateWorkspaceImagePermissionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateWorkspaceImagePermissionResult(data, context);
  const response: UpdateWorkspaceImagePermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateWorkspaceImagePermissionCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      throw await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      throw await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.workspaces#ResourceUnavailableException":
      throw await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidParameterValuesExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValuesException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterValuesException(body, context);
  const exception = new InvalidParameterValuesException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidResourceStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidResourceStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidResourceStateException(body, context);
  const exception = new InvalidResourceStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1OperationInProgressExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationInProgressException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OperationInProgressException(body, context);
  const exception = new OperationInProgressException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1OperationNotSupportedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationNotSupportedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OperationNotSupportedException(body, context);
  const exception = new OperationNotSupportedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceAlreadyExistsException(body, context);
  const exception = new ResourceAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceAssociatedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAssociatedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceAssociatedException(body, context);
  const exception = new ResourceAssociatedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceCreationFailedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceCreationFailedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceCreationFailedException(body, context);
  const exception = new ResourceCreationFailedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceLimitExceededException(body, context);
  const exception = new ResourceLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceUnavailableException(body, context);
  const exception = new ResourceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1UnsupportedNetworkConfigurationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedNetworkConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedNetworkConfigurationException(body, context);
  const exception = new UnsupportedNetworkConfigurationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1UnsupportedWorkspaceConfigurationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedWorkspaceConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedWorkspaceConfigurationException(body, context);
  const exception = new UnsupportedWorkspaceConfigurationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1WorkspacesDefaultRoleNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WorkspacesDefaultRoleNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1WorkspacesDefaultRoleNotFoundException(body, context);
  const exception = new WorkspacesDefaultRoleNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1ApplicationList = (input: (Application | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1AssociateConnectionAliasRequest = (
  input: AssociateConnectionAliasRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AliasId != null && { AliasId: input.AliasId }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

const serializeAws_json1_1AssociateIpGroupsRequest = (
  input: AssociateIpGroupsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.GroupIds != null && { GroupIds: serializeAws_json1_1IpGroupIdList(input.GroupIds, context) }),
  };
};

const serializeAws_json1_1AuthorizeIpRulesRequest = (input: AuthorizeIpRulesRequest, context: __SerdeContext): any => {
  return {
    ...(input.GroupId != null && { GroupId: input.GroupId }),
    ...(input.UserRules != null && { UserRules: serializeAws_json1_1IpRuleList(input.UserRules, context) }),
  };
};

const serializeAws_json1_1BundleIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1CertificateBasedAuthProperties = (
  input: CertificateBasedAuthProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

const serializeAws_json1_1ClientDeviceTypeList = (
  input: (ClientDeviceType | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ClientProperties = (input: ClientProperties, context: __SerdeContext): any => {
  return {
    ...(input.LogUploadEnabled != null && { LogUploadEnabled: input.LogUploadEnabled }),
    ...(input.ReconnectEnabled != null && { ReconnectEnabled: input.ReconnectEnabled }),
  };
};

const serializeAws_json1_1ComputeType = (input: ComputeType, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1ConnectionAliasIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ConnectionAliasPermission = (
  input: ConnectionAliasPermission,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllowAssociation != null && { AllowAssociation: input.AllowAssociation }),
    ...(input.SharedAccountId != null && { SharedAccountId: input.SharedAccountId }),
  };
};

const serializeAws_json1_1CopyWorkspaceImageRequest = (
  input: CopyWorkspaceImageRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SourceImageId != null && { SourceImageId: input.SourceImageId }),
    ...(input.SourceRegion != null && { SourceRegion: input.SourceRegion }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateConnectClientAddInRequest = (
  input: CreateConnectClientAddInRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.URL != null && { URL: input.URL }),
  };
};

const serializeAws_json1_1CreateConnectionAliasRequest = (
  input: CreateConnectionAliasRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConnectionString != null && { ConnectionString: input.ConnectionString }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateIpGroupRequest = (input: CreateIpGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.GroupDesc != null && { GroupDesc: input.GroupDesc }),
    ...(input.GroupName != null && { GroupName: input.GroupName }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.UserRules != null && { UserRules: serializeAws_json1_1IpRuleList(input.UserRules, context) }),
  };
};

const serializeAws_json1_1CreateStandbyWorkspacesRequest = (
  input: CreateStandbyWorkspacesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.PrimaryRegion != null && { PrimaryRegion: input.PrimaryRegion }),
    ...(input.StandbyWorkspaces != null && {
      StandbyWorkspaces: serializeAws_json1_1StandbyWorkspacesList(input.StandbyWorkspaces, context),
    }),
  };
};

const serializeAws_json1_1CreateTagsRequest = (input: CreateTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateUpdatedWorkspaceImageRequest = (
  input: CreateUpdatedWorkspaceImageRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SourceImageId != null && { SourceImageId: input.SourceImageId }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateWorkspaceBundleRequest = (
  input: CreateWorkspaceBundleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.BundleDescription != null && { BundleDescription: input.BundleDescription }),
    ...(input.BundleName != null && { BundleName: input.BundleName }),
    ...(input.ComputeType != null && { ComputeType: serializeAws_json1_1ComputeType(input.ComputeType, context) }),
    ...(input.ImageId != null && { ImageId: input.ImageId }),
    ...(input.RootStorage != null && { RootStorage: serializeAws_json1_1RootStorage(input.RootStorage, context) }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.UserStorage != null && { UserStorage: serializeAws_json1_1UserStorage(input.UserStorage, context) }),
  };
};

const serializeAws_json1_1CreateWorkspaceImageRequest = (
  input: CreateWorkspaceImageRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.WorkspaceId != null && { WorkspaceId: input.WorkspaceId }),
  };
};

const serializeAws_json1_1CreateWorkspacesRequest = (input: CreateWorkspacesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Workspaces != null && {
      Workspaces: serializeAws_json1_1WorkspaceRequestList(input.Workspaces, context),
    }),
  };
};

const serializeAws_json1_1DefaultImportClientBrandingAttributes = (
  input: DefaultImportClientBrandingAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.ForgotPasswordLink != null && { ForgotPasswordLink: input.ForgotPasswordLink }),
    ...(input.LoginMessage != null && { LoginMessage: serializeAws_json1_1LoginMessage(input.LoginMessage, context) }),
    ...(input.Logo != null && { Logo: context.base64Encoder(input.Logo) }),
    ...(input.SupportEmail != null && { SupportEmail: input.SupportEmail }),
    ...(input.SupportLink != null && { SupportLink: input.SupportLink }),
  };
};

const serializeAws_json1_1DeletableCertificateBasedAuthPropertiesList = (
  input: (DeletableCertificateBasedAuthProperty | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1DeletableSamlPropertiesList = (
  input: (DeletableSamlProperty | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1DeleteClientBrandingRequest = (
  input: DeleteClientBrandingRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Platforms != null && { Platforms: serializeAws_json1_1ClientDeviceTypeList(input.Platforms, context) }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

const serializeAws_json1_1DeleteConnectClientAddInRequest = (
  input: DeleteConnectClientAddInRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AddInId != null && { AddInId: input.AddInId }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

const serializeAws_json1_1DeleteConnectionAliasRequest = (
  input: DeleteConnectionAliasRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AliasId != null && { AliasId: input.AliasId }),
  };
};

const serializeAws_json1_1DeleteIpGroupRequest = (input: DeleteIpGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.GroupId != null && { GroupId: input.GroupId }),
  };
};

const serializeAws_json1_1DeleteTagsRequest = (input: DeleteTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.TagKeys != null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1DeleteWorkspaceBundleRequest = (
  input: DeleteWorkspaceBundleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.BundleId != null && { BundleId: input.BundleId }),
  };
};

const serializeAws_json1_1DeleteWorkspaceImageRequest = (
  input: DeleteWorkspaceImageRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ImageId != null && { ImageId: input.ImageId }),
  };
};

const serializeAws_json1_1DeregisterWorkspaceDirectoryRequest = (
  input: DeregisterWorkspaceDirectoryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
  };
};

const serializeAws_json1_1DescribeAccountModificationsRequest = (
  input: DescribeAccountModificationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeAccountRequest = (input: DescribeAccountRequest, context: __SerdeContext): any => {
  return {};
};

const serializeAws_json1_1DescribeClientBrandingRequest = (
  input: DescribeClientBrandingRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

const serializeAws_json1_1DescribeClientPropertiesRequest = (
  input: DescribeClientPropertiesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceIds != null && { ResourceIds: serializeAws_json1_1ResourceIdList(input.ResourceIds, context) }),
  };
};

const serializeAws_json1_1DescribeConnectClientAddInsRequest = (
  input: DescribeConnectClientAddInsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

const serializeAws_json1_1DescribeConnectionAliasesRequest = (
  input: DescribeConnectionAliasesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AliasIds != null && { AliasIds: serializeAws_json1_1ConnectionAliasIdList(input.AliasIds, context) }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

const serializeAws_json1_1DescribeConnectionAliasPermissionsRequest = (
  input: DescribeConnectionAliasPermissionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AliasId != null && { AliasId: input.AliasId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeIpGroupsRequest = (input: DescribeIpGroupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.GroupIds != null && { GroupIds: serializeAws_json1_1IpGroupIdList(input.GroupIds, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeTagsRequest = (input: DescribeTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

const serializeAws_json1_1DescribeWorkspaceBundlesRequest = (
  input: DescribeWorkspaceBundlesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.BundleIds != null && { BundleIds: serializeAws_json1_1BundleIdList(input.BundleIds, context) }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Owner != null && { Owner: input.Owner }),
  };
};

const serializeAws_json1_1DescribeWorkspaceDirectoriesRequest = (
  input: DescribeWorkspaceDirectoriesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryIds != null && {
      DirectoryIds: serializeAws_json1_1DirectoryIdList(input.DirectoryIds, context),
    }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeWorkspaceImagePermissionsRequest = (
  input: DescribeWorkspaceImagePermissionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ImageId != null && { ImageId: input.ImageId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeWorkspaceImagesRequest = (
  input: DescribeWorkspaceImagesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ImageIds != null && { ImageIds: serializeAws_json1_1WorkspaceImageIdList(input.ImageIds, context) }),
    ...(input.ImageType != null && { ImageType: input.ImageType }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeWorkspacesConnectionStatusRequest = (
  input: DescribeWorkspacesConnectionStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.WorkspaceIds != null && {
      WorkspaceIds: serializeAws_json1_1WorkspaceIdList(input.WorkspaceIds, context),
    }),
  };
};

const serializeAws_json1_1DescribeWorkspaceSnapshotsRequest = (
  input: DescribeWorkspaceSnapshotsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.WorkspaceId != null && { WorkspaceId: input.WorkspaceId }),
  };
};

const serializeAws_json1_1DescribeWorkspacesRequest = (
  input: DescribeWorkspacesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.BundleId != null && { BundleId: input.BundleId }),
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.UserName != null && { UserName: input.UserName }),
    ...(input.WorkspaceIds != null && {
      WorkspaceIds: serializeAws_json1_1WorkspaceIdList(input.WorkspaceIds, context),
    }),
  };
};

const serializeAws_json1_1DirectoryIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1DisassociateConnectionAliasRequest = (
  input: DisassociateConnectionAliasRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AliasId != null && { AliasId: input.AliasId }),
  };
};

const serializeAws_json1_1DisassociateIpGroupsRequest = (
  input: DisassociateIpGroupsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.GroupIds != null && { GroupIds: serializeAws_json1_1IpGroupIdList(input.GroupIds, context) }),
  };
};

const serializeAws_json1_1ImportClientBrandingRequest = (
  input: ImportClientBrandingRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeviceTypeAndroid != null && {
      DeviceTypeAndroid: serializeAws_json1_1DefaultImportClientBrandingAttributes(input.DeviceTypeAndroid, context),
    }),
    ...(input.DeviceTypeIos != null && {
      DeviceTypeIos: serializeAws_json1_1IosImportClientBrandingAttributes(input.DeviceTypeIos, context),
    }),
    ...(input.DeviceTypeLinux != null && {
      DeviceTypeLinux: serializeAws_json1_1DefaultImportClientBrandingAttributes(input.DeviceTypeLinux, context),
    }),
    ...(input.DeviceTypeOsx != null && {
      DeviceTypeOsx: serializeAws_json1_1DefaultImportClientBrandingAttributes(input.DeviceTypeOsx, context),
    }),
    ...(input.DeviceTypeWeb != null && {
      DeviceTypeWeb: serializeAws_json1_1DefaultImportClientBrandingAttributes(input.DeviceTypeWeb, context),
    }),
    ...(input.DeviceTypeWindows != null && {
      DeviceTypeWindows: serializeAws_json1_1DefaultImportClientBrandingAttributes(input.DeviceTypeWindows, context),
    }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

const serializeAws_json1_1ImportWorkspaceImageRequest = (
  input: ImportWorkspaceImageRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Applications != null && {
      Applications: serializeAws_json1_1ApplicationList(input.Applications, context),
    }),
    ...(input.Ec2ImageId != null && { Ec2ImageId: input.Ec2ImageId }),
    ...(input.ImageDescription != null && { ImageDescription: input.ImageDescription }),
    ...(input.ImageName != null && { ImageName: input.ImageName }),
    ...(input.IngestionProcess != null && { IngestionProcess: input.IngestionProcess }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1IosImportClientBrandingAttributes = (
  input: IosImportClientBrandingAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.ForgotPasswordLink != null && { ForgotPasswordLink: input.ForgotPasswordLink }),
    ...(input.LoginMessage != null && { LoginMessage: serializeAws_json1_1LoginMessage(input.LoginMessage, context) }),
    ...(input.Logo != null && { Logo: context.base64Encoder(input.Logo) }),
    ...(input.Logo2x != null && { Logo2x: context.base64Encoder(input.Logo2x) }),
    ...(input.Logo3x != null && { Logo3x: context.base64Encoder(input.Logo3x) }),
    ...(input.SupportEmail != null && { SupportEmail: input.SupportEmail }),
    ...(input.SupportLink != null && { SupportLink: input.SupportLink }),
  };
};

const serializeAws_json1_1IpGroupIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1IpRevokedRuleList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1IpRuleItem = (input: IpRuleItem, context: __SerdeContext): any => {
  return {
    ...(input.ipRule != null && { ipRule: input.ipRule }),
    ...(input.ruleDesc != null && { ruleDesc: input.ruleDesc }),
  };
};

const serializeAws_json1_1IpRuleList = (input: IpRuleItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1IpRuleItem(entry, context);
    });
};

const serializeAws_json1_1ListAvailableManagementCidrRangesRequest = (
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

const serializeAws_json1_1LoginMessage = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1MigrateWorkspaceRequest = (input: MigrateWorkspaceRequest, context: __SerdeContext): any => {
  return {
    ...(input.BundleId != null && { BundleId: input.BundleId }),
    ...(input.SourceWorkspaceId != null && { SourceWorkspaceId: input.SourceWorkspaceId }),
  };
};

const serializeAws_json1_1ModifyAccountRequest = (input: ModifyAccountRequest, context: __SerdeContext): any => {
  return {
    ...(input.DedicatedTenancyManagementCidrRange != null && {
      DedicatedTenancyManagementCidrRange: input.DedicatedTenancyManagementCidrRange,
    }),
    ...(input.DedicatedTenancySupport != null && { DedicatedTenancySupport: input.DedicatedTenancySupport }),
  };
};

const serializeAws_json1_1ModifyCertificateBasedAuthPropertiesRequest = (
  input: ModifyCertificateBasedAuthPropertiesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateBasedAuthProperties != null && {
      CertificateBasedAuthProperties: serializeAws_json1_1CertificateBasedAuthProperties(
        input.CertificateBasedAuthProperties,
        context
      ),
    }),
    ...(input.PropertiesToDelete != null && {
      PropertiesToDelete: serializeAws_json1_1DeletableCertificateBasedAuthPropertiesList(
        input.PropertiesToDelete,
        context
      ),
    }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

const serializeAws_json1_1ModifyClientPropertiesRequest = (
  input: ModifyClientPropertiesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientProperties != null && {
      ClientProperties: serializeAws_json1_1ClientProperties(input.ClientProperties, context),
    }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

const serializeAws_json1_1ModifySamlPropertiesRequest = (
  input: ModifySamlPropertiesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.PropertiesToDelete != null && {
      PropertiesToDelete: serializeAws_json1_1DeletableSamlPropertiesList(input.PropertiesToDelete, context),
    }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.SamlProperties != null && {
      SamlProperties: serializeAws_json1_1SamlProperties(input.SamlProperties, context),
    }),
  };
};

const serializeAws_json1_1ModifySelfservicePermissionsRequest = (
  input: ModifySelfservicePermissionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.SelfservicePermissions != null && {
      SelfservicePermissions: serializeAws_json1_1SelfservicePermissions(input.SelfservicePermissions, context),
    }),
  };
};

const serializeAws_json1_1ModifyWorkspaceAccessPropertiesRequest = (
  input: ModifyWorkspaceAccessPropertiesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.WorkspaceAccessProperties != null && {
      WorkspaceAccessProperties: serializeAws_json1_1WorkspaceAccessProperties(
        input.WorkspaceAccessProperties,
        context
      ),
    }),
  };
};

const serializeAws_json1_1ModifyWorkspaceCreationPropertiesRequest = (
  input: ModifyWorkspaceCreationPropertiesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.WorkspaceCreationProperties != null && {
      WorkspaceCreationProperties: serializeAws_json1_1WorkspaceCreationProperties(
        input.WorkspaceCreationProperties,
        context
      ),
    }),
  };
};

const serializeAws_json1_1ModifyWorkspacePropertiesRequest = (
  input: ModifyWorkspacePropertiesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.WorkspaceId != null && { WorkspaceId: input.WorkspaceId }),
    ...(input.WorkspaceProperties != null && {
      WorkspaceProperties: serializeAws_json1_1WorkspaceProperties(input.WorkspaceProperties, context),
    }),
  };
};

const serializeAws_json1_1ModifyWorkspaceStateRequest = (
  input: ModifyWorkspaceStateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.WorkspaceId != null && { WorkspaceId: input.WorkspaceId }),
    ...(input.WorkspaceState != null && { WorkspaceState: input.WorkspaceState }),
  };
};

const serializeAws_json1_1ProtocolList = (input: (Protocol | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1RebootRequest = (input: RebootRequest, context: __SerdeContext): any => {
  return {
    ...(input.WorkspaceId != null && { WorkspaceId: input.WorkspaceId }),
  };
};

const serializeAws_json1_1RebootWorkspaceRequests = (input: RebootRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1RebootRequest(entry, context);
    });
};

const serializeAws_json1_1RebootWorkspacesRequest = (input: RebootWorkspacesRequest, context: __SerdeContext): any => {
  return {
    ...(input.RebootWorkspaceRequests != null && {
      RebootWorkspaceRequests: serializeAws_json1_1RebootWorkspaceRequests(input.RebootWorkspaceRequests, context),
    }),
  };
};

const serializeAws_json1_1RebuildRequest = (input: RebuildRequest, context: __SerdeContext): any => {
  return {
    ...(input.WorkspaceId != null && { WorkspaceId: input.WorkspaceId }),
  };
};

const serializeAws_json1_1RebuildWorkspaceRequests = (input: RebuildRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1RebuildRequest(entry, context);
    });
};

const serializeAws_json1_1RebuildWorkspacesRequest = (
  input: RebuildWorkspacesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.RebuildWorkspaceRequests != null && {
      RebuildWorkspaceRequests: serializeAws_json1_1RebuildWorkspaceRequests(input.RebuildWorkspaceRequests, context),
    }),
  };
};

const serializeAws_json1_1RegisterWorkspaceDirectoryRequest = (
  input: RegisterWorkspaceDirectoryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.EnableSelfService != null && { EnableSelfService: input.EnableSelfService }),
    ...(input.EnableWorkDocs != null && { EnableWorkDocs: input.EnableWorkDocs }),
    ...(input.SubnetIds != null && { SubnetIds: serializeAws_json1_1SubnetIds(input.SubnetIds, context) }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.Tenancy != null && { Tenancy: input.Tenancy }),
  };
};

const serializeAws_json1_1ResourceIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1RestoreWorkspaceRequest = (input: RestoreWorkspaceRequest, context: __SerdeContext): any => {
  return {
    ...(input.WorkspaceId != null && { WorkspaceId: input.WorkspaceId }),
  };
};

const serializeAws_json1_1RevokeIpRulesRequest = (input: RevokeIpRulesRequest, context: __SerdeContext): any => {
  return {
    ...(input.GroupId != null && { GroupId: input.GroupId }),
    ...(input.UserRules != null && { UserRules: serializeAws_json1_1IpRevokedRuleList(input.UserRules, context) }),
  };
};

const serializeAws_json1_1RootStorage = (input: RootStorage, context: __SerdeContext): any => {
  return {
    ...(input.Capacity != null && { Capacity: input.Capacity }),
  };
};

const serializeAws_json1_1SamlProperties = (input: SamlProperties, context: __SerdeContext): any => {
  return {
    ...(input.RelayStateParameterName != null && { RelayStateParameterName: input.RelayStateParameterName }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.UserAccessUrl != null && { UserAccessUrl: input.UserAccessUrl }),
  };
};

const serializeAws_json1_1SelfservicePermissions = (input: SelfservicePermissions, context: __SerdeContext): any => {
  return {
    ...(input.ChangeComputeType != null && { ChangeComputeType: input.ChangeComputeType }),
    ...(input.IncreaseVolumeSize != null && { IncreaseVolumeSize: input.IncreaseVolumeSize }),
    ...(input.RebuildWorkspace != null && { RebuildWorkspace: input.RebuildWorkspace }),
    ...(input.RestartWorkspace != null && { RestartWorkspace: input.RestartWorkspace }),
    ...(input.SwitchRunningMode != null && { SwitchRunningMode: input.SwitchRunningMode }),
  };
};

const serializeAws_json1_1StandbyWorkspace = (input: StandbyWorkspace, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.PrimaryWorkspaceId != null && { PrimaryWorkspaceId: input.PrimaryWorkspaceId }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.VolumeEncryptionKey != null && { VolumeEncryptionKey: input.VolumeEncryptionKey }),
  };
};

const serializeAws_json1_1StandbyWorkspacesList = (input: StandbyWorkspace[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1StandbyWorkspace(entry, context);
    });
};

const serializeAws_json1_1StartRequest = (input: StartRequest, context: __SerdeContext): any => {
  return {
    ...(input.WorkspaceId != null && { WorkspaceId: input.WorkspaceId }),
  };
};

const serializeAws_json1_1StartWorkspaceRequests = (input: StartRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1StartRequest(entry, context);
    });
};

const serializeAws_json1_1StartWorkspacesRequest = (input: StartWorkspacesRequest, context: __SerdeContext): any => {
  return {
    ...(input.StartWorkspaceRequests != null && {
      StartWorkspaceRequests: serializeAws_json1_1StartWorkspaceRequests(input.StartWorkspaceRequests, context),
    }),
  };
};

const serializeAws_json1_1StopRequest = (input: StopRequest, context: __SerdeContext): any => {
  return {
    ...(input.WorkspaceId != null && { WorkspaceId: input.WorkspaceId }),
  };
};

const serializeAws_json1_1StopWorkspaceRequests = (input: StopRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1StopRequest(entry, context);
    });
};

const serializeAws_json1_1StopWorkspacesRequest = (input: StopWorkspacesRequest, context: __SerdeContext): any => {
  return {
    ...(input.StopWorkspaceRequests != null && {
      StopWorkspaceRequests: serializeAws_json1_1StopWorkspaceRequests(input.StopWorkspaceRequests, context),
    }),
  };
};

const serializeAws_json1_1SubnetIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TerminateRequest = (input: TerminateRequest, context: __SerdeContext): any => {
  return {
    ...(input.WorkspaceId != null && { WorkspaceId: input.WorkspaceId }),
  };
};

const serializeAws_json1_1TerminateWorkspaceRequests = (input: TerminateRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1TerminateRequest(entry, context);
    });
};

const serializeAws_json1_1TerminateWorkspacesRequest = (
  input: TerminateWorkspacesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.TerminateWorkspaceRequests != null && {
      TerminateWorkspaceRequests: serializeAws_json1_1TerminateWorkspaceRequests(
        input.TerminateWorkspaceRequests,
        context
      ),
    }),
  };
};

const serializeAws_json1_1UpdateConnectClientAddInRequest = (
  input: UpdateConnectClientAddInRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AddInId != null && { AddInId: input.AddInId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.URL != null && { URL: input.URL }),
  };
};

const serializeAws_json1_1UpdateConnectionAliasPermissionRequest = (
  input: UpdateConnectionAliasPermissionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AliasId != null && { AliasId: input.AliasId }),
    ...(input.ConnectionAliasPermission != null && {
      ConnectionAliasPermission: serializeAws_json1_1ConnectionAliasPermission(
        input.ConnectionAliasPermission,
        context
      ),
    }),
  };
};

const serializeAws_json1_1UpdateRulesOfIpGroupRequest = (
  input: UpdateRulesOfIpGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.GroupId != null && { GroupId: input.GroupId }),
    ...(input.UserRules != null && { UserRules: serializeAws_json1_1IpRuleList(input.UserRules, context) }),
  };
};

const serializeAws_json1_1UpdateWorkspaceBundleRequest = (
  input: UpdateWorkspaceBundleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.BundleId != null && { BundleId: input.BundleId }),
    ...(input.ImageId != null && { ImageId: input.ImageId }),
  };
};

const serializeAws_json1_1UpdateWorkspaceImagePermissionRequest = (
  input: UpdateWorkspaceImagePermissionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllowCopyImage != null && { AllowCopyImage: input.AllowCopyImage }),
    ...(input.ImageId != null && { ImageId: input.ImageId }),
    ...(input.SharedAccountId != null && { SharedAccountId: input.SharedAccountId }),
  };
};

const serializeAws_json1_1UserStorage = (input: UserStorage, context: __SerdeContext): any => {
  return {
    ...(input.Capacity != null && { Capacity: input.Capacity }),
  };
};

const serializeAws_json1_1WorkspaceAccessProperties = (
  input: WorkspaceAccessProperties,
  context: __SerdeContext
): any => {
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

const serializeAws_json1_1WorkspaceCreationProperties = (
  input: WorkspaceCreationProperties,
  context: __SerdeContext
): any => {
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

const serializeAws_json1_1WorkspaceIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1WorkspaceImageIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1WorkspaceProperties = (input: WorkspaceProperties, context: __SerdeContext): any => {
  return {
    ...(input.ComputeTypeName != null && { ComputeTypeName: input.ComputeTypeName }),
    ...(input.Protocols != null && { Protocols: serializeAws_json1_1ProtocolList(input.Protocols, context) }),
    ...(input.RootVolumeSizeGib != null && { RootVolumeSizeGib: input.RootVolumeSizeGib }),
    ...(input.RunningMode != null && { RunningMode: input.RunningMode }),
    ...(input.RunningModeAutoStopTimeoutInMinutes != null && {
      RunningModeAutoStopTimeoutInMinutes: input.RunningModeAutoStopTimeoutInMinutes,
    }),
    ...(input.UserVolumeSizeGib != null && { UserVolumeSizeGib: input.UserVolumeSizeGib }),
  };
};

const serializeAws_json1_1WorkspaceRequest = (input: WorkspaceRequest, context: __SerdeContext): any => {
  return {
    ...(input.BundleId != null && { BundleId: input.BundleId }),
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.RootVolumeEncryptionEnabled != null && {
      RootVolumeEncryptionEnabled: input.RootVolumeEncryptionEnabled,
    }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.UserName != null && { UserName: input.UserName }),
    ...(input.UserVolumeEncryptionEnabled != null && {
      UserVolumeEncryptionEnabled: input.UserVolumeEncryptionEnabled,
    }),
    ...(input.VolumeEncryptionKey != null && { VolumeEncryptionKey: input.VolumeEncryptionKey }),
    ...(input.WorkspaceProperties != null && {
      WorkspaceProperties: serializeAws_json1_1WorkspaceProperties(input.WorkspaceProperties, context),
    }),
  };
};

const serializeAws_json1_1WorkspaceRequestList = (input: WorkspaceRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1WorkspaceRequest(entry, context);
    });
};

const deserializeAws_json1_1AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1AccountModification = (output: any, context: __SerdeContext): AccountModification => {
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

const deserializeAws_json1_1AccountModificationList = (output: any, context: __SerdeContext): AccountModification[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AccountModification(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AssociateConnectionAliasResult = (
  output: any,
  context: __SerdeContext
): AssociateConnectionAliasResult => {
  return {
    ConnectionIdentifier: __expectString(output.ConnectionIdentifier),
  } as any;
};

const deserializeAws_json1_1AssociateIpGroupsResult = (
  output: any,
  context: __SerdeContext
): AssociateIpGroupsResult => {
  return {} as any;
};

const deserializeAws_json1_1AuthorizeIpRulesResult = (output: any, context: __SerdeContext): AuthorizeIpRulesResult => {
  return {} as any;
};

const deserializeAws_json1_1BundleList = (output: any, context: __SerdeContext): WorkspaceBundle[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1WorkspaceBundle(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CertificateBasedAuthProperties = (
  output: any,
  context: __SerdeContext
): CertificateBasedAuthProperties => {
  return {
    CertificateAuthorityArn: __expectString(output.CertificateAuthorityArn),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1ClientProperties = (output: any, context: __SerdeContext): ClientProperties => {
  return {
    LogUploadEnabled: __expectString(output.LogUploadEnabled),
    ReconnectEnabled: __expectString(output.ReconnectEnabled),
  } as any;
};

const deserializeAws_json1_1ClientPropertiesList = (output: any, context: __SerdeContext): ClientPropertiesResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ClientPropertiesResult(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ClientPropertiesResult = (output: any, context: __SerdeContext): ClientPropertiesResult => {
  return {
    ClientProperties:
      output.ClientProperties != null
        ? deserializeAws_json1_1ClientProperties(output.ClientProperties, context)
        : undefined,
    ResourceId: __expectString(output.ResourceId),
  } as any;
};

const deserializeAws_json1_1ComputeType = (output: any, context: __SerdeContext): ComputeType => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1ConnectClientAddIn = (output: any, context: __SerdeContext): ConnectClientAddIn => {
  return {
    AddInId: __expectString(output.AddInId),
    Name: __expectString(output.Name),
    ResourceId: __expectString(output.ResourceId),
    URL: __expectString(output.URL),
  } as any;
};

const deserializeAws_json1_1ConnectClientAddInList = (output: any, context: __SerdeContext): ConnectClientAddIn[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ConnectClientAddIn(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ConnectionAlias = (output: any, context: __SerdeContext): ConnectionAlias => {
  return {
    AliasId: __expectString(output.AliasId),
    Associations:
      output.Associations != null
        ? deserializeAws_json1_1ConnectionAliasAssociationList(output.Associations, context)
        : undefined,
    ConnectionString: __expectString(output.ConnectionString),
    OwnerAccountId: __expectString(output.OwnerAccountId),
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_json1_1ConnectionAliasAssociation = (
  output: any,
  context: __SerdeContext
): ConnectionAliasAssociation => {
  return {
    AssociatedAccountId: __expectString(output.AssociatedAccountId),
    AssociationStatus: __expectString(output.AssociationStatus),
    ConnectionIdentifier: __expectString(output.ConnectionIdentifier),
    ResourceId: __expectString(output.ResourceId),
  } as any;
};

const deserializeAws_json1_1ConnectionAliasAssociationList = (
  output: any,
  context: __SerdeContext
): ConnectionAliasAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ConnectionAliasAssociation(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ConnectionAliasList = (output: any, context: __SerdeContext): ConnectionAlias[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ConnectionAlias(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ConnectionAliasPermission = (
  output: any,
  context: __SerdeContext
): ConnectionAliasPermission => {
  return {
    AllowAssociation: __expectBoolean(output.AllowAssociation),
    SharedAccountId: __expectString(output.SharedAccountId),
  } as any;
};

const deserializeAws_json1_1ConnectionAliasPermissions = (
  output: any,
  context: __SerdeContext
): ConnectionAliasPermission[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ConnectionAliasPermission(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CopyWorkspaceImageResult = (
  output: any,
  context: __SerdeContext
): CopyWorkspaceImageResult => {
  return {
    ImageId: __expectString(output.ImageId),
  } as any;
};

const deserializeAws_json1_1CreateConnectClientAddInResult = (
  output: any,
  context: __SerdeContext
): CreateConnectClientAddInResult => {
  return {
    AddInId: __expectString(output.AddInId),
  } as any;
};

const deserializeAws_json1_1CreateConnectionAliasResult = (
  output: any,
  context: __SerdeContext
): CreateConnectionAliasResult => {
  return {
    AliasId: __expectString(output.AliasId),
  } as any;
};

const deserializeAws_json1_1CreateIpGroupResult = (output: any, context: __SerdeContext): CreateIpGroupResult => {
  return {
    GroupId: __expectString(output.GroupId),
  } as any;
};

const deserializeAws_json1_1CreateStandbyWorkspacesResult = (
  output: any,
  context: __SerdeContext
): CreateStandbyWorkspacesResult => {
  return {
    FailedStandbyRequests:
      output.FailedStandbyRequests != null
        ? deserializeAws_json1_1FailedCreateStandbyWorkspacesRequestList(output.FailedStandbyRequests, context)
        : undefined,
    PendingStandbyRequests:
      output.PendingStandbyRequests != null
        ? deserializeAws_json1_1PendingCreateStandbyWorkspacesRequestList(output.PendingStandbyRequests, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateTagsResult = (output: any, context: __SerdeContext): CreateTagsResult => {
  return {} as any;
};

const deserializeAws_json1_1CreateUpdatedWorkspaceImageResult = (
  output: any,
  context: __SerdeContext
): CreateUpdatedWorkspaceImageResult => {
  return {
    ImageId: __expectString(output.ImageId),
  } as any;
};

const deserializeAws_json1_1CreateWorkspaceBundleResult = (
  output: any,
  context: __SerdeContext
): CreateWorkspaceBundleResult => {
  return {
    WorkspaceBundle:
      output.WorkspaceBundle != null
        ? deserializeAws_json1_1WorkspaceBundle(output.WorkspaceBundle, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateWorkspaceImageResult = (
  output: any,
  context: __SerdeContext
): CreateWorkspaceImageResult => {
  return {
    Created:
      output.Created != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Created))) : undefined,
    Description: __expectString(output.Description),
    ImageId: __expectString(output.ImageId),
    Name: __expectString(output.Name),
    OperatingSystem:
      output.OperatingSystem != null
        ? deserializeAws_json1_1OperatingSystem(output.OperatingSystem, context)
        : undefined,
    OwnerAccountId: __expectString(output.OwnerAccountId),
    RequiredTenancy: __expectString(output.RequiredTenancy),
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_json1_1CreateWorkspacesResult = (output: any, context: __SerdeContext): CreateWorkspacesResult => {
  return {
    FailedRequests:
      output.FailedRequests != null
        ? deserializeAws_json1_1FailedCreateWorkspaceRequests(output.FailedRequests, context)
        : undefined,
    PendingRequests:
      output.PendingRequests != null ? deserializeAws_json1_1WorkspaceList(output.PendingRequests, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DedicatedTenancyCidrRangeList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1DefaultClientBrandingAttributes = (
  output: any,
  context: __SerdeContext
): DefaultClientBrandingAttributes => {
  return {
    ForgotPasswordLink: __expectString(output.ForgotPasswordLink),
    LoginMessage:
      output.LoginMessage != null ? deserializeAws_json1_1LoginMessage(output.LoginMessage, context) : undefined,
    LogoUrl: __expectString(output.LogoUrl),
    SupportEmail: __expectString(output.SupportEmail),
    SupportLink: __expectString(output.SupportLink),
  } as any;
};

const deserializeAws_json1_1DefaultWorkspaceCreationProperties = (
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

const deserializeAws_json1_1DeleteClientBrandingResult = (
  output: any,
  context: __SerdeContext
): DeleteClientBrandingResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteConnectClientAddInResult = (
  output: any,
  context: __SerdeContext
): DeleteConnectClientAddInResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteConnectionAliasResult = (
  output: any,
  context: __SerdeContext
): DeleteConnectionAliasResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteIpGroupResult = (output: any, context: __SerdeContext): DeleteIpGroupResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteTagsResult = (output: any, context: __SerdeContext): DeleteTagsResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteWorkspaceBundleResult = (
  output: any,
  context: __SerdeContext
): DeleteWorkspaceBundleResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteWorkspaceImageResult = (
  output: any,
  context: __SerdeContext
): DeleteWorkspaceImageResult => {
  return {} as any;
};

const deserializeAws_json1_1DeregisterWorkspaceDirectoryResult = (
  output: any,
  context: __SerdeContext
): DeregisterWorkspaceDirectoryResult => {
  return {} as any;
};

const deserializeAws_json1_1DescribeAccountModificationsResult = (
  output: any,
  context: __SerdeContext
): DescribeAccountModificationsResult => {
  return {
    AccountModifications:
      output.AccountModifications != null
        ? deserializeAws_json1_1AccountModificationList(output.AccountModifications, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeAccountResult = (output: any, context: __SerdeContext): DescribeAccountResult => {
  return {
    DedicatedTenancyManagementCidrRange: __expectString(output.DedicatedTenancyManagementCidrRange),
    DedicatedTenancySupport: __expectString(output.DedicatedTenancySupport),
  } as any;
};

const deserializeAws_json1_1DescribeClientBrandingResult = (
  output: any,
  context: __SerdeContext
): DescribeClientBrandingResult => {
  return {
    DeviceTypeAndroid:
      output.DeviceTypeAndroid != null
        ? deserializeAws_json1_1DefaultClientBrandingAttributes(output.DeviceTypeAndroid, context)
        : undefined,
    DeviceTypeIos:
      output.DeviceTypeIos != null
        ? deserializeAws_json1_1IosClientBrandingAttributes(output.DeviceTypeIos, context)
        : undefined,
    DeviceTypeLinux:
      output.DeviceTypeLinux != null
        ? deserializeAws_json1_1DefaultClientBrandingAttributes(output.DeviceTypeLinux, context)
        : undefined,
    DeviceTypeOsx:
      output.DeviceTypeOsx != null
        ? deserializeAws_json1_1DefaultClientBrandingAttributes(output.DeviceTypeOsx, context)
        : undefined,
    DeviceTypeWeb:
      output.DeviceTypeWeb != null
        ? deserializeAws_json1_1DefaultClientBrandingAttributes(output.DeviceTypeWeb, context)
        : undefined,
    DeviceTypeWindows:
      output.DeviceTypeWindows != null
        ? deserializeAws_json1_1DefaultClientBrandingAttributes(output.DeviceTypeWindows, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeClientPropertiesResult = (
  output: any,
  context: __SerdeContext
): DescribeClientPropertiesResult => {
  return {
    ClientPropertiesList:
      output.ClientPropertiesList != null
        ? deserializeAws_json1_1ClientPropertiesList(output.ClientPropertiesList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeConnectClientAddInsResult = (
  output: any,
  context: __SerdeContext
): DescribeConnectClientAddInsResult => {
  return {
    AddIns: output.AddIns != null ? deserializeAws_json1_1ConnectClientAddInList(output.AddIns, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeConnectionAliasesResult = (
  output: any,
  context: __SerdeContext
): DescribeConnectionAliasesResult => {
  return {
    ConnectionAliases:
      output.ConnectionAliases != null
        ? deserializeAws_json1_1ConnectionAliasList(output.ConnectionAliases, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeConnectionAliasPermissionsResult = (
  output: any,
  context: __SerdeContext
): DescribeConnectionAliasPermissionsResult => {
  return {
    AliasId: __expectString(output.AliasId),
    ConnectionAliasPermissions:
      output.ConnectionAliasPermissions != null
        ? deserializeAws_json1_1ConnectionAliasPermissions(output.ConnectionAliasPermissions, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeIpGroupsResult = (output: any, context: __SerdeContext): DescribeIpGroupsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Result: output.Result != null ? deserializeAws_json1_1WorkspacesIpGroupsList(output.Result, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeTagsResult = (output: any, context: __SerdeContext): DescribeTagsResult => {
  return {
    TagList: output.TagList != null ? deserializeAws_json1_1TagList(output.TagList, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeWorkspaceBundlesResult = (
  output: any,
  context: __SerdeContext
): DescribeWorkspaceBundlesResult => {
  return {
    Bundles: output.Bundles != null ? deserializeAws_json1_1BundleList(output.Bundles, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeWorkspaceDirectoriesResult = (
  output: any,
  context: __SerdeContext
): DescribeWorkspaceDirectoriesResult => {
  return {
    Directories:
      output.Directories != null ? deserializeAws_json1_1DirectoryList(output.Directories, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeWorkspaceImagePermissionsResult = (
  output: any,
  context: __SerdeContext
): DescribeWorkspaceImagePermissionsResult => {
  return {
    ImageId: __expectString(output.ImageId),
    ImagePermissions:
      output.ImagePermissions != null
        ? deserializeAws_json1_1ImagePermissions(output.ImagePermissions, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeWorkspaceImagesResult = (
  output: any,
  context: __SerdeContext
): DescribeWorkspaceImagesResult => {
  return {
    Images: output.Images != null ? deserializeAws_json1_1WorkspaceImageList(output.Images, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeWorkspacesConnectionStatusResult = (
  output: any,
  context: __SerdeContext
): DescribeWorkspacesConnectionStatusResult => {
  return {
    NextToken: __expectString(output.NextToken),
    WorkspacesConnectionStatus:
      output.WorkspacesConnectionStatus != null
        ? deserializeAws_json1_1WorkspaceConnectionStatusList(output.WorkspacesConnectionStatus, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeWorkspaceSnapshotsResult = (
  output: any,
  context: __SerdeContext
): DescribeWorkspaceSnapshotsResult => {
  return {
    RebuildSnapshots:
      output.RebuildSnapshots != null
        ? deserializeAws_json1_1SnapshotList(output.RebuildSnapshots, context)
        : undefined,
    RestoreSnapshots:
      output.RestoreSnapshots != null
        ? deserializeAws_json1_1SnapshotList(output.RestoreSnapshots, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeWorkspacesResult = (
  output: any,
  context: __SerdeContext
): DescribeWorkspacesResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Workspaces: output.Workspaces != null ? deserializeAws_json1_1WorkspaceList(output.Workspaces, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DirectoryList = (output: any, context: __SerdeContext): WorkspaceDirectory[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1WorkspaceDirectory(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DisassociateConnectionAliasResult = (
  output: any,
  context: __SerdeContext
): DisassociateConnectionAliasResult => {
  return {} as any;
};

const deserializeAws_json1_1DisassociateIpGroupsResult = (
  output: any,
  context: __SerdeContext
): DisassociateIpGroupsResult => {
  return {} as any;
};

const deserializeAws_json1_1DnsIpAddresses = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1FailedCreateStandbyWorkspacesRequest = (
  output: any,
  context: __SerdeContext
): FailedCreateStandbyWorkspacesRequest => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    StandbyWorkspaceRequest:
      output.StandbyWorkspaceRequest != null
        ? deserializeAws_json1_1StandbyWorkspace(output.StandbyWorkspaceRequest, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1FailedCreateStandbyWorkspacesRequestList = (
  output: any,
  context: __SerdeContext
): FailedCreateStandbyWorkspacesRequest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FailedCreateStandbyWorkspacesRequest(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FailedCreateWorkspaceRequest = (
  output: any,
  context: __SerdeContext
): FailedCreateWorkspaceRequest => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    WorkspaceRequest:
      output.WorkspaceRequest != null
        ? deserializeAws_json1_1WorkspaceRequest(output.WorkspaceRequest, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1FailedCreateWorkspaceRequests = (
  output: any,
  context: __SerdeContext
): FailedCreateWorkspaceRequest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FailedCreateWorkspaceRequest(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FailedRebootWorkspaceRequests = (
  output: any,
  context: __SerdeContext
): FailedWorkspaceChangeRequest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FailedWorkspaceChangeRequest(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FailedRebuildWorkspaceRequests = (
  output: any,
  context: __SerdeContext
): FailedWorkspaceChangeRequest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FailedWorkspaceChangeRequest(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FailedStartWorkspaceRequests = (
  output: any,
  context: __SerdeContext
): FailedWorkspaceChangeRequest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FailedWorkspaceChangeRequest(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FailedStopWorkspaceRequests = (
  output: any,
  context: __SerdeContext
): FailedWorkspaceChangeRequest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FailedWorkspaceChangeRequest(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FailedTerminateWorkspaceRequests = (
  output: any,
  context: __SerdeContext
): FailedWorkspaceChangeRequest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FailedWorkspaceChangeRequest(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FailedWorkspaceChangeRequest = (
  output: any,
  context: __SerdeContext
): FailedWorkspaceChangeRequest => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    WorkspaceId: __expectString(output.WorkspaceId),
  } as any;
};

const deserializeAws_json1_1ImagePermission = (output: any, context: __SerdeContext): ImagePermission => {
  return {
    SharedAccountId: __expectString(output.SharedAccountId),
  } as any;
};

const deserializeAws_json1_1ImagePermissions = (output: any, context: __SerdeContext): ImagePermission[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ImagePermission(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ImportClientBrandingResult = (
  output: any,
  context: __SerdeContext
): ImportClientBrandingResult => {
  return {
    DeviceTypeAndroid:
      output.DeviceTypeAndroid != null
        ? deserializeAws_json1_1DefaultClientBrandingAttributes(output.DeviceTypeAndroid, context)
        : undefined,
    DeviceTypeIos:
      output.DeviceTypeIos != null
        ? deserializeAws_json1_1IosClientBrandingAttributes(output.DeviceTypeIos, context)
        : undefined,
    DeviceTypeLinux:
      output.DeviceTypeLinux != null
        ? deserializeAws_json1_1DefaultClientBrandingAttributes(output.DeviceTypeLinux, context)
        : undefined,
    DeviceTypeOsx:
      output.DeviceTypeOsx != null
        ? deserializeAws_json1_1DefaultClientBrandingAttributes(output.DeviceTypeOsx, context)
        : undefined,
    DeviceTypeWeb:
      output.DeviceTypeWeb != null
        ? deserializeAws_json1_1DefaultClientBrandingAttributes(output.DeviceTypeWeb, context)
        : undefined,
    DeviceTypeWindows:
      output.DeviceTypeWindows != null
        ? deserializeAws_json1_1DefaultClientBrandingAttributes(output.DeviceTypeWindows, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ImportWorkspaceImageResult = (
  output: any,
  context: __SerdeContext
): ImportWorkspaceImageResult => {
  return {
    ImageId: __expectString(output.ImageId),
  } as any;
};

const deserializeAws_json1_1InvalidParameterValuesException = (
  output: any,
  context: __SerdeContext
): InvalidParameterValuesException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidResourceStateException = (
  output: any,
  context: __SerdeContext
): InvalidResourceStateException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1IosClientBrandingAttributes = (
  output: any,
  context: __SerdeContext
): IosClientBrandingAttributes => {
  return {
    ForgotPasswordLink: __expectString(output.ForgotPasswordLink),
    LoginMessage:
      output.LoginMessage != null ? deserializeAws_json1_1LoginMessage(output.LoginMessage, context) : undefined,
    Logo2xUrl: __expectString(output.Logo2xUrl),
    Logo3xUrl: __expectString(output.Logo3xUrl),
    LogoUrl: __expectString(output.LogoUrl),
    SupportEmail: __expectString(output.SupportEmail),
    SupportLink: __expectString(output.SupportLink),
  } as any;
};

const deserializeAws_json1_1IpGroupIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1IpRuleItem = (output: any, context: __SerdeContext): IpRuleItem => {
  return {
    ipRule: __expectString(output.ipRule),
    ruleDesc: __expectString(output.ruleDesc),
  } as any;
};

const deserializeAws_json1_1IpRuleList = (output: any, context: __SerdeContext): IpRuleItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1IpRuleItem(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListAvailableManagementCidrRangesResult = (
  output: any,
  context: __SerdeContext
): ListAvailableManagementCidrRangesResult => {
  return {
    ManagementCidrRanges:
      output.ManagementCidrRanges != null
        ? deserializeAws_json1_1DedicatedTenancyCidrRangeList(output.ManagementCidrRanges, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1LoginMessage = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1MigrateWorkspaceResult = (output: any, context: __SerdeContext): MigrateWorkspaceResult => {
  return {
    SourceWorkspaceId: __expectString(output.SourceWorkspaceId),
    TargetWorkspaceId: __expectString(output.TargetWorkspaceId),
  } as any;
};

const deserializeAws_json1_1ModificationState = (output: any, context: __SerdeContext): ModificationState => {
  return {
    Resource: __expectString(output.Resource),
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_json1_1ModificationStateList = (output: any, context: __SerdeContext): ModificationState[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ModificationState(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ModifyAccountResult = (output: any, context: __SerdeContext): ModifyAccountResult => {
  return {} as any;
};

const deserializeAws_json1_1ModifyCertificateBasedAuthPropertiesResult = (
  output: any,
  context: __SerdeContext
): ModifyCertificateBasedAuthPropertiesResult => {
  return {} as any;
};

const deserializeAws_json1_1ModifyClientPropertiesResult = (
  output: any,
  context: __SerdeContext
): ModifyClientPropertiesResult => {
  return {} as any;
};

const deserializeAws_json1_1ModifySamlPropertiesResult = (
  output: any,
  context: __SerdeContext
): ModifySamlPropertiesResult => {
  return {} as any;
};

const deserializeAws_json1_1ModifySelfservicePermissionsResult = (
  output: any,
  context: __SerdeContext
): ModifySelfservicePermissionsResult => {
  return {} as any;
};

const deserializeAws_json1_1ModifyWorkspaceAccessPropertiesResult = (
  output: any,
  context: __SerdeContext
): ModifyWorkspaceAccessPropertiesResult => {
  return {} as any;
};

const deserializeAws_json1_1ModifyWorkspaceCreationPropertiesResult = (
  output: any,
  context: __SerdeContext
): ModifyWorkspaceCreationPropertiesResult => {
  return {} as any;
};

const deserializeAws_json1_1ModifyWorkspacePropertiesResult = (
  output: any,
  context: __SerdeContext
): ModifyWorkspacePropertiesResult => {
  return {} as any;
};

const deserializeAws_json1_1ModifyWorkspaceStateResult = (
  output: any,
  context: __SerdeContext
): ModifyWorkspaceStateResult => {
  return {} as any;
};

const deserializeAws_json1_1OperatingSystem = (output: any, context: __SerdeContext): OperatingSystem => {
  return {
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1OperationInProgressException = (
  output: any,
  context: __SerdeContext
): OperationInProgressException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1OperationNotSupportedException = (
  output: any,
  context: __SerdeContext
): OperationNotSupportedException => {
  return {
    message: __expectString(output.message),
    reason: __expectString(output.reason),
  } as any;
};

const deserializeAws_json1_1PendingCreateStandbyWorkspacesRequest = (
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

const deserializeAws_json1_1PendingCreateStandbyWorkspacesRequestList = (
  output: any,
  context: __SerdeContext
): PendingCreateStandbyWorkspacesRequest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PendingCreateStandbyWorkspacesRequest(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ProtocolList = (output: any, context: __SerdeContext): (Protocol | string)[] => {
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

const deserializeAws_json1_1RebootWorkspacesResult = (output: any, context: __SerdeContext): RebootWorkspacesResult => {
  return {
    FailedRequests:
      output.FailedRequests != null
        ? deserializeAws_json1_1FailedRebootWorkspaceRequests(output.FailedRequests, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RebuildWorkspacesResult = (
  output: any,
  context: __SerdeContext
): RebuildWorkspacesResult => {
  return {
    FailedRequests:
      output.FailedRequests != null
        ? deserializeAws_json1_1FailedRebuildWorkspaceRequests(output.FailedRequests, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RegisterWorkspaceDirectoryResult = (
  output: any,
  context: __SerdeContext
): RegisterWorkspaceDirectoryResult => {
  return {} as any;
};

const deserializeAws_json1_1RelatedWorkspaceProperties = (
  output: any,
  context: __SerdeContext
): RelatedWorkspaceProperties => {
  return {
    Region: __expectString(output.Region),
    State: __expectString(output.State),
    Type: __expectString(output.Type),
    WorkspaceId: __expectString(output.WorkspaceId),
  } as any;
};

const deserializeAws_json1_1RelatedWorkspaces = (
  output: any,
  context: __SerdeContext
): RelatedWorkspaceProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RelatedWorkspaceProperties(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ResourceAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ResourceAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ResourceAssociatedException = (
  output: any,
  context: __SerdeContext
): ResourceAssociatedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ResourceCreationFailedException = (
  output: any,
  context: __SerdeContext
): ResourceCreationFailedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ResourceLimitExceededException = (
  output: any,
  context: __SerdeContext
): ResourceLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    ResourceId: __expectString(output.ResourceId),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ResourceUnavailableException = (
  output: any,
  context: __SerdeContext
): ResourceUnavailableException => {
  return {
    ResourceId: __expectString(output.ResourceId),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1RestoreWorkspaceResult = (output: any, context: __SerdeContext): RestoreWorkspaceResult => {
  return {} as any;
};

const deserializeAws_json1_1RevokeIpRulesResult = (output: any, context: __SerdeContext): RevokeIpRulesResult => {
  return {} as any;
};

const deserializeAws_json1_1RootStorage = (output: any, context: __SerdeContext): RootStorage => {
  return {
    Capacity: __expectString(output.Capacity),
  } as any;
};

const deserializeAws_json1_1SamlProperties = (output: any, context: __SerdeContext): SamlProperties => {
  return {
    RelayStateParameterName: __expectString(output.RelayStateParameterName),
    Status: __expectString(output.Status),
    UserAccessUrl: __expectString(output.UserAccessUrl),
  } as any;
};

const deserializeAws_json1_1SelfservicePermissions = (output: any, context: __SerdeContext): SelfservicePermissions => {
  return {
    ChangeComputeType: __expectString(output.ChangeComputeType),
    IncreaseVolumeSize: __expectString(output.IncreaseVolumeSize),
    RebuildWorkspace: __expectString(output.RebuildWorkspace),
    RestartWorkspace: __expectString(output.RestartWorkspace),
    SwitchRunningMode: __expectString(output.SwitchRunningMode),
  } as any;
};

const deserializeAws_json1_1Snapshot = (output: any, context: __SerdeContext): Snapshot => {
  return {
    SnapshotTime:
      output.SnapshotTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SnapshotTime)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1SnapshotList = (output: any, context: __SerdeContext): Snapshot[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Snapshot(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1StandbyWorkspace = (output: any, context: __SerdeContext): StandbyWorkspace => {
  return {
    DirectoryId: __expectString(output.DirectoryId),
    PrimaryWorkspaceId: __expectString(output.PrimaryWorkspaceId),
    Tags: output.Tags != null ? deserializeAws_json1_1TagList(output.Tags, context) : undefined,
    VolumeEncryptionKey: __expectString(output.VolumeEncryptionKey),
  } as any;
};

const deserializeAws_json1_1StartWorkspacesResult = (output: any, context: __SerdeContext): StartWorkspacesResult => {
  return {
    FailedRequests:
      output.FailedRequests != null
        ? deserializeAws_json1_1FailedStartWorkspaceRequests(output.FailedRequests, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1StopWorkspacesResult = (output: any, context: __SerdeContext): StopWorkspacesResult => {
  return {
    FailedRequests:
      output.FailedRequests != null
        ? deserializeAws_json1_1FailedStopWorkspaceRequests(output.FailedRequests, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SubnetIds = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TerminateWorkspacesResult = (
  output: any,
  context: __SerdeContext
): TerminateWorkspacesResult => {
  return {
    FailedRequests:
      output.FailedRequests != null
        ? deserializeAws_json1_1FailedTerminateWorkspaceRequests(output.FailedRequests, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UnsupportedNetworkConfigurationException = (
  output: any,
  context: __SerdeContext
): UnsupportedNetworkConfigurationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1UnsupportedWorkspaceConfigurationException = (
  output: any,
  context: __SerdeContext
): UnsupportedWorkspaceConfigurationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1UpdateConnectClientAddInResult = (
  output: any,
  context: __SerdeContext
): UpdateConnectClientAddInResult => {
  return {} as any;
};

const deserializeAws_json1_1UpdateConnectionAliasPermissionResult = (
  output: any,
  context: __SerdeContext
): UpdateConnectionAliasPermissionResult => {
  return {} as any;
};

const deserializeAws_json1_1UpdateResult = (output: any, context: __SerdeContext): UpdateResult => {
  return {
    Description: __expectString(output.Description),
    UpdateAvailable: __expectBoolean(output.UpdateAvailable),
  } as any;
};

const deserializeAws_json1_1UpdateRulesOfIpGroupResult = (
  output: any,
  context: __SerdeContext
): UpdateRulesOfIpGroupResult => {
  return {} as any;
};

const deserializeAws_json1_1UpdateWorkspaceBundleResult = (
  output: any,
  context: __SerdeContext
): UpdateWorkspaceBundleResult => {
  return {} as any;
};

const deserializeAws_json1_1UpdateWorkspaceImagePermissionResult = (
  output: any,
  context: __SerdeContext
): UpdateWorkspaceImagePermissionResult => {
  return {} as any;
};

const deserializeAws_json1_1UserStorage = (output: any, context: __SerdeContext): UserStorage => {
  return {
    Capacity: __expectString(output.Capacity),
  } as any;
};

const deserializeAws_json1_1Workspace = (output: any, context: __SerdeContext): Workspace => {
  return {
    BundleId: __expectString(output.BundleId),
    ComputerName: __expectString(output.ComputerName),
    DirectoryId: __expectString(output.DirectoryId),
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    IpAddress: __expectString(output.IpAddress),
    ModificationStates:
      output.ModificationStates != null
        ? deserializeAws_json1_1ModificationStateList(output.ModificationStates, context)
        : undefined,
    RelatedWorkspaces:
      output.RelatedWorkspaces != null
        ? deserializeAws_json1_1RelatedWorkspaces(output.RelatedWorkspaces, context)
        : undefined,
    RootVolumeEncryptionEnabled: __expectBoolean(output.RootVolumeEncryptionEnabled),
    State: __expectString(output.State),
    SubnetId: __expectString(output.SubnetId),
    UserName: __expectString(output.UserName),
    UserVolumeEncryptionEnabled: __expectBoolean(output.UserVolumeEncryptionEnabled),
    VolumeEncryptionKey: __expectString(output.VolumeEncryptionKey),
    WorkspaceId: __expectString(output.WorkspaceId),
    WorkspaceProperties:
      output.WorkspaceProperties != null
        ? deserializeAws_json1_1WorkspaceProperties(output.WorkspaceProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1WorkspaceAccessProperties = (
  output: any,
  context: __SerdeContext
): WorkspaceAccessProperties => {
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

const deserializeAws_json1_1WorkspaceBundle = (output: any, context: __SerdeContext): WorkspaceBundle => {
  return {
    BundleId: __expectString(output.BundleId),
    BundleType: __expectString(output.BundleType),
    ComputeType:
      output.ComputeType != null ? deserializeAws_json1_1ComputeType(output.ComputeType, context) : undefined,
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
    RootStorage:
      output.RootStorage != null ? deserializeAws_json1_1RootStorage(output.RootStorage, context) : undefined,
    State: __expectString(output.State),
    UserStorage:
      output.UserStorage != null ? deserializeAws_json1_1UserStorage(output.UserStorage, context) : undefined,
  } as any;
};

const deserializeAws_json1_1WorkspaceConnectionStatus = (
  output: any,
  context: __SerdeContext
): WorkspaceConnectionStatus => {
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

const deserializeAws_json1_1WorkspaceConnectionStatusList = (
  output: any,
  context: __SerdeContext
): WorkspaceConnectionStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1WorkspaceConnectionStatus(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1WorkspaceDirectory = (output: any, context: __SerdeContext): WorkspaceDirectory => {
  return {
    Alias: __expectString(output.Alias),
    CertificateBasedAuthProperties:
      output.CertificateBasedAuthProperties != null
        ? deserializeAws_json1_1CertificateBasedAuthProperties(output.CertificateBasedAuthProperties, context)
        : undefined,
    CustomerUserName: __expectString(output.CustomerUserName),
    DirectoryId: __expectString(output.DirectoryId),
    DirectoryName: __expectString(output.DirectoryName),
    DirectoryType: __expectString(output.DirectoryType),
    DnsIpAddresses:
      output.DnsIpAddresses != null ? deserializeAws_json1_1DnsIpAddresses(output.DnsIpAddresses, context) : undefined,
    IamRoleId: __expectString(output.IamRoleId),
    RegistrationCode: __expectString(output.RegistrationCode),
    SamlProperties:
      output.SamlProperties != null ? deserializeAws_json1_1SamlProperties(output.SamlProperties, context) : undefined,
    SelfservicePermissions:
      output.SelfservicePermissions != null
        ? deserializeAws_json1_1SelfservicePermissions(output.SelfservicePermissions, context)
        : undefined,
    State: __expectString(output.State),
    SubnetIds: output.SubnetIds != null ? deserializeAws_json1_1SubnetIds(output.SubnetIds, context) : undefined,
    Tenancy: __expectString(output.Tenancy),
    WorkspaceAccessProperties:
      output.WorkspaceAccessProperties != null
        ? deserializeAws_json1_1WorkspaceAccessProperties(output.WorkspaceAccessProperties, context)
        : undefined,
    WorkspaceCreationProperties:
      output.WorkspaceCreationProperties != null
        ? deserializeAws_json1_1DefaultWorkspaceCreationProperties(output.WorkspaceCreationProperties, context)
        : undefined,
    WorkspaceSecurityGroupId: __expectString(output.WorkspaceSecurityGroupId),
    ipGroupIds: output.ipGroupIds != null ? deserializeAws_json1_1IpGroupIdList(output.ipGroupIds, context) : undefined,
  } as any;
};

const deserializeAws_json1_1WorkspaceImage = (output: any, context: __SerdeContext): WorkspaceImage => {
  return {
    Created:
      output.Created != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Created))) : undefined,
    Description: __expectString(output.Description),
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    ImageId: __expectString(output.ImageId),
    Name: __expectString(output.Name),
    OperatingSystem:
      output.OperatingSystem != null
        ? deserializeAws_json1_1OperatingSystem(output.OperatingSystem, context)
        : undefined,
    OwnerAccountId: __expectString(output.OwnerAccountId),
    RequiredTenancy: __expectString(output.RequiredTenancy),
    State: __expectString(output.State),
    Updates: output.Updates != null ? deserializeAws_json1_1UpdateResult(output.Updates, context) : undefined,
  } as any;
};

const deserializeAws_json1_1WorkspaceImageList = (output: any, context: __SerdeContext): WorkspaceImage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1WorkspaceImage(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1WorkspaceList = (output: any, context: __SerdeContext): Workspace[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Workspace(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1WorkspaceProperties = (output: any, context: __SerdeContext): WorkspaceProperties => {
  return {
    ComputeTypeName: __expectString(output.ComputeTypeName),
    Protocols: output.Protocols != null ? deserializeAws_json1_1ProtocolList(output.Protocols, context) : undefined,
    RootVolumeSizeGib: __expectInt32(output.RootVolumeSizeGib),
    RunningMode: __expectString(output.RunningMode),
    RunningModeAutoStopTimeoutInMinutes: __expectInt32(output.RunningModeAutoStopTimeoutInMinutes),
    UserVolumeSizeGib: __expectInt32(output.UserVolumeSizeGib),
  } as any;
};

const deserializeAws_json1_1WorkspaceRequest = (output: any, context: __SerdeContext): WorkspaceRequest => {
  return {
    BundleId: __expectString(output.BundleId),
    DirectoryId: __expectString(output.DirectoryId),
    RootVolumeEncryptionEnabled: __expectBoolean(output.RootVolumeEncryptionEnabled),
    Tags: output.Tags != null ? deserializeAws_json1_1TagList(output.Tags, context) : undefined,
    UserName: __expectString(output.UserName),
    UserVolumeEncryptionEnabled: __expectBoolean(output.UserVolumeEncryptionEnabled),
    VolumeEncryptionKey: __expectString(output.VolumeEncryptionKey),
    WorkspaceProperties:
      output.WorkspaceProperties != null
        ? deserializeAws_json1_1WorkspaceProperties(output.WorkspaceProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1WorkspacesDefaultRoleNotFoundException = (
  output: any,
  context: __SerdeContext
): WorkspacesDefaultRoleNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1WorkspacesIpGroup = (output: any, context: __SerdeContext): WorkspacesIpGroup => {
  return {
    groupDesc: __expectString(output.groupDesc),
    groupId: __expectString(output.groupId),
    groupName: __expectString(output.groupName),
    userRules: output.userRules != null ? deserializeAws_json1_1IpRuleList(output.userRules, context) : undefined,
  } as any;
};

const deserializeAws_json1_1WorkspacesIpGroupsList = (output: any, context: __SerdeContext): WorkspacesIpGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1WorkspacesIpGroup(entry, context);
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
