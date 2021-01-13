import {
  AssociateConnectionAliasCommandInput,
  AssociateConnectionAliasCommandOutput,
} from "../commands/AssociateConnectionAliasCommand";
import { AssociateIpGroupsCommandInput, AssociateIpGroupsCommandOutput } from "../commands/AssociateIpGroupsCommand";
import { AuthorizeIpRulesCommandInput, AuthorizeIpRulesCommandOutput } from "../commands/AuthorizeIpRulesCommand";
import { CopyWorkspaceImageCommandInput, CopyWorkspaceImageCommandOutput } from "../commands/CopyWorkspaceImageCommand";
import {
  CreateConnectionAliasCommandInput,
  CreateConnectionAliasCommandOutput,
} from "../commands/CreateConnectionAliasCommand";
import { CreateIpGroupCommandInput, CreateIpGroupCommandOutput } from "../commands/CreateIpGroupCommand";
import { CreateTagsCommandInput, CreateTagsCommandOutput } from "../commands/CreateTagsCommand";
import { CreateWorkspacesCommandInput, CreateWorkspacesCommandOutput } from "../commands/CreateWorkspacesCommand";
import {
  DeleteConnectionAliasCommandInput,
  DeleteConnectionAliasCommandOutput,
} from "../commands/DeleteConnectionAliasCommand";
import { DeleteIpGroupCommandInput, DeleteIpGroupCommandOutput } from "../commands/DeleteIpGroupCommand";
import { DeleteTagsCommandInput, DeleteTagsCommandOutput } from "../commands/DeleteTagsCommand";
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
  DescribeClientPropertiesCommandInput,
  DescribeClientPropertiesCommandOutput,
} from "../commands/DescribeClientPropertiesCommand";
import {
  DescribeConnectionAliasPermissionsCommandInput,
  DescribeConnectionAliasPermissionsCommandOutput,
} from "../commands/DescribeConnectionAliasPermissionsCommand";
import {
  DescribeConnectionAliasesCommandInput,
  DescribeConnectionAliasesCommandOutput,
} from "../commands/DescribeConnectionAliasesCommand";
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
import {
  DescribeWorkspaceSnapshotsCommandInput,
  DescribeWorkspaceSnapshotsCommandOutput,
} from "../commands/DescribeWorkspaceSnapshotsCommand";
import { DescribeWorkspacesCommandInput, DescribeWorkspacesCommandOutput } from "../commands/DescribeWorkspacesCommand";
import {
  DescribeWorkspacesConnectionStatusCommandInput,
  DescribeWorkspacesConnectionStatusCommandOutput,
} from "../commands/DescribeWorkspacesConnectionStatusCommand";
import {
  DisassociateConnectionAliasCommandInput,
  DisassociateConnectionAliasCommandOutput,
} from "../commands/DisassociateConnectionAliasCommand";
import {
  DisassociateIpGroupsCommandInput,
  DisassociateIpGroupsCommandOutput,
} from "../commands/DisassociateIpGroupsCommand";
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
  ModifyClientPropertiesCommandInput,
  ModifyClientPropertiesCommandOutput,
} from "../commands/ModifyClientPropertiesCommand";
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
  UpdateConnectionAliasPermissionCommandInput,
  UpdateConnectionAliasPermissionCommandOutput,
} from "../commands/UpdateConnectionAliasPermissionCommand";
import {
  UpdateRulesOfIpGroupCommandInput,
  UpdateRulesOfIpGroupCommandOutput,
} from "../commands/UpdateRulesOfIpGroupCommand";
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
  ClientProperties,
  ClientPropertiesResult,
  ComputeType,
  ConnectionAlias,
  ConnectionAliasAssociation,
  ConnectionAliasPermission,
  CopyWorkspaceImageRequest,
  CopyWorkspaceImageResult,
  CreateConnectionAliasRequest,
  CreateConnectionAliasResult,
  CreateIpGroupRequest,
  CreateIpGroupResult,
  CreateTagsRequest,
  CreateTagsResult,
  CreateWorkspacesRequest,
  CreateWorkspacesResult,
  DefaultWorkspaceCreationProperties,
  DeleteConnectionAliasRequest,
  DeleteConnectionAliasResult,
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
  DescribeConnectionAliasPermissionsRequest,
  DescribeConnectionAliasPermissionsResult,
  DescribeConnectionAliasesRequest,
  DescribeConnectionAliasesResult,
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
  DescribeWorkspaceSnapshotsRequest,
  DescribeWorkspaceSnapshotsResult,
  DescribeWorkspacesConnectionStatusRequest,
  DescribeWorkspacesConnectionStatusResult,
  DescribeWorkspacesRequest,
  DescribeWorkspacesResult,
  DisassociateConnectionAliasRequest,
  DisassociateConnectionAliasResult,
  DisassociateIpGroupsRequest,
  DisassociateIpGroupsResult,
  FailedCreateWorkspaceRequest,
  FailedWorkspaceChangeRequest,
  ImagePermission,
  ImportWorkspaceImageRequest,
  ImportWorkspaceImageResult,
  InvalidParameterValuesException,
  InvalidResourceStateException,
  IpRuleItem,
  ListAvailableManagementCidrRangesRequest,
  ListAvailableManagementCidrRangesResult,
  MigrateWorkspaceRequest,
  MigrateWorkspaceResult,
  ModificationState,
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
  OperatingSystem,
  OperationInProgressException,
  OperationNotSupportedException,
  RebootRequest,
  RebootWorkspacesRequest,
  RebootWorkspacesResult,
  RebuildRequest,
  RebuildWorkspacesRequest,
  RebuildWorkspacesResult,
  RegisterWorkspaceDirectoryRequest,
  RegisterWorkspaceDirectoryResult,
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
  SelfservicePermissions,
  Snapshot,
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
  UpdateConnectionAliasPermissionRequest,
  UpdateConnectionAliasPermissionResult,
  UpdateRulesOfIpGroupRequest,
  UpdateRulesOfIpGroupResult,
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
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAssociatedException":
    case "com.amazonaws.workspaces#ResourceAssociatedException":
      response = {
        ...(await deserializeAws_json1_1ResourceAssociatedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.workspaces#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.workspaces#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.workspaces#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.workspaces#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceCreationFailedException":
    case "com.amazonaws.workspaces#ResourceCreationFailedException":
      response = {
        ...(await deserializeAws_json1_1ResourceCreationFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAssociatedException":
    case "com.amazonaws.workspaces#ResourceAssociatedException":
      response = {
        ...(await deserializeAws_json1_1ResourceAssociatedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAssociatedException":
    case "com.amazonaws.workspaces#ResourceAssociatedException":
      response = {
        ...(await deserializeAws_json1_1ResourceAssociatedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAssociatedException":
    case "com.amazonaws.workspaces#ResourceAssociatedException":
      response = {
        ...(await deserializeAws_json1_1ResourceAssociatedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.workspaces#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.workspaces#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationInProgressException":
    case "com.amazonaws.workspaces#OperationInProgressException":
      response = {
        ...(await deserializeAws_json1_1OperationInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.workspaces#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.workspaces#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationInProgressException":
    case "com.amazonaws.workspaces#OperationInProgressException":
      response = {
        ...(await deserializeAws_json1_1OperationInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.workspaces#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedWorkspaceConfigurationException":
    case "com.amazonaws.workspaces#UnsupportedWorkspaceConfigurationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedWorkspaceConfigurationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedNetworkConfigurationException":
    case "com.amazonaws.workspaces#UnsupportedNetworkConfigurationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedNetworkConfigurationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WorkspacesDefaultRoleNotFoundException":
    case "com.amazonaws.workspaces#WorkspacesDefaultRoleNotFoundException":
      response = {
        ...(await deserializeAws_json1_1WorkspacesDefaultRoleNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAssociatedException":
    case "com.amazonaws.workspaces#ResourceAssociatedException":
      response = {
        ...(await deserializeAws_json1_1ResourceAssociatedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.workspaces#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(body, context);
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterValuesExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValuesException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterValuesException(body, context);
  const contents: InvalidParameterValuesException = {
    name: "InvalidParameterValuesException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidResourceStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidResourceStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidResourceStateException(body, context);
  const contents: InvalidResourceStateException = {
    name: "InvalidResourceStateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1OperationInProgressExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationInProgressException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OperationInProgressException(body, context);
  const contents: OperationInProgressException = {
    name: "OperationInProgressException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1OperationNotSupportedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationNotSupportedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OperationNotSupportedException(body, context);
  const contents: OperationNotSupportedException = {
    name: "OperationNotSupportedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceAlreadyExistsException(body, context);
  const contents: ResourceAlreadyExistsException = {
    name: "ResourceAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceAssociatedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAssociatedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceAssociatedException(body, context);
  const contents: ResourceAssociatedException = {
    name: "ResourceAssociatedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceCreationFailedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceCreationFailedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceCreationFailedException(body, context);
  const contents: ResourceCreationFailedException = {
    name: "ResourceCreationFailedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceLimitExceededException(body, context);
  const contents: ResourceLimitExceededException = {
    name: "ResourceLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceUnavailableException(body, context);
  const contents: ResourceUnavailableException = {
    name: "ResourceUnavailableException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1UnsupportedNetworkConfigurationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedNetworkConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedNetworkConfigurationException(body, context);
  const contents: UnsupportedNetworkConfigurationException = {
    name: "UnsupportedNetworkConfigurationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1UnsupportedWorkspaceConfigurationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedWorkspaceConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedWorkspaceConfigurationException(body, context);
  const contents: UnsupportedWorkspaceConfigurationException = {
    name: "UnsupportedWorkspaceConfigurationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1WorkspacesDefaultRoleNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WorkspacesDefaultRoleNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1WorkspacesDefaultRoleNotFoundException(body, context);
  const contents: WorkspacesDefaultRoleNotFoundException = {
    name: "WorkspacesDefaultRoleNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1ApplicationList = (input: (Application | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1AssociateConnectionAliasRequest = (
  input: AssociateConnectionAliasRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AliasId !== undefined && input.AliasId !== null && { AliasId: input.AliasId }),
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
  };
};

const serializeAws_json1_1AssociateIpGroupsRequest = (
  input: AssociateIpGroupsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    ...(input.GroupIds !== undefined &&
      input.GroupIds !== null && { GroupIds: serializeAws_json1_1IpGroupIdList(input.GroupIds, context) }),
  };
};

const serializeAws_json1_1AuthorizeIpRulesRequest = (input: AuthorizeIpRulesRequest, context: __SerdeContext): any => {
  return {
    ...(input.GroupId !== undefined && input.GroupId !== null && { GroupId: input.GroupId }),
    ...(input.UserRules !== undefined &&
      input.UserRules !== null && { UserRules: serializeAws_json1_1IpRuleList(input.UserRules, context) }),
  };
};

const serializeAws_json1_1BundleIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ClientProperties = (input: ClientProperties, context: __SerdeContext): any => {
  return {
    ...(input.ReconnectEnabled !== undefined &&
      input.ReconnectEnabled !== null && { ReconnectEnabled: input.ReconnectEnabled }),
  };
};

const serializeAws_json1_1ConnectionAliasIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ConnectionAliasPermission = (
  input: ConnectionAliasPermission,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllowAssociation !== undefined &&
      input.AllowAssociation !== null && { AllowAssociation: input.AllowAssociation }),
    ...(input.SharedAccountId !== undefined &&
      input.SharedAccountId !== null && { SharedAccountId: input.SharedAccountId }),
  };
};

const serializeAws_json1_1CopyWorkspaceImageRequest = (
  input: CopyWorkspaceImageRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.SourceImageId !== undefined && input.SourceImageId !== null && { SourceImageId: input.SourceImageId }),
    ...(input.SourceRegion !== undefined && input.SourceRegion !== null && { SourceRegion: input.SourceRegion }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateConnectionAliasRequest = (
  input: CreateConnectionAliasRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConnectionString !== undefined &&
      input.ConnectionString !== null && { ConnectionString: input.ConnectionString }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateIpGroupRequest = (input: CreateIpGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.GroupDesc !== undefined && input.GroupDesc !== null && { GroupDesc: input.GroupDesc }),
    ...(input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.UserRules !== undefined &&
      input.UserRules !== null && { UserRules: serializeAws_json1_1IpRuleList(input.UserRules, context) }),
  };
};

const serializeAws_json1_1CreateTagsRequest = (input: CreateTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateWorkspacesRequest = (input: CreateWorkspacesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Workspaces !== undefined &&
      input.Workspaces !== null && { Workspaces: serializeAws_json1_1WorkspaceRequestList(input.Workspaces, context) }),
  };
};

const serializeAws_json1_1DeleteConnectionAliasRequest = (
  input: DeleteConnectionAliasRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AliasId !== undefined && input.AliasId !== null && { AliasId: input.AliasId }),
  };
};

const serializeAws_json1_1DeleteIpGroupRequest = (input: DeleteIpGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.GroupId !== undefined && input.GroupId !== null && { GroupId: input.GroupId }),
  };
};

const serializeAws_json1_1DeleteTagsRequest = (input: DeleteTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1DeleteWorkspaceImageRequest = (
  input: DeleteWorkspaceImageRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ImageId !== undefined && input.ImageId !== null && { ImageId: input.ImageId }),
  };
};

const serializeAws_json1_1DeregisterWorkspaceDirectoryRequest = (
  input: DeregisterWorkspaceDirectoryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
  };
};

const serializeAws_json1_1DescribeAccountModificationsRequest = (
  input: DescribeAccountModificationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeAccountRequest = (input: DescribeAccountRequest, context: __SerdeContext): any => {
  return {};
};

const serializeAws_json1_1DescribeClientPropertiesRequest = (
  input: DescribeClientPropertiesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceIds !== undefined &&
      input.ResourceIds !== null && { ResourceIds: serializeAws_json1_1ResourceIdList(input.ResourceIds, context) }),
  };
};

const serializeAws_json1_1DescribeConnectionAliasesRequest = (
  input: DescribeConnectionAliasesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AliasIds !== undefined &&
      input.AliasIds !== null && { AliasIds: serializeAws_json1_1ConnectionAliasIdList(input.AliasIds, context) }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
  };
};

const serializeAws_json1_1DescribeConnectionAliasPermissionsRequest = (
  input: DescribeConnectionAliasPermissionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AliasId !== undefined && input.AliasId !== null && { AliasId: input.AliasId }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeIpGroupsRequest = (input: DescribeIpGroupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.GroupIds !== undefined &&
      input.GroupIds !== null && { GroupIds: serializeAws_json1_1IpGroupIdList(input.GroupIds, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeTagsRequest = (input: DescribeTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
  };
};

const serializeAws_json1_1DescribeWorkspaceBundlesRequest = (
  input: DescribeWorkspaceBundlesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.BundleIds !== undefined &&
      input.BundleIds !== null && { BundleIds: serializeAws_json1_1BundleIdList(input.BundleIds, context) }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.Owner !== undefined && input.Owner !== null && { Owner: input.Owner }),
  };
};

const serializeAws_json1_1DescribeWorkspaceDirectoriesRequest = (
  input: DescribeWorkspaceDirectoriesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryIds !== undefined &&
      input.DirectoryIds !== null && {
        DirectoryIds: serializeAws_json1_1DirectoryIdList(input.DirectoryIds, context),
      }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeWorkspaceImagePermissionsRequest = (
  input: DescribeWorkspaceImagePermissionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ImageId !== undefined && input.ImageId !== null && { ImageId: input.ImageId }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeWorkspaceImagesRequest = (
  input: DescribeWorkspaceImagesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ImageIds !== undefined &&
      input.ImageIds !== null && { ImageIds: serializeAws_json1_1WorkspaceImageIdList(input.ImageIds, context) }),
    ...(input.ImageType !== undefined && input.ImageType !== null && { ImageType: input.ImageType }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeWorkspacesConnectionStatusRequest = (
  input: DescribeWorkspacesConnectionStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.WorkspaceIds !== undefined &&
      input.WorkspaceIds !== null && {
        WorkspaceIds: serializeAws_json1_1WorkspaceIdList(input.WorkspaceIds, context),
      }),
  };
};

const serializeAws_json1_1DescribeWorkspaceSnapshotsRequest = (
  input: DescribeWorkspaceSnapshotsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.WorkspaceId !== undefined && input.WorkspaceId !== null && { WorkspaceId: input.WorkspaceId }),
  };
};

const serializeAws_json1_1DescribeWorkspacesRequest = (
  input: DescribeWorkspacesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.BundleId !== undefined && input.BundleId !== null && { BundleId: input.BundleId }),
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
    ...(input.WorkspaceIds !== undefined &&
      input.WorkspaceIds !== null && {
        WorkspaceIds: serializeAws_json1_1WorkspaceIdList(input.WorkspaceIds, context),
      }),
  };
};

const serializeAws_json1_1DirectoryIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1DisassociateConnectionAliasRequest = (
  input: DisassociateConnectionAliasRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AliasId !== undefined && input.AliasId !== null && { AliasId: input.AliasId }),
  };
};

const serializeAws_json1_1DisassociateIpGroupsRequest = (
  input: DisassociateIpGroupsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    ...(input.GroupIds !== undefined &&
      input.GroupIds !== null && { GroupIds: serializeAws_json1_1IpGroupIdList(input.GroupIds, context) }),
  };
};

const serializeAws_json1_1ImportWorkspaceImageRequest = (
  input: ImportWorkspaceImageRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Applications !== undefined &&
      input.Applications !== null && {
        Applications: serializeAws_json1_1ApplicationList(input.Applications, context),
      }),
    ...(input.Ec2ImageId !== undefined && input.Ec2ImageId !== null && { Ec2ImageId: input.Ec2ImageId }),
    ...(input.ImageDescription !== undefined &&
      input.ImageDescription !== null && { ImageDescription: input.ImageDescription }),
    ...(input.ImageName !== undefined && input.ImageName !== null && { ImageName: input.ImageName }),
    ...(input.IngestionProcess !== undefined &&
      input.IngestionProcess !== null && { IngestionProcess: input.IngestionProcess }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1IpGroupIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1IpRevokedRuleList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1IpRuleItem = (input: IpRuleItem, context: __SerdeContext): any => {
  return {
    ...(input.ipRule !== undefined && input.ipRule !== null && { ipRule: input.ipRule }),
    ...(input.ruleDesc !== undefined && input.ruleDesc !== null && { ruleDesc: input.ruleDesc }),
  };
};

const serializeAws_json1_1IpRuleList = (input: IpRuleItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1IpRuleItem(entry, context);
    });
};

const serializeAws_json1_1ListAvailableManagementCidrRangesRequest = (
  input: ListAvailableManagementCidrRangesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ManagementCidrRangeConstraint !== undefined &&
      input.ManagementCidrRangeConstraint !== null && {
        ManagementCidrRangeConstraint: input.ManagementCidrRangeConstraint,
      }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1MigrateWorkspaceRequest = (input: MigrateWorkspaceRequest, context: __SerdeContext): any => {
  return {
    ...(input.BundleId !== undefined && input.BundleId !== null && { BundleId: input.BundleId }),
    ...(input.SourceWorkspaceId !== undefined &&
      input.SourceWorkspaceId !== null && { SourceWorkspaceId: input.SourceWorkspaceId }),
  };
};

const serializeAws_json1_1ModifyAccountRequest = (input: ModifyAccountRequest, context: __SerdeContext): any => {
  return {
    ...(input.DedicatedTenancyManagementCidrRange !== undefined &&
      input.DedicatedTenancyManagementCidrRange !== null && {
        DedicatedTenancyManagementCidrRange: input.DedicatedTenancyManagementCidrRange,
      }),
    ...(input.DedicatedTenancySupport !== undefined &&
      input.DedicatedTenancySupport !== null && { DedicatedTenancySupport: input.DedicatedTenancySupport }),
  };
};

const serializeAws_json1_1ModifyClientPropertiesRequest = (
  input: ModifyClientPropertiesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientProperties !== undefined &&
      input.ClientProperties !== null && {
        ClientProperties: serializeAws_json1_1ClientProperties(input.ClientProperties, context),
      }),
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
  };
};

const serializeAws_json1_1ModifySelfservicePermissionsRequest = (
  input: ModifySelfservicePermissionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    ...(input.SelfservicePermissions !== undefined &&
      input.SelfservicePermissions !== null && {
        SelfservicePermissions: serializeAws_json1_1SelfservicePermissions(input.SelfservicePermissions, context),
      }),
  };
};

const serializeAws_json1_1ModifyWorkspaceAccessPropertiesRequest = (
  input: ModifyWorkspaceAccessPropertiesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    ...(input.WorkspaceAccessProperties !== undefined &&
      input.WorkspaceAccessProperties !== null && {
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
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    ...(input.WorkspaceCreationProperties !== undefined &&
      input.WorkspaceCreationProperties !== null && {
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
    ...(input.WorkspaceId !== undefined && input.WorkspaceId !== null && { WorkspaceId: input.WorkspaceId }),
    ...(input.WorkspaceProperties !== undefined &&
      input.WorkspaceProperties !== null && {
        WorkspaceProperties: serializeAws_json1_1WorkspaceProperties(input.WorkspaceProperties, context),
      }),
  };
};

const serializeAws_json1_1ModifyWorkspaceStateRequest = (
  input: ModifyWorkspaceStateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.WorkspaceId !== undefined && input.WorkspaceId !== null && { WorkspaceId: input.WorkspaceId }),
    ...(input.WorkspaceState !== undefined &&
      input.WorkspaceState !== null && { WorkspaceState: input.WorkspaceState }),
  };
};

const serializeAws_json1_1RebootRequest = (input: RebootRequest, context: __SerdeContext): any => {
  return {
    ...(input.WorkspaceId !== undefined && input.WorkspaceId !== null && { WorkspaceId: input.WorkspaceId }),
  };
};

const serializeAws_json1_1RebootWorkspaceRequests = (input: RebootRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1RebootRequest(entry, context);
    });
};

const serializeAws_json1_1RebootWorkspacesRequest = (input: RebootWorkspacesRequest, context: __SerdeContext): any => {
  return {
    ...(input.RebootWorkspaceRequests !== undefined &&
      input.RebootWorkspaceRequests !== null && {
        RebootWorkspaceRequests: serializeAws_json1_1RebootWorkspaceRequests(input.RebootWorkspaceRequests, context),
      }),
  };
};

const serializeAws_json1_1RebuildRequest = (input: RebuildRequest, context: __SerdeContext): any => {
  return {
    ...(input.WorkspaceId !== undefined && input.WorkspaceId !== null && { WorkspaceId: input.WorkspaceId }),
  };
};

const serializeAws_json1_1RebuildWorkspaceRequests = (input: RebuildRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1RebuildRequest(entry, context);
    });
};

const serializeAws_json1_1RebuildWorkspacesRequest = (
  input: RebuildWorkspacesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.RebuildWorkspaceRequests !== undefined &&
      input.RebuildWorkspaceRequests !== null && {
        RebuildWorkspaceRequests: serializeAws_json1_1RebuildWorkspaceRequests(input.RebuildWorkspaceRequests, context),
      }),
  };
};

const serializeAws_json1_1RegisterWorkspaceDirectoryRequest = (
  input: RegisterWorkspaceDirectoryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    ...(input.EnableSelfService !== undefined &&
      input.EnableSelfService !== null && { EnableSelfService: input.EnableSelfService }),
    ...(input.EnableWorkDocs !== undefined &&
      input.EnableWorkDocs !== null && { EnableWorkDocs: input.EnableWorkDocs }),
    ...(input.SubnetIds !== undefined &&
      input.SubnetIds !== null && { SubnetIds: serializeAws_json1_1SubnetIds(input.SubnetIds, context) }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.Tenancy !== undefined && input.Tenancy !== null && { Tenancy: input.Tenancy }),
  };
};

const serializeAws_json1_1ResourceIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1RestoreWorkspaceRequest = (input: RestoreWorkspaceRequest, context: __SerdeContext): any => {
  return {
    ...(input.WorkspaceId !== undefined && input.WorkspaceId !== null && { WorkspaceId: input.WorkspaceId }),
  };
};

const serializeAws_json1_1RevokeIpRulesRequest = (input: RevokeIpRulesRequest, context: __SerdeContext): any => {
  return {
    ...(input.GroupId !== undefined && input.GroupId !== null && { GroupId: input.GroupId }),
    ...(input.UserRules !== undefined &&
      input.UserRules !== null && { UserRules: serializeAws_json1_1IpRevokedRuleList(input.UserRules, context) }),
  };
};

const serializeAws_json1_1SelfservicePermissions = (input: SelfservicePermissions, context: __SerdeContext): any => {
  return {
    ...(input.ChangeComputeType !== undefined &&
      input.ChangeComputeType !== null && { ChangeComputeType: input.ChangeComputeType }),
    ...(input.IncreaseVolumeSize !== undefined &&
      input.IncreaseVolumeSize !== null && { IncreaseVolumeSize: input.IncreaseVolumeSize }),
    ...(input.RebuildWorkspace !== undefined &&
      input.RebuildWorkspace !== null && { RebuildWorkspace: input.RebuildWorkspace }),
    ...(input.RestartWorkspace !== undefined &&
      input.RestartWorkspace !== null && { RestartWorkspace: input.RestartWorkspace }),
    ...(input.SwitchRunningMode !== undefined &&
      input.SwitchRunningMode !== null && { SwitchRunningMode: input.SwitchRunningMode }),
  };
};

const serializeAws_json1_1StartRequest = (input: StartRequest, context: __SerdeContext): any => {
  return {
    ...(input.WorkspaceId !== undefined && input.WorkspaceId !== null && { WorkspaceId: input.WorkspaceId }),
  };
};

const serializeAws_json1_1StartWorkspaceRequests = (input: StartRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1StartRequest(entry, context);
    });
};

const serializeAws_json1_1StartWorkspacesRequest = (input: StartWorkspacesRequest, context: __SerdeContext): any => {
  return {
    ...(input.StartWorkspaceRequests !== undefined &&
      input.StartWorkspaceRequests !== null && {
        StartWorkspaceRequests: serializeAws_json1_1StartWorkspaceRequests(input.StartWorkspaceRequests, context),
      }),
  };
};

const serializeAws_json1_1StopRequest = (input: StopRequest, context: __SerdeContext): any => {
  return {
    ...(input.WorkspaceId !== undefined && input.WorkspaceId !== null && { WorkspaceId: input.WorkspaceId }),
  };
};

const serializeAws_json1_1StopWorkspaceRequests = (input: StopRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1StopRequest(entry, context);
    });
};

const serializeAws_json1_1StopWorkspacesRequest = (input: StopWorkspacesRequest, context: __SerdeContext): any => {
  return {
    ...(input.StopWorkspaceRequests !== undefined &&
      input.StopWorkspaceRequests !== null && {
        StopWorkspaceRequests: serializeAws_json1_1StopWorkspaceRequests(input.StopWorkspaceRequests, context),
      }),
  };
};

const serializeAws_json1_1SubnetIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TerminateRequest = (input: TerminateRequest, context: __SerdeContext): any => {
  return {
    ...(input.WorkspaceId !== undefined && input.WorkspaceId !== null && { WorkspaceId: input.WorkspaceId }),
  };
};

const serializeAws_json1_1TerminateWorkspaceRequests = (input: TerminateRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1TerminateRequest(entry, context);
    });
};

const serializeAws_json1_1TerminateWorkspacesRequest = (
  input: TerminateWorkspacesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.TerminateWorkspaceRequests !== undefined &&
      input.TerminateWorkspaceRequests !== null && {
        TerminateWorkspaceRequests: serializeAws_json1_1TerminateWorkspaceRequests(
          input.TerminateWorkspaceRequests,
          context
        ),
      }),
  };
};

const serializeAws_json1_1UpdateConnectionAliasPermissionRequest = (
  input: UpdateConnectionAliasPermissionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AliasId !== undefined && input.AliasId !== null && { AliasId: input.AliasId }),
    ...(input.ConnectionAliasPermission !== undefined &&
      input.ConnectionAliasPermission !== null && {
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
    ...(input.GroupId !== undefined && input.GroupId !== null && { GroupId: input.GroupId }),
    ...(input.UserRules !== undefined &&
      input.UserRules !== null && { UserRules: serializeAws_json1_1IpRuleList(input.UserRules, context) }),
  };
};

const serializeAws_json1_1UpdateWorkspaceImagePermissionRequest = (
  input: UpdateWorkspaceImagePermissionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllowCopyImage !== undefined &&
      input.AllowCopyImage !== null && { AllowCopyImage: input.AllowCopyImage }),
    ...(input.ImageId !== undefined && input.ImageId !== null && { ImageId: input.ImageId }),
    ...(input.SharedAccountId !== undefined &&
      input.SharedAccountId !== null && { SharedAccountId: input.SharedAccountId }),
  };
};

const serializeAws_json1_1WorkspaceAccessProperties = (
  input: WorkspaceAccessProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeviceTypeAndroid !== undefined &&
      input.DeviceTypeAndroid !== null && { DeviceTypeAndroid: input.DeviceTypeAndroid }),
    ...(input.DeviceTypeChromeOs !== undefined &&
      input.DeviceTypeChromeOs !== null && { DeviceTypeChromeOs: input.DeviceTypeChromeOs }),
    ...(input.DeviceTypeIos !== undefined && input.DeviceTypeIos !== null && { DeviceTypeIos: input.DeviceTypeIos }),
    ...(input.DeviceTypeOsx !== undefined && input.DeviceTypeOsx !== null && { DeviceTypeOsx: input.DeviceTypeOsx }),
    ...(input.DeviceTypeWeb !== undefined && input.DeviceTypeWeb !== null && { DeviceTypeWeb: input.DeviceTypeWeb }),
    ...(input.DeviceTypeWindows !== undefined &&
      input.DeviceTypeWindows !== null && { DeviceTypeWindows: input.DeviceTypeWindows }),
    ...(input.DeviceTypeZeroClient !== undefined &&
      input.DeviceTypeZeroClient !== null && { DeviceTypeZeroClient: input.DeviceTypeZeroClient }),
  };
};

const serializeAws_json1_1WorkspaceCreationProperties = (
  input: WorkspaceCreationProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomSecurityGroupId !== undefined &&
      input.CustomSecurityGroupId !== null && { CustomSecurityGroupId: input.CustomSecurityGroupId }),
    ...(input.DefaultOu !== undefined && input.DefaultOu !== null && { DefaultOu: input.DefaultOu }),
    ...(input.EnableInternetAccess !== undefined &&
      input.EnableInternetAccess !== null && { EnableInternetAccess: input.EnableInternetAccess }),
    ...(input.EnableMaintenanceMode !== undefined &&
      input.EnableMaintenanceMode !== null && { EnableMaintenanceMode: input.EnableMaintenanceMode }),
    ...(input.EnableWorkDocs !== undefined &&
      input.EnableWorkDocs !== null && { EnableWorkDocs: input.EnableWorkDocs }),
    ...(input.UserEnabledAsLocalAdministrator !== undefined &&
      input.UserEnabledAsLocalAdministrator !== null && {
        UserEnabledAsLocalAdministrator: input.UserEnabledAsLocalAdministrator,
      }),
  };
};

const serializeAws_json1_1WorkspaceIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1WorkspaceImageIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1WorkspaceProperties = (input: WorkspaceProperties, context: __SerdeContext): any => {
  return {
    ...(input.ComputeTypeName !== undefined &&
      input.ComputeTypeName !== null && { ComputeTypeName: input.ComputeTypeName }),
    ...(input.RootVolumeSizeGib !== undefined &&
      input.RootVolumeSizeGib !== null && { RootVolumeSizeGib: input.RootVolumeSizeGib }),
    ...(input.RunningMode !== undefined && input.RunningMode !== null && { RunningMode: input.RunningMode }),
    ...(input.RunningModeAutoStopTimeoutInMinutes !== undefined &&
      input.RunningModeAutoStopTimeoutInMinutes !== null && {
        RunningModeAutoStopTimeoutInMinutes: input.RunningModeAutoStopTimeoutInMinutes,
      }),
    ...(input.UserVolumeSizeGib !== undefined &&
      input.UserVolumeSizeGib !== null && { UserVolumeSizeGib: input.UserVolumeSizeGib }),
  };
};

const serializeAws_json1_1WorkspaceRequest = (input: WorkspaceRequest, context: __SerdeContext): any => {
  return {
    ...(input.BundleId !== undefined && input.BundleId !== null && { BundleId: input.BundleId }),
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    ...(input.RootVolumeEncryptionEnabled !== undefined &&
      input.RootVolumeEncryptionEnabled !== null && { RootVolumeEncryptionEnabled: input.RootVolumeEncryptionEnabled }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
    ...(input.UserVolumeEncryptionEnabled !== undefined &&
      input.UserVolumeEncryptionEnabled !== null && { UserVolumeEncryptionEnabled: input.UserVolumeEncryptionEnabled }),
    ...(input.VolumeEncryptionKey !== undefined &&
      input.VolumeEncryptionKey !== null && { VolumeEncryptionKey: input.VolumeEncryptionKey }),
    ...(input.WorkspaceProperties !== undefined &&
      input.WorkspaceProperties !== null && {
        WorkspaceProperties: serializeAws_json1_1WorkspaceProperties(input.WorkspaceProperties, context),
      }),
  };
};

const serializeAws_json1_1WorkspaceRequestList = (input: WorkspaceRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1WorkspaceRequest(entry, context);
    });
};

const deserializeAws_json1_1AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1AccountModification = (output: any, context: __SerdeContext): AccountModification => {
  return {
    DedicatedTenancyManagementCidrRange:
      output.DedicatedTenancyManagementCidrRange !== undefined && output.DedicatedTenancyManagementCidrRange !== null
        ? output.DedicatedTenancyManagementCidrRange
        : undefined,
    DedicatedTenancySupport:
      output.DedicatedTenancySupport !== undefined && output.DedicatedTenancySupport !== null
        ? output.DedicatedTenancySupport
        : undefined,
    ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
    ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
    ModificationState:
      output.ModificationState !== undefined && output.ModificationState !== null
        ? output.ModificationState
        : undefined,
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? new Date(Math.round(output.StartTime * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1AccountModificationList = (output: any, context: __SerdeContext): AccountModification[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AccountModification(entry, context);
    });
};

const deserializeAws_json1_1AssociateConnectionAliasResult = (
  output: any,
  context: __SerdeContext
): AssociateConnectionAliasResult => {
  return {
    ConnectionIdentifier:
      output.ConnectionIdentifier !== undefined && output.ConnectionIdentifier !== null
        ? output.ConnectionIdentifier
        : undefined,
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1WorkspaceBundle(entry, context);
    });
};

const deserializeAws_json1_1ClientProperties = (output: any, context: __SerdeContext): ClientProperties => {
  return {
    ReconnectEnabled:
      output.ReconnectEnabled !== undefined && output.ReconnectEnabled !== null ? output.ReconnectEnabled : undefined,
  } as any;
};

const deserializeAws_json1_1ClientPropertiesList = (output: any, context: __SerdeContext): ClientPropertiesResult[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ClientPropertiesResult(entry, context);
    });
};

const deserializeAws_json1_1ClientPropertiesResult = (output: any, context: __SerdeContext): ClientPropertiesResult => {
  return {
    ClientProperties:
      output.ClientProperties !== undefined && output.ClientProperties !== null
        ? deserializeAws_json1_1ClientProperties(output.ClientProperties, context)
        : undefined,
    ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
  } as any;
};

const deserializeAws_json1_1ComputeType = (output: any, context: __SerdeContext): ComputeType => {
  return {
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
  } as any;
};

const deserializeAws_json1_1ConnectionAlias = (output: any, context: __SerdeContext): ConnectionAlias => {
  return {
    AliasId: output.AliasId !== undefined && output.AliasId !== null ? output.AliasId : undefined,
    Associations:
      output.Associations !== undefined && output.Associations !== null
        ? deserializeAws_json1_1ConnectionAliasAssociationList(output.Associations, context)
        : undefined,
    ConnectionString:
      output.ConnectionString !== undefined && output.ConnectionString !== null ? output.ConnectionString : undefined,
    OwnerAccountId:
      output.OwnerAccountId !== undefined && output.OwnerAccountId !== null ? output.OwnerAccountId : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
  } as any;
};

const deserializeAws_json1_1ConnectionAliasAssociation = (
  output: any,
  context: __SerdeContext
): ConnectionAliasAssociation => {
  return {
    AssociatedAccountId:
      output.AssociatedAccountId !== undefined && output.AssociatedAccountId !== null
        ? output.AssociatedAccountId
        : undefined,
    AssociationStatus:
      output.AssociationStatus !== undefined && output.AssociationStatus !== null
        ? output.AssociationStatus
        : undefined,
    ConnectionIdentifier:
      output.ConnectionIdentifier !== undefined && output.ConnectionIdentifier !== null
        ? output.ConnectionIdentifier
        : undefined,
    ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
  } as any;
};

const deserializeAws_json1_1ConnectionAliasAssociationList = (
  output: any,
  context: __SerdeContext
): ConnectionAliasAssociation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ConnectionAliasAssociation(entry, context);
    });
};

const deserializeAws_json1_1ConnectionAliasList = (output: any, context: __SerdeContext): ConnectionAlias[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ConnectionAlias(entry, context);
    });
};

const deserializeAws_json1_1ConnectionAliasPermission = (
  output: any,
  context: __SerdeContext
): ConnectionAliasPermission => {
  return {
    AllowAssociation:
      output.AllowAssociation !== undefined && output.AllowAssociation !== null ? output.AllowAssociation : undefined,
    SharedAccountId:
      output.SharedAccountId !== undefined && output.SharedAccountId !== null ? output.SharedAccountId : undefined,
  } as any;
};

const deserializeAws_json1_1ConnectionAliasPermissions = (
  output: any,
  context: __SerdeContext
): ConnectionAliasPermission[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ConnectionAliasPermission(entry, context);
    });
};

const deserializeAws_json1_1CopyWorkspaceImageResult = (
  output: any,
  context: __SerdeContext
): CopyWorkspaceImageResult => {
  return {
    ImageId: output.ImageId !== undefined && output.ImageId !== null ? output.ImageId : undefined,
  } as any;
};

const deserializeAws_json1_1CreateConnectionAliasResult = (
  output: any,
  context: __SerdeContext
): CreateConnectionAliasResult => {
  return {
    AliasId: output.AliasId !== undefined && output.AliasId !== null ? output.AliasId : undefined,
  } as any;
};

const deserializeAws_json1_1CreateIpGroupResult = (output: any, context: __SerdeContext): CreateIpGroupResult => {
  return {
    GroupId: output.GroupId !== undefined && output.GroupId !== null ? output.GroupId : undefined,
  } as any;
};

const deserializeAws_json1_1CreateTagsResult = (output: any, context: __SerdeContext): CreateTagsResult => {
  return {} as any;
};

const deserializeAws_json1_1CreateWorkspacesResult = (output: any, context: __SerdeContext): CreateWorkspacesResult => {
  return {
    FailedRequests:
      output.FailedRequests !== undefined && output.FailedRequests !== null
        ? deserializeAws_json1_1FailedCreateWorkspaceRequests(output.FailedRequests, context)
        : undefined,
    PendingRequests:
      output.PendingRequests !== undefined && output.PendingRequests !== null
        ? deserializeAws_json1_1WorkspaceList(output.PendingRequests, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DedicatedTenancyCidrRangeList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_1DefaultWorkspaceCreationProperties = (
  output: any,
  context: __SerdeContext
): DefaultWorkspaceCreationProperties => {
  return {
    CustomSecurityGroupId:
      output.CustomSecurityGroupId !== undefined && output.CustomSecurityGroupId !== null
        ? output.CustomSecurityGroupId
        : undefined,
    DefaultOu: output.DefaultOu !== undefined && output.DefaultOu !== null ? output.DefaultOu : undefined,
    EnableInternetAccess:
      output.EnableInternetAccess !== undefined && output.EnableInternetAccess !== null
        ? output.EnableInternetAccess
        : undefined,
    EnableMaintenanceMode:
      output.EnableMaintenanceMode !== undefined && output.EnableMaintenanceMode !== null
        ? output.EnableMaintenanceMode
        : undefined,
    EnableWorkDocs:
      output.EnableWorkDocs !== undefined && output.EnableWorkDocs !== null ? output.EnableWorkDocs : undefined,
    UserEnabledAsLocalAdministrator:
      output.UserEnabledAsLocalAdministrator !== undefined && output.UserEnabledAsLocalAdministrator !== null
        ? output.UserEnabledAsLocalAdministrator
        : undefined,
  } as any;
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
      output.AccountModifications !== undefined && output.AccountModifications !== null
        ? deserializeAws_json1_1AccountModificationList(output.AccountModifications, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeAccountResult = (output: any, context: __SerdeContext): DescribeAccountResult => {
  return {
    DedicatedTenancyManagementCidrRange:
      output.DedicatedTenancyManagementCidrRange !== undefined && output.DedicatedTenancyManagementCidrRange !== null
        ? output.DedicatedTenancyManagementCidrRange
        : undefined,
    DedicatedTenancySupport:
      output.DedicatedTenancySupport !== undefined && output.DedicatedTenancySupport !== null
        ? output.DedicatedTenancySupport
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeClientPropertiesResult = (
  output: any,
  context: __SerdeContext
): DescribeClientPropertiesResult => {
  return {
    ClientPropertiesList:
      output.ClientPropertiesList !== undefined && output.ClientPropertiesList !== null
        ? deserializeAws_json1_1ClientPropertiesList(output.ClientPropertiesList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeConnectionAliasesResult = (
  output: any,
  context: __SerdeContext
): DescribeConnectionAliasesResult => {
  return {
    ConnectionAliases:
      output.ConnectionAliases !== undefined && output.ConnectionAliases !== null
        ? deserializeAws_json1_1ConnectionAliasList(output.ConnectionAliases, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeConnectionAliasPermissionsResult = (
  output: any,
  context: __SerdeContext
): DescribeConnectionAliasPermissionsResult => {
  return {
    AliasId: output.AliasId !== undefined && output.AliasId !== null ? output.AliasId : undefined,
    ConnectionAliasPermissions:
      output.ConnectionAliasPermissions !== undefined && output.ConnectionAliasPermissions !== null
        ? deserializeAws_json1_1ConnectionAliasPermissions(output.ConnectionAliasPermissions, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeIpGroupsResult = (output: any, context: __SerdeContext): DescribeIpGroupsResult => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    Result:
      output.Result !== undefined && output.Result !== null
        ? deserializeAws_json1_1WorkspacesIpGroupsList(output.Result, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeTagsResult = (output: any, context: __SerdeContext): DescribeTagsResult => {
  return {
    TagList:
      output.TagList !== undefined && output.TagList !== null
        ? deserializeAws_json1_1TagList(output.TagList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeWorkspaceBundlesResult = (
  output: any,
  context: __SerdeContext
): DescribeWorkspaceBundlesResult => {
  return {
    Bundles:
      output.Bundles !== undefined && output.Bundles !== null
        ? deserializeAws_json1_1BundleList(output.Bundles, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeWorkspaceDirectoriesResult = (
  output: any,
  context: __SerdeContext
): DescribeWorkspaceDirectoriesResult => {
  return {
    Directories:
      output.Directories !== undefined && output.Directories !== null
        ? deserializeAws_json1_1DirectoryList(output.Directories, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeWorkspaceImagePermissionsResult = (
  output: any,
  context: __SerdeContext
): DescribeWorkspaceImagePermissionsResult => {
  return {
    ImageId: output.ImageId !== undefined && output.ImageId !== null ? output.ImageId : undefined,
    ImagePermissions:
      output.ImagePermissions !== undefined && output.ImagePermissions !== null
        ? deserializeAws_json1_1ImagePermissions(output.ImagePermissions, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeWorkspaceImagesResult = (
  output: any,
  context: __SerdeContext
): DescribeWorkspaceImagesResult => {
  return {
    Images:
      output.Images !== undefined && output.Images !== null
        ? deserializeAws_json1_1WorkspaceImageList(output.Images, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeWorkspacesConnectionStatusResult = (
  output: any,
  context: __SerdeContext
): DescribeWorkspacesConnectionStatusResult => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    WorkspacesConnectionStatus:
      output.WorkspacesConnectionStatus !== undefined && output.WorkspacesConnectionStatus !== null
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
      output.RebuildSnapshots !== undefined && output.RebuildSnapshots !== null
        ? deserializeAws_json1_1SnapshotList(output.RebuildSnapshots, context)
        : undefined,
    RestoreSnapshots:
      output.RestoreSnapshots !== undefined && output.RestoreSnapshots !== null
        ? deserializeAws_json1_1SnapshotList(output.RestoreSnapshots, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeWorkspacesResult = (
  output: any,
  context: __SerdeContext
): DescribeWorkspacesResult => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    Workspaces:
      output.Workspaces !== undefined && output.Workspaces !== null
        ? deserializeAws_json1_1WorkspaceList(output.Workspaces, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DirectoryList = (output: any, context: __SerdeContext): WorkspaceDirectory[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1WorkspaceDirectory(entry, context);
    });
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_1FailedCreateWorkspaceRequest = (
  output: any,
  context: __SerdeContext
): FailedCreateWorkspaceRequest => {
  return {
    ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
    ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
    WorkspaceRequest:
      output.WorkspaceRequest !== undefined && output.WorkspaceRequest !== null
        ? deserializeAws_json1_1WorkspaceRequest(output.WorkspaceRequest, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1FailedCreateWorkspaceRequests = (
  output: any,
  context: __SerdeContext
): FailedCreateWorkspaceRequest[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FailedCreateWorkspaceRequest(entry, context);
    });
};

const deserializeAws_json1_1FailedRebootWorkspaceRequests = (
  output: any,
  context: __SerdeContext
): FailedWorkspaceChangeRequest[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FailedWorkspaceChangeRequest(entry, context);
    });
};

const deserializeAws_json1_1FailedRebuildWorkspaceRequests = (
  output: any,
  context: __SerdeContext
): FailedWorkspaceChangeRequest[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FailedWorkspaceChangeRequest(entry, context);
    });
};

const deserializeAws_json1_1FailedStartWorkspaceRequests = (
  output: any,
  context: __SerdeContext
): FailedWorkspaceChangeRequest[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FailedWorkspaceChangeRequest(entry, context);
    });
};

const deserializeAws_json1_1FailedStopWorkspaceRequests = (
  output: any,
  context: __SerdeContext
): FailedWorkspaceChangeRequest[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FailedWorkspaceChangeRequest(entry, context);
    });
};

const deserializeAws_json1_1FailedTerminateWorkspaceRequests = (
  output: any,
  context: __SerdeContext
): FailedWorkspaceChangeRequest[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FailedWorkspaceChangeRequest(entry, context);
    });
};

const deserializeAws_json1_1FailedWorkspaceChangeRequest = (
  output: any,
  context: __SerdeContext
): FailedWorkspaceChangeRequest => {
  return {
    ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
    ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
    WorkspaceId: output.WorkspaceId !== undefined && output.WorkspaceId !== null ? output.WorkspaceId : undefined,
  } as any;
};

const deserializeAws_json1_1ImagePermission = (output: any, context: __SerdeContext): ImagePermission => {
  return {
    SharedAccountId:
      output.SharedAccountId !== undefined && output.SharedAccountId !== null ? output.SharedAccountId : undefined,
  } as any;
};

const deserializeAws_json1_1ImagePermissions = (output: any, context: __SerdeContext): ImagePermission[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ImagePermission(entry, context);
    });
};

const deserializeAws_json1_1ImportWorkspaceImageResult = (
  output: any,
  context: __SerdeContext
): ImportWorkspaceImageResult => {
  return {
    ImageId: output.ImageId !== undefined && output.ImageId !== null ? output.ImageId : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidParameterValuesException = (
  output: any,
  context: __SerdeContext
): InvalidParameterValuesException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidResourceStateException = (
  output: any,
  context: __SerdeContext
): InvalidResourceStateException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1IpGroupIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_1IpRuleItem = (output: any, context: __SerdeContext): IpRuleItem => {
  return {
    ipRule: output.ipRule !== undefined && output.ipRule !== null ? output.ipRule : undefined,
    ruleDesc: output.ruleDesc !== undefined && output.ruleDesc !== null ? output.ruleDesc : undefined,
  } as any;
};

const deserializeAws_json1_1IpRuleList = (output: any, context: __SerdeContext): IpRuleItem[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1IpRuleItem(entry, context);
    });
};

const deserializeAws_json1_1ListAvailableManagementCidrRangesResult = (
  output: any,
  context: __SerdeContext
): ListAvailableManagementCidrRangesResult => {
  return {
    ManagementCidrRanges:
      output.ManagementCidrRanges !== undefined && output.ManagementCidrRanges !== null
        ? deserializeAws_json1_1DedicatedTenancyCidrRangeList(output.ManagementCidrRanges, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1MigrateWorkspaceResult = (output: any, context: __SerdeContext): MigrateWorkspaceResult => {
  return {
    SourceWorkspaceId:
      output.SourceWorkspaceId !== undefined && output.SourceWorkspaceId !== null
        ? output.SourceWorkspaceId
        : undefined,
    TargetWorkspaceId:
      output.TargetWorkspaceId !== undefined && output.TargetWorkspaceId !== null
        ? output.TargetWorkspaceId
        : undefined,
  } as any;
};

const deserializeAws_json1_1ModificationState = (output: any, context: __SerdeContext): ModificationState => {
  return {
    Resource: output.Resource !== undefined && output.Resource !== null ? output.Resource : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
  } as any;
};

const deserializeAws_json1_1ModificationStateList = (output: any, context: __SerdeContext): ModificationState[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ModificationState(entry, context);
    });
};

const deserializeAws_json1_1ModifyAccountResult = (output: any, context: __SerdeContext): ModifyAccountResult => {
  return {} as any;
};

const deserializeAws_json1_1ModifyClientPropertiesResult = (
  output: any,
  context: __SerdeContext
): ModifyClientPropertiesResult => {
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
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_json1_1OperationInProgressException = (
  output: any,
  context: __SerdeContext
): OperationInProgressException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1OperationNotSupportedException = (
  output: any,
  context: __SerdeContext
): OperationNotSupportedException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1RebootWorkspacesResult = (output: any, context: __SerdeContext): RebootWorkspacesResult => {
  return {
    FailedRequests:
      output.FailedRequests !== undefined && output.FailedRequests !== null
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
      output.FailedRequests !== undefined && output.FailedRequests !== null
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

const deserializeAws_json1_1ResourceAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ResourceAlreadyExistsException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceAssociatedException = (
  output: any,
  context: __SerdeContext
): ResourceAssociatedException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceCreationFailedException = (
  output: any,
  context: __SerdeContext
): ResourceCreationFailedException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceLimitExceededException = (
  output: any,
  context: __SerdeContext
): ResourceLimitExceededException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceUnavailableException = (
  output: any,
  context: __SerdeContext
): ResourceUnavailableException => {
  return {
    ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
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
    Capacity: output.Capacity !== undefined && output.Capacity !== null ? output.Capacity : undefined,
  } as any;
};

const deserializeAws_json1_1SelfservicePermissions = (output: any, context: __SerdeContext): SelfservicePermissions => {
  return {
    ChangeComputeType:
      output.ChangeComputeType !== undefined && output.ChangeComputeType !== null
        ? output.ChangeComputeType
        : undefined,
    IncreaseVolumeSize:
      output.IncreaseVolumeSize !== undefined && output.IncreaseVolumeSize !== null
        ? output.IncreaseVolumeSize
        : undefined,
    RebuildWorkspace:
      output.RebuildWorkspace !== undefined && output.RebuildWorkspace !== null ? output.RebuildWorkspace : undefined,
    RestartWorkspace:
      output.RestartWorkspace !== undefined && output.RestartWorkspace !== null ? output.RestartWorkspace : undefined,
    SwitchRunningMode:
      output.SwitchRunningMode !== undefined && output.SwitchRunningMode !== null
        ? output.SwitchRunningMode
        : undefined,
  } as any;
};

const deserializeAws_json1_1Snapshot = (output: any, context: __SerdeContext): Snapshot => {
  return {
    SnapshotTime:
      output.SnapshotTime !== undefined && output.SnapshotTime !== null
        ? new Date(Math.round(output.SnapshotTime * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1SnapshotList = (output: any, context: __SerdeContext): Snapshot[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Snapshot(entry, context);
    });
};

const deserializeAws_json1_1StartWorkspacesResult = (output: any, context: __SerdeContext): StartWorkspacesResult => {
  return {
    FailedRequests:
      output.FailedRequests !== undefined && output.FailedRequests !== null
        ? deserializeAws_json1_1FailedStartWorkspaceRequests(output.FailedRequests, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1StopWorkspacesResult = (output: any, context: __SerdeContext): StopWorkspacesResult => {
  return {
    FailedRequests:
      output.FailedRequests !== undefined && output.FailedRequests !== null
        ? deserializeAws_json1_1FailedStopWorkspaceRequests(output.FailedRequests, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SubnetIds = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
};

const deserializeAws_json1_1TerminateWorkspacesResult = (
  output: any,
  context: __SerdeContext
): TerminateWorkspacesResult => {
  return {
    FailedRequests:
      output.FailedRequests !== undefined && output.FailedRequests !== null
        ? deserializeAws_json1_1FailedTerminateWorkspaceRequests(output.FailedRequests, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UnsupportedNetworkConfigurationException = (
  output: any,
  context: __SerdeContext
): UnsupportedNetworkConfigurationException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1UnsupportedWorkspaceConfigurationException = (
  output: any,
  context: __SerdeContext
): UnsupportedWorkspaceConfigurationException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateConnectionAliasPermissionResult = (
  output: any,
  context: __SerdeContext
): UpdateConnectionAliasPermissionResult => {
  return {} as any;
};

const deserializeAws_json1_1UpdateRulesOfIpGroupResult = (
  output: any,
  context: __SerdeContext
): UpdateRulesOfIpGroupResult => {
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
    Capacity: output.Capacity !== undefined && output.Capacity !== null ? output.Capacity : undefined,
  } as any;
};

const deserializeAws_json1_1Workspace = (output: any, context: __SerdeContext): Workspace => {
  return {
    BundleId: output.BundleId !== undefined && output.BundleId !== null ? output.BundleId : undefined,
    ComputerName: output.ComputerName !== undefined && output.ComputerName !== null ? output.ComputerName : undefined,
    DirectoryId: output.DirectoryId !== undefined && output.DirectoryId !== null ? output.DirectoryId : undefined,
    ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
    ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
    IpAddress: output.IpAddress !== undefined && output.IpAddress !== null ? output.IpAddress : undefined,
    ModificationStates:
      output.ModificationStates !== undefined && output.ModificationStates !== null
        ? deserializeAws_json1_1ModificationStateList(output.ModificationStates, context)
        : undefined,
    RootVolumeEncryptionEnabled:
      output.RootVolumeEncryptionEnabled !== undefined && output.RootVolumeEncryptionEnabled !== null
        ? output.RootVolumeEncryptionEnabled
        : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
    SubnetId: output.SubnetId !== undefined && output.SubnetId !== null ? output.SubnetId : undefined,
    UserName: output.UserName !== undefined && output.UserName !== null ? output.UserName : undefined,
    UserVolumeEncryptionEnabled:
      output.UserVolumeEncryptionEnabled !== undefined && output.UserVolumeEncryptionEnabled !== null
        ? output.UserVolumeEncryptionEnabled
        : undefined,
    VolumeEncryptionKey:
      output.VolumeEncryptionKey !== undefined && output.VolumeEncryptionKey !== null
        ? output.VolumeEncryptionKey
        : undefined,
    WorkspaceId: output.WorkspaceId !== undefined && output.WorkspaceId !== null ? output.WorkspaceId : undefined,
    WorkspaceProperties:
      output.WorkspaceProperties !== undefined && output.WorkspaceProperties !== null
        ? deserializeAws_json1_1WorkspaceProperties(output.WorkspaceProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1WorkspaceAccessProperties = (
  output: any,
  context: __SerdeContext
): WorkspaceAccessProperties => {
  return {
    DeviceTypeAndroid:
      output.DeviceTypeAndroid !== undefined && output.DeviceTypeAndroid !== null
        ? output.DeviceTypeAndroid
        : undefined,
    DeviceTypeChromeOs:
      output.DeviceTypeChromeOs !== undefined && output.DeviceTypeChromeOs !== null
        ? output.DeviceTypeChromeOs
        : undefined,
    DeviceTypeIos:
      output.DeviceTypeIos !== undefined && output.DeviceTypeIos !== null ? output.DeviceTypeIos : undefined,
    DeviceTypeOsx:
      output.DeviceTypeOsx !== undefined && output.DeviceTypeOsx !== null ? output.DeviceTypeOsx : undefined,
    DeviceTypeWeb:
      output.DeviceTypeWeb !== undefined && output.DeviceTypeWeb !== null ? output.DeviceTypeWeb : undefined,
    DeviceTypeWindows:
      output.DeviceTypeWindows !== undefined && output.DeviceTypeWindows !== null
        ? output.DeviceTypeWindows
        : undefined,
    DeviceTypeZeroClient:
      output.DeviceTypeZeroClient !== undefined && output.DeviceTypeZeroClient !== null
        ? output.DeviceTypeZeroClient
        : undefined,
  } as any;
};

const deserializeAws_json1_1WorkspaceBundle = (output: any, context: __SerdeContext): WorkspaceBundle => {
  return {
    BundleId: output.BundleId !== undefined && output.BundleId !== null ? output.BundleId : undefined,
    ComputeType:
      output.ComputeType !== undefined && output.ComputeType !== null
        ? deserializeAws_json1_1ComputeType(output.ComputeType, context)
        : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    ImageId: output.ImageId !== undefined && output.ImageId !== null ? output.ImageId : undefined,
    LastUpdatedTime:
      output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
        ? new Date(Math.round(output.LastUpdatedTime * 1000))
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Owner: output.Owner !== undefined && output.Owner !== null ? output.Owner : undefined,
    RootStorage:
      output.RootStorage !== undefined && output.RootStorage !== null
        ? deserializeAws_json1_1RootStorage(output.RootStorage, context)
        : undefined,
    UserStorage:
      output.UserStorage !== undefined && output.UserStorage !== null
        ? deserializeAws_json1_1UserStorage(output.UserStorage, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1WorkspaceConnectionStatus = (
  output: any,
  context: __SerdeContext
): WorkspaceConnectionStatus => {
  return {
    ConnectionState:
      output.ConnectionState !== undefined && output.ConnectionState !== null ? output.ConnectionState : undefined,
    ConnectionStateCheckTimestamp:
      output.ConnectionStateCheckTimestamp !== undefined && output.ConnectionStateCheckTimestamp !== null
        ? new Date(Math.round(output.ConnectionStateCheckTimestamp * 1000))
        : undefined,
    LastKnownUserConnectionTimestamp:
      output.LastKnownUserConnectionTimestamp !== undefined && output.LastKnownUserConnectionTimestamp !== null
        ? new Date(Math.round(output.LastKnownUserConnectionTimestamp * 1000))
        : undefined,
    WorkspaceId: output.WorkspaceId !== undefined && output.WorkspaceId !== null ? output.WorkspaceId : undefined,
  } as any;
};

const deserializeAws_json1_1WorkspaceConnectionStatusList = (
  output: any,
  context: __SerdeContext
): WorkspaceConnectionStatus[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1WorkspaceConnectionStatus(entry, context);
    });
};

const deserializeAws_json1_1WorkspaceDirectory = (output: any, context: __SerdeContext): WorkspaceDirectory => {
  return {
    Alias: output.Alias !== undefined && output.Alias !== null ? output.Alias : undefined,
    CustomerUserName:
      output.CustomerUserName !== undefined && output.CustomerUserName !== null ? output.CustomerUserName : undefined,
    DirectoryId: output.DirectoryId !== undefined && output.DirectoryId !== null ? output.DirectoryId : undefined,
    DirectoryName:
      output.DirectoryName !== undefined && output.DirectoryName !== null ? output.DirectoryName : undefined,
    DirectoryType:
      output.DirectoryType !== undefined && output.DirectoryType !== null ? output.DirectoryType : undefined,
    DnsIpAddresses:
      output.DnsIpAddresses !== undefined && output.DnsIpAddresses !== null
        ? deserializeAws_json1_1DnsIpAddresses(output.DnsIpAddresses, context)
        : undefined,
    IamRoleId: output.IamRoleId !== undefined && output.IamRoleId !== null ? output.IamRoleId : undefined,
    RegistrationCode:
      output.RegistrationCode !== undefined && output.RegistrationCode !== null ? output.RegistrationCode : undefined,
    SelfservicePermissions:
      output.SelfservicePermissions !== undefined && output.SelfservicePermissions !== null
        ? deserializeAws_json1_1SelfservicePermissions(output.SelfservicePermissions, context)
        : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
    SubnetIds:
      output.SubnetIds !== undefined && output.SubnetIds !== null
        ? deserializeAws_json1_1SubnetIds(output.SubnetIds, context)
        : undefined,
    Tenancy: output.Tenancy !== undefined && output.Tenancy !== null ? output.Tenancy : undefined,
    WorkspaceAccessProperties:
      output.WorkspaceAccessProperties !== undefined && output.WorkspaceAccessProperties !== null
        ? deserializeAws_json1_1WorkspaceAccessProperties(output.WorkspaceAccessProperties, context)
        : undefined,
    WorkspaceCreationProperties:
      output.WorkspaceCreationProperties !== undefined && output.WorkspaceCreationProperties !== null
        ? deserializeAws_json1_1DefaultWorkspaceCreationProperties(output.WorkspaceCreationProperties, context)
        : undefined,
    WorkspaceSecurityGroupId:
      output.WorkspaceSecurityGroupId !== undefined && output.WorkspaceSecurityGroupId !== null
        ? output.WorkspaceSecurityGroupId
        : undefined,
    ipGroupIds:
      output.ipGroupIds !== undefined && output.ipGroupIds !== null
        ? deserializeAws_json1_1IpGroupIdList(output.ipGroupIds, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1WorkspaceImage = (output: any, context: __SerdeContext): WorkspaceImage => {
  return {
    Created:
      output.Created !== undefined && output.Created !== null ? new Date(Math.round(output.Created * 1000)) : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
    ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
    ImageId: output.ImageId !== undefined && output.ImageId !== null ? output.ImageId : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    OperatingSystem:
      output.OperatingSystem !== undefined && output.OperatingSystem !== null
        ? deserializeAws_json1_1OperatingSystem(output.OperatingSystem, context)
        : undefined,
    OwnerAccountId:
      output.OwnerAccountId !== undefined && output.OwnerAccountId !== null ? output.OwnerAccountId : undefined,
    RequiredTenancy:
      output.RequiredTenancy !== undefined && output.RequiredTenancy !== null ? output.RequiredTenancy : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
  } as any;
};

const deserializeAws_json1_1WorkspaceImageList = (output: any, context: __SerdeContext): WorkspaceImage[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1WorkspaceImage(entry, context);
    });
};

const deserializeAws_json1_1WorkspaceList = (output: any, context: __SerdeContext): Workspace[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Workspace(entry, context);
    });
};

const deserializeAws_json1_1WorkspaceProperties = (output: any, context: __SerdeContext): WorkspaceProperties => {
  return {
    ComputeTypeName:
      output.ComputeTypeName !== undefined && output.ComputeTypeName !== null ? output.ComputeTypeName : undefined,
    RootVolumeSizeGib:
      output.RootVolumeSizeGib !== undefined && output.RootVolumeSizeGib !== null
        ? output.RootVolumeSizeGib
        : undefined,
    RunningMode: output.RunningMode !== undefined && output.RunningMode !== null ? output.RunningMode : undefined,
    RunningModeAutoStopTimeoutInMinutes:
      output.RunningModeAutoStopTimeoutInMinutes !== undefined && output.RunningModeAutoStopTimeoutInMinutes !== null
        ? output.RunningModeAutoStopTimeoutInMinutes
        : undefined,
    UserVolumeSizeGib:
      output.UserVolumeSizeGib !== undefined && output.UserVolumeSizeGib !== null
        ? output.UserVolumeSizeGib
        : undefined,
  } as any;
};

const deserializeAws_json1_1WorkspaceRequest = (output: any, context: __SerdeContext): WorkspaceRequest => {
  return {
    BundleId: output.BundleId !== undefined && output.BundleId !== null ? output.BundleId : undefined,
    DirectoryId: output.DirectoryId !== undefined && output.DirectoryId !== null ? output.DirectoryId : undefined,
    RootVolumeEncryptionEnabled:
      output.RootVolumeEncryptionEnabled !== undefined && output.RootVolumeEncryptionEnabled !== null
        ? output.RootVolumeEncryptionEnabled
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined,
    UserName: output.UserName !== undefined && output.UserName !== null ? output.UserName : undefined,
    UserVolumeEncryptionEnabled:
      output.UserVolumeEncryptionEnabled !== undefined && output.UserVolumeEncryptionEnabled !== null
        ? output.UserVolumeEncryptionEnabled
        : undefined,
    VolumeEncryptionKey:
      output.VolumeEncryptionKey !== undefined && output.VolumeEncryptionKey !== null
        ? output.VolumeEncryptionKey
        : undefined,
    WorkspaceProperties:
      output.WorkspaceProperties !== undefined && output.WorkspaceProperties !== null
        ? deserializeAws_json1_1WorkspaceProperties(output.WorkspaceProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1WorkspacesDefaultRoleNotFoundException = (
  output: any,
  context: __SerdeContext
): WorkspacesDefaultRoleNotFoundException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1WorkspacesIpGroup = (output: any, context: __SerdeContext): WorkspacesIpGroup => {
  return {
    groupDesc: output.groupDesc !== undefined && output.groupDesc !== null ? output.groupDesc : undefined,
    groupId: output.groupId !== undefined && output.groupId !== null ? output.groupId : undefined,
    groupName: output.groupName !== undefined && output.groupName !== null ? output.groupName : undefined,
    userRules:
      output.userRules !== undefined && output.userRules !== null
        ? deserializeAws_json1_1IpRuleList(output.userRules, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1WorkspacesIpGroupsList = (output: any, context: __SerdeContext): WorkspacesIpGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1WorkspacesIpGroup(entry, context);
    });
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
