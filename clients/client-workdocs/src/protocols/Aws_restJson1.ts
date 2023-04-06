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
import { SearchResourcesCommandInput, SearchResourcesCommandOutput } from "../commands/SearchResourcesCommand";
import { UpdateDocumentCommandInput, UpdateDocumentCommandOutput } from "../commands/UpdateDocumentCommand";
import {
  UpdateDocumentVersionCommandInput,
  UpdateDocumentVersionCommandOutput,
} from "../commands/UpdateDocumentVersionCommand";
import { UpdateFolderCommandInput, UpdateFolderCommandOutput } from "../commands/UpdateFolderCommand";
import { UpdateUserCommandInput, UpdateUserCommandOutput } from "../commands/UpdateUserCommand";
import {
  Activity,
  AdditionalResponseFieldType,
  Comment,
  CommentMetadata,
  ConcurrentModificationException,
  ConflictingOperationException,
  ContentCategoryType,
  CustomMetadataLimitExceededException,
  DateRangeType,
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
  Filters,
  FolderMetadata,
  GroupMetadata,
  IllegalUserStateException,
  InvalidArgumentException,
  InvalidCommentOperationException,
  InvalidOperationException,
  InvalidPasswordException,
  LanguageCodeType,
  LimitExceededException,
  LongRangeType,
  NotificationOptions,
  Participants,
  PermissionInfo,
  Principal,
  PrincipalRoleType,
  ProhibitedStateException,
  RequestedEntityTooLargeException,
  ResourceAlreadyCheckedOutException,
  ResourceMetadata,
  ResourcePath,
  ResourcePathComponent,
  ResponseItem,
  SearchCollectionType,
  SearchPrincipalType,
  SearchQueryScopeType,
  SearchResourceType,
  SearchSortResult,
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

/**
 * serializeAws_restJson1AbortDocumentVersionUploadCommand
 */
export const se_AbortDocumentVersionUploadCommand = async (
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

/**
 * serializeAws_restJson1ActivateUserCommand
 */
export const se_ActivateUserCommand = async (
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

/**
 * serializeAws_restJson1AddResourcePermissionsCommand
 */
export const se_AddResourcePermissionsCommand = async (
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
      NotificationOptions: se_NotificationOptions(input.NotificationOptions, context),
    }),
    ...(input.Principals != null && { Principals: se_SharePrincipalList(input.Principals, context) }),
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

/**
 * serializeAws_restJson1CreateCommentCommand
 */
export const se_CreateCommentCommand = async (
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

/**
 * serializeAws_restJson1CreateCustomMetadataCommand
 */
export const se_CreateCustomMetadataCommand = async (
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
    ...(input.CustomMetadata != null && { CustomMetadata: se_CustomMetadataMap(input.CustomMetadata, context) }),
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

/**
 * serializeAws_restJson1CreateFolderCommand
 */
export const se_CreateFolderCommand = async (
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

/**
 * serializeAws_restJson1CreateLabelsCommand
 */
export const se_CreateLabelsCommand = async (
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
    ...(input.Labels != null && { Labels: se_SharedLabels(input.Labels, context) }),
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

/**
 * serializeAws_restJson1CreateNotificationSubscriptionCommand
 */
export const se_CreateNotificationSubscriptionCommand = async (
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

/**
 * serializeAws_restJson1CreateUserCommand
 */
export const se_CreateUserCommand = async (
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
    ...(input.StorageRule != null && { StorageRule: se_StorageRuleType(input.StorageRule, context) }),
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

/**
 * serializeAws_restJson1DeactivateUserCommand
 */
export const se_DeactivateUserCommand = async (
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

/**
 * serializeAws_restJson1DeleteCommentCommand
 */
export const se_DeleteCommentCommand = async (
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

/**
 * serializeAws_restJson1DeleteCustomMetadataCommand
 */
export const se_DeleteCustomMetadataCommand = async (
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

/**
 * serializeAws_restJson1DeleteDocumentCommand
 */
export const se_DeleteDocumentCommand = async (
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

/**
 * serializeAws_restJson1DeleteDocumentVersionCommand
 */
export const se_DeleteDocumentVersionCommand = async (
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

/**
 * serializeAws_restJson1DeleteFolderCommand
 */
export const se_DeleteFolderCommand = async (
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

/**
 * serializeAws_restJson1DeleteFolderContentsCommand
 */
export const se_DeleteFolderContentsCommand = async (
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

/**
 * serializeAws_restJson1DeleteLabelsCommand
 */
export const se_DeleteLabelsCommand = async (
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

/**
 * serializeAws_restJson1DeleteNotificationSubscriptionCommand
 */
export const se_DeleteNotificationSubscriptionCommand = async (
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

/**
 * serializeAws_restJson1DeleteUserCommand
 */
export const se_DeleteUserCommand = async (
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

/**
 * serializeAws_restJson1DescribeActivitiesCommand
 */
export const se_DescribeActivitiesCommand = async (
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

/**
 * serializeAws_restJson1DescribeCommentsCommand
 */
export const se_DescribeCommentsCommand = async (
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

/**
 * serializeAws_restJson1DescribeDocumentVersionsCommand
 */
export const se_DescribeDocumentVersionsCommand = async (
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

/**
 * serializeAws_restJson1DescribeFolderContentsCommand
 */
export const se_DescribeFolderContentsCommand = async (
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

/**
 * serializeAws_restJson1DescribeGroupsCommand
 */
export const se_DescribeGroupsCommand = async (
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

/**
 * serializeAws_restJson1DescribeNotificationSubscriptionsCommand
 */
export const se_DescribeNotificationSubscriptionsCommand = async (
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

/**
 * serializeAws_restJson1DescribeResourcePermissionsCommand
 */
export const se_DescribeResourcePermissionsCommand = async (
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

/**
 * serializeAws_restJson1DescribeRootFoldersCommand
 */
export const se_DescribeRootFoldersCommand = async (
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

/**
 * serializeAws_restJson1DescribeUsersCommand
 */
export const se_DescribeUsersCommand = async (
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

/**
 * serializeAws_restJson1GetCurrentUserCommand
 */
export const se_GetCurrentUserCommand = async (
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

/**
 * serializeAws_restJson1GetDocumentCommand
 */
export const se_GetDocumentCommand = async (
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

/**
 * serializeAws_restJson1GetDocumentPathCommand
 */
export const se_GetDocumentPathCommand = async (
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

/**
 * serializeAws_restJson1GetDocumentVersionCommand
 */
export const se_GetDocumentVersionCommand = async (
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

/**
 * serializeAws_restJson1GetFolderCommand
 */
export const se_GetFolderCommand = async (
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

/**
 * serializeAws_restJson1GetFolderPathCommand
 */
export const se_GetFolderPathCommand = async (
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

/**
 * serializeAws_restJson1GetResourcesCommand
 */
export const se_GetResourcesCommand = async (
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

/**
 * serializeAws_restJson1InitiateDocumentVersionUploadCommand
 */
export const se_InitiateDocumentVersionUploadCommand = async (
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

/**
 * serializeAws_restJson1RemoveAllResourcePermissionsCommand
 */
export const se_RemoveAllResourcePermissionsCommand = async (
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

/**
 * serializeAws_restJson1RemoveResourcePermissionCommand
 */
export const se_RemoveResourcePermissionCommand = async (
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

/**
 * serializeAws_restJson1RestoreDocumentVersionsCommand
 */
export const se_RestoreDocumentVersionsCommand = async (
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

/**
 * serializeAws_restJson1SearchResourcesCommand
 */
export const se_SearchResourcesCommand = async (
  input: SearchResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    authentication: input.AuthenticationToken!,
  });
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/api/v1/search";
  let body: any;
  body = JSON.stringify({
    ...(input.AdditionalResponseFields != null && {
      AdditionalResponseFields: se_AdditionalResponseFieldsList(input.AdditionalResponseFields, context),
    }),
    ...(input.Filters != null && { Filters: se_Filters(input.Filters, context) }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.OrderBy != null && { OrderBy: se_SearchResultSortList(input.OrderBy, context) }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.QueryScopes != null && { QueryScopes: se_SearchQueryScopeTypeList(input.QueryScopes, context) }),
    ...(input.QueryText != null && { QueryText: input.QueryText }),
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

/**
 * serializeAws_restJson1UpdateDocumentCommand
 */
export const se_UpdateDocumentCommand = async (
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

/**
 * serializeAws_restJson1UpdateDocumentVersionCommand
 */
export const se_UpdateDocumentVersionCommand = async (
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

/**
 * serializeAws_restJson1UpdateFolderCommand
 */
export const se_UpdateFolderCommand = async (
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

/**
 * serializeAws_restJson1UpdateUserCommand
 */
export const se_UpdateUserCommand = async (
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
    ...(input.StorageRule != null && { StorageRule: se_StorageRuleType(input.StorageRule, context) }),
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

/**
 * deserializeAws_restJson1AbortDocumentVersionUploadCommand
 */
export const de_AbortDocumentVersionUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AbortDocumentVersionUploadCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_AbortDocumentVersionUploadCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AbortDocumentVersionUploadCommandError
 */
const de_AbortDocumentVersionUploadCommandError = async (
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
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await de_EntityNotExistsExceptionRes(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await de_FailedDependencyExceptionRes(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await de_ProhibitedStateExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ActivateUserCommand
 */
export const de_ActivateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ActivateUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.User != null) {
    contents.User = de_User(data.User, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ActivateUserCommandError
 */
const de_ActivateUserCommandError = async (
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
      throw await de_EntityNotExistsExceptionRes(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await de_FailedDependencyExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1AddResourcePermissionsCommand
 */
export const de_AddResourcePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddResourcePermissionsCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_AddResourcePermissionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ShareResults != null) {
    contents.ShareResults = de_ShareResultsList(data.ShareResults, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1AddResourcePermissionsCommandError
 */
const de_AddResourcePermissionsCommandError = async (
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
      throw await de_FailedDependencyExceptionRes(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await de_ProhibitedStateExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateCommentCommand
 */
export const de_CreateCommentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCommentCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateCommentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Comment != null) {
    contents.Comment = de_Comment(data.Comment, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateCommentCommandError
 */
const de_CreateCommentCommandError = async (
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
      throw await de_DocumentLockedForCommentsExceptionRes(parsedOutput, context);
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await de_EntityNotExistsExceptionRes(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await de_FailedDependencyExceptionRes(parsedOutput, context);
    case "InvalidCommentOperationException":
    case "com.amazonaws.workdocs#InvalidCommentOperationException":
      throw await de_InvalidCommentOperationExceptionRes(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await de_ProhibitedStateExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateCustomMetadataCommand
 */
export const de_CreateCustomMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateCustomMetadataCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateCustomMetadataCommandError
 */
const de_CreateCustomMetadataCommandError = async (
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
      throw await de_CustomMetadataLimitExceededExceptionRes(parsedOutput, context);
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await de_EntityNotExistsExceptionRes(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await de_FailedDependencyExceptionRes(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await de_ProhibitedStateExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateFolderCommand
 */
export const de_CreateFolderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFolderCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateFolderCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Metadata != null) {
    contents.Metadata = de_FolderMetadata(data.Metadata, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateFolderCommandError
 */
const de_CreateFolderCommandError = async (
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
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ConflictingOperationException":
    case "com.amazonaws.workdocs#ConflictingOperationException":
      throw await de_ConflictingOperationExceptionRes(parsedOutput, context);
    case "EntityAlreadyExistsException":
    case "com.amazonaws.workdocs#EntityAlreadyExistsException":
      throw await de_EntityAlreadyExistsExceptionRes(parsedOutput, context);
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await de_EntityNotExistsExceptionRes(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await de_FailedDependencyExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.workdocs#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await de_ProhibitedStateExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateLabelsCommand
 */
export const de_CreateLabelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLabelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateLabelsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateLabelsCommandError
 */
const de_CreateLabelsCommandError = async (
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
      throw await de_EntityNotExistsExceptionRes(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await de_FailedDependencyExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyLabelsException":
    case "com.amazonaws.workdocs#TooManyLabelsException":
      throw await de_TooManyLabelsExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateNotificationSubscriptionCommand
 */
export const de_CreateNotificationSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNotificationSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateNotificationSubscriptionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Subscription != null) {
    contents.Subscription = de_Subscription(data.Subscription, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateNotificationSubscriptionCommandError
 */
const de_CreateNotificationSubscriptionCommandError = async (
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
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManySubscriptionsException":
    case "com.amazonaws.workdocs#TooManySubscriptionsException":
      throw await de_TooManySubscriptionsExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateUserCommand
 */
export const de_CreateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.User != null) {
    contents.User = de_User(data.User, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateUserCommandError
 */
const de_CreateUserCommandError = async (
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
      throw await de_EntityAlreadyExistsExceptionRes(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await de_FailedDependencyExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeactivateUserCommand
 */
export const de_DeactivateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateUserCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeactivateUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeactivateUserCommandError
 */
const de_DeactivateUserCommandError = async (
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
      throw await de_EntityNotExistsExceptionRes(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await de_FailedDependencyExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteCommentCommand
 */
export const de_DeleteCommentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCommentCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteCommentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCommentCommandError
 */
const de_DeleteCommentCommandError = async (
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
      throw await de_DocumentLockedForCommentsExceptionRes(parsedOutput, context);
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await de_EntityNotExistsExceptionRes(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await de_FailedDependencyExceptionRes(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await de_ProhibitedStateExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteCustomMetadataCommand
 */
export const de_DeleteCustomMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteCustomMetadataCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCustomMetadataCommandError
 */
const de_DeleteCustomMetadataCommandError = async (
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
      throw await de_EntityNotExistsExceptionRes(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await de_FailedDependencyExceptionRes(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await de_ProhibitedStateExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteDocumentCommand
 */
export const de_DeleteDocumentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDocumentCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteDocumentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDocumentCommandError
 */
const de_DeleteDocumentCommandError = async (
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
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ConflictingOperationException":
    case "com.amazonaws.workdocs#ConflictingOperationException":
      throw await de_ConflictingOperationExceptionRes(parsedOutput, context);
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await de_EntityNotExistsExceptionRes(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await de_FailedDependencyExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.workdocs#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await de_ProhibitedStateExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteDocumentVersionCommand
 */
export const de_DeleteDocumentVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDocumentVersionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteDocumentVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDocumentVersionCommandError
 */
const de_DeleteDocumentVersionCommandError = async (
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
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ConflictingOperationException":
    case "com.amazonaws.workdocs#ConflictingOperationException":
      throw await de_ConflictingOperationExceptionRes(parsedOutput, context);
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await de_EntityNotExistsExceptionRes(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await de_FailedDependencyExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.workdocs#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await de_ProhibitedStateExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteFolderCommand
 */
export const de_DeleteFolderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFolderCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteFolderCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteFolderCommandError
 */
const de_DeleteFolderCommandError = async (
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
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ConflictingOperationException":
    case "com.amazonaws.workdocs#ConflictingOperationException":
      throw await de_ConflictingOperationExceptionRes(parsedOutput, context);
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await de_EntityNotExistsExceptionRes(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await de_FailedDependencyExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.workdocs#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await de_ProhibitedStateExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteFolderContentsCommand
 */
export const de_DeleteFolderContentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFolderContentsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteFolderContentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteFolderContentsCommandError
 */
const de_DeleteFolderContentsCommandError = async (
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
      throw await de_ConflictingOperationExceptionRes(parsedOutput, context);
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await de_EntityNotExistsExceptionRes(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await de_FailedDependencyExceptionRes(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await de_ProhibitedStateExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteLabelsCommand
 */
export const de_DeleteLabelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLabelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteLabelsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteLabelsCommandError
 */
const de_DeleteLabelsCommandError = async (
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
      throw await de_EntityNotExistsExceptionRes(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await de_FailedDependencyExceptionRes(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await de_ProhibitedStateExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteNotificationSubscriptionCommand
 */
export const de_DeleteNotificationSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNotificationSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteNotificationSubscriptionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteNotificationSubscriptionCommandError
 */
const de_DeleteNotificationSubscriptionCommandError = async (
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
      throw await de_EntityNotExistsExceptionRes(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await de_ProhibitedStateExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteUserCommand
 */
export const de_DeleteUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteUserCommandError
 */
const de_DeleteUserCommandError = async (
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
      throw await de_EntityNotExistsExceptionRes(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await de_FailedDependencyExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeActivitiesCommand
 */
export const de_DescribeActivitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActivitiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeActivitiesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Marker != null) {
    contents.Marker = __expectString(data.Marker);
  }
  if (data.UserActivities != null) {
    contents.UserActivities = de_UserActivities(data.UserActivities, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeActivitiesCommandError
 */
const de_DescribeActivitiesCommandError = async (
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
      throw await de_FailedDependencyExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.workdocs#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeCommentsCommand
 */
export const de_DescribeCommentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCommentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeCommentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Comments != null) {
    contents.Comments = de_CommentList(data.Comments, context);
  }
  if (data.Marker != null) {
    contents.Marker = __expectString(data.Marker);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeCommentsCommandError
 */
const de_DescribeCommentsCommandError = async (
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
      throw await de_EntityNotExistsExceptionRes(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await de_FailedDependencyExceptionRes(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await de_ProhibitedStateExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeDocumentVersionsCommand
 */
export const de_DescribeDocumentVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDocumentVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeDocumentVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DocumentVersions != null) {
    contents.DocumentVersions = de_DocumentVersionMetadataList(data.DocumentVersions, context);
  }
  if (data.Marker != null) {
    contents.Marker = __expectString(data.Marker);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDocumentVersionsCommandError
 */
const de_DescribeDocumentVersionsCommandError = async (
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
      throw await de_EntityNotExistsExceptionRes(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await de_FailedDependencyExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.workdocs#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidPasswordException":
    case "com.amazonaws.workdocs#InvalidPasswordException":
      throw await de_InvalidPasswordExceptionRes(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await de_ProhibitedStateExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeFolderContentsCommand
 */
export const de_DescribeFolderContentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFolderContentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeFolderContentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Documents != null) {
    contents.Documents = de_DocumentMetadataList(data.Documents, context);
  }
  if (data.Folders != null) {
    contents.Folders = de_FolderMetadataList(data.Folders, context);
  }
  if (data.Marker != null) {
    contents.Marker = __expectString(data.Marker);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeFolderContentsCommandError
 */
const de_DescribeFolderContentsCommandError = async (
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
      throw await de_EntityNotExistsExceptionRes(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await de_FailedDependencyExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.workdocs#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await de_ProhibitedStateExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeGroupsCommand
 */
export const de_DescribeGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeGroupsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Groups != null) {
    contents.Groups = de_GroupMetadataList(data.Groups, context);
  }
  if (data.Marker != null) {
    contents.Marker = __expectString(data.Marker);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeGroupsCommandError
 */
const de_DescribeGroupsCommandError = async (
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
      throw await de_FailedDependencyExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeNotificationSubscriptionsCommand
 */
export const de_DescribeNotificationSubscriptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNotificationSubscriptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeNotificationSubscriptionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Marker != null) {
    contents.Marker = __expectString(data.Marker);
  }
  if (data.Subscriptions != null) {
    contents.Subscriptions = de_SubscriptionList(data.Subscriptions, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeNotificationSubscriptionsCommandError
 */
const de_DescribeNotificationSubscriptionsCommandError = async (
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
      throw await de_EntityNotExistsExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeResourcePermissionsCommand
 */
export const de_DescribeResourcePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourcePermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeResourcePermissionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Marker != null) {
    contents.Marker = __expectString(data.Marker);
  }
  if (data.Principals != null) {
    contents.Principals = de_PrincipalList(data.Principals, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeResourcePermissionsCommandError
 */
const de_DescribeResourcePermissionsCommandError = async (
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
      throw await de_FailedDependencyExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.workdocs#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeRootFoldersCommand
 */
export const de_DescribeRootFoldersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRootFoldersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeRootFoldersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Folders != null) {
    contents.Folders = de_FolderMetadataList(data.Folders, context);
  }
  if (data.Marker != null) {
    contents.Marker = __expectString(data.Marker);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeRootFoldersCommandError
 */
const de_DescribeRootFoldersCommandError = async (
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
      throw await de_FailedDependencyExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.workdocs#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeUsersCommand
 */
export const de_DescribeUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUsersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeUsersCommandError(output, context);
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
    contents.Users = de_OrganizationUserList(data.Users, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeUsersCommandError
 */
const de_DescribeUsersCommandError = async (
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
      throw await de_EntityNotExistsExceptionRes(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await de_FailedDependencyExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.workdocs#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "RequestedEntityTooLargeException":
    case "com.amazonaws.workdocs#RequestedEntityTooLargeException":
      throw await de_RequestedEntityTooLargeExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetCurrentUserCommand
 */
export const de_GetCurrentUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCurrentUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetCurrentUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.User != null) {
    contents.User = de_User(data.User, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetCurrentUserCommandError
 */
const de_GetCurrentUserCommandError = async (
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
      throw await de_EntityNotExistsExceptionRes(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await de_FailedDependencyExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetDocumentCommand
 */
export const de_GetDocumentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDocumentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CustomMetadata != null) {
    contents.CustomMetadata = de_CustomMetadataMap(data.CustomMetadata, context);
  }
  if (data.Metadata != null) {
    contents.Metadata = de_DocumentMetadata(data.Metadata, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetDocumentCommandError
 */
const de_GetDocumentCommandError = async (
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
      throw await de_EntityNotExistsExceptionRes(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await de_FailedDependencyExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.workdocs#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidPasswordException":
    case "com.amazonaws.workdocs#InvalidPasswordException":
      throw await de_InvalidPasswordExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetDocumentPathCommand
 */
export const de_GetDocumentPathCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentPathCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDocumentPathCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Path != null) {
    contents.Path = de_ResourcePath(data.Path, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetDocumentPathCommandError
 */
const de_GetDocumentPathCommandError = async (
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
      throw await de_EntityNotExistsExceptionRes(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await de_FailedDependencyExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetDocumentVersionCommand
 */
export const de_GetDocumentVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDocumentVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CustomMetadata != null) {
    contents.CustomMetadata = de_CustomMetadataMap(data.CustomMetadata, context);
  }
  if (data.Metadata != null) {
    contents.Metadata = de_DocumentVersionMetadata(data.Metadata, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetDocumentVersionCommandError
 */
const de_GetDocumentVersionCommandError = async (
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
      throw await de_EntityNotExistsExceptionRes(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await de_FailedDependencyExceptionRes(parsedOutput, context);
    case "InvalidPasswordException":
    case "com.amazonaws.workdocs#InvalidPasswordException":
      throw await de_InvalidPasswordExceptionRes(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await de_ProhibitedStateExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetFolderCommand
 */
export const de_GetFolderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFolderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetFolderCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CustomMetadata != null) {
    contents.CustomMetadata = de_CustomMetadataMap(data.CustomMetadata, context);
  }
  if (data.Metadata != null) {
    contents.Metadata = de_FolderMetadata(data.Metadata, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetFolderCommandError
 */
const de_GetFolderCommandError = async (
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
      throw await de_EntityNotExistsExceptionRes(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await de_FailedDependencyExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.workdocs#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await de_ProhibitedStateExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetFolderPathCommand
 */
export const de_GetFolderPathCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFolderPathCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetFolderPathCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Path != null) {
    contents.Path = de_ResourcePath(data.Path, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetFolderPathCommandError
 */
const de_GetFolderPathCommandError = async (
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
      throw await de_EntityNotExistsExceptionRes(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await de_FailedDependencyExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetResourcesCommand
 */
export const de_GetResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetResourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Documents != null) {
    contents.Documents = de_DocumentMetadataList(data.Documents, context);
  }
  if (data.Folders != null) {
    contents.Folders = de_FolderMetadataList(data.Folders, context);
  }
  if (data.Marker != null) {
    contents.Marker = __expectString(data.Marker);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetResourcesCommandError
 */
const de_GetResourcesCommandError = async (
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
      throw await de_FailedDependencyExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.workdocs#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1InitiateDocumentVersionUploadCommand
 */
export const de_InitiateDocumentVersionUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateDocumentVersionUploadCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_InitiateDocumentVersionUploadCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Metadata != null) {
    contents.Metadata = de_DocumentMetadata(data.Metadata, context);
  }
  if (data.UploadMetadata != null) {
    contents.UploadMetadata = de_UploadMetadata(data.UploadMetadata, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1InitiateDocumentVersionUploadCommandError
 */
const de_InitiateDocumentVersionUploadCommandError = async (
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
      throw await de_DraftUploadOutOfSyncExceptionRes(parsedOutput, context);
    case "EntityAlreadyExistsException":
    case "com.amazonaws.workdocs#EntityAlreadyExistsException":
      throw await de_EntityAlreadyExistsExceptionRes(parsedOutput, context);
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await de_EntityNotExistsExceptionRes(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await de_FailedDependencyExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.workdocs#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidPasswordException":
    case "com.amazonaws.workdocs#InvalidPasswordException":
      throw await de_InvalidPasswordExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.workdocs#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await de_ProhibitedStateExceptionRes(parsedOutput, context);
    case "ResourceAlreadyCheckedOutException":
    case "com.amazonaws.workdocs#ResourceAlreadyCheckedOutException":
      throw await de_ResourceAlreadyCheckedOutExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "StorageLimitExceededException":
    case "com.amazonaws.workdocs#StorageLimitExceededException":
      throw await de_StorageLimitExceededExceptionRes(parsedOutput, context);
    case "StorageLimitWillExceedException":
    case "com.amazonaws.workdocs#StorageLimitWillExceedException":
      throw await de_StorageLimitWillExceedExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1RemoveAllResourcePermissionsCommand
 */
export const de_RemoveAllResourcePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveAllResourcePermissionsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_RemoveAllResourcePermissionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1RemoveAllResourcePermissionsCommandError
 */
const de_RemoveAllResourcePermissionsCommandError = async (
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
      throw await de_FailedDependencyExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1RemoveResourcePermissionCommand
 */
export const de_RemoveResourcePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveResourcePermissionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_RemoveResourcePermissionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1RemoveResourcePermissionCommandError
 */
const de_RemoveResourcePermissionCommandError = async (
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
      throw await de_FailedDependencyExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1RestoreDocumentVersionsCommand
 */
export const de_RestoreDocumentVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreDocumentVersionsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_RestoreDocumentVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1RestoreDocumentVersionsCommandError
 */
const de_RestoreDocumentVersionsCommandError = async (
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
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ConflictingOperationException":
    case "com.amazonaws.workdocs#ConflictingOperationException":
      throw await de_ConflictingOperationExceptionRes(parsedOutput, context);
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await de_EntityNotExistsExceptionRes(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await de_FailedDependencyExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.workdocs#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await de_ProhibitedStateExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1SearchResourcesCommand
 */
export const de_SearchResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SearchResourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items != null) {
    contents.Items = de_ResponseItemsList(data.Items, context);
  }
  if (data.Marker != null) {
    contents.Marker = __expectString(data.Marker);
  }
  return contents;
};

/**
 * deserializeAws_restJson1SearchResourcesCommandError
 */
const de_SearchResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.workdocs#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateDocumentCommand
 */
export const de_UpdateDocumentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDocumentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateDocumentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDocumentCommandError
 */
const de_UpdateDocumentCommandError = async (
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
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ConflictingOperationException":
    case "com.amazonaws.workdocs#ConflictingOperationException":
      throw await de_ConflictingOperationExceptionRes(parsedOutput, context);
    case "EntityAlreadyExistsException":
    case "com.amazonaws.workdocs#EntityAlreadyExistsException":
      throw await de_EntityAlreadyExistsExceptionRes(parsedOutput, context);
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await de_EntityNotExistsExceptionRes(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await de_FailedDependencyExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.workdocs#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await de_ProhibitedStateExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateDocumentVersionCommand
 */
export const de_UpdateDocumentVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDocumentVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateDocumentVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDocumentVersionCommandError
 */
const de_UpdateDocumentVersionCommandError = async (
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
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await de_EntityNotExistsExceptionRes(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await de_FailedDependencyExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.workdocs#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await de_ProhibitedStateExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateFolderCommand
 */
export const de_UpdateFolderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFolderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateFolderCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateFolderCommandError
 */
const de_UpdateFolderCommandError = async (
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
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ConflictingOperationException":
    case "com.amazonaws.workdocs#ConflictingOperationException":
      throw await de_ConflictingOperationExceptionRes(parsedOutput, context);
    case "EntityAlreadyExistsException":
    case "com.amazonaws.workdocs#EntityAlreadyExistsException":
      throw await de_EntityAlreadyExistsExceptionRes(parsedOutput, context);
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await de_EntityNotExistsExceptionRes(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await de_FailedDependencyExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.workdocs#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await de_ProhibitedStateExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateUserCommand
 */
export const de_UpdateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.User != null) {
    contents.User = de_User(data.User, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateUserCommandError
 */
const de_UpdateUserCommandError = async (
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
      throw await de_DeactivatingLastSystemUserExceptionRes(parsedOutput, context);
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      throw await de_EntityNotExistsExceptionRes(parsedOutput, context);
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      throw await de_FailedDependencyExceptionRes(parsedOutput, context);
    case "IllegalUserStateException":
    case "com.amazonaws.workdocs#IllegalUserStateException":
      throw await de_IllegalUserStateExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.workdocs#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      throw await de_ProhibitedStateExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      throw await de_UnauthorizedResourceAccessExceptionRes(parsedOutput, context);
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
/**
 * deserializeAws_restJson1ConcurrentModificationExceptionRes
 */
const de_ConcurrentModificationExceptionRes = async (
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

/**
 * deserializeAws_restJson1ConflictingOperationExceptionRes
 */
const de_ConflictingOperationExceptionRes = async (
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

/**
 * deserializeAws_restJson1CustomMetadataLimitExceededExceptionRes
 */
const de_CustomMetadataLimitExceededExceptionRes = async (
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

/**
 * deserializeAws_restJson1DeactivatingLastSystemUserExceptionRes
 */
const de_DeactivatingLastSystemUserExceptionRes = async (
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

/**
 * deserializeAws_restJson1DocumentLockedForCommentsExceptionRes
 */
const de_DocumentLockedForCommentsExceptionRes = async (
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

/**
 * deserializeAws_restJson1DraftUploadOutOfSyncExceptionRes
 */
const de_DraftUploadOutOfSyncExceptionRes = async (
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

/**
 * deserializeAws_restJson1EntityAlreadyExistsExceptionRes
 */
const de_EntityAlreadyExistsExceptionRes = async (
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

/**
 * deserializeAws_restJson1EntityNotExistsExceptionRes
 */
const de_EntityNotExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EntityNotExistsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.EntityIds != null) {
    contents.EntityIds = de_EntityIdList(data.EntityIds, context);
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

/**
 * deserializeAws_restJson1FailedDependencyExceptionRes
 */
const de_FailedDependencyExceptionRes = async (
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

/**
 * deserializeAws_restJson1IllegalUserStateExceptionRes
 */
const de_IllegalUserStateExceptionRes = async (
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

/**
 * deserializeAws_restJson1InvalidArgumentExceptionRes
 */
const de_InvalidArgumentExceptionRes = async (
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

/**
 * deserializeAws_restJson1InvalidCommentOperationExceptionRes
 */
const de_InvalidCommentOperationExceptionRes = async (
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

/**
 * deserializeAws_restJson1InvalidOperationExceptionRes
 */
const de_InvalidOperationExceptionRes = async (
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

/**
 * deserializeAws_restJson1InvalidPasswordExceptionRes
 */
const de_InvalidPasswordExceptionRes = async (
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

/**
 * deserializeAws_restJson1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
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

/**
 * deserializeAws_restJson1ProhibitedStateExceptionRes
 */
const de_ProhibitedStateExceptionRes = async (
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

/**
 * deserializeAws_restJson1RequestedEntityTooLargeExceptionRes
 */
const de_RequestedEntityTooLargeExceptionRes = async (
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

/**
 * deserializeAws_restJson1ResourceAlreadyCheckedOutExceptionRes
 */
const de_ResourceAlreadyCheckedOutExceptionRes = async (
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

/**
 * deserializeAws_restJson1ServiceUnavailableExceptionRes
 */
const de_ServiceUnavailableExceptionRes = async (
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

/**
 * deserializeAws_restJson1StorageLimitExceededExceptionRes
 */
const de_StorageLimitExceededExceptionRes = async (
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

/**
 * deserializeAws_restJson1StorageLimitWillExceedExceptionRes
 */
const de_StorageLimitWillExceedExceptionRes = async (
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

/**
 * deserializeAws_restJson1TooManyLabelsExceptionRes
 */
const de_TooManyLabelsExceptionRes = async (
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

/**
 * deserializeAws_restJson1TooManySubscriptionsExceptionRes
 */
const de_TooManySubscriptionsExceptionRes = async (
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

/**
 * deserializeAws_restJson1UnauthorizedOperationExceptionRes
 */
const de_UnauthorizedOperationExceptionRes = async (
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

/**
 * deserializeAws_restJson1UnauthorizedResourceAccessExceptionRes
 */
const de_UnauthorizedResourceAccessExceptionRes = async (
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

/**
 * serializeAws_restJson1AdditionalResponseFieldsList
 */
const se_AdditionalResponseFieldsList = (
  input: (AdditionalResponseFieldType | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1CustomMetadataMap
 */
const se_CustomMetadataMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1DateRangeType
 */
const se_DateRangeType = (input: DateRangeType, context: __SerdeContext): any => {
  return {
    ...(input.EndValue != null && { EndValue: Math.round(input.EndValue.getTime() / 1000) }),
    ...(input.StartValue != null && { StartValue: Math.round(input.StartValue.getTime() / 1000) }),
  };
};

/**
 * serializeAws_restJson1Filters
 */
const se_Filters = (input: Filters, context: __SerdeContext): any => {
  return {
    ...(input.AncestorIds != null && { AncestorIds: se_SearchAncestorIdList(input.AncestorIds, context) }),
    ...(input.ContentCategories != null && {
      ContentCategories: se_SearchContentCategoryTypeList(input.ContentCategories, context),
    }),
    ...(input.CreatedRange != null && { CreatedRange: se_DateRangeType(input.CreatedRange, context) }),
    ...(input.Labels != null && { Labels: se_SearchLabelList(input.Labels, context) }),
    ...(input.ModifiedRange != null && { ModifiedRange: se_DateRangeType(input.ModifiedRange, context) }),
    ...(input.Principals != null && { Principals: se_SearchPrincipalTypeList(input.Principals, context) }),
    ...(input.ResourceTypes != null && { ResourceTypes: se_SearchResourceTypeList(input.ResourceTypes, context) }),
    ...(input.SearchCollectionTypes != null && {
      SearchCollectionTypes: se_SearchCollectionTypeList(input.SearchCollectionTypes, context),
    }),
    ...(input.SizeRange != null && { SizeRange: se_LongRangeType(input.SizeRange, context) }),
    ...(input.TextLocales != null && { TextLocales: se_TextLocaleTypeList(input.TextLocales, context) }),
  };
};

/**
 * serializeAws_restJson1LongRangeType
 */
const se_LongRangeType = (input: LongRangeType, context: __SerdeContext): any => {
  return {
    ...(input.EndValue != null && { EndValue: input.EndValue }),
    ...(input.StartValue != null && { StartValue: input.StartValue }),
  };
};

/**
 * serializeAws_restJson1NotificationOptions
 */
const se_NotificationOptions = (input: NotificationOptions, context: __SerdeContext): any => {
  return {
    ...(input.EmailMessage != null && { EmailMessage: input.EmailMessage }),
    ...(input.SendEmail != null && { SendEmail: input.SendEmail }),
  };
};

/**
 * serializeAws_restJson1SearchAncestorIdList
 */
const se_SearchAncestorIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SearchCollectionTypeList
 */
const se_SearchCollectionTypeList = (input: (SearchCollectionType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SearchContentCategoryTypeList
 */
const se_SearchContentCategoryTypeList = (input: (ContentCategoryType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SearchLabelList
 */
const se_SearchLabelList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SearchPrincipalRoleList
 */
const se_SearchPrincipalRoleList = (input: (PrincipalRoleType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SearchPrincipalType
 */
const se_SearchPrincipalType = (input: SearchPrincipalType, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Roles != null && { Roles: se_SearchPrincipalRoleList(input.Roles, context) }),
  };
};

/**
 * serializeAws_restJson1SearchPrincipalTypeList
 */
const se_SearchPrincipalTypeList = (input: SearchPrincipalType[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SearchPrincipalType(entry, context);
    });
};

/**
 * serializeAws_restJson1SearchQueryScopeTypeList
 */
const se_SearchQueryScopeTypeList = (input: (SearchQueryScopeType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SearchResourceTypeList
 */
const se_SearchResourceTypeList = (input: (SearchResourceType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SearchResultSortList
 */
const se_SearchResultSortList = (input: SearchSortResult[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SearchSortResult(entry, context);
    });
};

/**
 * serializeAws_restJson1SearchSortResult
 */
const se_SearchSortResult = (input: SearchSortResult, context: __SerdeContext): any => {
  return {
    ...(input.Field != null && { Field: input.Field }),
    ...(input.Order != null && { Order: input.Order }),
  };
};

/**
 * serializeAws_restJson1SharedLabels
 */
const se_SharedLabels = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SharePrincipal
 */
const se_SharePrincipal = (input: SharePrincipal, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Role != null && { Role: input.Role }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_restJson1SharePrincipalList
 */
const se_SharePrincipalList = (input: SharePrincipal[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SharePrincipal(entry, context);
    });
};

/**
 * serializeAws_restJson1StorageRuleType
 */
const se_StorageRuleType = (input: StorageRuleType, context: __SerdeContext): any => {
  return {
    ...(input.StorageAllocatedInBytes != null && { StorageAllocatedInBytes: input.StorageAllocatedInBytes }),
    ...(input.StorageType != null && { StorageType: input.StorageType }),
  };
};

/**
 * serializeAws_restJson1TextLocaleTypeList
 */
const se_TextLocaleTypeList = (input: (LanguageCodeType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * deserializeAws_restJson1Activity
 */
const de_Activity = (output: any, context: __SerdeContext): Activity => {
  return {
    CommentMetadata: output.CommentMetadata != null ? de_CommentMetadata(output.CommentMetadata, context) : undefined,
    Initiator: output.Initiator != null ? de_UserMetadata(output.Initiator, context) : undefined,
    IsIndirectActivity: __expectBoolean(output.IsIndirectActivity),
    OrganizationId: __expectString(output.OrganizationId),
    OriginalParent: output.OriginalParent != null ? de_ResourceMetadata(output.OriginalParent, context) : undefined,
    Participants: output.Participants != null ? de_Participants(output.Participants, context) : undefined,
    ResourceMetadata:
      output.ResourceMetadata != null ? de_ResourceMetadata(output.ResourceMetadata, context) : undefined,
    TimeStamp:
      output.TimeStamp != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.TimeStamp))) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1Comment
 */
const de_Comment = (output: any, context: __SerdeContext): Comment => {
  return {
    CommentId: __expectString(output.CommentId),
    Contributor: output.Contributor != null ? de_User(output.Contributor, context) : undefined,
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

/**
 * deserializeAws_restJson1CommentList
 */
const de_CommentList = (output: any, context: __SerdeContext): Comment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Comment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CommentMetadata
 */
const de_CommentMetadata = (output: any, context: __SerdeContext): CommentMetadata => {
  return {
    CommentId: __expectString(output.CommentId),
    CommentStatus: __expectString(output.CommentStatus),
    Contributor: output.Contributor != null ? de_User(output.Contributor, context) : undefined,
    ContributorId: __expectString(output.ContributorId),
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    RecipientId: __expectString(output.RecipientId),
  } as any;
};

/**
 * deserializeAws_restJson1CustomMetadataMap
 */
const de_CustomMetadataMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1DocumentMetadata
 */
const de_DocumentMetadata = (output: any, context: __SerdeContext): DocumentMetadata => {
  return {
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    CreatorId: __expectString(output.CreatorId),
    Id: __expectString(output.Id),
    Labels: output.Labels != null ? de_SharedLabels(output.Labels, context) : undefined,
    LatestVersionMetadata:
      output.LatestVersionMetadata != null
        ? de_DocumentVersionMetadata(output.LatestVersionMetadata, context)
        : undefined,
    ModifiedTimestamp:
      output.ModifiedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ModifiedTimestamp)))
        : undefined,
    ParentFolderId: __expectString(output.ParentFolderId),
    ResourceState: __expectString(output.ResourceState),
  } as any;
};

/**
 * deserializeAws_restJson1DocumentMetadataList
 */
const de_DocumentMetadataList = (output: any, context: __SerdeContext): DocumentMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DocumentMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DocumentSourceUrlMap
 */
const de_DocumentSourceUrlMap = (output: any, context: __SerdeContext): Record<string, string> => {
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

/**
 * deserializeAws_restJson1DocumentThumbnailUrlMap
 */
const de_DocumentThumbnailUrlMap = (output: any, context: __SerdeContext): Record<string, string> => {
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

/**
 * deserializeAws_restJson1DocumentVersionMetadata
 */
const de_DocumentVersionMetadata = (output: any, context: __SerdeContext): DocumentVersionMetadata => {
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
    Source: output.Source != null ? de_DocumentSourceUrlMap(output.Source, context) : undefined,
    Status: __expectString(output.Status),
    Thumbnail: output.Thumbnail != null ? de_DocumentThumbnailUrlMap(output.Thumbnail, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DocumentVersionMetadataList
 */
const de_DocumentVersionMetadataList = (output: any, context: __SerdeContext): DocumentVersionMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DocumentVersionMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EntityIdList
 */
const de_EntityIdList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1FolderMetadata
 */
const de_FolderMetadata = (output: any, context: __SerdeContext): FolderMetadata => {
  return {
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    CreatorId: __expectString(output.CreatorId),
    Id: __expectString(output.Id),
    Labels: output.Labels != null ? de_SharedLabels(output.Labels, context) : undefined,
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

/**
 * deserializeAws_restJson1FolderMetadataList
 */
const de_FolderMetadataList = (output: any, context: __SerdeContext): FolderMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FolderMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1GroupMetadata
 */
const de_GroupMetadata = (output: any, context: __SerdeContext): GroupMetadata => {
  return {
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_restJson1GroupMetadataList
 */
const de_GroupMetadataList = (output: any, context: __SerdeContext): GroupMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GroupMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1OrganizationUserList
 */
const de_OrganizationUserList = (output: any, context: __SerdeContext): User[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_User(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Participants
 */
const de_Participants = (output: any, context: __SerdeContext): Participants => {
  return {
    Groups: output.Groups != null ? de_GroupMetadataList(output.Groups, context) : undefined,
    Users: output.Users != null ? de_UserMetadataList(output.Users, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PermissionInfo
 */
const de_PermissionInfo = (output: any, context: __SerdeContext): PermissionInfo => {
  return {
    Role: __expectString(output.Role),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1PermissionInfoList
 */
const de_PermissionInfoList = (output: any, context: __SerdeContext): PermissionInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PermissionInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Principal
 */
const de_Principal = (output: any, context: __SerdeContext): Principal => {
  return {
    Id: __expectString(output.Id),
    Roles: output.Roles != null ? de_PermissionInfoList(output.Roles, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1PrincipalList
 */
const de_PrincipalList = (output: any, context: __SerdeContext): Principal[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Principal(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ResourceMetadata
 */
const de_ResourceMetadata = (output: any, context: __SerdeContext): ResourceMetadata => {
  return {
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    OriginalName: __expectString(output.OriginalName),
    Owner: output.Owner != null ? de_UserMetadata(output.Owner, context) : undefined,
    ParentId: __expectString(output.ParentId),
    Type: __expectString(output.Type),
    VersionId: __expectString(output.VersionId),
  } as any;
};

/**
 * deserializeAws_restJson1ResourcePath
 */
const de_ResourcePath = (output: any, context: __SerdeContext): ResourcePath => {
  return {
    Components: output.Components != null ? de_ResourcePathComponentList(output.Components, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ResourcePathComponent
 */
const de_ResourcePathComponent = (output: any, context: __SerdeContext): ResourcePathComponent => {
  return {
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_restJson1ResourcePathComponentList
 */
const de_ResourcePathComponentList = (output: any, context: __SerdeContext): ResourcePathComponent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourcePathComponent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ResponseItem
 */
const de_ResponseItem = (output: any, context: __SerdeContext): ResponseItem => {
  return {
    CommentMetadata: output.CommentMetadata != null ? de_CommentMetadata(output.CommentMetadata, context) : undefined,
    DocumentMetadata:
      output.DocumentMetadata != null ? de_DocumentMetadata(output.DocumentMetadata, context) : undefined,
    DocumentVersionMetadata:
      output.DocumentVersionMetadata != null
        ? de_DocumentVersionMetadata(output.DocumentVersionMetadata, context)
        : undefined,
    FolderMetadata: output.FolderMetadata != null ? de_FolderMetadata(output.FolderMetadata, context) : undefined,
    ResourceType: __expectString(output.ResourceType),
    WebUrl: __expectString(output.WebUrl),
  } as any;
};

/**
 * deserializeAws_restJson1ResponseItemsList
 */
const de_ResponseItemsList = (output: any, context: __SerdeContext): ResponseItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResponseItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SharedLabels
 */
const de_SharedLabels = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1ShareResult
 */
const de_ShareResult = (output: any, context: __SerdeContext): ShareResult => {
  return {
    InviteePrincipalId: __expectString(output.InviteePrincipalId),
    PrincipalId: __expectString(output.PrincipalId),
    Role: __expectString(output.Role),
    ShareId: __expectString(output.ShareId),
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
  } as any;
};

/**
 * deserializeAws_restJson1ShareResultsList
 */
const de_ShareResultsList = (output: any, context: __SerdeContext): ShareResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ShareResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SignedHeaderMap
 */
const de_SignedHeaderMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1StorageRuleType
 */
const de_StorageRuleType = (output: any, context: __SerdeContext): StorageRuleType => {
  return {
    StorageAllocatedInBytes: __expectLong(output.StorageAllocatedInBytes),
    StorageType: __expectString(output.StorageType),
  } as any;
};

/**
 * deserializeAws_restJson1Subscription
 */
const de_Subscription = (output: any, context: __SerdeContext): Subscription => {
  return {
    EndPoint: __expectString(output.EndPoint),
    Protocol: __expectString(output.Protocol),
    SubscriptionId: __expectString(output.SubscriptionId),
  } as any;
};

/**
 * deserializeAws_restJson1SubscriptionList
 */
const de_SubscriptionList = (output: any, context: __SerdeContext): Subscription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Subscription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1UploadMetadata
 */
const de_UploadMetadata = (output: any, context: __SerdeContext): UploadMetadata => {
  return {
    SignedHeaders: output.SignedHeaders != null ? de_SignedHeaderMap(output.SignedHeaders, context) : undefined,
    UploadUrl: __expectString(output.UploadUrl),
  } as any;
};

/**
 * deserializeAws_restJson1User
 */
const de_User = (output: any, context: __SerdeContext): User => {
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
    Storage: output.Storage != null ? de_UserStorageMetadata(output.Storage, context) : undefined,
    Surname: __expectString(output.Surname),
    TimeZoneId: __expectString(output.TimeZoneId),
    Type: __expectString(output.Type),
    Username: __expectString(output.Username),
  } as any;
};

/**
 * deserializeAws_restJson1UserActivities
 */
const de_UserActivities = (output: any, context: __SerdeContext): Activity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Activity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1UserMetadata
 */
const de_UserMetadata = (output: any, context: __SerdeContext): UserMetadata => {
  return {
    EmailAddress: __expectString(output.EmailAddress),
    GivenName: __expectString(output.GivenName),
    Id: __expectString(output.Id),
    Surname: __expectString(output.Surname),
    Username: __expectString(output.Username),
  } as any;
};

/**
 * deserializeAws_restJson1UserMetadataList
 */
const de_UserMetadataList = (output: any, context: __SerdeContext): UserMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UserMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1UserStorageMetadata
 */
const de_UserStorageMetadata = (output: any, context: __SerdeContext): UserStorageMetadata => {
  return {
    StorageRule: output.StorageRule != null ? de_StorageRuleType(output.StorageRule, context) : undefined,
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
