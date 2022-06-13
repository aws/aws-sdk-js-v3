// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  parseRfc3339DateTime as __parseRfc3339DateTime,
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
  DeleteMediaCapturePipelineCommandInput,
  DeleteMediaCapturePipelineCommandOutput,
} from "../commands/DeleteMediaCapturePipelineCommand";
import {
  GetMediaCapturePipelineCommandInput,
  GetMediaCapturePipelineCommandOutput,
} from "../commands/GetMediaCapturePipelineCommand";
import {
  ListMediaCapturePipelinesCommandInput,
  ListMediaCapturePipelinesCommandOutput,
} from "../commands/ListMediaCapturePipelinesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { ChimeSDKMediaPipelinesServiceException as __BaseException } from "../models/ChimeSDKMediaPipelinesServiceException";
import {
  ArtifactsConfiguration,
  AudioArtifactsConfiguration,
  BadRequestException,
  ChimeSdkMeetingConfiguration,
  ContentArtifactsConfiguration,
  ForbiddenException,
  MediaCapturePipeline,
  MediaCapturePipelineSummary,
  NotFoundException,
  ResourceLimitExceededException,
  SelectedVideoStreams,
  ServiceFailureException,
  ServiceUnavailableException,
  SourceConfiguration,
  Tag,
  ThrottledClientException,
  UnauthorizedClientException,
  VideoArtifactsConfiguration,
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
    ...(input.ChimeSdkMeetingConfiguration !== undefined &&
      input.ChimeSdkMeetingConfiguration !== null && {
        ChimeSdkMeetingConfiguration: serializeAws_restJson1ChimeSdkMeetingConfiguration(
          input.ChimeSdkMeetingConfiguration,
          context
        ),
      }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.SinkArn !== undefined && input.SinkArn !== null && { SinkArn: input.SinkArn }),
    ...(input.SinkType !== undefined && input.SinkType !== null && { SinkType: input.SinkType }),
    ...(input.SourceArn !== undefined && input.SourceArn !== null && { SourceArn: input.SourceArn }),
    ...(input.SourceType !== undefined && input.SourceType !== null && { SourceType: input.SourceType }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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
  if (input.MediaPipelineId !== undefined) {
    const labelValue: string = input.MediaPipelineId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MediaPipelineId.");
    }
    resolvedPath = resolvedPath.replace("{MediaPipelineId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: MediaPipelineId.");
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

export const serializeAws_restJson1GetMediaCapturePipelineCommand = async (
  input: GetMediaCapturePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sdk-media-capture-pipelines/{MediaPipelineId}";
  if (input.MediaPipelineId !== undefined) {
    const labelValue: string = input.MediaPipelineId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MediaPipelineId.");
    }
    resolvedPath = resolvedPath.replace("{MediaPipelineId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: MediaPipelineId.");
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

export const serializeAws_restJson1ListMediaCapturePipelinesCommand = async (
  input: ListMediaCapturePipelinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sdk-media-capture-pipelines";
  const query: any = {
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
    ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags";
  const query: any = {
    ...(input.ResourceARN !== undefined && { arn: input.ResourceARN }),
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

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags";
  const query: any = {
    operation: "tag-resource",
  };
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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
  const query: any = {
    operation: "untag-resource",
  };
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_restJson1TagKeyList(input.TagKeys, context) }),
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
  const contents: CreateMediaCapturePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    MediaCapturePipeline: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MediaCapturePipeline !== undefined && data.MediaCapturePipeline !== null) {
    contents.MediaCapturePipeline = deserializeAws_restJson1MediaCapturePipeline(data.MediaCapturePipeline, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateMediaCapturePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMediaCapturePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteMediaCapturePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMediaCapturePipelineCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteMediaCapturePipelineCommandError(output, context);
  }
  const contents: DeleteMediaCapturePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteMediaCapturePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMediaCapturePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetMediaCapturePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMediaCapturePipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMediaCapturePipelineCommandError(output, context);
  }
  const contents: GetMediaCapturePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    MediaCapturePipeline: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MediaCapturePipeline !== undefined && data.MediaCapturePipeline !== null) {
    contents.MediaCapturePipeline = deserializeAws_restJson1MediaCapturePipeline(data.MediaCapturePipeline, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetMediaCapturePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMediaCapturePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListMediaCapturePipelinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMediaCapturePipelinesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListMediaCapturePipelinesCommandError(output, context);
  }
  const contents: ListMediaCapturePipelinesCommandOutput = {
    $metadata: deserializeMetadata(output),
    MediaCapturePipelines: undefined,
    NextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MediaCapturePipelines !== undefined && data.MediaCapturePipelines !== null) {
    contents.MediaCapturePipelines = deserializeAws_restJson1MediaCapturePipelineSummaryList(
      data.MediaCapturePipelines,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListMediaCapturePipelinesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMediaCapturePipelinesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    Tags: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagList(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
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
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
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
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
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
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
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
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
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
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
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
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
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
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  const exception = new UnauthorizedClientException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1ArtifactsConfiguration = (input: ArtifactsConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Audio !== undefined &&
      input.Audio !== null && { Audio: serializeAws_restJson1AudioArtifactsConfiguration(input.Audio, context) }),
    ...(input.Content !== undefined &&
      input.Content !== null && {
        Content: serializeAws_restJson1ContentArtifactsConfiguration(input.Content, context),
      }),
    ...(input.Video !== undefined &&
      input.Video !== null && { Video: serializeAws_restJson1VideoArtifactsConfiguration(input.Video, context) }),
  };
};

const serializeAws_restJson1AttendeeIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1AudioArtifactsConfiguration = (
  input: AudioArtifactsConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.MuxType !== undefined && input.MuxType !== null && { MuxType: input.MuxType }),
  };
};

const serializeAws_restJson1ChimeSdkMeetingConfiguration = (
  input: ChimeSdkMeetingConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ArtifactsConfiguration !== undefined &&
      input.ArtifactsConfiguration !== null && {
        ArtifactsConfiguration: serializeAws_restJson1ArtifactsConfiguration(input.ArtifactsConfiguration, context),
      }),
    ...(input.SourceConfiguration !== undefined &&
      input.SourceConfiguration !== null && {
        SourceConfiguration: serializeAws_restJson1SourceConfiguration(input.SourceConfiguration, context),
      }),
  };
};

const serializeAws_restJson1ContentArtifactsConfiguration = (
  input: ContentArtifactsConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.MuxType !== undefined && input.MuxType !== null && { MuxType: input.MuxType }),
    ...(input.State !== undefined && input.State !== null && { State: input.State }),
  };
};

const serializeAws_restJson1ExternalUserIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1SelectedVideoStreams = (input: SelectedVideoStreams, context: __SerdeContext): any => {
  return {
    ...(input.AttendeeIds !== undefined &&
      input.AttendeeIds !== null && { AttendeeIds: serializeAws_restJson1AttendeeIdList(input.AttendeeIds, context) }),
    ...(input.ExternalUserIds !== undefined &&
      input.ExternalUserIds !== null && {
        ExternalUserIds: serializeAws_restJson1ExternalUserIdList(input.ExternalUserIds, context),
      }),
  };
};

const serializeAws_restJson1SourceConfiguration = (input: SourceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.SelectedVideoStreams !== undefined &&
      input.SelectedVideoStreams !== null && {
        SelectedVideoStreams: serializeAws_restJson1SelectedVideoStreams(input.SelectedVideoStreams, context),
      }),
  };
};

const serializeAws_restJson1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_restJson1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Tag(entry, context);
    });
};

const serializeAws_restJson1VideoArtifactsConfiguration = (
  input: VideoArtifactsConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.MuxType !== undefined && input.MuxType !== null && { MuxType: input.MuxType }),
    ...(input.State !== undefined && input.State !== null && { State: input.State }),
  };
};

const deserializeAws_restJson1ArtifactsConfiguration = (
  output: any,
  context: __SerdeContext
): ArtifactsConfiguration => {
  return {
    Audio:
      output.Audio !== undefined && output.Audio !== null
        ? deserializeAws_restJson1AudioArtifactsConfiguration(output.Audio, context)
        : undefined,
    Content:
      output.Content !== undefined && output.Content !== null
        ? deserializeAws_restJson1ContentArtifactsConfiguration(output.Content, context)
        : undefined,
    Video:
      output.Video !== undefined && output.Video !== null
        ? deserializeAws_restJson1VideoArtifactsConfiguration(output.Video, context)
        : undefined,
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

const deserializeAws_restJson1ChimeSdkMeetingConfiguration = (
  output: any,
  context: __SerdeContext
): ChimeSdkMeetingConfiguration => {
  return {
    ArtifactsConfiguration:
      output.ArtifactsConfiguration !== undefined && output.ArtifactsConfiguration !== null
        ? deserializeAws_restJson1ArtifactsConfiguration(output.ArtifactsConfiguration, context)
        : undefined,
    SourceConfiguration:
      output.SourceConfiguration !== undefined && output.SourceConfiguration !== null
        ? deserializeAws_restJson1SourceConfiguration(output.SourceConfiguration, context)
        : undefined,
  } as any;
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

const deserializeAws_restJson1MediaCapturePipeline = (output: any, context: __SerdeContext): MediaCapturePipeline => {
  return {
    ChimeSdkMeetingConfiguration:
      output.ChimeSdkMeetingConfiguration !== undefined && output.ChimeSdkMeetingConfiguration !== null
        ? deserializeAws_restJson1ChimeSdkMeetingConfiguration(output.ChimeSdkMeetingConfiguration, context)
        : undefined,
    CreatedTimestamp:
      output.CreatedTimestamp !== undefined && output.CreatedTimestamp !== null
        ? __expectNonNull(__parseRfc3339DateTime(output.CreatedTimestamp))
        : undefined,
    MediaPipelineArn: __expectString(output.MediaPipelineArn),
    MediaPipelineId: __expectString(output.MediaPipelineId),
    SinkArn: __expectString(output.SinkArn),
    SinkType: __expectString(output.SinkType),
    SourceArn: __expectString(output.SourceArn),
    SourceType: __expectString(output.SourceType),
    Status: __expectString(output.Status),
    UpdatedTimestamp:
      output.UpdatedTimestamp !== undefined && output.UpdatedTimestamp !== null
        ? __expectNonNull(__parseRfc3339DateTime(output.UpdatedTimestamp))
        : undefined,
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

const deserializeAws_restJson1SelectedVideoStreams = (output: any, context: __SerdeContext): SelectedVideoStreams => {
  return {
    AttendeeIds:
      output.AttendeeIds !== undefined && output.AttendeeIds !== null
        ? deserializeAws_restJson1AttendeeIdList(output.AttendeeIds, context)
        : undefined,
    ExternalUserIds:
      output.ExternalUserIds !== undefined && output.ExternalUserIds !== null
        ? deserializeAws_restJson1ExternalUserIdList(output.ExternalUserIds, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SourceConfiguration = (output: any, context: __SerdeContext): SourceConfiguration => {
  return {
    SelectedVideoStreams:
      output.SelectedVideoStreams !== undefined && output.SelectedVideoStreams !== null
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

const deserializeAws_restJson1VideoArtifactsConfiguration = (
  output: any,
  context: __SerdeContext
): VideoArtifactsConfiguration => {
  return {
    MuxType: __expectString(output.MuxType),
    State: __expectString(output.State),
  } as any;
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
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
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

  return "";
};
