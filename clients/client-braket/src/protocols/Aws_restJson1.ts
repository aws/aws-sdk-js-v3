// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  LazyJsonString as __LazyJsonString,
  map as __map,
  parseRfc3339DateTime as __parseRfc3339DateTime,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { CancelJobCommandInput, CancelJobCommandOutput } from "../commands/CancelJobCommand";
import { CancelQuantumTaskCommandInput, CancelQuantumTaskCommandOutput } from "../commands/CancelQuantumTaskCommand";
import { CreateJobCommandInput, CreateJobCommandOutput } from "../commands/CreateJobCommand";
import { CreateQuantumTaskCommandInput, CreateQuantumTaskCommandOutput } from "../commands/CreateQuantumTaskCommand";
import { GetDeviceCommandInput, GetDeviceCommandOutput } from "../commands/GetDeviceCommand";
import { GetJobCommandInput, GetJobCommandOutput } from "../commands/GetJobCommand";
import { GetQuantumTaskCommandInput, GetQuantumTaskCommandOutput } from "../commands/GetQuantumTaskCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { SearchDevicesCommandInput, SearchDevicesCommandOutput } from "../commands/SearchDevicesCommand";
import { SearchJobsCommandInput, SearchJobsCommandOutput } from "../commands/SearchJobsCommand";
import { SearchQuantumTasksCommandInput, SearchQuantumTasksCommandOutput } from "../commands/SearchQuantumTasksCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { BraketServiceException as __BaseException } from "../models/BraketServiceException";
import {
  AccessDeniedException,
  AlgorithmSpecification,
  ConflictException,
  ContainerImage,
  DataSource,
  DeviceConfig,
  DeviceOfflineException,
  DeviceRetiredException,
  DeviceSummary,
  InputFileConfig,
  InstanceConfig,
  InternalServiceException,
  JobCheckpointConfig,
  JobEventDetails,
  JobOutputDataConfig,
  JobStoppingCondition,
  JobSummary,
  QuantumTaskSummary,
  ResourceNotFoundException,
  S3DataSource,
  ScriptModeConfig,
  SearchDevicesFilter,
  SearchJobsFilter,
  SearchQuantumTasksFilter,
  ServiceQuotaExceededException,
  ThrottlingException,
  ValidationException,
} from "../models/models_0";

export const serializeAws_restJson1CancelJobCommand = async (
  input: CancelJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/job/{jobArn}/cancel";
  resolvedPath = __resolvedPath(resolvedPath, input, "jobArn", () => input.jobArn!, "{jobArn}", false);
  let body: any;
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

export const serializeAws_restJson1CancelQuantumTaskCommand = async (
  input: CancelQuantumTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/quantum-task/{quantumTaskArn}/cancel";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "quantumTaskArn",
    () => input.quantumTaskArn!,
    "{quantumTaskArn}",
    false
  );
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
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

export const serializeAws_restJson1CreateJobCommand = async (
  input: CreateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/job";
  let body: any;
  body = JSON.stringify({
    ...(input.algorithmSpecification != null && {
      algorithmSpecification: serializeAws_restJson1AlgorithmSpecification(input.algorithmSpecification, context),
    }),
    ...(input.checkpointConfig != null && {
      checkpointConfig: serializeAws_restJson1JobCheckpointConfig(input.checkpointConfig, context),
    }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.deviceConfig != null && {
      deviceConfig: serializeAws_restJson1DeviceConfig(input.deviceConfig, context),
    }),
    ...(input.hyperParameters != null && {
      hyperParameters: serializeAws_restJson1HyperParameters(input.hyperParameters, context),
    }),
    ...(input.inputDataConfig != null && {
      inputDataConfig: serializeAws_restJson1InputConfigList(input.inputDataConfig, context),
    }),
    ...(input.instanceConfig != null && {
      instanceConfig: serializeAws_restJson1InstanceConfig(input.instanceConfig, context),
    }),
    ...(input.jobName != null && { jobName: input.jobName }),
    ...(input.outputDataConfig != null && {
      outputDataConfig: serializeAws_restJson1JobOutputDataConfig(input.outputDataConfig, context),
    }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.stoppingCondition != null && {
      stoppingCondition: serializeAws_restJson1JobStoppingCondition(input.stoppingCondition, context),
    }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
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

export const serializeAws_restJson1CreateQuantumTaskCommand = async (
  input: CreateQuantumTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/quantum-task";
  let body: any;
  body = JSON.stringify({
    ...(input.action != null && { action: __LazyJsonString.fromObject(input.action) }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.deviceArn != null && { deviceArn: input.deviceArn }),
    ...(input.deviceParameters != null && { deviceParameters: __LazyJsonString.fromObject(input.deviceParameters) }),
    ...(input.jobToken != null && { jobToken: input.jobToken }),
    ...(input.outputS3Bucket != null && { outputS3Bucket: input.outputS3Bucket }),
    ...(input.outputS3KeyPrefix != null && { outputS3KeyPrefix: input.outputS3KeyPrefix }),
    ...(input.shots != null && { shots: input.shots }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
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

export const serializeAws_restJson1GetDeviceCommand = async (
  input: GetDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/device/{deviceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "deviceArn", () => input.deviceArn!, "{deviceArn}", false);
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

export const serializeAws_restJson1GetJobCommand = async (
  input: GetJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/job/{jobArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "jobArn", () => input.jobArn!, "{jobArn}", false);
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

export const serializeAws_restJson1GetQuantumTaskCommand = async (
  input: GetQuantumTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/quantum-task/{quantumTaskArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "quantumTaskArn",
    () => input.quantumTaskArn!,
    "{quantumTaskArn}",
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

export const serializeAws_restJson1SearchDevicesCommand = async (
  input: SearchDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/devices";
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: serializeAws_restJson1SearchDevicesFilterList(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
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

export const serializeAws_restJson1SearchJobsCommand = async (
  input: SearchJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/jobs";
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: serializeAws_restJson1SearchJobsFilterList(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
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

export const serializeAws_restJson1SearchQuantumTasksCommand = async (
  input: SearchQuantumTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/quantum-tasks";
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && {
      filters: serializeAws_restJson1SearchQuantumTasksFilterList(input.filters, context),
    }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.tags != null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
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

export const deserializeAws_restJson1CancelJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.cancellationStatus != null) {
    contents.cancellationStatus = __expectString(data.cancellationStatus);
  }
  if (data.jobArn != null) {
    contents.jobArn = __expectString(data.jobArn);
  }
  return contents;
};

const deserializeAws_restJson1CancelJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.braket#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.braket#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.braket#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.braket#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.braket#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.braket#ValidationException":
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

export const deserializeAws_restJson1CancelQuantumTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelQuantumTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelQuantumTaskCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.cancellationStatus != null) {
    contents.cancellationStatus = __expectString(data.cancellationStatus);
  }
  if (data.quantumTaskArn != null) {
    contents.quantumTaskArn = __expectString(data.quantumTaskArn);
  }
  return contents;
};

const deserializeAws_restJson1CancelQuantumTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelQuantumTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.braket#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.braket#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.braket#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.braket#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.braket#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.braket#ValidationException":
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

export const deserializeAws_restJson1CreateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobArn != null) {
    contents.jobArn = __expectString(data.jobArn);
  }
  return contents;
};

const deserializeAws_restJson1CreateJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.braket#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.braket#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "DeviceRetiredException":
    case "com.amazonaws.braket#DeviceRetiredException":
      throw await deserializeAws_restJson1DeviceRetiredExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.braket#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.braket#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.braket#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.braket#ValidationException":
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

export const deserializeAws_restJson1CreateQuantumTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQuantumTaskCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateQuantumTaskCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.quantumTaskArn != null) {
    contents.quantumTaskArn = __expectString(data.quantumTaskArn);
  }
  return contents;
};

const deserializeAws_restJson1CreateQuantumTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQuantumTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.braket#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DeviceOfflineException":
    case "com.amazonaws.braket#DeviceOfflineException":
      throw await deserializeAws_restJson1DeviceOfflineExceptionResponse(parsedOutput, context);
    case "DeviceRetiredException":
    case "com.amazonaws.braket#DeviceRetiredException":
      throw await deserializeAws_restJson1DeviceRetiredExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.braket#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.braket#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.braket#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.braket#ValidationException":
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

export const deserializeAws_restJson1GetDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDeviceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.deviceArn != null) {
    contents.deviceArn = __expectString(data.deviceArn);
  }
  if (data.deviceCapabilities != null) {
    contents.deviceCapabilities = new __LazyJsonString(data.deviceCapabilities);
  }
  if (data.deviceName != null) {
    contents.deviceName = __expectString(data.deviceName);
  }
  if (data.deviceStatus != null) {
    contents.deviceStatus = __expectString(data.deviceStatus);
  }
  if (data.deviceType != null) {
    contents.deviceType = __expectString(data.deviceType);
  }
  if (data.providerName != null) {
    contents.providerName = __expectString(data.providerName);
  }
  return contents;
};

const deserializeAws_restJson1GetDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.braket#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.braket#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.braket#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.braket#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.braket#ValidationException":
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

export const deserializeAws_restJson1GetJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.algorithmSpecification != null) {
    contents.algorithmSpecification = deserializeAws_restJson1AlgorithmSpecification(
      data.algorithmSpecification,
      context
    );
  }
  if (data.billableDuration != null) {
    contents.billableDuration = __expectInt32(data.billableDuration);
  }
  if (data.checkpointConfig != null) {
    contents.checkpointConfig = deserializeAws_restJson1JobCheckpointConfig(data.checkpointConfig, context);
  }
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseRfc3339DateTime(data.createdAt));
  }
  if (data.deviceConfig != null) {
    contents.deviceConfig = deserializeAws_restJson1DeviceConfig(data.deviceConfig, context);
  }
  if (data.endedAt != null) {
    contents.endedAt = __expectNonNull(__parseRfc3339DateTime(data.endedAt));
  }
  if (data.events != null) {
    contents.events = deserializeAws_restJson1JobEvents(data.events, context);
  }
  if (data.failureReason != null) {
    contents.failureReason = __expectString(data.failureReason);
  }
  if (data.hyperParameters != null) {
    contents.hyperParameters = deserializeAws_restJson1HyperParameters(data.hyperParameters, context);
  }
  if (data.inputDataConfig != null) {
    contents.inputDataConfig = deserializeAws_restJson1InputConfigList(data.inputDataConfig, context);
  }
  if (data.instanceConfig != null) {
    contents.instanceConfig = deserializeAws_restJson1InstanceConfig(data.instanceConfig, context);
  }
  if (data.jobArn != null) {
    contents.jobArn = __expectString(data.jobArn);
  }
  if (data.jobName != null) {
    contents.jobName = __expectString(data.jobName);
  }
  if (data.outputDataConfig != null) {
    contents.outputDataConfig = deserializeAws_restJson1JobOutputDataConfig(data.outputDataConfig, context);
  }
  if (data.roleArn != null) {
    contents.roleArn = __expectString(data.roleArn);
  }
  if (data.startedAt != null) {
    contents.startedAt = __expectNonNull(__parseRfc3339DateTime(data.startedAt));
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.stoppingCondition != null) {
    contents.stoppingCondition = deserializeAws_restJson1JobStoppingCondition(data.stoppingCondition, context);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1GetJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.braket#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.braket#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.braket#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.braket#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.braket#ValidationException":
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

export const deserializeAws_restJson1GetQuantumTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQuantumTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetQuantumTaskCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseRfc3339DateTime(data.createdAt));
  }
  if (data.deviceArn != null) {
    contents.deviceArn = __expectString(data.deviceArn);
  }
  if (data.deviceParameters != null) {
    contents.deviceParameters = new __LazyJsonString(data.deviceParameters);
  }
  if (data.endedAt != null) {
    contents.endedAt = __expectNonNull(__parseRfc3339DateTime(data.endedAt));
  }
  if (data.failureReason != null) {
    contents.failureReason = __expectString(data.failureReason);
  }
  if (data.jobArn != null) {
    contents.jobArn = __expectString(data.jobArn);
  }
  if (data.outputS3Bucket != null) {
    contents.outputS3Bucket = __expectString(data.outputS3Bucket);
  }
  if (data.outputS3Directory != null) {
    contents.outputS3Directory = __expectString(data.outputS3Directory);
  }
  if (data.quantumTaskArn != null) {
    contents.quantumTaskArn = __expectString(data.quantumTaskArn);
  }
  if (data.shots != null) {
    contents.shots = __expectLong(data.shots);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1GetQuantumTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQuantumTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.braket#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.braket#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.braket#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.braket#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.braket#ValidationException":
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
    contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
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
    case "InternalServiceException":
    case "com.amazonaws.braket#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.braket#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.braket#ValidationException":
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

export const deserializeAws_restJson1SearchDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchDevicesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SearchDevicesCommandError(output, context);
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

const deserializeAws_restJson1SearchDevicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchDevicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.braket#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.braket#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.braket#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.braket#ValidationException":
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

export const deserializeAws_restJson1SearchJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SearchJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobs != null) {
    contents.jobs = deserializeAws_restJson1JobSummaryList(data.jobs, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1SearchJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.braket#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.braket#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.braket#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.braket#ValidationException":
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

export const deserializeAws_restJson1SearchQuantumTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchQuantumTasksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SearchQuantumTasksCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.quantumTasks != null) {
    contents.quantumTasks = deserializeAws_restJson1QuantumTaskSummaryList(data.quantumTasks, context);
  }
  return contents;
};

const deserializeAws_restJson1SearchQuantumTasksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchQuantumTasksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.braket#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.braket#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.braket#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.braket#ValidationException":
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
    case "InternalServiceException":
    case "com.amazonaws.braket#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.braket#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.braket#ValidationException":
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
    case "InternalServiceException":
    case "com.amazonaws.braket#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.braket#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.braket#ValidationException":
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
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1DeviceOfflineExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeviceOfflineException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new DeviceOfflineException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1DeviceRetiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeviceRetiredException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new DeviceRetiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InternalServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InternalServiceException({
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

const serializeAws_restJson1AlgorithmSpecification = (input: AlgorithmSpecification, context: __SerdeContext): any => {
  return {
    ...(input.containerImage != null && {
      containerImage: serializeAws_restJson1ContainerImage(input.containerImage, context),
    }),
    ...(input.scriptModeConfig != null && {
      scriptModeConfig: serializeAws_restJson1ScriptModeConfig(input.scriptModeConfig, context),
    }),
  };
};

const serializeAws_restJson1ContainerImage = (input: ContainerImage, context: __SerdeContext): any => {
  return {
    ...(input.uri != null && { uri: input.uri }),
  };
};

const serializeAws_restJson1DataSource = (input: DataSource, context: __SerdeContext): any => {
  return {
    ...(input.s3DataSource != null && {
      s3DataSource: serializeAws_restJson1S3DataSource(input.s3DataSource, context),
    }),
  };
};

const serializeAws_restJson1DeviceConfig = (input: DeviceConfig, context: __SerdeContext): any => {
  return {
    ...(input.device != null && { device: input.device }),
  };
};

const serializeAws_restJson1HyperParameters = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1InputConfigList = (input: InputFileConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1InputFileConfig(entry, context);
    });
};

const serializeAws_restJson1InputFileConfig = (input: InputFileConfig, context: __SerdeContext): any => {
  return {
    ...(input.channelName != null && { channelName: input.channelName }),
    ...(input.contentType != null && { contentType: input.contentType }),
    ...(input.dataSource != null && { dataSource: serializeAws_restJson1DataSource(input.dataSource, context) }),
  };
};

const serializeAws_restJson1InstanceConfig = (input: InstanceConfig, context: __SerdeContext): any => {
  return {
    ...(input.instanceCount != null && { instanceCount: input.instanceCount }),
    ...(input.instanceType != null && { instanceType: input.instanceType }),
    ...(input.volumeSizeInGb != null && { volumeSizeInGb: input.volumeSizeInGb }),
  };
};

const serializeAws_restJson1JobCheckpointConfig = (input: JobCheckpointConfig, context: __SerdeContext): any => {
  return {
    ...(input.localPath != null && { localPath: input.localPath }),
    ...(input.s3Uri != null && { s3Uri: input.s3Uri }),
  };
};

const serializeAws_restJson1JobOutputDataConfig = (input: JobOutputDataConfig, context: __SerdeContext): any => {
  return {
    ...(input.kmsKeyId != null && { kmsKeyId: input.kmsKeyId }),
    ...(input.s3Path != null && { s3Path: input.s3Path }),
  };
};

const serializeAws_restJson1JobStoppingCondition = (input: JobStoppingCondition, context: __SerdeContext): any => {
  return {
    ...(input.maxRuntimeInSeconds != null && { maxRuntimeInSeconds: input.maxRuntimeInSeconds }),
  };
};

const serializeAws_restJson1S3DataSource = (input: S3DataSource, context: __SerdeContext): any => {
  return {
    ...(input.s3Uri != null && { s3Uri: input.s3Uri }),
  };
};

const serializeAws_restJson1ScriptModeConfig = (input: ScriptModeConfig, context: __SerdeContext): any => {
  return {
    ...(input.compressionType != null && { compressionType: input.compressionType }),
    ...(input.entryPoint != null && { entryPoint: input.entryPoint }),
    ...(input.s3Uri != null && { s3Uri: input.s3Uri }),
  };
};

const serializeAws_restJson1SearchDevicesFilter = (input: SearchDevicesFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.values != null && { values: serializeAws_restJson1String256List(input.values, context) }),
  };
};

const serializeAws_restJson1SearchDevicesFilterList = (input: SearchDevicesFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SearchDevicesFilter(entry, context);
    });
};

const serializeAws_restJson1SearchJobsFilter = (input: SearchJobsFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.operator != null && { operator: input.operator }),
    ...(input.values != null && { values: serializeAws_restJson1String256List(input.values, context) }),
  };
};

const serializeAws_restJson1SearchJobsFilterList = (input: SearchJobsFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SearchJobsFilter(entry, context);
    });
};

const serializeAws_restJson1SearchQuantumTasksFilter = (
  input: SearchQuantumTasksFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.operator != null && { operator: input.operator }),
    ...(input.values != null && { values: serializeAws_restJson1String256List(input.values, context) }),
  };
};

const serializeAws_restJson1SearchQuantumTasksFilterList = (
  input: SearchQuantumTasksFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SearchQuantumTasksFilter(entry, context);
    });
};

const serializeAws_restJson1String256List = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1TagsMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const deserializeAws_restJson1AlgorithmSpecification = (
  output: any,
  context: __SerdeContext
): AlgorithmSpecification => {
  return {
    containerImage:
      output.containerImage != null
        ? deserializeAws_restJson1ContainerImage(output.containerImage, context)
        : undefined,
    scriptModeConfig:
      output.scriptModeConfig != null
        ? deserializeAws_restJson1ScriptModeConfig(output.scriptModeConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ContainerImage = (output: any, context: __SerdeContext): ContainerImage => {
  return {
    uri: __expectString(output.uri),
  } as any;
};

const deserializeAws_restJson1DataSource = (output: any, context: __SerdeContext): DataSource => {
  return {
    s3DataSource:
      output.s3DataSource != null ? deserializeAws_restJson1S3DataSource(output.s3DataSource, context) : undefined,
  } as any;
};

const deserializeAws_restJson1DeviceConfig = (output: any, context: __SerdeContext): DeviceConfig => {
  return {
    device: __expectString(output.device),
  } as any;
};

const deserializeAws_restJson1DeviceSummary = (output: any, context: __SerdeContext): DeviceSummary => {
  return {
    deviceArn: __expectString(output.deviceArn),
    deviceName: __expectString(output.deviceName),
    deviceStatus: __expectString(output.deviceStatus),
    deviceType: __expectString(output.deviceType),
    providerName: __expectString(output.providerName),
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

const deserializeAws_restJson1HyperParameters = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1InputConfigList = (output: any, context: __SerdeContext): InputFileConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InputFileConfig(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1InputFileConfig = (output: any, context: __SerdeContext): InputFileConfig => {
  return {
    channelName: __expectString(output.channelName),
    contentType: __expectString(output.contentType),
    dataSource: output.dataSource != null ? deserializeAws_restJson1DataSource(output.dataSource, context) : undefined,
  } as any;
};

const deserializeAws_restJson1InstanceConfig = (output: any, context: __SerdeContext): InstanceConfig => {
  return {
    instanceCount: __expectInt32(output.instanceCount),
    instanceType: __expectString(output.instanceType),
    volumeSizeInGb: __expectInt32(output.volumeSizeInGb),
  } as any;
};

const deserializeAws_restJson1JobCheckpointConfig = (output: any, context: __SerdeContext): JobCheckpointConfig => {
  return {
    localPath: __expectString(output.localPath),
    s3Uri: __expectString(output.s3Uri),
  } as any;
};

const deserializeAws_restJson1JobEventDetails = (output: any, context: __SerdeContext): JobEventDetails => {
  return {
    eventType: __expectString(output.eventType),
    message: __expectString(output.message),
    timeOfEvent: output.timeOfEvent != null ? __expectNonNull(__parseRfc3339DateTime(output.timeOfEvent)) : undefined,
  } as any;
};

const deserializeAws_restJson1JobEvents = (output: any, context: __SerdeContext): JobEventDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JobEventDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1JobOutputDataConfig = (output: any, context: __SerdeContext): JobOutputDataConfig => {
  return {
    kmsKeyId: __expectString(output.kmsKeyId),
    s3Path: __expectString(output.s3Path),
  } as any;
};

const deserializeAws_restJson1JobStoppingCondition = (output: any, context: __SerdeContext): JobStoppingCondition => {
  return {
    maxRuntimeInSeconds: __expectInt32(output.maxRuntimeInSeconds),
  } as any;
};

const deserializeAws_restJson1JobSummary = (output: any, context: __SerdeContext): JobSummary => {
  return {
    createdAt: output.createdAt != null ? __expectNonNull(__parseRfc3339DateTime(output.createdAt)) : undefined,
    device: __expectString(output.device),
    endedAt: output.endedAt != null ? __expectNonNull(__parseRfc3339DateTime(output.endedAt)) : undefined,
    jobArn: __expectString(output.jobArn),
    jobName: __expectString(output.jobName),
    startedAt: output.startedAt != null ? __expectNonNull(__parseRfc3339DateTime(output.startedAt)) : undefined,
    status: __expectString(output.status),
    tags: output.tags != null ? deserializeAws_restJson1TagsMap(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1JobSummaryList = (output: any, context: __SerdeContext): JobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JobSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1QuantumTaskSummary = (output: any, context: __SerdeContext): QuantumTaskSummary => {
  return {
    createdAt: output.createdAt != null ? __expectNonNull(__parseRfc3339DateTime(output.createdAt)) : undefined,
    deviceArn: __expectString(output.deviceArn),
    endedAt: output.endedAt != null ? __expectNonNull(__parseRfc3339DateTime(output.endedAt)) : undefined,
    outputS3Bucket: __expectString(output.outputS3Bucket),
    outputS3Directory: __expectString(output.outputS3Directory),
    quantumTaskArn: __expectString(output.quantumTaskArn),
    shots: __expectLong(output.shots),
    status: __expectString(output.status),
    tags: output.tags != null ? deserializeAws_restJson1TagsMap(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1QuantumTaskSummaryList = (output: any, context: __SerdeContext): QuantumTaskSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1QuantumTaskSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1S3DataSource = (output: any, context: __SerdeContext): S3DataSource => {
  return {
    s3Uri: __expectString(output.s3Uri),
  } as any;
};

const deserializeAws_restJson1ScriptModeConfig = (output: any, context: __SerdeContext): ScriptModeConfig => {
  return {
    compressionType: __expectString(output.compressionType),
    entryPoint: __expectString(output.entryPoint),
    s3Uri: __expectString(output.s3Uri),
  } as any;
};

const deserializeAws_restJson1TagsMap = (output: any, context: __SerdeContext): Record<string, string> => {
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
