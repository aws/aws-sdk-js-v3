// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  LazyJsonString as __LazyJsonString,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
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
  body = JSON.stringify(
    take(input, {
      algorithmSpecification: (_) => _json(_),
      checkpointConfig: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      deviceConfig: (_) => _json(_),
      hyperParameters: (_) => _json(_),
      inputDataConfig: (_) => _json(_),
      instanceConfig: (_) => _json(_),
      jobName: [],
      outputDataConfig: (_) => _json(_),
      roleArn: [],
      stoppingCondition: (_) => _json(_),
      tags: (_) => _json(_),
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
  body = JSON.stringify(
    take(input, {
      action: (_) => __LazyJsonString.fromObject(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      deviceArn: [],
      deviceParameters: (_) => __LazyJsonString.fromObject(_),
      jobToken: [],
      outputS3Bucket: [],
      outputS3KeyPrefix: [],
      shots: [],
      tags: (_) => _json(_),
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
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
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
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
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
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
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
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
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
  const doc = take(data, {
    cancellationStatus: __expectString,
    jobArn: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    cancellationStatus: __expectString,
    quantumTaskArn: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    jobArn: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    quantumTaskArn: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    deviceArn: __expectString,
    deviceCapabilities: (_) => new __LazyJsonString(_),
    deviceName: __expectString,
    deviceStatus: __expectString,
    deviceType: __expectString,
    providerName: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    algorithmSpecification: _json,
    billableDuration: __expectInt32,
    checkpointConfig: _json,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    deviceConfig: _json,
    endedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    events: (_) => de_JobEvents(_, context),
    failureReason: __expectString,
    hyperParameters: _json,
    inputDataConfig: _json,
    instanceConfig: _json,
    jobArn: __expectString,
    jobName: __expectString,
    outputDataConfig: _json,
    roleArn: __expectString,
    startedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    status: __expectString,
    stoppingCondition: _json,
    tags: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    deviceArn: __expectString,
    deviceParameters: (_) => new __LazyJsonString(_),
    endedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    failureReason: __expectString,
    jobArn: __expectString,
    outputS3Bucket: __expectString,
    outputS3Directory: __expectString,
    quantumTaskArn: __expectString,
    shots: __expectLong,
    status: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    tags: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    devices: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    jobs: (_) => de_JobSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    nextToken: __expectString,
    quantumTasks: (_) => de_QuantumTaskSummaryList(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
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
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AlgorithmSpecification omitted.

// se_ContainerImage omitted.

// se_DataSource omitted.

// se_DeviceConfig omitted.

// se_HyperParameters omitted.

// se_InputConfigList omitted.

// se_InputFileConfig omitted.

// se_InstanceConfig omitted.

// se_JobCheckpointConfig omitted.

// se_JobOutputDataConfig omitted.

// se_JobStoppingCondition omitted.

// se_S3DataSource omitted.

// se_ScriptModeConfig omitted.

// se_SearchDevicesFilter omitted.

// se_SearchDevicesFilterList omitted.

// se_SearchJobsFilter omitted.

// se_SearchJobsFilterList omitted.

// se_SearchQuantumTasksFilter omitted.

// se_SearchQuantumTasksFilterList omitted.

// se_String256List omitted.

// se_TagsMap omitted.

// de_AlgorithmSpecification omitted.

// de_ContainerImage omitted.

// de_DataSource omitted.

// de_DeviceConfig omitted.

// de_DeviceSummary omitted.

// de_DeviceSummaryList omitted.

// de_HyperParameters omitted.

// de_InputConfigList omitted.

// de_InputFileConfig omitted.

// de_InstanceConfig omitted.

// de_JobCheckpointConfig omitted.

/**
 * deserializeAws_restJson1JobEventDetails
 */
const de_JobEventDetails = (output: any, context: __SerdeContext): JobEventDetails => {
  return take(output, {
    eventType: __expectString,
    message: __expectString,
    timeOfEvent: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1JobEvents
 */
const de_JobEvents = (output: any, context: __SerdeContext): JobEventDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_JobEventDetails(entry, context);
    });
  return retVal;
};

// de_JobOutputDataConfig omitted.

// de_JobStoppingCondition omitted.

/**
 * deserializeAws_restJson1JobSummary
 */
const de_JobSummary = (output: any, context: __SerdeContext): JobSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    device: __expectString,
    endedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    jobArn: __expectString,
    jobName: __expectString,
    startedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    status: __expectString,
    tags: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1JobSummaryList
 */
const de_JobSummaryList = (output: any, context: __SerdeContext): JobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_JobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1QuantumTaskSummary
 */
const de_QuantumTaskSummary = (output: any, context: __SerdeContext): QuantumTaskSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    deviceArn: __expectString,
    endedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    outputS3Bucket: __expectString,
    outputS3Directory: __expectString,
    quantumTaskArn: __expectString,
    shots: __expectLong,
    status: __expectString,
    tags: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1QuantumTaskSummaryList
 */
const de_QuantumTaskSummaryList = (output: any, context: __SerdeContext): QuantumTaskSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_QuantumTaskSummary(entry, context);
    });
  return retVal;
};

// de_S3DataSource omitted.

// de_ScriptModeConfig omitted.

// de_TagsMap omitted.

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
