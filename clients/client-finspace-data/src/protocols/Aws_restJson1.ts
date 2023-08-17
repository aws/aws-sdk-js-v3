// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
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
  ColumnDefinition,
  ConflictException,
  DatasetOwnerInfo,
  DataViewDestinationTypeParams,
  InternalServerException,
  LimitExceededException,
  PermissionGroupParams,
  ResourceNotFoundException,
  ResourcePermission,
  SchemaDefinition,
  SchemaUnion,
  ThrottlingException,
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
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
  body = JSON.stringify(
    take(input, {
      changeType: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      formatParams: (_) => _json(_),
      sourceParams: (_) => _json(_),
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
  body = JSON.stringify(
    take(input, {
      alias: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      datasetDescription: [],
      datasetTitle: [],
      kind: [],
      ownerInfo: (_) => _json(_),
      permissionGroupParams: (_) => _json(_),
      schemaDefinition: (_) => _json(_),
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
  body = JSON.stringify(
    take(input, {
      asOfTimestamp: [],
      autoUpdate: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      destinationTypeParams: (_) => _json(_),
      partitionColumns: (_) => _json(_),
      sortColumns: (_) => _json(_),
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
  body = JSON.stringify(
    take(input, {
      applicationPermissions: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      name: [],
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
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/user";
  let body: any;
  body = JSON.stringify(
    take(input, {
      ApiAccess: [],
      apiAccessPrincipalArn: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      emailAddress: [],
      firstName: [],
      lastName: [],
      type: [],
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
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
  body = JSON.stringify(
    take(input, {
      locationType: [],
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      formatParams: (_) => _json(_),
      sourceParams: (_) => _json(_),
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
  body = JSON.stringify(
    take(input, {
      alias: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      datasetDescription: [],
      datasetTitle: [],
      kind: [],
      schemaDefinition: (_) => _json(_),
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
  body = JSON.stringify(
    take(input, {
      applicationPermissions: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      name: [],
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
  body = JSON.stringify(
    take(input, {
      apiAccess: [],
      apiAccessPrincipalArn: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      firstName: [],
      lastName: [],
      type: [],
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    changesetId: __expectString,
    datasetId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    datasetId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    dataViewId: __expectString,
    datasetId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    permissionGroupId: __expectString,
  });
  Object.assign(contents, doc);
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
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    userId: __expectString,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    datasetId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    permissionGroupId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    userId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    userId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    activeFromTimestamp: __expectLong,
    activeUntilTimestamp: __expectLong,
    changeType: __expectString,
    changesetArn: __expectString,
    changesetId: __expectString,
    createTime: __expectLong,
    datasetId: __expectString,
    errorInfo: _json,
    formatParams: _json,
    sourceParams: _json,
    status: __expectString,
    updatedByChangesetId: __expectString,
    updatesChangesetId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    alias: __expectString,
    createTime: __expectLong,
    datasetArn: __expectString,
    datasetDescription: __expectString,
    datasetId: __expectString,
    datasetTitle: __expectString,
    kind: __expectString,
    lastModifiedTime: __expectLong,
    schemaDefinition: _json,
    status: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    asOfTimestamp: __expectLong,
    autoUpdate: __expectBoolean,
    createTime: __expectLong,
    dataViewArn: __expectString,
    dataViewId: __expectString,
    datasetId: __expectString,
    destinationTypeParams: _json,
    errorInfo: _json,
    lastModifiedTime: __expectLong,
    partitionColumns: _json,
    sortColumns: _json,
    status: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    credentials: _json,
    s3Location: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    permissionGroup: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    credentials: _json,
    durationInMinutes: __expectLong,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    apiAccess: __expectString,
    apiAccessPrincipalArn: __expectString,
    createTime: __expectLong,
    emailAddress: __expectString,
    firstName: __expectString,
    lastDisabledTime: __expectLong,
    lastEnabledTime: __expectLong,
    lastLoginTime: __expectLong,
    lastModifiedTime: __expectLong,
    lastName: __expectString,
    status: __expectString,
    type: __expectString,
    userId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    s3Bucket: __expectString,
    s3Path: __expectString,
    s3Uri: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    changesets: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    datasets: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    dataViews: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    nextToken: __expectString,
    permissionGroups: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    nextToken: __expectString,
    permissionGroups: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    nextToken: __expectString,
    users: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    nextToken: __expectString,
    users: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    temporaryPassword: __expectString,
    userId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    changesetId: __expectString,
    datasetId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    datasetId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    permissionGroupId: __expectString,
  });
  Object.assign(contents, doc);
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
    userId: __expectString,
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
    reason: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
    reason: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {});
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
    reason: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_ApplicationPermissionList omitted.

// se_ColumnDefinition omitted.

// se_ColumnList omitted.

// se_ColumnNameList omitted.

// se_DatasetOwnerInfo omitted.

// se_DataViewDestinationTypeParams omitted.

// se_FormatParams omitted.

// se_PartitionColumnList omitted.

// se_PermissionGroupParams omitted.

// se_ResourcePermission omitted.

// se_ResourcePermissionsList omitted.

// se_S3DestinationFormatOptions omitted.

// se_SchemaDefinition omitted.

// se_SchemaUnion omitted.

// se_SortColumnList omitted.

// se_SourceParams omitted.

// de_ApplicationPermissionList omitted.

// de_AwsCredentials omitted.

// de_ChangesetErrorInfo omitted.

// de_ChangesetList omitted.

// de_ChangesetSummary omitted.

// de_ColumnDefinition omitted.

// de_ColumnList omitted.

// de_ColumnNameList omitted.

// de_Credentials omitted.

// de_Dataset omitted.

// de_DatasetList omitted.

// de_DatasetOwnerInfo omitted.

// de_DataViewDestinationTypeParams omitted.

// de_DataViewErrorInfo omitted.

// de_DataViewList omitted.

// de_DataViewSummary omitted.

// de_FormatParams omitted.

// de_PartitionColumnList omitted.

// de_PermissionGroup omitted.

// de_PermissionGroupByUser omitted.

// de_PermissionGroupByUserList omitted.

// de_PermissionGroupList omitted.

// de_S3DestinationFormatOptions omitted.

// de_S3Location omitted.

// de_SchemaDefinition omitted.

// de_SchemaUnion omitted.

// de_SortColumnList omitted.

// de_SourceParams omitted.

// de_User omitted.

// de_UserByPermissionGroup omitted.

// de_UserByPermissionGroupList omitted.

// de_UserList omitted.

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
