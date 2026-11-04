// smithy-typescript generated code
import type {
  ActiveSpeakerPosition,
  ArtifactsConcatenationState,
  ArtifactsState,
  AudioArtifactsConcatenationState,
  AudioChannelsOption,
  AudioMuxType,
  BorderColor,
  CallAnalyticsLanguageCode,
  CanvasOrientation,
  ConcatenationSinkType,
  ConcatenationSourceType,
  ContentMuxType,
  ContentRedactionOutput,
  ContentShareLayoutOption,
  ContentType,
  FragmentSelectorType,
  HighlightColor,
  HorizontalTilePosition,
  KinesisVideoStreamPoolStatus,
  LayoutOption,
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
  PartialResultsStability,
  ParticipantRole,
  PresenterPosition,
  RealTimeAlertRuleType,
  RecordingFileFormat,
  ResolutionOption,
  SentimentType,
  TileOrder,
  VerticalTilePosition,
  VideoMuxType,
  VocabularyFilterMethod,
  VoiceAnalyticsConfigurationStatus,
  VoiceAnalyticsLanguageCode,
} from "./enums";

/**
 * Defines the configuration for an `ActiveSpeakerOnly` video tile.
 *
 * @public
 */
export interface ActiveSpeakerOnlyConfiguration {
  /**
   * The position of the `ActiveSpeakerOnly` video tile.
   *
   * @public
   */
  ActiveSpeakerPosition?: ActiveSpeakerPosition | undefined;
}

/**
 * Allows you to specify additional settings for your Call Analytics post-call request, including output locations for your redacted transcript, which IAM role to use, and which encryption key to use.
 *
 * `DataAccessRoleArn` and `OutputLocation` are required fields.
 *
 * `PostCallAnalyticsSettings` provides the same insights as a Call Analytics post-call transcription. For more information, refer to [Post-call analytics with real-time transcriptions](https://docs.aws.amazon.com/transcribe/latest/dg/tca-post-call.html) in the *Amazon Transcribe Developer Guide*.
 *
 * @public
 */
export interface PostCallAnalyticsSettings {
  /**
   * The URL of the Amazon S3 bucket that contains the post-call data.
   *
   * @public
   */
  OutputLocation: string | undefined;

  /**
   * The ARN of the role used by Amazon Web Services Transcribe to upload your post call analysis. For more information, see [Post-call analytics with real-time transcriptions](https://docs.aws.amazon.com/transcribe/latest/dg/tca-post-call.html) in the *Amazon Transcribe Developer Guide*.
   *
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * The content redaction output settings for a post-call analysis task.
   *
   * @public
   */
  ContentRedactionOutput?: ContentRedactionOutput | undefined;

  /**
   * The ID of the KMS (Key Management Service) key used to encrypt the output.
   *
   * @public
   */
  OutputEncryptionKMSKeyId?: string | undefined;
}

/**
 * A structure that contains the configuration settings for an Amazon Transcribe call analytics processor.
 *
 * @public
 */
export interface AmazonTranscribeCallAnalyticsProcessorConfiguration {
  /**
   * The language code in the configuration.
   *
   * @public
   */
  LanguageCode: CallAnalyticsLanguageCode | undefined;

  /**
   * Specifies the name of the custom vocabulary to use when processing a transcription. Note that vocabulary names are case sensitive.
   *
   * If the language of the specified custom vocabulary doesn't match the language identified in your media, the custom vocabulary is not applied to your transcription.
   *
   * For more information, see [Custom vocabularies](https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html) in the *Amazon Transcribe Developer Guide*.
   *
   * Length Constraints: Minimum length of 1. Maximum length of 200.
   *
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * Specifies the name of the custom vocabulary filter to use when processing a transcription. Note that vocabulary filter names are case sensitive.
   *
   * If the language of the specified custom vocabulary filter doesn't match the language identified in your media, the vocabulary filter is not applied to your transcription.
   *
   * For more information, see [Using vocabulary filtering with unwanted words](https://docs.aws.amazon.com/transcribe/latest/dg/vocabulary-filtering.html) in the *Amazon Transcribe Developer Guide*.
   *
   * Length Constraints: Minimum length of 1. Maximum length of 200.
   *
   * @public
   */
  VocabularyFilterName?: string | undefined;

  /**
   * Specifies how to apply a vocabulary filter to a transcript.
   *
   * To replace words with *******, choose `mask`.
   *
   * To delete words, choose `remove`.
   *
   * To flag words without changing them, choose `tag`.
   *
   * @public
   */
  VocabularyFilterMethod?: VocabularyFilterMethod | undefined;

  /**
   * Specifies the name of the custom language model to use when processing a transcription. Note that language model names are case sensitive.
   *
   * The language of the specified language model must match the language code specified in the transcription request. If the languages don't match, the custom language model isn't applied. Language mismatches don't generate errors or warnings.
   *
   * For more information, see [Custom language models](https://docs.aws.amazon.com/transcribe/latest/dg/custom-language-models.html) in the *Amazon Transcribe Developer Guide*.
   *
   * @public
   */
  LanguageModelName?: string | undefined;

  /**
   * Enables partial result stabilization for your transcription. Partial result stabilization can reduce latency in your output, but may impact accuracy. For more information, see [Partial-result stabilization](https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html#streaming-partial-result-stabilization) in the *Amazon Transcribe Developer Guide*.
   *
   * @public
   */
  EnablePartialResultsStabilization?: boolean | undefined;

  /**
   * Specifies the level of stability to use when you enable partial results stabilization (`EnablePartialResultsStabilization`).
   *
   * Low stability provides the highest accuracy. High stability transcribes faster, but with slightly lower accuracy.
   *
   * For more information, see [Partial-result stabilization](https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html#streaming-partial-result-stabilization) in the *Amazon Transcribe Developer Guide*.
   *
   * @public
   */
  PartialResultsStability?: PartialResultsStability | undefined;

  /**
   * Labels all personally identifiable information (PII) identified in your transcript.
   *
   * Content identification is performed at the segment level; PII specified in `PiiEntityTypes` is flagged upon complete transcription of an audio segment.
   *
   * You can’t set `ContentIdentificationType` and `ContentRedactionType` in the same request. If you do, your request returns a `BadRequestException`.
   *
   * For more information, see [Redacting or identifying personally identifiable information](https://docs.aws.amazon.com/transcribe/latest/dg/pii-redaction.html) in the *Amazon Transcribe Developer Guide*.
   *
   * @public
   */
  ContentIdentificationType?: ContentType | undefined;

  /**
   * Redacts all personally identifiable information (PII) identified in your transcript.
   *
   * Content redaction is performed at the segment level; PII specified in `PiiEntityTypes` is redacted upon complete transcription of an audio segment.
   *
   * You can’t set `ContentRedactionType` and `ContentIdentificationType` in the same request. If you do, your request returns a `BadRequestException`.
   *
   * For more information, see [Redacting or identifying personally identifiable information](https://docs.aws.amazon.com/transcribe/latest/dg/pii-redaction.html) in the *Amazon Transcribe Developer Guide*.
   *
   * @public
   */
  ContentRedactionType?: ContentType | undefined;

  /**
   * Specifies the types of personally identifiable information (PII) to redact from a transcript. You can include as many types as you'd like, or you can select `ALL`.
   *
   * To include `PiiEntityTypes` in your Call Analytics request, you must also include `ContentIdentificationType` or `ContentRedactionType`, but you can't include both.
   *
   * Values must be comma-separated and can include: `ADDRESS`, `BANK_ACCOUNT_NUMBER`, `BANK_ROUTING`, `CREDIT_DEBIT_CVV`, `CREDIT_DEBIT_EXPIRY`, `CREDIT_DEBIT_NUMBER`, `EMAIL`, `NAME`, `PHONE`, `PIN`, `SSN`, or `ALL`.
   *
   * Length Constraints: Minimum length of 1. Maximum length of 300.
   *
   * @public
   */
  PiiEntityTypes?: string | undefined;

  /**
   * If true, `UtteranceEvents` with `IsPartial: true` are filtered out of the insights target.
   *
   * @public
   */
  FilterPartialResults?: boolean | undefined;

  /**
   * The settings for a post-call analysis task in an analytics configuration.
   *
   * @public
   */
  PostCallAnalyticsSettings?: PostCallAnalyticsSettings | undefined;

  /**
   * By default, all `CategoryEvents` are sent to the insights target. If this parameter is specified, only included categories are sent to the insights target.
   *
   * @public
   */
  CallAnalyticsStreamCategories?: string[] | undefined;
}

/**
 * A structure that contains the configuration settings for an Amazon Transcribe processor.
 *
 * > **Note:** Calls to this API must include a `LanguageCode`, `IdentifyLanguage`, or `IdentifyMultipleLanguages` parameter. If you include more than one of those parameters, your transcription job fails.
 *
 * @public
 */
export interface AmazonTranscribeProcessorConfiguration {
  /**
   * The language code that represents the language spoken in your audio.
   *
   * If you're unsure of the language spoken in your audio, consider using `IdentifyLanguage` to enable automatic language identification.
   *
   * For a list of languages that real-time Call Analytics supports, see the [Supported languages table](https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html) in the *Amazon Transcribe Developer Guide*.
   *
   * @public
   */
  LanguageCode?: CallAnalyticsLanguageCode | undefined;

  /**
   * The name of the custom vocabulary that you specified in your Call Analytics request.
   *
   * Length Constraints: Minimum length of 1. Maximum length of 200.
   *
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * The name of the custom vocabulary filter that you specified in your Call Analytics request.
   *
   * Length Constraints: Minimum length of 1. Maximum length of 200.
   *
   * @public
   */
  VocabularyFilterName?: string | undefined;

  /**
   * The vocabulary filtering method used in your Call Analytics transcription.
   *
   * @public
   */
  VocabularyFilterMethod?: VocabularyFilterMethod | undefined;

  /**
   * Enables speaker partitioning (diarization) in your transcription output. Speaker partitioning labels the speech from individual speakers in your media file.
   *
   * For more information, see [Partitioning speakers (diarization)](https://docs.aws.amazon.com/transcribe/latest/dg/diarization.html) in the *Amazon Transcribe Developer Guide*.
   *
   * @public
   */
  ShowSpeakerLabel?: boolean | undefined;

  /**
   * Enables partial result stabilization for your transcription. Partial result stabilization can reduce latency in your output, but may impact accuracy.
   *
   * For more information, see [Partial-result stabilization](https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html#streaming-partial-result-stabilization) in the *Amazon Transcribe Developer Guide*.
   *
   * @public
   */
  EnablePartialResultsStabilization?: boolean | undefined;

  /**
   * The level of stability to use when you enable partial results stabilization (`EnablePartialResultsStabilization`).
   *
   * Low stability provides the highest accuracy. High stability transcribes faster, but with slightly lower accuracy.
   *
   * For more information, see [Partial-result stabilization](https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html#streaming-partial-result-stabilization) in the *Amazon Transcribe Developer Guide*.
   *
   * @public
   */
  PartialResultsStability?: PartialResultsStability | undefined;

  /**
   * Labels all personally identifiable information (PII) identified in your transcript.
   *
   * Content identification is performed at the segment level; PII specified in `PiiEntityTypes` is flagged upon complete transcription of an audio segment.
   *
   * You can’t set `ContentIdentificationType` and `ContentRedactionType` in the same request. If you set both, your request returns a `BadRequestException`.
   *
   * For more information, see [Redacting or identifying personally identifiable information](https://docs.aws.amazon.com/transcribe/latest/dg/pii-redaction.html) in the *Amazon Transcribe Developer Guide*.
   *
   * @public
   */
  ContentIdentificationType?: ContentType | undefined;

  /**
   * Redacts all personally identifiable information (PII) identified in your transcript.
   *
   * Content redaction is performed at the segment level; PII specified in PiiEntityTypes is redacted upon complete transcription of an audio segment.
   *
   * You can’t set ContentRedactionType and ContentIdentificationType in the same request. If you set both, your request returns a `BadRequestException`.
   *
   * For more information, see [Redacting or identifying personally identifiable information](https://docs.aws.amazon.com/transcribe/latest/dg/pii-redaction.html) in the *Amazon Transcribe Developer Guide*.
   *
   * @public
   */
  ContentRedactionType?: ContentType | undefined;

  /**
   * The types of personally identifiable information (PII) to redact from a transcript. You can include as many types as you'd like, or you can select `ALL`.
   *
   * To include `PiiEntityTypes` in your Call Analytics request, you must also include `ContentIdentificationType` or `ContentRedactionType`, but you can't include both.
   *
   * Values must be comma-separated and can include: `ADDRESS`, `BANK_ACCOUNT_NUMBER`, `BANK_ROUTING`, `CREDIT_DEBIT_CVV`, `CREDIT_DEBIT_EXPIRY`, `CREDIT_DEBIT_NUMBER`, `EMAIL`, `NAME`, `PHONE`, `PIN`, `SSN`, or `ALL`.
   *
   * If you leave this parameter empty, the default behavior is equivalent to `ALL`.
   *
   * @public
   */
  PiiEntityTypes?: string | undefined;

  /**
   * The name of the custom language model that you want to use when processing your transcription. Note that language model names are case sensitive.
   *
   * The language of the specified language model must match the language code you specify in your transcription request. If the languages don't match, the custom language model isn't applied. There are no errors or warnings associated with a language mismatch.
   *
   * For more information, see [Custom language models](https://docs.aws.amazon.com/transcribe/latest/dg/custom-language-models.html) in the *Amazon Transcribe Developer Guide*.
   *
   * @public
   */
  LanguageModelName?: string | undefined;

  /**
   * If true, `TranscriptEvents` with `IsPartial: true` are filtered out of the insights target.
   *
   * @public
   */
  FilterPartialResults?: boolean | undefined;

  /**
   * Turns language identification on or off.
   *
   * @public
   */
  IdentifyLanguage?: boolean | undefined;

  /**
   * Turns language identification on or off for multiple languages.
   *
   * > **Note:** Calls to this API must include a `LanguageCode`, `IdentifyLanguage`, or `IdentifyMultipleLanguages` parameter. If you include more than one of those parameters, your transcription job fails.
   *
   * @public
   */
  IdentifyMultipleLanguages?: boolean | undefined;

  /**
   * The language options for the transcription, such as automatic language detection.
   *
   * @public
   */
  LanguageOptions?: string | undefined;

  /**
   * The preferred language for the transcription.
   *
   * @public
   */
  PreferredLanguage?: CallAnalyticsLanguageCode | undefined;

  /**
   * The names of the custom vocabulary or vocabularies used during transcription.
   *
   * @public
   */
  VocabularyNames?: string | undefined;

  /**
   * The names of the custom vocabulary filter or filters using during transcription.
   *
   * @public
   */
  VocabularyFilterNames?: string | undefined;
}

/**
 * The audio artifact concatenation configuration object.
 *
 * @public
 */
export interface AudioConcatenationConfiguration {
  /**
   * Enables or disables the configuration object.
   *
   * @public
   */
  State: AudioArtifactsConcatenationState | undefined;
}

/**
 * The composited video configuration object for a specified media pipeline. `SourceType` must be `ChimeSdkMeeting`.
 *
 * @public
 */
export interface CompositedVideoConcatenationConfiguration {
  /**
   * Enables or disables the configuration object.
   *
   * @public
   */
  State: ArtifactsConcatenationState | undefined;
}

/**
 * The composited content configuration object for a specified media pipeline.
 *
 * @public
 */
export interface ContentConcatenationConfiguration {
  /**
   * Enables or disables the configuration object.
   *
   * @public
   */
  State: ArtifactsConcatenationState | undefined;
}

/**
 * The content configuration object's data channel.
 *
 * @public
 */
export interface DataChannelConcatenationConfiguration {
  /**
   * Enables or disables the configuration object.
   *
   * @public
   */
  State: ArtifactsConcatenationState | undefined;
}

/**
 * The configuration object for an event concatenation pipeline.
 *
 * @public
 */
export interface MeetingEventsConcatenationConfiguration {
  /**
   * Enables or disables the configuration object.
   *
   * @public
   */
  State: ArtifactsConcatenationState | undefined;
}

/**
 * The configuration object for concatenating transcription messages.
 *
 * @public
 */
export interface TranscriptionMessagesConcatenationConfiguration {
  /**
   * Enables or disables the configuration object.
   *
   * @public
   */
  State: ArtifactsConcatenationState | undefined;
}

/**
 * The configuration object of a video concatenation pipeline.
 *
 * @public
 */
export interface VideoConcatenationConfiguration {
  /**
   * Enables or disables the configuration object.
   *
   * @public
   */
  State: ArtifactsConcatenationState | undefined;
}

/**
 * The configuration for the artifacts concatenation.
 *
 * @public
 */
export interface ArtifactsConcatenationConfiguration {
  /**
   * The configuration for the audio artifacts concatenation.
   *
   * @public
   */
  Audio: AudioConcatenationConfiguration | undefined;

  /**
   * The configuration for the video artifacts concatenation.
   *
   * @public
   */
  Video: VideoConcatenationConfiguration | undefined;

  /**
   * The configuration for the content artifacts concatenation.
   *
   * @public
   */
  Content: ContentConcatenationConfiguration | undefined;

  /**
   * The configuration for the data channel artifacts concatenation.
   *
   * @public
   */
  DataChannel: DataChannelConcatenationConfiguration | undefined;

  /**
   * The configuration for the transcription messages artifacts concatenation.
   *
   * @public
   */
  TranscriptionMessages: TranscriptionMessagesConcatenationConfiguration | undefined;

  /**
   * The configuration for the meeting events artifacts concatenation.
   *
   * @public
   */
  MeetingEvents: MeetingEventsConcatenationConfiguration | undefined;

  /**
   * The configuration for the composited video artifacts concatenation.
   *
   * @public
   */
  CompositedVideo: CompositedVideoConcatenationConfiguration | undefined;
}

/**
 * The audio artifact configuration object.
 *
 * @public
 */
export interface AudioArtifactsConfiguration {
  /**
   * The MUX type of the audio artifact configuration object.
   *
   * @public
   */
  MuxType: AudioMuxType | undefined;
}

/**
 * Defines the configuration settings for the horizontal layout.
 *
 * @public
 */
export interface HorizontalLayoutConfiguration {
  /**
   * Sets the automatic ordering of the video tiles.
   *
   * @public
   */
  TileOrder?: TileOrder | undefined;

  /**
   * Sets the position of horizontal tiles.
   *
   * @public
   */
  TilePosition?: HorizontalTilePosition | undefined;

  /**
   * The maximum number of video tiles to display.
   *
   * @public
   */
  TileCount?: number | undefined;

  /**
   * Specifies the aspect ratio of all video tiles.
   *
   * @public
   */
  TileAspectRatio?: string | undefined;
}

/**
 * Defines the configuration for a presenter-only video tile.
 *
 * @public
 */
export interface PresenterOnlyConfiguration {
  /**
   * Defines the position of the presenter video tile. Default: `TopRight`.
   *
   * @public
   */
  PresenterPosition?: PresenterPosition | undefined;
}

/**
 * Defines the configuration settings for a vertical layout.
 *
 * @public
 */
export interface VerticalLayoutConfiguration {
  /**
   * Sets the automatic ordering of the video tiles.
   *
   * @public
   */
  TileOrder?: TileOrder | undefined;

  /**
   * Sets the position of vertical tiles.
   *
   * @public
   */
  TilePosition?: VerticalTilePosition | undefined;

  /**
   * The maximum number of tiles to display.
   *
   * @public
   */
  TileCount?: number | undefined;

  /**
   * Sets the aspect ratio of the video tiles, such as 16:9.
   *
   * @public
   */
  TileAspectRatio?: string | undefined;
}

/**
 * Defines the settings for a video tile.
 *
 * @public
 */
export interface VideoAttribute {
  /**
   * Sets the corner radius of all video tiles.
   *
   * @public
   */
  CornerRadius?: number | undefined;

  /**
   * Defines the border color of all video tiles.
   *
   * @public
   */
  BorderColor?: BorderColor | undefined;

  /**
   * Defines the highlight color for the active video tile.
   *
   * @public
   */
  HighlightColor?: HighlightColor | undefined;

  /**
   * Defines the border thickness for all video tiles.
   *
   * @public
   */
  BorderThickness?: number | undefined;
}

/**
 * Specifies the type of grid layout.
 *
 * @public
 */
export interface GridViewConfiguration {
  /**
   * Defines the layout of the video tiles when content sharing is enabled.
   *
   * @public
   */
  ContentShareLayout: ContentShareLayoutOption | undefined;

  /**
   * Defines the configuration options for a presenter only video tile.
   *
   * @public
   */
  PresenterOnlyConfiguration?: PresenterOnlyConfiguration | undefined;

  /**
   * The configuration settings for an `ActiveSpeakerOnly` video tile.
   *
   * @public
   */
  ActiveSpeakerOnlyConfiguration?: ActiveSpeakerOnlyConfiguration | undefined;

  /**
   * The configuration settings for a horizontal layout.
   *
   * @public
   */
  HorizontalLayoutConfiguration?: HorizontalLayoutConfiguration | undefined;

  /**
   * The configuration settings for a vertical layout.
   *
   * @public
   */
  VerticalLayoutConfiguration?: VerticalLayoutConfiguration | undefined;

  /**
   * The attribute settings for the video tiles.
   *
   * @public
   */
  VideoAttribute?: VideoAttribute | undefined;

  /**
   * The orientation setting, horizontal or vertical.
   *
   * @public
   */
  CanvasOrientation?: CanvasOrientation | undefined;
}

/**
 * Specifies the configuration for compositing video artifacts.
 *
 * @public
 */
export interface CompositedVideoArtifactsConfiguration {
  /**
   * The layout setting, such as `GridView` in the configuration object.
   *
   * @public
   */
  Layout?: LayoutOption | undefined;

  /**
   * The video resolution setting in the configuration object. Default: HD at 1280 x 720. FHD resolution: 1920 x 1080.
   *
   * @public
   */
  Resolution?: ResolutionOption | undefined;

  /**
   * The `GridView` configuration setting.
   *
   * @public
   */
  GridViewConfiguration: GridViewConfiguration | undefined;
}

/**
 * The content artifact object.
 *
 * @public
 */
export interface ContentArtifactsConfiguration {
  /**
   * Indicates whether the content artifact is enabled or disabled.
   *
   * @public
   */
  State: ArtifactsState | undefined;

  /**
   * The MUX type of the artifact configuration.
   *
   * @public
   */
  MuxType?: ContentMuxType | undefined;
}

/**
 * The video artifact configuration object.
 *
 * @public
 */
export interface VideoArtifactsConfiguration {
  /**
   * Indicates whether the video artifact is enabled or disabled.
   *
   * @public
   */
  State: ArtifactsState | undefined;

  /**
   * The MUX type of the video artifact configuration object.
   *
   * @public
   */
  MuxType?: VideoMuxType | undefined;
}

/**
 * The configuration for the artifacts.
 *
 * @public
 */
export interface ArtifactsConfiguration {
  /**
   * The configuration for the audio artifacts.
   *
   * @public
   */
  Audio: AudioArtifactsConfiguration | undefined;

  /**
   * The configuration for the video artifacts.
   *
   * @public
   */
  Video: VideoArtifactsConfiguration | undefined;

  /**
   * The configuration for the content artifacts.
   *
   * @public
   */
  Content: ContentArtifactsConfiguration | undefined;

  /**
   * Enables video compositing.
   *
   * @public
   */
  CompositedVideo?: CompositedVideoArtifactsConfiguration | undefined;
}

/**
 * Defines an audio channel in a Kinesis video stream.
 *
 * @public
 */
export interface ChannelDefinition {
  /**
   * The channel ID.
   *
   * @public
   */
  ChannelId: number | undefined;

  /**
   * Specifies whether the audio in a channel belongs to the `AGENT` or `CUSTOMER`.
   *
   * @public
   */
  ParticipantRole?: ParticipantRole | undefined;
}

/**
 * The video streams for a specified media pipeline. The total number of video streams can't exceed 25.
 *
 * @public
 */
export interface SelectedVideoStreams {
  /**
   * The attendee IDs of the streams selected for a media pipeline.
   *
   * @public
   */
  AttendeeIds?: string[] | undefined;

  /**
   * The external user IDs of the streams selected for a media pipeline.
   *
   * @public
   */
  ExternalUserIds?: string[] | undefined;
}

/**
 * Source configuration for a specified media pipeline.
 *
 * @public
 */
export interface SourceConfiguration {
  /**
   * The selected video streams for a specified media pipeline. The number of video streams can't exceed 25.
   *
   * @public
   */
  SelectedVideoStreams?: SelectedVideoStreams | undefined;
}

/**
 * The configuration object of the Amazon Chime SDK meeting for a specified media pipeline. `SourceType` must be `ChimeSdkMeeting`.
 *
 * @public
 */
export interface ChimeSdkMeetingConfiguration {
  /**
   * The source configuration for a specified media pipeline.
   *
   * @public
   */
  SourceConfiguration?: SourceConfiguration | undefined;

  /**
   * The configuration for the artifacts in an Amazon Chime SDK meeting.
   *
   * @public
   */
  ArtifactsConfiguration?: ArtifactsConfiguration | undefined;
}

/**
 * Contains server side encryption parameters to be used by media capture pipeline. The parameters can also be used by media concatenation pipeline taking media capture pipeline as a media source.
 *
 * @public
 */
export interface SseAwsKeyManagementParams {
  /**
   * The KMS key you want to use to encrypt your media pipeline output. Decryption is required for concatenation pipeline. If using a key located in the current Amazon Web Services account, you can specify your KMS key in one of four ways:
   *
   * - Use the KMS key ID itself. For example, `1234abcd-12ab-34cd-56ef-1234567890ab`.
   * - Use an alias for the KMS key ID. For example, `alias/ExampleAlias`.
   * - Use the Amazon Resource Name (ARN) for the KMS key ID. For example, `arn:aws:kms:region:account-ID:key/1234abcd-12ab-34cd-56ef-1234567890ab`.
   * - Use the ARN for the KMS key alias. For example, `arn:aws:kms:region:account-ID:alias/ExampleAlias`.
   *
   * If using a key located in a different Amazon Web Services account than the current Amazon Web Services account, you can specify your KMS key in one of two ways:
   *
   * - Use the ARN for the KMS key ID. For example, `arn:aws:kms:region:account-ID:key/1234abcd-12ab-34cd-56ef-1234567890ab`.
   * - Use the ARN for the KMS key alias. For example, `arn:aws:kms:region:account-ID:alias/ExampleAlias`.
   *
   * If you don't specify an encryption key, your output is encrypted with the default Amazon S3 key (SSE-S3).
   *
   * Note that the role specified in the `SinkIamRoleArn` request parameter must have permission to use the specified KMS key.
   *
   * @public
   */
  AwsKmsKeyId: string | undefined;

  /**
   * Base64-encoded string of a UTF-8 encoded JSON, which contains the encryption context as non-secret key-value pair known as encryption context pairs, that provides an added layer of security for your data. For more information, see [KMS encryption context](https://docs.aws.amazon.com/kms/latest/developerguide/encrypt_context.html) and [Asymmetric keys in KMS](https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  AwsKmsEncryptionContext?: string | undefined;
}

/**
 * A key/value pair that grants users access to meeting resources.
 *
 * @public
 */
export interface Tag {
  /**
   * The key half of a tag.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value half of a tag.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateMediaCapturePipelineRequest {
  /**
   * Source type from which the media artifacts are captured. A Chime SDK Meeting is the only supported source.
   *
   * @public
   */
  SourceType: MediaPipelineSourceType | undefined;

  /**
   * ARN of the source from which the media artifacts are captured.
   *
   * @public
   */
  SourceArn: string | undefined;

  /**
   * Destination type to which the media artifacts are saved. You must use an S3 bucket.
   *
   * @public
   */
  SinkType: MediaPipelineSinkType | undefined;

  /**
   * The ARN of the sink type.
   *
   * @public
   */
  SinkArn: string | undefined;

  /**
   * The unique identifier for the client request. The token makes the API request idempotent. Use a unique token for each media pipeline request.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The configuration for a specified media pipeline. `SourceType` must be `ChimeSdkMeeting`.
   *
   * @public
   */
  ChimeSdkMeetingConfiguration?: ChimeSdkMeetingConfiguration | undefined;

  /**
   * An object that contains server side encryption parameters to be used by media capture pipeline. The parameters can also be used by media concatenation pipeline taking media capture pipeline as a media source.
   *
   * @public
   */
  SseAwsKeyManagementParams?: SseAwsKeyManagementParams | undefined;

  /**
   * The Amazon Resource Name (ARN) of the sink role to be used with `AwsKmsKeyId` in `SseAwsKeyManagementParams`. Can only interact with `S3Bucket` sink type. The role must belong to the caller’s account and be able to act on behalf of the caller during the API call. All minimum policy permissions requirements for the caller to perform sink-related actions are the same for `SinkIamRoleArn`.
   *
   * Additionally, the role must have permission to `kms:GenerateDataKey` using KMS key supplied as `AwsKmsKeyId` in `SseAwsKeyManagementParams`. If media concatenation will be required later, the role must also have permission to `kms:Decrypt` for the same KMS key.
   *
   * @public
   */
  SinkIamRoleArn?: string | undefined;

  /**
   * The tag key-value pairs.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * A media pipeline object consisting of an ID, source type, source ARN, a sink type, a sink ARN, and a configuration object.
 *
 * @public
 */
export interface MediaCapturePipeline {
  /**
   * The ID of a media pipeline.
   *
   * @public
   */
  MediaPipelineId?: string | undefined;

  /**
   * The ARN of the media capture pipeline
   *
   * @public
   */
  MediaPipelineArn?: string | undefined;

  /**
   * Source type from which media artifacts are saved. You must use `ChimeMeeting`.
   *
   * @public
   */
  SourceType?: MediaPipelineSourceType | undefined;

  /**
   * ARN of the source from which the media artifacts are saved.
   *
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * The status of the media pipeline.
   *
   * @public
   */
  Status?: MediaPipelineStatus | undefined;

  /**
   * Destination type to which the media artifacts are saved. You must use an S3 Bucket.
   *
   * @public
   */
  SinkType?: MediaPipelineSinkType | undefined;

  /**
   * ARN of the destination to which the media artifacts are saved.
   *
   * @public
   */
  SinkArn?: string | undefined;

  /**
   * The time at which the pipeline was created, in ISO 8601 format.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The time at which the pipeline was updated, in ISO 8601 format.
   *
   * @public
   */
  UpdatedTimestamp?: Date | undefined;

  /**
   * The configuration for a specified media pipeline. `SourceType` must be `ChimeSdkMeeting`.
   *
   * @public
   */
  ChimeSdkMeetingConfiguration?: ChimeSdkMeetingConfiguration | undefined;

  /**
   * An object that contains server side encryption parameters to be used by media capture pipeline. The parameters can also be used by media concatenation pipeline taking media capture pipeline as a media source.
   *
   * @public
   */
  SseAwsKeyManagementParams?: SseAwsKeyManagementParams | undefined;

  /**
   * The Amazon Resource Name (ARN) of the sink role to be used with `AwsKmsKeyId` in `SseAwsKeyManagementParams`.
   *
   * @public
   */
  SinkIamRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateMediaCapturePipelineResponse {
  /**
   * A media pipeline object, the ID, source type, source ARN, sink type, and sink ARN of a media pipeline object.
   *
   * @public
   */
  MediaCapturePipeline?: MediaCapturePipeline | undefined;
}

/**
 * The configuration settings for the S3 bucket.
 *
 * @public
 */
export interface S3BucketSinkConfiguration {
  /**
   * The destination URL of the S3 bucket.
   *
   * @public
   */
  Destination: string | undefined;
}

/**
 * The data sink of the configuration object.
 *
 * @public
 */
export interface ConcatenationSink {
  /**
   * The type of data sink in the configuration object.
   *
   * @public
   */
  Type: ConcatenationSinkType | undefined;

  /**
   * The configuration settings for an Amazon S3 bucket sink.
   *
   * @public
   */
  S3BucketSinkConfiguration: S3BucketSinkConfiguration | undefined;
}

/**
 * The configuration object of the Amazon Chime SDK meeting concatenation for a specified media pipeline.
 *
 * @public
 */
export interface ChimeSdkMeetingConcatenationConfiguration {
  /**
   * The configuration for the artifacts in an Amazon Chime SDK meeting concatenation.
   *
   * @public
   */
  ArtifactsConfiguration: ArtifactsConcatenationConfiguration | undefined;
}

/**
 * The source configuration object of a media capture pipeline.
 *
 * @public
 */
export interface MediaCapturePipelineSourceConfiguration {
  /**
   * The media pipeline ARN in the configuration object of a media capture pipeline.
   *
   * @public
   */
  MediaPipelineArn: string | undefined;

  /**
   * The meeting configuration settings in a media capture pipeline configuration object.
   *
   * @public
   */
  ChimeSdkMeetingConfiguration: ChimeSdkMeetingConcatenationConfiguration | undefined;
}

/**
 * The source type and media pipeline configuration settings in a configuration object.
 *
 * @public
 */
export interface ConcatenationSource {
  /**
   * The type of concatenation source in a configuration object.
   *
   * @public
   */
  Type: ConcatenationSourceType | undefined;

  /**
   * The concatenation settings for the media pipeline in a configuration object.
   *
   * @public
   */
  MediaCapturePipelineSourceConfiguration: MediaCapturePipelineSourceConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateMediaConcatenationPipelineRequest {
  /**
   * An object that specifies the sources for the media concatenation pipeline.
   *
   * @public
   */
  Sources: ConcatenationSource[] | undefined;

  /**
   * An object that specifies the data sinks for the media concatenation pipeline.
   *
   * @public
   */
  Sinks: ConcatenationSink[] | undefined;

  /**
   * The unique identifier for the client request. The token makes the API request idempotent. Use a unique token for each media concatenation pipeline request.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The tags associated with the media concatenation pipeline.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Concatenates audio and video data from one or more data streams.
 *
 * @public
 */
export interface MediaConcatenationPipeline {
  /**
   * The ID of the media pipeline being concatenated.
   *
   * @public
   */
  MediaPipelineId?: string | undefined;

  /**
   * The ARN of the media pipeline that you specify in the `SourceConfiguration` object.
   *
   * @public
   */
  MediaPipelineArn?: string | undefined;

  /**
   * The data sources being concatenated.
   *
   * @public
   */
  Sources?: ConcatenationSource[] | undefined;

  /**
   * The data sinks of the concatenation pipeline.
   *
   * @public
   */
  Sinks?: ConcatenationSink[] | undefined;

  /**
   * The status of the concatenation pipeline.
   *
   * @public
   */
  Status?: MediaPipelineStatus | undefined;

  /**
   * The time at which the concatenation pipeline was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The time at which the concatenation pipeline was last updated.
   *
   * @public
   */
  UpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface CreateMediaConcatenationPipelineResponse {
  /**
   * A media concatenation pipeline object, the ID, source type, `MediaPipelineARN`, and sink of a media concatenation pipeline object.
   *
   * @public
   */
  MediaConcatenationPipeline?: MediaConcatenationPipeline | undefined;
}

/**
 * The range of timestamps to return.
 *
 * @public
 */
export interface TimestampRange {
  /**
   * The starting timestamp for the specified range.
   *
   * @public
   */
  StartTimestamp: Date | undefined;

  /**
   * The ending timestamp for the specified range.
   *
   * @public
   */
  EndTimestamp: Date | undefined;
}

/**
 * Describes the timestamp range and timestamp origin of a range of fragments.
 *
 * Only fragments with a start timestamp greater than or equal to the given start time and less than or equal to the end time are returned. For example, say a stream contains fragments with the following start timestamps:
 *
 * - 00:00:00
 * - 00:00:02
 * - 00:00:04
 * - 00:00:06
 *
 * A fragment selector range with a start time of 00:00:01 and end time of 00:00:04 would return the fragments with start times of 00:00:02 and 00:00:04.
 *
 * @public
 */
export interface FragmentSelector {
  /**
   * The origin of the timestamps to use, `Server` or `Producer`. For more information, see [StartSelectorType](https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_dataplane_StartSelector.html) in the *Amazon Kinesis Video Streams Developer Guide*.
   *
   * @public
   */
  FragmentSelectorType: FragmentSelectorType | undefined;

  /**
   * The range of timestamps to return.
   *
   * @public
   */
  TimestampRange: TimestampRange | undefined;
}

/**
 * A structure that holds the settings for recording media.
 *
 * @public
 */
export interface RecordingStreamConfiguration {
  /**
   * The ARN of the recording stream.
   *
   * @public
   */
  StreamArn?: string | undefined;
}

/**
 * A structure that contains the runtime settings for recording a Kinesis video stream.
 *
 * @public
 */
export interface KinesisVideoStreamRecordingSourceRuntimeConfiguration {
  /**
   * The stream or streams to be recorded.
   *
   * @public
   */
  Streams: RecordingStreamConfiguration[] | undefined;

  /**
   * Describes the timestamp range and timestamp origin of a range of fragments in the Kinesis video stream.
   *
   * @public
   */
  FragmentSelector: FragmentSelector | undefined;
}

/**
 * Defines a streaming channel.
 *
 * @public
 */
export interface StreamChannelDefinition {
  /**
   * The number of channels in a streaming channel.
   *
   * @public
   */
  NumberOfChannels: number | undefined;

  /**
   * The definitions of the channels in a streaming channel.
   *
   * @public
   */
  ChannelDefinitions?: ChannelDefinition[] | undefined;
}

/**
 * The configuration settings for a stream.
 *
 * @public
 */
export interface StreamConfiguration {
  /**
   * The ARN of the stream.
   *
   * @public
   */
  StreamArn: string | undefined;

  /**
   * The unique identifier of the fragment to begin processing.
   *
   * @public
   */
  FragmentNumber?: string | undefined;

  /**
   * The streaming channel definition in the stream configuration.
   *
   * @public
   */
  StreamChannelDefinition: StreamChannelDefinition | undefined;
}

/**
 * The runtime configuration settings for the Kinesis video stream source.
 *
 * @public
 */
export interface KinesisVideoStreamSourceRuntimeConfiguration {
  /**
   * The streams in the source runtime configuration of a Kinesis video stream.
   *
   * @public
   */
  Streams: StreamConfiguration[] | undefined;

  /**
   * Specifies the encoding of your input audio. Supported format: PCM (only signed 16-bit little-endian audio formats, which does not include WAV)
   *
   * For more information, see [Media formats](https://docs.aws.amazon.com/transcribe/latest/dg/how-input.html#how-input-audio) in the *Amazon Transcribe Developer Guide*.
   *
   * @public
   */
  MediaEncoding: MediaEncoding | undefined;

  /**
   * The sample rate of the input audio (in hertz). Low-quality audio, such as telephone audio, is typically around 8,000 Hz. High-quality audio typically ranges from 16,000 Hz to 48,000 Hz. Note that the sample rate you specify must match that of your audio.
   *
   * Valid Range: Minimum value of 8000. Maximum value of 48000.
   *
   * @public
   */
  MediaSampleRate: number | undefined;
}

/**
 * A structure that holds the settings for transmitting media files to the Amazon S3 bucket. If specified, the settings in this structure override any settings in `S3RecordingSinkConfiguration`.
 *
 * @public
 */
export interface S3RecordingSinkRuntimeConfiguration {
  /**
   * The URI of the S3 bucket used as the sink.
   *
   * @public
   */
  Destination: string | undefined;

  /**
   * The file format for the media files sent to the Amazon S3 bucket.
   *
   * @public
   */
  RecordingFileFormat: RecordingFileFormat | undefined;
}

/**
 * @public
 */
export interface CreateMediaInsightsPipelineRequest {
  /**
   * The ARN of the pipeline's configuration.
   *
   * @public
   */
  MediaInsightsPipelineConfigurationArn: string | undefined;

  /**
   * The runtime configuration for the Kinesis video stream source of the media insights pipeline.
   *
   * @public
   */
  KinesisVideoStreamSourceRuntimeConfiguration?: KinesisVideoStreamSourceRuntimeConfiguration | undefined;

  /**
   * The runtime metadata for the media insights pipeline. Consists of a key-value map of strings.
   *
   * @public
   */
  MediaInsightsRuntimeMetadata?: Record<string, string> | undefined;

  /**
   * The runtime configuration for the Kinesis video recording stream source.
   *
   * @public
   */
  KinesisVideoStreamRecordingSourceRuntimeConfiguration?: KinesisVideoStreamRecordingSourceRuntimeConfiguration | undefined;

  /**
   * The runtime configuration for the S3 recording sink. If specified, the settings in this structure override any settings in `S3RecordingSinkConfiguration`.
   *
   * @public
   */
  S3RecordingSinkRuntimeConfiguration?: S3RecordingSinkRuntimeConfiguration | undefined;

  /**
   * The tags assigned to the media insights pipeline.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The unique identifier for the media insights pipeline request.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * The status of the pipeline element.
 *
 * @public
 */
export interface MediaInsightsPipelineElementStatus {
  /**
   * The type of status.
   *
   * @public
   */
  Type?: MediaInsightsPipelineConfigurationElementType | undefined;

  /**
   * The element's status.
   *
   * @public
   */
  Status?: MediaPipelineElementStatus | undefined;
}

/**
 * A media pipeline that streams call analytics data.
 *
 * @public
 */
export interface MediaInsightsPipeline {
  /**
   * The ID of a media insights pipeline.
   *
   * @public
   */
  MediaPipelineId?: string | undefined;

  /**
   * The ARN of a media insights pipeline.
   *
   * @public
   */
  MediaPipelineArn?: string | undefined;

  /**
   * The ARN of a media insight pipeline's configuration settings.
   *
   * @public
   */
  MediaInsightsPipelineConfigurationArn?: string | undefined;

  /**
   * The status of a media insights pipeline.
   *
   * @public
   */
  Status?: MediaPipelineStatus | undefined;

  /**
   * The configuration settings for a Kinesis runtime video stream in a media insights pipeline.
   *
   * @public
   */
  KinesisVideoStreamSourceRuntimeConfiguration?: KinesisVideoStreamSourceRuntimeConfiguration | undefined;

  /**
   * The runtime metadata of a media insights pipeline.
   *
   * @public
   */
  MediaInsightsRuntimeMetadata?: Record<string, string> | undefined;

  /**
   * The runtime configuration settings for a Kinesis recording video stream in a media insights pipeline.
   *
   * @public
   */
  KinesisVideoStreamRecordingSourceRuntimeConfiguration?: KinesisVideoStreamRecordingSourceRuntimeConfiguration | undefined;

  /**
   * The runtime configuration of the Amazon S3 bucket that stores recordings in a media insights pipeline.
   *
   * @public
   */
  S3RecordingSinkRuntimeConfiguration?: S3RecordingSinkRuntimeConfiguration | undefined;

  /**
   * The time at which the media insights pipeline was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The statuses that the elements in a media insights pipeline can have during data processing.
   *
   * @public
   */
  ElementStatuses?: MediaInsightsPipelineElementStatus[] | undefined;
}

/**
 * @public
 */
export interface CreateMediaInsightsPipelineResponse {
  /**
   * The media insights pipeline object.
   *
   * @public
   */
  MediaInsightsPipeline: MediaInsightsPipeline | undefined;
}

/**
 * A structure that contains the configuration settings for a Kinesis Data Stream sink.
 *
 * @public
 */
export interface KinesisDataStreamSinkConfiguration {
  /**
   * The ARN of the sink.
   *
   * @public
   */
  InsightsTarget?: string | undefined;
}

/**
 * A structure that contains the configuration settings for an AWS Lambda function's data sink.
 *
 * @public
 */
export interface LambdaFunctionSinkConfiguration {
  /**
   * The ARN of the sink.
   *
   * @public
   */
  InsightsTarget?: string | undefined;
}

/**
 * The structure that holds the settings for transmitting media to the Amazon S3 bucket. These values are used as defaults if `S3RecordingSinkRuntimeConfiguration` is not specified.
 *
 * @public
 */
export interface S3RecordingSinkConfiguration {
  /**
   * The default URI of the Amazon S3 bucket used as the recording sink.
   *
   * @public
   */
  Destination?: string | undefined;

  /**
   * The default file format for the media files sent to the Amazon S3 bucket.
   *
   * @public
   */
  RecordingFileFormat?: RecordingFileFormat | undefined;
}

/**
 * The configuration settings for the SNS topic sink.
 *
 * @public
 */
export interface SnsTopicSinkConfiguration {
  /**
   * The ARN of the SNS sink.
   *
   * @public
   */
  InsightsTarget?: string | undefined;
}

/**
 * The configuration settings for the SQS sink.
 *
 * @public
 */
export interface SqsQueueSinkConfiguration {
  /**
   * The ARN of the SQS sink.
   *
   * @public
   */
  InsightsTarget?: string | undefined;
}

/**
 * The configuration settings for a voice analytics processor.
 *
 * @public
 */
export interface VoiceAnalyticsProcessorConfiguration {
  /**
   * The status of the speaker search task.
   *
   * @public
   */
  SpeakerSearchStatus?: VoiceAnalyticsConfigurationStatus | undefined;

  /**
   * The status of the voice tone analysis task.
   *
   * @public
   */
  VoiceToneAnalysisStatus?: VoiceAnalyticsConfigurationStatus | undefined;
}

/**
 * A static structure that contains the configuration data for a `VoiceEnhancementSinkConfiguration` element.
 *
 * @public
 */
export interface VoiceEnhancementSinkConfiguration {
  /**
   * Disables the `VoiceEnhancementSinkConfiguration` element.
   *
   * @public
   */
  Disabled?: boolean | undefined;
}

/**
 * An element in a media insights pipeline configuration.
 *
 * @public
 */
export interface MediaInsightsPipelineConfigurationElement {
  /**
   * The element type.
   *
   * @public
   */
  Type: MediaInsightsPipelineConfigurationElementType | undefined;

  /**
   * The analytics configuration settings for transcribing audio in a media insights pipeline configuration element.
   *
   * @public
   */
  AmazonTranscribeCallAnalyticsProcessorConfiguration?: AmazonTranscribeCallAnalyticsProcessorConfiguration | undefined;

  /**
   * The transcription processor configuration settings in a media insights pipeline configuration element.
   *
   * @public
   */
  AmazonTranscribeProcessorConfiguration?: AmazonTranscribeProcessorConfiguration | undefined;

  /**
   * The configuration settings for the Kinesis Data Stream Sink in a media insights pipeline configuration element.
   *
   * @public
   */
  KinesisDataStreamSinkConfiguration?: KinesisDataStreamSinkConfiguration | undefined;

  /**
   * The configuration settings for the Amazon S3 recording bucket in a media insights pipeline configuration element.
   *
   * @public
   */
  S3RecordingSinkConfiguration?: S3RecordingSinkConfiguration | undefined;

  /**
   * The voice analytics configuration settings in a media insights pipeline configuration element.
   *
   * @public
   */
  VoiceAnalyticsProcessorConfiguration?: VoiceAnalyticsProcessorConfiguration | undefined;

  /**
   * The configuration settings for the Amazon Web Services Lambda sink in a media insights pipeline configuration element.
   *
   * @public
   */
  LambdaFunctionSinkConfiguration?: LambdaFunctionSinkConfiguration | undefined;

  /**
   * The configuration settings for an SQS queue sink in a media insights pipeline configuration element.
   *
   * @public
   */
  SqsQueueSinkConfiguration?: SqsQueueSinkConfiguration | undefined;

  /**
   * The configuration settings for an SNS topic sink in a media insights pipeline configuration element.
   *
   * @public
   */
  SnsTopicSinkConfiguration?: SnsTopicSinkConfiguration | undefined;

  /**
   * The configuration settings for voice enhancement sink in a media insights pipeline configuration element.
   *
   * @public
   */
  VoiceEnhancementSinkConfiguration?: VoiceEnhancementSinkConfiguration | undefined;
}

/**
 * A structure that contains the configuration settings for an issue detection task.
 *
 * @public
 */
export interface IssueDetectionConfiguration {
  /**
   * The name of the issue detection rule.
   *
   * @public
   */
  RuleName: string | undefined;
}

/**
 * A structure that contains the settings for a keyword match task.
 *
 * @public
 */
export interface KeywordMatchConfiguration {
  /**
   * The name of the keyword match rule.
   *
   * @public
   */
  RuleName: string | undefined;

  /**
   * The keywords or phrases that you want to match.
   *
   * @public
   */
  Keywords: string[] | undefined;

  /**
   * Matches keywords or phrases on their presence or absence. If set to `TRUE`, the rule matches when all the specified keywords or phrases are absent. Default: `FALSE`.
   *
   * @public
   */
  Negate?: boolean | undefined;
}

/**
 * A structure that contains the configuration settings for a sentiment analysis task.
 *
 * @public
 */
export interface SentimentConfiguration {
  /**
   * The name of the rule in the sentiment configuration.
   *
   * @public
   */
  RuleName: string | undefined;

  /**
   * The type of sentiment, `POSITIVE`, `NEGATIVE`, or `NEUTRAL`.
   *
   * @public
   */
  SentimentType: SentimentType | undefined;

  /**
   * Specifies the analysis interval.
   *
   * @public
   */
  TimePeriod: number | undefined;
}

/**
 * Specifies the words or phrases that trigger an alert.
 *
 * @public
 */
export interface RealTimeAlertRule {
  /**
   * The type of alert rule.
   *
   * @public
   */
  Type: RealTimeAlertRuleType | undefined;

  /**
   * Specifies the settings for matching the keywords in a real-time alert rule.
   *
   * @public
   */
  KeywordMatchConfiguration?: KeywordMatchConfiguration | undefined;

  /**
   * Specifies the settings for predicting sentiment in a real-time alert rule.
   *
   * @public
   */
  SentimentConfiguration?: SentimentConfiguration | undefined;

  /**
   * Specifies the issue detection settings for a real-time alert rule.
   *
   * @public
   */
  IssueDetectionConfiguration?: IssueDetectionConfiguration | undefined;
}

/**
 * A structure that contains the configuration settings for real-time alerts.
 *
 * @public
 */
export interface RealTimeAlertConfiguration {
  /**
   * Turns off real-time alerts.
   *
   * @public
   */
  Disabled?: boolean | undefined;

  /**
   * The rules in the alert. Rules specify the words or phrases that you want to be notified about.
   *
   * @public
   */
  Rules?: RealTimeAlertRule[] | undefined;
}

/**
 * @public
 */
export interface CreateMediaInsightsPipelineConfigurationRequest {
  /**
   * The name of the media insights pipeline configuration.
   *
   * @public
   */
  MediaInsightsPipelineConfigurationName: string | undefined;

  /**
   * The ARN of the role used by the service to access Amazon Web Services resources, including `Transcribe` and `Transcribe Call Analytics`, on the caller’s behalf.
   *
   * @public
   */
  ResourceAccessRoleArn: string | undefined;

  /**
   * The configuration settings for the real-time alerts in a media insights pipeline configuration.
   *
   * @public
   */
  RealTimeAlertConfiguration?: RealTimeAlertConfiguration | undefined;

  /**
   * The elements in the request, such as a processor for Amazon Transcribe or a sink for a Kinesis Data Stream.
   *
   * @public
   */
  Elements: MediaInsightsPipelineConfigurationElement[] | undefined;

  /**
   * The tags assigned to the media insights pipeline configuration.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The unique identifier for the media insights pipeline configuration request.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * A structure that contains the configuration settings for a media insights pipeline.
 *
 * @public
 */
export interface MediaInsightsPipelineConfiguration {
  /**
   * The name of the configuration.
   *
   * @public
   */
  MediaInsightsPipelineConfigurationName?: string | undefined;

  /**
   * The ARN of the configuration.
   *
   * @public
   */
  MediaInsightsPipelineConfigurationArn?: string | undefined;

  /**
   * The ARN of the role used by the service to access Amazon Web Services resources.
   *
   * @public
   */
  ResourceAccessRoleArn?: string | undefined;

  /**
   * Lists the rules that trigger a real-time alert.
   *
   * @public
   */
  RealTimeAlertConfiguration?: RealTimeAlertConfiguration | undefined;

  /**
   * The elements in the configuration.
   *
   * @public
   */
  Elements?: MediaInsightsPipelineConfigurationElement[] | undefined;

  /**
   * The ID of the configuration.
   *
   * @public
   */
  MediaInsightsPipelineConfigurationId?: string | undefined;

  /**
   * The time at which the configuration was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The time at which the configuration was last updated.
   *
   * @public
   */
  UpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface CreateMediaInsightsPipelineConfigurationResponse {
  /**
   * The configuration settings for the media insights pipeline.
   *
   * @public
   */
  MediaInsightsPipelineConfiguration?: MediaInsightsPipelineConfiguration | undefined;
}

/**
 * The media pipeline's RTMP configuration object.
 *
 * @public
 */
export interface LiveConnectorRTMPConfiguration {
  /**
   * The URL of the RTMP configuration.
   *
   * @public
   */
  Url: string | undefined;

  /**
   * The audio channels set for the RTMP configuration
   *
   * @public
   */
  AudioChannels?: AudioChannelsOption | undefined;

  /**
   * The audio sample rate set for the RTMP configuration. Default: 48000.
   *
   * @public
   */
  AudioSampleRate?: string | undefined;
}

/**
 * The media pipeline's sink configuration settings.
 *
 * @public
 */
export interface LiveConnectorSinkConfiguration {
  /**
   * The sink configuration's sink type.
   *
   * @public
   */
  SinkType: LiveConnectorSinkType | undefined;

  /**
   * The sink configuration's RTMP configuration settings.
   *
   * @public
   */
  RTMPConfiguration: LiveConnectorRTMPConfiguration | undefined;
}

/**
 * The media pipeline's configuration object.
 *
 * @public
 */
export interface ChimeSdkMeetingLiveConnectorConfiguration {
  /**
   * The configuration object's Chime SDK meeting ARN.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The configuration object's multiplex type.
   *
   * @public
   */
  MuxType: LiveConnectorMuxType | undefined;

  /**
   * The media pipeline's composited video.
   *
   * @public
   */
  CompositedVideo?: CompositedVideoArtifactsConfiguration | undefined;

  /**
   * The source configuration settings of the media pipeline's configuration object.
   *
   * @public
   */
  SourceConfiguration?: SourceConfiguration | undefined;
}

/**
 * The data source configuration object of a streaming media pipeline.
 *
 * @public
 */
export interface LiveConnectorSourceConfiguration {
  /**
   * The source configuration's media source type.
   *
   * @public
   */
  SourceType: LiveConnectorSourceType | undefined;

  /**
   * The configuration settings of the connector pipeline.
   *
   * @public
   */
  ChimeSdkMeetingLiveConnectorConfiguration: ChimeSdkMeetingLiveConnectorConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateMediaLiveConnectorPipelineRequest {
  /**
   * The media live connector pipeline's data sources.
   *
   * @public
   */
  Sources: LiveConnectorSourceConfiguration[] | undefined;

  /**
   * The media live connector pipeline's data sinks.
   *
   * @public
   */
  Sinks: LiveConnectorSinkConfiguration[] | undefined;

  /**
   * The token assigned to the client making the request.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The tags associated with the media live connector pipeline.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * The connector pipeline.
 *
 * @public
 */
export interface MediaLiveConnectorPipeline {
  /**
   * The connector pipeline's data sources.
   *
   * @public
   */
  Sources?: LiveConnectorSourceConfiguration[] | undefined;

  /**
   * The connector pipeline's data sinks.
   *
   * @public
   */
  Sinks?: LiveConnectorSinkConfiguration[] | undefined;

  /**
   * The connector pipeline's ID.
   *
   * @public
   */
  MediaPipelineId?: string | undefined;

  /**
   * The connector pipeline's ARN.
   *
   * @public
   */
  MediaPipelineArn?: string | undefined;

  /**
   * The connector pipeline's status.
   *
   * @public
   */
  Status?: MediaPipelineStatus | undefined;

  /**
   * The time at which the connector pipeline was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The time at which the connector pipeline was last updated.
   *
   * @public
   */
  UpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface CreateMediaLiveConnectorPipelineResponse {
  /**
   * The new media live connector pipeline.
   *
   * @public
   */
  MediaLiveConnectorPipeline?: MediaLiveConnectorPipeline | undefined;
}

/**
 * The configuration of an Kinesis video stream.
 *
 * > **Note:**
 * >
 * > If a meeting uses an opt-in Region as its [MediaRegion](https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_meeting-chime_CreateMeeting.html#chimesdk-meeting-chime_CreateMeeting-request-MediaRegion), the KVS stream must be in that same Region. For example, if a meeting uses the `af-south-1` Region, the KVS stream must also be in `af-south-1`. However, if the meeting uses a Region that AWS turns on by default, the KVS stream can be in any available Region, including an opt-in Region. For example, if the meeting uses `ca-central-1`, the KVS stream can be in `eu-west-2`, `us-east-1`, `af-south-1`, or any other Region that the Amazon Chime SDK supports.
 * >
 * > To learn which AWS Region a meeting uses, call the [GetMeeting](https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_meeting-chime_GetMeeting.html) API and use the [MediaRegion](https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_meeting-chime_CreateMeeting.html#chimesdk-meeting-chime_CreateMeeting-request-MediaRegion) parameter from the response.
 * >
 * > For more information about opt-in Regions, refer to [Available Regions](https://docs.aws.amazon.com/chime-sdk/latest/dg/sdk-available-regions.html) in the *Amazon Chime SDK Developer Guide*, and [Specify which AWS Regions your account can use](https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-regions.html#rande-manage-enable.html), in the *AWS Account Management Reference Guide*.
 *
 * @public
 */
export interface KinesisVideoStreamConfiguration {
  /**
   * The Amazon Web Services Region of the video stream.
   *
   * @public
   */
  Region: string | undefined;

  /**
   * The amount of time that data is retained.
   *
   * @public
   */
  DataRetentionInHours?: number | undefined;
}

/**
 * @public
 */
export interface CreateMediaPipelineKinesisVideoStreamPoolRequest {
  /**
   * The configuration settings for the stream.
   *
   * @public
   */
  StreamConfiguration: KinesisVideoStreamConfiguration | undefined;

  /**
   * The name of the pool.
   *
   * @public
   */
  PoolName: string | undefined;

  /**
   * The token assigned to the client making the request.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The tags assigned to the stream pool.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * The video stream pool configuration object.
 *
 * @public
 */
export interface KinesisVideoStreamPoolConfiguration {
  /**
   * The ARN of the video stream pool configuration.
   *
   * @public
   */
  PoolArn?: string | undefined;

  /**
   * The name of the video stream pool configuration.
   *
   * @public
   */
  PoolName?: string | undefined;

  /**
   * The ID of the video stream pool in the configuration.
   *
   * @public
   */
  PoolId?: string | undefined;

  /**
   * The status of the video stream pool in the configuration.
   *
   * @public
   */
  PoolStatus?: KinesisVideoStreamPoolStatus | undefined;

  /**
   * The size of the video stream pool in the configuration.
   *
   * @public
   */
  PoolSize?: number | undefined;

  /**
   * The Kinesis video stream pool configuration object.
   *
   * @public
   */
  StreamConfiguration?: KinesisVideoStreamConfiguration | undefined;

  /**
   * The time at which the configuration was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The time at which the configuration was updated.
   *
   * @public
   */
  UpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface CreateMediaPipelineKinesisVideoStreamPoolResponse {
  /**
   * The configuration for applying the streams to the pool.
   *
   * > **Note:**
   *
   * @public
   */
  KinesisVideoStreamPoolConfiguration?: KinesisVideoStreamPoolConfiguration | undefined;
}

/**
 * Structure that contains the settings for a media stream sink.
 *
 * @public
 */
export interface MediaStreamSink {
  /**
   * The ARN of the Kinesis Video Stream pool returned by the CreateMediaPipelineKinesisVideoStreamPool API.
   *
   * @public
   */
  SinkArn: string | undefined;

  /**
   * The media stream sink's type.
   *
   * @public
   */
  SinkType: MediaStreamPipelineSinkType | undefined;

  /**
   * Specifies the number of streams that the sink can accept.
   *
   * @public
   */
  ReservedStreamCapacity: number | undefined;

  /**
   * The media stream sink's media stream type.
   *
   * @public
   */
  MediaStreamType: MediaStreamType | undefined;
}

/**
 * Structure that contains the settings for media stream sources.
 *
 * @public
 */
export interface MediaStreamSource {
  /**
   * The type of media stream source.
   *
   * @public
   */
  SourceType: MediaPipelineSourceType | undefined;

  /**
   * The ARN of the meeting.
   *
   * @public
   */
  SourceArn: string | undefined;
}

/**
 * @public
 */
export interface CreateMediaStreamPipelineRequest {
  /**
   * The data sources for the media pipeline.
   *
   * @public
   */
  Sources: MediaStreamSource[] | undefined;

  /**
   * The data sink for the media pipeline.
   *
   * @public
   */
  Sinks: MediaStreamSink[] | undefined;

  /**
   * The token assigned to the client making the request.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The tags assigned to the media pipeline.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Structure that contains the settings for a media stream pipeline.
 *
 * @public
 */
export interface MediaStreamPipeline {
  /**
   * The ID of the media stream pipeline
   *
   * @public
   */
  MediaPipelineId?: string | undefined;

  /**
   * The ARN of the media stream pipeline.
   *
   * @public
   */
  MediaPipelineArn?: string | undefined;

  /**
   * The time at which the media stream pipeline was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The time at which the media stream pipeline was updated.
   *
   * @public
   */
  UpdatedTimestamp?: Date | undefined;

  /**
   * The status of the media stream pipeline.
   *
   * @public
   */
  Status?: MediaPipelineStatus | undefined;

  /**
   * The media stream pipeline's data sources.
   *
   * @public
   */
  Sources?: MediaStreamSource[] | undefined;

  /**
   * The media stream pipeline's data sinks.
   *
   * @public
   */
  Sinks?: MediaStreamSink[] | undefined;
}

/**
 * @public
 */
export interface CreateMediaStreamPipelineResponse {
  /**
   * The requested media pipeline.
   *
   * @public
   */
  MediaStreamPipeline?: MediaStreamPipeline | undefined;
}

/**
 * @public
 */
export interface DeleteMediaCapturePipelineRequest {
  /**
   * The ID of the media pipeline being deleted.
   *
   * @public
   */
  MediaPipelineId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMediaInsightsPipelineConfigurationRequest {
  /**
   * The unique identifier of the resource to be deleted. Valid values include the name and ARN of the media insights pipeline configuration.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteMediaPipelineRequest {
  /**
   * The ID of the media pipeline to delete.
   *
   * @public
   */
  MediaPipelineId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMediaPipelineKinesisVideoStreamPoolRequest {
  /**
   * The unique identifier of the requested resource. Valid values include the name and ARN of the media pipeline Kinesis Video Stream pool.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetMediaCapturePipelineRequest {
  /**
   * The ID of the pipeline that you want to get.
   *
   * @public
   */
  MediaPipelineId: string | undefined;
}

/**
 * @public
 */
export interface GetMediaCapturePipelineResponse {
  /**
   * The media pipeline object.
   *
   * @public
   */
  MediaCapturePipeline?: MediaCapturePipeline | undefined;
}

/**
 * @public
 */
export interface GetMediaInsightsPipelineConfigurationRequest {
  /**
   * The unique identifier of the requested resource. Valid values include the name and ARN of the media insights pipeline configuration.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetMediaInsightsPipelineConfigurationResponse {
  /**
   * The requested media insights pipeline configuration.
   *
   * @public
   */
  MediaInsightsPipelineConfiguration?: MediaInsightsPipelineConfiguration | undefined;
}

/**
 * @public
 */
export interface GetMediaPipelineRequest {
  /**
   * The ID of the pipeline that you want to get.
   *
   * @public
   */
  MediaPipelineId: string | undefined;
}

/**
 * A pipeline consisting of a media capture, media concatenation, or live-streaming pipeline.
 *
 * @public
 */
export interface MediaPipeline {
  /**
   * A pipeline that enables users to capture audio and video.
   *
   * @public
   */
  MediaCapturePipeline?: MediaCapturePipeline | undefined;

  /**
   * The connector pipeline of the media pipeline.
   *
   * @public
   */
  MediaLiveConnectorPipeline?: MediaLiveConnectorPipeline | undefined;

  /**
   * The media concatenation pipeline in a media pipeline.
   *
   * @public
   */
  MediaConcatenationPipeline?: MediaConcatenationPipeline | undefined;

  /**
   * The media insights pipeline of a media pipeline.
   *
   * @public
   */
  MediaInsightsPipeline?: MediaInsightsPipeline | undefined;

  /**
   * Designates a media pipeline as a media stream pipeline.
   *
   * @public
   */
  MediaStreamPipeline?: MediaStreamPipeline | undefined;
}

/**
 * @public
 */
export interface GetMediaPipelineResponse {
  /**
   * The media pipeline object.
   *
   * @public
   */
  MediaPipeline?: MediaPipeline | undefined;
}

/**
 * @public
 */
export interface GetMediaPipelineKinesisVideoStreamPoolRequest {
  /**
   * The unique identifier of the requested resource. Valid values include the name and ARN of the media pipeline Kinesis Video Stream pool.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetMediaPipelineKinesisVideoStreamPoolResponse {
  /**
   * The video stream pool configuration object.
   *
   * @public
   */
  KinesisVideoStreamPoolConfiguration?: KinesisVideoStreamPoolConfiguration | undefined;
}

/**
 * @public
 */
export interface GetSpeakerSearchTaskRequest {
  /**
   * The unique identifier of the resource to be updated. Valid values include the ID and ARN of the media insights pipeline.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The ID of the speaker search task.
   *
   * @public
   */
  SpeakerSearchTaskId: string | undefined;
}

/**
 * A representation of an asynchronous request to perform speaker search analysis on a media insights pipeline.
 *
 * @public
 */
export interface SpeakerSearchTask {
  /**
   * The speaker search task ID.
   *
   * @public
   */
  SpeakerSearchTaskId?: string | undefined;

  /**
   * The status of the speaker search task.
   *
   * @public
   */
  SpeakerSearchTaskStatus?: MediaPipelineTaskStatus | undefined;

  /**
   * The time at which a speaker search task was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The time at which a speaker search task was updated.
   *
   * @public
   */
  UpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface GetSpeakerSearchTaskResponse {
  /**
   * The details of the speaker search task.
   *
   * @public
   */
  SpeakerSearchTask?: SpeakerSearchTask | undefined;
}

/**
 * @public
 */
export interface GetVoiceToneAnalysisTaskRequest {
  /**
   * The unique identifier of the resource to be updated. Valid values include the ID and ARN of the media insights pipeline.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The ID of the voice tone analysis task.
   *
   * @public
   */
  VoiceToneAnalysisTaskId: string | undefined;
}

/**
 * A representation of an asynchronous request to perform voice tone analysis on a media insights pipeline.
 *
 * @public
 */
export interface VoiceToneAnalysisTask {
  /**
   * The ID of the voice tone analysis task.
   *
   * @public
   */
  VoiceToneAnalysisTaskId?: string | undefined;

  /**
   * The status of a voice tone analysis task.
   *
   * @public
   */
  VoiceToneAnalysisTaskStatus?: MediaPipelineTaskStatus | undefined;

  /**
   * The time at which a voice tone analysis task was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The time at which a voice tone analysis task was updated.
   *
   * @public
   */
  UpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface GetVoiceToneAnalysisTaskResponse {
  /**
   * The details of the voice tone analysis task.
   *
   * @public
   */
  VoiceToneAnalysisTask?: VoiceToneAnalysisTask | undefined;
}

/**
 * @public
 */
export interface ListMediaCapturePipelinesRequest {
  /**
   * The token used to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call. Valid Range: 1 - 99.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The summary data of a media capture pipeline.
 *
 * @public
 */
export interface MediaCapturePipelineSummary {
  /**
   * The ID of the media pipeline in the summary.
   *
   * @public
   */
  MediaPipelineId?: string | undefined;

  /**
   * The ARN of the media pipeline in the summary.
   *
   * @public
   */
  MediaPipelineArn?: string | undefined;
}

/**
 * @public
 */
export interface ListMediaCapturePipelinesResponse {
  /**
   * The media pipeline objects in the list.
   *
   * @public
   */
  MediaCapturePipelines?: MediaCapturePipelineSummary[] | undefined;

  /**
   * The token used to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMediaInsightsPipelineConfigurationsRequest {
  /**
   * The token used to return the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A summary of the media insights pipeline configuration.
 *
 * @public
 */
export interface MediaInsightsPipelineConfigurationSummary {
  /**
   * The name of the media insights pipeline configuration.
   *
   * @public
   */
  MediaInsightsPipelineConfigurationName?: string | undefined;

  /**
   * The ID of the media insights pipeline configuration.
   *
   * @public
   */
  MediaInsightsPipelineConfigurationId?: string | undefined;

  /**
   * The ARN of the media insights pipeline configuration.
   *
   * @public
   */
  MediaInsightsPipelineConfigurationArn?: string | undefined;
}

/**
 * @public
 */
export interface ListMediaInsightsPipelineConfigurationsResponse {
  /**
   * The requested list of media insights pipeline configurations.
   *
   * @public
   */
  MediaInsightsPipelineConfigurations?: MediaInsightsPipelineConfigurationSummary[] | undefined;

  /**
   * The token used to return the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMediaPipelineKinesisVideoStreamPoolsRequest {
  /**
   * The token used to return the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A summary of the Kinesis video stream pool.
 *
 * @public
 */
export interface KinesisVideoStreamPoolSummary {
  /**
   * The name of the video stream pool.
   *
   * @public
   */
  PoolName?: string | undefined;

  /**
   * The ID of the video stream pool.
   *
   * @public
   */
  PoolId?: string | undefined;

  /**
   * The ARN of the video stream pool.
   *
   * @public
   */
  PoolArn?: string | undefined;
}

/**
 * @public
 */
export interface ListMediaPipelineKinesisVideoStreamPoolsResponse {
  /**
   * The list of video stream pools.
   *
   * @public
   */
  KinesisVideoStreamPools?: KinesisVideoStreamPoolSummary[] | undefined;

  /**
   * The token used to return the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMediaPipelinesRequest {
  /**
   * The token used to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call. Valid Range: 1 - 99.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The summary of the media pipeline.
 *
 * @public
 */
export interface MediaPipelineSummary {
  /**
   * The ID of the media pipeline in the summary.
   *
   * @public
   */
  MediaPipelineId?: string | undefined;

  /**
   * The ARN of the media pipeline in the summary.
   *
   * @public
   */
  MediaPipelineArn?: string | undefined;
}

/**
 * @public
 */
export interface ListMediaPipelinesResponse {
  /**
   * The media pipeline objects in the list.
   *
   * @public
   */
  MediaPipelines?: MediaPipelineSummary[] | undefined;

  /**
   * The token used to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The ARN of the media pipeline associated with any tags. The ARN consists of the pipeline's region, resource ID, and pipeline ID.
   *
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags associated with the specified media pipeline.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * The task configuration settings for the Kinesis video stream source.
 *
 * @public
 */
export interface KinesisVideoStreamSourceTaskConfiguration {
  /**
   * The ARN of the stream.
   *
   * @public
   */
  StreamArn: string | undefined;

  /**
   * The channel ID.
   *
   * @public
   */
  ChannelId: number | undefined;

  /**
   * The unique identifier of the fragment to begin processing.
   *
   * @public
   */
  FragmentNumber?: string | undefined;
}

/**
 * @public
 */
export interface StartSpeakerSearchTaskRequest {
  /**
   * The unique identifier of the resource to be updated. Valid values include the ID and ARN of the media insights pipeline.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The ARN of the voice profile domain that will store the voice profile.
   *
   * @public
   */
  VoiceProfileDomainArn: string | undefined;

  /**
   * The task configuration for the Kinesis video stream source of the media insights pipeline.
   *
   * @public
   */
  KinesisVideoStreamSourceTaskConfiguration?: KinesisVideoStreamSourceTaskConfiguration | undefined;

  /**
   * The unique identifier for the client request. Use a different token for different speaker search tasks.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface StartSpeakerSearchTaskResponse {
  /**
   * The details of the speaker search task.
   *
   * @public
   */
  SpeakerSearchTask?: SpeakerSearchTask | undefined;
}

/**
 * @public
 */
export interface StartVoiceToneAnalysisTaskRequest {
  /**
   * The unique identifier of the resource to be updated. Valid values include the ID and ARN of the media insights pipeline.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The language code.
   *
   * @public
   */
  LanguageCode: VoiceAnalyticsLanguageCode | undefined;

  /**
   * The task configuration for the Kinesis video stream source of the media insights pipeline.
   *
   * @public
   */
  KinesisVideoStreamSourceTaskConfiguration?: KinesisVideoStreamSourceTaskConfiguration | undefined;

  /**
   * The unique identifier for the client request. Use a different token for different voice tone analysis tasks.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface StartVoiceToneAnalysisTaskResponse {
  /**
   * The details of the voice tone analysis task.
   *
   * @public
   */
  VoiceToneAnalysisTask?: VoiceToneAnalysisTask | undefined;
}

/**
 * @public
 */
export interface StopSpeakerSearchTaskRequest {
  /**
   * The unique identifier of the resource to be updated. Valid values include the ID and ARN of the media insights pipeline.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The speaker search task ID.
   *
   * @public
   */
  SpeakerSearchTaskId: string | undefined;
}

/**
 * @public
 */
export interface StopVoiceToneAnalysisTaskRequest {
  /**
   * The unique identifier of the resource to be updated. Valid values include the ID and ARN of the media insights pipeline.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The ID of the voice tone analysis task.
   *
   * @public
   */
  VoiceToneAnalysisTaskId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of the media pipeline associated with any tags. The ARN consists of the pipeline's endpoint region, resource ID, and pipeline ID.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The tags associated with the specified media pipeline.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The ARN of the pipeline that you want to untag.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The key/value pairs in the tag that you want to remove.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateMediaInsightsPipelineConfigurationRequest {
  /**
   * The unique identifier for the resource to be updated. Valid values include the name and ARN of the media insights pipeline configuration.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The ARN of the role used by the service to access Amazon Web Services resources.
   *
   * @public
   */
  ResourceAccessRoleArn: string | undefined;

  /**
   * The configuration settings for real-time alerts for the media insights pipeline.
   *
   * @public
   */
  RealTimeAlertConfiguration?: RealTimeAlertConfiguration | undefined;

  /**
   * The elements in the request, such as a processor for Amazon Transcribe or a sink for a Kinesis Data Stream..
   *
   * @public
   */
  Elements: MediaInsightsPipelineConfigurationElement[] | undefined;
}

/**
 * @public
 */
export interface UpdateMediaInsightsPipelineConfigurationResponse {
  /**
   * The updated configuration settings.
   *
   * @public
   */
  MediaInsightsPipelineConfiguration?: MediaInsightsPipelineConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateMediaInsightsPipelineStatusRequest {
  /**
   * The unique identifier of the resource to be updated. Valid values include the ID and ARN of the media insights pipeline.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The requested status of the media insights pipeline.
   *
   * @public
   */
  UpdateStatus: MediaPipelineStatusUpdate | undefined;
}

/**
 * The updated Kinesis video stream configuration object.
 *
 * @public
 */
export interface KinesisVideoStreamConfigurationUpdate {
  /**
   * The updated time that data is retained.
   *
   * @public
   */
  DataRetentionInHours?: number | undefined;
}

/**
 * @public
 */
export interface UpdateMediaPipelineKinesisVideoStreamPoolRequest {
  /**
   * The unique identifier of the requested resource. Valid values include the name and ARN of the media pipeline Kinesis Video Stream pool.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The configuration settings for the video stream.
   *
   * @public
   */
  StreamConfiguration?: KinesisVideoStreamConfigurationUpdate | undefined;
}

/**
 * @public
 */
export interface UpdateMediaPipelineKinesisVideoStreamPoolResponse {
  /**
   * The video stream pool configuration object.
   *
   * @public
   */
  KinesisVideoStreamPoolConfiguration?: KinesisVideoStreamPoolConfiguration | undefined;
}
