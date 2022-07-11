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
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
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
    ...(input.Input != undefined && { Input: serializeAws_restJson1JobInput(input.Input, context) }),
    ...(input.Inputs != undefined && { Inputs: serializeAws_restJson1JobInputs(input.Inputs, context) }),
    ...(input.Output != undefined && { Output: serializeAws_restJson1CreateJobOutput(input.Output, context) }),
    ...(input.OutputKeyPrefix != undefined && { OutputKeyPrefix: input.OutputKeyPrefix }),
    ...(input.Outputs != undefined && { Outputs: serializeAws_restJson1CreateJobOutputs(input.Outputs, context) }),
    ...(input.PipelineId != undefined && { PipelineId: input.PipelineId }),
    ...(input.Playlists != undefined && {
      Playlists: serializeAws_restJson1CreateJobPlaylists(input.Playlists, context),
    }),
    ...(input.UserMetadata != undefined && {
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
    ...(input.AwsKmsKeyArn != undefined && { AwsKmsKeyArn: input.AwsKmsKeyArn }),
    ...(input.ContentConfig != undefined && {
      ContentConfig: serializeAws_restJson1PipelineOutputConfig(input.ContentConfig, context),
    }),
    ...(input.InputBucket != undefined && { InputBucket: input.InputBucket }),
    ...(input.Name != undefined && { Name: input.Name }),
    ...(input.Notifications != undefined && {
      Notifications: serializeAws_restJson1Notifications(input.Notifications, context),
    }),
    ...(input.OutputBucket != undefined && { OutputBucket: input.OutputBucket }),
    ...(input.Role != undefined && { Role: input.Role }),
    ...(input.ThumbnailConfig != undefined && {
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
    ...(input.Audio != undefined && { Audio: serializeAws_restJson1AudioParameters(input.Audio, context) }),
    ...(input.Container != undefined && { Container: input.Container }),
    ...(input.Description != undefined && { Description: input.Description }),
    ...(input.Name != undefined && { Name: input.Name }),
    ...(input.Thumbnails != undefined && { Thumbnails: serializeAws_restJson1Thumbnails(input.Thumbnails, context) }),
    ...(input.Video != undefined && { Video: serializeAws_restJson1VideoParameters(input.Video, context) }),
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
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
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
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
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
  if (input.PipelineId !== undefined) {
    const labelValue: string = input.PipelineId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: PipelineId.");
    }
    resolvedPath = resolvedPath.replace("{PipelineId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: PipelineId.");
  }
  const query: any = {
    ...(input.Ascending !== undefined && { Ascending: input.Ascending }),
    ...(input.PageToken !== undefined && { PageToken: input.PageToken }),
  };
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
  if (input.Status !== undefined) {
    const labelValue: string = input.Status;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Status.");
    }
    resolvedPath = resolvedPath.replace("{Status}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Status.");
  }
  const query: any = {
    ...(input.Ascending !== undefined && { Ascending: input.Ascending }),
    ...(input.PageToken !== undefined && { PageToken: input.PageToken }),
  };
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
  const query: any = {
    ...(input.Ascending !== undefined && { Ascending: input.Ascending }),
    ...(input.PageToken !== undefined && { PageToken: input.PageToken }),
  };
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
  const query: any = {
    ...(input.Ascending !== undefined && { Ascending: input.Ascending }),
    ...(input.PageToken !== undefined && { PageToken: input.PageToken }),
  };
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
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
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
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
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
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
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
    ...(input.InputBucket != undefined && { InputBucket: input.InputBucket }),
    ...(input.OutputBucket != undefined && { OutputBucket: input.OutputBucket }),
    ...(input.Role != undefined && { Role: input.Role }),
    ...(input.Topics != undefined && { Topics: serializeAws_restJson1SnsTopics(input.Topics, context) }),
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
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.AwsKmsKeyArn != undefined && { AwsKmsKeyArn: input.AwsKmsKeyArn }),
    ...(input.ContentConfig != undefined && {
      ContentConfig: serializeAws_restJson1PipelineOutputConfig(input.ContentConfig, context),
    }),
    ...(input.InputBucket != undefined && { InputBucket: input.InputBucket }),
    ...(input.Name != undefined && { Name: input.Name }),
    ...(input.Notifications != undefined && {
      Notifications: serializeAws_restJson1Notifications(input.Notifications, context),
    }),
    ...(input.Role != undefined && { Role: input.Role }),
    ...(input.ThumbnailConfig != undefined && {
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
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Notifications != undefined && {
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
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Status != undefined && { Status: input.Status }),
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
  const contents: CancelJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CancelJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateJobCommandError(output, context);
  }
  const contents: CreateJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    Job: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Job !== undefined && data.Job !== null) {
    contents.Job = deserializeAws_restJson1Job(data.Job, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreatePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePipelineCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreatePipelineCommandError(output, context);
  }
  const contents: CreatePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    Pipeline: undefined,
    Warnings: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Pipeline !== undefined && data.Pipeline !== null) {
    contents.Pipeline = deserializeAws_restJson1Pipeline(data.Pipeline, context);
  }
  if (data.Warnings !== undefined && data.Warnings !== null) {
    contents.Warnings = deserializeAws_restJson1Warnings(data.Warnings, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreatePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreatePresetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePresetCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreatePresetCommandError(output, context);
  }
  const contents: CreatePresetCommandOutput = {
    $metadata: deserializeMetadata(output),
    Preset: undefined,
    Warning: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Preset !== undefined && data.Preset !== null) {
    contents.Preset = deserializeAws_restJson1Preset(data.Preset, context);
  }
  if (data.Warning !== undefined && data.Warning !== null) {
    contents.Warning = __expectString(data.Warning);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreatePresetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePresetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeletePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePipelineCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeletePipelineCommandError(output, context);
  }
  const contents: DeletePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeletePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeletePresetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePresetCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeletePresetCommandError(output, context);
  }
  const contents: DeletePresetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeletePresetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePresetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListJobsByPipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsByPipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListJobsByPipelineCommandError(output, context);
  }
  const contents: ListJobsByPipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    Jobs: undefined,
    NextPageToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Jobs !== undefined && data.Jobs !== null) {
    contents.Jobs = deserializeAws_restJson1Jobs(data.Jobs, context);
  }
  if (data.NextPageToken !== undefined && data.NextPageToken !== null) {
    contents.NextPageToken = __expectString(data.NextPageToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListJobsByPipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsByPipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListJobsByStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsByStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListJobsByStatusCommandError(output, context);
  }
  const contents: ListJobsByStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    Jobs: undefined,
    NextPageToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Jobs !== undefined && data.Jobs !== null) {
    contents.Jobs = deserializeAws_restJson1Jobs(data.Jobs, context);
  }
  if (data.NextPageToken !== undefined && data.NextPageToken !== null) {
    contents.NextPageToken = __expectString(data.NextPageToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListJobsByStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsByStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListPipelinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelinesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPipelinesCommandError(output, context);
  }
  const contents: ListPipelinesCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextPageToken: undefined,
    Pipelines: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextPageToken !== undefined && data.NextPageToken !== null) {
    contents.NextPageToken = __expectString(data.NextPageToken);
  }
  if (data.Pipelines !== undefined && data.Pipelines !== null) {
    contents.Pipelines = deserializeAws_restJson1Pipelines(data.Pipelines, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListPipelinesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelinesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListPresetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPresetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPresetsCommandError(output, context);
  }
  const contents: ListPresetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextPageToken: undefined,
    Presets: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextPageToken !== undefined && data.NextPageToken !== null) {
    contents.NextPageToken = __expectString(data.NextPageToken);
  }
  if (data.Presets !== undefined && data.Presets !== null) {
    contents.Presets = deserializeAws_restJson1Presets(data.Presets, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListPresetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPresetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ReadJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReadJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ReadJobCommandError(output, context);
  }
  const contents: ReadJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    Job: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Job !== undefined && data.Job !== null) {
    contents.Job = deserializeAws_restJson1Job(data.Job, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ReadJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReadJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ReadPipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReadPipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ReadPipelineCommandError(output, context);
  }
  const contents: ReadPipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    Pipeline: undefined,
    Warnings: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Pipeline !== undefined && data.Pipeline !== null) {
    contents.Pipeline = deserializeAws_restJson1Pipeline(data.Pipeline, context);
  }
  if (data.Warnings !== undefined && data.Warnings !== null) {
    contents.Warnings = deserializeAws_restJson1Warnings(data.Warnings, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ReadPipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReadPipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ReadPresetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReadPresetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ReadPresetCommandError(output, context);
  }
  const contents: ReadPresetCommandOutput = {
    $metadata: deserializeMetadata(output),
    Preset: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Preset !== undefined && data.Preset !== null) {
    contents.Preset = deserializeAws_restJson1Preset(data.Preset, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ReadPresetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReadPresetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1TestRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestRoleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TestRoleCommandError(output, context);
  }
  const contents: TestRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    Messages: undefined,
    Success: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Messages !== undefined && data.Messages !== null) {
    contents.Messages = deserializeAws_restJson1ExceptionMessages(data.Messages, context);
  }
  if (data.Success !== undefined && data.Success !== null) {
    contents.Success = __expectString(data.Success);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TestRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestRoleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdatePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdatePipelineCommandError(output, context);
  }
  const contents: UpdatePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    Pipeline: undefined,
    Warnings: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Pipeline !== undefined && data.Pipeline !== null) {
    contents.Pipeline = deserializeAws_restJson1Pipeline(data.Pipeline, context);
  }
  if (data.Warnings !== undefined && data.Warnings !== null) {
    contents.Warnings = deserializeAws_restJson1Warnings(data.Warnings, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdatePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdatePipelineNotificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineNotificationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdatePipelineNotificationsCommandError(output, context);
  }
  const contents: UpdatePipelineNotificationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Pipeline: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Pipeline !== undefined && data.Pipeline !== null) {
    contents.Pipeline = deserializeAws_restJson1Pipeline(data.Pipeline, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdatePipelineNotificationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineNotificationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdatePipelineStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdatePipelineStatusCommandError(output, context);
  }
  const contents: UpdatePipelineStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    Pipeline: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Pipeline !== undefined && data.Pipeline !== null) {
    contents.Pipeline = deserializeAws_restJson1Pipeline(data.Pipeline, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdatePipelineStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
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
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
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
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
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
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
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
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
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
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
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
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
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
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1Artwork = (input: Artwork, context: __SerdeContext): any => {
  return {
    ...(input.AlbumArtFormat != undefined && { AlbumArtFormat: input.AlbumArtFormat }),
    ...(input.Encryption != undefined && { Encryption: serializeAws_restJson1Encryption(input.Encryption, context) }),
    ...(input.InputKey != undefined && { InputKey: input.InputKey }),
    ...(input.MaxHeight != undefined && { MaxHeight: input.MaxHeight }),
    ...(input.MaxWidth != undefined && { MaxWidth: input.MaxWidth }),
    ...(input.PaddingPolicy != undefined && { PaddingPolicy: input.PaddingPolicy }),
    ...(input.SizingPolicy != undefined && { SizingPolicy: input.SizingPolicy }),
  };
};

const serializeAws_restJson1Artworks = (input: Artwork[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Artwork(entry, context);
    });
};

const serializeAws_restJson1AudioCodecOptions = (input: AudioCodecOptions, context: __SerdeContext): any => {
  return {
    ...(input.BitDepth != undefined && { BitDepth: input.BitDepth }),
    ...(input.BitOrder != undefined && { BitOrder: input.BitOrder }),
    ...(input.Profile != undefined && { Profile: input.Profile }),
    ...(input.Signed != undefined && { Signed: input.Signed }),
  };
};

const serializeAws_restJson1AudioParameters = (input: AudioParameters, context: __SerdeContext): any => {
  return {
    ...(input.AudioPackingMode != undefined && { AudioPackingMode: input.AudioPackingMode }),
    ...(input.BitRate != undefined && { BitRate: input.BitRate }),
    ...(input.Channels != undefined && { Channels: input.Channels }),
    ...(input.Codec != undefined && { Codec: input.Codec }),
    ...(input.CodecOptions != undefined && {
      CodecOptions: serializeAws_restJson1AudioCodecOptions(input.CodecOptions, context),
    }),
    ...(input.SampleRate != undefined && { SampleRate: input.SampleRate }),
  };
};

const serializeAws_restJson1CaptionFormat = (input: CaptionFormat, context: __SerdeContext): any => {
  return {
    ...(input.Encryption != undefined && { Encryption: serializeAws_restJson1Encryption(input.Encryption, context) }),
    ...(input.Format != undefined && { Format: input.Format }),
    ...(input.Pattern != undefined && { Pattern: input.Pattern }),
  };
};

const serializeAws_restJson1CaptionFormats = (input: CaptionFormat[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1CaptionFormat(entry, context);
    });
};

const serializeAws_restJson1Captions = (input: Captions, context: __SerdeContext): any => {
  return {
    ...(input.CaptionFormats != undefined && {
      CaptionFormats: serializeAws_restJson1CaptionFormats(input.CaptionFormats, context),
    }),
    ...(input.CaptionSources != undefined && {
      CaptionSources: serializeAws_restJson1CaptionSources(input.CaptionSources, context),
    }),
    ...(input.MergePolicy != undefined && { MergePolicy: input.MergePolicy }),
  };
};

const serializeAws_restJson1CaptionSource = (input: CaptionSource, context: __SerdeContext): any => {
  return {
    ...(input.Encryption != undefined && { Encryption: serializeAws_restJson1Encryption(input.Encryption, context) }),
    ...(input.Key != undefined && { Key: input.Key }),
    ...(input.Label != undefined && { Label: input.Label }),
    ...(input.Language != undefined && { Language: input.Language }),
    ...(input.TimeOffset != undefined && { TimeOffset: input.TimeOffset }),
  };
};

const serializeAws_restJson1CaptionSources = (input: CaptionSource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1CaptionSource(entry, context);
    });
};

const serializeAws_restJson1Clip = (input: Clip, context: __SerdeContext): any => {
  return {
    ...(input.TimeSpan != undefined && { TimeSpan: serializeAws_restJson1TimeSpan(input.TimeSpan, context) }),
  };
};

const serializeAws_restJson1CodecOptions = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1Composition = (input: Clip[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Clip(entry, context);
    });
};

const serializeAws_restJson1CreateJobOutput = (input: CreateJobOutput, context: __SerdeContext): any => {
  return {
    ...(input.AlbumArt != undefined && { AlbumArt: serializeAws_restJson1JobAlbumArt(input.AlbumArt, context) }),
    ...(input.Captions != undefined && { Captions: serializeAws_restJson1Captions(input.Captions, context) }),
    ...(input.Composition != undefined && {
      Composition: serializeAws_restJson1Composition(input.Composition, context),
    }),
    ...(input.Encryption != undefined && { Encryption: serializeAws_restJson1Encryption(input.Encryption, context) }),
    ...(input.Key != undefined && { Key: input.Key }),
    ...(input.PresetId != undefined && { PresetId: input.PresetId }),
    ...(input.Rotate != undefined && { Rotate: input.Rotate }),
    ...(input.SegmentDuration != undefined && { SegmentDuration: input.SegmentDuration }),
    ...(input.ThumbnailEncryption != undefined && {
      ThumbnailEncryption: serializeAws_restJson1Encryption(input.ThumbnailEncryption, context),
    }),
    ...(input.ThumbnailPattern != undefined && { ThumbnailPattern: input.ThumbnailPattern }),
    ...(input.Watermarks != undefined && {
      Watermarks: serializeAws_restJson1JobWatermarks(input.Watermarks, context),
    }),
  };
};

const serializeAws_restJson1CreateJobOutputs = (input: CreateJobOutput[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1CreateJobOutput(entry, context);
    });
};

const serializeAws_restJson1CreateJobPlaylist = (input: CreateJobPlaylist, context: __SerdeContext): any => {
  return {
    ...(input.Format != undefined && { Format: input.Format }),
    ...(input.HlsContentProtection != undefined && {
      HlsContentProtection: serializeAws_restJson1HlsContentProtection(input.HlsContentProtection, context),
    }),
    ...(input.Name != undefined && { Name: input.Name }),
    ...(input.OutputKeys != undefined && { OutputKeys: serializeAws_restJson1OutputKeys(input.OutputKeys, context) }),
    ...(input.PlayReadyDrm != undefined && {
      PlayReadyDrm: serializeAws_restJson1PlayReadyDrm(input.PlayReadyDrm, context),
    }),
  };
};

const serializeAws_restJson1CreateJobPlaylists = (input: CreateJobPlaylist[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1CreateJobPlaylist(entry, context);
    });
};

const serializeAws_restJson1DetectedProperties = (input: DetectedProperties, context: __SerdeContext): any => {
  return {
    ...(input.DurationMillis != undefined && { DurationMillis: input.DurationMillis }),
    ...(input.FileSize != undefined && { FileSize: input.FileSize }),
    ...(input.FrameRate != undefined && { FrameRate: input.FrameRate }),
    ...(input.Height != undefined && { Height: input.Height }),
    ...(input.Width != undefined && { Width: input.Width }),
  };
};

const serializeAws_restJson1Encryption = (input: Encryption, context: __SerdeContext): any => {
  return {
    ...(input.InitializationVector != undefined && { InitializationVector: input.InitializationVector }),
    ...(input.Key != undefined && { Key: input.Key }),
    ...(input.KeyMd5 != undefined && { KeyMd5: input.KeyMd5 }),
    ...(input.Mode != undefined && { Mode: input.Mode }),
  };
};

const serializeAws_restJson1HlsContentProtection = (input: HlsContentProtection, context: __SerdeContext): any => {
  return {
    ...(input.InitializationVector != undefined && { InitializationVector: input.InitializationVector }),
    ...(input.Key != undefined && { Key: input.Key }),
    ...(input.KeyMd5 != undefined && { KeyMd5: input.KeyMd5 }),
    ...(input.KeyStoragePolicy != undefined && { KeyStoragePolicy: input.KeyStoragePolicy }),
    ...(input.LicenseAcquisitionUrl != undefined && { LicenseAcquisitionUrl: input.LicenseAcquisitionUrl }),
    ...(input.Method != undefined && { Method: input.Method }),
  };
};

const serializeAws_restJson1InputCaptions = (input: InputCaptions, context: __SerdeContext): any => {
  return {
    ...(input.CaptionSources != undefined && {
      CaptionSources: serializeAws_restJson1CaptionSources(input.CaptionSources, context),
    }),
    ...(input.MergePolicy != undefined && { MergePolicy: input.MergePolicy }),
  };
};

const serializeAws_restJson1JobAlbumArt = (input: JobAlbumArt, context: __SerdeContext): any => {
  return {
    ...(input.Artwork != undefined && { Artwork: serializeAws_restJson1Artworks(input.Artwork, context) }),
    ...(input.MergePolicy != undefined && { MergePolicy: input.MergePolicy }),
  };
};

const serializeAws_restJson1JobInput = (input: JobInput, context: __SerdeContext): any => {
  return {
    ...(input.AspectRatio != undefined && { AspectRatio: input.AspectRatio }),
    ...(input.Container != undefined && { Container: input.Container }),
    ...(input.DetectedProperties != undefined && {
      DetectedProperties: serializeAws_restJson1DetectedProperties(input.DetectedProperties, context),
    }),
    ...(input.Encryption != undefined && { Encryption: serializeAws_restJson1Encryption(input.Encryption, context) }),
    ...(input.FrameRate != undefined && { FrameRate: input.FrameRate }),
    ...(input.InputCaptions != undefined && {
      InputCaptions: serializeAws_restJson1InputCaptions(input.InputCaptions, context),
    }),
    ...(input.Interlaced != undefined && { Interlaced: input.Interlaced }),
    ...(input.Key != undefined && { Key: input.Key }),
    ...(input.Resolution != undefined && { Resolution: input.Resolution }),
    ...(input.TimeSpan != undefined && { TimeSpan: serializeAws_restJson1TimeSpan(input.TimeSpan, context) }),
  };
};

const serializeAws_restJson1JobInputs = (input: JobInput[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1JobInput(entry, context);
    });
};

const serializeAws_restJson1JobWatermark = (input: JobWatermark, context: __SerdeContext): any => {
  return {
    ...(input.Encryption != undefined && { Encryption: serializeAws_restJson1Encryption(input.Encryption, context) }),
    ...(input.InputKey != undefined && { InputKey: input.InputKey }),
    ...(input.PresetWatermarkId != undefined && { PresetWatermarkId: input.PresetWatermarkId }),
  };
};

const serializeAws_restJson1JobWatermarks = (input: JobWatermark[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1JobWatermark(entry, context);
    });
};

const serializeAws_restJson1Notifications = (input: Notifications, context: __SerdeContext): any => {
  return {
    ...(input.Completed != undefined && { Completed: input.Completed }),
    ...(input.Error != undefined && { Error: input.Error }),
    ...(input.Progressing != undefined && { Progressing: input.Progressing }),
    ...(input.Warning != undefined && { Warning: input.Warning }),
  };
};

const serializeAws_restJson1OutputKeys = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1Permission = (input: Permission, context: __SerdeContext): any => {
  return {
    ...(input.Access != undefined && { Access: serializeAws_restJson1AccessControls(input.Access, context) }),
    ...(input.Grantee != undefined && { Grantee: input.Grantee }),
    ...(input.GranteeType != undefined && { GranteeType: input.GranteeType }),
  };
};

const serializeAws_restJson1Permissions = (input: Permission[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Permission(entry, context);
    });
};

const serializeAws_restJson1PipelineOutputConfig = (input: PipelineOutputConfig, context: __SerdeContext): any => {
  return {
    ...(input.Bucket != undefined && { Bucket: input.Bucket }),
    ...(input.Permissions != undefined && {
      Permissions: serializeAws_restJson1Permissions(input.Permissions, context),
    }),
    ...(input.StorageClass != undefined && { StorageClass: input.StorageClass }),
  };
};

const serializeAws_restJson1PlayReadyDrm = (input: PlayReadyDrm, context: __SerdeContext): any => {
  return {
    ...(input.Format != undefined && { Format: input.Format }),
    ...(input.InitializationVector != undefined && { InitializationVector: input.InitializationVector }),
    ...(input.Key != undefined && { Key: input.Key }),
    ...(input.KeyId != undefined && { KeyId: input.KeyId }),
    ...(input.KeyMd5 != undefined && { KeyMd5: input.KeyMd5 }),
    ...(input.LicenseAcquisitionUrl != undefined && { LicenseAcquisitionUrl: input.LicenseAcquisitionUrl }),
  };
};

const serializeAws_restJson1PresetWatermark = (input: PresetWatermark, context: __SerdeContext): any => {
  return {
    ...(input.HorizontalAlign != undefined && { HorizontalAlign: input.HorizontalAlign }),
    ...(input.HorizontalOffset != undefined && { HorizontalOffset: input.HorizontalOffset }),
    ...(input.Id != undefined && { Id: input.Id }),
    ...(input.MaxHeight != undefined && { MaxHeight: input.MaxHeight }),
    ...(input.MaxWidth != undefined && { MaxWidth: input.MaxWidth }),
    ...(input.Opacity != undefined && { Opacity: input.Opacity }),
    ...(input.SizingPolicy != undefined && { SizingPolicy: input.SizingPolicy }),
    ...(input.Target != undefined && { Target: input.Target }),
    ...(input.VerticalAlign != undefined && { VerticalAlign: input.VerticalAlign }),
    ...(input.VerticalOffset != undefined && { VerticalOffset: input.VerticalOffset }),
  };
};

const serializeAws_restJson1PresetWatermarks = (input: PresetWatermark[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1PresetWatermark(entry, context);
    });
};

const serializeAws_restJson1SnsTopics = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1Thumbnails = (input: Thumbnails, context: __SerdeContext): any => {
  return {
    ...(input.AspectRatio != undefined && { AspectRatio: input.AspectRatio }),
    ...(input.Format != undefined && { Format: input.Format }),
    ...(input.Interval != undefined && { Interval: input.Interval }),
    ...(input.MaxHeight != undefined && { MaxHeight: input.MaxHeight }),
    ...(input.MaxWidth != undefined && { MaxWidth: input.MaxWidth }),
    ...(input.PaddingPolicy != undefined && { PaddingPolicy: input.PaddingPolicy }),
    ...(input.Resolution != undefined && { Resolution: input.Resolution }),
    ...(input.SizingPolicy != undefined && { SizingPolicy: input.SizingPolicy }),
  };
};

const serializeAws_restJson1TimeSpan = (input: TimeSpan, context: __SerdeContext): any => {
  return {
    ...(input.Duration != undefined && { Duration: input.Duration }),
    ...(input.StartTime != undefined && { StartTime: input.StartTime }),
  };
};

const serializeAws_restJson1UserMetadata = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1VideoParameters = (input: VideoParameters, context: __SerdeContext): any => {
  return {
    ...(input.AspectRatio != undefined && { AspectRatio: input.AspectRatio }),
    ...(input.BitRate != undefined && { BitRate: input.BitRate }),
    ...(input.Codec != undefined && { Codec: input.Codec }),
    ...(input.CodecOptions != undefined && {
      CodecOptions: serializeAws_restJson1CodecOptions(input.CodecOptions, context),
    }),
    ...(input.DisplayAspectRatio != undefined && { DisplayAspectRatio: input.DisplayAspectRatio }),
    ...(input.FixedGOP != undefined && { FixedGOP: input.FixedGOP }),
    ...(input.FrameRate != undefined && { FrameRate: input.FrameRate }),
    ...(input.KeyframesMaxDist != undefined && { KeyframesMaxDist: input.KeyframesMaxDist }),
    ...(input.MaxFrameRate != undefined && { MaxFrameRate: input.MaxFrameRate }),
    ...(input.MaxHeight != undefined && { MaxHeight: input.MaxHeight }),
    ...(input.MaxWidth != undefined && { MaxWidth: input.MaxWidth }),
    ...(input.PaddingPolicy != undefined && { PaddingPolicy: input.PaddingPolicy }),
    ...(input.Resolution != undefined && { Resolution: input.Resolution }),
    ...(input.SizingPolicy != undefined && { SizingPolicy: input.SizingPolicy }),
    ...(input.Watermarks != undefined && {
      Watermarks: serializeAws_restJson1PresetWatermarks(input.Watermarks, context),
    }),
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
    Encryption:
      output.Encryption != undefined ? deserializeAws_restJson1Encryption(output.Encryption, context) : undefined,
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
      output.CodecOptions != undefined
        ? deserializeAws_restJson1AudioCodecOptions(output.CodecOptions, context)
        : undefined,
    SampleRate: __expectString(output.SampleRate),
  } as any;
};

const deserializeAws_restJson1CaptionFormat = (output: any, context: __SerdeContext): CaptionFormat => {
  return {
    Encryption:
      output.Encryption != undefined ? deserializeAws_restJson1Encryption(output.Encryption, context) : undefined,
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
      output.CaptionFormats != undefined
        ? deserializeAws_restJson1CaptionFormats(output.CaptionFormats, context)
        : undefined,
    CaptionSources:
      output.CaptionSources != undefined
        ? deserializeAws_restJson1CaptionSources(output.CaptionSources, context)
        : undefined,
    MergePolicy: __expectString(output.MergePolicy),
  } as any;
};

const deserializeAws_restJson1CaptionSource = (output: any, context: __SerdeContext): CaptionSource => {
  return {
    Encryption:
      output.Encryption != undefined ? deserializeAws_restJson1Encryption(output.Encryption, context) : undefined,
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
    TimeSpan: output.TimeSpan != undefined ? deserializeAws_restJson1TimeSpan(output.TimeSpan, context) : undefined,
  } as any;
};

const deserializeAws_restJson1CodecOptions = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
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
      output.CaptionSources != undefined
        ? deserializeAws_restJson1CaptionSources(output.CaptionSources, context)
        : undefined,
    MergePolicy: __expectString(output.MergePolicy),
  } as any;
};

const deserializeAws_restJson1Job = (output: any, context: __SerdeContext): Job => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    Input: output.Input != undefined ? deserializeAws_restJson1JobInput(output.Input, context) : undefined,
    Inputs: output.Inputs != undefined ? deserializeAws_restJson1JobInputs(output.Inputs, context) : undefined,
    Output: output.Output != undefined ? deserializeAws_restJson1JobOutput(output.Output, context) : undefined,
    OutputKeyPrefix: __expectString(output.OutputKeyPrefix),
    Outputs: output.Outputs != undefined ? deserializeAws_restJson1JobOutputs(output.Outputs, context) : undefined,
    PipelineId: __expectString(output.PipelineId),
    Playlists: output.Playlists != undefined ? deserializeAws_restJson1Playlists(output.Playlists, context) : undefined,
    Status: __expectString(output.Status),
    Timing: output.Timing != undefined ? deserializeAws_restJson1Timing(output.Timing, context) : undefined,
    UserMetadata:
      output.UserMetadata != undefined ? deserializeAws_restJson1UserMetadata(output.UserMetadata, context) : undefined,
  } as any;
};

const deserializeAws_restJson1JobAlbumArt = (output: any, context: __SerdeContext): JobAlbumArt => {
  return {
    Artwork: output.Artwork != undefined ? deserializeAws_restJson1Artworks(output.Artwork, context) : undefined,
    MergePolicy: __expectString(output.MergePolicy),
  } as any;
};

const deserializeAws_restJson1JobInput = (output: any, context: __SerdeContext): JobInput => {
  return {
    AspectRatio: __expectString(output.AspectRatio),
    Container: __expectString(output.Container),
    DetectedProperties:
      output.DetectedProperties != undefined
        ? deserializeAws_restJson1DetectedProperties(output.DetectedProperties, context)
        : undefined,
    Encryption:
      output.Encryption != undefined ? deserializeAws_restJson1Encryption(output.Encryption, context) : undefined,
    FrameRate: __expectString(output.FrameRate),
    InputCaptions:
      output.InputCaptions != undefined
        ? deserializeAws_restJson1InputCaptions(output.InputCaptions, context)
        : undefined,
    Interlaced: __expectString(output.Interlaced),
    Key: __expectString(output.Key),
    Resolution: __expectString(output.Resolution),
    TimeSpan: output.TimeSpan != undefined ? deserializeAws_restJson1TimeSpan(output.TimeSpan, context) : undefined,
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
    AlbumArt: output.AlbumArt != undefined ? deserializeAws_restJson1JobAlbumArt(output.AlbumArt, context) : undefined,
    AppliedColorSpaceConversion: __expectString(output.AppliedColorSpaceConversion),
    Captions: output.Captions != undefined ? deserializeAws_restJson1Captions(output.Captions, context) : undefined,
    Composition:
      output.Composition != undefined ? deserializeAws_restJson1Composition(output.Composition, context) : undefined,
    Duration: __expectLong(output.Duration),
    DurationMillis: __expectLong(output.DurationMillis),
    Encryption:
      output.Encryption != undefined ? deserializeAws_restJson1Encryption(output.Encryption, context) : undefined,
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
      output.ThumbnailEncryption != undefined
        ? deserializeAws_restJson1Encryption(output.ThumbnailEncryption, context)
        : undefined,
    ThumbnailPattern: __expectString(output.ThumbnailPattern),
    Watermarks:
      output.Watermarks != undefined ? deserializeAws_restJson1JobWatermarks(output.Watermarks, context) : undefined,
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
    Encryption:
      output.Encryption != undefined ? deserializeAws_restJson1Encryption(output.Encryption, context) : undefined,
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
    Access: output.Access != undefined ? deserializeAws_restJson1AccessControls(output.Access, context) : undefined,
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
      output.ContentConfig != undefined
        ? deserializeAws_restJson1PipelineOutputConfig(output.ContentConfig, context)
        : undefined,
    Id: __expectString(output.Id),
    InputBucket: __expectString(output.InputBucket),
    Name: __expectString(output.Name),
    Notifications:
      output.Notifications != undefined
        ? deserializeAws_restJson1Notifications(output.Notifications, context)
        : undefined,
    OutputBucket: __expectString(output.OutputBucket),
    Role: __expectString(output.Role),
    Status: __expectString(output.Status),
    ThumbnailConfig:
      output.ThumbnailConfig != undefined
        ? deserializeAws_restJson1PipelineOutputConfig(output.ThumbnailConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PipelineOutputConfig = (output: any, context: __SerdeContext): PipelineOutputConfig => {
  return {
    Bucket: __expectString(output.Bucket),
    Permissions:
      output.Permissions != undefined ? deserializeAws_restJson1Permissions(output.Permissions, context) : undefined,
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
      output.HlsContentProtection != undefined
        ? deserializeAws_restJson1HlsContentProtection(output.HlsContentProtection, context)
        : undefined,
    Name: __expectString(output.Name),
    OutputKeys:
      output.OutputKeys != undefined ? deserializeAws_restJson1OutputKeys(output.OutputKeys, context) : undefined,
    PlayReadyDrm:
      output.PlayReadyDrm != undefined ? deserializeAws_restJson1PlayReadyDrm(output.PlayReadyDrm, context) : undefined,
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
    Audio: output.Audio != undefined ? deserializeAws_restJson1AudioParameters(output.Audio, context) : undefined,
    Container: __expectString(output.Container),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    Thumbnails:
      output.Thumbnails != undefined ? deserializeAws_restJson1Thumbnails(output.Thumbnails, context) : undefined,
    Type: __expectString(output.Type),
    Video: output.Video != undefined ? deserializeAws_restJson1VideoParameters(output.Video, context) : undefined,
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
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1VideoParameters = (output: any, context: __SerdeContext): VideoParameters => {
  return {
    AspectRatio: __expectString(output.AspectRatio),
    BitRate: __expectString(output.BitRate),
    Codec: __expectString(output.Codec),
    CodecOptions:
      output.CodecOptions != undefined ? deserializeAws_restJson1CodecOptions(output.CodecOptions, context) : undefined,
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
      output.Watermarks != undefined ? deserializeAws_restJson1PresetWatermarks(output.Watermarks, context) : undefined,
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
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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
