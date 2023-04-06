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

import {
  CreateSuiteDefinitionCommandInput,
  CreateSuiteDefinitionCommandOutput,
} from "../commands/CreateSuiteDefinitionCommand";
import {
  DeleteSuiteDefinitionCommandInput,
  DeleteSuiteDefinitionCommandOutput,
} from "../commands/DeleteSuiteDefinitionCommand";
import { GetEndpointCommandInput, GetEndpointCommandOutput } from "../commands/GetEndpointCommand";
import { GetSuiteDefinitionCommandInput, GetSuiteDefinitionCommandOutput } from "../commands/GetSuiteDefinitionCommand";
import { GetSuiteRunCommandInput, GetSuiteRunCommandOutput } from "../commands/GetSuiteRunCommand";
import { GetSuiteRunReportCommandInput, GetSuiteRunReportCommandOutput } from "../commands/GetSuiteRunReportCommand";
import {
  ListSuiteDefinitionsCommandInput,
  ListSuiteDefinitionsCommandOutput,
} from "../commands/ListSuiteDefinitionsCommand";
import { ListSuiteRunsCommandInput, ListSuiteRunsCommandOutput } from "../commands/ListSuiteRunsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { StartSuiteRunCommandInput, StartSuiteRunCommandOutput } from "../commands/StartSuiteRunCommand";
import { StopSuiteRunCommandInput, StopSuiteRunCommandOutput } from "../commands/StopSuiteRunCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateSuiteDefinitionCommandInput,
  UpdateSuiteDefinitionCommandOutput,
} from "../commands/UpdateSuiteDefinitionCommand";
import { IotDeviceAdvisorServiceException as __BaseException } from "../models/IotDeviceAdvisorServiceException";
import {
  ConflictException,
  DeviceUnderTest,
  GroupResult,
  InternalServerException,
  ResourceNotFoundException,
  SuiteDefinitionConfiguration,
  SuiteDefinitionInformation,
  SuiteRunConfiguration,
  SuiteRunInformation,
  TestCaseRun,
  TestCaseScenario,
  TestResult,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateSuiteDefinitionCommand
 */
export const se_CreateSuiteDefinitionCommand = async (
  input: CreateSuiteDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/suiteDefinitions";
  let body: any;
  body = JSON.stringify({
    ...(input.suiteDefinitionConfiguration != null && {
      suiteDefinitionConfiguration: se_SuiteDefinitionConfiguration(input.suiteDefinitionConfiguration, context),
    }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
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
 * serializeAws_restJson1DeleteSuiteDefinitionCommand
 */
export const se_DeleteSuiteDefinitionCommand = async (
  input: DeleteSuiteDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/suiteDefinitions/{suiteDefinitionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "suiteDefinitionId",
    () => input.suiteDefinitionId!,
    "{suiteDefinitionId}",
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
 * serializeAws_restJson1GetEndpointCommand
 */
export const se_GetEndpointCommand = async (
  input: GetEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/endpoint";
  const query: any = map({
    thingArn: [, input.thingArn!],
    certificateArn: [, input.certificateArn!],
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
 * serializeAws_restJson1GetSuiteDefinitionCommand
 */
export const se_GetSuiteDefinitionCommand = async (
  input: GetSuiteDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/suiteDefinitions/{suiteDefinitionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "suiteDefinitionId",
    () => input.suiteDefinitionId!,
    "{suiteDefinitionId}",
    false
  );
  const query: any = map({
    suiteDefinitionVersion: [, input.suiteDefinitionVersion!],
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
 * serializeAws_restJson1GetSuiteRunCommand
 */
export const se_GetSuiteRunCommand = async (
  input: GetSuiteRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "suiteDefinitionId",
    () => input.suiteDefinitionId!,
    "{suiteDefinitionId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "suiteRunId", () => input.suiteRunId!, "{suiteRunId}", false);
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
 * serializeAws_restJson1GetSuiteRunReportCommand
 */
export const se_GetSuiteRunReportCommand = async (
  input: GetSuiteRunReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}/report";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "suiteDefinitionId",
    () => input.suiteDefinitionId!,
    "{suiteDefinitionId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "suiteRunId", () => input.suiteRunId!, "{suiteRunId}", false);
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
 * serializeAws_restJson1ListSuiteDefinitionsCommand
 */
export const se_ListSuiteDefinitionsCommand = async (
  input: ListSuiteDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/suiteDefinitions";
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
 * serializeAws_restJson1ListSuiteRunsCommand
 */
export const se_ListSuiteRunsCommand = async (
  input: ListSuiteRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/suiteRuns";
  const query: any = map({
    suiteDefinitionId: [, input.suiteDefinitionId!],
    suiteDefinitionVersion: [, input.suiteDefinitionVersion!],
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
 * serializeAws_restJson1StartSuiteRunCommand
 */
export const se_StartSuiteRunCommand = async (
  input: StartSuiteRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/suiteDefinitions/{suiteDefinitionId}/suiteRuns";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "suiteDefinitionId",
    () => input.suiteDefinitionId!,
    "{suiteDefinitionId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.suiteDefinitionVersion != null && { suiteDefinitionVersion: input.suiteDefinitionVersion }),
    ...(input.suiteRunConfiguration != null && {
      suiteRunConfiguration: se_SuiteRunConfiguration(input.suiteRunConfiguration, context),
    }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
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
 * serializeAws_restJson1StopSuiteRunCommand
 */
export const se_StopSuiteRunCommand = async (
  input: StopSuiteRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}/stop";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "suiteDefinitionId",
    () => input.suiteDefinitionId!,
    "{suiteDefinitionId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "suiteRunId", () => input.suiteRunId!, "{suiteRunId}", false);
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
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
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
 * serializeAws_restJson1UpdateSuiteDefinitionCommand
 */
export const se_UpdateSuiteDefinitionCommand = async (
  input: UpdateSuiteDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/suiteDefinitions/{suiteDefinitionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "suiteDefinitionId",
    () => input.suiteDefinitionId!,
    "{suiteDefinitionId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.suiteDefinitionConfiguration != null && {
      suiteDefinitionConfiguration: se_SuiteDefinitionConfiguration(input.suiteDefinitionConfiguration, context),
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

/**
 * deserializeAws_restJson1CreateSuiteDefinitionCommand
 */
export const de_CreateSuiteDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSuiteDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateSuiteDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdAt)));
  }
  if (data.suiteDefinitionArn != null) {
    contents.suiteDefinitionArn = __expectString(data.suiteDefinitionArn);
  }
  if (data.suiteDefinitionId != null) {
    contents.suiteDefinitionId = __expectString(data.suiteDefinitionId);
  }
  if (data.suiteDefinitionName != null) {
    contents.suiteDefinitionName = __expectString(data.suiteDefinitionName);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateSuiteDefinitionCommandError
 */
const de_CreateSuiteDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSuiteDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.iotdeviceadvisor#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotdeviceadvisor#ValidationException":
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
 * deserializeAws_restJson1DeleteSuiteDefinitionCommand
 */
export const de_DeleteSuiteDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSuiteDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteSuiteDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSuiteDefinitionCommandError
 */
const de_DeleteSuiteDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSuiteDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.iotdeviceadvisor#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotdeviceadvisor#ValidationException":
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
 * deserializeAws_restJson1GetEndpointCommand
 */
export const de_GetEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetEndpointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.endpoint != null) {
    contents.endpoint = __expectString(data.endpoint);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetEndpointCommandError
 */
const de_GetEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.iotdeviceadvisor#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotdeviceadvisor#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotdeviceadvisor#ValidationException":
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
 * deserializeAws_restJson1GetSuiteDefinitionCommand
 */
export const de_GetSuiteDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSuiteDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSuiteDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdAt)));
  }
  if (data.lastModifiedAt != null) {
    contents.lastModifiedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastModifiedAt)));
  }
  if (data.latestVersion != null) {
    contents.latestVersion = __expectString(data.latestVersion);
  }
  if (data.suiteDefinitionArn != null) {
    contents.suiteDefinitionArn = __expectString(data.suiteDefinitionArn);
  }
  if (data.suiteDefinitionConfiguration != null) {
    contents.suiteDefinitionConfiguration = de_SuiteDefinitionConfiguration(data.suiteDefinitionConfiguration, context);
  }
  if (data.suiteDefinitionId != null) {
    contents.suiteDefinitionId = __expectString(data.suiteDefinitionId);
  }
  if (data.suiteDefinitionVersion != null) {
    contents.suiteDefinitionVersion = __expectString(data.suiteDefinitionVersion);
  }
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetSuiteDefinitionCommandError
 */
const de_GetSuiteDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSuiteDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.iotdeviceadvisor#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotdeviceadvisor#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotdeviceadvisor#ValidationException":
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
 * deserializeAws_restJson1GetSuiteRunCommand
 */
export const de_GetSuiteRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSuiteRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSuiteRunCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.endTime != null) {
    contents.endTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.endTime)));
  }
  if (data.errorReason != null) {
    contents.errorReason = __expectString(data.errorReason);
  }
  if (data.startTime != null) {
    contents.startTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.startTime)));
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.suiteDefinitionId != null) {
    contents.suiteDefinitionId = __expectString(data.suiteDefinitionId);
  }
  if (data.suiteDefinitionVersion != null) {
    contents.suiteDefinitionVersion = __expectString(data.suiteDefinitionVersion);
  }
  if (data.suiteRunArn != null) {
    contents.suiteRunArn = __expectString(data.suiteRunArn);
  }
  if (data.suiteRunConfiguration != null) {
    contents.suiteRunConfiguration = de_SuiteRunConfiguration(data.suiteRunConfiguration, context);
  }
  if (data.suiteRunId != null) {
    contents.suiteRunId = __expectString(data.suiteRunId);
  }
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  if (data.testResult != null) {
    contents.testResult = de_TestResult(data.testResult, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetSuiteRunCommandError
 */
const de_GetSuiteRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSuiteRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.iotdeviceadvisor#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotdeviceadvisor#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotdeviceadvisor#ValidationException":
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
 * deserializeAws_restJson1GetSuiteRunReportCommand
 */
export const de_GetSuiteRunReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSuiteRunReportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSuiteRunReportCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.qualificationReportDownloadUrl != null) {
    contents.qualificationReportDownloadUrl = __expectString(data.qualificationReportDownloadUrl);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetSuiteRunReportCommandError
 */
const de_GetSuiteRunReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSuiteRunReportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.iotdeviceadvisor#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotdeviceadvisor#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotdeviceadvisor#ValidationException":
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
 * deserializeAws_restJson1ListSuiteDefinitionsCommand
 */
export const de_ListSuiteDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSuiteDefinitionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSuiteDefinitionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.suiteDefinitionInformationList != null) {
    contents.suiteDefinitionInformationList = de_SuiteDefinitionInformationList(
      data.suiteDefinitionInformationList,
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListSuiteDefinitionsCommandError
 */
const de_ListSuiteDefinitionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSuiteDefinitionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.iotdeviceadvisor#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotdeviceadvisor#ValidationException":
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
 * deserializeAws_restJson1ListSuiteRunsCommand
 */
export const de_ListSuiteRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSuiteRunsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSuiteRunsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.suiteRunsList != null) {
    contents.suiteRunsList = de_SuiteRunsList(data.suiteRunsList, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListSuiteRunsCommandError
 */
const de_ListSuiteRunsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSuiteRunsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.iotdeviceadvisor#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotdeviceadvisor#ValidationException":
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
    contents.tags = de_TagMap(data.tags, context);
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
    case "InternalServerException":
    case "com.amazonaws.iotdeviceadvisor#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotdeviceadvisor#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotdeviceadvisor#ValidationException":
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
 * deserializeAws_restJson1StartSuiteRunCommand
 */
export const de_StartSuiteRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSuiteRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartSuiteRunCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdAt)));
  }
  if (data.endpoint != null) {
    contents.endpoint = __expectString(data.endpoint);
  }
  if (data.suiteRunArn != null) {
    contents.suiteRunArn = __expectString(data.suiteRunArn);
  }
  if (data.suiteRunId != null) {
    contents.suiteRunId = __expectString(data.suiteRunId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartSuiteRunCommandError
 */
const de_StartSuiteRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSuiteRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.iotdeviceadvisor#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotdeviceadvisor#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotdeviceadvisor#ValidationException":
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
 * deserializeAws_restJson1StopSuiteRunCommand
 */
export const de_StopSuiteRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopSuiteRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StopSuiteRunCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StopSuiteRunCommandError
 */
const de_StopSuiteRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopSuiteRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.iotdeviceadvisor#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotdeviceadvisor#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotdeviceadvisor#ValidationException":
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
    case "InternalServerException":
    case "com.amazonaws.iotdeviceadvisor#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotdeviceadvisor#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotdeviceadvisor#ValidationException":
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
    case "InternalServerException":
    case "com.amazonaws.iotdeviceadvisor#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotdeviceadvisor#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotdeviceadvisor#ValidationException":
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
 * deserializeAws_restJson1UpdateSuiteDefinitionCommand
 */
export const de_UpdateSuiteDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSuiteDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateSuiteDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdAt)));
  }
  if (data.lastUpdatedAt != null) {
    contents.lastUpdatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedAt)));
  }
  if (data.suiteDefinitionArn != null) {
    contents.suiteDefinitionArn = __expectString(data.suiteDefinitionArn);
  }
  if (data.suiteDefinitionId != null) {
    contents.suiteDefinitionId = __expectString(data.suiteDefinitionId);
  }
  if (data.suiteDefinitionName != null) {
    contents.suiteDefinitionName = __expectString(data.suiteDefinitionName);
  }
  if (data.suiteDefinitionVersion != null) {
    contents.suiteDefinitionVersion = __expectString(data.suiteDefinitionVersion);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSuiteDefinitionCommandError
 */
const de_UpdateSuiteDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSuiteDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.iotdeviceadvisor#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotdeviceadvisor#ValidationException":
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
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
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
 * serializeAws_restJson1DeviceUnderTest
 */
const se_DeviceUnderTest = (input: DeviceUnderTest, context: __SerdeContext): any => {
  return {
    ...(input.certificateArn != null && { certificateArn: input.certificateArn }),
    ...(input.thingArn != null && { thingArn: input.thingArn }),
  };
};

/**
 * serializeAws_restJson1DeviceUnderTestList
 */
const se_DeviceUnderTestList = (input: DeviceUnderTest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DeviceUnderTest(entry, context);
    });
};

/**
 * serializeAws_restJson1SelectedTestList
 */
const se_SelectedTestList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SuiteDefinitionConfiguration
 */
const se_SuiteDefinitionConfiguration = (input: SuiteDefinitionConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.devicePermissionRoleArn != null && { devicePermissionRoleArn: input.devicePermissionRoleArn }),
    ...(input.devices != null && { devices: se_DeviceUnderTestList(input.devices, context) }),
    ...(input.intendedForQualification != null && { intendedForQualification: input.intendedForQualification }),
    ...(input.isLongDurationTest != null && { isLongDurationTest: input.isLongDurationTest }),
    ...(input.protocol != null && { protocol: input.protocol }),
    ...(input.rootGroup != null && { rootGroup: input.rootGroup }),
    ...(input.suiteDefinitionName != null && { suiteDefinitionName: input.suiteDefinitionName }),
  };
};

/**
 * serializeAws_restJson1SuiteRunConfiguration
 */
const se_SuiteRunConfiguration = (input: SuiteRunConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.parallelRun != null && { parallelRun: input.parallelRun }),
    ...(input.primaryDevice != null && { primaryDevice: se_DeviceUnderTest(input.primaryDevice, context) }),
    ...(input.selectedTestList != null && { selectedTestList: se_SelectedTestList(input.selectedTestList, context) }),
  };
};

/**
 * serializeAws_restJson1TagMap
 */
const se_TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1DeviceUnderTest
 */
const de_DeviceUnderTest = (output: any, context: __SerdeContext): DeviceUnderTest => {
  return {
    certificateArn: __expectString(output.certificateArn),
    thingArn: __expectString(output.thingArn),
  } as any;
};

/**
 * deserializeAws_restJson1DeviceUnderTestList
 */
const de_DeviceUnderTestList = (output: any, context: __SerdeContext): DeviceUnderTest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DeviceUnderTest(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1GroupResult
 */
const de_GroupResult = (output: any, context: __SerdeContext): GroupResult => {
  return {
    groupId: __expectString(output.groupId),
    groupName: __expectString(output.groupName),
    tests: output.tests != null ? de_TestCaseRuns(output.tests, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1GroupResultList
 */
const de_GroupResultList = (output: any, context: __SerdeContext): GroupResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GroupResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SelectedTestList
 */
const de_SelectedTestList = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_restJson1SuiteDefinitionConfiguration
 */
const de_SuiteDefinitionConfiguration = (output: any, context: __SerdeContext): SuiteDefinitionConfiguration => {
  return {
    devicePermissionRoleArn: __expectString(output.devicePermissionRoleArn),
    devices: output.devices != null ? de_DeviceUnderTestList(output.devices, context) : undefined,
    intendedForQualification: __expectBoolean(output.intendedForQualification),
    isLongDurationTest: __expectBoolean(output.isLongDurationTest),
    protocol: __expectString(output.protocol),
    rootGroup: __expectString(output.rootGroup),
    suiteDefinitionName: __expectString(output.suiteDefinitionName),
  } as any;
};

/**
 * deserializeAws_restJson1SuiteDefinitionInformation
 */
const de_SuiteDefinitionInformation = (output: any, context: __SerdeContext): SuiteDefinitionInformation => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    defaultDevices: output.defaultDevices != null ? de_DeviceUnderTestList(output.defaultDevices, context) : undefined,
    intendedForQualification: __expectBoolean(output.intendedForQualification),
    isLongDurationTest: __expectBoolean(output.isLongDurationTest),
    protocol: __expectString(output.protocol),
    suiteDefinitionId: __expectString(output.suiteDefinitionId),
    suiteDefinitionName: __expectString(output.suiteDefinitionName),
  } as any;
};

/**
 * deserializeAws_restJson1SuiteDefinitionInformationList
 */
const de_SuiteDefinitionInformationList = (output: any, context: __SerdeContext): SuiteDefinitionInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SuiteDefinitionInformation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SuiteRunConfiguration
 */
const de_SuiteRunConfiguration = (output: any, context: __SerdeContext): SuiteRunConfiguration => {
  return {
    parallelRun: __expectBoolean(output.parallelRun),
    primaryDevice: output.primaryDevice != null ? de_DeviceUnderTest(output.primaryDevice, context) : undefined,
    selectedTestList:
      output.selectedTestList != null ? de_SelectedTestList(output.selectedTestList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SuiteRunInformation
 */
const de_SuiteRunInformation = (output: any, context: __SerdeContext): SuiteRunInformation => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    endAt: output.endAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endAt))) : undefined,
    failed: __expectInt32(output.failed),
    passed: __expectInt32(output.passed),
    startedAt:
      output.startedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startedAt))) : undefined,
    status: __expectString(output.status),
    suiteDefinitionId: __expectString(output.suiteDefinitionId),
    suiteDefinitionName: __expectString(output.suiteDefinitionName),
    suiteDefinitionVersion: __expectString(output.suiteDefinitionVersion),
    suiteRunId: __expectString(output.suiteRunId),
  } as any;
};

/**
 * deserializeAws_restJson1SuiteRunsList
 */
const de_SuiteRunsList = (output: any, context: __SerdeContext): SuiteRunInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SuiteRunInformation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TagMap
 */
const de_TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1TestCaseRun
 */
const de_TestCaseRun = (output: any, context: __SerdeContext): TestCaseRun => {
  return {
    endTime:
      output.endTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endTime))) : undefined,
    failure: __expectString(output.failure),
    logUrl: __expectString(output.logUrl),
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
    status: __expectString(output.status),
    testCaseDefinitionId: __expectString(output.testCaseDefinitionId),
    testCaseDefinitionName: __expectString(output.testCaseDefinitionName),
    testCaseRunId: __expectString(output.testCaseRunId),
    testScenarios: output.testScenarios != null ? de_TestCaseScenariosList(output.testScenarios, context) : undefined,
    warnings: __expectString(output.warnings),
  } as any;
};

/**
 * deserializeAws_restJson1TestCaseRuns
 */
const de_TestCaseRuns = (output: any, context: __SerdeContext): TestCaseRun[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TestCaseRun(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TestCaseScenario
 */
const de_TestCaseScenario = (output: any, context: __SerdeContext): TestCaseScenario => {
  return {
    failure: __expectString(output.failure),
    status: __expectString(output.status),
    systemMessage: __expectString(output.systemMessage),
    testCaseScenarioId: __expectString(output.testCaseScenarioId),
    testCaseScenarioType: __expectString(output.testCaseScenarioType),
  } as any;
};

/**
 * deserializeAws_restJson1TestCaseScenariosList
 */
const de_TestCaseScenariosList = (output: any, context: __SerdeContext): TestCaseScenario[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TestCaseScenario(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TestResult
 */
const de_TestResult = (output: any, context: __SerdeContext): TestResult => {
  return {
    groups: output.groups != null ? de_GroupResultList(output.groups, context) : undefined,
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
