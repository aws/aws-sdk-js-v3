// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { ChimeSDKMediaPipelinesServiceException as __BaseException } from "./ChimeSDKMediaPipelinesServiceException";

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
 * <p>Defines the configuration for an <code>ActiveSpeakerOnly</code> video tile.</p>
 */
export interface ActiveSpeakerOnlyConfiguration {
  /**
   * @public
   * <p>The position of the <code>ActiveSpeakerOnly</code> video tile.</p>
   */
  ActiveSpeakerPosition?: ActiveSpeakerPosition;
}

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
 * <p>Allows you to specify additional settings for your Call Analytics post-call request, including output locations for your redacted transcript, which IAM role to use, and which encryption key to use.</p>
 *          <p>
 *             <code>DataAccessRoleArn</code> and <code>OutputLocation</code> are required fields.</p>
 *          <p>
 *             <code>PostCallAnalyticsSettings</code> provides the same insights as a Call Analytics post-call transcription. For more information, refer to
 *          <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-post-call.html">Post-call analytics with real-time transcriptions</a> in the <i>Amazon Transcribe Developer Guide</i>.</p>
 */
export interface PostCallAnalyticsSettings {
  /**
   * @public
   * <p>The URL of the Amazon S3 bucket that contains the post-call data.</p>
   */
  OutputLocation: string | undefined;

  /**
   * @public
   * <p>The ARN of the role used by Amazon Web Services Transcribe to upload your post call analysis. For more information, see
   *          <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-post-call.html">Post-call analytics with real-time transcriptions</a> in the <i>Amazon Transcribe Developer Guide</i>.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * @public
   * <p>The content redaction output settings for a post-call analysis task.</p>
   */
  ContentRedactionOutput?: ContentRedactionOutput;

  /**
   * @public
   * <p>The ID of the KMS (Key Management Service) key used to encrypt the output.</p>
   */
  OutputEncryptionKMSKeyId?: string;
}

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
 * <p>A structure that contains the configuration settings for an Amazon Transcribe call
 *          analytics processor.</p>
 */
export interface AmazonTranscribeCallAnalyticsProcessorConfiguration {
  /**
   * @public
   * <p>The language code in the configuration.</p>
   */
  LanguageCode: CallAnalyticsLanguageCode | undefined;

  /**
   * @public
   * <p>Specifies the name of the custom vocabulary to use when processing a transcription. Note
   *          that vocabulary names are case sensitive.</p>
   *          <p>If the language of the specified custom vocabulary doesn't match the language identified in your media, the custom vocabulary is not applied to your transcription.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html">Custom vocabularies</a> in the <i>Amazon Transcribe Developer Guide</i>.</p>
   *          <p>Length Constraints: Minimum length of 1. Maximum length of 200. </p>
   */
  VocabularyName?: string;

  /**
   * @public
   * <p>Specifies the name of the custom vocabulary filter to use when processing a
   *          transcription. Note that vocabulary filter names are case sensitive.</p>
   *          <p>If the language of the specified custom vocabulary filter doesn't match the language identified in your media, the vocabulary filter is not applied to your transcription.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/vocabulary-filtering.html">Using vocabulary filtering with unwanted words</a>
   *          in the <i>Amazon Transcribe Developer Guide</i>.</p>
   *          <p>Length Constraints: Minimum length of 1. Maximum length of 200. </p>
   */
  VocabularyFilterName?: string;

  /**
   * @public
   * <p>Specifies how to apply a vocabulary filter to a transcript.</p>
   *          <p>To replace words with <b>***</b>, choose <code>mask</code>.</p>
   *          <p>To delete words, choose <code>remove</code>.</p>
   *          <p>To flag words without changing them, choose <code>tag</code>. </p>
   */
  VocabularyFilterMethod?: VocabularyFilterMethod;

  /**
   * @public
   * <p>Specifies the name of the custom language model to use when processing a transcription.
   *          Note that language model names are case sensitive.</p>
   *          <p>The language of the specified language model must match the language code specified
   *          in the transcription request. If the languages don't match, the custom language model isn't
   *          applied. Language mismatches don't generate errors or warnings.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-language-models.html">Custom language models</a> in the <i>Amazon Transcribe Developer Guide</i>.</p>
   */
  LanguageModelName?: string;

  /**
   * @public
   * <p>Enables partial result stabilization for your transcription. Partial result stabilization can reduce latency in your output, but may impact accuracy.
   *          For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html#streaming-partial-result-stabilization">Partial-result stabilization</a>
   *          in the <i>Amazon Transcribe Developer Guide</i>.</p>
   */
  EnablePartialResultsStabilization?: boolean;

  /**
   * @public
   * <p>Specifies the level of stability to use when you enable partial results stabilization
   *             (<code>EnablePartialResultsStabilization</code>).</p>
   *          <p>Low stability provides the highest accuracy. High stability transcribes faster, but with slightly lower accuracy.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html#streaming-partial-result-stabilization">Partial-result stabilization</a>
   *          in the <i>Amazon Transcribe Developer Guide</i>.</p>
   */
  PartialResultsStability?: PartialResultsStability;

  /**
   * @public
   * <p>Labels all personally identifiable information (PII) identified in your transcript.</p>
   *          <p>Content identification is performed at the segment level; PII specified in <code>PiiEntityTypes</code> is flagged upon complete transcription of an audio segment.</p>
   *          <p>You can’t set <code>ContentIdentificationType</code> and <code>ContentRedactionType</code> in the same request. If you do, your request returns a <code>BadRequestException</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/pii-redaction.html">Redacting or identifying personally identifiable information</a>
   *          in the <i>Amazon Transcribe Developer Guide</i>.</p>
   */
  ContentIdentificationType?: ContentType;

  /**
   * @public
   * <p>Redacts all personally identifiable information (PII) identified in your transcript.</p>
   *          <p>Content redaction is performed at the segment level; PII specified in <code>PiiEntityTypes</code> is redacted upon complete transcription of an audio segment.</p>
   *          <p>You can’t set <code>ContentRedactionType</code> and <code>ContentIdentificationType</code> in the same request. If you do, your request returns a <code>BadRequestException</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/pii-redaction.html">Redacting or identifying personally identifiable information</a>
   *          in the <i>Amazon Transcribe Developer Guide</i>.</p>
   */
  ContentRedactionType?: ContentType;

  /**
   * @public
   * <p>Specifies the types of personally identifiable information (PII) to redact from a transcript. You can include as many types as you'd like, or you can select <code>ALL</code>.</p>
   *          <p>To include <code>PiiEntityTypes</code> in your Call Analytics request, you must also include <code>ContentIdentificationType</code> or <code>ContentRedactionType</code>, but you can't include both. </p>
   *          <p>Values must be comma-separated and can include: <code>ADDRESS</code>, <code>BANK_ACCOUNT_NUMBER</code>, <code>BANK_ROUTING</code>, <code>CREDIT_DEBIT_CVV</code>,
   *                <code>CREDIT_DEBIT_EXPIRY</code>, <code>CREDIT_DEBIT_NUMBER</code>, <code>EMAIL</code>,
   *                <code>NAME</code>, <code>PHONE</code>, <code>PIN</code>, <code>SSN</code>, or <code>ALL</code>.</p>
   *          <p>Length Constraints: Minimum length of 1. Maximum length of 300.</p>
   */
  PiiEntityTypes?: string;

  /**
   * @public
   * <p>If true, <code>UtteranceEvents</code> with <code>IsPartial: true</code> are filtered out of the insights target.</p>
   */
  FilterPartialResults?: boolean;

  /**
   * @public
   * <p>The settings for a post-call analysis task in an analytics configuration.</p>
   */
  PostCallAnalyticsSettings?: PostCallAnalyticsSettings;

  /**
   * @public
   * <p>By default, all <code>CategoryEvents</code> are sent to the insights target. If this parameter is specified, only included categories are sent to the insights target. </p>
   */
  CallAnalyticsStreamCategories?: string[];
}

/**
 * @public
 * <p>A structure that contains the configuration settings for an Amazon Transcribe processor.</p>
 */
export interface AmazonTranscribeProcessorConfiguration {
  /**
   * @public
   * <p>The language code that represents the language spoken in your audio.</p>
   *          <p>If you're unsure of the language spoken in your audio, consider using
   *             <code>IdentifyLanguage</code> to enable automatic language identification.</p>
   *          <p>For a list of languages that real-time Call Analytics supports, see the <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported languages table</a>
   *          in the <i>Amazon Transcribe Developer Guide</i>.</p>
   */
  LanguageCode?: CallAnalyticsLanguageCode;

  /**
   * @public
   * <p>The name of the custom vocabulary that you specified in your Call Analytics
   *          request.</p>
   *          <p>Length Constraints: Minimum length of 1. Maximum length of 200.</p>
   */
  VocabularyName?: string;

  /**
   * @public
   * <p>The name of the custom vocabulary filter that you specified in your Call Analytics
   *          request.</p>
   *          <p>Length Constraints: Minimum length of 1. Maximum length of 200.</p>
   */
  VocabularyFilterName?: string;

  /**
   * @public
   * <p>The vocabulary filtering method used in your Call Analytics transcription.</p>
   */
  VocabularyFilterMethod?: VocabularyFilterMethod;

  /**
   * @public
   * <p>Enables speaker partitioning (diarization) in your transcription output. Speaker partitioning labels the speech from individual speakers in your media file.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/diarization.html">Partitioning speakers (diarization)</a> in the <i>Amazon Transcribe Developer Guide</i>.</p>
   */
  ShowSpeakerLabel?: boolean;

  /**
   * @public
   * <p>Enables partial result stabilization for your transcription. Partial result stabilization can reduce latency in your output, but may impact accuracy.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html#streaming-partial-result-stabilization">Partial-result stabilization</a>
   *          in the <i>Amazon Transcribe Developer Guide</i>.</p>
   */
  EnablePartialResultsStabilization?: boolean;

  /**
   * @public
   * <p>The level of stability to use when you enable partial results stabilization
   *             (<code>EnablePartialResultsStabilization</code>).</p>
   *          <p>Low stability provides the highest accuracy. High stability transcribes faster, but with slightly lower accuracy.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html#streaming-partial-result-stabilization">Partial-result stabilization</a>
   *          in the <i>Amazon Transcribe Developer Guide</i>.</p>
   */
  PartialResultsStability?: PartialResultsStability;

  /**
   * @public
   * <p>Labels all personally identifiable information (PII) identified in your transcript.</p>
   *          <p>Content identification is performed at the segment level; PII specified in
   *             <code>PiiEntityTypes</code> is flagged upon complete transcription of an audio
   *          segment.</p>
   *          <p>You can’t set <code>ContentIdentificationType</code> and
   *             <code>ContentRedactionType</code> in the same request. If you set both, your request
   *          returns a <code>BadRequestException</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/pii-redaction.html">Redacting or identifying personally identifiable information</a>
   *          in the <i>Amazon Transcribe Developer Guide</i>.</p>
   */
  ContentIdentificationType?: ContentType;

  /**
   * @public
   * <p>Redacts all personally identifiable information (PII) identified in your transcript.</p>
   *          <p>Content redaction is performed at the segment level; PII specified in PiiEntityTypes is redacted upon complete transcription of an audio segment.</p>
   *          <p>You can’t set ContentRedactionType and ContentIdentificationType in the same request. If you set both, your request returns a <code>BadRequestException</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/pii-redaction.html">Redacting or identifying personally identifiable information</a>
   *          in the <i>Amazon Transcribe Developer Guide</i>.</p>
   */
  ContentRedactionType?: ContentType;

  /**
   * @public
   * <p>The types of personally identifiable information (PII) to redact from a transcript. You
   *          can include as many types as you'd like, or you can select <code>ALL</code>.</p>
   *          <p>To include <code>PiiEntityTypes</code> in your Call Analytics request, you must also include <code>ContentIdentificationType</code> or <code>ContentRedactionType</code>, but you can't include both.</p>
   *          <p>Values must be comma-separated and can include: <code>ADDRESS</code>, <code>BANK_ACCOUNT_NUMBER</code>, <code>BANK_ROUTING</code>, <code>CREDIT_DEBIT_CVV</code>,
   *          <code>CREDIT_DEBIT_EXPIRY</code>, <code>CREDIT_DEBIT_NUMBER</code>, <code>EMAIL</code>,
   *          <code>NAME</code>, <code>PHONE</code>, <code>PIN</code>, <code>SSN</code>, or <code>ALL</code>.</p>
   *          <p>If you leave this parameter empty, the default behavior is equivalent to <code>ALL</code>.</p>
   */
  PiiEntityTypes?: string;

  /**
   * @public
   * <p>The name of the custom language model that you want to use when processing your
   *          transcription. Note that language model names are case sensitive.</p>
   *          <p>The language of the specified language model must match the language code you specify in your transcription request. If the languages don't match, the custom language model isn't applied.
   *             There are no errors or warnings associated with a language mismatch.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-language-models.html">Custom language models</a> in the <i>Amazon Transcribe Developer Guide</i>.</p>
   */
  LanguageModelName?: string;

  /**
   * @public
   * <p>If true, <code>TranscriptEvents</code> with <code>IsPartial: true</code> are filtered out of the insights target.</p>
   */
  FilterPartialResults?: boolean;

  /**
   * @public
   * <p>Turns language identification on or off.</p>
   */
  IdentifyLanguage?: boolean;

  /**
   * @public
   * <p>The language options for the transcription, such as automatic language detection.</p>
   */
  LanguageOptions?: string;

  /**
   * @public
   * <p>The preferred language for the transcription.</p>
   */
  PreferredLanguage?: CallAnalyticsLanguageCode;

  /**
   * @public
   * <p>The names of the custom vocabulary or vocabularies used during transcription.</p>
   */
  VocabularyNames?: string;

  /**
   * @public
   * <p>The names of the custom vocabulary filter or filters using during transcription.</p>
   */
  VocabularyFilterNames?: string;
}

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
 * <p>The audio artifact concatenation configuration object.</p>
 */
export interface AudioConcatenationConfiguration {
  /**
   * @public
   * <p>Enables or disables the configuration object.</p>
   */
  State: AudioArtifactsConcatenationState | undefined;
}

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
 * <p>The composited video configuration object for a specified
 *          media pipeline. <code>SourceType</code> must be
 *          <code>ChimeSdkMeeting</code>.</p>
 */
export interface CompositedVideoConcatenationConfiguration {
  /**
   * @public
   * <p>Enables or disables the configuration object.</p>
   */
  State: ArtifactsConcatenationState | undefined;
}

/**
 * @public
 * <p>The composited content configuration object for a specified
 *          media pipeline. </p>
 */
export interface ContentConcatenationConfiguration {
  /**
   * @public
   * <p>Enables or disables the configuration object.</p>
   */
  State: ArtifactsConcatenationState | undefined;
}

/**
 * @public
 * <p>The content configuration object's data channel.</p>
 */
export interface DataChannelConcatenationConfiguration {
  /**
   * @public
   * <p>Enables or disables the configuration object.</p>
   */
  State: ArtifactsConcatenationState | undefined;
}

/**
 * @public
 * <p>The configuration object for an event concatenation pipeline.</p>
 */
export interface MeetingEventsConcatenationConfiguration {
  /**
   * @public
   * <p>Enables or disables the configuration object.</p>
   */
  State: ArtifactsConcatenationState | undefined;
}

/**
 * @public
 * <p>The configuration object for concatenating transcription messages.</p>
 */
export interface TranscriptionMessagesConcatenationConfiguration {
  /**
   * @public
   * <p>Enables or disables the configuration object.</p>
   */
  State: ArtifactsConcatenationState | undefined;
}

/**
 * @public
 * <p>The configuration object of a video concatenation pipeline.</p>
 */
export interface VideoConcatenationConfiguration {
  /**
   * @public
   * <p>Enables or disables the configuration object.</p>
   */
  State: ArtifactsConcatenationState | undefined;
}

/**
 * @public
 * <p>The configuration for the artifacts concatenation.</p>
 */
export interface ArtifactsConcatenationConfiguration {
  /**
   * @public
   * <p>The configuration for the audio artifacts concatenation.</p>
   */
  Audio: AudioConcatenationConfiguration | undefined;

  /**
   * @public
   * <p>The configuration for the video artifacts concatenation.</p>
   */
  Video: VideoConcatenationConfiguration | undefined;

  /**
   * @public
   * <p>The configuration for the content artifacts concatenation.</p>
   */
  Content: ContentConcatenationConfiguration | undefined;

  /**
   * @public
   * <p>The configuration for the data channel artifacts concatenation.</p>
   */
  DataChannel: DataChannelConcatenationConfiguration | undefined;

  /**
   * @public
   * <p>The configuration for the transcription messages artifacts concatenation.</p>
   */
  TranscriptionMessages: TranscriptionMessagesConcatenationConfiguration | undefined;

  /**
   * @public
   * <p>The configuration for the meeting events artifacts concatenation.</p>
   */
  MeetingEvents: MeetingEventsConcatenationConfiguration | undefined;

  /**
   * @public
   * <p>The configuration for the composited video artifacts concatenation.</p>
   */
  CompositedVideo: CompositedVideoConcatenationConfiguration | undefined;
}

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
 * <p>The audio artifact configuration object.</p>
 */
export interface AudioArtifactsConfiguration {
  /**
   * @public
   * <p>The MUX type of the audio artifact configuration object.</p>
   */
  MuxType: AudioMuxType | undefined;
}

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
 * <p>Defines the configuration settings for the horizontal layout.</p>
 */
export interface HorizontalLayoutConfiguration {
  /**
   * @public
   * <p>Sets the automatic ordering of the video tiles.</p>
   */
  TileOrder?: TileOrder;

  /**
   * @public
   * <p>Sets the position of horizontal tiles.</p>
   */
  TilePosition?: HorizontalTilePosition;

  /**
   * @public
   * <p>The maximum number of video tiles to display.</p>
   */
  TileCount?: number;

  /**
   * @public
   * <p>Specifies the aspect ratio of all video tiles.</p>
   */
  TileAspectRatio?: string;
}

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
 * <p>Defines the configuration for a presenter-only video tile.</p>
 */
export interface PresenterOnlyConfiguration {
  /**
   * @public
   * <p>Defines the position of the presenter video tile. Default: <code>TopRight</code>.</p>
   */
  PresenterPosition?: PresenterPosition;
}

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
 * <p>Defines the configuration settings for a vertical layout.</p>
 */
export interface VerticalLayoutConfiguration {
  /**
   * @public
   * <p>Sets the automatic ordering of the video tiles.</p>
   */
  TileOrder?: TileOrder;

  /**
   * @public
   * <p>Sets the position of vertical tiles.</p>
   */
  TilePosition?: VerticalTilePosition;

  /**
   * @public
   * <p>The maximum number of tiles to display.</p>
   */
  TileCount?: number;

  /**
   * @public
   * <p>Sets the aspect ratio of the video tiles, such as 16:9.</p>
   */
  TileAspectRatio?: string;
}

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
 * <p>Defines the settings for a video tile.</p>
 */
export interface VideoAttribute {
  /**
   * @public
   * <p>Sets the corner radius of all video tiles.</p>
   */
  CornerRadius?: number;

  /**
   * @public
   * <p>Defines the border color of all video tiles.</p>
   */
  BorderColor?: BorderColor;

  /**
   * @public
   * <p>Defines the highlight color for the active video tile.</p>
   */
  HighlightColor?: HighlightColor;

  /**
   * @public
   * <p>Defines the border thickness for all video tiles.</p>
   */
  BorderThickness?: number;
}

/**
 * @public
 * <p>Specifies the type of grid layout.</p>
 */
export interface GridViewConfiguration {
  /**
   * @public
   * <p>Defines the layout of the video tiles when content sharing is enabled.</p>
   */
  ContentShareLayout: ContentShareLayoutOption | undefined;

  /**
   * @public
   * <p>Defines the configuration options for a presenter only video tile.</p>
   */
  PresenterOnlyConfiguration?: PresenterOnlyConfiguration;

  /**
   * @public
   * <p>The configuration settings for an <code>ActiveSpeakerOnly</code> video tile.</p>
   */
  ActiveSpeakerOnlyConfiguration?: ActiveSpeakerOnlyConfiguration;

  /**
   * @public
   * <p>The configuration settings for a horizontal layout.</p>
   */
  HorizontalLayoutConfiguration?: HorizontalLayoutConfiguration;

  /**
   * @public
   * <p>The configuration settings for a vertical layout.</p>
   */
  VerticalLayoutConfiguration?: VerticalLayoutConfiguration;

  /**
   * @public
   * <p>The attribute settings for the video tiles.</p>
   */
  VideoAttribute?: VideoAttribute;

  /**
   * @public
   * <p>The orientation setting, horizontal or vertical.</p>
   */
  CanvasOrientation?: CanvasOrientation;
}

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
 * <p>Specifies the configuration for compositing video artifacts.</p>
 */
export interface CompositedVideoArtifactsConfiguration {
  /**
   * @public
   * <p>The layout setting, such as <code>GridView</code> in the configuration object.</p>
   */
  Layout?: LayoutOption;

  /**
   * @public
   * <p>The video resolution setting in the configuration object. Default: HD at 1280 x 720. FHD resolution: 1920 x 1080.</p>
   */
  Resolution?: ResolutionOption;

  /**
   * @public
   * <p>The <code>GridView</code> configuration setting.</p>
   */
  GridViewConfiguration: GridViewConfiguration | undefined;
}

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
 * <p>The content artifact object.</p>
 */
export interface ContentArtifactsConfiguration {
  /**
   * @public
   * <p>Indicates whether the content artifact is enabled or disabled.</p>
   */
  State: ArtifactsState | undefined;

  /**
   * @public
   * <p>The MUX type of the artifact configuration.</p>
   */
  MuxType?: ContentMuxType;
}

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
 * <p>The video artifact configuration object.</p>
 */
export interface VideoArtifactsConfiguration {
  /**
   * @public
   * <p>Indicates whether the video artifact is enabled or disabled.</p>
   */
  State: ArtifactsState | undefined;

  /**
   * @public
   * <p>The MUX type of the video artifact configuration object.</p>
   */
  MuxType?: VideoMuxType;
}

/**
 * @public
 * <p>The configuration for the artifacts.</p>
 */
export interface ArtifactsConfiguration {
  /**
   * @public
   * <p>The configuration for the audio artifacts.</p>
   */
  Audio: AudioArtifactsConfiguration | undefined;

  /**
   * @public
   * <p>The configuration for the video artifacts.</p>
   */
  Video: VideoArtifactsConfiguration | undefined;

  /**
   * @public
   * <p>The configuration for the content artifacts.</p>
   */
  Content: ContentArtifactsConfiguration | undefined;

  /**
   * @public
   * <p>Enables video compositing.</p>
   */
  CompositedVideo?: CompositedVideoArtifactsConfiguration;
}

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
 * <p>The input parameters don't match the service's restrictions.</p>
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode;
  Message?: string;
  /**
   * @public
   * <p>The request ID associated with the call responsible for the exception.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

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
 * <p>Defines an audio channel in a Kinesis video stream.</p>
 */
export interface ChannelDefinition {
  /**
   * @public
   * <p>The channel ID.</p>
   */
  ChannelId: number | undefined;

  /**
   * @public
   * <p>Specifies whether the audio in a channel belongs to the <code>AGENT</code> or <code>CUSTOMER</code>.</p>
   */
  ParticipantRole?: ParticipantRole;
}

/**
 * @public
 * <p>The video streams for a specified media pipeline. The total number of
 *          video streams can't exceed 25.</p>
 */
export interface SelectedVideoStreams {
  /**
   * @public
   * <p>The attendee IDs of the streams selected for a media pipeline. </p>
   */
  AttendeeIds?: string[];

  /**
   * @public
   * <p>The external user IDs of the streams selected for a media pipeline.</p>
   */
  ExternalUserIds?: string[];
}

/**
 * @public
 * <p>Source configuration for a specified media pipeline.</p>
 */
export interface SourceConfiguration {
  /**
   * @public
   * <p>The selected video streams for a specified media pipeline. The number
   *          of video streams can't exceed 25.</p>
   */
  SelectedVideoStreams?: SelectedVideoStreams;
}

/**
 * @public
 * <p>The configuration object of the Amazon Chime SDK meeting for a specified media pipeline. <code>SourceType</code> must be <code>ChimeSdkMeeting</code>.</p>
 */
export interface ChimeSdkMeetingConfiguration {
  /**
   * @public
   * <p>The source configuration for a specified media pipeline.</p>
   */
  SourceConfiguration?: SourceConfiguration;

  /**
   * @public
   * <p>The configuration for the artifacts in an Amazon Chime SDK meeting.</p>
   */
  ArtifactsConfiguration?: ArtifactsConfiguration;
}

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
 * <p>A key/value pair that grants users access to meeting resources.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>The key half of a tag.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The value half of a tag.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateMediaCapturePipelineRequest {
  /**
   * @public
   * <p>Source type from which the media artifacts are captured. A Chime SDK Meeting is the only
   *          supported source.</p>
   */
  SourceType: MediaPipelineSourceType | undefined;

  /**
   * @public
   * <p>ARN of the source from which the media artifacts are captured.</p>
   */
  SourceArn: string | undefined;

  /**
   * @public
   * <p>Destination type to which the media artifacts are saved. You must use an S3 bucket.</p>
   */
  SinkType: MediaPipelineSinkType | undefined;

  /**
   * @public
   * <p>The ARN of the sink type.</p>
   */
  SinkArn: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the client request. The token makes the API request idempotent. Use a unique token for each media pipeline request.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The configuration for a specified media pipeline. <code>SourceType</code> must
   *          be <code>ChimeSdkMeeting</code>.</p>
   */
  ChimeSdkMeetingConfiguration?: ChimeSdkMeetingConfiguration;

  /**
   * @public
   * <p>The tag key-value pairs.</p>
   */
  Tags?: Tag[];
}

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
 * <p>A media pipeline object consisting of an ID, source type, source ARN, a sink
 *          type, a sink ARN, and a configuration object.</p>
 */
export interface MediaCapturePipeline {
  /**
   * @public
   * <p>The ID of a media pipeline.</p>
   */
  MediaPipelineId?: string;

  /**
   * @public
   * <p>The ARN of the media capture pipeline</p>
   */
  MediaPipelineArn?: string;

  /**
   * @public
   * <p>Source type from which media artifacts are saved. You must use
   *          <code>ChimeMeeting</code>.</p>
   */
  SourceType?: MediaPipelineSourceType;

  /**
   * @public
   * <p>ARN of the source from which the media artifacts are saved.</p>
   */
  SourceArn?: string;

  /**
   * @public
   * <p>The status of the media pipeline.</p>
   */
  Status?: MediaPipelineStatus;

  /**
   * @public
   * <p>Destination type to which the media artifacts are saved. You must use an S3
   *          Bucket.</p>
   */
  SinkType?: MediaPipelineSinkType;

  /**
   * @public
   * <p>ARN of the destination to which the media artifacts are saved.</p>
   */
  SinkArn?: string;

  /**
   * @public
   * <p>The time at which the pipeline was created, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The time at which the pipeline was updated, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;

  /**
   * @public
   * <p>The configuration for a specified media pipeline. <code>SourceType</code> must
   *          be <code>ChimeSdkMeeting</code>.</p>
   */
  ChimeSdkMeetingConfiguration?: ChimeSdkMeetingConfiguration;
}

/**
 * @public
 */
export interface CreateMediaCapturePipelineResponse {
  /**
   * @public
   * <p>A media pipeline object, the ID, source type, source ARN, sink type, and sink
   *          ARN of a media pipeline object.</p>
   */
  MediaCapturePipeline?: MediaCapturePipeline;
}

/**
 * @public
 * <p>The client is permanently forbidden from making the request.</p>
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode;
  Message?: string;
  /**
   * @public
   * <p>The request id associated with the call responsible for the exception.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ForbiddenException, __BaseException>) {
    super({
      name: "ForbiddenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ForbiddenException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * @public
 * <p>The request exceeds the resource limit.</p>
 */
export class ResourceLimitExceededException extends __BaseException {
  readonly name: "ResourceLimitExceededException" = "ResourceLimitExceededException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode;
  Message?: string;
  /**
   * @public
   * <p>The request ID associated with the call responsible for the exception.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceLimitExceededException, __BaseException>) {
    super({
      name: "ResourceLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceLimitExceededException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * @public
 * <p>The service encountered an unexpected error.</p>
 */
export class ServiceFailureException extends __BaseException {
  readonly name: "ServiceFailureException" = "ServiceFailureException";
  readonly $fault: "server" = "server";
  Code?: ErrorCode;
  Message?: string;
  /**
   * @public
   * <p>The request ID associated with the call responsible for the exception.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceFailureException, __BaseException>) {
    super({
      name: "ServiceFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceFailureException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * @public
 * <p>The service is currently unavailable.</p>
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  Code?: ErrorCode;
  Message?: string;
  /**
   * @public
   * <p>The request ID associated with the call responsible for the exception.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * @public
 * <p>The client exceeded its request rate limit.</p>
 */
export class ThrottledClientException extends __BaseException {
  readonly name: "ThrottledClientException" = "ThrottledClientException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode;
  Message?: string;
  /**
   * @public
   * <p>The request ID associated with the call responsible for the exception.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottledClientException, __BaseException>) {
    super({
      name: "ThrottledClientException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottledClientException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * @public
 * <p>The client is not currently authorized to make the request.</p>
 */
export class UnauthorizedClientException extends __BaseException {
  readonly name: "UnauthorizedClientException" = "UnauthorizedClientException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode;
  Message?: string;
  /**
   * @public
   * <p>The request ID associated with the call responsible for the exception.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedClientException, __BaseException>) {
    super({
      name: "UnauthorizedClientException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedClientException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * @public
 * <p>The configuration settings for the S3 bucket.</p>
 */
export interface S3BucketSinkConfiguration {
  /**
   * @public
   * <p>The destination URL of the S3 bucket.</p>
   */
  Destination: string | undefined;
}

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
 * <p>The data sink of the configuration object.</p>
 */
export interface ConcatenationSink {
  /**
   * @public
   * <p>The type of data sink in the configuration object.</p>
   */
  Type: ConcatenationSinkType | undefined;

  /**
   * @public
   * <p>The configuration settings for an Amazon S3 bucket sink.</p>
   */
  S3BucketSinkConfiguration: S3BucketSinkConfiguration | undefined;
}

/**
 * @public
 * <p>The configuration object of the Amazon Chime SDK meeting concatenation for a specified
 *          media pipeline.</p>
 */
export interface ChimeSdkMeetingConcatenationConfiguration {
  /**
   * @public
   * <p>The configuration for the artifacts in an Amazon Chime SDK meeting concatenation.</p>
   */
  ArtifactsConfiguration: ArtifactsConcatenationConfiguration | undefined;
}

/**
 * @public
 * <p>The source configuration object of a media capture pipeline.</p>
 */
export interface MediaCapturePipelineSourceConfiguration {
  /**
   * @public
   * <p>The media pipeline ARN in the configuration object of a media capture pipeline.</p>
   */
  MediaPipelineArn: string | undefined;

  /**
   * @public
   * <p>The meeting configuration settings in a media capture pipeline configuration object. </p>
   */
  ChimeSdkMeetingConfiguration: ChimeSdkMeetingConcatenationConfiguration | undefined;
}

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
 * <p>The source type and media pipeline configuration settings in a configuration object.</p>
 */
export interface ConcatenationSource {
  /**
   * @public
   * <p>The type of concatenation source in a configuration object.</p>
   */
  Type: ConcatenationSourceType | undefined;

  /**
   * @public
   * <p>The concatenation settings for the media pipeline in a configuration object.</p>
   */
  MediaCapturePipelineSourceConfiguration: MediaCapturePipelineSourceConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateMediaConcatenationPipelineRequest {
  /**
   * @public
   * <p>An object that specifies the sources for the media concatenation pipeline.</p>
   */
  Sources: ConcatenationSource[] | undefined;

  /**
   * @public
   * <p>An object that specifies the data sinks for the media concatenation pipeline.</p>
   */
  Sinks: ConcatenationSink[] | undefined;

  /**
   * @public
   * <p>The unique identifier for the client request. The token makes the API request
   *          idempotent. Use a unique token for each media concatenation pipeline request.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The tags associated with the media concatenation pipeline.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>Concatenates audio and video data from one or more data streams.</p>
 */
export interface MediaConcatenationPipeline {
  /**
   * @public
   * <p>The ID of the media pipeline being concatenated.</p>
   */
  MediaPipelineId?: string;

  /**
   * @public
   * <p>The ARN of the media pipeline that you specify in the <code>SourceConfiguration</code> object.</p>
   */
  MediaPipelineArn?: string;

  /**
   * @public
   * <p>The data sources being concatenated.</p>
   */
  Sources?: ConcatenationSource[];

  /**
   * @public
   * <p>The data sinks of the concatenation pipeline.</p>
   */
  Sinks?: ConcatenationSink[];

  /**
   * @public
   * <p>The status of the concatenation pipeline.</p>
   */
  Status?: MediaPipelineStatus;

  /**
   * @public
   * <p>The time at which the concatenation pipeline was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The time at which the concatenation pipeline was last updated.</p>
   */
  UpdatedTimestamp?: Date;
}

/**
 * @public
 */
export interface CreateMediaConcatenationPipelineResponse {
  /**
   * @public
   * <p>A media concatenation pipeline object, the ID, source type, <code>MediaPipelineARN</code>, and sink of a
   *          media concatenation pipeline object.</p>
   */
  MediaConcatenationPipeline?: MediaConcatenationPipeline;
}

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
 * <p>The range of timestamps to return.</p>
 */
export interface TimestampRange {
  /**
   * @public
   * <p>The starting timestamp for the specified range.</p>
   */
  StartTimestamp: Date | undefined;

  /**
   * @public
   * <p>The ending timestamp for the specified range.</p>
   */
  EndTimestamp: Date | undefined;
}

/**
 * @public
 * <p>Describes the timestamp range and timestamp origin of a range of fragments.</p>
 *          <p>Only fragments with a start timestamp greater than or equal to the given start time and less than or equal to the end time are returned.
 *          For example, say a stream contains fragments with the following start timestamps:</p>
 *          <ul>
 *             <li>
 *                <p>00:00:00</p>
 *             </li>
 *             <li>
 *                <p>00:00:02</p>
 *             </li>
 *             <li>
 *                <p>00:00:04</p>
 *             </li>
 *             <li>
 *                <p>00:00:06</p>
 *             </li>
 *          </ul>
 *          <p>A fragment selector range with a start time of 00:00:01 and end time of 00:00:04 would return the fragments with start times of 00:00:02 and 00:00:04.</p>
 */
export interface FragmentSelector {
  /**
   * @public
   * <p>The origin of the timestamps to use, <code>Server</code> or <code>Producer</code>. For more information, see
   *          <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_dataplane_StartSelector.html">StartSelectorType</a> in the <i>Amazon Kinesis Video Streams Developer Guide</i>.</p>
   */
  FragmentSelectorType: FragmentSelectorType | undefined;

  /**
   * @public
   * <p>The range of timestamps to return.</p>
   */
  TimestampRange: TimestampRange | undefined;
}

/**
 * @public
 * <p>A structure that holds the settings for recording media.</p>
 */
export interface RecordingStreamConfiguration {
  /**
   * @public
   * <p>The ARN of the recording stream.</p>
   */
  StreamArn?: string;
}

/**
 * @public
 * <p>A structure that contains the runtime settings for recording a Kinesis video stream.</p>
 */
export interface KinesisVideoStreamRecordingSourceRuntimeConfiguration {
  /**
   * @public
   * <p>The stream or streams to be recorded.</p>
   */
  Streams: RecordingStreamConfiguration[] | undefined;

  /**
   * @public
   * <p>Describes the timestamp range and timestamp origin of a range of fragments in the Kinesis video stream.</p>
   */
  FragmentSelector: FragmentSelector | undefined;
}

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
 * <p>Defines a streaming channel.</p>
 */
export interface StreamChannelDefinition {
  /**
   * @public
   * <p>The number of channels in a streaming channel.</p>
   */
  NumberOfChannels: number | undefined;

  /**
   * @public
   * <p>The definitions of the channels in a streaming channel.</p>
   */
  ChannelDefinitions?: ChannelDefinition[];
}

/**
 * @public
 * <p>The configuration settings for a stream.</p>
 */
export interface StreamConfiguration {
  /**
   * @public
   * <p>The ARN of the stream.</p>
   */
  StreamArn: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the fragment to begin processing.</p>
   */
  FragmentNumber?: string;

  /**
   * @public
   * <p>The streaming channel definition in the stream configuration.</p>
   */
  StreamChannelDefinition: StreamChannelDefinition | undefined;
}

/**
 * @public
 * <p>The runtime configuration settings for the Kinesis video stream source.</p>
 */
export interface KinesisVideoStreamSourceRuntimeConfiguration {
  /**
   * @public
   * <p>The streams in the source runtime configuration of a Kinesis video stream.</p>
   */
  Streams: StreamConfiguration[] | undefined;

  /**
   * @public
   * <p>Specifies the encoding of your input audio. Supported format: PCM (only signed 16-bit little-endian audio formats, which does not include WAV)</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-input.html#how-input-audio">Media formats</a> in the <i>Amazon Transcribe Developer Guide</i>.</p>
   */
  MediaEncoding: MediaEncoding | undefined;

  /**
   * @public
   * <p>The sample rate of the input audio (in hertz). Low-quality audio, such as telephone
   *          audio, is typically around 8,000 Hz. High-quality audio typically ranges from 16,000 Hz to
   *          48,000 Hz. Note that the sample rate you specify must match that of your audio.</p>
   *          <p>Valid Range: Minimum value of 8000. Maximum value of 48000.</p>
   */
  MediaSampleRate: number | undefined;
}

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
 * <p>A structure that holds the settings for transmitting media files to the Amazon S3 bucket. If specified, the settings in this structure override any settings in <code>S3RecordingSinkConfiguration</code>.</p>
 */
export interface S3RecordingSinkRuntimeConfiguration {
  /**
   * @public
   * <p>The URI of the S3 bucket used as the sink.</p>
   */
  Destination: string | undefined;

  /**
   * @public
   * <p>The file format for the media files sent to the Amazon S3 bucket.</p>
   */
  RecordingFileFormat: RecordingFileFormat | undefined;
}

/**
 * @public
 */
export interface CreateMediaInsightsPipelineRequest {
  /**
   * @public
   * <p>The ARN of the pipeline's configuration.</p>
   */
  MediaInsightsPipelineConfigurationArn: string | undefined;

  /**
   * @public
   * <p>The runtime configuration for the Kinesis video stream source of the media insights
   *          pipeline.</p>
   */
  KinesisVideoStreamSourceRuntimeConfiguration?: KinesisVideoStreamSourceRuntimeConfiguration;

  /**
   * @public
   * <p>The runtime metadata for the media insights pipeline. Consists of a key-value map of strings.</p>
   */
  MediaInsightsRuntimeMetadata?: Record<string, string>;

  /**
   * @public
   * <p>The runtime configuration for the Kinesis video recording stream source.</p>
   */
  KinesisVideoStreamRecordingSourceRuntimeConfiguration?: KinesisVideoStreamRecordingSourceRuntimeConfiguration;

  /**
   * @public
   * <p>The runtime configuration for the S3 recording sink. If specified, the settings in this structure override any settings in <code>S3RecordingSinkConfiguration</code>.</p>
   */
  S3RecordingSinkRuntimeConfiguration?: S3RecordingSinkRuntimeConfiguration;

  /**
   * @public
   * <p>The tags assigned to the media insights pipeline.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The unique identifier for the media insights pipeline request.</p>
   */
  ClientRequestToken?: string;
}

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
 * <p>The status of the pipeline element.</p>
 */
export interface MediaInsightsPipelineElementStatus {
  /**
   * @public
   * <p>The type of status.</p>
   */
  Type?: MediaInsightsPipelineConfigurationElementType;

  /**
   * @public
   * <p>The element's status.</p>
   */
  Status?: MediaPipelineElementStatus;
}

/**
 * @public
 * <p>A media pipeline that streams call analytics data.</p>
 */
export interface MediaInsightsPipeline {
  /**
   * @public
   * <p>The ID of a media insights pipeline.</p>
   */
  MediaPipelineId?: string;

  /**
   * @public
   * <p>The ARN of a media insights pipeline.</p>
   */
  MediaPipelineArn?: string;

  /**
   * @public
   * <p>The ARN of a media insight pipeline's configuration settings.</p>
   */
  MediaInsightsPipelineConfigurationArn?: string;

  /**
   * @public
   * <p>The status of a media insights pipeline.</p>
   */
  Status?: MediaPipelineStatus;

  /**
   * @public
   * <p>The configuration settings for a Kinesis runtime video stream in a media insights pipeline.</p>
   */
  KinesisVideoStreamSourceRuntimeConfiguration?: KinesisVideoStreamSourceRuntimeConfiguration;

  /**
   * @public
   * <p>The runtime metadata of a media insights pipeline.</p>
   */
  MediaInsightsRuntimeMetadata?: Record<string, string>;

  /**
   * @public
   * <p>The runtime configuration settings for a Kinesis recording video stream in a media insights pipeline.</p>
   */
  KinesisVideoStreamRecordingSourceRuntimeConfiguration?: KinesisVideoStreamRecordingSourceRuntimeConfiguration;

  /**
   * @public
   * <p>The runtime configuration of the Amazon S3 bucket that stores recordings in a media insights pipeline.</p>
   */
  S3RecordingSinkRuntimeConfiguration?: S3RecordingSinkRuntimeConfiguration;

  /**
   * @public
   * <p>The time at which the media insights pipeline was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The statuses that the elements in a media insights pipeline can have during data processing.</p>
   */
  ElementStatuses?: MediaInsightsPipelineElementStatus[];
}

/**
 * @public
 */
export interface CreateMediaInsightsPipelineResponse {
  /**
   * @public
   * <p>The media insights pipeline object.</p>
   */
  MediaInsightsPipeline: MediaInsightsPipeline | undefined;
}

/**
 * @public
 * <p>One or more of the resources in the request does not exist in the system.</p>
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode;
  Message?: string;
  /**
   * @public
   * <p>The request ID associated with the call responsible for the exception.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * @public
 * <p>A structure that contains the configuration settings for a Kinesis Data Stream sink.</p>
 */
export interface KinesisDataStreamSinkConfiguration {
  /**
   * @public
   * <p>The ARN of the sink.</p>
   */
  InsightsTarget?: string;
}

/**
 * @public
 * <p>A structure that contains the configuration settings for an AWS Lambda function's data sink.</p>
 */
export interface LambdaFunctionSinkConfiguration {
  /**
   * @public
   * <p>The ARN of the sink.</p>
   */
  InsightsTarget?: string;
}

/**
 * @public
 * <p>The structure that holds the settings for transmitting media to the Amazon S3 bucket. These values are used as defaults if <code>S3RecordingSinkRuntimeConfiguration</code> is not specified.</p>
 */
export interface S3RecordingSinkConfiguration {
  /**
   * @public
   * <p>The default URI of the Amazon S3 bucket used as the recording sink.</p>
   */
  Destination?: string;

  /**
   * @public
   * <p>The default file format for the media files sent to the Amazon S3 bucket.</p>
   */
  RecordingFileFormat?: RecordingFileFormat;
}

/**
 * @public
 * <p>The configuration settings for the SNS topic sink.</p>
 */
export interface SnsTopicSinkConfiguration {
  /**
   * @public
   * <p>The ARN of the SNS sink.</p>
   */
  InsightsTarget?: string;
}

/**
 * @public
 * <p>The configuration settings for the SQS sink.</p>
 */
export interface SqsQueueSinkConfiguration {
  /**
   * @public
   * <p>The ARN of the SQS sink.</p>
   */
  InsightsTarget?: string;
}

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
 * <p>The configuration settings for a voice analytics processor.</p>
 */
export interface VoiceAnalyticsProcessorConfiguration {
  /**
   * @public
   * <p>The status of the speaker search task.</p>
   */
  SpeakerSearchStatus?: VoiceAnalyticsConfigurationStatus;

  /**
   * @public
   * <p>The status of the voice tone analysis task.</p>
   */
  VoiceToneAnalysisStatus?: VoiceAnalyticsConfigurationStatus;
}

/**
 * @public
 * <p>A static structure that contains the configuration data for a <code>VoiceEnhancementSinkConfiguration</code> element.</p>
 */
export interface VoiceEnhancementSinkConfiguration {
  /**
   * @public
   * <p>Disables the <code>VoiceEnhancementSinkConfiguration</code> element.</p>
   */
  Disabled?: boolean;
}

/**
 * @public
 * <p>An element in a media insights pipeline configuration.</p>
 */
export interface MediaInsightsPipelineConfigurationElement {
  /**
   * @public
   * <p>The element type.</p>
   */
  Type: MediaInsightsPipelineConfigurationElementType | undefined;

  /**
   * @public
   * <p>The analytics configuration settings for transcribing audio in a media insights pipeline configuration element.</p>
   */
  AmazonTranscribeCallAnalyticsProcessorConfiguration?: AmazonTranscribeCallAnalyticsProcessorConfiguration;

  /**
   * @public
   * <p>The transcription processor configuration settings in a media insights pipeline
   *          configuration element.</p>
   */
  AmazonTranscribeProcessorConfiguration?: AmazonTranscribeProcessorConfiguration;

  /**
   * @public
   * <p>The configuration settings for the Kinesis Data Stream Sink in a media insights pipeline configuration element.</p>
   */
  KinesisDataStreamSinkConfiguration?: KinesisDataStreamSinkConfiguration;

  /**
   * @public
   * <p>The configuration settings for the Amazon S3 recording bucket in a media insights pipeline configuration element.</p>
   */
  S3RecordingSinkConfiguration?: S3RecordingSinkConfiguration;

  /**
   * @public
   * <p>The voice analytics configuration settings in a media insights pipeline configuration element.</p>
   */
  VoiceAnalyticsProcessorConfiguration?: VoiceAnalyticsProcessorConfiguration;

  /**
   * @public
   * <p>The configuration settings for the Amazon Web Services Lambda sink in a media insights pipeline configuration element.</p>
   */
  LambdaFunctionSinkConfiguration?: LambdaFunctionSinkConfiguration;

  /**
   * @public
   * <p>The configuration settings for an SQS queue sink in a media insights pipeline configuration element.</p>
   */
  SqsQueueSinkConfiguration?: SqsQueueSinkConfiguration;

  /**
   * @public
   * <p>The configuration settings for an SNS topic sink in a media insights pipeline configuration element.</p>
   */
  SnsTopicSinkConfiguration?: SnsTopicSinkConfiguration;

  /**
   * @public
   * <p>The configuration settings for voice enhancement sink in a media insights pipeline configuration element.</p>
   */
  VoiceEnhancementSinkConfiguration?: VoiceEnhancementSinkConfiguration;
}

/**
 * @public
 * <p>A structure that contains the configuration settings for an issue detection task.</p>
 */
export interface IssueDetectionConfiguration {
  /**
   * @public
   * <p>The name of the issue detection rule.</p>
   */
  RuleName: string | undefined;
}

/**
 * @public
 * <p>A structure that contains the settings for a keyword match task.</p>
 */
export interface KeywordMatchConfiguration {
  /**
   * @public
   * <p>The name of the keyword match rule.</p>
   */
  RuleName: string | undefined;

  /**
   * @public
   * <p>The keywords or phrases that you want to match.</p>
   */
  Keywords: string[] | undefined;

  /**
   * @public
   * <p>Matches keywords or phrases on their presence or absence. If set to <code>TRUE</code>, the rule matches when all
   *          the specified keywords or phrases are absent. Default: <code>FALSE</code>.</p>
   */
  Negate?: boolean;
}

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
 * <p>A structure that contains the configuration settings for a sentiment analysis task.</p>
 */
export interface SentimentConfiguration {
  /**
   * @public
   * <p>The name of the rule in the sentiment configuration.</p>
   */
  RuleName: string | undefined;

  /**
   * @public
   * <p>The type of sentiment, <code>POSITIVE</code>, <code>NEGATIVE</code>, or <code>NEUTRAL</code>.</p>
   */
  SentimentType: SentimentType | undefined;

  /**
   * @public
   * <p>Specifies the analysis interval.</p>
   */
  TimePeriod: number | undefined;
}

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
 * <p>Specifies the words or phrases that trigger an alert.</p>
 */
export interface RealTimeAlertRule {
  /**
   * @public
   * <p>The type of alert rule.</p>
   */
  Type: RealTimeAlertRuleType | undefined;

  /**
   * @public
   * <p>Specifies the settings for matching the keywords in a real-time alert rule.</p>
   */
  KeywordMatchConfiguration?: KeywordMatchConfiguration;

  /**
   * @public
   * <p>Specifies the settings for predicting sentiment in a real-time alert rule.</p>
   */
  SentimentConfiguration?: SentimentConfiguration;

  /**
   * @public
   * <p>Specifies the issue detection settings for a real-time alert rule.</p>
   */
  IssueDetectionConfiguration?: IssueDetectionConfiguration;
}

/**
 * @public
 * <p>A structure that contains the configuration settings for real-time alerts.</p>
 */
export interface RealTimeAlertConfiguration {
  /**
   * @public
   * <p>Turns off real-time alerts.</p>
   */
  Disabled?: boolean;

  /**
   * @public
   * <p>The rules in the alert. Rules specify the words or phrases that you want to be notified about.</p>
   */
  Rules?: RealTimeAlertRule[];
}

/**
 * @public
 */
export interface CreateMediaInsightsPipelineConfigurationRequest {
  /**
   * @public
   * <p>The name of the media insights pipeline configuration.</p>
   */
  MediaInsightsPipelineConfigurationName: string | undefined;

  /**
   * @public
   * <p>The ARN of the role used by the service to access Amazon Web Services resources,
   *          including <code>Transcribe</code> and <code>Transcribe Call Analytics</code>, on the
   *          caller’s behalf.</p>
   */
  ResourceAccessRoleArn: string | undefined;

  /**
   * @public
   * <p>The configuration settings for the real-time alerts in a media insights pipeline configuration.</p>
   */
  RealTimeAlertConfiguration?: RealTimeAlertConfiguration;

  /**
   * @public
   * <p>The elements in the request, such as a processor for Amazon Transcribe or a sink for a Kinesis Data Stream.</p>
   */
  Elements: MediaInsightsPipelineConfigurationElement[] | undefined;

  /**
   * @public
   * <p>The tags assigned to the media insights pipeline configuration.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The unique identifier for the media insights pipeline configuration request.</p>
   */
  ClientRequestToken?: string;
}

/**
 * @public
 * <p>A structure that contains the configuration settings for a media insights pipeline.</p>
 */
export interface MediaInsightsPipelineConfiguration {
  /**
   * @public
   * <p>The name of the configuration.</p>
   */
  MediaInsightsPipelineConfigurationName?: string;

  /**
   * @public
   * <p>The ARN of the configuration.</p>
   */
  MediaInsightsPipelineConfigurationArn?: string;

  /**
   * @public
   * <p>The ARN of the role used by the service to access Amazon Web Services resources.</p>
   */
  ResourceAccessRoleArn?: string;

  /**
   * @public
   * <p>Lists the rules that trigger a real-time alert.</p>
   */
  RealTimeAlertConfiguration?: RealTimeAlertConfiguration;

  /**
   * @public
   * <p>The elements in the configuration.</p>
   */
  Elements?: MediaInsightsPipelineConfigurationElement[];

  /**
   * @public
   * <p>The ID of the configuration.</p>
   */
  MediaInsightsPipelineConfigurationId?: string;

  /**
   * @public
   * <p>The time at which the configuration was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The time at which the configuration was last updated.</p>
   */
  UpdatedTimestamp?: Date;
}

/**
 * @public
 */
export interface CreateMediaInsightsPipelineConfigurationResponse {
  /**
   * @public
   * <p>The configuration settings for the media insights pipeline.</p>
   */
  MediaInsightsPipelineConfiguration?: MediaInsightsPipelineConfiguration;
}

/**
 * @public
 * <p>The media pipeline's RTMP configuration object.</p>
 */
export interface LiveConnectorRTMPConfiguration {
  /**
   * @public
   * <p>The URL of the RTMP configuration.</p>
   */
  Url: string | undefined;

  /**
   * @public
   * <p>The audio channels set for the RTMP configuration</p>
   */
  AudioChannels?: AudioChannelsOption;

  /**
   * @public
   * <p>The audio sample rate set for the RTMP configuration. Default: 48000.</p>
   */
  AudioSampleRate?: string;
}

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
 * <p>The media pipeline's sink configuration settings.</p>
 */
export interface LiveConnectorSinkConfiguration {
  /**
   * @public
   * <p>The sink configuration's sink type.</p>
   */
  SinkType: LiveConnectorSinkType | undefined;

  /**
   * @public
   * <p>The sink configuration's RTMP configuration settings.</p>
   */
  RTMPConfiguration: LiveConnectorRTMPConfiguration | undefined;
}

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
 * <p>The media pipeline's configuration object.</p>
 */
export interface ChimeSdkMeetingLiveConnectorConfiguration {
  /**
   * @public
   * <p>The configuration object's Chime SDK meeting ARN.</p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>The configuration object's multiplex type.</p>
   */
  MuxType: LiveConnectorMuxType | undefined;

  /**
   * @public
   * <p>The media pipeline's composited video.</p>
   */
  CompositedVideo?: CompositedVideoArtifactsConfiguration;

  /**
   * @public
   * <p>The source configuration settings of the media pipeline's configuration object.</p>
   */
  SourceConfiguration?: SourceConfiguration;
}

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
 * <p>The data source configuration object of a streaming media pipeline.</p>
 */
export interface LiveConnectorSourceConfiguration {
  /**
   * @public
   * <p>The source configuration's media source type.</p>
   */
  SourceType: LiveConnectorSourceType | undefined;

  /**
   * @public
   * <p>The configuration settings of the connector pipeline.</p>
   */
  ChimeSdkMeetingLiveConnectorConfiguration: ChimeSdkMeetingLiveConnectorConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateMediaLiveConnectorPipelineRequest {
  /**
   * @public
   * <p>The media live connector pipeline's data sources.</p>
   */
  Sources: LiveConnectorSourceConfiguration[] | undefined;

  /**
   * @public
   * <p>The media live connector pipeline's data sinks.</p>
   */
  Sinks: LiveConnectorSinkConfiguration[] | undefined;

  /**
   * @public
   * <p>The token assigned to the client making the request.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The tags associated with the media live connector pipeline.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>The connector pipeline.</p>
 */
export interface MediaLiveConnectorPipeline {
  /**
   * @public
   * <p>The connector pipeline's data sources.</p>
   */
  Sources?: LiveConnectorSourceConfiguration[];

  /**
   * @public
   * <p>The connector pipeline's data sinks.</p>
   */
  Sinks?: LiveConnectorSinkConfiguration[];

  /**
   * @public
   * <p>The connector pipeline's ID.</p>
   */
  MediaPipelineId?: string;

  /**
   * @public
   * <p>The connector pipeline's ARN.</p>
   */
  MediaPipelineArn?: string;

  /**
   * @public
   * <p>The connector pipeline's status.</p>
   */
  Status?: MediaPipelineStatus;

  /**
   * @public
   * <p>The time at which the connector pipeline was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The time at which the connector pipeline was last updated.</p>
   */
  UpdatedTimestamp?: Date;
}

/**
 * @public
 */
export interface CreateMediaLiveConnectorPipelineResponse {
  /**
   * @public
   * <p>The new media live connector pipeline.</p>
   */
  MediaLiveConnectorPipeline?: MediaLiveConnectorPipeline;
}

/**
 * @public
 * <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode;
  Message?: string;
  /**
   * @public
   * <p>The request ID associated with the call responsible for the exception.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * @public
 * <p>The configuration of an Kinesis video stream.</p>
 */
export interface KinesisVideoStreamConfiguration {
  /**
   * @public
   * <p>The Amazon Web Services Region of the video stream.</p>
   */
  Region: string | undefined;

  /**
   * @public
   * <p>The amount of time that data is retained.</p>
   */
  DataRetentionInHours?: number;
}

/**
 * @public
 */
export interface CreateMediaPipelineKinesisVideoStreamPoolRequest {
  /**
   * @public
   * <p>The configuration settings for the video stream.</p>
   */
  StreamConfiguration: KinesisVideoStreamConfiguration | undefined;

  /**
   * @public
   * <p>The name of the video stream pool.</p>
   */
  PoolName: string | undefined;

  /**
   * @public
   * <p>The token assigned to the client making the request.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The tags assigned to the video stream pool.</p>
   */
  Tags?: Tag[];
}

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
 * <p>The video stream pool configuration object.</p>
 */
export interface KinesisVideoStreamPoolConfiguration {
  /**
   * @public
   * <p>The ARN of the video stream pool configuration.</p>
   */
  PoolArn?: string;

  /**
   * @public
   * <p>The name of the video stream pool configuration.</p>
   */
  PoolName?: string;

  /**
   * @public
   * <p>The ID of the video stream pool in the configuration.</p>
   */
  PoolId?: string;

  /**
   * @public
   * <p>The status of the video stream pool in the configuration. </p>
   */
  PoolStatus?: KinesisVideoStreamPoolStatus;

  /**
   * @public
   * <p>The size of the video stream pool in the configuration.</p>
   */
  PoolSize?: number;

  /**
   * @public
   * <p>The Kinesis video stream pool configuration object.</p>
   */
  StreamConfiguration?: KinesisVideoStreamConfiguration;

  /**
   * @public
   * <p>The time at which the configuration was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The time at which the configuration was updated.</p>
   */
  UpdatedTimestamp?: Date;
}

/**
 * @public
 */
export interface CreateMediaPipelineKinesisVideoStreamPoolResponse {
  /**
   * @public
   * <p>The configuration for the Kinesis video stream pool.</p>
   */
  KinesisVideoStreamPoolConfiguration?: KinesisVideoStreamPoolConfiguration;
}

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
 * <p>Structure that contains the settings for a media stream sink.</p>
 */
export interface MediaStreamSink {
  /**
   * @public
   * <p>The ARN of the media stream sink.</p>
   */
  SinkArn: string | undefined;

  /**
   * @public
   * <p>The media stream sink's type.</p>
   */
  SinkType: MediaStreamPipelineSinkType | undefined;

  /**
   * @public
   * <p>Specifies the number of streams that the sink can accept.</p>
   */
  ReservedStreamCapacity: number | undefined;

  /**
   * @public
   * <p>The media stream sink's media stream type.</p>
   */
  MediaStreamType: MediaStreamType | undefined;
}

/**
 * @public
 * <p>Structure that contains the settings for media stream sources.</p>
 */
export interface MediaStreamSource {
  /**
   * @public
   * <p>The type of media stream source.</p>
   */
  SourceType: MediaPipelineSourceType | undefined;

  /**
   * @public
   * <p>The ARN of the media stream source. </p>
   */
  SourceArn: string | undefined;
}

/**
 * @public
 */
export interface CreateMediaStreamPipelineRequest {
  /**
   * @public
   * <p>The data sources for the media pipeline.</p>
   */
  Sources: MediaStreamSource[] | undefined;

  /**
   * @public
   * <p>The data sink for the media pipeline.</p>
   */
  Sinks: MediaStreamSink[] | undefined;

  /**
   * @public
   * <p>The token assigned to the client making the request.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The tags assigned to the media pipeline.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>Structure that contains the settings for a media stream pipeline.</p>
 */
export interface MediaStreamPipeline {
  /**
   * @public
   * <p>The ID of the media stream pipeline</p>
   */
  MediaPipelineId?: string;

  /**
   * @public
   * <p>The ARN of the media stream pipeline.</p>
   */
  MediaPipelineArn?: string;

  /**
   * @public
   * <p>The time at which the media stream pipeline was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The time at which the media stream pipeline was updated.</p>
   */
  UpdatedTimestamp?: Date;

  /**
   * @public
   * <p>The status of the media stream pipeline.</p>
   */
  Status?: MediaPipelineStatus;

  /**
   * @public
   * <p>The media stream pipeline's data sources.</p>
   */
  Sources?: MediaStreamSource[];

  /**
   * @public
   * <p>The media stream pipeline's data sinks.</p>
   */
  Sinks?: MediaStreamSink[];
}

/**
 * @public
 */
export interface CreateMediaStreamPipelineResponse {
  /**
   * @public
   * <p>The requested media pipeline.</p>
   */
  MediaStreamPipeline?: MediaStreamPipeline;
}

/**
 * @public
 */
export interface DeleteMediaCapturePipelineRequest {
  /**
   * @public
   * <p>The ID of the media pipeline being deleted. </p>
   */
  MediaPipelineId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMediaInsightsPipelineConfigurationRequest {
  /**
   * @public
   * <p>The unique identifier of the resource to be deleted. Valid values include the name and ARN of the media insights pipeline configuration.</p>
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteMediaPipelineRequest {
  /**
   * @public
   * <p>The ID of the media pipeline to delete.</p>
   */
  MediaPipelineId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMediaPipelineKinesisVideoStreamPoolRequest {
  /**
   * @public
   * <p>The ID of the pool being deleted.</p>
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetMediaCapturePipelineRequest {
  /**
   * @public
   * <p>The ID of the pipeline that you want to get.</p>
   */
  MediaPipelineId: string | undefined;
}

/**
 * @public
 */
export interface GetMediaCapturePipelineResponse {
  /**
   * @public
   * <p>The media pipeline object.</p>
   */
  MediaCapturePipeline?: MediaCapturePipeline;
}

/**
 * @public
 */
export interface GetMediaInsightsPipelineConfigurationRequest {
  /**
   * @public
   * <p>The unique identifier of the requested resource.  Valid values include the name and ARN of the media insights pipeline configuration.</p>
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetMediaInsightsPipelineConfigurationResponse {
  /**
   * @public
   * <p>The requested media insights pipeline configuration.</p>
   */
  MediaInsightsPipelineConfiguration?: MediaInsightsPipelineConfiguration;
}

/**
 * @public
 */
export interface GetMediaPipelineRequest {
  /**
   * @public
   * <p>The ID of the pipeline that you want to get.</p>
   */
  MediaPipelineId: string | undefined;
}

/**
 * @public
 * <p>A pipeline consisting of a media capture, media concatenation, or live-streaming pipeline.</p>
 */
export interface MediaPipeline {
  /**
   * @public
   * <p>A pipeline that enables users to capture audio and video.</p>
   */
  MediaCapturePipeline?: MediaCapturePipeline;

  /**
   * @public
   * <p>The connector pipeline of the media pipeline.</p>
   */
  MediaLiveConnectorPipeline?: MediaLiveConnectorPipeline;

  /**
   * @public
   * <p>The media concatenation pipeline in a media pipeline.</p>
   */
  MediaConcatenationPipeline?: MediaConcatenationPipeline;

  /**
   * @public
   * <p>The media insights pipeline of a media pipeline.</p>
   */
  MediaInsightsPipeline?: MediaInsightsPipeline;

  /**
   * @public
   * <p>Designates a media pipeline as a media stream pipeline.</p>
   */
  MediaStreamPipeline?: MediaStreamPipeline;
}

/**
 * @public
 */
export interface GetMediaPipelineResponse {
  /**
   * @public
   * <p>The media pipeline object.</p>
   */
  MediaPipeline?: MediaPipeline;
}

/**
 * @public
 */
export interface GetMediaPipelineKinesisVideoStreamPoolRequest {
  /**
   * @public
   * <p>The ID of the video stream pool.</p>
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetMediaPipelineKinesisVideoStreamPoolResponse {
  /**
   * @public
   * <p>The video stream pool configuration object.</p>
   */
  KinesisVideoStreamPoolConfiguration?: KinesisVideoStreamPoolConfiguration;
}

/**
 * @public
 */
export interface GetSpeakerSearchTaskRequest {
  /**
   * @public
   * <p>The unique identifier of the resource to be updated. Valid values include the ID and ARN of the media insights pipeline.</p>
   */
  Identifier: string | undefined;

  /**
   * @public
   * <p>The ID of the speaker search task.</p>
   */
  SpeakerSearchTaskId: string | undefined;
}

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
 * <p>A representation of an asynchronous request to perform speaker search analysis on a
 *          media insights pipeline.</p>
 */
export interface SpeakerSearchTask {
  /**
   * @public
   * <p>The speaker search task ID.</p>
   */
  SpeakerSearchTaskId?: string;

  /**
   * @public
   * <p>The status of the speaker search task.</p>
   */
  SpeakerSearchTaskStatus?: MediaPipelineTaskStatus;

  /**
   * @public
   * <p>The time at which a speaker search task was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The time at which a speaker search task was updated.</p>
   */
  UpdatedTimestamp?: Date;
}

/**
 * @public
 */
export interface GetSpeakerSearchTaskResponse {
  /**
   * @public
   * <p>The details of the speaker search task.</p>
   */
  SpeakerSearchTask?: SpeakerSearchTask;
}

/**
 * @public
 */
export interface GetVoiceToneAnalysisTaskRequest {
  /**
   * @public
   * <p>The unique identifier of the resource to be updated. Valid values include the ID and ARN of the media insights pipeline.</p>
   */
  Identifier: string | undefined;

  /**
   * @public
   * <p>The ID of the voice tone analysis task.</p>
   */
  VoiceToneAnalysisTaskId: string | undefined;
}

/**
 * @public
 * <p>A representation of an asynchronous request to perform voice tone analysis on a media insights pipeline.</p>
 */
export interface VoiceToneAnalysisTask {
  /**
   * @public
   * <p>The ID of the voice tone analysis task.</p>
   */
  VoiceToneAnalysisTaskId?: string;

  /**
   * @public
   * <p>The status of a voice tone analysis task.</p>
   */
  VoiceToneAnalysisTaskStatus?: MediaPipelineTaskStatus;

  /**
   * @public
   * <p>The time at which a voice tone analysis task was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The time at which a voice tone analysis task was updated.</p>
   */
  UpdatedTimestamp?: Date;
}

/**
 * @public
 */
export interface GetVoiceToneAnalysisTaskResponse {
  /**
   * @public
   * <p>The details of the voice tone analysis task.</p>
   */
  VoiceToneAnalysisTask?: VoiceToneAnalysisTask;
}

/**
 * @public
 */
export interface ListMediaCapturePipelinesRequest {
  /**
   * @public
   * <p>The token used to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in a single call. Valid Range: 1 - 99.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>The summary data of a media capture pipeline.</p>
 */
export interface MediaCapturePipelineSummary {
  /**
   * @public
   * <p>The ID of the media pipeline in the summary.</p>
   */
  MediaPipelineId?: string;

  /**
   * @public
   * <p>The ARN of the media pipeline in the summary.</p>
   */
  MediaPipelineArn?: string;
}

/**
 * @public
 */
export interface ListMediaCapturePipelinesResponse {
  /**
   * @public
   * <p>The media pipeline objects in the list.</p>
   */
  MediaCapturePipelines?: MediaCapturePipelineSummary[];

  /**
   * @public
   * <p>The token used to retrieve the next page of results. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListMediaInsightsPipelineConfigurationsRequest {
  /**
   * @public
   * <p>The token used to return the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>A summary of the media insights pipeline configuration.</p>
 */
export interface MediaInsightsPipelineConfigurationSummary {
  /**
   * @public
   * <p>The name of the media insights pipeline configuration.</p>
   */
  MediaInsightsPipelineConfigurationName?: string;

  /**
   * @public
   * <p>The ID of the media insights pipeline configuration.</p>
   */
  MediaInsightsPipelineConfigurationId?: string;

  /**
   * @public
   * <p>The ARN of the media insights pipeline configuration.</p>
   */
  MediaInsightsPipelineConfigurationArn?: string;
}

/**
 * @public
 */
export interface ListMediaInsightsPipelineConfigurationsResponse {
  /**
   * @public
   * <p>The requested list of media insights pipeline configurations.</p>
   */
  MediaInsightsPipelineConfigurations?: MediaInsightsPipelineConfigurationSummary[];

  /**
   * @public
   * <p>The token used to return the next page of results. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListMediaPipelineKinesisVideoStreamPoolsRequest {
  /**
   * @public
   * <p>The token used to return the next page of results. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>A summary of the Kinesis video stream pool.</p>
 */
export interface KinesisVideoStreamPoolSummary {
  /**
   * @public
   * <p>The name of the video stream pool.</p>
   */
  PoolName?: string;

  /**
   * @public
   * <p>The ID of the video stream pool.</p>
   */
  PoolId?: string;

  /**
   * @public
   * <p>The ARN of the video stream pool.</p>
   */
  PoolArn?: string;
}

/**
 * @public
 */
export interface ListMediaPipelineKinesisVideoStreamPoolsResponse {
  /**
   * @public
   * <p>The list of video stream pools.</p>
   */
  KinesisVideoStreamPools?: KinesisVideoStreamPoolSummary[];

  /**
   * @public
   * <p>The token used to return the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListMediaPipelinesRequest {
  /**
   * @public
   * <p>The token used to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in a single call. Valid Range: 1 - 99.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>The summary of the media pipeline.</p>
 */
export interface MediaPipelineSummary {
  /**
   * @public
   * <p>The ID of the media pipeline in the summary.</p>
   */
  MediaPipelineId?: string;

  /**
   * @public
   * <p>The ARN of the media pipeline in the summary.</p>
   */
  MediaPipelineArn?: string;
}

/**
 * @public
 */
export interface ListMediaPipelinesResponse {
  /**
   * @public
   * <p>The media pipeline objects in the list.</p>
   */
  MediaPipelines?: MediaPipelineSummary[];

  /**
   * @public
   * <p>The token used to retrieve the next page of results. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The ARN of the media pipeline associated with any tags. The ARN consists of the pipeline's region, resource ID, and pipeline ID.</p>
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The tags associated with the specified media pipeline.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>The task configuration settings for the Kinesis video stream source.</p>
 */
export interface KinesisVideoStreamSourceTaskConfiguration {
  /**
   * @public
   * <p>The ARN of the stream.</p>
   */
  StreamArn: string | undefined;

  /**
   * @public
   * <p>The channel ID.</p>
   */
  ChannelId: number | undefined;

  /**
   * @public
   * <p>The unique identifier of the fragment to begin processing.</p>
   */
  FragmentNumber?: string;
}

/**
 * @public
 */
export interface StartSpeakerSearchTaskRequest {
  /**
   * @public
   * <p>The unique identifier of the resource to be updated. Valid values include the ID and ARN of the media insights pipeline.</p>
   */
  Identifier: string | undefined;

  /**
   * @public
   * <p>The ARN of the voice profile domain that will store the voice profile.</p>
   */
  VoiceProfileDomainArn: string | undefined;

  /**
   * @public
   * <p>The task configuration for the Kinesis video stream source of the media insights
   *          pipeline.</p>
   */
  KinesisVideoStreamSourceTaskConfiguration?: KinesisVideoStreamSourceTaskConfiguration;

  /**
   * @public
   * <p>The unique identifier for the client request. Use a different token for different speaker search tasks.</p>
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface StartSpeakerSearchTaskResponse {
  /**
   * @public
   * <p>The details of the speaker search task.</p>
   */
  SpeakerSearchTask?: SpeakerSearchTask;
}

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
 */
export interface StartVoiceToneAnalysisTaskRequest {
  /**
   * @public
   * <p>The unique identifier of the resource to be updated. Valid values include the ID and ARN of the media insights pipeline.</p>
   */
  Identifier: string | undefined;

  /**
   * @public
   * <p>The language code.</p>
   */
  LanguageCode: VoiceAnalyticsLanguageCode | undefined;

  /**
   * @public
   * <p>The task configuration for the Kinesis video stream source of the media insights
   *          pipeline.</p>
   */
  KinesisVideoStreamSourceTaskConfiguration?: KinesisVideoStreamSourceTaskConfiguration;

  /**
   * @public
   * <p>The unique identifier for the client request. Use a different token for different voice tone analysis tasks.</p>
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface StartVoiceToneAnalysisTaskResponse {
  /**
   * @public
   * <p>The details of the voice tone analysis task.</p>
   */
  VoiceToneAnalysisTask?: VoiceToneAnalysisTask;
}

/**
 * @public
 */
export interface StopSpeakerSearchTaskRequest {
  /**
   * @public
   * <p>The unique identifier of the resource to be updated. Valid values include the ID and ARN of the media insights pipeline.</p>
   */
  Identifier: string | undefined;

  /**
   * @public
   * <p>The speaker search task ID.</p>
   */
  SpeakerSearchTaskId: string | undefined;
}

/**
 * @public
 */
export interface StopVoiceToneAnalysisTaskRequest {
  /**
   * @public
   * <p>The unique identifier of the resource to be updated. Valid values include the ID and ARN of the media insights pipeline.</p>
   */
  Identifier: string | undefined;

  /**
   * @public
   * <p>The ID of the voice tone analysis task.</p>
   */
  VoiceToneAnalysisTaskId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The ARN of the media pipeline associated with any tags. The ARN consists of the pipeline's endpoint region, resource ID, and pipeline ID.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>The tags associated with the specified media pipeline.</p>
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
   * @public
   * <p>The ARN of the pipeline that you want to untag.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>The key/value pairs in the tag that you want to remove.</p>
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
   * @public
   * <p>The unique identifier for the resource to be updated. Valid values include the name and ARN of the media insights pipeline configuration.</p>
   */
  Identifier: string | undefined;

  /**
   * @public
   * <p>The ARN of the role used by the service to access Amazon Web Services resources.</p>
   */
  ResourceAccessRoleArn: string | undefined;

  /**
   * @public
   * <p>The configuration settings for real-time alerts for the media insights pipeline.</p>
   */
  RealTimeAlertConfiguration?: RealTimeAlertConfiguration;

  /**
   * @public
   * <p>The elements in the request, such as a processor for Amazon Transcribe or a sink for a Kinesis Data Stream..</p>
   */
  Elements: MediaInsightsPipelineConfigurationElement[] | undefined;
}

/**
 * @public
 */
export interface UpdateMediaInsightsPipelineConfigurationResponse {
  /**
   * @public
   * <p>The updated configuration settings.</p>
   */
  MediaInsightsPipelineConfiguration?: MediaInsightsPipelineConfiguration;
}

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

/**
 * @public
 */
export interface UpdateMediaInsightsPipelineStatusRequest {
  /**
   * @public
   * <p>The unique identifier of the resource to be updated. Valid values include the ID and ARN of the media insights pipeline.</p>
   */
  Identifier: string | undefined;

  /**
   * @public
   * <p>The requested status of the media insights pipeline.</p>
   */
  UpdateStatus: MediaPipelineStatusUpdate | undefined;
}

/**
 * @public
 * <p>The updated Kinesis video stream configuration object.</p>
 */
export interface KinesisVideoStreamConfigurationUpdate {
  /**
   * @public
   * <p>The updated time that data is retained.</p>
   */
  DataRetentionInHours?: number;
}

/**
 * @public
 */
export interface UpdateMediaPipelineKinesisVideoStreamPoolRequest {
  /**
   * @public
   * <p>The ID of the video stream pool.</p>
   */
  Identifier: string | undefined;

  /**
   * @public
   * <p>The configuration settings for the video stream.</p>
   */
  StreamConfiguration?: KinesisVideoStreamConfigurationUpdate;
}

/**
 * @public
 */
export interface UpdateMediaPipelineKinesisVideoStreamPoolResponse {
  /**
   * @public
   * <p>The video stream pool configuration object.</p>
   */
  KinesisVideoStreamPoolConfiguration?: KinesisVideoStreamPoolConfiguration;
}

/**
 * @internal
 */
export const SelectedVideoStreamsFilterSensitiveLog = (obj: SelectedVideoStreams): any => ({
  ...obj,
  ...(obj.ExternalUserIds && { ExternalUserIds: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SourceConfigurationFilterSensitiveLog = (obj: SourceConfiguration): any => ({
  ...obj,
  ...(obj.SelectedVideoStreams && {
    SelectedVideoStreams: SelectedVideoStreamsFilterSensitiveLog(obj.SelectedVideoStreams),
  }),
});

/**
 * @internal
 */
export const ChimeSdkMeetingConfigurationFilterSensitiveLog = (obj: ChimeSdkMeetingConfiguration): any => ({
  ...obj,
  ...(obj.SourceConfiguration && {
    SourceConfiguration: SourceConfigurationFilterSensitiveLog(obj.SourceConfiguration),
  }),
});

/**
 * @internal
 */
export const CreateMediaCapturePipelineRequestFilterSensitiveLog = (obj: CreateMediaCapturePipelineRequest): any => ({
  ...obj,
  ...(obj.SourceArn && { SourceArn: SENSITIVE_STRING }),
  ...(obj.SinkArn && { SinkArn: SENSITIVE_STRING }),
  ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
  ...(obj.ChimeSdkMeetingConfiguration && {
    ChimeSdkMeetingConfiguration: ChimeSdkMeetingConfigurationFilterSensitiveLog(obj.ChimeSdkMeetingConfiguration),
  }),
});

/**
 * @internal
 */
export const MediaCapturePipelineFilterSensitiveLog = (obj: MediaCapturePipeline): any => ({
  ...obj,
  ...(obj.SourceArn && { SourceArn: SENSITIVE_STRING }),
  ...(obj.SinkArn && { SinkArn: SENSITIVE_STRING }),
  ...(obj.ChimeSdkMeetingConfiguration && {
    ChimeSdkMeetingConfiguration: ChimeSdkMeetingConfigurationFilterSensitiveLog(obj.ChimeSdkMeetingConfiguration),
  }),
});

/**
 * @internal
 */
export const CreateMediaCapturePipelineResponseFilterSensitiveLog = (obj: CreateMediaCapturePipelineResponse): any => ({
  ...obj,
  ...(obj.MediaCapturePipeline && {
    MediaCapturePipeline: MediaCapturePipelineFilterSensitiveLog(obj.MediaCapturePipeline),
  }),
});

/**
 * @internal
 */
export const S3BucketSinkConfigurationFilterSensitiveLog = (obj: S3BucketSinkConfiguration): any => ({
  ...obj,
  ...(obj.Destination && { Destination: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ConcatenationSinkFilterSensitiveLog = (obj: ConcatenationSink): any => ({
  ...obj,
  ...(obj.S3BucketSinkConfiguration && {
    S3BucketSinkConfiguration: S3BucketSinkConfigurationFilterSensitiveLog(obj.S3BucketSinkConfiguration),
  }),
});

/**
 * @internal
 */
export const MediaCapturePipelineSourceConfigurationFilterSensitiveLog = (
  obj: MediaCapturePipelineSourceConfiguration
): any => ({
  ...obj,
  ...(obj.MediaPipelineArn && { MediaPipelineArn: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ConcatenationSourceFilterSensitiveLog = (obj: ConcatenationSource): any => ({
  ...obj,
  ...(obj.MediaCapturePipelineSourceConfiguration && {
    MediaCapturePipelineSourceConfiguration: MediaCapturePipelineSourceConfigurationFilterSensitiveLog(
      obj.MediaCapturePipelineSourceConfiguration
    ),
  }),
});

/**
 * @internal
 */
export const CreateMediaConcatenationPipelineRequestFilterSensitiveLog = (
  obj: CreateMediaConcatenationPipelineRequest
): any => ({
  ...obj,
  ...(obj.Sources && { Sources: obj.Sources.map((item) => ConcatenationSourceFilterSensitiveLog(item)) }),
  ...(obj.Sinks && { Sinks: obj.Sinks.map((item) => ConcatenationSinkFilterSensitiveLog(item)) }),
  ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const MediaConcatenationPipelineFilterSensitiveLog = (obj: MediaConcatenationPipeline): any => ({
  ...obj,
  ...(obj.Sources && { Sources: obj.Sources.map((item) => ConcatenationSourceFilterSensitiveLog(item)) }),
  ...(obj.Sinks && { Sinks: obj.Sinks.map((item) => ConcatenationSinkFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateMediaConcatenationPipelineResponseFilterSensitiveLog = (
  obj: CreateMediaConcatenationPipelineResponse
): any => ({
  ...obj,
  ...(obj.MediaConcatenationPipeline && {
    MediaConcatenationPipeline: MediaConcatenationPipelineFilterSensitiveLog(obj.MediaConcatenationPipeline),
  }),
});

/**
 * @internal
 */
export const S3RecordingSinkRuntimeConfigurationFilterSensitiveLog = (
  obj: S3RecordingSinkRuntimeConfiguration
): any => ({
  ...obj,
  ...(obj.Destination && { Destination: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateMediaInsightsPipelineRequestFilterSensitiveLog = (obj: CreateMediaInsightsPipelineRequest): any => ({
  ...obj,
  ...(obj.MediaInsightsPipelineConfigurationArn && { MediaInsightsPipelineConfigurationArn: SENSITIVE_STRING }),
  ...(obj.MediaInsightsRuntimeMetadata && { MediaInsightsRuntimeMetadata: SENSITIVE_STRING }),
  ...(obj.S3RecordingSinkRuntimeConfiguration && {
    S3RecordingSinkRuntimeConfiguration: S3RecordingSinkRuntimeConfigurationFilterSensitiveLog(
      obj.S3RecordingSinkRuntimeConfiguration
    ),
  }),
  ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const MediaInsightsPipelineFilterSensitiveLog = (obj: MediaInsightsPipeline): any => ({
  ...obj,
  ...(obj.MediaPipelineArn && { MediaPipelineArn: SENSITIVE_STRING }),
  ...(obj.MediaInsightsPipelineConfigurationArn && { MediaInsightsPipelineConfigurationArn: SENSITIVE_STRING }),
  ...(obj.MediaInsightsRuntimeMetadata && { MediaInsightsRuntimeMetadata: SENSITIVE_STRING }),
  ...(obj.S3RecordingSinkRuntimeConfiguration && {
    S3RecordingSinkRuntimeConfiguration: S3RecordingSinkRuntimeConfigurationFilterSensitiveLog(
      obj.S3RecordingSinkRuntimeConfiguration
    ),
  }),
});

/**
 * @internal
 */
export const CreateMediaInsightsPipelineResponseFilterSensitiveLog = (
  obj: CreateMediaInsightsPipelineResponse
): any => ({
  ...obj,
  ...(obj.MediaInsightsPipeline && {
    MediaInsightsPipeline: MediaInsightsPipelineFilterSensitiveLog(obj.MediaInsightsPipeline),
  }),
});

/**
 * @internal
 */
export const KinesisDataStreamSinkConfigurationFilterSensitiveLog = (obj: KinesisDataStreamSinkConfiguration): any => ({
  ...obj,
  ...(obj.InsightsTarget && { InsightsTarget: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const LambdaFunctionSinkConfigurationFilterSensitiveLog = (obj: LambdaFunctionSinkConfiguration): any => ({
  ...obj,
  ...(obj.InsightsTarget && { InsightsTarget: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const S3RecordingSinkConfigurationFilterSensitiveLog = (obj: S3RecordingSinkConfiguration): any => ({
  ...obj,
  ...(obj.Destination && { Destination: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SnsTopicSinkConfigurationFilterSensitiveLog = (obj: SnsTopicSinkConfiguration): any => ({
  ...obj,
  ...(obj.InsightsTarget && { InsightsTarget: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SqsQueueSinkConfigurationFilterSensitiveLog = (obj: SqsQueueSinkConfiguration): any => ({
  ...obj,
  ...(obj.InsightsTarget && { InsightsTarget: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const MediaInsightsPipelineConfigurationElementFilterSensitiveLog = (
  obj: MediaInsightsPipelineConfigurationElement
): any => ({
  ...obj,
  ...(obj.KinesisDataStreamSinkConfiguration && {
    KinesisDataStreamSinkConfiguration: KinesisDataStreamSinkConfigurationFilterSensitiveLog(
      obj.KinesisDataStreamSinkConfiguration
    ),
  }),
  ...(obj.S3RecordingSinkConfiguration && {
    S3RecordingSinkConfiguration: S3RecordingSinkConfigurationFilterSensitiveLog(obj.S3RecordingSinkConfiguration),
  }),
  ...(obj.LambdaFunctionSinkConfiguration && {
    LambdaFunctionSinkConfiguration: LambdaFunctionSinkConfigurationFilterSensitiveLog(
      obj.LambdaFunctionSinkConfiguration
    ),
  }),
  ...(obj.SqsQueueSinkConfiguration && {
    SqsQueueSinkConfiguration: SqsQueueSinkConfigurationFilterSensitiveLog(obj.SqsQueueSinkConfiguration),
  }),
  ...(obj.SnsTopicSinkConfiguration && {
    SnsTopicSinkConfiguration: SnsTopicSinkConfigurationFilterSensitiveLog(obj.SnsTopicSinkConfiguration),
  }),
});

/**
 * @internal
 */
export const CreateMediaInsightsPipelineConfigurationRequestFilterSensitiveLog = (
  obj: CreateMediaInsightsPipelineConfigurationRequest
): any => ({
  ...obj,
  ...(obj.ResourceAccessRoleArn && { ResourceAccessRoleArn: SENSITIVE_STRING }),
  ...(obj.Elements && {
    Elements: obj.Elements.map((item) => MediaInsightsPipelineConfigurationElementFilterSensitiveLog(item)),
  }),
  ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const MediaInsightsPipelineConfigurationFilterSensitiveLog = (obj: MediaInsightsPipelineConfiguration): any => ({
  ...obj,
  ...(obj.MediaInsightsPipelineConfigurationArn && { MediaInsightsPipelineConfigurationArn: SENSITIVE_STRING }),
  ...(obj.ResourceAccessRoleArn && { ResourceAccessRoleArn: SENSITIVE_STRING }),
  ...(obj.Elements && {
    Elements: obj.Elements.map((item) => MediaInsightsPipelineConfigurationElementFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const CreateMediaInsightsPipelineConfigurationResponseFilterSensitiveLog = (
  obj: CreateMediaInsightsPipelineConfigurationResponse
): any => ({
  ...obj,
  ...(obj.MediaInsightsPipelineConfiguration && {
    MediaInsightsPipelineConfiguration: MediaInsightsPipelineConfigurationFilterSensitiveLog(
      obj.MediaInsightsPipelineConfiguration
    ),
  }),
});

/**
 * @internal
 */
export const LiveConnectorRTMPConfigurationFilterSensitiveLog = (obj: LiveConnectorRTMPConfiguration): any => ({
  ...obj,
  ...(obj.Url && { Url: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const LiveConnectorSinkConfigurationFilterSensitiveLog = (obj: LiveConnectorSinkConfiguration): any => ({
  ...obj,
  ...(obj.RTMPConfiguration && {
    RTMPConfiguration: LiveConnectorRTMPConfigurationFilterSensitiveLog(obj.RTMPConfiguration),
  }),
});

/**
 * @internal
 */
export const ChimeSdkMeetingLiveConnectorConfigurationFilterSensitiveLog = (
  obj: ChimeSdkMeetingLiveConnectorConfiguration
): any => ({
  ...obj,
  ...(obj.Arn && { Arn: SENSITIVE_STRING }),
  ...(obj.SourceConfiguration && {
    SourceConfiguration: SourceConfigurationFilterSensitiveLog(obj.SourceConfiguration),
  }),
});

/**
 * @internal
 */
export const LiveConnectorSourceConfigurationFilterSensitiveLog = (obj: LiveConnectorSourceConfiguration): any => ({
  ...obj,
  ...(obj.ChimeSdkMeetingLiveConnectorConfiguration && {
    ChimeSdkMeetingLiveConnectorConfiguration: ChimeSdkMeetingLiveConnectorConfigurationFilterSensitiveLog(
      obj.ChimeSdkMeetingLiveConnectorConfiguration
    ),
  }),
});

/**
 * @internal
 */
export const CreateMediaLiveConnectorPipelineRequestFilterSensitiveLog = (
  obj: CreateMediaLiveConnectorPipelineRequest
): any => ({
  ...obj,
  ...(obj.Sources && { Sources: obj.Sources.map((item) => LiveConnectorSourceConfigurationFilterSensitiveLog(item)) }),
  ...(obj.Sinks && { Sinks: obj.Sinks.map((item) => LiveConnectorSinkConfigurationFilterSensitiveLog(item)) }),
  ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const MediaLiveConnectorPipelineFilterSensitiveLog = (obj: MediaLiveConnectorPipeline): any => ({
  ...obj,
  ...(obj.Sources && { Sources: obj.Sources.map((item) => LiveConnectorSourceConfigurationFilterSensitiveLog(item)) }),
  ...(obj.Sinks && { Sinks: obj.Sinks.map((item) => LiveConnectorSinkConfigurationFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateMediaLiveConnectorPipelineResponseFilterSensitiveLog = (
  obj: CreateMediaLiveConnectorPipelineResponse
): any => ({
  ...obj,
  ...(obj.MediaLiveConnectorPipeline && {
    MediaLiveConnectorPipeline: MediaLiveConnectorPipelineFilterSensitiveLog(obj.MediaLiveConnectorPipeline),
  }),
});

/**
 * @internal
 */
export const CreateMediaPipelineKinesisVideoStreamPoolRequestFilterSensitiveLog = (
  obj: CreateMediaPipelineKinesisVideoStreamPoolRequest
): any => ({
  ...obj,
  ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const KinesisVideoStreamPoolConfigurationFilterSensitiveLog = (
  obj: KinesisVideoStreamPoolConfiguration
): any => ({
  ...obj,
  ...(obj.PoolArn && { PoolArn: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateMediaPipelineKinesisVideoStreamPoolResponseFilterSensitiveLog = (
  obj: CreateMediaPipelineKinesisVideoStreamPoolResponse
): any => ({
  ...obj,
  ...(obj.KinesisVideoStreamPoolConfiguration && {
    KinesisVideoStreamPoolConfiguration: KinesisVideoStreamPoolConfigurationFilterSensitiveLog(
      obj.KinesisVideoStreamPoolConfiguration
    ),
  }),
});

/**
 * @internal
 */
export const MediaStreamSinkFilterSensitiveLog = (obj: MediaStreamSink): any => ({
  ...obj,
  ...(obj.SinkArn && { SinkArn: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const MediaStreamSourceFilterSensitiveLog = (obj: MediaStreamSource): any => ({
  ...obj,
  ...(obj.SourceArn && { SourceArn: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateMediaStreamPipelineRequestFilterSensitiveLog = (obj: CreateMediaStreamPipelineRequest): any => ({
  ...obj,
  ...(obj.Sources && { Sources: obj.Sources.map((item) => MediaStreamSourceFilterSensitiveLog(item)) }),
  ...(obj.Sinks && { Sinks: obj.Sinks.map((item) => MediaStreamSinkFilterSensitiveLog(item)) }),
  ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const MediaStreamPipelineFilterSensitiveLog = (obj: MediaStreamPipeline): any => ({
  ...obj,
  ...(obj.Sources && { Sources: obj.Sources.map((item) => MediaStreamSourceFilterSensitiveLog(item)) }),
  ...(obj.Sinks && { Sinks: obj.Sinks.map((item) => MediaStreamSinkFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateMediaStreamPipelineResponseFilterSensitiveLog = (obj: CreateMediaStreamPipelineResponse): any => ({
  ...obj,
  ...(obj.MediaStreamPipeline && {
    MediaStreamPipeline: MediaStreamPipelineFilterSensitiveLog(obj.MediaStreamPipeline),
  }),
});

/**
 * @internal
 */
export const GetMediaCapturePipelineResponseFilterSensitiveLog = (obj: GetMediaCapturePipelineResponse): any => ({
  ...obj,
  ...(obj.MediaCapturePipeline && {
    MediaCapturePipeline: MediaCapturePipelineFilterSensitiveLog(obj.MediaCapturePipeline),
  }),
});

/**
 * @internal
 */
export const GetMediaInsightsPipelineConfigurationResponseFilterSensitiveLog = (
  obj: GetMediaInsightsPipelineConfigurationResponse
): any => ({
  ...obj,
  ...(obj.MediaInsightsPipelineConfiguration && {
    MediaInsightsPipelineConfiguration: MediaInsightsPipelineConfigurationFilterSensitiveLog(
      obj.MediaInsightsPipelineConfiguration
    ),
  }),
});

/**
 * @internal
 */
export const MediaPipelineFilterSensitiveLog = (obj: MediaPipeline): any => ({
  ...obj,
  ...(obj.MediaCapturePipeline && {
    MediaCapturePipeline: MediaCapturePipelineFilterSensitiveLog(obj.MediaCapturePipeline),
  }),
  ...(obj.MediaLiveConnectorPipeline && {
    MediaLiveConnectorPipeline: MediaLiveConnectorPipelineFilterSensitiveLog(obj.MediaLiveConnectorPipeline),
  }),
  ...(obj.MediaConcatenationPipeline && {
    MediaConcatenationPipeline: MediaConcatenationPipelineFilterSensitiveLog(obj.MediaConcatenationPipeline),
  }),
  ...(obj.MediaInsightsPipeline && {
    MediaInsightsPipeline: MediaInsightsPipelineFilterSensitiveLog(obj.MediaInsightsPipeline),
  }),
  ...(obj.MediaStreamPipeline && {
    MediaStreamPipeline: MediaStreamPipelineFilterSensitiveLog(obj.MediaStreamPipeline),
  }),
});

/**
 * @internal
 */
export const GetMediaPipelineResponseFilterSensitiveLog = (obj: GetMediaPipelineResponse): any => ({
  ...obj,
  ...(obj.MediaPipeline && { MediaPipeline: MediaPipelineFilterSensitiveLog(obj.MediaPipeline) }),
});

/**
 * @internal
 */
export const GetMediaPipelineKinesisVideoStreamPoolResponseFilterSensitiveLog = (
  obj: GetMediaPipelineKinesisVideoStreamPoolResponse
): any => ({
  ...obj,
  ...(obj.KinesisVideoStreamPoolConfiguration && {
    KinesisVideoStreamPoolConfiguration: KinesisVideoStreamPoolConfigurationFilterSensitiveLog(
      obj.KinesisVideoStreamPoolConfiguration
    ),
  }),
});

/**
 * @internal
 */
export const MediaInsightsPipelineConfigurationSummaryFilterSensitiveLog = (
  obj: MediaInsightsPipelineConfigurationSummary
): any => ({
  ...obj,
  ...(obj.MediaInsightsPipelineConfigurationArn && { MediaInsightsPipelineConfigurationArn: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListMediaInsightsPipelineConfigurationsResponseFilterSensitiveLog = (
  obj: ListMediaInsightsPipelineConfigurationsResponse
): any => ({
  ...obj,
  ...(obj.MediaInsightsPipelineConfigurations && {
    MediaInsightsPipelineConfigurations: obj.MediaInsightsPipelineConfigurations.map((item) =>
      MediaInsightsPipelineConfigurationSummaryFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const KinesisVideoStreamPoolSummaryFilterSensitiveLog = (obj: KinesisVideoStreamPoolSummary): any => ({
  ...obj,
  ...(obj.PoolArn && { PoolArn: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListMediaPipelineKinesisVideoStreamPoolsResponseFilterSensitiveLog = (
  obj: ListMediaPipelineKinesisVideoStreamPoolsResponse
): any => ({
  ...obj,
  ...(obj.KinesisVideoStreamPools && {
    KinesisVideoStreamPools: obj.KinesisVideoStreamPools.map((item) =>
      KinesisVideoStreamPoolSummaryFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const StartSpeakerSearchTaskRequestFilterSensitiveLog = (obj: StartSpeakerSearchTaskRequest): any => ({
  ...obj,
  ...(obj.VoiceProfileDomainArn && { VoiceProfileDomainArn: SENSITIVE_STRING }),
  ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StartVoiceToneAnalysisTaskRequestFilterSensitiveLog = (obj: StartVoiceToneAnalysisTaskRequest): any => ({
  ...obj,
  ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateMediaInsightsPipelineConfigurationRequestFilterSensitiveLog = (
  obj: UpdateMediaInsightsPipelineConfigurationRequest
): any => ({
  ...obj,
  ...(obj.ResourceAccessRoleArn && { ResourceAccessRoleArn: SENSITIVE_STRING }),
  ...(obj.Elements && {
    Elements: obj.Elements.map((item) => MediaInsightsPipelineConfigurationElementFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const UpdateMediaInsightsPipelineConfigurationResponseFilterSensitiveLog = (
  obj: UpdateMediaInsightsPipelineConfigurationResponse
): any => ({
  ...obj,
  ...(obj.MediaInsightsPipelineConfiguration && {
    MediaInsightsPipelineConfiguration: MediaInsightsPipelineConfigurationFilterSensitiveLog(
      obj.MediaInsightsPipelineConfiguration
    ),
  }),
});

/**
 * @internal
 */
export const UpdateMediaPipelineKinesisVideoStreamPoolResponseFilterSensitiveLog = (
  obj: UpdateMediaPipelineKinesisVideoStreamPoolResponse
): any => ({
  ...obj,
  ...(obj.KinesisVideoStreamPoolConfiguration && {
    KinesisVideoStreamPoolConfiguration: KinesisVideoStreamPoolConfigurationFilterSensitiveLog(
      obj.KinesisVideoStreamPoolConfiguration
    ),
  }),
});
