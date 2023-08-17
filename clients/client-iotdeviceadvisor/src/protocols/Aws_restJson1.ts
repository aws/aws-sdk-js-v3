// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
  body = JSON.stringify(
    take(input, {
      suiteDefinitionConfiguration: (_) => _json(_),
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
    deviceRoleArn: [, input.deviceRoleArn!],
    authenticationMethod: [, input.authenticationMethod!],
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
  body = JSON.stringify(
    take(input, {
      suiteDefinitionVersion: [],
      suiteRunConfiguration: (_) => _json(_),
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
  body = JSON.stringify(
    take(input, {
      suiteDefinitionConfiguration: (_) => _json(_),
    })
  );
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
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    suiteDefinitionArn: __expectString,
    suiteDefinitionId: __expectString,
    suiteDefinitionName: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    endpoint: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastModifiedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    latestVersion: __expectString,
    suiteDefinitionArn: __expectString,
    suiteDefinitionConfiguration: _json,
    suiteDefinitionId: __expectString,
    suiteDefinitionVersion: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    endTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    errorReason: __expectString,
    startTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    suiteDefinitionId: __expectString,
    suiteDefinitionVersion: __expectString,
    suiteRunArn: __expectString,
    suiteRunConfiguration: _json,
    suiteRunId: __expectString,
    tags: _json,
    testResult: (_) => de_TestResult(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    qualificationReportDownloadUrl: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    nextToken: __expectString,
    suiteDefinitionInformationList: (_) => de_SuiteDefinitionInformationList(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    nextToken: __expectString,
    suiteRunsList: (_) => de_SuiteRunsList(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    endpoint: __expectString,
    suiteRunArn: __expectString,
    suiteRunId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    suiteDefinitionArn: __expectString,
    suiteDefinitionId: __expectString,
    suiteDefinitionName: __expectString,
    suiteDefinitionVersion: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

const throwDefaultError = withBaseException(__BaseException);
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
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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

// se_DeviceUnderTest omitted.

// se_DeviceUnderTestList omitted.

// se_SelectedTestList omitted.

// se_SuiteDefinitionConfiguration omitted.

// se_SuiteRunConfiguration omitted.

// se_TagMap omitted.

// de_DeviceUnderTest omitted.

// de_DeviceUnderTestList omitted.

/**
 * deserializeAws_restJson1GroupResult
 */
const de_GroupResult = (output: any, context: __SerdeContext): GroupResult => {
  return take(output, {
    groupId: __expectString,
    groupName: __expectString,
    tests: (_: any) => de_TestCaseRuns(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1GroupResultList
 */
const de_GroupResultList = (output: any, context: __SerdeContext): GroupResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GroupResult(entry, context);
    });
  return retVal;
};

// de_SelectedTestList omitted.

// de_SuiteDefinitionConfiguration omitted.

/**
 * deserializeAws_restJson1SuiteDefinitionInformation
 */
const de_SuiteDefinitionInformation = (output: any, context: __SerdeContext): SuiteDefinitionInformation => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    defaultDevices: _json,
    intendedForQualification: __expectBoolean,
    isLongDurationTest: __expectBoolean,
    protocol: __expectString,
    suiteDefinitionId: __expectString,
    suiteDefinitionName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1SuiteDefinitionInformationList
 */
const de_SuiteDefinitionInformationList = (output: any, context: __SerdeContext): SuiteDefinitionInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SuiteDefinitionInformation(entry, context);
    });
  return retVal;
};

// de_SuiteRunConfiguration omitted.

/**
 * deserializeAws_restJson1SuiteRunInformation
 */
const de_SuiteRunInformation = (output: any, context: __SerdeContext): SuiteRunInformation => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    endAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    failed: __expectInt32,
    passed: __expectInt32,
    startedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    suiteDefinitionId: __expectString,
    suiteDefinitionName: __expectString,
    suiteDefinitionVersion: __expectString,
    suiteRunId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1SuiteRunsList
 */
const de_SuiteRunsList = (output: any, context: __SerdeContext): SuiteRunInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SuiteRunInformation(entry, context);
    });
  return retVal;
};

// de_TagMap omitted.

/**
 * deserializeAws_restJson1TestCaseRun
 */
const de_TestCaseRun = (output: any, context: __SerdeContext): TestCaseRun => {
  return take(output, {
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    failure: __expectString,
    logUrl: __expectString,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    testCaseDefinitionId: __expectString,
    testCaseDefinitionName: __expectString,
    testCaseRunId: __expectString,
    testScenarios: _json,
    warnings: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1TestCaseRuns
 */
const de_TestCaseRuns = (output: any, context: __SerdeContext): TestCaseRun[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TestCaseRun(entry, context);
    });
  return retVal;
};

// de_TestCaseScenario omitted.

// de_TestCaseScenariosList omitted.

/**
 * deserializeAws_restJson1TestResult
 */
const de_TestResult = (output: any, context: __SerdeContext): TestResult => {
  return take(output, {
    groups: (_: any) => de_GroupResultList(_, context),
  }) as any;
};

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
