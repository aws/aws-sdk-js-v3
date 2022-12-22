// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  parseRfc3339DateTime as __parseRfc3339DateTime,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  CreateMediaCapturePipelineCommandInput,
  CreateMediaCapturePipelineCommandOutput,
} from "../commands/CreateMediaCapturePipelineCommand";
import {
  CreateMediaConcatenationPipelineCommandInput,
  CreateMediaConcatenationPipelineCommandOutput,
} from "../commands/CreateMediaConcatenationPipelineCommand";
import {
  CreateMediaLiveConnectorPipelineCommandInput,
  CreateMediaLiveConnectorPipelineCommandOutput,
} from "../commands/CreateMediaLiveConnectorPipelineCommand";
import {
  DeleteMediaCapturePipelineCommandInput,
  DeleteMediaCapturePipelineCommandOutput,
} from "../commands/DeleteMediaCapturePipelineCommand";
import {
  DeleteMediaPipelineCommandInput,
  DeleteMediaPipelineCommandOutput,
} from "../commands/DeleteMediaPipelineCommand";
import {
  GetMediaCapturePipelineCommandInput,
  GetMediaCapturePipelineCommandOutput,
} from "../commands/GetMediaCapturePipelineCommand";
import { GetMediaPipelineCommandInput, GetMediaPipelineCommandOutput } from "../commands/GetMediaPipelineCommand";
import {
  ListMediaCapturePipelinesCommandInput,
  ListMediaCapturePipelinesCommandOutput,
} from "../commands/ListMediaCapturePipelinesCommand";
import { ListMediaPipelinesCommandInput, ListMediaPipelinesCommandOutput } from "../commands/ListMediaPipelinesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { ChimeSDKMediaPipelinesServiceException as __BaseException } from "../models/ChimeSDKMediaPipelinesServiceException";
import {
  ArtifactsConcatenationConfiguration,
  ArtifactsConfiguration,
  AudioArtifactsConfiguration,
  AudioConcatenationConfiguration,
  BadRequestException,
  ChimeSdkMeetingConcatenationConfiguration,
  ChimeSdkMeetingConfiguration,
  ChimeSdkMeetingLiveConnectorConfiguration,
  CompositedVideoArtifactsConfiguration,
  CompositedVideoConcatenationConfiguration,
  ConcatenationSink,
  ConcatenationSource,
  ContentArtifactsConfiguration,
  ContentConcatenationConfiguration,
  DataChannelConcatenationConfiguration,
  ForbiddenException,
  GridViewConfiguration,
  LiveConnectorRTMPConfiguration,
  LiveConnectorSinkConfiguration,
  LiveConnectorSourceConfiguration,
  MediaCapturePipeline,
  MediaCapturePipelineSourceConfiguration,
  MediaCapturePipelineSummary,
  MediaConcatenationPipeline,
  MediaLiveConnectorPipeline,
  MediaPipeline,
  MediaPipelineSummary,
  MeetingEventsConcatenationConfiguration,
  NotFoundException,
  PresenterOnlyConfiguration,
  ResourceLimitExceededException,
  S3BucketSinkConfiguration,
  SelectedVideoStreams,
  ServiceFailureException,
  ServiceUnavailableException,
  SourceConfiguration,
  Tag,
  ThrottledClientException,
  TranscriptionMessagesConcatenationConfiguration,
  UnauthorizedClientException,
  VideoArtifactsConfiguration,
  VideoConcatenationConfiguration,
} from "../models/models_0";

export const serializeAws_restJson1CreateMediaCapturePipelineCommand = async (
  input: CreateMediaCapturePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sdk-media-capture-pipelines";
  let body: any;
  body = JSON.stringify({
    ...(input.ChimeSdkMeetingConfiguration != null && {
      ChimeSdkMeetingConfiguration: serializeAws_restJson1ChimeSdkMeetingConfiguration(
        input.ChimeSdkMeetingConfiguration,
        context
      ),
    }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.SinkArn != null && { SinkArn: input.SinkArn }),
    ...(input.SinkType != null && { SinkType: input.SinkType }),
    ...(input.SourceArn != null && { SourceArn: input.SourceArn }),
    ...(input.SourceType != null && { SourceType: input.SourceType }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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

export const serializeAws_restJson1CreateMediaConcatenationPipelineCommand = async (
  input: CreateMediaConcatenationPipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sdk-media-concatenation-pipelines";
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Sinks != null && { Sinks: serializeAws_restJson1ConcatenationSinkList(input.Sinks, context) }),
    ...(input.Sources != null && { Sources: serializeAws_restJson1ConcatenationSourceList(input.Sources, context) }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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

export const serializeAws_restJson1CreateMediaLiveConnectorPipelineCommand = async (
  input: CreateMediaLiveConnectorPipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sdk-media-live-connector-pipelines";
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Sinks != null && { Sinks: serializeAws_restJson1LiveConnectorSinkList(input.Sinks, context) }),
    ...(input.Sources != null && { Sources: serializeAws_restJson1LiveConnectorSourceList(input.Sources, context) }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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

export const serializeAws_restJson1DeleteMediaCapturePipelineCommand = async (
  input: DeleteMediaCapturePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sdk-media-capture-pipelines/{MediaPipelineId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "MediaPipelineId",
    () => input.MediaPipelineId!,
    "{MediaPipelineId}",
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

export const serializeAws_restJson1DeleteMediaPipelineCommand = async (
  input: DeleteMediaPipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sdk-media-pipelines/{MediaPipelineId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "MediaPipelineId",
    () => input.MediaPipelineId!,
    "{MediaPipelineId}",
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

export const serializeAws_restJson1GetMediaCapturePipelineCommand = async (
  input: GetMediaCapturePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sdk-media-capture-pipelines/{MediaPipelineId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "MediaPipelineId",
    () => input.MediaPipelineId!,
    "{MediaPipelineId}",
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

export const serializeAws_restJson1GetMediaPipelineCommand = async (
  input: GetMediaPipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sdk-media-pipelines/{MediaPipelineId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "MediaPipelineId",
    () => input.MediaPipelineId!,
    "{MediaPipelineId}",
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

export const serializeAws_restJson1ListMediaCapturePipelinesCommand = async (
  input: ListMediaCapturePipelinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sdk-media-capture-pipelines";
  const query: any = map({
    "next-token": [, input.NextToken!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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

export const serializeAws_restJson1ListMediaPipelinesCommand = async (
  input: ListMediaPipelinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sdk-media-pipelines";
  const query: any = map({
    "next-token": [, input.NextToken!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags";
  const query: any = map({
    arn: [, __expectNonNull(input.ResourceARN!, `ResourceARN`)],
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

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags";
  const query: any = map({
    operation: [, "tag-resource"],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags";
  const query: any = map({
    operation: [, "untag-resource"],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys != null && { TagKeys: serializeAws_restJson1TagKeyList(input.TagKeys, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const deserializeAws_restJson1CreateMediaCapturePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMediaCapturePipelineCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateMediaCapturePipelineCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MediaCapturePipeline != null) {
    contents.MediaCapturePipeline = deserializeAws_restJson1MediaCapturePipeline(data.MediaCapturePipeline, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateMediaCapturePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMediaCapturePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmediapipelines#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmediapipelines#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkmediapipelines#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmediapipelines#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmediapipelines#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateMediaConcatenationPipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMediaConcatenationPipelineCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateMediaConcatenationPipelineCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MediaConcatenationPipeline != null) {
    contents.MediaConcatenationPipeline = deserializeAws_restJson1MediaConcatenationPipeline(
      data.MediaConcatenationPipeline,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1CreateMediaConcatenationPipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMediaConcatenationPipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmediapipelines#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmediapipelines#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkmediapipelines#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmediapipelines#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmediapipelines#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateMediaLiveConnectorPipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMediaLiveConnectorPipelineCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateMediaLiveConnectorPipelineCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MediaLiveConnectorPipeline != null) {
    contents.MediaLiveConnectorPipeline = deserializeAws_restJson1MediaLiveConnectorPipeline(
      data.MediaLiveConnectorPipeline,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1CreateMediaLiveConnectorPipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMediaLiveConnectorPipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmediapipelines#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmediapipelines#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkmediapipelines#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmediapipelines#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmediapipelines#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteMediaCapturePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMediaCapturePipelineCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteMediaCapturePipelineCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteMediaCapturePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMediaCapturePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmediapipelines#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmediapipelines#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmediapipelines#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmediapipelines#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmediapipelines#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteMediaPipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMediaPipelineCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteMediaPipelineCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteMediaPipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMediaPipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmediapipelines#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmediapipelines#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmediapipelines#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmediapipelines#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmediapipelines#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetMediaCapturePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMediaCapturePipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMediaCapturePipelineCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MediaCapturePipeline != null) {
    contents.MediaCapturePipeline = deserializeAws_restJson1MediaCapturePipeline(data.MediaCapturePipeline, context);
  }
  return contents;
};

const deserializeAws_restJson1GetMediaCapturePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMediaCapturePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmediapipelines#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmediapipelines#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmediapipelines#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmediapipelines#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmediapipelines#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetMediaPipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMediaPipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMediaPipelineCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MediaPipeline != null) {
    contents.MediaPipeline = deserializeAws_restJson1MediaPipeline(data.MediaPipeline, context);
  }
  return contents;
};

const deserializeAws_restJson1GetMediaPipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMediaPipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmediapipelines#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmediapipelines#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmediapipelines#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmediapipelines#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmediapipelines#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListMediaCapturePipelinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMediaCapturePipelinesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListMediaCapturePipelinesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MediaCapturePipelines != null) {
    contents.MediaCapturePipelines = deserializeAws_restJson1MediaCapturePipelineSummaryList(
      data.MediaCapturePipelines,
      context
    );
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListMediaCapturePipelinesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMediaCapturePipelinesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmediapipelines#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmediapipelines#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkmediapipelines#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmediapipelines#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmediapipelines#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListMediaPipelinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMediaPipelinesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListMediaPipelinesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MediaPipelines != null) {
    contents.MediaPipelines = deserializeAws_restJson1MediaPipelineList(data.MediaPipelines, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListMediaPipelinesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMediaPipelinesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmediapipelines#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmediapipelines#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkmediapipelines#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmediapipelines#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmediapipelines#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
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
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagList(data.Tags, context);
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
    case "BadRequestException":
    case "com.amazonaws.chimesdkmediapipelines#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmediapipelines#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmediapipelines#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmediapipelines#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmediapipelines#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
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
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
    case "BadRequestException":
    case "com.amazonaws.chimesdkmediapipelines#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmediapipelines#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmediapipelines#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmediapipelines#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmediapipelines#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
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
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
    case "BadRequestException":
    case "com.amazonaws.chimesdkmediapipelines#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmediapipelines#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmediapipelines#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmediapipelines#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmediapipelines#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ForbiddenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  const exception = new ForbiddenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  const exception = new ResourceLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ServiceFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceFailureException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  const exception = new ServiceFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ThrottledClientExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottledClientException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  const exception = new ThrottledClientException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1UnauthorizedClientExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedClientException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestId != null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  const exception = new UnauthorizedClientException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1ArtifactsConcatenationConfiguration = (
  input: ArtifactsConcatenationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Audio != null && { Audio: serializeAws_restJson1AudioConcatenationConfiguration(input.Audio, context) }),
    ...(input.CompositedVideo != null && {
      CompositedVideo: serializeAws_restJson1CompositedVideoConcatenationConfiguration(input.CompositedVideo, context),
    }),
    ...(input.Content != null && {
      Content: serializeAws_restJson1ContentConcatenationConfiguration(input.Content, context),
    }),
    ...(input.DataChannel != null && {
      DataChannel: serializeAws_restJson1DataChannelConcatenationConfiguration(input.DataChannel, context),
    }),
    ...(input.MeetingEvents != null && {
      MeetingEvents: serializeAws_restJson1MeetingEventsConcatenationConfiguration(input.MeetingEvents, context),
    }),
    ...(input.TranscriptionMessages != null && {
      TranscriptionMessages: serializeAws_restJson1TranscriptionMessagesConcatenationConfiguration(
        input.TranscriptionMessages,
        context
      ),
    }),
    ...(input.Video != null && { Video: serializeAws_restJson1VideoConcatenationConfiguration(input.Video, context) }),
  };
};

const serializeAws_restJson1ArtifactsConfiguration = (input: ArtifactsConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Audio != null && { Audio: serializeAws_restJson1AudioArtifactsConfiguration(input.Audio, context) }),
    ...(input.CompositedVideo != null && {
      CompositedVideo: serializeAws_restJson1CompositedVideoArtifactsConfiguration(input.CompositedVideo, context),
    }),
    ...(input.Content != null && {
      Content: serializeAws_restJson1ContentArtifactsConfiguration(input.Content, context),
    }),
    ...(input.Video != null && { Video: serializeAws_restJson1VideoArtifactsConfiguration(input.Video, context) }),
  };
};

const serializeAws_restJson1AttendeeIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1AudioArtifactsConfiguration = (
  input: AudioArtifactsConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.MuxType != null && { MuxType: input.MuxType }),
  };
};

const serializeAws_restJson1AudioConcatenationConfiguration = (
  input: AudioConcatenationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.State != null && { State: input.State }),
  };
};

const serializeAws_restJson1ChimeSdkMeetingConcatenationConfiguration = (
  input: ChimeSdkMeetingConcatenationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ArtifactsConfiguration != null && {
      ArtifactsConfiguration: serializeAws_restJson1ArtifactsConcatenationConfiguration(
        input.ArtifactsConfiguration,
        context
      ),
    }),
  };
};

const serializeAws_restJson1ChimeSdkMeetingConfiguration = (
  input: ChimeSdkMeetingConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ArtifactsConfiguration != null && {
      ArtifactsConfiguration: serializeAws_restJson1ArtifactsConfiguration(input.ArtifactsConfiguration, context),
    }),
    ...(input.SourceConfiguration != null && {
      SourceConfiguration: serializeAws_restJson1SourceConfiguration(input.SourceConfiguration, context),
    }),
  };
};

const serializeAws_restJson1ChimeSdkMeetingLiveConnectorConfiguration = (
  input: ChimeSdkMeetingLiveConnectorConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.CompositedVideo != null && {
      CompositedVideo: serializeAws_restJson1CompositedVideoArtifactsConfiguration(input.CompositedVideo, context),
    }),
    ...(input.MuxType != null && { MuxType: input.MuxType }),
    ...(input.SourceConfiguration != null && {
      SourceConfiguration: serializeAws_restJson1SourceConfiguration(input.SourceConfiguration, context),
    }),
  };
};

const serializeAws_restJson1CompositedVideoArtifactsConfiguration = (
  input: CompositedVideoArtifactsConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.GridViewConfiguration != null && {
      GridViewConfiguration: serializeAws_restJson1GridViewConfiguration(input.GridViewConfiguration, context),
    }),
    ...(input.Layout != null && { Layout: input.Layout }),
    ...(input.Resolution != null && { Resolution: input.Resolution }),
  };
};

const serializeAws_restJson1CompositedVideoConcatenationConfiguration = (
  input: CompositedVideoConcatenationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.State != null && { State: input.State }),
  };
};

const serializeAws_restJson1ConcatenationSink = (input: ConcatenationSink, context: __SerdeContext): any => {
  return {
    ...(input.S3BucketSinkConfiguration != null && {
      S3BucketSinkConfiguration: serializeAws_restJson1S3BucketSinkConfiguration(
        input.S3BucketSinkConfiguration,
        context
      ),
    }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1ConcatenationSinkList = (input: ConcatenationSink[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ConcatenationSink(entry, context);
    });
};

const serializeAws_restJson1ConcatenationSource = (input: ConcatenationSource, context: __SerdeContext): any => {
  return {
    ...(input.MediaCapturePipelineSourceConfiguration != null && {
      MediaCapturePipelineSourceConfiguration: serializeAws_restJson1MediaCapturePipelineSourceConfiguration(
        input.MediaCapturePipelineSourceConfiguration,
        context
      ),
    }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1ConcatenationSourceList = (input: ConcatenationSource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ConcatenationSource(entry, context);
    });
};

const serializeAws_restJson1ContentArtifactsConfiguration = (
  input: ContentArtifactsConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.MuxType != null && { MuxType: input.MuxType }),
    ...(input.State != null && { State: input.State }),
  };
};

const serializeAws_restJson1ContentConcatenationConfiguration = (
  input: ContentConcatenationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.State != null && { State: input.State }),
  };
};

const serializeAws_restJson1DataChannelConcatenationConfiguration = (
  input: DataChannelConcatenationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.State != null && { State: input.State }),
  };
};

const serializeAws_restJson1ExternalUserIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1GridViewConfiguration = (input: GridViewConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ContentShareLayout != null && { ContentShareLayout: input.ContentShareLayout }),
    ...(input.PresenterOnlyConfiguration != null && {
      PresenterOnlyConfiguration: serializeAws_restJson1PresenterOnlyConfiguration(
        input.PresenterOnlyConfiguration,
        context
      ),
    }),
  };
};

const serializeAws_restJson1LiveConnectorRTMPConfiguration = (
  input: LiveConnectorRTMPConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AudioChannels != null && { AudioChannels: input.AudioChannels }),
    ...(input.AudioSampleRate != null && { AudioSampleRate: input.AudioSampleRate }),
    ...(input.Url != null && { Url: input.Url }),
  };
};

const serializeAws_restJson1LiveConnectorSinkConfiguration = (
  input: LiveConnectorSinkConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.RTMPConfiguration != null && {
      RTMPConfiguration: serializeAws_restJson1LiveConnectorRTMPConfiguration(input.RTMPConfiguration, context),
    }),
    ...(input.SinkType != null && { SinkType: input.SinkType }),
  };
};

const serializeAws_restJson1LiveConnectorSinkList = (
  input: LiveConnectorSinkConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1LiveConnectorSinkConfiguration(entry, context);
    });
};

const serializeAws_restJson1LiveConnectorSourceConfiguration = (
  input: LiveConnectorSourceConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChimeSdkMeetingLiveConnectorConfiguration != null && {
      ChimeSdkMeetingLiveConnectorConfiguration: serializeAws_restJson1ChimeSdkMeetingLiveConnectorConfiguration(
        input.ChimeSdkMeetingLiveConnectorConfiguration,
        context
      ),
    }),
    ...(input.SourceType != null && { SourceType: input.SourceType }),
  };
};

const serializeAws_restJson1LiveConnectorSourceList = (
  input: LiveConnectorSourceConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1LiveConnectorSourceConfiguration(entry, context);
    });
};

const serializeAws_restJson1MediaCapturePipelineSourceConfiguration = (
  input: MediaCapturePipelineSourceConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChimeSdkMeetingConfiguration != null && {
      ChimeSdkMeetingConfiguration: serializeAws_restJson1ChimeSdkMeetingConcatenationConfiguration(
        input.ChimeSdkMeetingConfiguration,
        context
      ),
    }),
    ...(input.MediaPipelineArn != null && { MediaPipelineArn: input.MediaPipelineArn }),
  };
};

const serializeAws_restJson1MeetingEventsConcatenationConfiguration = (
  input: MeetingEventsConcatenationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.State != null && { State: input.State }),
  };
};

const serializeAws_restJson1PresenterOnlyConfiguration = (
  input: PresenterOnlyConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.PresenterPosition != null && { PresenterPosition: input.PresenterPosition }),
  };
};

const serializeAws_restJson1S3BucketSinkConfiguration = (
  input: S3BucketSinkConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Destination != null && { Destination: input.Destination }),
  };
};

const serializeAws_restJson1SelectedVideoStreams = (input: SelectedVideoStreams, context: __SerdeContext): any => {
  return {
    ...(input.AttendeeIds != null && { AttendeeIds: serializeAws_restJson1AttendeeIdList(input.AttendeeIds, context) }),
    ...(input.ExternalUserIds != null && {
      ExternalUserIds: serializeAws_restJson1ExternalUserIdList(input.ExternalUserIds, context),
    }),
  };
};

const serializeAws_restJson1SourceConfiguration = (input: SourceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.SelectedVideoStreams != null && {
      SelectedVideoStreams: serializeAws_restJson1SelectedVideoStreams(input.SelectedVideoStreams, context),
    }),
  };
};

const serializeAws_restJson1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Tag(entry, context);
    });
};

const serializeAws_restJson1TranscriptionMessagesConcatenationConfiguration = (
  input: TranscriptionMessagesConcatenationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.State != null && { State: input.State }),
  };
};

const serializeAws_restJson1VideoArtifactsConfiguration = (
  input: VideoArtifactsConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.MuxType != null && { MuxType: input.MuxType }),
    ...(input.State != null && { State: input.State }),
  };
};

const serializeAws_restJson1VideoConcatenationConfiguration = (
  input: VideoConcatenationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.State != null && { State: input.State }),
  };
};

const deserializeAws_restJson1ArtifactsConcatenationConfiguration = (
  output: any,
  context: __SerdeContext
): ArtifactsConcatenationConfiguration => {
  return {
    Audio:
      output.Audio != null ? deserializeAws_restJson1AudioConcatenationConfiguration(output.Audio, context) : undefined,
    CompositedVideo:
      output.CompositedVideo != null
        ? deserializeAws_restJson1CompositedVideoConcatenationConfiguration(output.CompositedVideo, context)
        : undefined,
    Content:
      output.Content != null
        ? deserializeAws_restJson1ContentConcatenationConfiguration(output.Content, context)
        : undefined,
    DataChannel:
      output.DataChannel != null
        ? deserializeAws_restJson1DataChannelConcatenationConfiguration(output.DataChannel, context)
        : undefined,
    MeetingEvents:
      output.MeetingEvents != null
        ? deserializeAws_restJson1MeetingEventsConcatenationConfiguration(output.MeetingEvents, context)
        : undefined,
    TranscriptionMessages:
      output.TranscriptionMessages != null
        ? deserializeAws_restJson1TranscriptionMessagesConcatenationConfiguration(output.TranscriptionMessages, context)
        : undefined,
    Video:
      output.Video != null ? deserializeAws_restJson1VideoConcatenationConfiguration(output.Video, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ArtifactsConfiguration = (
  output: any,
  context: __SerdeContext
): ArtifactsConfiguration => {
  return {
    Audio:
      output.Audio != null ? deserializeAws_restJson1AudioArtifactsConfiguration(output.Audio, context) : undefined,
    CompositedVideo:
      output.CompositedVideo != null
        ? deserializeAws_restJson1CompositedVideoArtifactsConfiguration(output.CompositedVideo, context)
        : undefined,
    Content:
      output.Content != null
        ? deserializeAws_restJson1ContentArtifactsConfiguration(output.Content, context)
        : undefined,
    Video:
      output.Video != null ? deserializeAws_restJson1VideoArtifactsConfiguration(output.Video, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AttendeeIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1AudioArtifactsConfiguration = (
  output: any,
  context: __SerdeContext
): AudioArtifactsConfiguration => {
  return {
    MuxType: __expectString(output.MuxType),
  } as any;
};

const deserializeAws_restJson1AudioConcatenationConfiguration = (
  output: any,
  context: __SerdeContext
): AudioConcatenationConfiguration => {
  return {
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_restJson1ChimeSdkMeetingConcatenationConfiguration = (
  output: any,
  context: __SerdeContext
): ChimeSdkMeetingConcatenationConfiguration => {
  return {
    ArtifactsConfiguration:
      output.ArtifactsConfiguration != null
        ? deserializeAws_restJson1ArtifactsConcatenationConfiguration(output.ArtifactsConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ChimeSdkMeetingConfiguration = (
  output: any,
  context: __SerdeContext
): ChimeSdkMeetingConfiguration => {
  return {
    ArtifactsConfiguration:
      output.ArtifactsConfiguration != null
        ? deserializeAws_restJson1ArtifactsConfiguration(output.ArtifactsConfiguration, context)
        : undefined,
    SourceConfiguration:
      output.SourceConfiguration != null
        ? deserializeAws_restJson1SourceConfiguration(output.SourceConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ChimeSdkMeetingLiveConnectorConfiguration = (
  output: any,
  context: __SerdeContext
): ChimeSdkMeetingLiveConnectorConfiguration => {
  return {
    Arn: __expectString(output.Arn),
    CompositedVideo:
      output.CompositedVideo != null
        ? deserializeAws_restJson1CompositedVideoArtifactsConfiguration(output.CompositedVideo, context)
        : undefined,
    MuxType: __expectString(output.MuxType),
    SourceConfiguration:
      output.SourceConfiguration != null
        ? deserializeAws_restJson1SourceConfiguration(output.SourceConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CompositedVideoArtifactsConfiguration = (
  output: any,
  context: __SerdeContext
): CompositedVideoArtifactsConfiguration => {
  return {
    GridViewConfiguration:
      output.GridViewConfiguration != null
        ? deserializeAws_restJson1GridViewConfiguration(output.GridViewConfiguration, context)
        : undefined,
    Layout: __expectString(output.Layout),
    Resolution: __expectString(output.Resolution),
  } as any;
};

const deserializeAws_restJson1CompositedVideoConcatenationConfiguration = (
  output: any,
  context: __SerdeContext
): CompositedVideoConcatenationConfiguration => {
  return {
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_restJson1ConcatenationSink = (output: any, context: __SerdeContext): ConcatenationSink => {
  return {
    S3BucketSinkConfiguration:
      output.S3BucketSinkConfiguration != null
        ? deserializeAws_restJson1S3BucketSinkConfiguration(output.S3BucketSinkConfiguration, context)
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1ConcatenationSinkList = (output: any, context: __SerdeContext): ConcatenationSink[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ConcatenationSink(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ConcatenationSource = (output: any, context: __SerdeContext): ConcatenationSource => {
  return {
    MediaCapturePipelineSourceConfiguration:
      output.MediaCapturePipelineSourceConfiguration != null
        ? deserializeAws_restJson1MediaCapturePipelineSourceConfiguration(
            output.MediaCapturePipelineSourceConfiguration,
            context
          )
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1ConcatenationSourceList = (
  output: any,
  context: __SerdeContext
): ConcatenationSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ConcatenationSource(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ContentArtifactsConfiguration = (
  output: any,
  context: __SerdeContext
): ContentArtifactsConfiguration => {
  return {
    MuxType: __expectString(output.MuxType),
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_restJson1ContentConcatenationConfiguration = (
  output: any,
  context: __SerdeContext
): ContentConcatenationConfiguration => {
  return {
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_restJson1DataChannelConcatenationConfiguration = (
  output: any,
  context: __SerdeContext
): DataChannelConcatenationConfiguration => {
  return {
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_restJson1ExternalUserIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1GridViewConfiguration = (output: any, context: __SerdeContext): GridViewConfiguration => {
  return {
    ContentShareLayout: __expectString(output.ContentShareLayout),
    PresenterOnlyConfiguration:
      output.PresenterOnlyConfiguration != null
        ? deserializeAws_restJson1PresenterOnlyConfiguration(output.PresenterOnlyConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1LiveConnectorRTMPConfiguration = (
  output: any,
  context: __SerdeContext
): LiveConnectorRTMPConfiguration => {
  return {
    AudioChannels: __expectString(output.AudioChannels),
    AudioSampleRate: __expectString(output.AudioSampleRate),
    Url: __expectString(output.Url),
  } as any;
};

const deserializeAws_restJson1LiveConnectorSinkConfiguration = (
  output: any,
  context: __SerdeContext
): LiveConnectorSinkConfiguration => {
  return {
    RTMPConfiguration:
      output.RTMPConfiguration != null
        ? deserializeAws_restJson1LiveConnectorRTMPConfiguration(output.RTMPConfiguration, context)
        : undefined,
    SinkType: __expectString(output.SinkType),
  } as any;
};

const deserializeAws_restJson1LiveConnectorSinkList = (
  output: any,
  context: __SerdeContext
): LiveConnectorSinkConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LiveConnectorSinkConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LiveConnectorSourceConfiguration = (
  output: any,
  context: __SerdeContext
): LiveConnectorSourceConfiguration => {
  return {
    ChimeSdkMeetingLiveConnectorConfiguration:
      output.ChimeSdkMeetingLiveConnectorConfiguration != null
        ? deserializeAws_restJson1ChimeSdkMeetingLiveConnectorConfiguration(
            output.ChimeSdkMeetingLiveConnectorConfiguration,
            context
          )
        : undefined,
    SourceType: __expectString(output.SourceType),
  } as any;
};

const deserializeAws_restJson1LiveConnectorSourceList = (
  output: any,
  context: __SerdeContext
): LiveConnectorSourceConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LiveConnectorSourceConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1MediaCapturePipeline = (output: any, context: __SerdeContext): MediaCapturePipeline => {
  return {
    ChimeSdkMeetingConfiguration:
      output.ChimeSdkMeetingConfiguration != null
        ? deserializeAws_restJson1ChimeSdkMeetingConfiguration(output.ChimeSdkMeetingConfiguration, context)
        : undefined,
    CreatedTimestamp:
      output.CreatedTimestamp != null ? __expectNonNull(__parseRfc3339DateTime(output.CreatedTimestamp)) : undefined,
    MediaPipelineArn: __expectString(output.MediaPipelineArn),
    MediaPipelineId: __expectString(output.MediaPipelineId),
    SinkArn: __expectString(output.SinkArn),
    SinkType: __expectString(output.SinkType),
    SourceArn: __expectString(output.SourceArn),
    SourceType: __expectString(output.SourceType),
    Status: __expectString(output.Status),
    UpdatedTimestamp:
      output.UpdatedTimestamp != null ? __expectNonNull(__parseRfc3339DateTime(output.UpdatedTimestamp)) : undefined,
  } as any;
};

const deserializeAws_restJson1MediaCapturePipelineSourceConfiguration = (
  output: any,
  context: __SerdeContext
): MediaCapturePipelineSourceConfiguration => {
  return {
    ChimeSdkMeetingConfiguration:
      output.ChimeSdkMeetingConfiguration != null
        ? deserializeAws_restJson1ChimeSdkMeetingConcatenationConfiguration(
            output.ChimeSdkMeetingConfiguration,
            context
          )
        : undefined,
    MediaPipelineArn: __expectString(output.MediaPipelineArn),
  } as any;
};

const deserializeAws_restJson1MediaCapturePipelineSummary = (
  output: any,
  context: __SerdeContext
): MediaCapturePipelineSummary => {
  return {
    MediaPipelineArn: __expectString(output.MediaPipelineArn),
    MediaPipelineId: __expectString(output.MediaPipelineId),
  } as any;
};

const deserializeAws_restJson1MediaCapturePipelineSummaryList = (
  output: any,
  context: __SerdeContext
): MediaCapturePipelineSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MediaCapturePipelineSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1MediaConcatenationPipeline = (
  output: any,
  context: __SerdeContext
): MediaConcatenationPipeline => {
  return {
    CreatedTimestamp:
      output.CreatedTimestamp != null ? __expectNonNull(__parseRfc3339DateTime(output.CreatedTimestamp)) : undefined,
    MediaPipelineArn: __expectString(output.MediaPipelineArn),
    MediaPipelineId: __expectString(output.MediaPipelineId),
    Sinks: output.Sinks != null ? deserializeAws_restJson1ConcatenationSinkList(output.Sinks, context) : undefined,
    Sources:
      output.Sources != null ? deserializeAws_restJson1ConcatenationSourceList(output.Sources, context) : undefined,
    Status: __expectString(output.Status),
    UpdatedTimestamp:
      output.UpdatedTimestamp != null ? __expectNonNull(__parseRfc3339DateTime(output.UpdatedTimestamp)) : undefined,
  } as any;
};

const deserializeAws_restJson1MediaLiveConnectorPipeline = (
  output: any,
  context: __SerdeContext
): MediaLiveConnectorPipeline => {
  return {
    CreatedTimestamp:
      output.CreatedTimestamp != null ? __expectNonNull(__parseRfc3339DateTime(output.CreatedTimestamp)) : undefined,
    MediaPipelineArn: __expectString(output.MediaPipelineArn),
    MediaPipelineId: __expectString(output.MediaPipelineId),
    Sinks: output.Sinks != null ? deserializeAws_restJson1LiveConnectorSinkList(output.Sinks, context) : undefined,
    Sources:
      output.Sources != null ? deserializeAws_restJson1LiveConnectorSourceList(output.Sources, context) : undefined,
    Status: __expectString(output.Status),
    UpdatedTimestamp:
      output.UpdatedTimestamp != null ? __expectNonNull(__parseRfc3339DateTime(output.UpdatedTimestamp)) : undefined,
  } as any;
};

const deserializeAws_restJson1MediaPipeline = (output: any, context: __SerdeContext): MediaPipeline => {
  return {
    MediaCapturePipeline:
      output.MediaCapturePipeline != null
        ? deserializeAws_restJson1MediaCapturePipeline(output.MediaCapturePipeline, context)
        : undefined,
    MediaConcatenationPipeline:
      output.MediaConcatenationPipeline != null
        ? deserializeAws_restJson1MediaConcatenationPipeline(output.MediaConcatenationPipeline, context)
        : undefined,
    MediaLiveConnectorPipeline:
      output.MediaLiveConnectorPipeline != null
        ? deserializeAws_restJson1MediaLiveConnectorPipeline(output.MediaLiveConnectorPipeline, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MediaPipelineList = (output: any, context: __SerdeContext): MediaPipelineSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MediaPipelineSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1MediaPipelineSummary = (output: any, context: __SerdeContext): MediaPipelineSummary => {
  return {
    MediaPipelineArn: __expectString(output.MediaPipelineArn),
    MediaPipelineId: __expectString(output.MediaPipelineId),
  } as any;
};

const deserializeAws_restJson1MeetingEventsConcatenationConfiguration = (
  output: any,
  context: __SerdeContext
): MeetingEventsConcatenationConfiguration => {
  return {
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_restJson1PresenterOnlyConfiguration = (
  output: any,
  context: __SerdeContext
): PresenterOnlyConfiguration => {
  return {
    PresenterPosition: __expectString(output.PresenterPosition),
  } as any;
};

const deserializeAws_restJson1S3BucketSinkConfiguration = (
  output: any,
  context: __SerdeContext
): S3BucketSinkConfiguration => {
  return {
    Destination: __expectString(output.Destination),
  } as any;
};

const deserializeAws_restJson1SelectedVideoStreams = (output: any, context: __SerdeContext): SelectedVideoStreams => {
  return {
    AttendeeIds:
      output.AttendeeIds != null ? deserializeAws_restJson1AttendeeIdList(output.AttendeeIds, context) : undefined,
    ExternalUserIds:
      output.ExternalUserIds != null
        ? deserializeAws_restJson1ExternalUserIdList(output.ExternalUserIds, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SourceConfiguration = (output: any, context: __SerdeContext): SourceConfiguration => {
  return {
    SelectedVideoStreams:
      output.SelectedVideoStreams != null
        ? deserializeAws_restJson1SelectedVideoStreams(output.SelectedVideoStreams, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TranscriptionMessagesConcatenationConfiguration = (
  output: any,
  context: __SerdeContext
): TranscriptionMessagesConcatenationConfiguration => {
  return {
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_restJson1VideoArtifactsConfiguration = (
  output: any,
  context: __SerdeContext
): VideoArtifactsConfiguration => {
  return {
    MuxType: __expectString(output.MuxType),
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_restJson1VideoConcatenationConfiguration = (
  output: any,
  context: __SerdeContext
): VideoConcatenationConfiguration => {
  return {
    State: __expectString(output.State),
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
