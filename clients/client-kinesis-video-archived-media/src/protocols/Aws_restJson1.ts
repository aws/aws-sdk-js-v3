// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { GetClipCommandInput, GetClipCommandOutput } from "../commands/GetClipCommand";
import {
  GetDASHStreamingSessionURLCommandInput,
  GetDASHStreamingSessionURLCommandOutput,
} from "../commands/GetDASHStreamingSessionURLCommand";
import {
  GetHLSStreamingSessionURLCommandInput,
  GetHLSStreamingSessionURLCommandOutput,
} from "../commands/GetHLSStreamingSessionURLCommand";
import { GetImagesCommandInput, GetImagesCommandOutput } from "../commands/GetImagesCommand";
import {
  GetMediaForFragmentListCommandInput,
  GetMediaForFragmentListCommandOutput,
} from "../commands/GetMediaForFragmentListCommand";
import { ListFragmentsCommandInput, ListFragmentsCommandOutput } from "../commands/ListFragmentsCommand";
import { KinesisVideoArchivedMediaServiceException as __BaseException } from "../models/KinesisVideoArchivedMediaServiceException";
import {
  ClientLimitExceededException,
  ClipFragmentSelector,
  ClipTimestampRange,
  DASHFragmentSelector,
  DASHTimestampRange,
  FormatConfigKey,
  Fragment,
  FragmentSelector,
  HLSFragmentSelector,
  HLSTimestampRange,
  Image,
  InvalidArgumentException,
  InvalidCodecPrivateDataException,
  InvalidMediaFrameException,
  MissingCodecPrivateDataException,
  NoDataRetentionException,
  NotAuthorizedException,
  ResourceNotFoundException,
  TimestampRange,
  UnsupportedStreamMediaTypeException,
} from "../models/models_0";

export const serializeAws_restJson1GetClipCommand = async (
  input: GetClipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/getClip";
  let body: any;
  body = JSON.stringify({
    ...(input.ClipFragmentSelector != null && {
      ClipFragmentSelector: serializeAws_restJson1ClipFragmentSelector(input.ClipFragmentSelector, context),
    }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
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

export const serializeAws_restJson1GetDASHStreamingSessionURLCommand = async (
  input: GetDASHStreamingSessionURLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/getDASHStreamingSessionURL";
  let body: any;
  body = JSON.stringify({
    ...(input.DASHFragmentSelector != null && {
      DASHFragmentSelector: serializeAws_restJson1DASHFragmentSelector(input.DASHFragmentSelector, context),
    }),
    ...(input.DisplayFragmentNumber != null && { DisplayFragmentNumber: input.DisplayFragmentNumber }),
    ...(input.DisplayFragmentTimestamp != null && { DisplayFragmentTimestamp: input.DisplayFragmentTimestamp }),
    ...(input.Expires != null && { Expires: input.Expires }),
    ...(input.MaxManifestFragmentResults != null && { MaxManifestFragmentResults: input.MaxManifestFragmentResults }),
    ...(input.PlaybackMode != null && { PlaybackMode: input.PlaybackMode }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
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

export const serializeAws_restJson1GetHLSStreamingSessionURLCommand = async (
  input: GetHLSStreamingSessionURLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/getHLSStreamingSessionURL";
  let body: any;
  body = JSON.stringify({
    ...(input.ContainerFormat != null && { ContainerFormat: input.ContainerFormat }),
    ...(input.DiscontinuityMode != null && { DiscontinuityMode: input.DiscontinuityMode }),
    ...(input.DisplayFragmentTimestamp != null && { DisplayFragmentTimestamp: input.DisplayFragmentTimestamp }),
    ...(input.Expires != null && { Expires: input.Expires }),
    ...(input.HLSFragmentSelector != null && {
      HLSFragmentSelector: serializeAws_restJson1HLSFragmentSelector(input.HLSFragmentSelector, context),
    }),
    ...(input.MaxMediaPlaylistFragmentResults != null && {
      MaxMediaPlaylistFragmentResults: input.MaxMediaPlaylistFragmentResults,
    }),
    ...(input.PlaybackMode != null && { PlaybackMode: input.PlaybackMode }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
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

export const serializeAws_restJson1GetImagesCommand = async (
  input: GetImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/getImages";
  let body: any;
  body = JSON.stringify({
    ...(input.EndTimestamp != null && { EndTimestamp: Math.round(input.EndTimestamp.getTime() / 1000) }),
    ...(input.Format != null && { Format: input.Format }),
    ...(input.FormatConfig != null && {
      FormatConfig: serializeAws_restJson1FormatConfig(input.FormatConfig, context),
    }),
    ...(input.HeightPixels != null && { HeightPixels: input.HeightPixels }),
    ...(input.ImageSelectorType != null && { ImageSelectorType: input.ImageSelectorType }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SamplingInterval != null && { SamplingInterval: input.SamplingInterval }),
    ...(input.StartTimestamp != null && { StartTimestamp: Math.round(input.StartTimestamp.getTime() / 1000) }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
    ...(input.WidthPixels != null && { WidthPixels: input.WidthPixels }),
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

export const serializeAws_restJson1GetMediaForFragmentListCommand = async (
  input: GetMediaForFragmentListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/getMediaForFragmentList";
  let body: any;
  body = JSON.stringify({
    ...(input.Fragments != null && { Fragments: serializeAws_restJson1FragmentNumberList(input.Fragments, context) }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
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

export const serializeAws_restJson1ListFragmentsCommand = async (
  input: ListFragmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/listFragments";
  let body: any;
  body = JSON.stringify({
    ...(input.FragmentSelector != null && {
      FragmentSelector: serializeAws_restJson1FragmentSelector(input.FragmentSelector, context),
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
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

export const deserializeAws_restJson1GetClipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<GetClipCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetClipCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ContentType: [, output.headers["content-type"]],
  });
  const data: any = output.body;
  context.sdkStreamMixin(data);
  contents.Payload = data;
  return contents;
};

const deserializeAws_restJson1GetClipCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetClipCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideoarchivedmedia#ClientLimitExceededException":
      throw await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideoarchivedmedia#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "InvalidCodecPrivateDataException":
    case "com.amazonaws.kinesisvideoarchivedmedia#InvalidCodecPrivateDataException":
      throw await deserializeAws_restJson1InvalidCodecPrivateDataExceptionResponse(parsedOutput, context);
    case "InvalidMediaFrameException":
    case "com.amazonaws.kinesisvideoarchivedmedia#InvalidMediaFrameException":
      throw await deserializeAws_restJson1InvalidMediaFrameExceptionResponse(parsedOutput, context);
    case "MissingCodecPrivateDataException":
    case "com.amazonaws.kinesisvideoarchivedmedia#MissingCodecPrivateDataException":
      throw await deserializeAws_restJson1MissingCodecPrivateDataExceptionResponse(parsedOutput, context);
    case "NoDataRetentionException":
    case "com.amazonaws.kinesisvideoarchivedmedia#NoDataRetentionException":
      throw await deserializeAws_restJson1NoDataRetentionExceptionResponse(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.kinesisvideoarchivedmedia#NotAuthorizedException":
      throw await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideoarchivedmedia#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedStreamMediaTypeException":
    case "com.amazonaws.kinesisvideoarchivedmedia#UnsupportedStreamMediaTypeException":
      throw await deserializeAws_restJson1UnsupportedStreamMediaTypeExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetDASHStreamingSessionURLCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDASHStreamingSessionURLCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDASHStreamingSessionURLCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DASHStreamingSessionURL != null) {
    contents.DASHStreamingSessionURL = __expectString(data.DASHStreamingSessionURL);
  }
  return contents;
};

const deserializeAws_restJson1GetDASHStreamingSessionURLCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDASHStreamingSessionURLCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideoarchivedmedia#ClientLimitExceededException":
      throw await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideoarchivedmedia#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "InvalidCodecPrivateDataException":
    case "com.amazonaws.kinesisvideoarchivedmedia#InvalidCodecPrivateDataException":
      throw await deserializeAws_restJson1InvalidCodecPrivateDataExceptionResponse(parsedOutput, context);
    case "MissingCodecPrivateDataException":
    case "com.amazonaws.kinesisvideoarchivedmedia#MissingCodecPrivateDataException":
      throw await deserializeAws_restJson1MissingCodecPrivateDataExceptionResponse(parsedOutput, context);
    case "NoDataRetentionException":
    case "com.amazonaws.kinesisvideoarchivedmedia#NoDataRetentionException":
      throw await deserializeAws_restJson1NoDataRetentionExceptionResponse(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.kinesisvideoarchivedmedia#NotAuthorizedException":
      throw await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideoarchivedmedia#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedStreamMediaTypeException":
    case "com.amazonaws.kinesisvideoarchivedmedia#UnsupportedStreamMediaTypeException":
      throw await deserializeAws_restJson1UnsupportedStreamMediaTypeExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetHLSStreamingSessionURLCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHLSStreamingSessionURLCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetHLSStreamingSessionURLCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.HLSStreamingSessionURL != null) {
    contents.HLSStreamingSessionURL = __expectString(data.HLSStreamingSessionURL);
  }
  return contents;
};

const deserializeAws_restJson1GetHLSStreamingSessionURLCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHLSStreamingSessionURLCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideoarchivedmedia#ClientLimitExceededException":
      throw await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideoarchivedmedia#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "InvalidCodecPrivateDataException":
    case "com.amazonaws.kinesisvideoarchivedmedia#InvalidCodecPrivateDataException":
      throw await deserializeAws_restJson1InvalidCodecPrivateDataExceptionResponse(parsedOutput, context);
    case "MissingCodecPrivateDataException":
    case "com.amazonaws.kinesisvideoarchivedmedia#MissingCodecPrivateDataException":
      throw await deserializeAws_restJson1MissingCodecPrivateDataExceptionResponse(parsedOutput, context);
    case "NoDataRetentionException":
    case "com.amazonaws.kinesisvideoarchivedmedia#NoDataRetentionException":
      throw await deserializeAws_restJson1NoDataRetentionExceptionResponse(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.kinesisvideoarchivedmedia#NotAuthorizedException":
      throw await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideoarchivedmedia#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedStreamMediaTypeException":
    case "com.amazonaws.kinesisvideoarchivedmedia#UnsupportedStreamMediaTypeException":
      throw await deserializeAws_restJson1UnsupportedStreamMediaTypeExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetImagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetImagesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Images != null) {
    contents.Images = deserializeAws_restJson1Images(data.Images, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1GetImagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideoarchivedmedia#ClientLimitExceededException":
      throw await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideoarchivedmedia#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.kinesisvideoarchivedmedia#NotAuthorizedException":
      throw await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideoarchivedmedia#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetMediaForFragmentListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<GetMediaForFragmentListCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMediaForFragmentListCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ContentType: [, output.headers["content-type"]],
  });
  const data: any = output.body;
  context.sdkStreamMixin(data);
  contents.Payload = data;
  return contents;
};

const deserializeAws_restJson1GetMediaForFragmentListCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMediaForFragmentListCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideoarchivedmedia#ClientLimitExceededException":
      throw await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideoarchivedmedia#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.kinesisvideoarchivedmedia#NotAuthorizedException":
      throw await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideoarchivedmedia#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListFragmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFragmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListFragmentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Fragments != null) {
    contents.Fragments = deserializeAws_restJson1FragmentList(data.Fragments, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListFragmentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFragmentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideoarchivedmedia#ClientLimitExceededException":
      throw await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideoarchivedmedia#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.kinesisvideoarchivedmedia#NotAuthorizedException":
      throw await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideoarchivedmedia#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1ClientLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClientLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ClientLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidArgumentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArgumentException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InvalidArgumentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidCodecPrivateDataExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCodecPrivateDataException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InvalidCodecPrivateDataException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidMediaFrameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidMediaFrameException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InvalidMediaFrameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1MissingCodecPrivateDataExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MissingCodecPrivateDataException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new MissingCodecPrivateDataException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1NoDataRetentionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoDataRetentionException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new NoDataRetentionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1NotAuthorizedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotAuthorizedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new NotAuthorizedException({
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1UnsupportedStreamMediaTypeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedStreamMediaTypeException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new UnsupportedStreamMediaTypeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1ClipFragmentSelector = (input: ClipFragmentSelector, context: __SerdeContext): any => {
  return {
    ...(input.FragmentSelectorType != null && { FragmentSelectorType: input.FragmentSelectorType }),
    ...(input.TimestampRange != null && {
      TimestampRange: serializeAws_restJson1ClipTimestampRange(input.TimestampRange, context),
    }),
  };
};

const serializeAws_restJson1ClipTimestampRange = (input: ClipTimestampRange, context: __SerdeContext): any => {
  return {
    ...(input.EndTimestamp != null && { EndTimestamp: Math.round(input.EndTimestamp.getTime() / 1000) }),
    ...(input.StartTimestamp != null && { StartTimestamp: Math.round(input.StartTimestamp.getTime() / 1000) }),
  };
};

const serializeAws_restJson1DASHFragmentSelector = (input: DASHFragmentSelector, context: __SerdeContext): any => {
  return {
    ...(input.FragmentSelectorType != null && { FragmentSelectorType: input.FragmentSelectorType }),
    ...(input.TimestampRange != null && {
      TimestampRange: serializeAws_restJson1DASHTimestampRange(input.TimestampRange, context),
    }),
  };
};

const serializeAws_restJson1DASHTimestampRange = (input: DASHTimestampRange, context: __SerdeContext): any => {
  return {
    ...(input.EndTimestamp != null && { EndTimestamp: Math.round(input.EndTimestamp.getTime() / 1000) }),
    ...(input.StartTimestamp != null && { StartTimestamp: Math.round(input.StartTimestamp.getTime() / 1000) }),
  };
};

const serializeAws_restJson1FormatConfig = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [FormatConfigKey | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1FragmentNumberList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1FragmentSelector = (input: FragmentSelector, context: __SerdeContext): any => {
  return {
    ...(input.FragmentSelectorType != null && { FragmentSelectorType: input.FragmentSelectorType }),
    ...(input.TimestampRange != null && {
      TimestampRange: serializeAws_restJson1TimestampRange(input.TimestampRange, context),
    }),
  };
};

const serializeAws_restJson1HLSFragmentSelector = (input: HLSFragmentSelector, context: __SerdeContext): any => {
  return {
    ...(input.FragmentSelectorType != null && { FragmentSelectorType: input.FragmentSelectorType }),
    ...(input.TimestampRange != null && {
      TimestampRange: serializeAws_restJson1HLSTimestampRange(input.TimestampRange, context),
    }),
  };
};

const serializeAws_restJson1HLSTimestampRange = (input: HLSTimestampRange, context: __SerdeContext): any => {
  return {
    ...(input.EndTimestamp != null && { EndTimestamp: Math.round(input.EndTimestamp.getTime() / 1000) }),
    ...(input.StartTimestamp != null && { StartTimestamp: Math.round(input.StartTimestamp.getTime() / 1000) }),
  };
};

const serializeAws_restJson1TimestampRange = (input: TimestampRange, context: __SerdeContext): any => {
  return {
    ...(input.EndTimestamp != null && { EndTimestamp: Math.round(input.EndTimestamp.getTime() / 1000) }),
    ...(input.StartTimestamp != null && { StartTimestamp: Math.round(input.StartTimestamp.getTime() / 1000) }),
  };
};

const deserializeAws_restJson1Fragment = (output: any, context: __SerdeContext): Fragment => {
  return {
    FragmentLengthInMilliseconds: __expectLong(output.FragmentLengthInMilliseconds),
    FragmentNumber: __expectString(output.FragmentNumber),
    FragmentSizeInBytes: __expectLong(output.FragmentSizeInBytes),
    ProducerTimestamp:
      output.ProducerTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ProducerTimestamp)))
        : undefined,
    ServerTimestamp:
      output.ServerTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ServerTimestamp)))
        : undefined,
  } as any;
};

const deserializeAws_restJson1FragmentList = (output: any, context: __SerdeContext): Fragment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Fragment(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Image = (output: any, context: __SerdeContext): Image => {
  return {
    Error: __expectString(output.Error),
    ImageContent: __expectString(output.ImageContent),
    TimeStamp:
      output.TimeStamp != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.TimeStamp))) : undefined,
  } as any;
};

const deserializeAws_restJson1Images = (output: any, context: __SerdeContext): Image[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Image(entry, context);
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
