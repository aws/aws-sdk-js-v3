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
import { CreateAppInstanceCommandInput, CreateAppInstanceCommandOutput } from "../commands/CreateAppInstanceCommand";
import {
  CreateAppInstanceUserCommandInput,
  CreateAppInstanceUserCommandOutput,
} from "../commands/CreateAppInstanceUserCommand";
import {
  DeleteAppInstanceAdminCommandInput,
  DeleteAppInstanceAdminCommandOutput,
} from "../commands/DeleteAppInstanceAdminCommand";
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
  RegisterAppInstanceUserEndpointCommandInput,
  RegisterAppInstanceUserEndpointCommandOutput,
} from "../commands/RegisterAppInstanceUserEndpointCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
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
  AppInstanceRetentionSettings,
  AppInstanceSummary,
  AppInstanceUser,
  AppInstanceUserEndpoint,
  AppInstanceUserEndpointSummary,
  AppInstanceUserSummary,
  BadRequestException,
  ChannelRetentionSettings,
  ConflictException,
  EndpointAttributes,
  EndpointState,
  ForbiddenException,
  Identity,
  ResourceLimitExceededException,
  ServiceFailureException,
  ServiceUnavailableException,
  Tag,
  ThrottledClientException,
  UnauthorizedClientException,
} from "../models/models_0";

export const serializeAws_restJson1CreateAppInstanceCommand = async (
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
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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

export const serializeAws_restJson1CreateAppInstanceAdminCommand = async (
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

export const serializeAws_restJson1CreateAppInstanceUserCommand = async (
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
    ...(input.Metadata != null && { Metadata: input.Metadata }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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

export const serializeAws_restJson1DeleteAppInstanceCommand = async (
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

export const serializeAws_restJson1DeleteAppInstanceAdminCommand = async (
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

export const serializeAws_restJson1DeleteAppInstanceUserCommand = async (
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

export const serializeAws_restJson1DeregisterAppInstanceUserEndpointCommand = async (
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

export const serializeAws_restJson1DescribeAppInstanceCommand = async (
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

export const serializeAws_restJson1DescribeAppInstanceAdminCommand = async (
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

export const serializeAws_restJson1DescribeAppInstanceUserCommand = async (
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

export const serializeAws_restJson1DescribeAppInstanceUserEndpointCommand = async (
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

export const serializeAws_restJson1GetAppInstanceRetentionSettingsCommand = async (
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

export const serializeAws_restJson1ListAppInstanceAdminsCommand = async (
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

export const serializeAws_restJson1ListAppInstancesCommand = async (
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

export const serializeAws_restJson1ListAppInstanceUserEndpointsCommand = async (
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

export const serializeAws_restJson1ListAppInstanceUsersCommand = async (
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
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

export const serializeAws_restJson1PutAppInstanceRetentionSettingsCommand = async (
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
      AppInstanceRetentionSettings: serializeAws_restJson1AppInstanceRetentionSettings(
        input.AppInstanceRetentionSettings,
        context
      ),
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

export const serializeAws_restJson1RegisterAppInstanceUserEndpointCommand = async (
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
      EndpointAttributes: serializeAws_restJson1EndpointAttributes(input.EndpointAttributes, context),
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

export const serializeAws_restJson1TagResourceCommand = async (
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
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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

export const serializeAws_restJson1UntagResourceCommand = async (
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
    ...(input.TagKeys != null && { TagKeys: serializeAws_restJson1TagKeyList(input.TagKeys, context) }),
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

export const serializeAws_restJson1UpdateAppInstanceCommand = async (
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

export const serializeAws_restJson1UpdateAppInstanceUserCommand = async (
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

export const serializeAws_restJson1UpdateAppInstanceUserEndpointCommand = async (
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

export const deserializeAws_restJson1CreateAppInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppInstanceCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAppInstanceCommandError(output, context);
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

const deserializeAws_restJson1CreateAppInstanceCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkidentity#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkidentity#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateAppInstanceAdminCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppInstanceAdminCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAppInstanceAdminCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstanceAdmin != null) {
    contents.AppInstanceAdmin = deserializeAws_restJson1Identity(data.AppInstanceAdmin, context);
  }
  if (data.AppInstanceArn != null) {
    contents.AppInstanceArn = __expectString(data.AppInstanceArn);
  }
  return contents;
};

const deserializeAws_restJson1CreateAppInstanceAdminCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkidentity#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkidentity#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateAppInstanceUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppInstanceUserCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAppInstanceUserCommandError(output, context);
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

const deserializeAws_restJson1CreateAppInstanceUserCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkidentity#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkidentity#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteAppInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppInstanceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAppInstanceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteAppInstanceCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkidentity#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteAppInstanceAdminCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppInstanceAdminCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAppInstanceAdminCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteAppInstanceAdminCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkidentity#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkidentity#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteAppInstanceUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppInstanceUserCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAppInstanceUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteAppInstanceUserCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkidentity#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkidentity#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeregisterAppInstanceUserEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterAppInstanceUserEndpointCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeregisterAppInstanceUserEndpointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeregisterAppInstanceUserEndpointCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeAppInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAppInstanceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstance != null) {
    contents.AppInstance = deserializeAws_restJson1AppInstance(data.AppInstance, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeAppInstanceCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeAppInstanceAdminCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppInstanceAdminCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAppInstanceAdminCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstanceAdmin != null) {
    contents.AppInstanceAdmin = deserializeAws_restJson1AppInstanceAdmin(data.AppInstanceAdmin, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeAppInstanceAdminCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeAppInstanceUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppInstanceUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAppInstanceUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstanceUser != null) {
    contents.AppInstanceUser = deserializeAws_restJson1AppInstanceUser(data.AppInstanceUser, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeAppInstanceUserCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeAppInstanceUserEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppInstanceUserEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAppInstanceUserEndpointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstanceUserEndpoint != null) {
    contents.AppInstanceUserEndpoint = deserializeAws_restJson1AppInstanceUserEndpoint(
      data.AppInstanceUserEndpoint,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1DescribeAppInstanceUserEndpointCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetAppInstanceRetentionSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppInstanceRetentionSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAppInstanceRetentionSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstanceRetentionSettings != null) {
    contents.AppInstanceRetentionSettings = deserializeAws_restJson1AppInstanceRetentionSettings(
      data.AppInstanceRetentionSettings,
      context
    );
  }
  if (data.InitiateDeletionTimestamp != null) {
    contents.InitiateDeletionTimestamp = __expectNonNull(
      __parseEpochTimestamp(__expectNumber(data.InitiateDeletionTimestamp))
    );
  }
  return contents;
};

const deserializeAws_restJson1GetAppInstanceRetentionSettingsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListAppInstanceAdminsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppInstanceAdminsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAppInstanceAdminsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstanceAdmins != null) {
    contents.AppInstanceAdmins = deserializeAws_restJson1AppInstanceAdminList(data.AppInstanceAdmins, context);
  }
  if (data.AppInstanceArn != null) {
    contents.AppInstanceArn = __expectString(data.AppInstanceArn);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListAppInstanceAdminsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkidentity#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListAppInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAppInstancesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstances != null) {
    contents.AppInstances = deserializeAws_restJson1AppInstanceList(data.AppInstances, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListAppInstancesCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListAppInstanceUserEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppInstanceUserEndpointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAppInstanceUserEndpointsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstanceUserEndpoints != null) {
    contents.AppInstanceUserEndpoints = deserializeAws_restJson1AppInstanceUserEndpointSummaryList(
      data.AppInstanceUserEndpoints,
      context
    );
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListAppInstanceUserEndpointsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListAppInstanceUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppInstanceUsersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAppInstanceUsersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstanceArn != null) {
    contents.AppInstanceArn = __expectString(data.AppInstanceArn);
  }
  if (data.AppInstanceUsers != null) {
    contents.AppInstanceUsers = deserializeAws_restJson1AppInstanceUserList(data.AppInstanceUsers, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListAppInstanceUsersCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
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
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagList(data.Tags, context);
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
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PutAppInstanceRetentionSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAppInstanceRetentionSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutAppInstanceRetentionSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstanceRetentionSettings != null) {
    contents.AppInstanceRetentionSettings = deserializeAws_restJson1AppInstanceRetentionSettings(
      data.AppInstanceRetentionSettings,
      context
    );
  }
  if (data.InitiateDeletionTimestamp != null) {
    contents.InitiateDeletionTimestamp = __expectNonNull(
      __parseEpochTimestamp(__expectNumber(data.InitiateDeletionTimestamp))
    );
  }
  return contents;
};

const deserializeAws_restJson1PutAppInstanceRetentionSettingsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1RegisterAppInstanceUserEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterAppInstanceUserEndpointCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1RegisterAppInstanceUserEndpointCommandError(output, context);
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

const deserializeAws_restJson1RegisterAppInstanceUserEndpointCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkidentity#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkidentity#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
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
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkidentity#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
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
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateAppInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAppInstanceCommandError(output, context);
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

const deserializeAws_restJson1UpdateAppInstanceCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkidentity#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateAppInstanceUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppInstanceUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAppInstanceUserCommandError(output, context);
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

const deserializeAws_restJson1UpdateAppInstanceUserCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkidentity#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkidentity#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateAppInstanceUserEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppInstanceUserEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAppInstanceUserEndpointCommandError(output, context);
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

const deserializeAws_restJson1UpdateAppInstanceUserEndpointCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkidentity#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
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

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
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

const deserializeAws_restJson1ForbiddenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
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

const deserializeAws_restJson1ResourceLimitExceededExceptionResponse = async (
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

const deserializeAws_restJson1ServiceFailureExceptionResponse = async (
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

const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (
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

const deserializeAws_restJson1ThrottledClientExceptionResponse = async (
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

const deserializeAws_restJson1UnauthorizedClientExceptionResponse = async (
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

const serializeAws_restJson1AppInstanceRetentionSettings = (
  input: AppInstanceRetentionSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChannelRetentionSettings != null && {
      ChannelRetentionSettings: serializeAws_restJson1ChannelRetentionSettings(input.ChannelRetentionSettings, context),
    }),
  };
};

const serializeAws_restJson1ChannelRetentionSettings = (
  input: ChannelRetentionSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.RetentionDays != null && { RetentionDays: input.RetentionDays }),
  };
};

const serializeAws_restJson1EndpointAttributes = (input: EndpointAttributes, context: __SerdeContext): any => {
  return {
    ...(input.DeviceToken != null && { DeviceToken: input.DeviceToken }),
    ...(input.VoipDeviceToken != null && { VoipDeviceToken: input.VoipDeviceToken }),
  };
};

const serializeAws_restJson1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Tag(entry, context);
    });
};

const deserializeAws_restJson1AppInstance = (output: any, context: __SerdeContext): AppInstance => {
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

const deserializeAws_restJson1AppInstanceAdmin = (output: any, context: __SerdeContext): AppInstanceAdmin => {
  return {
    Admin: output.Admin != null ? deserializeAws_restJson1Identity(output.Admin, context) : undefined,
    AppInstanceArn: __expectString(output.AppInstanceArn),
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
  } as any;
};

const deserializeAws_restJson1AppInstanceAdminList = (
  output: any,
  context: __SerdeContext
): AppInstanceAdminSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AppInstanceAdminSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AppInstanceAdminSummary = (
  output: any,
  context: __SerdeContext
): AppInstanceAdminSummary => {
  return {
    Admin: output.Admin != null ? deserializeAws_restJson1Identity(output.Admin, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AppInstanceList = (output: any, context: __SerdeContext): AppInstanceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AppInstanceSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AppInstanceRetentionSettings = (
  output: any,
  context: __SerdeContext
): AppInstanceRetentionSettings => {
  return {
    ChannelRetentionSettings:
      output.ChannelRetentionSettings != null
        ? deserializeAws_restJson1ChannelRetentionSettings(output.ChannelRetentionSettings, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AppInstanceSummary = (output: any, context: __SerdeContext): AppInstanceSummary => {
  return {
    AppInstanceArn: __expectString(output.AppInstanceArn),
    Metadata: __expectString(output.Metadata),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1AppInstanceUser = (output: any, context: __SerdeContext): AppInstanceUser => {
  return {
    AppInstanceUserArn: __expectString(output.AppInstanceUserArn),
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

const deserializeAws_restJson1AppInstanceUserEndpoint = (
  output: any,
  context: __SerdeContext
): AppInstanceUserEndpoint => {
  return {
    AllowMessages: __expectString(output.AllowMessages),
    AppInstanceUserArn: __expectString(output.AppInstanceUserArn),
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    EndpointAttributes:
      output.EndpointAttributes != null
        ? deserializeAws_restJson1EndpointAttributes(output.EndpointAttributes, context)
        : undefined,
    EndpointId: __expectString(output.EndpointId),
    EndpointState:
      output.EndpointState != null ? deserializeAws_restJson1EndpointState(output.EndpointState, context) : undefined,
    LastUpdatedTimestamp:
      output.LastUpdatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTimestamp)))
        : undefined,
    Name: __expectString(output.Name),
    ResourceArn: __expectString(output.ResourceArn),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AppInstanceUserEndpointSummary = (
  output: any,
  context: __SerdeContext
): AppInstanceUserEndpointSummary => {
  return {
    AllowMessages: __expectString(output.AllowMessages),
    AppInstanceUserArn: __expectString(output.AppInstanceUserArn),
    EndpointId: __expectString(output.EndpointId),
    EndpointState:
      output.EndpointState != null ? deserializeAws_restJson1EndpointState(output.EndpointState, context) : undefined,
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AppInstanceUserEndpointSummaryList = (
  output: any,
  context: __SerdeContext
): AppInstanceUserEndpointSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AppInstanceUserEndpointSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AppInstanceUserList = (
  output: any,
  context: __SerdeContext
): AppInstanceUserSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AppInstanceUserSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AppInstanceUserSummary = (
  output: any,
  context: __SerdeContext
): AppInstanceUserSummary => {
  return {
    AppInstanceUserArn: __expectString(output.AppInstanceUserArn),
    Metadata: __expectString(output.Metadata),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1ChannelRetentionSettings = (
  output: any,
  context: __SerdeContext
): ChannelRetentionSettings => {
  return {
    RetentionDays: __expectInt32(output.RetentionDays),
  } as any;
};

const deserializeAws_restJson1EndpointAttributes = (output: any, context: __SerdeContext): EndpointAttributes => {
  return {
    DeviceToken: __expectString(output.DeviceToken),
    VoipDeviceToken: __expectString(output.VoipDeviceToken),
  } as any;
};

const deserializeAws_restJson1EndpointState = (output: any, context: __SerdeContext): EndpointState => {
  return {
    Status: __expectString(output.Status),
    StatusReason: __expectString(output.StatusReason),
  } as any;
};

const deserializeAws_restJson1Identity = (output: any, context: __SerdeContext): Identity => {
  return {
    Arn: __expectString(output.Arn),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Tag(entry, context);
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
