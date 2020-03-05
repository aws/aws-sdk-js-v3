import {
  AssociateIpGroupsCommandInput,
  AssociateIpGroupsCommandOutput
} from "../commands/AssociateIpGroupsCommand";
import {
  AuthorizeIpRulesCommandInput,
  AuthorizeIpRulesCommandOutput
} from "../commands/AuthorizeIpRulesCommand";
import {
  CopyWorkspaceImageCommandInput,
  CopyWorkspaceImageCommandOutput
} from "../commands/CopyWorkspaceImageCommand";
import {
  CreateIpGroupCommandInput,
  CreateIpGroupCommandOutput
} from "../commands/CreateIpGroupCommand";
import {
  CreateTagsCommandInput,
  CreateTagsCommandOutput
} from "../commands/CreateTagsCommand";
import {
  CreateWorkspacesCommandInput,
  CreateWorkspacesCommandOutput
} from "../commands/CreateWorkspacesCommand";
import {
  DeleteIpGroupCommandInput,
  DeleteIpGroupCommandOutput
} from "../commands/DeleteIpGroupCommand";
import {
  DeleteTagsCommandInput,
  DeleteTagsCommandOutput
} from "../commands/DeleteTagsCommand";
import {
  DeleteWorkspaceImageCommandInput,
  DeleteWorkspaceImageCommandOutput
} from "../commands/DeleteWorkspaceImageCommand";
import {
  DeregisterWorkspaceDirectoryCommandInput,
  DeregisterWorkspaceDirectoryCommandOutput
} from "../commands/DeregisterWorkspaceDirectoryCommand";
import {
  DescribeAccountCommandInput,
  DescribeAccountCommandOutput
} from "../commands/DescribeAccountCommand";
import {
  DescribeAccountModificationsCommandInput,
  DescribeAccountModificationsCommandOutput
} from "../commands/DescribeAccountModificationsCommand";
import {
  DescribeClientPropertiesCommandInput,
  DescribeClientPropertiesCommandOutput
} from "../commands/DescribeClientPropertiesCommand";
import {
  DescribeIpGroupsCommandInput,
  DescribeIpGroupsCommandOutput
} from "../commands/DescribeIpGroupsCommand";
import {
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput
} from "../commands/DescribeTagsCommand";
import {
  DescribeWorkspaceBundlesCommandInput,
  DescribeWorkspaceBundlesCommandOutput
} from "../commands/DescribeWorkspaceBundlesCommand";
import {
  DescribeWorkspaceDirectoriesCommandInput,
  DescribeWorkspaceDirectoriesCommandOutput
} from "../commands/DescribeWorkspaceDirectoriesCommand";
import {
  DescribeWorkspaceImagesCommandInput,
  DescribeWorkspaceImagesCommandOutput
} from "../commands/DescribeWorkspaceImagesCommand";
import {
  DescribeWorkspaceSnapshotsCommandInput,
  DescribeWorkspaceSnapshotsCommandOutput
} from "../commands/DescribeWorkspaceSnapshotsCommand";
import {
  DescribeWorkspacesCommandInput,
  DescribeWorkspacesCommandOutput
} from "../commands/DescribeWorkspacesCommand";
import {
  DescribeWorkspacesConnectionStatusCommandInput,
  DescribeWorkspacesConnectionStatusCommandOutput
} from "../commands/DescribeWorkspacesConnectionStatusCommand";
import {
  DisassociateIpGroupsCommandInput,
  DisassociateIpGroupsCommandOutput
} from "../commands/DisassociateIpGroupsCommand";
import {
  ImportWorkspaceImageCommandInput,
  ImportWorkspaceImageCommandOutput
} from "../commands/ImportWorkspaceImageCommand";
import {
  ListAvailableManagementCidrRangesCommandInput,
  ListAvailableManagementCidrRangesCommandOutput
} from "../commands/ListAvailableManagementCidrRangesCommand";
import {
  MigrateWorkspaceCommandInput,
  MigrateWorkspaceCommandOutput
} from "../commands/MigrateWorkspaceCommand";
import {
  ModifyAccountCommandInput,
  ModifyAccountCommandOutput
} from "../commands/ModifyAccountCommand";
import {
  ModifyClientPropertiesCommandInput,
  ModifyClientPropertiesCommandOutput
} from "../commands/ModifyClientPropertiesCommand";
import {
  ModifySelfservicePermissionsCommandInput,
  ModifySelfservicePermissionsCommandOutput
} from "../commands/ModifySelfservicePermissionsCommand";
import {
  ModifyWorkspaceAccessPropertiesCommandInput,
  ModifyWorkspaceAccessPropertiesCommandOutput
} from "../commands/ModifyWorkspaceAccessPropertiesCommand";
import {
  ModifyWorkspaceCreationPropertiesCommandInput,
  ModifyWorkspaceCreationPropertiesCommandOutput
} from "../commands/ModifyWorkspaceCreationPropertiesCommand";
import {
  ModifyWorkspacePropertiesCommandInput,
  ModifyWorkspacePropertiesCommandOutput
} from "../commands/ModifyWorkspacePropertiesCommand";
import {
  ModifyWorkspaceStateCommandInput,
  ModifyWorkspaceStateCommandOutput
} from "../commands/ModifyWorkspaceStateCommand";
import {
  RebootWorkspacesCommandInput,
  RebootWorkspacesCommandOutput
} from "../commands/RebootWorkspacesCommand";
import {
  RebuildWorkspacesCommandInput,
  RebuildWorkspacesCommandOutput
} from "../commands/RebuildWorkspacesCommand";
import {
  RegisterWorkspaceDirectoryCommandInput,
  RegisterWorkspaceDirectoryCommandOutput
} from "../commands/RegisterWorkspaceDirectoryCommand";
import {
  RestoreWorkspaceCommandInput,
  RestoreWorkspaceCommandOutput
} from "../commands/RestoreWorkspaceCommand";
import {
  RevokeIpRulesCommandInput,
  RevokeIpRulesCommandOutput
} from "../commands/RevokeIpRulesCommand";
import {
  StartWorkspacesCommandInput,
  StartWorkspacesCommandOutput
} from "../commands/StartWorkspacesCommand";
import {
  StopWorkspacesCommandInput,
  StopWorkspacesCommandOutput
} from "../commands/StopWorkspacesCommand";
import {
  TerminateWorkspacesCommandInput,
  TerminateWorkspacesCommandOutput
} from "../commands/TerminateWorkspacesCommand";
import {
  UpdateRulesOfIpGroupCommandInput,
  UpdateRulesOfIpGroupCommandOutput
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
  WorkspacesIpGroup
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_1AssociateIpGroupsCommand(
  input: AssociateIpGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkspacesService.AssociateIpGroups";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AssociateIpGroupsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1AuthorizeIpRulesCommand(
  input: AuthorizeIpRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkspacesService.AuthorizeIpRules";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AuthorizeIpRulesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CopyWorkspaceImageCommand(
  input: CopyWorkspaceImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkspacesService.CopyWorkspaceImage";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CopyWorkspaceImageRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateIpGroupCommand(
  input: CreateIpGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkspacesService.CreateIpGroup";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateIpGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateTagsCommand(
  input: CreateTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkspacesService.CreateTags";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateWorkspacesCommand(
  input: CreateWorkspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkspacesService.CreateWorkspaces";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateWorkspacesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteIpGroupCommand(
  input: DeleteIpGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkspacesService.DeleteIpGroup";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteIpGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteTagsCommand(
  input: DeleteTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkspacesService.DeleteTags";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteWorkspaceImageCommand(
  input: DeleteWorkspaceImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkspacesService.DeleteWorkspaceImage";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteWorkspaceImageRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeregisterWorkspaceDirectoryCommand(
  input: DeregisterWorkspaceDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkspacesService.DeregisterWorkspaceDirectory";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeregisterWorkspaceDirectoryRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeAccountCommand(
  input: DescribeAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkspacesService.DescribeAccount";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeAccountRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeAccountModificationsCommand(
  input: DescribeAccountModificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkspacesService.DescribeAccountModifications";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeAccountModificationsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeClientPropertiesCommand(
  input: DescribeClientPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkspacesService.DescribeClientProperties";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeClientPropertiesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeIpGroupsCommand(
  input: DescribeIpGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkspacesService.DescribeIpGroups";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeIpGroupsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeTagsCommand(
  input: DescribeTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkspacesService.DescribeTags";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeTagsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeWorkspaceBundlesCommand(
  input: DescribeWorkspaceBundlesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkspacesService.DescribeWorkspaceBundles";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeWorkspaceBundlesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeWorkspaceDirectoriesCommand(
  input: DescribeWorkspaceDirectoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkspacesService.DescribeWorkspaceDirectories";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeWorkspaceDirectoriesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeWorkspaceImagesCommand(
  input: DescribeWorkspaceImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkspacesService.DescribeWorkspaceImages";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeWorkspaceImagesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeWorkspaceSnapshotsCommand(
  input: DescribeWorkspaceSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkspacesService.DescribeWorkspaceSnapshots";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeWorkspaceSnapshotsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeWorkspacesCommand(
  input: DescribeWorkspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkspacesService.DescribeWorkspaces";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeWorkspacesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeWorkspacesConnectionStatusCommand(
  input: DescribeWorkspacesConnectionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "WorkspacesService.DescribeWorkspacesConnectionStatus";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeWorkspacesConnectionStatusRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DisassociateIpGroupsCommand(
  input: DisassociateIpGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkspacesService.DisassociateIpGroups";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DisassociateIpGroupsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ImportWorkspaceImageCommand(
  input: ImportWorkspaceImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkspacesService.ImportWorkspaceImage";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ImportWorkspaceImageRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListAvailableManagementCidrRangesCommand(
  input: ListAvailableManagementCidrRangesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "WorkspacesService.ListAvailableManagementCidrRanges";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListAvailableManagementCidrRangesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1MigrateWorkspaceCommand(
  input: MigrateWorkspaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkspacesService.MigrateWorkspace";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1MigrateWorkspaceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ModifyAccountCommand(
  input: ModifyAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkspacesService.ModifyAccount";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ModifyAccountRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ModifyClientPropertiesCommand(
  input: ModifyClientPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkspacesService.ModifyClientProperties";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ModifyClientPropertiesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ModifySelfservicePermissionsCommand(
  input: ModifySelfservicePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkspacesService.ModifySelfservicePermissions";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ModifySelfservicePermissionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ModifyWorkspaceAccessPropertiesCommand(
  input: ModifyWorkspaceAccessPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkspacesService.ModifyWorkspaceAccessProperties";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ModifyWorkspaceAccessPropertiesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ModifyWorkspaceCreationPropertiesCommand(
  input: ModifyWorkspaceCreationPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "WorkspacesService.ModifyWorkspaceCreationProperties";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ModifyWorkspaceCreationPropertiesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ModifyWorkspacePropertiesCommand(
  input: ModifyWorkspacePropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkspacesService.ModifyWorkspaceProperties";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ModifyWorkspacePropertiesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ModifyWorkspaceStateCommand(
  input: ModifyWorkspaceStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkspacesService.ModifyWorkspaceState";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ModifyWorkspaceStateRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1RebootWorkspacesCommand(
  input: RebootWorkspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkspacesService.RebootWorkspaces";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RebootWorkspacesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1RebuildWorkspacesCommand(
  input: RebuildWorkspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkspacesService.RebuildWorkspaces";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RebuildWorkspacesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1RegisterWorkspaceDirectoryCommand(
  input: RegisterWorkspaceDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkspacesService.RegisterWorkspaceDirectory";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RegisterWorkspaceDirectoryRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1RestoreWorkspaceCommand(
  input: RestoreWorkspaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkspacesService.RestoreWorkspace";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RestoreWorkspaceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1RevokeIpRulesCommand(
  input: RevokeIpRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkspacesService.RevokeIpRules";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RevokeIpRulesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StartWorkspacesCommand(
  input: StartWorkspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkspacesService.StartWorkspaces";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StartWorkspacesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StopWorkspacesCommand(
  input: StopWorkspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkspacesService.StopWorkspaces";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StopWorkspacesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1TerminateWorkspacesCommand(
  input: TerminateWorkspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkspacesService.TerminateWorkspaces";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1TerminateWorkspacesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateRulesOfIpGroupCommand(
  input: UpdateRulesOfIpGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkspacesService.UpdateRulesOfIpGroup";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateRulesOfIpGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1AssociateIpGroupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateIpGroupsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AssociateIpGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateIpGroupsResult(data, context);
  const response: AssociateIpGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AssociateIpGroupsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1AssociateIpGroupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateIpGroupsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1AuthorizeIpRulesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AuthorizeIpRulesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AuthorizeIpRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AuthorizeIpRulesResult(data, context);
  const response: AuthorizeIpRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AuthorizeIpRulesResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1AuthorizeIpRulesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AuthorizeIpRulesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1CopyWorkspaceImageCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyWorkspaceImageCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CopyWorkspaceImageCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CopyWorkspaceImageResult(data, context);
  const response: CopyWorkspaceImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CopyWorkspaceImageResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CopyWorkspaceImageCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyWorkspaceImageCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.workspaces#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.workspaces#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1CreateIpGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIpGroupCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateIpGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateIpGroupResult(data, context);
  const response: CreateIpGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateIpGroupResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateIpGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIpGroupCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.workspaces#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceCreationFailedException":
    case "com.amazonaws.workspaces#ResourceCreationFailedException":
      response = {
        ...(await deserializeAws_json1_1ResourceCreationFailedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1CreateTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateTagsResult(data, context);
  const response: CreateTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateTagsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1CreateWorkspacesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkspacesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateWorkspacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateWorkspacesResult(data, context);
  const response: CreateWorkspacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateWorkspacesResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateWorkspacesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkspacesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DeleteIpGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIpGroupCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteIpGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteIpGroupResult(data, context);
  const response: DeleteIpGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteIpGroupResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteIpGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIpGroupCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAssociatedException":
    case "com.amazonaws.workspaces#ResourceAssociatedException":
      response = {
        ...(await deserializeAws_json1_1ResourceAssociatedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DeleteTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteTagsResult(data, context);
  const response: DeleteTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteTagsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DeleteWorkspaceImageCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkspaceImageCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteWorkspaceImageCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteWorkspaceImageResult(data, context);
  const response: DeleteWorkspaceImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteWorkspaceImageResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteWorkspaceImageCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkspaceImageCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAssociatedException":
    case "com.amazonaws.workspaces#ResourceAssociatedException":
      response = {
        ...(await deserializeAws_json1_1ResourceAssociatedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DeregisterWorkspaceDirectoryCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterWorkspaceDirectoryCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeregisterWorkspaceDirectoryCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeregisterWorkspaceDirectoryResult(
    data,
    context
  );
  const response: DeregisterWorkspaceDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeregisterWorkspaceDirectoryResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeregisterWorkspaceDirectoryCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterWorkspaceDirectoryCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DescribeAccountCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeAccountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAccountResult(data, context);
  const response: DescribeAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeAccountResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeAccountCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DescribeAccountModificationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountModificationsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeAccountModificationsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAccountModificationsResult(
    data,
    context
  );
  const response: DescribeAccountModificationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeAccountModificationsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeAccountModificationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountModificationsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DescribeClientPropertiesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClientPropertiesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeClientPropertiesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeClientPropertiesResult(
    data,
    context
  );
  const response: DescribeClientPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeClientPropertiesResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeClientPropertiesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClientPropertiesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DescribeIpGroupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIpGroupsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeIpGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeIpGroupsResult(data, context);
  const response: DescribeIpGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeIpGroupsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeIpGroupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIpGroupsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DescribeTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTagsResult(data, context);
  const response: DescribeTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeTagsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DescribeWorkspaceBundlesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspaceBundlesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeWorkspaceBundlesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeWorkspaceBundlesResult(
    data,
    context
  );
  const response: DescribeWorkspaceBundlesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeWorkspaceBundlesResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeWorkspaceBundlesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspaceBundlesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DescribeWorkspaceDirectoriesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspaceDirectoriesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeWorkspaceDirectoriesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeWorkspaceDirectoriesResult(
    data,
    context
  );
  const response: DescribeWorkspaceDirectoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeWorkspaceDirectoriesResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeWorkspaceDirectoriesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspaceDirectoriesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DescribeWorkspaceImagesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspaceImagesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeWorkspaceImagesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeWorkspaceImagesResult(data, context);
  const response: DescribeWorkspaceImagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeWorkspaceImagesResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeWorkspaceImagesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspaceImagesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DescribeWorkspaceSnapshotsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspaceSnapshotsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeWorkspaceSnapshotsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeWorkspaceSnapshotsResult(
    data,
    context
  );
  const response: DescribeWorkspaceSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeWorkspaceSnapshotsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeWorkspaceSnapshotsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspaceSnapshotsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DescribeWorkspacesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspacesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeWorkspacesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeWorkspacesResult(data, context);
  const response: DescribeWorkspacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeWorkspacesResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeWorkspacesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspacesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.workspaces#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DescribeWorkspacesConnectionStatusCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspacesConnectionStatusCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeWorkspacesConnectionStatusCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeWorkspacesConnectionStatusResult(
    data,
    context
  );
  const response: DescribeWorkspacesConnectionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeWorkspacesConnectionStatusResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeWorkspacesConnectionStatusCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspacesConnectionStatusCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DisassociateIpGroupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateIpGroupsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisassociateIpGroupsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateIpGroupsResult(data, context);
  const response: DisassociateIpGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisassociateIpGroupsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DisassociateIpGroupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateIpGroupsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1ImportWorkspaceImageCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportWorkspaceImageCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ImportWorkspaceImageCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ImportWorkspaceImageResult(data, context);
  const response: ImportWorkspaceImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ImportWorkspaceImageResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ImportWorkspaceImageCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportWorkspaceImageCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.workspaces#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1ListAvailableManagementCidrRangesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableManagementCidrRangesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListAvailableManagementCidrRangesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAvailableManagementCidrRangesResult(
    data,
    context
  );
  const response: ListAvailableManagementCidrRangesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAvailableManagementCidrRangesResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListAvailableManagementCidrRangesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableManagementCidrRangesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1MigrateWorkspaceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MigrateWorkspaceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1MigrateWorkspaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1MigrateWorkspaceResult(data, context);
  const response: MigrateWorkspaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "MigrateWorkspaceResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1MigrateWorkspaceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MigrateWorkspaceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationInProgressException":
    case "com.amazonaws.workspaces#OperationInProgressException":
      response = {
        ...(await deserializeAws_json1_1OperationInProgressExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.workspaces#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1ModifyAccountCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyAccountCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ModifyAccountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ModifyAccountResult(data, context);
  const response: ModifyAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ModifyAccountResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ModifyAccountCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyAccountCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.workspaces#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1ModifyClientPropertiesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClientPropertiesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ModifyClientPropertiesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ModifyClientPropertiesResult(data, context);
  const response: ModifyClientPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ModifyClientPropertiesResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ModifyClientPropertiesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClientPropertiesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1ModifySelfservicePermissionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifySelfservicePermissionsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ModifySelfservicePermissionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ModifySelfservicePermissionsResult(
    data,
    context
  );
  const response: ModifySelfservicePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ModifySelfservicePermissionsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ModifySelfservicePermissionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifySelfservicePermissionsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1ModifyWorkspaceAccessPropertiesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyWorkspaceAccessPropertiesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ModifyWorkspaceAccessPropertiesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ModifyWorkspaceAccessPropertiesResult(
    data,
    context
  );
  const response: ModifyWorkspaceAccessPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ModifyWorkspaceAccessPropertiesResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ModifyWorkspaceAccessPropertiesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyWorkspaceAccessPropertiesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1ModifyWorkspaceCreationPropertiesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyWorkspaceCreationPropertiesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ModifyWorkspaceCreationPropertiesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ModifyWorkspaceCreationPropertiesResult(
    data,
    context
  );
  const response: ModifyWorkspaceCreationPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ModifyWorkspaceCreationPropertiesResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ModifyWorkspaceCreationPropertiesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyWorkspaceCreationPropertiesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1ModifyWorkspacePropertiesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyWorkspacePropertiesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ModifyWorkspacePropertiesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ModifyWorkspacePropertiesResult(
    data,
    context
  );
  const response: ModifyWorkspacePropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ModifyWorkspacePropertiesResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ModifyWorkspacePropertiesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyWorkspacePropertiesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationInProgressException":
    case "com.amazonaws.workspaces#OperationInProgressException":
      response = {
        ...(await deserializeAws_json1_1OperationInProgressExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.workspaces#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedWorkspaceConfigurationException":
    case "com.amazonaws.workspaces#UnsupportedWorkspaceConfigurationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedWorkspaceConfigurationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1ModifyWorkspaceStateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyWorkspaceStateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ModifyWorkspaceStateCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ModifyWorkspaceStateResult(data, context);
  const response: ModifyWorkspaceStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ModifyWorkspaceStateResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ModifyWorkspaceStateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyWorkspaceStateCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1RebootWorkspacesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootWorkspacesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RebootWorkspacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RebootWorkspacesResult(data, context);
  const response: RebootWorkspacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RebootWorkspacesResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RebootWorkspacesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootWorkspacesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1RebuildWorkspacesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebuildWorkspacesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RebuildWorkspacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RebuildWorkspacesResult(data, context);
  const response: RebuildWorkspacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RebuildWorkspacesResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RebuildWorkspacesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebuildWorkspacesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1RegisterWorkspaceDirectoryCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterWorkspaceDirectoryCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RegisterWorkspaceDirectoryCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterWorkspaceDirectoryResult(
    data,
    context
  );
  const response: RegisterWorkspaceDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RegisterWorkspaceDirectoryResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RegisterWorkspaceDirectoryCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterWorkspaceDirectoryCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotSupportedException":
    case "com.amazonaws.workspaces#OperationNotSupportedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedNetworkConfigurationException":
    case "com.amazonaws.workspaces#UnsupportedNetworkConfigurationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedNetworkConfigurationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WorkspacesDefaultRoleNotFoundException":
    case "com.amazonaws.workspaces#WorkspacesDefaultRoleNotFoundException":
      response = {
        ...(await deserializeAws_json1_1WorkspacesDefaultRoleNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1RestoreWorkspaceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreWorkspaceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RestoreWorkspaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RestoreWorkspaceResult(data, context);
  const response: RestoreWorkspaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RestoreWorkspaceResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RestoreWorkspaceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreWorkspaceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1RevokeIpRulesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeIpRulesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RevokeIpRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RevokeIpRulesResult(data, context);
  const response: RevokeIpRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RevokeIpRulesResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RevokeIpRulesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeIpRulesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1StartWorkspacesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartWorkspacesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartWorkspacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartWorkspacesResult(data, context);
  const response: StartWorkspacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartWorkspacesResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StartWorkspacesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartWorkspacesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1StopWorkspacesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopWorkspacesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopWorkspacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopWorkspacesResult(data, context);
  const response: StopWorkspacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopWorkspacesResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StopWorkspacesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopWorkspacesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1TerminateWorkspacesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateWorkspacesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TerminateWorkspacesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TerminateWorkspacesResult(data, context);
  const response: TerminateWorkspacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TerminateWorkspacesResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1TerminateWorkspacesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateWorkspacesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1UpdateRulesOfIpGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRulesOfIpGroupCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateRulesOfIpGroupCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateRulesOfIpGroupResult(data, context);
  const response: UpdateRulesOfIpGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateRulesOfIpGroupResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateRulesOfIpGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRulesOfIpGroupCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspaces#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValuesException":
    case "com.amazonaws.workspaces#InvalidParameterValuesException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.workspaces#InvalidResourceStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.workspaces#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workspaces#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(
    body,
    context
  );
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterValuesExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValuesException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterValuesException(
    body,
    context
  );
  const contents: InvalidParameterValuesException = {
    name: "InvalidParameterValuesException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidResourceStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidResourceStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidResourceStateException(
    body,
    context
  );
  const contents: InvalidResourceStateException = {
    name: "InvalidResourceStateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1OperationInProgressExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationInProgressException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OperationInProgressException(
    body,
    context
  );
  const contents: OperationInProgressException = {
    name: "OperationInProgressException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1OperationNotSupportedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationNotSupportedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OperationNotSupportedException(
    body,
    context
  );
  const contents: OperationNotSupportedException = {
    name: "OperationNotSupportedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceAlreadyExistsException(
    body,
    context
  );
  const contents: ResourceAlreadyExistsException = {
    name: "ResourceAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceAssociatedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAssociatedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceAssociatedException(
    body,
    context
  );
  const contents: ResourceAssociatedException = {
    name: "ResourceAssociatedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceCreationFailedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceCreationFailedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceCreationFailedException(
    body,
    context
  );
  const contents: ResourceCreationFailedException = {
    name: "ResourceCreationFailedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceLimitExceededException(
    body,
    context
  );
  const contents: ResourceLimitExceededException = {
    name: "ResourceLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(
    body,
    context
  );
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceUnavailableException(
    body,
    context
  );
  const contents: ResourceUnavailableException = {
    name: "ResourceUnavailableException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1UnsupportedNetworkConfigurationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedNetworkConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedNetworkConfigurationException(
    body,
    context
  );
  const contents: UnsupportedNetworkConfigurationException = {
    name: "UnsupportedNetworkConfigurationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1UnsupportedWorkspaceConfigurationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedWorkspaceConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedWorkspaceConfigurationException(
    body,
    context
  );
  const contents: UnsupportedWorkspaceConfigurationException = {
    name: "UnsupportedWorkspaceConfigurationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1WorkspacesDefaultRoleNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WorkspacesDefaultRoleNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1WorkspacesDefaultRoleNotFoundException(
    body,
    context
  );
  const contents: WorkspacesDefaultRoleNotFoundException = {
    name: "WorkspacesDefaultRoleNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1AssociateIpGroupsRequest = (
  input: AssociateIpGroupsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DirectoryId !== undefined) {
    bodyParams["DirectoryId"] = input.DirectoryId;
  }
  if (input.GroupIds !== undefined) {
    bodyParams["GroupIds"] = serializeAws_json1_1IpGroupIdList(
      input.GroupIds,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1AuthorizeIpRulesRequest = (
  input: AuthorizeIpRulesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GroupId !== undefined) {
    bodyParams["GroupId"] = input.GroupId;
  }
  if (input.UserRules !== undefined) {
    bodyParams["UserRules"] = serializeAws_json1_1IpRuleList(
      input.UserRules,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1BundleIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1ClientProperties = (
  input: ClientProperties,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ReconnectEnabled !== undefined) {
    bodyParams["ReconnectEnabled"] = input.ReconnectEnabled;
  }
  return bodyParams;
};

const serializeAws_json1_1CopyWorkspaceImageRequest = (
  input: CopyWorkspaceImageRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.SourceImageId !== undefined) {
    bodyParams["SourceImageId"] = input.SourceImageId;
  }
  if (input.SourceRegion !== undefined) {
    bodyParams["SourceRegion"] = input.SourceRegion;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1CreateIpGroupRequest = (
  input: CreateIpGroupRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GroupDesc !== undefined) {
    bodyParams["GroupDesc"] = input.GroupDesc;
  }
  if (input.GroupName !== undefined) {
    bodyParams["GroupName"] = input.GroupName;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
  }
  if (input.UserRules !== undefined) {
    bodyParams["UserRules"] = serializeAws_json1_1IpRuleList(
      input.UserRules,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1CreateTagsRequest = (
  input: CreateTagsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceId !== undefined) {
    bodyParams["ResourceId"] = input.ResourceId;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1CreateWorkspacesRequest = (
  input: CreateWorkspacesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Workspaces !== undefined) {
    bodyParams["Workspaces"] = serializeAws_json1_1WorkspaceRequestList(
      input.Workspaces,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteIpGroupRequest = (
  input: DeleteIpGroupRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GroupId !== undefined) {
    bodyParams["GroupId"] = input.GroupId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteTagsRequest = (
  input: DeleteTagsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceId !== undefined) {
    bodyParams["ResourceId"] = input.ResourceId;
  }
  if (input.TagKeys !== undefined) {
    bodyParams["TagKeys"] = serializeAws_json1_1TagKeyList(
      input.TagKeys,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteWorkspaceImageRequest = (
  input: DeleteWorkspaceImageRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ImageId !== undefined) {
    bodyParams["ImageId"] = input.ImageId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeregisterWorkspaceDirectoryRequest = (
  input: DeregisterWorkspaceDirectoryRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DirectoryId !== undefined) {
    bodyParams["DirectoryId"] = input.DirectoryId;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeAccountModificationsRequest = (
  input: DescribeAccountModificationsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeAccountRequest = (
  input: DescribeAccountRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_1DescribeClientPropertiesRequest = (
  input: DescribeClientPropertiesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceIds !== undefined) {
    bodyParams["ResourceIds"] = serializeAws_json1_1ResourceIdList(
      input.ResourceIds,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeIpGroupsRequest = (
  input: DescribeIpGroupsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GroupIds !== undefined) {
    bodyParams["GroupIds"] = serializeAws_json1_1IpGroupIdList(
      input.GroupIds,
      context
    );
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeTagsRequest = (
  input: DescribeTagsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceId !== undefined) {
    bodyParams["ResourceId"] = input.ResourceId;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeWorkspaceBundlesRequest = (
  input: DescribeWorkspaceBundlesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BundleIds !== undefined) {
    bodyParams["BundleIds"] = serializeAws_json1_1BundleIdList(
      input.BundleIds,
      context
    );
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.Owner !== undefined) {
    bodyParams["Owner"] = input.Owner;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeWorkspaceDirectoriesRequest = (
  input: DescribeWorkspaceDirectoriesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DirectoryIds !== undefined) {
    bodyParams["DirectoryIds"] = serializeAws_json1_1DirectoryIdList(
      input.DirectoryIds,
      context
    );
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeWorkspaceImagesRequest = (
  input: DescribeWorkspaceImagesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ImageIds !== undefined) {
    bodyParams["ImageIds"] = serializeAws_json1_1WorkspaceImageIdList(
      input.ImageIds,
      context
    );
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeWorkspaceSnapshotsRequest = (
  input: DescribeWorkspaceSnapshotsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.WorkspaceId !== undefined) {
    bodyParams["WorkspaceId"] = input.WorkspaceId;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeWorkspacesConnectionStatusRequest = (
  input: DescribeWorkspacesConnectionStatusRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.WorkspaceIds !== undefined) {
    bodyParams["WorkspaceIds"] = serializeAws_json1_1WorkspaceIdList(
      input.WorkspaceIds,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeWorkspacesRequest = (
  input: DescribeWorkspacesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BundleId !== undefined) {
    bodyParams["BundleId"] = input.BundleId;
  }
  if (input.DirectoryId !== undefined) {
    bodyParams["DirectoryId"] = input.DirectoryId;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.UserName !== undefined) {
    bodyParams["UserName"] = input.UserName;
  }
  if (input.WorkspaceIds !== undefined) {
    bodyParams["WorkspaceIds"] = serializeAws_json1_1WorkspaceIdList(
      input.WorkspaceIds,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DirectoryIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1DisassociateIpGroupsRequest = (
  input: DisassociateIpGroupsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DirectoryId !== undefined) {
    bodyParams["DirectoryId"] = input.DirectoryId;
  }
  if (input.GroupIds !== undefined) {
    bodyParams["GroupIds"] = serializeAws_json1_1IpGroupIdList(
      input.GroupIds,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ImportWorkspaceImageRequest = (
  input: ImportWorkspaceImageRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Ec2ImageId !== undefined) {
    bodyParams["Ec2ImageId"] = input.Ec2ImageId;
  }
  if (input.ImageDescription !== undefined) {
    bodyParams["ImageDescription"] = input.ImageDescription;
  }
  if (input.ImageName !== undefined) {
    bodyParams["ImageName"] = input.ImageName;
  }
  if (input.IngestionProcess !== undefined) {
    bodyParams["IngestionProcess"] = input.IngestionProcess;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1IpGroupIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1IpRevokedRuleList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1IpRuleItem = (
  input: IpRuleItem,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ipRule !== undefined) {
    bodyParams["ipRule"] = input.ipRule;
  }
  if (input.ruleDesc !== undefined) {
    bodyParams["ruleDesc"] = input.ruleDesc;
  }
  return bodyParams;
};

const serializeAws_json1_1IpRuleList = (
  input: Array<IpRuleItem>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1IpRuleItem(entry, context));
  }
  return contents;
};

const serializeAws_json1_1ListAvailableManagementCidrRangesRequest = (
  input: ListAvailableManagementCidrRangesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ManagementCidrRangeConstraint !== undefined) {
    bodyParams["ManagementCidrRangeConstraint"] =
      input.ManagementCidrRangeConstraint;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1MigrateWorkspaceRequest = (
  input: MigrateWorkspaceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BundleId !== undefined) {
    bodyParams["BundleId"] = input.BundleId;
  }
  if (input.SourceWorkspaceId !== undefined) {
    bodyParams["SourceWorkspaceId"] = input.SourceWorkspaceId;
  }
  return bodyParams;
};

const serializeAws_json1_1ModifyAccountRequest = (
  input: ModifyAccountRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DedicatedTenancyManagementCidrRange !== undefined) {
    bodyParams["DedicatedTenancyManagementCidrRange"] =
      input.DedicatedTenancyManagementCidrRange;
  }
  if (input.DedicatedTenancySupport !== undefined) {
    bodyParams["DedicatedTenancySupport"] = input.DedicatedTenancySupport;
  }
  return bodyParams;
};

const serializeAws_json1_1ModifyClientPropertiesRequest = (
  input: ModifyClientPropertiesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ClientProperties !== undefined) {
    bodyParams["ClientProperties"] = serializeAws_json1_1ClientProperties(
      input.ClientProperties,
      context
    );
  }
  if (input.ResourceId !== undefined) {
    bodyParams["ResourceId"] = input.ResourceId;
  }
  return bodyParams;
};

const serializeAws_json1_1ModifySelfservicePermissionsRequest = (
  input: ModifySelfservicePermissionsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceId !== undefined) {
    bodyParams["ResourceId"] = input.ResourceId;
  }
  if (input.SelfservicePermissions !== undefined) {
    bodyParams[
      "SelfservicePermissions"
    ] = serializeAws_json1_1SelfservicePermissions(
      input.SelfservicePermissions,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ModifyWorkspaceAccessPropertiesRequest = (
  input: ModifyWorkspaceAccessPropertiesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceId !== undefined) {
    bodyParams["ResourceId"] = input.ResourceId;
  }
  if (input.WorkspaceAccessProperties !== undefined) {
    bodyParams[
      "WorkspaceAccessProperties"
    ] = serializeAws_json1_1WorkspaceAccessProperties(
      input.WorkspaceAccessProperties,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ModifyWorkspaceCreationPropertiesRequest = (
  input: ModifyWorkspaceCreationPropertiesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceId !== undefined) {
    bodyParams["ResourceId"] = input.ResourceId;
  }
  if (input.WorkspaceCreationProperties !== undefined) {
    bodyParams[
      "WorkspaceCreationProperties"
    ] = serializeAws_json1_1WorkspaceCreationProperties(
      input.WorkspaceCreationProperties,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ModifyWorkspacePropertiesRequest = (
  input: ModifyWorkspacePropertiesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.WorkspaceId !== undefined) {
    bodyParams["WorkspaceId"] = input.WorkspaceId;
  }
  if (input.WorkspaceProperties !== undefined) {
    bodyParams["WorkspaceProperties"] = serializeAws_json1_1WorkspaceProperties(
      input.WorkspaceProperties,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ModifyWorkspaceStateRequest = (
  input: ModifyWorkspaceStateRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.WorkspaceId !== undefined) {
    bodyParams["WorkspaceId"] = input.WorkspaceId;
  }
  if (input.WorkspaceState !== undefined) {
    bodyParams["WorkspaceState"] = input.WorkspaceState;
  }
  return bodyParams;
};

const serializeAws_json1_1RebootRequest = (
  input: RebootRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.WorkspaceId !== undefined) {
    bodyParams["WorkspaceId"] = input.WorkspaceId;
  }
  return bodyParams;
};

const serializeAws_json1_1RebootWorkspaceRequests = (
  input: Array<RebootRequest>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1RebootRequest(entry, context));
  }
  return contents;
};

const serializeAws_json1_1RebootWorkspacesRequest = (
  input: RebootWorkspacesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.RebootWorkspaceRequests !== undefined) {
    bodyParams[
      "RebootWorkspaceRequests"
    ] = serializeAws_json1_1RebootWorkspaceRequests(
      input.RebootWorkspaceRequests,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1RebuildRequest = (
  input: RebuildRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.WorkspaceId !== undefined) {
    bodyParams["WorkspaceId"] = input.WorkspaceId;
  }
  return bodyParams;
};

const serializeAws_json1_1RebuildWorkspaceRequests = (
  input: Array<RebuildRequest>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1RebuildRequest(entry, context));
  }
  return contents;
};

const serializeAws_json1_1RebuildWorkspacesRequest = (
  input: RebuildWorkspacesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.RebuildWorkspaceRequests !== undefined) {
    bodyParams[
      "RebuildWorkspaceRequests"
    ] = serializeAws_json1_1RebuildWorkspaceRequests(
      input.RebuildWorkspaceRequests,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1RegisterWorkspaceDirectoryRequest = (
  input: RegisterWorkspaceDirectoryRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DirectoryId !== undefined) {
    bodyParams["DirectoryId"] = input.DirectoryId;
  }
  if (input.EnableSelfService !== undefined) {
    bodyParams["EnableSelfService"] = input.EnableSelfService;
  }
  if (input.EnableWorkDocs !== undefined) {
    bodyParams["EnableWorkDocs"] = input.EnableWorkDocs;
  }
  if (input.SubnetIds !== undefined) {
    bodyParams["SubnetIds"] = serializeAws_json1_1SubnetIds(
      input.SubnetIds,
      context
    );
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
  }
  if (input.Tenancy !== undefined) {
    bodyParams["Tenancy"] = input.Tenancy;
  }
  return bodyParams;
};

const serializeAws_json1_1ResourceIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1RestoreWorkspaceRequest = (
  input: RestoreWorkspaceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.WorkspaceId !== undefined) {
    bodyParams["WorkspaceId"] = input.WorkspaceId;
  }
  return bodyParams;
};

const serializeAws_json1_1RevokeIpRulesRequest = (
  input: RevokeIpRulesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GroupId !== undefined) {
    bodyParams["GroupId"] = input.GroupId;
  }
  if (input.UserRules !== undefined) {
    bodyParams["UserRules"] = serializeAws_json1_1IpRevokedRuleList(
      input.UserRules,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1SelfservicePermissions = (
  input: SelfservicePermissions,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ChangeComputeType !== undefined) {
    bodyParams["ChangeComputeType"] = input.ChangeComputeType;
  }
  if (input.IncreaseVolumeSize !== undefined) {
    bodyParams["IncreaseVolumeSize"] = input.IncreaseVolumeSize;
  }
  if (input.RebuildWorkspace !== undefined) {
    bodyParams["RebuildWorkspace"] = input.RebuildWorkspace;
  }
  if (input.RestartWorkspace !== undefined) {
    bodyParams["RestartWorkspace"] = input.RestartWorkspace;
  }
  if (input.SwitchRunningMode !== undefined) {
    bodyParams["SwitchRunningMode"] = input.SwitchRunningMode;
  }
  return bodyParams;
};

const serializeAws_json1_1StartRequest = (
  input: StartRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.WorkspaceId !== undefined) {
    bodyParams["WorkspaceId"] = input.WorkspaceId;
  }
  return bodyParams;
};

const serializeAws_json1_1StartWorkspaceRequests = (
  input: Array<StartRequest>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1StartRequest(entry, context));
  }
  return contents;
};

const serializeAws_json1_1StartWorkspacesRequest = (
  input: StartWorkspacesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.StartWorkspaceRequests !== undefined) {
    bodyParams[
      "StartWorkspaceRequests"
    ] = serializeAws_json1_1StartWorkspaceRequests(
      input.StartWorkspaceRequests,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1StopRequest = (
  input: StopRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.WorkspaceId !== undefined) {
    bodyParams["WorkspaceId"] = input.WorkspaceId;
  }
  return bodyParams;
};

const serializeAws_json1_1StopWorkspaceRequests = (
  input: Array<StopRequest>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1StopRequest(entry, context));
  }
  return contents;
};

const serializeAws_json1_1StopWorkspacesRequest = (
  input: StopWorkspacesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.StopWorkspaceRequests !== undefined) {
    bodyParams[
      "StopWorkspaceRequests"
    ] = serializeAws_json1_1StopWorkspaceRequests(
      input.StopWorkspaceRequests,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1SubnetIds = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  const bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_json1_1TagKeyList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1TagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Tag(entry, context));
  }
  return contents;
};

const serializeAws_json1_1TerminateRequest = (
  input: TerminateRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.WorkspaceId !== undefined) {
    bodyParams["WorkspaceId"] = input.WorkspaceId;
  }
  return bodyParams;
};

const serializeAws_json1_1TerminateWorkspaceRequests = (
  input: Array<TerminateRequest>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1TerminateRequest(entry, context));
  }
  return contents;
};

const serializeAws_json1_1TerminateWorkspacesRequest = (
  input: TerminateWorkspacesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.TerminateWorkspaceRequests !== undefined) {
    bodyParams[
      "TerminateWorkspaceRequests"
    ] = serializeAws_json1_1TerminateWorkspaceRequests(
      input.TerminateWorkspaceRequests,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateRulesOfIpGroupRequest = (
  input: UpdateRulesOfIpGroupRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GroupId !== undefined) {
    bodyParams["GroupId"] = input.GroupId;
  }
  if (input.UserRules !== undefined) {
    bodyParams["UserRules"] = serializeAws_json1_1IpRuleList(
      input.UserRules,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1WorkspaceAccessProperties = (
  input: WorkspaceAccessProperties,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DeviceTypeAndroid !== undefined) {
    bodyParams["DeviceTypeAndroid"] = input.DeviceTypeAndroid;
  }
  if (input.DeviceTypeChromeOs !== undefined) {
    bodyParams["DeviceTypeChromeOs"] = input.DeviceTypeChromeOs;
  }
  if (input.DeviceTypeIos !== undefined) {
    bodyParams["DeviceTypeIos"] = input.DeviceTypeIos;
  }
  if (input.DeviceTypeOsx !== undefined) {
    bodyParams["DeviceTypeOsx"] = input.DeviceTypeOsx;
  }
  if (input.DeviceTypeWeb !== undefined) {
    bodyParams["DeviceTypeWeb"] = input.DeviceTypeWeb;
  }
  if (input.DeviceTypeWindows !== undefined) {
    bodyParams["DeviceTypeWindows"] = input.DeviceTypeWindows;
  }
  if (input.DeviceTypeZeroClient !== undefined) {
    bodyParams["DeviceTypeZeroClient"] = input.DeviceTypeZeroClient;
  }
  return bodyParams;
};

const serializeAws_json1_1WorkspaceCreationProperties = (
  input: WorkspaceCreationProperties,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CustomSecurityGroupId !== undefined) {
    bodyParams["CustomSecurityGroupId"] = input.CustomSecurityGroupId;
  }
  if (input.DefaultOu !== undefined) {
    bodyParams["DefaultOu"] = input.DefaultOu;
  }
  if (input.EnableInternetAccess !== undefined) {
    bodyParams["EnableInternetAccess"] = input.EnableInternetAccess;
  }
  if (input.EnableMaintenanceMode !== undefined) {
    bodyParams["EnableMaintenanceMode"] = input.EnableMaintenanceMode;
  }
  if (input.UserEnabledAsLocalAdministrator !== undefined) {
    bodyParams["UserEnabledAsLocalAdministrator"] =
      input.UserEnabledAsLocalAdministrator;
  }
  return bodyParams;
};

const serializeAws_json1_1WorkspaceIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1WorkspaceImageIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1WorkspaceProperties = (
  input: WorkspaceProperties,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ComputeTypeName !== undefined) {
    bodyParams["ComputeTypeName"] = input.ComputeTypeName;
  }
  if (input.RootVolumeSizeGib !== undefined) {
    bodyParams["RootVolumeSizeGib"] = input.RootVolumeSizeGib;
  }
  if (input.RunningMode !== undefined) {
    bodyParams["RunningMode"] = input.RunningMode;
  }
  if (input.RunningModeAutoStopTimeoutInMinutes !== undefined) {
    bodyParams["RunningModeAutoStopTimeoutInMinutes"] =
      input.RunningModeAutoStopTimeoutInMinutes;
  }
  if (input.UserVolumeSizeGib !== undefined) {
    bodyParams["UserVolumeSizeGib"] = input.UserVolumeSizeGib;
  }
  return bodyParams;
};

const serializeAws_json1_1WorkspaceRequest = (
  input: WorkspaceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BundleId !== undefined) {
    bodyParams["BundleId"] = input.BundleId;
  }
  if (input.DirectoryId !== undefined) {
    bodyParams["DirectoryId"] = input.DirectoryId;
  }
  if (input.RootVolumeEncryptionEnabled !== undefined) {
    bodyParams["RootVolumeEncryptionEnabled"] =
      input.RootVolumeEncryptionEnabled;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
  }
  if (input.UserName !== undefined) {
    bodyParams["UserName"] = input.UserName;
  }
  if (input.UserVolumeEncryptionEnabled !== undefined) {
    bodyParams["UserVolumeEncryptionEnabled"] =
      input.UserVolumeEncryptionEnabled;
  }
  if (input.VolumeEncryptionKey !== undefined) {
    bodyParams["VolumeEncryptionKey"] = input.VolumeEncryptionKey;
  }
  if (input.WorkspaceProperties !== undefined) {
    bodyParams["WorkspaceProperties"] = serializeAws_json1_1WorkspaceProperties(
      input.WorkspaceProperties,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1WorkspaceRequestList = (
  input: Array<WorkspaceRequest>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1WorkspaceRequest(entry, context));
  }
  return contents;
};

const deserializeAws_json1_1AccessDeniedException = (
  output: any,
  context: __SerdeContext
): AccessDeniedException => {
  let contents: any = {
    __type: "AccessDeniedException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

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
    StartTime: undefined
  };
  if (
    output.DedicatedTenancyManagementCidrRange !== undefined &&
    output.DedicatedTenancyManagementCidrRange !== null
  ) {
    contents.DedicatedTenancyManagementCidrRange =
      output.DedicatedTenancyManagementCidrRange;
  }
  if (
    output.DedicatedTenancySupport !== undefined &&
    output.DedicatedTenancySupport !== null
  ) {
    contents.DedicatedTenancySupport = output.DedicatedTenancySupport;
  }
  if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
    contents.ErrorMessage = output.ErrorMessage;
  }
  if (
    output.ModificationState !== undefined &&
    output.ModificationState !== null
  ) {
    contents.ModificationState = output.ModificationState;
  }
  if (output.StartTime !== undefined && output.StartTime !== null) {
    contents.StartTime = new Date(Math.round(output.StartTime * 1000));
  }
  return contents;
};

const deserializeAws_json1_1AccountModificationList = (
  output: any,
  context: __SerdeContext
): Array<AccountModification> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AccountModification(entry, context)
  );
};

const deserializeAws_json1_1AssociateIpGroupsResult = (
  output: any,
  context: __SerdeContext
): AssociateIpGroupsResult => {
  let contents: any = {
    __type: "AssociateIpGroupsResult"
  };
  return contents;
};

const deserializeAws_json1_1AuthorizeIpRulesResult = (
  output: any,
  context: __SerdeContext
): AuthorizeIpRulesResult => {
  let contents: any = {
    __type: "AuthorizeIpRulesResult"
  };
  return contents;
};

const deserializeAws_json1_1BundleList = (
  output: any,
  context: __SerdeContext
): Array<WorkspaceBundle> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1WorkspaceBundle(entry, context)
  );
};

const deserializeAws_json1_1ClientProperties = (
  output: any,
  context: __SerdeContext
): ClientProperties => {
  let contents: any = {
    __type: "ClientProperties",
    ReconnectEnabled: undefined
  };
  if (
    output.ReconnectEnabled !== undefined &&
    output.ReconnectEnabled !== null
  ) {
    contents.ReconnectEnabled = output.ReconnectEnabled;
  }
  return contents;
};

const deserializeAws_json1_1ClientPropertiesList = (
  output: any,
  context: __SerdeContext
): Array<ClientPropertiesResult> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ClientPropertiesResult(entry, context)
  );
};

const deserializeAws_json1_1ClientPropertiesResult = (
  output: any,
  context: __SerdeContext
): ClientPropertiesResult => {
  let contents: any = {
    __type: "ClientPropertiesResult",
    ClientProperties: undefined,
    ResourceId: undefined
  };
  if (
    output.ClientProperties !== undefined &&
    output.ClientProperties !== null
  ) {
    contents.ClientProperties = deserializeAws_json1_1ClientProperties(
      output.ClientProperties,
      context
    );
  }
  if (output.ResourceId !== undefined && output.ResourceId !== null) {
    contents.ResourceId = output.ResourceId;
  }
  return contents;
};

const deserializeAws_json1_1ComputeType = (
  output: any,
  context: __SerdeContext
): ComputeType => {
  let contents: any = {
    __type: "ComputeType",
    Name: undefined
  };
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_json1_1CopyWorkspaceImageResult = (
  output: any,
  context: __SerdeContext
): CopyWorkspaceImageResult => {
  let contents: any = {
    __type: "CopyWorkspaceImageResult",
    ImageId: undefined
  };
  if (output.ImageId !== undefined && output.ImageId !== null) {
    contents.ImageId = output.ImageId;
  }
  return contents;
};

const deserializeAws_json1_1CreateIpGroupResult = (
  output: any,
  context: __SerdeContext
): CreateIpGroupResult => {
  let contents: any = {
    __type: "CreateIpGroupResult",
    GroupId: undefined
  };
  if (output.GroupId !== undefined && output.GroupId !== null) {
    contents.GroupId = output.GroupId;
  }
  return contents;
};

const deserializeAws_json1_1CreateTagsResult = (
  output: any,
  context: __SerdeContext
): CreateTagsResult => {
  let contents: any = {
    __type: "CreateTagsResult"
  };
  return contents;
};

const deserializeAws_json1_1CreateWorkspacesResult = (
  output: any,
  context: __SerdeContext
): CreateWorkspacesResult => {
  let contents: any = {
    __type: "CreateWorkspacesResult",
    FailedRequests: undefined,
    PendingRequests: undefined
  };
  if (output.FailedRequests !== undefined && output.FailedRequests !== null) {
    contents.FailedRequests = deserializeAws_json1_1FailedCreateWorkspaceRequests(
      output.FailedRequests,
      context
    );
  }
  if (output.PendingRequests !== undefined && output.PendingRequests !== null) {
    contents.PendingRequests = deserializeAws_json1_1WorkspaceList(
      output.PendingRequests,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DedicatedTenancyCidrRangeList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

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
    UserEnabledAsLocalAdministrator: undefined
  };
  if (
    output.CustomSecurityGroupId !== undefined &&
    output.CustomSecurityGroupId !== null
  ) {
    contents.CustomSecurityGroupId = output.CustomSecurityGroupId;
  }
  if (output.DefaultOu !== undefined && output.DefaultOu !== null) {
    contents.DefaultOu = output.DefaultOu;
  }
  if (
    output.EnableInternetAccess !== undefined &&
    output.EnableInternetAccess !== null
  ) {
    contents.EnableInternetAccess = output.EnableInternetAccess;
  }
  if (
    output.EnableMaintenanceMode !== undefined &&
    output.EnableMaintenanceMode !== null
  ) {
    contents.EnableMaintenanceMode = output.EnableMaintenanceMode;
  }
  if (output.EnableWorkDocs !== undefined && output.EnableWorkDocs !== null) {
    contents.EnableWorkDocs = output.EnableWorkDocs;
  }
  if (
    output.UserEnabledAsLocalAdministrator !== undefined &&
    output.UserEnabledAsLocalAdministrator !== null
  ) {
    contents.UserEnabledAsLocalAdministrator =
      output.UserEnabledAsLocalAdministrator;
  }
  return contents;
};

const deserializeAws_json1_1DeleteIpGroupResult = (
  output: any,
  context: __SerdeContext
): DeleteIpGroupResult => {
  let contents: any = {
    __type: "DeleteIpGroupResult"
  };
  return contents;
};

const deserializeAws_json1_1DeleteTagsResult = (
  output: any,
  context: __SerdeContext
): DeleteTagsResult => {
  let contents: any = {
    __type: "DeleteTagsResult"
  };
  return contents;
};

const deserializeAws_json1_1DeleteWorkspaceImageResult = (
  output: any,
  context: __SerdeContext
): DeleteWorkspaceImageResult => {
  let contents: any = {
    __type: "DeleteWorkspaceImageResult"
  };
  return contents;
};

const deserializeAws_json1_1DeregisterWorkspaceDirectoryResult = (
  output: any,
  context: __SerdeContext
): DeregisterWorkspaceDirectoryResult => {
  let contents: any = {
    __type: "DeregisterWorkspaceDirectoryResult"
  };
  return contents;
};

const deserializeAws_json1_1DescribeAccountModificationsResult = (
  output: any,
  context: __SerdeContext
): DescribeAccountModificationsResult => {
  let contents: any = {
    __type: "DescribeAccountModificationsResult",
    AccountModifications: undefined,
    NextToken: undefined
  };
  if (
    output.AccountModifications !== undefined &&
    output.AccountModifications !== null
  ) {
    contents.AccountModifications = deserializeAws_json1_1AccountModificationList(
      output.AccountModifications,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1DescribeAccountResult = (
  output: any,
  context: __SerdeContext
): DescribeAccountResult => {
  let contents: any = {
    __type: "DescribeAccountResult",
    DedicatedTenancyManagementCidrRange: undefined,
    DedicatedTenancySupport: undefined
  };
  if (
    output.DedicatedTenancyManagementCidrRange !== undefined &&
    output.DedicatedTenancyManagementCidrRange !== null
  ) {
    contents.DedicatedTenancyManagementCidrRange =
      output.DedicatedTenancyManagementCidrRange;
  }
  if (
    output.DedicatedTenancySupport !== undefined &&
    output.DedicatedTenancySupport !== null
  ) {
    contents.DedicatedTenancySupport = output.DedicatedTenancySupport;
  }
  return contents;
};

const deserializeAws_json1_1DescribeClientPropertiesResult = (
  output: any,
  context: __SerdeContext
): DescribeClientPropertiesResult => {
  let contents: any = {
    __type: "DescribeClientPropertiesResult",
    ClientPropertiesList: undefined
  };
  if (
    output.ClientPropertiesList !== undefined &&
    output.ClientPropertiesList !== null
  ) {
    contents.ClientPropertiesList = deserializeAws_json1_1ClientPropertiesList(
      output.ClientPropertiesList,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeIpGroupsResult = (
  output: any,
  context: __SerdeContext
): DescribeIpGroupsResult => {
  let contents: any = {
    __type: "DescribeIpGroupsResult",
    NextToken: undefined,
    Result: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.Result !== undefined && output.Result !== null) {
    contents.Result = deserializeAws_json1_1WorkspacesIpGroupsList(
      output.Result,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeTagsResult = (
  output: any,
  context: __SerdeContext
): DescribeTagsResult => {
  let contents: any = {
    __type: "DescribeTagsResult",
    TagList: undefined
  };
  if (output.TagList !== undefined && output.TagList !== null) {
    contents.TagList = deserializeAws_json1_1TagList(output.TagList, context);
  }
  return contents;
};

const deserializeAws_json1_1DescribeWorkspaceBundlesResult = (
  output: any,
  context: __SerdeContext
): DescribeWorkspaceBundlesResult => {
  let contents: any = {
    __type: "DescribeWorkspaceBundlesResult",
    Bundles: undefined,
    NextToken: undefined
  };
  if (output.Bundles !== undefined && output.Bundles !== null) {
    contents.Bundles = deserializeAws_json1_1BundleList(
      output.Bundles,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1DescribeWorkspaceDirectoriesResult = (
  output: any,
  context: __SerdeContext
): DescribeWorkspaceDirectoriesResult => {
  let contents: any = {
    __type: "DescribeWorkspaceDirectoriesResult",
    Directories: undefined,
    NextToken: undefined
  };
  if (output.Directories !== undefined && output.Directories !== null) {
    contents.Directories = deserializeAws_json1_1DirectoryList(
      output.Directories,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1DescribeWorkspaceImagesResult = (
  output: any,
  context: __SerdeContext
): DescribeWorkspaceImagesResult => {
  let contents: any = {
    __type: "DescribeWorkspaceImagesResult",
    Images: undefined,
    NextToken: undefined
  };
  if (output.Images !== undefined && output.Images !== null) {
    contents.Images = deserializeAws_json1_1WorkspaceImageList(
      output.Images,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1DescribeWorkspaceSnapshotsResult = (
  output: any,
  context: __SerdeContext
): DescribeWorkspaceSnapshotsResult => {
  let contents: any = {
    __type: "DescribeWorkspaceSnapshotsResult",
    RebuildSnapshots: undefined,
    RestoreSnapshots: undefined
  };
  if (
    output.RebuildSnapshots !== undefined &&
    output.RebuildSnapshots !== null
  ) {
    contents.RebuildSnapshots = deserializeAws_json1_1SnapshotList(
      output.RebuildSnapshots,
      context
    );
  }
  if (
    output.RestoreSnapshots !== undefined &&
    output.RestoreSnapshots !== null
  ) {
    contents.RestoreSnapshots = deserializeAws_json1_1SnapshotList(
      output.RestoreSnapshots,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeWorkspacesConnectionStatusResult = (
  output: any,
  context: __SerdeContext
): DescribeWorkspacesConnectionStatusResult => {
  let contents: any = {
    __type: "DescribeWorkspacesConnectionStatusResult",
    NextToken: undefined,
    WorkspacesConnectionStatus: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (
    output.WorkspacesConnectionStatus !== undefined &&
    output.WorkspacesConnectionStatus !== null
  ) {
    contents.WorkspacesConnectionStatus = deserializeAws_json1_1WorkspaceConnectionStatusList(
      output.WorkspacesConnectionStatus,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeWorkspacesResult = (
  output: any,
  context: __SerdeContext
): DescribeWorkspacesResult => {
  let contents: any = {
    __type: "DescribeWorkspacesResult",
    NextToken: undefined,
    Workspaces: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.Workspaces !== undefined && output.Workspaces !== null) {
    contents.Workspaces = deserializeAws_json1_1WorkspaceList(
      output.Workspaces,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DirectoryList = (
  output: any,
  context: __SerdeContext
): Array<WorkspaceDirectory> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1WorkspaceDirectory(entry, context)
  );
};

const deserializeAws_json1_1DisassociateIpGroupsResult = (
  output: any,
  context: __SerdeContext
): DisassociateIpGroupsResult => {
  let contents: any = {
    __type: "DisassociateIpGroupsResult"
  };
  return contents;
};

const deserializeAws_json1_1DnsIpAddresses = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1FailedCreateWorkspaceRequest = (
  output: any,
  context: __SerdeContext
): FailedCreateWorkspaceRequest => {
  let contents: any = {
    __type: "FailedCreateWorkspaceRequest",
    ErrorCode: undefined,
    ErrorMessage: undefined,
    WorkspaceRequest: undefined
  };
  if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
    contents.ErrorMessage = output.ErrorMessage;
  }
  if (
    output.WorkspaceRequest !== undefined &&
    output.WorkspaceRequest !== null
  ) {
    contents.WorkspaceRequest = deserializeAws_json1_1WorkspaceRequest(
      output.WorkspaceRequest,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1FailedCreateWorkspaceRequests = (
  output: any,
  context: __SerdeContext
): Array<FailedCreateWorkspaceRequest> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1FailedCreateWorkspaceRequest(entry, context)
  );
};

const deserializeAws_json1_1FailedRebootWorkspaceRequests = (
  output: any,
  context: __SerdeContext
): Array<FailedWorkspaceChangeRequest> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1FailedWorkspaceChangeRequest(entry, context)
  );
};

const deserializeAws_json1_1FailedRebuildWorkspaceRequests = (
  output: any,
  context: __SerdeContext
): Array<FailedWorkspaceChangeRequest> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1FailedWorkspaceChangeRequest(entry, context)
  );
};

const deserializeAws_json1_1FailedStartWorkspaceRequests = (
  output: any,
  context: __SerdeContext
): Array<FailedWorkspaceChangeRequest> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1FailedWorkspaceChangeRequest(entry, context)
  );
};

const deserializeAws_json1_1FailedStopWorkspaceRequests = (
  output: any,
  context: __SerdeContext
): Array<FailedWorkspaceChangeRequest> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1FailedWorkspaceChangeRequest(entry, context)
  );
};

const deserializeAws_json1_1FailedTerminateWorkspaceRequests = (
  output: any,
  context: __SerdeContext
): Array<FailedWorkspaceChangeRequest> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1FailedWorkspaceChangeRequest(entry, context)
  );
};

const deserializeAws_json1_1FailedWorkspaceChangeRequest = (
  output: any,
  context: __SerdeContext
): FailedWorkspaceChangeRequest => {
  let contents: any = {
    __type: "FailedWorkspaceChangeRequest",
    ErrorCode: undefined,
    ErrorMessage: undefined,
    WorkspaceId: undefined
  };
  if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
    contents.ErrorMessage = output.ErrorMessage;
  }
  if (output.WorkspaceId !== undefined && output.WorkspaceId !== null) {
    contents.WorkspaceId = output.WorkspaceId;
  }
  return contents;
};

const deserializeAws_json1_1ImportWorkspaceImageResult = (
  output: any,
  context: __SerdeContext
): ImportWorkspaceImageResult => {
  let contents: any = {
    __type: "ImportWorkspaceImageResult",
    ImageId: undefined
  };
  if (output.ImageId !== undefined && output.ImageId !== null) {
    contents.ImageId = output.ImageId;
  }
  return contents;
};

const deserializeAws_json1_1InvalidParameterValuesException = (
  output: any,
  context: __SerdeContext
): InvalidParameterValuesException => {
  let contents: any = {
    __type: "InvalidParameterValuesException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidResourceStateException = (
  output: any,
  context: __SerdeContext
): InvalidResourceStateException => {
  let contents: any = {
    __type: "InvalidResourceStateException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1IpGroupIdList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1IpRuleItem = (
  output: any,
  context: __SerdeContext
): IpRuleItem => {
  let contents: any = {
    __type: "IpRuleItem",
    ipRule: undefined,
    ruleDesc: undefined
  };
  if (output.ipRule !== undefined && output.ipRule !== null) {
    contents.ipRule = output.ipRule;
  }
  if (output.ruleDesc !== undefined && output.ruleDesc !== null) {
    contents.ruleDesc = output.ruleDesc;
  }
  return contents;
};

const deserializeAws_json1_1IpRuleList = (
  output: any,
  context: __SerdeContext
): Array<IpRuleItem> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1IpRuleItem(entry, context)
  );
};

const deserializeAws_json1_1ListAvailableManagementCidrRangesResult = (
  output: any,
  context: __SerdeContext
): ListAvailableManagementCidrRangesResult => {
  let contents: any = {
    __type: "ListAvailableManagementCidrRangesResult",
    ManagementCidrRanges: undefined,
    NextToken: undefined
  };
  if (
    output.ManagementCidrRanges !== undefined &&
    output.ManagementCidrRanges !== null
  ) {
    contents.ManagementCidrRanges = deserializeAws_json1_1DedicatedTenancyCidrRangeList(
      output.ManagementCidrRanges,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1MigrateWorkspaceResult = (
  output: any,
  context: __SerdeContext
): MigrateWorkspaceResult => {
  let contents: any = {
    __type: "MigrateWorkspaceResult",
    SourceWorkspaceId: undefined,
    TargetWorkspaceId: undefined
  };
  if (
    output.SourceWorkspaceId !== undefined &&
    output.SourceWorkspaceId !== null
  ) {
    contents.SourceWorkspaceId = output.SourceWorkspaceId;
  }
  if (
    output.TargetWorkspaceId !== undefined &&
    output.TargetWorkspaceId !== null
  ) {
    contents.TargetWorkspaceId = output.TargetWorkspaceId;
  }
  return contents;
};

const deserializeAws_json1_1ModificationState = (
  output: any,
  context: __SerdeContext
): ModificationState => {
  let contents: any = {
    __type: "ModificationState",
    Resource: undefined,
    State: undefined
  };
  if (output.Resource !== undefined && output.Resource !== null) {
    contents.Resource = output.Resource;
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  return contents;
};

const deserializeAws_json1_1ModificationStateList = (
  output: any,
  context: __SerdeContext
): Array<ModificationState> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ModificationState(entry, context)
  );
};

const deserializeAws_json1_1ModifyAccountResult = (
  output: any,
  context: __SerdeContext
): ModifyAccountResult => {
  let contents: any = {
    __type: "ModifyAccountResult"
  };
  return contents;
};

const deserializeAws_json1_1ModifyClientPropertiesResult = (
  output: any,
  context: __SerdeContext
): ModifyClientPropertiesResult => {
  let contents: any = {
    __type: "ModifyClientPropertiesResult"
  };
  return contents;
};

const deserializeAws_json1_1ModifySelfservicePermissionsResult = (
  output: any,
  context: __SerdeContext
): ModifySelfservicePermissionsResult => {
  let contents: any = {
    __type: "ModifySelfservicePermissionsResult"
  };
  return contents;
};

const deserializeAws_json1_1ModifyWorkspaceAccessPropertiesResult = (
  output: any,
  context: __SerdeContext
): ModifyWorkspaceAccessPropertiesResult => {
  let contents: any = {
    __type: "ModifyWorkspaceAccessPropertiesResult"
  };
  return contents;
};

const deserializeAws_json1_1ModifyWorkspaceCreationPropertiesResult = (
  output: any,
  context: __SerdeContext
): ModifyWorkspaceCreationPropertiesResult => {
  let contents: any = {
    __type: "ModifyWorkspaceCreationPropertiesResult"
  };
  return contents;
};

const deserializeAws_json1_1ModifyWorkspacePropertiesResult = (
  output: any,
  context: __SerdeContext
): ModifyWorkspacePropertiesResult => {
  let contents: any = {
    __type: "ModifyWorkspacePropertiesResult"
  };
  return contents;
};

const deserializeAws_json1_1ModifyWorkspaceStateResult = (
  output: any,
  context: __SerdeContext
): ModifyWorkspaceStateResult => {
  let contents: any = {
    __type: "ModifyWorkspaceStateResult"
  };
  return contents;
};

const deserializeAws_json1_1OperatingSystem = (
  output: any,
  context: __SerdeContext
): OperatingSystem => {
  let contents: any = {
    __type: "OperatingSystem",
    Type: undefined
  };
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1OperationInProgressException = (
  output: any,
  context: __SerdeContext
): OperationInProgressException => {
  let contents: any = {
    __type: "OperationInProgressException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1OperationNotSupportedException = (
  output: any,
  context: __SerdeContext
): OperationNotSupportedException => {
  let contents: any = {
    __type: "OperationNotSupportedException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1RebootWorkspacesResult = (
  output: any,
  context: __SerdeContext
): RebootWorkspacesResult => {
  let contents: any = {
    __type: "RebootWorkspacesResult",
    FailedRequests: undefined
  };
  if (output.FailedRequests !== undefined && output.FailedRequests !== null) {
    contents.FailedRequests = deserializeAws_json1_1FailedRebootWorkspaceRequests(
      output.FailedRequests,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1RebuildWorkspacesResult = (
  output: any,
  context: __SerdeContext
): RebuildWorkspacesResult => {
  let contents: any = {
    __type: "RebuildWorkspacesResult",
    FailedRequests: undefined
  };
  if (output.FailedRequests !== undefined && output.FailedRequests !== null) {
    contents.FailedRequests = deserializeAws_json1_1FailedRebuildWorkspaceRequests(
      output.FailedRequests,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1RegisterWorkspaceDirectoryResult = (
  output: any,
  context: __SerdeContext
): RegisterWorkspaceDirectoryResult => {
  let contents: any = {
    __type: "RegisterWorkspaceDirectoryResult"
  };
  return contents;
};

const deserializeAws_json1_1ResourceAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ResourceAlreadyExistsException => {
  let contents: any = {
    __type: "ResourceAlreadyExistsException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceAssociatedException = (
  output: any,
  context: __SerdeContext
): ResourceAssociatedException => {
  let contents: any = {
    __type: "ResourceAssociatedException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceCreationFailedException = (
  output: any,
  context: __SerdeContext
): ResourceCreationFailedException => {
  let contents: any = {
    __type: "ResourceCreationFailedException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceLimitExceededException = (
  output: any,
  context: __SerdeContext
): ResourceLimitExceededException => {
  let contents: any = {
    __type: "ResourceLimitExceededException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    ResourceId: undefined,
    message: undefined
  };
  if (output.ResourceId !== undefined && output.ResourceId !== null) {
    contents.ResourceId = output.ResourceId;
  }
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceUnavailableException = (
  output: any,
  context: __SerdeContext
): ResourceUnavailableException => {
  let contents: any = {
    __type: "ResourceUnavailableException",
    ResourceId: undefined,
    message: undefined
  };
  if (output.ResourceId !== undefined && output.ResourceId !== null) {
    contents.ResourceId = output.ResourceId;
  }
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1RestoreWorkspaceResult = (
  output: any,
  context: __SerdeContext
): RestoreWorkspaceResult => {
  let contents: any = {
    __type: "RestoreWorkspaceResult"
  };
  return contents;
};

const deserializeAws_json1_1RevokeIpRulesResult = (
  output: any,
  context: __SerdeContext
): RevokeIpRulesResult => {
  let contents: any = {
    __type: "RevokeIpRulesResult"
  };
  return contents;
};

const deserializeAws_json1_1RootStorage = (
  output: any,
  context: __SerdeContext
): RootStorage => {
  let contents: any = {
    __type: "RootStorage",
    Capacity: undefined
  };
  if (output.Capacity !== undefined && output.Capacity !== null) {
    contents.Capacity = output.Capacity;
  }
  return contents;
};

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
    SwitchRunningMode: undefined
  };
  if (
    output.ChangeComputeType !== undefined &&
    output.ChangeComputeType !== null
  ) {
    contents.ChangeComputeType = output.ChangeComputeType;
  }
  if (
    output.IncreaseVolumeSize !== undefined &&
    output.IncreaseVolumeSize !== null
  ) {
    contents.IncreaseVolumeSize = output.IncreaseVolumeSize;
  }
  if (
    output.RebuildWorkspace !== undefined &&
    output.RebuildWorkspace !== null
  ) {
    contents.RebuildWorkspace = output.RebuildWorkspace;
  }
  if (
    output.RestartWorkspace !== undefined &&
    output.RestartWorkspace !== null
  ) {
    contents.RestartWorkspace = output.RestartWorkspace;
  }
  if (
    output.SwitchRunningMode !== undefined &&
    output.SwitchRunningMode !== null
  ) {
    contents.SwitchRunningMode = output.SwitchRunningMode;
  }
  return contents;
};

const deserializeAws_json1_1Snapshot = (
  output: any,
  context: __SerdeContext
): Snapshot => {
  let contents: any = {
    __type: "Snapshot",
    SnapshotTime: undefined
  };
  if (output.SnapshotTime !== undefined && output.SnapshotTime !== null) {
    contents.SnapshotTime = new Date(Math.round(output.SnapshotTime * 1000));
  }
  return contents;
};

const deserializeAws_json1_1SnapshotList = (
  output: any,
  context: __SerdeContext
): Array<Snapshot> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Snapshot(entry, context)
  );
};

const deserializeAws_json1_1StartWorkspacesResult = (
  output: any,
  context: __SerdeContext
): StartWorkspacesResult => {
  let contents: any = {
    __type: "StartWorkspacesResult",
    FailedRequests: undefined
  };
  if (output.FailedRequests !== undefined && output.FailedRequests !== null) {
    contents.FailedRequests = deserializeAws_json1_1FailedStartWorkspaceRequests(
      output.FailedRequests,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1StopWorkspacesResult = (
  output: any,
  context: __SerdeContext
): StopWorkspacesResult => {
  let contents: any = {
    __type: "StopWorkspacesResult",
    FailedRequests: undefined
  };
  if (output.FailedRequests !== undefined && output.FailedRequests !== null) {
    contents.FailedRequests = deserializeAws_json1_1FailedStopWorkspaceRequests(
      output.FailedRequests,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1SubnetIds = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    Key: undefined,
    Value: undefined
  };
  if (output.Key !== undefined && output.Key !== null) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1TagList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1TerminateWorkspacesResult = (
  output: any,
  context: __SerdeContext
): TerminateWorkspacesResult => {
  let contents: any = {
    __type: "TerminateWorkspacesResult",
    FailedRequests: undefined
  };
  if (output.FailedRequests !== undefined && output.FailedRequests !== null) {
    contents.FailedRequests = deserializeAws_json1_1FailedTerminateWorkspaceRequests(
      output.FailedRequests,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1UnsupportedNetworkConfigurationException = (
  output: any,
  context: __SerdeContext
): UnsupportedNetworkConfigurationException => {
  let contents: any = {
    __type: "UnsupportedNetworkConfigurationException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1UnsupportedWorkspaceConfigurationException = (
  output: any,
  context: __SerdeContext
): UnsupportedWorkspaceConfigurationException => {
  let contents: any = {
    __type: "UnsupportedWorkspaceConfigurationException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1UpdateRulesOfIpGroupResult = (
  output: any,
  context: __SerdeContext
): UpdateRulesOfIpGroupResult => {
  let contents: any = {
    __type: "UpdateRulesOfIpGroupResult"
  };
  return contents;
};

const deserializeAws_json1_1UserStorage = (
  output: any,
  context: __SerdeContext
): UserStorage => {
  let contents: any = {
    __type: "UserStorage",
    Capacity: undefined
  };
  if (output.Capacity !== undefined && output.Capacity !== null) {
    contents.Capacity = output.Capacity;
  }
  return contents;
};

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
    WorkspaceProperties: undefined
  };
  if (output.BundleId !== undefined && output.BundleId !== null) {
    contents.BundleId = output.BundleId;
  }
  if (output.ComputerName !== undefined && output.ComputerName !== null) {
    contents.ComputerName = output.ComputerName;
  }
  if (output.DirectoryId !== undefined && output.DirectoryId !== null) {
    contents.DirectoryId = output.DirectoryId;
  }
  if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
    contents.ErrorMessage = output.ErrorMessage;
  }
  if (output.IpAddress !== undefined && output.IpAddress !== null) {
    contents.IpAddress = output.IpAddress;
  }
  if (
    output.ModificationStates !== undefined &&
    output.ModificationStates !== null
  ) {
    contents.ModificationStates = deserializeAws_json1_1ModificationStateList(
      output.ModificationStates,
      context
    );
  }
  if (
    output.RootVolumeEncryptionEnabled !== undefined &&
    output.RootVolumeEncryptionEnabled !== null
  ) {
    contents.RootVolumeEncryptionEnabled = output.RootVolumeEncryptionEnabled;
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  if (output.SubnetId !== undefined && output.SubnetId !== null) {
    contents.SubnetId = output.SubnetId;
  }
  if (output.UserName !== undefined && output.UserName !== null) {
    contents.UserName = output.UserName;
  }
  if (
    output.UserVolumeEncryptionEnabled !== undefined &&
    output.UserVolumeEncryptionEnabled !== null
  ) {
    contents.UserVolumeEncryptionEnabled = output.UserVolumeEncryptionEnabled;
  }
  if (
    output.VolumeEncryptionKey !== undefined &&
    output.VolumeEncryptionKey !== null
  ) {
    contents.VolumeEncryptionKey = output.VolumeEncryptionKey;
  }
  if (output.WorkspaceId !== undefined && output.WorkspaceId !== null) {
    contents.WorkspaceId = output.WorkspaceId;
  }
  if (
    output.WorkspaceProperties !== undefined &&
    output.WorkspaceProperties !== null
  ) {
    contents.WorkspaceProperties = deserializeAws_json1_1WorkspaceProperties(
      output.WorkspaceProperties,
      context
    );
  }
  return contents;
};

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
    DeviceTypeZeroClient: undefined
  };
  if (
    output.DeviceTypeAndroid !== undefined &&
    output.DeviceTypeAndroid !== null
  ) {
    contents.DeviceTypeAndroid = output.DeviceTypeAndroid;
  }
  if (
    output.DeviceTypeChromeOs !== undefined &&
    output.DeviceTypeChromeOs !== null
  ) {
    contents.DeviceTypeChromeOs = output.DeviceTypeChromeOs;
  }
  if (output.DeviceTypeIos !== undefined && output.DeviceTypeIos !== null) {
    contents.DeviceTypeIos = output.DeviceTypeIos;
  }
  if (output.DeviceTypeOsx !== undefined && output.DeviceTypeOsx !== null) {
    contents.DeviceTypeOsx = output.DeviceTypeOsx;
  }
  if (output.DeviceTypeWeb !== undefined && output.DeviceTypeWeb !== null) {
    contents.DeviceTypeWeb = output.DeviceTypeWeb;
  }
  if (
    output.DeviceTypeWindows !== undefined &&
    output.DeviceTypeWindows !== null
  ) {
    contents.DeviceTypeWindows = output.DeviceTypeWindows;
  }
  if (
    output.DeviceTypeZeroClient !== undefined &&
    output.DeviceTypeZeroClient !== null
  ) {
    contents.DeviceTypeZeroClient = output.DeviceTypeZeroClient;
  }
  return contents;
};

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
    UserStorage: undefined
  };
  if (output.BundleId !== undefined && output.BundleId !== null) {
    contents.BundleId = output.BundleId;
  }
  if (output.ComputeType !== undefined && output.ComputeType !== null) {
    contents.ComputeType = deserializeAws_json1_1ComputeType(
      output.ComputeType,
      context
    );
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.ImageId !== undefined && output.ImageId !== null) {
    contents.ImageId = output.ImageId;
  }
  if (output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null) {
    contents.LastUpdatedTime = new Date(
      Math.round(output.LastUpdatedTime * 1000)
    );
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Owner !== undefined && output.Owner !== null) {
    contents.Owner = output.Owner;
  }
  if (output.RootStorage !== undefined && output.RootStorage !== null) {
    contents.RootStorage = deserializeAws_json1_1RootStorage(
      output.RootStorage,
      context
    );
  }
  if (output.UserStorage !== undefined && output.UserStorage !== null) {
    contents.UserStorage = deserializeAws_json1_1UserStorage(
      output.UserStorage,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1WorkspaceConnectionStatus = (
  output: any,
  context: __SerdeContext
): WorkspaceConnectionStatus => {
  let contents: any = {
    __type: "WorkspaceConnectionStatus",
    ConnectionState: undefined,
    ConnectionStateCheckTimestamp: undefined,
    LastKnownUserConnectionTimestamp: undefined,
    WorkspaceId: undefined
  };
  if (output.ConnectionState !== undefined && output.ConnectionState !== null) {
    contents.ConnectionState = output.ConnectionState;
  }
  if (
    output.ConnectionStateCheckTimestamp !== undefined &&
    output.ConnectionStateCheckTimestamp !== null
  ) {
    contents.ConnectionStateCheckTimestamp = new Date(
      Math.round(output.ConnectionStateCheckTimestamp * 1000)
    );
  }
  if (
    output.LastKnownUserConnectionTimestamp !== undefined &&
    output.LastKnownUserConnectionTimestamp !== null
  ) {
    contents.LastKnownUserConnectionTimestamp = new Date(
      Math.round(output.LastKnownUserConnectionTimestamp * 1000)
    );
  }
  if (output.WorkspaceId !== undefined && output.WorkspaceId !== null) {
    contents.WorkspaceId = output.WorkspaceId;
  }
  return contents;
};

const deserializeAws_json1_1WorkspaceConnectionStatusList = (
  output: any,
  context: __SerdeContext
): Array<WorkspaceConnectionStatus> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1WorkspaceConnectionStatus(entry, context)
  );
};

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
    ipGroupIds: undefined
  };
  if (output.Alias !== undefined && output.Alias !== null) {
    contents.Alias = output.Alias;
  }
  if (
    output.CustomerUserName !== undefined &&
    output.CustomerUserName !== null
  ) {
    contents.CustomerUserName = output.CustomerUserName;
  }
  if (output.DirectoryId !== undefined && output.DirectoryId !== null) {
    contents.DirectoryId = output.DirectoryId;
  }
  if (output.DirectoryName !== undefined && output.DirectoryName !== null) {
    contents.DirectoryName = output.DirectoryName;
  }
  if (output.DirectoryType !== undefined && output.DirectoryType !== null) {
    contents.DirectoryType = output.DirectoryType;
  }
  if (output.DnsIpAddresses !== undefined && output.DnsIpAddresses !== null) {
    contents.DnsIpAddresses = deserializeAws_json1_1DnsIpAddresses(
      output.DnsIpAddresses,
      context
    );
  }
  if (output.IamRoleId !== undefined && output.IamRoleId !== null) {
    contents.IamRoleId = output.IamRoleId;
  }
  if (
    output.RegistrationCode !== undefined &&
    output.RegistrationCode !== null
  ) {
    contents.RegistrationCode = output.RegistrationCode;
  }
  if (
    output.SelfservicePermissions !== undefined &&
    output.SelfservicePermissions !== null
  ) {
    contents.SelfservicePermissions = deserializeAws_json1_1SelfservicePermissions(
      output.SelfservicePermissions,
      context
    );
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  if (output.SubnetIds !== undefined && output.SubnetIds !== null) {
    contents.SubnetIds = deserializeAws_json1_1SubnetIds(
      output.SubnetIds,
      context
    );
  }
  if (output.Tenancy !== undefined && output.Tenancy !== null) {
    contents.Tenancy = output.Tenancy;
  }
  if (
    output.WorkspaceAccessProperties !== undefined &&
    output.WorkspaceAccessProperties !== null
  ) {
    contents.WorkspaceAccessProperties = deserializeAws_json1_1WorkspaceAccessProperties(
      output.WorkspaceAccessProperties,
      context
    );
  }
  if (
    output.WorkspaceCreationProperties !== undefined &&
    output.WorkspaceCreationProperties !== null
  ) {
    contents.WorkspaceCreationProperties = deserializeAws_json1_1DefaultWorkspaceCreationProperties(
      output.WorkspaceCreationProperties,
      context
    );
  }
  if (
    output.WorkspaceSecurityGroupId !== undefined &&
    output.WorkspaceSecurityGroupId !== null
  ) {
    contents.WorkspaceSecurityGroupId = output.WorkspaceSecurityGroupId;
  }
  if (output.ipGroupIds !== undefined && output.ipGroupIds !== null) {
    contents.ipGroupIds = deserializeAws_json1_1IpGroupIdList(
      output.ipGroupIds,
      context
    );
  }
  return contents;
};

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
    State: undefined
  };
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
    contents.ErrorMessage = output.ErrorMessage;
  }
  if (output.ImageId !== undefined && output.ImageId !== null) {
    contents.ImageId = output.ImageId;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.OperatingSystem !== undefined && output.OperatingSystem !== null) {
    contents.OperatingSystem = deserializeAws_json1_1OperatingSystem(
      output.OperatingSystem,
      context
    );
  }
  if (output.RequiredTenancy !== undefined && output.RequiredTenancy !== null) {
    contents.RequiredTenancy = output.RequiredTenancy;
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  return contents;
};

const deserializeAws_json1_1WorkspaceImageList = (
  output: any,
  context: __SerdeContext
): Array<WorkspaceImage> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1WorkspaceImage(entry, context)
  );
};

const deserializeAws_json1_1WorkspaceList = (
  output: any,
  context: __SerdeContext
): Array<Workspace> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Workspace(entry, context)
  );
};

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
    UserVolumeSizeGib: undefined
  };
  if (output.ComputeTypeName !== undefined && output.ComputeTypeName !== null) {
    contents.ComputeTypeName = output.ComputeTypeName;
  }
  if (
    output.RootVolumeSizeGib !== undefined &&
    output.RootVolumeSizeGib !== null
  ) {
    contents.RootVolumeSizeGib = output.RootVolumeSizeGib;
  }
  if (output.RunningMode !== undefined && output.RunningMode !== null) {
    contents.RunningMode = output.RunningMode;
  }
  if (
    output.RunningModeAutoStopTimeoutInMinutes !== undefined &&
    output.RunningModeAutoStopTimeoutInMinutes !== null
  ) {
    contents.RunningModeAutoStopTimeoutInMinutes =
      output.RunningModeAutoStopTimeoutInMinutes;
  }
  if (
    output.UserVolumeSizeGib !== undefined &&
    output.UserVolumeSizeGib !== null
  ) {
    contents.UserVolumeSizeGib = output.UserVolumeSizeGib;
  }
  return contents;
};

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
    WorkspaceProperties: undefined
  };
  if (output.BundleId !== undefined && output.BundleId !== null) {
    contents.BundleId = output.BundleId;
  }
  if (output.DirectoryId !== undefined && output.DirectoryId !== null) {
    contents.DirectoryId = output.DirectoryId;
  }
  if (
    output.RootVolumeEncryptionEnabled !== undefined &&
    output.RootVolumeEncryptionEnabled !== null
  ) {
    contents.RootVolumeEncryptionEnabled = output.RootVolumeEncryptionEnabled;
  }
  if (output.Tags !== undefined && output.Tags !== null) {
    contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
  }
  if (output.UserName !== undefined && output.UserName !== null) {
    contents.UserName = output.UserName;
  }
  if (
    output.UserVolumeEncryptionEnabled !== undefined &&
    output.UserVolumeEncryptionEnabled !== null
  ) {
    contents.UserVolumeEncryptionEnabled = output.UserVolumeEncryptionEnabled;
  }
  if (
    output.VolumeEncryptionKey !== undefined &&
    output.VolumeEncryptionKey !== null
  ) {
    contents.VolumeEncryptionKey = output.VolumeEncryptionKey;
  }
  if (
    output.WorkspaceProperties !== undefined &&
    output.WorkspaceProperties !== null
  ) {
    contents.WorkspaceProperties = deserializeAws_json1_1WorkspaceProperties(
      output.WorkspaceProperties,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1WorkspacesDefaultRoleNotFoundException = (
  output: any,
  context: __SerdeContext
): WorkspacesDefaultRoleNotFoundException => {
  let contents: any = {
    __type: "WorkspacesDefaultRoleNotFoundException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1WorkspacesIpGroup = (
  output: any,
  context: __SerdeContext
): WorkspacesIpGroup => {
  let contents: any = {
    __type: "WorkspacesIpGroup",
    groupDesc: undefined,
    groupId: undefined,
    groupName: undefined,
    userRules: undefined
  };
  if (output.groupDesc !== undefined && output.groupDesc !== null) {
    contents.groupDesc = output.groupDesc;
  }
  if (output.groupId !== undefined && output.groupId !== null) {
    contents.groupId = output.groupId;
  }
  if (output.groupName !== undefined && output.groupName !== null) {
    contents.groupName = output.groupName;
  }
  if (output.userRules !== undefined && output.userRules !== null) {
    contents.userRules = deserializeAws_json1_1IpRuleList(
      output.userRules,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1WorkspacesIpGroupsList = (
  output: any,
  context: __SerdeContext
): Array<WorkspacesIpGroup> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1WorkspacesIpGroup(entry, context)
  );
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const buildHttpRpcRequest = (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): __HttpRequest => {
  const contents: any = {
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: path,
    headers: headers
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
