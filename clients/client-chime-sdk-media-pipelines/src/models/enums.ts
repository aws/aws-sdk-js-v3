// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ActiveSpeakerPosition = {
  BottomLeft: "BottomLeft",
  BottomRight: "BottomRight",
  TopLeft: "TopLeft",
  TopRight: "TopRight",
} as const;
/**
 * @public
 */
export type ActiveSpeakerPosition = (typeof ActiveSpeakerPosition)[keyof typeof ActiveSpeakerPosition];

/**
 * @public
 * @enum
 */
export const ContentType = {
  PII: "PII",
} as const;
/**
 * @public
 */
export type ContentType = (typeof ContentType)[keyof typeof ContentType];

/**
 * @public
 * @enum
 */
export const CallAnalyticsLanguageCode = {
  DE_DE: "de-DE",
  EN_AU: "en-AU",
  EN_GB: "en-GB",
  EN_US: "en-US",
  ES_US: "es-US",
  FR_CA: "fr-CA",
  FR_FR: "fr-FR",
  IT_IT: "it-IT",
  PT_BR: "pt-BR",
} as const;
/**
 * @public
 */
export type CallAnalyticsLanguageCode = (typeof CallAnalyticsLanguageCode)[keyof typeof CallAnalyticsLanguageCode];

/**
 * @public
 * @enum
 */
export const PartialResultsStability = {
  HIGH: "high",
  LOW: "low",
  MEDIUM: "medium",
} as const;
/**
 * @public
 */
export type PartialResultsStability = (typeof PartialResultsStability)[keyof typeof PartialResultsStability];

/**
 * @public
 * @enum
 */
export const ContentRedactionOutput = {
  REDACTED: "redacted",
  REDACTED_AND_UNREDACTED: "redacted_and_unredacted",
} as const;
/**
 * @public
 */
export type ContentRedactionOutput = (typeof ContentRedactionOutput)[keyof typeof ContentRedactionOutput];

/**
 * @public
 * @enum
 */
export const VocabularyFilterMethod = {
  MASK: "mask",
  REMOVE: "remove",
  TAG: "tag",
} as const;
/**
 * @public
 */
export type VocabularyFilterMethod = (typeof VocabularyFilterMethod)[keyof typeof VocabularyFilterMethod];

/**
 * @public
 * @enum
 */
export const AudioArtifactsConcatenationState = {
  Enabled: "Enabled",
} as const;
/**
 * @public
 */
export type AudioArtifactsConcatenationState =
  (typeof AudioArtifactsConcatenationState)[keyof typeof AudioArtifactsConcatenationState];

/**
 * @public
 * @enum
 */
export const ArtifactsConcatenationState = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;
/**
 * @public
 */
export type ArtifactsConcatenationState =
  (typeof ArtifactsConcatenationState)[keyof typeof ArtifactsConcatenationState];

/**
 * @public
 * @enum
 */
export const AudioMuxType = {
  AudioOnly: "AudioOnly",
  AudioWithActiveSpeakerVideo: "AudioWithActiveSpeakerVideo",
  AudioWithCompositedVideo: "AudioWithCompositedVideo",
} as const;
/**
 * @public
 */
export type AudioMuxType = (typeof AudioMuxType)[keyof typeof AudioMuxType];

/**
 * @public
 * @enum
 */
export const CanvasOrientation = {
  Landscape: "Landscape",
  Portrait: "Portrait",
} as const;
/**
 * @public
 */
export type CanvasOrientation = (typeof CanvasOrientation)[keyof typeof CanvasOrientation];

/**
 * @public
 * @enum
 */
export const ContentShareLayoutOption = {
  ActiveSpeakerOnly: "ActiveSpeakerOnly",
  Horizontal: "Horizontal",
  PresenterOnly: "PresenterOnly",
  Vertical: "Vertical",
} as const;
/**
 * @public
 */
export type ContentShareLayoutOption = (typeof ContentShareLayoutOption)[keyof typeof ContentShareLayoutOption];

/**
 * @public
 * @enum
 */
export const TileOrder = {
  JoinSequence: "JoinSequence",
  SpeakerSequence: "SpeakerSequence",
} as const;
/**
 * @public
 */
export type TileOrder = (typeof TileOrder)[keyof typeof TileOrder];

/**
 * @public
 * @enum
 */
export const HorizontalTilePosition = {
  Bottom: "Bottom",
  Top: "Top",
} as const;
/**
 * @public
 */
export type HorizontalTilePosition = (typeof HorizontalTilePosition)[keyof typeof HorizontalTilePosition];

/**
 * @public
 * @enum
 */
export const PresenterPosition = {
  BottomLeft: "BottomLeft",
  BottomRight: "BottomRight",
  TopLeft: "TopLeft",
  TopRight: "TopRight",
} as const;
/**
 * @public
 */
export type PresenterPosition = (typeof PresenterPosition)[keyof typeof PresenterPosition];

/**
 * @public
 * @enum
 */
export const VerticalTilePosition = {
  Left: "Left",
  Right: "Right",
} as const;
/**
 * @public
 */
export type VerticalTilePosition = (typeof VerticalTilePosition)[keyof typeof VerticalTilePosition];

/**
 * @public
 * @enum
 */
export const BorderColor = {
  Black: "Black",
  Blue: "Blue",
  Green: "Green",
  Red: "Red",
  White: "White",
  Yellow: "Yellow",
} as const;
/**
 * @public
 */
export type BorderColor = (typeof BorderColor)[keyof typeof BorderColor];

/**
 * @public
 * @enum
 */
export const HighlightColor = {
  Black: "Black",
  Blue: "Blue",
  Green: "Green",
  Red: "Red",
  White: "White",
  Yellow: "Yellow",
} as const;
/**
 * @public
 */
export type HighlightColor = (typeof HighlightColor)[keyof typeof HighlightColor];

/**
 * @public
 * @enum
 */
export const LayoutOption = {
  GridView: "GridView",
} as const;
/**
 * @public
 */
export type LayoutOption = (typeof LayoutOption)[keyof typeof LayoutOption];

/**
 * @public
 * @enum
 */
export const ResolutionOption = {
  FHD: "FHD",
  HD: "HD",
} as const;
/**
 * @public
 */
export type ResolutionOption = (typeof ResolutionOption)[keyof typeof ResolutionOption];

/**
 * @public
 * @enum
 */
export const ContentMuxType = {
  ContentOnly: "ContentOnly",
} as const;
/**
 * @public
 */
export type ContentMuxType = (typeof ContentMuxType)[keyof typeof ContentMuxType];

/**
 * @public
 * @enum
 */
export const ArtifactsState = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;
/**
 * @public
 */
export type ArtifactsState = (typeof ArtifactsState)[keyof typeof ArtifactsState];

/**
 * @public
 * @enum
 */
export const VideoMuxType = {
  VideoOnly: "VideoOnly",
} as const;
/**
 * @public
 */
export type VideoMuxType = (typeof VideoMuxType)[keyof typeof VideoMuxType];

/**
 * @public
 * @enum
 */
export const AudioChannelsOption = {
  Mono: "Mono",
  Stereo: "Stereo",
} as const;
/**
 * @public
 */
export type AudioChannelsOption = (typeof AudioChannelsOption)[keyof typeof AudioChannelsOption];

/**
 * @public
 * @enum
 */
export const ErrorCode = {
  BadRequest: "BadRequest",
  Forbidden: "Forbidden",
  NotFound: "NotFound",
  ResourceLimitExceeded: "ResourceLimitExceeded",
  ServiceFailure: "ServiceFailure",
  ServiceUnavailable: "ServiceUnavailable",
  Throttling: "Throttling",
} as const;
/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

/**
 * @public
 * @enum
 */
export const ParticipantRole = {
  AGENT: "AGENT",
  CUSTOMER: "CUSTOMER",
} as const;
/**
 * @public
 */
export type ParticipantRole = (typeof ParticipantRole)[keyof typeof ParticipantRole];

/**
 * @public
 * @enum
 */
export const MediaPipelineSinkType = {
  S3Bucket: "S3Bucket",
} as const;
/**
 * @public
 */
export type MediaPipelineSinkType = (typeof MediaPipelineSinkType)[keyof typeof MediaPipelineSinkType];

/**
 * @public
 * @enum
 */
export const MediaPipelineSourceType = {
  ChimeSdkMeeting: "ChimeSdkMeeting",
} as const;
/**
 * @public
 */
export type MediaPipelineSourceType = (typeof MediaPipelineSourceType)[keyof typeof MediaPipelineSourceType];

/**
 * @public
 * @enum
 */
export const MediaPipelineStatus = {
  Failed: "Failed",
  InProgress: "InProgress",
  Initializing: "Initializing",
  NotStarted: "NotStarted",
  Paused: "Paused",
  Stopped: "Stopped",
  Stopping: "Stopping",
} as const;
/**
 * @public
 */
export type MediaPipelineStatus = (typeof MediaPipelineStatus)[keyof typeof MediaPipelineStatus];

/**
 * @public
 * @enum
 */
export const ConcatenationSinkType = {
  S3Bucket: "S3Bucket",
} as const;
/**
 * @public
 */
export type ConcatenationSinkType = (typeof ConcatenationSinkType)[keyof typeof ConcatenationSinkType];

/**
 * @public
 * @enum
 */
export const ConcatenationSourceType = {
  MediaCapturePipeline: "MediaCapturePipeline",
} as const;
/**
 * @public
 */
export type ConcatenationSourceType = (typeof ConcatenationSourceType)[keyof typeof ConcatenationSourceType];

/**
 * @public
 * @enum
 */
export const FragmentSelectorType = {
  ProducerTimestamp: "ProducerTimestamp",
  ServerTimestamp: "ServerTimestamp",
} as const;
/**
 * @public
 */
export type FragmentSelectorType = (typeof FragmentSelectorType)[keyof typeof FragmentSelectorType];

/**
 * @public
 * @enum
 */
export const MediaEncoding = {
  PCM: "pcm",
} as const;
/**
 * @public
 */
export type MediaEncoding = (typeof MediaEncoding)[keyof typeof MediaEncoding];

/**
 * @public
 * @enum
 */
export const RecordingFileFormat = {
  Opus: "Opus",
  Wav: "Wav",
} as const;
/**
 * @public
 */
export type RecordingFileFormat = (typeof RecordingFileFormat)[keyof typeof RecordingFileFormat];

/**
 * @public
 * @enum
 */
export const MediaPipelineElementStatus = {
  Failed: "Failed",
  InProgress: "InProgress",
  Initializing: "Initializing",
  NotStarted: "NotStarted",
  NotSupported: "NotSupported",
  Paused: "Paused",
  Stopped: "Stopped",
  Stopping: "Stopping",
} as const;
/**
 * @public
 */
export type MediaPipelineElementStatus = (typeof MediaPipelineElementStatus)[keyof typeof MediaPipelineElementStatus];

/**
 * @public
 * @enum
 */
export const MediaInsightsPipelineConfigurationElementType = {
  AMAZON_TRANSCRIBE_CALL_ANALYTICS_PROCESSOR: "AmazonTranscribeCallAnalyticsProcessor",
  AMAZON_TRANSCRIBE_PROCESSOR: "AmazonTranscribeProcessor",
  KINESIS_DATA_STREAM_SINK: "KinesisDataStreamSink",
  LAMBDA_FUNCTION_SINK: "LambdaFunctionSink",
  S3_RECORDING_SINK: "S3RecordingSink",
  SNS_TOPIC_SINK: "SnsTopicSink",
  SQS_QUEUE_SINK: "SqsQueueSink",
  VOICE_ANALYTICS_PROCESSOR: "VoiceAnalyticsProcessor",
  VOICE_ENHANCEMENT_SINK: "VoiceEnhancementSink",
} as const;
/**
 * @public
 */
export type MediaInsightsPipelineConfigurationElementType =
  (typeof MediaInsightsPipelineConfigurationElementType)[keyof typeof MediaInsightsPipelineConfigurationElementType];

/**
 * @public
 * @enum
 */
export const VoiceAnalyticsConfigurationStatus = {
  DISABLED: "Disabled",
  ENABLED: "Enabled",
} as const;
/**
 * @public
 */
export type VoiceAnalyticsConfigurationStatus =
  (typeof VoiceAnalyticsConfigurationStatus)[keyof typeof VoiceAnalyticsConfigurationStatus];

/**
 * @public
 * @enum
 */
export const SentimentType = {
  NEGATIVE: "NEGATIVE",
} as const;
/**
 * @public
 */
export type SentimentType = (typeof SentimentType)[keyof typeof SentimentType];

/**
 * @public
 * @enum
 */
export const RealTimeAlertRuleType = {
  IssueDetection: "IssueDetection",
  KeywordMatch: "KeywordMatch",
  Sentiment: "Sentiment",
} as const;
/**
 * @public
 */
export type RealTimeAlertRuleType = (typeof RealTimeAlertRuleType)[keyof typeof RealTimeAlertRuleType];

/**
 * @public
 * @enum
 */
export const LiveConnectorSinkType = {
  RTMP: "RTMP",
} as const;
/**
 * @public
 */
export type LiveConnectorSinkType = (typeof LiveConnectorSinkType)[keyof typeof LiveConnectorSinkType];

/**
 * @public
 * @enum
 */
export const LiveConnectorMuxType = {
  AudioWithActiveSpeakerVideo: "AudioWithActiveSpeakerVideo",
  AudioWithCompositedVideo: "AudioWithCompositedVideo",
} as const;
/**
 * @public
 */
export type LiveConnectorMuxType = (typeof LiveConnectorMuxType)[keyof typeof LiveConnectorMuxType];

/**
 * @public
 * @enum
 */
export const LiveConnectorSourceType = {
  ChimeSdkMeeting: "ChimeSdkMeeting",
} as const;
/**
 * @public
 */
export type LiveConnectorSourceType = (typeof LiveConnectorSourceType)[keyof typeof LiveConnectorSourceType];

/**
 * @public
 * @enum
 */
export const KinesisVideoStreamPoolStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type KinesisVideoStreamPoolStatus =
  (typeof KinesisVideoStreamPoolStatus)[keyof typeof KinesisVideoStreamPoolStatus];

/**
 * @public
 * @enum
 */
export const MediaStreamType = {
  IndividualAudio: "IndividualAudio",
  MixedAudio: "MixedAudio",
} as const;
/**
 * @public
 */
export type MediaStreamType = (typeof MediaStreamType)[keyof typeof MediaStreamType];

/**
 * @public
 * @enum
 */
export const MediaStreamPipelineSinkType = {
  KinesisVideoStreamPool: "KinesisVideoStreamPool",
} as const;
/**
 * @public
 */
export type MediaStreamPipelineSinkType =
  (typeof MediaStreamPipelineSinkType)[keyof typeof MediaStreamPipelineSinkType];

/**
 * @public
 * @enum
 */
export const MediaPipelineTaskStatus = {
  Failed: "Failed",
  InProgress: "InProgress",
  Initializing: "Initializing",
  NotStarted: "NotStarted",
  Stopped: "Stopped",
  Stopping: "Stopping",
} as const;
/**
 * @public
 */
export type MediaPipelineTaskStatus = (typeof MediaPipelineTaskStatus)[keyof typeof MediaPipelineTaskStatus];

/**
 * @public
 * @enum
 */
export const VoiceAnalyticsLanguageCode = {
  EN_US: "en-US",
} as const;
/**
 * @public
 */
export type VoiceAnalyticsLanguageCode = (typeof VoiceAnalyticsLanguageCode)[keyof typeof VoiceAnalyticsLanguageCode];

/**
 * @public
 * @enum
 */
export const MediaPipelineStatusUpdate = {
  Pause: "Pause",
  Resume: "Resume",
} as const;
/**
 * @public
 */
export type MediaPipelineStatusUpdate = (typeof MediaPipelineStatusUpdate)[keyof typeof MediaPipelineStatusUpdate];
