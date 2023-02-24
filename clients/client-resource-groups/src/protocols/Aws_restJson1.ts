// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
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

import { CreateGroupCommandInput, CreateGroupCommandOutput } from "../commands/CreateGroupCommand";
import { DeleteGroupCommandInput, DeleteGroupCommandOutput } from "../commands/DeleteGroupCommand";
import { GetAccountSettingsCommandInput, GetAccountSettingsCommandOutput } from "../commands/GetAccountSettingsCommand";
import { GetGroupCommandInput, GetGroupCommandOutput } from "../commands/GetGroupCommand";
import {
  GetGroupConfigurationCommandInput,
  GetGroupConfigurationCommandOutput,
} from "../commands/GetGroupConfigurationCommand";
import { GetGroupQueryCommandInput, GetGroupQueryCommandOutput } from "../commands/GetGroupQueryCommand";
import { GetTagsCommandInput, GetTagsCommandOutput } from "../commands/GetTagsCommand";
import { GroupResourcesCommandInput, GroupResourcesCommandOutput } from "../commands/GroupResourcesCommand";
import { ListGroupResourcesCommandInput, ListGroupResourcesCommandOutput } from "../commands/ListGroupResourcesCommand";
import { ListGroupsCommandInput, ListGroupsCommandOutput } from "../commands/ListGroupsCommand";
import {
  PutGroupConfigurationCommandInput,
  PutGroupConfigurationCommandOutput,
} from "../commands/PutGroupConfigurationCommand";
import { SearchResourcesCommandInput, SearchResourcesCommandOutput } from "../commands/SearchResourcesCommand";
import { TagCommandInput, TagCommandOutput } from "../commands/TagCommand";
import { UngroupResourcesCommandInput, UngroupResourcesCommandOutput } from "../commands/UngroupResourcesCommand";
import { UntagCommandInput, UntagCommandOutput } from "../commands/UntagCommand";
import {
  UpdateAccountSettingsCommandInput,
  UpdateAccountSettingsCommandOutput,
} from "../commands/UpdateAccountSettingsCommand";
import { UpdateGroupCommandInput, UpdateGroupCommandOutput } from "../commands/UpdateGroupCommand";
import { UpdateGroupQueryCommandInput, UpdateGroupQueryCommandOutput } from "../commands/UpdateGroupQueryCommand";
import {
  AccountSettings,
  BadRequestException,
  FailedResource,
  ForbiddenException,
  Group,
  GroupConfiguration,
  GroupConfigurationItem,
  GroupConfigurationParameter,
  GroupFilter,
  GroupIdentifier,
  GroupQuery,
  InternalServerErrorException,
  ListGroupResourcesItem,
  MethodNotAllowedException,
  NotFoundException,
  PendingResource,
  QueryError,
  ResourceFilter,
  ResourceIdentifier,
  ResourceQuery,
  ResourceStatus,
  TooManyRequestsException,
  UnauthorizedException,
} from "../models/models_0";
import { ResourceGroupsServiceException as __BaseException } from "../models/ResourceGroupsServiceException";

export const serializeAws_restJson1CreateGroupCommand = async (
  input: CreateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/groups";
  let body: any;
  body = JSON.stringify({
    ...(input.Configuration != null && {
      Configuration: serializeAws_restJson1GroupConfigurationList(input.Configuration, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ResourceQuery != null && {
      ResourceQuery: serializeAws_restJson1ResourceQuery(input.ResourceQuery, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1Tags(input.Tags, context) }),
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

export const serializeAws_restJson1DeleteGroupCommand = async (
  input: DeleteGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/delete-group";
  let body: any;
  body = JSON.stringify({
    ...(input.Group != null && { Group: input.Group }),
    ...(input.GroupName != null && { GroupName: input.GroupName }),
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

export const serializeAws_restJson1GetAccountSettingsCommand = async (
  input: GetAccountSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/get-account-settings";
  let body: any;
  body = "";
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

export const serializeAws_restJson1GetGroupCommand = async (
  input: GetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/get-group";
  let body: any;
  body = JSON.stringify({
    ...(input.Group != null && { Group: input.Group }),
    ...(input.GroupName != null && { GroupName: input.GroupName }),
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

export const serializeAws_restJson1GetGroupConfigurationCommand = async (
  input: GetGroupConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/get-group-configuration";
  let body: any;
  body = JSON.stringify({
    ...(input.Group != null && { Group: input.Group }),
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

export const serializeAws_restJson1GetGroupQueryCommand = async (
  input: GetGroupQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/get-group-query";
  let body: any;
  body = JSON.stringify({
    ...(input.Group != null && { Group: input.Group }),
    ...(input.GroupName != null && { GroupName: input.GroupName }),
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

export const serializeAws_restJson1GetTagsCommand = async (
  input: GetTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/resources/{Arn}/tags";
  resolvedPath = __resolvedPath(resolvedPath, input, "Arn", () => input.Arn!, "{Arn}", false);
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

export const serializeAws_restJson1GroupResourcesCommand = async (
  input: GroupResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/group-resources";
  let body: any;
  body = JSON.stringify({
    ...(input.Group != null && { Group: input.Group }),
    ...(input.ResourceArns != null && {
      ResourceArns: serializeAws_restJson1ResourceArnList(input.ResourceArns, context),
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

export const serializeAws_restJson1ListGroupResourcesCommand = async (
  input: ListGroupResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/list-group-resources";
  let body: any;
  body = JSON.stringify({
    ...(input.Filters != null && { Filters: serializeAws_restJson1ResourceFilterList(input.Filters, context) }),
    ...(input.Group != null && { Group: input.Group }),
    ...(input.GroupName != null && { GroupName: input.GroupName }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
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

export const serializeAws_restJson1ListGroupsCommand = async (
  input: ListGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/groups-list";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.Filters != null && { Filters: serializeAws_restJson1GroupFilterList(input.Filters, context) }),
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

export const serializeAws_restJson1PutGroupConfigurationCommand = async (
  input: PutGroupConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/put-group-configuration";
  let body: any;
  body = JSON.stringify({
    ...(input.Configuration != null && {
      Configuration: serializeAws_restJson1GroupConfigurationList(input.Configuration, context),
    }),
    ...(input.Group != null && { Group: input.Group }),
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

export const serializeAws_restJson1SearchResourcesCommand = async (
  input: SearchResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/resources/search";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceQuery != null && {
      ResourceQuery: serializeAws_restJson1ResourceQuery(input.ResourceQuery, context),
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

export const serializeAws_restJson1TagCommand = async (
  input: TagCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/resources/{Arn}/tags";
  resolvedPath = __resolvedPath(resolvedPath, input, "Arn", () => input.Arn!, "{Arn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Tags != null && { Tags: serializeAws_restJson1Tags(input.Tags, context) }),
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

export const serializeAws_restJson1UngroupResourcesCommand = async (
  input: UngroupResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ungroup-resources";
  let body: any;
  body = JSON.stringify({
    ...(input.Group != null && { Group: input.Group }),
    ...(input.ResourceArns != null && {
      ResourceArns: serializeAws_restJson1ResourceArnList(input.ResourceArns, context),
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

export const serializeAws_restJson1UntagCommand = async (
  input: UntagCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/resources/{Arn}/tags";
  resolvedPath = __resolvedPath(resolvedPath, input, "Arn", () => input.Arn!, "{Arn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Keys != null && { Keys: serializeAws_restJson1TagKeyList(input.Keys, context) }),
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

export const serializeAws_restJson1UpdateAccountSettingsCommand = async (
  input: UpdateAccountSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/update-account-settings";
  let body: any;
  body = JSON.stringify({
    ...(input.GroupLifecycleEventsDesiredStatus != null && {
      GroupLifecycleEventsDesiredStatus: input.GroupLifecycleEventsDesiredStatus,
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

export const serializeAws_restJson1UpdateGroupCommand = async (
  input: UpdateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/update-group";
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Group != null && { Group: input.Group }),
    ...(input.GroupName != null && { GroupName: input.GroupName }),
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

export const serializeAws_restJson1UpdateGroupQueryCommand = async (
  input: UpdateGroupQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/update-group-query";
  let body: any;
  body = JSON.stringify({
    ...(input.Group != null && { Group: input.Group }),
    ...(input.GroupName != null && { GroupName: input.GroupName }),
    ...(input.ResourceQuery != null && {
      ResourceQuery: serializeAws_restJson1ResourceQuery(input.ResourceQuery, context),
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

export const deserializeAws_restJson1CreateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Group != null) {
    contents.Group = deserializeAws_restJson1Group(data.Group, context);
  }
  if (data.GroupConfiguration != null) {
    contents.GroupConfiguration = deserializeAws_restJson1GroupConfiguration(data.GroupConfiguration, context);
  }
  if (data.ResourceQuery != null) {
    contents.ResourceQuery = deserializeAws_restJson1ResourceQuery(data.ResourceQuery, context);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.resourcegroups#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.resourcegroups#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.resourcegroups#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.resourcegroups#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.resourcegroups#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Group != null) {
    contents.Group = deserializeAws_restJson1Group(data.Group, context);
  }
  return contents;
};

const deserializeAws_restJson1DeleteGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.resourcegroups#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.resourcegroups#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.resourcegroups#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.resourcegroups#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.resourcegroups#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.resourcegroups#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetAccountSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAccountSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccountSettings != null) {
    contents.AccountSettings = deserializeAws_restJson1AccountSettings(data.AccountSettings, context);
  }
  return contents;
};

const deserializeAws_restJson1GetAccountSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.resourcegroups#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.resourcegroups#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.resourcegroups#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.resourcegroups#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.resourcegroups#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Group != null) {
    contents.Group = deserializeAws_restJson1Group(data.Group, context);
  }
  return contents;
};

const deserializeAws_restJson1GetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.resourcegroups#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.resourcegroups#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.resourcegroups#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.resourcegroups#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.resourcegroups#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.resourcegroups#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetGroupConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetGroupConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.GroupConfiguration != null) {
    contents.GroupConfiguration = deserializeAws_restJson1GroupConfiguration(data.GroupConfiguration, context);
  }
  return contents;
};

const deserializeAws_restJson1GetGroupConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.resourcegroups#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.resourcegroups#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.resourcegroups#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.resourcegroups#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.resourcegroups#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.resourcegroups#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetGroupQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupQueryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetGroupQueryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.GroupQuery != null) {
    contents.GroupQuery = deserializeAws_restJson1GroupQuery(data.GroupQuery, context);
  }
  return contents;
};

const deserializeAws_restJson1GetGroupQueryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupQueryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.resourcegroups#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.resourcegroups#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.resourcegroups#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.resourcegroups#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.resourcegroups#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.resourcegroups#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetTagsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
  }
  return contents;
};

const deserializeAws_restJson1GetTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.resourcegroups#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.resourcegroups#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.resourcegroups#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.resourcegroups#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.resourcegroups#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.resourcegroups#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GroupResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GroupResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GroupResourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Failed != null) {
    contents.Failed = deserializeAws_restJson1FailedResourceList(data.Failed, context);
  }
  if (data.Pending != null) {
    contents.Pending = deserializeAws_restJson1PendingResourceList(data.Pending, context);
  }
  if (data.Succeeded != null) {
    contents.Succeeded = deserializeAws_restJson1ResourceArnList(data.Succeeded, context);
  }
  return contents;
};

const deserializeAws_restJson1GroupResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GroupResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.resourcegroups#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.resourcegroups#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.resourcegroups#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.resourcegroups#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.resourcegroups#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.resourcegroups#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListGroupResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListGroupResourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.QueryErrors != null) {
    contents.QueryErrors = deserializeAws_restJson1QueryErrorList(data.QueryErrors, context);
  }
  if (data.ResourceIdentifiers != null) {
    contents.ResourceIdentifiers = deserializeAws_restJson1ResourceIdentifierList(data.ResourceIdentifiers, context);
  }
  if (data.Resources != null) {
    contents.Resources = deserializeAws_restJson1ListGroupResourcesItemList(data.Resources, context);
  }
  return contents;
};

const deserializeAws_restJson1ListGroupResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.resourcegroups#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.resourcegroups#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.resourcegroups#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.resourcegroups#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.resourcegroups#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.resourcegroups#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.resourcegroups#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListGroupsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.GroupIdentifiers != null) {
    contents.GroupIdentifiers = deserializeAws_restJson1GroupIdentifierList(data.GroupIdentifiers, context);
  }
  if (data.Groups != null) {
    contents.Groups = deserializeAws_restJson1GroupList(data.Groups, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.resourcegroups#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.resourcegroups#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.resourcegroups#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.resourcegroups#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.resourcegroups#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PutGroupConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutGroupConfigurationCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutGroupConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PutGroupConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutGroupConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.resourcegroups#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.resourcegroups#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.resourcegroups#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.resourcegroups#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.resourcegroups#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.resourcegroups#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1SearchResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SearchResourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.QueryErrors != null) {
    contents.QueryErrors = deserializeAws_restJson1QueryErrorList(data.QueryErrors, context);
  }
  if (data.ResourceIdentifiers != null) {
    contents.ResourceIdentifiers = deserializeAws_restJson1ResourceIdentifierList(data.ResourceIdentifiers, context);
  }
  return contents;
};

const deserializeAws_restJson1SearchResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.resourcegroups#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.resourcegroups#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.resourcegroups#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.resourcegroups#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.resourcegroups#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.resourcegroups#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1TagCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
  }
  return contents;
};

const deserializeAws_restJson1TagCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.resourcegroups#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.resourcegroups#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.resourcegroups#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.resourcegroups#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.resourcegroups#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.resourcegroups#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UngroupResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UngroupResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UngroupResourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Failed != null) {
    contents.Failed = deserializeAws_restJson1FailedResourceList(data.Failed, context);
  }
  if (data.Pending != null) {
    contents.Pending = deserializeAws_restJson1PendingResourceList(data.Pending, context);
  }
  if (data.Succeeded != null) {
    contents.Succeeded = deserializeAws_restJson1ResourceArnList(data.Succeeded, context);
  }
  return contents;
};

const deserializeAws_restJson1UngroupResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UngroupResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.resourcegroups#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.resourcegroups#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.resourcegroups#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.resourcegroups#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.resourcegroups#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.resourcegroups#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UntagCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Keys != null) {
    contents.Keys = deserializeAws_restJson1TagKeyList(data.Keys, context);
  }
  return contents;
};

const deserializeAws_restJson1UntagCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.resourcegroups#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.resourcegroups#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.resourcegroups#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.resourcegroups#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.resourcegroups#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.resourcegroups#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateAccountSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAccountSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccountSettings != null) {
    contents.AccountSettings = deserializeAws_restJson1AccountSettings(data.AccountSettings, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateAccountSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.resourcegroups#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.resourcegroups#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.resourcegroups#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.resourcegroups#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.resourcegroups#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Group != null) {
    contents.Group = deserializeAws_restJson1Group(data.Group, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.resourcegroups#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.resourcegroups#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.resourcegroups#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.resourcegroups#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.resourcegroups#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.resourcegroups#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateGroupQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupQueryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateGroupQueryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.GroupQuery != null) {
    contents.GroupQuery = deserializeAws_restJson1GroupQuery(data.GroupQuery, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateGroupQueryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupQueryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.resourcegroups#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.resourcegroups#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.resourcegroups#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.resourcegroups#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.resourcegroups#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.resourcegroups#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new BadRequestException({
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ForbiddenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InternalServerErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InternalServerErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1MethodNotAllowedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MethodNotAllowedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new MethodNotAllowedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1UnauthorizedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new UnauthorizedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1GroupConfigurationItem = (input: GroupConfigurationItem, context: __SerdeContext): any => {
  return {
    ...(input.Parameters != null && {
      Parameters: serializeAws_restJson1GroupParameterList(input.Parameters, context),
    }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1GroupConfigurationList = (
  input: GroupConfigurationItem[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1GroupConfigurationItem(entry, context);
    });
};

const serializeAws_restJson1GroupConfigurationParameter = (
  input: GroupConfigurationParameter,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && {
      Values: serializeAws_restJson1GroupConfigurationParameterValueList(input.Values, context),
    }),
  };
};

const serializeAws_restJson1GroupConfigurationParameterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1GroupFilter = (input: GroupFilter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: serializeAws_restJson1GroupFilterValues(input.Values, context) }),
  };
};

const serializeAws_restJson1GroupFilterList = (input: GroupFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1GroupFilter(entry, context);
    });
};

const serializeAws_restJson1GroupFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1GroupParameterList = (
  input: GroupConfigurationParameter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1GroupConfigurationParameter(entry, context);
    });
};

const serializeAws_restJson1ResourceArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ResourceFilter = (input: ResourceFilter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: serializeAws_restJson1ResourceFilterValues(input.Values, context) }),
  };
};

const serializeAws_restJson1ResourceFilterList = (input: ResourceFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ResourceFilter(entry, context);
    });
};

const serializeAws_restJson1ResourceFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ResourceQuery = (input: ResourceQuery, context: __SerdeContext): any => {
  return {
    ...(input.Query != null && { Query: input.Query }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Tags = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const deserializeAws_restJson1AccountSettings = (output: any, context: __SerdeContext): AccountSettings => {
  return {
    GroupLifecycleEventsDesiredStatus: __expectString(output.GroupLifecycleEventsDesiredStatus),
    GroupLifecycleEventsStatus: __expectString(output.GroupLifecycleEventsStatus),
    GroupLifecycleEventsStatusMessage: __expectString(output.GroupLifecycleEventsStatusMessage),
  } as any;
};

const deserializeAws_restJson1FailedResource = (output: any, context: __SerdeContext): FailedResource => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    ResourceArn: __expectString(output.ResourceArn),
  } as any;
};

const deserializeAws_restJson1FailedResourceList = (output: any, context: __SerdeContext): FailedResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FailedResource(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Group = (output: any, context: __SerdeContext): Group => {
  return {
    Description: __expectString(output.Description),
    GroupArn: __expectString(output.GroupArn),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1GroupConfiguration = (output: any, context: __SerdeContext): GroupConfiguration => {
  return {
    Configuration:
      output.Configuration != null
        ? deserializeAws_restJson1GroupConfigurationList(output.Configuration, context)
        : undefined,
    FailureReason: __expectString(output.FailureReason),
    ProposedConfiguration:
      output.ProposedConfiguration != null
        ? deserializeAws_restJson1GroupConfigurationList(output.ProposedConfiguration, context)
        : undefined,
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1GroupConfigurationItem = (
  output: any,
  context: __SerdeContext
): GroupConfigurationItem => {
  return {
    Parameters:
      output.Parameters != null ? deserializeAws_restJson1GroupParameterList(output.Parameters, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1GroupConfigurationList = (
  output: any,
  context: __SerdeContext
): GroupConfigurationItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1GroupConfigurationItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1GroupConfigurationParameter = (
  output: any,
  context: __SerdeContext
): GroupConfigurationParameter => {
  return {
    Name: __expectString(output.Name),
    Values:
      output.Values != null
        ? deserializeAws_restJson1GroupConfigurationParameterValueList(output.Values, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1GroupConfigurationParameterValueList = (
  output: any,
  context: __SerdeContext
): string[] => {
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

const deserializeAws_restJson1GroupIdentifier = (output: any, context: __SerdeContext): GroupIdentifier => {
  return {
    GroupArn: __expectString(output.GroupArn),
    GroupName: __expectString(output.GroupName),
  } as any;
};

const deserializeAws_restJson1GroupIdentifierList = (output: any, context: __SerdeContext): GroupIdentifier[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1GroupIdentifier(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1GroupList = (output: any, context: __SerdeContext): Group[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Group(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1GroupParameterList = (
  output: any,
  context: __SerdeContext
): GroupConfigurationParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1GroupConfigurationParameter(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1GroupQuery = (output: any, context: __SerdeContext): GroupQuery => {
  return {
    GroupName: __expectString(output.GroupName),
    ResourceQuery:
      output.ResourceQuery != null ? deserializeAws_restJson1ResourceQuery(output.ResourceQuery, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ListGroupResourcesItem = (
  output: any,
  context: __SerdeContext
): ListGroupResourcesItem => {
  return {
    Identifier:
      output.Identifier != null ? deserializeAws_restJson1ResourceIdentifier(output.Identifier, context) : undefined,
    Status: output.Status != null ? deserializeAws_restJson1ResourceStatus(output.Status, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ListGroupResourcesItemList = (
  output: any,
  context: __SerdeContext
): ListGroupResourcesItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ListGroupResourcesItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PendingResource = (output: any, context: __SerdeContext): PendingResource => {
  return {
    ResourceArn: __expectString(output.ResourceArn),
  } as any;
};

const deserializeAws_restJson1PendingResourceList = (output: any, context: __SerdeContext): PendingResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PendingResource(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1QueryError = (output: any, context: __SerdeContext): QueryError => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_restJson1QueryErrorList = (output: any, context: __SerdeContext): QueryError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1QueryError(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ResourceArnList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1ResourceIdentifier = (output: any, context: __SerdeContext): ResourceIdentifier => {
  return {
    ResourceArn: __expectString(output.ResourceArn),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

const deserializeAws_restJson1ResourceIdentifierList = (output: any, context: __SerdeContext): ResourceIdentifier[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResourceIdentifier(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ResourceQuery = (output: any, context: __SerdeContext): ResourceQuery => {
  return {
    Query: __expectString(output.Query),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1ResourceStatus = (output: any, context: __SerdeContext): ResourceStatus => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1TagKeyList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Tags = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
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
