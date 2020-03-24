import {
  AbortDocumentVersionUploadCommandInput,
  AbortDocumentVersionUploadCommandOutput
} from "../commands/AbortDocumentVersionUploadCommand";
import {
  ActivateUserCommandInput,
  ActivateUserCommandOutput
} from "../commands/ActivateUserCommand";
import {
  AddResourcePermissionsCommandInput,
  AddResourcePermissionsCommandOutput
} from "../commands/AddResourcePermissionsCommand";
import {
  CreateCommentCommandInput,
  CreateCommentCommandOutput
} from "../commands/CreateCommentCommand";
import {
  CreateCustomMetadataCommandInput,
  CreateCustomMetadataCommandOutput
} from "../commands/CreateCustomMetadataCommand";
import {
  CreateFolderCommandInput,
  CreateFolderCommandOutput
} from "../commands/CreateFolderCommand";
import {
  CreateLabelsCommandInput,
  CreateLabelsCommandOutput
} from "../commands/CreateLabelsCommand";
import {
  CreateNotificationSubscriptionCommandInput,
  CreateNotificationSubscriptionCommandOutput
} from "../commands/CreateNotificationSubscriptionCommand";
import {
  CreateUserCommandInput,
  CreateUserCommandOutput
} from "../commands/CreateUserCommand";
import {
  DeactivateUserCommandInput,
  DeactivateUserCommandOutput
} from "../commands/DeactivateUserCommand";
import {
  DeleteCommentCommandInput,
  DeleteCommentCommandOutput
} from "../commands/DeleteCommentCommand";
import {
  DeleteCustomMetadataCommandInput,
  DeleteCustomMetadataCommandOutput
} from "../commands/DeleteCustomMetadataCommand";
import {
  DeleteDocumentCommandInput,
  DeleteDocumentCommandOutput
} from "../commands/DeleteDocumentCommand";
import {
  DeleteFolderCommandInput,
  DeleteFolderCommandOutput
} from "../commands/DeleteFolderCommand";
import {
  DeleteFolderContentsCommandInput,
  DeleteFolderContentsCommandOutput
} from "../commands/DeleteFolderContentsCommand";
import {
  DeleteLabelsCommandInput,
  DeleteLabelsCommandOutput
} from "../commands/DeleteLabelsCommand";
import {
  DeleteNotificationSubscriptionCommandInput,
  DeleteNotificationSubscriptionCommandOutput
} from "../commands/DeleteNotificationSubscriptionCommand";
import {
  DeleteUserCommandInput,
  DeleteUserCommandOutput
} from "../commands/DeleteUserCommand";
import {
  DescribeActivitiesCommandInput,
  DescribeActivitiesCommandOutput
} from "../commands/DescribeActivitiesCommand";
import {
  DescribeCommentsCommandInput,
  DescribeCommentsCommandOutput
} from "../commands/DescribeCommentsCommand";
import {
  DescribeDocumentVersionsCommandInput,
  DescribeDocumentVersionsCommandOutput
} from "../commands/DescribeDocumentVersionsCommand";
import {
  DescribeFolderContentsCommandInput,
  DescribeFolderContentsCommandOutput
} from "../commands/DescribeFolderContentsCommand";
import {
  DescribeGroupsCommandInput,
  DescribeGroupsCommandOutput
} from "../commands/DescribeGroupsCommand";
import {
  DescribeNotificationSubscriptionsCommandInput,
  DescribeNotificationSubscriptionsCommandOutput
} from "../commands/DescribeNotificationSubscriptionsCommand";
import {
  DescribeResourcePermissionsCommandInput,
  DescribeResourcePermissionsCommandOutput
} from "../commands/DescribeResourcePermissionsCommand";
import {
  DescribeRootFoldersCommandInput,
  DescribeRootFoldersCommandOutput
} from "../commands/DescribeRootFoldersCommand";
import {
  DescribeUsersCommandInput,
  DescribeUsersCommandOutput
} from "../commands/DescribeUsersCommand";
import {
  GetCurrentUserCommandInput,
  GetCurrentUserCommandOutput
} from "../commands/GetCurrentUserCommand";
import {
  GetDocumentCommandInput,
  GetDocumentCommandOutput
} from "../commands/GetDocumentCommand";
import {
  GetDocumentPathCommandInput,
  GetDocumentPathCommandOutput
} from "../commands/GetDocumentPathCommand";
import {
  GetDocumentVersionCommandInput,
  GetDocumentVersionCommandOutput
} from "../commands/GetDocumentVersionCommand";
import {
  GetFolderCommandInput,
  GetFolderCommandOutput
} from "../commands/GetFolderCommand";
import {
  GetFolderPathCommandInput,
  GetFolderPathCommandOutput
} from "../commands/GetFolderPathCommand";
import {
  GetResourcesCommandInput,
  GetResourcesCommandOutput
} from "../commands/GetResourcesCommand";
import {
  InitiateDocumentVersionUploadCommandInput,
  InitiateDocumentVersionUploadCommandOutput
} from "../commands/InitiateDocumentVersionUploadCommand";
import {
  RemoveAllResourcePermissionsCommandInput,
  RemoveAllResourcePermissionsCommandOutput
} from "../commands/RemoveAllResourcePermissionsCommand";
import {
  RemoveResourcePermissionCommandInput,
  RemoveResourcePermissionCommandOutput
} from "../commands/RemoveResourcePermissionCommand";
import {
  UpdateDocumentCommandInput,
  UpdateDocumentCommandOutput
} from "../commands/UpdateDocumentCommand";
import {
  UpdateDocumentVersionCommandInput,
  UpdateDocumentVersionCommandOutput
} from "../commands/UpdateDocumentVersionCommand";
import {
  UpdateFolderCommandInput,
  UpdateFolderCommandOutput
} from "../commands/UpdateFolderCommand";
import {
  UpdateUserCommandInput,
  UpdateUserCommandOutput
} from "../commands/UpdateUserCommand";
import {
  Activity,
  Comment,
  CommentMetadata,
  ConcurrentModificationException,
  ConflictingOperationException,
  CustomMetadataLimitExceededException,
  DeactivatingLastSystemUserException,
  DocumentLockedForCommentsException,
  DocumentMetadata,
  DocumentVersionMetadata,
  DraftUploadOutOfSyncException,
  EntityAlreadyExistsException,
  EntityNotExistsException,
  FailedDependencyException,
  FolderMetadata,
  GroupMetadata,
  IllegalUserStateException,
  InvalidArgumentException,
  InvalidCommentOperationException,
  InvalidOperationException,
  InvalidPasswordException,
  LimitExceededException,
  NotificationOptions,
  Participants,
  PermissionInfo,
  Principal,
  ProhibitedStateException,
  RequestedEntityTooLargeException,
  ResourceAlreadyCheckedOutException,
  ResourceMetadata,
  ResourcePath,
  ResourcePathComponent,
  ServiceUnavailableException,
  SharePrincipal,
  ShareResult,
  StorageLimitExceededException,
  StorageLimitWillExceedException,
  StorageRuleType,
  Subscription,
  TooManyLabelsException,
  TooManySubscriptionsException,
  UnauthorizedOperationException,
  UnauthorizedResourceAccessException,
  UploadMetadata,
  User,
  UserMetadata,
  UserStorageMetadata
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_restJson1_1AbortDocumentVersionUploadCommand(
  input: AbortDocumentVersionUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.AuthenticationToken !== undefined) {
    headers["Authentication"] = input.AuthenticationToken.toString();
  }
  let resolvedPath = "/api/v1/documents/{DocumentId}/versions/{VersionId}";
  if (input.DocumentId !== undefined) {
    const labelValue: any = input.DocumentId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DocumentId.");
    }
    resolvedPath = resolvedPath.replace("{DocumentId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: DocumentId.");
  }
  if (input.VersionId !== undefined) {
    const labelValue: any = input.VersionId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: VersionId.");
    }
    resolvedPath = resolvedPath.replace("{VersionId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: VersionId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1ActivateUserCommand(
  input: ActivateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.AuthenticationToken !== undefined) {
    headers["Authentication"] = input.AuthenticationToken.toString();
  }
  let resolvedPath = "/api/v1/users/{UserId}/activation";
  if (input.UserId !== undefined) {
    const labelValue: any = input.UserId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: UserId.");
    }
    resolvedPath = resolvedPath.replace("{UserId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: UserId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1AddResourcePermissionsCommand(
  input: AddResourcePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.AuthenticationToken !== undefined) {
    headers["Authentication"] = input.AuthenticationToken.toString();
  }
  let resolvedPath = "/api/v1/resources/{ResourceId}/permissions";
  if (input.ResourceId !== undefined) {
    const labelValue: any = input.ResourceId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceId.");
    }
    resolvedPath = resolvedPath.replace("{ResourceId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ResourceId.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.NotificationOptions !== undefined) {
    bodyParams[
      "NotificationOptions"
    ] = serializeAws_restJson1_1NotificationOptions(
      input.NotificationOptions,
      context
    );
  }
  if (input.Principals !== undefined) {
    bodyParams["Principals"] = serializeAws_restJson1_1SharePrincipalList(
      input.Principals,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateCommentCommand(
  input: CreateCommentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.AuthenticationToken !== undefined) {
    headers["Authentication"] = input.AuthenticationToken.toString();
  }
  let resolvedPath =
    "/api/v1/documents/{DocumentId}/versions/{VersionId}/comment";
  if (input.DocumentId !== undefined) {
    const labelValue: any = input.DocumentId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DocumentId.");
    }
    resolvedPath = resolvedPath.replace("{DocumentId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: DocumentId.");
  }
  if (input.VersionId !== undefined) {
    const labelValue: any = input.VersionId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: VersionId.");
    }
    resolvedPath = resolvedPath.replace("{VersionId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: VersionId.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.NotifyCollaborators !== undefined) {
    bodyParams["NotifyCollaborators"] = input.NotifyCollaborators;
  }
  if (input.ParentId !== undefined) {
    bodyParams["ParentId"] = input.ParentId;
  }
  if (input.Text !== undefined) {
    bodyParams["Text"] = input.Text;
  }
  if (input.ThreadId !== undefined) {
    bodyParams["ThreadId"] = input.ThreadId;
  }
  if (input.Visibility !== undefined) {
    bodyParams["Visibility"] = input.Visibility;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateCustomMetadataCommand(
  input: CreateCustomMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.AuthenticationToken !== undefined) {
    headers["Authentication"] = input.AuthenticationToken.toString();
  }
  let resolvedPath = "/api/v1/resources/{ResourceId}/customMetadata";
  if (input.ResourceId !== undefined) {
    const labelValue: any = input.ResourceId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceId.");
    }
    resolvedPath = resolvedPath.replace("{ResourceId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ResourceId.");
  }
  const query: any = {};
  if (input.VersionId !== undefined) {
    query["versionid"] = input.VersionId.toString();
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.CustomMetadata !== undefined) {
    bodyParams["CustomMetadata"] = serializeAws_restJson1_1CustomMetadataMap(
      input.CustomMetadata,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    query: query,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateFolderCommand(
  input: CreateFolderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.AuthenticationToken !== undefined) {
    headers["Authentication"] = input.AuthenticationToken.toString();
  }
  let resolvedPath = "/api/v1/folders";
  let body: any = {};
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.ParentFolderId !== undefined) {
    bodyParams["ParentFolderId"] = input.ParentFolderId;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateLabelsCommand(
  input: CreateLabelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.AuthenticationToken !== undefined) {
    headers["Authentication"] = input.AuthenticationToken.toString();
  }
  let resolvedPath = "/api/v1/resources/{ResourceId}/labels";
  if (input.ResourceId !== undefined) {
    const labelValue: any = input.ResourceId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceId.");
    }
    resolvedPath = resolvedPath.replace("{ResourceId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ResourceId.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.Labels !== undefined) {
    bodyParams["Labels"] = serializeAws_restJson1_1SharedLabels(
      input.Labels,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateNotificationSubscriptionCommand(
  input: CreateNotificationSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/api/v1/organizations/{OrganizationId}/subscriptions";
  if (input.OrganizationId !== undefined) {
    const labelValue: any = input.OrganizationId.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: OrganizationId."
      );
    }
    resolvedPath = resolvedPath.replace("{OrganizationId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: OrganizationId.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.Endpoint !== undefined) {
    bodyParams["Endpoint"] = input.Endpoint;
  }
  if (input.Protocol !== undefined) {
    bodyParams["Protocol"] = input.Protocol;
  }
  if (input.SubscriptionType !== undefined) {
    bodyParams["SubscriptionType"] = input.SubscriptionType;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateUserCommand(
  input: CreateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.AuthenticationToken !== undefined) {
    headers["Authentication"] = input.AuthenticationToken.toString();
  }
  let resolvedPath = "/api/v1/users";
  let body: any = {};
  const bodyParams: any = {};
  if (input.EmailAddress !== undefined) {
    bodyParams["EmailAddress"] = input.EmailAddress;
  }
  if (input.GivenName !== undefined) {
    bodyParams["GivenName"] = input.GivenName;
  }
  if (input.OrganizationId !== undefined) {
    bodyParams["OrganizationId"] = input.OrganizationId;
  }
  if (input.Password !== undefined) {
    bodyParams["Password"] = input.Password;
  }
  if (input.StorageRule !== undefined) {
    bodyParams["StorageRule"] = serializeAws_restJson1_1StorageRuleType(
      input.StorageRule,
      context
    );
  }
  if (input.Surname !== undefined) {
    bodyParams["Surname"] = input.Surname;
  }
  if (input.TimeZoneId !== undefined) {
    bodyParams["TimeZoneId"] = input.TimeZoneId;
  }
  if (input.Username !== undefined) {
    bodyParams["Username"] = input.Username;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DeactivateUserCommand(
  input: DeactivateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.AuthenticationToken !== undefined) {
    headers["Authentication"] = input.AuthenticationToken.toString();
  }
  let resolvedPath = "/api/v1/users/{UserId}/activation";
  if (input.UserId !== undefined) {
    const labelValue: any = input.UserId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: UserId.");
    }
    resolvedPath = resolvedPath.replace("{UserId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: UserId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteCommentCommand(
  input: DeleteCommentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.AuthenticationToken !== undefined) {
    headers["Authentication"] = input.AuthenticationToken.toString();
  }
  let resolvedPath =
    "/api/v1/documents/{DocumentId}/versions/{VersionId}/comment/{CommentId}";
  if (input.CommentId !== undefined) {
    const labelValue: any = input.CommentId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CommentId.");
    }
    resolvedPath = resolvedPath.replace("{CommentId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: CommentId.");
  }
  if (input.DocumentId !== undefined) {
    const labelValue: any = input.DocumentId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DocumentId.");
    }
    resolvedPath = resolvedPath.replace("{DocumentId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: DocumentId.");
  }
  if (input.VersionId !== undefined) {
    const labelValue: any = input.VersionId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: VersionId.");
    }
    resolvedPath = resolvedPath.replace("{VersionId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: VersionId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteCustomMetadataCommand(
  input: DeleteCustomMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.AuthenticationToken !== undefined) {
    headers["Authentication"] = input.AuthenticationToken.toString();
  }
  let resolvedPath = "/api/v1/resources/{ResourceId}/customMetadata";
  if (input.ResourceId !== undefined) {
    const labelValue: any = input.ResourceId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceId.");
    }
    resolvedPath = resolvedPath.replace("{ResourceId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ResourceId.");
  }
  const query: any = {};
  if (input.DeleteAll !== undefined) {
    query["deleteAll"] = input.DeleteAll.toString();
  }
  if (input.Keys !== undefined) {
    query["keys"] = input.Keys;
  }
  if (input.VersionId !== undefined) {
    query["versionId"] = input.VersionId.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1DeleteDocumentCommand(
  input: DeleteDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.AuthenticationToken !== undefined) {
    headers["Authentication"] = input.AuthenticationToken.toString();
  }
  let resolvedPath = "/api/v1/documents/{DocumentId}";
  if (input.DocumentId !== undefined) {
    const labelValue: any = input.DocumentId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DocumentId.");
    }
    resolvedPath = resolvedPath.replace("{DocumentId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: DocumentId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteFolderCommand(
  input: DeleteFolderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.AuthenticationToken !== undefined) {
    headers["Authentication"] = input.AuthenticationToken.toString();
  }
  let resolvedPath = "/api/v1/folders/{FolderId}";
  if (input.FolderId !== undefined) {
    const labelValue: any = input.FolderId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FolderId.");
    }
    resolvedPath = resolvedPath.replace("{FolderId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: FolderId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteFolderContentsCommand(
  input: DeleteFolderContentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.AuthenticationToken !== undefined) {
    headers["Authentication"] = input.AuthenticationToken.toString();
  }
  let resolvedPath = "/api/v1/folders/{FolderId}/contents";
  if (input.FolderId !== undefined) {
    const labelValue: any = input.FolderId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FolderId.");
    }
    resolvedPath = resolvedPath.replace("{FolderId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: FolderId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteLabelsCommand(
  input: DeleteLabelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.AuthenticationToken !== undefined) {
    headers["Authentication"] = input.AuthenticationToken.toString();
  }
  let resolvedPath = "/api/v1/resources/{ResourceId}/labels";
  if (input.ResourceId !== undefined) {
    const labelValue: any = input.ResourceId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceId.");
    }
    resolvedPath = resolvedPath.replace("{ResourceId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ResourceId.");
  }
  const query: any = {};
  if (input.DeleteAll !== undefined) {
    query["deleteAll"] = input.DeleteAll.toString();
  }
  if (input.Labels !== undefined) {
    query["labels"] = input.Labels;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1DeleteNotificationSubscriptionCommand(
  input: DeleteNotificationSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/api/v1/organizations/{OrganizationId}/subscriptions/{SubscriptionId}";
  if (input.OrganizationId !== undefined) {
    const labelValue: any = input.OrganizationId.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: OrganizationId."
      );
    }
    resolvedPath = resolvedPath.replace("{OrganizationId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: OrganizationId.");
  }
  if (input.SubscriptionId !== undefined) {
    const labelValue: any = input.SubscriptionId.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: SubscriptionId."
      );
    }
    resolvedPath = resolvedPath.replace("{SubscriptionId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: SubscriptionId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteUserCommand(
  input: DeleteUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.AuthenticationToken !== undefined) {
    headers["Authentication"] = input.AuthenticationToken.toString();
  }
  let resolvedPath = "/api/v1/users/{UserId}";
  if (input.UserId !== undefined) {
    const labelValue: any = input.UserId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: UserId.");
    }
    resolvedPath = resolvedPath.replace("{UserId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: UserId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeActivitiesCommand(
  input: DescribeActivitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.AuthenticationToken !== undefined) {
    headers["Authentication"] = input.AuthenticationToken.toString();
  }
  let resolvedPath = "/api/v1/activities";
  const query: any = {};
  if (input.ActivityTypes !== undefined) {
    query["activityTypes"] = input.ActivityTypes.toString();
  }
  if (input.EndTime !== undefined) {
    query["endTime"] = input.EndTime.toISOString();
  }
  if (input.IncludeIndirectActivities !== undefined) {
    query[
      "includeIndirectActivities"
    ] = input.IncludeIndirectActivities.toString();
  }
  if (input.Limit !== undefined) {
    query["limit"] = input.Limit.toString();
  }
  if (input.Marker !== undefined) {
    query["marker"] = input.Marker.toString();
  }
  if (input.OrganizationId !== undefined) {
    query["organizationId"] = input.OrganizationId.toString();
  }
  if (input.ResourceId !== undefined) {
    query["resourceId"] = input.ResourceId.toString();
  }
  if (input.StartTime !== undefined) {
    query["startTime"] = input.StartTime.toISOString();
  }
  if (input.UserId !== undefined) {
    query["userId"] = input.UserId.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1DescribeCommentsCommand(
  input: DescribeCommentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.AuthenticationToken !== undefined) {
    headers["Authentication"] = input.AuthenticationToken.toString();
  }
  let resolvedPath =
    "/api/v1/documents/{DocumentId}/versions/{VersionId}/comments";
  if (input.DocumentId !== undefined) {
    const labelValue: any = input.DocumentId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DocumentId.");
    }
    resolvedPath = resolvedPath.replace("{DocumentId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: DocumentId.");
  }
  if (input.VersionId !== undefined) {
    const labelValue: any = input.VersionId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: VersionId.");
    }
    resolvedPath = resolvedPath.replace("{VersionId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: VersionId.");
  }
  const query: any = {};
  if (input.Limit !== undefined) {
    query["limit"] = input.Limit.toString();
  }
  if (input.Marker !== undefined) {
    query["marker"] = input.Marker.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1DescribeDocumentVersionsCommand(
  input: DescribeDocumentVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.AuthenticationToken !== undefined) {
    headers["Authentication"] = input.AuthenticationToken.toString();
  }
  let resolvedPath = "/api/v1/documents/{DocumentId}/versions";
  if (input.DocumentId !== undefined) {
    const labelValue: any = input.DocumentId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DocumentId.");
    }
    resolvedPath = resolvedPath.replace("{DocumentId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: DocumentId.");
  }
  const query: any = {};
  if (input.Fields !== undefined) {
    query["fields"] = input.Fields.toString();
  }
  if (input.Include !== undefined) {
    query["include"] = input.Include.toString();
  }
  if (input.Limit !== undefined) {
    query["limit"] = input.Limit.toString();
  }
  if (input.Marker !== undefined) {
    query["marker"] = input.Marker.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1DescribeFolderContentsCommand(
  input: DescribeFolderContentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.AuthenticationToken !== undefined) {
    headers["Authentication"] = input.AuthenticationToken.toString();
  }
  let resolvedPath = "/api/v1/folders/{FolderId}/contents";
  if (input.FolderId !== undefined) {
    const labelValue: any = input.FolderId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FolderId.");
    }
    resolvedPath = resolvedPath.replace("{FolderId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: FolderId.");
  }
  const query: any = {};
  if (input.Include !== undefined) {
    query["include"] = input.Include.toString();
  }
  if (input.Limit !== undefined) {
    query["limit"] = input.Limit.toString();
  }
  if (input.Marker !== undefined) {
    query["marker"] = input.Marker.toString();
  }
  if (input.Order !== undefined) {
    query["order"] = input.Order.toString();
  }
  if (input.Sort !== undefined) {
    query["sort"] = input.Sort.toString();
  }
  if (input.Type !== undefined) {
    query["type"] = input.Type.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1DescribeGroupsCommand(
  input: DescribeGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.AuthenticationToken !== undefined) {
    headers["Authentication"] = input.AuthenticationToken.toString();
  }
  let resolvedPath = "/api/v1/groups";
  const query: any = {};
  if (input.Limit !== undefined) {
    query["limit"] = input.Limit.toString();
  }
  if (input.Marker !== undefined) {
    query["marker"] = input.Marker.toString();
  }
  if (input.OrganizationId !== undefined) {
    query["organizationId"] = input.OrganizationId.toString();
  }
  if (input.SearchQuery !== undefined) {
    query["searchQuery"] = input.SearchQuery.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1DescribeNotificationSubscriptionsCommand(
  input: DescribeNotificationSubscriptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/api/v1/organizations/{OrganizationId}/subscriptions";
  if (input.OrganizationId !== undefined) {
    const labelValue: any = input.OrganizationId.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: OrganizationId."
      );
    }
    resolvedPath = resolvedPath.replace("{OrganizationId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: OrganizationId.");
  }
  const query: any = {};
  if (input.Limit !== undefined) {
    query["limit"] = input.Limit.toString();
  }
  if (input.Marker !== undefined) {
    query["marker"] = input.Marker.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1DescribeResourcePermissionsCommand(
  input: DescribeResourcePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.AuthenticationToken !== undefined) {
    headers["Authentication"] = input.AuthenticationToken.toString();
  }
  let resolvedPath = "/api/v1/resources/{ResourceId}/permissions";
  if (input.ResourceId !== undefined) {
    const labelValue: any = input.ResourceId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceId.");
    }
    resolvedPath = resolvedPath.replace("{ResourceId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ResourceId.");
  }
  const query: any = {};
  if (input.Limit !== undefined) {
    query["limit"] = input.Limit.toString();
  }
  if (input.Marker !== undefined) {
    query["marker"] = input.Marker.toString();
  }
  if (input.PrincipalId !== undefined) {
    query["principalId"] = input.PrincipalId.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1DescribeRootFoldersCommand(
  input: DescribeRootFoldersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.AuthenticationToken !== undefined) {
    headers["Authentication"] = input.AuthenticationToken.toString();
  }
  let resolvedPath = "/api/v1/me/root";
  const query: any = {};
  if (input.Limit !== undefined) {
    query["limit"] = input.Limit.toString();
  }
  if (input.Marker !== undefined) {
    query["marker"] = input.Marker.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1DescribeUsersCommand(
  input: DescribeUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.AuthenticationToken !== undefined) {
    headers["Authentication"] = input.AuthenticationToken.toString();
  }
  let resolvedPath = "/api/v1/users";
  const query: any = {};
  if (input.Fields !== undefined) {
    query["fields"] = input.Fields.toString();
  }
  if (input.Include !== undefined) {
    query["include"] = input.Include.toString();
  }
  if (input.Limit !== undefined) {
    query["limit"] = input.Limit.toString();
  }
  if (input.Marker !== undefined) {
    query["marker"] = input.Marker.toString();
  }
  if (input.Order !== undefined) {
    query["order"] = input.Order.toString();
  }
  if (input.OrganizationId !== undefined) {
    query["organizationId"] = input.OrganizationId.toString();
  }
  if (input.Query !== undefined) {
    query["query"] = input.Query.toString();
  }
  if (input.Sort !== undefined) {
    query["sort"] = input.Sort.toString();
  }
  if (input.UserIds !== undefined) {
    query["userIds"] = input.UserIds.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetCurrentUserCommand(
  input: GetCurrentUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.AuthenticationToken !== undefined) {
    headers["Authentication"] = input.AuthenticationToken.toString();
  }
  let resolvedPath = "/api/v1/me";
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetDocumentCommand(
  input: GetDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.AuthenticationToken !== undefined) {
    headers["Authentication"] = input.AuthenticationToken.toString();
  }
  let resolvedPath = "/api/v1/documents/{DocumentId}";
  if (input.DocumentId !== undefined) {
    const labelValue: any = input.DocumentId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DocumentId.");
    }
    resolvedPath = resolvedPath.replace("{DocumentId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: DocumentId.");
  }
  const query: any = {};
  if (input.IncludeCustomMetadata !== undefined) {
    query["includeCustomMetadata"] = input.IncludeCustomMetadata.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetDocumentPathCommand(
  input: GetDocumentPathCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.AuthenticationToken !== undefined) {
    headers["Authentication"] = input.AuthenticationToken.toString();
  }
  let resolvedPath = "/api/v1/documents/{DocumentId}/path";
  if (input.DocumentId !== undefined) {
    const labelValue: any = input.DocumentId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DocumentId.");
    }
    resolvedPath = resolvedPath.replace("{DocumentId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: DocumentId.");
  }
  const query: any = {};
  if (input.Fields !== undefined) {
    query["fields"] = input.Fields.toString();
  }
  if (input.Limit !== undefined) {
    query["limit"] = input.Limit.toString();
  }
  if (input.Marker !== undefined) {
    query["marker"] = input.Marker.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetDocumentVersionCommand(
  input: GetDocumentVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.AuthenticationToken !== undefined) {
    headers["Authentication"] = input.AuthenticationToken.toString();
  }
  let resolvedPath = "/api/v1/documents/{DocumentId}/versions/{VersionId}";
  if (input.DocumentId !== undefined) {
    const labelValue: any = input.DocumentId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DocumentId.");
    }
    resolvedPath = resolvedPath.replace("{DocumentId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: DocumentId.");
  }
  if (input.VersionId !== undefined) {
    const labelValue: any = input.VersionId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: VersionId.");
    }
    resolvedPath = resolvedPath.replace("{VersionId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: VersionId.");
  }
  const query: any = {};
  if (input.Fields !== undefined) {
    query["fields"] = input.Fields.toString();
  }
  if (input.IncludeCustomMetadata !== undefined) {
    query["includeCustomMetadata"] = input.IncludeCustomMetadata.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetFolderCommand(
  input: GetFolderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.AuthenticationToken !== undefined) {
    headers["Authentication"] = input.AuthenticationToken.toString();
  }
  let resolvedPath = "/api/v1/folders/{FolderId}";
  if (input.FolderId !== undefined) {
    const labelValue: any = input.FolderId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FolderId.");
    }
    resolvedPath = resolvedPath.replace("{FolderId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: FolderId.");
  }
  const query: any = {};
  if (input.IncludeCustomMetadata !== undefined) {
    query["includeCustomMetadata"] = input.IncludeCustomMetadata.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetFolderPathCommand(
  input: GetFolderPathCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.AuthenticationToken !== undefined) {
    headers["Authentication"] = input.AuthenticationToken.toString();
  }
  let resolvedPath = "/api/v1/folders/{FolderId}/path";
  if (input.FolderId !== undefined) {
    const labelValue: any = input.FolderId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FolderId.");
    }
    resolvedPath = resolvedPath.replace("{FolderId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: FolderId.");
  }
  const query: any = {};
  if (input.Fields !== undefined) {
    query["fields"] = input.Fields.toString();
  }
  if (input.Limit !== undefined) {
    query["limit"] = input.Limit.toString();
  }
  if (input.Marker !== undefined) {
    query["marker"] = input.Marker.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetResourcesCommand(
  input: GetResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.AuthenticationToken !== undefined) {
    headers["Authentication"] = input.AuthenticationToken.toString();
  }
  let resolvedPath = "/api/v1/resources";
  const query: any = {};
  if (input.CollectionType !== undefined) {
    query["collectionType"] = input.CollectionType.toString();
  }
  if (input.Limit !== undefined) {
    query["limit"] = input.Limit.toString();
  }
  if (input.Marker !== undefined) {
    query["marker"] = input.Marker.toString();
  }
  if (input.UserId !== undefined) {
    query["userId"] = input.UserId.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1InitiateDocumentVersionUploadCommand(
  input: InitiateDocumentVersionUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.AuthenticationToken !== undefined) {
    headers["Authentication"] = input.AuthenticationToken.toString();
  }
  let resolvedPath = "/api/v1/documents";
  let body: any = {};
  const bodyParams: any = {};
  if (input.ContentCreatedTimestamp !== undefined) {
    bodyParams["ContentCreatedTimestamp"] = Math.round(
      input.ContentCreatedTimestamp.getTime() / 1000
    );
  }
  if (input.ContentModifiedTimestamp !== undefined) {
    bodyParams["ContentModifiedTimestamp"] = Math.round(
      input.ContentModifiedTimestamp.getTime() / 1000
    );
  }
  if (input.ContentType !== undefined) {
    bodyParams["ContentType"] = input.ContentType;
  }
  if (input.DocumentSizeInBytes !== undefined) {
    bodyParams["DocumentSizeInBytes"] = input.DocumentSizeInBytes;
  }
  if (input.Id !== undefined) {
    bodyParams["Id"] = input.Id;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.ParentFolderId !== undefined) {
    bodyParams["ParentFolderId"] = input.ParentFolderId;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1RemoveAllResourcePermissionsCommand(
  input: RemoveAllResourcePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.AuthenticationToken !== undefined) {
    headers["Authentication"] = input.AuthenticationToken.toString();
  }
  let resolvedPath = "/api/v1/resources/{ResourceId}/permissions";
  if (input.ResourceId !== undefined) {
    const labelValue: any = input.ResourceId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceId.");
    }
    resolvedPath = resolvedPath.replace("{ResourceId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ResourceId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1RemoveResourcePermissionCommand(
  input: RemoveResourcePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.AuthenticationToken !== undefined) {
    headers["Authentication"] = input.AuthenticationToken.toString();
  }
  let resolvedPath = "/api/v1/resources/{ResourceId}/permissions/{PrincipalId}";
  if (input.PrincipalId !== undefined) {
    const labelValue: any = input.PrincipalId.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: PrincipalId."
      );
    }
    resolvedPath = resolvedPath.replace("{PrincipalId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: PrincipalId.");
  }
  if (input.ResourceId !== undefined) {
    const labelValue: any = input.ResourceId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceId.");
    }
    resolvedPath = resolvedPath.replace("{ResourceId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ResourceId.");
  }
  const query: any = {};
  if (input.PrincipalType !== undefined) {
    query["type"] = input.PrincipalType.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1UpdateDocumentCommand(
  input: UpdateDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.AuthenticationToken !== undefined) {
    headers["Authentication"] = input.AuthenticationToken.toString();
  }
  let resolvedPath = "/api/v1/documents/{DocumentId}";
  if (input.DocumentId !== undefined) {
    const labelValue: any = input.DocumentId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DocumentId.");
    }
    resolvedPath = resolvedPath.replace("{DocumentId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: DocumentId.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.ParentFolderId !== undefined) {
    bodyParams["ParentFolderId"] = input.ParentFolderId;
  }
  if (input.ResourceState !== undefined) {
    bodyParams["ResourceState"] = input.ResourceState;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PATCH",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateDocumentVersionCommand(
  input: UpdateDocumentVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.AuthenticationToken !== undefined) {
    headers["Authentication"] = input.AuthenticationToken.toString();
  }
  let resolvedPath = "/api/v1/documents/{DocumentId}/versions/{VersionId}";
  if (input.DocumentId !== undefined) {
    const labelValue: any = input.DocumentId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DocumentId.");
    }
    resolvedPath = resolvedPath.replace("{DocumentId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: DocumentId.");
  }
  if (input.VersionId !== undefined) {
    const labelValue: any = input.VersionId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: VersionId.");
    }
    resolvedPath = resolvedPath.replace("{VersionId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: VersionId.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.VersionStatus !== undefined) {
    bodyParams["VersionStatus"] = input.VersionStatus;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PATCH",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateFolderCommand(
  input: UpdateFolderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.AuthenticationToken !== undefined) {
    headers["Authentication"] = input.AuthenticationToken.toString();
  }
  let resolvedPath = "/api/v1/folders/{FolderId}";
  if (input.FolderId !== undefined) {
    const labelValue: any = input.FolderId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FolderId.");
    }
    resolvedPath = resolvedPath.replace("{FolderId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: FolderId.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.ParentFolderId !== undefined) {
    bodyParams["ParentFolderId"] = input.ParentFolderId;
  }
  if (input.ResourceState !== undefined) {
    bodyParams["ResourceState"] = input.ResourceState;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PATCH",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateUserCommand(
  input: UpdateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.AuthenticationToken !== undefined) {
    headers["Authentication"] = input.AuthenticationToken.toString();
  }
  let resolvedPath = "/api/v1/users/{UserId}";
  if (input.UserId !== undefined) {
    const labelValue: any = input.UserId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: UserId.");
    }
    resolvedPath = resolvedPath.replace("{UserId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: UserId.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.GivenName !== undefined) {
    bodyParams["GivenName"] = input.GivenName;
  }
  if (input.GrantPoweruserPrivileges !== undefined) {
    bodyParams["GrantPoweruserPrivileges"] = input.GrantPoweruserPrivileges;
  }
  if (input.Locale !== undefined) {
    bodyParams["Locale"] = input.Locale;
  }
  if (input.StorageRule !== undefined) {
    bodyParams["StorageRule"] = serializeAws_restJson1_1StorageRuleType(
      input.StorageRule,
      context
    );
  }
  if (input.Surname !== undefined) {
    bodyParams["Surname"] = input.Surname;
  }
  if (input.TimeZoneId !== undefined) {
    bodyParams["TimeZoneId"] = input.TimeZoneId;
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PATCH",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1AbortDocumentVersionUploadCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AbortDocumentVersionUploadCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1AbortDocumentVersionUploadCommandError(
      output,
      context
    );
  }
  const contents: AbortDocumentVersionUploadCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1AbortDocumentVersionUploadCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AbortDocumentVersionUploadCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazon.aws.gorillaboy#EntityNotExistsException":
      response = await deserializeAws_restJson1_1EntityNotExistsExceptionResponse(
        output,
        context
      );
      break;
    case "FailedDependencyException":
    case "com.amazon.aws.gorillaboy#FailedDependencyException":
      response = await deserializeAws_restJson1_1FailedDependencyExceptionResponse(
        output,
        context
      );
      break;
    case "ProhibitedStateException":
    case "com.amazon.aws.gorillaboy#ProhibitedStateException":
      response = await deserializeAws_restJson1_1ProhibitedStateExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.gorillaboy#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazon.aws.gorillaboy#UnauthorizedOperationException":
      response = await deserializeAws_restJson1_1UnauthorizedOperationExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazon.aws.gorillaboy#UnauthorizedResourceAccessException":
      response = await deserializeAws_restJson1_1UnauthorizedResourceAccessExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.aws.gorillaboy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ActivateUserCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateUserCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ActivateUserCommandError(output, context);
  }
  const contents: ActivateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ActivateUserResponse",
    User: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.User !== undefined) {
    contents.User = deserializeAws_restJson1_1User(data.User, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ActivateUserCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateUserCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazon.aws.gorillaboy#EntityNotExistsException":
      response = await deserializeAws_restJson1_1EntityNotExistsExceptionResponse(
        output,
        context
      );
      break;
    case "FailedDependencyException":
    case "com.amazon.aws.gorillaboy#FailedDependencyException":
      response = await deserializeAws_restJson1_1FailedDependencyExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.gorillaboy#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazon.aws.gorillaboy#UnauthorizedOperationException":
      response = await deserializeAws_restJson1_1UnauthorizedOperationExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazon.aws.gorillaboy#UnauthorizedResourceAccessException":
      response = await deserializeAws_restJson1_1UnauthorizedResourceAccessExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.aws.gorillaboy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1AddResourcePermissionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddResourcePermissionsCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1AddResourcePermissionsCommandError(
      output,
      context
    );
  }
  const contents: AddResourcePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AddResourcePermissionsResponse",
    ShareResults: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ShareResults !== undefined) {
    contents.ShareResults = deserializeAws_restJson1_1ShareResultsList(
      data.ShareResults,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1AddResourcePermissionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddResourcePermissionsCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "FailedDependencyException":
    case "com.amazon.aws.gorillaboy#FailedDependencyException":
      response = await deserializeAws_restJson1_1FailedDependencyExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.gorillaboy#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazon.aws.gorillaboy#UnauthorizedOperationException":
      response = await deserializeAws_restJson1_1UnauthorizedOperationExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazon.aws.gorillaboy#UnauthorizedResourceAccessException":
      response = await deserializeAws_restJson1_1UnauthorizedResourceAccessExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.aws.gorillaboy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1CreateCommentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCommentCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateCommentCommandError(output, context);
  }
  const contents: CreateCommentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateCommentResponse",
    Comment: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Comment !== undefined) {
    contents.Comment = deserializeAws_restJson1_1Comment(data.Comment, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateCommentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCommentCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "DocumentLockedForCommentsException":
    case "com.amazon.aws.gorillaboy#DocumentLockedForCommentsException":
      response = await deserializeAws_restJson1_1DocumentLockedForCommentsExceptionResponse(
        output,
        context
      );
      break;
    case "EntityNotExistsException":
    case "com.amazon.aws.gorillaboy#EntityNotExistsException":
      response = await deserializeAws_restJson1_1EntityNotExistsExceptionResponse(
        output,
        context
      );
      break;
    case "FailedDependencyException":
    case "com.amazon.aws.gorillaboy#FailedDependencyException":
      response = await deserializeAws_restJson1_1FailedDependencyExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidCommentOperationException":
    case "com.amazon.aws.gorillaboy#InvalidCommentOperationException":
      response = await deserializeAws_restJson1_1InvalidCommentOperationExceptionResponse(
        output,
        context
      );
      break;
    case "ProhibitedStateException":
    case "com.amazon.aws.gorillaboy#ProhibitedStateException":
      response = await deserializeAws_restJson1_1ProhibitedStateExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.gorillaboy#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazon.aws.gorillaboy#UnauthorizedOperationException":
      response = await deserializeAws_restJson1_1UnauthorizedOperationExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazon.aws.gorillaboy#UnauthorizedResourceAccessException":
      response = await deserializeAws_restJson1_1UnauthorizedResourceAccessExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.aws.gorillaboy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1CreateCustomMetadataCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomMetadataCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateCustomMetadataCommandError(
      output,
      context
    );
  }
  const contents: CreateCustomMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateCustomMetadataResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateCustomMetadataCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomMetadataCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CustomMetadataLimitExceededException":
    case "com.amazon.aws.gorillaboy#CustomMetadataLimitExceededException":
      response = await deserializeAws_restJson1_1CustomMetadataLimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "EntityNotExistsException":
    case "com.amazon.aws.gorillaboy#EntityNotExistsException":
      response = await deserializeAws_restJson1_1EntityNotExistsExceptionResponse(
        output,
        context
      );
      break;
    case "FailedDependencyException":
    case "com.amazon.aws.gorillaboy#FailedDependencyException":
      response = await deserializeAws_restJson1_1FailedDependencyExceptionResponse(
        output,
        context
      );
      break;
    case "ProhibitedStateException":
    case "com.amazon.aws.gorillaboy#ProhibitedStateException":
      response = await deserializeAws_restJson1_1ProhibitedStateExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.gorillaboy#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazon.aws.gorillaboy#UnauthorizedOperationException":
      response = await deserializeAws_restJson1_1UnauthorizedOperationExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazon.aws.gorillaboy#UnauthorizedResourceAccessException":
      response = await deserializeAws_restJson1_1UnauthorizedResourceAccessExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.aws.gorillaboy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1CreateFolderCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFolderCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateFolderCommandError(output, context);
  }
  const contents: CreateFolderCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateFolderResponse",
    Metadata: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Metadata !== undefined) {
    contents.Metadata = deserializeAws_restJson1_1FolderMetadata(
      data.Metadata,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateFolderCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFolderCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazon.aws.gorillaboy#ConflictingOperationException":
      response = await deserializeAws_restJson1_1ConflictingOperationExceptionResponse(
        output,
        context
      );
      break;
    case "EntityAlreadyExistsException":
    case "com.amazon.aws.gorillaboy#EntityAlreadyExistsException":
      response = await deserializeAws_restJson1_1EntityAlreadyExistsExceptionResponse(
        output,
        context
      );
      break;
    case "EntityNotExistsException":
    case "com.amazon.aws.gorillaboy#EntityNotExistsException":
      response = await deserializeAws_restJson1_1EntityNotExistsExceptionResponse(
        output,
        context
      );
      break;
    case "FailedDependencyException":
    case "com.amazon.aws.gorillaboy#FailedDependencyException":
      response = await deserializeAws_restJson1_1FailedDependencyExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazon.aws.gorillaboy#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "ProhibitedStateException":
    case "com.amazon.aws.gorillaboy#ProhibitedStateException":
      response = await deserializeAws_restJson1_1ProhibitedStateExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.gorillaboy#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazon.aws.gorillaboy#UnauthorizedOperationException":
      response = await deserializeAws_restJson1_1UnauthorizedOperationExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazon.aws.gorillaboy#UnauthorizedResourceAccessException":
      response = await deserializeAws_restJson1_1UnauthorizedResourceAccessExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.aws.gorillaboy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1CreateLabelsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLabelsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateLabelsCommandError(output, context);
  }
  const contents: CreateLabelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateLabelsResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateLabelsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLabelsCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazon.aws.gorillaboy#EntityNotExistsException":
      response = await deserializeAws_restJson1_1EntityNotExistsExceptionResponse(
        output,
        context
      );
      break;
    case "FailedDependencyException":
    case "com.amazon.aws.gorillaboy#FailedDependencyException":
      response = await deserializeAws_restJson1_1FailedDependencyExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.gorillaboy#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyLabelsException":
    case "com.amazon.aws.gorillaboy#TooManyLabelsException":
      response = await deserializeAws_restJson1_1TooManyLabelsExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazon.aws.gorillaboy#UnauthorizedOperationException":
      response = await deserializeAws_restJson1_1UnauthorizedOperationExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazon.aws.gorillaboy#UnauthorizedResourceAccessException":
      response = await deserializeAws_restJson1_1UnauthorizedResourceAccessExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.aws.gorillaboy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1CreateNotificationSubscriptionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNotificationSubscriptionCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateNotificationSubscriptionCommandError(
      output,
      context
    );
  }
  const contents: CreateNotificationSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateNotificationSubscriptionResponse",
    Subscription: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Subscription !== undefined) {
    contents.Subscription = deserializeAws_restJson1_1Subscription(
      data.Subscription,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateNotificationSubscriptionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNotificationSubscriptionCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazon.aws.gorillaboy#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "TooManySubscriptionsException":
    case "com.amazon.aws.gorillaboy#TooManySubscriptionsException":
      response = await deserializeAws_restJson1_1TooManySubscriptionsExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazon.aws.gorillaboy#UnauthorizedResourceAccessException":
      response = await deserializeAws_restJson1_1UnauthorizedResourceAccessExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.aws.gorillaboy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1CreateUserCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateUserCommandError(output, context);
  }
  const contents: CreateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateUserResponse",
    User: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.User !== undefined) {
    contents.User = deserializeAws_restJson1_1User(data.User, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateUserCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "EntityAlreadyExistsException":
    case "com.amazon.aws.gorillaboy#EntityAlreadyExistsException":
      response = await deserializeAws_restJson1_1EntityAlreadyExistsExceptionResponse(
        output,
        context
      );
      break;
    case "FailedDependencyException":
    case "com.amazon.aws.gorillaboy#FailedDependencyException":
      response = await deserializeAws_restJson1_1FailedDependencyExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.gorillaboy#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazon.aws.gorillaboy#UnauthorizedOperationException":
      response = await deserializeAws_restJson1_1UnauthorizedOperationExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazon.aws.gorillaboy#UnauthorizedResourceAccessException":
      response = await deserializeAws_restJson1_1UnauthorizedResourceAccessExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.aws.gorillaboy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeactivateUserCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateUserCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeactivateUserCommandError(
      output,
      context
    );
  }
  const contents: DeactivateUserCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeactivateUserCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateUserCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazon.aws.gorillaboy#EntityNotExistsException":
      response = await deserializeAws_restJson1_1EntityNotExistsExceptionResponse(
        output,
        context
      );
      break;
    case "FailedDependencyException":
    case "com.amazon.aws.gorillaboy#FailedDependencyException":
      response = await deserializeAws_restJson1_1FailedDependencyExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.gorillaboy#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazon.aws.gorillaboy#UnauthorizedOperationException":
      response = await deserializeAws_restJson1_1UnauthorizedOperationExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazon.aws.gorillaboy#UnauthorizedResourceAccessException":
      response = await deserializeAws_restJson1_1UnauthorizedResourceAccessExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.aws.gorillaboy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteCommentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCommentCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteCommentCommandError(output, context);
  }
  const contents: DeleteCommentCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteCommentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCommentCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "DocumentLockedForCommentsException":
    case "com.amazon.aws.gorillaboy#DocumentLockedForCommentsException":
      response = await deserializeAws_restJson1_1DocumentLockedForCommentsExceptionResponse(
        output,
        context
      );
      break;
    case "EntityNotExistsException":
    case "com.amazon.aws.gorillaboy#EntityNotExistsException":
      response = await deserializeAws_restJson1_1EntityNotExistsExceptionResponse(
        output,
        context
      );
      break;
    case "FailedDependencyException":
    case "com.amazon.aws.gorillaboy#FailedDependencyException":
      response = await deserializeAws_restJson1_1FailedDependencyExceptionResponse(
        output,
        context
      );
      break;
    case "ProhibitedStateException":
    case "com.amazon.aws.gorillaboy#ProhibitedStateException":
      response = await deserializeAws_restJson1_1ProhibitedStateExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.gorillaboy#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazon.aws.gorillaboy#UnauthorizedOperationException":
      response = await deserializeAws_restJson1_1UnauthorizedOperationExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazon.aws.gorillaboy#UnauthorizedResourceAccessException":
      response = await deserializeAws_restJson1_1UnauthorizedResourceAccessExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.aws.gorillaboy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteCustomMetadataCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomMetadataCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteCustomMetadataCommandError(
      output,
      context
    );
  }
  const contents: DeleteCustomMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteCustomMetadataResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteCustomMetadataCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomMetadataCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazon.aws.gorillaboy#EntityNotExistsException":
      response = await deserializeAws_restJson1_1EntityNotExistsExceptionResponse(
        output,
        context
      );
      break;
    case "FailedDependencyException":
    case "com.amazon.aws.gorillaboy#FailedDependencyException":
      response = await deserializeAws_restJson1_1FailedDependencyExceptionResponse(
        output,
        context
      );
      break;
    case "ProhibitedStateException":
    case "com.amazon.aws.gorillaboy#ProhibitedStateException":
      response = await deserializeAws_restJson1_1ProhibitedStateExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.gorillaboy#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazon.aws.gorillaboy#UnauthorizedOperationException":
      response = await deserializeAws_restJson1_1UnauthorizedOperationExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazon.aws.gorillaboy#UnauthorizedResourceAccessException":
      response = await deserializeAws_restJson1_1UnauthorizedResourceAccessExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.aws.gorillaboy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteDocumentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDocumentCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteDocumentCommandError(
      output,
      context
    );
  }
  const contents: DeleteDocumentCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteDocumentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDocumentCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazon.aws.gorillaboy#ConcurrentModificationException":
      response = await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
        output,
        context
      );
      break;
    case "ConflictingOperationException":
    case "com.amazon.aws.gorillaboy#ConflictingOperationException":
      response = await deserializeAws_restJson1_1ConflictingOperationExceptionResponse(
        output,
        context
      );
      break;
    case "EntityNotExistsException":
    case "com.amazon.aws.gorillaboy#EntityNotExistsException":
      response = await deserializeAws_restJson1_1EntityNotExistsExceptionResponse(
        output,
        context
      );
      break;
    case "FailedDependencyException":
    case "com.amazon.aws.gorillaboy#FailedDependencyException":
      response = await deserializeAws_restJson1_1FailedDependencyExceptionResponse(
        output,
        context
      );
      break;
    case "ProhibitedStateException":
    case "com.amazon.aws.gorillaboy#ProhibitedStateException":
      response = await deserializeAws_restJson1_1ProhibitedStateExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.gorillaboy#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazon.aws.gorillaboy#UnauthorizedOperationException":
      response = await deserializeAws_restJson1_1UnauthorizedOperationExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazon.aws.gorillaboy#UnauthorizedResourceAccessException":
      response = await deserializeAws_restJson1_1UnauthorizedResourceAccessExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.aws.gorillaboy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteFolderCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFolderCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteFolderCommandError(output, context);
  }
  const contents: DeleteFolderCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteFolderCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFolderCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazon.aws.gorillaboy#ConcurrentModificationException":
      response = await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
        output,
        context
      );
      break;
    case "ConflictingOperationException":
    case "com.amazon.aws.gorillaboy#ConflictingOperationException":
      response = await deserializeAws_restJson1_1ConflictingOperationExceptionResponse(
        output,
        context
      );
      break;
    case "EntityNotExistsException":
    case "com.amazon.aws.gorillaboy#EntityNotExistsException":
      response = await deserializeAws_restJson1_1EntityNotExistsExceptionResponse(
        output,
        context
      );
      break;
    case "FailedDependencyException":
    case "com.amazon.aws.gorillaboy#FailedDependencyException":
      response = await deserializeAws_restJson1_1FailedDependencyExceptionResponse(
        output,
        context
      );
      break;
    case "ProhibitedStateException":
    case "com.amazon.aws.gorillaboy#ProhibitedStateException":
      response = await deserializeAws_restJson1_1ProhibitedStateExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.gorillaboy#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazon.aws.gorillaboy#UnauthorizedOperationException":
      response = await deserializeAws_restJson1_1UnauthorizedOperationExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazon.aws.gorillaboy#UnauthorizedResourceAccessException":
      response = await deserializeAws_restJson1_1UnauthorizedResourceAccessExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.aws.gorillaboy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteFolderContentsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFolderContentsCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteFolderContentsCommandError(
      output,
      context
    );
  }
  const contents: DeleteFolderContentsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteFolderContentsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFolderContentsCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazon.aws.gorillaboy#ConflictingOperationException":
      response = await deserializeAws_restJson1_1ConflictingOperationExceptionResponse(
        output,
        context
      );
      break;
    case "EntityNotExistsException":
    case "com.amazon.aws.gorillaboy#EntityNotExistsException":
      response = await deserializeAws_restJson1_1EntityNotExistsExceptionResponse(
        output,
        context
      );
      break;
    case "FailedDependencyException":
    case "com.amazon.aws.gorillaboy#FailedDependencyException":
      response = await deserializeAws_restJson1_1FailedDependencyExceptionResponse(
        output,
        context
      );
      break;
    case "ProhibitedStateException":
    case "com.amazon.aws.gorillaboy#ProhibitedStateException":
      response = await deserializeAws_restJson1_1ProhibitedStateExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.gorillaboy#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazon.aws.gorillaboy#UnauthorizedOperationException":
      response = await deserializeAws_restJson1_1UnauthorizedOperationExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazon.aws.gorillaboy#UnauthorizedResourceAccessException":
      response = await deserializeAws_restJson1_1UnauthorizedResourceAccessExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.aws.gorillaboy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteLabelsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLabelsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteLabelsCommandError(output, context);
  }
  const contents: DeleteLabelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteLabelsResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteLabelsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLabelsCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazon.aws.gorillaboy#EntityNotExistsException":
      response = await deserializeAws_restJson1_1EntityNotExistsExceptionResponse(
        output,
        context
      );
      break;
    case "FailedDependencyException":
    case "com.amazon.aws.gorillaboy#FailedDependencyException":
      response = await deserializeAws_restJson1_1FailedDependencyExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.gorillaboy#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazon.aws.gorillaboy#UnauthorizedOperationException":
      response = await deserializeAws_restJson1_1UnauthorizedOperationExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazon.aws.gorillaboy#UnauthorizedResourceAccessException":
      response = await deserializeAws_restJson1_1UnauthorizedResourceAccessExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.aws.gorillaboy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteNotificationSubscriptionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNotificationSubscriptionCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteNotificationSubscriptionCommandError(
      output,
      context
    );
  }
  const contents: DeleteNotificationSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteNotificationSubscriptionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNotificationSubscriptionCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazon.aws.gorillaboy#EntityNotExistsException":
      response = await deserializeAws_restJson1_1EntityNotExistsExceptionResponse(
        output,
        context
      );
      break;
    case "ProhibitedStateException":
    case "com.amazon.aws.gorillaboy#ProhibitedStateException":
      response = await deserializeAws_restJson1_1ProhibitedStateExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.gorillaboy#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazon.aws.gorillaboy#UnauthorizedResourceAccessException":
      response = await deserializeAws_restJson1_1UnauthorizedResourceAccessExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.aws.gorillaboy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteUserCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteUserCommandError(output, context);
  }
  const contents: DeleteUserCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteUserCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazon.aws.gorillaboy#EntityNotExistsException":
      response = await deserializeAws_restJson1_1EntityNotExistsExceptionResponse(
        output,
        context
      );
      break;
    case "FailedDependencyException":
    case "com.amazon.aws.gorillaboy#FailedDependencyException":
      response = await deserializeAws_restJson1_1FailedDependencyExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.gorillaboy#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazon.aws.gorillaboy#UnauthorizedOperationException":
      response = await deserializeAws_restJson1_1UnauthorizedOperationExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazon.aws.gorillaboy#UnauthorizedResourceAccessException":
      response = await deserializeAws_restJson1_1UnauthorizedResourceAccessExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.aws.gorillaboy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DescribeActivitiesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActivitiesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeActivitiesCommandError(
      output,
      context
    );
  }
  const contents: DescribeActivitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeActivitiesResponse",
    Marker: undefined,
    UserActivities: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Marker !== undefined) {
    contents.Marker = data.Marker;
  }
  if (data.UserActivities !== undefined) {
    contents.UserActivities = deserializeAws_restJson1_1UserActivities(
      data.UserActivities,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeActivitiesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActivitiesCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "FailedDependencyException":
    case "com.amazon.aws.gorillaboy#FailedDependencyException":
      response = await deserializeAws_restJson1_1FailedDependencyExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidArgumentException":
    case "com.amazon.aws.gorillaboy#InvalidArgumentException":
      response = await deserializeAws_restJson1_1InvalidArgumentExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.gorillaboy#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazon.aws.gorillaboy#UnauthorizedOperationException":
      response = await deserializeAws_restJson1_1UnauthorizedOperationExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazon.aws.gorillaboy#UnauthorizedResourceAccessException":
      response = await deserializeAws_restJson1_1UnauthorizedResourceAccessExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.aws.gorillaboy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DescribeCommentsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCommentsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeCommentsCommandError(
      output,
      context
    );
  }
  const contents: DescribeCommentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeCommentsResponse",
    Comments: undefined,
    Marker: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Comments !== undefined) {
    contents.Comments = deserializeAws_restJson1_1CommentList(
      data.Comments,
      context
    );
  }
  if (data.Marker !== undefined) {
    contents.Marker = data.Marker;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeCommentsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCommentsCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazon.aws.gorillaboy#EntityNotExistsException":
      response = await deserializeAws_restJson1_1EntityNotExistsExceptionResponse(
        output,
        context
      );
      break;
    case "FailedDependencyException":
    case "com.amazon.aws.gorillaboy#FailedDependencyException":
      response = await deserializeAws_restJson1_1FailedDependencyExceptionResponse(
        output,
        context
      );
      break;
    case "ProhibitedStateException":
    case "com.amazon.aws.gorillaboy#ProhibitedStateException":
      response = await deserializeAws_restJson1_1ProhibitedStateExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.gorillaboy#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazon.aws.gorillaboy#UnauthorizedOperationException":
      response = await deserializeAws_restJson1_1UnauthorizedOperationExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazon.aws.gorillaboy#UnauthorizedResourceAccessException":
      response = await deserializeAws_restJson1_1UnauthorizedResourceAccessExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.aws.gorillaboy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DescribeDocumentVersionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDocumentVersionsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeDocumentVersionsCommandError(
      output,
      context
    );
  }
  const contents: DescribeDocumentVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeDocumentVersionsResponse",
    DocumentVersions: undefined,
    Marker: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DocumentVersions !== undefined) {
    contents.DocumentVersions = deserializeAws_restJson1_1DocumentVersionMetadataList(
      data.DocumentVersions,
      context
    );
  }
  if (data.Marker !== undefined) {
    contents.Marker = data.Marker;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeDocumentVersionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDocumentVersionsCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazon.aws.gorillaboy#EntityNotExistsException":
      response = await deserializeAws_restJson1_1EntityNotExistsExceptionResponse(
        output,
        context
      );
      break;
    case "FailedDependencyException":
    case "com.amazon.aws.gorillaboy#FailedDependencyException":
      response = await deserializeAws_restJson1_1FailedDependencyExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidArgumentException":
    case "com.amazon.aws.gorillaboy#InvalidArgumentException":
      response = await deserializeAws_restJson1_1InvalidArgumentExceptionResponse(
        output,
        context
      );
      break;
    case "ProhibitedStateException":
    case "com.amazon.aws.gorillaboy#ProhibitedStateException":
      response = await deserializeAws_restJson1_1ProhibitedStateExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.gorillaboy#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazon.aws.gorillaboy#UnauthorizedOperationException":
      response = await deserializeAws_restJson1_1UnauthorizedOperationExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazon.aws.gorillaboy#UnauthorizedResourceAccessException":
      response = await deserializeAws_restJson1_1UnauthorizedResourceAccessExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.aws.gorillaboy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DescribeFolderContentsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFolderContentsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeFolderContentsCommandError(
      output,
      context
    );
  }
  const contents: DescribeFolderContentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeFolderContentsResponse",
    Documents: undefined,
    Folders: undefined,
    Marker: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Documents !== undefined) {
    contents.Documents = deserializeAws_restJson1_1DocumentMetadataList(
      data.Documents,
      context
    );
  }
  if (data.Folders !== undefined) {
    contents.Folders = deserializeAws_restJson1_1FolderMetadataList(
      data.Folders,
      context
    );
  }
  if (data.Marker !== undefined) {
    contents.Marker = data.Marker;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeFolderContentsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFolderContentsCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazon.aws.gorillaboy#EntityNotExistsException":
      response = await deserializeAws_restJson1_1EntityNotExistsExceptionResponse(
        output,
        context
      );
      break;
    case "FailedDependencyException":
    case "com.amazon.aws.gorillaboy#FailedDependencyException":
      response = await deserializeAws_restJson1_1FailedDependencyExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidArgumentException":
    case "com.amazon.aws.gorillaboy#InvalidArgumentException":
      response = await deserializeAws_restJson1_1InvalidArgumentExceptionResponse(
        output,
        context
      );
      break;
    case "ProhibitedStateException":
    case "com.amazon.aws.gorillaboy#ProhibitedStateException":
      response = await deserializeAws_restJson1_1ProhibitedStateExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.gorillaboy#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazon.aws.gorillaboy#UnauthorizedResourceAccessException":
      response = await deserializeAws_restJson1_1UnauthorizedResourceAccessExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.aws.gorillaboy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DescribeGroupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGroupsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeGroupsCommandError(
      output,
      context
    );
  }
  const contents: DescribeGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeGroupsResponse",
    Groups: undefined,
    Marker: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Groups !== undefined) {
    contents.Groups = deserializeAws_restJson1_1GroupMetadataList(
      data.Groups,
      context
    );
  }
  if (data.Marker !== undefined) {
    contents.Marker = data.Marker;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeGroupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGroupsCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "FailedDependencyException":
    case "com.amazon.aws.gorillaboy#FailedDependencyException":
      response = await deserializeAws_restJson1_1FailedDependencyExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.gorillaboy#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazon.aws.gorillaboy#UnauthorizedOperationException":
      response = await deserializeAws_restJson1_1UnauthorizedOperationExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazon.aws.gorillaboy#UnauthorizedResourceAccessException":
      response = await deserializeAws_restJson1_1UnauthorizedResourceAccessExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.aws.gorillaboy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DescribeNotificationSubscriptionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNotificationSubscriptionsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeNotificationSubscriptionsCommandError(
      output,
      context
    );
  }
  const contents: DescribeNotificationSubscriptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeNotificationSubscriptionsResponse",
    Marker: undefined,
    Subscriptions: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Marker !== undefined) {
    contents.Marker = data.Marker;
  }
  if (data.Subscriptions !== undefined) {
    contents.Subscriptions = deserializeAws_restJson1_1SubscriptionList(
      data.Subscriptions,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeNotificationSubscriptionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNotificationSubscriptionsCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazon.aws.gorillaboy#EntityNotExistsException":
      response = await deserializeAws_restJson1_1EntityNotExistsExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.gorillaboy#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazon.aws.gorillaboy#UnauthorizedResourceAccessException":
      response = await deserializeAws_restJson1_1UnauthorizedResourceAccessExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.aws.gorillaboy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DescribeResourcePermissionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourcePermissionsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeResourcePermissionsCommandError(
      output,
      context
    );
  }
  const contents: DescribeResourcePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeResourcePermissionsResponse",
    Marker: undefined,
    Principals: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Marker !== undefined) {
    contents.Marker = data.Marker;
  }
  if (data.Principals !== undefined) {
    contents.Principals = deserializeAws_restJson1_1PrincipalList(
      data.Principals,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeResourcePermissionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourcePermissionsCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "FailedDependencyException":
    case "com.amazon.aws.gorillaboy#FailedDependencyException":
      response = await deserializeAws_restJson1_1FailedDependencyExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.gorillaboy#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazon.aws.gorillaboy#UnauthorizedOperationException":
      response = await deserializeAws_restJson1_1UnauthorizedOperationExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazon.aws.gorillaboy#UnauthorizedResourceAccessException":
      response = await deserializeAws_restJson1_1UnauthorizedResourceAccessExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.aws.gorillaboy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DescribeRootFoldersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRootFoldersCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeRootFoldersCommandError(
      output,
      context
    );
  }
  const contents: DescribeRootFoldersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeRootFoldersResponse",
    Folders: undefined,
    Marker: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Folders !== undefined) {
    contents.Folders = deserializeAws_restJson1_1FolderMetadataList(
      data.Folders,
      context
    );
  }
  if (data.Marker !== undefined) {
    contents.Marker = data.Marker;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeRootFoldersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRootFoldersCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "FailedDependencyException":
    case "com.amazon.aws.gorillaboy#FailedDependencyException":
      response = await deserializeAws_restJson1_1FailedDependencyExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidArgumentException":
    case "com.amazon.aws.gorillaboy#InvalidArgumentException":
      response = await deserializeAws_restJson1_1InvalidArgumentExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.gorillaboy#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazon.aws.gorillaboy#UnauthorizedOperationException":
      response = await deserializeAws_restJson1_1UnauthorizedOperationExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazon.aws.gorillaboy#UnauthorizedResourceAccessException":
      response = await deserializeAws_restJson1_1UnauthorizedResourceAccessExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.aws.gorillaboy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DescribeUsersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUsersCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeUsersCommandError(output, context);
  }
  const contents: DescribeUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeUsersResponse",
    Marker: undefined,
    TotalNumberOfUsers: undefined,
    Users: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Marker !== undefined) {
    contents.Marker = data.Marker;
  }
  if (data.TotalNumberOfUsers !== undefined) {
    contents.TotalNumberOfUsers = data.TotalNumberOfUsers;
  }
  if (data.Users !== undefined) {
    contents.Users = deserializeAws_restJson1_1OrganizationUserList(
      data.Users,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeUsersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUsersCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazon.aws.gorillaboy#EntityNotExistsException":
      response = await deserializeAws_restJson1_1EntityNotExistsExceptionResponse(
        output,
        context
      );
      break;
    case "FailedDependencyException":
    case "com.amazon.aws.gorillaboy#FailedDependencyException":
      response = await deserializeAws_restJson1_1FailedDependencyExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidArgumentException":
    case "com.amazon.aws.gorillaboy#InvalidArgumentException":
      response = await deserializeAws_restJson1_1InvalidArgumentExceptionResponse(
        output,
        context
      );
      break;
    case "RequestedEntityTooLargeException":
    case "com.amazon.aws.gorillaboy#RequestedEntityTooLargeException":
      response = await deserializeAws_restJson1_1RequestedEntityTooLargeExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.gorillaboy#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazon.aws.gorillaboy#UnauthorizedOperationException":
      response = await deserializeAws_restJson1_1UnauthorizedOperationExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazon.aws.gorillaboy#UnauthorizedResourceAccessException":
      response = await deserializeAws_restJson1_1UnauthorizedResourceAccessExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.aws.gorillaboy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetCurrentUserCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCurrentUserCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetCurrentUserCommandError(
      output,
      context
    );
  }
  const contents: GetCurrentUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetCurrentUserResponse",
    User: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.User !== undefined) {
    contents.User = deserializeAws_restJson1_1User(data.User, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetCurrentUserCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCurrentUserCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazon.aws.gorillaboy#EntityNotExistsException":
      response = await deserializeAws_restJson1_1EntityNotExistsExceptionResponse(
        output,
        context
      );
      break;
    case "FailedDependencyException":
    case "com.amazon.aws.gorillaboy#FailedDependencyException":
      response = await deserializeAws_restJson1_1FailedDependencyExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.gorillaboy#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazon.aws.gorillaboy#UnauthorizedOperationException":
      response = await deserializeAws_restJson1_1UnauthorizedOperationExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazon.aws.gorillaboy#UnauthorizedResourceAccessException":
      response = await deserializeAws_restJson1_1UnauthorizedResourceAccessExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.aws.gorillaboy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetDocumentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetDocumentCommandError(output, context);
  }
  const contents: GetDocumentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDocumentResponse",
    CustomMetadata: undefined,
    Metadata: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.CustomMetadata !== undefined) {
    contents.CustomMetadata = deserializeAws_restJson1_1CustomMetadataMap(
      data.CustomMetadata,
      context
    );
  }
  if (data.Metadata !== undefined) {
    contents.Metadata = deserializeAws_restJson1_1DocumentMetadata(
      data.Metadata,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetDocumentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazon.aws.gorillaboy#EntityNotExistsException":
      response = await deserializeAws_restJson1_1EntityNotExistsExceptionResponse(
        output,
        context
      );
      break;
    case "FailedDependencyException":
    case "com.amazon.aws.gorillaboy#FailedDependencyException":
      response = await deserializeAws_restJson1_1FailedDependencyExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidArgumentException":
    case "com.amazon.aws.gorillaboy#InvalidArgumentException":
      response = await deserializeAws_restJson1_1InvalidArgumentExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidPasswordException":
    case "com.amazon.aws.gorillaboy#InvalidPasswordException":
      response = await deserializeAws_restJson1_1InvalidPasswordExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.gorillaboy#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazon.aws.gorillaboy#UnauthorizedOperationException":
      response = await deserializeAws_restJson1_1UnauthorizedOperationExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazon.aws.gorillaboy#UnauthorizedResourceAccessException":
      response = await deserializeAws_restJson1_1UnauthorizedResourceAccessExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.aws.gorillaboy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetDocumentPathCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentPathCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetDocumentPathCommandError(
      output,
      context
    );
  }
  const contents: GetDocumentPathCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDocumentPathResponse",
    Path: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Path !== undefined) {
    contents.Path = deserializeAws_restJson1_1ResourcePath(data.Path, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetDocumentPathCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentPathCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazon.aws.gorillaboy#EntityNotExistsException":
      response = await deserializeAws_restJson1_1EntityNotExistsExceptionResponse(
        output,
        context
      );
      break;
    case "FailedDependencyException":
    case "com.amazon.aws.gorillaboy#FailedDependencyException":
      response = await deserializeAws_restJson1_1FailedDependencyExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.gorillaboy#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazon.aws.gorillaboy#UnauthorizedOperationException":
      response = await deserializeAws_restJson1_1UnauthorizedOperationExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazon.aws.gorillaboy#UnauthorizedResourceAccessException":
      response = await deserializeAws_restJson1_1UnauthorizedResourceAccessExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.aws.gorillaboy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetDocumentVersionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentVersionCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetDocumentVersionCommandError(
      output,
      context
    );
  }
  const contents: GetDocumentVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDocumentVersionResponse",
    CustomMetadata: undefined,
    Metadata: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.CustomMetadata !== undefined) {
    contents.CustomMetadata = deserializeAws_restJson1_1CustomMetadataMap(
      data.CustomMetadata,
      context
    );
  }
  if (data.Metadata !== undefined) {
    contents.Metadata = deserializeAws_restJson1_1DocumentVersionMetadata(
      data.Metadata,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetDocumentVersionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentVersionCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazon.aws.gorillaboy#EntityNotExistsException":
      response = await deserializeAws_restJson1_1EntityNotExistsExceptionResponse(
        output,
        context
      );
      break;
    case "FailedDependencyException":
    case "com.amazon.aws.gorillaboy#FailedDependencyException":
      response = await deserializeAws_restJson1_1FailedDependencyExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidPasswordException":
    case "com.amazon.aws.gorillaboy#InvalidPasswordException":
      response = await deserializeAws_restJson1_1InvalidPasswordExceptionResponse(
        output,
        context
      );
      break;
    case "ProhibitedStateException":
    case "com.amazon.aws.gorillaboy#ProhibitedStateException":
      response = await deserializeAws_restJson1_1ProhibitedStateExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.gorillaboy#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazon.aws.gorillaboy#UnauthorizedOperationException":
      response = await deserializeAws_restJson1_1UnauthorizedOperationExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazon.aws.gorillaboy#UnauthorizedResourceAccessException":
      response = await deserializeAws_restJson1_1UnauthorizedResourceAccessExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.aws.gorillaboy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetFolderCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFolderCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetFolderCommandError(output, context);
  }
  const contents: GetFolderCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetFolderResponse",
    CustomMetadata: undefined,
    Metadata: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.CustomMetadata !== undefined) {
    contents.CustomMetadata = deserializeAws_restJson1_1CustomMetadataMap(
      data.CustomMetadata,
      context
    );
  }
  if (data.Metadata !== undefined) {
    contents.Metadata = deserializeAws_restJson1_1FolderMetadata(
      data.Metadata,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetFolderCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFolderCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazon.aws.gorillaboy#EntityNotExistsException":
      response = await deserializeAws_restJson1_1EntityNotExistsExceptionResponse(
        output,
        context
      );
      break;
    case "FailedDependencyException":
    case "com.amazon.aws.gorillaboy#FailedDependencyException":
      response = await deserializeAws_restJson1_1FailedDependencyExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidArgumentException":
    case "com.amazon.aws.gorillaboy#InvalidArgumentException":
      response = await deserializeAws_restJson1_1InvalidArgumentExceptionResponse(
        output,
        context
      );
      break;
    case "ProhibitedStateException":
    case "com.amazon.aws.gorillaboy#ProhibitedStateException":
      response = await deserializeAws_restJson1_1ProhibitedStateExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.gorillaboy#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazon.aws.gorillaboy#UnauthorizedOperationException":
      response = await deserializeAws_restJson1_1UnauthorizedOperationExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazon.aws.gorillaboy#UnauthorizedResourceAccessException":
      response = await deserializeAws_restJson1_1UnauthorizedResourceAccessExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.aws.gorillaboy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetFolderPathCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFolderPathCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetFolderPathCommandError(output, context);
  }
  const contents: GetFolderPathCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetFolderPathResponse",
    Path: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Path !== undefined) {
    contents.Path = deserializeAws_restJson1_1ResourcePath(data.Path, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetFolderPathCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFolderPathCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazon.aws.gorillaboy#EntityNotExistsException":
      response = await deserializeAws_restJson1_1EntityNotExistsExceptionResponse(
        output,
        context
      );
      break;
    case "FailedDependencyException":
    case "com.amazon.aws.gorillaboy#FailedDependencyException":
      response = await deserializeAws_restJson1_1FailedDependencyExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.gorillaboy#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazon.aws.gorillaboy#UnauthorizedOperationException":
      response = await deserializeAws_restJson1_1UnauthorizedOperationExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazon.aws.gorillaboy#UnauthorizedResourceAccessException":
      response = await deserializeAws_restJson1_1UnauthorizedResourceAccessExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.aws.gorillaboy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetResourcesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetResourcesCommandError(output, context);
  }
  const contents: GetResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetResourcesResponse",
    Documents: undefined,
    Folders: undefined,
    Marker: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Documents !== undefined) {
    contents.Documents = deserializeAws_restJson1_1DocumentMetadataList(
      data.Documents,
      context
    );
  }
  if (data.Folders !== undefined) {
    contents.Folders = deserializeAws_restJson1_1FolderMetadataList(
      data.Folders,
      context
    );
  }
  if (data.Marker !== undefined) {
    contents.Marker = data.Marker;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetResourcesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcesCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "FailedDependencyException":
    case "com.amazon.aws.gorillaboy#FailedDependencyException":
      response = await deserializeAws_restJson1_1FailedDependencyExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidArgumentException":
    case "com.amazon.aws.gorillaboy#InvalidArgumentException":
      response = await deserializeAws_restJson1_1InvalidArgumentExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.gorillaboy#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazon.aws.gorillaboy#UnauthorizedOperationException":
      response = await deserializeAws_restJson1_1UnauthorizedOperationExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazon.aws.gorillaboy#UnauthorizedResourceAccessException":
      response = await deserializeAws_restJson1_1UnauthorizedResourceAccessExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.aws.gorillaboy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1InitiateDocumentVersionUploadCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateDocumentVersionUploadCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1InitiateDocumentVersionUploadCommandError(
      output,
      context
    );
  }
  const contents: InitiateDocumentVersionUploadCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "InitiateDocumentVersionUploadResponse",
    Metadata: undefined,
    UploadMetadata: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Metadata !== undefined) {
    contents.Metadata = deserializeAws_restJson1_1DocumentMetadata(
      data.Metadata,
      context
    );
  }
  if (data.UploadMetadata !== undefined) {
    contents.UploadMetadata = deserializeAws_restJson1_1UploadMetadata(
      data.UploadMetadata,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1InitiateDocumentVersionUploadCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateDocumentVersionUploadCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "DraftUploadOutOfSyncException":
    case "com.amazon.aws.gorillaboy#DraftUploadOutOfSyncException":
      response = await deserializeAws_restJson1_1DraftUploadOutOfSyncExceptionResponse(
        output,
        context
      );
      break;
    case "EntityAlreadyExistsException":
    case "com.amazon.aws.gorillaboy#EntityAlreadyExistsException":
      response = await deserializeAws_restJson1_1EntityAlreadyExistsExceptionResponse(
        output,
        context
      );
      break;
    case "EntityNotExistsException":
    case "com.amazon.aws.gorillaboy#EntityNotExistsException":
      response = await deserializeAws_restJson1_1EntityNotExistsExceptionResponse(
        output,
        context
      );
      break;
    case "FailedDependencyException":
    case "com.amazon.aws.gorillaboy#FailedDependencyException":
      response = await deserializeAws_restJson1_1FailedDependencyExceptionResponse(
        output,
        context
      );
      break;
    case "ProhibitedStateException":
    case "com.amazon.aws.gorillaboy#ProhibitedStateException":
      response = await deserializeAws_restJson1_1ProhibitedStateExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceAlreadyCheckedOutException":
    case "com.amazon.aws.gorillaboy#ResourceAlreadyCheckedOutException":
      response = await deserializeAws_restJson1_1ResourceAlreadyCheckedOutExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.gorillaboy#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "StorageLimitExceededException":
    case "com.amazon.aws.gorillaboy#StorageLimitExceededException":
      response = await deserializeAws_restJson1_1StorageLimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "StorageLimitWillExceedException":
    case "com.amazon.aws.gorillaboy#StorageLimitWillExceedException":
      response = await deserializeAws_restJson1_1StorageLimitWillExceedExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazon.aws.gorillaboy#UnauthorizedOperationException":
      response = await deserializeAws_restJson1_1UnauthorizedOperationExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazon.aws.gorillaboy#UnauthorizedResourceAccessException":
      response = await deserializeAws_restJson1_1UnauthorizedResourceAccessExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.aws.gorillaboy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1RemoveAllResourcePermissionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveAllResourcePermissionsCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1RemoveAllResourcePermissionsCommandError(
      output,
      context
    );
  }
  const contents: RemoveAllResourcePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1RemoveAllResourcePermissionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveAllResourcePermissionsCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "FailedDependencyException":
    case "com.amazon.aws.gorillaboy#FailedDependencyException":
      response = await deserializeAws_restJson1_1FailedDependencyExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.gorillaboy#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazon.aws.gorillaboy#UnauthorizedOperationException":
      response = await deserializeAws_restJson1_1UnauthorizedOperationExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazon.aws.gorillaboy#UnauthorizedResourceAccessException":
      response = await deserializeAws_restJson1_1UnauthorizedResourceAccessExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.aws.gorillaboy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1RemoveResourcePermissionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveResourcePermissionCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1RemoveResourcePermissionCommandError(
      output,
      context
    );
  }
  const contents: RemoveResourcePermissionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1RemoveResourcePermissionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveResourcePermissionCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "FailedDependencyException":
    case "com.amazon.aws.gorillaboy#FailedDependencyException":
      response = await deserializeAws_restJson1_1FailedDependencyExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.gorillaboy#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazon.aws.gorillaboy#UnauthorizedOperationException":
      response = await deserializeAws_restJson1_1UnauthorizedOperationExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazon.aws.gorillaboy#UnauthorizedResourceAccessException":
      response = await deserializeAws_restJson1_1UnauthorizedResourceAccessExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.aws.gorillaboy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdateDocumentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDocumentCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateDocumentCommandError(
      output,
      context
    );
  }
  const contents: UpdateDocumentCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateDocumentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDocumentCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazon.aws.gorillaboy#ConcurrentModificationException":
      response = await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
        output,
        context
      );
      break;
    case "ConflictingOperationException":
    case "com.amazon.aws.gorillaboy#ConflictingOperationException":
      response = await deserializeAws_restJson1_1ConflictingOperationExceptionResponse(
        output,
        context
      );
      break;
    case "EntityAlreadyExistsException":
    case "com.amazon.aws.gorillaboy#EntityAlreadyExistsException":
      response = await deserializeAws_restJson1_1EntityAlreadyExistsExceptionResponse(
        output,
        context
      );
      break;
    case "EntityNotExistsException":
    case "com.amazon.aws.gorillaboy#EntityNotExistsException":
      response = await deserializeAws_restJson1_1EntityNotExistsExceptionResponse(
        output,
        context
      );
      break;
    case "FailedDependencyException":
    case "com.amazon.aws.gorillaboy#FailedDependencyException":
      response = await deserializeAws_restJson1_1FailedDependencyExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazon.aws.gorillaboy#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "ProhibitedStateException":
    case "com.amazon.aws.gorillaboy#ProhibitedStateException":
      response = await deserializeAws_restJson1_1ProhibitedStateExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.gorillaboy#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazon.aws.gorillaboy#UnauthorizedOperationException":
      response = await deserializeAws_restJson1_1UnauthorizedOperationExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazon.aws.gorillaboy#UnauthorizedResourceAccessException":
      response = await deserializeAws_restJson1_1UnauthorizedResourceAccessExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.aws.gorillaboy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdateDocumentVersionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDocumentVersionCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateDocumentVersionCommandError(
      output,
      context
    );
  }
  const contents: UpdateDocumentVersionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateDocumentVersionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDocumentVersionCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazon.aws.gorillaboy#ConcurrentModificationException":
      response = await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
        output,
        context
      );
      break;
    case "EntityNotExistsException":
    case "com.amazon.aws.gorillaboy#EntityNotExistsException":
      response = await deserializeAws_restJson1_1EntityNotExistsExceptionResponse(
        output,
        context
      );
      break;
    case "FailedDependencyException":
    case "com.amazon.aws.gorillaboy#FailedDependencyException":
      response = await deserializeAws_restJson1_1FailedDependencyExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidOperationException":
    case "com.amazon.aws.gorillaboy#InvalidOperationException":
      response = await deserializeAws_restJson1_1InvalidOperationExceptionResponse(
        output,
        context
      );
      break;
    case "ProhibitedStateException":
    case "com.amazon.aws.gorillaboy#ProhibitedStateException":
      response = await deserializeAws_restJson1_1ProhibitedStateExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.gorillaboy#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazon.aws.gorillaboy#UnauthorizedOperationException":
      response = await deserializeAws_restJson1_1UnauthorizedOperationExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazon.aws.gorillaboy#UnauthorizedResourceAccessException":
      response = await deserializeAws_restJson1_1UnauthorizedResourceAccessExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.aws.gorillaboy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdateFolderCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFolderCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateFolderCommandError(output, context);
  }
  const contents: UpdateFolderCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateFolderCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFolderCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazon.aws.gorillaboy#ConcurrentModificationException":
      response = await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
        output,
        context
      );
      break;
    case "ConflictingOperationException":
    case "com.amazon.aws.gorillaboy#ConflictingOperationException":
      response = await deserializeAws_restJson1_1ConflictingOperationExceptionResponse(
        output,
        context
      );
      break;
    case "EntityAlreadyExistsException":
    case "com.amazon.aws.gorillaboy#EntityAlreadyExistsException":
      response = await deserializeAws_restJson1_1EntityAlreadyExistsExceptionResponse(
        output,
        context
      );
      break;
    case "EntityNotExistsException":
    case "com.amazon.aws.gorillaboy#EntityNotExistsException":
      response = await deserializeAws_restJson1_1EntityNotExistsExceptionResponse(
        output,
        context
      );
      break;
    case "FailedDependencyException":
    case "com.amazon.aws.gorillaboy#FailedDependencyException":
      response = await deserializeAws_restJson1_1FailedDependencyExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazon.aws.gorillaboy#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "ProhibitedStateException":
    case "com.amazon.aws.gorillaboy#ProhibitedStateException":
      response = await deserializeAws_restJson1_1ProhibitedStateExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.gorillaboy#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazon.aws.gorillaboy#UnauthorizedOperationException":
      response = await deserializeAws_restJson1_1UnauthorizedOperationExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazon.aws.gorillaboy#UnauthorizedResourceAccessException":
      response = await deserializeAws_restJson1_1UnauthorizedResourceAccessExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.aws.gorillaboy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdateUserCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateUserCommandError(output, context);
  }
  const contents: UpdateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateUserResponse",
    User: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.User !== undefined) {
    contents.User = deserializeAws_restJson1_1User(data.User, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateUserCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "DeactivatingLastSystemUserException":
    case "com.amazon.aws.gorillaboy#DeactivatingLastSystemUserException":
      response = await deserializeAws_restJson1_1DeactivatingLastSystemUserExceptionResponse(
        output,
        context
      );
      break;
    case "EntityNotExistsException":
    case "com.amazon.aws.gorillaboy#EntityNotExistsException":
      response = await deserializeAws_restJson1_1EntityNotExistsExceptionResponse(
        output,
        context
      );
      break;
    case "FailedDependencyException":
    case "com.amazon.aws.gorillaboy#FailedDependencyException":
      response = await deserializeAws_restJson1_1FailedDependencyExceptionResponse(
        output,
        context
      );
      break;
    case "IllegalUserStateException":
    case "com.amazon.aws.gorillaboy#IllegalUserStateException":
      response = await deserializeAws_restJson1_1IllegalUserStateExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidArgumentException":
    case "com.amazon.aws.gorillaboy#InvalidArgumentException":
      response = await deserializeAws_restJson1_1InvalidArgumentExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.gorillaboy#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedOperationException":
    case "com.amazon.aws.gorillaboy#UnauthorizedOperationException":
      response = await deserializeAws_restJson1_1UnauthorizedOperationExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazon.aws.gorillaboy#UnauthorizedResourceAccessException":
      response = await deserializeAws_restJson1_1UnauthorizedResourceAccessExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.aws.gorillaboy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_restJson1_1ConcurrentModificationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const contents: ConcurrentModificationException = {
    name: "ConcurrentModificationException",
    __type: "ConcurrentModificationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ConflictingOperationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ConflictingOperationException> => {
  const contents: ConflictingOperationException = {
    name: "ConflictingOperationException",
    __type: "ConflictingOperationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1CustomMetadataLimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<CustomMetadataLimitExceededException> => {
  const contents: CustomMetadataLimitExceededException = {
    name: "CustomMetadataLimitExceededException",
    __type: "CustomMetadataLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1DeactivatingLastSystemUserExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DeactivatingLastSystemUserException> => {
  const contents: DeactivatingLastSystemUserException = {
    name: "DeactivatingLastSystemUserException",
    __type: "DeactivatingLastSystemUserException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Code: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Code !== undefined) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1DocumentLockedForCommentsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DocumentLockedForCommentsException> => {
  const contents: DocumentLockedForCommentsException = {
    name: "DocumentLockedForCommentsException",
    __type: "DocumentLockedForCommentsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1DraftUploadOutOfSyncExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DraftUploadOutOfSyncException> => {
  const contents: DraftUploadOutOfSyncException = {
    name: "DraftUploadOutOfSyncException",
    __type: "DraftUploadOutOfSyncException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1EntityAlreadyExistsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<EntityAlreadyExistsException> => {
  const contents: EntityAlreadyExistsException = {
    name: "EntityAlreadyExistsException",
    __type: "EntityAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1EntityNotExistsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<EntityNotExistsException> => {
  const contents: EntityNotExistsException = {
    name: "EntityNotExistsException",
    __type: "EntityNotExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    EntityIds: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.EntityIds !== undefined) {
    contents.EntityIds = deserializeAws_restJson1_1EntityIdList(
      data.EntityIds,
      context
    );
  }
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1FailedDependencyExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<FailedDependencyException> => {
  const contents: FailedDependencyException = {
    name: "FailedDependencyException",
    __type: "FailedDependencyException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1IllegalUserStateExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<IllegalUserStateException> => {
  const contents: IllegalUserStateException = {
    name: "IllegalUserStateException",
    __type: "IllegalUserStateException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidArgumentExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidArgumentException> => {
  const contents: InvalidArgumentException = {
    name: "InvalidArgumentException",
    __type: "InvalidArgumentException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidCommentOperationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidCommentOperationException> => {
  const contents: InvalidCommentOperationException = {
    name: "InvalidCommentOperationException",
    __type: "InvalidCommentOperationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidOperationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidOperationException> => {
  const contents: InvalidOperationException = {
    name: "InvalidOperationException",
    __type: "InvalidOperationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidPasswordExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidPasswordException> => {
  const contents: InvalidPasswordException = {
    name: "InvalidPasswordException",
    __type: "InvalidPasswordException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1LimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    __type: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ProhibitedStateExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ProhibitedStateException> => {
  const contents: ProhibitedStateException = {
    name: "ProhibitedStateException",
    __type: "ProhibitedStateException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1RequestedEntityTooLargeExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<RequestedEntityTooLargeException> => {
  const contents: RequestedEntityTooLargeException = {
    name: "RequestedEntityTooLargeException",
    __type: "RequestedEntityTooLargeException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceAlreadyCheckedOutExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceAlreadyCheckedOutException> => {
  const contents: ResourceAlreadyCheckedOutException = {
    name: "ResourceAlreadyCheckedOutException",
    __type: "ResourceAlreadyCheckedOutException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceUnavailableExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    __type: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1StorageLimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<StorageLimitExceededException> => {
  const contents: StorageLimitExceededException = {
    name: "StorageLimitExceededException",
    __type: "StorageLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1StorageLimitWillExceedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<StorageLimitWillExceedException> => {
  const contents: StorageLimitWillExceedException = {
    name: "StorageLimitWillExceedException",
    __type: "StorageLimitWillExceedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1TooManyLabelsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TooManyLabelsException> => {
  const contents: TooManyLabelsException = {
    name: "TooManyLabelsException",
    __type: "TooManyLabelsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1TooManySubscriptionsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TooManySubscriptionsException> => {
  const contents: TooManySubscriptionsException = {
    name: "TooManySubscriptionsException",
    __type: "TooManySubscriptionsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1UnauthorizedOperationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<UnauthorizedOperationException> => {
  const contents: UnauthorizedOperationException = {
    name: "UnauthorizedOperationException",
    __type: "UnauthorizedOperationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Code: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Code !== undefined) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1UnauthorizedResourceAccessExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<UnauthorizedResourceAccessException> => {
  const contents: UnauthorizedResourceAccessException = {
    name: "UnauthorizedResourceAccessException",
    __type: "UnauthorizedResourceAccessException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const serializeAws_restJson1_1CustomMetadataMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1NotificationOptions = (
  input: NotificationOptions,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EmailMessage !== undefined) {
    bodyParams["EmailMessage"] = input.EmailMessage;
  }
  if (input.SendEmail !== undefined) {
    bodyParams["SendEmail"] = input.SendEmail;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SharePrincipal = (
  input: SharePrincipal,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Id !== undefined) {
    bodyParams["Id"] = input.Id;
  }
  if (input.Role !== undefined) {
    bodyParams["Role"] = input.Role;
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SharePrincipalList = (
  input: Array<SharePrincipal>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1SharePrincipal(entry, context)
  );
};

const serializeAws_restJson1_1SharedLabels = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_restJson1_1StorageRuleType = (
  input: StorageRuleType,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.StorageAllocatedInBytes !== undefined) {
    bodyParams["StorageAllocatedInBytes"] = input.StorageAllocatedInBytes;
  }
  if (input.StorageType !== undefined) {
    bodyParams["StorageType"] = input.StorageType;
  }
  return bodyParams;
};

const deserializeAws_restJson1_1Activity = (
  output: any,
  context: __SerdeContext
): Activity => {
  let contents: any = {
    __type: "Activity",
    CommentMetadata: undefined,
    Initiator: undefined,
    IsIndirectActivity: undefined,
    OrganizationId: undefined,
    OriginalParent: undefined,
    Participants: undefined,
    ResourceMetadata: undefined,
    TimeStamp: undefined,
    Type: undefined
  };
  if (output.CommentMetadata !== undefined) {
    contents.CommentMetadata = deserializeAws_restJson1_1CommentMetadata(
      output.CommentMetadata,
      context
    );
  }
  if (output.Initiator !== undefined) {
    contents.Initiator = deserializeAws_restJson1_1UserMetadata(
      output.Initiator,
      context
    );
  }
  if (output.IsIndirectActivity !== undefined) {
    contents.IsIndirectActivity = output.IsIndirectActivity;
  }
  if (output.OrganizationId !== undefined) {
    contents.OrganizationId = output.OrganizationId;
  }
  if (output.OriginalParent !== undefined) {
    contents.OriginalParent = deserializeAws_restJson1_1ResourceMetadata(
      output.OriginalParent,
      context
    );
  }
  if (output.Participants !== undefined) {
    contents.Participants = deserializeAws_restJson1_1Participants(
      output.Participants,
      context
    );
  }
  if (output.ResourceMetadata !== undefined) {
    contents.ResourceMetadata = deserializeAws_restJson1_1ResourceMetadata(
      output.ResourceMetadata,
      context
    );
  }
  if (output.TimeStamp !== undefined) {
    contents.TimeStamp = new Date(
      output.TimeStamp % 1 != 0
        ? Math.round(output.TimeStamp * 1000)
        : output.TimeStamp
    );
  }
  if (output.Type !== undefined) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_restJson1_1Comment = (
  output: any,
  context: __SerdeContext
): Comment => {
  let contents: any = {
    __type: "Comment",
    CommentId: undefined,
    Contributor: undefined,
    CreatedTimestamp: undefined,
    ParentId: undefined,
    RecipientId: undefined,
    Status: undefined,
    Text: undefined,
    ThreadId: undefined,
    Visibility: undefined
  };
  if (output.CommentId !== undefined) {
    contents.CommentId = output.CommentId;
  }
  if (output.Contributor !== undefined) {
    contents.Contributor = deserializeAws_restJson1_1User(
      output.Contributor,
      context
    );
  }
  if (output.CreatedTimestamp !== undefined) {
    contents.CreatedTimestamp = new Date(
      output.CreatedTimestamp % 1 != 0
        ? Math.round(output.CreatedTimestamp * 1000)
        : output.CreatedTimestamp
    );
  }
  if (output.ParentId !== undefined) {
    contents.ParentId = output.ParentId;
  }
  if (output.RecipientId !== undefined) {
    contents.RecipientId = output.RecipientId;
  }
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  if (output.Text !== undefined) {
    contents.Text = output.Text;
  }
  if (output.ThreadId !== undefined) {
    contents.ThreadId = output.ThreadId;
  }
  if (output.Visibility !== undefined) {
    contents.Visibility = output.Visibility;
  }
  return contents;
};

const deserializeAws_restJson1_1CommentList = (
  output: any,
  context: __SerdeContext
): Array<Comment> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Comment(entry, context)
  );
};

const deserializeAws_restJson1_1CommentMetadata = (
  output: any,
  context: __SerdeContext
): CommentMetadata => {
  let contents: any = {
    __type: "CommentMetadata",
    CommentId: undefined,
    CommentStatus: undefined,
    Contributor: undefined,
    CreatedTimestamp: undefined,
    RecipientId: undefined
  };
  if (output.CommentId !== undefined) {
    contents.CommentId = output.CommentId;
  }
  if (output.CommentStatus !== undefined) {
    contents.CommentStatus = output.CommentStatus;
  }
  if (output.Contributor !== undefined) {
    contents.Contributor = deserializeAws_restJson1_1User(
      output.Contributor,
      context
    );
  }
  if (output.CreatedTimestamp !== undefined) {
    contents.CreatedTimestamp = new Date(
      output.CreatedTimestamp % 1 != 0
        ? Math.round(output.CreatedTimestamp * 1000)
        : output.CreatedTimestamp
    );
  }
  if (output.RecipientId !== undefined) {
    contents.RecipientId = output.RecipientId;
  }
  return contents;
};

const deserializeAws_restJson1_1CustomMetadataMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1DocumentMetadata = (
  output: any,
  context: __SerdeContext
): DocumentMetadata => {
  let contents: any = {
    __type: "DocumentMetadata",
    CreatedTimestamp: undefined,
    CreatorId: undefined,
    Id: undefined,
    Labels: undefined,
    LatestVersionMetadata: undefined,
    ModifiedTimestamp: undefined,
    ParentFolderId: undefined,
    ResourceState: undefined
  };
  if (output.CreatedTimestamp !== undefined) {
    contents.CreatedTimestamp = new Date(
      output.CreatedTimestamp % 1 != 0
        ? Math.round(output.CreatedTimestamp * 1000)
        : output.CreatedTimestamp
    );
  }
  if (output.CreatorId !== undefined) {
    contents.CreatorId = output.CreatorId;
  }
  if (output.Id !== undefined) {
    contents.Id = output.Id;
  }
  if (output.Labels !== undefined) {
    contents.Labels = deserializeAws_restJson1_1SharedLabels(
      output.Labels,
      context
    );
  }
  if (output.LatestVersionMetadata !== undefined) {
    contents.LatestVersionMetadata = deserializeAws_restJson1_1DocumentVersionMetadata(
      output.LatestVersionMetadata,
      context
    );
  }
  if (output.ModifiedTimestamp !== undefined) {
    contents.ModifiedTimestamp = new Date(
      output.ModifiedTimestamp % 1 != 0
        ? Math.round(output.ModifiedTimestamp * 1000)
        : output.ModifiedTimestamp
    );
  }
  if (output.ParentFolderId !== undefined) {
    contents.ParentFolderId = output.ParentFolderId;
  }
  if (output.ResourceState !== undefined) {
    contents.ResourceState = output.ResourceState;
  }
  return contents;
};

const deserializeAws_restJson1_1DocumentMetadataList = (
  output: any,
  context: __SerdeContext
): Array<DocumentMetadata> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DocumentMetadata(entry, context)
  );
};

const deserializeAws_restJson1_1DocumentSourceUrlMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1DocumentThumbnailUrlMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1DocumentVersionMetadata = (
  output: any,
  context: __SerdeContext
): DocumentVersionMetadata => {
  let contents: any = {
    __type: "DocumentVersionMetadata",
    ContentCreatedTimestamp: undefined,
    ContentModifiedTimestamp: undefined,
    ContentType: undefined,
    CreatedTimestamp: undefined,
    CreatorId: undefined,
    Id: undefined,
    ModifiedTimestamp: undefined,
    Name: undefined,
    Signature: undefined,
    Size: undefined,
    Source: undefined,
    Status: undefined,
    Thumbnail: undefined
  };
  if (output.ContentCreatedTimestamp !== undefined) {
    contents.ContentCreatedTimestamp = new Date(
      output.ContentCreatedTimestamp % 1 != 0
        ? Math.round(output.ContentCreatedTimestamp * 1000)
        : output.ContentCreatedTimestamp
    );
  }
  if (output.ContentModifiedTimestamp !== undefined) {
    contents.ContentModifiedTimestamp = new Date(
      output.ContentModifiedTimestamp % 1 != 0
        ? Math.round(output.ContentModifiedTimestamp * 1000)
        : output.ContentModifiedTimestamp
    );
  }
  if (output.ContentType !== undefined) {
    contents.ContentType = output.ContentType;
  }
  if (output.CreatedTimestamp !== undefined) {
    contents.CreatedTimestamp = new Date(
      output.CreatedTimestamp % 1 != 0
        ? Math.round(output.CreatedTimestamp * 1000)
        : output.CreatedTimestamp
    );
  }
  if (output.CreatorId !== undefined) {
    contents.CreatorId = output.CreatorId;
  }
  if (output.Id !== undefined) {
    contents.Id = output.Id;
  }
  if (output.ModifiedTimestamp !== undefined) {
    contents.ModifiedTimestamp = new Date(
      output.ModifiedTimestamp % 1 != 0
        ? Math.round(output.ModifiedTimestamp * 1000)
        : output.ModifiedTimestamp
    );
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.Signature !== undefined) {
    contents.Signature = output.Signature;
  }
  if (output.Size !== undefined) {
    contents.Size = output.Size;
  }
  if (output.Source !== undefined) {
    contents.Source = deserializeAws_restJson1_1DocumentSourceUrlMap(
      output.Source,
      context
    );
  }
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  if (output.Thumbnail !== undefined) {
    contents.Thumbnail = deserializeAws_restJson1_1DocumentThumbnailUrlMap(
      output.Thumbnail,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1DocumentVersionMetadataList = (
  output: any,
  context: __SerdeContext
): Array<DocumentVersionMetadata> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DocumentVersionMetadata(entry, context)
  );
};

const deserializeAws_restJson1_1EntityIdList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1FolderMetadata = (
  output: any,
  context: __SerdeContext
): FolderMetadata => {
  let contents: any = {
    __type: "FolderMetadata",
    CreatedTimestamp: undefined,
    CreatorId: undefined,
    Id: undefined,
    Labels: undefined,
    LatestVersionSize: undefined,
    ModifiedTimestamp: undefined,
    Name: undefined,
    ParentFolderId: undefined,
    ResourceState: undefined,
    Signature: undefined,
    Size: undefined
  };
  if (output.CreatedTimestamp !== undefined) {
    contents.CreatedTimestamp = new Date(
      output.CreatedTimestamp % 1 != 0
        ? Math.round(output.CreatedTimestamp * 1000)
        : output.CreatedTimestamp
    );
  }
  if (output.CreatorId !== undefined) {
    contents.CreatorId = output.CreatorId;
  }
  if (output.Id !== undefined) {
    contents.Id = output.Id;
  }
  if (output.Labels !== undefined) {
    contents.Labels = deserializeAws_restJson1_1SharedLabels(
      output.Labels,
      context
    );
  }
  if (output.LatestVersionSize !== undefined) {
    contents.LatestVersionSize = output.LatestVersionSize;
  }
  if (output.ModifiedTimestamp !== undefined) {
    contents.ModifiedTimestamp = new Date(
      output.ModifiedTimestamp % 1 != 0
        ? Math.round(output.ModifiedTimestamp * 1000)
        : output.ModifiedTimestamp
    );
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.ParentFolderId !== undefined) {
    contents.ParentFolderId = output.ParentFolderId;
  }
  if (output.ResourceState !== undefined) {
    contents.ResourceState = output.ResourceState;
  }
  if (output.Signature !== undefined) {
    contents.Signature = output.Signature;
  }
  if (output.Size !== undefined) {
    contents.Size = output.Size;
  }
  return contents;
};

const deserializeAws_restJson1_1FolderMetadataList = (
  output: any,
  context: __SerdeContext
): Array<FolderMetadata> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1FolderMetadata(entry, context)
  );
};

const deserializeAws_restJson1_1GroupMetadata = (
  output: any,
  context: __SerdeContext
): GroupMetadata => {
  let contents: any = {
    __type: "GroupMetadata",
    Id: undefined,
    Name: undefined
  };
  if (output.Id !== undefined) {
    contents.Id = output.Id;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_restJson1_1GroupMetadataList = (
  output: any,
  context: __SerdeContext
): Array<GroupMetadata> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1GroupMetadata(entry, context)
  );
};

const deserializeAws_restJson1_1OrganizationUserList = (
  output: any,
  context: __SerdeContext
): Array<User> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1User(entry, context)
  );
};

const deserializeAws_restJson1_1Participants = (
  output: any,
  context: __SerdeContext
): Participants => {
  let contents: any = {
    __type: "Participants",
    Groups: undefined,
    Users: undefined
  };
  if (output.Groups !== undefined) {
    contents.Groups = deserializeAws_restJson1_1GroupMetadataList(
      output.Groups,
      context
    );
  }
  if (output.Users !== undefined) {
    contents.Users = deserializeAws_restJson1_1UserMetadataList(
      output.Users,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1PermissionInfo = (
  output: any,
  context: __SerdeContext
): PermissionInfo => {
  let contents: any = {
    __type: "PermissionInfo",
    Role: undefined,
    Type: undefined
  };
  if (output.Role !== undefined) {
    contents.Role = output.Role;
  }
  if (output.Type !== undefined) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_restJson1_1PermissionInfoList = (
  output: any,
  context: __SerdeContext
): Array<PermissionInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1PermissionInfo(entry, context)
  );
};

const deserializeAws_restJson1_1Principal = (
  output: any,
  context: __SerdeContext
): Principal => {
  let contents: any = {
    __type: "Principal",
    Id: undefined,
    Roles: undefined,
    Type: undefined
  };
  if (output.Id !== undefined) {
    contents.Id = output.Id;
  }
  if (output.Roles !== undefined) {
    contents.Roles = deserializeAws_restJson1_1PermissionInfoList(
      output.Roles,
      context
    );
  }
  if (output.Type !== undefined) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_restJson1_1PrincipalList = (
  output: any,
  context: __SerdeContext
): Array<Principal> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Principal(entry, context)
  );
};

const deserializeAws_restJson1_1ResourceMetadata = (
  output: any,
  context: __SerdeContext
): ResourceMetadata => {
  let contents: any = {
    __type: "ResourceMetadata",
    Id: undefined,
    Name: undefined,
    OriginalName: undefined,
    Owner: undefined,
    ParentId: undefined,
    Type: undefined,
    VersionId: undefined
  };
  if (output.Id !== undefined) {
    contents.Id = output.Id;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.OriginalName !== undefined) {
    contents.OriginalName = output.OriginalName;
  }
  if (output.Owner !== undefined) {
    contents.Owner = deserializeAws_restJson1_1UserMetadata(
      output.Owner,
      context
    );
  }
  if (output.ParentId !== undefined) {
    contents.ParentId = output.ParentId;
  }
  if (output.Type !== undefined) {
    contents.Type = output.Type;
  }
  if (output.VersionId !== undefined) {
    contents.VersionId = output.VersionId;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourcePath = (
  output: any,
  context: __SerdeContext
): ResourcePath => {
  let contents: any = {
    __type: "ResourcePath",
    Components: undefined
  };
  if (output.Components !== undefined) {
    contents.Components = deserializeAws_restJson1_1ResourcePathComponentList(
      output.Components,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1ResourcePathComponent = (
  output: any,
  context: __SerdeContext
): ResourcePathComponent => {
  let contents: any = {
    __type: "ResourcePathComponent",
    Id: undefined,
    Name: undefined
  };
  if (output.Id !== undefined) {
    contents.Id = output.Id;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourcePathComponentList = (
  output: any,
  context: __SerdeContext
): Array<ResourcePathComponent> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ResourcePathComponent(entry, context)
  );
};

const deserializeAws_restJson1_1ShareResult = (
  output: any,
  context: __SerdeContext
): ShareResult => {
  let contents: any = {
    __type: "ShareResult",
    InviteePrincipalId: undefined,
    PrincipalId: undefined,
    Role: undefined,
    ShareId: undefined,
    Status: undefined,
    StatusMessage: undefined
  };
  if (output.InviteePrincipalId !== undefined) {
    contents.InviteePrincipalId = output.InviteePrincipalId;
  }
  if (output.PrincipalId !== undefined) {
    contents.PrincipalId = output.PrincipalId;
  }
  if (output.Role !== undefined) {
    contents.Role = output.Role;
  }
  if (output.ShareId !== undefined) {
    contents.ShareId = output.ShareId;
  }
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  if (output.StatusMessage !== undefined) {
    contents.StatusMessage = output.StatusMessage;
  }
  return contents;
};

const deserializeAws_restJson1_1ShareResultsList = (
  output: any,
  context: __SerdeContext
): Array<ShareResult> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ShareResult(entry, context)
  );
};

const deserializeAws_restJson1_1SharedLabels = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1SignedHeaderMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1StorageRuleType = (
  output: any,
  context: __SerdeContext
): StorageRuleType => {
  let contents: any = {
    __type: "StorageRuleType",
    StorageAllocatedInBytes: undefined,
    StorageType: undefined
  };
  if (output.StorageAllocatedInBytes !== undefined) {
    contents.StorageAllocatedInBytes = output.StorageAllocatedInBytes;
  }
  if (output.StorageType !== undefined) {
    contents.StorageType = output.StorageType;
  }
  return contents;
};

const deserializeAws_restJson1_1Subscription = (
  output: any,
  context: __SerdeContext
): Subscription => {
  let contents: any = {
    __type: "Subscription",
    EndPoint: undefined,
    Protocol: undefined,
    SubscriptionId: undefined
  };
  if (output.EndPoint !== undefined) {
    contents.EndPoint = output.EndPoint;
  }
  if (output.Protocol !== undefined) {
    contents.Protocol = output.Protocol;
  }
  if (output.SubscriptionId !== undefined) {
    contents.SubscriptionId = output.SubscriptionId;
  }
  return contents;
};

const deserializeAws_restJson1_1SubscriptionList = (
  output: any,
  context: __SerdeContext
): Array<Subscription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Subscription(entry, context)
  );
};

const deserializeAws_restJson1_1UploadMetadata = (
  output: any,
  context: __SerdeContext
): UploadMetadata => {
  let contents: any = {
    __type: "UploadMetadata",
    SignedHeaders: undefined,
    UploadUrl: undefined
  };
  if (output.SignedHeaders !== undefined) {
    contents.SignedHeaders = deserializeAws_restJson1_1SignedHeaderMap(
      output.SignedHeaders,
      context
    );
  }
  if (output.UploadUrl !== undefined) {
    contents.UploadUrl = output.UploadUrl;
  }
  return contents;
};

const deserializeAws_restJson1_1User = (
  output: any,
  context: __SerdeContext
): User => {
  let contents: any = {
    __type: "User",
    CreatedTimestamp: undefined,
    EmailAddress: undefined,
    GivenName: undefined,
    Id: undefined,
    Locale: undefined,
    ModifiedTimestamp: undefined,
    OrganizationId: undefined,
    RecycleBinFolderId: undefined,
    RootFolderId: undefined,
    Status: undefined,
    Storage: undefined,
    Surname: undefined,
    TimeZoneId: undefined,
    Type: undefined,
    Username: undefined
  };
  if (output.CreatedTimestamp !== undefined) {
    contents.CreatedTimestamp = new Date(
      output.CreatedTimestamp % 1 != 0
        ? Math.round(output.CreatedTimestamp * 1000)
        : output.CreatedTimestamp
    );
  }
  if (output.EmailAddress !== undefined) {
    contents.EmailAddress = output.EmailAddress;
  }
  if (output.GivenName !== undefined) {
    contents.GivenName = output.GivenName;
  }
  if (output.Id !== undefined) {
    contents.Id = output.Id;
  }
  if (output.Locale !== undefined) {
    contents.Locale = output.Locale;
  }
  if (output.ModifiedTimestamp !== undefined) {
    contents.ModifiedTimestamp = new Date(
      output.ModifiedTimestamp % 1 != 0
        ? Math.round(output.ModifiedTimestamp * 1000)
        : output.ModifiedTimestamp
    );
  }
  if (output.OrganizationId !== undefined) {
    contents.OrganizationId = output.OrganizationId;
  }
  if (output.RecycleBinFolderId !== undefined) {
    contents.RecycleBinFolderId = output.RecycleBinFolderId;
  }
  if (output.RootFolderId !== undefined) {
    contents.RootFolderId = output.RootFolderId;
  }
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  if (output.Storage !== undefined) {
    contents.Storage = deserializeAws_restJson1_1UserStorageMetadata(
      output.Storage,
      context
    );
  }
  if (output.Surname !== undefined) {
    contents.Surname = output.Surname;
  }
  if (output.TimeZoneId !== undefined) {
    contents.TimeZoneId = output.TimeZoneId;
  }
  if (output.Type !== undefined) {
    contents.Type = output.Type;
  }
  if (output.Username !== undefined) {
    contents.Username = output.Username;
  }
  return contents;
};

const deserializeAws_restJson1_1UserActivities = (
  output: any,
  context: __SerdeContext
): Array<Activity> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Activity(entry, context)
  );
};

const deserializeAws_restJson1_1UserMetadata = (
  output: any,
  context: __SerdeContext
): UserMetadata => {
  let contents: any = {
    __type: "UserMetadata",
    EmailAddress: undefined,
    GivenName: undefined,
    Id: undefined,
    Surname: undefined,
    Username: undefined
  };
  if (output.EmailAddress !== undefined) {
    contents.EmailAddress = output.EmailAddress;
  }
  if (output.GivenName !== undefined) {
    contents.GivenName = output.GivenName;
  }
  if (output.Id !== undefined) {
    contents.Id = output.Id;
  }
  if (output.Surname !== undefined) {
    contents.Surname = output.Surname;
  }
  if (output.Username !== undefined) {
    contents.Username = output.Username;
  }
  return contents;
};

const deserializeAws_restJson1_1UserMetadataList = (
  output: any,
  context: __SerdeContext
): Array<UserMetadata> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1UserMetadata(entry, context)
  );
};

const deserializeAws_restJson1_1UserStorageMetadata = (
  output: any,
  context: __SerdeContext
): UserStorageMetadata => {
  let contents: any = {
    __type: "UserStorageMetadata",
    StorageRule: undefined,
    StorageUtilizedInBytes: undefined
  };
  if (output.StorageRule !== undefined) {
    contents.StorageRule = deserializeAws_restJson1_1StorageRuleType(
      output.StorageRule,
      context
    );
  }
  if (output.StorageUtilizedInBytes !== undefined) {
    contents.StorageUtilizedInBytes = output.StorageUtilizedInBytes;
  }
  return contents;
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
  return context.streamCollector(streamBody) || new Uint8Array();
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

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
