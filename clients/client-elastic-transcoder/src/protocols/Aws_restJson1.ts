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

/**
 * serializeAws_restJson1CancelJobCommand
 */
export const se_CancelJobCommand = async (
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2012-09-25/jobs";
  let body: any;
  body = JSON.stringify({
    ...(input.Input != null && { Input: se_JobInput(input.Input, context) }),
    ...(input.Inputs != null && { Inputs: se_JobInputs(input.Inputs, context) }),
    ...(input.Output != null && { Output: se_CreateJobOutput(input.Output, context) }),
    ...(input.OutputKeyPrefix != null && { OutputKeyPrefix: input.OutputKeyPrefix }),
    ...(input.Outputs != null && { Outputs: se_CreateJobOutputs(input.Outputs, context) }),
    ...(input.PipelineId != null && { PipelineId: input.PipelineId }),
    ...(input.Playlists != null && { Playlists: se_CreateJobPlaylists(input.Playlists, context) }),
    ...(input.UserMetadata != null && { UserMetadata: se_UserMetadata(input.UserMetadata, context) }),
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
 * serializeAws_restJson1CreatePipelineCommand
 */
export const se_CreatePipelineCommand = async (
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
    ...(input.ContentConfig != null && { ContentConfig: se_PipelineOutputConfig(input.ContentConfig, context) }),
    ...(input.InputBucket != null && { InputBucket: input.InputBucket }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Notifications != null && { Notifications: se_Notifications(input.Notifications, context) }),
    ...(input.OutputBucket != null && { OutputBucket: input.OutputBucket }),
    ...(input.Role != null && { Role: input.Role }),
    ...(input.ThumbnailConfig != null && { ThumbnailConfig: se_PipelineOutputConfig(input.ThumbnailConfig, context) }),
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
 * serializeAws_restJson1CreatePresetCommand
 */
export const se_CreatePresetCommand = async (
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
    ...(input.Audio != null && { Audio: se_AudioParameters(input.Audio, context) }),
    ...(input.Container != null && { Container: input.Container }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Thumbnails != null && { Thumbnails: se_Thumbnails(input.Thumbnails, context) }),
    ...(input.Video != null && { Video: se_VideoParameters(input.Video, context) }),
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
 * serializeAws_restJson1DeletePipelineCommand
 */
export const se_DeletePipelineCommand = async (
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

/**
 * serializeAws_restJson1DeletePresetCommand
 */
export const se_DeletePresetCommand = async (
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

/**
 * serializeAws_restJson1ListJobsByPipelineCommand
 */
export const se_ListJobsByPipelineCommand = async (
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

/**
 * serializeAws_restJson1ListJobsByStatusCommand
 */
export const se_ListJobsByStatusCommand = async (
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

/**
 * serializeAws_restJson1ListPipelinesCommand
 */
export const se_ListPipelinesCommand = async (
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

/**
 * serializeAws_restJson1ListPresetsCommand
 */
export const se_ListPresetsCommand = async (
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

/**
 * serializeAws_restJson1ReadJobCommand
 */
export const se_ReadJobCommand = async (
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

/**
 * serializeAws_restJson1ReadPipelineCommand
 */
export const se_ReadPipelineCommand = async (
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

/**
 * serializeAws_restJson1ReadPresetCommand
 */
export const se_ReadPresetCommand = async (
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

/**
 * serializeAws_restJson1TestRoleCommand
 */
export const se_TestRoleCommand = async (
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
    ...(input.Topics != null && { Topics: se_SnsTopics(input.Topics, context) }),
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
 * serializeAws_restJson1UpdatePipelineCommand
 */
export const se_UpdatePipelineCommand = async (
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
    ...(input.ContentConfig != null && { ContentConfig: se_PipelineOutputConfig(input.ContentConfig, context) }),
    ...(input.InputBucket != null && { InputBucket: input.InputBucket }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Notifications != null && { Notifications: se_Notifications(input.Notifications, context) }),
    ...(input.Role != null && { Role: input.Role }),
    ...(input.ThumbnailConfig != null && { ThumbnailConfig: se_PipelineOutputConfig(input.ThumbnailConfig, context) }),
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
 * serializeAws_restJson1UpdatePipelineNotificationsCommand
 */
export const se_UpdatePipelineNotificationsCommand = async (
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
    ...(input.Notifications != null && { Notifications: se_Notifications(input.Notifications, context) }),
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
 * serializeAws_restJson1UpdatePipelineStatusCommand
 */
export const se_UpdatePipelineStatusCommand = async (
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

/**
 * deserializeAws_restJson1CancelJobCommand
 */
export const de_CancelJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CancelJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
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
    case "com.amazonaws.elastictranscoder#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IncompatibleVersionException":
    case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
      throw await de_IncompatibleVersionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.elastictranscoder#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.elastictranscoder#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.elastictranscoder#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.elastictranscoder#ValidationException":
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
  if (data.Job != null) {
    contents.Job = de_Job(data.Job, context);
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
    case "com.amazonaws.elastictranscoder#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IncompatibleVersionException":
    case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
      throw await de_IncompatibleVersionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.elastictranscoder#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.elastictranscoder#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.elastictranscoder#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.elastictranscoder#ValidationException":
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
 * deserializeAws_restJson1CreatePipelineCommand
 */
export const de_CreatePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePipelineCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreatePipelineCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Pipeline != null) {
    contents.Pipeline = de_Pipeline(data.Pipeline, context);
  }
  if (data.Warnings != null) {
    contents.Warnings = de_Warnings(data.Warnings, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreatePipelineCommandError
 */
const de_CreatePipelineCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IncompatibleVersionException":
    case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
      throw await de_IncompatibleVersionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.elastictranscoder#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.elastictranscoder#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.elastictranscoder#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.elastictranscoder#ValidationException":
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
 * deserializeAws_restJson1CreatePresetCommand
 */
export const de_CreatePresetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePresetCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreatePresetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Preset != null) {
    contents.Preset = de_Preset(data.Preset, context);
  }
  if (data.Warning != null) {
    contents.Warning = __expectString(data.Warning);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreatePresetCommandError
 */
const de_CreatePresetCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IncompatibleVersionException":
    case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
      throw await de_IncompatibleVersionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.elastictranscoder#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.elastictranscoder#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.elastictranscoder#ValidationException":
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
 * deserializeAws_restJson1DeletePipelineCommand
 */
export const de_DeletePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePipelineCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_DeletePipelineCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePipelineCommandError
 */
const de_DeletePipelineCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IncompatibleVersionException":
    case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
      throw await de_IncompatibleVersionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.elastictranscoder#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.elastictranscoder#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.elastictranscoder#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.elastictranscoder#ValidationException":
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
 * deserializeAws_restJson1DeletePresetCommand
 */
export const de_DeletePresetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePresetCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_DeletePresetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePresetCommandError
 */
const de_DeletePresetCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IncompatibleVersionException":
    case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
      throw await de_IncompatibleVersionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.elastictranscoder#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.elastictranscoder#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.elastictranscoder#ValidationException":
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
 * deserializeAws_restJson1ListJobsByPipelineCommand
 */
export const de_ListJobsByPipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsByPipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListJobsByPipelineCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Jobs != null) {
    contents.Jobs = de_Jobs(data.Jobs, context);
  }
  if (data.NextPageToken != null) {
    contents.NextPageToken = __expectString(data.NextPageToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListJobsByPipelineCommandError
 */
const de_ListJobsByPipelineCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IncompatibleVersionException":
    case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
      throw await de_IncompatibleVersionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.elastictranscoder#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.elastictranscoder#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.elastictranscoder#ValidationException":
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
 * deserializeAws_restJson1ListJobsByStatusCommand
 */
export const de_ListJobsByStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsByStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListJobsByStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Jobs != null) {
    contents.Jobs = de_Jobs(data.Jobs, context);
  }
  if (data.NextPageToken != null) {
    contents.NextPageToken = __expectString(data.NextPageToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListJobsByStatusCommandError
 */
const de_ListJobsByStatusCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IncompatibleVersionException":
    case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
      throw await de_IncompatibleVersionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.elastictranscoder#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.elastictranscoder#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.elastictranscoder#ValidationException":
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
 * deserializeAws_restJson1ListPipelinesCommand
 */
export const de_ListPipelinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelinesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListPipelinesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextPageToken != null) {
    contents.NextPageToken = __expectString(data.NextPageToken);
  }
  if (data.Pipelines != null) {
    contents.Pipelines = de_Pipelines(data.Pipelines, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListPipelinesCommandError
 */
const de_ListPipelinesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IncompatibleVersionException":
    case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
      throw await de_IncompatibleVersionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.elastictranscoder#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.elastictranscoder#ValidationException":
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
 * deserializeAws_restJson1ListPresetsCommand
 */
export const de_ListPresetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPresetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListPresetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextPageToken != null) {
    contents.NextPageToken = __expectString(data.NextPageToken);
  }
  if (data.Presets != null) {
    contents.Presets = de_Presets(data.Presets, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListPresetsCommandError
 */
const de_ListPresetsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IncompatibleVersionException":
    case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
      throw await de_IncompatibleVersionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.elastictranscoder#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.elastictranscoder#ValidationException":
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
 * deserializeAws_restJson1ReadJobCommand
 */
export const de_ReadJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReadJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ReadJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Job != null) {
    contents.Job = de_Job(data.Job, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ReadJobCommandError
 */
const de_ReadJobCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IncompatibleVersionException":
    case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
      throw await de_IncompatibleVersionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.elastictranscoder#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.elastictranscoder#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.elastictranscoder#ValidationException":
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
 * deserializeAws_restJson1ReadPipelineCommand
 */
export const de_ReadPipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReadPipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ReadPipelineCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Pipeline != null) {
    contents.Pipeline = de_Pipeline(data.Pipeline, context);
  }
  if (data.Warnings != null) {
    contents.Warnings = de_Warnings(data.Warnings, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ReadPipelineCommandError
 */
const de_ReadPipelineCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IncompatibleVersionException":
    case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
      throw await de_IncompatibleVersionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.elastictranscoder#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.elastictranscoder#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.elastictranscoder#ValidationException":
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
 * deserializeAws_restJson1ReadPresetCommand
 */
export const de_ReadPresetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReadPresetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ReadPresetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Preset != null) {
    contents.Preset = de_Preset(data.Preset, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ReadPresetCommandError
 */
const de_ReadPresetCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IncompatibleVersionException":
    case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
      throw await de_IncompatibleVersionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.elastictranscoder#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.elastictranscoder#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.elastictranscoder#ValidationException":
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
 * deserializeAws_restJson1TestRoleCommand
 */
export const de_TestRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestRoleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TestRoleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Messages != null) {
    contents.Messages = de_ExceptionMessages(data.Messages, context);
  }
  if (data.Success != null) {
    contents.Success = __expectString(data.Success);
  }
  return contents;
};

/**
 * deserializeAws_restJson1TestRoleCommandError
 */
const de_TestRoleCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IncompatibleVersionException":
    case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
      throw await de_IncompatibleVersionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.elastictranscoder#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.elastictranscoder#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.elastictranscoder#ValidationException":
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
 * deserializeAws_restJson1UpdatePipelineCommand
 */
export const de_UpdatePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdatePipelineCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Pipeline != null) {
    contents.Pipeline = de_Pipeline(data.Pipeline, context);
  }
  if (data.Warnings != null) {
    contents.Warnings = de_Warnings(data.Warnings, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePipelineCommandError
 */
const de_UpdatePipelineCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IncompatibleVersionException":
    case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
      throw await de_IncompatibleVersionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.elastictranscoder#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.elastictranscoder#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.elastictranscoder#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.elastictranscoder#ValidationException":
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
 * deserializeAws_restJson1UpdatePipelineNotificationsCommand
 */
export const de_UpdatePipelineNotificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineNotificationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdatePipelineNotificationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Pipeline != null) {
    contents.Pipeline = de_Pipeline(data.Pipeline, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePipelineNotificationsCommandError
 */
const de_UpdatePipelineNotificationsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IncompatibleVersionException":
    case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
      throw await de_IncompatibleVersionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.elastictranscoder#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.elastictranscoder#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.elastictranscoder#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.elastictranscoder#ValidationException":
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
 * deserializeAws_restJson1UpdatePipelineStatusCommand
 */
export const de_UpdatePipelineStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdatePipelineStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Pipeline != null) {
    contents.Pipeline = de_Pipeline(data.Pipeline, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePipelineStatusCommandError
 */
const de_UpdatePipelineStatusCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IncompatibleVersionException":
    case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
      throw await de_IncompatibleVersionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.elastictranscoder#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.elastictranscoder#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.elastictranscoder#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.elastictranscoder#ValidationException":
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
 * deserializeAws_restJson1IncompatibleVersionExceptionRes
 */
const de_IncompatibleVersionExceptionRes = async (
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
 * deserializeAws_restJson1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
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

/**
 * deserializeAws_restJson1ResourceInUseExceptionRes
 */
const de_ResourceInUseExceptionRes = async (
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
 * serializeAws_restJson1AccessControls
 */
const se_AccessControls = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1Artwork
 */
const se_Artwork = (input: Artwork, context: __SerdeContext): any => {
  return {
    ...(input.AlbumArtFormat != null && { AlbumArtFormat: input.AlbumArtFormat }),
    ...(input.Encryption != null && { Encryption: se_Encryption(input.Encryption, context) }),
    ...(input.InputKey != null && { InputKey: input.InputKey }),
    ...(input.MaxHeight != null && { MaxHeight: input.MaxHeight }),
    ...(input.MaxWidth != null && { MaxWidth: input.MaxWidth }),
    ...(input.PaddingPolicy != null && { PaddingPolicy: input.PaddingPolicy }),
    ...(input.SizingPolicy != null && { SizingPolicy: input.SizingPolicy }),
  };
};

/**
 * serializeAws_restJson1Artworks
 */
const se_Artworks = (input: Artwork[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Artwork(entry, context);
    });
};

/**
 * serializeAws_restJson1AudioCodecOptions
 */
const se_AudioCodecOptions = (input: AudioCodecOptions, context: __SerdeContext): any => {
  return {
    ...(input.BitDepth != null && { BitDepth: input.BitDepth }),
    ...(input.BitOrder != null && { BitOrder: input.BitOrder }),
    ...(input.Profile != null && { Profile: input.Profile }),
    ...(input.Signed != null && { Signed: input.Signed }),
  };
};

/**
 * serializeAws_restJson1AudioParameters
 */
const se_AudioParameters = (input: AudioParameters, context: __SerdeContext): any => {
  return {
    ...(input.AudioPackingMode != null && { AudioPackingMode: input.AudioPackingMode }),
    ...(input.BitRate != null && { BitRate: input.BitRate }),
    ...(input.Channels != null && { Channels: input.Channels }),
    ...(input.Codec != null && { Codec: input.Codec }),
    ...(input.CodecOptions != null && { CodecOptions: se_AudioCodecOptions(input.CodecOptions, context) }),
    ...(input.SampleRate != null && { SampleRate: input.SampleRate }),
  };
};

/**
 * serializeAws_restJson1CaptionFormat
 */
const se_CaptionFormat = (input: CaptionFormat, context: __SerdeContext): any => {
  return {
    ...(input.Encryption != null && { Encryption: se_Encryption(input.Encryption, context) }),
    ...(input.Format != null && { Format: input.Format }),
    ...(input.Pattern != null && { Pattern: input.Pattern }),
  };
};

/**
 * serializeAws_restJson1CaptionFormats
 */
const se_CaptionFormats = (input: CaptionFormat[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CaptionFormat(entry, context);
    });
};

/**
 * serializeAws_restJson1Captions
 */
const se_Captions = (input: Captions, context: __SerdeContext): any => {
  return {
    ...(input.CaptionFormats != null && { CaptionFormats: se_CaptionFormats(input.CaptionFormats, context) }),
    ...(input.CaptionSources != null && { CaptionSources: se_CaptionSources(input.CaptionSources, context) }),
    ...(input.MergePolicy != null && { MergePolicy: input.MergePolicy }),
  };
};

/**
 * serializeAws_restJson1CaptionSource
 */
const se_CaptionSource = (input: CaptionSource, context: __SerdeContext): any => {
  return {
    ...(input.Encryption != null && { Encryption: se_Encryption(input.Encryption, context) }),
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Label != null && { Label: input.Label }),
    ...(input.Language != null && { Language: input.Language }),
    ...(input.TimeOffset != null && { TimeOffset: input.TimeOffset }),
  };
};

/**
 * serializeAws_restJson1CaptionSources
 */
const se_CaptionSources = (input: CaptionSource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CaptionSource(entry, context);
    });
};

/**
 * serializeAws_restJson1Clip
 */
const se_Clip = (input: Clip, context: __SerdeContext): any => {
  return {
    ...(input.TimeSpan != null && { TimeSpan: se_TimeSpan(input.TimeSpan, context) }),
  };
};

/**
 * serializeAws_restJson1CodecOptions
 */
const se_CodecOptions = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1Composition
 */
const se_Composition = (input: Clip[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Clip(entry, context);
    });
};

/**
 * serializeAws_restJson1CreateJobOutput
 */
const se_CreateJobOutput = (input: CreateJobOutput, context: __SerdeContext): any => {
  return {
    ...(input.AlbumArt != null && { AlbumArt: se_JobAlbumArt(input.AlbumArt, context) }),
    ...(input.Captions != null && { Captions: se_Captions(input.Captions, context) }),
    ...(input.Composition != null && { Composition: se_Composition(input.Composition, context) }),
    ...(input.Encryption != null && { Encryption: se_Encryption(input.Encryption, context) }),
    ...(input.Key != null && { Key: input.Key }),
    ...(input.PresetId != null && { PresetId: input.PresetId }),
    ...(input.Rotate != null && { Rotate: input.Rotate }),
    ...(input.SegmentDuration != null && { SegmentDuration: input.SegmentDuration }),
    ...(input.ThumbnailEncryption != null && {
      ThumbnailEncryption: se_Encryption(input.ThumbnailEncryption, context),
    }),
    ...(input.ThumbnailPattern != null && { ThumbnailPattern: input.ThumbnailPattern }),
    ...(input.Watermarks != null && { Watermarks: se_JobWatermarks(input.Watermarks, context) }),
  };
};

/**
 * serializeAws_restJson1CreateJobOutputs
 */
const se_CreateJobOutputs = (input: CreateJobOutput[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CreateJobOutput(entry, context);
    });
};

/**
 * serializeAws_restJson1CreateJobPlaylist
 */
const se_CreateJobPlaylist = (input: CreateJobPlaylist, context: __SerdeContext): any => {
  return {
    ...(input.Format != null && { Format: input.Format }),
    ...(input.HlsContentProtection != null && {
      HlsContentProtection: se_HlsContentProtection(input.HlsContentProtection, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OutputKeys != null && { OutputKeys: se_OutputKeys(input.OutputKeys, context) }),
    ...(input.PlayReadyDrm != null && { PlayReadyDrm: se_PlayReadyDrm(input.PlayReadyDrm, context) }),
  };
};

/**
 * serializeAws_restJson1CreateJobPlaylists
 */
const se_CreateJobPlaylists = (input: CreateJobPlaylist[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CreateJobPlaylist(entry, context);
    });
};

/**
 * serializeAws_restJson1DetectedProperties
 */
const se_DetectedProperties = (input: DetectedProperties, context: __SerdeContext): any => {
  return {
    ...(input.DurationMillis != null && { DurationMillis: input.DurationMillis }),
    ...(input.FileSize != null && { FileSize: input.FileSize }),
    ...(input.FrameRate != null && { FrameRate: input.FrameRate }),
    ...(input.Height != null && { Height: input.Height }),
    ...(input.Width != null && { Width: input.Width }),
  };
};

/**
 * serializeAws_restJson1Encryption
 */
const se_Encryption = (input: Encryption, context: __SerdeContext): any => {
  return {
    ...(input.InitializationVector != null && { InitializationVector: input.InitializationVector }),
    ...(input.Key != null && { Key: input.Key }),
    ...(input.KeyMd5 != null && { KeyMd5: input.KeyMd5 }),
    ...(input.Mode != null && { Mode: input.Mode }),
  };
};

/**
 * serializeAws_restJson1HlsContentProtection
 */
const se_HlsContentProtection = (input: HlsContentProtection, context: __SerdeContext): any => {
  return {
    ...(input.InitializationVector != null && { InitializationVector: input.InitializationVector }),
    ...(input.Key != null && { Key: input.Key }),
    ...(input.KeyMd5 != null && { KeyMd5: input.KeyMd5 }),
    ...(input.KeyStoragePolicy != null && { KeyStoragePolicy: input.KeyStoragePolicy }),
    ...(input.LicenseAcquisitionUrl != null && { LicenseAcquisitionUrl: input.LicenseAcquisitionUrl }),
    ...(input.Method != null && { Method: input.Method }),
  };
};

/**
 * serializeAws_restJson1InputCaptions
 */
const se_InputCaptions = (input: InputCaptions, context: __SerdeContext): any => {
  return {
    ...(input.CaptionSources != null && { CaptionSources: se_CaptionSources(input.CaptionSources, context) }),
    ...(input.MergePolicy != null && { MergePolicy: input.MergePolicy }),
  };
};

/**
 * serializeAws_restJson1JobAlbumArt
 */
const se_JobAlbumArt = (input: JobAlbumArt, context: __SerdeContext): any => {
  return {
    ...(input.Artwork != null && { Artwork: se_Artworks(input.Artwork, context) }),
    ...(input.MergePolicy != null && { MergePolicy: input.MergePolicy }),
  };
};

/**
 * serializeAws_restJson1JobInput
 */
const se_JobInput = (input: JobInput, context: __SerdeContext): any => {
  return {
    ...(input.AspectRatio != null && { AspectRatio: input.AspectRatio }),
    ...(input.Container != null && { Container: input.Container }),
    ...(input.DetectedProperties != null && {
      DetectedProperties: se_DetectedProperties(input.DetectedProperties, context),
    }),
    ...(input.Encryption != null && { Encryption: se_Encryption(input.Encryption, context) }),
    ...(input.FrameRate != null && { FrameRate: input.FrameRate }),
    ...(input.InputCaptions != null && { InputCaptions: se_InputCaptions(input.InputCaptions, context) }),
    ...(input.Interlaced != null && { Interlaced: input.Interlaced }),
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Resolution != null && { Resolution: input.Resolution }),
    ...(input.TimeSpan != null && { TimeSpan: se_TimeSpan(input.TimeSpan, context) }),
  };
};

/**
 * serializeAws_restJson1JobInputs
 */
const se_JobInputs = (input: JobInput[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_JobInput(entry, context);
    });
};

/**
 * serializeAws_restJson1JobWatermark
 */
const se_JobWatermark = (input: JobWatermark, context: __SerdeContext): any => {
  return {
    ...(input.Encryption != null && { Encryption: se_Encryption(input.Encryption, context) }),
    ...(input.InputKey != null && { InputKey: input.InputKey }),
    ...(input.PresetWatermarkId != null && { PresetWatermarkId: input.PresetWatermarkId }),
  };
};

/**
 * serializeAws_restJson1JobWatermarks
 */
const se_JobWatermarks = (input: JobWatermark[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_JobWatermark(entry, context);
    });
};

/**
 * serializeAws_restJson1Notifications
 */
const se_Notifications = (input: Notifications, context: __SerdeContext): any => {
  return {
    ...(input.Completed != null && { Completed: input.Completed }),
    ...(input.Error != null && { Error: input.Error }),
    ...(input.Progressing != null && { Progressing: input.Progressing }),
    ...(input.Warning != null && { Warning: input.Warning }),
  };
};

/**
 * serializeAws_restJson1OutputKeys
 */
const se_OutputKeys = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1Permission
 */
const se_Permission = (input: Permission, context: __SerdeContext): any => {
  return {
    ...(input.Access != null && { Access: se_AccessControls(input.Access, context) }),
    ...(input.Grantee != null && { Grantee: input.Grantee }),
    ...(input.GranteeType != null && { GranteeType: input.GranteeType }),
  };
};

/**
 * serializeAws_restJson1Permissions
 */
const se_Permissions = (input: Permission[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Permission(entry, context);
    });
};

/**
 * serializeAws_restJson1PipelineOutputConfig
 */
const se_PipelineOutputConfig = (input: PipelineOutputConfig, context: __SerdeContext): any => {
  return {
    ...(input.Bucket != null && { Bucket: input.Bucket }),
    ...(input.Permissions != null && { Permissions: se_Permissions(input.Permissions, context) }),
    ...(input.StorageClass != null && { StorageClass: input.StorageClass }),
  };
};

/**
 * serializeAws_restJson1PlayReadyDrm
 */
const se_PlayReadyDrm = (input: PlayReadyDrm, context: __SerdeContext): any => {
  return {
    ...(input.Format != null && { Format: input.Format }),
    ...(input.InitializationVector != null && { InitializationVector: input.InitializationVector }),
    ...(input.Key != null && { Key: input.Key }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.KeyMd5 != null && { KeyMd5: input.KeyMd5 }),
    ...(input.LicenseAcquisitionUrl != null && { LicenseAcquisitionUrl: input.LicenseAcquisitionUrl }),
  };
};

/**
 * serializeAws_restJson1PresetWatermark
 */
const se_PresetWatermark = (input: PresetWatermark, context: __SerdeContext): any => {
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

/**
 * serializeAws_restJson1PresetWatermarks
 */
const se_PresetWatermarks = (input: PresetWatermark[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PresetWatermark(entry, context);
    });
};

/**
 * serializeAws_restJson1SnsTopics
 */
const se_SnsTopics = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1Thumbnails
 */
const se_Thumbnails = (input: Thumbnails, context: __SerdeContext): any => {
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

/**
 * serializeAws_restJson1TimeSpan
 */
const se_TimeSpan = (input: TimeSpan, context: __SerdeContext): any => {
  return {
    ...(input.Duration != null && { Duration: input.Duration }),
    ...(input.StartTime != null && { StartTime: input.StartTime }),
  };
};

/**
 * serializeAws_restJson1UserMetadata
 */
const se_UserMetadata = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1VideoParameters
 */
const se_VideoParameters = (input: VideoParameters, context: __SerdeContext): any => {
  return {
    ...(input.AspectRatio != null && { AspectRatio: input.AspectRatio }),
    ...(input.BitRate != null && { BitRate: input.BitRate }),
    ...(input.Codec != null && { Codec: input.Codec }),
    ...(input.CodecOptions != null && { CodecOptions: se_CodecOptions(input.CodecOptions, context) }),
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
    ...(input.Watermarks != null && { Watermarks: se_PresetWatermarks(input.Watermarks, context) }),
  };
};

/**
 * deserializeAws_restJson1AccessControls
 */
const de_AccessControls = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1Artwork
 */
const de_Artwork = (output: any, context: __SerdeContext): Artwork => {
  return {
    AlbumArtFormat: __expectString(output.AlbumArtFormat),
    Encryption: output.Encryption != null ? de_Encryption(output.Encryption, context) : undefined,
    InputKey: __expectString(output.InputKey),
    MaxHeight: __expectString(output.MaxHeight),
    MaxWidth: __expectString(output.MaxWidth),
    PaddingPolicy: __expectString(output.PaddingPolicy),
    SizingPolicy: __expectString(output.SizingPolicy),
  } as any;
};

/**
 * deserializeAws_restJson1Artworks
 */
const de_Artworks = (output: any, context: __SerdeContext): Artwork[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Artwork(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AudioCodecOptions
 */
const de_AudioCodecOptions = (output: any, context: __SerdeContext): AudioCodecOptions => {
  return {
    BitDepth: __expectString(output.BitDepth),
    BitOrder: __expectString(output.BitOrder),
    Profile: __expectString(output.Profile),
    Signed: __expectString(output.Signed),
  } as any;
};

/**
 * deserializeAws_restJson1AudioParameters
 */
const de_AudioParameters = (output: any, context: __SerdeContext): AudioParameters => {
  return {
    AudioPackingMode: __expectString(output.AudioPackingMode),
    BitRate: __expectString(output.BitRate),
    Channels: __expectString(output.Channels),
    Codec: __expectString(output.Codec),
    CodecOptions: output.CodecOptions != null ? de_AudioCodecOptions(output.CodecOptions, context) : undefined,
    SampleRate: __expectString(output.SampleRate),
  } as any;
};

/**
 * deserializeAws_restJson1CaptionFormat
 */
const de_CaptionFormat = (output: any, context: __SerdeContext): CaptionFormat => {
  return {
    Encryption: output.Encryption != null ? de_Encryption(output.Encryption, context) : undefined,
    Format: __expectString(output.Format),
    Pattern: __expectString(output.Pattern),
  } as any;
};

/**
 * deserializeAws_restJson1CaptionFormats
 */
const de_CaptionFormats = (output: any, context: __SerdeContext): CaptionFormat[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CaptionFormat(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Captions
 */
const de_Captions = (output: any, context: __SerdeContext): Captions => {
  return {
    CaptionFormats: output.CaptionFormats != null ? de_CaptionFormats(output.CaptionFormats, context) : undefined,
    CaptionSources: output.CaptionSources != null ? de_CaptionSources(output.CaptionSources, context) : undefined,
    MergePolicy: __expectString(output.MergePolicy),
  } as any;
};

/**
 * deserializeAws_restJson1CaptionSource
 */
const de_CaptionSource = (output: any, context: __SerdeContext): CaptionSource => {
  return {
    Encryption: output.Encryption != null ? de_Encryption(output.Encryption, context) : undefined,
    Key: __expectString(output.Key),
    Label: __expectString(output.Label),
    Language: __expectString(output.Language),
    TimeOffset: __expectString(output.TimeOffset),
  } as any;
};

/**
 * deserializeAws_restJson1CaptionSources
 */
const de_CaptionSources = (output: any, context: __SerdeContext): CaptionSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CaptionSource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Clip
 */
const de_Clip = (output: any, context: __SerdeContext): Clip => {
  return {
    TimeSpan: output.TimeSpan != null ? de_TimeSpan(output.TimeSpan, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CodecOptions
 */
const de_CodecOptions = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1Composition
 */
const de_Composition = (output: any, context: __SerdeContext): Clip[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Clip(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DetectedProperties
 */
const de_DetectedProperties = (output: any, context: __SerdeContext): DetectedProperties => {
  return {
    DurationMillis: __expectLong(output.DurationMillis),
    FileSize: __expectLong(output.FileSize),
    FrameRate: __expectString(output.FrameRate),
    Height: __expectInt32(output.Height),
    Width: __expectInt32(output.Width),
  } as any;
};

/**
 * deserializeAws_restJson1Encryption
 */
const de_Encryption = (output: any, context: __SerdeContext): Encryption => {
  return {
    InitializationVector: __expectString(output.InitializationVector),
    Key: __expectString(output.Key),
    KeyMd5: __expectString(output.KeyMd5),
    Mode: __expectString(output.Mode),
  } as any;
};

/**
 * deserializeAws_restJson1ExceptionMessages
 */
const de_ExceptionMessages = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1HlsContentProtection
 */
const de_HlsContentProtection = (output: any, context: __SerdeContext): HlsContentProtection => {
  return {
    InitializationVector: __expectString(output.InitializationVector),
    Key: __expectString(output.Key),
    KeyMd5: __expectString(output.KeyMd5),
    KeyStoragePolicy: __expectString(output.KeyStoragePolicy),
    LicenseAcquisitionUrl: __expectString(output.LicenseAcquisitionUrl),
    Method: __expectString(output.Method),
  } as any;
};

/**
 * deserializeAws_restJson1InputCaptions
 */
const de_InputCaptions = (output: any, context: __SerdeContext): InputCaptions => {
  return {
    CaptionSources: output.CaptionSources != null ? de_CaptionSources(output.CaptionSources, context) : undefined,
    MergePolicy: __expectString(output.MergePolicy),
  } as any;
};

/**
 * deserializeAws_restJson1Job
 */
const de_Job = (output: any, context: __SerdeContext): Job => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    Input: output.Input != null ? de_JobInput(output.Input, context) : undefined,
    Inputs: output.Inputs != null ? de_JobInputs(output.Inputs, context) : undefined,
    Output: output.Output != null ? de_JobOutput(output.Output, context) : undefined,
    OutputKeyPrefix: __expectString(output.OutputKeyPrefix),
    Outputs: output.Outputs != null ? de_JobOutputs(output.Outputs, context) : undefined,
    PipelineId: __expectString(output.PipelineId),
    Playlists: output.Playlists != null ? de_Playlists(output.Playlists, context) : undefined,
    Status: __expectString(output.Status),
    Timing: output.Timing != null ? de_Timing(output.Timing, context) : undefined,
    UserMetadata: output.UserMetadata != null ? de_UserMetadata(output.UserMetadata, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1JobAlbumArt
 */
const de_JobAlbumArt = (output: any, context: __SerdeContext): JobAlbumArt => {
  return {
    Artwork: output.Artwork != null ? de_Artworks(output.Artwork, context) : undefined,
    MergePolicy: __expectString(output.MergePolicy),
  } as any;
};

/**
 * deserializeAws_restJson1JobInput
 */
const de_JobInput = (output: any, context: __SerdeContext): JobInput => {
  return {
    AspectRatio: __expectString(output.AspectRatio),
    Container: __expectString(output.Container),
    DetectedProperties:
      output.DetectedProperties != null ? de_DetectedProperties(output.DetectedProperties, context) : undefined,
    Encryption: output.Encryption != null ? de_Encryption(output.Encryption, context) : undefined,
    FrameRate: __expectString(output.FrameRate),
    InputCaptions: output.InputCaptions != null ? de_InputCaptions(output.InputCaptions, context) : undefined,
    Interlaced: __expectString(output.Interlaced),
    Key: __expectString(output.Key),
    Resolution: __expectString(output.Resolution),
    TimeSpan: output.TimeSpan != null ? de_TimeSpan(output.TimeSpan, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1JobInputs
 */
const de_JobInputs = (output: any, context: __SerdeContext): JobInput[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_JobInput(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1JobOutput
 */
const de_JobOutput = (output: any, context: __SerdeContext): JobOutput => {
  return {
    AlbumArt: output.AlbumArt != null ? de_JobAlbumArt(output.AlbumArt, context) : undefined,
    AppliedColorSpaceConversion: __expectString(output.AppliedColorSpaceConversion),
    Captions: output.Captions != null ? de_Captions(output.Captions, context) : undefined,
    Composition: output.Composition != null ? de_Composition(output.Composition, context) : undefined,
    Duration: __expectLong(output.Duration),
    DurationMillis: __expectLong(output.DurationMillis),
    Encryption: output.Encryption != null ? de_Encryption(output.Encryption, context) : undefined,
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
      output.ThumbnailEncryption != null ? de_Encryption(output.ThumbnailEncryption, context) : undefined,
    ThumbnailPattern: __expectString(output.ThumbnailPattern),
    Watermarks: output.Watermarks != null ? de_JobWatermarks(output.Watermarks, context) : undefined,
    Width: __expectInt32(output.Width),
  } as any;
};

/**
 * deserializeAws_restJson1JobOutputs
 */
const de_JobOutputs = (output: any, context: __SerdeContext): JobOutput[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_JobOutput(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Jobs
 */
const de_Jobs = (output: any, context: __SerdeContext): Job[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Job(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1JobWatermark
 */
const de_JobWatermark = (output: any, context: __SerdeContext): JobWatermark => {
  return {
    Encryption: output.Encryption != null ? de_Encryption(output.Encryption, context) : undefined,
    InputKey: __expectString(output.InputKey),
    PresetWatermarkId: __expectString(output.PresetWatermarkId),
  } as any;
};

/**
 * deserializeAws_restJson1JobWatermarks
 */
const de_JobWatermarks = (output: any, context: __SerdeContext): JobWatermark[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_JobWatermark(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Notifications
 */
const de_Notifications = (output: any, context: __SerdeContext): Notifications => {
  return {
    Completed: __expectString(output.Completed),
    Error: __expectString(output.Error),
    Progressing: __expectString(output.Progressing),
    Warning: __expectString(output.Warning),
  } as any;
};

/**
 * deserializeAws_restJson1OutputKeys
 */
const de_OutputKeys = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1Permission
 */
const de_Permission = (output: any, context: __SerdeContext): Permission => {
  return {
    Access: output.Access != null ? de_AccessControls(output.Access, context) : undefined,
    Grantee: __expectString(output.Grantee),
    GranteeType: __expectString(output.GranteeType),
  } as any;
};

/**
 * deserializeAws_restJson1Permissions
 */
const de_Permissions = (output: any, context: __SerdeContext): Permission[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Permission(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Pipeline
 */
const de_Pipeline = (output: any, context: __SerdeContext): Pipeline => {
  return {
    Arn: __expectString(output.Arn),
    AwsKmsKeyArn: __expectString(output.AwsKmsKeyArn),
    ContentConfig: output.ContentConfig != null ? de_PipelineOutputConfig(output.ContentConfig, context) : undefined,
    Id: __expectString(output.Id),
    InputBucket: __expectString(output.InputBucket),
    Name: __expectString(output.Name),
    Notifications: output.Notifications != null ? de_Notifications(output.Notifications, context) : undefined,
    OutputBucket: __expectString(output.OutputBucket),
    Role: __expectString(output.Role),
    Status: __expectString(output.Status),
    ThumbnailConfig:
      output.ThumbnailConfig != null ? de_PipelineOutputConfig(output.ThumbnailConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PipelineOutputConfig
 */
const de_PipelineOutputConfig = (output: any, context: __SerdeContext): PipelineOutputConfig => {
  return {
    Bucket: __expectString(output.Bucket),
    Permissions: output.Permissions != null ? de_Permissions(output.Permissions, context) : undefined,
    StorageClass: __expectString(output.StorageClass),
  } as any;
};

/**
 * deserializeAws_restJson1Pipelines
 */
const de_Pipelines = (output: any, context: __SerdeContext): Pipeline[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Pipeline(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Playlist
 */
const de_Playlist = (output: any, context: __SerdeContext): Playlist => {
  return {
    Format: __expectString(output.Format),
    HlsContentProtection:
      output.HlsContentProtection != null ? de_HlsContentProtection(output.HlsContentProtection, context) : undefined,
    Name: __expectString(output.Name),
    OutputKeys: output.OutputKeys != null ? de_OutputKeys(output.OutputKeys, context) : undefined,
    PlayReadyDrm: output.PlayReadyDrm != null ? de_PlayReadyDrm(output.PlayReadyDrm, context) : undefined,
    Status: __expectString(output.Status),
    StatusDetail: __expectString(output.StatusDetail),
  } as any;
};

/**
 * deserializeAws_restJson1Playlists
 */
const de_Playlists = (output: any, context: __SerdeContext): Playlist[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Playlist(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PlayReadyDrm
 */
const de_PlayReadyDrm = (output: any, context: __SerdeContext): PlayReadyDrm => {
  return {
    Format: __expectString(output.Format),
    InitializationVector: __expectString(output.InitializationVector),
    Key: __expectString(output.Key),
    KeyId: __expectString(output.KeyId),
    KeyMd5: __expectString(output.KeyMd5),
    LicenseAcquisitionUrl: __expectString(output.LicenseAcquisitionUrl),
  } as any;
};

/**
 * deserializeAws_restJson1Preset
 */
const de_Preset = (output: any, context: __SerdeContext): Preset => {
  return {
    Arn: __expectString(output.Arn),
    Audio: output.Audio != null ? de_AudioParameters(output.Audio, context) : undefined,
    Container: __expectString(output.Container),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    Thumbnails: output.Thumbnails != null ? de_Thumbnails(output.Thumbnails, context) : undefined,
    Type: __expectString(output.Type),
    Video: output.Video != null ? de_VideoParameters(output.Video, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Presets
 */
const de_Presets = (output: any, context: __SerdeContext): Preset[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Preset(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PresetWatermark
 */
const de_PresetWatermark = (output: any, context: __SerdeContext): PresetWatermark => {
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

/**
 * deserializeAws_restJson1PresetWatermarks
 */
const de_PresetWatermarks = (output: any, context: __SerdeContext): PresetWatermark[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PresetWatermark(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Thumbnails
 */
const de_Thumbnails = (output: any, context: __SerdeContext): Thumbnails => {
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

/**
 * deserializeAws_restJson1TimeSpan
 */
const de_TimeSpan = (output: any, context: __SerdeContext): TimeSpan => {
  return {
    Duration: __expectString(output.Duration),
    StartTime: __expectString(output.StartTime),
  } as any;
};

/**
 * deserializeAws_restJson1Timing
 */
const de_Timing = (output: any, context: __SerdeContext): Timing => {
  return {
    FinishTimeMillis: __expectLong(output.FinishTimeMillis),
    StartTimeMillis: __expectLong(output.StartTimeMillis),
    SubmitTimeMillis: __expectLong(output.SubmitTimeMillis),
  } as any;
};

/**
 * deserializeAws_restJson1UserMetadata
 */
const de_UserMetadata = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1VideoParameters
 */
const de_VideoParameters = (output: any, context: __SerdeContext): VideoParameters => {
  return {
    AspectRatio: __expectString(output.AspectRatio),
    BitRate: __expectString(output.BitRate),
    Codec: __expectString(output.Codec),
    CodecOptions: output.CodecOptions != null ? de_CodecOptions(output.CodecOptions, context) : undefined,
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
    Watermarks: output.Watermarks != null ? de_PresetWatermarks(output.Watermarks, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Warning
 */
const de_Warning = (output: any, context: __SerdeContext): Warning => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_restJson1Warnings
 */
const de_Warnings = (output: any, context: __SerdeContext): Warning[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Warning(entry, context);
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
