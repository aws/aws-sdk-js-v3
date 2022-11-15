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
  map as __map,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CancelJobCommandInput, CancelJobCommandOutput } from "../commands/CancelJobCommand";
import { CreateJobCommandInput, CreateJobCommandOutput } from "../commands/CreateJobCommand";
import { CreatePipelineCommandInput, CreatePipelineCommandOutput } from "../commands/CreatePipelineCommand";
import { CreatePresetCommandInput, CreatePresetCommandOutput } from "../commands/CreatePresetCommand";
import { DeletePipelineCommandInput, DeletePipelineCommandOutput } from "../commands/DeletePipelineCommand";
import { DeletePresetCommandInput, DeletePresetCommandOutput } from "../commands/DeletePresetCommand";
import { ListJobsByPipelineCommandInput, ListJobsByPipelineCommandOutput } from "../commands/ListJobsByPipelineCommand";
import { ListJobsByStatusCommandInput, ListJobsByStatusCommandOutput } from "../commands/ListJobsByStatusCommand";
import { ListPipelinesCommandInput, ListPipelinesCommandOutput } from "../commands/ListPipelinesCommand";
import { ListPresetsCommandInput, ListPresetsCommandOutput } from "../commands/ListPresetsCommand";
import { ReadJobCommandInput, ReadJobCommandOutput } from "../commands/ReadJobCommand";
import { ReadPipelineCommandInput, ReadPipelineCommandOutput } from "../commands/ReadPipelineCommand";
import { ReadPresetCommandInput, ReadPresetCommandOutput } from "../commands/ReadPresetCommand";
import { TestRoleCommandInput, TestRoleCommandOutput } from "../commands/TestRoleCommand";
import { UpdatePipelineCommandInput, UpdatePipelineCommandOutput } from "../commands/UpdatePipelineCommand";
import {
  UpdatePipelineNotificationsCommandInput,
  UpdatePipelineNotificationsCommandOutput,
} from "../commands/UpdatePipelineNotificationsCommand";
import {
  UpdatePipelineStatusCommandInput,
  UpdatePipelineStatusCommandOutput,
} from "../commands/UpdatePipelineStatusCommand";
import { ElasticTranscoderServiceException as __BaseException } from "../models/ElasticTranscoderServiceException";
import {
  AccessDeniedException,
  Artwork,
  AudioCodecOptions,
  AudioParameters,
  CaptionFormat,
  Captions,
  CaptionSource,
  Clip,
  CreateJobOutput,
  CreateJobPlaylist,
  DetectedProperties,
  Encryption,
  HlsContentProtection,
  IncompatibleVersionException,
  InputCaptions,
  InternalServiceException,
  Job,
  JobAlbumArt,
  JobInput,
  JobOutput,
  JobWatermark,
  LimitExceededException,
  Notifications,
  Permission,
  Pipeline,
  PipelineOutputConfig,
  Playlist,
  PlayReadyDrm,
  Preset,
  PresetWatermark,
  ResourceInUseException,
  ResourceNotFoundException,
  Thumbnails,
  TimeSpan,
  Timing,
  ValidationException,
  VideoParameters,
  Warning,
} from "../models/models_0";

export const serializeAws_restJson1CancelJobCommand = async (
  input: CancelJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2012-09-25/jobs/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
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

export const serializeAws_restJson1CreateJobCommand = async (
  input: CreateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2012-09-25/jobs";
  let body: any;
  body = JSON.stringify({
    ...(input.Input != null && { Input: serializeAws_restJson1JobInput(input.Input, context) }),
    ...(input.Inputs != null && { Inputs: serializeAws_restJson1JobInputs(input.Inputs, context) }),
    ...(input.Output != null && { Output: serializeAws_restJson1CreateJobOutput(input.Output, context) }),
    ...(input.OutputKeyPrefix != null && { OutputKeyPrefix: input.OutputKeyPrefix }),
    ...(input.Outputs != null && { Outputs: serializeAws_restJson1CreateJobOutputs(input.Outputs, context) }),
    ...(input.PipelineId != null && { PipelineId: input.PipelineId }),
    ...(input.Playlists != null && { Playlists: serializeAws_restJson1CreateJobPlaylists(input.Playlists, context) }),
    ...(input.UserMetadata != null && {
      UserMetadata: serializeAws_restJson1UserMetadata(input.UserMetadata, context),
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

export const serializeAws_restJson1CreatePipelineCommand = async (
  input: CreatePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2012-09-25/pipelines";
  let body: any;
  body = JSON.stringify({
    ...(input.AwsKmsKeyArn != null && { AwsKmsKeyArn: input.AwsKmsKeyArn }),
    ...(input.ContentConfig != null && {
      ContentConfig: serializeAws_restJson1PipelineOutputConfig(input.ContentConfig, context),
    }),
    ...(input.InputBucket != null && { InputBucket: input.InputBucket }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Notifications != null && {
      Notifications: serializeAws_restJson1Notifications(input.Notifications, context),
    }),
    ...(input.OutputBucket != null && { OutputBucket: input.OutputBucket }),
    ...(input.Role != null && { Role: input.Role }),
    ...(input.ThumbnailConfig != null && {
      ThumbnailConfig: serializeAws_restJson1PipelineOutputConfig(input.ThumbnailConfig, context),
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

export const serializeAws_restJson1CreatePresetCommand = async (
  input: CreatePresetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2012-09-25/presets";
  let body: any;
  body = JSON.stringify({
    ...(input.Audio != null && { Audio: serializeAws_restJson1AudioParameters(input.Audio, context) }),
    ...(input.Container != null && { Container: input.Container }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Thumbnails != null && { Thumbnails: serializeAws_restJson1Thumbnails(input.Thumbnails, context) }),
    ...(input.Video != null && { Video: serializeAws_restJson1VideoParameters(input.Video, context) }),
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

export const serializeAws_restJson1DeletePipelineCommand = async (
  input: DeletePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2012-09-25/pipelines/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
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

export const serializeAws_restJson1DeletePresetCommand = async (
  input: DeletePresetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2012-09-25/presets/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
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

export const serializeAws_restJson1ListJobsByPipelineCommand = async (
  input: ListJobsByPipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2012-09-25/jobsByPipeline/{PipelineId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "PipelineId", () => input.PipelineId!, "{PipelineId}", false);
  const query: any = map({
    Ascending: [, input.Ascending!],
    PageToken: [, input.PageToken!],
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

export const serializeAws_restJson1ListJobsByStatusCommand = async (
  input: ListJobsByStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2012-09-25/jobsByStatus/{Status}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Status", () => input.Status!, "{Status}", false);
  const query: any = map({
    Ascending: [, input.Ascending!],
    PageToken: [, input.PageToken!],
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

export const serializeAws_restJson1ListPipelinesCommand = async (
  input: ListPipelinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2012-09-25/pipelines";
  const query: any = map({
    Ascending: [, input.Ascending!],
    PageToken: [, input.PageToken!],
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

export const serializeAws_restJson1ListPresetsCommand = async (
  input: ListPresetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2012-09-25/presets";
  const query: any = map({
    Ascending: [, input.Ascending!],
    PageToken: [, input.PageToken!],
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

export const serializeAws_restJson1ReadJobCommand = async (
  input: ReadJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2012-09-25/jobs/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
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

export const serializeAws_restJson1ReadPipelineCommand = async (
  input: ReadPipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2012-09-25/pipelines/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
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

export const serializeAws_restJson1ReadPresetCommand = async (
  input: ReadPresetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2012-09-25/presets/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
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

export const serializeAws_restJson1TestRoleCommand = async (
  input: TestRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2012-09-25/roleTests";
  let body: any;
  body = JSON.stringify({
    ...(input.InputBucket != null && { InputBucket: input.InputBucket }),
    ...(input.OutputBucket != null && { OutputBucket: input.OutputBucket }),
    ...(input.Role != null && { Role: input.Role }),
    ...(input.Topics != null && { Topics: serializeAws_restJson1SnsTopics(input.Topics, context) }),
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

export const serializeAws_restJson1UpdatePipelineCommand = async (
  input: UpdatePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2012-09-25/pipelines/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.AwsKmsKeyArn != null && { AwsKmsKeyArn: input.AwsKmsKeyArn }),
    ...(input.ContentConfig != null && {
      ContentConfig: serializeAws_restJson1PipelineOutputConfig(input.ContentConfig, context),
    }),
    ...(input.InputBucket != null && { InputBucket: input.InputBucket }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Notifications != null && {
      Notifications: serializeAws_restJson1Notifications(input.Notifications, context),
    }),
    ...(input.Role != null && { Role: input.Role }),
    ...(input.ThumbnailConfig != null && {
      ThumbnailConfig: serializeAws_restJson1PipelineOutputConfig(input.ThumbnailConfig, context),
    }),
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

export const serializeAws_restJson1UpdatePipelineNotificationsCommand = async (
  input: UpdatePipelineNotificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2012-09-25/pipelines/{Id}/notifications";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Notifications != null && {
      Notifications: serializeAws_restJson1Notifications(input.Notifications, context),
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

export const serializeAws_restJson1UpdatePipelineStatusCommand = async (
  input: UpdatePipelineStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2012-09-25/pipelines/{Id}/status";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Status != null && { Status: input.Status }),
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

export const deserializeAws_restJson1CancelJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
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
    case "com.amazonaws.elastictranscoder#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IncompatibleVersionException":
    case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
      throw await deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.elastictranscoder#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.elastictranscoder#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.elastictranscoder#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.elastictranscoder#ValidationException":
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
  if (data.Job != null) {
    contents.Job = deserializeAws_restJson1Job(data.Job, context);
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
    case "com.amazonaws.elastictranscoder#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IncompatibleVersionException":
    case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
      throw await deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.elastictranscoder#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.elastictranscoder#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.elastictranscoder#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.elastictranscoder#ValidationException":
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

export const deserializeAws_restJson1CreatePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePipelineCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreatePipelineCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Pipeline != null) {
    contents.Pipeline = deserializeAws_restJson1Pipeline(data.Pipeline, context);
  }
  if (data.Warnings != null) {
    contents.Warnings = deserializeAws_restJson1Warnings(data.Warnings, context);
  }
  return contents;
};

const deserializeAws_restJson1CreatePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.elastictranscoder#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IncompatibleVersionException":
    case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
      throw await deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.elastictranscoder#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.elastictranscoder#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.elastictranscoder#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.elastictranscoder#ValidationException":
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

export const deserializeAws_restJson1CreatePresetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePresetCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreatePresetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Preset != null) {
    contents.Preset = deserializeAws_restJson1Preset(data.Preset, context);
  }
  if (data.Warning != null) {
    contents.Warning = __expectString(data.Warning);
  }
  return contents;
};

const deserializeAws_restJson1CreatePresetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePresetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.elastictranscoder#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IncompatibleVersionException":
    case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
      throw await deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.elastictranscoder#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.elastictranscoder#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.elastictranscoder#ValidationException":
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

export const deserializeAws_restJson1DeletePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePipelineCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeletePipelineCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeletePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.elastictranscoder#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IncompatibleVersionException":
    case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
      throw await deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.elastictranscoder#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.elastictranscoder#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.elastictranscoder#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.elastictranscoder#ValidationException":
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

export const deserializeAws_restJson1DeletePresetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePresetCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeletePresetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeletePresetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePresetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.elastictranscoder#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IncompatibleVersionException":
    case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
      throw await deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.elastictranscoder#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.elastictranscoder#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.elastictranscoder#ValidationException":
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

export const deserializeAws_restJson1ListJobsByPipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsByPipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListJobsByPipelineCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Jobs != null) {
    contents.Jobs = deserializeAws_restJson1Jobs(data.Jobs, context);
  }
  if (data.NextPageToken != null) {
    contents.NextPageToken = __expectString(data.NextPageToken);
  }
  return contents;
};

const deserializeAws_restJson1ListJobsByPipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsByPipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.elastictranscoder#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IncompatibleVersionException":
    case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
      throw await deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.elastictranscoder#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.elastictranscoder#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.elastictranscoder#ValidationException":
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

export const deserializeAws_restJson1ListJobsByStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsByStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListJobsByStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Jobs != null) {
    contents.Jobs = deserializeAws_restJson1Jobs(data.Jobs, context);
  }
  if (data.NextPageToken != null) {
    contents.NextPageToken = __expectString(data.NextPageToken);
  }
  return contents;
};

const deserializeAws_restJson1ListJobsByStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsByStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.elastictranscoder#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IncompatibleVersionException":
    case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
      throw await deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.elastictranscoder#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.elastictranscoder#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.elastictranscoder#ValidationException":
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

export const deserializeAws_restJson1ListPipelinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelinesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPipelinesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextPageToken != null) {
    contents.NextPageToken = __expectString(data.NextPageToken);
  }
  if (data.Pipelines != null) {
    contents.Pipelines = deserializeAws_restJson1Pipelines(data.Pipelines, context);
  }
  return contents;
};

const deserializeAws_restJson1ListPipelinesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelinesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.elastictranscoder#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IncompatibleVersionException":
    case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
      throw await deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.elastictranscoder#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.elastictranscoder#ValidationException":
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

export const deserializeAws_restJson1ListPresetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPresetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPresetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextPageToken != null) {
    contents.NextPageToken = __expectString(data.NextPageToken);
  }
  if (data.Presets != null) {
    contents.Presets = deserializeAws_restJson1Presets(data.Presets, context);
  }
  return contents;
};

const deserializeAws_restJson1ListPresetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPresetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.elastictranscoder#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IncompatibleVersionException":
    case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
      throw await deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.elastictranscoder#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.elastictranscoder#ValidationException":
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

export const deserializeAws_restJson1ReadJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReadJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ReadJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Job != null) {
    contents.Job = deserializeAws_restJson1Job(data.Job, context);
  }
  return contents;
};

const deserializeAws_restJson1ReadJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReadJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.elastictranscoder#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IncompatibleVersionException":
    case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
      throw await deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.elastictranscoder#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.elastictranscoder#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.elastictranscoder#ValidationException":
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

export const deserializeAws_restJson1ReadPipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReadPipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ReadPipelineCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Pipeline != null) {
    contents.Pipeline = deserializeAws_restJson1Pipeline(data.Pipeline, context);
  }
  if (data.Warnings != null) {
    contents.Warnings = deserializeAws_restJson1Warnings(data.Warnings, context);
  }
  return contents;
};

const deserializeAws_restJson1ReadPipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReadPipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.elastictranscoder#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IncompatibleVersionException":
    case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
      throw await deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.elastictranscoder#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.elastictranscoder#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.elastictranscoder#ValidationException":
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

export const deserializeAws_restJson1ReadPresetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReadPresetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ReadPresetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Preset != null) {
    contents.Preset = deserializeAws_restJson1Preset(data.Preset, context);
  }
  return contents;
};

const deserializeAws_restJson1ReadPresetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReadPresetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.elastictranscoder#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IncompatibleVersionException":
    case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
      throw await deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.elastictranscoder#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.elastictranscoder#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.elastictranscoder#ValidationException":
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

export const deserializeAws_restJson1TestRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestRoleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TestRoleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Messages != null) {
    contents.Messages = deserializeAws_restJson1ExceptionMessages(data.Messages, context);
  }
  if (data.Success != null) {
    contents.Success = __expectString(data.Success);
  }
  return contents;
};

const deserializeAws_restJson1TestRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestRoleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.elastictranscoder#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IncompatibleVersionException":
    case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
      throw await deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.elastictranscoder#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.elastictranscoder#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.elastictranscoder#ValidationException":
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

export const deserializeAws_restJson1UpdatePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdatePipelineCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Pipeline != null) {
    contents.Pipeline = deserializeAws_restJson1Pipeline(data.Pipeline, context);
  }
  if (data.Warnings != null) {
    contents.Warnings = deserializeAws_restJson1Warnings(data.Warnings, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdatePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.elastictranscoder#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IncompatibleVersionException":
    case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
      throw await deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.elastictranscoder#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.elastictranscoder#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.elastictranscoder#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.elastictranscoder#ValidationException":
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

export const deserializeAws_restJson1UpdatePipelineNotificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineNotificationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdatePipelineNotificationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Pipeline != null) {
    contents.Pipeline = deserializeAws_restJson1Pipeline(data.Pipeline, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdatePipelineNotificationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineNotificationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.elastictranscoder#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IncompatibleVersionException":
    case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
      throw await deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.elastictranscoder#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.elastictranscoder#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.elastictranscoder#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.elastictranscoder#ValidationException":
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

export const deserializeAws_restJson1UpdatePipelineStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdatePipelineStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Pipeline != null) {
    contents.Pipeline = deserializeAws_restJson1Pipeline(data.Pipeline, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdatePipelineStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.elastictranscoder#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IncompatibleVersionException":
    case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
      throw await deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.elastictranscoder#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.elastictranscoder#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.elastictranscoder#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.elastictranscoder#ValidationException":
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

const deserializeAws_restJson1IncompatibleVersionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncompatibleVersionException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new IncompatibleVersionException({
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

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ResourceInUseException({
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

const serializeAws_restJson1AccessControls = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Artwork = (input: Artwork, context: __SerdeContext): any => {
  return {
    ...(input.AlbumArtFormat != null && { AlbumArtFormat: input.AlbumArtFormat }),
    ...(input.Encryption != null && { Encryption: serializeAws_restJson1Encryption(input.Encryption, context) }),
    ...(input.InputKey != null && { InputKey: input.InputKey }),
    ...(input.MaxHeight != null && { MaxHeight: input.MaxHeight }),
    ...(input.MaxWidth != null && { MaxWidth: input.MaxWidth }),
    ...(input.PaddingPolicy != null && { PaddingPolicy: input.PaddingPolicy }),
    ...(input.SizingPolicy != null && { SizingPolicy: input.SizingPolicy }),
  };
};

const serializeAws_restJson1Artworks = (input: Artwork[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Artwork(entry, context);
    });
};

const serializeAws_restJson1AudioCodecOptions = (input: AudioCodecOptions, context: __SerdeContext): any => {
  return {
    ...(input.BitDepth != null && { BitDepth: input.BitDepth }),
    ...(input.BitOrder != null && { BitOrder: input.BitOrder }),
    ...(input.Profile != null && { Profile: input.Profile }),
    ...(input.Signed != null && { Signed: input.Signed }),
  };
};

const serializeAws_restJson1AudioParameters = (input: AudioParameters, context: __SerdeContext): any => {
  return {
    ...(input.AudioPackingMode != null && { AudioPackingMode: input.AudioPackingMode }),
    ...(input.BitRate != null && { BitRate: input.BitRate }),
    ...(input.Channels != null && { Channels: input.Channels }),
    ...(input.Codec != null && { Codec: input.Codec }),
    ...(input.CodecOptions != null && {
      CodecOptions: serializeAws_restJson1AudioCodecOptions(input.CodecOptions, context),
    }),
    ...(input.SampleRate != null && { SampleRate: input.SampleRate }),
  };
};

const serializeAws_restJson1CaptionFormat = (input: CaptionFormat, context: __SerdeContext): any => {
  return {
    ...(input.Encryption != null && { Encryption: serializeAws_restJson1Encryption(input.Encryption, context) }),
    ...(input.Format != null && { Format: input.Format }),
    ...(input.Pattern != null && { Pattern: input.Pattern }),
  };
};

const serializeAws_restJson1CaptionFormats = (input: CaptionFormat[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1CaptionFormat(entry, context);
    });
};

const serializeAws_restJson1Captions = (input: Captions, context: __SerdeContext): any => {
  return {
    ...(input.CaptionFormats != null && {
      CaptionFormats: serializeAws_restJson1CaptionFormats(input.CaptionFormats, context),
    }),
    ...(input.CaptionSources != null && {
      CaptionSources: serializeAws_restJson1CaptionSources(input.CaptionSources, context),
    }),
    ...(input.MergePolicy != null && { MergePolicy: input.MergePolicy }),
  };
};

const serializeAws_restJson1CaptionSource = (input: CaptionSource, context: __SerdeContext): any => {
  return {
    ...(input.Encryption != null && { Encryption: serializeAws_restJson1Encryption(input.Encryption, context) }),
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Label != null && { Label: input.Label }),
    ...(input.Language != null && { Language: input.Language }),
    ...(input.TimeOffset != null && { TimeOffset: input.TimeOffset }),
  };
};

const serializeAws_restJson1CaptionSources = (input: CaptionSource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1CaptionSource(entry, context);
    });
};

const serializeAws_restJson1Clip = (input: Clip, context: __SerdeContext): any => {
  return {
    ...(input.TimeSpan != null && { TimeSpan: serializeAws_restJson1TimeSpan(input.TimeSpan, context) }),
  };
};

const serializeAws_restJson1CodecOptions = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1Composition = (input: Clip[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Clip(entry, context);
    });
};

const serializeAws_restJson1CreateJobOutput = (input: CreateJobOutput, context: __SerdeContext): any => {
  return {
    ...(input.AlbumArt != null && { AlbumArt: serializeAws_restJson1JobAlbumArt(input.AlbumArt, context) }),
    ...(input.Captions != null && { Captions: serializeAws_restJson1Captions(input.Captions, context) }),
    ...(input.Composition != null && { Composition: serializeAws_restJson1Composition(input.Composition, context) }),
    ...(input.Encryption != null && { Encryption: serializeAws_restJson1Encryption(input.Encryption, context) }),
    ...(input.Key != null && { Key: input.Key }),
    ...(input.PresetId != null && { PresetId: input.PresetId }),
    ...(input.Rotate != null && { Rotate: input.Rotate }),
    ...(input.SegmentDuration != null && { SegmentDuration: input.SegmentDuration }),
    ...(input.ThumbnailEncryption != null && {
      ThumbnailEncryption: serializeAws_restJson1Encryption(input.ThumbnailEncryption, context),
    }),
    ...(input.ThumbnailPattern != null && { ThumbnailPattern: input.ThumbnailPattern }),
    ...(input.Watermarks != null && { Watermarks: serializeAws_restJson1JobWatermarks(input.Watermarks, context) }),
  };
};

const serializeAws_restJson1CreateJobOutputs = (input: CreateJobOutput[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1CreateJobOutput(entry, context);
    });
};

const serializeAws_restJson1CreateJobPlaylist = (input: CreateJobPlaylist, context: __SerdeContext): any => {
  return {
    ...(input.Format != null && { Format: input.Format }),
    ...(input.HlsContentProtection != null && {
      HlsContentProtection: serializeAws_restJson1HlsContentProtection(input.HlsContentProtection, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OutputKeys != null && { OutputKeys: serializeAws_restJson1OutputKeys(input.OutputKeys, context) }),
    ...(input.PlayReadyDrm != null && {
      PlayReadyDrm: serializeAws_restJson1PlayReadyDrm(input.PlayReadyDrm, context),
    }),
  };
};

const serializeAws_restJson1CreateJobPlaylists = (input: CreateJobPlaylist[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1CreateJobPlaylist(entry, context);
    });
};

const serializeAws_restJson1DetectedProperties = (input: DetectedProperties, context: __SerdeContext): any => {
  return {
    ...(input.DurationMillis != null && { DurationMillis: input.DurationMillis }),
    ...(input.FileSize != null && { FileSize: input.FileSize }),
    ...(input.FrameRate != null && { FrameRate: input.FrameRate }),
    ...(input.Height != null && { Height: input.Height }),
    ...(input.Width != null && { Width: input.Width }),
  };
};

const serializeAws_restJson1Encryption = (input: Encryption, context: __SerdeContext): any => {
  return {
    ...(input.InitializationVector != null && { InitializationVector: input.InitializationVector }),
    ...(input.Key != null && { Key: input.Key }),
    ...(input.KeyMd5 != null && { KeyMd5: input.KeyMd5 }),
    ...(input.Mode != null && { Mode: input.Mode }),
  };
};

const serializeAws_restJson1HlsContentProtection = (input: HlsContentProtection, context: __SerdeContext): any => {
  return {
    ...(input.InitializationVector != null && { InitializationVector: input.InitializationVector }),
    ...(input.Key != null && { Key: input.Key }),
    ...(input.KeyMd5 != null && { KeyMd5: input.KeyMd5 }),
    ...(input.KeyStoragePolicy != null && { KeyStoragePolicy: input.KeyStoragePolicy }),
    ...(input.LicenseAcquisitionUrl != null && { LicenseAcquisitionUrl: input.LicenseAcquisitionUrl }),
    ...(input.Method != null && { Method: input.Method }),
  };
};

const serializeAws_restJson1InputCaptions = (input: InputCaptions, context: __SerdeContext): any => {
  return {
    ...(input.CaptionSources != null && {
      CaptionSources: serializeAws_restJson1CaptionSources(input.CaptionSources, context),
    }),
    ...(input.MergePolicy != null && { MergePolicy: input.MergePolicy }),
  };
};

const serializeAws_restJson1JobAlbumArt = (input: JobAlbumArt, context: __SerdeContext): any => {
  return {
    ...(input.Artwork != null && { Artwork: serializeAws_restJson1Artworks(input.Artwork, context) }),
    ...(input.MergePolicy != null && { MergePolicy: input.MergePolicy }),
  };
};

const serializeAws_restJson1JobInput = (input: JobInput, context: __SerdeContext): any => {
  return {
    ...(input.AspectRatio != null && { AspectRatio: input.AspectRatio }),
    ...(input.Container != null && { Container: input.Container }),
    ...(input.DetectedProperties != null && {
      DetectedProperties: serializeAws_restJson1DetectedProperties(input.DetectedProperties, context),
    }),
    ...(input.Encryption != null && { Encryption: serializeAws_restJson1Encryption(input.Encryption, context) }),
    ...(input.FrameRate != null && { FrameRate: input.FrameRate }),
    ...(input.InputCaptions != null && {
      InputCaptions: serializeAws_restJson1InputCaptions(input.InputCaptions, context),
    }),
    ...(input.Interlaced != null && { Interlaced: input.Interlaced }),
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Resolution != null && { Resolution: input.Resolution }),
    ...(input.TimeSpan != null && { TimeSpan: serializeAws_restJson1TimeSpan(input.TimeSpan, context) }),
  };
};

const serializeAws_restJson1JobInputs = (input: JobInput[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1JobInput(entry, context);
    });
};

const serializeAws_restJson1JobWatermark = (input: JobWatermark, context: __SerdeContext): any => {
  return {
    ...(input.Encryption != null && { Encryption: serializeAws_restJson1Encryption(input.Encryption, context) }),
    ...(input.InputKey != null && { InputKey: input.InputKey }),
    ...(input.PresetWatermarkId != null && { PresetWatermarkId: input.PresetWatermarkId }),
  };
};

const serializeAws_restJson1JobWatermarks = (input: JobWatermark[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1JobWatermark(entry, context);
    });
};

const serializeAws_restJson1Notifications = (input: Notifications, context: __SerdeContext): any => {
  return {
    ...(input.Completed != null && { Completed: input.Completed }),
    ...(input.Error != null && { Error: input.Error }),
    ...(input.Progressing != null && { Progressing: input.Progressing }),
    ...(input.Warning != null && { Warning: input.Warning }),
  };
};

const serializeAws_restJson1OutputKeys = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Permission = (input: Permission, context: __SerdeContext): any => {
  return {
    ...(input.Access != null && { Access: serializeAws_restJson1AccessControls(input.Access, context) }),
    ...(input.Grantee != null && { Grantee: input.Grantee }),
    ...(input.GranteeType != null && { GranteeType: input.GranteeType }),
  };
};

const serializeAws_restJson1Permissions = (input: Permission[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Permission(entry, context);
    });
};

const serializeAws_restJson1PipelineOutputConfig = (input: PipelineOutputConfig, context: __SerdeContext): any => {
  return {
    ...(input.Bucket != null && { Bucket: input.Bucket }),
    ...(input.Permissions != null && { Permissions: serializeAws_restJson1Permissions(input.Permissions, context) }),
    ...(input.StorageClass != null && { StorageClass: input.StorageClass }),
  };
};

const serializeAws_restJson1PlayReadyDrm = (input: PlayReadyDrm, context: __SerdeContext): any => {
  return {
    ...(input.Format != null && { Format: input.Format }),
    ...(input.InitializationVector != null && { InitializationVector: input.InitializationVector }),
    ...(input.Key != null && { Key: input.Key }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.KeyMd5 != null && { KeyMd5: input.KeyMd5 }),
    ...(input.LicenseAcquisitionUrl != null && { LicenseAcquisitionUrl: input.LicenseAcquisitionUrl }),
  };
};

const serializeAws_restJson1PresetWatermark = (input: PresetWatermark, context: __SerdeContext): any => {
  return {
    ...(input.HorizontalAlign != null && { HorizontalAlign: input.HorizontalAlign }),
    ...(input.HorizontalOffset != null && { HorizontalOffset: input.HorizontalOffset }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.MaxHeight != null && { MaxHeight: input.MaxHeight }),
    ...(input.MaxWidth != null && { MaxWidth: input.MaxWidth }),
    ...(input.Opacity != null && { Opacity: input.Opacity }),
    ...(input.SizingPolicy != null && { SizingPolicy: input.SizingPolicy }),
    ...(input.Target != null && { Target: input.Target }),
    ...(input.VerticalAlign != null && { VerticalAlign: input.VerticalAlign }),
    ...(input.VerticalOffset != null && { VerticalOffset: input.VerticalOffset }),
  };
};

const serializeAws_restJson1PresetWatermarks = (input: PresetWatermark[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1PresetWatermark(entry, context);
    });
};

const serializeAws_restJson1SnsTopics = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Thumbnails = (input: Thumbnails, context: __SerdeContext): any => {
  return {
    ...(input.AspectRatio != null && { AspectRatio: input.AspectRatio }),
    ...(input.Format != null && { Format: input.Format }),
    ...(input.Interval != null && { Interval: input.Interval }),
    ...(input.MaxHeight != null && { MaxHeight: input.MaxHeight }),
    ...(input.MaxWidth != null && { MaxWidth: input.MaxWidth }),
    ...(input.PaddingPolicy != null && { PaddingPolicy: input.PaddingPolicy }),
    ...(input.Resolution != null && { Resolution: input.Resolution }),
    ...(input.SizingPolicy != null && { SizingPolicy: input.SizingPolicy }),
  };
};

const serializeAws_restJson1TimeSpan = (input: TimeSpan, context: __SerdeContext): any => {
  return {
    ...(input.Duration != null && { Duration: input.Duration }),
    ...(input.StartTime != null && { StartTime: input.StartTime }),
  };
};

const serializeAws_restJson1UserMetadata = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1VideoParameters = (input: VideoParameters, context: __SerdeContext): any => {
  return {
    ...(input.AspectRatio != null && { AspectRatio: input.AspectRatio }),
    ...(input.BitRate != null && { BitRate: input.BitRate }),
    ...(input.Codec != null && { Codec: input.Codec }),
    ...(input.CodecOptions != null && {
      CodecOptions: serializeAws_restJson1CodecOptions(input.CodecOptions, context),
    }),
    ...(input.DisplayAspectRatio != null && { DisplayAspectRatio: input.DisplayAspectRatio }),
    ...(input.FixedGOP != null && { FixedGOP: input.FixedGOP }),
    ...(input.FrameRate != null && { FrameRate: input.FrameRate }),
    ...(input.KeyframesMaxDist != null && { KeyframesMaxDist: input.KeyframesMaxDist }),
    ...(input.MaxFrameRate != null && { MaxFrameRate: input.MaxFrameRate }),
    ...(input.MaxHeight != null && { MaxHeight: input.MaxHeight }),
    ...(input.MaxWidth != null && { MaxWidth: input.MaxWidth }),
    ...(input.PaddingPolicy != null && { PaddingPolicy: input.PaddingPolicy }),
    ...(input.Resolution != null && { Resolution: input.Resolution }),
    ...(input.SizingPolicy != null && { SizingPolicy: input.SizingPolicy }),
    ...(input.Watermarks != null && { Watermarks: serializeAws_restJson1PresetWatermarks(input.Watermarks, context) }),
  };
};

const deserializeAws_restJson1AccessControls = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Artwork = (output: any, context: __SerdeContext): Artwork => {
  return {
    AlbumArtFormat: __expectString(output.AlbumArtFormat),
    Encryption: output.Encryption != null ? deserializeAws_restJson1Encryption(output.Encryption, context) : undefined,
    InputKey: __expectString(output.InputKey),
    MaxHeight: __expectString(output.MaxHeight),
    MaxWidth: __expectString(output.MaxWidth),
    PaddingPolicy: __expectString(output.PaddingPolicy),
    SizingPolicy: __expectString(output.SizingPolicy),
  } as any;
};

const deserializeAws_restJson1Artworks = (output: any, context: __SerdeContext): Artwork[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Artwork(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AudioCodecOptions = (output: any, context: __SerdeContext): AudioCodecOptions => {
  return {
    BitDepth: __expectString(output.BitDepth),
    BitOrder: __expectString(output.BitOrder),
    Profile: __expectString(output.Profile),
    Signed: __expectString(output.Signed),
  } as any;
};

const deserializeAws_restJson1AudioParameters = (output: any, context: __SerdeContext): AudioParameters => {
  return {
    AudioPackingMode: __expectString(output.AudioPackingMode),
    BitRate: __expectString(output.BitRate),
    Channels: __expectString(output.Channels),
    Codec: __expectString(output.Codec),
    CodecOptions:
      output.CodecOptions != null ? deserializeAws_restJson1AudioCodecOptions(output.CodecOptions, context) : undefined,
    SampleRate: __expectString(output.SampleRate),
  } as any;
};

const deserializeAws_restJson1CaptionFormat = (output: any, context: __SerdeContext): CaptionFormat => {
  return {
    Encryption: output.Encryption != null ? deserializeAws_restJson1Encryption(output.Encryption, context) : undefined,
    Format: __expectString(output.Format),
    Pattern: __expectString(output.Pattern),
  } as any;
};

const deserializeAws_restJson1CaptionFormats = (output: any, context: __SerdeContext): CaptionFormat[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CaptionFormat(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Captions = (output: any, context: __SerdeContext): Captions => {
  return {
    CaptionFormats:
      output.CaptionFormats != null
        ? deserializeAws_restJson1CaptionFormats(output.CaptionFormats, context)
        : undefined,
    CaptionSources:
      output.CaptionSources != null
        ? deserializeAws_restJson1CaptionSources(output.CaptionSources, context)
        : undefined,
    MergePolicy: __expectString(output.MergePolicy),
  } as any;
};

const deserializeAws_restJson1CaptionSource = (output: any, context: __SerdeContext): CaptionSource => {
  return {
    Encryption: output.Encryption != null ? deserializeAws_restJson1Encryption(output.Encryption, context) : undefined,
    Key: __expectString(output.Key),
    Label: __expectString(output.Label),
    Language: __expectString(output.Language),
    TimeOffset: __expectString(output.TimeOffset),
  } as any;
};

const deserializeAws_restJson1CaptionSources = (output: any, context: __SerdeContext): CaptionSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CaptionSource(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Clip = (output: any, context: __SerdeContext): Clip => {
  return {
    TimeSpan: output.TimeSpan != null ? deserializeAws_restJson1TimeSpan(output.TimeSpan, context) : undefined,
  } as any;
};

const deserializeAws_restJson1CodecOptions = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1Composition = (output: any, context: __SerdeContext): Clip[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Clip(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DetectedProperties = (output: any, context: __SerdeContext): DetectedProperties => {
  return {
    DurationMillis: __expectLong(output.DurationMillis),
    FileSize: __expectLong(output.FileSize),
    FrameRate: __expectString(output.FrameRate),
    Height: __expectInt32(output.Height),
    Width: __expectInt32(output.Width),
  } as any;
};

const deserializeAws_restJson1Encryption = (output: any, context: __SerdeContext): Encryption => {
  return {
    InitializationVector: __expectString(output.InitializationVector),
    Key: __expectString(output.Key),
    KeyMd5: __expectString(output.KeyMd5),
    Mode: __expectString(output.Mode),
  } as any;
};

const deserializeAws_restJson1ExceptionMessages = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1HlsContentProtection = (output: any, context: __SerdeContext): HlsContentProtection => {
  return {
    InitializationVector: __expectString(output.InitializationVector),
    Key: __expectString(output.Key),
    KeyMd5: __expectString(output.KeyMd5),
    KeyStoragePolicy: __expectString(output.KeyStoragePolicy),
    LicenseAcquisitionUrl: __expectString(output.LicenseAcquisitionUrl),
    Method: __expectString(output.Method),
  } as any;
};

const deserializeAws_restJson1InputCaptions = (output: any, context: __SerdeContext): InputCaptions => {
  return {
    CaptionSources:
      output.CaptionSources != null
        ? deserializeAws_restJson1CaptionSources(output.CaptionSources, context)
        : undefined,
    MergePolicy: __expectString(output.MergePolicy),
  } as any;
};

const deserializeAws_restJson1Job = (output: any, context: __SerdeContext): Job => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    Input: output.Input != null ? deserializeAws_restJson1JobInput(output.Input, context) : undefined,
    Inputs: output.Inputs != null ? deserializeAws_restJson1JobInputs(output.Inputs, context) : undefined,
    Output: output.Output != null ? deserializeAws_restJson1JobOutput(output.Output, context) : undefined,
    OutputKeyPrefix: __expectString(output.OutputKeyPrefix),
    Outputs: output.Outputs != null ? deserializeAws_restJson1JobOutputs(output.Outputs, context) : undefined,
    PipelineId: __expectString(output.PipelineId),
    Playlists: output.Playlists != null ? deserializeAws_restJson1Playlists(output.Playlists, context) : undefined,
    Status: __expectString(output.Status),
    Timing: output.Timing != null ? deserializeAws_restJson1Timing(output.Timing, context) : undefined,
    UserMetadata:
      output.UserMetadata != null ? deserializeAws_restJson1UserMetadata(output.UserMetadata, context) : undefined,
  } as any;
};

const deserializeAws_restJson1JobAlbumArt = (output: any, context: __SerdeContext): JobAlbumArt => {
  return {
    Artwork: output.Artwork != null ? deserializeAws_restJson1Artworks(output.Artwork, context) : undefined,
    MergePolicy: __expectString(output.MergePolicy),
  } as any;
};

const deserializeAws_restJson1JobInput = (output: any, context: __SerdeContext): JobInput => {
  return {
    AspectRatio: __expectString(output.AspectRatio),
    Container: __expectString(output.Container),
    DetectedProperties:
      output.DetectedProperties != null
        ? deserializeAws_restJson1DetectedProperties(output.DetectedProperties, context)
        : undefined,
    Encryption: output.Encryption != null ? deserializeAws_restJson1Encryption(output.Encryption, context) : undefined,
    FrameRate: __expectString(output.FrameRate),
    InputCaptions:
      output.InputCaptions != null ? deserializeAws_restJson1InputCaptions(output.InputCaptions, context) : undefined,
    Interlaced: __expectString(output.Interlaced),
    Key: __expectString(output.Key),
    Resolution: __expectString(output.Resolution),
    TimeSpan: output.TimeSpan != null ? deserializeAws_restJson1TimeSpan(output.TimeSpan, context) : undefined,
  } as any;
};

const deserializeAws_restJson1JobInputs = (output: any, context: __SerdeContext): JobInput[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JobInput(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1JobOutput = (output: any, context: __SerdeContext): JobOutput => {
  return {
    AlbumArt: output.AlbumArt != null ? deserializeAws_restJson1JobAlbumArt(output.AlbumArt, context) : undefined,
    AppliedColorSpaceConversion: __expectString(output.AppliedColorSpaceConversion),
    Captions: output.Captions != null ? deserializeAws_restJson1Captions(output.Captions, context) : undefined,
    Composition:
      output.Composition != null ? deserializeAws_restJson1Composition(output.Composition, context) : undefined,
    Duration: __expectLong(output.Duration),
    DurationMillis: __expectLong(output.DurationMillis),
    Encryption: output.Encryption != null ? deserializeAws_restJson1Encryption(output.Encryption, context) : undefined,
    FileSize: __expectLong(output.FileSize),
    FrameRate: __expectString(output.FrameRate),
    Height: __expectInt32(output.Height),
    Id: __expectString(output.Id),
    Key: __expectString(output.Key),
    PresetId: __expectString(output.PresetId),
    Rotate: __expectString(output.Rotate),
    SegmentDuration: __expectString(output.SegmentDuration),
    Status: __expectString(output.Status),
    StatusDetail: __expectString(output.StatusDetail),
    ThumbnailEncryption:
      output.ThumbnailEncryption != null
        ? deserializeAws_restJson1Encryption(output.ThumbnailEncryption, context)
        : undefined,
    ThumbnailPattern: __expectString(output.ThumbnailPattern),
    Watermarks:
      output.Watermarks != null ? deserializeAws_restJson1JobWatermarks(output.Watermarks, context) : undefined,
    Width: __expectInt32(output.Width),
  } as any;
};

const deserializeAws_restJson1JobOutputs = (output: any, context: __SerdeContext): JobOutput[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JobOutput(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Jobs = (output: any, context: __SerdeContext): Job[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Job(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1JobWatermark = (output: any, context: __SerdeContext): JobWatermark => {
  return {
    Encryption: output.Encryption != null ? deserializeAws_restJson1Encryption(output.Encryption, context) : undefined,
    InputKey: __expectString(output.InputKey),
    PresetWatermarkId: __expectString(output.PresetWatermarkId),
  } as any;
};

const deserializeAws_restJson1JobWatermarks = (output: any, context: __SerdeContext): JobWatermark[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JobWatermark(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Notifications = (output: any, context: __SerdeContext): Notifications => {
  return {
    Completed: __expectString(output.Completed),
    Error: __expectString(output.Error),
    Progressing: __expectString(output.Progressing),
    Warning: __expectString(output.Warning),
  } as any;
};

const deserializeAws_restJson1OutputKeys = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Permission = (output: any, context: __SerdeContext): Permission => {
  return {
    Access: output.Access != null ? deserializeAws_restJson1AccessControls(output.Access, context) : undefined,
    Grantee: __expectString(output.Grantee),
    GranteeType: __expectString(output.GranteeType),
  } as any;
};

const deserializeAws_restJson1Permissions = (output: any, context: __SerdeContext): Permission[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Permission(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Pipeline = (output: any, context: __SerdeContext): Pipeline => {
  return {
    Arn: __expectString(output.Arn),
    AwsKmsKeyArn: __expectString(output.AwsKmsKeyArn),
    ContentConfig:
      output.ContentConfig != null
        ? deserializeAws_restJson1PipelineOutputConfig(output.ContentConfig, context)
        : undefined,
    Id: __expectString(output.Id),
    InputBucket: __expectString(output.InputBucket),
    Name: __expectString(output.Name),
    Notifications:
      output.Notifications != null ? deserializeAws_restJson1Notifications(output.Notifications, context) : undefined,
    OutputBucket: __expectString(output.OutputBucket),
    Role: __expectString(output.Role),
    Status: __expectString(output.Status),
    ThumbnailConfig:
      output.ThumbnailConfig != null
        ? deserializeAws_restJson1PipelineOutputConfig(output.ThumbnailConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PipelineOutputConfig = (output: any, context: __SerdeContext): PipelineOutputConfig => {
  return {
    Bucket: __expectString(output.Bucket),
    Permissions:
      output.Permissions != null ? deserializeAws_restJson1Permissions(output.Permissions, context) : undefined,
    StorageClass: __expectString(output.StorageClass),
  } as any;
};

const deserializeAws_restJson1Pipelines = (output: any, context: __SerdeContext): Pipeline[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Pipeline(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Playlist = (output: any, context: __SerdeContext): Playlist => {
  return {
    Format: __expectString(output.Format),
    HlsContentProtection:
      output.HlsContentProtection != null
        ? deserializeAws_restJson1HlsContentProtection(output.HlsContentProtection, context)
        : undefined,
    Name: __expectString(output.Name),
    OutputKeys: output.OutputKeys != null ? deserializeAws_restJson1OutputKeys(output.OutputKeys, context) : undefined,
    PlayReadyDrm:
      output.PlayReadyDrm != null ? deserializeAws_restJson1PlayReadyDrm(output.PlayReadyDrm, context) : undefined,
    Status: __expectString(output.Status),
    StatusDetail: __expectString(output.StatusDetail),
  } as any;
};

const deserializeAws_restJson1Playlists = (output: any, context: __SerdeContext): Playlist[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Playlist(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PlayReadyDrm = (output: any, context: __SerdeContext): PlayReadyDrm => {
  return {
    Format: __expectString(output.Format),
    InitializationVector: __expectString(output.InitializationVector),
    Key: __expectString(output.Key),
    KeyId: __expectString(output.KeyId),
    KeyMd5: __expectString(output.KeyMd5),
    LicenseAcquisitionUrl: __expectString(output.LicenseAcquisitionUrl),
  } as any;
};

const deserializeAws_restJson1Preset = (output: any, context: __SerdeContext): Preset => {
  return {
    Arn: __expectString(output.Arn),
    Audio: output.Audio != null ? deserializeAws_restJson1AudioParameters(output.Audio, context) : undefined,
    Container: __expectString(output.Container),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    Thumbnails: output.Thumbnails != null ? deserializeAws_restJson1Thumbnails(output.Thumbnails, context) : undefined,
    Type: __expectString(output.Type),
    Video: output.Video != null ? deserializeAws_restJson1VideoParameters(output.Video, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Presets = (output: any, context: __SerdeContext): Preset[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Preset(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PresetWatermark = (output: any, context: __SerdeContext): PresetWatermark => {
  return {
    HorizontalAlign: __expectString(output.HorizontalAlign),
    HorizontalOffset: __expectString(output.HorizontalOffset),
    Id: __expectString(output.Id),
    MaxHeight: __expectString(output.MaxHeight),
    MaxWidth: __expectString(output.MaxWidth),
    Opacity: __expectString(output.Opacity),
    SizingPolicy: __expectString(output.SizingPolicy),
    Target: __expectString(output.Target),
    VerticalAlign: __expectString(output.VerticalAlign),
    VerticalOffset: __expectString(output.VerticalOffset),
  } as any;
};

const deserializeAws_restJson1PresetWatermarks = (output: any, context: __SerdeContext): PresetWatermark[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PresetWatermark(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Thumbnails = (output: any, context: __SerdeContext): Thumbnails => {
  return {
    AspectRatio: __expectString(output.AspectRatio),
    Format: __expectString(output.Format),
    Interval: __expectString(output.Interval),
    MaxHeight: __expectString(output.MaxHeight),
    MaxWidth: __expectString(output.MaxWidth),
    PaddingPolicy: __expectString(output.PaddingPolicy),
    Resolution: __expectString(output.Resolution),
    SizingPolicy: __expectString(output.SizingPolicy),
  } as any;
};

const deserializeAws_restJson1TimeSpan = (output: any, context: __SerdeContext): TimeSpan => {
  return {
    Duration: __expectString(output.Duration),
    StartTime: __expectString(output.StartTime),
  } as any;
};

const deserializeAws_restJson1Timing = (output: any, context: __SerdeContext): Timing => {
  return {
    FinishTimeMillis: __expectLong(output.FinishTimeMillis),
    StartTimeMillis: __expectLong(output.StartTimeMillis),
    SubmitTimeMillis: __expectLong(output.SubmitTimeMillis),
  } as any;
};

const deserializeAws_restJson1UserMetadata = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1VideoParameters = (output: any, context: __SerdeContext): VideoParameters => {
  return {
    AspectRatio: __expectString(output.AspectRatio),
    BitRate: __expectString(output.BitRate),
    Codec: __expectString(output.Codec),
    CodecOptions:
      output.CodecOptions != null ? deserializeAws_restJson1CodecOptions(output.CodecOptions, context) : undefined,
    DisplayAspectRatio: __expectString(output.DisplayAspectRatio),
    FixedGOP: __expectString(output.FixedGOP),
    FrameRate: __expectString(output.FrameRate),
    KeyframesMaxDist: __expectString(output.KeyframesMaxDist),
    MaxFrameRate: __expectString(output.MaxFrameRate),
    MaxHeight: __expectString(output.MaxHeight),
    MaxWidth: __expectString(output.MaxWidth),
    PaddingPolicy: __expectString(output.PaddingPolicy),
    Resolution: __expectString(output.Resolution),
    SizingPolicy: __expectString(output.SizingPolicy),
    Watermarks:
      output.Watermarks != null ? deserializeAws_restJson1PresetWatermarks(output.Watermarks, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Warning = (output: any, context: __SerdeContext): Warning => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_restJson1Warnings = (output: any, context: __SerdeContext): Warning[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Warning(entry, context);
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
