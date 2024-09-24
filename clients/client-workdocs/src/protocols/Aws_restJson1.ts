// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
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
  isSerializableHeaderValue,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  serializeDateTime as __serializeDateTime,
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
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_a]: input[_AT]!,
  });
  b.bp("/api/v1/documents/{DocumentId}/versions/{VersionId}");
  b.p("DocumentId", () => input.DocumentId!, "{DocumentId}", false);
  b.p("VersionId", () => input.VersionId!, "{VersionId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ActivateUserCommand
 */
export const se_ActivateUserCommand = async (
  input: ActivateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_a]: input[_AT]!,
  });
  b.bp("/api/v1/users/{UserId}/activation");
  b.p("UserId", () => input.UserId!, "{UserId}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AddResourcePermissionsCommand
 */
export const se_AddResourcePermissionsCommand = async (
  input: AddResourcePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_a]: input[_AT]!,
  });
  b.bp("/api/v1/resources/{ResourceId}/permissions");
  b.p("ResourceId", () => input.ResourceId!, "{ResourceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      NotificationOptions: (_) => _json(_),
      Principals: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateCommentCommand
 */
export const se_CreateCommentCommand = async (
  input: CreateCommentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_a]: input[_AT]!,
  });
  b.bp("/api/v1/documents/{DocumentId}/versions/{VersionId}/comment");
  b.p("DocumentId", () => input.DocumentId!, "{DocumentId}", false);
  b.p("VersionId", () => input.VersionId!, "{VersionId}", false);
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
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateCustomMetadataCommand
 */
export const se_CreateCustomMetadataCommand = async (
  input: CreateCustomMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_a]: input[_AT]!,
  });
  b.bp("/api/v1/resources/{ResourceId}/customMetadata");
  b.p("ResourceId", () => input.ResourceId!, "{ResourceId}", false);
  const query: any = map({
    [_v]: [, input[_VI]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      CustomMetadata: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateFolderCommand
 */
export const se_CreateFolderCommand = async (
  input: CreateFolderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_a]: input[_AT]!,
  });
  b.bp("/api/v1/folders");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Name: [],
      ParentFolderId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateLabelsCommand
 */
export const se_CreateLabelsCommand = async (
  input: CreateLabelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_a]: input[_AT]!,
  });
  b.bp("/api/v1/resources/{ResourceId}/labels");
  b.p("ResourceId", () => input.ResourceId!, "{ResourceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Labels: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateNotificationSubscriptionCommand
 */
export const se_CreateNotificationSubscriptionCommand = async (
  input: CreateNotificationSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/api/v1/organizations/{OrganizationId}/subscriptions");
  b.p("OrganizationId", () => input.OrganizationId!, "{OrganizationId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Endpoint: [],
      Protocol: [],
      SubscriptionType: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateUserCommand
 */
export const se_CreateUserCommand = async (
  input: CreateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_a]: input[_AT]!,
  });
  b.bp("/api/v1/users");
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
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeactivateUserCommand
 */
export const se_DeactivateUserCommand = async (
  input: DeactivateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_a]: input[_AT]!,
  });
  b.bp("/api/v1/users/{UserId}/activation");
  b.p("UserId", () => input.UserId!, "{UserId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteCommentCommand
 */
export const se_DeleteCommentCommand = async (
  input: DeleteCommentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_a]: input[_AT]!,
  });
  b.bp("/api/v1/documents/{DocumentId}/versions/{VersionId}/comment/{CommentId}");
  b.p("DocumentId", () => input.DocumentId!, "{DocumentId}", false);
  b.p("VersionId", () => input.VersionId!, "{VersionId}", false);
  b.p("CommentId", () => input.CommentId!, "{CommentId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteCustomMetadataCommand
 */
export const se_DeleteCustomMetadataCommand = async (
  input: DeleteCustomMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_a]: input[_AT]!,
  });
  b.bp("/api/v1/resources/{ResourceId}/customMetadata");
  b.p("ResourceId", () => input.ResourceId!, "{ResourceId}", false);
  const query: any = map({
    [_vI]: [, input[_VI]!],
    [_k]: [() => input.Keys !== void 0, () => input[_K]! || []],
    [_dA]: [() => input.DeleteAll !== void 0, () => input[_DA]!.toString()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDocumentCommand
 */
export const se_DeleteDocumentCommand = async (
  input: DeleteDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_a]: input[_AT]!,
  });
  b.bp("/api/v1/documents/{DocumentId}");
  b.p("DocumentId", () => input.DocumentId!, "{DocumentId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDocumentVersionCommand
 */
export const se_DeleteDocumentVersionCommand = async (
  input: DeleteDocumentVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_a]: input[_AT]!,
  });
  b.bp("/api/v1/documentVersions/{DocumentId}/versions/{VersionId}");
  b.p("DocumentId", () => input.DocumentId!, "{DocumentId}", false);
  b.p("VersionId", () => input.VersionId!, "{VersionId}", false);
  const query: any = map({
    [_dPV]: [__expectNonNull(input.DeletePriorVersions, `DeletePriorVersions`) != null, () => input[_DPV]!.toString()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteFolderCommand
 */
export const se_DeleteFolderCommand = async (
  input: DeleteFolderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_a]: input[_AT]!,
  });
  b.bp("/api/v1/folders/{FolderId}");
  b.p("FolderId", () => input.FolderId!, "{FolderId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteFolderContentsCommand
 */
export const se_DeleteFolderContentsCommand = async (
  input: DeleteFolderContentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_a]: input[_AT]!,
  });
  b.bp("/api/v1/folders/{FolderId}/contents");
  b.p("FolderId", () => input.FolderId!, "{FolderId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteLabelsCommand
 */
export const se_DeleteLabelsCommand = async (
  input: DeleteLabelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_a]: input[_AT]!,
  });
  b.bp("/api/v1/resources/{ResourceId}/labels");
  b.p("ResourceId", () => input.ResourceId!, "{ResourceId}", false);
  const query: any = map({
    [_l]: [() => input.Labels !== void 0, () => input[_L]! || []],
    [_dA]: [() => input.DeleteAll !== void 0, () => input[_DA]!.toString()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteNotificationSubscriptionCommand
 */
export const se_DeleteNotificationSubscriptionCommand = async (
  input: DeleteNotificationSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/api/v1/organizations/{OrganizationId}/subscriptions/{SubscriptionId}");
  b.p("SubscriptionId", () => input.SubscriptionId!, "{SubscriptionId}", false);
  b.p("OrganizationId", () => input.OrganizationId!, "{OrganizationId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteUserCommand
 */
export const se_DeleteUserCommand = async (
  input: DeleteUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_a]: input[_AT]!,
  });
  b.bp("/api/v1/users/{UserId}");
  b.p("UserId", () => input.UserId!, "{UserId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeActivitiesCommand
 */
export const se_DescribeActivitiesCommand = async (
  input: DescribeActivitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_a]: input[_AT]!,
  });
  b.bp("/api/v1/activities");
  const query: any = map({
    [_sT]: [() => input.StartTime !== void 0, () => __serializeDateTime(input[_ST]!).toString()],
    [_eT]: [() => input.EndTime !== void 0, () => __serializeDateTime(input[_ET]!).toString()],
    [_oI]: [, input[_OI]!],
    [_aT]: [, input[_ATc]!],
    [_rI]: [, input[_RI]!],
    [_uI]: [, input[_UI]!],
    [_iIA]: [() => input.IncludeIndirectActivities !== void 0, () => input[_IIA]!.toString()],
    [_li]: [() => input.Limit !== void 0, () => input[_Li]!.toString()],
    [_m]: [, input[_M]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeCommentsCommand
 */
export const se_DescribeCommentsCommand = async (
  input: DescribeCommentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_a]: input[_AT]!,
  });
  b.bp("/api/v1/documents/{DocumentId}/versions/{VersionId}/comments");
  b.p("DocumentId", () => input.DocumentId!, "{DocumentId}", false);
  b.p("VersionId", () => input.VersionId!, "{VersionId}", false);
  const query: any = map({
    [_li]: [() => input.Limit !== void 0, () => input[_Li]!.toString()],
    [_m]: [, input[_M]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeDocumentVersionsCommand
 */
export const se_DescribeDocumentVersionsCommand = async (
  input: DescribeDocumentVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_a]: input[_AT]!,
  });
  b.bp("/api/v1/documents/{DocumentId}/versions");
  b.p("DocumentId", () => input.DocumentId!, "{DocumentId}", false);
  const query: any = map({
    [_m]: [, input[_M]!],
    [_li]: [() => input.Limit !== void 0, () => input[_Li]!.toString()],
    [_i]: [, input[_I]!],
    [_f]: [, input[_F]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeFolderContentsCommand
 */
export const se_DescribeFolderContentsCommand = async (
  input: DescribeFolderContentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_a]: input[_AT]!,
  });
  b.bp("/api/v1/folders/{FolderId}/contents");
  b.p("FolderId", () => input.FolderId!, "{FolderId}", false);
  const query: any = map({
    [_s]: [, input[_S]!],
    [_o]: [, input[_O]!],
    [_li]: [() => input.Limit !== void 0, () => input[_Li]!.toString()],
    [_m]: [, input[_M]!],
    [_t]: [, input[_T]!],
    [_i]: [, input[_I]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeGroupsCommand
 */
export const se_DescribeGroupsCommand = async (
  input: DescribeGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_a]: input[_AT]!,
  });
  b.bp("/api/v1/groups");
  const query: any = map({
    [_sQ]: [, __expectNonNull(input[_SQ]!, `SearchQuery`)],
    [_oI]: [, input[_OI]!],
    [_m]: [, input[_M]!],
    [_li]: [() => input.Limit !== void 0, () => input[_Li]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeNotificationSubscriptionsCommand
 */
export const se_DescribeNotificationSubscriptionsCommand = async (
  input: DescribeNotificationSubscriptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/api/v1/organizations/{OrganizationId}/subscriptions");
  b.p("OrganizationId", () => input.OrganizationId!, "{OrganizationId}", false);
  const query: any = map({
    [_m]: [, input[_M]!],
    [_li]: [() => input.Limit !== void 0, () => input[_Li]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeResourcePermissionsCommand
 */
export const se_DescribeResourcePermissionsCommand = async (
  input: DescribeResourcePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_a]: input[_AT]!,
  });
  b.bp("/api/v1/resources/{ResourceId}/permissions");
  b.p("ResourceId", () => input.ResourceId!, "{ResourceId}", false);
  const query: any = map({
    [_pI]: [, input[_PI]!],
    [_li]: [() => input.Limit !== void 0, () => input[_Li]!.toString()],
    [_m]: [, input[_M]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeRootFoldersCommand
 */
export const se_DescribeRootFoldersCommand = async (
  input: DescribeRootFoldersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_a]: input[_AT]!,
  });
  b.bp("/api/v1/me/root");
  const query: any = map({
    [_li]: [() => input.Limit !== void 0, () => input[_Li]!.toString()],
    [_m]: [, input[_M]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeUsersCommand
 */
export const se_DescribeUsersCommand = async (
  input: DescribeUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_a]: input[_AT]!,
  });
  b.bp("/api/v1/users");
  const query: any = map({
    [_oI]: [, input[_OI]!],
    [_uIs]: [, input[_UIs]!],
    [_q]: [, input[_Q]!],
    [_i]: [, input[_I]!],
    [_o]: [, input[_O]!],
    [_s]: [, input[_S]!],
    [_m]: [, input[_M]!],
    [_li]: [() => input.Limit !== void 0, () => input[_Li]!.toString()],
    [_f]: [, input[_F]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCurrentUserCommand
 */
export const se_GetCurrentUserCommand = async (
  input: GetCurrentUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_a]: input[_AT]!,
  });
  b.bp("/api/v1/me");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDocumentCommand
 */
export const se_GetDocumentCommand = async (
  input: GetDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_a]: input[_AT]!,
  });
  b.bp("/api/v1/documents/{DocumentId}");
  b.p("DocumentId", () => input.DocumentId!, "{DocumentId}", false);
  const query: any = map({
    [_iCM]: [() => input.IncludeCustomMetadata !== void 0, () => input[_ICM]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDocumentPathCommand
 */
export const se_GetDocumentPathCommand = async (
  input: GetDocumentPathCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_a]: input[_AT]!,
  });
  b.bp("/api/v1/documents/{DocumentId}/path");
  b.p("DocumentId", () => input.DocumentId!, "{DocumentId}", false);
  const query: any = map({
    [_li]: [() => input.Limit !== void 0, () => input[_Li]!.toString()],
    [_f]: [, input[_F]!],
    [_m]: [, input[_M]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDocumentVersionCommand
 */
export const se_GetDocumentVersionCommand = async (
  input: GetDocumentVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_a]: input[_AT]!,
  });
  b.bp("/api/v1/documents/{DocumentId}/versions/{VersionId}");
  b.p("DocumentId", () => input.DocumentId!, "{DocumentId}", false);
  b.p("VersionId", () => input.VersionId!, "{VersionId}", false);
  const query: any = map({
    [_f]: [, input[_F]!],
    [_iCM]: [() => input.IncludeCustomMetadata !== void 0, () => input[_ICM]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetFolderCommand
 */
export const se_GetFolderCommand = async (
  input: GetFolderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_a]: input[_AT]!,
  });
  b.bp("/api/v1/folders/{FolderId}");
  b.p("FolderId", () => input.FolderId!, "{FolderId}", false);
  const query: any = map({
    [_iCM]: [() => input.IncludeCustomMetadata !== void 0, () => input[_ICM]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetFolderPathCommand
 */
export const se_GetFolderPathCommand = async (
  input: GetFolderPathCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_a]: input[_AT]!,
  });
  b.bp("/api/v1/folders/{FolderId}/path");
  b.p("FolderId", () => input.FolderId!, "{FolderId}", false);
  const query: any = map({
    [_li]: [() => input.Limit !== void 0, () => input[_Li]!.toString()],
    [_f]: [, input[_F]!],
    [_m]: [, input[_M]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetResourcesCommand
 */
export const se_GetResourcesCommand = async (
  input: GetResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_a]: input[_AT]!,
  });
  b.bp("/api/v1/resources");
  const query: any = map({
    [_uI]: [, input[_UI]!],
    [_cT]: [, input[_CT]!],
    [_li]: [() => input.Limit !== void 0, () => input[_Li]!.toString()],
    [_m]: [, input[_M]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1InitiateDocumentVersionUploadCommand
 */
export const se_InitiateDocumentVersionUploadCommand = async (
  input: InitiateDocumentVersionUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_a]: input[_AT]!,
  });
  b.bp("/api/v1/documents");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ContentCreatedTimestamp: (_) => _.getTime() / 1_000,
      ContentModifiedTimestamp: (_) => _.getTime() / 1_000,
      ContentType: [],
      DocumentSizeInBytes: [],
      Id: [],
      Name: [],
      ParentFolderId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RemoveAllResourcePermissionsCommand
 */
export const se_RemoveAllResourcePermissionsCommand = async (
  input: RemoveAllResourcePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_a]: input[_AT]!,
  });
  b.bp("/api/v1/resources/{ResourceId}/permissions");
  b.p("ResourceId", () => input.ResourceId!, "{ResourceId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RemoveResourcePermissionCommand
 */
export const se_RemoveResourcePermissionCommand = async (
  input: RemoveResourcePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_a]: input[_AT]!,
  });
  b.bp("/api/v1/resources/{ResourceId}/permissions/{PrincipalId}");
  b.p("ResourceId", () => input.ResourceId!, "{ResourceId}", false);
  b.p("PrincipalId", () => input.PrincipalId!, "{PrincipalId}", false);
  const query: any = map({
    [_t]: [, input[_PT]!],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RestoreDocumentVersionsCommand
 */
export const se_RestoreDocumentVersionsCommand = async (
  input: RestoreDocumentVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_a]: input[_AT]!,
  });
  b.bp("/api/v1/documentVersions/restore/{DocumentId}");
  b.p("DocumentId", () => input.DocumentId!, "{DocumentId}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchResourcesCommand
 */
export const se_SearchResourcesCommand = async (
  input: SearchResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_a]: input[_AT]!,
  });
  b.bp("/api/v1/search");
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
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDocumentCommand
 */
export const se_UpdateDocumentCommand = async (
  input: UpdateDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_a]: input[_AT]!,
  });
  b.bp("/api/v1/documents/{DocumentId}");
  b.p("DocumentId", () => input.DocumentId!, "{DocumentId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Name: [],
      ParentFolderId: [],
      ResourceState: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDocumentVersionCommand
 */
export const se_UpdateDocumentVersionCommand = async (
  input: UpdateDocumentVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_a]: input[_AT]!,
  });
  b.bp("/api/v1/documents/{DocumentId}/versions/{VersionId}");
  b.p("DocumentId", () => input.DocumentId!, "{DocumentId}", false);
  b.p("VersionId", () => input.VersionId!, "{VersionId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      VersionStatus: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateFolderCommand
 */
export const se_UpdateFolderCommand = async (
  input: UpdateFolderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_a]: input[_AT]!,
  });
  b.bp("/api/v1/folders/{FolderId}");
  b.p("FolderId", () => input.FolderId!, "{FolderId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Name: [],
      ParentFolderId: [],
      ResourceState: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateUserCommand
 */
export const se_UpdateUserCommand = async (
  input: UpdateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_a]: input[_AT]!,
  });
  b.bp("/api/v1/users/{UserId}");
  b.p("UserId", () => input.UserId!, "{UserId}", false);
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
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AbortDocumentVersionUploadCommand
 */
export const de_AbortDocumentVersionUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AbortDocumentVersionUploadCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1ActivateUserCommand
 */
export const de_ActivateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1AddResourcePermissionsCommand
 */
export const de_AddResourcePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddResourcePermissionsCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1CreateCommentCommand
 */
export const de_CreateCommentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCommentCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1CreateCustomMetadataCommand
 */
export const de_CreateCustomMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateFolderCommand
 */
export const de_CreateFolderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFolderCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1CreateLabelsCommand
 */
export const de_CreateLabelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLabelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateNotificationSubscriptionCommand
 */
export const de_CreateNotificationSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNotificationSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1CreateUserCommand
 */
export const de_CreateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1DeactivateUserCommand
 */
export const de_DeactivateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateUserCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCommentCommand
 */
export const de_DeleteCommentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCommentCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCustomMetadataCommand
 */
export const de_DeleteCustomMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDocumentCommand
 */
export const de_DeleteDocumentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDocumentCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDocumentVersionCommand
 */
export const de_DeleteDocumentVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDocumentVersionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteFolderCommand
 */
export const de_DeleteFolderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFolderCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteFolderContentsCommand
 */
export const de_DeleteFolderContentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFolderContentsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteLabelsCommand
 */
export const de_DeleteLabelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLabelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteNotificationSubscriptionCommand
 */
export const de_DeleteNotificationSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNotificationSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteUserCommand
 */
export const de_DeleteUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeActivitiesCommand
 */
export const de_DescribeActivitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActivitiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1DescribeCommentsCommand
 */
export const de_DescribeCommentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCommentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1DescribeDocumentVersionsCommand
 */
export const de_DescribeDocumentVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDocumentVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1DescribeFolderContentsCommand
 */
export const de_DescribeFolderContentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFolderContentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1DescribeGroupsCommand
 */
export const de_DescribeGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1DescribeNotificationSubscriptionsCommand
 */
export const de_DescribeNotificationSubscriptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNotificationSubscriptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1DescribeResourcePermissionsCommand
 */
export const de_DescribeResourcePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourcePermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1DescribeRootFoldersCommand
 */
export const de_DescribeRootFoldersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRootFoldersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1DescribeUsersCommand
 */
export const de_DescribeUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUsersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetCurrentUserCommand
 */
export const de_GetCurrentUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCurrentUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetDocumentCommand
 */
export const de_GetDocumentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetDocumentPathCommand
 */
export const de_GetDocumentPathCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentPathCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetDocumentVersionCommand
 */
export const de_GetDocumentVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetFolderCommand
 */
export const de_GetFolderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFolderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetFolderPathCommand
 */
export const de_GetFolderPathCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFolderPathCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetResourcesCommand
 */
export const de_GetResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1InitiateDocumentVersionUploadCommand
 */
export const de_InitiateDocumentVersionUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateDocumentVersionUploadCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1RemoveAllResourcePermissionsCommand
 */
export const de_RemoveAllResourcePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveAllResourcePermissionsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1RemoveResourcePermissionCommand
 */
export const de_RemoveResourcePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveResourcePermissionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1RestoreDocumentVersionsCommand
 */
export const de_RestoreDocumentVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreDocumentVersionsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1SearchResourcesCommand
 */
export const de_SearchResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1UpdateDocumentCommand
 */
export const de_UpdateDocumentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDocumentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDocumentVersionCommand
 */
export const de_UpdateDocumentVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDocumentVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateFolderCommand
 */
export const de_UpdateFolderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFolderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateUserCommand
 */
export const de_UpdateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
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
    case "DocumentLockedForCommentsException":
    case "com.amazonaws.workdocs#DocumentLockedForCommentsException":
      throw await de_DocumentLockedForCommentsExceptionRes(parsedOutput, context);
    case "InvalidCommentOperationException":
    case "com.amazonaws.workdocs#InvalidCommentOperationException":
      throw await de_InvalidCommentOperationExceptionRes(parsedOutput, context);
    case "CustomMetadataLimitExceededException":
    case "com.amazonaws.workdocs#CustomMetadataLimitExceededException":
      throw await de_CustomMetadataLimitExceededExceptionRes(parsedOutput, context);
    case "ConflictingOperationException":
    case "com.amazonaws.workdocs#ConflictingOperationException":
      throw await de_ConflictingOperationExceptionRes(parsedOutput, context);
    case "EntityAlreadyExistsException":
    case "com.amazonaws.workdocs#EntityAlreadyExistsException":
      throw await de_EntityAlreadyExistsExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.workdocs#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "TooManyLabelsException":
    case "com.amazonaws.workdocs#TooManyLabelsException":
      throw await de_TooManyLabelsExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.workdocs#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "TooManySubscriptionsException":
    case "com.amazonaws.workdocs#TooManySubscriptionsException":
      throw await de_TooManySubscriptionsExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.workdocs#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "InvalidPasswordException":
    case "com.amazonaws.workdocs#InvalidPasswordException":
      throw await de_InvalidPasswordExceptionRes(parsedOutput, context);
    case "RequestedEntityTooLargeException":
    case "com.amazonaws.workdocs#RequestedEntityTooLargeException":
      throw await de_RequestedEntityTooLargeExceptionRes(parsedOutput, context);
    case "DraftUploadOutOfSyncException":
    case "com.amazonaws.workdocs#DraftUploadOutOfSyncException":
      throw await de_DraftUploadOutOfSyncExceptionRes(parsedOutput, context);
    case "ResourceAlreadyCheckedOutException":
    case "com.amazonaws.workdocs#ResourceAlreadyCheckedOutException":
      throw await de_ResourceAlreadyCheckedOutExceptionRes(parsedOutput, context);
    case "StorageLimitExceededException":
    case "com.amazonaws.workdocs#StorageLimitExceededException":
      throw await de_StorageLimitExceededExceptionRes(parsedOutput, context);
    case "StorageLimitWillExceedException":
    case "com.amazonaws.workdocs#StorageLimitWillExceedException":
      throw await de_StorageLimitWillExceedExceptionRes(parsedOutput, context);
    case "DeactivatingLastSystemUserException":
    case "com.amazonaws.workdocs#DeactivatingLastSystemUserException":
      throw await de_DeactivatingLastSystemUserExceptionRes(parsedOutput, context);
    case "IllegalUserStateException":
    case "com.amazonaws.workdocs#IllegalUserStateException":
      throw await de_IllegalUserStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
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
    EndValue: (_) => _.getTime() / 1_000,
    StartValue: (_) => _.getTime() / 1_000,
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

const _AT = "AuthenticationToken";
const _ATc = "ActivityTypes";
const _CT = "CollectionType";
const _DA = "DeleteAll";
const _DPV = "DeletePriorVersions";
const _ET = "EndTime";
const _F = "Fields";
const _I = "Include";
const _ICM = "IncludeCustomMetadata";
const _IIA = "IncludeIndirectActivities";
const _K = "Keys";
const _L = "Labels";
const _Li = "Limit";
const _M = "Marker";
const _O = "Order";
const _OI = "OrganizationId";
const _PI = "PrincipalId";
const _PT = "PrincipalType";
const _Q = "Query";
const _RI = "ResourceId";
const _S = "Sort";
const _SQ = "SearchQuery";
const _ST = "StartTime";
const _T = "Type";
const _UI = "UserId";
const _UIs = "UserIds";
const _VI = "VersionId";
const _a = "authentication";
const _aT = "activityTypes";
const _cT = "collectionType";
const _dA = "deleteAll";
const _dPV = "deletePriorVersions";
const _eT = "endTime";
const _f = "fields";
const _i = "include";
const _iCM = "includeCustomMetadata";
const _iIA = "includeIndirectActivities";
const _k = "keys";
const _l = "labels";
const _li = "limit";
const _m = "marker";
const _o = "order";
const _oI = "organizationId";
const _pI = "principalId";
const _q = "query";
const _rI = "resourceId";
const _s = "sort";
const _sQ = "searchQuery";
const _sT = "startTime";
const _t = "type";
const _uI = "userId";
const _uIs = "userIds";
const _v = "versionid";
const _vI = "versionId";
