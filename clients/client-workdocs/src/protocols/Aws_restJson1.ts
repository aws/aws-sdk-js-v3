// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  AbortDocumentVersionUploadCommandInput,
  AbortDocumentVersionUploadCommandOutput,
} from "../commands/AbortDocumentVersionUploadCommand";
import { ActivateUserCommandInput, ActivateUserCommandOutput } from "../commands/ActivateUserCommand";
import {
  AddResourcePermissionsCommandInput,
  AddResourcePermissionsCommandOutput,
} from "../commands/AddResourcePermissionsCommand";
import { CreateCommentCommandInput, CreateCommentCommandOutput } from "../commands/CreateCommentCommand";
import {
  CreateCustomMetadataCommandInput,
  CreateCustomMetadataCommandOutput,
} from "../commands/CreateCustomMetadataCommand";
import { CreateFolderCommandInput, CreateFolderCommandOutput } from "../commands/CreateFolderCommand";
import { CreateLabelsCommandInput, CreateLabelsCommandOutput } from "../commands/CreateLabelsCommand";
import {
  CreateNotificationSubscriptionCommandInput,
  CreateNotificationSubscriptionCommandOutput,
} from "../commands/CreateNotificationSubscriptionCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "../commands/CreateUserCommand";
import { DeactivateUserCommandInput, DeactivateUserCommandOutput } from "../commands/DeactivateUserCommand";
import { DeleteCommentCommandInput, DeleteCommentCommandOutput } from "../commands/DeleteCommentCommand";
import {
  DeleteCustomMetadataCommandInput,
  DeleteCustomMetadataCommandOutput,
} from "../commands/DeleteCustomMetadataCommand";
import { DeleteDocumentCommandInput, DeleteDocumentCommandOutput } from "../commands/DeleteDocumentCommand";
import {
  DeleteDocumentVersionCommandInput,
  DeleteDocumentVersionCommandOutput,
} from "../commands/DeleteDocumentVersionCommand";
import { DeleteFolderCommandInput, DeleteFolderCommandOutput } from "../commands/DeleteFolderCommand";
import {
  DeleteFolderContentsCommandInput,
  DeleteFolderContentsCommandOutput,
} from "../commands/DeleteFolderContentsCommand";
import { DeleteLabelsCommandInput, DeleteLabelsCommandOutput } from "../commands/DeleteLabelsCommand";
import {
  DeleteNotificationSubscriptionCommandInput,
  DeleteNotificationSubscriptionCommandOutput,
} from "../commands/DeleteNotificationSubscriptionCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "../commands/DeleteUserCommand";
import { DescribeActivitiesCommandInput, DescribeActivitiesCommandOutput } from "../commands/DescribeActivitiesCommand";
import { DescribeCommentsCommandInput, DescribeCommentsCommandOutput } from "../commands/DescribeCommentsCommand";
import {
  DescribeDocumentVersionsCommandInput,
  DescribeDocumentVersionsCommandOutput,
} from "../commands/DescribeDocumentVersionsCommand";
import {
  DescribeFolderContentsCommandInput,
  DescribeFolderContentsCommandOutput,
} from "../commands/DescribeFolderContentsCommand";
import { DescribeGroupsCommandInput, DescribeGroupsCommandOutput } from "../commands/DescribeGroupsCommand";
import {
  DescribeNotificationSubscriptionsCommandInput,
  DescribeNotificationSubscriptionsCommandOutput,
} from "../commands/DescribeNotificationSubscriptionsCommand";
import {
  DescribeResourcePermissionsCommandInput,
  DescribeResourcePermissionsCommandOutput,
} from "../commands/DescribeResourcePermissionsCommand";
import {
  DescribeRootFoldersCommandInput,
  DescribeRootFoldersCommandOutput,
} from "../commands/DescribeRootFoldersCommand";
import { DescribeUsersCommandInput, DescribeUsersCommandOutput } from "../commands/DescribeUsersCommand";
import { GetCurrentUserCommandInput, GetCurrentUserCommandOutput } from "../commands/GetCurrentUserCommand";
import { GetDocumentCommandInput, GetDocumentCommandOutput } from "../commands/GetDocumentCommand";
import { GetDocumentPathCommandInput, GetDocumentPathCommandOutput } from "../commands/GetDocumentPathCommand";
import { GetDocumentVersionCommandInput, GetDocumentVersionCommandOutput } from "../commands/GetDocumentVersionCommand";
import { GetFolderCommandInput, GetFolderCommandOutput } from "../commands/GetFolderCommand";
import { GetFolderPathCommandInput, GetFolderPathCommandOutput } from "../commands/GetFolderPathCommand";
import { GetResourcesCommandInput, GetResourcesCommandOutput } from "../commands/GetResourcesCommand";
import {
  InitiateDocumentVersionUploadCommandInput,
  InitiateDocumentVersionUploadCommandOutput,
} from "../commands/InitiateDocumentVersionUploadCommand";
import {
  RemoveAllResourcePermissionsCommandInput,
  RemoveAllResourcePermissionsCommandOutput,
} from "../commands/RemoveAllResourcePermissionsCommand";
import {
  RemoveResourcePermissionCommandInput,
  RemoveResourcePermissionCommandOutput,
} from "../commands/RemoveResourcePermissionCommand";
import {
  RestoreDocumentVersionsCommandInput,
  RestoreDocumentVersionsCommandOutput,
} from "../commands/RestoreDocumentVersionsCommand";
import { UpdateDocumentCommandInput, UpdateDocumentCommandOutput } from "../commands/UpdateDocumentCommand";
import {
  UpdateDocumentVersionCommandInput,
  UpdateDocumentVersionCommandOutput,
} from "../commands/UpdateDocumentVersionCommand";
import { UpdateFolderCommandInput, UpdateFolderCommandOutput } from "../commands/UpdateFolderCommand";
import { UpdateUserCommandInput, UpdateUserCommandOutput } from "../commands/UpdateUserCommand";
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
  DocumentSourceType,
  DocumentThumbnailType,
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
  UserStorageMetadata,
} from "../models/models_0";
import { WorkDocsServiceException as __BaseException } from "../models/WorkDocsServiceException";

export const serializeAws_restJson1AbortDocumentVersionUploadCommand = async (
  input: AbortDocumentVersionUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    authentication: input.AuthenticationToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/api/v1/documents/{DocumentId}/versions/{VersionId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DocumentId", () => input.DocumentId!, "{DocumentId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "VersionId", () => input.VersionId!, "{VersionId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ActivateUserCommand = async (
  input: ActivateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    authentication: input.AuthenticationToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/api/v1/users/{UserId}/activation";
  resolvedPath = __resolvedPath(resolvedPath, input, "UserId", () => input.UserId!, "{UserId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1AddResourcePermissionsCommand = async (
  input: AddResourcePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    authentication: input.AuthenticationToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/api/v1/resources/{ResourceId}/permissions";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceId", () => input.ResourceId!, "{ResourceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.NotificationOptions != null && {
      NotificationOptions: serializeAws_restJson1NotificationOptions(input.NotificationOptions, context),
    }),
    ...(input.Principals != null && {
      Principals: serializeAws_restJson1SharePrincipalList(input.Principals, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateCommentCommand = async (
  input: CreateCommentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    authentication: input.AuthenticationToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/api/v1/documents/{DocumentId}/versions/{VersionId}/comment";
  resolvedPath = __resolvedPath(resolvedPath, input, "DocumentId", () => input.DocumentId!, "{DocumentId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "VersionId", () => input.VersionId!, "{VersionId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.NotifyCollaborators != null && { NotifyCollaborators: input.NotifyCollaborators }),
    ...(input.ParentId != null && { ParentId: input.ParentId }),
    ...(input.Text != null && { Text: input.Text }),
    ...(input.ThreadId != null && { ThreadId: input.ThreadId }),
    ...(input.Visibility != null && { Visibility: input.Visibility }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateCustomMetadataCommand = async (
  input: CreateCustomMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    authentication: input.AuthenticationToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/api/v1/resources/{ResourceId}/customMetadata";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceId", () => input.ResourceId!, "{ResourceId}", false);
  const query: any = map({
    versionid: [, input.VersionId!],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.CustomMetadata != null && {
      CustomMetadata: serializeAws_restJson1CustomMetadataMap(input.CustomMetadata, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1CreateFolderCommand = async (
  input: CreateFolderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    authentication: input.AuthenticationToken!,
  });
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/api/v1/folders";
  let body: any;
  body = JSON.stringify({
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ParentFolderId != null && { ParentFolderId: input.ParentFolderId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateLabelsCommand = async (
  input: CreateLabelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    authentication: input.AuthenticationToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/api/v1/resources/{ResourceId}/labels";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceId", () => input.ResourceId!, "{ResourceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Labels != null && { Labels: serializeAws_restJson1SharedLabels(input.Labels, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateNotificationSubscriptionCommand = async (
  input: CreateNotificationSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/api/v1/organizations/{OrganizationId}/subscriptions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "OrganizationId",
    () => input.OrganizationId!,
    "{OrganizationId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Endpoint != null && { Endpoint: input.Endpoint }),
    ...(input.Protocol != null && { Protocol: input.Protocol }),
    ...(input.SubscriptionType != null && { SubscriptionType: input.SubscriptionType }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateUserCommand = async (
  input: CreateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    authentication: input.AuthenticationToken!,
  });
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/api/v1/users";
  let body: any;
  body = JSON.stringify({
    ...(input.EmailAddress != null && { EmailAddress: input.EmailAddress }),
    ...(input.GivenName != null && { GivenName: input.GivenName }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.StorageRule != null && {
      StorageRule: serializeAws_restJson1StorageRuleType(input.StorageRule, context),
    }),
    ...(input.Surname != null && { Surname: input.Surname }),
    ...(input.TimeZoneId != null && { TimeZoneId: input.TimeZoneId }),
    ...(input.Username != null && { Username: input.Username }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeactivateUserCommand = async (
  input: DeactivateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    authentication: input.AuthenticationToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/api/v1/users/{UserId}/activation";
  resolvedPath = __resolvedPath(resolvedPath, input, "UserId", () => input.UserId!, "{UserId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteCommentCommand = async (
  input: DeleteCommentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    authentication: input.AuthenticationToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/api/v1/documents/{DocumentId}/versions/{VersionId}/comment/{CommentId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DocumentId", () => input.DocumentId!, "{DocumentId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "VersionId", () => input.VersionId!, "{VersionId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "CommentId", () => input.CommentId!, "{CommentId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteCustomMetadataCommand = async (
  input: DeleteCustomMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    authentication: input.AuthenticationToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/api/v1/resources/{ResourceId}/customMetadata";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceId", () => input.ResourceId!, "{ResourceId}", false);
  const query: any = map({
    versionId: [, input.VersionId!],
    keys: [() => input.Keys !== void 0, () => (input.Keys! || []).map((_entry) => _entry as any)],
    deleteAll: [() => input.DeleteAll !== void 0, () => input.DeleteAll!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DeleteDocumentCommand = async (
  input: DeleteDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    authentication: input.AuthenticationToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/api/v1/documents/{DocumentId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DocumentId", () => input.DocumentId!, "{DocumentId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteDocumentVersionCommand = async (
  input: DeleteDocumentVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    authentication: input.AuthenticationToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/api/v1/documentVersions/{DocumentId}/versions/{VersionId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DocumentId", () => input.DocumentId!, "{DocumentId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "VersionId", () => input.VersionId!, "{VersionId}", false);
  const query: any = map({
    deletePriorVersions: [
      __expectNonNull(input.DeletePriorVersions, `DeletePriorVersions`) != null,
      () => input.DeletePriorVersions!.toString(),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DeleteFolderCommand = async (
  input: DeleteFolderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    authentication: input.AuthenticationToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/api/v1/folders/{FolderId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "FolderId", () => input.FolderId!, "{FolderId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteFolderContentsCommand = async (
  input: DeleteFolderContentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    authentication: input.AuthenticationToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/api/v1/folders/{FolderId}/contents";
  resolvedPath = __resolvedPath(resolvedPath, input, "FolderId", () => input.FolderId!, "{FolderId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteLabelsCommand = async (
  input: DeleteLabelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    authentication: input.AuthenticationToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/api/v1/resources/{ResourceId}/labels";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceId", () => input.ResourceId!, "{ResourceId}", false);
  const query: any = map({
    labels: [() => input.Labels !== void 0, () => (input.Labels! || []).map((_entry) => _entry as any)],
    deleteAll: [() => input.DeleteAll !== void 0, () => input.DeleteAll!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DeleteNotificationSubscriptionCommand = async (
  input: DeleteNotificationSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/api/v1/organizations/{OrganizationId}/subscriptions/{SubscriptionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "SubscriptionId",
    () => input.SubscriptionId!,
    "{SubscriptionId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "OrganizationId",
    () => input.OrganizationId!,
    "{OrganizationId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteUserCommand = async (
  input: DeleteUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    authentication: input.AuthenticationToken!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/api/v1/users/{UserId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "UserId", () => input.UserId!, "{UserId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeActivitiesCommand = async (
  input: DescribeActivitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    authentication: input.AuthenticationToken!,
  });
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/api/v1/activities";
  const query: any = map({
    startTime: [
      () => input.StartTime !== void 0,
      () => (input.StartTime!.toISOString().split(".")[0] + "Z").toString(),
    ],
    endTime: [() => input.EndTime !== void 0, () => (input.EndTime!.toISOString().split(".")[0] + "Z").toString()],
    organizationId: [, input.OrganizationId!],
    activityTypes: [, input.ActivityTypes!],
    resourceId: [, input.ResourceId!],
    userId: [, input.UserId!],
    includeIndirectActivities: [
      () => input.IncludeIndirectActivities !== void 0,
      () => input.IncludeIndirectActivities!.toString(),
    ],
    limit: [() => input.Limit !== void 0, () => input.Limit!.toString()],
    marker: [, input.Marker!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DescribeCommentsCommand = async (
  input: DescribeCommentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    authentication: input.AuthenticationToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/api/v1/documents/{DocumentId}/versions/{VersionId}/comments";
  resolvedPath = __resolvedPath(resolvedPath, input, "DocumentId", () => input.DocumentId!, "{DocumentId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "VersionId", () => input.VersionId!, "{VersionId}", false);
  const query: any = map({
    limit: [() => input.Limit !== void 0, () => input.Limit!.toString()],
    marker: [, input.Marker!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DescribeDocumentVersionsCommand = async (
  input: DescribeDocumentVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    authentication: input.AuthenticationToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/api/v1/documents/{DocumentId}/versions";
  resolvedPath = __resolvedPath(resolvedPath, input, "DocumentId", () => input.DocumentId!, "{DocumentId}", false);
  const query: any = map({
    marker: [, input.Marker!],
    limit: [() => input.Limit !== void 0, () => input.Limit!.toString()],
    include: [, input.Include!],
    fields: [, input.Fields!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DescribeFolderContentsCommand = async (
  input: DescribeFolderContentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    authentication: input.AuthenticationToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/api/v1/folders/{FolderId}/contents";
  resolvedPath = __resolvedPath(resolvedPath, input, "FolderId", () => input.FolderId!, "{FolderId}", false);
  const query: any = map({
    sort: [, input.Sort!],
    order: [, input.Order!],
    limit: [() => input.Limit !== void 0, () => input.Limit!.toString()],
    marker: [, input.Marker!],
    type: [, input.Type!],
    include: [, input.Include!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DescribeGroupsCommand = async (
  input: DescribeGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    authentication: input.AuthenticationToken!,
  });
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/api/v1/groups";
  const query: any = map({
    searchQuery: [, __expectNonNull(input.SearchQuery!, `SearchQuery`)],
    organizationId: [, input.OrganizationId!],
    marker: [, input.Marker!],
    limit: [() => input.Limit !== void 0, () => input.Limit!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DescribeNotificationSubscriptionsCommand = async (
  input: DescribeNotificationSubscriptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/api/v1/organizations/{OrganizationId}/subscriptions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "OrganizationId",
    () => input.OrganizationId!,
    "{OrganizationId}",
    false
  );
  const query: any = map({
    marker: [, input.Marker!],
    limit: [() => input.Limit !== void 0, () => input.Limit!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DescribeResourcePermissionsCommand = async (
  input: DescribeResourcePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    authentication: input.AuthenticationToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/api/v1/resources/{ResourceId}/permissions";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceId", () => input.ResourceId!, "{ResourceId}", false);
  const query: any = map({
    principalId: [, input.PrincipalId!],
    limit: [() => input.Limit !== void 0, () => input.Limit!.toString()],
    marker: [, input.Marker!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DescribeRootFoldersCommand = async (
  input: DescribeRootFoldersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    authentication: input.AuthenticationToken!,
  });
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/api/v1/me/root";
  const query: any = map({
    limit: [() => input.Limit !== void 0, () => input.Limit!.toString()],
    marker: [, input.Marker!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DescribeUsersCommand = async (
  input: DescribeUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    authentication: input.AuthenticationToken!,
  });
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/api/v1/users";
  const query: any = map({
    organizationId: [, input.OrganizationId!],
    userIds: [, input.UserIds!],
    query: [, input.Query!],
    include: [, input.Include!],
    order: [, input.Order!],
    sort: [, input.Sort!],
    marker: [, input.Marker!],
    limit: [() => input.Limit !== void 0, () => input.Limit!.toString()],
    fields: [, input.Fields!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetCurrentUserCommand = async (
  input: GetCurrentUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    authentication: input.AuthenticationToken!,
  });
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/api/v1/me";
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetDocumentCommand = async (
  input: GetDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    authentication: input.AuthenticationToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/api/v1/documents/{DocumentId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DocumentId", () => input.DocumentId!, "{DocumentId}", false);
  const query: any = map({
    includeCustomMetadata: [
      () => input.IncludeCustomMetadata !== void 0,
      () => input.IncludeCustomMetadata!.toString(),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetDocumentPathCommand = async (
  input: GetDocumentPathCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    authentication: input.AuthenticationToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/api/v1/documents/{DocumentId}/path";
  resolvedPath = __resolvedPath(resolvedPath, input, "DocumentId", () => input.DocumentId!, "{DocumentId}", false);
  const query: any = map({
    limit: [() => input.Limit !== void 0, () => input.Limit!.toString()],
    fields: [, input.Fields!],
    marker: [, input.Marker!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetDocumentVersionCommand = async (
  input: GetDocumentVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    authentication: input.AuthenticationToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/api/v1/documents/{DocumentId}/versions/{VersionId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DocumentId", () => input.DocumentId!, "{DocumentId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "VersionId", () => input.VersionId!, "{VersionId}", false);
  const query: any = map({
    fields: [, input.Fields!],
    includeCustomMetadata: [
      () => input.IncludeCustomMetadata !== void 0,
      () => input.IncludeCustomMetadata!.toString(),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetFolderCommand = async (
  input: GetFolderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    authentication: input.AuthenticationToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/api/v1/folders/{FolderId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "FolderId", () => input.FolderId!, "{FolderId}", false);
  const query: any = map({
    includeCustomMetadata: [
      () => input.IncludeCustomMetadata !== void 0,
      () => input.IncludeCustomMetadata!.toString(),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetFolderPathCommand = async (
  input: GetFolderPathCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    authentication: input.AuthenticationToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/api/v1/folders/{FolderId}/path";
  resolvedPath = __resolvedPath(resolvedPath, input, "FolderId", () => input.FolderId!, "{FolderId}", false);
  const query: any = map({
    limit: [() => input.Limit !== void 0, () => input.Limit!.toString()],
    fields: [, input.Fields!],
    marker: [, input.Marker!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetResourcesCommand = async (
  input: GetResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    authentication: input.AuthenticationToken!,
  });
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/api/v1/resources";
  const query: any = map({
    userId: [, input.UserId!],
    collectionType: [, input.CollectionType!],
    limit: [() => input.Limit !== void 0, () => input.Limit!.toString()],
    marker: [, input.Marker!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1InitiateDocumentVersionUploadCommand = async (
  input: InitiateDocumentVersionUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    authentication: input.AuthenticationToken!,
  });
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/api/v1/documents";
  let body: any;
  body = JSON.stringify({
    ...(input.ContentCreatedTimestamp != null && {
      ContentCreatedTimestamp: Math.round(input.ContentCreatedTimestamp.getTime() / 1000),
    }),
    ...(input.ContentModifiedTimestamp != null && {
      ContentModifiedTimestamp: Math.round(input.ContentModifiedTimestamp.getTime() / 1000),
    }),
    ...(input.ContentType != null && { ContentType: input.ContentType }),
    ...(input.DocumentSizeInBytes != null && { DocumentSizeInBytes: input.DocumentSizeInBytes }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ParentFolderId != null && { ParentFolderId: input.ParentFolderId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1RemoveAllResourcePermissionsCommand = async (
  input: RemoveAllResourcePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    authentication: input.AuthenticationToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/api/v1/resources/{ResourceId}/permissions";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceId", () => input.ResourceId!, "{ResourceId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1RemoveResourcePermissionCommand = async (
  input: RemoveResourcePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    authentication: input.AuthenticationToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/api/v1/resources/{ResourceId}/permissions/{PrincipalId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceId", () => input.ResourceId!, "{ResourceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "PrincipalId", () => input.PrincipalId!, "{PrincipalId}", false);
  const query: any = map({
    type: [, input.PrincipalType!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1RestoreDocumentVersionsCommand = async (
  input: RestoreDocumentVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    authentication: input.AuthenticationToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/api/v1/documentVersions/restore/{DocumentId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DocumentId", () => input.DocumentId!, "{DocumentId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateDocumentCommand = async (
  input: UpdateDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    authentication: input.AuthenticationToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/api/v1/documents/{DocumentId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DocumentId", () => input.DocumentId!, "{DocumentId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ParentFolderId != null && { ParentFolderId: input.ParentFolderId }),
    ...(input.ResourceState != null && { ResourceState: input.ResourceState }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateDocumentVersionCommand = async (
  input: UpdateDocumentVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    authentication: input.AuthenticationToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/api/v1/documents/{DocumentId}/versions/{VersionId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DocumentId", () => input.DocumentId!, "{DocumentId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "VersionId", () => input.VersionId!, "{VersionId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.VersionStatus != null && { VersionStatus: input.VersionStatus }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateFolderCommand = async (
  input: UpdateFolderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    authentication: input.AuthenticationToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/api/v1/folders/{FolderId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "FolderId", () => input.FolderId!, "{FolderId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ParentFolderId != null && { ParentFolderId: input.ParentFolderId }),
    ...(input.ResourceState != null && { ResourceState: input.ResourceState }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateUserCommand = async (
  input: UpdateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    authentication: input.AuthenticationToken!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/api/v1/users/{UserId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "UserId", () => input.UserId!, "{UserId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.GivenName != null && { GivenName: input.GivenName }),
    ...(input.GrantPoweruserPrivileges != null && { GrantPoweruserPrivileges: input.GrantPoweruserPrivileges }),
    ...(input.Locale != null && { Locale: input.Locale }),
    ...(input.StorageRule != null && {
      StorageRule: serializeAws_restJson1StorageRuleType(input.StorageRule, context),
    }),
    ...(input.Surname != null && { Surname: input.Surname }),
    ...(input.TimeZoneId != null && { TimeZoneId: input.TimeZoneId }),
    ...(input.Type != null && { Type: input.Type }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const deserializeAws_restJson1AbortDocumentVersionUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AbortDocumentVersionUploadCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1AbortDocumentVersionUploadCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1AbortDocumentVersionUploadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AbortDocumentVersionUploadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.workdocs#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await deserializeAws_restJson1ProhibitedStateExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ActivateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ActivateUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.User != null) {
    contents.User = deserializeAws_restJson1User(data.User, context);
  }
  return contents;
};

const deserializeAws_restJson1ActivateUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1AddResourcePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddResourcePermissionsCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1AddResourcePermissionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ShareResults != null) {
    contents.ShareResults = deserializeAws_restJson1ShareResultsList(data.ShareResults, context);
  }
  return contents;
};

const deserializeAws_restJson1AddResourcePermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddResourcePermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await deserializeAws_restJson1ProhibitedStateExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateCommentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCommentCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateCommentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Comment != null) {
    contents.Comment = deserializeAws_restJson1Comment(data.Comment, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateCommentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCommentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DocumentLockedForCommentsException":
    case "com.amazonaws.workdocs#DocumentLockedForCommentsException":
      throw await deserializeAws_restJson1DocumentLockedForCommentsExceptionResponse(parsedOutput, context);
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context);
    case "InvalidCommentOperationException":
    case "com.amazonaws.workdocs#InvalidCommentOperationException":
      throw await deserializeAws_restJson1InvalidCommentOperationExceptionResponse(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await deserializeAws_restJson1ProhibitedStateExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateCustomMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateCustomMetadataCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1CreateCustomMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CustomMetadataLimitExceededException":
    case "com.amazonaws.workdocs#CustomMetadataLimitExceededException":
      throw await deserializeAws_restJson1CustomMetadataLimitExceededExceptionResponse(parsedOutput, context);
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await deserializeAws_restJson1ProhibitedStateExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateFolderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFolderCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateFolderCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Metadata != null) {
    contents.Metadata = deserializeAws_restJson1FolderMetadata(data.Metadata, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateFolderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFolderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.workdocs#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "ConflictingOperationException":
    case "com.amazonaws.workdocs#ConflictingOperationException":
      throw await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context);
    case "EntityAlreadyExistsException":
    case "com.amazonaws.workdocs#EntityAlreadyExistsException":
      throw await deserializeAws_restJson1EntityAlreadyExistsExceptionResponse(parsedOutput, context);
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.workdocs#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await deserializeAws_restJson1ProhibitedStateExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateLabelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLabelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateLabelsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1CreateLabelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLabelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyLabelsException":
    case "com.amazonaws.workdocs#TooManyLabelsException":
      throw await deserializeAws_restJson1TooManyLabelsExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateNotificationSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNotificationSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateNotificationSubscriptionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Subscription != null) {
    contents.Subscription = deserializeAws_restJson1Subscription(data.Subscription, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateNotificationSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNotificationSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.workdocs#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManySubscriptionsException":
    case "com.amazonaws.workdocs#TooManySubscriptionsException":
      throw await deserializeAws_restJson1TooManySubscriptionsExceptionResponse(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.User != null) {
    contents.User = deserializeAws_restJson1User(data.User, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityAlreadyExistsException":
    case "com.amazonaws.workdocs#EntityAlreadyExistsException":
      throw await deserializeAws_restJson1EntityAlreadyExistsExceptionResponse(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeactivateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateUserCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeactivateUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeactivateUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteCommentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCommentCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteCommentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteCommentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCommentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DocumentLockedForCommentsException":
    case "com.amazonaws.workdocs#DocumentLockedForCommentsException":
      throw await deserializeAws_restJson1DocumentLockedForCommentsExceptionResponse(parsedOutput, context);
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await deserializeAws_restJson1ProhibitedStateExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteCustomMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteCustomMetadataCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteCustomMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await deserializeAws_restJson1ProhibitedStateExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteDocumentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDocumentCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDocumentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteDocumentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDocumentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.workdocs#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "ConflictingOperationException":
    case "com.amazonaws.workdocs#ConflictingOperationException":
      throw await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context);
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.workdocs#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await deserializeAws_restJson1ProhibitedStateExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteDocumentVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDocumentVersionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDocumentVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteDocumentVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDocumentVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.workdocs#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "ConflictingOperationException":
    case "com.amazonaws.workdocs#ConflictingOperationException":
      throw await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context);
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.workdocs#InvalidOperationException":
      throw await deserializeAws_restJson1InvalidOperationExceptionResponse(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await deserializeAws_restJson1ProhibitedStateExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteFolderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFolderCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteFolderCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteFolderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFolderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.workdocs#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "ConflictingOperationException":
    case "com.amazonaws.workdocs#ConflictingOperationException":
      throw await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context);
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.workdocs#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await deserializeAws_restJson1ProhibitedStateExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteFolderContentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFolderContentsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteFolderContentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteFolderContentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFolderContentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.workdocs#ConflictingOperationException":
      throw await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context);
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await deserializeAws_restJson1ProhibitedStateExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteLabelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLabelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteLabelsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteLabelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLabelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await deserializeAws_restJson1ProhibitedStateExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteNotificationSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNotificationSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteNotificationSubscriptionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteNotificationSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNotificationSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await deserializeAws_restJson1ProhibitedStateExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeActivitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActivitiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeActivitiesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Marker != null) {
    contents.Marker = __expectString(data.Marker);
  }
  if (data.UserActivities != null) {
    contents.UserActivities = deserializeAws_restJson1UserActivities(data.UserActivities, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeActivitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActivitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.workdocs#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeCommentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCommentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeCommentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Comments != null) {
    contents.Comments = deserializeAws_restJson1CommentList(data.Comments, context);
  }
  if (data.Marker != null) {
    contents.Marker = __expectString(data.Marker);
  }
  return contents;
};

const deserializeAws_restJson1DescribeCommentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCommentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await deserializeAws_restJson1ProhibitedStateExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeDocumentVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDocumentVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDocumentVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DocumentVersions != null) {
    contents.DocumentVersions = deserializeAws_restJson1DocumentVersionMetadataList(data.DocumentVersions, context);
  }
  if (data.Marker != null) {
    contents.Marker = __expectString(data.Marker);
  }
  return contents;
};

const deserializeAws_restJson1DescribeDocumentVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDocumentVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.workdocs#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "InvalidPasswordException":
    case "com.amazonaws.workdocs#InvalidPasswordException":
      throw await deserializeAws_restJson1InvalidPasswordExceptionResponse(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await deserializeAws_restJson1ProhibitedStateExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeFolderContentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFolderContentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeFolderContentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Documents != null) {
    contents.Documents = deserializeAws_restJson1DocumentMetadataList(data.Documents, context);
  }
  if (data.Folders != null) {
    contents.Folders = deserializeAws_restJson1FolderMetadataList(data.Folders, context);
  }
  if (data.Marker != null) {
    contents.Marker = __expectString(data.Marker);
  }
  return contents;
};

const deserializeAws_restJson1DescribeFolderContentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFolderContentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.workdocs#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await deserializeAws_restJson1ProhibitedStateExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeGroupsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Groups != null) {
    contents.Groups = deserializeAws_restJson1GroupMetadataList(data.Groups, context);
  }
  if (data.Marker != null) {
    contents.Marker = __expectString(data.Marker);
  }
  return contents;
};

const deserializeAws_restJson1DescribeGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeNotificationSubscriptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNotificationSubscriptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeNotificationSubscriptionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Marker != null) {
    contents.Marker = __expectString(data.Marker);
  }
  if (data.Subscriptions != null) {
    contents.Subscriptions = deserializeAws_restJson1SubscriptionList(data.Subscriptions, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeNotificationSubscriptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNotificationSubscriptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeResourcePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourcePermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeResourcePermissionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Marker != null) {
    contents.Marker = __expectString(data.Marker);
  }
  if (data.Principals != null) {
    contents.Principals = deserializeAws_restJson1PrincipalList(data.Principals, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeResourcePermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourcePermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.workdocs#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeRootFoldersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRootFoldersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeRootFoldersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Folders != null) {
    contents.Folders = deserializeAws_restJson1FolderMetadataList(data.Folders, context);
  }
  if (data.Marker != null) {
    contents.Marker = __expectString(data.Marker);
  }
  return contents;
};

const deserializeAws_restJson1DescribeRootFoldersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRootFoldersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.workdocs#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUsersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeUsersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Marker != null) {
    contents.Marker = __expectString(data.Marker);
  }
  if (data.TotalNumberOfUsers != null) {
    contents.TotalNumberOfUsers = __expectLong(data.TotalNumberOfUsers);
  }
  if (data.Users != null) {
    contents.Users = deserializeAws_restJson1OrganizationUserList(data.Users, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeUsersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUsersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.workdocs#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "RequestedEntityTooLargeException":
    case "com.amazonaws.workdocs#RequestedEntityTooLargeException":
      throw await deserializeAws_restJson1RequestedEntityTooLargeExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetCurrentUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCurrentUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCurrentUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.User != null) {
    contents.User = deserializeAws_restJson1User(data.User, context);
  }
  return contents;
};

const deserializeAws_restJson1GetCurrentUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCurrentUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetDocumentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDocumentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CustomMetadata != null) {
    contents.CustomMetadata = deserializeAws_restJson1CustomMetadataMap(data.CustomMetadata, context);
  }
  if (data.Metadata != null) {
    contents.Metadata = deserializeAws_restJson1DocumentMetadata(data.Metadata, context);
  }
  return contents;
};

const deserializeAws_restJson1GetDocumentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.workdocs#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "InvalidPasswordException":
    case "com.amazonaws.workdocs#InvalidPasswordException":
      throw await deserializeAws_restJson1InvalidPasswordExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetDocumentPathCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentPathCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDocumentPathCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Path != null) {
    contents.Path = deserializeAws_restJson1ResourcePath(data.Path, context);
  }
  return contents;
};

const deserializeAws_restJson1GetDocumentPathCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentPathCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetDocumentVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDocumentVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CustomMetadata != null) {
    contents.CustomMetadata = deserializeAws_restJson1CustomMetadataMap(data.CustomMetadata, context);
  }
  if (data.Metadata != null) {
    contents.Metadata = deserializeAws_restJson1DocumentVersionMetadata(data.Metadata, context);
  }
  return contents;
};

const deserializeAws_restJson1GetDocumentVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context);
    case "InvalidPasswordException":
    case "com.amazonaws.workdocs#InvalidPasswordException":
      throw await deserializeAws_restJson1InvalidPasswordExceptionResponse(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await deserializeAws_restJson1ProhibitedStateExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetFolderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFolderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetFolderCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CustomMetadata != null) {
    contents.CustomMetadata = deserializeAws_restJson1CustomMetadataMap(data.CustomMetadata, context);
  }
  if (data.Metadata != null) {
    contents.Metadata = deserializeAws_restJson1FolderMetadata(data.Metadata, context);
  }
  return contents;
};

const deserializeAws_restJson1GetFolderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFolderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.workdocs#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await deserializeAws_restJson1ProhibitedStateExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetFolderPathCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFolderPathCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetFolderPathCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Path != null) {
    contents.Path = deserializeAws_restJson1ResourcePath(data.Path, context);
  }
  return contents;
};

const deserializeAws_restJson1GetFolderPathCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFolderPathCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetResourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Documents != null) {
    contents.Documents = deserializeAws_restJson1DocumentMetadataList(data.Documents, context);
  }
  if (data.Folders != null) {
    contents.Folders = deserializeAws_restJson1FolderMetadataList(data.Folders, context);
  }
  if (data.Marker != null) {
    contents.Marker = __expectString(data.Marker);
  }
  return contents;
};

const deserializeAws_restJson1GetResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.workdocs#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1InitiateDocumentVersionUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateDocumentVersionUploadCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1InitiateDocumentVersionUploadCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Metadata != null) {
    contents.Metadata = deserializeAws_restJson1DocumentMetadata(data.Metadata, context);
  }
  if (data.UploadMetadata != null) {
    contents.UploadMetadata = deserializeAws_restJson1UploadMetadata(data.UploadMetadata, context);
  }
  return contents;
};

const deserializeAws_restJson1InitiateDocumentVersionUploadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateDocumentVersionUploadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DraftUploadOutOfSyncException":
    case "com.amazonaws.workdocs#DraftUploadOutOfSyncException":
      throw await deserializeAws_restJson1DraftUploadOutOfSyncExceptionResponse(parsedOutput, context);
    case "EntityAlreadyExistsException":
    case "com.amazonaws.workdocs#EntityAlreadyExistsException":
      throw await deserializeAws_restJson1EntityAlreadyExistsExceptionResponse(parsedOutput, context);
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context);
    case "InvalidPasswordException":
    case "com.amazonaws.workdocs#InvalidPasswordException":
      throw await deserializeAws_restJson1InvalidPasswordExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.workdocs#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await deserializeAws_restJson1ProhibitedStateExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyCheckedOutException":
    case "com.amazonaws.workdocs#ResourceAlreadyCheckedOutException":
      throw await deserializeAws_restJson1ResourceAlreadyCheckedOutExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "StorageLimitExceededException":
    case "com.amazonaws.workdocs#StorageLimitExceededException":
      throw await deserializeAws_restJson1StorageLimitExceededExceptionResponse(parsedOutput, context);
    case "StorageLimitWillExceedException":
    case "com.amazonaws.workdocs#StorageLimitWillExceedException":
      throw await deserializeAws_restJson1StorageLimitWillExceedExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1RemoveAllResourcePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveAllResourcePermissionsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1RemoveAllResourcePermissionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1RemoveAllResourcePermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveAllResourcePermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1RemoveResourcePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveResourcePermissionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1RemoveResourcePermissionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1RemoveResourcePermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveResourcePermissionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1RestoreDocumentVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreDocumentVersionsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1RestoreDocumentVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1RestoreDocumentVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreDocumentVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.workdocs#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "ConflictingOperationException":
    case "com.amazonaws.workdocs#ConflictingOperationException":
      throw await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context);
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.workdocs#InvalidOperationException":
      throw await deserializeAws_restJson1InvalidOperationExceptionResponse(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await deserializeAws_restJson1ProhibitedStateExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateDocumentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDocumentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDocumentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateDocumentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDocumentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.workdocs#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "ConflictingOperationException":
    case "com.amazonaws.workdocs#ConflictingOperationException":
      throw await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context);
    case "EntityAlreadyExistsException":
    case "com.amazonaws.workdocs#EntityAlreadyExistsException":
      throw await deserializeAws_restJson1EntityAlreadyExistsExceptionResponse(parsedOutput, context);
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.workdocs#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await deserializeAws_restJson1ProhibitedStateExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateDocumentVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDocumentVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDocumentVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateDocumentVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDocumentVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.workdocs#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.workdocs#InvalidOperationException":
      throw await deserializeAws_restJson1InvalidOperationExceptionResponse(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await deserializeAws_restJson1ProhibitedStateExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateFolderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFolderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFolderCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateFolderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFolderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.workdocs#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "ConflictingOperationException":
    case "com.amazonaws.workdocs#ConflictingOperationException":
      throw await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context);
    case "EntityAlreadyExistsException":
    case "com.amazonaws.workdocs#EntityAlreadyExistsException":
      throw await deserializeAws_restJson1EntityAlreadyExistsExceptionResponse(parsedOutput, context);
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.workdocs#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await deserializeAws_restJson1ProhibitedStateExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.User != null) {
    contents.User = deserializeAws_restJson1User(data.User, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeactivatingLastSystemUserException":
    case "com.amazonaws.workdocs#DeactivatingLastSystemUserException":
      throw await deserializeAws_restJson1DeactivatingLastSystemUserExceptionResponse(parsedOutput, context);
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context);
    case "IllegalUserStateException":
    case "com.amazonaws.workdocs#IllegalUserStateException":
      throw await deserializeAws_restJson1IllegalUserStateExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.workdocs#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await deserializeAws_restJson1ProhibitedStateExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context);
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

const map = __map;
const deserializeAws_restJson1ConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ConcurrentModificationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ConflictingOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictingOperationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ConflictingOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1CustomMetadataLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomMetadataLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new CustomMetadataLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1DeactivatingLastSystemUserExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeactivatingLastSystemUserException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new DeactivatingLastSystemUserException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1DocumentLockedForCommentsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DocumentLockedForCommentsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new DocumentLockedForCommentsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1DraftUploadOutOfSyncExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DraftUploadOutOfSyncException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new DraftUploadOutOfSyncException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1EntityAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EntityAlreadyExistsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new EntityAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1EntityNotExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EntityNotExistsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.EntityIds != null) {
    contents.EntityIds = deserializeAws_restJson1EntityIdList(data.EntityIds, context);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new EntityNotExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1FailedDependencyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FailedDependencyException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new FailedDependencyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1IllegalUserStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IllegalUserStateException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new IllegalUserStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidArgumentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArgumentException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InvalidArgumentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidCommentOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCommentOperationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InvalidCommentOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOperationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InvalidOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidPasswordExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPasswordException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InvalidPasswordException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ProhibitedStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ProhibitedStateException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ProhibitedStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1RequestedEntityTooLargeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestedEntityTooLargeException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new RequestedEntityTooLargeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceAlreadyCheckedOutExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyCheckedOutException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ResourceAlreadyCheckedOutException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1StorageLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StorageLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new StorageLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1StorageLimitWillExceedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StorageLimitWillExceedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new StorageLimitWillExceedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1TooManyLabelsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyLabelsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new TooManyLabelsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1TooManySubscriptionsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManySubscriptionsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new TooManySubscriptionsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1UnauthorizedOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedOperationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new UnauthorizedOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedResourceAccessException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new UnauthorizedResourceAccessException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1CustomMetadataMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1NotificationOptions = (input: NotificationOptions, context: __SerdeContext): any => {
  return {
    ...(input.EmailMessage != null && { EmailMessage: input.EmailMessage }),
    ...(input.SendEmail != null && { SendEmail: input.SendEmail }),
  };
};

const serializeAws_restJson1SharedLabels = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1SharePrincipal = (input: SharePrincipal, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Role != null && { Role: input.Role }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1SharePrincipalList = (input: SharePrincipal[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SharePrincipal(entry, context);
    });
};

const serializeAws_restJson1StorageRuleType = (input: StorageRuleType, context: __SerdeContext): any => {
  return {
    ...(input.StorageAllocatedInBytes != null && { StorageAllocatedInBytes: input.StorageAllocatedInBytes }),
    ...(input.StorageType != null && { StorageType: input.StorageType }),
  };
};

const deserializeAws_restJson1Activity = (output: any, context: __SerdeContext): Activity => {
  return {
    CommentMetadata:
      output.CommentMetadata != null
        ? deserializeAws_restJson1CommentMetadata(output.CommentMetadata, context)
        : undefined,
    Initiator: output.Initiator != null ? deserializeAws_restJson1UserMetadata(output.Initiator, context) : undefined,
    IsIndirectActivity: __expectBoolean(output.IsIndirectActivity),
    OrganizationId: __expectString(output.OrganizationId),
    OriginalParent:
      output.OriginalParent != null
        ? deserializeAws_restJson1ResourceMetadata(output.OriginalParent, context)
        : undefined,
    Participants:
      output.Participants != null ? deserializeAws_restJson1Participants(output.Participants, context) : undefined,
    ResourceMetadata:
      output.ResourceMetadata != null
        ? deserializeAws_restJson1ResourceMetadata(output.ResourceMetadata, context)
        : undefined,
    TimeStamp:
      output.TimeStamp != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.TimeStamp))) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1Comment = (output: any, context: __SerdeContext): Comment => {
  return {
    CommentId: __expectString(output.CommentId),
    Contributor: output.Contributor != null ? deserializeAws_restJson1User(output.Contributor, context) : undefined,
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    ParentId: __expectString(output.ParentId),
    RecipientId: __expectString(output.RecipientId),
    Status: __expectString(output.Status),
    Text: __expectString(output.Text),
    ThreadId: __expectString(output.ThreadId),
    Visibility: __expectString(output.Visibility),
  } as any;
};

const deserializeAws_restJson1CommentList = (output: any, context: __SerdeContext): Comment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Comment(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CommentMetadata = (output: any, context: __SerdeContext): CommentMetadata => {
  return {
    CommentId: __expectString(output.CommentId),
    CommentStatus: __expectString(output.CommentStatus),
    Contributor: output.Contributor != null ? deserializeAws_restJson1User(output.Contributor, context) : undefined,
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    RecipientId: __expectString(output.RecipientId),
  } as any;
};

const deserializeAws_restJson1CustomMetadataMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1DocumentMetadata = (output: any, context: __SerdeContext): DocumentMetadata => {
  return {
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    CreatorId: __expectString(output.CreatorId),
    Id: __expectString(output.Id),
    Labels: output.Labels != null ? deserializeAws_restJson1SharedLabels(output.Labels, context) : undefined,
    LatestVersionMetadata:
      output.LatestVersionMetadata != null
        ? deserializeAws_restJson1DocumentVersionMetadata(output.LatestVersionMetadata, context)
        : undefined,
    ModifiedTimestamp:
      output.ModifiedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ModifiedTimestamp)))
        : undefined,
    ParentFolderId: __expectString(output.ParentFolderId),
    ResourceState: __expectString(output.ResourceState),
  } as any;
};

const deserializeAws_restJson1DocumentMetadataList = (output: any, context: __SerdeContext): DocumentMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DocumentMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DocumentSourceUrlMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce(
    (acc: Record<string, string>, [key, value]: [DocumentSourceType | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = __expectString(value) as any;
      return acc;
    },
    {}
  );
};

const deserializeAws_restJson1DocumentThumbnailUrlMap = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return Object.entries(output).reduce(
    (acc: Record<string, string>, [key, value]: [DocumentThumbnailType | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = __expectString(value) as any;
      return acc;
    },
    {}
  );
};

const deserializeAws_restJson1DocumentVersionMetadata = (
  output: any,
  context: __SerdeContext
): DocumentVersionMetadata => {
  return {
    ContentCreatedTimestamp:
      output.ContentCreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ContentCreatedTimestamp)))
        : undefined,
    ContentModifiedTimestamp:
      output.ContentModifiedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ContentModifiedTimestamp)))
        : undefined,
    ContentType: __expectString(output.ContentType),
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    CreatorId: __expectString(output.CreatorId),
    Id: __expectString(output.Id),
    ModifiedTimestamp:
      output.ModifiedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ModifiedTimestamp)))
        : undefined,
    Name: __expectString(output.Name),
    Signature: __expectString(output.Signature),
    Size: __expectLong(output.Size),
    Source: output.Source != null ? deserializeAws_restJson1DocumentSourceUrlMap(output.Source, context) : undefined,
    Status: __expectString(output.Status),
    Thumbnail:
      output.Thumbnail != null ? deserializeAws_restJson1DocumentThumbnailUrlMap(output.Thumbnail, context) : undefined,
  } as any;
};

const deserializeAws_restJson1DocumentVersionMetadataList = (
  output: any,
  context: __SerdeContext
): DocumentVersionMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DocumentVersionMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1EntityIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1FolderMetadata = (output: any, context: __SerdeContext): FolderMetadata => {
  return {
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    CreatorId: __expectString(output.CreatorId),
    Id: __expectString(output.Id),
    Labels: output.Labels != null ? deserializeAws_restJson1SharedLabels(output.Labels, context) : undefined,
    LatestVersionSize: __expectLong(output.LatestVersionSize),
    ModifiedTimestamp:
      output.ModifiedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ModifiedTimestamp)))
        : undefined,
    Name: __expectString(output.Name),
    ParentFolderId: __expectString(output.ParentFolderId),
    ResourceState: __expectString(output.ResourceState),
    Signature: __expectString(output.Signature),
    Size: __expectLong(output.Size),
  } as any;
};

const deserializeAws_restJson1FolderMetadataList = (output: any, context: __SerdeContext): FolderMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FolderMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1GroupMetadata = (output: any, context: __SerdeContext): GroupMetadata => {
  return {
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1GroupMetadataList = (output: any, context: __SerdeContext): GroupMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1GroupMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1OrganizationUserList = (output: any, context: __SerdeContext): User[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1User(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Participants = (output: any, context: __SerdeContext): Participants => {
  return {
    Groups: output.Groups != null ? deserializeAws_restJson1GroupMetadataList(output.Groups, context) : undefined,
    Users: output.Users != null ? deserializeAws_restJson1UserMetadataList(output.Users, context) : undefined,
  } as any;
};

const deserializeAws_restJson1PermissionInfo = (output: any, context: __SerdeContext): PermissionInfo => {
  return {
    Role: __expectString(output.Role),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1PermissionInfoList = (output: any, context: __SerdeContext): PermissionInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PermissionInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Principal = (output: any, context: __SerdeContext): Principal => {
  return {
    Id: __expectString(output.Id),
    Roles: output.Roles != null ? deserializeAws_restJson1PermissionInfoList(output.Roles, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1PrincipalList = (output: any, context: __SerdeContext): Principal[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Principal(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ResourceMetadata = (output: any, context: __SerdeContext): ResourceMetadata => {
  return {
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    OriginalName: __expectString(output.OriginalName),
    Owner: output.Owner != null ? deserializeAws_restJson1UserMetadata(output.Owner, context) : undefined,
    ParentId: __expectString(output.ParentId),
    Type: __expectString(output.Type),
    VersionId: __expectString(output.VersionId),
  } as any;
};

const deserializeAws_restJson1ResourcePath = (output: any, context: __SerdeContext): ResourcePath => {
  return {
    Components:
      output.Components != null
        ? deserializeAws_restJson1ResourcePathComponentList(output.Components, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ResourcePathComponent = (output: any, context: __SerdeContext): ResourcePathComponent => {
  return {
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1ResourcePathComponentList = (
  output: any,
  context: __SerdeContext
): ResourcePathComponent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResourcePathComponent(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SharedLabels = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1ShareResult = (output: any, context: __SerdeContext): ShareResult => {
  return {
    InviteePrincipalId: __expectString(output.InviteePrincipalId),
    PrincipalId: __expectString(output.PrincipalId),
    Role: __expectString(output.Role),
    ShareId: __expectString(output.ShareId),
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
  } as any;
};

const deserializeAws_restJson1ShareResultsList = (output: any, context: __SerdeContext): ShareResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ShareResult(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SignedHeaderMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1StorageRuleType = (output: any, context: __SerdeContext): StorageRuleType => {
  return {
    StorageAllocatedInBytes: __expectLong(output.StorageAllocatedInBytes),
    StorageType: __expectString(output.StorageType),
  } as any;
};

const deserializeAws_restJson1Subscription = (output: any, context: __SerdeContext): Subscription => {
  return {
    EndPoint: __expectString(output.EndPoint),
    Protocol: __expectString(output.Protocol),
    SubscriptionId: __expectString(output.SubscriptionId),
  } as any;
};

const deserializeAws_restJson1SubscriptionList = (output: any, context: __SerdeContext): Subscription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Subscription(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1UploadMetadata = (output: any, context: __SerdeContext): UploadMetadata => {
  return {
    SignedHeaders:
      output.SignedHeaders != null ? deserializeAws_restJson1SignedHeaderMap(output.SignedHeaders, context) : undefined,
    UploadUrl: __expectString(output.UploadUrl),
  } as any;
};

const deserializeAws_restJson1User = (output: any, context: __SerdeContext): User => {
  return {
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    EmailAddress: __expectString(output.EmailAddress),
    GivenName: __expectString(output.GivenName),
    Id: __expectString(output.Id),
    Locale: __expectString(output.Locale),
    ModifiedTimestamp:
      output.ModifiedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ModifiedTimestamp)))
        : undefined,
    OrganizationId: __expectString(output.OrganizationId),
    RecycleBinFolderId: __expectString(output.RecycleBinFolderId),
    RootFolderId: __expectString(output.RootFolderId),
    Status: __expectString(output.Status),
    Storage: output.Storage != null ? deserializeAws_restJson1UserStorageMetadata(output.Storage, context) : undefined,
    Surname: __expectString(output.Surname),
    TimeZoneId: __expectString(output.TimeZoneId),
    Type: __expectString(output.Type),
    Username: __expectString(output.Username),
  } as any;
};

const deserializeAws_restJson1UserActivities = (output: any, context: __SerdeContext): Activity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Activity(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1UserMetadata = (output: any, context: __SerdeContext): UserMetadata => {
  return {
    EmailAddress: __expectString(output.EmailAddress),
    GivenName: __expectString(output.GivenName),
    Id: __expectString(output.Id),
    Surname: __expectString(output.Surname),
    Username: __expectString(output.Username),
  } as any;
};

const deserializeAws_restJson1UserMetadataList = (output: any, context: __SerdeContext): UserMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UserMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1UserStorageMetadata = (output: any, context: __SerdeContext): UserStorageMetadata => {
  return {
    StorageRule:
      output.StorageRule != null ? deserializeAws_restJson1StorageRuleType(output.StorageRule, context) : undefined,
    StorageUtilizedInBytes: __expectLong(output.StorageUtilizedInBytes),
  } as any;
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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

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
