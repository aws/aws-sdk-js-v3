// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  serializeDateTime as __serializeDateTime,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { CancelJobRunCommandInput, CancelJobRunCommandOutput } from "../commands/CancelJobRunCommand";
import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "../commands/CreateApplicationCommand";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "../commands/DeleteApplicationCommand";
import { GetApplicationCommandInput, GetApplicationCommandOutput } from "../commands/GetApplicationCommand";
import {
  GetDashboardForJobRunCommandInput,
  GetDashboardForJobRunCommandOutput,
} from "../commands/GetDashboardForJobRunCommand";
import { GetJobRunCommandInput, GetJobRunCommandOutput } from "../commands/GetJobRunCommand";
import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "../commands/ListApplicationsCommand";
import { ListJobRunAttemptsCommandInput, ListJobRunAttemptsCommandOutput } from "../commands/ListJobRunAttemptsCommand";
import { ListJobRunsCommandInput, ListJobRunsCommandOutput } from "../commands/ListJobRunsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { StartApplicationCommandInput, StartApplicationCommandOutput } from "../commands/StartApplicationCommand";
import { StartJobRunCommandInput, StartJobRunCommandOutput } from "../commands/StartJobRunCommand";
import { StopApplicationCommandInput, StopApplicationCommandOutput } from "../commands/StopApplicationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "../commands/UpdateApplicationCommand";
import { EMRServerlessServiceException as __BaseException } from "../models/EMRServerlessServiceException";
import {
  Application,
  ApplicationSummary,
  AutoStartConfig,
  AutoStopConfig,
  CloudWatchLoggingConfiguration,
  Configuration,
  ConfigurationOverrides,
  ConflictException,
  Hive,
  ImageConfigurationInput,
  InitialCapacityConfig,
  InteractiveConfiguration,
  InternalServerException,
  JobDriver,
  JobRun,
  JobRunAttemptSummary,
  JobRunExecutionIamPolicy,
  JobRunSummary,
  ManagedPersistenceMonitoringConfiguration,
  MaximumAllowedResources,
  MonitoringConfiguration,
  NetworkConfiguration,
  PrometheusMonitoringConfiguration,
  ResourceNotFoundException,
  ResourceUtilization,
  RetryPolicy,
  S3MonitoringConfiguration,
  SchedulerConfiguration,
  ServiceQuotaExceededException,
  SparkSubmit,
  TotalResourceUtilization,
  ValidationException,
  WorkerResourceConfig,
  WorkerTypeSpecificationInput,
} from "../models/models_0";

/**
 * serializeAws_restJson1CancelJobRunCommand
 */
export const se_CancelJobRunCommand = async (
  input: CancelJobRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/jobruns/{jobRunId}");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  b.p("jobRunId", () => input.jobRunId!, "{jobRunId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateApplicationCommand
 */
export const se_CreateApplicationCommand = async (
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications");
  let body: any;
  body = JSON.stringify(
    take(input, {
      architecture: [],
      autoStartConfiguration: (_) => _json(_),
      autoStopConfiguration: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      imageConfiguration: (_) => _json(_),
      initialCapacity: (_) => _json(_),
      interactiveConfiguration: (_) => _json(_),
      maximumCapacity: (_) => _json(_),
      monitoringConfiguration: (_) => _json(_),
      name: [],
      networkConfiguration: (_) => _json(_),
      releaseLabel: [],
      runtimeConfiguration: (_) => se_ConfigurationList(_, context),
      schedulerConfiguration: (_) => _json(_),
      tags: (_) => _json(_),
      type: [],
      workerTypeSpecifications: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteApplicationCommand
 */
export const se_DeleteApplicationCommand = async (
  input: DeleteApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetApplicationCommand
 */
export const se_GetApplicationCommand = async (
  input: GetApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDashboardForJobRunCommand
 */
export const se_GetDashboardForJobRunCommand = async (
  input: GetDashboardForJobRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/jobruns/{jobRunId}/dashboard");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  b.p("jobRunId", () => input.jobRunId!, "{jobRunId}", false);
  const query: any = map({
    [_a]: [() => input.attempt !== void 0, () => input[_a]!.toString()],
    [_aSPL]: [() => input.accessSystemProfileLogs !== void 0, () => input[_aSPL]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetJobRunCommand
 */
export const se_GetJobRunCommand = async (
  input: GetJobRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/jobruns/{jobRunId}");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  b.p("jobRunId", () => input.jobRunId!, "{jobRunId}", false);
  const query: any = map({
    [_a]: [() => input.attempt !== void 0, () => input[_a]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListApplicationsCommand
 */
export const se_ListApplicationsCommand = async (
  input: ListApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_s]: [() => input.states !== void 0, () => input[_s]! || []],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListJobRunAttemptsCommand
 */
export const se_ListJobRunAttemptsCommand = async (
  input: ListJobRunAttemptsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/jobruns/{jobRunId}/attempts");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  b.p("jobRunId", () => input.jobRunId!, "{jobRunId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListJobRunsCommand
 */
export const se_ListJobRunsCommand = async (
  input: ListJobRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/jobruns");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_cAA]: [() => input.createdAtAfter !== void 0, () => __serializeDateTime(input[_cAA]!).toString()],
    [_cAB]: [() => input.createdAtBefore !== void 0, () => __serializeDateTime(input[_cAB]!).toString()],
    [_s]: [() => input.states !== void 0, () => input[_s]! || []],
    [_m]: [, input[_m]!],
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
 * serializeAws_restJson1StartApplicationCommand
 */
export const se_StartApplicationCommand = async (
  input: StartApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/start");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartJobRunCommand
 */
export const se_StartJobRunCommand = async (
  input: StartJobRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications/{applicationId}/jobruns");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      configurationOverrides: (_) => se_ConfigurationOverrides(_, context),
      executionIamPolicy: (_) => _json(_),
      executionRoleArn: [],
      executionTimeoutMinutes: [],
      jobDriver: (_) => _json(_),
      mode: [],
      name: [],
      retryPolicy: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopApplicationCommand
 */
export const se_StopApplicationCommand = async (
  input: StopApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/stop");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
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
 * serializeAws_restJson1UpdateApplicationCommand
 */
export const se_UpdateApplicationCommand = async (
  input: UpdateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications/{applicationId}");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      architecture: [],
      autoStartConfiguration: (_) => _json(_),
      autoStopConfiguration: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      imageConfiguration: (_) => _json(_),
      initialCapacity: (_) => _json(_),
      interactiveConfiguration: (_) => _json(_),
      maximumCapacity: (_) => _json(_),
      monitoringConfiguration: (_) => _json(_),
      networkConfiguration: (_) => _json(_),
      releaseLabel: [],
      runtimeConfiguration: (_) => se_ConfigurationList(_, context),
      schedulerConfiguration: (_) => _json(_),
      workerTypeSpecifications: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CancelJobRunCommand
 */
export const de_CancelJobRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    applicationId: __expectString,
    jobRunId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateApplicationCommand
 */
export const de_CreateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    applicationId: __expectString,
    arn: __expectString,
    name: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteApplicationCommand
 */
export const de_DeleteApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
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
 * deserializeAws_restJson1GetApplicationCommand
 */
export const de_GetApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    application: (_) => de_Application(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDashboardForJobRunCommand
 */
export const de_GetDashboardForJobRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDashboardForJobRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    url: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetJobRunCommand
 */
export const de_GetJobRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    jobRun: (_) => de_JobRun(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListApplicationsCommand
 */
export const de_ListApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    applications: (_) => de_ApplicationList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListJobRunAttemptsCommand
 */
export const de_ListJobRunAttemptsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobRunAttemptsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    jobRunAttempts: (_) => de_JobRunAttempts(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListJobRunsCommand
 */
export const de_ListJobRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobRunsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    jobRuns: (_) => de_JobRuns(_, context),
    nextToken: __expectString,
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
 * deserializeAws_restJson1StartApplicationCommand
 */
export const de_StartApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartApplicationCommandOutput> => {
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
 * deserializeAws_restJson1StartJobRunCommand
 */
export const de_StartJobRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartJobRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    applicationId: __expectString,
    arn: __expectString,
    jobRunId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StopApplicationCommand
 */
export const de_StopApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopApplicationCommandOutput> => {
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
 * deserializeAws_restJson1UpdateApplicationCommand
 */
export const de_UpdateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    application: (_) => de_Application(_, context),
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
    case "com.amazonaws.emrserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.emrserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.emrserverless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.emrserverless#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
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

// se_AutoStartConfig omitted.

// se_AutoStopConfig omitted.

// se_CloudWatchLoggingConfiguration omitted.

/**
 * serializeAws_restJson1Configuration
 */
const se_Configuration = (input: Configuration, context: __SerdeContext): any => {
  return take(input, {
    classification: [],
    configurations: (_) => se_ConfigurationList(_, context),
    properties: _json,
  });
};

/**
 * serializeAws_restJson1ConfigurationList
 */
const se_ConfigurationList = (input: Configuration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Configuration(entry, context);
    });
};

/**
 * serializeAws_restJson1ConfigurationOverrides
 */
const se_ConfigurationOverrides = (input: ConfigurationOverrides, context: __SerdeContext): any => {
  return take(input, {
    applicationConfiguration: (_) => se_ConfigurationList(_, context),
    monitoringConfiguration: _json,
  });
};

// se_EntryPointArguments omitted.

// se_Hive omitted.

// se_ImageConfigurationInput omitted.

// se_InitialCapacityConfig omitted.

// se_InitialCapacityConfigMap omitted.

// se_InteractiveConfiguration omitted.

// se_JobDriver omitted.

// se_JobRunExecutionIamPolicy omitted.

// se_LogTypeList omitted.

// se_LogTypeMap omitted.

// se_ManagedPersistenceMonitoringConfiguration omitted.

// se_MaximumAllowedResources omitted.

// se_MonitoringConfiguration omitted.

// se_NetworkConfiguration omitted.

// se_PolicyArnList omitted.

// se_PrometheusMonitoringConfiguration omitted.

// se_RetryPolicy omitted.

// se_S3MonitoringConfiguration omitted.

// se_SchedulerConfiguration omitted.

// se_SecurityGroupIds omitted.

// se_SensitivePropertiesMap omitted.

// se_SparkSubmit omitted.

// se_SubnetIds omitted.

// se_TagMap omitted.

// se_WorkerResourceConfig omitted.

// se_WorkerTypeSpecificationInput omitted.

// se_WorkerTypeSpecificationInputMap omitted.

/**
 * deserializeAws_restJson1Application
 */
const de_Application = (output: any, context: __SerdeContext): Application => {
  return take(output, {
    applicationId: __expectString,
    architecture: __expectString,
    arn: __expectString,
    autoStartConfiguration: _json,
    autoStopConfiguration: _json,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    imageConfiguration: _json,
    initialCapacity: _json,
    interactiveConfiguration: _json,
    maximumCapacity: _json,
    monitoringConfiguration: _json,
    name: __expectString,
    networkConfiguration: _json,
    releaseLabel: __expectString,
    runtimeConfiguration: (_: any) => de_ConfigurationList(_, context),
    schedulerConfiguration: _json,
    state: __expectString,
    stateDetails: __expectString,
    tags: _json,
    type: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    workerTypeSpecifications: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ApplicationList
 */
const de_ApplicationList = (output: any, context: __SerdeContext): ApplicationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ApplicationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ApplicationSummary
 */
const de_ApplicationSummary = (output: any, context: __SerdeContext): ApplicationSummary => {
  return take(output, {
    architecture: __expectString,
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    id: __expectString,
    name: __expectString,
    releaseLabel: __expectString,
    state: __expectString,
    stateDetails: __expectString,
    type: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_AutoStartConfig omitted.

// de_AutoStopConfig omitted.

// de_CloudWatchLoggingConfiguration omitted.

/**
 * deserializeAws_restJson1Configuration
 */
const de_Configuration = (output: any, context: __SerdeContext): Configuration => {
  return take(output, {
    classification: __expectString,
    configurations: (_: any) => de_ConfigurationList(_, context),
    properties: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ConfigurationList
 */
const de_ConfigurationList = (output: any, context: __SerdeContext): Configuration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Configuration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ConfigurationOverrides
 */
const de_ConfigurationOverrides = (output: any, context: __SerdeContext): ConfigurationOverrides => {
  return take(output, {
    applicationConfiguration: (_: any) => de_ConfigurationList(_, context),
    monitoringConfiguration: _json,
  }) as any;
};

// de_EntryPointArguments omitted.

// de_Hive omitted.

// de_ImageConfiguration omitted.

// de_InitialCapacityConfig omitted.

// de_InitialCapacityConfigMap omitted.

// de_InteractiveConfiguration omitted.

// de_JobDriver omitted.

/**
 * deserializeAws_restJson1JobRun
 */
const de_JobRun = (output: any, context: __SerdeContext): JobRun => {
  return take(output, {
    applicationId: __expectString,
    arn: __expectString,
    attempt: __expectInt32,
    attemptCreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    attemptUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    billedResourceUtilization: (_: any) => de_ResourceUtilization(_, context),
    configurationOverrides: (_: any) => de_ConfigurationOverrides(_, context),
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    endedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    executionRole: __expectString,
    executionTimeoutMinutes: __expectLong,
    jobDriver: (_: any) => _json(__expectUnion(_)),
    jobRunId: __expectString,
    mode: __expectString,
    name: __expectString,
    networkConfiguration: _json,
    queuedDurationMilliseconds: __expectLong,
    releaseLabel: __expectString,
    retryPolicy: _json,
    startedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    state: __expectString,
    stateDetails: __expectString,
    tags: _json,
    totalExecutionDurationSeconds: __expectInt32,
    totalResourceUtilization: (_: any) => de_TotalResourceUtilization(_, context),
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1JobRunAttempts
 */
const de_JobRunAttempts = (output: any, context: __SerdeContext): JobRunAttemptSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_JobRunAttemptSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1JobRunAttemptSummary
 */
const de_JobRunAttemptSummary = (output: any, context: __SerdeContext): JobRunAttemptSummary => {
  return take(output, {
    applicationId: __expectString,
    arn: __expectString,
    attempt: __expectInt32,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    executionRole: __expectString,
    id: __expectString,
    jobCreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    mode: __expectString,
    name: __expectString,
    releaseLabel: __expectString,
    state: __expectString,
    stateDetails: __expectString,
    type: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1JobRuns
 */
const de_JobRuns = (output: any, context: __SerdeContext): JobRunSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_JobRunSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1JobRunSummary
 */
const de_JobRunSummary = (output: any, context: __SerdeContext): JobRunSummary => {
  return take(output, {
    applicationId: __expectString,
    arn: __expectString,
    attempt: __expectInt32,
    attemptCreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    attemptUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    executionRole: __expectString,
    id: __expectString,
    mode: __expectString,
    name: __expectString,
    releaseLabel: __expectString,
    state: __expectString,
    stateDetails: __expectString,
    type: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_LogTypeList omitted.

// de_LogTypeMap omitted.

// de_ManagedPersistenceMonitoringConfiguration omitted.

// de_MaximumAllowedResources omitted.

// de_MonitoringConfiguration omitted.

// de_NetworkConfiguration omitted.

// de_PrometheusMonitoringConfiguration omitted.

/**
 * deserializeAws_restJson1ResourceUtilization
 */
const de_ResourceUtilization = (output: any, context: __SerdeContext): ResourceUtilization => {
  return take(output, {
    memoryGBHour: __limitedParseDouble,
    storageGBHour: __limitedParseDouble,
    vCPUHour: __limitedParseDouble,
  }) as any;
};

// de_RetryPolicy omitted.

// de_S3MonitoringConfiguration omitted.

// de_SchedulerConfiguration omitted.

// de_SecurityGroupIds omitted.

// de_SensitivePropertiesMap omitted.

// de_SparkSubmit omitted.

// de_SubnetIds omitted.

// de_TagMap omitted.

/**
 * deserializeAws_restJson1TotalResourceUtilization
 */
const de_TotalResourceUtilization = (output: any, context: __SerdeContext): TotalResourceUtilization => {
  return take(output, {
    memoryGBHour: __limitedParseDouble,
    storageGBHour: __limitedParseDouble,
    vCPUHour: __limitedParseDouble,
  }) as any;
};

// de_WorkerResourceConfig omitted.

// de_WorkerTypeSpecification omitted.

// de_WorkerTypeSpecificationMap omitted.

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

const _a = "attempt";
const _aSPL = "accessSystemProfileLogs";
const _cAA = "createdAtAfter";
const _cAB = "createdAtBefore";
const _m = "mode";
const _mR = "maxResults";
const _nT = "nextToken";
const _s = "states";
const _tK = "tagKeys";
