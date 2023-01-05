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
  expectUnion as __expectUnion,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
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
  Configuration,
  ConfigurationOverrides,
  ConflictException,
  Hive,
  ImageConfiguration,
  ImageConfigurationInput,
  InitialCapacityConfig,
  InternalServerException,
  JobDriver,
  JobRun,
  JobRunSummary,
  ManagedPersistenceMonitoringConfiguration,
  MaximumAllowedResources,
  MonitoringConfiguration,
  NetworkConfiguration,
  ResourceNotFoundException,
  S3MonitoringConfiguration,
  ServiceQuotaExceededException,
  SparkSubmit,
  TotalResourceUtilization,
  ValidationException,
  WorkerResourceConfig,
  WorkerTypeSpecification,
  WorkerTypeSpecificationInput,
} from "../models/models_0";

export const serializeAws_restJson1CancelJobRunCommand = async (
  input: CancelJobRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{applicationId}/jobruns/{jobRunId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "applicationId",
    () => input.applicationId!,
    "{applicationId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "jobRunId", () => input.jobRunId!, "{jobRunId}", false);
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

export const serializeAws_restJson1CreateApplicationCommand = async (
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications";
  let body: any;
  body = JSON.stringify({
    ...(input.architecture != null && { architecture: input.architecture }),
    ...(input.autoStartConfiguration != null && {
      autoStartConfiguration: serializeAws_restJson1AutoStartConfig(input.autoStartConfiguration, context),
    }),
    ...(input.autoStopConfiguration != null && {
      autoStopConfiguration: serializeAws_restJson1AutoStopConfig(input.autoStopConfiguration, context),
    }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.imageConfiguration != null && {
      imageConfiguration: serializeAws_restJson1ImageConfigurationInput(input.imageConfiguration, context),
    }),
    ...(input.initialCapacity != null && {
      initialCapacity: serializeAws_restJson1InitialCapacityConfigMap(input.initialCapacity, context),
    }),
    ...(input.maximumCapacity != null && {
      maximumCapacity: serializeAws_restJson1MaximumAllowedResources(input.maximumCapacity, context),
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.networkConfiguration != null && {
      networkConfiguration: serializeAws_restJson1NetworkConfiguration(input.networkConfiguration, context),
    }),
    ...(input.releaseLabel != null && { releaseLabel: input.releaseLabel }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    ...(input.type != null && { type: input.type }),
    ...(input.workerTypeSpecifications != null && {
      workerTypeSpecifications: serializeAws_restJson1WorkerTypeSpecificationInputMap(
        input.workerTypeSpecifications,
        context
      ),
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

export const serializeAws_restJson1DeleteApplicationCommand = async (
  input: DeleteApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications/{applicationId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "applicationId",
    () => input.applicationId!,
    "{applicationId}",
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

export const serializeAws_restJson1GetApplicationCommand = async (
  input: GetApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications/{applicationId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "applicationId",
    () => input.applicationId!,
    "{applicationId}",
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

export const serializeAws_restJson1GetDashboardForJobRunCommand = async (
  input: GetDashboardForJobRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{applicationId}/jobruns/{jobRunId}/dashboard";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "applicationId",
    () => input.applicationId!,
    "{applicationId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "jobRunId", () => input.jobRunId!, "{jobRunId}", false);
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

export const serializeAws_restJson1GetJobRunCommand = async (
  input: GetJobRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{applicationId}/jobruns/{jobRunId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "applicationId",
    () => input.applicationId!,
    "{applicationId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "jobRunId", () => input.jobRunId!, "{jobRunId}", false);
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

export const serializeAws_restJson1ListApplicationsCommand = async (
  input: ListApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    states: [() => input.states !== void 0, () => (input.states! || []).map((_entry) => _entry as any)],
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

export const serializeAws_restJson1ListJobRunsCommand = async (
  input: ListJobRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications/{applicationId}/jobruns";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "applicationId",
    () => input.applicationId!,
    "{applicationId}",
    false
  );
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    createdAtAfter: [
      () => input.createdAtAfter !== void 0,
      () => (input.createdAtAfter!.toISOString().split(".")[0] + "Z").toString(),
    ],
    createdAtBefore: [
      () => input.createdAtBefore !== void 0,
      () => (input.createdAtBefore!.toISOString().split(".")[0] + "Z").toString(),
    ],
    states: [() => input.states !== void 0, () => (input.states! || []).map((_entry) => _entry as any)],
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

export const serializeAws_restJson1StartApplicationCommand = async (
  input: StartApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications/{applicationId}/start";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "applicationId",
    () => input.applicationId!,
    "{applicationId}",
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

export const serializeAws_restJson1StartJobRunCommand = async (
  input: StartJobRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications/{applicationId}/jobruns";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "applicationId",
    () => input.applicationId!,
    "{applicationId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.configurationOverrides != null && {
      configurationOverrides: serializeAws_restJson1ConfigurationOverrides(input.configurationOverrides, context),
    }),
    ...(input.executionRoleArn != null && { executionRoleArn: input.executionRoleArn }),
    ...(input.executionTimeoutMinutes != null && { executionTimeoutMinutes: input.executionTimeoutMinutes }),
    ...(input.jobDriver != null && { jobDriver: serializeAws_restJson1JobDriver(input.jobDriver, context) }),
    ...(input.name != null && { name: input.name }),
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

export const serializeAws_restJson1StopApplicationCommand = async (
  input: StopApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications/{applicationId}/stop";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "applicationId",
    () => input.applicationId!,
    "{applicationId}",
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

export const serializeAws_restJson1UpdateApplicationCommand = async (
  input: UpdateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications/{applicationId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "applicationId",
    () => input.applicationId!,
    "{applicationId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.architecture != null && { architecture: input.architecture }),
    ...(input.autoStartConfiguration != null && {
      autoStartConfiguration: serializeAws_restJson1AutoStartConfig(input.autoStartConfiguration, context),
    }),
    ...(input.autoStopConfiguration != null && {
      autoStopConfiguration: serializeAws_restJson1AutoStopConfig(input.autoStopConfiguration, context),
    }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.imageConfiguration != null && {
      imageConfiguration: serializeAws_restJson1ImageConfigurationInput(input.imageConfiguration, context),
    }),
    ...(input.initialCapacity != null && {
      initialCapacity: serializeAws_restJson1InitialCapacityConfigMap(input.initialCapacity, context),
    }),
    ...(input.maximumCapacity != null && {
      maximumCapacity: serializeAws_restJson1MaximumAllowedResources(input.maximumCapacity, context),
    }),
    ...(input.networkConfiguration != null && {
      networkConfiguration: serializeAws_restJson1NetworkConfiguration(input.networkConfiguration, context),
    }),
    ...(input.workerTypeSpecifications != null && {
      workerTypeSpecifications: serializeAws_restJson1WorkerTypeSpecificationInputMap(
        input.workerTypeSpecifications,
        context
      ),
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

export const deserializeAws_restJson1CancelJobRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelJobRunCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationId != null) {
    contents.applicationId = __expectString(data.applicationId);
  }
  if (data.jobRunId != null) {
    contents.jobRunId = __expectString(data.jobRunId);
  }
  return contents;
};

const deserializeAws_restJson1CancelJobRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emrserverless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.emrserverless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrserverless#ValidationException":
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

export const deserializeAws_restJson1CreateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationId != null) {
    contents.applicationId = __expectString(data.applicationId);
  }
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  return contents;
};

const deserializeAws_restJson1CreateApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.emrserverless#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.emrserverless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.emrserverless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrserverless#ValidationException":
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

export const deserializeAws_restJson1DeleteApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emrserverless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.emrserverless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrserverless#ValidationException":
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

export const deserializeAws_restJson1GetApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.application != null) {
    contents.application = deserializeAws_restJson1Application(data.application, context);
  }
  return contents;
};

const deserializeAws_restJson1GetApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emrserverless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.emrserverless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrserverless#ValidationException":
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

export const deserializeAws_restJson1GetDashboardForJobRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDashboardForJobRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDashboardForJobRunCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.url != null) {
    contents.url = __expectString(data.url);
  }
  return contents;
};

const deserializeAws_restJson1GetDashboardForJobRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDashboardForJobRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emrserverless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.emrserverless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrserverless#ValidationException":
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

export const deserializeAws_restJson1GetJobRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetJobRunCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobRun != null) {
    contents.jobRun = deserializeAws_restJson1JobRun(data.jobRun, context);
  }
  return contents;
};

const deserializeAws_restJson1GetJobRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emrserverless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.emrserverless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrserverless#ValidationException":
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

export const deserializeAws_restJson1ListApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListApplicationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applications != null) {
    contents.applications = deserializeAws_restJson1ApplicationList(data.applications, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListApplicationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emrserverless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrserverless#ValidationException":
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

export const deserializeAws_restJson1ListJobRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobRunsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListJobRunsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobRuns != null) {
    contents.jobRuns = deserializeAws_restJson1JobRuns(data.jobRuns, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListJobRunsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobRunsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emrserverless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrserverless#ValidationException":
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
    case "com.amazonaws.emrserverless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.emrserverless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrserverless#ValidationException":
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

export const deserializeAws_restJson1StartApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1StartApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emrserverless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.emrserverless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.emrserverless#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrserverless#ValidationException":
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

export const deserializeAws_restJson1StartJobRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartJobRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartJobRunCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationId != null) {
    contents.applicationId = __expectString(data.applicationId);
  }
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.jobRunId != null) {
    contents.jobRunId = __expectString(data.jobRunId);
  }
  return contents;
};

const deserializeAws_restJson1StartJobRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartJobRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.emrserverless#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.emrserverless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.emrserverless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrserverless#ValidationException":
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

export const deserializeAws_restJson1StopApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StopApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1StopApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emrserverless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.emrserverless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrserverless#ValidationException":
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
    case "com.amazonaws.emrserverless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.emrserverless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrserverless#ValidationException":
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
    case "com.amazonaws.emrserverless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.emrserverless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrserverless#ValidationException":
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

export const deserializeAws_restJson1UpdateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.application != null) {
    contents.application = deserializeAws_restJson1Application(data.application, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emrserverless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.emrserverless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrserverless#ValidationException":
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

const serializeAws_restJson1AutoStartConfig = (input: AutoStartConfig, context: __SerdeContext): any => {
  return {
    ...(input.enabled != null && { enabled: input.enabled }),
  };
};

const serializeAws_restJson1AutoStopConfig = (input: AutoStopConfig, context: __SerdeContext): any => {
  return {
    ...(input.enabled != null && { enabled: input.enabled }),
    ...(input.idleTimeoutMinutes != null && { idleTimeoutMinutes: input.idleTimeoutMinutes }),
  };
};

const serializeAws_restJson1Configuration = (input: Configuration, context: __SerdeContext): any => {
  return {
    ...(input.classification != null && { classification: input.classification }),
    ...(input.configurations != null && {
      configurations: serializeAws_restJson1ConfigurationList(input.configurations, context),
    }),
    ...(input.properties != null && {
      properties: serializeAws_restJson1SensitivePropertiesMap(input.properties, context),
    }),
  };
};

const serializeAws_restJson1ConfigurationList = (input: Configuration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Configuration(entry, context);
    });
};

const serializeAws_restJson1ConfigurationOverrides = (input: ConfigurationOverrides, context: __SerdeContext): any => {
  return {
    ...(input.applicationConfiguration != null && {
      applicationConfiguration: serializeAws_restJson1ConfigurationList(input.applicationConfiguration, context),
    }),
    ...(input.monitoringConfiguration != null && {
      monitoringConfiguration: serializeAws_restJson1MonitoringConfiguration(input.monitoringConfiguration, context),
    }),
  };
};

const serializeAws_restJson1EntryPointArguments = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Hive = (input: Hive, context: __SerdeContext): any => {
  return {
    ...(input.initQueryFile != null && { initQueryFile: input.initQueryFile }),
    ...(input.parameters != null && { parameters: input.parameters }),
    ...(input.query != null && { query: input.query }),
  };
};

const serializeAws_restJson1ImageConfigurationInput = (
  input: ImageConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.imageUri != null && { imageUri: input.imageUri }),
  };
};

const serializeAws_restJson1InitialCapacityConfig = (input: InitialCapacityConfig, context: __SerdeContext): any => {
  return {
    ...(input.workerConfiguration != null && {
      workerConfiguration: serializeAws_restJson1WorkerResourceConfig(input.workerConfiguration, context),
    }),
    ...(input.workerCount != null && { workerCount: input.workerCount }),
  };
};

const serializeAws_restJson1InitialCapacityConfigMap = (
  input: Record<string, InitialCapacityConfig>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1InitialCapacityConfig(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1JobDriver = (input: JobDriver, context: __SerdeContext): any => {
  return JobDriver.visit(input, {
    hive: (value) => ({ hive: serializeAws_restJson1Hive(value, context) }),
    sparkSubmit: (value) => ({ sparkSubmit: serializeAws_restJson1SparkSubmit(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1ManagedPersistenceMonitoringConfiguration = (
  input: ManagedPersistenceMonitoringConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.enabled != null && { enabled: input.enabled }),
    ...(input.encryptionKeyArn != null && { encryptionKeyArn: input.encryptionKeyArn }),
  };
};

const serializeAws_restJson1MaximumAllowedResources = (
  input: MaximumAllowedResources,
  context: __SerdeContext
): any => {
  return {
    ...(input.cpu != null && { cpu: input.cpu }),
    ...(input.disk != null && { disk: input.disk }),
    ...(input.memory != null && { memory: input.memory }),
  };
};

const serializeAws_restJson1MonitoringConfiguration = (
  input: MonitoringConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.managedPersistenceMonitoringConfiguration != null && {
      managedPersistenceMonitoringConfiguration: serializeAws_restJson1ManagedPersistenceMonitoringConfiguration(
        input.managedPersistenceMonitoringConfiguration,
        context
      ),
    }),
    ...(input.s3MonitoringConfiguration != null && {
      s3MonitoringConfiguration: serializeAws_restJson1S3MonitoringConfiguration(
        input.s3MonitoringConfiguration,
        context
      ),
    }),
  };
};

const serializeAws_restJson1NetworkConfiguration = (input: NetworkConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.securityGroupIds != null && {
      securityGroupIds: serializeAws_restJson1SecurityGroupIds(input.securityGroupIds, context),
    }),
    ...(input.subnetIds != null && { subnetIds: serializeAws_restJson1SubnetIds(input.subnetIds, context) }),
  };
};

const serializeAws_restJson1S3MonitoringConfiguration = (
  input: S3MonitoringConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.encryptionKeyArn != null && { encryptionKeyArn: input.encryptionKeyArn }),
    ...(input.logUri != null && { logUri: input.logUri }),
  };
};

const serializeAws_restJson1SecurityGroupIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1SensitivePropertiesMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1SparkSubmit = (input: SparkSubmit, context: __SerdeContext): any => {
  return {
    ...(input.entryPoint != null && { entryPoint: input.entryPoint }),
    ...(input.entryPointArguments != null && {
      entryPointArguments: serializeAws_restJson1EntryPointArguments(input.entryPointArguments, context),
    }),
    ...(input.sparkSubmitParameters != null && { sparkSubmitParameters: input.sparkSubmitParameters }),
  };
};

const serializeAws_restJson1SubnetIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
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

const serializeAws_restJson1WorkerResourceConfig = (input: WorkerResourceConfig, context: __SerdeContext): any => {
  return {
    ...(input.cpu != null && { cpu: input.cpu }),
    ...(input.disk != null && { disk: input.disk }),
    ...(input.memory != null && { memory: input.memory }),
  };
};

const serializeAws_restJson1WorkerTypeSpecificationInput = (
  input: WorkerTypeSpecificationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.imageConfiguration != null && {
      imageConfiguration: serializeAws_restJson1ImageConfigurationInput(input.imageConfiguration, context),
    }),
  };
};

const serializeAws_restJson1WorkerTypeSpecificationInputMap = (
  input: Record<string, WorkerTypeSpecificationInput>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1WorkerTypeSpecificationInput(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1Application = (output: any, context: __SerdeContext): Application => {
  return {
    applicationId: __expectString(output.applicationId),
    architecture: __expectString(output.architecture),
    arn: __expectString(output.arn),
    autoStartConfiguration:
      output.autoStartConfiguration != null
        ? deserializeAws_restJson1AutoStartConfig(output.autoStartConfiguration, context)
        : undefined,
    autoStopConfiguration:
      output.autoStopConfiguration != null
        ? deserializeAws_restJson1AutoStopConfig(output.autoStopConfiguration, context)
        : undefined,
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    imageConfiguration:
      output.imageConfiguration != null
        ? deserializeAws_restJson1ImageConfiguration(output.imageConfiguration, context)
        : undefined,
    initialCapacity:
      output.initialCapacity != null
        ? deserializeAws_restJson1InitialCapacityConfigMap(output.initialCapacity, context)
        : undefined,
    maximumCapacity:
      output.maximumCapacity != null
        ? deserializeAws_restJson1MaximumAllowedResources(output.maximumCapacity, context)
        : undefined,
    name: __expectString(output.name),
    networkConfiguration:
      output.networkConfiguration != null
        ? deserializeAws_restJson1NetworkConfiguration(output.networkConfiguration, context)
        : undefined,
    releaseLabel: __expectString(output.releaseLabel),
    state: __expectString(output.state),
    stateDetails: __expectString(output.stateDetails),
    tags: output.tags != null ? deserializeAws_restJson1TagMap(output.tags, context) : undefined,
    type: __expectString(output.type),
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updatedAt))) : undefined,
    workerTypeSpecifications:
      output.workerTypeSpecifications != null
        ? deserializeAws_restJson1WorkerTypeSpecificationMap(output.workerTypeSpecifications, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ApplicationList = (output: any, context: __SerdeContext): ApplicationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ApplicationSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ApplicationSummary = (output: any, context: __SerdeContext): ApplicationSummary => {
  return {
    architecture: __expectString(output.architecture),
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    id: __expectString(output.id),
    name: __expectString(output.name),
    releaseLabel: __expectString(output.releaseLabel),
    state: __expectString(output.state),
    stateDetails: __expectString(output.stateDetails),
    type: __expectString(output.type),
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updatedAt))) : undefined,
  } as any;
};

const deserializeAws_restJson1AutoStartConfig = (output: any, context: __SerdeContext): AutoStartConfig => {
  return {
    enabled: __expectBoolean(output.enabled),
  } as any;
};

const deserializeAws_restJson1AutoStopConfig = (output: any, context: __SerdeContext): AutoStopConfig => {
  return {
    enabled: __expectBoolean(output.enabled),
    idleTimeoutMinutes: __expectInt32(output.idleTimeoutMinutes),
  } as any;
};

const deserializeAws_restJson1Configuration = (output: any, context: __SerdeContext): Configuration => {
  return {
    classification: __expectString(output.classification),
    configurations:
      output.configurations != null
        ? deserializeAws_restJson1ConfigurationList(output.configurations, context)
        : undefined,
    properties:
      output.properties != null
        ? deserializeAws_restJson1SensitivePropertiesMap(output.properties, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ConfigurationList = (output: any, context: __SerdeContext): Configuration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Configuration(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ConfigurationOverrides = (
  output: any,
  context: __SerdeContext
): ConfigurationOverrides => {
  return {
    applicationConfiguration:
      output.applicationConfiguration != null
        ? deserializeAws_restJson1ConfigurationList(output.applicationConfiguration, context)
        : undefined,
    monitoringConfiguration:
      output.monitoringConfiguration != null
        ? deserializeAws_restJson1MonitoringConfiguration(output.monitoringConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1EntryPointArguments = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Hive = (output: any, context: __SerdeContext): Hive => {
  return {
    initQueryFile: __expectString(output.initQueryFile),
    parameters: __expectString(output.parameters),
    query: __expectString(output.query),
  } as any;
};

const deserializeAws_restJson1ImageConfiguration = (output: any, context: __SerdeContext): ImageConfiguration => {
  return {
    imageUri: __expectString(output.imageUri),
    resolvedImageDigest: __expectString(output.resolvedImageDigest),
  } as any;
};

const deserializeAws_restJson1InitialCapacityConfig = (output: any, context: __SerdeContext): InitialCapacityConfig => {
  return {
    workerConfiguration:
      output.workerConfiguration != null
        ? deserializeAws_restJson1WorkerResourceConfig(output.workerConfiguration, context)
        : undefined,
    workerCount: __expectLong(output.workerCount),
  } as any;
};

const deserializeAws_restJson1InitialCapacityConfigMap = (
  output: any,
  context: __SerdeContext
): Record<string, InitialCapacityConfig> => {
  return Object.entries(output).reduce((acc: Record<string, InitialCapacityConfig>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1InitialCapacityConfig(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1JobDriver = (output: any, context: __SerdeContext): JobDriver => {
  if (output.hive != null) {
    return {
      hive: deserializeAws_restJson1Hive(output.hive, context),
    };
  }
  if (output.sparkSubmit != null) {
    return {
      sparkSubmit: deserializeAws_restJson1SparkSubmit(output.sparkSubmit, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1JobRun = (output: any, context: __SerdeContext): JobRun => {
  return {
    applicationId: __expectString(output.applicationId),
    arn: __expectString(output.arn),
    configurationOverrides:
      output.configurationOverrides != null
        ? deserializeAws_restJson1ConfigurationOverrides(output.configurationOverrides, context)
        : undefined,
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    createdBy: __expectString(output.createdBy),
    executionRole: __expectString(output.executionRole),
    jobDriver:
      output.jobDriver != null
        ? deserializeAws_restJson1JobDriver(__expectUnion(output.jobDriver), context)
        : undefined,
    jobRunId: __expectString(output.jobRunId),
    name: __expectString(output.name),
    networkConfiguration:
      output.networkConfiguration != null
        ? deserializeAws_restJson1NetworkConfiguration(output.networkConfiguration, context)
        : undefined,
    releaseLabel: __expectString(output.releaseLabel),
    state: __expectString(output.state),
    stateDetails: __expectString(output.stateDetails),
    tags: output.tags != null ? deserializeAws_restJson1TagMap(output.tags, context) : undefined,
    totalExecutionDurationSeconds: __expectInt32(output.totalExecutionDurationSeconds),
    totalResourceUtilization:
      output.totalResourceUtilization != null
        ? deserializeAws_restJson1TotalResourceUtilization(output.totalResourceUtilization, context)
        : undefined,
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updatedAt))) : undefined,
  } as any;
};

const deserializeAws_restJson1JobRuns = (output: any, context: __SerdeContext): JobRunSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JobRunSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1JobRunSummary = (output: any, context: __SerdeContext): JobRunSummary => {
  return {
    applicationId: __expectString(output.applicationId),
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    createdBy: __expectString(output.createdBy),
    executionRole: __expectString(output.executionRole),
    id: __expectString(output.id),
    name: __expectString(output.name),
    releaseLabel: __expectString(output.releaseLabel),
    state: __expectString(output.state),
    stateDetails: __expectString(output.stateDetails),
    type: __expectString(output.type),
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updatedAt))) : undefined,
  } as any;
};

const deserializeAws_restJson1ManagedPersistenceMonitoringConfiguration = (
  output: any,
  context: __SerdeContext
): ManagedPersistenceMonitoringConfiguration => {
  return {
    enabled: __expectBoolean(output.enabled),
    encryptionKeyArn: __expectString(output.encryptionKeyArn),
  } as any;
};

const deserializeAws_restJson1MaximumAllowedResources = (
  output: any,
  context: __SerdeContext
): MaximumAllowedResources => {
  return {
    cpu: __expectString(output.cpu),
    disk: __expectString(output.disk),
    memory: __expectString(output.memory),
  } as any;
};

const deserializeAws_restJson1MonitoringConfiguration = (
  output: any,
  context: __SerdeContext
): MonitoringConfiguration => {
  return {
    managedPersistenceMonitoringConfiguration:
      output.managedPersistenceMonitoringConfiguration != null
        ? deserializeAws_restJson1ManagedPersistenceMonitoringConfiguration(
            output.managedPersistenceMonitoringConfiguration,
            context
          )
        : undefined,
    s3MonitoringConfiguration:
      output.s3MonitoringConfiguration != null
        ? deserializeAws_restJson1S3MonitoringConfiguration(output.s3MonitoringConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1NetworkConfiguration = (output: any, context: __SerdeContext): NetworkConfiguration => {
  return {
    securityGroupIds:
      output.securityGroupIds != null
        ? deserializeAws_restJson1SecurityGroupIds(output.securityGroupIds, context)
        : undefined,
    subnetIds: output.subnetIds != null ? deserializeAws_restJson1SubnetIds(output.subnetIds, context) : undefined,
  } as any;
};

const deserializeAws_restJson1S3MonitoringConfiguration = (
  output: any,
  context: __SerdeContext
): S3MonitoringConfiguration => {
  return {
    encryptionKeyArn: __expectString(output.encryptionKeyArn),
    logUri: __expectString(output.logUri),
  } as any;
};

const deserializeAws_restJson1SecurityGroupIds = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1SensitivePropertiesMap = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1SparkSubmit = (output: any, context: __SerdeContext): SparkSubmit => {
  return {
    entryPoint: __expectString(output.entryPoint),
    entryPointArguments:
      output.entryPointArguments != null
        ? deserializeAws_restJson1EntryPointArguments(output.entryPointArguments, context)
        : undefined,
    sparkSubmitParameters: __expectString(output.sparkSubmitParameters),
  } as any;
};

const deserializeAws_restJson1SubnetIds = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1TotalResourceUtilization = (
  output: any,
  context: __SerdeContext
): TotalResourceUtilization => {
  return {
    memoryGBHour: __limitedParseDouble(output.memoryGBHour),
    storageGBHour: __limitedParseDouble(output.storageGBHour),
    vCPUHour: __limitedParseDouble(output.vCPUHour),
  } as any;
};

const deserializeAws_restJson1WorkerResourceConfig = (output: any, context: __SerdeContext): WorkerResourceConfig => {
  return {
    cpu: __expectString(output.cpu),
    disk: __expectString(output.disk),
    memory: __expectString(output.memory),
  } as any;
};

const deserializeAws_restJson1WorkerTypeSpecification = (
  output: any,
  context: __SerdeContext
): WorkerTypeSpecification => {
  return {
    imageConfiguration:
      output.imageConfiguration != null
        ? deserializeAws_restJson1ImageConfiguration(output.imageConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1WorkerTypeSpecificationMap = (
  output: any,
  context: __SerdeContext
): Record<string, WorkerTypeSpecification> => {
  return Object.entries(output).reduce((acc: Record<string, WorkerTypeSpecification>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1WorkerTypeSpecification(value, context);
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
