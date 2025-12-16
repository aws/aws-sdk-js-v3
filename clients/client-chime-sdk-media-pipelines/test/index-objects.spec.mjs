import {
  ActiveSpeakerOnlyConfiguration$,
  ActiveSpeakerPosition,
  AmazonTranscribeCallAnalyticsProcessorConfiguration$,
  AmazonTranscribeProcessorConfiguration$,
  ArtifactsConcatenationConfiguration$,
  ArtifactsConcatenationState,
  ArtifactsConfiguration$,
  ArtifactsState,
  AudioArtifactsConcatenationState,
  AudioArtifactsConfiguration$,
  AudioChannelsOption,
  AudioConcatenationConfiguration$,
  AudioMuxType,
  BadRequestException,
  BadRequestException$,
  BorderColor,
  CallAnalyticsLanguageCode,
  CanvasOrientation,
  ChannelDefinition$,
  ChimeSDKMediaPipelines,
  ChimeSDKMediaPipelinesClient,
  ChimeSDKMediaPipelinesServiceException,
  ChimeSdkMeetingConcatenationConfiguration$,
  ChimeSdkMeetingConfiguration$,
  ChimeSdkMeetingLiveConnectorConfiguration$,
  CompositedVideoArtifactsConfiguration$,
  CompositedVideoConcatenationConfiguration$,
  ConcatenationSink$,
  ConcatenationSinkType,
  ConcatenationSource$,
  ConcatenationSourceType,
  ConflictException,
  ConflictException$,
  ContentArtifactsConfiguration$,
  ContentConcatenationConfiguration$,
  ContentMuxType,
  ContentRedactionOutput,
  ContentShareLayoutOption,
  ContentType,
  CreateMediaCapturePipeline$,
  CreateMediaCapturePipelineCommand,
  CreateMediaCapturePipelineRequest$,
  CreateMediaCapturePipelineResponse$,
  CreateMediaConcatenationPipeline$,
  CreateMediaConcatenationPipelineCommand,
  CreateMediaConcatenationPipelineRequest$,
  CreateMediaConcatenationPipelineResponse$,
  CreateMediaInsightsPipeline$,
  CreateMediaInsightsPipelineCommand,
  CreateMediaInsightsPipelineConfiguration$,
  CreateMediaInsightsPipelineConfigurationCommand,
  CreateMediaInsightsPipelineConfigurationRequest$,
  CreateMediaInsightsPipelineConfigurationResponse$,
  CreateMediaInsightsPipelineRequest$,
  CreateMediaInsightsPipelineResponse$,
  CreateMediaLiveConnectorPipeline$,
  CreateMediaLiveConnectorPipelineCommand,
  CreateMediaLiveConnectorPipelineRequest$,
  CreateMediaLiveConnectorPipelineResponse$,
  CreateMediaPipelineKinesisVideoStreamPool$,
  CreateMediaPipelineKinesisVideoStreamPoolCommand,
  CreateMediaPipelineKinesisVideoStreamPoolRequest$,
  CreateMediaPipelineKinesisVideoStreamPoolResponse$,
  CreateMediaStreamPipeline$,
  CreateMediaStreamPipelineCommand,
  CreateMediaStreamPipelineRequest$,
  CreateMediaStreamPipelineResponse$,
  DataChannelConcatenationConfiguration$,
  DeleteMediaCapturePipeline$,
  DeleteMediaCapturePipelineCommand,
  DeleteMediaCapturePipelineRequest$,
  DeleteMediaInsightsPipelineConfiguration$,
  DeleteMediaInsightsPipelineConfigurationCommand,
  DeleteMediaInsightsPipelineConfigurationRequest$,
  DeleteMediaPipeline$,
  DeleteMediaPipelineCommand,
  DeleteMediaPipelineKinesisVideoStreamPool$,
  DeleteMediaPipelineKinesisVideoStreamPoolCommand,
  DeleteMediaPipelineKinesisVideoStreamPoolRequest$,
  DeleteMediaPipelineRequest$,
  ErrorCode,
  ForbiddenException,
  ForbiddenException$,
  FragmentSelector$,
  FragmentSelectorType,
  GetMediaCapturePipeline$,
  GetMediaCapturePipelineCommand,
  GetMediaCapturePipelineRequest$,
  GetMediaCapturePipelineResponse$,
  GetMediaInsightsPipelineConfiguration$,
  GetMediaInsightsPipelineConfigurationCommand,
  GetMediaInsightsPipelineConfigurationRequest$,
  GetMediaInsightsPipelineConfigurationResponse$,
  GetMediaPipeline$,
  GetMediaPipelineCommand,
  GetMediaPipelineKinesisVideoStreamPool$,
  GetMediaPipelineKinesisVideoStreamPoolCommand,
  GetMediaPipelineKinesisVideoStreamPoolRequest$,
  GetMediaPipelineKinesisVideoStreamPoolResponse$,
  GetMediaPipelineRequest$,
  GetMediaPipelineResponse$,
  GetSpeakerSearchTask$,
  GetSpeakerSearchTaskCommand,
  GetSpeakerSearchTaskRequest$,
  GetSpeakerSearchTaskResponse$,
  GetVoiceToneAnalysisTask$,
  GetVoiceToneAnalysisTaskCommand,
  GetVoiceToneAnalysisTaskRequest$,
  GetVoiceToneAnalysisTaskResponse$,
  GridViewConfiguration$,
  HighlightColor,
  HorizontalLayoutConfiguration$,
  HorizontalTilePosition,
  IssueDetectionConfiguration$,
  KeywordMatchConfiguration$,
  KinesisDataStreamSinkConfiguration$,
  KinesisVideoStreamConfiguration$,
  KinesisVideoStreamConfigurationUpdate$,
  KinesisVideoStreamPoolConfiguration$,
  KinesisVideoStreamPoolStatus,
  KinesisVideoStreamPoolSummary$,
  KinesisVideoStreamRecordingSourceRuntimeConfiguration$,
  KinesisVideoStreamSourceRuntimeConfiguration$,
  KinesisVideoStreamSourceTaskConfiguration$,
  LambdaFunctionSinkConfiguration$,
  LayoutOption,
  ListMediaCapturePipelines$,
  ListMediaCapturePipelinesCommand,
  ListMediaCapturePipelinesRequest$,
  ListMediaCapturePipelinesResponse$,
  ListMediaInsightsPipelineConfigurations$,
  ListMediaInsightsPipelineConfigurationsCommand,
  ListMediaInsightsPipelineConfigurationsRequest$,
  ListMediaInsightsPipelineConfigurationsResponse$,
  ListMediaPipelineKinesisVideoStreamPools$,
  ListMediaPipelineKinesisVideoStreamPoolsCommand,
  ListMediaPipelineKinesisVideoStreamPoolsRequest$,
  ListMediaPipelineKinesisVideoStreamPoolsResponse$,
  ListMediaPipelines$,
  ListMediaPipelinesCommand,
  ListMediaPipelinesRequest$,
  ListMediaPipelinesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  LiveConnectorMuxType,
  LiveConnectorRTMPConfiguration$,
  LiveConnectorSinkConfiguration$,
  LiveConnectorSinkType,
  LiveConnectorSourceConfiguration$,
  LiveConnectorSourceType,
  MediaCapturePipeline$,
  MediaCapturePipelineSourceConfiguration$,
  MediaCapturePipelineSummary$,
  MediaConcatenationPipeline$,
  MediaEncoding,
  MediaInsightsPipeline$,
  MediaInsightsPipelineConfiguration$,
  MediaInsightsPipelineConfigurationElement$,
  MediaInsightsPipelineConfigurationElementType,
  MediaInsightsPipelineConfigurationSummary$,
  MediaInsightsPipelineElementStatus$,
  MediaLiveConnectorPipeline$,
  MediaPipeline$,
  MediaPipelineElementStatus,
  MediaPipelineSinkType,
  MediaPipelineSourceType,
  MediaPipelineStatus,
  MediaPipelineStatusUpdate,
  MediaPipelineSummary$,
  MediaPipelineTaskStatus,
  MediaStreamPipeline$,
  MediaStreamPipelineSinkType,
  MediaStreamSink$,
  MediaStreamSource$,
  MediaStreamType,
  MeetingEventsConcatenationConfiguration$,
  NotFoundException,
  NotFoundException$,
  PartialResultsStability,
  ParticipantRole,
  PostCallAnalyticsSettings$,
  PresenterOnlyConfiguration$,
  PresenterPosition,
  RealTimeAlertConfiguration$,
  RealTimeAlertRule$,
  RealTimeAlertRuleType,
  RecordingFileFormat,
  RecordingStreamConfiguration$,
  ResolutionOption,
  ResourceLimitExceededException,
  ResourceLimitExceededException$,
  S3BucketSinkConfiguration$,
  S3RecordingSinkConfiguration$,
  S3RecordingSinkRuntimeConfiguration$,
  SelectedVideoStreams$,
  SentimentConfiguration$,
  SentimentType,
  ServiceFailureException,
  ServiceFailureException$,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  SnsTopicSinkConfiguration$,
  SourceConfiguration$,
  SpeakerSearchTask$,
  SqsQueueSinkConfiguration$,
  SseAwsKeyManagementParams$,
  StartSpeakerSearchTask$,
  StartSpeakerSearchTaskCommand,
  StartSpeakerSearchTaskRequest$,
  StartSpeakerSearchTaskResponse$,
  StartVoiceToneAnalysisTask$,
  StartVoiceToneAnalysisTaskCommand,
  StartVoiceToneAnalysisTaskRequest$,
  StartVoiceToneAnalysisTaskResponse$,
  StopSpeakerSearchTask$,
  StopSpeakerSearchTaskCommand,
  StopSpeakerSearchTaskRequest$,
  StopVoiceToneAnalysisTask$,
  StopVoiceToneAnalysisTaskCommand,
  StopVoiceToneAnalysisTaskRequest$,
  StreamChannelDefinition$,
  StreamConfiguration$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottledClientException,
  ThrottledClientException$,
  TileOrder,
  TimestampRange$,
  TranscriptionMessagesConcatenationConfiguration$,
  UnauthorizedClientException,
  UnauthorizedClientException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateMediaInsightsPipelineConfiguration$,
  UpdateMediaInsightsPipelineConfigurationCommand,
  UpdateMediaInsightsPipelineConfigurationRequest$,
  UpdateMediaInsightsPipelineConfigurationResponse$,
  UpdateMediaInsightsPipelineStatus$,
  UpdateMediaInsightsPipelineStatusCommand,
  UpdateMediaInsightsPipelineStatusRequest$,
  UpdateMediaPipelineKinesisVideoStreamPool$,
  UpdateMediaPipelineKinesisVideoStreamPoolCommand,
  UpdateMediaPipelineKinesisVideoStreamPoolRequest$,
  UpdateMediaPipelineKinesisVideoStreamPoolResponse$,
  VerticalLayoutConfiguration$,
  VerticalTilePosition,
  VideoArtifactsConfiguration$,
  VideoAttribute$,
  VideoConcatenationConfiguration$,
  VideoMuxType,
  VocabularyFilterMethod,
  VoiceAnalyticsConfigurationStatus,
  VoiceAnalyticsLanguageCode,
  VoiceAnalyticsProcessorConfiguration$,
  VoiceEnhancementSinkConfiguration$,
  VoiceToneAnalysisTask$,
  paginateListMediaCapturePipelines,
  paginateListMediaInsightsPipelineConfigurations,
  paginateListMediaPipelineKinesisVideoStreamPools,
  paginateListMediaPipelines,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ChimeSDKMediaPipelinesClient === "function");
assert(typeof ChimeSDKMediaPipelines === "function");
// commands
assert(typeof CreateMediaCapturePipelineCommand === "function");
assert(typeof CreateMediaCapturePipeline$ === "object");
assert(typeof CreateMediaConcatenationPipelineCommand === "function");
assert(typeof CreateMediaConcatenationPipeline$ === "object");
assert(typeof CreateMediaInsightsPipelineCommand === "function");
assert(typeof CreateMediaInsightsPipeline$ === "object");
assert(typeof CreateMediaInsightsPipelineConfigurationCommand === "function");
assert(typeof CreateMediaInsightsPipelineConfiguration$ === "object");
assert(typeof CreateMediaLiveConnectorPipelineCommand === "function");
assert(typeof CreateMediaLiveConnectorPipeline$ === "object");
assert(typeof CreateMediaPipelineKinesisVideoStreamPoolCommand === "function");
assert(typeof CreateMediaPipelineKinesisVideoStreamPool$ === "object");
assert(typeof CreateMediaStreamPipelineCommand === "function");
assert(typeof CreateMediaStreamPipeline$ === "object");
assert(typeof DeleteMediaCapturePipelineCommand === "function");
assert(typeof DeleteMediaCapturePipeline$ === "object");
assert(typeof DeleteMediaInsightsPipelineConfigurationCommand === "function");
assert(typeof DeleteMediaInsightsPipelineConfiguration$ === "object");
assert(typeof DeleteMediaPipelineCommand === "function");
assert(typeof DeleteMediaPipeline$ === "object");
assert(typeof DeleteMediaPipelineKinesisVideoStreamPoolCommand === "function");
assert(typeof DeleteMediaPipelineKinesisVideoStreamPool$ === "object");
assert(typeof GetMediaCapturePipelineCommand === "function");
assert(typeof GetMediaCapturePipeline$ === "object");
assert(typeof GetMediaInsightsPipelineConfigurationCommand === "function");
assert(typeof GetMediaInsightsPipelineConfiguration$ === "object");
assert(typeof GetMediaPipelineCommand === "function");
assert(typeof GetMediaPipeline$ === "object");
assert(typeof GetMediaPipelineKinesisVideoStreamPoolCommand === "function");
assert(typeof GetMediaPipelineKinesisVideoStreamPool$ === "object");
assert(typeof GetSpeakerSearchTaskCommand === "function");
assert(typeof GetSpeakerSearchTask$ === "object");
assert(typeof GetVoiceToneAnalysisTaskCommand === "function");
assert(typeof GetVoiceToneAnalysisTask$ === "object");
assert(typeof ListMediaCapturePipelinesCommand === "function");
assert(typeof ListMediaCapturePipelines$ === "object");
assert(typeof ListMediaInsightsPipelineConfigurationsCommand === "function");
assert(typeof ListMediaInsightsPipelineConfigurations$ === "object");
assert(typeof ListMediaPipelineKinesisVideoStreamPoolsCommand === "function");
assert(typeof ListMediaPipelineKinesisVideoStreamPools$ === "object");
assert(typeof ListMediaPipelinesCommand === "function");
assert(typeof ListMediaPipelines$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof StartSpeakerSearchTaskCommand === "function");
assert(typeof StartSpeakerSearchTask$ === "object");
assert(typeof StartVoiceToneAnalysisTaskCommand === "function");
assert(typeof StartVoiceToneAnalysisTask$ === "object");
assert(typeof StopSpeakerSearchTaskCommand === "function");
assert(typeof StopSpeakerSearchTask$ === "object");
assert(typeof StopVoiceToneAnalysisTaskCommand === "function");
assert(typeof StopVoiceToneAnalysisTask$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateMediaInsightsPipelineConfigurationCommand === "function");
assert(typeof UpdateMediaInsightsPipelineConfiguration$ === "object");
assert(typeof UpdateMediaInsightsPipelineStatusCommand === "function");
assert(typeof UpdateMediaInsightsPipelineStatus$ === "object");
assert(typeof UpdateMediaPipelineKinesisVideoStreamPoolCommand === "function");
assert(typeof UpdateMediaPipelineKinesisVideoStreamPool$ === "object");
// structural schemas
assert(typeof ActiveSpeakerOnlyConfiguration$ === "object");
assert(typeof AmazonTranscribeCallAnalyticsProcessorConfiguration$ === "object");
assert(typeof AmazonTranscribeProcessorConfiguration$ === "object");
assert(typeof ArtifactsConcatenationConfiguration$ === "object");
assert(typeof ArtifactsConfiguration$ === "object");
assert(typeof AudioArtifactsConfiguration$ === "object");
assert(typeof AudioConcatenationConfiguration$ === "object");
assert(typeof ChannelDefinition$ === "object");
assert(typeof ChimeSdkMeetingConcatenationConfiguration$ === "object");
assert(typeof ChimeSdkMeetingConfiguration$ === "object");
assert(typeof ChimeSdkMeetingLiveConnectorConfiguration$ === "object");
assert(typeof CompositedVideoArtifactsConfiguration$ === "object");
assert(typeof CompositedVideoConcatenationConfiguration$ === "object");
assert(typeof ConcatenationSink$ === "object");
assert(typeof ConcatenationSource$ === "object");
assert(typeof ContentArtifactsConfiguration$ === "object");
assert(typeof ContentConcatenationConfiguration$ === "object");
assert(typeof CreateMediaCapturePipelineRequest$ === "object");
assert(typeof CreateMediaCapturePipelineResponse$ === "object");
assert(typeof CreateMediaConcatenationPipelineRequest$ === "object");
assert(typeof CreateMediaConcatenationPipelineResponse$ === "object");
assert(typeof CreateMediaInsightsPipelineConfigurationRequest$ === "object");
assert(typeof CreateMediaInsightsPipelineConfigurationResponse$ === "object");
assert(typeof CreateMediaInsightsPipelineRequest$ === "object");
assert(typeof CreateMediaInsightsPipelineResponse$ === "object");
assert(typeof CreateMediaLiveConnectorPipelineRequest$ === "object");
assert(typeof CreateMediaLiveConnectorPipelineResponse$ === "object");
assert(typeof CreateMediaPipelineKinesisVideoStreamPoolRequest$ === "object");
assert(typeof CreateMediaPipelineKinesisVideoStreamPoolResponse$ === "object");
assert(typeof CreateMediaStreamPipelineRequest$ === "object");
assert(typeof CreateMediaStreamPipelineResponse$ === "object");
assert(typeof DataChannelConcatenationConfiguration$ === "object");
assert(typeof DeleteMediaCapturePipelineRequest$ === "object");
assert(typeof DeleteMediaInsightsPipelineConfigurationRequest$ === "object");
assert(typeof DeleteMediaPipelineKinesisVideoStreamPoolRequest$ === "object");
assert(typeof DeleteMediaPipelineRequest$ === "object");
assert(typeof FragmentSelector$ === "object");
assert(typeof GetMediaCapturePipelineRequest$ === "object");
assert(typeof GetMediaCapturePipelineResponse$ === "object");
assert(typeof GetMediaInsightsPipelineConfigurationRequest$ === "object");
assert(typeof GetMediaInsightsPipelineConfigurationResponse$ === "object");
assert(typeof GetMediaPipelineKinesisVideoStreamPoolRequest$ === "object");
assert(typeof GetMediaPipelineKinesisVideoStreamPoolResponse$ === "object");
assert(typeof GetMediaPipelineRequest$ === "object");
assert(typeof GetMediaPipelineResponse$ === "object");
assert(typeof GetSpeakerSearchTaskRequest$ === "object");
assert(typeof GetSpeakerSearchTaskResponse$ === "object");
assert(typeof GetVoiceToneAnalysisTaskRequest$ === "object");
assert(typeof GetVoiceToneAnalysisTaskResponse$ === "object");
assert(typeof GridViewConfiguration$ === "object");
assert(typeof HorizontalLayoutConfiguration$ === "object");
assert(typeof IssueDetectionConfiguration$ === "object");
assert(typeof KeywordMatchConfiguration$ === "object");
assert(typeof KinesisDataStreamSinkConfiguration$ === "object");
assert(typeof KinesisVideoStreamConfiguration$ === "object");
assert(typeof KinesisVideoStreamConfigurationUpdate$ === "object");
assert(typeof KinesisVideoStreamPoolConfiguration$ === "object");
assert(typeof KinesisVideoStreamPoolSummary$ === "object");
assert(typeof KinesisVideoStreamRecordingSourceRuntimeConfiguration$ === "object");
assert(typeof KinesisVideoStreamSourceRuntimeConfiguration$ === "object");
assert(typeof KinesisVideoStreamSourceTaskConfiguration$ === "object");
assert(typeof LambdaFunctionSinkConfiguration$ === "object");
assert(typeof ListMediaCapturePipelinesRequest$ === "object");
assert(typeof ListMediaCapturePipelinesResponse$ === "object");
assert(typeof ListMediaInsightsPipelineConfigurationsRequest$ === "object");
assert(typeof ListMediaInsightsPipelineConfigurationsResponse$ === "object");
assert(typeof ListMediaPipelineKinesisVideoStreamPoolsRequest$ === "object");
assert(typeof ListMediaPipelineKinesisVideoStreamPoolsResponse$ === "object");
assert(typeof ListMediaPipelinesRequest$ === "object");
assert(typeof ListMediaPipelinesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof LiveConnectorRTMPConfiguration$ === "object");
assert(typeof LiveConnectorSinkConfiguration$ === "object");
assert(typeof LiveConnectorSourceConfiguration$ === "object");
assert(typeof MediaCapturePipeline$ === "object");
assert(typeof MediaCapturePipelineSourceConfiguration$ === "object");
assert(typeof MediaCapturePipelineSummary$ === "object");
assert(typeof MediaConcatenationPipeline$ === "object");
assert(typeof MediaInsightsPipeline$ === "object");
assert(typeof MediaInsightsPipelineConfiguration$ === "object");
assert(typeof MediaInsightsPipelineConfigurationElement$ === "object");
assert(typeof MediaInsightsPipelineConfigurationSummary$ === "object");
assert(typeof MediaInsightsPipelineElementStatus$ === "object");
assert(typeof MediaLiveConnectorPipeline$ === "object");
assert(typeof MediaPipeline$ === "object");
assert(typeof MediaPipelineSummary$ === "object");
assert(typeof MediaStreamPipeline$ === "object");
assert(typeof MediaStreamSink$ === "object");
assert(typeof MediaStreamSource$ === "object");
assert(typeof MeetingEventsConcatenationConfiguration$ === "object");
assert(typeof PostCallAnalyticsSettings$ === "object");
assert(typeof PresenterOnlyConfiguration$ === "object");
assert(typeof RealTimeAlertConfiguration$ === "object");
assert(typeof RealTimeAlertRule$ === "object");
assert(typeof RecordingStreamConfiguration$ === "object");
assert(typeof S3BucketSinkConfiguration$ === "object");
assert(typeof S3RecordingSinkConfiguration$ === "object");
assert(typeof S3RecordingSinkRuntimeConfiguration$ === "object");
assert(typeof SelectedVideoStreams$ === "object");
assert(typeof SentimentConfiguration$ === "object");
assert(typeof SnsTopicSinkConfiguration$ === "object");
assert(typeof SourceConfiguration$ === "object");
assert(typeof SpeakerSearchTask$ === "object");
assert(typeof SqsQueueSinkConfiguration$ === "object");
assert(typeof SseAwsKeyManagementParams$ === "object");
assert(typeof StartSpeakerSearchTaskRequest$ === "object");
assert(typeof StartSpeakerSearchTaskResponse$ === "object");
assert(typeof StartVoiceToneAnalysisTaskRequest$ === "object");
assert(typeof StartVoiceToneAnalysisTaskResponse$ === "object");
assert(typeof StopSpeakerSearchTaskRequest$ === "object");
assert(typeof StopVoiceToneAnalysisTaskRequest$ === "object");
assert(typeof StreamChannelDefinition$ === "object");
assert(typeof StreamConfiguration$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TimestampRange$ === "object");
assert(typeof TranscriptionMessagesConcatenationConfiguration$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateMediaInsightsPipelineConfigurationRequest$ === "object");
assert(typeof UpdateMediaInsightsPipelineConfigurationResponse$ === "object");
assert(typeof UpdateMediaInsightsPipelineStatusRequest$ === "object");
assert(typeof UpdateMediaPipelineKinesisVideoStreamPoolRequest$ === "object");
assert(typeof UpdateMediaPipelineKinesisVideoStreamPoolResponse$ === "object");
assert(typeof VerticalLayoutConfiguration$ === "object");
assert(typeof VideoArtifactsConfiguration$ === "object");
assert(typeof VideoAttribute$ === "object");
assert(typeof VideoConcatenationConfiguration$ === "object");
assert(typeof VoiceAnalyticsProcessorConfiguration$ === "object");
assert(typeof VoiceEnhancementSinkConfiguration$ === "object");
assert(typeof VoiceToneAnalysisTask$ === "object");
// enums
assert(typeof ActiveSpeakerPosition === "object");
assert(typeof ArtifactsConcatenationState === "object");
assert(typeof ArtifactsState === "object");
assert(typeof AudioArtifactsConcatenationState === "object");
assert(typeof AudioChannelsOption === "object");
assert(typeof AudioMuxType === "object");
assert(typeof BorderColor === "object");
assert(typeof CallAnalyticsLanguageCode === "object");
assert(typeof CanvasOrientation === "object");
assert(typeof ConcatenationSinkType === "object");
assert(typeof ConcatenationSourceType === "object");
assert(typeof ContentMuxType === "object");
assert(typeof ContentRedactionOutput === "object");
assert(typeof ContentShareLayoutOption === "object");
assert(typeof ContentType === "object");
assert(typeof ErrorCode === "object");
assert(typeof FragmentSelectorType === "object");
assert(typeof HighlightColor === "object");
assert(typeof HorizontalTilePosition === "object");
assert(typeof KinesisVideoStreamPoolStatus === "object");
assert(typeof LayoutOption === "object");
assert(typeof LiveConnectorMuxType === "object");
assert(typeof LiveConnectorSinkType === "object");
assert(typeof LiveConnectorSourceType === "object");
assert(typeof MediaEncoding === "object");
assert(typeof MediaInsightsPipelineConfigurationElementType === "object");
assert(typeof MediaPipelineElementStatus === "object");
assert(typeof MediaPipelineSinkType === "object");
assert(typeof MediaPipelineSourceType === "object");
assert(typeof MediaPipelineStatus === "object");
assert(typeof MediaPipelineStatusUpdate === "object");
assert(typeof MediaPipelineTaskStatus === "object");
assert(typeof MediaStreamPipelineSinkType === "object");
assert(typeof MediaStreamType === "object");
assert(typeof PartialResultsStability === "object");
assert(typeof ParticipantRole === "object");
assert(typeof PresenterPosition === "object");
assert(typeof RealTimeAlertRuleType === "object");
assert(typeof RecordingFileFormat === "object");
assert(typeof ResolutionOption === "object");
assert(typeof SentimentType === "object");
assert(typeof TileOrder === "object");
assert(typeof VerticalTilePosition === "object");
assert(typeof VideoMuxType === "object");
assert(typeof VocabularyFilterMethod === "object");
assert(typeof VoiceAnalyticsConfigurationStatus === "object");
assert(typeof VoiceAnalyticsLanguageCode === "object");
// errors
assert(BadRequestException.prototype instanceof ChimeSDKMediaPipelinesServiceException);
assert(typeof BadRequestException$ === "object");
assert(ConflictException.prototype instanceof ChimeSDKMediaPipelinesServiceException);
assert(typeof ConflictException$ === "object");
assert(ForbiddenException.prototype instanceof ChimeSDKMediaPipelinesServiceException);
assert(typeof ForbiddenException$ === "object");
assert(NotFoundException.prototype instanceof ChimeSDKMediaPipelinesServiceException);
assert(typeof NotFoundException$ === "object");
assert(ResourceLimitExceededException.prototype instanceof ChimeSDKMediaPipelinesServiceException);
assert(typeof ResourceLimitExceededException$ === "object");
assert(ServiceFailureException.prototype instanceof ChimeSDKMediaPipelinesServiceException);
assert(typeof ServiceFailureException$ === "object");
assert(ServiceUnavailableException.prototype instanceof ChimeSDKMediaPipelinesServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(ThrottledClientException.prototype instanceof ChimeSDKMediaPipelinesServiceException);
assert(typeof ThrottledClientException$ === "object");
assert(UnauthorizedClientException.prototype instanceof ChimeSDKMediaPipelinesServiceException);
assert(typeof UnauthorizedClientException$ === "object");
assert(ChimeSDKMediaPipelinesServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListMediaCapturePipelines === "function");
assert(typeof paginateListMediaInsightsPipelineConfigurations === "function");
assert(typeof paginateListMediaPipelineKinesisVideoStreamPools === "function");
assert(typeof paginateListMediaPipelines === "function");
console.log(`ChimeSDKMediaPipelines index test passed.`);
