// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
  CreateMediaPipelineKinesisVideoStreamPoolCommandInput,
  CreateMediaPipelineKinesisVideoStreamPoolCommandOutput,
} from "../commands/CreateMediaPipelineKinesisVideoStreamPoolCommand";
import {
  CreateMediaStreamPipelineCommandInput,
  CreateMediaStreamPipelineCommandOutput,
} from "../commands/CreateMediaStreamPipelineCommand";
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
  DeleteMediaPipelineKinesisVideoStreamPoolCommandInput,
  DeleteMediaPipelineKinesisVideoStreamPoolCommandOutput,
} from "../commands/DeleteMediaPipelineKinesisVideoStreamPoolCommand";
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
  GetMediaPipelineKinesisVideoStreamPoolCommandInput,
  GetMediaPipelineKinesisVideoStreamPoolCommandOutput,
} from "../commands/GetMediaPipelineKinesisVideoStreamPoolCommand";
import {
  GetSpeakerSearchTaskCommandInput,
  GetSpeakerSearchTaskCommandOutput,
} from "../commands/GetSpeakerSearchTaskCommand";
import {
  GetVoiceToneAnalysisTaskCommandInput,
  GetVoiceToneAnalysisTaskCommandOutput,
} from "../commands/GetVoiceToneAnalysisTaskCommand";
import {
  ListMediaCapturePipelinesCommandInput,
  ListMediaCapturePipelinesCommandOutput,
} from "../commands/ListMediaCapturePipelinesCommand";
import {
  ListMediaInsightsPipelineConfigurationsCommandInput,
  ListMediaInsightsPipelineConfigurationsCommandOutput,
} from "../commands/ListMediaInsightsPipelineConfigurationsCommand";
import {
  ListMediaPipelineKinesisVideoStreamPoolsCommandInput,
  ListMediaPipelineKinesisVideoStreamPoolsCommandOutput,
} from "../commands/ListMediaPipelineKinesisVideoStreamPoolsCommand";
import { ListMediaPipelinesCommandInput, ListMediaPipelinesCommandOutput } from "../commands/ListMediaPipelinesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  StartSpeakerSearchTaskCommandInput,
  StartSpeakerSearchTaskCommandOutput,
} from "../commands/StartSpeakerSearchTaskCommand";
import {
  StartVoiceToneAnalysisTaskCommandInput,
  StartVoiceToneAnalysisTaskCommandOutput,
} from "../commands/StartVoiceToneAnalysisTaskCommand";
import {
  StopSpeakerSearchTaskCommandInput,
  StopSpeakerSearchTaskCommandOutput,
} from "../commands/StopSpeakerSearchTaskCommand";
import {
  StopVoiceToneAnalysisTaskCommandInput,
  StopVoiceToneAnalysisTaskCommandOutput,
} from "../commands/StopVoiceToneAnalysisTaskCommand";
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
import {
  UpdateMediaPipelineKinesisVideoStreamPoolCommandInput,
  UpdateMediaPipelineKinesisVideoStreamPoolCommandOutput,
} from "../commands/UpdateMediaPipelineKinesisVideoStreamPoolCommand";
import { ChimeSDKMediaPipelinesServiceException as __BaseException } from "../models/ChimeSDKMediaPipelinesServiceException";
import {
  ActiveSpeakerOnlyConfiguration,
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
  HorizontalLayoutConfiguration,
  IssueDetectionConfiguration,
  KeywordMatchConfiguration,
  KinesisDataStreamSinkConfiguration,
  KinesisVideoStreamConfiguration,
  KinesisVideoStreamConfigurationUpdate,
  KinesisVideoStreamPoolConfiguration,
  KinesisVideoStreamRecordingSourceRuntimeConfiguration,
  KinesisVideoStreamSourceRuntimeConfiguration,
  KinesisVideoStreamSourceTaskConfiguration,
  LambdaFunctionSinkConfiguration,
  LiveConnectorRTMPConfiguration,
  LiveConnectorSinkConfiguration,
  LiveConnectorSourceConfiguration,
  MediaCapturePipeline,
  MediaCapturePipelineSourceConfiguration,
  MediaConcatenationPipeline,
  MediaInsightsPipeline,
  MediaInsightsPipelineConfiguration,
  MediaInsightsPipelineConfigurationElement,
  MediaLiveConnectorPipeline,
  MediaPipeline,
  MediaStreamPipeline,
  MediaStreamSink,
  MediaStreamSource,
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
  SpeakerSearchTask,
  SqsQueueSinkConfiguration,
  SseAwsKeyManagementParams,
  StreamChannelDefinition,
  StreamConfiguration,
  Tag,
  ThrottledClientException,
  TimestampRange,
  TranscriptionMessagesConcatenationConfiguration,
  UnauthorizedClientException,
  VerticalLayoutConfiguration,
  VideoArtifactsConfiguration,
  VideoAttribute,
  VideoConcatenationConfiguration,
  VoiceAnalyticsProcessorConfiguration,
  VoiceEnhancementSinkConfiguration,
  VoiceToneAnalysisTask,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateMediaCapturePipelineCommand
 */
export const se_CreateMediaCapturePipelineCommand = async (
  input: CreateMediaCapturePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sdk-media-capture-pipelines");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ChimeSdkMeetingConfiguration: (_) => _json(_),
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      SinkArn: [],
      SinkIamRoleArn: [],
      SinkType: [],
      SourceArn: [],
      SourceType: [],
      SseAwsKeyManagementParams: (_) => _json(_),
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateMediaConcatenationPipelineCommand
 */
export const se_CreateMediaConcatenationPipelineCommand = async (
  input: CreateMediaConcatenationPipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sdk-media-concatenation-pipelines");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Sinks: (_) => _json(_),
      Sources: (_) => _json(_),
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateMediaInsightsPipelineCommand
 */
export const se_CreateMediaInsightsPipelineCommand = async (
  input: CreateMediaInsightsPipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/media-insights-pipelines");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      KinesisVideoStreamRecordingSourceRuntimeConfiguration: (_) =>
        se_KinesisVideoStreamRecordingSourceRuntimeConfiguration(_, context),
      KinesisVideoStreamSourceRuntimeConfiguration: (_) => _json(_),
      MediaInsightsPipelineConfigurationArn: [],
      MediaInsightsRuntimeMetadata: (_) => _json(_),
      S3RecordingSinkRuntimeConfiguration: (_) => _json(_),
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateMediaInsightsPipelineConfigurationCommand
 */
export const se_CreateMediaInsightsPipelineConfigurationCommand = async (
  input: CreateMediaInsightsPipelineConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/media-insights-pipeline-configurations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Elements: (_) => _json(_),
      MediaInsightsPipelineConfigurationName: [],
      RealTimeAlertConfiguration: (_) => _json(_),
      ResourceAccessRoleArn: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateMediaLiveConnectorPipelineCommand
 */
export const se_CreateMediaLiveConnectorPipelineCommand = async (
  input: CreateMediaLiveConnectorPipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sdk-media-live-connector-pipelines");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Sinks: (_) => _json(_),
      Sources: (_) => _json(_),
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateMediaPipelineKinesisVideoStreamPoolCommand
 */
export const se_CreateMediaPipelineKinesisVideoStreamPoolCommand = async (
  input: CreateMediaPipelineKinesisVideoStreamPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/media-pipeline-kinesis-video-stream-pools");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      PoolName: [],
      StreamConfiguration: (_) => _json(_),
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateMediaStreamPipelineCommand
 */
export const se_CreateMediaStreamPipelineCommand = async (
  input: CreateMediaStreamPipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sdk-media-stream-pipelines");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Sinks: (_) => _json(_),
      Sources: (_) => _json(_),
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteMediaCapturePipelineCommand
 */
export const se_DeleteMediaCapturePipelineCommand = async (
  input: DeleteMediaCapturePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sdk-media-capture-pipelines/{MediaPipelineId}");
  b.p("MediaPipelineId", () => input.MediaPipelineId!, "{MediaPipelineId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteMediaInsightsPipelineConfigurationCommand
 */
export const se_DeleteMediaInsightsPipelineConfigurationCommand = async (
  input: DeleteMediaInsightsPipelineConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/media-insights-pipeline-configurations/{Identifier}");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteMediaPipelineCommand
 */
export const se_DeleteMediaPipelineCommand = async (
  input: DeleteMediaPipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sdk-media-pipelines/{MediaPipelineId}");
  b.p("MediaPipelineId", () => input.MediaPipelineId!, "{MediaPipelineId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteMediaPipelineKinesisVideoStreamPoolCommand
 */
export const se_DeleteMediaPipelineKinesisVideoStreamPoolCommand = async (
  input: DeleteMediaPipelineKinesisVideoStreamPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/media-pipeline-kinesis-video-stream-pools/{Identifier}");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMediaCapturePipelineCommand
 */
export const se_GetMediaCapturePipelineCommand = async (
  input: GetMediaCapturePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sdk-media-capture-pipelines/{MediaPipelineId}");
  b.p("MediaPipelineId", () => input.MediaPipelineId!, "{MediaPipelineId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMediaInsightsPipelineConfigurationCommand
 */
export const se_GetMediaInsightsPipelineConfigurationCommand = async (
  input: GetMediaInsightsPipelineConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/media-insights-pipeline-configurations/{Identifier}");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMediaPipelineCommand
 */
export const se_GetMediaPipelineCommand = async (
  input: GetMediaPipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sdk-media-pipelines/{MediaPipelineId}");
  b.p("MediaPipelineId", () => input.MediaPipelineId!, "{MediaPipelineId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMediaPipelineKinesisVideoStreamPoolCommand
 */
export const se_GetMediaPipelineKinesisVideoStreamPoolCommand = async (
  input: GetMediaPipelineKinesisVideoStreamPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/media-pipeline-kinesis-video-stream-pools/{Identifier}");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSpeakerSearchTaskCommand
 */
export const se_GetSpeakerSearchTaskCommand = async (
  input: GetSpeakerSearchTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/media-insights-pipelines/{Identifier}/speaker-search-tasks/{SpeakerSearchTaskId}");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  b.p("SpeakerSearchTaskId", () => input.SpeakerSearchTaskId!, "{SpeakerSearchTaskId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetVoiceToneAnalysisTaskCommand
 */
export const se_GetVoiceToneAnalysisTaskCommand = async (
  input: GetVoiceToneAnalysisTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/media-insights-pipelines/{Identifier}/voice-tone-analysis-tasks/{VoiceToneAnalysisTaskId}");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  b.p("VoiceToneAnalysisTaskId", () => input.VoiceToneAnalysisTaskId!, "{VoiceToneAnalysisTaskId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListMediaCapturePipelinesCommand
 */
export const se_ListMediaCapturePipelinesCommand = async (
  input: ListMediaCapturePipelinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sdk-media-capture-pipelines");
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListMediaInsightsPipelineConfigurationsCommand
 */
export const se_ListMediaInsightsPipelineConfigurationsCommand = async (
  input: ListMediaInsightsPipelineConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/media-insights-pipeline-configurations");
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListMediaPipelineKinesisVideoStreamPoolsCommand
 */
export const se_ListMediaPipelineKinesisVideoStreamPoolsCommand = async (
  input: ListMediaPipelineKinesisVideoStreamPoolsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/media-pipeline-kinesis-video-stream-pools");
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListMediaPipelinesCommand
 */
export const se_ListMediaPipelinesCommand = async (
  input: ListMediaPipelinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sdk-media-pipelines");
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
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
  b.bp("/tags");
  const query: any = map({
    [_a]: [, __expectNonNull(input[_RARN]!, `ResourceARN`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartSpeakerSearchTaskCommand
 */
export const se_StartSpeakerSearchTaskCommand = async (
  input: StartSpeakerSearchTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/media-insights-pipelines/{Identifier}/speaker-search-tasks");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  const query: any = map({
    [_o]: [, "start"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      KinesisVideoStreamSourceTaskConfiguration: (_) => _json(_),
      VoiceProfileDomainArn: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartVoiceToneAnalysisTaskCommand
 */
export const se_StartVoiceToneAnalysisTaskCommand = async (
  input: StartVoiceToneAnalysisTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/media-insights-pipelines/{Identifier}/voice-tone-analysis-tasks");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  const query: any = map({
    [_o]: [, "start"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      KinesisVideoStreamSourceTaskConfiguration: (_) => _json(_),
      LanguageCode: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopSpeakerSearchTaskCommand
 */
export const se_StopSpeakerSearchTaskCommand = async (
  input: StopSpeakerSearchTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/media-insights-pipelines/{Identifier}/speaker-search-tasks/{SpeakerSearchTaskId}");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  b.p("SpeakerSearchTaskId", () => input.SpeakerSearchTaskId!, "{SpeakerSearchTaskId}", false);
  const query: any = map({
    [_o]: [, "stop"],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopVoiceToneAnalysisTaskCommand
 */
export const se_StopVoiceToneAnalysisTaskCommand = async (
  input: StopVoiceToneAnalysisTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/media-insights-pipelines/{Identifier}/voice-tone-analysis-tasks/{VoiceToneAnalysisTaskId}");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  b.p("VoiceToneAnalysisTaskId", () => input.VoiceToneAnalysisTaskId!, "{VoiceToneAnalysisTaskId}", false);
  const query: any = map({
    [_o]: [, "stop"],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
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
  b.bp("/tags");
  const query: any = map({
    [_o]: [, "tag-resource"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      ResourceARN: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
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
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tags");
  const query: any = map({
    [_o]: [, "untag-resource"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      ResourceARN: [],
      TagKeys: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateMediaInsightsPipelineConfigurationCommand
 */
export const se_UpdateMediaInsightsPipelineConfigurationCommand = async (
  input: UpdateMediaInsightsPipelineConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/media-insights-pipeline-configurations/{Identifier}");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Elements: (_) => _json(_),
      RealTimeAlertConfiguration: (_) => _json(_),
      ResourceAccessRoleArn: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateMediaInsightsPipelineStatusCommand
 */
export const se_UpdateMediaInsightsPipelineStatusCommand = async (
  input: UpdateMediaInsightsPipelineStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/media-insights-pipeline-status/{Identifier}");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      UpdateStatus: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateMediaPipelineKinesisVideoStreamPoolCommand
 */
export const se_UpdateMediaPipelineKinesisVideoStreamPoolCommand = async (
  input: UpdateMediaPipelineKinesisVideoStreamPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/media-pipeline-kinesis-video-stream-pools/{Identifier}");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      StreamConfiguration: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateMediaCapturePipelineCommand
 */
export const de_CreateMediaCapturePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMediaCapturePipelineCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    MediaCapturePipeline: (_) => de_MediaCapturePipeline(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateMediaConcatenationPipelineCommand
 */
export const de_CreateMediaConcatenationPipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMediaConcatenationPipelineCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    MediaConcatenationPipeline: (_) => de_MediaConcatenationPipeline(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateMediaInsightsPipelineCommand
 */
export const de_CreateMediaInsightsPipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMediaInsightsPipelineCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    MediaInsightsPipeline: (_) => de_MediaInsightsPipeline(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateMediaInsightsPipelineConfigurationCommand
 */
export const de_CreateMediaInsightsPipelineConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMediaInsightsPipelineConfigurationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    MediaInsightsPipelineConfiguration: (_) => de_MediaInsightsPipelineConfiguration(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateMediaLiveConnectorPipelineCommand
 */
export const de_CreateMediaLiveConnectorPipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMediaLiveConnectorPipelineCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    MediaLiveConnectorPipeline: (_) => de_MediaLiveConnectorPipeline(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateMediaPipelineKinesisVideoStreamPoolCommand
 */
export const de_CreateMediaPipelineKinesisVideoStreamPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMediaPipelineKinesisVideoStreamPoolCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    KinesisVideoStreamPoolConfiguration: (_) => de_KinesisVideoStreamPoolConfiguration(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateMediaStreamPipelineCommand
 */
export const de_CreateMediaStreamPipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMediaStreamPipelineCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    MediaStreamPipeline: (_) => de_MediaStreamPipeline(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteMediaCapturePipelineCommand
 */
export const de_DeleteMediaCapturePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMediaCapturePipelineCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteMediaInsightsPipelineConfigurationCommand
 */
export const de_DeleteMediaInsightsPipelineConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMediaInsightsPipelineConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteMediaPipelineCommand
 */
export const de_DeleteMediaPipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMediaPipelineCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteMediaPipelineKinesisVideoStreamPoolCommand
 */
export const de_DeleteMediaPipelineKinesisVideoStreamPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMediaPipelineKinesisVideoStreamPoolCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetMediaCapturePipelineCommand
 */
export const de_GetMediaCapturePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMediaCapturePipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    MediaCapturePipeline: (_) => de_MediaCapturePipeline(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMediaInsightsPipelineConfigurationCommand
 */
export const de_GetMediaInsightsPipelineConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMediaInsightsPipelineConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    MediaInsightsPipelineConfiguration: (_) => de_MediaInsightsPipelineConfiguration(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMediaPipelineCommand
 */
export const de_GetMediaPipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMediaPipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    MediaPipeline: (_) => de_MediaPipeline(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMediaPipelineKinesisVideoStreamPoolCommand
 */
export const de_GetMediaPipelineKinesisVideoStreamPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMediaPipelineKinesisVideoStreamPoolCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    KinesisVideoStreamPoolConfiguration: (_) => de_KinesisVideoStreamPoolConfiguration(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSpeakerSearchTaskCommand
 */
export const de_GetSpeakerSearchTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSpeakerSearchTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    SpeakerSearchTask: (_) => de_SpeakerSearchTask(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetVoiceToneAnalysisTaskCommand
 */
export const de_GetVoiceToneAnalysisTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceToneAnalysisTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    VoiceToneAnalysisTask: (_) => de_VoiceToneAnalysisTask(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMediaCapturePipelinesCommand
 */
export const de_ListMediaCapturePipelinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMediaCapturePipelinesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    MediaCapturePipelines: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMediaInsightsPipelineConfigurationsCommand
 */
export const de_ListMediaInsightsPipelineConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMediaInsightsPipelineConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    MediaInsightsPipelineConfigurations: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMediaPipelineKinesisVideoStreamPoolsCommand
 */
export const de_ListMediaPipelineKinesisVideoStreamPoolsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMediaPipelineKinesisVideoStreamPoolsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    KinesisVideoStreamPools: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMediaPipelinesCommand
 */
export const de_ListMediaPipelinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMediaPipelinesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    MediaPipelines: _json,
    NextToken: __expectString,
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
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartSpeakerSearchTaskCommand
 */
export const de_StartSpeakerSearchTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSpeakerSearchTaskCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    SpeakerSearchTask: (_) => de_SpeakerSearchTask(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartVoiceToneAnalysisTaskCommand
 */
export const de_StartVoiceToneAnalysisTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartVoiceToneAnalysisTaskCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    VoiceToneAnalysisTask: (_) => de_VoiceToneAnalysisTask(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StopSpeakerSearchTaskCommand
 */
export const de_StopSpeakerSearchTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopSpeakerSearchTaskCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StopVoiceToneAnalysisTaskCommand
 */
export const de_StopVoiceToneAnalysisTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopVoiceToneAnalysisTaskCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateMediaInsightsPipelineConfigurationCommand
 */
export const de_UpdateMediaInsightsPipelineConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMediaInsightsPipelineConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    MediaInsightsPipelineConfiguration: (_) => de_MediaInsightsPipelineConfiguration(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateMediaInsightsPipelineStatusCommand
 */
export const de_UpdateMediaInsightsPipelineStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMediaInsightsPipelineStatusCommandOutput> => {
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
 * deserializeAws_restJson1UpdateMediaPipelineKinesisVideoStreamPoolCommand
 */
export const de_UpdateMediaPipelineKinesisVideoStreamPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMediaPipelineKinesisVideoStreamPoolCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    KinesisVideoStreamPoolConfiguration: (_) => de_KinesisVideoStreamPoolConfiguration(_, context),
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
    case "NotFoundException":
    case "com.amazonaws.chimesdkmediapipelines#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkmediapipelines#ConflictException":
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
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnauthorizedClientException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_ActiveSpeakerOnlyConfiguration omitted.

// se_AmazonTranscribeCallAnalyticsProcessorConfiguration omitted.

// se_AmazonTranscribeProcessorConfiguration omitted.

// se_ArtifactsConcatenationConfiguration omitted.

// se_ArtifactsConfiguration omitted.

// se_AttendeeIdList omitted.

// se_AudioArtifactsConfiguration omitted.

// se_AudioConcatenationConfiguration omitted.

// se_CategoryNameList omitted.

// se_ChannelDefinition omitted.

// se_ChannelDefinitions omitted.

// se_ChimeSdkMeetingConcatenationConfiguration omitted.

// se_ChimeSdkMeetingConfiguration omitted.

// se_ChimeSdkMeetingLiveConnectorConfiguration omitted.

// se_CompositedVideoArtifactsConfiguration omitted.

// se_CompositedVideoConcatenationConfiguration omitted.

// se_ConcatenationSink omitted.

// se_ConcatenationSinkList omitted.

// se_ConcatenationSource omitted.

// se_ConcatenationSourceList omitted.

// se_ContentArtifactsConfiguration omitted.

// se_ContentConcatenationConfiguration omitted.

// se_DataChannelConcatenationConfiguration omitted.

// se_ExternalUserIdList omitted.

/**
 * serializeAws_restJson1FragmentSelector
 */
const se_FragmentSelector = (input: FragmentSelector, context: __SerdeContext): any => {
  return take(input, {
    FragmentSelectorType: [],
    TimestampRange: (_) => se_TimestampRange(_, context),
  });
};

// se_GridViewConfiguration omitted.

// se_HorizontalLayoutConfiguration omitted.

// se_IssueDetectionConfiguration omitted.

// se_KeywordMatchConfiguration omitted.

// se_KeywordMatchWordList omitted.

// se_KinesisDataStreamSinkConfiguration omitted.

// se_KinesisVideoStreamConfiguration omitted.

// se_KinesisVideoStreamConfigurationUpdate omitted.

/**
 * serializeAws_restJson1KinesisVideoStreamRecordingSourceRuntimeConfiguration
 */
const se_KinesisVideoStreamRecordingSourceRuntimeConfiguration = (
  input: KinesisVideoStreamRecordingSourceRuntimeConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    FragmentSelector: (_) => se_FragmentSelector(_, context),
    Streams: _json,
  });
};

// se_KinesisVideoStreamSourceRuntimeConfiguration omitted.

// se_KinesisVideoStreamSourceTaskConfiguration omitted.

// se_LambdaFunctionSinkConfiguration omitted.

// se_LiveConnectorRTMPConfiguration omitted.

// se_LiveConnectorSinkConfiguration omitted.

// se_LiveConnectorSinkList omitted.

// se_LiveConnectorSourceConfiguration omitted.

// se_LiveConnectorSourceList omitted.

// se_MediaCapturePipelineSourceConfiguration omitted.

// se_MediaInsightsPipelineConfigurationElement omitted.

// se_MediaInsightsPipelineConfigurationElements omitted.

// se_MediaInsightsRuntimeMetadata omitted.

// se_MediaStreamSink omitted.

// se_MediaStreamSinkList omitted.

// se_MediaStreamSource omitted.

// se_MediaStreamSourceList omitted.

// se_MeetingEventsConcatenationConfiguration omitted.

// se_PostCallAnalyticsSettings omitted.

// se_PresenterOnlyConfiguration omitted.

// se_RealTimeAlertConfiguration omitted.

// se_RealTimeAlertRule omitted.

// se_RealTimeAlertRuleList omitted.

// se_RecordingStreamConfiguration omitted.

// se_RecordingStreamList omitted.

// se_S3BucketSinkConfiguration omitted.

// se_S3RecordingSinkConfiguration omitted.

// se_S3RecordingSinkRuntimeConfiguration omitted.

// se_SelectedVideoStreams omitted.

// se_SentimentConfiguration omitted.

// se_SnsTopicSinkConfiguration omitted.

// se_SourceConfiguration omitted.

// se_SqsQueueSinkConfiguration omitted.

// se_SseAwsKeyManagementParams omitted.

// se_StreamChannelDefinition omitted.

// se_StreamConfiguration omitted.

// se_Streams omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

/**
 * serializeAws_restJson1TimestampRange
 */
const se_TimestampRange = (input: TimestampRange, context: __SerdeContext): any => {
  return take(input, {
    EndTimestamp: (_) => _.getTime() / 1_000,
    StartTimestamp: (_) => _.getTime() / 1_000,
  });
};

// se_TranscriptionMessagesConcatenationConfiguration omitted.

// se_VerticalLayoutConfiguration omitted.

// se_VideoArtifactsConfiguration omitted.

// se_VideoAttribute omitted.

// se_VideoConcatenationConfiguration omitted.

// se_VoiceAnalyticsProcessorConfiguration omitted.

// se_VoiceEnhancementSinkConfiguration omitted.

// de_ActiveSpeakerOnlyConfiguration omitted.

// de_AmazonTranscribeCallAnalyticsProcessorConfiguration omitted.

// de_AmazonTranscribeProcessorConfiguration omitted.

// de_ArtifactsConcatenationConfiguration omitted.

// de_ArtifactsConfiguration omitted.

// de_AttendeeIdList omitted.

// de_AudioArtifactsConfiguration omitted.

// de_AudioConcatenationConfiguration omitted.

// de_CategoryNameList omitted.

// de_ChannelDefinition omitted.

// de_ChannelDefinitions omitted.

// de_ChimeSdkMeetingConcatenationConfiguration omitted.

// de_ChimeSdkMeetingConfiguration omitted.

// de_ChimeSdkMeetingLiveConnectorConfiguration omitted.

// de_CompositedVideoArtifactsConfiguration omitted.

// de_CompositedVideoConcatenationConfiguration omitted.

// de_ConcatenationSink omitted.

// de_ConcatenationSinkList omitted.

// de_ConcatenationSource omitted.

// de_ConcatenationSourceList omitted.

// de_ContentArtifactsConfiguration omitted.

// de_ContentConcatenationConfiguration omitted.

// de_DataChannelConcatenationConfiguration omitted.

// de_ExternalUserIdList omitted.

/**
 * deserializeAws_restJson1FragmentSelector
 */
const de_FragmentSelector = (output: any, context: __SerdeContext): FragmentSelector => {
  return take(output, {
    FragmentSelectorType: __expectString,
    TimestampRange: (_: any) => de_TimestampRange(_, context),
  }) as any;
};

// de_GridViewConfiguration omitted.

// de_HorizontalLayoutConfiguration omitted.

// de_IssueDetectionConfiguration omitted.

// de_KeywordMatchConfiguration omitted.

// de_KeywordMatchWordList omitted.

// de_KinesisDataStreamSinkConfiguration omitted.

// de_KinesisVideoStreamConfiguration omitted.

/**
 * deserializeAws_restJson1KinesisVideoStreamPoolConfiguration
 */
const de_KinesisVideoStreamPoolConfiguration = (
  output: any,
  context: __SerdeContext
): KinesisVideoStreamPoolConfiguration => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    PoolArn: __expectString,
    PoolId: __expectString,
    PoolName: __expectString,
    PoolSize: __expectInt32,
    PoolStatus: __expectString,
    StreamConfiguration: _json,
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_KinesisVideoStreamPoolSummary omitted.

// de_KinesisVideoStreamPoolSummaryList omitted.

/**
 * deserializeAws_restJson1KinesisVideoStreamRecordingSourceRuntimeConfiguration
 */
const de_KinesisVideoStreamRecordingSourceRuntimeConfiguration = (
  output: any,
  context: __SerdeContext
): KinesisVideoStreamRecordingSourceRuntimeConfiguration => {
  return take(output, {
    FragmentSelector: (_: any) => de_FragmentSelector(_, context),
    Streams: _json,
  }) as any;
};

// de_KinesisVideoStreamSourceRuntimeConfiguration omitted.

// de_LambdaFunctionSinkConfiguration omitted.

// de_LiveConnectorRTMPConfiguration omitted.

// de_LiveConnectorSinkConfiguration omitted.

// de_LiveConnectorSinkList omitted.

// de_LiveConnectorSourceConfiguration omitted.

// de_LiveConnectorSourceList omitted.

/**
 * deserializeAws_restJson1MediaCapturePipeline
 */
const de_MediaCapturePipeline = (output: any, context: __SerdeContext): MediaCapturePipeline => {
  return take(output, {
    ChimeSdkMeetingConfiguration: _json,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    MediaPipelineArn: __expectString,
    MediaPipelineId: __expectString,
    SinkArn: __expectString,
    SinkIamRoleArn: __expectString,
    SinkType: __expectString,
    SourceArn: __expectString,
    SourceType: __expectString,
    SseAwsKeyManagementParams: _json,
    Status: __expectString,
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_MediaCapturePipelineSourceConfiguration omitted.

// de_MediaCapturePipelineSummary omitted.

// de_MediaCapturePipelineSummaryList omitted.

/**
 * deserializeAws_restJson1MediaConcatenationPipeline
 */
const de_MediaConcatenationPipeline = (output: any, context: __SerdeContext): MediaConcatenationPipeline => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    MediaPipelineArn: __expectString,
    MediaPipelineId: __expectString,
    Sinks: _json,
    Sources: _json,
    Status: __expectString,
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1MediaInsightsPipeline
 */
const de_MediaInsightsPipeline = (output: any, context: __SerdeContext): MediaInsightsPipeline => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    ElementStatuses: _json,
    KinesisVideoStreamRecordingSourceRuntimeConfiguration: (_: any) =>
      de_KinesisVideoStreamRecordingSourceRuntimeConfiguration(_, context),
    KinesisVideoStreamSourceRuntimeConfiguration: _json,
    MediaInsightsPipelineConfigurationArn: __expectString,
    MediaInsightsRuntimeMetadata: _json,
    MediaPipelineArn: __expectString,
    MediaPipelineId: __expectString,
    S3RecordingSinkRuntimeConfiguration: _json,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1MediaInsightsPipelineConfiguration
 */
const de_MediaInsightsPipelineConfiguration = (
  output: any,
  context: __SerdeContext
): MediaInsightsPipelineConfiguration => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Elements: _json,
    MediaInsightsPipelineConfigurationArn: __expectString,
    MediaInsightsPipelineConfigurationId: __expectString,
    MediaInsightsPipelineConfigurationName: __expectString,
    RealTimeAlertConfiguration: _json,
    ResourceAccessRoleArn: __expectString,
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_MediaInsightsPipelineConfigurationElement omitted.

// de_MediaInsightsPipelineConfigurationElements omitted.

// de_MediaInsightsPipelineConfigurationSummary omitted.

// de_MediaInsightsPipelineConfigurationSummaryList omitted.

// de_MediaInsightsPipelineElementStatus omitted.

// de_MediaInsightsPipelineElementStatuses omitted.

// de_MediaInsightsRuntimeMetadata omitted.

/**
 * deserializeAws_restJson1MediaLiveConnectorPipeline
 */
const de_MediaLiveConnectorPipeline = (output: any, context: __SerdeContext): MediaLiveConnectorPipeline => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    MediaPipelineArn: __expectString,
    MediaPipelineId: __expectString,
    Sinks: _json,
    Sources: _json,
    Status: __expectString,
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1MediaPipeline
 */
const de_MediaPipeline = (output: any, context: __SerdeContext): MediaPipeline => {
  return take(output, {
    MediaCapturePipeline: (_: any) => de_MediaCapturePipeline(_, context),
    MediaConcatenationPipeline: (_: any) => de_MediaConcatenationPipeline(_, context),
    MediaInsightsPipeline: (_: any) => de_MediaInsightsPipeline(_, context),
    MediaLiveConnectorPipeline: (_: any) => de_MediaLiveConnectorPipeline(_, context),
    MediaStreamPipeline: (_: any) => de_MediaStreamPipeline(_, context),
  }) as any;
};

// de_MediaPipelineList omitted.

// de_MediaPipelineSummary omitted.

/**
 * deserializeAws_restJson1MediaStreamPipeline
 */
const de_MediaStreamPipeline = (output: any, context: __SerdeContext): MediaStreamPipeline => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    MediaPipelineArn: __expectString,
    MediaPipelineId: __expectString,
    Sinks: _json,
    Sources: _json,
    Status: __expectString,
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_MediaStreamSink omitted.

// de_MediaStreamSinkList omitted.

// de_MediaStreamSource omitted.

// de_MediaStreamSourceList omitted.

// de_MeetingEventsConcatenationConfiguration omitted.

// de_PostCallAnalyticsSettings omitted.

// de_PresenterOnlyConfiguration omitted.

// de_RealTimeAlertConfiguration omitted.

// de_RealTimeAlertRule omitted.

// de_RealTimeAlertRuleList omitted.

// de_RecordingStreamConfiguration omitted.

// de_RecordingStreamList omitted.

// de_S3BucketSinkConfiguration omitted.

// de_S3RecordingSinkConfiguration omitted.

// de_S3RecordingSinkRuntimeConfiguration omitted.

// de_SelectedVideoStreams omitted.

// de_SentimentConfiguration omitted.

// de_SnsTopicSinkConfiguration omitted.

// de_SourceConfiguration omitted.

/**
 * deserializeAws_restJson1SpeakerSearchTask
 */
const de_SpeakerSearchTask = (output: any, context: __SerdeContext): SpeakerSearchTask => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    SpeakerSearchTaskId: __expectString,
    SpeakerSearchTaskStatus: __expectString,
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_SqsQueueSinkConfiguration omitted.

// de_SseAwsKeyManagementParams omitted.

// de_StreamChannelDefinition omitted.

// de_StreamConfiguration omitted.

// de_Streams omitted.

// de_Tag omitted.

// de_TagList omitted.

/**
 * deserializeAws_restJson1TimestampRange
 */
const de_TimestampRange = (output: any, context: __SerdeContext): TimestampRange => {
  return take(output, {
    EndTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StartTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_TranscriptionMessagesConcatenationConfiguration omitted.

// de_VerticalLayoutConfiguration omitted.

// de_VideoArtifactsConfiguration omitted.

// de_VideoAttribute omitted.

// de_VideoConcatenationConfiguration omitted.

// de_VoiceAnalyticsProcessorConfiguration omitted.

// de_VoiceEnhancementSinkConfiguration omitted.

/**
 * deserializeAws_restJson1VoiceToneAnalysisTask
 */
const de_VoiceToneAnalysisTask = (output: any, context: __SerdeContext): VoiceToneAnalysisTask => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    VoiceToneAnalysisTaskId: __expectString,
    VoiceToneAnalysisTaskStatus: __expectString,
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

const _MR = "MaxResults";
const _NT = "NextToken";
const _RARN = "ResourceARN";
const _a = "arn";
const _mr = "max-results";
const _nt = "next-token";
const _o = "operation";
