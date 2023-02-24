// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
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
import { v4 as generateIdempotencyToken } from "uuid";

import { CancelTaskCommandInput, CancelTaskCommandOutput } from "../commands/CancelTaskCommand";
import { CreateTaskCommandInput, CreateTaskCommandOutput } from "../commands/CreateTaskCommand";
import { DescribeDeviceCommandInput, DescribeDeviceCommandOutput } from "../commands/DescribeDeviceCommand";
import {
  DescribeDeviceEc2InstancesCommandInput,
  DescribeDeviceEc2InstancesCommandOutput,
} from "../commands/DescribeDeviceEc2InstancesCommand";
import { DescribeExecutionCommandInput, DescribeExecutionCommandOutput } from "../commands/DescribeExecutionCommand";
import { DescribeTaskCommandInput, DescribeTaskCommandOutput } from "../commands/DescribeTaskCommand";
import {
  ListDeviceResourcesCommandInput,
  ListDeviceResourcesCommandOutput,
} from "../commands/ListDeviceResourcesCommand";
import { ListDevicesCommandInput, ListDevicesCommandOutput } from "../commands/ListDevicesCommand";
import { ListExecutionsCommandInput, ListExecutionsCommandOutput } from "../commands/ListExecutionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListTasksCommandInput, ListTasksCommandOutput } from "../commands/ListTasksCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  AccessDeniedException,
  Capacity,
  Command,
  CpuOptions,
  DeviceSummary,
  EbsInstanceBlockDevice,
  ExecutionSummary,
  Instance,
  InstanceBlockDeviceMapping,
  InstanceState,
  InstanceSummary,
  InternalServerException,
  PhysicalNetworkInterface,
  Reboot,
  ResourceNotFoundException,
  ResourceSummary,
  SecurityGroupIdentifier,
  ServiceQuotaExceededException,
  SoftwareInformation,
  TaskSummary,
  ThrottlingException,
  Unlock,
  ValidationException,
} from "../models/models_0";
import { SnowDeviceManagementServiceException as __BaseException } from "../models/SnowDeviceManagementServiceException";

export const serializeAws_restJson1CancelTaskCommand = async (
  input: CancelTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/task/{taskId}/cancel";
  resolvedPath = __resolvedPath(resolvedPath, input, "taskId", () => input.taskId!, "{taskId}", false);
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

export const serializeAws_restJson1CreateTaskCommand = async (
  input: CreateTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/task";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.command != null && { command: serializeAws_restJson1Command(input.command, context) }),
    ...(input.description != null && { description: input.description }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    ...(input.targets != null && { targets: serializeAws_restJson1TargetList(input.targets, context) }),
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

export const serializeAws_restJson1DescribeDeviceCommand = async (
  input: DescribeDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/managed-device/{managedDeviceId}/describe";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "managedDeviceId",
    () => input.managedDeviceId!,
    "{managedDeviceId}",
    false
  );
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

export const serializeAws_restJson1DescribeDeviceEc2InstancesCommand = async (
  input: DescribeDeviceEc2InstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/managed-device/{managedDeviceId}/resources/ec2/describe";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "managedDeviceId",
    () => input.managedDeviceId!,
    "{managedDeviceId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.instanceIds != null && {
      instanceIds: serializeAws_restJson1InstanceIdsList(input.instanceIds, context),
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

export const serializeAws_restJson1DescribeExecutionCommand = async (
  input: DescribeExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/task/{taskId}/execution/{managedDeviceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "taskId", () => input.taskId!, "{taskId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "managedDeviceId",
    () => input.managedDeviceId!,
    "{managedDeviceId}",
    false
  );
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

export const serializeAws_restJson1DescribeTaskCommand = async (
  input: DescribeTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/task/{taskId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "taskId", () => input.taskId!, "{taskId}", false);
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

export const serializeAws_restJson1ListDeviceResourcesCommand = async (
  input: ListDeviceResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/managed-device/{managedDeviceId}/resources";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "managedDeviceId",
    () => input.managedDeviceId!,
    "{managedDeviceId}",
    false
  );
  const query: any = map({
    type: [, input.type!],
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

export const serializeAws_restJson1ListDevicesCommand = async (
  input: ListDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/managed-devices";
  const query: any = map({
    jobId: [, input.jobId!],
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

export const serializeAws_restJson1ListExecutionsCommand = async (
  input: ListExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/executions";
  const query: any = map({
    taskId: [, __expectNonNull(input.taskId!, `taskId`)],
    state: [, input.state!],
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

export const serializeAws_restJson1ListTasksCommand = async (
  input: ListTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tasks";
  const query: any = map({
    state: [, input.state!],
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

export const deserializeAws_restJson1CancelTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelTaskCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.taskId != null) {
    contents.taskId = __expectString(data.taskId);
  }
  return contents;
};

const deserializeAws_restJson1CancelTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.snowdevicemanagement#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.snowdevicemanagement#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.snowdevicemanagement#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.snowdevicemanagement#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.snowdevicemanagement#ValidationException":
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

export const deserializeAws_restJson1CreateTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateTaskCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.taskArn != null) {
    contents.taskArn = __expectString(data.taskArn);
  }
  if (data.taskId != null) {
    contents.taskId = __expectString(data.taskId);
  }
  return contents;
};

const deserializeAws_restJson1CreateTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.snowdevicemanagement#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.snowdevicemanagement#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.snowdevicemanagement#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.snowdevicemanagement#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.snowdevicemanagement#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.snowdevicemanagement#ValidationException":
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

export const deserializeAws_restJson1DescribeDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDeviceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.associatedWithJob != null) {
    contents.associatedWithJob = __expectString(data.associatedWithJob);
  }
  if (data.deviceCapacities != null) {
    contents.deviceCapacities = deserializeAws_restJson1CapacityList(data.deviceCapacities, context);
  }
  if (data.deviceState != null) {
    contents.deviceState = __expectString(data.deviceState);
  }
  if (data.deviceType != null) {
    contents.deviceType = __expectString(data.deviceType);
  }
  if (data.lastReachedOutAt != null) {
    contents.lastReachedOutAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastReachedOutAt)));
  }
  if (data.lastUpdatedAt != null) {
    contents.lastUpdatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedAt)));
  }
  if (data.managedDeviceArn != null) {
    contents.managedDeviceArn = __expectString(data.managedDeviceArn);
  }
  if (data.managedDeviceId != null) {
    contents.managedDeviceId = __expectString(data.managedDeviceId);
  }
  if (data.physicalNetworkInterfaces != null) {
    contents.physicalNetworkInterfaces = deserializeAws_restJson1PhysicalNetworkInterfaceList(
      data.physicalNetworkInterfaces,
      context
    );
  }
  if (data.software != null) {
    contents.software = deserializeAws_restJson1SoftwareInformation(data.software, context);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.snowdevicemanagement#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.snowdevicemanagement#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.snowdevicemanagement#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.snowdevicemanagement#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.snowdevicemanagement#ValidationException":
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

export const deserializeAws_restJson1DescribeDeviceEc2InstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeviceEc2InstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDeviceEc2InstancesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.instances != null) {
    contents.instances = deserializeAws_restJson1InstanceSummaryList(data.instances, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeDeviceEc2InstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeviceEc2InstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.snowdevicemanagement#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.snowdevicemanagement#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.snowdevicemanagement#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.snowdevicemanagement#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.snowdevicemanagement#ValidationException":
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

export const deserializeAws_restJson1DescribeExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExecutionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeExecutionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.executionId != null) {
    contents.executionId = __expectString(data.executionId);
  }
  if (data.lastUpdatedAt != null) {
    contents.lastUpdatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedAt)));
  }
  if (data.managedDeviceId != null) {
    contents.managedDeviceId = __expectString(data.managedDeviceId);
  }
  if (data.startedAt != null) {
    contents.startedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.startedAt)));
  }
  if (data.state != null) {
    contents.state = __expectString(data.state);
  }
  if (data.taskId != null) {
    contents.taskId = __expectString(data.taskId);
  }
  return contents;
};

const deserializeAws_restJson1DescribeExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.snowdevicemanagement#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.snowdevicemanagement#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.snowdevicemanagement#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.snowdevicemanagement#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.snowdevicemanagement#ValidationException":
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

export const deserializeAws_restJson1DescribeTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeTaskCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.completedAt != null) {
    contents.completedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.completedAt)));
  }
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdAt)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.lastUpdatedAt != null) {
    contents.lastUpdatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedAt)));
  }
  if (data.state != null) {
    contents.state = __expectString(data.state);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.targets != null) {
    contents.targets = deserializeAws_restJson1TargetList(data.targets, context);
  }
  if (data.taskArn != null) {
    contents.taskArn = __expectString(data.taskArn);
  }
  if (data.taskId != null) {
    contents.taskId = __expectString(data.taskId);
  }
  return contents;
};

const deserializeAws_restJson1DescribeTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.snowdevicemanagement#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.snowdevicemanagement#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.snowdevicemanagement#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.snowdevicemanagement#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.snowdevicemanagement#ValidationException":
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

export const deserializeAws_restJson1ListDeviceResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeviceResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDeviceResourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.resources != null) {
    contents.resources = deserializeAws_restJson1ResourceSummaryList(data.resources, context);
  }
  return contents;
};

const deserializeAws_restJson1ListDeviceResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeviceResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.snowdevicemanagement#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.snowdevicemanagement#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.snowdevicemanagement#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.snowdevicemanagement#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.snowdevicemanagement#ValidationException":
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

export const deserializeAws_restJson1ListDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDevicesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.devices != null) {
    contents.devices = deserializeAws_restJson1DeviceSummaryList(data.devices, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListDevicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.snowdevicemanagement#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.snowdevicemanagement#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.snowdevicemanagement#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.snowdevicemanagement#ValidationException":
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

export const deserializeAws_restJson1ListExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExecutionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListExecutionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.executions != null) {
    contents.executions = deserializeAws_restJson1ExecutionSummaryList(data.executions, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExecutionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.snowdevicemanagement#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.snowdevicemanagement#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.snowdevicemanagement#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.snowdevicemanagement#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.snowdevicemanagement#ValidationException":
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
    case "InternalServerException":
    case "com.amazonaws.snowdevicemanagement#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.snowdevicemanagement#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.snowdevicemanagement#ValidationException":
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

export const deserializeAws_restJson1ListTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTasksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTasksCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.tasks != null) {
    contents.tasks = deserializeAws_restJson1TaskSummaryList(data.tasks, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTasksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTasksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.snowdevicemanagement#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.snowdevicemanagement#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.snowdevicemanagement#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.snowdevicemanagement#ValidationException":
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
    case "InternalServerException":
    case "com.amazonaws.snowdevicemanagement#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.snowdevicemanagement#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.snowdevicemanagement#ValidationException":
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
    case "InternalServerException":
    case "com.amazonaws.snowdevicemanagement#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.snowdevicemanagement#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.snowdevicemanagement#ValidationException":
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

const deserializeAws_restJson1InternalServerExceptionResponse = async (
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

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
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
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1Command = (input: Command, context: __SerdeContext): any => {
  return Command.visit(input, {
    reboot: (value) => ({ reboot: serializeAws_restJson1Reboot(value, context) }),
    unlock: (value) => ({ unlock: serializeAws_restJson1Unlock(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1InstanceIdsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Reboot = (input: Reboot, context: __SerdeContext): any => {
  return {};
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

const serializeAws_restJson1TargetList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Unlock = (input: Unlock, context: __SerdeContext): any => {
  return {};
};

const deserializeAws_restJson1Capacity = (output: any, context: __SerdeContext): Capacity => {
  return {
    available: __expectLong(output.available),
    name: __expectString(output.name),
    total: __expectLong(output.total),
    unit: __expectString(output.unit),
    used: __expectLong(output.used),
  } as any;
};

const deserializeAws_restJson1CapacityList = (output: any, context: __SerdeContext): Capacity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Capacity(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CpuOptions = (output: any, context: __SerdeContext): CpuOptions => {
  return {
    coreCount: __expectInt32(output.coreCount),
    threadsPerCore: __expectInt32(output.threadsPerCore),
  } as any;
};

const deserializeAws_restJson1DeviceSummary = (output: any, context: __SerdeContext): DeviceSummary => {
  return {
    associatedWithJob: __expectString(output.associatedWithJob),
    managedDeviceArn: __expectString(output.managedDeviceArn),
    managedDeviceId: __expectString(output.managedDeviceId),
    tags: output.tags != null ? deserializeAws_restJson1TagMap(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1DeviceSummaryList = (output: any, context: __SerdeContext): DeviceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DeviceSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1EbsInstanceBlockDevice = (
  output: any,
  context: __SerdeContext
): EbsInstanceBlockDevice => {
  return {
    attachTime:
      output.attachTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.attachTime))) : undefined,
    deleteOnTermination: __expectBoolean(output.deleteOnTermination),
    status: __expectString(output.status),
    volumeId: __expectString(output.volumeId),
  } as any;
};

const deserializeAws_restJson1ExecutionSummary = (output: any, context: __SerdeContext): ExecutionSummary => {
  return {
    executionId: __expectString(output.executionId),
    managedDeviceId: __expectString(output.managedDeviceId),
    state: __expectString(output.state),
    taskId: __expectString(output.taskId),
  } as any;
};

const deserializeAws_restJson1ExecutionSummaryList = (output: any, context: __SerdeContext): ExecutionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ExecutionSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Instance = (output: any, context: __SerdeContext): Instance => {
  return {
    amiLaunchIndex: __expectInt32(output.amiLaunchIndex),
    blockDeviceMappings:
      output.blockDeviceMappings != null
        ? deserializeAws_restJson1InstanceBlockDeviceMappingList(output.blockDeviceMappings, context)
        : undefined,
    cpuOptions: output.cpuOptions != null ? deserializeAws_restJson1CpuOptions(output.cpuOptions, context) : undefined,
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    imageId: __expectString(output.imageId),
    instanceId: __expectString(output.instanceId),
    instanceType: __expectString(output.instanceType),
    privateIpAddress: __expectString(output.privateIpAddress),
    publicIpAddress: __expectString(output.publicIpAddress),
    rootDeviceName: __expectString(output.rootDeviceName),
    securityGroups:
      output.securityGroups != null
        ? deserializeAws_restJson1SecurityGroupIdentifierList(output.securityGroups, context)
        : undefined,
    state: output.state != null ? deserializeAws_restJson1InstanceState(output.state, context) : undefined,
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updatedAt))) : undefined,
  } as any;
};

const deserializeAws_restJson1InstanceBlockDeviceMapping = (
  output: any,
  context: __SerdeContext
): InstanceBlockDeviceMapping => {
  return {
    deviceName: __expectString(output.deviceName),
    ebs: output.ebs != null ? deserializeAws_restJson1EbsInstanceBlockDevice(output.ebs, context) : undefined,
  } as any;
};

const deserializeAws_restJson1InstanceBlockDeviceMappingList = (
  output: any,
  context: __SerdeContext
): InstanceBlockDeviceMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InstanceBlockDeviceMapping(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1InstanceState = (output: any, context: __SerdeContext): InstanceState => {
  return {
    code: __expectInt32(output.code),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1InstanceSummary = (output: any, context: __SerdeContext): InstanceSummary => {
  return {
    instance: output.instance != null ? deserializeAws_restJson1Instance(output.instance, context) : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
  } as any;
};

const deserializeAws_restJson1InstanceSummaryList = (output: any, context: __SerdeContext): InstanceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InstanceSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PhysicalNetworkInterface = (
  output: any,
  context: __SerdeContext
): PhysicalNetworkInterface => {
  return {
    defaultGateway: __expectString(output.defaultGateway),
    ipAddress: __expectString(output.ipAddress),
    ipAddressAssignment: __expectString(output.ipAddressAssignment),
    macAddress: __expectString(output.macAddress),
    netmask: __expectString(output.netmask),
    physicalConnectorType: __expectString(output.physicalConnectorType),
    physicalNetworkInterfaceId: __expectString(output.physicalNetworkInterfaceId),
  } as any;
};

const deserializeAws_restJson1PhysicalNetworkInterfaceList = (
  output: any,
  context: __SerdeContext
): PhysicalNetworkInterface[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PhysicalNetworkInterface(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ResourceSummary = (output: any, context: __SerdeContext): ResourceSummary => {
  return {
    arn: __expectString(output.arn),
    id: __expectString(output.id),
    resourceType: __expectString(output.resourceType),
  } as any;
};

const deserializeAws_restJson1ResourceSummaryList = (output: any, context: __SerdeContext): ResourceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResourceSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SecurityGroupIdentifier = (
  output: any,
  context: __SerdeContext
): SecurityGroupIdentifier => {
  return {
    groupId: __expectString(output.groupId),
    groupName: __expectString(output.groupName),
  } as any;
};

const deserializeAws_restJson1SecurityGroupIdentifierList = (
  output: any,
  context: __SerdeContext
): SecurityGroupIdentifier[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SecurityGroupIdentifier(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SoftwareInformation = (output: any, context: __SerdeContext): SoftwareInformation => {
  return {
    installState: __expectString(output.installState),
    installedVersion: __expectString(output.installedVersion),
    installingVersion: __expectString(output.installingVersion),
  } as any;
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

const deserializeAws_restJson1TargetList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1TaskSummary = (output: any, context: __SerdeContext): TaskSummary => {
  return {
    state: __expectString(output.state),
    tags: output.tags != null ? deserializeAws_restJson1TagMap(output.tags, context) : undefined,
    taskArn: __expectString(output.taskArn),
    taskId: __expectString(output.taskId),
  } as any;
};

const deserializeAws_restJson1TaskSummaryList = (output: any, context: __SerdeContext): TaskSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TaskSummary(entry, context);
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
