// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  LazyJsonString as __LazyJsonString,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  strictParseInt32 as __strictParseInt32,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { AssociateLicenseCommandInput, AssociateLicenseCommandOutput } from "../commands/AssociateLicenseCommand";
import {
  CreateWorkspaceApiKeyCommandInput,
  CreateWorkspaceApiKeyCommandOutput,
} from "../commands/CreateWorkspaceApiKeyCommand";
import { CreateWorkspaceCommandInput, CreateWorkspaceCommandOutput } from "../commands/CreateWorkspaceCommand";
import {
  DeleteWorkspaceApiKeyCommandInput,
  DeleteWorkspaceApiKeyCommandOutput,
} from "../commands/DeleteWorkspaceApiKeyCommand";
import { DeleteWorkspaceCommandInput, DeleteWorkspaceCommandOutput } from "../commands/DeleteWorkspaceCommand";
import {
  DescribeWorkspaceAuthenticationCommandInput,
  DescribeWorkspaceAuthenticationCommandOutput,
} from "../commands/DescribeWorkspaceAuthenticationCommand";
import { DescribeWorkspaceCommandInput, DescribeWorkspaceCommandOutput } from "../commands/DescribeWorkspaceCommand";
import {
  DescribeWorkspaceConfigurationCommandInput,
  DescribeWorkspaceConfigurationCommandOutput,
} from "../commands/DescribeWorkspaceConfigurationCommand";
import {
  DisassociateLicenseCommandInput,
  DisassociateLicenseCommandOutput,
} from "../commands/DisassociateLicenseCommand";
import { ListPermissionsCommandInput, ListPermissionsCommandOutput } from "../commands/ListPermissionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListWorkspacesCommandInput, ListWorkspacesCommandOutput } from "../commands/ListWorkspacesCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdatePermissionsCommandInput, UpdatePermissionsCommandOutput } from "../commands/UpdatePermissionsCommand";
import {
  UpdateWorkspaceAuthenticationCommandInput,
  UpdateWorkspaceAuthenticationCommandOutput,
} from "../commands/UpdateWorkspaceAuthenticationCommand";
import { UpdateWorkspaceCommandInput, UpdateWorkspaceCommandOutput } from "../commands/UpdateWorkspaceCommand";
import {
  UpdateWorkspaceConfigurationCommandInput,
  UpdateWorkspaceConfigurationCommandOutput,
} from "../commands/UpdateWorkspaceConfigurationCommand";
import { GrafanaServiceException as __BaseException } from "../models/GrafanaServiceException";
import {
  AccessDeniedException,
  AssertionAttributes,
  AuthenticationDescription,
  AuthenticationProviderTypes,
  AuthenticationSummary,
  AwsSsoAuthentication,
  ConflictException,
  DataSourceType,
  IdpMetadata,
  InternalServerException,
  NotificationDestinationType,
  PermissionEntry,
  ResourceNotFoundException,
  RoleValues,
  SamlAuthentication,
  SamlConfiguration,
  ServiceQuotaExceededException,
  ThrottlingException,
  UpdateError,
  UpdateInstruction,
  User,
  ValidationException,
  ValidationExceptionField,
  VpcConfiguration,
  WorkspaceDescription,
  WorkspaceSummary,
} from "../models/models_0";

export const serializeAws_restJson1AssociateLicenseCommand = async (
  input: AssociateLicenseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workspaces/{workspaceId}/licenses/{licenseType}";
  resolvedPath = __resolvedPath(resolvedPath, input, "workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "licenseType", () => input.licenseType!, "{licenseType}", false);
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

export const serializeAws_restJson1CreateWorkspaceCommand = async (
  input: CreateWorkspaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workspaces";
  let body: any;
  body = JSON.stringify({
    ...(input.accountAccessType != null && { accountAccessType: input.accountAccessType }),
    ...(input.authenticationProviders != null && {
      authenticationProviders: serializeAws_restJson1AuthenticationProviders(input.authenticationProviders, context),
    }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.configuration != null && { configuration: __LazyJsonString.fromObject(input.configuration) }),
    ...(input.organizationRoleName != null && { organizationRoleName: input.organizationRoleName }),
    ...(input.permissionType != null && { permissionType: input.permissionType }),
    ...(input.stackSetName != null && { stackSetName: input.stackSetName }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    ...(input.vpcConfiguration != null && {
      vpcConfiguration: serializeAws_restJson1VpcConfiguration(input.vpcConfiguration, context),
    }),
    ...(input.workspaceDataSources != null && {
      workspaceDataSources: serializeAws_restJson1DataSourceTypesList(input.workspaceDataSources, context),
    }),
    ...(input.workspaceDescription != null && { workspaceDescription: input.workspaceDescription }),
    ...(input.workspaceName != null && { workspaceName: input.workspaceName }),
    ...(input.workspaceNotificationDestinations != null && {
      workspaceNotificationDestinations: serializeAws_restJson1NotificationDestinationsList(
        input.workspaceNotificationDestinations,
        context
      ),
    }),
    ...(input.workspaceOrganizationalUnits != null && {
      workspaceOrganizationalUnits: serializeAws_restJson1OrganizationalUnitList(
        input.workspaceOrganizationalUnits,
        context
      ),
    }),
    ...(input.workspaceRoleArn != null && { workspaceRoleArn: input.workspaceRoleArn }),
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

export const serializeAws_restJson1CreateWorkspaceApiKeyCommand = async (
  input: CreateWorkspaceApiKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workspaces/{workspaceId}/apikeys";
  resolvedPath = __resolvedPath(resolvedPath, input, "workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.keyName != null && { keyName: input.keyName }),
    ...(input.keyRole != null && { keyRole: input.keyRole }),
    ...(input.secondsToLive != null && { secondsToLive: input.secondsToLive }),
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

export const serializeAws_restJson1DeleteWorkspaceCommand = async (
  input: DeleteWorkspaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workspaces/{workspaceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "workspaceId", () => input.workspaceId!, "{workspaceId}", false);
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

export const serializeAws_restJson1DeleteWorkspaceApiKeyCommand = async (
  input: DeleteWorkspaceApiKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workspaces/{workspaceId}/apikeys/{keyName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "keyName", () => input.keyName!, "{keyName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "workspaceId", () => input.workspaceId!, "{workspaceId}", false);
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

export const serializeAws_restJson1DescribeWorkspaceCommand = async (
  input: DescribeWorkspaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workspaces/{workspaceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "workspaceId", () => input.workspaceId!, "{workspaceId}", false);
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

export const serializeAws_restJson1DescribeWorkspaceAuthenticationCommand = async (
  input: DescribeWorkspaceAuthenticationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workspaces/{workspaceId}/authentication";
  resolvedPath = __resolvedPath(resolvedPath, input, "workspaceId", () => input.workspaceId!, "{workspaceId}", false);
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

export const serializeAws_restJson1DescribeWorkspaceConfigurationCommand = async (
  input: DescribeWorkspaceConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workspaces/{workspaceId}/configuration";
  resolvedPath = __resolvedPath(resolvedPath, input, "workspaceId", () => input.workspaceId!, "{workspaceId}", false);
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

export const serializeAws_restJson1DisassociateLicenseCommand = async (
  input: DisassociateLicenseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workspaces/{workspaceId}/licenses/{licenseType}";
  resolvedPath = __resolvedPath(resolvedPath, input, "workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "licenseType", () => input.licenseType!, "{licenseType}", false);
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

export const serializeAws_restJson1ListPermissionsCommand = async (
  input: ListPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workspaces/{workspaceId}/permissions";
  resolvedPath = __resolvedPath(resolvedPath, input, "workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
    userType: [, input.userType!],
    userId: [, input.userId!],
    groupId: [, input.groupId!],
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
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

export const serializeAws_restJson1ListWorkspacesCommand = async (
  input: ListWorkspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workspaces";
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

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.tagKeys, `tagKeys`) != null,
      () => (input.tagKeys! || []).map((_entry) => _entry as any),
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

export const serializeAws_restJson1UpdatePermissionsCommand = async (
  input: UpdatePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workspaces/{workspaceId}/permissions";
  resolvedPath = __resolvedPath(resolvedPath, input, "workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.updateInstructionBatch != null && {
      updateInstructionBatch: serializeAws_restJson1UpdateInstructionBatch(input.updateInstructionBatch, context),
    }),
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

export const serializeAws_restJson1UpdateWorkspaceCommand = async (
  input: UpdateWorkspaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workspaces/{workspaceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.accountAccessType != null && { accountAccessType: input.accountAccessType }),
    ...(input.organizationRoleName != null && { organizationRoleName: input.organizationRoleName }),
    ...(input.permissionType != null && { permissionType: input.permissionType }),
    ...(input.removeVpcConfiguration != null && { removeVpcConfiguration: input.removeVpcConfiguration }),
    ...(input.stackSetName != null && { stackSetName: input.stackSetName }),
    ...(input.vpcConfiguration != null && {
      vpcConfiguration: serializeAws_restJson1VpcConfiguration(input.vpcConfiguration, context),
    }),
    ...(input.workspaceDataSources != null && {
      workspaceDataSources: serializeAws_restJson1DataSourceTypesList(input.workspaceDataSources, context),
    }),
    ...(input.workspaceDescription != null && { workspaceDescription: input.workspaceDescription }),
    ...(input.workspaceName != null && { workspaceName: input.workspaceName }),
    ...(input.workspaceNotificationDestinations != null && {
      workspaceNotificationDestinations: serializeAws_restJson1NotificationDestinationsList(
        input.workspaceNotificationDestinations,
        context
      ),
    }),
    ...(input.workspaceOrganizationalUnits != null && {
      workspaceOrganizationalUnits: serializeAws_restJson1OrganizationalUnitList(
        input.workspaceOrganizationalUnits,
        context
      ),
    }),
    ...(input.workspaceRoleArn != null && { workspaceRoleArn: input.workspaceRoleArn }),
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

export const serializeAws_restJson1UpdateWorkspaceAuthenticationCommand = async (
  input: UpdateWorkspaceAuthenticationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workspaces/{workspaceId}/authentication";
  resolvedPath = __resolvedPath(resolvedPath, input, "workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.authenticationProviders != null && {
      authenticationProviders: serializeAws_restJson1AuthenticationProviders(input.authenticationProviders, context),
    }),
    ...(input.samlConfiguration != null && {
      samlConfiguration: serializeAws_restJson1SamlConfiguration(input.samlConfiguration, context),
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

export const serializeAws_restJson1UpdateWorkspaceConfigurationCommand = async (
  input: UpdateWorkspaceConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workspaces/{workspaceId}/configuration";
  resolvedPath = __resolvedPath(resolvedPath, input, "workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.configuration != null && { configuration: __LazyJsonString.fromObject(input.configuration) }),
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

export const deserializeAws_restJson1AssociateLicenseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateLicenseCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateLicenseCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.workspace != null) {
    contents.workspace = deserializeAws_restJson1WorkspaceDescription(data.workspace, context);
  }
  return contents;
};

const deserializeAws_restJson1AssociateLicenseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateLicenseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.grafana#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.grafana#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.grafana#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.grafana#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.grafana#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateWorkspaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkspaceCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateWorkspaceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.workspace != null) {
    contents.workspace = deserializeAws_restJson1WorkspaceDescription(data.workspace, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateWorkspaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkspaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.grafana#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.grafana#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.grafana#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.grafana#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.grafana#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.grafana#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateWorkspaceApiKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkspaceApiKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateWorkspaceApiKeyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.key != null) {
    contents.key = __expectString(data.key);
  }
  if (data.keyName != null) {
    contents.keyName = __expectString(data.keyName);
  }
  if (data.workspaceId != null) {
    contents.workspaceId = __expectString(data.workspaceId);
  }
  return contents;
};

const deserializeAws_restJson1CreateWorkspaceApiKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkspaceApiKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.grafana#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.grafana#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.grafana#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.grafana#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.grafana#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.grafana#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.grafana#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteWorkspaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkspaceCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteWorkspaceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.workspace != null) {
    contents.workspace = deserializeAws_restJson1WorkspaceDescription(data.workspace, context);
  }
  return contents;
};

const deserializeAws_restJson1DeleteWorkspaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkspaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.grafana#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.grafana#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.grafana#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.grafana#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.grafana#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.grafana#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteWorkspaceApiKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkspaceApiKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteWorkspaceApiKeyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.keyName != null) {
    contents.keyName = __expectString(data.keyName);
  }
  if (data.workspaceId != null) {
    contents.workspaceId = __expectString(data.workspaceId);
  }
  return contents;
};

const deserializeAws_restJson1DeleteWorkspaceApiKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkspaceApiKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.grafana#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.grafana#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.grafana#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.grafana#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.grafana#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.grafana#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeWorkspaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeWorkspaceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.workspace != null) {
    contents.workspace = deserializeAws_restJson1WorkspaceDescription(data.workspace, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeWorkspaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.grafana#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.grafana#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.grafana#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.grafana#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.grafana#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeWorkspaceAuthenticationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspaceAuthenticationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeWorkspaceAuthenticationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.authentication != null) {
    contents.authentication = deserializeAws_restJson1AuthenticationDescription(data.authentication, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeWorkspaceAuthenticationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspaceAuthenticationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.grafana#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.grafana#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.grafana#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.grafana#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.grafana#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeWorkspaceConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspaceConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeWorkspaceConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configuration != null) {
    contents.configuration = new __LazyJsonString(data.configuration);
  }
  return contents;
};

const deserializeAws_restJson1DescribeWorkspaceConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspaceConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.grafana#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.grafana#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.grafana#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.grafana#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DisassociateLicenseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateLicenseCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateLicenseCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.workspace != null) {
    contents.workspace = deserializeAws_restJson1WorkspaceDescription(data.workspace, context);
  }
  return contents;
};

const deserializeAws_restJson1DisassociateLicenseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateLicenseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.grafana#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.grafana#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.grafana#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.grafana#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.grafana#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPermissionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.permissions != null) {
    contents.permissions = deserializeAws_restJson1PermissionEntryList(data.permissions, context);
  }
  return contents;
};

const deserializeAws_restJson1ListPermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.grafana#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.grafana#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.grafana#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.grafana#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.grafana#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.grafana#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.grafana#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.grafana#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.grafana#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.grafana#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListWorkspacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkspacesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListWorkspacesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.workspaces != null) {
    contents.workspaces = deserializeAws_restJson1WorkspaceList(data.workspaces, context);
  }
  return contents;
};

const deserializeAws_restJson1ListWorkspacesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkspacesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.grafana#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.grafana#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.grafana#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.grafana#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.grafana#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.grafana#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.grafana#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.grafana#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.grafana#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.grafana#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.grafana#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.grafana#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.grafana#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdatePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdatePermissionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.errors != null) {
    contents.errors = deserializeAws_restJson1UpdateErrorList(data.errors, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdatePermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.grafana#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.grafana#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.grafana#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.grafana#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.grafana#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateWorkspaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkspaceCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateWorkspaceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.workspace != null) {
    contents.workspace = deserializeAws_restJson1WorkspaceDescription(data.workspace, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateWorkspaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkspaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.grafana#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.grafana#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.grafana#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.grafana#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.grafana#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.grafana#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateWorkspaceAuthenticationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkspaceAuthenticationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateWorkspaceAuthenticationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.authentication != null) {
    contents.authentication = deserializeAws_restJson1AuthenticationDescription(data.authentication, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateWorkspaceAuthenticationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkspaceAuthenticationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.grafana#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.grafana#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.grafana#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.grafana#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.grafana#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.grafana#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateWorkspaceConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkspaceConfigurationCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateWorkspaceConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateWorkspaceConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkspaceConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.grafana#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.grafana#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.grafana#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.grafana#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.grafana#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.grafana#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
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

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceId != null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  if (data.resourceType != null) {
    contents.resourceType = __expectString(data.resourceType);
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
  const contents: any = map({
    retryAfterSeconds: [
      () => void 0 !== parsedOutput.headers["retry-after"],
      () => __strictParseInt32(parsedOutput.headers["retry-after"]),
    ],
  });
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

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceId != null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  if (data.resourceType != null) {
    contents.resourceType = __expectString(data.resourceType);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.quotaCode != null) {
    contents.quotaCode = __expectString(data.quotaCode);
  }
  if (data.resourceId != null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  if (data.resourceType != null) {
    contents.resourceType = __expectString(data.resourceType);
  }
  if (data.serviceCode != null) {
    contents.serviceCode = __expectString(data.serviceCode);
  }
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: any = map({
    retryAfterSeconds: [
      () => void 0 !== parsedOutput.headers["retry-after"],
      () => __strictParseInt32(parsedOutput.headers["retry-after"]),
    ],
  });
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.quotaCode != null) {
    contents.quotaCode = __expectString(data.quotaCode);
  }
  if (data.serviceCode != null) {
    contents.serviceCode = __expectString(data.serviceCode);
  }
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
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.fieldList != null) {
    contents.fieldList = deserializeAws_restJson1ValidationExceptionFieldList(data.fieldList, context);
  }
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

const serializeAws_restJson1AllowedOrganizations = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1AssertionAttributes = (input: AssertionAttributes, context: __SerdeContext): any => {
  return {
    ...(input.email != null && { email: input.email }),
    ...(input.groups != null && { groups: input.groups }),
    ...(input.login != null && { login: input.login }),
    ...(input.name != null && { name: input.name }),
    ...(input.org != null && { org: input.org }),
    ...(input.role != null && { role: input.role }),
  };
};

const serializeAws_restJson1AuthenticationProviders = (
  input: (AuthenticationProviderTypes | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1DataSourceTypesList = (
  input: (DataSourceType | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1IdpMetadata = (input: IdpMetadata, context: __SerdeContext): any => {
  return IdpMetadata.visit(input, {
    url: (value) => ({ url: value }),
    xml: (value) => ({ xml: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1NotificationDestinationsList = (
  input: (NotificationDestinationType | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1OrganizationalUnitList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1RoleValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1RoleValues = (input: RoleValues, context: __SerdeContext): any => {
  return {
    ...(input.admin != null && { admin: serializeAws_restJson1RoleValueList(input.admin, context) }),
    ...(input.editor != null && { editor: serializeAws_restJson1RoleValueList(input.editor, context) }),
  };
};

const serializeAws_restJson1SamlConfiguration = (input: SamlConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.allowedOrganizations != null && {
      allowedOrganizations: serializeAws_restJson1AllowedOrganizations(input.allowedOrganizations, context),
    }),
    ...(input.assertionAttributes != null && {
      assertionAttributes: serializeAws_restJson1AssertionAttributes(input.assertionAttributes, context),
    }),
    ...(input.idpMetadata != null && { idpMetadata: serializeAws_restJson1IdpMetadata(input.idpMetadata, context) }),
    ...(input.loginValidityDuration != null && { loginValidityDuration: input.loginValidityDuration }),
    ...(input.roleValues != null && { roleValues: serializeAws_restJson1RoleValues(input.roleValues, context) }),
  };
};

const serializeAws_restJson1SecurityGroupIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1SubnetIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1UpdateInstruction = (input: UpdateInstruction, context: __SerdeContext): any => {
  return {
    ...(input.action != null && { action: input.action }),
    ...(input.role != null && { role: input.role }),
    ...(input.users != null && { users: serializeAws_restJson1UserList(input.users, context) }),
  };
};

const serializeAws_restJson1UpdateInstructionBatch = (input: UpdateInstruction[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1UpdateInstruction(entry, context);
    });
};

const serializeAws_restJson1User = (input: User, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_restJson1UserList = (input: User[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1User(entry, context);
    });
};

const serializeAws_restJson1VpcConfiguration = (input: VpcConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.securityGroupIds != null && {
      securityGroupIds: serializeAws_restJson1SecurityGroupIds(input.securityGroupIds, context),
    }),
    ...(input.subnetIds != null && { subnetIds: serializeAws_restJson1SubnetIds(input.subnetIds, context) }),
  };
};

const deserializeAws_restJson1AllowedOrganizations = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1AssertionAttributes = (output: any, context: __SerdeContext): AssertionAttributes => {
  return {
    email: __expectString(output.email),
    groups: __expectString(output.groups),
    login: __expectString(output.login),
    name: __expectString(output.name),
    org: __expectString(output.org),
    role: __expectString(output.role),
  } as any;
};

const deserializeAws_restJson1AuthenticationDescription = (
  output: any,
  context: __SerdeContext
): AuthenticationDescription => {
  return {
    awsSso: output.awsSso != null ? deserializeAws_restJson1AwsSsoAuthentication(output.awsSso, context) : undefined,
    providers:
      output.providers != null ? deserializeAws_restJson1AuthenticationProviders(output.providers, context) : undefined,
    saml: output.saml != null ? deserializeAws_restJson1SamlAuthentication(output.saml, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AuthenticationProviders = (
  output: any,
  context: __SerdeContext
): (AuthenticationProviderTypes | string)[] => {
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

const deserializeAws_restJson1AuthenticationSummary = (output: any, context: __SerdeContext): AuthenticationSummary => {
  return {
    providers:
      output.providers != null ? deserializeAws_restJson1AuthenticationProviders(output.providers, context) : undefined,
    samlConfigurationStatus: __expectString(output.samlConfigurationStatus),
  } as any;
};

const deserializeAws_restJson1AwsSsoAuthentication = (output: any, context: __SerdeContext): AwsSsoAuthentication => {
  return {
    ssoClientId: __expectString(output.ssoClientId),
  } as any;
};

const deserializeAws_restJson1DataSourceTypesList = (
  output: any,
  context: __SerdeContext
): (DataSourceType | string)[] => {
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

const deserializeAws_restJson1IdpMetadata = (output: any, context: __SerdeContext): IdpMetadata => {
  if (__expectString(output.url) !== undefined) {
    return { url: __expectString(output.url) as any };
  }
  if (__expectString(output.xml) !== undefined) {
    return { xml: __expectString(output.xml) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1NotificationDestinationsList = (
  output: any,
  context: __SerdeContext
): (NotificationDestinationType | string)[] => {
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

const deserializeAws_restJson1OrganizationalUnitList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1PermissionEntry = (output: any, context: __SerdeContext): PermissionEntry => {
  return {
    role: __expectString(output.role),
    user: output.user != null ? deserializeAws_restJson1User(output.user, context) : undefined,
  } as any;
};

const deserializeAws_restJson1PermissionEntryList = (output: any, context: __SerdeContext): PermissionEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PermissionEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RoleValueList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1RoleValues = (output: any, context: __SerdeContext): RoleValues => {
  return {
    admin: output.admin != null ? deserializeAws_restJson1RoleValueList(output.admin, context) : undefined,
    editor: output.editor != null ? deserializeAws_restJson1RoleValueList(output.editor, context) : undefined,
  } as any;
};

const deserializeAws_restJson1SamlAuthentication = (output: any, context: __SerdeContext): SamlAuthentication => {
  return {
    configuration:
      output.configuration != null
        ? deserializeAws_restJson1SamlConfiguration(output.configuration, context)
        : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1SamlConfiguration = (output: any, context: __SerdeContext): SamlConfiguration => {
  return {
    allowedOrganizations:
      output.allowedOrganizations != null
        ? deserializeAws_restJson1AllowedOrganizations(output.allowedOrganizations, context)
        : undefined,
    assertionAttributes:
      output.assertionAttributes != null
        ? deserializeAws_restJson1AssertionAttributes(output.assertionAttributes, context)
        : undefined,
    idpMetadata:
      output.idpMetadata != null
        ? deserializeAws_restJson1IdpMetadata(__expectUnion(output.idpMetadata), context)
        : undefined,
    loginValidityDuration: __expectInt32(output.loginValidityDuration),
    roleValues: output.roleValues != null ? deserializeAws_restJson1RoleValues(output.roleValues, context) : undefined,
  } as any;
};

const deserializeAws_restJson1SecurityGroupIds = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1SubnetIds = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1UpdateError = (output: any, context: __SerdeContext): UpdateError => {
  return {
    causedBy: output.causedBy != null ? deserializeAws_restJson1UpdateInstruction(output.causedBy, context) : undefined,
    code: __expectInt32(output.code),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_restJson1UpdateErrorList = (output: any, context: __SerdeContext): UpdateError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UpdateError(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1UpdateInstruction = (output: any, context: __SerdeContext): UpdateInstruction => {
  return {
    action: __expectString(output.action),
    role: __expectString(output.role),
    users: output.users != null ? deserializeAws_restJson1UserList(output.users, context) : undefined,
  } as any;
};

const deserializeAws_restJson1User = (output: any, context: __SerdeContext): User => {
  return {
    id: __expectString(output.id),
    type: __expectString(output.type),
  } as any;
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

const deserializeAws_restJson1ValidationExceptionField = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField => {
  return {
    message: __expectString(output.message),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1ValidationExceptionFieldList = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ValidationExceptionField(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1VpcConfiguration = (output: any, context: __SerdeContext): VpcConfiguration => {
  return {
    securityGroupIds:
      output.securityGroupIds != null
        ? deserializeAws_restJson1SecurityGroupIds(output.securityGroupIds, context)
        : undefined,
    subnetIds: output.subnetIds != null ? deserializeAws_restJson1SubnetIds(output.subnetIds, context) : undefined,
  } as any;
};

const deserializeAws_restJson1WorkspaceDescription = (output: any, context: __SerdeContext): WorkspaceDescription => {
  return {
    accountAccessType: __expectString(output.accountAccessType),
    authentication:
      output.authentication != null
        ? deserializeAws_restJson1AuthenticationSummary(output.authentication, context)
        : undefined,
    created:
      output.created != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.created))) : undefined,
    dataSources:
      output.dataSources != null ? deserializeAws_restJson1DataSourceTypesList(output.dataSources, context) : undefined,
    description: __expectString(output.description),
    endpoint: __expectString(output.endpoint),
    freeTrialConsumed: __expectBoolean(output.freeTrialConsumed),
    freeTrialExpiration:
      output.freeTrialExpiration != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.freeTrialExpiration)))
        : undefined,
    grafanaVersion: __expectString(output.grafanaVersion),
    id: __expectString(output.id),
    licenseExpiration:
      output.licenseExpiration != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.licenseExpiration)))
        : undefined,
    licenseType: __expectString(output.licenseType),
    modified:
      output.modified != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.modified))) : undefined,
    name: __expectString(output.name),
    notificationDestinations:
      output.notificationDestinations != null
        ? deserializeAws_restJson1NotificationDestinationsList(output.notificationDestinations, context)
        : undefined,
    organizationRoleName: __expectString(output.organizationRoleName),
    organizationalUnits:
      output.organizationalUnits != null
        ? deserializeAws_restJson1OrganizationalUnitList(output.organizationalUnits, context)
        : undefined,
    permissionType: __expectString(output.permissionType),
    stackSetName: __expectString(output.stackSetName),
    status: __expectString(output.status),
    tags: output.tags != null ? deserializeAws_restJson1TagMap(output.tags, context) : undefined,
    vpcConfiguration:
      output.vpcConfiguration != null
        ? deserializeAws_restJson1VpcConfiguration(output.vpcConfiguration, context)
        : undefined,
    workspaceRoleArn: __expectString(output.workspaceRoleArn),
  } as any;
};

const deserializeAws_restJson1WorkspaceList = (output: any, context: __SerdeContext): WorkspaceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1WorkspaceSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1WorkspaceSummary = (output: any, context: __SerdeContext): WorkspaceSummary => {
  return {
    authentication:
      output.authentication != null
        ? deserializeAws_restJson1AuthenticationSummary(output.authentication, context)
        : undefined,
    created:
      output.created != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.created))) : undefined,
    description: __expectString(output.description),
    endpoint: __expectString(output.endpoint),
    grafanaVersion: __expectString(output.grafanaVersion),
    id: __expectString(output.id),
    modified:
      output.modified != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.modified))) : undefined,
    name: __expectString(output.name),
    notificationDestinations:
      output.notificationDestinations != null
        ? deserializeAws_restJson1NotificationDestinationsList(output.notificationDestinations, context)
        : undefined,
    status: __expectString(output.status),
    tags: output.tags != null ? deserializeAws_restJson1TagMap(output.tags, context) : undefined,
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
