// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
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
import { v4 as generateIdempotencyToken } from "uuid";

import {
  CreateAppInstanceAdminCommandInput,
  CreateAppInstanceAdminCommandOutput,
} from "../commands/CreateAppInstanceAdminCommand";
import {
  CreateAppInstanceBotCommandInput,
  CreateAppInstanceBotCommandOutput,
} from "../commands/CreateAppInstanceBotCommand";
import { CreateAppInstanceCommandInput, CreateAppInstanceCommandOutput } from "../commands/CreateAppInstanceCommand";
import {
  CreateAppInstanceUserCommandInput,
  CreateAppInstanceUserCommandOutput,
} from "../commands/CreateAppInstanceUserCommand";
import {
  DeleteAppInstanceAdminCommandInput,
  DeleteAppInstanceAdminCommandOutput,
} from "../commands/DeleteAppInstanceAdminCommand";
import {
  DeleteAppInstanceBotCommandInput,
  DeleteAppInstanceBotCommandOutput,
} from "../commands/DeleteAppInstanceBotCommand";
import { DeleteAppInstanceCommandInput, DeleteAppInstanceCommandOutput } from "../commands/DeleteAppInstanceCommand";
import {
  DeleteAppInstanceUserCommandInput,
  DeleteAppInstanceUserCommandOutput,
} from "../commands/DeleteAppInstanceUserCommand";
import {
  DeregisterAppInstanceUserEndpointCommandInput,
  DeregisterAppInstanceUserEndpointCommandOutput,
} from "../commands/DeregisterAppInstanceUserEndpointCommand";
import {
  DescribeAppInstanceAdminCommandInput,
  DescribeAppInstanceAdminCommandOutput,
} from "../commands/DescribeAppInstanceAdminCommand";
import {
  DescribeAppInstanceBotCommandInput,
  DescribeAppInstanceBotCommandOutput,
} from "../commands/DescribeAppInstanceBotCommand";
import {
  DescribeAppInstanceCommandInput,
  DescribeAppInstanceCommandOutput,
} from "../commands/DescribeAppInstanceCommand";
import {
  DescribeAppInstanceUserCommandInput,
  DescribeAppInstanceUserCommandOutput,
} from "../commands/DescribeAppInstanceUserCommand";
import {
  DescribeAppInstanceUserEndpointCommandInput,
  DescribeAppInstanceUserEndpointCommandOutput,
} from "../commands/DescribeAppInstanceUserEndpointCommand";
import {
  GetAppInstanceRetentionSettingsCommandInput,
  GetAppInstanceRetentionSettingsCommandOutput,
} from "../commands/GetAppInstanceRetentionSettingsCommand";
import {
  ListAppInstanceAdminsCommandInput,
  ListAppInstanceAdminsCommandOutput,
} from "../commands/ListAppInstanceAdminsCommand";
import {
  ListAppInstanceBotsCommandInput,
  ListAppInstanceBotsCommandOutput,
} from "../commands/ListAppInstanceBotsCommand";
import { ListAppInstancesCommandInput, ListAppInstancesCommandOutput } from "../commands/ListAppInstancesCommand";
import {
  ListAppInstanceUserEndpointsCommandInput,
  ListAppInstanceUserEndpointsCommandOutput,
} from "../commands/ListAppInstanceUserEndpointsCommand";
import {
  ListAppInstanceUsersCommandInput,
  ListAppInstanceUsersCommandOutput,
} from "../commands/ListAppInstanceUsersCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  PutAppInstanceRetentionSettingsCommandInput,
  PutAppInstanceRetentionSettingsCommandOutput,
} from "../commands/PutAppInstanceRetentionSettingsCommand";
import {
  PutAppInstanceUserExpirationSettingsCommandInput,
  PutAppInstanceUserExpirationSettingsCommandOutput,
} from "../commands/PutAppInstanceUserExpirationSettingsCommand";
import {
  RegisterAppInstanceUserEndpointCommandInput,
  RegisterAppInstanceUserEndpointCommandOutput,
} from "../commands/RegisterAppInstanceUserEndpointCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateAppInstanceBotCommandInput,
  UpdateAppInstanceBotCommandOutput,
} from "../commands/UpdateAppInstanceBotCommand";
import { UpdateAppInstanceCommandInput, UpdateAppInstanceCommandOutput } from "../commands/UpdateAppInstanceCommand";
import {
  UpdateAppInstanceUserCommandInput,
  UpdateAppInstanceUserCommandOutput,
} from "../commands/UpdateAppInstanceUserCommand";
import {
  UpdateAppInstanceUserEndpointCommandInput,
  UpdateAppInstanceUserEndpointCommandOutput,
} from "../commands/UpdateAppInstanceUserEndpointCommand";
import { ChimeSDKIdentityServiceException as __BaseException } from "../models/ChimeSDKIdentityServiceException";
import {
  AppInstance,
  AppInstanceAdmin,
  AppInstanceAdminSummary,
  AppInstanceBot,
  AppInstanceBotSummary,
  AppInstanceRetentionSettings,
  AppInstanceSummary,
  AppInstanceUser,
  AppInstanceUserEndpoint,
  AppInstanceUserEndpointSummary,
  AppInstanceUserSummary,
  BadRequestException,
  ChannelRetentionSettings,
  Configuration,
  ConflictException,
  EndpointAttributes,
  EndpointState,
  ExpirationSettings,
  ForbiddenException,
  Identity,
  LexConfiguration,
  NotFoundException,
  ResourceLimitExceededException,
  ServiceFailureException,
  ServiceUnavailableException,
  Tag,
  ThrottledClientException,
  UnauthorizedClientException,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateAppInstanceCommand
 */
export const se_CreateAppInstanceCommand = async (
  input: CreateAppInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/app-instances";
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Metadata != null && { Metadata: input.Metadata }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
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
 * serializeAws_restJson1CreateAppInstanceAdminCommand
 */
export const se_CreateAppInstanceAdminCommand = async (
  input: CreateAppInstanceAdminCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/app-instances/{AppInstanceArn}/admins";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppInstanceArn",
    () => input.AppInstanceArn!,
    "{AppInstanceArn}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.AppInstanceAdminArn != null && { AppInstanceAdminArn: input.AppInstanceAdminArn }),
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
 * serializeAws_restJson1CreateAppInstanceBotCommand
 */
export const se_CreateAppInstanceBotCommand = async (
  input: CreateAppInstanceBotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/app-instance-bots";
  let body: any;
  body = JSON.stringify({
    ...(input.AppInstanceArn != null && { AppInstanceArn: input.AppInstanceArn }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Configuration != null && { Configuration: se_Configuration(input.Configuration, context) }),
    ...(input.Metadata != null && { Metadata: input.Metadata }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
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
 * serializeAws_restJson1CreateAppInstanceUserCommand
 */
export const se_CreateAppInstanceUserCommand = async (
  input: CreateAppInstanceUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/app-instance-users";
  let body: any;
  body = JSON.stringify({
    ...(input.AppInstanceArn != null && { AppInstanceArn: input.AppInstanceArn }),
    ...(input.AppInstanceUserId != null && { AppInstanceUserId: input.AppInstanceUserId }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.ExpirationSettings != null && {
      ExpirationSettings: se_ExpirationSettings(input.ExpirationSettings, context),
    }),
    ...(input.Metadata != null && { Metadata: input.Metadata }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
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
 * serializeAws_restJson1DeleteAppInstanceCommand
 */
export const se_DeleteAppInstanceCommand = async (
  input: DeleteAppInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/app-instances/{AppInstanceArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppInstanceArn",
    () => input.AppInstanceArn!,
    "{AppInstanceArn}",
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
 * serializeAws_restJson1DeleteAppInstanceAdminCommand
 */
export const se_DeleteAppInstanceAdminCommand = async (
  input: DeleteAppInstanceAdminCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app-instances/{AppInstanceArn}/admins/{AppInstanceAdminArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppInstanceAdminArn",
    () => input.AppInstanceAdminArn!,
    "{AppInstanceAdminArn}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppInstanceArn",
    () => input.AppInstanceArn!,
    "{AppInstanceArn}",
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
 * serializeAws_restJson1DeleteAppInstanceBotCommand
 */
export const se_DeleteAppInstanceBotCommand = async (
  input: DeleteAppInstanceBotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/app-instance-bots/{AppInstanceBotArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppInstanceBotArn",
    () => input.AppInstanceBotArn!,
    "{AppInstanceBotArn}",
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
 * serializeAws_restJson1DeleteAppInstanceUserCommand
 */
export const se_DeleteAppInstanceUserCommand = async (
  input: DeleteAppInstanceUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/app-instance-users/{AppInstanceUserArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppInstanceUserArn",
    () => input.AppInstanceUserArn!,
    "{AppInstanceUserArn}",
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
 * serializeAws_restJson1DeregisterAppInstanceUserEndpointCommand
 */
export const se_DeregisterAppInstanceUserEndpointCommand = async (
  input: DeregisterAppInstanceUserEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app-instance-users/{AppInstanceUserArn}/endpoints/{EndpointId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppInstanceUserArn",
    () => input.AppInstanceUserArn!,
    "{AppInstanceUserArn}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "EndpointId", () => input.EndpointId!, "{EndpointId}", false);
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
 * serializeAws_restJson1DescribeAppInstanceCommand
 */
export const se_DescribeAppInstanceCommand = async (
  input: DescribeAppInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/app-instances/{AppInstanceArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppInstanceArn",
    () => input.AppInstanceArn!,
    "{AppInstanceArn}",
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
 * serializeAws_restJson1DescribeAppInstanceAdminCommand
 */
export const se_DescribeAppInstanceAdminCommand = async (
  input: DescribeAppInstanceAdminCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app-instances/{AppInstanceArn}/admins/{AppInstanceAdminArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppInstanceAdminArn",
    () => input.AppInstanceAdminArn!,
    "{AppInstanceAdminArn}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppInstanceArn",
    () => input.AppInstanceArn!,
    "{AppInstanceArn}",
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
 * serializeAws_restJson1DescribeAppInstanceBotCommand
 */
export const se_DescribeAppInstanceBotCommand = async (
  input: DescribeAppInstanceBotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/app-instance-bots/{AppInstanceBotArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppInstanceBotArn",
    () => input.AppInstanceBotArn!,
    "{AppInstanceBotArn}",
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
 * serializeAws_restJson1DescribeAppInstanceUserCommand
 */
export const se_DescribeAppInstanceUserCommand = async (
  input: DescribeAppInstanceUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/app-instance-users/{AppInstanceUserArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppInstanceUserArn",
    () => input.AppInstanceUserArn!,
    "{AppInstanceUserArn}",
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
 * serializeAws_restJson1DescribeAppInstanceUserEndpointCommand
 */
export const se_DescribeAppInstanceUserEndpointCommand = async (
  input: DescribeAppInstanceUserEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app-instance-users/{AppInstanceUserArn}/endpoints/{EndpointId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppInstanceUserArn",
    () => input.AppInstanceUserArn!,
    "{AppInstanceUserArn}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "EndpointId", () => input.EndpointId!, "{EndpointId}", false);
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
 * serializeAws_restJson1GetAppInstanceRetentionSettingsCommand
 */
export const se_GetAppInstanceRetentionSettingsCommand = async (
  input: GetAppInstanceRetentionSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app-instances/{AppInstanceArn}/retention-settings";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppInstanceArn",
    () => input.AppInstanceArn!,
    "{AppInstanceArn}",
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
 * serializeAws_restJson1ListAppInstanceAdminsCommand
 */
export const se_ListAppInstanceAdminsCommand = async (
  input: ListAppInstanceAdminsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/app-instances/{AppInstanceArn}/admins";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppInstanceArn",
    () => input.AppInstanceArn!,
    "{AppInstanceArn}",
    false
  );
  const query: any = map({
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    "next-token": [, input.NextToken!],
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
 * serializeAws_restJson1ListAppInstanceBotsCommand
 */
export const se_ListAppInstanceBotsCommand = async (
  input: ListAppInstanceBotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/app-instance-bots";
  const query: any = map({
    "app-instance-arn": [, __expectNonNull(input.AppInstanceArn!, `AppInstanceArn`)],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    "next-token": [, input.NextToken!],
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
 * serializeAws_restJson1ListAppInstancesCommand
 */
export const se_ListAppInstancesCommand = async (
  input: ListAppInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/app-instances";
  const query: any = map({
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    "next-token": [, input.NextToken!],
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
 * serializeAws_restJson1ListAppInstanceUserEndpointsCommand
 */
export const se_ListAppInstanceUserEndpointsCommand = async (
  input: ListAppInstanceUserEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app-instance-users/{AppInstanceUserArn}/endpoints";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppInstanceUserArn",
    () => input.AppInstanceUserArn!,
    "{AppInstanceUserArn}",
    false
  );
  const query: any = map({
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    "next-token": [, input.NextToken!],
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
 * serializeAws_restJson1ListAppInstanceUsersCommand
 */
export const se_ListAppInstanceUsersCommand = async (
  input: ListAppInstanceUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/app-instance-users";
  const query: any = map({
    "app-instance-arn": [, __expectNonNull(input.AppInstanceArn!, `AppInstanceArn`)],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    "next-token": [, input.NextToken!],
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
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags";
  const query: any = map({
    arn: [, __expectNonNull(input.ResourceARN!, `ResourceARN`)],
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
 * serializeAws_restJson1PutAppInstanceRetentionSettingsCommand
 */
export const se_PutAppInstanceRetentionSettingsCommand = async (
  input: PutAppInstanceRetentionSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app-instances/{AppInstanceArn}/retention-settings";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppInstanceArn",
    () => input.AppInstanceArn!,
    "{AppInstanceArn}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.AppInstanceRetentionSettings != null && {
      AppInstanceRetentionSettings: se_AppInstanceRetentionSettings(input.AppInstanceRetentionSettings, context),
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

/**
 * serializeAws_restJson1PutAppInstanceUserExpirationSettingsCommand
 */
export const se_PutAppInstanceUserExpirationSettingsCommand = async (
  input: PutAppInstanceUserExpirationSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app-instance-users/{AppInstanceUserArn}/expiration-settings";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppInstanceUserArn",
    () => input.AppInstanceUserArn!,
    "{AppInstanceUserArn}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.ExpirationSettings != null && {
      ExpirationSettings: se_ExpirationSettings(input.ExpirationSettings, context),
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

/**
 * serializeAws_restJson1RegisterAppInstanceUserEndpointCommand
 */
export const se_RegisterAppInstanceUserEndpointCommand = async (
  input: RegisterAppInstanceUserEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app-instance-users/{AppInstanceUserArn}/endpoints";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppInstanceUserArn",
    () => input.AppInstanceUserArn!,
    "{AppInstanceUserArn}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.AllowMessages != null && { AllowMessages: input.AllowMessages }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.EndpointAttributes != null && {
      EndpointAttributes: se_EndpointAttributes(input.EndpointAttributes, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Type != null && { Type: input.Type }),
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
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags";
  const query: any = map({
    operation: [, "tag-resource"],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags";
  const query: any = map({
    operation: [, "untag-resource"],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateAppInstanceCommand
 */
export const se_UpdateAppInstanceCommand = async (
  input: UpdateAppInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/app-instances/{AppInstanceArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppInstanceArn",
    () => input.AppInstanceArn!,
    "{AppInstanceArn}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Metadata != null && { Metadata: input.Metadata }),
    ...(input.Name != null && { Name: input.Name }),
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
 * serializeAws_restJson1UpdateAppInstanceBotCommand
 */
export const se_UpdateAppInstanceBotCommand = async (
  input: UpdateAppInstanceBotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/app-instance-bots/{AppInstanceBotArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppInstanceBotArn",
    () => input.AppInstanceBotArn!,
    "{AppInstanceBotArn}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Metadata != null && { Metadata: input.Metadata }),
    ...(input.Name != null && { Name: input.Name }),
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
 * serializeAws_restJson1UpdateAppInstanceUserCommand
 */
export const se_UpdateAppInstanceUserCommand = async (
  input: UpdateAppInstanceUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/app-instance-users/{AppInstanceUserArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppInstanceUserArn",
    () => input.AppInstanceUserArn!,
    "{AppInstanceUserArn}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Metadata != null && { Metadata: input.Metadata }),
    ...(input.Name != null && { Name: input.Name }),
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
 * serializeAws_restJson1UpdateAppInstanceUserEndpointCommand
 */
export const se_UpdateAppInstanceUserEndpointCommand = async (
  input: UpdateAppInstanceUserEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app-instance-users/{AppInstanceUserArn}/endpoints/{EndpointId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppInstanceUserArn",
    () => input.AppInstanceUserArn!,
    "{AppInstanceUserArn}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "EndpointId", () => input.EndpointId!, "{EndpointId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.AllowMessages != null && { AllowMessages: input.AllowMessages }),
    ...(input.Name != null && { Name: input.Name }),
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
 * deserializeAws_restJson1CreateAppInstanceCommand
 */
export const de_CreateAppInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppInstanceCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateAppInstanceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstanceArn != null) {
    contents.AppInstanceArn = __expectString(data.AppInstanceArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateAppInstanceCommandError
 */
const de_CreateAppInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkidentity#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkidentity#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateAppInstanceAdminCommand
 */
export const de_CreateAppInstanceAdminCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppInstanceAdminCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateAppInstanceAdminCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstanceAdmin != null) {
    contents.AppInstanceAdmin = de_Identity(data.AppInstanceAdmin, context);
  }
  if (data.AppInstanceArn != null) {
    contents.AppInstanceArn = __expectString(data.AppInstanceArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateAppInstanceAdminCommandError
 */
const de_CreateAppInstanceAdminCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppInstanceAdminCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkidentity#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkidentity#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateAppInstanceBotCommand
 */
export const de_CreateAppInstanceBotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppInstanceBotCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateAppInstanceBotCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstanceBotArn != null) {
    contents.AppInstanceBotArn = __expectString(data.AppInstanceBotArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateAppInstanceBotCommandError
 */
const de_CreateAppInstanceBotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppInstanceBotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkidentity#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkidentity#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateAppInstanceUserCommand
 */
export const de_CreateAppInstanceUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppInstanceUserCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateAppInstanceUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstanceUserArn != null) {
    contents.AppInstanceUserArn = __expectString(data.AppInstanceUserArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateAppInstanceUserCommandError
 */
const de_CreateAppInstanceUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppInstanceUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkidentity#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkidentity#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteAppInstanceCommand
 */
export const de_DeleteAppInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppInstanceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteAppInstanceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAppInstanceCommandError
 */
const de_DeleteAppInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkidentity#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteAppInstanceAdminCommand
 */
export const de_DeleteAppInstanceAdminCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppInstanceAdminCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteAppInstanceAdminCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAppInstanceAdminCommandError
 */
const de_DeleteAppInstanceAdminCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppInstanceAdminCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkidentity#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkidentity#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteAppInstanceBotCommand
 */
export const de_DeleteAppInstanceBotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppInstanceBotCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteAppInstanceBotCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAppInstanceBotCommandError
 */
const de_DeleteAppInstanceBotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppInstanceBotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkidentity#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkidentity#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteAppInstanceUserCommand
 */
export const de_DeleteAppInstanceUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppInstanceUserCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteAppInstanceUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAppInstanceUserCommandError
 */
const de_DeleteAppInstanceUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppInstanceUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkidentity#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkidentity#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeregisterAppInstanceUserEndpointCommand
 */
export const de_DeregisterAppInstanceUserEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterAppInstanceUserEndpointCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeregisterAppInstanceUserEndpointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeregisterAppInstanceUserEndpointCommandError
 */
const de_DeregisterAppInstanceUserEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterAppInstanceUserEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeAppInstanceCommand
 */
export const de_DescribeAppInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeAppInstanceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstance != null) {
    contents.AppInstance = de_AppInstance(data.AppInstance, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAppInstanceCommandError
 */
const de_DescribeAppInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeAppInstanceAdminCommand
 */
export const de_DescribeAppInstanceAdminCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppInstanceAdminCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeAppInstanceAdminCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstanceAdmin != null) {
    contents.AppInstanceAdmin = de_AppInstanceAdmin(data.AppInstanceAdmin, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAppInstanceAdminCommandError
 */
const de_DescribeAppInstanceAdminCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppInstanceAdminCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeAppInstanceBotCommand
 */
export const de_DescribeAppInstanceBotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppInstanceBotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeAppInstanceBotCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstanceBot != null) {
    contents.AppInstanceBot = de_AppInstanceBot(data.AppInstanceBot, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAppInstanceBotCommandError
 */
const de_DescribeAppInstanceBotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppInstanceBotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkidentity#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeAppInstanceUserCommand
 */
export const de_DescribeAppInstanceUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppInstanceUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeAppInstanceUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstanceUser != null) {
    contents.AppInstanceUser = de_AppInstanceUser(data.AppInstanceUser, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAppInstanceUserCommandError
 */
const de_DescribeAppInstanceUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppInstanceUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeAppInstanceUserEndpointCommand
 */
export const de_DescribeAppInstanceUserEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppInstanceUserEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeAppInstanceUserEndpointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstanceUserEndpoint != null) {
    contents.AppInstanceUserEndpoint = de_AppInstanceUserEndpoint(data.AppInstanceUserEndpoint, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAppInstanceUserEndpointCommandError
 */
const de_DescribeAppInstanceUserEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppInstanceUserEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetAppInstanceRetentionSettingsCommand
 */
export const de_GetAppInstanceRetentionSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppInstanceRetentionSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAppInstanceRetentionSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstanceRetentionSettings != null) {
    contents.AppInstanceRetentionSettings = de_AppInstanceRetentionSettings(data.AppInstanceRetentionSettings, context);
  }
  if (data.InitiateDeletionTimestamp != null) {
    contents.InitiateDeletionTimestamp = __expectNonNull(
      __parseEpochTimestamp(__expectNumber(data.InitiateDeletionTimestamp))
    );
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetAppInstanceRetentionSettingsCommandError
 */
const de_GetAppInstanceRetentionSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppInstanceRetentionSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListAppInstanceAdminsCommand
 */
export const de_ListAppInstanceAdminsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppInstanceAdminsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAppInstanceAdminsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstanceAdmins != null) {
    contents.AppInstanceAdmins = de_AppInstanceAdminList(data.AppInstanceAdmins, context);
  }
  if (data.AppInstanceArn != null) {
    contents.AppInstanceArn = __expectString(data.AppInstanceArn);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAppInstanceAdminsCommandError
 */
const de_ListAppInstanceAdminsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppInstanceAdminsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkidentity#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListAppInstanceBotsCommand
 */
export const de_ListAppInstanceBotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppInstanceBotsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAppInstanceBotsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstanceArn != null) {
    contents.AppInstanceArn = __expectString(data.AppInstanceArn);
  }
  if (data.AppInstanceBots != null) {
    contents.AppInstanceBots = de_AppInstanceBotList(data.AppInstanceBots, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAppInstanceBotsCommandError
 */
const de_ListAppInstanceBotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppInstanceBotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkidentity#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListAppInstancesCommand
 */
export const de_ListAppInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAppInstancesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstances != null) {
    contents.AppInstances = de_AppInstanceList(data.AppInstances, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAppInstancesCommandError
 */
const de_ListAppInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListAppInstanceUserEndpointsCommand
 */
export const de_ListAppInstanceUserEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppInstanceUserEndpointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAppInstanceUserEndpointsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstanceUserEndpoints != null) {
    contents.AppInstanceUserEndpoints = de_AppInstanceUserEndpointSummaryList(data.AppInstanceUserEndpoints, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAppInstanceUserEndpointsCommandError
 */
const de_ListAppInstanceUserEndpointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppInstanceUserEndpointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListAppInstanceUsersCommand
 */
export const de_ListAppInstanceUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppInstanceUsersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAppInstanceUsersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstanceArn != null) {
    contents.AppInstanceArn = __expectString(data.AppInstanceArn);
  }
  if (data.AppInstanceUsers != null) {
    contents.AppInstanceUsers = de_AppInstanceUserList(data.AppInstanceUsers, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAppInstanceUsersCommandError
 */
const de_ListAppInstanceUsersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppInstanceUsersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Tags != null) {
    contents.Tags = de_TagList(data.Tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1PutAppInstanceRetentionSettingsCommand
 */
export const de_PutAppInstanceRetentionSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAppInstanceRetentionSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutAppInstanceRetentionSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstanceRetentionSettings != null) {
    contents.AppInstanceRetentionSettings = de_AppInstanceRetentionSettings(data.AppInstanceRetentionSettings, context);
  }
  if (data.InitiateDeletionTimestamp != null) {
    contents.InitiateDeletionTimestamp = __expectNonNull(
      __parseEpochTimestamp(__expectNumber(data.InitiateDeletionTimestamp))
    );
  }
  return contents;
};

/**
 * deserializeAws_restJson1PutAppInstanceRetentionSettingsCommandError
 */
const de_PutAppInstanceRetentionSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAppInstanceRetentionSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1PutAppInstanceUserExpirationSettingsCommand
 */
export const de_PutAppInstanceUserExpirationSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAppInstanceUserExpirationSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutAppInstanceUserExpirationSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstanceUserArn != null) {
    contents.AppInstanceUserArn = __expectString(data.AppInstanceUserArn);
  }
  if (data.ExpirationSettings != null) {
    contents.ExpirationSettings = de_ExpirationSettings(data.ExpirationSettings, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1PutAppInstanceUserExpirationSettingsCommandError
 */
const de_PutAppInstanceUserExpirationSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAppInstanceUserExpirationSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkidentity#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1RegisterAppInstanceUserEndpointCommand
 */
export const de_RegisterAppInstanceUserEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterAppInstanceUserEndpointCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_RegisterAppInstanceUserEndpointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstanceUserArn != null) {
    contents.AppInstanceUserArn = __expectString(data.AppInstanceUserArn);
  }
  if (data.EndpointId != null) {
    contents.EndpointId = __expectString(data.EndpointId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1RegisterAppInstanceUserEndpointCommandError
 */
const de_RegisterAppInstanceUserEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterAppInstanceUserEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkidentity#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkidentity#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkidentity#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateAppInstanceCommand
 */
export const de_UpdateAppInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateAppInstanceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstanceArn != null) {
    contents.AppInstanceArn = __expectString(data.AppInstanceArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAppInstanceCommandError
 */
const de_UpdateAppInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkidentity#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateAppInstanceBotCommand
 */
export const de_UpdateAppInstanceBotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppInstanceBotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateAppInstanceBotCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstanceBotArn != null) {
    contents.AppInstanceBotArn = __expectString(data.AppInstanceBotArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAppInstanceBotCommandError
 */
const de_UpdateAppInstanceBotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppInstanceBotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkidentity#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkidentity#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateAppInstanceUserCommand
 */
export const de_UpdateAppInstanceUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppInstanceUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateAppInstanceUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstanceUserArn != null) {
    contents.AppInstanceUserArn = __expectString(data.AppInstanceUserArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAppInstanceUserCommandError
 */
const de_UpdateAppInstanceUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppInstanceUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkidentity#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkidentity#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateAppInstanceUserEndpointCommand
 */
export const de_UpdateAppInstanceUserEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppInstanceUserEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateAppInstanceUserEndpointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstanceUserArn != null) {
    contents.AppInstanceUserArn = __expectString(data.AppInstanceUserArn);
  }
  if (data.EndpointId != null) {
    contents.EndpointId = __expectString(data.EndpointId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAppInstanceUserEndpointCommandError
 */
const de_UpdateAppInstanceUserEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppInstanceUserEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkidentity#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new BadRequestException({
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
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ForbiddenExceptionRes
 */
const de_ForbiddenExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ForbiddenException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ForbiddenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1NotFoundExceptionRes
 */
const de_NotFoundExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceLimitExceededExceptionRes
 */
const de_ResourceLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ResourceLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceFailureExceptionRes
 */
const de_ServiceFailureExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceFailureException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ServiceFailureException({
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
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
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
 * deserializeAws_restJson1ThrottledClientExceptionRes
 */
const de_ThrottledClientExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottledClientException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ThrottledClientException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UnauthorizedClientExceptionRes
 */
const de_UnauthorizedClientExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedClientException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new UnauthorizedClientException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1AppInstanceRetentionSettings
 */
const se_AppInstanceRetentionSettings = (input: AppInstanceRetentionSettings, context: __SerdeContext): any => {
  return {
    ...(input.ChannelRetentionSettings != null && {
      ChannelRetentionSettings: se_ChannelRetentionSettings(input.ChannelRetentionSettings, context),
    }),
  };
};

/**
 * serializeAws_restJson1ChannelRetentionSettings
 */
const se_ChannelRetentionSettings = (input: ChannelRetentionSettings, context: __SerdeContext): any => {
  return {
    ...(input.RetentionDays != null && { RetentionDays: input.RetentionDays }),
  };
};

/**
 * serializeAws_restJson1Configuration
 */
const se_Configuration = (input: Configuration, context: __SerdeContext): any => {
  return {
    ...(input.Lex != null && { Lex: se_LexConfiguration(input.Lex, context) }),
  };
};

/**
 * serializeAws_restJson1EndpointAttributes
 */
const se_EndpointAttributes = (input: EndpointAttributes, context: __SerdeContext): any => {
  return {
    ...(input.DeviceToken != null && { DeviceToken: input.DeviceToken }),
    ...(input.VoipDeviceToken != null && { VoipDeviceToken: input.VoipDeviceToken }),
  };
};

/**
 * serializeAws_restJson1ExpirationSettings
 */
const se_ExpirationSettings = (input: ExpirationSettings, context: __SerdeContext): any => {
  return {
    ...(input.ExpirationCriterion != null && { ExpirationCriterion: input.ExpirationCriterion }),
    ...(input.ExpirationDays != null && { ExpirationDays: input.ExpirationDays }),
  };
};

/**
 * serializeAws_restJson1LexConfiguration
 */
const se_LexConfiguration = (input: LexConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.LexBotAliasArn != null && { LexBotAliasArn: input.LexBotAliasArn }),
    ...(input.LocaleId != null && { LocaleId: input.LocaleId }),
    ...(input.RespondsTo != null && { RespondsTo: input.RespondsTo }),
    ...(input.WelcomeIntent != null && { WelcomeIntent: input.WelcomeIntent }),
  };
};

/**
 * serializeAws_restJson1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_restJson1TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * deserializeAws_restJson1AppInstance
 */
const de_AppInstance = (output: any, context: __SerdeContext): AppInstance => {
  return {
    AppInstanceArn: __expectString(output.AppInstanceArn),
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    LastUpdatedTimestamp:
      output.LastUpdatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTimestamp)))
        : undefined,
    Metadata: __expectString(output.Metadata),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_restJson1AppInstanceAdmin
 */
const de_AppInstanceAdmin = (output: any, context: __SerdeContext): AppInstanceAdmin => {
  return {
    Admin: output.Admin != null ? de_Identity(output.Admin, context) : undefined,
    AppInstanceArn: __expectString(output.AppInstanceArn),
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AppInstanceAdminList
 */
const de_AppInstanceAdminList = (output: any, context: __SerdeContext): AppInstanceAdminSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AppInstanceAdminSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AppInstanceAdminSummary
 */
const de_AppInstanceAdminSummary = (output: any, context: __SerdeContext): AppInstanceAdminSummary => {
  return {
    Admin: output.Admin != null ? de_Identity(output.Admin, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AppInstanceBot
 */
const de_AppInstanceBot = (output: any, context: __SerdeContext): AppInstanceBot => {
  return {
    AppInstanceBotArn: __expectString(output.AppInstanceBotArn),
    Configuration: output.Configuration != null ? de_Configuration(output.Configuration, context) : undefined,
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    LastUpdatedTimestamp:
      output.LastUpdatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTimestamp)))
        : undefined,
    Metadata: __expectString(output.Metadata),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_restJson1AppInstanceBotList
 */
const de_AppInstanceBotList = (output: any, context: __SerdeContext): AppInstanceBotSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AppInstanceBotSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AppInstanceBotSummary
 */
const de_AppInstanceBotSummary = (output: any, context: __SerdeContext): AppInstanceBotSummary => {
  return {
    AppInstanceBotArn: __expectString(output.AppInstanceBotArn),
    Metadata: __expectString(output.Metadata),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_restJson1AppInstanceList
 */
const de_AppInstanceList = (output: any, context: __SerdeContext): AppInstanceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AppInstanceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AppInstanceRetentionSettings
 */
const de_AppInstanceRetentionSettings = (output: any, context: __SerdeContext): AppInstanceRetentionSettings => {
  return {
    ChannelRetentionSettings:
      output.ChannelRetentionSettings != null
        ? de_ChannelRetentionSettings(output.ChannelRetentionSettings, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AppInstanceSummary
 */
const de_AppInstanceSummary = (output: any, context: __SerdeContext): AppInstanceSummary => {
  return {
    AppInstanceArn: __expectString(output.AppInstanceArn),
    Metadata: __expectString(output.Metadata),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_restJson1AppInstanceUser
 */
const de_AppInstanceUser = (output: any, context: __SerdeContext): AppInstanceUser => {
  return {
    AppInstanceUserArn: __expectString(output.AppInstanceUserArn),
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    ExpirationSettings:
      output.ExpirationSettings != null ? de_ExpirationSettings(output.ExpirationSettings, context) : undefined,
    LastUpdatedTimestamp:
      output.LastUpdatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTimestamp)))
        : undefined,
    Metadata: __expectString(output.Metadata),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_restJson1AppInstanceUserEndpoint
 */
const de_AppInstanceUserEndpoint = (output: any, context: __SerdeContext): AppInstanceUserEndpoint => {
  return {
    AllowMessages: __expectString(output.AllowMessages),
    AppInstanceUserArn: __expectString(output.AppInstanceUserArn),
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    EndpointAttributes:
      output.EndpointAttributes != null ? de_EndpointAttributes(output.EndpointAttributes, context) : undefined,
    EndpointId: __expectString(output.EndpointId),
    EndpointState: output.EndpointState != null ? de_EndpointState(output.EndpointState, context) : undefined,
    LastUpdatedTimestamp:
      output.LastUpdatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTimestamp)))
        : undefined,
    Name: __expectString(output.Name),
    ResourceArn: __expectString(output.ResourceArn),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1AppInstanceUserEndpointSummary
 */
const de_AppInstanceUserEndpointSummary = (output: any, context: __SerdeContext): AppInstanceUserEndpointSummary => {
  return {
    AllowMessages: __expectString(output.AllowMessages),
    AppInstanceUserArn: __expectString(output.AppInstanceUserArn),
    EndpointId: __expectString(output.EndpointId),
    EndpointState: output.EndpointState != null ? de_EndpointState(output.EndpointState, context) : undefined,
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1AppInstanceUserEndpointSummaryList
 */
const de_AppInstanceUserEndpointSummaryList = (
  output: any,
  context: __SerdeContext
): AppInstanceUserEndpointSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AppInstanceUserEndpointSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AppInstanceUserList
 */
const de_AppInstanceUserList = (output: any, context: __SerdeContext): AppInstanceUserSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AppInstanceUserSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AppInstanceUserSummary
 */
const de_AppInstanceUserSummary = (output: any, context: __SerdeContext): AppInstanceUserSummary => {
  return {
    AppInstanceUserArn: __expectString(output.AppInstanceUserArn),
    Metadata: __expectString(output.Metadata),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_restJson1ChannelRetentionSettings
 */
const de_ChannelRetentionSettings = (output: any, context: __SerdeContext): ChannelRetentionSettings => {
  return {
    RetentionDays: __expectInt32(output.RetentionDays),
  } as any;
};

/**
 * deserializeAws_restJson1Configuration
 */
const de_Configuration = (output: any, context: __SerdeContext): Configuration => {
  return {
    Lex: output.Lex != null ? de_LexConfiguration(output.Lex, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EndpointAttributes
 */
const de_EndpointAttributes = (output: any, context: __SerdeContext): EndpointAttributes => {
  return {
    DeviceToken: __expectString(output.DeviceToken),
    VoipDeviceToken: __expectString(output.VoipDeviceToken),
  } as any;
};

/**
 * deserializeAws_restJson1EndpointState
 */
const de_EndpointState = (output: any, context: __SerdeContext): EndpointState => {
  return {
    Status: __expectString(output.Status),
    StatusReason: __expectString(output.StatusReason),
  } as any;
};

/**
 * deserializeAws_restJson1ExpirationSettings
 */
const de_ExpirationSettings = (output: any, context: __SerdeContext): ExpirationSettings => {
  return {
    ExpirationCriterion: __expectString(output.ExpirationCriterion),
    ExpirationDays: __expectInt32(output.ExpirationDays),
  } as any;
};

/**
 * deserializeAws_restJson1Identity
 */
const de_Identity = (output: any, context: __SerdeContext): Identity => {
  return {
    Arn: __expectString(output.Arn),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_restJson1LexConfiguration
 */
const de_LexConfiguration = (output: any, context: __SerdeContext): LexConfiguration => {
  return {
    LexBotAliasArn: __expectString(output.LexBotAliasArn),
    LocaleId: __expectString(output.LocaleId),
    RespondsTo: __expectString(output.RespondsTo),
    WelcomeIntent: __expectString(output.WelcomeIntent),
  } as any;
};

/**
 * deserializeAws_restJson1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
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
