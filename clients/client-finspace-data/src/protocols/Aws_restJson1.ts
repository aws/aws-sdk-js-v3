// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  AssociateUserToPermissionGroupCommandInput,
  AssociateUserToPermissionGroupCommandOutput,
} from "../commands/AssociateUserToPermissionGroupCommand";
import { CreateChangesetCommandInput, CreateChangesetCommandOutput } from "../commands/CreateChangesetCommand";
import { CreateDatasetCommandInput, CreateDatasetCommandOutput } from "../commands/CreateDatasetCommand";
import { CreateDataViewCommandInput, CreateDataViewCommandOutput } from "../commands/CreateDataViewCommand";
import {
  CreatePermissionGroupCommandInput,
  CreatePermissionGroupCommandOutput,
} from "../commands/CreatePermissionGroupCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "../commands/CreateUserCommand";
import { DeleteDatasetCommandInput, DeleteDatasetCommandOutput } from "../commands/DeleteDatasetCommand";
import {
  DeletePermissionGroupCommandInput,
  DeletePermissionGroupCommandOutput,
} from "../commands/DeletePermissionGroupCommand";
import { DisableUserCommandInput, DisableUserCommandOutput } from "../commands/DisableUserCommand";
import {
  DisassociateUserFromPermissionGroupCommandInput,
  DisassociateUserFromPermissionGroupCommandOutput,
} from "../commands/DisassociateUserFromPermissionGroupCommand";
import { EnableUserCommandInput, EnableUserCommandOutput } from "../commands/EnableUserCommand";
import { GetChangesetCommandInput, GetChangesetCommandOutput } from "../commands/GetChangesetCommand";
import { GetDatasetCommandInput, GetDatasetCommandOutput } from "../commands/GetDatasetCommand";
import { GetDataViewCommandInput, GetDataViewCommandOutput } from "../commands/GetDataViewCommand";
import {
  GetExternalDataViewAccessDetailsCommandInput,
  GetExternalDataViewAccessDetailsCommandOutput,
} from "../commands/GetExternalDataViewAccessDetailsCommand";
import { GetPermissionGroupCommandInput, GetPermissionGroupCommandOutput } from "../commands/GetPermissionGroupCommand";
import {
  GetProgrammaticAccessCredentialsCommandInput,
  GetProgrammaticAccessCredentialsCommandOutput,
} from "../commands/GetProgrammaticAccessCredentialsCommand";
import { GetUserCommandInput, GetUserCommandOutput } from "../commands/GetUserCommand";
import { GetWorkingLocationCommandInput, GetWorkingLocationCommandOutput } from "../commands/GetWorkingLocationCommand";
import { ListChangesetsCommandInput, ListChangesetsCommandOutput } from "../commands/ListChangesetsCommand";
import { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "../commands/ListDatasetsCommand";
import { ListDataViewsCommandInput, ListDataViewsCommandOutput } from "../commands/ListDataViewsCommand";
import {
  ListPermissionGroupsByUserCommandInput,
  ListPermissionGroupsByUserCommandOutput,
} from "../commands/ListPermissionGroupsByUserCommand";
import {
  ListPermissionGroupsCommandInput,
  ListPermissionGroupsCommandOutput,
} from "../commands/ListPermissionGroupsCommand";
import {
  ListUsersByPermissionGroupCommandInput,
  ListUsersByPermissionGroupCommandOutput,
} from "../commands/ListUsersByPermissionGroupCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "../commands/ListUsersCommand";
import { ResetUserPasswordCommandInput, ResetUserPasswordCommandOutput } from "../commands/ResetUserPasswordCommand";
import { UpdateChangesetCommandInput, UpdateChangesetCommandOutput } from "../commands/UpdateChangesetCommand";
import { UpdateDatasetCommandInput, UpdateDatasetCommandOutput } from "../commands/UpdateDatasetCommand";
import {
  UpdatePermissionGroupCommandInput,
  UpdatePermissionGroupCommandOutput,
} from "../commands/UpdatePermissionGroupCommand";
import { UpdateUserCommandInput, UpdateUserCommandOutput } from "../commands/UpdateUserCommand";
import { FinspaceDataServiceException as __BaseException } from "../models/FinspaceDataServiceException";
import {
  AccessDeniedException,
  ApplicationPermission,
  AwsCredentials,
  ChangesetErrorInfo,
  ChangesetSummary,
  ColumnDefinition,
  ConflictException,
  Credentials,
  Dataset,
  DatasetOwnerInfo,
  DataViewDestinationTypeParams,
  DataViewErrorInfo,
  DataViewSummary,
  InternalServerException,
  LimitExceededException,
  PermissionGroup,
  PermissionGroupByUser,
  PermissionGroupParams,
  ResourceNotFoundException,
  ResourcePermission,
  S3Location,
  SchemaDefinition,
  SchemaUnion,
  ThrottlingException,
  User,
  UserByPermissionGroup,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1AssociateUserToPermissionGroupCommand
 */
export const se_AssociateUserToPermissionGroupCommand = async (
  input: AssociateUserToPermissionGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/permission-group/{permissionGroupId}/users/{userId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "permissionGroupId",
    () => input.permissionGroupId!,
    "{permissionGroupId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "userId", () => input.userId!, "{userId}", false);
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
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
 * serializeAws_restJson1CreateChangesetCommand
 */
export const se_CreateChangesetCommand = async (
  input: CreateChangesetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasets/{datasetId}/changesetsv2";
  resolvedPath = __resolvedPath(resolvedPath, input, "datasetId", () => input.datasetId!, "{datasetId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.changeType != null && { changeType: input.changeType }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.formatParams != null && { formatParams: se_FormatParams(input.formatParams, context) }),
    ...(input.sourceParams != null && { sourceParams: se_SourceParams(input.sourceParams, context) }),
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
 * serializeAws_restJson1CreateDatasetCommand
 */
export const se_CreateDatasetCommand = async (
  input: CreateDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasetsv2";
  let body: any;
  body = JSON.stringify({
    ...(input.alias != null && { alias: input.alias }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.datasetDescription != null && { datasetDescription: input.datasetDescription }),
    ...(input.datasetTitle != null && { datasetTitle: input.datasetTitle }),
    ...(input.kind != null && { kind: input.kind }),
    ...(input.ownerInfo != null && { ownerInfo: se_DatasetOwnerInfo(input.ownerInfo, context) }),
    ...(input.permissionGroupParams != null && {
      permissionGroupParams: se_PermissionGroupParams(input.permissionGroupParams, context),
    }),
    ...(input.schemaDefinition != null && { schemaDefinition: se_SchemaUnion(input.schemaDefinition, context) }),
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
 * serializeAws_restJson1CreateDataViewCommand
 */
export const se_CreateDataViewCommand = async (
  input: CreateDataViewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasets/{datasetId}/dataviewsv2";
  resolvedPath = __resolvedPath(resolvedPath, input, "datasetId", () => input.datasetId!, "{datasetId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.asOfTimestamp != null && { asOfTimestamp: input.asOfTimestamp }),
    ...(input.autoUpdate != null && { autoUpdate: input.autoUpdate }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.destinationTypeParams != null && {
      destinationTypeParams: se_DataViewDestinationTypeParams(input.destinationTypeParams, context),
    }),
    ...(input.partitionColumns != null && {
      partitionColumns: se_PartitionColumnList(input.partitionColumns, context),
    }),
    ...(input.sortColumns != null && { sortColumns: se_SortColumnList(input.sortColumns, context) }),
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
 * serializeAws_restJson1CreatePermissionGroupCommand
 */
export const se_CreatePermissionGroupCommand = async (
  input: CreatePermissionGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/permission-group";
  let body: any;
  body = JSON.stringify({
    ...(input.applicationPermissions != null && {
      applicationPermissions: se_ApplicationPermissionList(input.applicationPermissions, context),
    }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
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
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/user";
  let body: any;
  body = JSON.stringify({
    ...(input.ApiAccess != null && { ApiAccess: input.ApiAccess }),
    ...(input.apiAccessPrincipalArn != null && { apiAccessPrincipalArn: input.apiAccessPrincipalArn }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.emailAddress != null && { emailAddress: input.emailAddress }),
    ...(input.firstName != null && { firstName: input.firstName }),
    ...(input.lastName != null && { lastName: input.lastName }),
    ...(input.type != null && { type: input.type }),
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
 * serializeAws_restJson1DeleteDatasetCommand
 */
export const se_DeleteDatasetCommand = async (
  input: DeleteDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasetsv2/{datasetId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "datasetId", () => input.datasetId!, "{datasetId}", false);
  const query: any = map({
    clientToken: [, input.clientToken ?? generateIdempotencyToken()],
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
 * serializeAws_restJson1DeletePermissionGroupCommand
 */
export const se_DeletePermissionGroupCommand = async (
  input: DeletePermissionGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/permission-group/{permissionGroupId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "permissionGroupId",
    () => input.permissionGroupId!,
    "{permissionGroupId}",
    false
  );
  const query: any = map({
    clientToken: [, input.clientToken ?? generateIdempotencyToken()],
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
 * serializeAws_restJson1DisableUserCommand
 */
export const se_DisableUserCommand = async (
  input: DisableUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/user/{userId}/disable";
  resolvedPath = __resolvedPath(resolvedPath, input, "userId", () => input.userId!, "{userId}", false);
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
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
 * serializeAws_restJson1DisassociateUserFromPermissionGroupCommand
 */
export const se_DisassociateUserFromPermissionGroupCommand = async (
  input: DisassociateUserFromPermissionGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/permission-group/{permissionGroupId}/users/{userId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "permissionGroupId",
    () => input.permissionGroupId!,
    "{permissionGroupId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "userId", () => input.userId!, "{userId}", false);
  const query: any = map({
    clientToken: [, input.clientToken ?? generateIdempotencyToken()],
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
 * serializeAws_restJson1EnableUserCommand
 */
export const se_EnableUserCommand = async (
  input: EnableUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/user/{userId}/enable";
  resolvedPath = __resolvedPath(resolvedPath, input, "userId", () => input.userId!, "{userId}", false);
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
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
 * serializeAws_restJson1GetChangesetCommand
 */
export const se_GetChangesetCommand = async (
  input: GetChangesetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/datasets/{datasetId}/changesetsv2/{changesetId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "datasetId", () => input.datasetId!, "{datasetId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "changesetId", () => input.changesetId!, "{changesetId}", false);
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
 * serializeAws_restJson1GetDatasetCommand
 */
export const se_GetDatasetCommand = async (
  input: GetDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasetsv2/{datasetId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "datasetId", () => input.datasetId!, "{datasetId}", false);
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
 * serializeAws_restJson1GetDataViewCommand
 */
export const se_GetDataViewCommand = async (
  input: GetDataViewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/datasets/{datasetId}/dataviewsv2/{dataViewId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "dataViewId", () => input.dataViewId!, "{dataViewId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "datasetId", () => input.datasetId!, "{datasetId}", false);
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
 * serializeAws_restJson1GetExternalDataViewAccessDetailsCommand
 */
export const se_GetExternalDataViewAccessDetailsCommand = async (
  input: GetExternalDataViewAccessDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/datasets/{datasetId}/dataviewsv2/{dataViewId}/external-access-details";
  resolvedPath = __resolvedPath(resolvedPath, input, "dataViewId", () => input.dataViewId!, "{dataViewId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "datasetId", () => input.datasetId!, "{datasetId}", false);
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
 * serializeAws_restJson1GetPermissionGroupCommand
 */
export const se_GetPermissionGroupCommand = async (
  input: GetPermissionGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/permission-group/{permissionGroupId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "permissionGroupId",
    () => input.permissionGroupId!,
    "{permissionGroupId}",
    false
  );
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
 * serializeAws_restJson1GetProgrammaticAccessCredentialsCommand
 */
export const se_GetProgrammaticAccessCredentialsCommand = async (
  input: GetProgrammaticAccessCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/credentials/programmatic";
  const query: any = map({
    durationInMinutes: [() => input.durationInMinutes !== void 0, () => input.durationInMinutes!.toString()],
    environmentId: [, __expectNonNull(input.environmentId!, `environmentId`)],
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
 * serializeAws_restJson1GetUserCommand
 */
export const se_GetUserCommand = async (
  input: GetUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/user/{userId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "userId", () => input.userId!, "{userId}", false);
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
 * serializeAws_restJson1GetWorkingLocationCommand
 */
export const se_GetWorkingLocationCommand = async (
  input: GetWorkingLocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workingLocationV1";
  let body: any;
  body = JSON.stringify({
    ...(input.locationType != null && { locationType: input.locationType }),
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
 * serializeAws_restJson1ListChangesetsCommand
 */
export const se_ListChangesetsCommand = async (
  input: ListChangesetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasets/{datasetId}/changesetsv2";
  resolvedPath = __resolvedPath(resolvedPath, input, "datasetId", () => input.datasetId!, "{datasetId}", false);
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
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
 * serializeAws_restJson1ListDatasetsCommand
 */
export const se_ListDatasetsCommand = async (
  input: ListDatasetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasetsv2";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
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
 * serializeAws_restJson1ListDataViewsCommand
 */
export const se_ListDataViewsCommand = async (
  input: ListDataViewsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasets/{datasetId}/dataviewsv2";
  resolvedPath = __resolvedPath(resolvedPath, input, "datasetId", () => input.datasetId!, "{datasetId}", false);
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
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
 * serializeAws_restJson1ListPermissionGroupsCommand
 */
export const se_ListPermissionGroupsCommand = async (
  input: ListPermissionGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/permission-group";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [__expectNonNull(input.maxResults, `maxResults`) != null, () => input.maxResults!.toString()],
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
 * serializeAws_restJson1ListPermissionGroupsByUserCommand
 */
export const se_ListPermissionGroupsByUserCommand = async (
  input: ListPermissionGroupsByUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/user/{userId}/permission-groups";
  resolvedPath = __resolvedPath(resolvedPath, input, "userId", () => input.userId!, "{userId}", false);
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [__expectNonNull(input.maxResults, `maxResults`) != null, () => input.maxResults!.toString()],
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
 * serializeAws_restJson1ListUsersCommand
 */
export const se_ListUsersCommand = async (
  input: ListUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/user";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [__expectNonNull(input.maxResults, `maxResults`) != null, () => input.maxResults!.toString()],
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
 * serializeAws_restJson1ListUsersByPermissionGroupCommand
 */
export const se_ListUsersByPermissionGroupCommand = async (
  input: ListUsersByPermissionGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/permission-group/{permissionGroupId}/users";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "permissionGroupId",
    () => input.permissionGroupId!,
    "{permissionGroupId}",
    false
  );
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [__expectNonNull(input.maxResults, `maxResults`) != null, () => input.maxResults!.toString()],
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
 * serializeAws_restJson1ResetUserPasswordCommand
 */
export const se_ResetUserPasswordCommand = async (
  input: ResetUserPasswordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/user/{userId}/password";
  resolvedPath = __resolvedPath(resolvedPath, input, "userId", () => input.userId!, "{userId}", false);
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
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
 * serializeAws_restJson1UpdateChangesetCommand
 */
export const se_UpdateChangesetCommand = async (
  input: UpdateChangesetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/datasets/{datasetId}/changesetsv2/{changesetId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "datasetId", () => input.datasetId!, "{datasetId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "changesetId", () => input.changesetId!, "{changesetId}", false);
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.formatParams != null && { formatParams: se_FormatParams(input.formatParams, context) }),
    ...(input.sourceParams != null && { sourceParams: se_SourceParams(input.sourceParams, context) }),
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
 * serializeAws_restJson1UpdateDatasetCommand
 */
export const se_UpdateDatasetCommand = async (
  input: UpdateDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasetsv2/{datasetId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "datasetId", () => input.datasetId!, "{datasetId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.alias != null && { alias: input.alias }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.datasetDescription != null && { datasetDescription: input.datasetDescription }),
    ...(input.datasetTitle != null && { datasetTitle: input.datasetTitle }),
    ...(input.kind != null && { kind: input.kind }),
    ...(input.schemaDefinition != null && { schemaDefinition: se_SchemaUnion(input.schemaDefinition, context) }),
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
 * serializeAws_restJson1UpdatePermissionGroupCommand
 */
export const se_UpdatePermissionGroupCommand = async (
  input: UpdatePermissionGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/permission-group/{permissionGroupId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "permissionGroupId",
    () => input.permissionGroupId!,
    "{permissionGroupId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.applicationPermissions != null && {
      applicationPermissions: se_ApplicationPermissionList(input.applicationPermissions, context),
    }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
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
 * serializeAws_restJson1UpdateUserCommand
 */
export const se_UpdateUserCommand = async (
  input: UpdateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/user/{userId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "userId", () => input.userId!, "{userId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.apiAccess != null && { apiAccess: input.apiAccess }),
    ...(input.apiAccessPrincipalArn != null && { apiAccessPrincipalArn: input.apiAccessPrincipalArn }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.firstName != null && { firstName: input.firstName }),
    ...(input.lastName != null && { lastName: input.lastName }),
    ...(input.type != null && { type: input.type }),
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
 * deserializeAws_restJson1AssociateUserToPermissionGroupCommand
 */
export const de_AssociateUserToPermissionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateUserToPermissionGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateUserToPermissionGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  map(contents, {
    statusCode: [, output.statusCode],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateUserToPermissionGroupCommandError
 */
const de_AssociateUserToPermissionGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateUserToPermissionGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateChangesetCommand
 */
export const de_CreateChangesetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChangesetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateChangesetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.changesetId != null) {
    contents.changesetId = __expectString(data.changesetId);
  }
  if (data.datasetId != null) {
    contents.datasetId = __expectString(data.datasetId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateChangesetCommandError
 */
const de_CreateChangesetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChangesetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.finspacedata#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateDatasetCommand
 */
export const de_CreateDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateDatasetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.datasetId != null) {
    contents.datasetId = __expectString(data.datasetId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateDatasetCommandError
 */
const de_CreateDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.finspacedata#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateDataViewCommand
 */
export const de_CreateDataViewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataViewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateDataViewCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.dataViewId != null) {
    contents.dataViewId = __expectString(data.dataViewId);
  }
  if (data.datasetId != null) {
    contents.datasetId = __expectString(data.datasetId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateDataViewCommandError
 */
const de_CreateDataViewCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataViewCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.finspacedata#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreatePermissionGroupCommand
 */
export const de_CreatePermissionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePermissionGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreatePermissionGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.permissionGroupId != null) {
    contents.permissionGroupId = __expectString(data.permissionGroupId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreatePermissionGroupCommandError
 */
const de_CreatePermissionGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePermissionGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.finspacedata#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.userId != null) {
    contents.userId = __expectString(data.userId);
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
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.finspacedata#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteDatasetCommand
 */
export const de_DeleteDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteDatasetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.datasetId != null) {
    contents.datasetId = __expectString(data.datasetId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDatasetCommandError
 */
const de_DeleteDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.finspacedata#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeletePermissionGroupCommand
 */
export const de_DeletePermissionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePermissionGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeletePermissionGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.permissionGroupId != null) {
    contents.permissionGroupId = __expectString(data.permissionGroupId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeletePermissionGroupCommandError
 */
const de_DeletePermissionGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePermissionGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.finspacedata#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DisableUserCommand
 */
export const de_DisableUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisableUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.userId != null) {
    contents.userId = __expectString(data.userId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DisableUserCommandError
 */
const de_DisableUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DisassociateUserFromPermissionGroupCommand
 */
export const de_DisassociateUserFromPermissionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateUserFromPermissionGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociateUserFromPermissionGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  map(contents, {
    statusCode: [, output.statusCode],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateUserFromPermissionGroupCommandError
 */
const de_DisassociateUserFromPermissionGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateUserFromPermissionGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1EnableUserCommand
 */
export const de_EnableUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_EnableUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.userId != null) {
    contents.userId = __expectString(data.userId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1EnableUserCommandError
 */
const de_EnableUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.finspacedata#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetChangesetCommand
 */
export const de_GetChangesetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChangesetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetChangesetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.activeFromTimestamp != null) {
    contents.activeFromTimestamp = __expectLong(data.activeFromTimestamp);
  }
  if (data.activeUntilTimestamp != null) {
    contents.activeUntilTimestamp = __expectLong(data.activeUntilTimestamp);
  }
  if (data.changeType != null) {
    contents.changeType = __expectString(data.changeType);
  }
  if (data.changesetArn != null) {
    contents.changesetArn = __expectString(data.changesetArn);
  }
  if (data.changesetId != null) {
    contents.changesetId = __expectString(data.changesetId);
  }
  if (data.createTime != null) {
    contents.createTime = __expectLong(data.createTime);
  }
  if (data.datasetId != null) {
    contents.datasetId = __expectString(data.datasetId);
  }
  if (data.errorInfo != null) {
    contents.errorInfo = de_ChangesetErrorInfo(data.errorInfo, context);
  }
  if (data.formatParams != null) {
    contents.formatParams = de_FormatParams(data.formatParams, context);
  }
  if (data.sourceParams != null) {
    contents.sourceParams = de_SourceParams(data.sourceParams, context);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.updatedByChangesetId != null) {
    contents.updatedByChangesetId = __expectString(data.updatedByChangesetId);
  }
  if (data.updatesChangesetId != null) {
    contents.updatesChangesetId = __expectString(data.updatesChangesetId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetChangesetCommandError
 */
const de_GetChangesetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChangesetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetDatasetCommand
 */
export const de_GetDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDatasetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.alias != null) {
    contents.alias = __expectString(data.alias);
  }
  if (data.createTime != null) {
    contents.createTime = __expectLong(data.createTime);
  }
  if (data.datasetArn != null) {
    contents.datasetArn = __expectString(data.datasetArn);
  }
  if (data.datasetDescription != null) {
    contents.datasetDescription = __expectString(data.datasetDescription);
  }
  if (data.datasetId != null) {
    contents.datasetId = __expectString(data.datasetId);
  }
  if (data.datasetTitle != null) {
    contents.datasetTitle = __expectString(data.datasetTitle);
  }
  if (data.kind != null) {
    contents.kind = __expectString(data.kind);
  }
  if (data.lastModifiedTime != null) {
    contents.lastModifiedTime = __expectLong(data.lastModifiedTime);
  }
  if (data.schemaDefinition != null) {
    contents.schemaDefinition = de_SchemaUnion(data.schemaDefinition, context);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetDatasetCommandError
 */
const de_GetDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetDataViewCommand
 */
export const de_GetDataViewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataViewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDataViewCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.asOfTimestamp != null) {
    contents.asOfTimestamp = __expectLong(data.asOfTimestamp);
  }
  if (data.autoUpdate != null) {
    contents.autoUpdate = __expectBoolean(data.autoUpdate);
  }
  if (data.createTime != null) {
    contents.createTime = __expectLong(data.createTime);
  }
  if (data.dataViewArn != null) {
    contents.dataViewArn = __expectString(data.dataViewArn);
  }
  if (data.dataViewId != null) {
    contents.dataViewId = __expectString(data.dataViewId);
  }
  if (data.datasetId != null) {
    contents.datasetId = __expectString(data.datasetId);
  }
  if (data.destinationTypeParams != null) {
    contents.destinationTypeParams = de_DataViewDestinationTypeParams(data.destinationTypeParams, context);
  }
  if (data.errorInfo != null) {
    contents.errorInfo = de_DataViewErrorInfo(data.errorInfo, context);
  }
  if (data.lastModifiedTime != null) {
    contents.lastModifiedTime = __expectLong(data.lastModifiedTime);
  }
  if (data.partitionColumns != null) {
    contents.partitionColumns = de_PartitionColumnList(data.partitionColumns, context);
  }
  if (data.sortColumns != null) {
    contents.sortColumns = de_SortColumnList(data.sortColumns, context);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetDataViewCommandError
 */
const de_GetDataViewCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataViewCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetExternalDataViewAccessDetailsCommand
 */
export const de_GetExternalDataViewAccessDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExternalDataViewAccessDetailsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetExternalDataViewAccessDetailsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.credentials != null) {
    contents.credentials = de_AwsCredentials(data.credentials, context);
  }
  if (data.s3Location != null) {
    contents.s3Location = de_S3Location(data.s3Location, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetExternalDataViewAccessDetailsCommandError
 */
const de_GetExternalDataViewAccessDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExternalDataViewAccessDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetPermissionGroupCommand
 */
export const de_GetPermissionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPermissionGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetPermissionGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.permissionGroup != null) {
    contents.permissionGroup = de_PermissionGroup(data.permissionGroup, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetPermissionGroupCommandError
 */
const de_GetPermissionGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPermissionGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetProgrammaticAccessCredentialsCommand
 */
export const de_GetProgrammaticAccessCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProgrammaticAccessCredentialsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetProgrammaticAccessCredentialsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.credentials != null) {
    contents.credentials = de_Credentials(data.credentials, context);
  }
  if (data.durationInMinutes != null) {
    contents.durationInMinutes = __expectLong(data.durationInMinutes);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetProgrammaticAccessCredentialsCommandError
 */
const de_GetProgrammaticAccessCredentialsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProgrammaticAccessCredentialsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetUserCommand
 */
export const de_GetUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiAccess != null) {
    contents.apiAccess = __expectString(data.apiAccess);
  }
  if (data.apiAccessPrincipalArn != null) {
    contents.apiAccessPrincipalArn = __expectString(data.apiAccessPrincipalArn);
  }
  if (data.createTime != null) {
    contents.createTime = __expectLong(data.createTime);
  }
  if (data.emailAddress != null) {
    contents.emailAddress = __expectString(data.emailAddress);
  }
  if (data.firstName != null) {
    contents.firstName = __expectString(data.firstName);
  }
  if (data.lastDisabledTime != null) {
    contents.lastDisabledTime = __expectLong(data.lastDisabledTime);
  }
  if (data.lastEnabledTime != null) {
    contents.lastEnabledTime = __expectLong(data.lastEnabledTime);
  }
  if (data.lastLoginTime != null) {
    contents.lastLoginTime = __expectLong(data.lastLoginTime);
  }
  if (data.lastModifiedTime != null) {
    contents.lastModifiedTime = __expectLong(data.lastModifiedTime);
  }
  if (data.lastName != null) {
    contents.lastName = __expectString(data.lastName);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.type != null) {
    contents.type = __expectString(data.type);
  }
  if (data.userId != null) {
    contents.userId = __expectString(data.userId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetUserCommandError
 */
const de_GetUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetWorkingLocationCommand
 */
export const de_GetWorkingLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkingLocationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetWorkingLocationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.s3Bucket != null) {
    contents.s3Bucket = __expectString(data.s3Bucket);
  }
  if (data.s3Path != null) {
    contents.s3Path = __expectString(data.s3Path);
  }
  if (data.s3Uri != null) {
    contents.s3Uri = __expectString(data.s3Uri);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetWorkingLocationCommandError
 */
const de_GetWorkingLocationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkingLocationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListChangesetsCommand
 */
export const de_ListChangesetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChangesetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListChangesetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.changesets != null) {
    contents.changesets = de_ChangesetList(data.changesets, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListChangesetsCommandError
 */
const de_ListChangesetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChangesetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListDatasetsCommand
 */
export const de_ListDatasetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDatasetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.datasets != null) {
    contents.datasets = de_DatasetList(data.datasets, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListDatasetsCommandError
 */
const de_ListDatasetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListDataViewsCommand
 */
export const de_ListDataViewsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataViewsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDataViewsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.dataViews != null) {
    contents.dataViews = de_DataViewList(data.dataViews, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListDataViewsCommandError
 */
const de_ListDataViewsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataViewsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListPermissionGroupsCommand
 */
export const de_ListPermissionGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListPermissionGroupsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.permissionGroups != null) {
    contents.permissionGroups = de_PermissionGroupList(data.permissionGroups, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListPermissionGroupsCommandError
 */
const de_ListPermissionGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListPermissionGroupsByUserCommand
 */
export const de_ListPermissionGroupsByUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionGroupsByUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListPermissionGroupsByUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.permissionGroups != null) {
    contents.permissionGroups = de_PermissionGroupByUserList(data.permissionGroups, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListPermissionGroupsByUserCommandError
 */
const de_ListPermissionGroupsByUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionGroupsByUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListUsersCommand
 */
export const de_ListUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListUsersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.users != null) {
    contents.users = de_UserList(data.users, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListUsersCommandError
 */
const de_ListUsersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListUsersByPermissionGroupCommand
 */
export const de_ListUsersByPermissionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersByPermissionGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListUsersByPermissionGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.users != null) {
    contents.users = de_UserByPermissionGroupList(data.users, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListUsersByPermissionGroupCommandError
 */
const de_ListUsersByPermissionGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersByPermissionGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ResetUserPasswordCommand
 */
export const de_ResetUserPasswordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetUserPasswordCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ResetUserPasswordCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.temporaryPassword != null) {
    contents.temporaryPassword = __expectString(data.temporaryPassword);
  }
  if (data.userId != null) {
    contents.userId = __expectString(data.userId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ResetUserPasswordCommandError
 */
const de_ResetUserPasswordCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetUserPasswordCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateChangesetCommand
 */
export const de_UpdateChangesetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChangesetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateChangesetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.changesetId != null) {
    contents.changesetId = __expectString(data.changesetId);
  }
  if (data.datasetId != null) {
    contents.datasetId = __expectString(data.datasetId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateChangesetCommandError
 */
const de_UpdateChangesetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChangesetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateDatasetCommand
 */
export const de_UpdateDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateDatasetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.datasetId != null) {
    contents.datasetId = __expectString(data.datasetId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDatasetCommandError
 */
const de_UpdateDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdatePermissionGroupCommand
 */
export const de_UpdatePermissionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePermissionGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdatePermissionGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.permissionGroupId != null) {
    contents.permissionGroupId = __expectString(data.permissionGroupId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePermissionGroupCommandError
 */
const de_UpdatePermissionGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePermissionGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
  if (data.userId != null) {
    contents.userId = __expectString(data.userId);
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
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.reason != null) {
    contents.reason = __expectString(data.reason);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InternalServerException({
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.reason != null) {
    contents.reason = __expectString(data.reason);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.reason != null) {
    contents.reason = __expectString(data.reason);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1ApplicationPermissionList
 */
const se_ApplicationPermissionList = (input: (ApplicationPermission | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ColumnDefinition
 */
const se_ColumnDefinition = (input: ColumnDefinition, context: __SerdeContext): any => {
  return {
    ...(input.columnDescription != null && { columnDescription: input.columnDescription }),
    ...(input.columnName != null && { columnName: input.columnName }),
    ...(input.dataType != null && { dataType: input.dataType }),
  };
};

/**
 * serializeAws_restJson1ColumnList
 */
const se_ColumnList = (input: ColumnDefinition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ColumnDefinition(entry, context);
    });
};

/**
 * serializeAws_restJson1ColumnNameList
 */
const se_ColumnNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1DatasetOwnerInfo
 */
const se_DatasetOwnerInfo = (input: DatasetOwnerInfo, context: __SerdeContext): any => {
  return {
    ...(input.email != null && { email: input.email }),
    ...(input.name != null && { name: input.name }),
    ...(input.phoneNumber != null && { phoneNumber: input.phoneNumber }),
  };
};

/**
 * serializeAws_restJson1DataViewDestinationTypeParams
 */
const se_DataViewDestinationTypeParams = (input: DataViewDestinationTypeParams, context: __SerdeContext): any => {
  return {
    ...(input.destinationType != null && { destinationType: input.destinationType }),
    ...(input.s3DestinationExportFileFormat != null && {
      s3DestinationExportFileFormat: input.s3DestinationExportFileFormat,
    }),
    ...(input.s3DestinationExportFileFormatOptions != null && {
      s3DestinationExportFileFormatOptions: se_S3DestinationFormatOptions(
        input.s3DestinationExportFileFormatOptions,
        context
      ),
    }),
  };
};

/**
 * serializeAws_restJson1FormatParams
 */
const se_FormatParams = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1PartitionColumnList
 */
const se_PartitionColumnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1PermissionGroupParams
 */
const se_PermissionGroupParams = (input: PermissionGroupParams, context: __SerdeContext): any => {
  return {
    ...(input.datasetPermissions != null && {
      datasetPermissions: se_ResourcePermissionsList(input.datasetPermissions, context),
    }),
    ...(input.permissionGroupId != null && { permissionGroupId: input.permissionGroupId }),
  };
};

/**
 * serializeAws_restJson1ResourcePermission
 */
const se_ResourcePermission = (input: ResourcePermission, context: __SerdeContext): any => {
  return {
    ...(input.permission != null && { permission: input.permission }),
  };
};

/**
 * serializeAws_restJson1ResourcePermissionsList
 */
const se_ResourcePermissionsList = (input: ResourcePermission[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ResourcePermission(entry, context);
    });
};

/**
 * serializeAws_restJson1S3DestinationFormatOptions
 */
const se_S3DestinationFormatOptions = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1SchemaDefinition
 */
const se_SchemaDefinition = (input: SchemaDefinition, context: __SerdeContext): any => {
  return {
    ...(input.columns != null && { columns: se_ColumnList(input.columns, context) }),
    ...(input.primaryKeyColumns != null && { primaryKeyColumns: se_ColumnNameList(input.primaryKeyColumns, context) }),
  };
};

/**
 * serializeAws_restJson1SchemaUnion
 */
const se_SchemaUnion = (input: SchemaUnion, context: __SerdeContext): any => {
  return {
    ...(input.tabularSchemaConfig != null && {
      tabularSchemaConfig: se_SchemaDefinition(input.tabularSchemaConfig, context),
    }),
  };
};

/**
 * serializeAws_restJson1SortColumnList
 */
const se_SortColumnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SourceParams
 */
const se_SourceParams = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ApplicationPermissionList
 */
const de_ApplicationPermissionList = (output: any, context: __SerdeContext): (ApplicationPermission | string)[] => {
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
 * deserializeAws_restJson1AwsCredentials
 */
const de_AwsCredentials = (output: any, context: __SerdeContext): AwsCredentials => {
  return {
    accessKeyId: __expectString(output.accessKeyId),
    expiration: __expectLong(output.expiration),
    secretAccessKey: __expectString(output.secretAccessKey),
    sessionToken: __expectString(output.sessionToken),
  } as any;
};

/**
 * deserializeAws_restJson1ChangesetErrorInfo
 */
const de_ChangesetErrorInfo = (output: any, context: __SerdeContext): ChangesetErrorInfo => {
  return {
    errorCategory: __expectString(output.errorCategory),
    errorMessage: __expectString(output.errorMessage),
  } as any;
};

/**
 * deserializeAws_restJson1ChangesetList
 */
const de_ChangesetList = (output: any, context: __SerdeContext): ChangesetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ChangesetSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ChangesetSummary
 */
const de_ChangesetSummary = (output: any, context: __SerdeContext): ChangesetSummary => {
  return {
    activeFromTimestamp: __expectLong(output.activeFromTimestamp),
    activeUntilTimestamp: __expectLong(output.activeUntilTimestamp),
    changeType: __expectString(output.changeType),
    changesetArn: __expectString(output.changesetArn),
    changesetId: __expectString(output.changesetId),
    createTime: __expectLong(output.createTime),
    datasetId: __expectString(output.datasetId),
    errorInfo: output.errorInfo != null ? de_ChangesetErrorInfo(output.errorInfo, context) : undefined,
    formatParams: output.formatParams != null ? de_FormatParams(output.formatParams, context) : undefined,
    sourceParams: output.sourceParams != null ? de_SourceParams(output.sourceParams, context) : undefined,
    status: __expectString(output.status),
    updatedByChangesetId: __expectString(output.updatedByChangesetId),
    updatesChangesetId: __expectString(output.updatesChangesetId),
  } as any;
};

/**
 * deserializeAws_restJson1ColumnDefinition
 */
const de_ColumnDefinition = (output: any, context: __SerdeContext): ColumnDefinition => {
  return {
    columnDescription: __expectString(output.columnDescription),
    columnName: __expectString(output.columnName),
    dataType: __expectString(output.dataType),
  } as any;
};

/**
 * deserializeAws_restJson1ColumnList
 */
const de_ColumnList = (output: any, context: __SerdeContext): ColumnDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ColumnDefinition(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ColumnNameList
 */
const de_ColumnNameList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1Credentials
 */
const de_Credentials = (output: any, context: __SerdeContext): Credentials => {
  return {
    accessKeyId: __expectString(output.accessKeyId),
    secretAccessKey: __expectString(output.secretAccessKey),
    sessionToken: __expectString(output.sessionToken),
  } as any;
};

/**
 * deserializeAws_restJson1Dataset
 */
const de_Dataset = (output: any, context: __SerdeContext): Dataset => {
  return {
    alias: __expectString(output.alias),
    createTime: __expectLong(output.createTime),
    datasetArn: __expectString(output.datasetArn),
    datasetDescription: __expectString(output.datasetDescription),
    datasetId: __expectString(output.datasetId),
    datasetTitle: __expectString(output.datasetTitle),
    kind: __expectString(output.kind),
    lastModifiedTime: __expectLong(output.lastModifiedTime),
    ownerInfo: output.ownerInfo != null ? de_DatasetOwnerInfo(output.ownerInfo, context) : undefined,
    schemaDefinition: output.schemaDefinition != null ? de_SchemaUnion(output.schemaDefinition, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DatasetList
 */
const de_DatasetList = (output: any, context: __SerdeContext): Dataset[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Dataset(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DatasetOwnerInfo
 */
const de_DatasetOwnerInfo = (output: any, context: __SerdeContext): DatasetOwnerInfo => {
  return {
    email: __expectString(output.email),
    name: __expectString(output.name),
    phoneNumber: __expectString(output.phoneNumber),
  } as any;
};

/**
 * deserializeAws_restJson1DataViewDestinationTypeParams
 */
const de_DataViewDestinationTypeParams = (output: any, context: __SerdeContext): DataViewDestinationTypeParams => {
  return {
    destinationType: __expectString(output.destinationType),
    s3DestinationExportFileFormat: __expectString(output.s3DestinationExportFileFormat),
    s3DestinationExportFileFormatOptions:
      output.s3DestinationExportFileFormatOptions != null
        ? de_S3DestinationFormatOptions(output.s3DestinationExportFileFormatOptions, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DataViewErrorInfo
 */
const de_DataViewErrorInfo = (output: any, context: __SerdeContext): DataViewErrorInfo => {
  return {
    errorCategory: __expectString(output.errorCategory),
    errorMessage: __expectString(output.errorMessage),
  } as any;
};

/**
 * deserializeAws_restJson1DataViewList
 */
const de_DataViewList = (output: any, context: __SerdeContext): DataViewSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DataViewSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DataViewSummary
 */
const de_DataViewSummary = (output: any, context: __SerdeContext): DataViewSummary => {
  return {
    asOfTimestamp: __expectLong(output.asOfTimestamp),
    autoUpdate: __expectBoolean(output.autoUpdate),
    createTime: __expectLong(output.createTime),
    dataViewArn: __expectString(output.dataViewArn),
    dataViewId: __expectString(output.dataViewId),
    datasetId: __expectString(output.datasetId),
    destinationTypeProperties:
      output.destinationTypeProperties != null
        ? de_DataViewDestinationTypeParams(output.destinationTypeProperties, context)
        : undefined,
    errorInfo: output.errorInfo != null ? de_DataViewErrorInfo(output.errorInfo, context) : undefined,
    lastModifiedTime: __expectLong(output.lastModifiedTime),
    partitionColumns:
      output.partitionColumns != null ? de_PartitionColumnList(output.partitionColumns, context) : undefined,
    sortColumns: output.sortColumns != null ? de_SortColumnList(output.sortColumns, context) : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1FormatParams
 */
const de_FormatParams = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1PartitionColumnList
 */
const de_PartitionColumnList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1PermissionGroup
 */
const de_PermissionGroup = (output: any, context: __SerdeContext): PermissionGroup => {
  return {
    applicationPermissions:
      output.applicationPermissions != null
        ? de_ApplicationPermissionList(output.applicationPermissions, context)
        : undefined,
    createTime: __expectLong(output.createTime),
    description: __expectString(output.description),
    lastModifiedTime: __expectLong(output.lastModifiedTime),
    membershipStatus: __expectString(output.membershipStatus),
    name: __expectString(output.name),
    permissionGroupId: __expectString(output.permissionGroupId),
  } as any;
};

/**
 * deserializeAws_restJson1PermissionGroupByUser
 */
const de_PermissionGroupByUser = (output: any, context: __SerdeContext): PermissionGroupByUser => {
  return {
    membershipStatus: __expectString(output.membershipStatus),
    name: __expectString(output.name),
    permissionGroupId: __expectString(output.permissionGroupId),
  } as any;
};

/**
 * deserializeAws_restJson1PermissionGroupByUserList
 */
const de_PermissionGroupByUserList = (output: any, context: __SerdeContext): PermissionGroupByUser[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PermissionGroupByUser(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PermissionGroupList
 */
const de_PermissionGroupList = (output: any, context: __SerdeContext): PermissionGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PermissionGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1S3DestinationFormatOptions
 */
const de_S3DestinationFormatOptions = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1S3Location
 */
const de_S3Location = (output: any, context: __SerdeContext): S3Location => {
  return {
    bucket: __expectString(output.bucket),
    key: __expectString(output.key),
  } as any;
};

/**
 * deserializeAws_restJson1SchemaDefinition
 */
const de_SchemaDefinition = (output: any, context: __SerdeContext): SchemaDefinition => {
  return {
    columns: output.columns != null ? de_ColumnList(output.columns, context) : undefined,
    primaryKeyColumns:
      output.primaryKeyColumns != null ? de_ColumnNameList(output.primaryKeyColumns, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SchemaUnion
 */
const de_SchemaUnion = (output: any, context: __SerdeContext): SchemaUnion => {
  return {
    tabularSchemaConfig:
      output.tabularSchemaConfig != null ? de_SchemaDefinition(output.tabularSchemaConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SortColumnList
 */
const de_SortColumnList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1SourceParams
 */
const de_SourceParams = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1User
 */
const de_User = (output: any, context: __SerdeContext): User => {
  return {
    apiAccess: __expectString(output.apiAccess),
    apiAccessPrincipalArn: __expectString(output.apiAccessPrincipalArn),
    createTime: __expectLong(output.createTime),
    emailAddress: __expectString(output.emailAddress),
    firstName: __expectString(output.firstName),
    lastDisabledTime: __expectLong(output.lastDisabledTime),
    lastEnabledTime: __expectLong(output.lastEnabledTime),
    lastLoginTime: __expectLong(output.lastLoginTime),
    lastModifiedTime: __expectLong(output.lastModifiedTime),
    lastName: __expectString(output.lastName),
    status: __expectString(output.status),
    type: __expectString(output.type),
    userId: __expectString(output.userId),
  } as any;
};

/**
 * deserializeAws_restJson1UserByPermissionGroup
 */
const de_UserByPermissionGroup = (output: any, context: __SerdeContext): UserByPermissionGroup => {
  return {
    apiAccess: __expectString(output.apiAccess),
    apiAccessPrincipalArn: __expectString(output.apiAccessPrincipalArn),
    emailAddress: __expectString(output.emailAddress),
    firstName: __expectString(output.firstName),
    lastName: __expectString(output.lastName),
    membershipStatus: __expectString(output.membershipStatus),
    status: __expectString(output.status),
    type: __expectString(output.type),
    userId: __expectString(output.userId),
  } as any;
};

/**
 * deserializeAws_restJson1UserByPermissionGroupList
 */
const de_UserByPermissionGroupList = (output: any, context: __SerdeContext): UserByPermissionGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UserByPermissionGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1UserList
 */
const de_UserList = (output: any, context: __SerdeContext): User[] => {
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
