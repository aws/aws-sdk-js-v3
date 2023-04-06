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
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
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

/**
 * serializeAws_restJson1CancelJobCommand
 */
export const se_CancelJobCommand = async (
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

/**
 * serializeAws_restJson1CancelQuantumTaskCommand
 */
export const se_CancelQuantumTaskCommand = async (
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

/**
 * serializeAws_restJson1CreateJobCommand
 */
export const se_CreateJobCommand = async (
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
      algorithmSpecification: se_AlgorithmSpecification(input.algorithmSpecification, context),
    }),
    ...(input.checkpointConfig != null && {
      checkpointConfig: se_JobCheckpointConfig(input.checkpointConfig, context),
    }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.deviceConfig != null && { deviceConfig: se_DeviceConfig(input.deviceConfig, context) }),
    ...(input.hyperParameters != null && { hyperParameters: se_HyperParameters(input.hyperParameters, context) }),
    ...(input.inputDataConfig != null && { inputDataConfig: se_InputConfigList(input.inputDataConfig, context) }),
    ...(input.instanceConfig != null && { instanceConfig: se_InstanceConfig(input.instanceConfig, context) }),
    ...(input.jobName != null && { jobName: input.jobName }),
    ...(input.outputDataConfig != null && {
      outputDataConfig: se_JobOutputDataConfig(input.outputDataConfig, context),
    }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.stoppingCondition != null && {
      stoppingCondition: se_JobStoppingCondition(input.stoppingCondition, context),
    }),
    ...(input.tags != null && { tags: se_TagsMap(input.tags, context) }),
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
 * serializeAws_restJson1CreateQuantumTaskCommand
 */
export const se_CreateQuantumTaskCommand = async (
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
    ...(input.tags != null && { tags: se_TagsMap(input.tags, context) }),
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
 * serializeAws_restJson1GetDeviceCommand
 */
export const se_GetDeviceCommand = async (
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

/**
 * serializeAws_restJson1GetJobCommand
 */
export const se_GetJobCommand = async (input: GetJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
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

/**
 * serializeAws_restJson1GetQuantumTaskCommand
 */
export const se_GetQuantumTaskCommand = async (
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

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
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

/**
 * serializeAws_restJson1SearchDevicesCommand
 */
export const se_SearchDevicesCommand = async (
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
    ...(input.filters != null && { filters: se_SearchDevicesFilterList(input.filters, context) }),
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

/**
 * serializeAws_restJson1SearchJobsCommand
 */
export const se_SearchJobsCommand = async (
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
    ...(input.filters != null && { filters: se_SearchJobsFilterList(input.filters, context) }),
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

/**
 * serializeAws_restJson1SearchQuantumTasksCommand
 */
export const se_SearchQuantumTasksCommand = async (
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
    ...(input.filters != null && { filters: se_SearchQuantumTasksFilterList(input.filters, context) }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.tags != null && { tags: se_TagsMap(input.tags, context) }),
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
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
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

/**
 * deserializeAws_restJson1CancelJobCommand
 */
export const de_CancelJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CancelJobCommandError(output, context);
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

/**
 * deserializeAws_restJson1CancelJobCommandError
 */
const de_CancelJobCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.braket#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.braket#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.braket#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.braket#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.braket#ValidationException":
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
 * deserializeAws_restJson1CancelQuantumTaskCommand
 */
export const de_CancelQuantumTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelQuantumTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CancelQuantumTaskCommandError(output, context);
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

/**
 * deserializeAws_restJson1CancelQuantumTaskCommandError
 */
const de_CancelQuantumTaskCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.braket#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.braket#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.braket#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.braket#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.braket#ValidationException":
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
 * deserializeAws_restJson1CreateJobCommand
 */
export const de_CreateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateJobCommandError(output, context);
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

/**
 * deserializeAws_restJson1CreateJobCommandError
 */
const de_CreateJobCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.braket#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "DeviceRetiredException":
    case "com.amazonaws.braket#DeviceRetiredException":
      throw await de_DeviceRetiredExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.braket#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.braket#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.braket#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.braket#ValidationException":
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
 * deserializeAws_restJson1CreateQuantumTaskCommand
 */
export const de_CreateQuantumTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQuantumTaskCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateQuantumTaskCommandError(output, context);
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

/**
 * deserializeAws_restJson1CreateQuantumTaskCommandError
 */
const de_CreateQuantumTaskCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DeviceOfflineException":
    case "com.amazonaws.braket#DeviceOfflineException":
      throw await de_DeviceOfflineExceptionRes(parsedOutput, context);
    case "DeviceRetiredException":
    case "com.amazonaws.braket#DeviceRetiredException":
      throw await de_DeviceRetiredExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.braket#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.braket#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.braket#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.braket#ValidationException":
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
 * deserializeAws_restJson1GetDeviceCommand
 */
export const de_GetDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDeviceCommandError(output, context);
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

/**
 * deserializeAws_restJson1GetDeviceCommandError
 */
const de_GetDeviceCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.braket#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.braket#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.braket#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.braket#ValidationException":
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
 * deserializeAws_restJson1GetJobCommand
 */
export const de_GetJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.algorithmSpecification != null) {
    contents.algorithmSpecification = de_AlgorithmSpecification(data.algorithmSpecification, context);
  }
  if (data.billableDuration != null) {
    contents.billableDuration = __expectInt32(data.billableDuration);
  }
  if (data.checkpointConfig != null) {
    contents.checkpointConfig = de_JobCheckpointConfig(data.checkpointConfig, context);
  }
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.createdAt));
  }
  if (data.deviceConfig != null) {
    contents.deviceConfig = de_DeviceConfig(data.deviceConfig, context);
  }
  if (data.endedAt != null) {
    contents.endedAt = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.endedAt));
  }
  if (data.events != null) {
    contents.events = de_JobEvents(data.events, context);
  }
  if (data.failureReason != null) {
    contents.failureReason = __expectString(data.failureReason);
  }
  if (data.hyperParameters != null) {
    contents.hyperParameters = de_HyperParameters(data.hyperParameters, context);
  }
  if (data.inputDataConfig != null) {
    contents.inputDataConfig = de_InputConfigList(data.inputDataConfig, context);
  }
  if (data.instanceConfig != null) {
    contents.instanceConfig = de_InstanceConfig(data.instanceConfig, context);
  }
  if (data.jobArn != null) {
    contents.jobArn = __expectString(data.jobArn);
  }
  if (data.jobName != null) {
    contents.jobName = __expectString(data.jobName);
  }
  if (data.outputDataConfig != null) {
    contents.outputDataConfig = de_JobOutputDataConfig(data.outputDataConfig, context);
  }
  if (data.roleArn != null) {
    contents.roleArn = __expectString(data.roleArn);
  }
  if (data.startedAt != null) {
    contents.startedAt = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.startedAt));
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.stoppingCondition != null) {
    contents.stoppingCondition = de_JobStoppingCondition(data.stoppingCondition, context);
  }
  if (data.tags != null) {
    contents.tags = de_TagsMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetJobCommandError
 */
const de_GetJobCommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<GetJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.braket#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.braket#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.braket#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.braket#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.braket#ValidationException":
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
 * deserializeAws_restJson1GetQuantumTaskCommand
 */
export const de_GetQuantumTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQuantumTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetQuantumTaskCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.createdAt));
  }
  if (data.deviceArn != null) {
    contents.deviceArn = __expectString(data.deviceArn);
  }
  if (data.deviceParameters != null) {
    contents.deviceParameters = new __LazyJsonString(data.deviceParameters);
  }
  if (data.endedAt != null) {
    contents.endedAt = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.endedAt));
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
    contents.tags = de_TagsMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetQuantumTaskCommandError
 */
const de_GetQuantumTaskCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.braket#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.braket#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.braket#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.braket#ValidationException":
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
  if (data.tags != null) {
    contents.tags = de_TagsMap(data.tags, context);
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
    case "InternalServiceException":
    case "com.amazonaws.braket#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.braket#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.braket#ValidationException":
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
 * deserializeAws_restJson1SearchDevicesCommand
 */
export const de_SearchDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchDevicesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SearchDevicesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.devices != null) {
    contents.devices = de_DeviceSummaryList(data.devices, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1SearchDevicesCommandError
 */
const de_SearchDevicesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.braket#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.braket#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.braket#ValidationException":
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
 * deserializeAws_restJson1SearchJobsCommand
 */
export const de_SearchJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SearchJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobs != null) {
    contents.jobs = de_JobSummaryList(data.jobs, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1SearchJobsCommandError
 */
const de_SearchJobsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.braket#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.braket#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.braket#ValidationException":
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
 * deserializeAws_restJson1SearchQuantumTasksCommand
 */
export const de_SearchQuantumTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchQuantumTasksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SearchQuantumTasksCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.quantumTasks != null) {
    contents.quantumTasks = de_QuantumTaskSummaryList(data.quantumTasks, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1SearchQuantumTasksCommandError
 */
const de_SearchQuantumTasksCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.braket#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.braket#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.braket#ValidationException":
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
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
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
    case "InternalServiceException":
    case "com.amazonaws.braket#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.braket#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.braket#ValidationException":
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
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
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
    case "InternalServiceException":
    case "com.amazonaws.braket#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.braket#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.braket#ValidationException":
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
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1DeviceOfflineExceptionRes
 */
const de_DeviceOfflineExceptionRes = async (
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

/**
 * deserializeAws_restJson1DeviceRetiredExceptionRes
 */
const de_DeviceRetiredExceptionRes = async (
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

/**
 * deserializeAws_restJson1InternalServiceExceptionRes
 */
const de_InternalServiceExceptionRes = async (
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
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
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

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
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

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
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

/**
 * serializeAws_restJson1AlgorithmSpecification
 */
const se_AlgorithmSpecification = (input: AlgorithmSpecification, context: __SerdeContext): any => {
  return {
    ...(input.containerImage != null && { containerImage: se_ContainerImage(input.containerImage, context) }),
    ...(input.scriptModeConfig != null && { scriptModeConfig: se_ScriptModeConfig(input.scriptModeConfig, context) }),
  };
};

/**
 * serializeAws_restJson1ContainerImage
 */
const se_ContainerImage = (input: ContainerImage, context: __SerdeContext): any => {
  return {
    ...(input.uri != null && { uri: input.uri }),
  };
};

/**
 * serializeAws_restJson1DataSource
 */
const se_DataSource = (input: DataSource, context: __SerdeContext): any => {
  return {
    ...(input.s3DataSource != null && { s3DataSource: se_S3DataSource(input.s3DataSource, context) }),
  };
};

/**
 * serializeAws_restJson1DeviceConfig
 */
const se_DeviceConfig = (input: DeviceConfig, context: __SerdeContext): any => {
  return {
    ...(input.device != null && { device: input.device }),
  };
};

/**
 * serializeAws_restJson1HyperParameters
 */
const se_HyperParameters = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1InputConfigList
 */
const se_InputConfigList = (input: InputFileConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_InputFileConfig(entry, context);
    });
};

/**
 * serializeAws_restJson1InputFileConfig
 */
const se_InputFileConfig = (input: InputFileConfig, context: __SerdeContext): any => {
  return {
    ...(input.channelName != null && { channelName: input.channelName }),
    ...(input.contentType != null && { contentType: input.contentType }),
    ...(input.dataSource != null && { dataSource: se_DataSource(input.dataSource, context) }),
  };
};

/**
 * serializeAws_restJson1InstanceConfig
 */
const se_InstanceConfig = (input: InstanceConfig, context: __SerdeContext): any => {
  return {
    ...(input.instanceCount != null && { instanceCount: input.instanceCount }),
    ...(input.instanceType != null && { instanceType: input.instanceType }),
    ...(input.volumeSizeInGb != null && { volumeSizeInGb: input.volumeSizeInGb }),
  };
};

/**
 * serializeAws_restJson1JobCheckpointConfig
 */
const se_JobCheckpointConfig = (input: JobCheckpointConfig, context: __SerdeContext): any => {
  return {
    ...(input.localPath != null && { localPath: input.localPath }),
    ...(input.s3Uri != null && { s3Uri: input.s3Uri }),
  };
};

/**
 * serializeAws_restJson1JobOutputDataConfig
 */
const se_JobOutputDataConfig = (input: JobOutputDataConfig, context: __SerdeContext): any => {
  return {
    ...(input.kmsKeyId != null && { kmsKeyId: input.kmsKeyId }),
    ...(input.s3Path != null && { s3Path: input.s3Path }),
  };
};

/**
 * serializeAws_restJson1JobStoppingCondition
 */
const se_JobStoppingCondition = (input: JobStoppingCondition, context: __SerdeContext): any => {
  return {
    ...(input.maxRuntimeInSeconds != null && { maxRuntimeInSeconds: input.maxRuntimeInSeconds }),
  };
};

/**
 * serializeAws_restJson1S3DataSource
 */
const se_S3DataSource = (input: S3DataSource, context: __SerdeContext): any => {
  return {
    ...(input.s3Uri != null && { s3Uri: input.s3Uri }),
  };
};

/**
 * serializeAws_restJson1ScriptModeConfig
 */
const se_ScriptModeConfig = (input: ScriptModeConfig, context: __SerdeContext): any => {
  return {
    ...(input.compressionType != null && { compressionType: input.compressionType }),
    ...(input.entryPoint != null && { entryPoint: input.entryPoint }),
    ...(input.s3Uri != null && { s3Uri: input.s3Uri }),
  };
};

/**
 * serializeAws_restJson1SearchDevicesFilter
 */
const se_SearchDevicesFilter = (input: SearchDevicesFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.values != null && { values: se_String256List(input.values, context) }),
  };
};

/**
 * serializeAws_restJson1SearchDevicesFilterList
 */
const se_SearchDevicesFilterList = (input: SearchDevicesFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SearchDevicesFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1SearchJobsFilter
 */
const se_SearchJobsFilter = (input: SearchJobsFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.operator != null && { operator: input.operator }),
    ...(input.values != null && { values: se_String256List(input.values, context) }),
  };
};

/**
 * serializeAws_restJson1SearchJobsFilterList
 */
const se_SearchJobsFilterList = (input: SearchJobsFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SearchJobsFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1SearchQuantumTasksFilter
 */
const se_SearchQuantumTasksFilter = (input: SearchQuantumTasksFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.operator != null && { operator: input.operator }),
    ...(input.values != null && { values: se_String256List(input.values, context) }),
  };
};

/**
 * serializeAws_restJson1SearchQuantumTasksFilterList
 */
const se_SearchQuantumTasksFilterList = (input: SearchQuantumTasksFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SearchQuantumTasksFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1String256List
 */
const se_String256List = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1TagsMap
 */
const se_TagsMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1AlgorithmSpecification
 */
const de_AlgorithmSpecification = (output: any, context: __SerdeContext): AlgorithmSpecification => {
  return {
    containerImage: output.containerImage != null ? de_ContainerImage(output.containerImage, context) : undefined,
    scriptModeConfig:
      output.scriptModeConfig != null ? de_ScriptModeConfig(output.scriptModeConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ContainerImage
 */
const de_ContainerImage = (output: any, context: __SerdeContext): ContainerImage => {
  return {
    uri: __expectString(output.uri),
  } as any;
};

/**
 * deserializeAws_restJson1DataSource
 */
const de_DataSource = (output: any, context: __SerdeContext): DataSource => {
  return {
    s3DataSource: output.s3DataSource != null ? de_S3DataSource(output.s3DataSource, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DeviceConfig
 */
const de_DeviceConfig = (output: any, context: __SerdeContext): DeviceConfig => {
  return {
    device: __expectString(output.device),
  } as any;
};

/**
 * deserializeAws_restJson1DeviceSummary
 */
const de_DeviceSummary = (output: any, context: __SerdeContext): DeviceSummary => {
  return {
    deviceArn: __expectString(output.deviceArn),
    deviceName: __expectString(output.deviceName),
    deviceStatus: __expectString(output.deviceStatus),
    deviceType: __expectString(output.deviceType),
    providerName: __expectString(output.providerName),
  } as any;
};

/**
 * deserializeAws_restJson1DeviceSummaryList
 */
const de_DeviceSummaryList = (output: any, context: __SerdeContext): DeviceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DeviceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1HyperParameters
 */
const de_HyperParameters = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1InputConfigList
 */
const de_InputConfigList = (output: any, context: __SerdeContext): InputFileConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InputFileConfig(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1InputFileConfig
 */
const de_InputFileConfig = (output: any, context: __SerdeContext): InputFileConfig => {
  return {
    channelName: __expectString(output.channelName),
    contentType: __expectString(output.contentType),
    dataSource: output.dataSource != null ? de_DataSource(output.dataSource, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1InstanceConfig
 */
const de_InstanceConfig = (output: any, context: __SerdeContext): InstanceConfig => {
  return {
    instanceCount: __expectInt32(output.instanceCount),
    instanceType: __expectString(output.instanceType),
    volumeSizeInGb: __expectInt32(output.volumeSizeInGb),
  } as any;
};

/**
 * deserializeAws_restJson1JobCheckpointConfig
 */
const de_JobCheckpointConfig = (output: any, context: __SerdeContext): JobCheckpointConfig => {
  return {
    localPath: __expectString(output.localPath),
    s3Uri: __expectString(output.s3Uri),
  } as any;
};

/**
 * deserializeAws_restJson1JobEventDetails
 */
const de_JobEventDetails = (output: any, context: __SerdeContext): JobEventDetails => {
  return {
    eventType: __expectString(output.eventType),
    message: __expectString(output.message),
    timeOfEvent:
      output.timeOfEvent != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.timeOfEvent)) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1JobEvents
 */
const de_JobEvents = (output: any, context: __SerdeContext): JobEventDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_JobEventDetails(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1JobOutputDataConfig
 */
const de_JobOutputDataConfig = (output: any, context: __SerdeContext): JobOutputDataConfig => {
  return {
    kmsKeyId: __expectString(output.kmsKeyId),
    s3Path: __expectString(output.s3Path),
  } as any;
};

/**
 * deserializeAws_restJson1JobStoppingCondition
 */
const de_JobStoppingCondition = (output: any, context: __SerdeContext): JobStoppingCondition => {
  return {
    maxRuntimeInSeconds: __expectInt32(output.maxRuntimeInSeconds),
  } as any;
};

/**
 * deserializeAws_restJson1JobSummary
 */
const de_JobSummary = (output: any, context: __SerdeContext): JobSummary => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    device: __expectString(output.device),
    endedAt: output.endedAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.endedAt)) : undefined,
    jobArn: __expectString(output.jobArn),
    jobName: __expectString(output.jobName),
    startedAt:
      output.startedAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.startedAt)) : undefined,
    status: __expectString(output.status),
    tags: output.tags != null ? de_TagsMap(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1JobSummaryList
 */
const de_JobSummaryList = (output: any, context: __SerdeContext): JobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_JobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1QuantumTaskSummary
 */
const de_QuantumTaskSummary = (output: any, context: __SerdeContext): QuantumTaskSummary => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    deviceArn: __expectString(output.deviceArn),
    endedAt: output.endedAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.endedAt)) : undefined,
    outputS3Bucket: __expectString(output.outputS3Bucket),
    outputS3Directory: __expectString(output.outputS3Directory),
    quantumTaskArn: __expectString(output.quantumTaskArn),
    shots: __expectLong(output.shots),
    status: __expectString(output.status),
    tags: output.tags != null ? de_TagsMap(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1QuantumTaskSummaryList
 */
const de_QuantumTaskSummaryList = (output: any, context: __SerdeContext): QuantumTaskSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_QuantumTaskSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1S3DataSource
 */
const de_S3DataSource = (output: any, context: __SerdeContext): S3DataSource => {
  return {
    s3Uri: __expectString(output.s3Uri),
  } as any;
};

/**
 * deserializeAws_restJson1ScriptModeConfig
 */
const de_ScriptModeConfig = (output: any, context: __SerdeContext): ScriptModeConfig => {
  return {
    compressionType: __expectString(output.compressionType),
    entryPoint: __expectString(output.entryPoint),
    s3Uri: __expectString(output.s3Uri),
  } as any;
};

/**
 * deserializeAws_restJson1TagsMap
 */
const de_TagsMap = (output: any, context: __SerdeContext): Record<string, string> => {
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
