import {
  AssociateIpGroupsCommandInput,
  AssociateIpGroupsCommandOutput,
} from "../commands/AssociateIpGroupsCommand";
import {
  AuthorizeIpRulesCommandInput,
  AuthorizeIpRulesCommandOutput,
} from "../commands/AuthorizeIpRulesCommand";
import {
  CopyWorkspaceImageCommandInput,
  CopyWorkspaceImageCommandOutput,
} from "../commands/CopyWorkspaceImageCommand";
import {
  CreateIpGroupCommandInput,
  CreateIpGroupCommandOutput,
} from "../commands/CreateIpGroupCommand";
import {
  CreateTagsCommandInput,
  CreateTagsCommandOutput,
} from "../commands/CreateTagsCommand";
import {
  CreateWorkspacesCommandInput,
  CreateWorkspacesCommandOutput,
} from "../commands/CreateWorkspacesCommand";
import {
  DeleteIpGroupCommandInput,
  DeleteIpGroupCommandOutput,
} from "../commands/DeleteIpGroupCommand";
import {
  DeleteTagsCommandInput,
  DeleteTagsCommandOutput,
} from "../commands/DeleteTagsCommand";
import {
  DeleteWorkspaceImageCommandInput,
  DeleteWorkspaceImageCommandOutput,
} from "../commands/DeleteWorkspaceImageCommand";
import {
  DeregisterWorkspaceDirectoryCommandInput,
  DeregisterWorkspaceDirectoryCommandOutput,
} from "../commands/DeregisterWorkspaceDirectoryCommand";
import {
  DescribeAccountCommandInput,
  DescribeAccountCommandOutput,
} from "../commands/DescribeAccountCommand";
import {
  DescribeAccountModificationsCommandInput,
  DescribeAccountModificationsCommandOutput,
} from "../commands/DescribeAccountModificationsCommand";
import {
  DescribeClientPropertiesCommandInput,
  DescribeClientPropertiesCommandOutput,
} from "../commands/DescribeClientPropertiesCommand";
import {
  DescribeIpGroupsCommandInput,
  DescribeIpGroupsCommandOutput,
} from "../commands/DescribeIpGroupsCommand";
import {
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput,
} from "../commands/DescribeTagsCommand";
import {
  DescribeWorkspaceBundlesCommandInput,
  DescribeWorkspaceBundlesCommandOutput,
} from "../commands/DescribeWorkspaceBundlesCommand";
import {
  DescribeWorkspaceDirectoriesCommandInput,
  DescribeWorkspaceDirectoriesCommandOutput,
} from "../commands/DescribeWorkspaceDirectoriesCommand";
import {
  DescribeWorkspaceImagesCommandInput,
  DescribeWorkspaceImagesCommandOutput,
} from "../commands/DescribeWorkspaceImagesCommand";
import {
  DescribeWorkspaceSnapshotsCommandInput,
  DescribeWorkspaceSnapshotsCommandOutput,
} from "../commands/DescribeWorkspaceSnapshotsCommand";
import {
  DescribeWorkspacesCommandInput,
  DescribeWorkspacesCommandOutput,
} from "../commands/DescribeWorkspacesCommand";
import {
  DescribeWorkspacesConnectionStatusCommandInput,
  DescribeWorkspacesConnectionStatusCommandOutput,
} from "../commands/DescribeWorkspacesConnectionStatusCommand";
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
import {
  ModifyAccountCommandInput,
  ModifyAccountCommandOutput,
} from "../commands/ModifyAccountCommand";
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
import {
  RebootWorkspacesCommandInput,
  RebootWorkspacesCommandOutput,
} from "../commands/RebootWorkspacesCommand";
import {
  RebuildWorkspacesCommandInput,
  RebuildWorkspacesCommandOutput,
} from "../commands/RebuildWorkspacesCommand";
import {
  RegisterWorkspaceDirectoryCommandInput,
  RegisterWorkspaceDirectoryCommandOutput,
} from "../commands/RegisterWorkspaceDirectoryCommand";
import {
  RestoreWorkspaceCommandInput,
  RestoreWorkspaceCommandOutput,
} from "../commands/RestoreWorkspaceCommand";
import {
  RevokeIpRulesCommandInput,
  RevokeIpRulesCommandOutput,
} from "../commands/RevokeIpRulesCommand";
import {
  StartWorkspacesCommandInput,
  StartWorkspacesCommandOutput,
} from "../commands/StartWorkspacesCommand";
import {
  StopWorkspacesCommandInput,
  StopWorkspacesCommandOutput,
} from "../commands/StopWorkspacesCommand";
import {
  TerminateWorkspacesCommandInput,
  TerminateWorkspacesCommandOutput,
} from "../commands/TerminateWorkspacesCommand";
import {
  UpdateRulesOfIpGroupCommandInput,
  UpdateRulesOfIpGroupCommandOutput,
} from "../commands/UpdateRulesOfIpGroupCommand";
import {
  AccessDeniedException,
  AccountModification,
  AssociateIpGroupsRequest,
  AssociateIpGroupsResult,
  AuthorizeIpRulesRequest,
  AuthorizeIpRulesResult,
  ClientProperties,
  ClientPropertiesResult,
  ComputeType,
  CopyWorkspaceImageRequest,
  CopyWorkspaceImageResult,
  CreateIpGroupRequest,
  CreateIpGroupResult,
  CreateTagsRequest,
  CreateTagsResult,
  CreateWorkspacesRequest,
  CreateWorkspacesResult,
  DefaultWorkspaceCreationProperties,
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
  FailedCreateWorkspaceRequest,
  FailedWorkspaceChangeRequest,
  ImportWorkspaceImageRequest,
  ImportWorkspaceImageResult,
  InvalidParameterValuesException,
  InvalidResourceStateException,
  IpRuleItem,
  ListAvailableManagementCidrRangesRequest,
  ListAvailableManagementCidrRangesResult,
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
  UpdateRulesOfIpGroupRequest,
  UpdateRulesOfIpGroupResult,
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
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export async function serializeAws_json1_1AssociateIpGroupsCommand(
  input: AssociateIpGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "WorkspacesService.AssociateIpGroups";
  let body: any = {};
  const wrappedBody: any = {
    AssociateIpGroupsRequest: serializeAws_json1_1AssociateIpGroupsRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/AssociateIpGroups",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1AuthorizeIpRulesCommand(
  input: AuthorizeIpRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "WorkspacesService.AuthorizeIpRules";
  let body: any = {};
  const wrappedBody: any = {
    AuthorizeIpRulesRequest: serializeAws_json1_1AuthorizeIpRulesRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/AuthorizeIpRules",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1CopyWorkspaceImageCommand(
  input: CopyWorkspaceImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "WorkspacesService.CopyWorkspaceImage";
  let body: any = {};
  const wrappedBody: any = {
    CopyWorkspaceImageRequest: serializeAws_json1_1CopyWorkspaceImageRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CopyWorkspaceImage",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1CreateIpGroupCommand(
  input: CreateIpGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "WorkspacesService.CreateIpGroup";
  let body: any = {};
  const wrappedBody: any = {
    CreateIpGroupRequest: serializeAws_json1_1CreateIpGroupRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateIpGroup",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1CreateTagsCommand(
  input: CreateTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "WorkspacesService.CreateTags";
  let body: any = {};
  const wrappedBody: any = {
    CreateTagsRequest: serializeAws_json1_1CreateTagsRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateTags",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1CreateWorkspacesCommand(
  input: CreateWorkspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "WorkspacesService.CreateWorkspaces";
  let body: any = {};
  const wrappedBody: any = {
    CreateWorkspacesRequest: serializeAws_json1_1CreateWorkspacesRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateWorkspaces",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1DeleteIpGroupCommand(
  input: DeleteIpGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "WorkspacesService.DeleteIpGroup";
  let body: any = {};
  const wrappedBody: any = {
    DeleteIpGroupRequest: serializeAws_json1_1DeleteIpGroupRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteIpGroup",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1DeleteTagsCommand(
  input: DeleteTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "WorkspacesService.DeleteTags";
  let body: any = {};
  const wrappedBody: any = {
    DeleteTagsRequest: serializeAws_json1_1DeleteTagsRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteTags",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1DeleteWorkspaceImageCommand(
  input: DeleteWorkspaceImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "WorkspacesService.DeleteWorkspaceImage";
  let body: any = {};
  const wrappedBody: any = {
    DeleteWorkspaceImageRequest: serializeAws_json1_1DeleteWorkspaceImageRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteWorkspaceImage",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1DeregisterWorkspaceDirectoryCommand(
  input: DeregisterWorkspaceDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "WorkspacesService.DeregisterWorkspaceDirectory";
  let body: any = {};
  const wrappedBody: any = {
    DeregisterWorkspaceDirectoryRequest: serializeAws_json1_1DeregisterWorkspaceDirectoryRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeregisterWorkspaceDirectory",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1DescribeAccountCommand(
  input: DescribeAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "WorkspacesService.DescribeAccount";
  let body: any = {};
  const wrappedBody: any = {
    DescribeAccountRequest: serializeAws_json1_1DescribeAccountRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeAccount",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1DescribeAccountModificationsCommand(
  input: DescribeAccountModificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "WorkspacesService.DescribeAccountModifications";
  let body: any = {};
  const wrappedBody: any = {
    DescribeAccountModificationsRequest: serializeAws_json1_1DescribeAccountModificationsRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeAccountModifications",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1DescribeClientPropertiesCommand(
  input: DescribeClientPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "WorkspacesService.DescribeClientProperties";
  let body: any = {};
  const wrappedBody: any = {
    DescribeClientPropertiesRequest: serializeAws_json1_1DescribeClientPropertiesRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeClientProperties",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1DescribeIpGroupsCommand(
  input: DescribeIpGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "WorkspacesService.DescribeIpGroups";
  let body: any = {};
  const wrappedBody: any = {
    DescribeIpGroupsRequest: serializeAws_json1_1DescribeIpGroupsRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeIpGroups",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1DescribeTagsCommand(
  input: DescribeTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "WorkspacesService.DescribeTags";
  let body: any = {};
  const wrappedBody: any = {
    DescribeTagsRequest: serializeAws_json1_1DescribeTagsRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeTags",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1DescribeWorkspaceBundlesCommand(
  input: DescribeWorkspaceBundlesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "WorkspacesService.DescribeWorkspaceBundles";
  let body: any = {};
  const wrappedBody: any = {
    DescribeWorkspaceBundlesRequest: serializeAws_json1_1DescribeWorkspaceBundlesRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeWorkspaceBundles",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1DescribeWorkspaceDirectoriesCommand(
  input: DescribeWorkspaceDirectoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "WorkspacesService.DescribeWorkspaceDirectories";
  let body: any = {};
  const wrappedBody: any = {
    DescribeWorkspaceDirectoriesRequest: serializeAws_json1_1DescribeWorkspaceDirectoriesRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeWorkspaceDirectories",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1DescribeWorkspaceImagesCommand(
  input: DescribeWorkspaceImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "WorkspacesService.DescribeWorkspaceImages";
  let body: any = {};
  const wrappedBody: any = {
    DescribeWorkspaceImagesRequest: serializeAws_json1_1DescribeWorkspaceImagesRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeWorkspaceImages",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1DescribeWorkspaceSnapshotsCommand(
  input: DescribeWorkspaceSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "WorkspacesService.DescribeWorkspaceSnapshots";
  let body: any = {};
  const wrappedBody: any = {
    DescribeWorkspaceSnapshotsRequest: serializeAws_json1_1DescribeWorkspaceSnapshotsRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeWorkspaceSnapshots",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1DescribeWorkspacesCommand(
  input: DescribeWorkspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "WorkspacesService.DescribeWorkspaces";
  let body: any = {};
  const wrappedBody: any = {
    DescribeWorkspacesRequest: serializeAws_json1_1DescribeWorkspacesRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeWorkspaces",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1DescribeWorkspacesConnectionStatusCommand(
  input: DescribeWorkspacesConnectionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "WorkspacesService.DescribeWorkspacesConnectionStatus";
  let body: any = {};
  const wrappedBody: any = {
    DescribeWorkspacesConnectionStatusRequest: serializeAws_json1_1DescribeWorkspacesConnectionStatusRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeWorkspacesConnectionStatus",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1DisassociateIpGroupsCommand(
  input: DisassociateIpGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "WorkspacesService.DisassociateIpGroups";
  let body: any = {};
  const wrappedBody: any = {
    DisassociateIpGroupsRequest: serializeAws_json1_1DisassociateIpGroupsRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DisassociateIpGroups",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1ImportWorkspaceImageCommand(
  input: ImportWorkspaceImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "WorkspacesService.ImportWorkspaceImage";
  let body: any = {};
  const wrappedBody: any = {
    ImportWorkspaceImageRequest: serializeAws_json1_1ImportWorkspaceImageRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ImportWorkspaceImage",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1ListAvailableManagementCidrRangesCommand(
  input: ListAvailableManagementCidrRangesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "WorkspacesService.ListAvailableManagementCidrRanges";
  let body: any = {};
  const wrappedBody: any = {
    ListAvailableManagementCidrRangesRequest: serializeAws_json1_1ListAvailableManagementCidrRangesRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListAvailableManagementCidrRanges",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1ModifyAccountCommand(
  input: ModifyAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "WorkspacesService.ModifyAccount";
  let body: any = {};
  const wrappedBody: any = {
    ModifyAccountRequest: serializeAws_json1_1ModifyAccountRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ModifyAccount",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1ModifyClientPropertiesCommand(
  input: ModifyClientPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "WorkspacesService.ModifyClientProperties";
  let body: any = {};
  const wrappedBody: any = {
    ModifyClientPropertiesRequest: serializeAws_json1_1ModifyClientPropertiesRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ModifyClientProperties",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1ModifySelfservicePermissionsCommand(
  input: ModifySelfservicePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "WorkspacesService.ModifySelfservicePermissions";
  let body: any = {};
  const wrappedBody: any = {
    ModifySelfservicePermissionsRequest: serializeAws_json1_1ModifySelfservicePermissionsRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ModifySelfservicePermissions",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1ModifyWorkspaceAccessPropertiesCommand(
  input: ModifyWorkspaceAccessPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "WorkspacesService.ModifyWorkspaceAccessProperties";
  let body: any = {};
  const wrappedBody: any = {
    ModifyWorkspaceAccessPropertiesRequest: serializeAws_json1_1ModifyWorkspaceAccessPropertiesRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ModifyWorkspaceAccessProperties",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1ModifyWorkspaceCreationPropertiesCommand(
  input: ModifyWorkspaceCreationPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "WorkspacesService.ModifyWorkspaceCreationProperties";
  let body: any = {};
  const wrappedBody: any = {
    ModifyWorkspaceCreationPropertiesRequest: serializeAws_json1_1ModifyWorkspaceCreationPropertiesRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ModifyWorkspaceCreationProperties",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1ModifyWorkspacePropertiesCommand(
  input: ModifyWorkspacePropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "WorkspacesService.ModifyWorkspaceProperties";
  let body: any = {};
  const wrappedBody: any = {
    ModifyWorkspacePropertiesRequest: serializeAws_json1_1ModifyWorkspacePropertiesRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ModifyWorkspaceProperties",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1ModifyWorkspaceStateCommand(
  input: ModifyWorkspaceStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "WorkspacesService.ModifyWorkspaceState";
  let body: any = {};
  const wrappedBody: any = {
    ModifyWorkspaceStateRequest: serializeAws_json1_1ModifyWorkspaceStateRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ModifyWorkspaceState",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1RebootWorkspacesCommand(
  input: RebootWorkspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "WorkspacesService.RebootWorkspaces";
  let body: any = {};
  const wrappedBody: any = {
    RebootWorkspacesRequest: serializeAws_json1_1RebootWorkspacesRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RebootWorkspaces",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1RebuildWorkspacesCommand(
  input: RebuildWorkspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "WorkspacesService.RebuildWorkspaces";
  let body: any = {};
  const wrappedBody: any = {
    RebuildWorkspacesRequest: serializeAws_json1_1RebuildWorkspacesRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RebuildWorkspaces",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1RegisterWorkspaceDirectoryCommand(
  input: RegisterWorkspaceDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "WorkspacesService.RegisterWorkspaceDirectory";
  let body: any = {};
  const wrappedBody: any = {
    RegisterWorkspaceDirectoryRequest: serializeAws_json1_1RegisterWorkspaceDirectoryRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RegisterWorkspaceDirectory",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1RestoreWorkspaceCommand(
  input: RestoreWorkspaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "WorkspacesService.RestoreWorkspace";
  let body: any = {};
  const wrappedBody: any = {
    RestoreWorkspaceRequest: serializeAws_json1_1RestoreWorkspaceRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RestoreWorkspace",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1RevokeIpRulesCommand(
  input: RevokeIpRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "WorkspacesService.RevokeIpRules";
  let body: any = {};
  const wrappedBody: any = {
    RevokeIpRulesRequest: serializeAws_json1_1RevokeIpRulesRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RevokeIpRules",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1StartWorkspacesCommand(
  input: StartWorkspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "WorkspacesService.StartWorkspaces";
  let body: any = {};
  const wrappedBody: any = {
    StartWorkspacesRequest: serializeAws_json1_1StartWorkspacesRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/StartWorkspaces",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1StopWorkspacesCommand(
  input: StopWorkspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "WorkspacesService.StopWorkspaces";
  let body: any = {};
  const wrappedBody: any = {
    StopWorkspacesRequest: serializeAws_json1_1StopWorkspacesRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/StopWorkspaces",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1TerminateWorkspacesCommand(
  input: TerminateWorkspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "WorkspacesService.TerminateWorkspaces";
  let body: any = {};
  const wrappedBody: any = {
    TerminateWorkspacesRequest: serializeAws_json1_1TerminateWorkspacesRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/TerminateWorkspaces",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1UpdateRulesOfIpGroupCommand(
  input: UpdateRulesOfIpGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "WorkspacesService.UpdateRulesOfIpGroup";
  let body: any = {};
  const wrappedBody: any = {
    UpdateRulesOfIpGroupRequest: serializeAws_json1_1UpdateRulesOfIpGroupRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateRulesOfIpGroup",
    headers: headers,
    body: body,
  });
}

export async function deserializeAws_json1_1AssociateIpGroupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateIpGroupsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AssociateIpGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateIpGroupsResult(data, context);
  const response: AssociateIpGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AssociateIpGroupsResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1AssociateIpGroupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<AssociateIpGroupsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      response = await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context);
      break;
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      response = await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context);
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      response = await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.workspaces#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1AuthorizeIpRulesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AuthorizeIpRulesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AuthorizeIpRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1AuthorizeIpRulesResult(data, context);
  const response: AuthorizeIpRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AuthorizeIpRulesResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1AuthorizeIpRulesCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<AuthorizeIpRulesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      response = await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context);
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      response = await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.workspaces#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CopyWorkspaceImageCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyWorkspaceImageCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CopyWorkspaceImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1CopyWorkspaceImageResult(data, context);
  const response: CopyWorkspaceImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CopyWorkspaceImageResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CopyWorkspaceImageCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<CopyWorkspaceImageCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
      break;
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      response = await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context);
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.workspaces#ResourceAlreadyExistsException":
      response = await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      response = await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.workspaces#ResourceUnavailableException":
      response = await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.workspaces#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateIpGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIpGroupCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateIpGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1CreateIpGroupResult(data, context);
  const response: CreateIpGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateIpGroupResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateIpGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<CreateIpGroupCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.workspaces#ResourceAlreadyExistsException":
      response = await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
      break;
    case "ResourceCreationFailedException":
    case "com.amazonaws.workspaces#ResourceCreationFailedException":
      response = await deserializeAws_json1_1ResourceCreationFailedExceptionResponse(parsedOutput, context);
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      response = await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.workspaces#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1CreateTagsResult(data, context);
  const response: CreateTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateTagsResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<CreateTagsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      response = await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.workspaces#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateWorkspacesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkspacesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateWorkspacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1CreateWorkspacesResult(data, context);
  const response: CreateWorkspacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateWorkspacesResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateWorkspacesCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<CreateWorkspacesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      response = await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.workspaces#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteIpGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIpGroupCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteIpGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteIpGroupResult(data, context);
  const response: DeleteIpGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteIpGroupResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteIpGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DeleteIpGroupCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
      break;
    case "ResourceAssociatedException":
    case "com.amazonaws.workspaces#ResourceAssociatedException":
      response = await deserializeAws_json1_1ResourceAssociatedExceptionResponse(parsedOutput, context);
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.workspaces#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteTagsResult(data, context);
  const response: DeleteTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteTagsResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DeleteTagsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.workspaces#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteWorkspaceImageCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkspaceImageCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteWorkspaceImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteWorkspaceImageResult(data, context);
  const response: DeleteWorkspaceImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteWorkspaceImageResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteWorkspaceImageCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DeleteWorkspaceImageCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      response = await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context);
      break;
    case "ResourceAssociatedException":
    case "com.amazonaws.workspaces#ResourceAssociatedException":
      response = await deserializeAws_json1_1ResourceAssociatedExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.workspaces#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeregisterWorkspaceDirectoryCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterWorkspaceDirectoryCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeregisterWorkspaceDirectoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1DeregisterWorkspaceDirectoryResult(data, context);
  const response: DeregisterWorkspaceDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeregisterWorkspaceDirectoryResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeregisterWorkspaceDirectoryCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DeregisterWorkspaceDirectoryCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      response = await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context);
      break;
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      response = await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context);
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.workspaces#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeAccountCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeAccountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAccountResult(data, context);
  const response: DescribeAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeAccountResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeAccountCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DescribeAccountCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.workspaces#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeAccountModificationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountModificationsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeAccountModificationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAccountModificationsResult(data, context);
  const response: DescribeAccountModificationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeAccountModificationsResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeAccountModificationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DescribeAccountModificationsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.workspaces#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeClientPropertiesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClientPropertiesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeClientPropertiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeClientPropertiesResult(data, context);
  const response: DescribeClientPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeClientPropertiesResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeClientPropertiesCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DescribeClientPropertiesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.workspaces#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeIpGroupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIpGroupsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeIpGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeIpGroupsResult(data, context);
  const response: DescribeIpGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeIpGroupsResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeIpGroupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DescribeIpGroupsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.workspaces#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTagsResult(data, context);
  const response: DescribeTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeTagsResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DescribeTagsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.workspaces#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeWorkspaceBundlesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspaceBundlesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeWorkspaceBundlesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeWorkspaceBundlesResult(data, context);
  const response: DescribeWorkspaceBundlesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeWorkspaceBundlesResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeWorkspaceBundlesCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DescribeWorkspaceBundlesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.workspaces#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeWorkspaceDirectoriesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspaceDirectoriesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeWorkspaceDirectoriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeWorkspaceDirectoriesResult(data, context);
  const response: DescribeWorkspaceDirectoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeWorkspaceDirectoriesResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeWorkspaceDirectoriesCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DescribeWorkspaceDirectoriesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.workspaces#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeWorkspaceImagesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspaceImagesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeWorkspaceImagesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeWorkspaceImagesResult(data, context);
  const response: DescribeWorkspaceImagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeWorkspaceImagesResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeWorkspaceImagesCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DescribeWorkspaceImagesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.workspaces#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeWorkspaceSnapshotsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspaceSnapshotsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeWorkspaceSnapshotsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeWorkspaceSnapshotsResult(data, context);
  const response: DescribeWorkspaceSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeWorkspaceSnapshotsResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeWorkspaceSnapshotsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DescribeWorkspaceSnapshotsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.workspaces#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeWorkspacesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspacesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeWorkspacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeWorkspacesResult(data, context);
  const response: DescribeWorkspacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeWorkspacesResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeWorkspacesCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DescribeWorkspacesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.workspaces#ResourceUnavailableException":
      response = await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.workspaces#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeWorkspacesConnectionStatusCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspacesConnectionStatusCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeWorkspacesConnectionStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeWorkspacesConnectionStatusResult(data, context);
  const response: DescribeWorkspacesConnectionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeWorkspacesConnectionStatusResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeWorkspacesConnectionStatusCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DescribeWorkspacesConnectionStatusCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.workspaces#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DisassociateIpGroupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateIpGroupsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisassociateIpGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateIpGroupsResult(data, context);
  const response: DisassociateIpGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisassociateIpGroupsResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DisassociateIpGroupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DisassociateIpGroupsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      response = await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context);
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.workspaces#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ImportWorkspaceImageCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportWorkspaceImageCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ImportWorkspaceImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1ImportWorkspaceImageResult(data, context);
  const response: ImportWorkspaceImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ImportWorkspaceImageResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ImportWorkspaceImageCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<ImportWorkspaceImageCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
      break;
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      response = await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context);
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.workspaces#ResourceAlreadyExistsException":
      response = await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      response = await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.workspaces#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ListAvailableManagementCidrRangesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableManagementCidrRangesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListAvailableManagementCidrRangesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1ListAvailableManagementCidrRangesResult(data, context);
  const response: ListAvailableManagementCidrRangesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAvailableManagementCidrRangesResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListAvailableManagementCidrRangesCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<ListAvailableManagementCidrRangesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.workspaces#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ModifyAccountCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyAccountCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ModifyAccountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1ModifyAccountResult(data, context);
  const response: ModifyAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ModifyAccountResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ModifyAccountCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<ModifyAccountCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      response = await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context);
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.workspaces#ResourceUnavailableException":
      response = await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.workspaces#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ModifyClientPropertiesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClientPropertiesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ModifyClientPropertiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1ModifyClientPropertiesResult(data, context);
  const response: ModifyClientPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ModifyClientPropertiesResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ModifyClientPropertiesCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<ModifyClientPropertiesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.workspaces#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ModifySelfservicePermissionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifySelfservicePermissionsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ModifySelfservicePermissionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1ModifySelfservicePermissionsResult(data, context);
  const response: ModifySelfservicePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ModifySelfservicePermissionsResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ModifySelfservicePermissionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<ModifySelfservicePermissionsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.workspaces#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ModifyWorkspaceAccessPropertiesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyWorkspaceAccessPropertiesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ModifyWorkspaceAccessPropertiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1ModifyWorkspaceAccessPropertiesResult(data, context);
  const response: ModifyWorkspaceAccessPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ModifyWorkspaceAccessPropertiesResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ModifyWorkspaceAccessPropertiesCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<ModifyWorkspaceAccessPropertiesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.workspaces#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ModifyWorkspaceCreationPropertiesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyWorkspaceCreationPropertiesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ModifyWorkspaceCreationPropertiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1ModifyWorkspaceCreationPropertiesResult(data, context);
  const response: ModifyWorkspaceCreationPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ModifyWorkspaceCreationPropertiesResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ModifyWorkspaceCreationPropertiesCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<ModifyWorkspaceCreationPropertiesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.workspaces#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ModifyWorkspacePropertiesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyWorkspacePropertiesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ModifyWorkspacePropertiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1ModifyWorkspacePropertiesResult(data, context);
  const response: ModifyWorkspacePropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ModifyWorkspacePropertiesResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ModifyWorkspacePropertiesCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<ModifyWorkspacePropertiesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      response = await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context);
      break;
    case "OperationInProgressException":
    case "com.amazonaws.workspaces#OperationInProgressException":
      response = await deserializeAws_json1_1OperationInProgressExceptionResponse(parsedOutput, context);
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.workspaces#ResourceUnavailableException":
      response = await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context);
      break;
    case "UnsupportedWorkspaceConfigurationException":
    case "com.amazonaws.workspaces#UnsupportedWorkspaceConfigurationException":
      response = await deserializeAws_json1_1UnsupportedWorkspaceConfigurationExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.workspaces#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ModifyWorkspaceStateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyWorkspaceStateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ModifyWorkspaceStateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1ModifyWorkspaceStateResult(data, context);
  const response: ModifyWorkspaceStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ModifyWorkspaceStateResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ModifyWorkspaceStateCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<ModifyWorkspaceStateCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      response = await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context);
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.workspaces#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1RebootWorkspacesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootWorkspacesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RebootWorkspacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1RebootWorkspacesResult(data, context);
  const response: RebootWorkspacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RebootWorkspacesResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RebootWorkspacesCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<RebootWorkspacesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    default:
      response = {
        __type: `com.amazonaws.workspaces#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1RebuildWorkspacesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebuildWorkspacesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RebuildWorkspacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1RebuildWorkspacesResult(data, context);
  const response: RebuildWorkspacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RebuildWorkspacesResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RebuildWorkspacesCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<RebuildWorkspacesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    default:
      response = {
        __type: `com.amazonaws.workspaces#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1RegisterWorkspaceDirectoryCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterWorkspaceDirectoryCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RegisterWorkspaceDirectoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterWorkspaceDirectoryResult(data, context);
  const response: RegisterWorkspaceDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RegisterWorkspaceDirectoryResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RegisterWorkspaceDirectoryCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<RegisterWorkspaceDirectoryCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      response = await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context);
      break;
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      response = await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context);
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      response = await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
      break;
    case "UnsupportedNetworkConfigurationException":
    case "com.amazonaws.workspaces#UnsupportedNetworkConfigurationException":
      response = await deserializeAws_json1_1UnsupportedNetworkConfigurationExceptionResponse(parsedOutput, context);
      break;
    case "WorkspacesDefaultRoleNotFoundException":
    case "com.amazonaws.workspaces#WorkspacesDefaultRoleNotFoundException":
      response = await deserializeAws_json1_1WorkspacesDefaultRoleNotFoundExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.workspaces#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1RestoreWorkspaceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreWorkspaceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RestoreWorkspaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1RestoreWorkspaceResult(data, context);
  const response: RestoreWorkspaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RestoreWorkspaceResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RestoreWorkspaceCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<RestoreWorkspaceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.workspaces#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1RevokeIpRulesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeIpRulesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RevokeIpRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1RevokeIpRulesResult(data, context);
  const response: RevokeIpRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RevokeIpRulesResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RevokeIpRulesCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<RevokeIpRulesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      response = await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context);
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.workspaces#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1StartWorkspacesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartWorkspacesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartWorkspacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1StartWorkspacesResult(data, context);
  const response: StartWorkspacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartWorkspacesResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StartWorkspacesCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<StartWorkspacesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    default:
      response = {
        __type: `com.amazonaws.workspaces#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1StopWorkspacesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopWorkspacesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopWorkspacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1StopWorkspacesResult(data, context);
  const response: StopWorkspacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopWorkspacesResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StopWorkspacesCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<StopWorkspacesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    default:
      response = {
        __type: `com.amazonaws.workspaces#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1TerminateWorkspacesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateWorkspacesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TerminateWorkspacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1TerminateWorkspacesResult(data, context);
  const response: TerminateWorkspacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TerminateWorkspacesResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1TerminateWorkspacesCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<TerminateWorkspacesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    default:
      response = {
        __type: `com.amazonaws.workspaces#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UpdateRulesOfIpGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRulesOfIpGroupCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateRulesOfIpGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateRulesOfIpGroupResult(data, context);
  const response: UpdateRulesOfIpGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateRulesOfIpGroupResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateRulesOfIpGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<UpdateRulesOfIpGroupCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context);
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      response = await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context);
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      response = await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context);
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.workspaces#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(output.body, context);
  const contents: AccessDeniedException = {
    __type: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterValuesExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidParameterValuesException> => {
  const deserialized: any = deserializeAws_json1_1InvalidParameterValuesException(output.body, context);
  const contents: InvalidParameterValuesException = {
    __type: "InvalidParameterValuesException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidResourceStateExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidResourceStateException> => {
  const deserialized: any = deserializeAws_json1_1InvalidResourceStateException(output.body, context);
  const contents: InvalidResourceStateException = {
    __type: "InvalidResourceStateException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1OperationInProgressExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<OperationInProgressException> => {
  const deserialized: any = deserializeAws_json1_1OperationInProgressException(output.body, context);
  const contents: OperationInProgressException = {
    __type: "OperationInProgressException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1OperationNotSupportedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<OperationNotSupportedException> => {
  const deserialized: any = deserializeAws_json1_1OperationNotSupportedException(output.body, context);
  const contents: OperationNotSupportedException = {
    __type: "OperationNotSupportedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const deserialized: any = deserializeAws_json1_1ResourceAlreadyExistsException(output.body, context);
  const contents: ResourceAlreadyExistsException = {
    __type: "ResourceAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceAssociatedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceAssociatedException> => {
  const deserialized: any = deserializeAws_json1_1ResourceAssociatedException(output.body, context);
  const contents: ResourceAssociatedException = {
    __type: "ResourceAssociatedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceCreationFailedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceCreationFailedException> => {
  const deserialized: any = deserializeAws_json1_1ResourceCreationFailedException(output.body, context);
  const contents: ResourceCreationFailedException = {
    __type: "ResourceCreationFailedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceLimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceLimitExceededException> => {
  const deserialized: any = deserializeAws_json1_1ResourceLimitExceededException(output.body, context);
  const contents: ResourceLimitExceededException = {
    __type: "ResourceLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(output.body, context);
  const contents: ResourceNotFoundException = {
    __type: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceUnavailableExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceUnavailableException> => {
  const deserialized: any = deserializeAws_json1_1ResourceUnavailableException(output.body, context);
  const contents: ResourceUnavailableException = {
    __type: "ResourceUnavailableException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1UnsupportedNetworkConfigurationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<UnsupportedNetworkConfigurationException> => {
  const deserialized: any = deserializeAws_json1_1UnsupportedNetworkConfigurationException(output.body, context);
  const contents: UnsupportedNetworkConfigurationException = {
    __type: "UnsupportedNetworkConfigurationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1UnsupportedWorkspaceConfigurationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<UnsupportedWorkspaceConfigurationException> => {
  const deserialized: any = deserializeAws_json1_1UnsupportedWorkspaceConfigurationException(output.body, context);
  const contents: UnsupportedWorkspaceConfigurationException = {
    __type: "UnsupportedWorkspaceConfigurationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1WorkspacesDefaultRoleNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<WorkspacesDefaultRoleNotFoundException> => {
  const deserialized: any = deserializeAws_json1_1WorkspacesDefaultRoleNotFoundException(output.body, context);
  const contents: WorkspacesDefaultRoleNotFoundException = {
    __type: "WorkspacesDefaultRoleNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1AssociateIpGroupsRequest = (
  input: AssociateIpGroupsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DirectoryId !== undefined) {
    bodyParams['DirectoryId'] = input.DirectoryId;
  }
  if (input.GroupIds !== undefined) {
    bodyParams['GroupIds'] = serializeAws_json1_1IpGroupIdList(input.GroupIds, context);
  }
  return bodyParams;
}

const serializeAws_json1_1AuthorizeIpRulesRequest = (
  input: AuthorizeIpRulesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.GroupId !== undefined) {
    bodyParams['GroupId'] = input.GroupId;
  }
  if (input.UserRules !== undefined) {
    bodyParams['UserRules'] = serializeAws_json1_1IpRuleList(input.UserRules, context);
  }
  return bodyParams;
}

const serializeAws_json1_1BundleIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    entry
  );
}

const serializeAws_json1_1ClientProperties = (
  input: ClientProperties,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ReconnectEnabled !== undefined) {
    bodyParams['ReconnectEnabled'] = input.ReconnectEnabled;
  }
  return bodyParams;
}

const serializeAws_json1_1CopyWorkspaceImageRequest = (
  input: CopyWorkspaceImageRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams['Description'] = input.Description;
  }
  if (input.Name !== undefined) {
    bodyParams['Name'] = input.Name;
  }
  if (input.SourceImageId !== undefined) {
    bodyParams['SourceImageId'] = input.SourceImageId;
  }
  if (input.SourceRegion !== undefined) {
    bodyParams['SourceRegion'] = input.SourceRegion;
  }
  if (input.Tags !== undefined) {
    bodyParams['Tags'] = serializeAws_json1_1TagList(input.Tags, context);
  }
  return bodyParams;
}

const serializeAws_json1_1CreateIpGroupRequest = (
  input: CreateIpGroupRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.GroupDesc !== undefined) {
    bodyParams['GroupDesc'] = input.GroupDesc;
  }
  if (input.GroupName !== undefined) {
    bodyParams['GroupName'] = input.GroupName;
  }
  if (input.Tags !== undefined) {
    bodyParams['Tags'] = serializeAws_json1_1TagList(input.Tags, context);
  }
  if (input.UserRules !== undefined) {
    bodyParams['UserRules'] = serializeAws_json1_1IpRuleList(input.UserRules, context);
  }
  return bodyParams;
}

const serializeAws_json1_1CreateTagsRequest = (
  input: CreateTagsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ResourceId !== undefined) {
    bodyParams['ResourceId'] = input.ResourceId;
  }
  if (input.Tags !== undefined) {
    bodyParams['Tags'] = serializeAws_json1_1TagList(input.Tags, context);
  }
  return bodyParams;
}

const serializeAws_json1_1CreateWorkspacesRequest = (
  input: CreateWorkspacesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Workspaces !== undefined) {
    bodyParams['Workspaces'] = serializeAws_json1_1WorkspaceRequestList(input.Workspaces, context);
  }
  return bodyParams;
}

const serializeAws_json1_1DeleteIpGroupRequest = (
  input: DeleteIpGroupRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.GroupId !== undefined) {
    bodyParams['GroupId'] = input.GroupId;
  }
  return bodyParams;
}

const serializeAws_json1_1DeleteTagsRequest = (
  input: DeleteTagsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ResourceId !== undefined) {
    bodyParams['ResourceId'] = input.ResourceId;
  }
  if (input.TagKeys !== undefined) {
    bodyParams['TagKeys'] = serializeAws_json1_1TagKeyList(input.TagKeys, context);
  }
  return bodyParams;
}

const serializeAws_json1_1DeleteWorkspaceImageRequest = (
  input: DeleteWorkspaceImageRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ImageId !== undefined) {
    bodyParams['ImageId'] = input.ImageId;
  }
  return bodyParams;
}

const serializeAws_json1_1DeregisterWorkspaceDirectoryRequest = (
  input: DeregisterWorkspaceDirectoryRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DirectoryId !== undefined) {
    bodyParams['DirectoryId'] = input.DirectoryId;
  }
  return bodyParams;
}

const serializeAws_json1_1DescribeAccountModificationsRequest = (
  input: DescribeAccountModificationsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.NextToken !== undefined) {
    bodyParams['NextToken'] = input.NextToken;
  }
  return bodyParams;
}

const serializeAws_json1_1DescribeAccountRequest = (
  input: DescribeAccountRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  return bodyParams;
}

const serializeAws_json1_1DescribeClientPropertiesRequest = (
  input: DescribeClientPropertiesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ResourceIds !== undefined) {
    bodyParams['ResourceIds'] = serializeAws_json1_1ResourceIdList(input.ResourceIds, context);
  }
  return bodyParams;
}

const serializeAws_json1_1DescribeIpGroupsRequest = (
  input: DescribeIpGroupsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.GroupIds !== undefined) {
    bodyParams['GroupIds'] = serializeAws_json1_1IpGroupIdList(input.GroupIds, context);
  }
  if (input.MaxResults !== undefined) {
    bodyParams['MaxResults'] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams['NextToken'] = input.NextToken;
  }
  return bodyParams;
}

const serializeAws_json1_1DescribeTagsRequest = (
  input: DescribeTagsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ResourceId !== undefined) {
    bodyParams['ResourceId'] = input.ResourceId;
  }
  return bodyParams;
}

const serializeAws_json1_1DescribeWorkspaceBundlesRequest = (
  input: DescribeWorkspaceBundlesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.BundleIds !== undefined) {
    bodyParams['BundleIds'] = serializeAws_json1_1BundleIdList(input.BundleIds, context);
  }
  if (input.NextToken !== undefined) {
    bodyParams['NextToken'] = input.NextToken;
  }
  if (input.Owner !== undefined) {
    bodyParams['Owner'] = input.Owner;
  }
  return bodyParams;
}

const serializeAws_json1_1DescribeWorkspaceDirectoriesRequest = (
  input: DescribeWorkspaceDirectoriesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DirectoryIds !== undefined) {
    bodyParams['DirectoryIds'] = serializeAws_json1_1DirectoryIdList(input.DirectoryIds, context);
  }
  if (input.Limit !== undefined) {
    bodyParams['Limit'] = input.Limit;
  }
  if (input.NextToken !== undefined) {
    bodyParams['NextToken'] = input.NextToken;
  }
  return bodyParams;
}

const serializeAws_json1_1DescribeWorkspaceImagesRequest = (
  input: DescribeWorkspaceImagesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ImageIds !== undefined) {
    bodyParams['ImageIds'] = serializeAws_json1_1WorkspaceImageIdList(input.ImageIds, context);
  }
  if (input.MaxResults !== undefined) {
    bodyParams['MaxResults'] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams['NextToken'] = input.NextToken;
  }
  return bodyParams;
}

const serializeAws_json1_1DescribeWorkspaceSnapshotsRequest = (
  input: DescribeWorkspaceSnapshotsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.WorkspaceId !== undefined) {
    bodyParams['WorkspaceId'] = input.WorkspaceId;
  }
  return bodyParams;
}

const serializeAws_json1_1DescribeWorkspacesConnectionStatusRequest = (
  input: DescribeWorkspacesConnectionStatusRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.NextToken !== undefined) {
    bodyParams['NextToken'] = input.NextToken;
  }
  if (input.WorkspaceIds !== undefined) {
    bodyParams['WorkspaceIds'] = serializeAws_json1_1WorkspaceIdList(input.WorkspaceIds, context);
  }
  return bodyParams;
}

const serializeAws_json1_1DescribeWorkspacesRequest = (
  input: DescribeWorkspacesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.BundleId !== undefined) {
    bodyParams['BundleId'] = input.BundleId;
  }
  if (input.DirectoryId !== undefined) {
    bodyParams['DirectoryId'] = input.DirectoryId;
  }
  if (input.Limit !== undefined) {
    bodyParams['Limit'] = input.Limit;
  }
  if (input.NextToken !== undefined) {
    bodyParams['NextToken'] = input.NextToken;
  }
  if (input.UserName !== undefined) {
    bodyParams['UserName'] = input.UserName;
  }
  if (input.WorkspaceIds !== undefined) {
    bodyParams['WorkspaceIds'] = serializeAws_json1_1WorkspaceIdList(input.WorkspaceIds, context);
  }
  return bodyParams;
}

const serializeAws_json1_1DirectoryIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    entry
  );
}

const serializeAws_json1_1DisassociateIpGroupsRequest = (
  input: DisassociateIpGroupsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DirectoryId !== undefined) {
    bodyParams['DirectoryId'] = input.DirectoryId;
  }
  if (input.GroupIds !== undefined) {
    bodyParams['GroupIds'] = serializeAws_json1_1IpGroupIdList(input.GroupIds, context);
  }
  return bodyParams;
}

const serializeAws_json1_1ImportWorkspaceImageRequest = (
  input: ImportWorkspaceImageRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Ec2ImageId !== undefined) {
    bodyParams['Ec2ImageId'] = input.Ec2ImageId;
  }
  if (input.ImageDescription !== undefined) {
    bodyParams['ImageDescription'] = input.ImageDescription;
  }
  if (input.ImageName !== undefined) {
    bodyParams['ImageName'] = input.ImageName;
  }
  if (input.IngestionProcess !== undefined) {
    bodyParams['IngestionProcess'] = input.IngestionProcess;
  }
  if (input.Tags !== undefined) {
    bodyParams['Tags'] = serializeAws_json1_1TagList(input.Tags, context);
  }
  return bodyParams;
}

const serializeAws_json1_1IpGroupIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    entry
  );
}

const serializeAws_json1_1IpRevokedRuleList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    entry
  );
}

const serializeAws_json1_1IpRuleItem = (
  input: IpRuleItem,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ipRule !== undefined) {
    bodyParams['ipRule'] = input.ipRule;
  }
  if (input.ruleDesc !== undefined) {
    bodyParams['ruleDesc'] = input.ruleDesc;
  }
  return bodyParams;
}

const serializeAws_json1_1IpRuleList = (
  input: Array<IpRuleItem>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1IpRuleItem(entry, context)
  );
}

const serializeAws_json1_1ListAvailableManagementCidrRangesRequest = (
  input: ListAvailableManagementCidrRangesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ManagementCidrRangeConstraint !== undefined) {
    bodyParams['ManagementCidrRangeConstraint'] = input.ManagementCidrRangeConstraint;
  }
  if (input.MaxResults !== undefined) {
    bodyParams['MaxResults'] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams['NextToken'] = input.NextToken;
  }
  return bodyParams;
}

const serializeAws_json1_1ModifyAccountRequest = (
  input: ModifyAccountRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DedicatedTenancyManagementCidrRange !== undefined) {
    bodyParams['DedicatedTenancyManagementCidrRange'] = input.DedicatedTenancyManagementCidrRange;
  }
  if (input.DedicatedTenancySupport !== undefined) {
    bodyParams['DedicatedTenancySupport'] = input.DedicatedTenancySupport;
  }
  return bodyParams;
}

const serializeAws_json1_1ModifyClientPropertiesRequest = (
  input: ModifyClientPropertiesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ClientProperties !== undefined) {
    bodyParams['ClientProperties'] = serializeAws_json1_1ClientProperties(input.ClientProperties, context);
  }
  if (input.ResourceId !== undefined) {
    bodyParams['ResourceId'] = input.ResourceId;
  }
  return bodyParams;
}

const serializeAws_json1_1ModifySelfservicePermissionsRequest = (
  input: ModifySelfservicePermissionsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ResourceId !== undefined) {
    bodyParams['ResourceId'] = input.ResourceId;
  }
  if (input.SelfservicePermissions !== undefined) {
    bodyParams['SelfservicePermissions'] = serializeAws_json1_1SelfservicePermissions(input.SelfservicePermissions, context);
  }
  return bodyParams;
}

const serializeAws_json1_1ModifyWorkspaceAccessPropertiesRequest = (
  input: ModifyWorkspaceAccessPropertiesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ResourceId !== undefined) {
    bodyParams['ResourceId'] = input.ResourceId;
  }
  if (input.WorkspaceAccessProperties !== undefined) {
    bodyParams['WorkspaceAccessProperties'] = serializeAws_json1_1WorkspaceAccessProperties(input.WorkspaceAccessProperties, context);
  }
  return bodyParams;
}

const serializeAws_json1_1ModifyWorkspaceCreationPropertiesRequest = (
  input: ModifyWorkspaceCreationPropertiesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ResourceId !== undefined) {
    bodyParams['ResourceId'] = input.ResourceId;
  }
  if (input.WorkspaceCreationProperties !== undefined) {
    bodyParams['WorkspaceCreationProperties'] = serializeAws_json1_1WorkspaceCreationProperties(input.WorkspaceCreationProperties, context);
  }
  return bodyParams;
}

const serializeAws_json1_1ModifyWorkspacePropertiesRequest = (
  input: ModifyWorkspacePropertiesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.WorkspaceId !== undefined) {
    bodyParams['WorkspaceId'] = input.WorkspaceId;
  }
  if (input.WorkspaceProperties !== undefined) {
    bodyParams['WorkspaceProperties'] = serializeAws_json1_1WorkspaceProperties(input.WorkspaceProperties, context);
  }
  return bodyParams;
}

const serializeAws_json1_1ModifyWorkspaceStateRequest = (
  input: ModifyWorkspaceStateRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.WorkspaceId !== undefined) {
    bodyParams['WorkspaceId'] = input.WorkspaceId;
  }
  if (input.WorkspaceState !== undefined) {
    bodyParams['WorkspaceState'] = input.WorkspaceState;
  }
  return bodyParams;
}

const serializeAws_json1_1RebootRequest = (
  input: RebootRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.WorkspaceId !== undefined) {
    bodyParams['WorkspaceId'] = input.WorkspaceId;
  }
  return bodyParams;
}

const serializeAws_json1_1RebootWorkspaceRequests = (
  input: Array<RebootRequest>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1RebootRequest(entry, context)
  );
}

const serializeAws_json1_1RebootWorkspacesRequest = (
  input: RebootWorkspacesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.RebootWorkspaceRequests !== undefined) {
    bodyParams['RebootWorkspaceRequests'] = serializeAws_json1_1RebootWorkspaceRequests(input.RebootWorkspaceRequests, context);
  }
  return bodyParams;
}

const serializeAws_json1_1RebuildRequest = (
  input: RebuildRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.WorkspaceId !== undefined) {
    bodyParams['WorkspaceId'] = input.WorkspaceId;
  }
  return bodyParams;
}

const serializeAws_json1_1RebuildWorkspaceRequests = (
  input: Array<RebuildRequest>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1RebuildRequest(entry, context)
  );
}

const serializeAws_json1_1RebuildWorkspacesRequest = (
  input: RebuildWorkspacesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.RebuildWorkspaceRequests !== undefined) {
    bodyParams['RebuildWorkspaceRequests'] = serializeAws_json1_1RebuildWorkspaceRequests(input.RebuildWorkspaceRequests, context);
  }
  return bodyParams;
}

const serializeAws_json1_1RegisterWorkspaceDirectoryRequest = (
  input: RegisterWorkspaceDirectoryRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DirectoryId !== undefined) {
    bodyParams['DirectoryId'] = input.DirectoryId;
  }
  if (input.EnableSelfService !== undefined) {
    bodyParams['EnableSelfService'] = input.EnableSelfService;
  }
  if (input.EnableWorkDocs !== undefined) {
    bodyParams['EnableWorkDocs'] = input.EnableWorkDocs;
  }
  if (input.SubnetIds !== undefined) {
    bodyParams['SubnetIds'] = serializeAws_json1_1SubnetIds(input.SubnetIds, context);
  }
  if (input.Tags !== undefined) {
    bodyParams['Tags'] = serializeAws_json1_1TagList(input.Tags, context);
  }
  if (input.Tenancy !== undefined) {
    bodyParams['Tenancy'] = input.Tenancy;
  }
  return bodyParams;
}

const serializeAws_json1_1ResourceIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    entry
  );
}

const serializeAws_json1_1RestoreWorkspaceRequest = (
  input: RestoreWorkspaceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.WorkspaceId !== undefined) {
    bodyParams['WorkspaceId'] = input.WorkspaceId;
  }
  return bodyParams;
}

const serializeAws_json1_1RevokeIpRulesRequest = (
  input: RevokeIpRulesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.GroupId !== undefined) {
    bodyParams['GroupId'] = input.GroupId;
  }
  if (input.UserRules !== undefined) {
    bodyParams['UserRules'] = serializeAws_json1_1IpRevokedRuleList(input.UserRules, context);
  }
  return bodyParams;
}

const serializeAws_json1_1SelfservicePermissions = (
  input: SelfservicePermissions,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ChangeComputeType !== undefined) {
    bodyParams['ChangeComputeType'] = input.ChangeComputeType;
  }
  if (input.IncreaseVolumeSize !== undefined) {
    bodyParams['IncreaseVolumeSize'] = input.IncreaseVolumeSize;
  }
  if (input.RebuildWorkspace !== undefined) {
    bodyParams['RebuildWorkspace'] = input.RebuildWorkspace;
  }
  if (input.RestartWorkspace !== undefined) {
    bodyParams['RestartWorkspace'] = input.RestartWorkspace;
  }
  if (input.SwitchRunningMode !== undefined) {
    bodyParams['SwitchRunningMode'] = input.SwitchRunningMode;
  }
  return bodyParams;
}

const serializeAws_json1_1StartRequest = (
  input: StartRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.WorkspaceId !== undefined) {
    bodyParams['WorkspaceId'] = input.WorkspaceId;
  }
  return bodyParams;
}

const serializeAws_json1_1StartWorkspaceRequests = (
  input: Array<StartRequest>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1StartRequest(entry, context)
  );
}

const serializeAws_json1_1StartWorkspacesRequest = (
  input: StartWorkspacesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.StartWorkspaceRequests !== undefined) {
    bodyParams['StartWorkspaceRequests'] = serializeAws_json1_1StartWorkspaceRequests(input.StartWorkspaceRequests, context);
  }
  return bodyParams;
}

const serializeAws_json1_1StopRequest = (
  input: StopRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.WorkspaceId !== undefined) {
    bodyParams['WorkspaceId'] = input.WorkspaceId;
  }
  return bodyParams;
}

const serializeAws_json1_1StopWorkspaceRequests = (
  input: Array<StopRequest>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1StopRequest(entry, context)
  );
}

const serializeAws_json1_1StopWorkspacesRequest = (
  input: StopWorkspacesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.StopWorkspaceRequests !== undefined) {
    bodyParams['StopWorkspaceRequests'] = serializeAws_json1_1StopWorkspaceRequests(input.StopWorkspaceRequests, context);
  }
  return bodyParams;
}

const serializeAws_json1_1SubnetIds = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    entry
  );
}

const serializeAws_json1_1Tag = (
  input: Tag,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams['Key'] = input.Key;
  }
  if (input.Value !== undefined) {
    bodyParams['Value'] = input.Value;
  }
  return bodyParams;
}

const serializeAws_json1_1TagKeyList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    entry
  );
}

const serializeAws_json1_1TagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1Tag(entry, context)
  );
}

const serializeAws_json1_1TerminateRequest = (
  input: TerminateRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.WorkspaceId !== undefined) {
    bodyParams['WorkspaceId'] = input.WorkspaceId;
  }
  return bodyParams;
}

const serializeAws_json1_1TerminateWorkspaceRequests = (
  input: Array<TerminateRequest>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1TerminateRequest(entry, context)
  );
}

const serializeAws_json1_1TerminateWorkspacesRequest = (
  input: TerminateWorkspacesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.TerminateWorkspaceRequests !== undefined) {
    bodyParams['TerminateWorkspaceRequests'] = serializeAws_json1_1TerminateWorkspaceRequests(input.TerminateWorkspaceRequests, context);
  }
  return bodyParams;
}

const serializeAws_json1_1UpdateRulesOfIpGroupRequest = (
  input: UpdateRulesOfIpGroupRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.GroupId !== undefined) {
    bodyParams['GroupId'] = input.GroupId;
  }
  if (input.UserRules !== undefined) {
    bodyParams['UserRules'] = serializeAws_json1_1IpRuleList(input.UserRules, context);
  }
  return bodyParams;
}

const serializeAws_json1_1WorkspaceAccessProperties = (
  input: WorkspaceAccessProperties,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DeviceTypeAndroid !== undefined) {
    bodyParams['DeviceTypeAndroid'] = input.DeviceTypeAndroid;
  }
  if (input.DeviceTypeChromeOs !== undefined) {
    bodyParams['DeviceTypeChromeOs'] = input.DeviceTypeChromeOs;
  }
  if (input.DeviceTypeIos !== undefined) {
    bodyParams['DeviceTypeIos'] = input.DeviceTypeIos;
  }
  if (input.DeviceTypeOsx !== undefined) {
    bodyParams['DeviceTypeOsx'] = input.DeviceTypeOsx;
  }
  if (input.DeviceTypeWeb !== undefined) {
    bodyParams['DeviceTypeWeb'] = input.DeviceTypeWeb;
  }
  if (input.DeviceTypeWindows !== undefined) {
    bodyParams['DeviceTypeWindows'] = input.DeviceTypeWindows;
  }
  if (input.DeviceTypeZeroClient !== undefined) {
    bodyParams['DeviceTypeZeroClient'] = input.DeviceTypeZeroClient;
  }
  return bodyParams;
}

const serializeAws_json1_1WorkspaceCreationProperties = (
  input: WorkspaceCreationProperties,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CustomSecurityGroupId !== undefined) {
    bodyParams['CustomSecurityGroupId'] = input.CustomSecurityGroupId;
  }
  if (input.DefaultOu !== undefined) {
    bodyParams['DefaultOu'] = input.DefaultOu;
  }
  if (input.EnableInternetAccess !== undefined) {
    bodyParams['EnableInternetAccess'] = input.EnableInternetAccess;
  }
  if (input.EnableMaintenanceMode !== undefined) {
    bodyParams['EnableMaintenanceMode'] = input.EnableMaintenanceMode;
  }
  if (input.UserEnabledAsLocalAdministrator !== undefined) {
    bodyParams['UserEnabledAsLocalAdministrator'] = input.UserEnabledAsLocalAdministrator;
  }
  return bodyParams;
}

const serializeAws_json1_1WorkspaceIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    entry
  );
}

const serializeAws_json1_1WorkspaceImageIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    entry
  );
}

const serializeAws_json1_1WorkspaceProperties = (
  input: WorkspaceProperties,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ComputeTypeName !== undefined) {
    bodyParams['ComputeTypeName'] = input.ComputeTypeName;
  }
  if (input.RootVolumeSizeGib !== undefined) {
    bodyParams['RootVolumeSizeGib'] = input.RootVolumeSizeGib;
  }
  if (input.RunningMode !== undefined) {
    bodyParams['RunningMode'] = input.RunningMode;
  }
  if (input.RunningModeAutoStopTimeoutInMinutes !== undefined) {
    bodyParams['RunningModeAutoStopTimeoutInMinutes'] = input.RunningModeAutoStopTimeoutInMinutes;
  }
  if (input.UserVolumeSizeGib !== undefined) {
    bodyParams['UserVolumeSizeGib'] = input.UserVolumeSizeGib;
  }
  return bodyParams;
}

const serializeAws_json1_1WorkspaceRequest = (
  input: WorkspaceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.BundleId !== undefined) {
    bodyParams['BundleId'] = input.BundleId;
  }
  if (input.DirectoryId !== undefined) {
    bodyParams['DirectoryId'] = input.DirectoryId;
  }
  if (input.RootVolumeEncryptionEnabled !== undefined) {
    bodyParams['RootVolumeEncryptionEnabled'] = input.RootVolumeEncryptionEnabled;
  }
  if (input.Tags !== undefined) {
    bodyParams['Tags'] = serializeAws_json1_1TagList(input.Tags, context);
  }
  if (input.UserName !== undefined) {
    bodyParams['UserName'] = input.UserName;
  }
  if (input.UserVolumeEncryptionEnabled !== undefined) {
    bodyParams['UserVolumeEncryptionEnabled'] = input.UserVolumeEncryptionEnabled;
  }
  if (input.VolumeEncryptionKey !== undefined) {
    bodyParams['VolumeEncryptionKey'] = input.VolumeEncryptionKey;
  }
  if (input.WorkspaceProperties !== undefined) {
    bodyParams['WorkspaceProperties'] = serializeAws_json1_1WorkspaceProperties(input.WorkspaceProperties, context);
  }
  return bodyParams;
}

const serializeAws_json1_1WorkspaceRequestList = (
  input: Array<WorkspaceRequest>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1WorkspaceRequest(entry, context)
  );
}

const deserializeAws_json1_1AccessDeniedException = (
  output: any,
  context: __SerdeContext
): AccessDeniedException => {
  let contents: any = {
    __type: "AccessDeniedException",
    message: undefined,
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
}

const deserializeAws_json1_1AccountModification = (
  output: any,
  context: __SerdeContext
): AccountModification => {
  let contents: any = {
    __type: "AccountModification",
    DedicatedTenancyManagementCidrRange: undefined,
    DedicatedTenancySupport: undefined,
    ErrorCode: undefined,
    ErrorMessage: undefined,
    ModificationState: undefined,
    StartTime: undefined,
  };
  if (output.DedicatedTenancyManagementCidrRange !== undefined) {
    contents.DedicatedTenancyManagementCidrRange = output.DedicatedTenancyManagementCidrRange;
  }
  if (output.DedicatedTenancySupport !== undefined) {
    contents.DedicatedTenancySupport = output.DedicatedTenancySupport;
  }
  if (output.ErrorCode !== undefined) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.ErrorMessage !== undefined) {
    contents.ErrorMessage = output.ErrorMessage;
  }
  if (output.ModificationState !== undefined) {
    contents.ModificationState = output.ModificationState;
  }
  if (output.StartTime !== undefined) {
    contents.StartTime = new Date(output.StartTime % 1 != 0 ? Math.round(output.StartTime * 1000) : output.StartTime);
  }
  return contents;
}

const deserializeAws_json1_1AccountModificationList = (
  output: any,
  context: __SerdeContext
): Array<AccountModification> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AccountModification(entry, context)
  );
}

const deserializeAws_json1_1AssociateIpGroupsResult = (
  output: any,
  context: __SerdeContext
): AssociateIpGroupsResult => {
  let contents: any = {
    __type: "AssociateIpGroupsResult",
  };
  return contents;
}

const deserializeAws_json1_1AuthorizeIpRulesResult = (
  output: any,
  context: __SerdeContext
): AuthorizeIpRulesResult => {
  let contents: any = {
    __type: "AuthorizeIpRulesResult",
  };
  return contents;
}

const deserializeAws_json1_1BundleList = (
  output: any,
  context: __SerdeContext
): Array<WorkspaceBundle> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1WorkspaceBundle(entry, context)
  );
}

const deserializeAws_json1_1ClientProperties = (
  output: any,
  context: __SerdeContext
): ClientProperties => {
  let contents: any = {
    __type: "ClientProperties",
    ReconnectEnabled: undefined,
  };
  if (output.ReconnectEnabled !== undefined) {
    contents.ReconnectEnabled = output.ReconnectEnabled;
  }
  return contents;
}

const deserializeAws_json1_1ClientPropertiesList = (
  output: any,
  context: __SerdeContext
): Array<ClientPropertiesResult> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ClientPropertiesResult(entry, context)
  );
}

const deserializeAws_json1_1ClientPropertiesResult = (
  output: any,
  context: __SerdeContext
): ClientPropertiesResult => {
  let contents: any = {
    __type: "ClientPropertiesResult",
    ClientProperties: undefined,
    ResourceId: undefined,
  };
  if (output.ClientProperties !== undefined) {
    contents.ClientProperties = deserializeAws_json1_1ClientProperties(output.ClientProperties, context);
  }
  if (output.ResourceId !== undefined) {
    contents.ResourceId = output.ResourceId;
  }
  return contents;
}

const deserializeAws_json1_1ComputeType = (
  output: any,
  context: __SerdeContext
): ComputeType => {
  let contents: any = {
    __type: "ComputeType",
    Name: undefined,
  };
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  return contents;
}

const deserializeAws_json1_1CopyWorkspaceImageResult = (
  output: any,
  context: __SerdeContext
): CopyWorkspaceImageResult => {
  let contents: any = {
    __type: "CopyWorkspaceImageResult",
    ImageId: undefined,
  };
  if (output.ImageId !== undefined) {
    contents.ImageId = output.ImageId;
  }
  return contents;
}

const deserializeAws_json1_1CreateIpGroupResult = (
  output: any,
  context: __SerdeContext
): CreateIpGroupResult => {
  let contents: any = {
    __type: "CreateIpGroupResult",
    GroupId: undefined,
  };
  if (output.GroupId !== undefined) {
    contents.GroupId = output.GroupId;
  }
  return contents;
}

const deserializeAws_json1_1CreateTagsResult = (
  output: any,
  context: __SerdeContext
): CreateTagsResult => {
  let contents: any = {
    __type: "CreateTagsResult",
  };
  return contents;
}

const deserializeAws_json1_1CreateWorkspacesResult = (
  output: any,
  context: __SerdeContext
): CreateWorkspacesResult => {
  let contents: any = {
    __type: "CreateWorkspacesResult",
    FailedRequests: undefined,
    PendingRequests: undefined,
  };
  if (output.FailedRequests !== undefined) {
    contents.FailedRequests = deserializeAws_json1_1FailedCreateWorkspaceRequests(output.FailedRequests, context);
  }
  if (output.PendingRequests !== undefined) {
    contents.PendingRequests = deserializeAws_json1_1WorkspaceList(output.PendingRequests, context);
  }
  return contents;
}

const deserializeAws_json1_1DedicatedTenancyCidrRangeList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) =>
    entry
  );
}

const deserializeAws_json1_1DefaultWorkspaceCreationProperties = (
  output: any,
  context: __SerdeContext
): DefaultWorkspaceCreationProperties => {
  let contents: any = {
    __type: "DefaultWorkspaceCreationProperties",
    CustomSecurityGroupId: undefined,
    DefaultOu: undefined,
    EnableInternetAccess: undefined,
    EnableMaintenanceMode: undefined,
    EnableWorkDocs: undefined,
    UserEnabledAsLocalAdministrator: undefined,
  };
  if (output.CustomSecurityGroupId !== undefined) {
    contents.CustomSecurityGroupId = output.CustomSecurityGroupId;
  }
  if (output.DefaultOu !== undefined) {
    contents.DefaultOu = output.DefaultOu;
  }
  if (output.EnableInternetAccess !== undefined) {
    contents.EnableInternetAccess = output.EnableInternetAccess;
  }
  if (output.EnableMaintenanceMode !== undefined) {
    contents.EnableMaintenanceMode = output.EnableMaintenanceMode;
  }
  if (output.EnableWorkDocs !== undefined) {
    contents.EnableWorkDocs = output.EnableWorkDocs;
  }
  if (output.UserEnabledAsLocalAdministrator !== undefined) {
    contents.UserEnabledAsLocalAdministrator = output.UserEnabledAsLocalAdministrator;
  }
  return contents;
}

const deserializeAws_json1_1DeleteIpGroupResult = (
  output: any,
  context: __SerdeContext
): DeleteIpGroupResult => {
  let contents: any = {
    __type: "DeleteIpGroupResult",
  };
  return contents;
}

const deserializeAws_json1_1DeleteTagsResult = (
  output: any,
  context: __SerdeContext
): DeleteTagsResult => {
  let contents: any = {
    __type: "DeleteTagsResult",
  };
  return contents;
}

const deserializeAws_json1_1DeleteWorkspaceImageResult = (
  output: any,
  context: __SerdeContext
): DeleteWorkspaceImageResult => {
  let contents: any = {
    __type: "DeleteWorkspaceImageResult",
  };
  return contents;
}

const deserializeAws_json1_1DeregisterWorkspaceDirectoryResult = (
  output: any,
  context: __SerdeContext
): DeregisterWorkspaceDirectoryResult => {
  let contents: any = {
    __type: "DeregisterWorkspaceDirectoryResult",
  };
  return contents;
}

const deserializeAws_json1_1DescribeAccountModificationsResult = (
  output: any,
  context: __SerdeContext
): DescribeAccountModificationsResult => {
  let contents: any = {
    __type: "DescribeAccountModificationsResult",
    AccountModifications: undefined,
    NextToken: undefined,
  };
  if (output.AccountModifications !== undefined) {
    contents.AccountModifications = deserializeAws_json1_1AccountModificationList(output.AccountModifications, context);
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
}

const deserializeAws_json1_1DescribeAccountResult = (
  output: any,
  context: __SerdeContext
): DescribeAccountResult => {
  let contents: any = {
    __type: "DescribeAccountResult",
    DedicatedTenancyManagementCidrRange: undefined,
    DedicatedTenancySupport: undefined,
  };
  if (output.DedicatedTenancyManagementCidrRange !== undefined) {
    contents.DedicatedTenancyManagementCidrRange = output.DedicatedTenancyManagementCidrRange;
  }
  if (output.DedicatedTenancySupport !== undefined) {
    contents.DedicatedTenancySupport = output.DedicatedTenancySupport;
  }
  return contents;
}

const deserializeAws_json1_1DescribeClientPropertiesResult = (
  output: any,
  context: __SerdeContext
): DescribeClientPropertiesResult => {
  let contents: any = {
    __type: "DescribeClientPropertiesResult",
    ClientPropertiesList: undefined,
  };
  if (output.ClientPropertiesList !== undefined) {
    contents.ClientPropertiesList = deserializeAws_json1_1ClientPropertiesList(output.ClientPropertiesList, context);
  }
  return contents;
}

const deserializeAws_json1_1DescribeIpGroupsResult = (
  output: any,
  context: __SerdeContext
): DescribeIpGroupsResult => {
  let contents: any = {
    __type: "DescribeIpGroupsResult",
    NextToken: undefined,
    Result: undefined,
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.Result !== undefined) {
    contents.Result = deserializeAws_json1_1WorkspacesIpGroupsList(output.Result, context);
  }
  return contents;
}

const deserializeAws_json1_1DescribeTagsResult = (
  output: any,
  context: __SerdeContext
): DescribeTagsResult => {
  let contents: any = {
    __type: "DescribeTagsResult",
    TagList: undefined,
  };
  if (output.TagList !== undefined) {
    contents.TagList = deserializeAws_json1_1TagList(output.TagList, context);
  }
  return contents;
}

const deserializeAws_json1_1DescribeWorkspaceBundlesResult = (
  output: any,
  context: __SerdeContext
): DescribeWorkspaceBundlesResult => {
  let contents: any = {
    __type: "DescribeWorkspaceBundlesResult",
    Bundles: undefined,
    NextToken: undefined,
  };
  if (output.Bundles !== undefined) {
    contents.Bundles = deserializeAws_json1_1BundleList(output.Bundles, context);
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
}

const deserializeAws_json1_1DescribeWorkspaceDirectoriesResult = (
  output: any,
  context: __SerdeContext
): DescribeWorkspaceDirectoriesResult => {
  let contents: any = {
    __type: "DescribeWorkspaceDirectoriesResult",
    Directories: undefined,
    NextToken: undefined,
  };
  if (output.Directories !== undefined) {
    contents.Directories = deserializeAws_json1_1DirectoryList(output.Directories, context);
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
}

const deserializeAws_json1_1DescribeWorkspaceImagesResult = (
  output: any,
  context: __SerdeContext
): DescribeWorkspaceImagesResult => {
  let contents: any = {
    __type: "DescribeWorkspaceImagesResult",
    Images: undefined,
    NextToken: undefined,
  };
  if (output.Images !== undefined) {
    contents.Images = deserializeAws_json1_1WorkspaceImageList(output.Images, context);
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
}

const deserializeAws_json1_1DescribeWorkspaceSnapshotsResult = (
  output: any,
  context: __SerdeContext
): DescribeWorkspaceSnapshotsResult => {
  let contents: any = {
    __type: "DescribeWorkspaceSnapshotsResult",
    RebuildSnapshots: undefined,
    RestoreSnapshots: undefined,
  };
  if (output.RebuildSnapshots !== undefined) {
    contents.RebuildSnapshots = deserializeAws_json1_1SnapshotList(output.RebuildSnapshots, context);
  }
  if (output.RestoreSnapshots !== undefined) {
    contents.RestoreSnapshots = deserializeAws_json1_1SnapshotList(output.RestoreSnapshots, context);
  }
  return contents;
}

const deserializeAws_json1_1DescribeWorkspacesConnectionStatusResult = (
  output: any,
  context: __SerdeContext
): DescribeWorkspacesConnectionStatusResult => {
  let contents: any = {
    __type: "DescribeWorkspacesConnectionStatusResult",
    NextToken: undefined,
    WorkspacesConnectionStatus: undefined,
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.WorkspacesConnectionStatus !== undefined) {
    contents.WorkspacesConnectionStatus = deserializeAws_json1_1WorkspaceConnectionStatusList(output.WorkspacesConnectionStatus, context);
  }
  return contents;
}

const deserializeAws_json1_1DescribeWorkspacesResult = (
  output: any,
  context: __SerdeContext
): DescribeWorkspacesResult => {
  let contents: any = {
    __type: "DescribeWorkspacesResult",
    NextToken: undefined,
    Workspaces: undefined,
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.Workspaces !== undefined) {
    contents.Workspaces = deserializeAws_json1_1WorkspaceList(output.Workspaces, context);
  }
  return contents;
}

const deserializeAws_json1_1DirectoryList = (
  output: any,
  context: __SerdeContext
): Array<WorkspaceDirectory> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1WorkspaceDirectory(entry, context)
  );
}

const deserializeAws_json1_1DisassociateIpGroupsResult = (
  output: any,
  context: __SerdeContext
): DisassociateIpGroupsResult => {
  let contents: any = {
    __type: "DisassociateIpGroupsResult",
  };
  return contents;
}

const deserializeAws_json1_1DnsIpAddresses = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) =>
    entry
  );
}

const deserializeAws_json1_1FailedCreateWorkspaceRequest = (
  output: any,
  context: __SerdeContext
): FailedCreateWorkspaceRequest => {
  let contents: any = {
    __type: "FailedCreateWorkspaceRequest",
    ErrorCode: undefined,
    ErrorMessage: undefined,
    WorkspaceRequest: undefined,
  };
  if (output.ErrorCode !== undefined) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.ErrorMessage !== undefined) {
    contents.ErrorMessage = output.ErrorMessage;
  }
  if (output.WorkspaceRequest !== undefined) {
    contents.WorkspaceRequest = deserializeAws_json1_1WorkspaceRequest(output.WorkspaceRequest, context);
  }
  return contents;
}

const deserializeAws_json1_1FailedCreateWorkspaceRequests = (
  output: any,
  context: __SerdeContext
): Array<FailedCreateWorkspaceRequest> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1FailedCreateWorkspaceRequest(entry, context)
  );
}

const deserializeAws_json1_1FailedRebootWorkspaceRequests = (
  output: any,
  context: __SerdeContext
): Array<FailedWorkspaceChangeRequest> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1FailedWorkspaceChangeRequest(entry, context)
  );
}

const deserializeAws_json1_1FailedRebuildWorkspaceRequests = (
  output: any,
  context: __SerdeContext
): Array<FailedWorkspaceChangeRequest> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1FailedWorkspaceChangeRequest(entry, context)
  );
}

const deserializeAws_json1_1FailedStartWorkspaceRequests = (
  output: any,
  context: __SerdeContext
): Array<FailedWorkspaceChangeRequest> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1FailedWorkspaceChangeRequest(entry, context)
  );
}

const deserializeAws_json1_1FailedStopWorkspaceRequests = (
  output: any,
  context: __SerdeContext
): Array<FailedWorkspaceChangeRequest> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1FailedWorkspaceChangeRequest(entry, context)
  );
}

const deserializeAws_json1_1FailedTerminateWorkspaceRequests = (
  output: any,
  context: __SerdeContext
): Array<FailedWorkspaceChangeRequest> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1FailedWorkspaceChangeRequest(entry, context)
  );
}

const deserializeAws_json1_1FailedWorkspaceChangeRequest = (
  output: any,
  context: __SerdeContext
): FailedWorkspaceChangeRequest => {
  let contents: any = {
    __type: "FailedWorkspaceChangeRequest",
    ErrorCode: undefined,
    ErrorMessage: undefined,
    WorkspaceId: undefined,
  };
  if (output.ErrorCode !== undefined) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.ErrorMessage !== undefined) {
    contents.ErrorMessage = output.ErrorMessage;
  }
  if (output.WorkspaceId !== undefined) {
    contents.WorkspaceId = output.WorkspaceId;
  }
  return contents;
}

const deserializeAws_json1_1ImportWorkspaceImageResult = (
  output: any,
  context: __SerdeContext
): ImportWorkspaceImageResult => {
  let contents: any = {
    __type: "ImportWorkspaceImageResult",
    ImageId: undefined,
  };
  if (output.ImageId !== undefined) {
    contents.ImageId = output.ImageId;
  }
  return contents;
}

const deserializeAws_json1_1InvalidParameterValuesException = (
  output: any,
  context: __SerdeContext
): InvalidParameterValuesException => {
  let contents: any = {
    __type: "InvalidParameterValuesException",
    message: undefined,
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
}

const deserializeAws_json1_1InvalidResourceStateException = (
  output: any,
  context: __SerdeContext
): InvalidResourceStateException => {
  let contents: any = {
    __type: "InvalidResourceStateException",
    message: undefined,
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
}

const deserializeAws_json1_1IpGroupIdList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) =>
    entry
  );
}

const deserializeAws_json1_1IpRuleItem = (
  output: any,
  context: __SerdeContext
): IpRuleItem => {
  let contents: any = {
    __type: "IpRuleItem",
    ipRule: undefined,
    ruleDesc: undefined,
  };
  if (output.ipRule !== undefined) {
    contents.ipRule = output.ipRule;
  }
  if (output.ruleDesc !== undefined) {
    contents.ruleDesc = output.ruleDesc;
  }
  return contents;
}

const deserializeAws_json1_1IpRuleList = (
  output: any,
  context: __SerdeContext
): Array<IpRuleItem> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1IpRuleItem(entry, context)
  );
}

const deserializeAws_json1_1ListAvailableManagementCidrRangesResult = (
  output: any,
  context: __SerdeContext
): ListAvailableManagementCidrRangesResult => {
  let contents: any = {
    __type: "ListAvailableManagementCidrRangesResult",
    ManagementCidrRanges: undefined,
    NextToken: undefined,
  };
  if (output.ManagementCidrRanges !== undefined) {
    contents.ManagementCidrRanges = deserializeAws_json1_1DedicatedTenancyCidrRangeList(output.ManagementCidrRanges, context);
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
}

const deserializeAws_json1_1ModificationState = (
  output: any,
  context: __SerdeContext
): ModificationState => {
  let contents: any = {
    __type: "ModificationState",
    Resource: undefined,
    State: undefined,
  };
  if (output.Resource !== undefined) {
    contents.Resource = output.Resource;
  }
  if (output.State !== undefined) {
    contents.State = output.State;
  }
  return contents;
}

const deserializeAws_json1_1ModificationStateList = (
  output: any,
  context: __SerdeContext
): Array<ModificationState> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ModificationState(entry, context)
  );
}

const deserializeAws_json1_1ModifyAccountResult = (
  output: any,
  context: __SerdeContext
): ModifyAccountResult => {
  let contents: any = {
    __type: "ModifyAccountResult",
  };
  return contents;
}

const deserializeAws_json1_1ModifyClientPropertiesResult = (
  output: any,
  context: __SerdeContext
): ModifyClientPropertiesResult => {
  let contents: any = {
    __type: "ModifyClientPropertiesResult",
  };
  return contents;
}

const deserializeAws_json1_1ModifySelfservicePermissionsResult = (
  output: any,
  context: __SerdeContext
): ModifySelfservicePermissionsResult => {
  let contents: any = {
    __type: "ModifySelfservicePermissionsResult",
  };
  return contents;
}

const deserializeAws_json1_1ModifyWorkspaceAccessPropertiesResult = (
  output: any,
  context: __SerdeContext
): ModifyWorkspaceAccessPropertiesResult => {
  let contents: any = {
    __type: "ModifyWorkspaceAccessPropertiesResult",
  };
  return contents;
}

const deserializeAws_json1_1ModifyWorkspaceCreationPropertiesResult = (
  output: any,
  context: __SerdeContext
): ModifyWorkspaceCreationPropertiesResult => {
  let contents: any = {
    __type: "ModifyWorkspaceCreationPropertiesResult",
  };
  return contents;
}

const deserializeAws_json1_1ModifyWorkspacePropertiesResult = (
  output: any,
  context: __SerdeContext
): ModifyWorkspacePropertiesResult => {
  let contents: any = {
    __type: "ModifyWorkspacePropertiesResult",
  };
  return contents;
}

const deserializeAws_json1_1ModifyWorkspaceStateResult = (
  output: any,
  context: __SerdeContext
): ModifyWorkspaceStateResult => {
  let contents: any = {
    __type: "ModifyWorkspaceStateResult",
  };
  return contents;
}

const deserializeAws_json1_1OperatingSystem = (
  output: any,
  context: __SerdeContext
): OperatingSystem => {
  let contents: any = {
    __type: "OperatingSystem",
    Type: undefined,
  };
  if (output.Type !== undefined) {
    contents.Type = output.Type;
  }
  return contents;
}

const deserializeAws_json1_1OperationInProgressException = (
  output: any,
  context: __SerdeContext
): OperationInProgressException => {
  let contents: any = {
    __type: "OperationInProgressException",
    message: undefined,
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
}

const deserializeAws_json1_1OperationNotSupportedException = (
  output: any,
  context: __SerdeContext
): OperationNotSupportedException => {
  let contents: any = {
    __type: "OperationNotSupportedException",
    message: undefined,
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
}

const deserializeAws_json1_1RebootWorkspacesResult = (
  output: any,
  context: __SerdeContext
): RebootWorkspacesResult => {
  let contents: any = {
    __type: "RebootWorkspacesResult",
    FailedRequests: undefined,
  };
  if (output.FailedRequests !== undefined) {
    contents.FailedRequests = deserializeAws_json1_1FailedRebootWorkspaceRequests(output.FailedRequests, context);
  }
  return contents;
}

const deserializeAws_json1_1RebuildWorkspacesResult = (
  output: any,
  context: __SerdeContext
): RebuildWorkspacesResult => {
  let contents: any = {
    __type: "RebuildWorkspacesResult",
    FailedRequests: undefined,
  };
  if (output.FailedRequests !== undefined) {
    contents.FailedRequests = deserializeAws_json1_1FailedRebuildWorkspaceRequests(output.FailedRequests, context);
  }
  return contents;
}

const deserializeAws_json1_1RegisterWorkspaceDirectoryResult = (
  output: any,
  context: __SerdeContext
): RegisterWorkspaceDirectoryResult => {
  let contents: any = {
    __type: "RegisterWorkspaceDirectoryResult",
  };
  return contents;
}

const deserializeAws_json1_1ResourceAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ResourceAlreadyExistsException => {
  let contents: any = {
    __type: "ResourceAlreadyExistsException",
    message: undefined,
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
}

const deserializeAws_json1_1ResourceAssociatedException = (
  output: any,
  context: __SerdeContext
): ResourceAssociatedException => {
  let contents: any = {
    __type: "ResourceAssociatedException",
    message: undefined,
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
}

const deserializeAws_json1_1ResourceCreationFailedException = (
  output: any,
  context: __SerdeContext
): ResourceCreationFailedException => {
  let contents: any = {
    __type: "ResourceCreationFailedException",
    message: undefined,
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
}

const deserializeAws_json1_1ResourceLimitExceededException = (
  output: any,
  context: __SerdeContext
): ResourceLimitExceededException => {
  let contents: any = {
    __type: "ResourceLimitExceededException",
    message: undefined,
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
}

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    ResourceId: undefined,
    message: undefined,
  };
  if (output.ResourceId !== undefined) {
    contents.ResourceId = output.ResourceId;
  }
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
}

const deserializeAws_json1_1ResourceUnavailableException = (
  output: any,
  context: __SerdeContext
): ResourceUnavailableException => {
  let contents: any = {
    __type: "ResourceUnavailableException",
    ResourceId: undefined,
    message: undefined,
  };
  if (output.ResourceId !== undefined) {
    contents.ResourceId = output.ResourceId;
  }
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
}

const deserializeAws_json1_1RestoreWorkspaceResult = (
  output: any,
  context: __SerdeContext
): RestoreWorkspaceResult => {
  let contents: any = {
    __type: "RestoreWorkspaceResult",
  };
  return contents;
}

const deserializeAws_json1_1RevokeIpRulesResult = (
  output: any,
  context: __SerdeContext
): RevokeIpRulesResult => {
  let contents: any = {
    __type: "RevokeIpRulesResult",
  };
  return contents;
}

const deserializeAws_json1_1RootStorage = (
  output: any,
  context: __SerdeContext
): RootStorage => {
  let contents: any = {
    __type: "RootStorage",
    Capacity: undefined,
  };
  if (output.Capacity !== undefined) {
    contents.Capacity = output.Capacity;
  }
  return contents;
}

const deserializeAws_json1_1SelfservicePermissions = (
  output: any,
  context: __SerdeContext
): SelfservicePermissions => {
  let contents: any = {
    __type: "SelfservicePermissions",
    ChangeComputeType: undefined,
    IncreaseVolumeSize: undefined,
    RebuildWorkspace: undefined,
    RestartWorkspace: undefined,
    SwitchRunningMode: undefined,
  };
  if (output.ChangeComputeType !== undefined) {
    contents.ChangeComputeType = output.ChangeComputeType;
  }
  if (output.IncreaseVolumeSize !== undefined) {
    contents.IncreaseVolumeSize = output.IncreaseVolumeSize;
  }
  if (output.RebuildWorkspace !== undefined) {
    contents.RebuildWorkspace = output.RebuildWorkspace;
  }
  if (output.RestartWorkspace !== undefined) {
    contents.RestartWorkspace = output.RestartWorkspace;
  }
  if (output.SwitchRunningMode !== undefined) {
    contents.SwitchRunningMode = output.SwitchRunningMode;
  }
  return contents;
}

const deserializeAws_json1_1Snapshot = (
  output: any,
  context: __SerdeContext
): Snapshot => {
  let contents: any = {
    __type: "Snapshot",
    SnapshotTime: undefined,
  };
  if (output.SnapshotTime !== undefined) {
    contents.SnapshotTime = new Date(output.SnapshotTime % 1 != 0 ? Math.round(output.SnapshotTime * 1000) : output.SnapshotTime);
  }
  return contents;
}

const deserializeAws_json1_1SnapshotList = (
  output: any,
  context: __SerdeContext
): Array<Snapshot> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Snapshot(entry, context)
  );
}

const deserializeAws_json1_1StartWorkspacesResult = (
  output: any,
  context: __SerdeContext
): StartWorkspacesResult => {
  let contents: any = {
    __type: "StartWorkspacesResult",
    FailedRequests: undefined,
  };
  if (output.FailedRequests !== undefined) {
    contents.FailedRequests = deserializeAws_json1_1FailedStartWorkspaceRequests(output.FailedRequests, context);
  }
  return contents;
}

const deserializeAws_json1_1StopWorkspacesResult = (
  output: any,
  context: __SerdeContext
): StopWorkspacesResult => {
  let contents: any = {
    __type: "StopWorkspacesResult",
    FailedRequests: undefined,
  };
  if (output.FailedRequests !== undefined) {
    contents.FailedRequests = deserializeAws_json1_1FailedStopWorkspaceRequests(output.FailedRequests, context);
  }
  return contents;
}

const deserializeAws_json1_1SubnetIds = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) =>
    entry
  );
}

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    Key: undefined,
    Value: undefined,
  };
  if (output.Key !== undefined) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined) {
    contents.Value = output.Value;
  }
  return contents;
}

const deserializeAws_json1_1TagList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
}

const deserializeAws_json1_1TerminateWorkspacesResult = (
  output: any,
  context: __SerdeContext
): TerminateWorkspacesResult => {
  let contents: any = {
    __type: "TerminateWorkspacesResult",
    FailedRequests: undefined,
  };
  if (output.FailedRequests !== undefined) {
    contents.FailedRequests = deserializeAws_json1_1FailedTerminateWorkspaceRequests(output.FailedRequests, context);
  }
  return contents;
}

const deserializeAws_json1_1UnsupportedNetworkConfigurationException = (
  output: any,
  context: __SerdeContext
): UnsupportedNetworkConfigurationException => {
  let contents: any = {
    __type: "UnsupportedNetworkConfigurationException",
    message: undefined,
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
}

const deserializeAws_json1_1UnsupportedWorkspaceConfigurationException = (
  output: any,
  context: __SerdeContext
): UnsupportedWorkspaceConfigurationException => {
  let contents: any = {
    __type: "UnsupportedWorkspaceConfigurationException",
    message: undefined,
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
}

const deserializeAws_json1_1UpdateRulesOfIpGroupResult = (
  output: any,
  context: __SerdeContext
): UpdateRulesOfIpGroupResult => {
  let contents: any = {
    __type: "UpdateRulesOfIpGroupResult",
  };
  return contents;
}

const deserializeAws_json1_1UserStorage = (
  output: any,
  context: __SerdeContext
): UserStorage => {
  let contents: any = {
    __type: "UserStorage",
    Capacity: undefined,
  };
  if (output.Capacity !== undefined) {
    contents.Capacity = output.Capacity;
  }
  return contents;
}

const deserializeAws_json1_1Workspace = (
  output: any,
  context: __SerdeContext
): Workspace => {
  let contents: any = {
    __type: "Workspace",
    BundleId: undefined,
    ComputerName: undefined,
    DirectoryId: undefined,
    ErrorCode: undefined,
    ErrorMessage: undefined,
    IpAddress: undefined,
    ModificationStates: undefined,
    RootVolumeEncryptionEnabled: undefined,
    State: undefined,
    SubnetId: undefined,
    UserName: undefined,
    UserVolumeEncryptionEnabled: undefined,
    VolumeEncryptionKey: undefined,
    WorkspaceId: undefined,
    WorkspaceProperties: undefined,
  };
  if (output.BundleId !== undefined) {
    contents.BundleId = output.BundleId;
  }
  if (output.ComputerName !== undefined) {
    contents.ComputerName = output.ComputerName;
  }
  if (output.DirectoryId !== undefined) {
    contents.DirectoryId = output.DirectoryId;
  }
  if (output.ErrorCode !== undefined) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.ErrorMessage !== undefined) {
    contents.ErrorMessage = output.ErrorMessage;
  }
  if (output.IpAddress !== undefined) {
    contents.IpAddress = output.IpAddress;
  }
  if (output.ModificationStates !== undefined) {
    contents.ModificationStates = deserializeAws_json1_1ModificationStateList(output.ModificationStates, context);
  }
  if (output.RootVolumeEncryptionEnabled !== undefined) {
    contents.RootVolumeEncryptionEnabled = output.RootVolumeEncryptionEnabled;
  }
  if (output.State !== undefined) {
    contents.State = output.State;
  }
  if (output.SubnetId !== undefined) {
    contents.SubnetId = output.SubnetId;
  }
  if (output.UserName !== undefined) {
    contents.UserName = output.UserName;
  }
  if (output.UserVolumeEncryptionEnabled !== undefined) {
    contents.UserVolumeEncryptionEnabled = output.UserVolumeEncryptionEnabled;
  }
  if (output.VolumeEncryptionKey !== undefined) {
    contents.VolumeEncryptionKey = output.VolumeEncryptionKey;
  }
  if (output.WorkspaceId !== undefined) {
    contents.WorkspaceId = output.WorkspaceId;
  }
  if (output.WorkspaceProperties !== undefined) {
    contents.WorkspaceProperties = deserializeAws_json1_1WorkspaceProperties(output.WorkspaceProperties, context);
  }
  return contents;
}

const deserializeAws_json1_1WorkspaceAccessProperties = (
  output: any,
  context: __SerdeContext
): WorkspaceAccessProperties => {
  let contents: any = {
    __type: "WorkspaceAccessProperties",
    DeviceTypeAndroid: undefined,
    DeviceTypeChromeOs: undefined,
    DeviceTypeIos: undefined,
    DeviceTypeOsx: undefined,
    DeviceTypeWeb: undefined,
    DeviceTypeWindows: undefined,
    DeviceTypeZeroClient: undefined,
  };
  if (output.DeviceTypeAndroid !== undefined) {
    contents.DeviceTypeAndroid = output.DeviceTypeAndroid;
  }
  if (output.DeviceTypeChromeOs !== undefined) {
    contents.DeviceTypeChromeOs = output.DeviceTypeChromeOs;
  }
  if (output.DeviceTypeIos !== undefined) {
    contents.DeviceTypeIos = output.DeviceTypeIos;
  }
  if (output.DeviceTypeOsx !== undefined) {
    contents.DeviceTypeOsx = output.DeviceTypeOsx;
  }
  if (output.DeviceTypeWeb !== undefined) {
    contents.DeviceTypeWeb = output.DeviceTypeWeb;
  }
  if (output.DeviceTypeWindows !== undefined) {
    contents.DeviceTypeWindows = output.DeviceTypeWindows;
  }
  if (output.DeviceTypeZeroClient !== undefined) {
    contents.DeviceTypeZeroClient = output.DeviceTypeZeroClient;
  }
  return contents;
}

const deserializeAws_json1_1WorkspaceBundle = (
  output: any,
  context: __SerdeContext
): WorkspaceBundle => {
  let contents: any = {
    __type: "WorkspaceBundle",
    BundleId: undefined,
    ComputeType: undefined,
    Description: undefined,
    ImageId: undefined,
    LastUpdatedTime: undefined,
    Name: undefined,
    Owner: undefined,
    RootStorage: undefined,
    UserStorage: undefined,
  };
  if (output.BundleId !== undefined) {
    contents.BundleId = output.BundleId;
  }
  if (output.ComputeType !== undefined) {
    contents.ComputeType = deserializeAws_json1_1ComputeType(output.ComputeType, context);
  }
  if (output.Description !== undefined) {
    contents.Description = output.Description;
  }
  if (output.ImageId !== undefined) {
    contents.ImageId = output.ImageId;
  }
  if (output.LastUpdatedTime !== undefined) {
    contents.LastUpdatedTime = new Date(output.LastUpdatedTime % 1 != 0 ? Math.round(output.LastUpdatedTime * 1000) : output.LastUpdatedTime);
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.Owner !== undefined) {
    contents.Owner = output.Owner;
  }
  if (output.RootStorage !== undefined) {
    contents.RootStorage = deserializeAws_json1_1RootStorage(output.RootStorage, context);
  }
  if (output.UserStorage !== undefined) {
    contents.UserStorage = deserializeAws_json1_1UserStorage(output.UserStorage, context);
  }
  return contents;
}

const deserializeAws_json1_1WorkspaceConnectionStatus = (
  output: any,
  context: __SerdeContext
): WorkspaceConnectionStatus => {
  let contents: any = {
    __type: "WorkspaceConnectionStatus",
    ConnectionState: undefined,
    ConnectionStateCheckTimestamp: undefined,
    LastKnownUserConnectionTimestamp: undefined,
    WorkspaceId: undefined,
  };
  if (output.ConnectionState !== undefined) {
    contents.ConnectionState = output.ConnectionState;
  }
  if (output.ConnectionStateCheckTimestamp !== undefined) {
    contents.ConnectionStateCheckTimestamp = new Date(output.ConnectionStateCheckTimestamp % 1 != 0 ? Math.round(output.ConnectionStateCheckTimestamp * 1000) : output.ConnectionStateCheckTimestamp);
  }
  if (output.LastKnownUserConnectionTimestamp !== undefined) {
    contents.LastKnownUserConnectionTimestamp = new Date(output.LastKnownUserConnectionTimestamp % 1 != 0 ? Math.round(output.LastKnownUserConnectionTimestamp * 1000) : output.LastKnownUserConnectionTimestamp);
  }
  if (output.WorkspaceId !== undefined) {
    contents.WorkspaceId = output.WorkspaceId;
  }
  return contents;
}

const deserializeAws_json1_1WorkspaceConnectionStatusList = (
  output: any,
  context: __SerdeContext
): Array<WorkspaceConnectionStatus> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1WorkspaceConnectionStatus(entry, context)
  );
}

const deserializeAws_json1_1WorkspaceDirectory = (
  output: any,
  context: __SerdeContext
): WorkspaceDirectory => {
  let contents: any = {
    __type: "WorkspaceDirectory",
    Alias: undefined,
    CustomerUserName: undefined,
    DirectoryId: undefined,
    DirectoryName: undefined,
    DirectoryType: undefined,
    DnsIpAddresses: undefined,
    IamRoleId: undefined,
    RegistrationCode: undefined,
    SelfservicePermissions: undefined,
    State: undefined,
    SubnetIds: undefined,
    Tenancy: undefined,
    WorkspaceAccessProperties: undefined,
    WorkspaceCreationProperties: undefined,
    WorkspaceSecurityGroupId: undefined,
    ipGroupIds: undefined,
  };
  if (output.Alias !== undefined) {
    contents.Alias = output.Alias;
  }
  if (output.CustomerUserName !== undefined) {
    contents.CustomerUserName = output.CustomerUserName;
  }
  if (output.DirectoryId !== undefined) {
    contents.DirectoryId = output.DirectoryId;
  }
  if (output.DirectoryName !== undefined) {
    contents.DirectoryName = output.DirectoryName;
  }
  if (output.DirectoryType !== undefined) {
    contents.DirectoryType = output.DirectoryType;
  }
  if (output.DnsIpAddresses !== undefined) {
    contents.DnsIpAddresses = deserializeAws_json1_1DnsIpAddresses(output.DnsIpAddresses, context);
  }
  if (output.IamRoleId !== undefined) {
    contents.IamRoleId = output.IamRoleId;
  }
  if (output.RegistrationCode !== undefined) {
    contents.RegistrationCode = output.RegistrationCode;
  }
  if (output.SelfservicePermissions !== undefined) {
    contents.SelfservicePermissions = deserializeAws_json1_1SelfservicePermissions(output.SelfservicePermissions, context);
  }
  if (output.State !== undefined) {
    contents.State = output.State;
  }
  if (output.SubnetIds !== undefined) {
    contents.SubnetIds = deserializeAws_json1_1SubnetIds(output.SubnetIds, context);
  }
  if (output.Tenancy !== undefined) {
    contents.Tenancy = output.Tenancy;
  }
  if (output.WorkspaceAccessProperties !== undefined) {
    contents.WorkspaceAccessProperties = deserializeAws_json1_1WorkspaceAccessProperties(output.WorkspaceAccessProperties, context);
  }
  if (output.WorkspaceCreationProperties !== undefined) {
    contents.WorkspaceCreationProperties = deserializeAws_json1_1DefaultWorkspaceCreationProperties(output.WorkspaceCreationProperties, context);
  }
  if (output.WorkspaceSecurityGroupId !== undefined) {
    contents.WorkspaceSecurityGroupId = output.WorkspaceSecurityGroupId;
  }
  if (output.ipGroupIds !== undefined) {
    contents.ipGroupIds = deserializeAws_json1_1IpGroupIdList(output.ipGroupIds, context);
  }
  return contents;
}

const deserializeAws_json1_1WorkspaceImage = (
  output: any,
  context: __SerdeContext
): WorkspaceImage => {
  let contents: any = {
    __type: "WorkspaceImage",
    Description: undefined,
    ErrorCode: undefined,
    ErrorMessage: undefined,
    ImageId: undefined,
    Name: undefined,
    OperatingSystem: undefined,
    RequiredTenancy: undefined,
    State: undefined,
  };
  if (output.Description !== undefined) {
    contents.Description = output.Description;
  }
  if (output.ErrorCode !== undefined) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.ErrorMessage !== undefined) {
    contents.ErrorMessage = output.ErrorMessage;
  }
  if (output.ImageId !== undefined) {
    contents.ImageId = output.ImageId;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.OperatingSystem !== undefined) {
    contents.OperatingSystem = deserializeAws_json1_1OperatingSystem(output.OperatingSystem, context);
  }
  if (output.RequiredTenancy !== undefined) {
    contents.RequiredTenancy = output.RequiredTenancy;
  }
  if (output.State !== undefined) {
    contents.State = output.State;
  }
  return contents;
}

const deserializeAws_json1_1WorkspaceImageList = (
  output: any,
  context: __SerdeContext
): Array<WorkspaceImage> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1WorkspaceImage(entry, context)
  );
}

const deserializeAws_json1_1WorkspaceList = (
  output: any,
  context: __SerdeContext
): Array<Workspace> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Workspace(entry, context)
  );
}

const deserializeAws_json1_1WorkspaceProperties = (
  output: any,
  context: __SerdeContext
): WorkspaceProperties => {
  let contents: any = {
    __type: "WorkspaceProperties",
    ComputeTypeName: undefined,
    RootVolumeSizeGib: undefined,
    RunningMode: undefined,
    RunningModeAutoStopTimeoutInMinutes: undefined,
    UserVolumeSizeGib: undefined,
  };
  if (output.ComputeTypeName !== undefined) {
    contents.ComputeTypeName = output.ComputeTypeName;
  }
  if (output.RootVolumeSizeGib !== undefined) {
    contents.RootVolumeSizeGib = output.RootVolumeSizeGib;
  }
  if (output.RunningMode !== undefined) {
    contents.RunningMode = output.RunningMode;
  }
  if (output.RunningModeAutoStopTimeoutInMinutes !== undefined) {
    contents.RunningModeAutoStopTimeoutInMinutes = output.RunningModeAutoStopTimeoutInMinutes;
  }
  if (output.UserVolumeSizeGib !== undefined) {
    contents.UserVolumeSizeGib = output.UserVolumeSizeGib;
  }
  return contents;
}

const deserializeAws_json1_1WorkspaceRequest = (
  output: any,
  context: __SerdeContext
): WorkspaceRequest => {
  let contents: any = {
    __type: "WorkspaceRequest",
    BundleId: undefined,
    DirectoryId: undefined,
    RootVolumeEncryptionEnabled: undefined,
    Tags: undefined,
    UserName: undefined,
    UserVolumeEncryptionEnabled: undefined,
    VolumeEncryptionKey: undefined,
    WorkspaceProperties: undefined,
  };
  if (output.BundleId !== undefined) {
    contents.BundleId = output.BundleId;
  }
  if (output.DirectoryId !== undefined) {
    contents.DirectoryId = output.DirectoryId;
  }
  if (output.RootVolumeEncryptionEnabled !== undefined) {
    contents.RootVolumeEncryptionEnabled = output.RootVolumeEncryptionEnabled;
  }
  if (output.Tags !== undefined) {
    contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
  }
  if (output.UserName !== undefined) {
    contents.UserName = output.UserName;
  }
  if (output.UserVolumeEncryptionEnabled !== undefined) {
    contents.UserVolumeEncryptionEnabled = output.UserVolumeEncryptionEnabled;
  }
  if (output.VolumeEncryptionKey !== undefined) {
    contents.VolumeEncryptionKey = output.VolumeEncryptionKey;
  }
  if (output.WorkspaceProperties !== undefined) {
    contents.WorkspaceProperties = deserializeAws_json1_1WorkspaceProperties(output.WorkspaceProperties, context);
  }
  return contents;
}

const deserializeAws_json1_1WorkspacesDefaultRoleNotFoundException = (
  output: any,
  context: __SerdeContext
): WorkspacesDefaultRoleNotFoundException => {
  let contents: any = {
    __type: "WorkspacesDefaultRoleNotFoundException",
    message: undefined,
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
}

const deserializeAws_json1_1WorkspacesIpGroup = (
  output: any,
  context: __SerdeContext
): WorkspacesIpGroup => {
  let contents: any = {
    __type: "WorkspacesIpGroup",
    groupDesc: undefined,
    groupId: undefined,
    groupName: undefined,
    userRules: undefined,
  };
  if (output.groupDesc !== undefined) {
    contents.groupDesc = output.groupDesc;
  }
  if (output.groupId !== undefined) {
    contents.groupId = output.groupId;
  }
  if (output.groupName !== undefined) {
    contents.groupName = output.groupName;
  }
  if (output.userRules !== undefined) {
    contents.userRules = deserializeAws_json1_1IpRuleList(output.userRules, context);
  }
  return contents;
}

const deserializeAws_json1_1WorkspacesIpGroupsList = (
  output: any,
  context: __SerdeContext
): Array<WorkspacesIpGroup> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1WorkspacesIpGroup(entry, context)
  );
}

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return context.streamCollector(streamBody).then((body: any) => {
    const encoded = context.utf8Encoder(body);
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
