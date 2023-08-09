// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
  DocumentVersionMetadata,
  DraftUploadOutOfSyncException,
  EntityAlreadyExistsException,
  EntityNotExistsException,
  FailedDependencyException,
  Filters,
  FolderMetadata,
  IllegalUserStateException,
  InvalidArgumentException,
  InvalidCommentOperationException,
  InvalidOperationException,
  InvalidPasswordException,
  LanguageCodeType,
  LimitExceededException,
  LongRangeType,
  NotificationOptions,
  PrincipalRoleType,
  ProhibitedStateException,
  RequestedEntityTooLargeException,
  ResourceAlreadyCheckedOutException,
  ResponseItem,
  SearchCollectionType,
  SearchPrincipalType,
  SearchQueryScopeType,
  SearchResourceType,
  SearchSortResult,
  ServiceUnavailableException,
  SharePrincipal,
  StorageLimitExceededException,
  StorageLimitWillExceedException,
  StorageRuleType,
  TooManyLabelsException,
  TooManySubscriptionsException,
  UnauthorizedOperationException,
  UnauthorizedResourceAccessException,
  User,
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
  body = JSON.stringify(
    take(input, {
      NotificationOptions: (_) => _json(_),
      Principals: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      NotifyCollaborators: [],
      ParentId: [],
      Text: [],
      ThreadId: [],
      Visibility: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      CustomMetadata: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      Name: [],
      ParentFolderId: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      Labels: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      Endpoint: [],
      Protocol: [],
      SubscriptionType: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      EmailAddress: [],
      GivenName: [],
      OrganizationId: [],
      Password: [],
      StorageRule: (_) => _json(_),
      Surname: [],
      TimeZoneId: [],
      Username: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      ContentCreatedTimestamp: (_) => Math.round(_.getTime() / 1000),
      ContentModifiedTimestamp: (_) => Math.round(_.getTime() / 1000),
      ContentType: [],
      DocumentSizeInBytes: [],
      Id: [],
      Name: [],
      ParentFolderId: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      AdditionalResponseFields: (_) => _json(_),
      Filters: (_) => se_Filters(_, context),
      Limit: [],
      Marker: [],
      OrderBy: (_) => _json(_),
      OrganizationId: [],
      QueryScopes: (_) => _json(_),
      QueryText: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      Name: [],
      ParentFolderId: [],
      ResourceState: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      VersionStatus: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      Name: [],
      ParentFolderId: [],
      ResourceState: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      GivenName: [],
      GrantPoweruserPrivileges: [],
      Locale: [],
      StorageRule: (_) => _json(_),
      Surname: [],
      TimeZoneId: [],
      Type: [],
    })
  );
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    User: (_) => de_User(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    ShareResults: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Comment: (_) => de_Comment(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Metadata: (_) => de_FolderMetadata(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Subscription: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    User: (_) => de_User(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Marker: __expectString,
    UserActivities: (_) => de_UserActivities(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Comments: (_) => de_CommentList(_, context),
    Marker: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    DocumentVersions: (_) => de_DocumentVersionMetadataList(_, context),
    Marker: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Documents: (_) => de_DocumentMetadataList(_, context),
    Folders: (_) => de_FolderMetadataList(_, context),
    Marker: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Groups: _json,
    Marker: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Marker: __expectString,
    Subscriptions: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Marker: __expectString,
    Principals: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Folders: (_) => de_FolderMetadataList(_, context),
    Marker: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Marker: __expectString,
    TotalNumberOfUsers: __expectLong,
    Users: (_) => de_OrganizationUserList(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    User: (_) => de_User(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    CustomMetadata: _json,
    Metadata: (_) => de_DocumentMetadata(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Path: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    CustomMetadata: _json,
    Metadata: (_) => de_DocumentVersionMetadata(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    CustomMetadata: _json,
    Metadata: (_) => de_FolderMetadata(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Path: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Documents: (_) => de_DocumentMetadataList(_, context),
    Folders: (_) => de_FolderMetadataList(_, context),
    Marker: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Metadata: (_) => de_DocumentMetadata(_, context),
    UploadMetadata: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Items: (_) => de_ResponseItemsList(_, context),
    Marker: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    User: (_) => de_User(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1ConcurrentModificationExceptionRes
 */
const de_ConcurrentModificationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    EntityIds: _json,
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnauthorizedResourceAccessException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AdditionalResponseFieldsList omitted.

// se_CustomMetadataMap omitted.

/**
 * serializeAws_restJson1DateRangeType
 */
const se_DateRangeType = (input: DateRangeType, context: __SerdeContext): any => {
  return take(input, {
    EndValue: (_) => Math.round(_.getTime() / 1000),
    StartValue: (_) => Math.round(_.getTime() / 1000),
  });
};

/**
 * serializeAws_restJson1Filters
 */
const se_Filters = (input: Filters, context: __SerdeContext): any => {
  return take(input, {
    AncestorIds: _json,
    ContentCategories: _json,
    CreatedRange: (_) => se_DateRangeType(_, context),
    Labels: _json,
    ModifiedRange: (_) => se_DateRangeType(_, context),
    Principals: _json,
    ResourceTypes: _json,
    SearchCollectionTypes: _json,
    SizeRange: _json,
    TextLocales: _json,
  });
};

// se_LongRangeType omitted.

// se_NotificationOptions omitted.

// se_SearchAncestorIdList omitted.

// se_SearchCollectionTypeList omitted.

// se_SearchContentCategoryTypeList omitted.

// se_SearchLabelList omitted.

// se_SearchPrincipalRoleList omitted.

// se_SearchPrincipalType omitted.

// se_SearchPrincipalTypeList omitted.

// se_SearchQueryScopeTypeList omitted.

// se_SearchResourceTypeList omitted.

// se_SearchResultSortList omitted.

// se_SearchSortResult omitted.

// se_SharedLabels omitted.

// se_SharePrincipal omitted.

// se_SharePrincipalList omitted.

// se_StorageRuleType omitted.

// se_TextLocaleTypeList omitted.

/**
 * deserializeAws_restJson1Activity
 */
const de_Activity = (output: any, context: __SerdeContext): Activity => {
  return take(output, {
    CommentMetadata: (_: any) => de_CommentMetadata(_, context),
    Initiator: _json,
    IsIndirectActivity: __expectBoolean,
    OrganizationId: __expectString,
    OriginalParent: _json,
    Participants: _json,
    ResourceMetadata: _json,
    TimeStamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1Comment
 */
const de_Comment = (output: any, context: __SerdeContext): Comment => {
  return take(output, {
    CommentId: __expectString,
    Contributor: (_: any) => de_User(_, context),
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ParentId: __expectString,
    RecipientId: __expectString,
    Status: __expectString,
    Text: __expectString,
    ThreadId: __expectString,
    Visibility: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1CommentList
 */
const de_CommentList = (output: any, context: __SerdeContext): Comment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Comment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CommentMetadata
 */
const de_CommentMetadata = (output: any, context: __SerdeContext): CommentMetadata => {
  return take(output, {
    CommentId: __expectString,
    CommentStatus: __expectString,
    Contributor: (_: any) => de_User(_, context),
    ContributorId: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RecipientId: __expectString,
  }) as any;
};

// de_CustomMetadataMap omitted.

/**
 * deserializeAws_restJson1DocumentMetadata
 */
const de_DocumentMetadata = (output: any, context: __SerdeContext): DocumentMetadata => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreatorId: __expectString,
    Id: __expectString,
    Labels: _json,
    LatestVersionMetadata: (_: any) => de_DocumentVersionMetadata(_, context),
    ModifiedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ParentFolderId: __expectString,
    ResourceState: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1DocumentMetadataList
 */
const de_DocumentMetadataList = (output: any, context: __SerdeContext): DocumentMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DocumentMetadata(entry, context);
    });
  return retVal;
};

// de_DocumentSourceUrlMap omitted.

// de_DocumentThumbnailUrlMap omitted.

/**
 * deserializeAws_restJson1DocumentVersionMetadata
 */
const de_DocumentVersionMetadata = (output: any, context: __SerdeContext): DocumentVersionMetadata => {
  return take(output, {
    ContentCreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ContentModifiedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ContentType: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreatorId: __expectString,
    Id: __expectString,
    ModifiedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    Signature: __expectString,
    Size: __expectLong,
    Source: _json,
    Status: __expectString,
    Thumbnail: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1DocumentVersionMetadataList
 */
const de_DocumentVersionMetadataList = (output: any, context: __SerdeContext): DocumentVersionMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DocumentVersionMetadata(entry, context);
    });
  return retVal;
};

// de_EntityIdList omitted.

/**
 * deserializeAws_restJson1FolderMetadata
 */
const de_FolderMetadata = (output: any, context: __SerdeContext): FolderMetadata => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreatorId: __expectString,
    Id: __expectString,
    Labels: _json,
    LatestVersionSize: __expectLong,
    ModifiedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    ParentFolderId: __expectString,
    ResourceState: __expectString,
    Signature: __expectString,
    Size: __expectLong,
  }) as any;
};

/**
 * deserializeAws_restJson1FolderMetadataList
 */
const de_FolderMetadataList = (output: any, context: __SerdeContext): FolderMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FolderMetadata(entry, context);
    });
  return retVal;
};

// de_GroupMetadata omitted.

// de_GroupMetadataList omitted.

/**
 * deserializeAws_restJson1OrganizationUserList
 */
const de_OrganizationUserList = (output: any, context: __SerdeContext): User[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_User(entry, context);
    });
  return retVal;
};

// de_Participants omitted.

// de_PermissionInfo omitted.

// de_PermissionInfoList omitted.

// de_Principal omitted.

// de_PrincipalList omitted.

// de_ResourceMetadata omitted.

// de_ResourcePath omitted.

// de_ResourcePathComponent omitted.

// de_ResourcePathComponentList omitted.

/**
 * deserializeAws_restJson1ResponseItem
 */
const de_ResponseItem = (output: any, context: __SerdeContext): ResponseItem => {
  return take(output, {
    CommentMetadata: (_: any) => de_CommentMetadata(_, context),
    DocumentMetadata: (_: any) => de_DocumentMetadata(_, context),
    DocumentVersionMetadata: (_: any) => de_DocumentVersionMetadata(_, context),
    FolderMetadata: (_: any) => de_FolderMetadata(_, context),
    ResourceType: __expectString,
    WebUrl: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ResponseItemsList
 */
const de_ResponseItemsList = (output: any, context: __SerdeContext): ResponseItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ResponseItem(entry, context);
    });
  return retVal;
};

// de_SharedLabels omitted.

// de_ShareResult omitted.

// de_ShareResultsList omitted.

// de_SignedHeaderMap omitted.

// de_StorageRuleType omitted.

// de_Subscription omitted.

// de_SubscriptionList omitted.

// de_UploadMetadata omitted.

/**
 * deserializeAws_restJson1User
 */
const de_User = (output: any, context: __SerdeContext): User => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EmailAddress: __expectString,
    GivenName: __expectString,
    Id: __expectString,
    Locale: __expectString,
    ModifiedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    OrganizationId: __expectString,
    RecycleBinFolderId: __expectString,
    RootFolderId: __expectString,
    Status: __expectString,
    Storage: _json,
    Surname: __expectString,
    TimeZoneId: __expectString,
    Type: __expectString,
    Username: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1UserActivities
 */
const de_UserActivities = (output: any, context: __SerdeContext): Activity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Activity(entry, context);
    });
  return retVal;
};

// de_UserMetadata omitted.

// de_UserMetadataList omitted.

// de_UserStorageMetadata omitted.

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
