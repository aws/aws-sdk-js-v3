// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
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
import { v4 as generateIdempotencyToken } from "uuid";

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
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/suiteDefinitions");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      suiteDefinitionConfiguration: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteSuiteDefinitionCommand
 */
export const se_DeleteSuiteDefinitionCommand = async (
  input: DeleteSuiteDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/suiteDefinitions/{suiteDefinitionId}");
  b.p("suiteDefinitionId", () => input.suiteDefinitionId!, "{suiteDefinitionId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetEndpointCommand
 */
export const se_GetEndpointCommand = async (
  input: GetEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/endpoint");
  const query: any = map({
    [_tA]: [, input[_tA]!],
    [_cA]: [, input[_cA]!],
    [_dRA]: [, input[_dRA]!],
    [_aM]: [, input[_aM]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSuiteDefinitionCommand
 */
export const se_GetSuiteDefinitionCommand = async (
  input: GetSuiteDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/suiteDefinitions/{suiteDefinitionId}");
  b.p("suiteDefinitionId", () => input.suiteDefinitionId!, "{suiteDefinitionId}", false);
  const query: any = map({
    [_sDV]: [, input[_sDV]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSuiteRunCommand
 */
export const se_GetSuiteRunCommand = async (
  input: GetSuiteRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}");
  b.p("suiteDefinitionId", () => input.suiteDefinitionId!, "{suiteDefinitionId}", false);
  b.p("suiteRunId", () => input.suiteRunId!, "{suiteRunId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSuiteRunReportCommand
 */
export const se_GetSuiteRunReportCommand = async (
  input: GetSuiteRunReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}/report");
  b.p("suiteDefinitionId", () => input.suiteDefinitionId!, "{suiteDefinitionId}", false);
  b.p("suiteRunId", () => input.suiteRunId!, "{suiteRunId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSuiteDefinitionsCommand
 */
export const se_ListSuiteDefinitionsCommand = async (
  input: ListSuiteDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/suiteDefinitions");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSuiteRunsCommand
 */
export const se_ListSuiteRunsCommand = async (
  input: ListSuiteRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/suiteRuns");
  const query: any = map({
    [_sDI]: [, input[_sDI]!],
    [_sDV]: [, input[_sDV]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartSuiteRunCommand
 */
export const se_StartSuiteRunCommand = async (
  input: StartSuiteRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/suiteDefinitions/{suiteDefinitionId}/suiteRuns");
  b.p("suiteDefinitionId", () => input.suiteDefinitionId!, "{suiteDefinitionId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      suiteDefinitionVersion: [],
      suiteRunConfiguration: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopSuiteRunCommand
 */
export const se_StopSuiteRunCommand = async (
  input: StopSuiteRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}/stop");
  b.p("suiteDefinitionId", () => input.suiteDefinitionId!, "{suiteDefinitionId}", false);
  b.p("suiteRunId", () => input.suiteRunId!, "{suiteRunId}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSuiteDefinitionCommand
 */
export const se_UpdateSuiteDefinitionCommand = async (
  input: UpdateSuiteDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/suiteDefinitions/{suiteDefinitionId}");
  b.p("suiteDefinitionId", () => input.suiteDefinitionId!, "{suiteDefinitionId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      suiteDefinitionConfiguration: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateSuiteDefinitionCommand
 */
export const de_CreateSuiteDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSuiteDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1DeleteSuiteDefinitionCommand
 */
export const de_DeleteSuiteDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSuiteDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetEndpointCommand
 */
export const de_GetEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetSuiteDefinitionCommand
 */
export const de_GetSuiteDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSuiteDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetSuiteRunCommand
 */
export const de_GetSuiteRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSuiteRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetSuiteRunReportCommand
 */
export const de_GetSuiteRunReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSuiteRunReportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListSuiteDefinitionsCommand
 */
export const de_ListSuiteDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSuiteDefinitionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListSuiteRunsCommand
 */
export const de_ListSuiteRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSuiteRunsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1StartSuiteRunCommand
 */
export const de_StartSuiteRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSuiteRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1StopSuiteRunCommand
 */
export const de_StopSuiteRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopSuiteRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSuiteDefinitionCommand
 */
export const de_UpdateSuiteDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSuiteDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.iotdeviceadvisor#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotdeviceadvisor#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
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

const _aM = "authenticationMethod";
const _cA = "certificateArn";
const _dRA = "deviceRoleArn";
const _mR = "maxResults";
const _nT = "nextToken";
const _sDI = "suiteDefinitionId";
const _sDV = "suiteDefinitionVersion";
const _tA = "thingArn";
const _tK = "tagKeys";
