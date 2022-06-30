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

export const serializeAws_restJson1AssociateUserToPermissionGroupCommand = async (
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
  if (input.permissionGroupId !== undefined) {
    const labelValue: string = input.permissionGroupId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: permissionGroupId.");
    }
    resolvedPath = resolvedPath.replace("{permissionGroupId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: permissionGroupId.");
  }
  if (input.userId !== undefined) {
    const labelValue: string = input.userId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: userId.");
    }
    resolvedPath = resolvedPath.replace("{userId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: userId.");
  }
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

export const serializeAws_restJson1CreateChangesetCommand = async (
  input: CreateChangesetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasets/{datasetId}/changesetsv2";
  if (input.datasetId !== undefined) {
    const labelValue: string = input.datasetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: datasetId.");
    }
    resolvedPath = resolvedPath.replace("{datasetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: datasetId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.changeType !== undefined && input.changeType !== null && { changeType: input.changeType }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.formatParams !== undefined &&
      input.formatParams !== null && { formatParams: serializeAws_restJson1FormatParams(input.formatParams, context) }),
    ...(input.sourceParams !== undefined &&
      input.sourceParams !== null && { sourceParams: serializeAws_restJson1SourceParams(input.sourceParams, context) }),
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

export const serializeAws_restJson1CreateDatasetCommand = async (
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
    ...(input.alias !== undefined && input.alias !== null && { alias: input.alias }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.datasetDescription !== undefined &&
      input.datasetDescription !== null && { datasetDescription: input.datasetDescription }),
    ...(input.datasetTitle !== undefined && input.datasetTitle !== null && { datasetTitle: input.datasetTitle }),
    ...(input.kind !== undefined && input.kind !== null && { kind: input.kind }),
    ...(input.ownerInfo !== undefined &&
      input.ownerInfo !== null && { ownerInfo: serializeAws_restJson1DatasetOwnerInfo(input.ownerInfo, context) }),
    ...(input.permissionGroupParams !== undefined &&
      input.permissionGroupParams !== null && {
        permissionGroupParams: serializeAws_restJson1PermissionGroupParams(input.permissionGroupParams, context),
      }),
    ...(input.schemaDefinition !== undefined &&
      input.schemaDefinition !== null && {
        schemaDefinition: serializeAws_restJson1SchemaUnion(input.schemaDefinition, context),
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

export const serializeAws_restJson1CreateDataViewCommand = async (
  input: CreateDataViewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasets/{datasetId}/dataviewsv2";
  if (input.datasetId !== undefined) {
    const labelValue: string = input.datasetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: datasetId.");
    }
    resolvedPath = resolvedPath.replace("{datasetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: datasetId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.asOfTimestamp !== undefined && input.asOfTimestamp !== null && { asOfTimestamp: input.asOfTimestamp }),
    ...(input.autoUpdate !== undefined && input.autoUpdate !== null && { autoUpdate: input.autoUpdate }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.destinationTypeParams !== undefined &&
      input.destinationTypeParams !== null && {
        destinationTypeParams: serializeAws_restJson1DataViewDestinationTypeParams(
          input.destinationTypeParams,
          context
        ),
      }),
    ...(input.partitionColumns !== undefined &&
      input.partitionColumns !== null && {
        partitionColumns: serializeAws_restJson1PartitionColumnList(input.partitionColumns, context),
      }),
    ...(input.sortColumns !== undefined &&
      input.sortColumns !== null && { sortColumns: serializeAws_restJson1SortColumnList(input.sortColumns, context) }),
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

export const serializeAws_restJson1CreatePermissionGroupCommand = async (
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
    ...(input.applicationPermissions !== undefined &&
      input.applicationPermissions !== null && {
        applicationPermissions: serializeAws_restJson1ApplicationPermissionList(input.applicationPermissions, context),
      }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
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
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/user";
  let body: any;
  body = JSON.stringify({
    ...(input.ApiAccess !== undefined && input.ApiAccess !== null && { ApiAccess: input.ApiAccess }),
    ...(input.apiAccessPrincipalArn !== undefined &&
      input.apiAccessPrincipalArn !== null && { apiAccessPrincipalArn: input.apiAccessPrincipalArn }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.emailAddress !== undefined && input.emailAddress !== null && { emailAddress: input.emailAddress }),
    ...(input.firstName !== undefined && input.firstName !== null && { firstName: input.firstName }),
    ...(input.lastName !== undefined && input.lastName !== null && { lastName: input.lastName }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
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

export const serializeAws_restJson1DeleteDatasetCommand = async (
  input: DeleteDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasetsv2/{datasetId}";
  if (input.datasetId !== undefined) {
    const labelValue: string = input.datasetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: datasetId.");
    }
    resolvedPath = resolvedPath.replace("{datasetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: datasetId.");
  }
  const query: any = {
    ...(input.clientToken !== undefined && { clientToken: input.clientToken }),
  };
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

export const serializeAws_restJson1DeletePermissionGroupCommand = async (
  input: DeletePermissionGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/permission-group/{permissionGroupId}";
  if (input.permissionGroupId !== undefined) {
    const labelValue: string = input.permissionGroupId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: permissionGroupId.");
    }
    resolvedPath = resolvedPath.replace("{permissionGroupId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: permissionGroupId.");
  }
  const query: any = {
    ...(input.clientToken !== undefined && { clientToken: input.clientToken }),
  };
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

export const serializeAws_restJson1DisableUserCommand = async (
  input: DisableUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/user/{userId}/disable";
  if (input.userId !== undefined) {
    const labelValue: string = input.userId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: userId.");
    }
    resolvedPath = resolvedPath.replace("{userId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: userId.");
  }
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

export const serializeAws_restJson1DisassociateUserFromPermissionGroupCommand = async (
  input: DisassociateUserFromPermissionGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/permission-group/{permissionGroupId}/users/{userId}";
  if (input.permissionGroupId !== undefined) {
    const labelValue: string = input.permissionGroupId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: permissionGroupId.");
    }
    resolvedPath = resolvedPath.replace("{permissionGroupId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: permissionGroupId.");
  }
  if (input.userId !== undefined) {
    const labelValue: string = input.userId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: userId.");
    }
    resolvedPath = resolvedPath.replace("{userId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: userId.");
  }
  const query: any = {
    ...(input.clientToken !== undefined && { clientToken: input.clientToken }),
  };
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

export const serializeAws_restJson1EnableUserCommand = async (
  input: EnableUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/user/{userId}/enable";
  if (input.userId !== undefined) {
    const labelValue: string = input.userId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: userId.");
    }
    resolvedPath = resolvedPath.replace("{userId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: userId.");
  }
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

export const serializeAws_restJson1GetChangesetCommand = async (
  input: GetChangesetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/datasets/{datasetId}/changesetsv2/{changesetId}";
  if (input.datasetId !== undefined) {
    const labelValue: string = input.datasetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: datasetId.");
    }
    resolvedPath = resolvedPath.replace("{datasetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: datasetId.");
  }
  if (input.changesetId !== undefined) {
    const labelValue: string = input.changesetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: changesetId.");
    }
    resolvedPath = resolvedPath.replace("{changesetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: changesetId.");
  }
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

export const serializeAws_restJson1GetDatasetCommand = async (
  input: GetDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasetsv2/{datasetId}";
  if (input.datasetId !== undefined) {
    const labelValue: string = input.datasetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: datasetId.");
    }
    resolvedPath = resolvedPath.replace("{datasetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: datasetId.");
  }
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

export const serializeAws_restJson1GetDataViewCommand = async (
  input: GetDataViewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/datasets/{datasetId}/dataviewsv2/{dataViewId}";
  if (input.dataViewId !== undefined) {
    const labelValue: string = input.dataViewId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: dataViewId.");
    }
    resolvedPath = resolvedPath.replace("{dataViewId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: dataViewId.");
  }
  if (input.datasetId !== undefined) {
    const labelValue: string = input.datasetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: datasetId.");
    }
    resolvedPath = resolvedPath.replace("{datasetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: datasetId.");
  }
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

export const serializeAws_restJson1GetExternalDataViewAccessDetailsCommand = async (
  input: GetExternalDataViewAccessDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/datasets/{datasetId}/dataviewsv2/{dataViewId}/external-access-details";
  if (input.dataViewId !== undefined) {
    const labelValue: string = input.dataViewId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: dataViewId.");
    }
    resolvedPath = resolvedPath.replace("{dataViewId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: dataViewId.");
  }
  if (input.datasetId !== undefined) {
    const labelValue: string = input.datasetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: datasetId.");
    }
    resolvedPath = resolvedPath.replace("{datasetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: datasetId.");
  }
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

export const serializeAws_restJson1GetPermissionGroupCommand = async (
  input: GetPermissionGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/permission-group/{permissionGroupId}";
  if (input.permissionGroupId !== undefined) {
    const labelValue: string = input.permissionGroupId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: permissionGroupId.");
    }
    resolvedPath = resolvedPath.replace("{permissionGroupId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: permissionGroupId.");
  }
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

export const serializeAws_restJson1GetProgrammaticAccessCredentialsCommand = async (
  input: GetProgrammaticAccessCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/credentials/programmatic";
  const query: any = {
    ...(input.durationInMinutes !== undefined && { durationInMinutes: input.durationInMinutes.toString() }),
    ...(input.environmentId !== undefined && { environmentId: input.environmentId }),
  };
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

export const serializeAws_restJson1GetUserCommand = async (
  input: GetUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/user/{userId}";
  if (input.userId !== undefined) {
    const labelValue: string = input.userId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: userId.");
    }
    resolvedPath = resolvedPath.replace("{userId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: userId.");
  }
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

export const serializeAws_restJson1GetWorkingLocationCommand = async (
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
    ...(input.locationType !== undefined && input.locationType !== null && { locationType: input.locationType }),
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

export const serializeAws_restJson1ListChangesetsCommand = async (
  input: ListChangesetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasets/{datasetId}/changesetsv2";
  if (input.datasetId !== undefined) {
    const labelValue: string = input.datasetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: datasetId.");
    }
    resolvedPath = resolvedPath.replace("{datasetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: datasetId.");
  }
  const query: any = {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
  };
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

export const serializeAws_restJson1ListDatasetsCommand = async (
  input: ListDatasetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasetsv2";
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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

export const serializeAws_restJson1ListDataViewsCommand = async (
  input: ListDataViewsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasets/{datasetId}/dataviewsv2";
  if (input.datasetId !== undefined) {
    const labelValue: string = input.datasetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: datasetId.");
    }
    resolvedPath = resolvedPath.replace("{datasetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: datasetId.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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

export const serializeAws_restJson1ListPermissionGroupsCommand = async (
  input: ListPermissionGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/permission-group";
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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

export const serializeAws_restJson1ListPermissionGroupsByUserCommand = async (
  input: ListPermissionGroupsByUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/user/{userId}/permission-groups";
  if (input.userId !== undefined) {
    const labelValue: string = input.userId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: userId.");
    }
    resolvedPath = resolvedPath.replace("{userId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: userId.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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

export const serializeAws_restJson1ListUsersCommand = async (
  input: ListUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/user";
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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

export const serializeAws_restJson1ListUsersByPermissionGroupCommand = async (
  input: ListUsersByPermissionGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/permission-group/{permissionGroupId}/users";
  if (input.permissionGroupId !== undefined) {
    const labelValue: string = input.permissionGroupId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: permissionGroupId.");
    }
    resolvedPath = resolvedPath.replace("{permissionGroupId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: permissionGroupId.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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

export const serializeAws_restJson1ResetUserPasswordCommand = async (
  input: ResetUserPasswordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/user/{userId}/password";
  if (input.userId !== undefined) {
    const labelValue: string = input.userId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: userId.");
    }
    resolvedPath = resolvedPath.replace("{userId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: userId.");
  }
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

export const serializeAws_restJson1UpdateChangesetCommand = async (
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
  if (input.datasetId !== undefined) {
    const labelValue: string = input.datasetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: datasetId.");
    }
    resolvedPath = resolvedPath.replace("{datasetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: datasetId.");
  }
  if (input.changesetId !== undefined) {
    const labelValue: string = input.changesetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: changesetId.");
    }
    resolvedPath = resolvedPath.replace("{changesetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: changesetId.");
  }
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.formatParams !== undefined &&
      input.formatParams !== null && { formatParams: serializeAws_restJson1FormatParams(input.formatParams, context) }),
    ...(input.sourceParams !== undefined &&
      input.sourceParams !== null && { sourceParams: serializeAws_restJson1SourceParams(input.sourceParams, context) }),
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

export const serializeAws_restJson1UpdateDatasetCommand = async (
  input: UpdateDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasetsv2/{datasetId}";
  if (input.datasetId !== undefined) {
    const labelValue: string = input.datasetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: datasetId.");
    }
    resolvedPath = resolvedPath.replace("{datasetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: datasetId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.alias !== undefined && input.alias !== null && { alias: input.alias }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.datasetDescription !== undefined &&
      input.datasetDescription !== null && { datasetDescription: input.datasetDescription }),
    ...(input.datasetTitle !== undefined && input.datasetTitle !== null && { datasetTitle: input.datasetTitle }),
    ...(input.kind !== undefined && input.kind !== null && { kind: input.kind }),
    ...(input.schemaDefinition !== undefined &&
      input.schemaDefinition !== null && {
        schemaDefinition: serializeAws_restJson1SchemaUnion(input.schemaDefinition, context),
      }),
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

export const serializeAws_restJson1UpdatePermissionGroupCommand = async (
  input: UpdatePermissionGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/permission-group/{permissionGroupId}";
  if (input.permissionGroupId !== undefined) {
    const labelValue: string = input.permissionGroupId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: permissionGroupId.");
    }
    resolvedPath = resolvedPath.replace("{permissionGroupId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: permissionGroupId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.applicationPermissions !== undefined &&
      input.applicationPermissions !== null && {
        applicationPermissions: serializeAws_restJson1ApplicationPermissionList(input.applicationPermissions, context),
      }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
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

export const serializeAws_restJson1UpdateUserCommand = async (
  input: UpdateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/user/{userId}";
  if (input.userId !== undefined) {
    const labelValue: string = input.userId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: userId.");
    }
    resolvedPath = resolvedPath.replace("{userId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: userId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.apiAccess !== undefined && input.apiAccess !== null && { apiAccess: input.apiAccess }),
    ...(input.apiAccessPrincipalArn !== undefined &&
      input.apiAccessPrincipalArn !== null && { apiAccessPrincipalArn: input.apiAccessPrincipalArn }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.firstName !== undefined && input.firstName !== null && { firstName: input.firstName }),
    ...(input.lastName !== undefined && input.lastName !== null && { lastName: input.lastName }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
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

export const deserializeAws_restJson1AssociateUserToPermissionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateUserToPermissionGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateUserToPermissionGroupCommandError(output, context);
  }
  const contents: AssociateUserToPermissionGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    statusCode: undefined,
  };
  if (contents.statusCode === undefined) {
    contents.statusCode = output.statusCode;
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AssociateUserToPermissionGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateUserToPermissionGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateChangesetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChangesetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateChangesetCommandError(output, context);
  }
  const contents: CreateChangesetCommandOutput = {
    $metadata: deserializeMetadata(output),
    changesetId: undefined,
    datasetId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.changesetId !== undefined && data.changesetId !== null) {
    contents.changesetId = __expectString(data.changesetId);
  }
  if (data.datasetId !== undefined && data.datasetId !== null) {
    contents.datasetId = __expectString(data.datasetId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateChangesetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChangesetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.finspacedata#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDatasetCommandError(output, context);
  }
  const contents: CreateDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    datasetId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.datasetId !== undefined && data.datasetId !== null) {
    contents.datasetId = __expectString(data.datasetId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.finspacedata#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateDataViewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataViewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDataViewCommandError(output, context);
  }
  const contents: CreateDataViewCommandOutput = {
    $metadata: deserializeMetadata(output),
    dataViewId: undefined,
    datasetId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.dataViewId !== undefined && data.dataViewId !== null) {
    contents.dataViewId = __expectString(data.dataViewId);
  }
  if (data.datasetId !== undefined && data.datasetId !== null) {
    contents.datasetId = __expectString(data.datasetId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateDataViewCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataViewCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.finspacedata#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreatePermissionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePermissionGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreatePermissionGroupCommandError(output, context);
  }
  const contents: CreatePermissionGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    permissionGroupId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.permissionGroupId !== undefined && data.permissionGroupId !== null) {
    contents.permissionGroupId = __expectString(data.permissionGroupId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreatePermissionGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePermissionGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.finspacedata#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateUserCommandError(output, context);
  }
  const contents: CreateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    userId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.userId !== undefined && data.userId !== null) {
    contents.userId = __expectString(data.userId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.finspacedata#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDatasetCommandError(output, context);
  }
  const contents: DeleteDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    datasetId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.datasetId !== undefined && data.datasetId !== null) {
    contents.datasetId = __expectString(data.datasetId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.finspacedata#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeletePermissionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePermissionGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeletePermissionGroupCommandError(output, context);
  }
  const contents: DeletePermissionGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    permissionGroupId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.permissionGroupId !== undefined && data.permissionGroupId !== null) {
    contents.permissionGroupId = __expectString(data.permissionGroupId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeletePermissionGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePermissionGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.finspacedata#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DisableUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisableUserCommandError(output, context);
  }
  const contents: DisableUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    userId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.userId !== undefined && data.userId !== null) {
    contents.userId = __expectString(data.userId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisableUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DisassociateUserFromPermissionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateUserFromPermissionGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateUserFromPermissionGroupCommandError(output, context);
  }
  const contents: DisassociateUserFromPermissionGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    statusCode: undefined,
  };
  if (contents.statusCode === undefined) {
    contents.statusCode = output.statusCode;
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisassociateUserFromPermissionGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateUserFromPermissionGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1EnableUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1EnableUserCommandError(output, context);
  }
  const contents: EnableUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    userId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.userId !== undefined && data.userId !== null) {
    contents.userId = __expectString(data.userId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1EnableUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.finspacedata#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetChangesetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChangesetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetChangesetCommandError(output, context);
  }
  const contents: GetChangesetCommandOutput = {
    $metadata: deserializeMetadata(output),
    activeFromTimestamp: undefined,
    activeUntilTimestamp: undefined,
    changeType: undefined,
    changesetArn: undefined,
    changesetId: undefined,
    createTime: undefined,
    datasetId: undefined,
    errorInfo: undefined,
    formatParams: undefined,
    sourceParams: undefined,
    status: undefined,
    updatedByChangesetId: undefined,
    updatesChangesetId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.activeFromTimestamp !== undefined && data.activeFromTimestamp !== null) {
    contents.activeFromTimestamp = __expectLong(data.activeFromTimestamp);
  }
  if (data.activeUntilTimestamp !== undefined && data.activeUntilTimestamp !== null) {
    contents.activeUntilTimestamp = __expectLong(data.activeUntilTimestamp);
  }
  if (data.changeType !== undefined && data.changeType !== null) {
    contents.changeType = __expectString(data.changeType);
  }
  if (data.changesetArn !== undefined && data.changesetArn !== null) {
    contents.changesetArn = __expectString(data.changesetArn);
  }
  if (data.changesetId !== undefined && data.changesetId !== null) {
    contents.changesetId = __expectString(data.changesetId);
  }
  if (data.createTime !== undefined && data.createTime !== null) {
    contents.createTime = __expectLong(data.createTime);
  }
  if (data.datasetId !== undefined && data.datasetId !== null) {
    contents.datasetId = __expectString(data.datasetId);
  }
  if (data.errorInfo !== undefined && data.errorInfo !== null) {
    contents.errorInfo = deserializeAws_restJson1ChangesetErrorInfo(data.errorInfo, context);
  }
  if (data.formatParams !== undefined && data.formatParams !== null) {
    contents.formatParams = deserializeAws_restJson1FormatParams(data.formatParams, context);
  }
  if (data.sourceParams !== undefined && data.sourceParams !== null) {
    contents.sourceParams = deserializeAws_restJson1SourceParams(data.sourceParams, context);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = __expectString(data.status);
  }
  if (data.updatedByChangesetId !== undefined && data.updatedByChangesetId !== null) {
    contents.updatedByChangesetId = __expectString(data.updatedByChangesetId);
  }
  if (data.updatesChangesetId !== undefined && data.updatesChangesetId !== null) {
    contents.updatesChangesetId = __expectString(data.updatesChangesetId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetChangesetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChangesetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDatasetCommandError(output, context);
  }
  const contents: GetDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    alias: undefined,
    createTime: undefined,
    datasetArn: undefined,
    datasetDescription: undefined,
    datasetId: undefined,
    datasetTitle: undefined,
    kind: undefined,
    lastModifiedTime: undefined,
    schemaDefinition: undefined,
    status: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.alias !== undefined && data.alias !== null) {
    contents.alias = __expectString(data.alias);
  }
  if (data.createTime !== undefined && data.createTime !== null) {
    contents.createTime = __expectLong(data.createTime);
  }
  if (data.datasetArn !== undefined && data.datasetArn !== null) {
    contents.datasetArn = __expectString(data.datasetArn);
  }
  if (data.datasetDescription !== undefined && data.datasetDescription !== null) {
    contents.datasetDescription = __expectString(data.datasetDescription);
  }
  if (data.datasetId !== undefined && data.datasetId !== null) {
    contents.datasetId = __expectString(data.datasetId);
  }
  if (data.datasetTitle !== undefined && data.datasetTitle !== null) {
    contents.datasetTitle = __expectString(data.datasetTitle);
  }
  if (data.kind !== undefined && data.kind !== null) {
    contents.kind = __expectString(data.kind);
  }
  if (data.lastModifiedTime !== undefined && data.lastModifiedTime !== null) {
    contents.lastModifiedTime = __expectLong(data.lastModifiedTime);
  }
  if (data.schemaDefinition !== undefined && data.schemaDefinition !== null) {
    contents.schemaDefinition = deserializeAws_restJson1SchemaUnion(data.schemaDefinition, context);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = __expectString(data.status);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetDataViewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataViewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDataViewCommandError(output, context);
  }
  const contents: GetDataViewCommandOutput = {
    $metadata: deserializeMetadata(output),
    asOfTimestamp: undefined,
    autoUpdate: undefined,
    createTime: undefined,
    dataViewArn: undefined,
    dataViewId: undefined,
    datasetId: undefined,
    destinationTypeParams: undefined,
    errorInfo: undefined,
    lastModifiedTime: undefined,
    partitionColumns: undefined,
    sortColumns: undefined,
    status: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.asOfTimestamp !== undefined && data.asOfTimestamp !== null) {
    contents.asOfTimestamp = __expectLong(data.asOfTimestamp);
  }
  if (data.autoUpdate !== undefined && data.autoUpdate !== null) {
    contents.autoUpdate = __expectBoolean(data.autoUpdate);
  }
  if (data.createTime !== undefined && data.createTime !== null) {
    contents.createTime = __expectLong(data.createTime);
  }
  if (data.dataViewArn !== undefined && data.dataViewArn !== null) {
    contents.dataViewArn = __expectString(data.dataViewArn);
  }
  if (data.dataViewId !== undefined && data.dataViewId !== null) {
    contents.dataViewId = __expectString(data.dataViewId);
  }
  if (data.datasetId !== undefined && data.datasetId !== null) {
    contents.datasetId = __expectString(data.datasetId);
  }
  if (data.destinationTypeParams !== undefined && data.destinationTypeParams !== null) {
    contents.destinationTypeParams = deserializeAws_restJson1DataViewDestinationTypeParams(
      data.destinationTypeParams,
      context
    );
  }
  if (data.errorInfo !== undefined && data.errorInfo !== null) {
    contents.errorInfo = deserializeAws_restJson1DataViewErrorInfo(data.errorInfo, context);
  }
  if (data.lastModifiedTime !== undefined && data.lastModifiedTime !== null) {
    contents.lastModifiedTime = __expectLong(data.lastModifiedTime);
  }
  if (data.partitionColumns !== undefined && data.partitionColumns !== null) {
    contents.partitionColumns = deserializeAws_restJson1PartitionColumnList(data.partitionColumns, context);
  }
  if (data.sortColumns !== undefined && data.sortColumns !== null) {
    contents.sortColumns = deserializeAws_restJson1SortColumnList(data.sortColumns, context);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = __expectString(data.status);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDataViewCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataViewCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetExternalDataViewAccessDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExternalDataViewAccessDetailsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetExternalDataViewAccessDetailsCommandError(output, context);
  }
  const contents: GetExternalDataViewAccessDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    credentials: undefined,
    s3Location: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.credentials !== undefined && data.credentials !== null) {
    contents.credentials = deserializeAws_restJson1AwsCredentials(data.credentials, context);
  }
  if (data.s3Location !== undefined && data.s3Location !== null) {
    contents.s3Location = deserializeAws_restJson1S3Location(data.s3Location, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetExternalDataViewAccessDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExternalDataViewAccessDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetPermissionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPermissionGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetPermissionGroupCommandError(output, context);
  }
  const contents: GetPermissionGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    permissionGroup: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.permissionGroup !== undefined && data.permissionGroup !== null) {
    contents.permissionGroup = deserializeAws_restJson1PermissionGroup(data.permissionGroup, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetPermissionGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPermissionGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetProgrammaticAccessCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProgrammaticAccessCredentialsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetProgrammaticAccessCredentialsCommandError(output, context);
  }
  const contents: GetProgrammaticAccessCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    credentials: undefined,
    durationInMinutes: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.credentials !== undefined && data.credentials !== null) {
    contents.credentials = deserializeAws_restJson1Credentials(data.credentials, context);
  }
  if (data.durationInMinutes !== undefined && data.durationInMinutes !== null) {
    contents.durationInMinutes = __expectLong(data.durationInMinutes);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetProgrammaticAccessCredentialsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProgrammaticAccessCredentialsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetUserCommandError(output, context);
  }
  const contents: GetUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    apiAccess: undefined,
    apiAccessPrincipalArn: undefined,
    createTime: undefined,
    emailAddress: undefined,
    firstName: undefined,
    lastDisabledTime: undefined,
    lastEnabledTime: undefined,
    lastLoginTime: undefined,
    lastModifiedTime: undefined,
    lastName: undefined,
    status: undefined,
    type: undefined,
    userId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiAccess !== undefined && data.apiAccess !== null) {
    contents.apiAccess = __expectString(data.apiAccess);
  }
  if (data.apiAccessPrincipalArn !== undefined && data.apiAccessPrincipalArn !== null) {
    contents.apiAccessPrincipalArn = __expectString(data.apiAccessPrincipalArn);
  }
  if (data.createTime !== undefined && data.createTime !== null) {
    contents.createTime = __expectLong(data.createTime);
  }
  if (data.emailAddress !== undefined && data.emailAddress !== null) {
    contents.emailAddress = __expectString(data.emailAddress);
  }
  if (data.firstName !== undefined && data.firstName !== null) {
    contents.firstName = __expectString(data.firstName);
  }
  if (data.lastDisabledTime !== undefined && data.lastDisabledTime !== null) {
    contents.lastDisabledTime = __expectLong(data.lastDisabledTime);
  }
  if (data.lastEnabledTime !== undefined && data.lastEnabledTime !== null) {
    contents.lastEnabledTime = __expectLong(data.lastEnabledTime);
  }
  if (data.lastLoginTime !== undefined && data.lastLoginTime !== null) {
    contents.lastLoginTime = __expectLong(data.lastLoginTime);
  }
  if (data.lastModifiedTime !== undefined && data.lastModifiedTime !== null) {
    contents.lastModifiedTime = __expectLong(data.lastModifiedTime);
  }
  if (data.lastName !== undefined && data.lastName !== null) {
    contents.lastName = __expectString(data.lastName);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = __expectString(data.status);
  }
  if (data.type !== undefined && data.type !== null) {
    contents.type = __expectString(data.type);
  }
  if (data.userId !== undefined && data.userId !== null) {
    contents.userId = __expectString(data.userId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetWorkingLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkingLocationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetWorkingLocationCommandError(output, context);
  }
  const contents: GetWorkingLocationCommandOutput = {
    $metadata: deserializeMetadata(output),
    s3Bucket: undefined,
    s3Path: undefined,
    s3Uri: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.s3Bucket !== undefined && data.s3Bucket !== null) {
    contents.s3Bucket = __expectString(data.s3Bucket);
  }
  if (data.s3Path !== undefined && data.s3Path !== null) {
    contents.s3Path = __expectString(data.s3Path);
  }
  if (data.s3Uri !== undefined && data.s3Uri !== null) {
    contents.s3Uri = __expectString(data.s3Uri);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetWorkingLocationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkingLocationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListChangesetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChangesetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListChangesetsCommandError(output, context);
  }
  const contents: ListChangesetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    changesets: undefined,
    nextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.changesets !== undefined && data.changesets !== null) {
    contents.changesets = deserializeAws_restJson1ChangesetList(data.changesets, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListChangesetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChangesetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListDatasetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDatasetsCommandError(output, context);
  }
  const contents: ListDatasetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    datasets: undefined,
    nextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.datasets !== undefined && data.datasets !== null) {
    contents.datasets = deserializeAws_restJson1DatasetList(data.datasets, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDatasetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListDataViewsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataViewsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDataViewsCommandError(output, context);
  }
  const contents: ListDataViewsCommandOutput = {
    $metadata: deserializeMetadata(output),
    dataViews: undefined,
    nextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.dataViews !== undefined && data.dataViews !== null) {
    contents.dataViews = deserializeAws_restJson1DataViewList(data.dataViews, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDataViewsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataViewsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListPermissionGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPermissionGroupsCommandError(output, context);
  }
  const contents: ListPermissionGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    permissionGroups: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.permissionGroups !== undefined && data.permissionGroups !== null) {
    contents.permissionGroups = deserializeAws_restJson1PermissionGroupList(data.permissionGroups, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListPermissionGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListPermissionGroupsByUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionGroupsByUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPermissionGroupsByUserCommandError(output, context);
  }
  const contents: ListPermissionGroupsByUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    permissionGroups: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.permissionGroups !== undefined && data.permissionGroups !== null) {
    contents.permissionGroups = deserializeAws_restJson1PermissionGroupByUserList(data.permissionGroups, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListPermissionGroupsByUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionGroupsByUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListUsersCommandError(output, context);
  }
  const contents: ListUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    users: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.users !== undefined && data.users !== null) {
    contents.users = deserializeAws_restJson1UserList(data.users, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListUsersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListUsersByPermissionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersByPermissionGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListUsersByPermissionGroupCommandError(output, context);
  }
  const contents: ListUsersByPermissionGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    users: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.users !== undefined && data.users !== null) {
    contents.users = deserializeAws_restJson1UserByPermissionGroupList(data.users, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListUsersByPermissionGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersByPermissionGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ResetUserPasswordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetUserPasswordCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ResetUserPasswordCommandError(output, context);
  }
  const contents: ResetUserPasswordCommandOutput = {
    $metadata: deserializeMetadata(output),
    temporaryPassword: undefined,
    userId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.temporaryPassword !== undefined && data.temporaryPassword !== null) {
    contents.temporaryPassword = __expectString(data.temporaryPassword);
  }
  if (data.userId !== undefined && data.userId !== null) {
    contents.userId = __expectString(data.userId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ResetUserPasswordCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetUserPasswordCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateChangesetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChangesetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateChangesetCommandError(output, context);
  }
  const contents: UpdateChangesetCommandOutput = {
    $metadata: deserializeMetadata(output),
    changesetId: undefined,
    datasetId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.changesetId !== undefined && data.changesetId !== null) {
    contents.changesetId = __expectString(data.changesetId);
  }
  if (data.datasetId !== undefined && data.datasetId !== null) {
    contents.datasetId = __expectString(data.datasetId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateChangesetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChangesetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDatasetCommandError(output, context);
  }
  const contents: UpdateDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    datasetId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.datasetId !== undefined && data.datasetId !== null) {
    contents.datasetId = __expectString(data.datasetId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdatePermissionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePermissionGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdatePermissionGroupCommandError(output, context);
  }
  const contents: UpdatePermissionGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    permissionGroupId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.permissionGroupId !== undefined && data.permissionGroupId !== null) {
    contents.permissionGroupId = __expectString(data.permissionGroupId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdatePermissionGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePermissionGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateUserCommandError(output, context);
  }
  const contents: UpdateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    userId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.userId !== undefined && data.userId !== null) {
    contents.userId = __expectString(data.userId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.reason !== undefined && data.reason !== null) {
    contents.reason = __expectString(data.reason);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.reason !== undefined && data.reason !== null) {
    contents.reason = __expectString(data.reason);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.reason !== undefined && data.reason !== null) {
    contents.reason = __expectString(data.reason);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1ApplicationPermissionList = (
  input: (ApplicationPermission | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1ColumnDefinition = (input: ColumnDefinition, context: __SerdeContext): any => {
  return {
    ...(input.columnDescription !== undefined &&
      input.columnDescription !== null && { columnDescription: input.columnDescription }),
    ...(input.columnName !== undefined && input.columnName !== null && { columnName: input.columnName }),
    ...(input.dataType !== undefined && input.dataType !== null && { dataType: input.dataType }),
  };
};

const serializeAws_restJson1ColumnList = (input: ColumnDefinition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1ColumnDefinition(entry, context);
    });
};

const serializeAws_restJson1ColumnNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1DatasetOwnerInfo = (input: DatasetOwnerInfo, context: __SerdeContext): any => {
  return {
    ...(input.email !== undefined && input.email !== null && { email: input.email }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.phoneNumber !== undefined && input.phoneNumber !== null && { phoneNumber: input.phoneNumber }),
  };
};

const serializeAws_restJson1DataViewDestinationTypeParams = (
  input: DataViewDestinationTypeParams,
  context: __SerdeContext
): any => {
  return {
    ...(input.destinationType !== undefined &&
      input.destinationType !== null && { destinationType: input.destinationType }),
    ...(input.s3DestinationExportFileFormat !== undefined &&
      input.s3DestinationExportFileFormat !== null && {
        s3DestinationExportFileFormat: input.s3DestinationExportFileFormat,
      }),
    ...(input.s3DestinationExportFileFormatOptions !== undefined &&
      input.s3DestinationExportFileFormatOptions !== null && {
        s3DestinationExportFileFormatOptions: serializeAws_restJson1S3DestinationFormatOptions(
          input.s3DestinationExportFileFormatOptions,
          context
        ),
      }),
  };
};

const serializeAws_restJson1FormatParams = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1PartitionColumnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1PermissionGroupParams = (input: PermissionGroupParams, context: __SerdeContext): any => {
  return {
    ...(input.datasetPermissions !== undefined &&
      input.datasetPermissions !== null && {
        datasetPermissions: serializeAws_restJson1ResourcePermissionsList(input.datasetPermissions, context),
      }),
    ...(input.permissionGroupId !== undefined &&
      input.permissionGroupId !== null && { permissionGroupId: input.permissionGroupId }),
  };
};

const serializeAws_restJson1ResourcePermission = (input: ResourcePermission, context: __SerdeContext): any => {
  return {
    ...(input.permission !== undefined && input.permission !== null && { permission: input.permission }),
  };
};

const serializeAws_restJson1ResourcePermissionsList = (input: ResourcePermission[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1ResourcePermission(entry, context);
    });
};

const serializeAws_restJson1S3DestinationFormatOptions = (
  input: Record<string, string>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1SchemaDefinition = (input: SchemaDefinition, context: __SerdeContext): any => {
  return {
    ...(input.columns !== undefined &&
      input.columns !== null && { columns: serializeAws_restJson1ColumnList(input.columns, context) }),
    ...(input.primaryKeyColumns !== undefined &&
      input.primaryKeyColumns !== null && {
        primaryKeyColumns: serializeAws_restJson1ColumnNameList(input.primaryKeyColumns, context),
      }),
  };
};

const serializeAws_restJson1SchemaUnion = (input: SchemaUnion, context: __SerdeContext): any => {
  return {
    ...(input.tabularSchemaConfig !== undefined &&
      input.tabularSchemaConfig !== null && {
        tabularSchemaConfig: serializeAws_restJson1SchemaDefinition(input.tabularSchemaConfig, context),
      }),
  };
};

const serializeAws_restJson1SortColumnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1SourceParams = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const deserializeAws_restJson1ApplicationPermissionList = (
  output: any,
  context: __SerdeContext
): (ApplicationPermission | string)[] => {
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

const deserializeAws_restJson1AwsCredentials = (output: any, context: __SerdeContext): AwsCredentials => {
  return {
    accessKeyId: __expectString(output.accessKeyId),
    expiration: __expectLong(output.expiration),
    secretAccessKey: __expectString(output.secretAccessKey),
    sessionToken: __expectString(output.sessionToken),
  } as any;
};

const deserializeAws_restJson1ChangesetErrorInfo = (output: any, context: __SerdeContext): ChangesetErrorInfo => {
  return {
    errorCategory: __expectString(output.errorCategory),
    errorMessage: __expectString(output.errorMessage),
  } as any;
};

const deserializeAws_restJson1ChangesetList = (output: any, context: __SerdeContext): ChangesetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ChangesetSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ChangesetSummary = (output: any, context: __SerdeContext): ChangesetSummary => {
  return {
    activeFromTimestamp: __expectLong(output.activeFromTimestamp),
    activeUntilTimestamp: __expectLong(output.activeUntilTimestamp),
    changeType: __expectString(output.changeType),
    changesetArn: __expectString(output.changesetArn),
    changesetId: __expectString(output.changesetId),
    createTime: __expectLong(output.createTime),
    datasetId: __expectString(output.datasetId),
    errorInfo:
      output.errorInfo !== undefined && output.errorInfo !== null
        ? deserializeAws_restJson1ChangesetErrorInfo(output.errorInfo, context)
        : undefined,
    formatParams:
      output.formatParams !== undefined && output.formatParams !== null
        ? deserializeAws_restJson1FormatParams(output.formatParams, context)
        : undefined,
    sourceParams:
      output.sourceParams !== undefined && output.sourceParams !== null
        ? deserializeAws_restJson1SourceParams(output.sourceParams, context)
        : undefined,
    status: __expectString(output.status),
    updatedByChangesetId: __expectString(output.updatedByChangesetId),
    updatesChangesetId: __expectString(output.updatesChangesetId),
  } as any;
};

const deserializeAws_restJson1ColumnDefinition = (output: any, context: __SerdeContext): ColumnDefinition => {
  return {
    columnDescription: __expectString(output.columnDescription),
    columnName: __expectString(output.columnName),
    dataType: __expectString(output.dataType),
  } as any;
};

const deserializeAws_restJson1ColumnList = (output: any, context: __SerdeContext): ColumnDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ColumnDefinition(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ColumnNameList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Credentials = (output: any, context: __SerdeContext): Credentials => {
  return {
    accessKeyId: __expectString(output.accessKeyId),
    secretAccessKey: __expectString(output.secretAccessKey),
    sessionToken: __expectString(output.sessionToken),
  } as any;
};

const deserializeAws_restJson1Dataset = (output: any, context: __SerdeContext): Dataset => {
  return {
    alias: __expectString(output.alias),
    createTime: __expectLong(output.createTime),
    datasetArn: __expectString(output.datasetArn),
    datasetDescription: __expectString(output.datasetDescription),
    datasetId: __expectString(output.datasetId),
    datasetTitle: __expectString(output.datasetTitle),
    kind: __expectString(output.kind),
    lastModifiedTime: __expectLong(output.lastModifiedTime),
    ownerInfo:
      output.ownerInfo !== undefined && output.ownerInfo !== null
        ? deserializeAws_restJson1DatasetOwnerInfo(output.ownerInfo, context)
        : undefined,
    schemaDefinition:
      output.schemaDefinition !== undefined && output.schemaDefinition !== null
        ? deserializeAws_restJson1SchemaUnion(output.schemaDefinition, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DatasetList = (output: any, context: __SerdeContext): Dataset[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Dataset(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DatasetOwnerInfo = (output: any, context: __SerdeContext): DatasetOwnerInfo => {
  return {
    email: __expectString(output.email),
    name: __expectString(output.name),
    phoneNumber: __expectString(output.phoneNumber),
  } as any;
};

const deserializeAws_restJson1DataViewDestinationTypeParams = (
  output: any,
  context: __SerdeContext
): DataViewDestinationTypeParams => {
  return {
    destinationType: __expectString(output.destinationType),
    s3DestinationExportFileFormat: __expectString(output.s3DestinationExportFileFormat),
    s3DestinationExportFileFormatOptions:
      output.s3DestinationExportFileFormatOptions !== undefined && output.s3DestinationExportFileFormatOptions !== null
        ? deserializeAws_restJson1S3DestinationFormatOptions(output.s3DestinationExportFileFormatOptions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DataViewErrorInfo = (output: any, context: __SerdeContext): DataViewErrorInfo => {
  return {
    errorCategory: __expectString(output.errorCategory),
    errorMessage: __expectString(output.errorMessage),
  } as any;
};

const deserializeAws_restJson1DataViewList = (output: any, context: __SerdeContext): DataViewSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DataViewSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DataViewSummary = (output: any, context: __SerdeContext): DataViewSummary => {
  return {
    asOfTimestamp: __expectLong(output.asOfTimestamp),
    autoUpdate: __expectBoolean(output.autoUpdate),
    createTime: __expectLong(output.createTime),
    dataViewArn: __expectString(output.dataViewArn),
    dataViewId: __expectString(output.dataViewId),
    datasetId: __expectString(output.datasetId),
    destinationTypeProperties:
      output.destinationTypeProperties !== undefined && output.destinationTypeProperties !== null
        ? deserializeAws_restJson1DataViewDestinationTypeParams(output.destinationTypeProperties, context)
        : undefined,
    errorInfo:
      output.errorInfo !== undefined && output.errorInfo !== null
        ? deserializeAws_restJson1DataViewErrorInfo(output.errorInfo, context)
        : undefined,
    lastModifiedTime: __expectLong(output.lastModifiedTime),
    partitionColumns:
      output.partitionColumns !== undefined && output.partitionColumns !== null
        ? deserializeAws_restJson1PartitionColumnList(output.partitionColumns, context)
        : undefined,
    sortColumns:
      output.sortColumns !== undefined && output.sortColumns !== null
        ? deserializeAws_restJson1SortColumnList(output.sortColumns, context)
        : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1FormatParams = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1PartitionColumnList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1PermissionGroup = (output: any, context: __SerdeContext): PermissionGroup => {
  return {
    applicationPermissions:
      output.applicationPermissions !== undefined && output.applicationPermissions !== null
        ? deserializeAws_restJson1ApplicationPermissionList(output.applicationPermissions, context)
        : undefined,
    createTime: __expectLong(output.createTime),
    description: __expectString(output.description),
    lastModifiedTime: __expectLong(output.lastModifiedTime),
    membershipStatus: __expectString(output.membershipStatus),
    name: __expectString(output.name),
    permissionGroupId: __expectString(output.permissionGroupId),
  } as any;
};

const deserializeAws_restJson1PermissionGroupByUser = (output: any, context: __SerdeContext): PermissionGroupByUser => {
  return {
    membershipStatus: __expectString(output.membershipStatus),
    name: __expectString(output.name),
    permissionGroupId: __expectString(output.permissionGroupId),
  } as any;
};

const deserializeAws_restJson1PermissionGroupByUserList = (
  output: any,
  context: __SerdeContext
): PermissionGroupByUser[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PermissionGroupByUser(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PermissionGroupList = (output: any, context: __SerdeContext): PermissionGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PermissionGroup(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1S3DestinationFormatOptions = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1S3Location = (output: any, context: __SerdeContext): S3Location => {
  return {
    bucket: __expectString(output.bucket),
    key: __expectString(output.key),
  } as any;
};

const deserializeAws_restJson1SchemaDefinition = (output: any, context: __SerdeContext): SchemaDefinition => {
  return {
    columns:
      output.columns !== undefined && output.columns !== null
        ? deserializeAws_restJson1ColumnList(output.columns, context)
        : undefined,
    primaryKeyColumns:
      output.primaryKeyColumns !== undefined && output.primaryKeyColumns !== null
        ? deserializeAws_restJson1ColumnNameList(output.primaryKeyColumns, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SchemaUnion = (output: any, context: __SerdeContext): SchemaUnion => {
  return {
    tabularSchemaConfig:
      output.tabularSchemaConfig !== undefined && output.tabularSchemaConfig !== null
        ? deserializeAws_restJson1SchemaDefinition(output.tabularSchemaConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SortColumnList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1SourceParams = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1User = (output: any, context: __SerdeContext): User => {
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

const deserializeAws_restJson1UserByPermissionGroup = (output: any, context: __SerdeContext): UserByPermissionGroup => {
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

const deserializeAws_restJson1UserByPermissionGroupList = (
  output: any,
  context: __SerdeContext
): UserByPermissionGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UserByPermissionGroup(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1UserList = (output: any, context: __SerdeContext): User[] => {
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
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
};
