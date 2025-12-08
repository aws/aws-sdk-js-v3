import {
  ActiveSpeakerPosition,
  ArtifactsConcatenationState,
  ArtifactsState,
  AudioArtifactsConcatenationState,
  AudioChannelsOption,
  AudioMuxType,
  BadRequestException,
  BorderColor,
  CallAnalyticsLanguageCode,
  CanvasOrientation,
  ChimeSDKMediaPipelines,
  ChimeSDKMediaPipelinesClient,
  ChimeSDKMediaPipelinesServiceException,
  ConcatenationSinkType,
  ConcatenationSourceType,
  ConflictException,
  ContentMuxType,
  ContentRedactionOutput,
  ContentShareLayoutOption,
  ContentType,
  CreateMediaCapturePipelineCommand,
  CreateMediaConcatenationPipelineCommand,
  CreateMediaInsightsPipelineCommand,
  CreateMediaInsightsPipelineConfigurationCommand,
  CreateMediaLiveConnectorPipelineCommand,
  CreateMediaPipelineKinesisVideoStreamPoolCommand,
  CreateMediaStreamPipelineCommand,
  DeleteMediaCapturePipelineCommand,
  DeleteMediaInsightsPipelineConfigurationCommand,
  DeleteMediaPipelineCommand,
  DeleteMediaPipelineKinesisVideoStreamPoolCommand,
  ErrorCode,
  ForbiddenException,
  FragmentSelectorType,
  GetMediaCapturePipelineCommand,
  GetMediaInsightsPipelineConfigurationCommand,
  GetMediaPipelineCommand,
  GetMediaPipelineKinesisVideoStreamPoolCommand,
  GetSpeakerSearchTaskCommand,
  GetVoiceToneAnalysisTaskCommand,
  HighlightColor,
  HorizontalTilePosition,
  KinesisVideoStreamPoolStatus,
  LayoutOption,
  ListMediaCapturePipelinesCommand,
  ListMediaInsightsPipelineConfigurationsCommand,
  ListMediaPipelineKinesisVideoStreamPoolsCommand,
  ListMediaPipelinesCommand,
  ListTagsForResourceCommand,
  LiveConnectorMuxType,
  LiveConnectorSinkType,
  LiveConnectorSourceType,
  MediaEncoding,
  MediaInsightsPipelineConfigurationElementType,
  MediaPipelineElementStatus,
  MediaPipelineSinkType,
  MediaPipelineSourceType,
  MediaPipelineStatus,
  MediaPipelineStatusUpdate,
  MediaPipelineTaskStatus,
  MediaStreamPipelineSinkType,
  MediaStreamType,
  NotFoundException,
  PartialResultsStability,
  ParticipantRole,
  PresenterPosition,
  RealTimeAlertRuleType,
  RecordingFileFormat,
  ResolutionOption,
  ResourceLimitExceededException,
  SentimentType,
  ServiceFailureException,
  ServiceUnavailableException,
  StartSpeakerSearchTaskCommand,
  StartVoiceToneAnalysisTaskCommand,
  StopSpeakerSearchTaskCommand,
  StopVoiceToneAnalysisTaskCommand,
  TagResourceCommand,
  ThrottledClientException,
  TileOrder,
  UnauthorizedClientException,
  UntagResourceCommand,
  UpdateMediaInsightsPipelineConfigurationCommand,
  UpdateMediaInsightsPipelineStatusCommand,
  UpdateMediaPipelineKinesisVideoStreamPoolCommand,
  VerticalTilePosition,
  VideoMuxType,
  VocabularyFilterMethod,
  VoiceAnalyticsConfigurationStatus,
  VoiceAnalyticsLanguageCode,
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
assert(typeof CreateMediaConcatenationPipelineCommand === "function");
assert(typeof CreateMediaInsightsPipelineCommand === "function");
assert(typeof CreateMediaInsightsPipelineConfigurationCommand === "function");
assert(typeof CreateMediaLiveConnectorPipelineCommand === "function");
assert(typeof CreateMediaPipelineKinesisVideoStreamPoolCommand === "function");
assert(typeof CreateMediaStreamPipelineCommand === "function");
assert(typeof DeleteMediaCapturePipelineCommand === "function");
assert(typeof DeleteMediaInsightsPipelineConfigurationCommand === "function");
assert(typeof DeleteMediaPipelineCommand === "function");
assert(typeof DeleteMediaPipelineKinesisVideoStreamPoolCommand === "function");
assert(typeof GetMediaCapturePipelineCommand === "function");
assert(typeof GetMediaInsightsPipelineConfigurationCommand === "function");
assert(typeof GetMediaPipelineCommand === "function");
assert(typeof GetMediaPipelineKinesisVideoStreamPoolCommand === "function");
assert(typeof GetSpeakerSearchTaskCommand === "function");
assert(typeof GetVoiceToneAnalysisTaskCommand === "function");
assert(typeof ListMediaCapturePipelinesCommand === "function");
assert(typeof ListMediaInsightsPipelineConfigurationsCommand === "function");
assert(typeof ListMediaPipelineKinesisVideoStreamPoolsCommand === "function");
assert(typeof ListMediaPipelinesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof StartSpeakerSearchTaskCommand === "function");
assert(typeof StartVoiceToneAnalysisTaskCommand === "function");
assert(typeof StopSpeakerSearchTaskCommand === "function");
assert(typeof StopVoiceToneAnalysisTaskCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateMediaInsightsPipelineConfigurationCommand === "function");
assert(typeof UpdateMediaInsightsPipelineStatusCommand === "function");
assert(typeof UpdateMediaPipelineKinesisVideoStreamPoolCommand === "function");
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
assert(ConflictException.prototype instanceof ChimeSDKMediaPipelinesServiceException);
assert(ForbiddenException.prototype instanceof ChimeSDKMediaPipelinesServiceException);
assert(NotFoundException.prototype instanceof ChimeSDKMediaPipelinesServiceException);
assert(ResourceLimitExceededException.prototype instanceof ChimeSDKMediaPipelinesServiceException);
assert(ServiceFailureException.prototype instanceof ChimeSDKMediaPipelinesServiceException);
assert(ServiceUnavailableException.prototype instanceof ChimeSDKMediaPipelinesServiceException);
assert(ThrottledClientException.prototype instanceof ChimeSDKMediaPipelinesServiceException);
assert(UnauthorizedClientException.prototype instanceof ChimeSDKMediaPipelinesServiceException);
assert(ChimeSDKMediaPipelinesServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListMediaCapturePipelines === "function");
assert(typeof paginateListMediaInsightsPipelineConfigurations === "function");
assert(typeof paginateListMediaPipelineKinesisVideoStreamPools === "function");
assert(typeof paginateListMediaPipelines === "function");
console.log(`ChimeSDKMediaPipelines index test passed.`);
