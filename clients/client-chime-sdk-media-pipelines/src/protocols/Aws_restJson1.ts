// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
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
  CreateMediaInsightsPipelineCommandInput,
  CreateMediaInsightsPipelineCommandOutput,
} from "../commands/CreateMediaInsightsPipelineCommand";
import {
  CreateMediaInsightsPipelineConfigurationCommandInput,
  CreateMediaInsightsPipelineConfigurationCommandOutput,
} from "../commands/CreateMediaInsightsPipelineConfigurationCommand";
import {
  CreateMediaLiveConnectorPipelineCommandInput,
  CreateMediaLiveConnectorPipelineCommandOutput,
} from "../commands/CreateMediaLiveConnectorPipelineCommand";
import {
  DeleteMediaCapturePipelineCommandInput,
  DeleteMediaCapturePipelineCommandOutput,
} from "../commands/DeleteMediaCapturePipelineCommand";
import {
  DeleteMediaInsightsPipelineConfigurationCommandInput,
  DeleteMediaInsightsPipelineConfigurationCommandOutput,
} from "../commands/DeleteMediaInsightsPipelineConfigurationCommand";
import {
  DeleteMediaPipelineCommandInput,
  DeleteMediaPipelineCommandOutput,
} from "../commands/DeleteMediaPipelineCommand";
import {
  GetMediaCapturePipelineCommandInput,
  GetMediaCapturePipelineCommandOutput,
} from "../commands/GetMediaCapturePipelineCommand";
import {
  GetMediaInsightsPipelineConfigurationCommandInput,
  GetMediaInsightsPipelineConfigurationCommandOutput,
} from "../commands/GetMediaInsightsPipelineConfigurationCommand";
import { GetMediaPipelineCommandInput, GetMediaPipelineCommandOutput } from "../commands/GetMediaPipelineCommand";
import {
  ListMediaCapturePipelinesCommandInput,
  ListMediaCapturePipelinesCommandOutput,
} from "../commands/ListMediaCapturePipelinesCommand";
import {
  ListMediaInsightsPipelineConfigurationsCommandInput,
  ListMediaInsightsPipelineConfigurationsCommandOutput,
} from "../commands/ListMediaInsightsPipelineConfigurationsCommand";
import { ListMediaPipelinesCommandInput, ListMediaPipelinesCommandOutput } from "../commands/ListMediaPipelinesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateMediaInsightsPipelineConfigurationCommandInput,
  UpdateMediaInsightsPipelineConfigurationCommandOutput,
} from "../commands/UpdateMediaInsightsPipelineConfigurationCommand";
import {
  UpdateMediaInsightsPipelineStatusCommandInput,
  UpdateMediaInsightsPipelineStatusCommandOutput,
} from "../commands/UpdateMediaInsightsPipelineStatusCommand";
import { ChimeSDKMediaPipelinesServiceException as __BaseException } from "../models/ChimeSDKMediaPipelinesServiceException";
import {
  AmazonTranscribeCallAnalyticsProcessorConfiguration,
  AmazonTranscribeProcessorConfiguration,
  ArtifactsConcatenationConfiguration,
  ArtifactsConfiguration,
  AudioArtifactsConfiguration,
  AudioConcatenationConfiguration,
  BadRequestException,
  ChannelDefinition,
  ChimeSdkMeetingConcatenationConfiguration,
  ChimeSdkMeetingConfiguration,
  ChimeSdkMeetingLiveConnectorConfiguration,
  CompositedVideoArtifactsConfiguration,
  CompositedVideoConcatenationConfiguration,
  ConcatenationSink,
  ConcatenationSource,
  ConflictException,
  ContentArtifactsConfiguration,
  ContentConcatenationConfiguration,
  DataChannelConcatenationConfiguration,
  ForbiddenException,
  FragmentSelector,
  GridViewConfiguration,
  IssueDetectionConfiguration,
  KeywordMatchConfiguration,
  KinesisDataStreamSinkConfiguration,
  KinesisVideoStreamRecordingSourceRuntimeConfiguration,
  KinesisVideoStreamSourceRuntimeConfiguration,
  LambdaFunctionSinkConfiguration,
  LiveConnectorRTMPConfiguration,
  LiveConnectorSinkConfiguration,
  LiveConnectorSourceConfiguration,
  MediaCapturePipeline,
  MediaCapturePipelineSourceConfiguration,
  MediaCapturePipelineSummary,
  MediaConcatenationPipeline,
  MediaInsightsPipeline,
  MediaInsightsPipelineConfiguration,
  MediaInsightsPipelineConfigurationElement,
  MediaInsightsPipelineConfigurationSummary,
  MediaLiveConnectorPipeline,
  MediaPipeline,
  MediaPipelineSummary,
  MeetingEventsConcatenationConfiguration,
  NotFoundException,
  PostCallAnalyticsSettings,
  PresenterOnlyConfiguration,
  RealTimeAlertConfiguration,
  RealTimeAlertRule,
  RecordingStreamConfiguration,
  ResourceLimitExceededException,
  S3BucketSinkConfiguration,
  S3RecordingSinkConfiguration,
  S3RecordingSinkRuntimeConfiguration,
  SelectedVideoStreams,
  SentimentConfiguration,
  ServiceFailureException,
  ServiceUnavailableException,
  SnsTopicSinkConfiguration,
  SourceConfiguration,
  SqsQueueSinkConfiguration,
  StreamChannelDefinition,
  StreamConfiguration,
  Tag,
  ThrottledClientException,
  TimestampRange,
  TranscriptionMessagesConcatenationConfiguration,
  UnauthorizedClientException,
  VideoArtifactsConfiguration,
  VideoConcatenationConfiguration,
  VoiceAnalyticsProcessorConfiguration,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateMediaCapturePipelineCommand
 */
export const se_CreateMediaCapturePipelineCommand = async (
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
      ChimeSdkMeetingConfiguration: se_ChimeSdkMeetingConfiguration(input.ChimeSdkMeetingConfiguration, context),
    }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.SinkArn != null && { SinkArn: input.SinkArn }),
    ...(input.SinkType != null && { SinkType: input.SinkType }),
    ...(input.SourceArn != null && { SourceArn: input.SourceArn }),
    ...(input.SourceType != null && { SourceType: input.SourceType }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
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
 * serializeAws_restJson1CreateMediaConcatenationPipelineCommand
 */
export const se_CreateMediaConcatenationPipelineCommand = async (
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
    ...(input.Sinks != null && { Sinks: se_ConcatenationSinkList(input.Sinks, context) }),
    ...(input.Sources != null && { Sources: se_ConcatenationSourceList(input.Sources, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
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
 * serializeAws_restJson1CreateMediaInsightsPipelineCommand
 */
export const se_CreateMediaInsightsPipelineCommand = async (
  input: CreateMediaInsightsPipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/media-insights-pipelines";
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.KinesisVideoStreamRecordingSourceRuntimeConfiguration != null && {
      KinesisVideoStreamRecordingSourceRuntimeConfiguration: se_KinesisVideoStreamRecordingSourceRuntimeConfiguration(
        input.KinesisVideoStreamRecordingSourceRuntimeConfiguration,
        context
      ),
    }),
    ...(input.KinesisVideoStreamSourceRuntimeConfiguration != null && {
      KinesisVideoStreamSourceRuntimeConfiguration: se_KinesisVideoStreamSourceRuntimeConfiguration(
        input.KinesisVideoStreamSourceRuntimeConfiguration,
        context
      ),
    }),
    ...(input.MediaInsightsPipelineConfigurationArn != null && {
      MediaInsightsPipelineConfigurationArn: input.MediaInsightsPipelineConfigurationArn,
    }),
    ...(input.MediaInsightsRuntimeMetadata != null && {
      MediaInsightsRuntimeMetadata: se_MediaInsightsRuntimeMetadata(input.MediaInsightsRuntimeMetadata, context),
    }),
    ...(input.S3RecordingSinkRuntimeConfiguration != null && {
      S3RecordingSinkRuntimeConfiguration: se_S3RecordingSinkRuntimeConfiguration(
        input.S3RecordingSinkRuntimeConfiguration,
        context
      ),
    }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
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
 * serializeAws_restJson1CreateMediaInsightsPipelineConfigurationCommand
 */
export const se_CreateMediaInsightsPipelineConfigurationCommand = async (
  input: CreateMediaInsightsPipelineConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/media-insights-pipeline-configurations";
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Elements != null && { Elements: se_MediaInsightsPipelineConfigurationElements(input.Elements, context) }),
    ...(input.MediaInsightsPipelineConfigurationName != null && {
      MediaInsightsPipelineConfigurationName: input.MediaInsightsPipelineConfigurationName,
    }),
    ...(input.RealTimeAlertConfiguration != null && {
      RealTimeAlertConfiguration: se_RealTimeAlertConfiguration(input.RealTimeAlertConfiguration, context),
    }),
    ...(input.ResourceAccessRoleArn != null && { ResourceAccessRoleArn: input.ResourceAccessRoleArn }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
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
 * serializeAws_restJson1CreateMediaLiveConnectorPipelineCommand
 */
export const se_CreateMediaLiveConnectorPipelineCommand = async (
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
    ...(input.Sinks != null && { Sinks: se_LiveConnectorSinkList(input.Sinks, context) }),
    ...(input.Sources != null && { Sources: se_LiveConnectorSourceList(input.Sources, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
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
 * serializeAws_restJson1DeleteMediaCapturePipelineCommand
 */
export const se_DeleteMediaCapturePipelineCommand = async (
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

/**
 * serializeAws_restJson1DeleteMediaInsightsPipelineConfigurationCommand
 */
export const se_DeleteMediaInsightsPipelineConfigurationCommand = async (
  input: DeleteMediaInsightsPipelineConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/media-insights-pipeline-configurations/{Identifier}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Identifier", () => input.Identifier!, "{Identifier}", false);
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
 * serializeAws_restJson1DeleteMediaPipelineCommand
 */
export const se_DeleteMediaPipelineCommand = async (
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

/**
 * serializeAws_restJson1GetMediaCapturePipelineCommand
 */
export const se_GetMediaCapturePipelineCommand = async (
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

/**
 * serializeAws_restJson1GetMediaInsightsPipelineConfigurationCommand
 */
export const se_GetMediaInsightsPipelineConfigurationCommand = async (
  input: GetMediaInsightsPipelineConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/media-insights-pipeline-configurations/{Identifier}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Identifier", () => input.Identifier!, "{Identifier}", false);
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
 * serializeAws_restJson1GetMediaPipelineCommand
 */
export const se_GetMediaPipelineCommand = async (
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

/**
 * serializeAws_restJson1ListMediaCapturePipelinesCommand
 */
export const se_ListMediaCapturePipelinesCommand = async (
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

/**
 * serializeAws_restJson1ListMediaInsightsPipelineConfigurationsCommand
 */
export const se_ListMediaInsightsPipelineConfigurationsCommand = async (
  input: ListMediaInsightsPipelineConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/media-insights-pipeline-configurations";
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

/**
 * serializeAws_restJson1ListMediaPipelinesCommand
 */
export const se_ListMediaPipelinesCommand = async (
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

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags";
  const query: any = map({
    operation: [, "tag-resource"],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
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

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
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
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
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

/**
 * serializeAws_restJson1UpdateMediaInsightsPipelineConfigurationCommand
 */
export const se_UpdateMediaInsightsPipelineConfigurationCommand = async (
  input: UpdateMediaInsightsPipelineConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/media-insights-pipeline-configurations/{Identifier}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Identifier", () => input.Identifier!, "{Identifier}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Elements != null && { Elements: se_MediaInsightsPipelineConfigurationElements(input.Elements, context) }),
    ...(input.RealTimeAlertConfiguration != null && {
      RealTimeAlertConfiguration: se_RealTimeAlertConfiguration(input.RealTimeAlertConfiguration, context),
    }),
    ...(input.ResourceAccessRoleArn != null && { ResourceAccessRoleArn: input.ResourceAccessRoleArn }),
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
 * serializeAws_restJson1UpdateMediaInsightsPipelineStatusCommand
 */
export const se_UpdateMediaInsightsPipelineStatusCommand = async (
  input: UpdateMediaInsightsPipelineStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/media-insights-pipeline-status/{Identifier}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Identifier", () => input.Identifier!, "{Identifier}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.UpdateStatus != null && { UpdateStatus: input.UpdateStatus }),
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
 * deserializeAws_restJson1CreateMediaCapturePipelineCommand
 */
export const de_CreateMediaCapturePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMediaCapturePipelineCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateMediaCapturePipelineCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MediaCapturePipeline != null) {
    contents.MediaCapturePipeline = de_MediaCapturePipeline(data.MediaCapturePipeline, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateMediaCapturePipelineCommandError
 */
const de_CreateMediaCapturePipelineCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmediapipelines#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkmediapipelines#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmediapipelines#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmediapipelines#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateMediaConcatenationPipelineCommand
 */
export const de_CreateMediaConcatenationPipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMediaConcatenationPipelineCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateMediaConcatenationPipelineCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MediaConcatenationPipeline != null) {
    contents.MediaConcatenationPipeline = de_MediaConcatenationPipeline(data.MediaConcatenationPipeline, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateMediaConcatenationPipelineCommandError
 */
const de_CreateMediaConcatenationPipelineCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmediapipelines#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkmediapipelines#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmediapipelines#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmediapipelines#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateMediaInsightsPipelineCommand
 */
export const de_CreateMediaInsightsPipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMediaInsightsPipelineCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateMediaInsightsPipelineCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MediaInsightsPipeline != null) {
    contents.MediaInsightsPipeline = de_MediaInsightsPipeline(data.MediaInsightsPipeline, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateMediaInsightsPipelineCommandError
 */
const de_CreateMediaInsightsPipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMediaInsightsPipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmediapipelines#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmediapipelines#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmediapipelines#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkmediapipelines#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmediapipelines#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmediapipelines#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateMediaInsightsPipelineConfigurationCommand
 */
export const de_CreateMediaInsightsPipelineConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMediaInsightsPipelineConfigurationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateMediaInsightsPipelineConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MediaInsightsPipelineConfiguration != null) {
    contents.MediaInsightsPipelineConfiguration = de_MediaInsightsPipelineConfiguration(
      data.MediaInsightsPipelineConfiguration,
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateMediaInsightsPipelineConfigurationCommandError
 */
const de_CreateMediaInsightsPipelineConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMediaInsightsPipelineConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmediapipelines#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmediapipelines#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmediapipelines#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkmediapipelines#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmediapipelines#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmediapipelines#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateMediaLiveConnectorPipelineCommand
 */
export const de_CreateMediaLiveConnectorPipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMediaLiveConnectorPipelineCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateMediaLiveConnectorPipelineCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MediaLiveConnectorPipeline != null) {
    contents.MediaLiveConnectorPipeline = de_MediaLiveConnectorPipeline(data.MediaLiveConnectorPipeline, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateMediaLiveConnectorPipelineCommandError
 */
const de_CreateMediaLiveConnectorPipelineCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmediapipelines#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkmediapipelines#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmediapipelines#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmediapipelines#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteMediaCapturePipelineCommand
 */
export const de_DeleteMediaCapturePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMediaCapturePipelineCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteMediaCapturePipelineCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteMediaCapturePipelineCommandError
 */
const de_DeleteMediaCapturePipelineCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmediapipelines#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmediapipelines#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmediapipelines#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmediapipelines#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteMediaInsightsPipelineConfigurationCommand
 */
export const de_DeleteMediaInsightsPipelineConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMediaInsightsPipelineConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteMediaInsightsPipelineConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteMediaInsightsPipelineConfigurationCommandError
 */
const de_DeleteMediaInsightsPipelineConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMediaInsightsPipelineConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmediapipelines#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkmediapipelines#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmediapipelines#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmediapipelines#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmediapipelines#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmediapipelines#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteMediaPipelineCommand
 */
export const de_DeleteMediaPipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMediaPipelineCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteMediaPipelineCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteMediaPipelineCommandError
 */
const de_DeleteMediaPipelineCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmediapipelines#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmediapipelines#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmediapipelines#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmediapipelines#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetMediaCapturePipelineCommand
 */
export const de_GetMediaCapturePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMediaCapturePipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetMediaCapturePipelineCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MediaCapturePipeline != null) {
    contents.MediaCapturePipeline = de_MediaCapturePipeline(data.MediaCapturePipeline, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetMediaCapturePipelineCommandError
 */
const de_GetMediaCapturePipelineCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmediapipelines#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmediapipelines#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmediapipelines#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmediapipelines#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetMediaInsightsPipelineConfigurationCommand
 */
export const de_GetMediaInsightsPipelineConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMediaInsightsPipelineConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetMediaInsightsPipelineConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MediaInsightsPipelineConfiguration != null) {
    contents.MediaInsightsPipelineConfiguration = de_MediaInsightsPipelineConfiguration(
      data.MediaInsightsPipelineConfiguration,
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetMediaInsightsPipelineConfigurationCommandError
 */
const de_GetMediaInsightsPipelineConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMediaInsightsPipelineConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmediapipelines#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmediapipelines#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmediapipelines#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmediapipelines#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmediapipelines#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetMediaPipelineCommand
 */
export const de_GetMediaPipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMediaPipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetMediaPipelineCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MediaPipeline != null) {
    contents.MediaPipeline = de_MediaPipeline(data.MediaPipeline, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetMediaPipelineCommandError
 */
const de_GetMediaPipelineCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmediapipelines#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmediapipelines#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmediapipelines#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmediapipelines#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListMediaCapturePipelinesCommand
 */
export const de_ListMediaCapturePipelinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMediaCapturePipelinesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListMediaCapturePipelinesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MediaCapturePipelines != null) {
    contents.MediaCapturePipelines = de_MediaCapturePipelineSummaryList(data.MediaCapturePipelines, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListMediaCapturePipelinesCommandError
 */
const de_ListMediaCapturePipelinesCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmediapipelines#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkmediapipelines#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmediapipelines#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmediapipelines#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListMediaInsightsPipelineConfigurationsCommand
 */
export const de_ListMediaInsightsPipelineConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMediaInsightsPipelineConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListMediaInsightsPipelineConfigurationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MediaInsightsPipelineConfigurations != null) {
    contents.MediaInsightsPipelineConfigurations = de_MediaInsightsPipelineConfigurationSummaryList(
      data.MediaInsightsPipelineConfigurations,
      context
    );
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListMediaInsightsPipelineConfigurationsCommandError
 */
const de_ListMediaInsightsPipelineConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMediaInsightsPipelineConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmediapipelines#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmediapipelines#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkmediapipelines#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmediapipelines#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmediapipelines#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListMediaPipelinesCommand
 */
export const de_ListMediaPipelinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMediaPipelinesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListMediaPipelinesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MediaPipelines != null) {
    contents.MediaPipelines = de_MediaPipelineList(data.MediaPipelines, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListMediaPipelinesCommandError
 */
const de_ListMediaPipelinesCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmediapipelines#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkmediapipelines#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmediapipelines#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmediapipelines#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
  if (data.Tags != null) {
    contents.Tags = de_TagList(data.Tags, context);
  }
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
    case "BadRequestException":
    case "com.amazonaws.chimesdkmediapipelines#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmediapipelines#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmediapipelines#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmediapipelines#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmediapipelines#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
    case "BadRequestException":
    case "com.amazonaws.chimesdkmediapipelines#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmediapipelines#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmediapipelines#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmediapipelines#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmediapipelines#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
    case "BadRequestException":
    case "com.amazonaws.chimesdkmediapipelines#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmediapipelines#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmediapipelines#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmediapipelines#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmediapipelines#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateMediaInsightsPipelineConfigurationCommand
 */
export const de_UpdateMediaInsightsPipelineConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMediaInsightsPipelineConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateMediaInsightsPipelineConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MediaInsightsPipelineConfiguration != null) {
    contents.MediaInsightsPipelineConfiguration = de_MediaInsightsPipelineConfiguration(
      data.MediaInsightsPipelineConfiguration,
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateMediaInsightsPipelineConfigurationCommandError
 */
const de_UpdateMediaInsightsPipelineConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMediaInsightsPipelineConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmediapipelines#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkmediapipelines#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmediapipelines#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmediapipelines#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmediapipelines#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmediapipelines#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateMediaInsightsPipelineStatusCommand
 */
export const de_UpdateMediaInsightsPipelineStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMediaInsightsPipelineStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateMediaInsightsPipelineStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateMediaInsightsPipelineStatusCommandError
 */
const de_UpdateMediaInsightsPipelineStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMediaInsightsPipelineStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmediapipelines#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkmediapipelines#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmediapipelines#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmediapipelines#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmediapipelines#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkmediapipelines#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkmediapipelines#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
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

/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
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
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ForbiddenExceptionRes
 */
const de_ForbiddenExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ForbiddenException> => {
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

/**
 * deserializeAws_restJson1NotFoundExceptionRes
 */
const de_NotFoundExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFoundException> => {
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

/**
 * deserializeAws_restJson1ResourceLimitExceededExceptionRes
 */
const de_ResourceLimitExceededExceptionRes = async (
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

/**
 * deserializeAws_restJson1ServiceFailureExceptionRes
 */
const de_ServiceFailureExceptionRes = async (
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

/**
 * deserializeAws_restJson1ServiceUnavailableExceptionRes
 */
const de_ServiceUnavailableExceptionRes = async (
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

/**
 * deserializeAws_restJson1ThrottledClientExceptionRes
 */
const de_ThrottledClientExceptionRes = async (
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

/**
 * deserializeAws_restJson1UnauthorizedClientExceptionRes
 */
const de_UnauthorizedClientExceptionRes = async (
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

/**
 * serializeAws_restJson1AmazonTranscribeCallAnalyticsProcessorConfiguration
 */
const se_AmazonTranscribeCallAnalyticsProcessorConfiguration = (
  input: AmazonTranscribeCallAnalyticsProcessorConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CallAnalyticsStreamCategories != null && {
      CallAnalyticsStreamCategories: se_CategoryNameList(input.CallAnalyticsStreamCategories, context),
    }),
    ...(input.ContentIdentificationType != null && { ContentIdentificationType: input.ContentIdentificationType }),
    ...(input.ContentRedactionType != null && { ContentRedactionType: input.ContentRedactionType }),
    ...(input.EnablePartialResultsStabilization != null && {
      EnablePartialResultsStabilization: input.EnablePartialResultsStabilization,
    }),
    ...(input.FilterPartialResults != null && { FilterPartialResults: input.FilterPartialResults }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.LanguageModelName != null && { LanguageModelName: input.LanguageModelName }),
    ...(input.PartialResultsStability != null && { PartialResultsStability: input.PartialResultsStability }),
    ...(input.PiiEntityTypes != null && { PiiEntityTypes: input.PiiEntityTypes }),
    ...(input.PostCallAnalyticsSettings != null && {
      PostCallAnalyticsSettings: se_PostCallAnalyticsSettings(input.PostCallAnalyticsSettings, context),
    }),
    ...(input.VocabularyFilterMethod != null && { VocabularyFilterMethod: input.VocabularyFilterMethod }),
    ...(input.VocabularyFilterName != null && { VocabularyFilterName: input.VocabularyFilterName }),
    ...(input.VocabularyName != null && { VocabularyName: input.VocabularyName }),
  };
};

/**
 * serializeAws_restJson1AmazonTranscribeProcessorConfiguration
 */
const se_AmazonTranscribeProcessorConfiguration = (
  input: AmazonTranscribeProcessorConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContentIdentificationType != null && { ContentIdentificationType: input.ContentIdentificationType }),
    ...(input.ContentRedactionType != null && { ContentRedactionType: input.ContentRedactionType }),
    ...(input.EnablePartialResultsStabilization != null && {
      EnablePartialResultsStabilization: input.EnablePartialResultsStabilization,
    }),
    ...(input.FilterPartialResults != null && { FilterPartialResults: input.FilterPartialResults }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.LanguageModelName != null && { LanguageModelName: input.LanguageModelName }),
    ...(input.PartialResultsStability != null && { PartialResultsStability: input.PartialResultsStability }),
    ...(input.PiiEntityTypes != null && { PiiEntityTypes: input.PiiEntityTypes }),
    ...(input.ShowSpeakerLabel != null && { ShowSpeakerLabel: input.ShowSpeakerLabel }),
    ...(input.VocabularyFilterMethod != null && { VocabularyFilterMethod: input.VocabularyFilterMethod }),
    ...(input.VocabularyFilterName != null && { VocabularyFilterName: input.VocabularyFilterName }),
    ...(input.VocabularyName != null && { VocabularyName: input.VocabularyName }),
  };
};

/**
 * serializeAws_restJson1ArtifactsConcatenationConfiguration
 */
const se_ArtifactsConcatenationConfiguration = (
  input: ArtifactsConcatenationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Audio != null && { Audio: se_AudioConcatenationConfiguration(input.Audio, context) }),
    ...(input.CompositedVideo != null && {
      CompositedVideo: se_CompositedVideoConcatenationConfiguration(input.CompositedVideo, context),
    }),
    ...(input.Content != null && { Content: se_ContentConcatenationConfiguration(input.Content, context) }),
    ...(input.DataChannel != null && {
      DataChannel: se_DataChannelConcatenationConfiguration(input.DataChannel, context),
    }),
    ...(input.MeetingEvents != null && {
      MeetingEvents: se_MeetingEventsConcatenationConfiguration(input.MeetingEvents, context),
    }),
    ...(input.TranscriptionMessages != null && {
      TranscriptionMessages: se_TranscriptionMessagesConcatenationConfiguration(input.TranscriptionMessages, context),
    }),
    ...(input.Video != null && { Video: se_VideoConcatenationConfiguration(input.Video, context) }),
  };
};

/**
 * serializeAws_restJson1ArtifactsConfiguration
 */
const se_ArtifactsConfiguration = (input: ArtifactsConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Audio != null && { Audio: se_AudioArtifactsConfiguration(input.Audio, context) }),
    ...(input.CompositedVideo != null && {
      CompositedVideo: se_CompositedVideoArtifactsConfiguration(input.CompositedVideo, context),
    }),
    ...(input.Content != null && { Content: se_ContentArtifactsConfiguration(input.Content, context) }),
    ...(input.Video != null && { Video: se_VideoArtifactsConfiguration(input.Video, context) }),
  };
};

/**
 * serializeAws_restJson1AttendeeIdList
 */
const se_AttendeeIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1AudioArtifactsConfiguration
 */
const se_AudioArtifactsConfiguration = (input: AudioArtifactsConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.MuxType != null && { MuxType: input.MuxType }),
  };
};

/**
 * serializeAws_restJson1AudioConcatenationConfiguration
 */
const se_AudioConcatenationConfiguration = (input: AudioConcatenationConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.State != null && { State: input.State }),
  };
};

/**
 * serializeAws_restJson1CategoryNameList
 */
const se_CategoryNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ChannelDefinition
 */
const se_ChannelDefinition = (input: ChannelDefinition, context: __SerdeContext): any => {
  return {
    ...(input.ChannelId != null && { ChannelId: input.ChannelId }),
    ...(input.ParticipantRole != null && { ParticipantRole: input.ParticipantRole }),
  };
};

/**
 * serializeAws_restJson1ChannelDefinitions
 */
const se_ChannelDefinitions = (input: ChannelDefinition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ChannelDefinition(entry, context);
    });
};

/**
 * serializeAws_restJson1ChimeSdkMeetingConcatenationConfiguration
 */
const se_ChimeSdkMeetingConcatenationConfiguration = (
  input: ChimeSdkMeetingConcatenationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ArtifactsConfiguration != null && {
      ArtifactsConfiguration: se_ArtifactsConcatenationConfiguration(input.ArtifactsConfiguration, context),
    }),
  };
};

/**
 * serializeAws_restJson1ChimeSdkMeetingConfiguration
 */
const se_ChimeSdkMeetingConfiguration = (input: ChimeSdkMeetingConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ArtifactsConfiguration != null && {
      ArtifactsConfiguration: se_ArtifactsConfiguration(input.ArtifactsConfiguration, context),
    }),
    ...(input.SourceConfiguration != null && {
      SourceConfiguration: se_SourceConfiguration(input.SourceConfiguration, context),
    }),
  };
};

/**
 * serializeAws_restJson1ChimeSdkMeetingLiveConnectorConfiguration
 */
const se_ChimeSdkMeetingLiveConnectorConfiguration = (
  input: ChimeSdkMeetingLiveConnectorConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.CompositedVideo != null && {
      CompositedVideo: se_CompositedVideoArtifactsConfiguration(input.CompositedVideo, context),
    }),
    ...(input.MuxType != null && { MuxType: input.MuxType }),
    ...(input.SourceConfiguration != null && {
      SourceConfiguration: se_SourceConfiguration(input.SourceConfiguration, context),
    }),
  };
};

/**
 * serializeAws_restJson1CompositedVideoArtifactsConfiguration
 */
const se_CompositedVideoArtifactsConfiguration = (
  input: CompositedVideoArtifactsConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.GridViewConfiguration != null && {
      GridViewConfiguration: se_GridViewConfiguration(input.GridViewConfiguration, context),
    }),
    ...(input.Layout != null && { Layout: input.Layout }),
    ...(input.Resolution != null && { Resolution: input.Resolution }),
  };
};

/**
 * serializeAws_restJson1CompositedVideoConcatenationConfiguration
 */
const se_CompositedVideoConcatenationConfiguration = (
  input: CompositedVideoConcatenationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.State != null && { State: input.State }),
  };
};

/**
 * serializeAws_restJson1ConcatenationSink
 */
const se_ConcatenationSink = (input: ConcatenationSink, context: __SerdeContext): any => {
  return {
    ...(input.S3BucketSinkConfiguration != null && {
      S3BucketSinkConfiguration: se_S3BucketSinkConfiguration(input.S3BucketSinkConfiguration, context),
    }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_restJson1ConcatenationSinkList
 */
const se_ConcatenationSinkList = (input: ConcatenationSink[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ConcatenationSink(entry, context);
    });
};

/**
 * serializeAws_restJson1ConcatenationSource
 */
const se_ConcatenationSource = (input: ConcatenationSource, context: __SerdeContext): any => {
  return {
    ...(input.MediaCapturePipelineSourceConfiguration != null && {
      MediaCapturePipelineSourceConfiguration: se_MediaCapturePipelineSourceConfiguration(
        input.MediaCapturePipelineSourceConfiguration,
        context
      ),
    }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_restJson1ConcatenationSourceList
 */
const se_ConcatenationSourceList = (input: ConcatenationSource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ConcatenationSource(entry, context);
    });
};

/**
 * serializeAws_restJson1ContentArtifactsConfiguration
 */
const se_ContentArtifactsConfiguration = (input: ContentArtifactsConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.MuxType != null && { MuxType: input.MuxType }),
    ...(input.State != null && { State: input.State }),
  };
};

/**
 * serializeAws_restJson1ContentConcatenationConfiguration
 */
const se_ContentConcatenationConfiguration = (
  input: ContentConcatenationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.State != null && { State: input.State }),
  };
};

/**
 * serializeAws_restJson1DataChannelConcatenationConfiguration
 */
const se_DataChannelConcatenationConfiguration = (
  input: DataChannelConcatenationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.State != null && { State: input.State }),
  };
};

/**
 * serializeAws_restJson1ExternalUserIdList
 */
const se_ExternalUserIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1FragmentSelector
 */
const se_FragmentSelector = (input: FragmentSelector, context: __SerdeContext): any => {
  return {
    ...(input.FragmentSelectorType != null && { FragmentSelectorType: input.FragmentSelectorType }),
    ...(input.TimestampRange != null && { TimestampRange: se_TimestampRange(input.TimestampRange, context) }),
  };
};

/**
 * serializeAws_restJson1GridViewConfiguration
 */
const se_GridViewConfiguration = (input: GridViewConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ContentShareLayout != null && { ContentShareLayout: input.ContentShareLayout }),
    ...(input.PresenterOnlyConfiguration != null && {
      PresenterOnlyConfiguration: se_PresenterOnlyConfiguration(input.PresenterOnlyConfiguration, context),
    }),
  };
};

/**
 * serializeAws_restJson1IssueDetectionConfiguration
 */
const se_IssueDetectionConfiguration = (input: IssueDetectionConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.RuleName != null && { RuleName: input.RuleName }),
  };
};

/**
 * serializeAws_restJson1KeywordMatchConfiguration
 */
const se_KeywordMatchConfiguration = (input: KeywordMatchConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Keywords != null && { Keywords: se_KeywordMatchWordList(input.Keywords, context) }),
    ...(input.Negate != null && { Negate: input.Negate }),
    ...(input.RuleName != null && { RuleName: input.RuleName }),
  };
};

/**
 * serializeAws_restJson1KeywordMatchWordList
 */
const se_KeywordMatchWordList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1KinesisDataStreamSinkConfiguration
 */
const se_KinesisDataStreamSinkConfiguration = (
  input: KinesisDataStreamSinkConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.InsightsTarget != null && { InsightsTarget: input.InsightsTarget }),
  };
};

/**
 * serializeAws_restJson1KinesisVideoStreamRecordingSourceRuntimeConfiguration
 */
const se_KinesisVideoStreamRecordingSourceRuntimeConfiguration = (
  input: KinesisVideoStreamRecordingSourceRuntimeConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.FragmentSelector != null && { FragmentSelector: se_FragmentSelector(input.FragmentSelector, context) }),
    ...(input.Streams != null && { Streams: se_RecordingStreamList(input.Streams, context) }),
  };
};

/**
 * serializeAws_restJson1KinesisVideoStreamSourceRuntimeConfiguration
 */
const se_KinesisVideoStreamSourceRuntimeConfiguration = (
  input: KinesisVideoStreamSourceRuntimeConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.MediaEncoding != null && { MediaEncoding: input.MediaEncoding }),
    ...(input.MediaSampleRate != null && { MediaSampleRate: input.MediaSampleRate }),
    ...(input.Streams != null && { Streams: se_Streams(input.Streams, context) }),
  };
};

/**
 * serializeAws_restJson1LambdaFunctionSinkConfiguration
 */
const se_LambdaFunctionSinkConfiguration = (input: LambdaFunctionSinkConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.InsightsTarget != null && { InsightsTarget: input.InsightsTarget }),
  };
};

/**
 * serializeAws_restJson1LiveConnectorRTMPConfiguration
 */
const se_LiveConnectorRTMPConfiguration = (input: LiveConnectorRTMPConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AudioChannels != null && { AudioChannels: input.AudioChannels }),
    ...(input.AudioSampleRate != null && { AudioSampleRate: input.AudioSampleRate }),
    ...(input.Url != null && { Url: input.Url }),
  };
};

/**
 * serializeAws_restJson1LiveConnectorSinkConfiguration
 */
const se_LiveConnectorSinkConfiguration = (input: LiveConnectorSinkConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.RTMPConfiguration != null && {
      RTMPConfiguration: se_LiveConnectorRTMPConfiguration(input.RTMPConfiguration, context),
    }),
    ...(input.SinkType != null && { SinkType: input.SinkType }),
  };
};

/**
 * serializeAws_restJson1LiveConnectorSinkList
 */
const se_LiveConnectorSinkList = (input: LiveConnectorSinkConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_LiveConnectorSinkConfiguration(entry, context);
    });
};

/**
 * serializeAws_restJson1LiveConnectorSourceConfiguration
 */
const se_LiveConnectorSourceConfiguration = (input: LiveConnectorSourceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ChimeSdkMeetingLiveConnectorConfiguration != null && {
      ChimeSdkMeetingLiveConnectorConfiguration: se_ChimeSdkMeetingLiveConnectorConfiguration(
        input.ChimeSdkMeetingLiveConnectorConfiguration,
        context
      ),
    }),
    ...(input.SourceType != null && { SourceType: input.SourceType }),
  };
};

/**
 * serializeAws_restJson1LiveConnectorSourceList
 */
const se_LiveConnectorSourceList = (input: LiveConnectorSourceConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_LiveConnectorSourceConfiguration(entry, context);
    });
};

/**
 * serializeAws_restJson1MediaCapturePipelineSourceConfiguration
 */
const se_MediaCapturePipelineSourceConfiguration = (
  input: MediaCapturePipelineSourceConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChimeSdkMeetingConfiguration != null && {
      ChimeSdkMeetingConfiguration: se_ChimeSdkMeetingConcatenationConfiguration(
        input.ChimeSdkMeetingConfiguration,
        context
      ),
    }),
    ...(input.MediaPipelineArn != null && { MediaPipelineArn: input.MediaPipelineArn }),
  };
};

/**
 * serializeAws_restJson1MediaInsightsPipelineConfigurationElement
 */
const se_MediaInsightsPipelineConfigurationElement = (
  input: MediaInsightsPipelineConfigurationElement,
  context: __SerdeContext
): any => {
  return {
    ...(input.AmazonTranscribeCallAnalyticsProcessorConfiguration != null && {
      AmazonTranscribeCallAnalyticsProcessorConfiguration: se_AmazonTranscribeCallAnalyticsProcessorConfiguration(
        input.AmazonTranscribeCallAnalyticsProcessorConfiguration,
        context
      ),
    }),
    ...(input.AmazonTranscribeProcessorConfiguration != null && {
      AmazonTranscribeProcessorConfiguration: se_AmazonTranscribeProcessorConfiguration(
        input.AmazonTranscribeProcessorConfiguration,
        context
      ),
    }),
    ...(input.KinesisDataStreamSinkConfiguration != null && {
      KinesisDataStreamSinkConfiguration: se_KinesisDataStreamSinkConfiguration(
        input.KinesisDataStreamSinkConfiguration,
        context
      ),
    }),
    ...(input.LambdaFunctionSinkConfiguration != null && {
      LambdaFunctionSinkConfiguration: se_LambdaFunctionSinkConfiguration(
        input.LambdaFunctionSinkConfiguration,
        context
      ),
    }),
    ...(input.S3RecordingSinkConfiguration != null && {
      S3RecordingSinkConfiguration: se_S3RecordingSinkConfiguration(input.S3RecordingSinkConfiguration, context),
    }),
    ...(input.SnsTopicSinkConfiguration != null && {
      SnsTopicSinkConfiguration: se_SnsTopicSinkConfiguration(input.SnsTopicSinkConfiguration, context),
    }),
    ...(input.SqsQueueSinkConfiguration != null && {
      SqsQueueSinkConfiguration: se_SqsQueueSinkConfiguration(input.SqsQueueSinkConfiguration, context),
    }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.VoiceAnalyticsProcessorConfiguration != null && {
      VoiceAnalyticsProcessorConfiguration: se_VoiceAnalyticsProcessorConfiguration(
        input.VoiceAnalyticsProcessorConfiguration,
        context
      ),
    }),
  };
};

/**
 * serializeAws_restJson1MediaInsightsPipelineConfigurationElements
 */
const se_MediaInsightsPipelineConfigurationElements = (
  input: MediaInsightsPipelineConfigurationElement[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MediaInsightsPipelineConfigurationElement(entry, context);
    });
};

/**
 * serializeAws_restJson1MediaInsightsRuntimeMetadata
 */
const se_MediaInsightsRuntimeMetadata = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1MeetingEventsConcatenationConfiguration
 */
const se_MeetingEventsConcatenationConfiguration = (
  input: MeetingEventsConcatenationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.State != null && { State: input.State }),
  };
};

/**
 * serializeAws_restJson1PostCallAnalyticsSettings
 */
const se_PostCallAnalyticsSettings = (input: PostCallAnalyticsSettings, context: __SerdeContext): any => {
  return {
    ...(input.ContentRedactionOutput != null && { ContentRedactionOutput: input.ContentRedactionOutput }),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.OutputEncryptionKMSKeyId != null && { OutputEncryptionKMSKeyId: input.OutputEncryptionKMSKeyId }),
    ...(input.OutputLocation != null && { OutputLocation: input.OutputLocation }),
  };
};

/**
 * serializeAws_restJson1PresenterOnlyConfiguration
 */
const se_PresenterOnlyConfiguration = (input: PresenterOnlyConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.PresenterPosition != null && { PresenterPosition: input.PresenterPosition }),
  };
};

/**
 * serializeAws_restJson1RealTimeAlertConfiguration
 */
const se_RealTimeAlertConfiguration = (input: RealTimeAlertConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Disabled != null && { Disabled: input.Disabled }),
    ...(input.Rules != null && { Rules: se_RealTimeAlertRuleList(input.Rules, context) }),
  };
};

/**
 * serializeAws_restJson1RealTimeAlertRule
 */
const se_RealTimeAlertRule = (input: RealTimeAlertRule, context: __SerdeContext): any => {
  return {
    ...(input.IssueDetectionConfiguration != null && {
      IssueDetectionConfiguration: se_IssueDetectionConfiguration(input.IssueDetectionConfiguration, context),
    }),
    ...(input.KeywordMatchConfiguration != null && {
      KeywordMatchConfiguration: se_KeywordMatchConfiguration(input.KeywordMatchConfiguration, context),
    }),
    ...(input.SentimentConfiguration != null && {
      SentimentConfiguration: se_SentimentConfiguration(input.SentimentConfiguration, context),
    }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_restJson1RealTimeAlertRuleList
 */
const se_RealTimeAlertRuleList = (input: RealTimeAlertRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RealTimeAlertRule(entry, context);
    });
};

/**
 * serializeAws_restJson1RecordingStreamConfiguration
 */
const se_RecordingStreamConfiguration = (input: RecordingStreamConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.StreamArn != null && { StreamArn: input.StreamArn }),
  };
};

/**
 * serializeAws_restJson1RecordingStreamList
 */
const se_RecordingStreamList = (input: RecordingStreamConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RecordingStreamConfiguration(entry, context);
    });
};

/**
 * serializeAws_restJson1S3BucketSinkConfiguration
 */
const se_S3BucketSinkConfiguration = (input: S3BucketSinkConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Destination != null && { Destination: input.Destination }),
  };
};

/**
 * serializeAws_restJson1S3RecordingSinkConfiguration
 */
const se_S3RecordingSinkConfiguration = (input: S3RecordingSinkConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Destination != null && { Destination: input.Destination }),
  };
};

/**
 * serializeAws_restJson1S3RecordingSinkRuntimeConfiguration
 */
const se_S3RecordingSinkRuntimeConfiguration = (
  input: S3RecordingSinkRuntimeConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Destination != null && { Destination: input.Destination }),
    ...(input.RecordingFileFormat != null && { RecordingFileFormat: input.RecordingFileFormat }),
  };
};

/**
 * serializeAws_restJson1SelectedVideoStreams
 */
const se_SelectedVideoStreams = (input: SelectedVideoStreams, context: __SerdeContext): any => {
  return {
    ...(input.AttendeeIds != null && { AttendeeIds: se_AttendeeIdList(input.AttendeeIds, context) }),
    ...(input.ExternalUserIds != null && { ExternalUserIds: se_ExternalUserIdList(input.ExternalUserIds, context) }),
  };
};

/**
 * serializeAws_restJson1SentimentConfiguration
 */
const se_SentimentConfiguration = (input: SentimentConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.RuleName != null && { RuleName: input.RuleName }),
    ...(input.SentimentType != null && { SentimentType: input.SentimentType }),
    ...(input.TimePeriod != null && { TimePeriod: input.TimePeriod }),
  };
};

/**
 * serializeAws_restJson1SnsTopicSinkConfiguration
 */
const se_SnsTopicSinkConfiguration = (input: SnsTopicSinkConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.InsightsTarget != null && { InsightsTarget: input.InsightsTarget }),
  };
};

/**
 * serializeAws_restJson1SourceConfiguration
 */
const se_SourceConfiguration = (input: SourceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.SelectedVideoStreams != null && {
      SelectedVideoStreams: se_SelectedVideoStreams(input.SelectedVideoStreams, context),
    }),
  };
};

/**
 * serializeAws_restJson1SqsQueueSinkConfiguration
 */
const se_SqsQueueSinkConfiguration = (input: SqsQueueSinkConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.InsightsTarget != null && { InsightsTarget: input.InsightsTarget }),
  };
};

/**
 * serializeAws_restJson1StreamChannelDefinition
 */
const se_StreamChannelDefinition = (input: StreamChannelDefinition, context: __SerdeContext): any => {
  return {
    ...(input.ChannelDefinitions != null && {
      ChannelDefinitions: se_ChannelDefinitions(input.ChannelDefinitions, context),
    }),
    ...(input.NumberOfChannels != null && { NumberOfChannels: input.NumberOfChannels }),
  };
};

/**
 * serializeAws_restJson1StreamConfiguration
 */
const se_StreamConfiguration = (input: StreamConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.FragmentNumber != null && { FragmentNumber: input.FragmentNumber }),
    ...(input.StreamArn != null && { StreamArn: input.StreamArn }),
    ...(input.StreamChannelDefinition != null && {
      StreamChannelDefinition: se_StreamChannelDefinition(input.StreamChannelDefinition, context),
    }),
  };
};

/**
 * serializeAws_restJson1Streams
 */
const se_Streams = (input: StreamConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_StreamConfiguration(entry, context);
    });
};

/**
 * serializeAws_restJson1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_restJson1TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_restJson1TimestampRange
 */
const se_TimestampRange = (input: TimestampRange, context: __SerdeContext): any => {
  return {
    ...(input.EndTimestamp != null && { EndTimestamp: Math.round(input.EndTimestamp.getTime() / 1000) }),
    ...(input.StartTimestamp != null && { StartTimestamp: Math.round(input.StartTimestamp.getTime() / 1000) }),
  };
};

/**
 * serializeAws_restJson1TranscriptionMessagesConcatenationConfiguration
 */
const se_TranscriptionMessagesConcatenationConfiguration = (
  input: TranscriptionMessagesConcatenationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.State != null && { State: input.State }),
  };
};

/**
 * serializeAws_restJson1VideoArtifactsConfiguration
 */
const se_VideoArtifactsConfiguration = (input: VideoArtifactsConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.MuxType != null && { MuxType: input.MuxType }),
    ...(input.State != null && { State: input.State }),
  };
};

/**
 * serializeAws_restJson1VideoConcatenationConfiguration
 */
const se_VideoConcatenationConfiguration = (input: VideoConcatenationConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.State != null && { State: input.State }),
  };
};

/**
 * serializeAws_restJson1VoiceAnalyticsProcessorConfiguration
 */
const se_VoiceAnalyticsProcessorConfiguration = (
  input: VoiceAnalyticsProcessorConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.SpeakerSearchStatus != null && { SpeakerSearchStatus: input.SpeakerSearchStatus }),
    ...(input.VoiceToneAnalysisStatus != null && { VoiceToneAnalysisStatus: input.VoiceToneAnalysisStatus }),
  };
};

/**
 * deserializeAws_restJson1AmazonTranscribeCallAnalyticsProcessorConfiguration
 */
const de_AmazonTranscribeCallAnalyticsProcessorConfiguration = (
  output: any,
  context: __SerdeContext
): AmazonTranscribeCallAnalyticsProcessorConfiguration => {
  return {
    CallAnalyticsStreamCategories:
      output.CallAnalyticsStreamCategories != null
        ? de_CategoryNameList(output.CallAnalyticsStreamCategories, context)
        : undefined,
    ContentIdentificationType: __expectString(output.ContentIdentificationType),
    ContentRedactionType: __expectString(output.ContentRedactionType),
    EnablePartialResultsStabilization: __expectBoolean(output.EnablePartialResultsStabilization),
    FilterPartialResults: __expectBoolean(output.FilterPartialResults),
    LanguageCode: __expectString(output.LanguageCode),
    LanguageModelName: __expectString(output.LanguageModelName),
    PartialResultsStability: __expectString(output.PartialResultsStability),
    PiiEntityTypes: __expectString(output.PiiEntityTypes),
    PostCallAnalyticsSettings:
      output.PostCallAnalyticsSettings != null
        ? de_PostCallAnalyticsSettings(output.PostCallAnalyticsSettings, context)
        : undefined,
    VocabularyFilterMethod: __expectString(output.VocabularyFilterMethod),
    VocabularyFilterName: __expectString(output.VocabularyFilterName),
    VocabularyName: __expectString(output.VocabularyName),
  } as any;
};

/**
 * deserializeAws_restJson1AmazonTranscribeProcessorConfiguration
 */
const de_AmazonTranscribeProcessorConfiguration = (
  output: any,
  context: __SerdeContext
): AmazonTranscribeProcessorConfiguration => {
  return {
    ContentIdentificationType: __expectString(output.ContentIdentificationType),
    ContentRedactionType: __expectString(output.ContentRedactionType),
    EnablePartialResultsStabilization: __expectBoolean(output.EnablePartialResultsStabilization),
    FilterPartialResults: __expectBoolean(output.FilterPartialResults),
    LanguageCode: __expectString(output.LanguageCode),
    LanguageModelName: __expectString(output.LanguageModelName),
    PartialResultsStability: __expectString(output.PartialResultsStability),
    PiiEntityTypes: __expectString(output.PiiEntityTypes),
    ShowSpeakerLabel: __expectBoolean(output.ShowSpeakerLabel),
    VocabularyFilterMethod: __expectString(output.VocabularyFilterMethod),
    VocabularyFilterName: __expectString(output.VocabularyFilterName),
    VocabularyName: __expectString(output.VocabularyName),
  } as any;
};

/**
 * deserializeAws_restJson1ArtifactsConcatenationConfiguration
 */
const de_ArtifactsConcatenationConfiguration = (
  output: any,
  context: __SerdeContext
): ArtifactsConcatenationConfiguration => {
  return {
    Audio: output.Audio != null ? de_AudioConcatenationConfiguration(output.Audio, context) : undefined,
    CompositedVideo:
      output.CompositedVideo != null
        ? de_CompositedVideoConcatenationConfiguration(output.CompositedVideo, context)
        : undefined,
    Content: output.Content != null ? de_ContentConcatenationConfiguration(output.Content, context) : undefined,
    DataChannel:
      output.DataChannel != null ? de_DataChannelConcatenationConfiguration(output.DataChannel, context) : undefined,
    MeetingEvents:
      output.MeetingEvents != null
        ? de_MeetingEventsConcatenationConfiguration(output.MeetingEvents, context)
        : undefined,
    TranscriptionMessages:
      output.TranscriptionMessages != null
        ? de_TranscriptionMessagesConcatenationConfiguration(output.TranscriptionMessages, context)
        : undefined,
    Video: output.Video != null ? de_VideoConcatenationConfiguration(output.Video, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ArtifactsConfiguration
 */
const de_ArtifactsConfiguration = (output: any, context: __SerdeContext): ArtifactsConfiguration => {
  return {
    Audio: output.Audio != null ? de_AudioArtifactsConfiguration(output.Audio, context) : undefined,
    CompositedVideo:
      output.CompositedVideo != null
        ? de_CompositedVideoArtifactsConfiguration(output.CompositedVideo, context)
        : undefined,
    Content: output.Content != null ? de_ContentArtifactsConfiguration(output.Content, context) : undefined,
    Video: output.Video != null ? de_VideoArtifactsConfiguration(output.Video, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AttendeeIdList
 */
const de_AttendeeIdList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1AudioArtifactsConfiguration
 */
const de_AudioArtifactsConfiguration = (output: any, context: __SerdeContext): AudioArtifactsConfiguration => {
  return {
    MuxType: __expectString(output.MuxType),
  } as any;
};

/**
 * deserializeAws_restJson1AudioConcatenationConfiguration
 */
const de_AudioConcatenationConfiguration = (output: any, context: __SerdeContext): AudioConcatenationConfiguration => {
  return {
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_restJson1CategoryNameList
 */
const de_CategoryNameList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1ChannelDefinition
 */
const de_ChannelDefinition = (output: any, context: __SerdeContext): ChannelDefinition => {
  return {
    ChannelId: __expectInt32(output.ChannelId),
    ParticipantRole: __expectString(output.ParticipantRole),
  } as any;
};

/**
 * deserializeAws_restJson1ChannelDefinitions
 */
const de_ChannelDefinitions = (output: any, context: __SerdeContext): ChannelDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ChannelDefinition(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ChimeSdkMeetingConcatenationConfiguration
 */
const de_ChimeSdkMeetingConcatenationConfiguration = (
  output: any,
  context: __SerdeContext
): ChimeSdkMeetingConcatenationConfiguration => {
  return {
    ArtifactsConfiguration:
      output.ArtifactsConfiguration != null
        ? de_ArtifactsConcatenationConfiguration(output.ArtifactsConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ChimeSdkMeetingConfiguration
 */
const de_ChimeSdkMeetingConfiguration = (output: any, context: __SerdeContext): ChimeSdkMeetingConfiguration => {
  return {
    ArtifactsConfiguration:
      output.ArtifactsConfiguration != null
        ? de_ArtifactsConfiguration(output.ArtifactsConfiguration, context)
        : undefined,
    SourceConfiguration:
      output.SourceConfiguration != null ? de_SourceConfiguration(output.SourceConfiguration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ChimeSdkMeetingLiveConnectorConfiguration
 */
const de_ChimeSdkMeetingLiveConnectorConfiguration = (
  output: any,
  context: __SerdeContext
): ChimeSdkMeetingLiveConnectorConfiguration => {
  return {
    Arn: __expectString(output.Arn),
    CompositedVideo:
      output.CompositedVideo != null
        ? de_CompositedVideoArtifactsConfiguration(output.CompositedVideo, context)
        : undefined,
    MuxType: __expectString(output.MuxType),
    SourceConfiguration:
      output.SourceConfiguration != null ? de_SourceConfiguration(output.SourceConfiguration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CompositedVideoArtifactsConfiguration
 */
const de_CompositedVideoArtifactsConfiguration = (
  output: any,
  context: __SerdeContext
): CompositedVideoArtifactsConfiguration => {
  return {
    GridViewConfiguration:
      output.GridViewConfiguration != null
        ? de_GridViewConfiguration(output.GridViewConfiguration, context)
        : undefined,
    Layout: __expectString(output.Layout),
    Resolution: __expectString(output.Resolution),
  } as any;
};

/**
 * deserializeAws_restJson1CompositedVideoConcatenationConfiguration
 */
const de_CompositedVideoConcatenationConfiguration = (
  output: any,
  context: __SerdeContext
): CompositedVideoConcatenationConfiguration => {
  return {
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_restJson1ConcatenationSink
 */
const de_ConcatenationSink = (output: any, context: __SerdeContext): ConcatenationSink => {
  return {
    S3BucketSinkConfiguration:
      output.S3BucketSinkConfiguration != null
        ? de_S3BucketSinkConfiguration(output.S3BucketSinkConfiguration, context)
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1ConcatenationSinkList
 */
const de_ConcatenationSinkList = (output: any, context: __SerdeContext): ConcatenationSink[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConcatenationSink(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ConcatenationSource
 */
const de_ConcatenationSource = (output: any, context: __SerdeContext): ConcatenationSource => {
  return {
    MediaCapturePipelineSourceConfiguration:
      output.MediaCapturePipelineSourceConfiguration != null
        ? de_MediaCapturePipelineSourceConfiguration(output.MediaCapturePipelineSourceConfiguration, context)
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1ConcatenationSourceList
 */
const de_ConcatenationSourceList = (output: any, context: __SerdeContext): ConcatenationSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConcatenationSource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ContentArtifactsConfiguration
 */
const de_ContentArtifactsConfiguration = (output: any, context: __SerdeContext): ContentArtifactsConfiguration => {
  return {
    MuxType: __expectString(output.MuxType),
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_restJson1ContentConcatenationConfiguration
 */
const de_ContentConcatenationConfiguration = (
  output: any,
  context: __SerdeContext
): ContentConcatenationConfiguration => {
  return {
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_restJson1DataChannelConcatenationConfiguration
 */
const de_DataChannelConcatenationConfiguration = (
  output: any,
  context: __SerdeContext
): DataChannelConcatenationConfiguration => {
  return {
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_restJson1ExternalUserIdList
 */
const de_ExternalUserIdList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1FragmentSelector
 */
const de_FragmentSelector = (output: any, context: __SerdeContext): FragmentSelector => {
  return {
    FragmentSelectorType: __expectString(output.FragmentSelectorType),
    TimestampRange: output.TimestampRange != null ? de_TimestampRange(output.TimestampRange, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1GridViewConfiguration
 */
const de_GridViewConfiguration = (output: any, context: __SerdeContext): GridViewConfiguration => {
  return {
    ContentShareLayout: __expectString(output.ContentShareLayout),
    PresenterOnlyConfiguration:
      output.PresenterOnlyConfiguration != null
        ? de_PresenterOnlyConfiguration(output.PresenterOnlyConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1IssueDetectionConfiguration
 */
const de_IssueDetectionConfiguration = (output: any, context: __SerdeContext): IssueDetectionConfiguration => {
  return {
    RuleName: __expectString(output.RuleName),
  } as any;
};

/**
 * deserializeAws_restJson1KeywordMatchConfiguration
 */
const de_KeywordMatchConfiguration = (output: any, context: __SerdeContext): KeywordMatchConfiguration => {
  return {
    Keywords: output.Keywords != null ? de_KeywordMatchWordList(output.Keywords, context) : undefined,
    Negate: __expectBoolean(output.Negate),
    RuleName: __expectString(output.RuleName),
  } as any;
};

/**
 * deserializeAws_restJson1KeywordMatchWordList
 */
const de_KeywordMatchWordList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1KinesisDataStreamSinkConfiguration
 */
const de_KinesisDataStreamSinkConfiguration = (
  output: any,
  context: __SerdeContext
): KinesisDataStreamSinkConfiguration => {
  return {
    InsightsTarget: __expectString(output.InsightsTarget),
  } as any;
};

/**
 * deserializeAws_restJson1KinesisVideoStreamRecordingSourceRuntimeConfiguration
 */
const de_KinesisVideoStreamRecordingSourceRuntimeConfiguration = (
  output: any,
  context: __SerdeContext
): KinesisVideoStreamRecordingSourceRuntimeConfiguration => {
  return {
    FragmentSelector:
      output.FragmentSelector != null ? de_FragmentSelector(output.FragmentSelector, context) : undefined,
    Streams: output.Streams != null ? de_RecordingStreamList(output.Streams, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1KinesisVideoStreamSourceRuntimeConfiguration
 */
const de_KinesisVideoStreamSourceRuntimeConfiguration = (
  output: any,
  context: __SerdeContext
): KinesisVideoStreamSourceRuntimeConfiguration => {
  return {
    MediaEncoding: __expectString(output.MediaEncoding),
    MediaSampleRate: __expectInt32(output.MediaSampleRate),
    Streams: output.Streams != null ? de_Streams(output.Streams, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1LambdaFunctionSinkConfiguration
 */
const de_LambdaFunctionSinkConfiguration = (output: any, context: __SerdeContext): LambdaFunctionSinkConfiguration => {
  return {
    InsightsTarget: __expectString(output.InsightsTarget),
  } as any;
};

/**
 * deserializeAws_restJson1LiveConnectorRTMPConfiguration
 */
const de_LiveConnectorRTMPConfiguration = (output: any, context: __SerdeContext): LiveConnectorRTMPConfiguration => {
  return {
    AudioChannels: __expectString(output.AudioChannels),
    AudioSampleRate: __expectString(output.AudioSampleRate),
    Url: __expectString(output.Url),
  } as any;
};

/**
 * deserializeAws_restJson1LiveConnectorSinkConfiguration
 */
const de_LiveConnectorSinkConfiguration = (output: any, context: __SerdeContext): LiveConnectorSinkConfiguration => {
  return {
    RTMPConfiguration:
      output.RTMPConfiguration != null
        ? de_LiveConnectorRTMPConfiguration(output.RTMPConfiguration, context)
        : undefined,
    SinkType: __expectString(output.SinkType),
  } as any;
};

/**
 * deserializeAws_restJson1LiveConnectorSinkList
 */
const de_LiveConnectorSinkList = (output: any, context: __SerdeContext): LiveConnectorSinkConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LiveConnectorSinkConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LiveConnectorSourceConfiguration
 */
const de_LiveConnectorSourceConfiguration = (
  output: any,
  context: __SerdeContext
): LiveConnectorSourceConfiguration => {
  return {
    ChimeSdkMeetingLiveConnectorConfiguration:
      output.ChimeSdkMeetingLiveConnectorConfiguration != null
        ? de_ChimeSdkMeetingLiveConnectorConfiguration(output.ChimeSdkMeetingLiveConnectorConfiguration, context)
        : undefined,
    SourceType: __expectString(output.SourceType),
  } as any;
};

/**
 * deserializeAws_restJson1LiveConnectorSourceList
 */
const de_LiveConnectorSourceList = (output: any, context: __SerdeContext): LiveConnectorSourceConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LiveConnectorSourceConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MediaCapturePipeline
 */
const de_MediaCapturePipeline = (output: any, context: __SerdeContext): MediaCapturePipeline => {
  return {
    ChimeSdkMeetingConfiguration:
      output.ChimeSdkMeetingConfiguration != null
        ? de_ChimeSdkMeetingConfiguration(output.ChimeSdkMeetingConfiguration, context)
        : undefined,
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.CreatedTimestamp))
        : undefined,
    MediaPipelineArn: __expectString(output.MediaPipelineArn),
    MediaPipelineId: __expectString(output.MediaPipelineId),
    SinkArn: __expectString(output.SinkArn),
    SinkType: __expectString(output.SinkType),
    SourceArn: __expectString(output.SourceArn),
    SourceType: __expectString(output.SourceType),
    Status: __expectString(output.Status),
    UpdatedTimestamp:
      output.UpdatedTimestamp != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.UpdatedTimestamp))
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MediaCapturePipelineSourceConfiguration
 */
const de_MediaCapturePipelineSourceConfiguration = (
  output: any,
  context: __SerdeContext
): MediaCapturePipelineSourceConfiguration => {
  return {
    ChimeSdkMeetingConfiguration:
      output.ChimeSdkMeetingConfiguration != null
        ? de_ChimeSdkMeetingConcatenationConfiguration(output.ChimeSdkMeetingConfiguration, context)
        : undefined,
    MediaPipelineArn: __expectString(output.MediaPipelineArn),
  } as any;
};

/**
 * deserializeAws_restJson1MediaCapturePipelineSummary
 */
const de_MediaCapturePipelineSummary = (output: any, context: __SerdeContext): MediaCapturePipelineSummary => {
  return {
    MediaPipelineArn: __expectString(output.MediaPipelineArn),
    MediaPipelineId: __expectString(output.MediaPipelineId),
  } as any;
};

/**
 * deserializeAws_restJson1MediaCapturePipelineSummaryList
 */
const de_MediaCapturePipelineSummaryList = (output: any, context: __SerdeContext): MediaCapturePipelineSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MediaCapturePipelineSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MediaConcatenationPipeline
 */
const de_MediaConcatenationPipeline = (output: any, context: __SerdeContext): MediaConcatenationPipeline => {
  return {
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.CreatedTimestamp))
        : undefined,
    MediaPipelineArn: __expectString(output.MediaPipelineArn),
    MediaPipelineId: __expectString(output.MediaPipelineId),
    Sinks: output.Sinks != null ? de_ConcatenationSinkList(output.Sinks, context) : undefined,
    Sources: output.Sources != null ? de_ConcatenationSourceList(output.Sources, context) : undefined,
    Status: __expectString(output.Status),
    UpdatedTimestamp:
      output.UpdatedTimestamp != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.UpdatedTimestamp))
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MediaInsightsPipeline
 */
const de_MediaInsightsPipeline = (output: any, context: __SerdeContext): MediaInsightsPipeline => {
  return {
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.CreatedTimestamp))
        : undefined,
    KinesisVideoStreamRecordingSourceRuntimeConfiguration:
      output.KinesisVideoStreamRecordingSourceRuntimeConfiguration != null
        ? de_KinesisVideoStreamRecordingSourceRuntimeConfiguration(
            output.KinesisVideoStreamRecordingSourceRuntimeConfiguration,
            context
          )
        : undefined,
    KinesisVideoStreamSourceRuntimeConfiguration:
      output.KinesisVideoStreamSourceRuntimeConfiguration != null
        ? de_KinesisVideoStreamSourceRuntimeConfiguration(output.KinesisVideoStreamSourceRuntimeConfiguration, context)
        : undefined,
    MediaInsightsPipelineConfigurationArn: __expectString(output.MediaInsightsPipelineConfigurationArn),
    MediaInsightsRuntimeMetadata:
      output.MediaInsightsRuntimeMetadata != null
        ? de_MediaInsightsRuntimeMetadata(output.MediaInsightsRuntimeMetadata, context)
        : undefined,
    MediaPipelineArn: __expectString(output.MediaPipelineArn),
    MediaPipelineId: __expectString(output.MediaPipelineId),
    S3RecordingSinkRuntimeConfiguration:
      output.S3RecordingSinkRuntimeConfiguration != null
        ? de_S3RecordingSinkRuntimeConfiguration(output.S3RecordingSinkRuntimeConfiguration, context)
        : undefined,
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_restJson1MediaInsightsPipelineConfiguration
 */
const de_MediaInsightsPipelineConfiguration = (
  output: any,
  context: __SerdeContext
): MediaInsightsPipelineConfiguration => {
  return {
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.CreatedTimestamp))
        : undefined,
    Elements:
      output.Elements != null ? de_MediaInsightsPipelineConfigurationElements(output.Elements, context) : undefined,
    MediaInsightsPipelineConfigurationArn: __expectString(output.MediaInsightsPipelineConfigurationArn),
    MediaInsightsPipelineConfigurationId: __expectString(output.MediaInsightsPipelineConfigurationId),
    MediaInsightsPipelineConfigurationName: __expectString(output.MediaInsightsPipelineConfigurationName),
    RealTimeAlertConfiguration:
      output.RealTimeAlertConfiguration != null
        ? de_RealTimeAlertConfiguration(output.RealTimeAlertConfiguration, context)
        : undefined,
    ResourceAccessRoleArn: __expectString(output.ResourceAccessRoleArn),
    UpdatedTimestamp:
      output.UpdatedTimestamp != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.UpdatedTimestamp))
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MediaInsightsPipelineConfigurationElement
 */
const de_MediaInsightsPipelineConfigurationElement = (
  output: any,
  context: __SerdeContext
): MediaInsightsPipelineConfigurationElement => {
  return {
    AmazonTranscribeCallAnalyticsProcessorConfiguration:
      output.AmazonTranscribeCallAnalyticsProcessorConfiguration != null
        ? de_AmazonTranscribeCallAnalyticsProcessorConfiguration(
            output.AmazonTranscribeCallAnalyticsProcessorConfiguration,
            context
          )
        : undefined,
    AmazonTranscribeProcessorConfiguration:
      output.AmazonTranscribeProcessorConfiguration != null
        ? de_AmazonTranscribeProcessorConfiguration(output.AmazonTranscribeProcessorConfiguration, context)
        : undefined,
    KinesisDataStreamSinkConfiguration:
      output.KinesisDataStreamSinkConfiguration != null
        ? de_KinesisDataStreamSinkConfiguration(output.KinesisDataStreamSinkConfiguration, context)
        : undefined,
    LambdaFunctionSinkConfiguration:
      output.LambdaFunctionSinkConfiguration != null
        ? de_LambdaFunctionSinkConfiguration(output.LambdaFunctionSinkConfiguration, context)
        : undefined,
    S3RecordingSinkConfiguration:
      output.S3RecordingSinkConfiguration != null
        ? de_S3RecordingSinkConfiguration(output.S3RecordingSinkConfiguration, context)
        : undefined,
    SnsTopicSinkConfiguration:
      output.SnsTopicSinkConfiguration != null
        ? de_SnsTopicSinkConfiguration(output.SnsTopicSinkConfiguration, context)
        : undefined,
    SqsQueueSinkConfiguration:
      output.SqsQueueSinkConfiguration != null
        ? de_SqsQueueSinkConfiguration(output.SqsQueueSinkConfiguration, context)
        : undefined,
    Type: __expectString(output.Type),
    VoiceAnalyticsProcessorConfiguration:
      output.VoiceAnalyticsProcessorConfiguration != null
        ? de_VoiceAnalyticsProcessorConfiguration(output.VoiceAnalyticsProcessorConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MediaInsightsPipelineConfigurationElements
 */
const de_MediaInsightsPipelineConfigurationElements = (
  output: any,
  context: __SerdeContext
): MediaInsightsPipelineConfigurationElement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MediaInsightsPipelineConfigurationElement(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MediaInsightsPipelineConfigurationSummary
 */
const de_MediaInsightsPipelineConfigurationSummary = (
  output: any,
  context: __SerdeContext
): MediaInsightsPipelineConfigurationSummary => {
  return {
    MediaInsightsPipelineConfigurationArn: __expectString(output.MediaInsightsPipelineConfigurationArn),
    MediaInsightsPipelineConfigurationId: __expectString(output.MediaInsightsPipelineConfigurationId),
    MediaInsightsPipelineConfigurationName: __expectString(output.MediaInsightsPipelineConfigurationName),
  } as any;
};

/**
 * deserializeAws_restJson1MediaInsightsPipelineConfigurationSummaryList
 */
const de_MediaInsightsPipelineConfigurationSummaryList = (
  output: any,
  context: __SerdeContext
): MediaInsightsPipelineConfigurationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MediaInsightsPipelineConfigurationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MediaInsightsRuntimeMetadata
 */
const de_MediaInsightsRuntimeMetadata = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1MediaLiveConnectorPipeline
 */
const de_MediaLiveConnectorPipeline = (output: any, context: __SerdeContext): MediaLiveConnectorPipeline => {
  return {
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.CreatedTimestamp))
        : undefined,
    MediaPipelineArn: __expectString(output.MediaPipelineArn),
    MediaPipelineId: __expectString(output.MediaPipelineId),
    Sinks: output.Sinks != null ? de_LiveConnectorSinkList(output.Sinks, context) : undefined,
    Sources: output.Sources != null ? de_LiveConnectorSourceList(output.Sources, context) : undefined,
    Status: __expectString(output.Status),
    UpdatedTimestamp:
      output.UpdatedTimestamp != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.UpdatedTimestamp))
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MediaPipeline
 */
const de_MediaPipeline = (output: any, context: __SerdeContext): MediaPipeline => {
  return {
    MediaCapturePipeline:
      output.MediaCapturePipeline != null ? de_MediaCapturePipeline(output.MediaCapturePipeline, context) : undefined,
    MediaConcatenationPipeline:
      output.MediaConcatenationPipeline != null
        ? de_MediaConcatenationPipeline(output.MediaConcatenationPipeline, context)
        : undefined,
    MediaInsightsPipeline:
      output.MediaInsightsPipeline != null
        ? de_MediaInsightsPipeline(output.MediaInsightsPipeline, context)
        : undefined,
    MediaLiveConnectorPipeline:
      output.MediaLiveConnectorPipeline != null
        ? de_MediaLiveConnectorPipeline(output.MediaLiveConnectorPipeline, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MediaPipelineList
 */
const de_MediaPipelineList = (output: any, context: __SerdeContext): MediaPipelineSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MediaPipelineSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MediaPipelineSummary
 */
const de_MediaPipelineSummary = (output: any, context: __SerdeContext): MediaPipelineSummary => {
  return {
    MediaPipelineArn: __expectString(output.MediaPipelineArn),
    MediaPipelineId: __expectString(output.MediaPipelineId),
  } as any;
};

/**
 * deserializeAws_restJson1MeetingEventsConcatenationConfiguration
 */
const de_MeetingEventsConcatenationConfiguration = (
  output: any,
  context: __SerdeContext
): MeetingEventsConcatenationConfiguration => {
  return {
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_restJson1PostCallAnalyticsSettings
 */
const de_PostCallAnalyticsSettings = (output: any, context: __SerdeContext): PostCallAnalyticsSettings => {
  return {
    ContentRedactionOutput: __expectString(output.ContentRedactionOutput),
    DataAccessRoleArn: __expectString(output.DataAccessRoleArn),
    OutputEncryptionKMSKeyId: __expectString(output.OutputEncryptionKMSKeyId),
    OutputLocation: __expectString(output.OutputLocation),
  } as any;
};

/**
 * deserializeAws_restJson1PresenterOnlyConfiguration
 */
const de_PresenterOnlyConfiguration = (output: any, context: __SerdeContext): PresenterOnlyConfiguration => {
  return {
    PresenterPosition: __expectString(output.PresenterPosition),
  } as any;
};

/**
 * deserializeAws_restJson1RealTimeAlertConfiguration
 */
const de_RealTimeAlertConfiguration = (output: any, context: __SerdeContext): RealTimeAlertConfiguration => {
  return {
    Disabled: __expectBoolean(output.Disabled),
    Rules: output.Rules != null ? de_RealTimeAlertRuleList(output.Rules, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1RealTimeAlertRule
 */
const de_RealTimeAlertRule = (output: any, context: __SerdeContext): RealTimeAlertRule => {
  return {
    IssueDetectionConfiguration:
      output.IssueDetectionConfiguration != null
        ? de_IssueDetectionConfiguration(output.IssueDetectionConfiguration, context)
        : undefined,
    KeywordMatchConfiguration:
      output.KeywordMatchConfiguration != null
        ? de_KeywordMatchConfiguration(output.KeywordMatchConfiguration, context)
        : undefined,
    SentimentConfiguration:
      output.SentimentConfiguration != null
        ? de_SentimentConfiguration(output.SentimentConfiguration, context)
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1RealTimeAlertRuleList
 */
const de_RealTimeAlertRuleList = (output: any, context: __SerdeContext): RealTimeAlertRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RealTimeAlertRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RecordingStreamConfiguration
 */
const de_RecordingStreamConfiguration = (output: any, context: __SerdeContext): RecordingStreamConfiguration => {
  return {
    StreamArn: __expectString(output.StreamArn),
  } as any;
};

/**
 * deserializeAws_restJson1RecordingStreamList
 */
const de_RecordingStreamList = (output: any, context: __SerdeContext): RecordingStreamConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RecordingStreamConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1S3BucketSinkConfiguration
 */
const de_S3BucketSinkConfiguration = (output: any, context: __SerdeContext): S3BucketSinkConfiguration => {
  return {
    Destination: __expectString(output.Destination),
  } as any;
};

/**
 * deserializeAws_restJson1S3RecordingSinkConfiguration
 */
const de_S3RecordingSinkConfiguration = (output: any, context: __SerdeContext): S3RecordingSinkConfiguration => {
  return {
    Destination: __expectString(output.Destination),
  } as any;
};

/**
 * deserializeAws_restJson1S3RecordingSinkRuntimeConfiguration
 */
const de_S3RecordingSinkRuntimeConfiguration = (
  output: any,
  context: __SerdeContext
): S3RecordingSinkRuntimeConfiguration => {
  return {
    Destination: __expectString(output.Destination),
    RecordingFileFormat: __expectString(output.RecordingFileFormat),
  } as any;
};

/**
 * deserializeAws_restJson1SelectedVideoStreams
 */
const de_SelectedVideoStreams = (output: any, context: __SerdeContext): SelectedVideoStreams => {
  return {
    AttendeeIds: output.AttendeeIds != null ? de_AttendeeIdList(output.AttendeeIds, context) : undefined,
    ExternalUserIds:
      output.ExternalUserIds != null ? de_ExternalUserIdList(output.ExternalUserIds, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SentimentConfiguration
 */
const de_SentimentConfiguration = (output: any, context: __SerdeContext): SentimentConfiguration => {
  return {
    RuleName: __expectString(output.RuleName),
    SentimentType: __expectString(output.SentimentType),
    TimePeriod: __expectInt32(output.TimePeriod),
  } as any;
};

/**
 * deserializeAws_restJson1SnsTopicSinkConfiguration
 */
const de_SnsTopicSinkConfiguration = (output: any, context: __SerdeContext): SnsTopicSinkConfiguration => {
  return {
    InsightsTarget: __expectString(output.InsightsTarget),
  } as any;
};

/**
 * deserializeAws_restJson1SourceConfiguration
 */
const de_SourceConfiguration = (output: any, context: __SerdeContext): SourceConfiguration => {
  return {
    SelectedVideoStreams:
      output.SelectedVideoStreams != null ? de_SelectedVideoStreams(output.SelectedVideoStreams, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SqsQueueSinkConfiguration
 */
const de_SqsQueueSinkConfiguration = (output: any, context: __SerdeContext): SqsQueueSinkConfiguration => {
  return {
    InsightsTarget: __expectString(output.InsightsTarget),
  } as any;
};

/**
 * deserializeAws_restJson1StreamChannelDefinition
 */
const de_StreamChannelDefinition = (output: any, context: __SerdeContext): StreamChannelDefinition => {
  return {
    ChannelDefinitions:
      output.ChannelDefinitions != null ? de_ChannelDefinitions(output.ChannelDefinitions, context) : undefined,
    NumberOfChannels: __expectInt32(output.NumberOfChannels),
  } as any;
};

/**
 * deserializeAws_restJson1StreamConfiguration
 */
const de_StreamConfiguration = (output: any, context: __SerdeContext): StreamConfiguration => {
  return {
    FragmentNumber: __expectString(output.FragmentNumber),
    StreamArn: __expectString(output.StreamArn),
    StreamChannelDefinition:
      output.StreamChannelDefinition != null
        ? de_StreamChannelDefinition(output.StreamChannelDefinition, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Streams
 */
const de_Streams = (output: any, context: __SerdeContext): StreamConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_StreamConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TimestampRange
 */
const de_TimestampRange = (output: any, context: __SerdeContext): TimestampRange => {
  return {
    EndTimestamp:
      output.EndTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTimestamp)))
        : undefined,
    StartTimestamp:
      output.StartTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTimestamp)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TranscriptionMessagesConcatenationConfiguration
 */
const de_TranscriptionMessagesConcatenationConfiguration = (
  output: any,
  context: __SerdeContext
): TranscriptionMessagesConcatenationConfiguration => {
  return {
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_restJson1VideoArtifactsConfiguration
 */
const de_VideoArtifactsConfiguration = (output: any, context: __SerdeContext): VideoArtifactsConfiguration => {
  return {
    MuxType: __expectString(output.MuxType),
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_restJson1VideoConcatenationConfiguration
 */
const de_VideoConcatenationConfiguration = (output: any, context: __SerdeContext): VideoConcatenationConfiguration => {
  return {
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_restJson1VoiceAnalyticsProcessorConfiguration
 */
const de_VoiceAnalyticsProcessorConfiguration = (
  output: any,
  context: __SerdeContext
): VoiceAnalyticsProcessorConfiguration => {
  return {
    SpeakerSearchStatus: __expectString(output.SpeakerSearchStatus),
    VoiceToneAnalysisStatus: __expectString(output.VoiceToneAnalysisStatus),
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
