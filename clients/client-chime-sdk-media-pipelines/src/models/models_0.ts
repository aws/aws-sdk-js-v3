// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

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
 * <p>Defines the configuration for an <code>ActiveSpeakerOnly</code> video tile.</p>
 * @public
 */
export interface ActiveSpeakerOnlyConfiguration {
  /**
   * <p>The position of the <code>ActiveSpeakerOnly</code> video tile.</p>
   * @public
   */
  ActiveSpeakerPosition?: ActiveSpeakerPosition | undefined;
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
 * <p>Allows you to specify additional settings for your Call Analytics post-call request, including output locations for your redacted transcript, which IAM role to use, and which encryption key to use.</p>
 *          <p>
 *             <code>DataAccessRoleArn</code> and <code>OutputLocation</code> are required fields.</p>
 *          <p>
 *             <code>PostCallAnalyticsSettings</code> provides the same insights as a Call Analytics post-call transcription. For more information, refer to
 *          <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-post-call.html">Post-call analytics with real-time transcriptions</a> in the <i>Amazon Transcribe Developer Guide</i>.</p>
 * @public
 */
export interface PostCallAnalyticsSettings {
  /**
   * <p>The URL of the Amazon S3 bucket that contains the post-call data.</p>
   * @public
   */
  OutputLocation: string | undefined;

  /**
   * <p>The ARN of the role used by Amazon Web Services Transcribe to upload your post call analysis. For more information, see
   *          <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-post-call.html">Post-call analytics with real-time transcriptions</a> in the <i>Amazon Transcribe Developer Guide</i>.</p>
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>The content redaction output settings for a post-call analysis task.</p>
   * @public
   */
  ContentRedactionOutput?: ContentRedactionOutput | undefined;

  /**
   * <p>The ID of the KMS (Key Management Service) key used to encrypt the output.</p>
   * @public
   */
  OutputEncryptionKMSKeyId?: string | undefined;
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
 * <p>A structure that contains the configuration settings for an Amazon Transcribe call
 *          analytics processor.</p>
 * @public
 */
export interface AmazonTranscribeCallAnalyticsProcessorConfiguration {
  /**
   * <p>The language code in the configuration.</p>
   * @public
   */
  LanguageCode: CallAnalyticsLanguageCode | undefined;

  /**
   * <p>Specifies the name of the custom vocabulary to use when processing a transcription. Note
   *          that vocabulary names are case sensitive.</p>
   *          <p>If the language of the specified custom vocabulary doesn't match the language identified in your media, the custom vocabulary is not applied to your transcription.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html">Custom vocabularies</a> in the <i>Amazon Transcribe Developer Guide</i>.</p>
   *          <p>Length Constraints: Minimum length of 1. Maximum length of 200. </p>
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * <p>Specifies the name of the custom vocabulary filter to use when processing a
   *          transcription. Note that vocabulary filter names are case sensitive.</p>
   *          <p>If the language of the specified custom vocabulary filter doesn't match the language identified in your media, the vocabulary filter is not applied to your transcription.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/vocabulary-filtering.html">Using vocabulary filtering with unwanted words</a>
   *          in the <i>Amazon Transcribe Developer Guide</i>.</p>
   *          <p>Length Constraints: Minimum length of 1. Maximum length of 200. </p>
   * @public
   */
  VocabularyFilterName?: string | undefined;

  /**
   * <p>Specifies how to apply a vocabulary filter to a transcript.</p>
   *          <p>To replace words with <b>***</b>, choose <code>mask</code>.</p>
   *          <p>To delete words, choose <code>remove</code>.</p>
   *          <p>To flag words without changing them, choose <code>tag</code>. </p>
   * @public
   */
  VocabularyFilterMethod?: VocabularyFilterMethod | undefined;

  /**
   * <p>Specifies the name of the custom language model to use when processing a transcription.
   *          Note that language model names are case sensitive.</p>
   *          <p>The language of the specified language model must match the language code specified
   *          in the transcription request. If the languages don't match, the custom language model isn't
   *          applied. Language mismatches don't generate errors or warnings.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-language-models.html">Custom language models</a> in the <i>Amazon Transcribe Developer Guide</i>.</p>
   * @public
   */
  LanguageModelName?: string | undefined;

  /**
   * <p>Enables partial result stabilization for your transcription. Partial result stabilization can reduce latency in your output, but may impact accuracy.
   *          For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html#streaming-partial-result-stabilization">Partial-result stabilization</a>
   *          in the <i>Amazon Transcribe Developer Guide</i>.</p>
   * @public
   */
  EnablePartialResultsStabilization?: boolean | undefined;

  /**
   * <p>Specifies the level of stability to use when you enable partial results stabilization
   *             (<code>EnablePartialResultsStabilization</code>).</p>
   *          <p>Low stability provides the highest accuracy. High stability transcribes faster, but with slightly lower accuracy.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html#streaming-partial-result-stabilization">Partial-result stabilization</a>
   *          in the <i>Amazon Transcribe Developer Guide</i>.</p>
   * @public
   */
  PartialResultsStability?: PartialResultsStability | undefined;

  /**
   * <p>Labels all personally identifiable information (PII) identified in your transcript.</p>
   *          <p>Content identification is performed at the segment level; PII specified in <code>PiiEntityTypes</code> is flagged upon complete transcription of an audio segment.</p>
   *          <p>You can’t set <code>ContentIdentificationType</code> and <code>ContentRedactionType</code> in the same request. If you do, your request returns a <code>BadRequestException</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/pii-redaction.html">Redacting or identifying personally identifiable information</a>
   *          in the <i>Amazon Transcribe Developer Guide</i>.</p>
   * @public
   */
  ContentIdentificationType?: ContentType | undefined;

  /**
   * <p>Redacts all personally identifiable information (PII) identified in your transcript.</p>
   *          <p>Content redaction is performed at the segment level; PII specified in <code>PiiEntityTypes</code> is redacted upon complete transcription of an audio segment.</p>
   *          <p>You can’t set <code>ContentRedactionType</code> and <code>ContentIdentificationType</code> in the same request. If you do, your request returns a <code>BadRequestException</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/pii-redaction.html">Redacting or identifying personally identifiable information</a>
   *          in the <i>Amazon Transcribe Developer Guide</i>.</p>
   * @public
   */
  ContentRedactionType?: ContentType | undefined;

  /**
   * <p>Specifies the types of personally identifiable information (PII) to redact from a transcript. You can include as many types as you'd like, or you can select <code>ALL</code>.</p>
   *          <p>To include <code>PiiEntityTypes</code> in your Call Analytics request, you must also include <code>ContentIdentificationType</code> or <code>ContentRedactionType</code>, but you can't include both. </p>
   *          <p>Values must be comma-separated and can include: <code>ADDRESS</code>, <code>BANK_ACCOUNT_NUMBER</code>, <code>BANK_ROUTING</code>, <code>CREDIT_DEBIT_CVV</code>,
   *                <code>CREDIT_DEBIT_EXPIRY</code>, <code>CREDIT_DEBIT_NUMBER</code>, <code>EMAIL</code>,
   *                <code>NAME</code>, <code>PHONE</code>, <code>PIN</code>, <code>SSN</code>, or <code>ALL</code>.</p>
   *          <p>Length Constraints: Minimum length of 1. Maximum length of 300.</p>
   * @public
   */
  PiiEntityTypes?: string | undefined;

  /**
   * <p>If true, <code>UtteranceEvents</code> with <code>IsPartial: true</code> are filtered out of the insights target.</p>
   * @public
   */
  FilterPartialResults?: boolean | undefined;

  /**
   * <p>The settings for a post-call analysis task in an analytics configuration.</p>
   * @public
   */
  PostCallAnalyticsSettings?: PostCallAnalyticsSettings | undefined;

  /**
   * <p>By default, all <code>CategoryEvents</code> are sent to the insights target. If this parameter is specified, only included categories are sent to the insights target. </p>
   * @public
   */
  CallAnalyticsStreamCategories?: string[] | undefined;
}

/**
 * <p>A structure that contains the configuration settings for an Amazon Transcribe processor.</p>
 *          <note>
 *             <p>Calls to this API must include a <code>LanguageCode</code>, <code>IdentifyLanguage</code>, or <code>IdentifyMultipleLanguages</code> parameter.
 *          If you include more than one of those parameters, your transcription job fails.</p>
 *          </note>
 * @public
 */
export interface AmazonTranscribeProcessorConfiguration {
  /**
   * <p>The language code that represents the language spoken in your audio.</p>
   *          <p>If you're unsure of the language spoken in your audio, consider using
   *             <code>IdentifyLanguage</code> to enable automatic language identification.</p>
   *          <p>For a list of languages that real-time Call Analytics supports, see the <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported languages table</a>
   *          in the <i>Amazon Transcribe Developer Guide</i>.</p>
   * @public
   */
  LanguageCode?: CallAnalyticsLanguageCode | undefined;

  /**
   * <p>The name of the custom vocabulary that you specified in your Call Analytics
   *          request.</p>
   *          <p>Length Constraints: Minimum length of 1. Maximum length of 200.</p>
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * <p>The name of the custom vocabulary filter that you specified in your Call Analytics
   *          request.</p>
   *          <p>Length Constraints: Minimum length of 1. Maximum length of 200.</p>
   * @public
   */
  VocabularyFilterName?: string | undefined;

  /**
   * <p>The vocabulary filtering method used in your Call Analytics transcription.</p>
   * @public
   */
  VocabularyFilterMethod?: VocabularyFilterMethod | undefined;

  /**
   * <p>Enables speaker partitioning (diarization) in your transcription output. Speaker partitioning labels the speech from individual speakers in your media file.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/diarization.html">Partitioning speakers (diarization)</a> in the <i>Amazon Transcribe Developer Guide</i>.</p>
   * @public
   */
  ShowSpeakerLabel?: boolean | undefined;

  /**
   * <p>Enables partial result stabilization for your transcription. Partial result stabilization can reduce latency in your output, but may impact accuracy.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html#streaming-partial-result-stabilization">Partial-result stabilization</a>
   *          in the <i>Amazon Transcribe Developer Guide</i>.</p>
   * @public
   */
  EnablePartialResultsStabilization?: boolean | undefined;

  /**
   * <p>The level of stability to use when you enable partial results stabilization
   *             (<code>EnablePartialResultsStabilization</code>).</p>
   *          <p>Low stability provides the highest accuracy. High stability transcribes faster, but with slightly lower accuracy.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html#streaming-partial-result-stabilization">Partial-result stabilization</a>
   *          in the <i>Amazon Transcribe Developer Guide</i>.</p>
   * @public
   */
  PartialResultsStability?: PartialResultsStability | undefined;

  /**
   * <p>Labels all personally identifiable information (PII) identified in your transcript.</p>
   *          <p>Content identification is performed at the segment level; PII specified in
   *             <code>PiiEntityTypes</code> is flagged upon complete transcription of an audio
   *          segment.</p>
   *          <p>You can’t set <code>ContentIdentificationType</code> and
   *             <code>ContentRedactionType</code> in the same request. If you set both, your request
   *          returns a <code>BadRequestException</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/pii-redaction.html">Redacting or identifying personally identifiable information</a>
   *          in the <i>Amazon Transcribe Developer Guide</i>.</p>
   * @public
   */
  ContentIdentificationType?: ContentType | undefined;

  /**
   * <p>Redacts all personally identifiable information (PII) identified in your transcript.</p>
   *          <p>Content redaction is performed at the segment level; PII specified in PiiEntityTypes is redacted upon complete transcription of an audio segment.</p>
   *          <p>You can’t set ContentRedactionType and ContentIdentificationType in the same request. If you set both, your request returns a <code>BadRequestException</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/pii-redaction.html">Redacting or identifying personally identifiable information</a>
   *          in the <i>Amazon Transcribe Developer Guide</i>.</p>
   * @public
   */
  ContentRedactionType?: ContentType | undefined;

  /**
   * <p>The types of personally identifiable information (PII) to redact from a transcript. You
   *          can include as many types as you'd like, or you can select <code>ALL</code>.</p>
   *          <p>To include <code>PiiEntityTypes</code> in your Call Analytics request, you must also include <code>ContentIdentificationType</code> or <code>ContentRedactionType</code>, but you can't include both.</p>
   *          <p>Values must be comma-separated and can include: <code>ADDRESS</code>, <code>BANK_ACCOUNT_NUMBER</code>, <code>BANK_ROUTING</code>, <code>CREDIT_DEBIT_CVV</code>,
   *          <code>CREDIT_DEBIT_EXPIRY</code>, <code>CREDIT_DEBIT_NUMBER</code>, <code>EMAIL</code>,
   *          <code>NAME</code>, <code>PHONE</code>, <code>PIN</code>, <code>SSN</code>, or <code>ALL</code>.</p>
   *          <p>If you leave this parameter empty, the default behavior is equivalent to <code>ALL</code>.</p>
   * @public
   */
  PiiEntityTypes?: string | undefined;

  /**
   * <p>The name of the custom language model that you want to use when processing your
   *          transcription. Note that language model names are case sensitive.</p>
   *          <p>The language of the specified language model must match the language code you specify in your transcription request. If the languages don't match, the custom language model isn't applied.
   *             There are no errors or warnings associated with a language mismatch.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-language-models.html">Custom language models</a> in the <i>Amazon Transcribe Developer Guide</i>.</p>
   * @public
   */
  LanguageModelName?: string | undefined;

  /**
   * <p>If true, <code>TranscriptEvents</code> with <code>IsPartial: true</code> are filtered out of the insights target.</p>
   * @public
   */
  FilterPartialResults?: boolean | undefined;

  /**
   * <p>Turns language identification on or off.</p>
   * @public
   */
  IdentifyLanguage?: boolean | undefined;

  /**
   * <p>Turns language identification on or off for multiple languages.</p>
   *          <note>
   *             <p>Calls to this API must include a <code>LanguageCode</code>, <code>IdentifyLanguage</code>, or <code>IdentifyMultipleLanguages</code> parameter.
   *          If you include more than one of those parameters, your transcription job fails.</p>
   *          </note>
   * @public
   */
  IdentifyMultipleLanguages?: boolean | undefined;

  /**
   * <p>The language options for the transcription, such as automatic language detection.</p>
   * @public
   */
  LanguageOptions?: string | undefined;

  /**
   * <p>The preferred language for the transcription.</p>
   * @public
   */
  PreferredLanguage?: CallAnalyticsLanguageCode | undefined;

  /**
   * <p>The names of the custom vocabulary or vocabularies used during transcription.</p>
   * @public
   */
  VocabularyNames?: string | undefined;

  /**
   * <p>The names of the custom vocabulary filter or filters using during transcription.</p>
   * @public
   */
  VocabularyFilterNames?: string | undefined;
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
 * <p>The audio artifact concatenation configuration object.</p>
 * @public
 */
export interface AudioConcatenationConfiguration {
  /**
   * <p>Enables or disables the configuration object.</p>
   * @public
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
 * <p>The composited video configuration object for a specified
 *          media pipeline. <code>SourceType</code> must be
 *          <code>ChimeSdkMeeting</code>.</p>
 * @public
 */
export interface CompositedVideoConcatenationConfiguration {
  /**
   * <p>Enables or disables the configuration object.</p>
   * @public
   */
  State: ArtifactsConcatenationState | undefined;
}

/**
 * <p>The composited content configuration object for a specified
 *          media pipeline. </p>
 * @public
 */
export interface ContentConcatenationConfiguration {
  /**
   * <p>Enables or disables the configuration object.</p>
   * @public
   */
  State: ArtifactsConcatenationState | undefined;
}

/**
 * <p>The content configuration object's data channel.</p>
 * @public
 */
export interface DataChannelConcatenationConfiguration {
  /**
   * <p>Enables or disables the configuration object.</p>
   * @public
   */
  State: ArtifactsConcatenationState | undefined;
}

/**
 * <p>The configuration object for an event concatenation pipeline.</p>
 * @public
 */
export interface MeetingEventsConcatenationConfiguration {
  /**
   * <p>Enables or disables the configuration object.</p>
   * @public
   */
  State: ArtifactsConcatenationState | undefined;
}

/**
 * <p>The configuration object for concatenating transcription messages.</p>
 * @public
 */
export interface TranscriptionMessagesConcatenationConfiguration {
  /**
   * <p>Enables or disables the configuration object.</p>
   * @public
   */
  State: ArtifactsConcatenationState | undefined;
}

/**
 * <p>The configuration object of a video concatenation pipeline.</p>
 * @public
 */
export interface VideoConcatenationConfiguration {
  /**
   * <p>Enables or disables the configuration object.</p>
   * @public
   */
  State: ArtifactsConcatenationState | undefined;
}

/**
 * <p>The configuration for the artifacts concatenation.</p>
 * @public
 */
export interface ArtifactsConcatenationConfiguration {
  /**
   * <p>The configuration for the audio artifacts concatenation.</p>
   * @public
   */
  Audio: AudioConcatenationConfiguration | undefined;

  /**
   * <p>The configuration for the video artifacts concatenation.</p>
   * @public
   */
  Video: VideoConcatenationConfiguration | undefined;

  /**
   * <p>The configuration for the content artifacts concatenation.</p>
   * @public
   */
  Content: ContentConcatenationConfiguration | undefined;

  /**
   * <p>The configuration for the data channel artifacts concatenation.</p>
   * @public
   */
  DataChannel: DataChannelConcatenationConfiguration | undefined;

  /**
   * <p>The configuration for the transcription messages artifacts concatenation.</p>
   * @public
   */
  TranscriptionMessages: TranscriptionMessagesConcatenationConfiguration | undefined;

  /**
   * <p>The configuration for the meeting events artifacts concatenation.</p>
   * @public
   */
  MeetingEvents: MeetingEventsConcatenationConfiguration | undefined;

  /**
   * <p>The configuration for the composited video artifacts concatenation.</p>
   * @public
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
 * <p>The audio artifact configuration object.</p>
 * @public
 */
export interface AudioArtifactsConfiguration {
  /**
   * <p>The MUX type of the audio artifact configuration object.</p>
   * @public
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
 * <p>Defines the configuration settings for the horizontal layout.</p>
 * @public
 */
export interface HorizontalLayoutConfiguration {
  /**
   * <p>Sets the automatic ordering of the video tiles.</p>
   * @public
   */
  TileOrder?: TileOrder | undefined;

  /**
   * <p>Sets the position of horizontal tiles.</p>
   * @public
   */
  TilePosition?: HorizontalTilePosition | undefined;

  /**
   * <p>The maximum number of video tiles to display.</p>
   * @public
   */
  TileCount?: number | undefined;

  /**
   * <p>Specifies the aspect ratio of all video tiles.</p>
   * @public
   */
  TileAspectRatio?: string | undefined;
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
 * <p>Defines the configuration for a presenter-only video tile.</p>
 * @public
 */
export interface PresenterOnlyConfiguration {
  /**
   * <p>Defines the position of the presenter video tile. Default: <code>TopRight</code>.</p>
   * @public
   */
  PresenterPosition?: PresenterPosition | undefined;
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
 * <p>Defines the configuration settings for a vertical layout.</p>
 * @public
 */
export interface VerticalLayoutConfiguration {
  /**
   * <p>Sets the automatic ordering of the video tiles.</p>
   * @public
   */
  TileOrder?: TileOrder | undefined;

  /**
   * <p>Sets the position of vertical tiles.</p>
   * @public
   */
  TilePosition?: VerticalTilePosition | undefined;

  /**
   * <p>The maximum number of tiles to display.</p>
   * @public
   */
  TileCount?: number | undefined;

  /**
   * <p>Sets the aspect ratio of the video tiles, such as 16:9.</p>
   * @public
   */
  TileAspectRatio?: string | undefined;
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
 * <p>Defines the settings for a video tile.</p>
 * @public
 */
export interface VideoAttribute {
  /**
   * <p>Sets the corner radius of all video tiles.</p>
   * @public
   */
  CornerRadius?: number | undefined;

  /**
   * <p>Defines the border color of all video tiles.</p>
   * @public
   */
  BorderColor?: BorderColor | undefined;

  /**
   * <p>Defines the highlight color for the active video tile.</p>
   * @public
   */
  HighlightColor?: HighlightColor | undefined;

  /**
   * <p>Defines the border thickness for all video tiles.</p>
   * @public
   */
  BorderThickness?: number | undefined;
}

/**
 * <p>Specifies the type of grid layout.</p>
 * @public
 */
export interface GridViewConfiguration {
  /**
   * <p>Defines the layout of the video tiles when content sharing is enabled.</p>
   * @public
   */
  ContentShareLayout: ContentShareLayoutOption | undefined;

  /**
   * <p>Defines the configuration options for a presenter only video tile.</p>
   * @public
   */
  PresenterOnlyConfiguration?: PresenterOnlyConfiguration | undefined;

  /**
   * <p>The configuration settings for an <code>ActiveSpeakerOnly</code> video tile.</p>
   * @public
   */
  ActiveSpeakerOnlyConfiguration?: ActiveSpeakerOnlyConfiguration | undefined;

  /**
   * <p>The configuration settings for a horizontal layout.</p>
   * @public
   */
  HorizontalLayoutConfiguration?: HorizontalLayoutConfiguration | undefined;

  /**
   * <p>The configuration settings for a vertical layout.</p>
   * @public
   */
  VerticalLayoutConfiguration?: VerticalLayoutConfiguration | undefined;

  /**
   * <p>The attribute settings for the video tiles.</p>
   * @public
   */
  VideoAttribute?: VideoAttribute | undefined;

  /**
   * <p>The orientation setting, horizontal or vertical.</p>
   * @public
   */
  CanvasOrientation?: CanvasOrientation | undefined;
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
 * <p>Specifies the configuration for compositing video artifacts.</p>
 * @public
 */
export interface CompositedVideoArtifactsConfiguration {
  /**
   * <p>The layout setting, such as <code>GridView</code> in the configuration object.</p>
   * @public
   */
  Layout?: LayoutOption | undefined;

  /**
   * <p>The video resolution setting in the configuration object. Default: HD at 1280 x 720. FHD resolution: 1920 x 1080.</p>
   * @public
   */
  Resolution?: ResolutionOption | undefined;

  /**
   * <p>The <code>GridView</code> configuration setting.</p>
   * @public
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
 * <p>The content artifact object.</p>
 * @public
 */
export interface ContentArtifactsConfiguration {
  /**
   * <p>Indicates whether the content artifact is enabled or disabled.</p>
   * @public
   */
  State: ArtifactsState | undefined;

  /**
   * <p>The MUX type of the artifact configuration.</p>
   * @public
   */
  MuxType?: ContentMuxType | undefined;
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
 * <p>The video artifact configuration object.</p>
 * @public
 */
export interface VideoArtifactsConfiguration {
  /**
   * <p>Indicates whether the video artifact is enabled or disabled.</p>
   * @public
   */
  State: ArtifactsState | undefined;

  /**
   * <p>The MUX type of the video artifact configuration object.</p>
   * @public
   */
  MuxType?: VideoMuxType | undefined;
}

/**
 * <p>The configuration for the artifacts.</p>
 * @public
 */
export interface ArtifactsConfiguration {
  /**
   * <p>The configuration for the audio artifacts.</p>
   * @public
   */
  Audio: AudioArtifactsConfiguration | undefined;

  /**
   * <p>The configuration for the video artifacts.</p>
   * @public
   */
  Video: VideoArtifactsConfiguration | undefined;

  /**
   * <p>The configuration for the content artifacts.</p>
   * @public
   */
  Content: ContentArtifactsConfiguration | undefined;

  /**
   * <p>Enables video compositing.</p>
   * @public
   */
  CompositedVideo?: CompositedVideoArtifactsConfiguration | undefined;
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
 * <p>The input parameters don't match the service's restrictions.</p>
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | undefined;
  Message?: string | undefined;
  /**
   * <p>The request ID associated with the call responsible for the exception.</p>
   * @public
   */
  RequestId?: string | undefined;
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
 * <p>Defines an audio channel in a Kinesis video stream.</p>
 * @public
 */
export interface ChannelDefinition {
  /**
   * <p>The channel ID.</p>
   * @public
   */
  ChannelId: number | undefined;

  /**
   * <p>Specifies whether the audio in a channel belongs to the <code>AGENT</code> or <code>CUSTOMER</code>.</p>
   * @public
   */
  ParticipantRole?: ParticipantRole | undefined;
}

/**
 * <p>The video streams for a specified media pipeline. The total number of
 *          video streams can't exceed 25.</p>
 * @public
 */
export interface SelectedVideoStreams {
  /**
   * <p>The attendee IDs of the streams selected for a media pipeline. </p>
   * @public
   */
  AttendeeIds?: string[] | undefined;

  /**
   * <p>The external user IDs of the streams selected for a media pipeline.</p>
   * @public
   */
  ExternalUserIds?: string[] | undefined;
}

/**
 * <p>Source configuration for a specified media pipeline.</p>
 * @public
 */
export interface SourceConfiguration {
  /**
   * <p>The selected video streams for a specified media pipeline. The number
   *          of video streams can't exceed 25.</p>
   * @public
   */
  SelectedVideoStreams?: SelectedVideoStreams | undefined;
}

/**
 * <p>The configuration object of the Amazon Chime SDK meeting for a specified media pipeline. <code>SourceType</code> must be <code>ChimeSdkMeeting</code>.</p>
 * @public
 */
export interface ChimeSdkMeetingConfiguration {
  /**
   * <p>The source configuration for a specified media pipeline.</p>
   * @public
   */
  SourceConfiguration?: SourceConfiguration | undefined;

  /**
   * <p>The configuration for the artifacts in an Amazon Chime SDK meeting.</p>
   * @public
   */
  ArtifactsConfiguration?: ArtifactsConfiguration | undefined;
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
 * <p>Contains server side encryption parameters to be used by media capture pipeline. The
 *          parameters can also be used by media concatenation pipeline taking media capture pipeline
 *          as a media source.</p>
 * @public
 */
export interface SseAwsKeyManagementParams {
  /**
   * <p>The KMS key you want to use to encrypt your media pipeline output.
   *          Decryption is required for concatenation pipeline. If using a key located in the current
   *          Amazon Web Services account, you can specify your KMS key in one of four
   *          ways:</p>
   *          <ul>
   *             <li>
   *                <p>Use the KMS key ID itself. For example,
   *                <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   *             </li>
   *             <li>
   *                <p>Use an alias for the KMS key ID. For example,
   *                <code>alias/ExampleAlias</code>.</p>
   *             </li>
   *             <li>
   *                <p>Use the Amazon Resource Name (ARN) for the KMS key ID. For example,
   *                <code>arn:aws:kms:region:account-ID:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   *             </li>
   *             <li>
   *                <p>Use the ARN for the KMS key alias. For example,
   *                <code>arn:aws:kms:region:account-ID:alias/ExampleAlias</code>.</p>
   *             </li>
   *          </ul>
   *          <p>If using a key located in a different Amazon Web Services account than the current
   *          Amazon Web Services account, you can specify your KMS key in one of two
   *          ways:</p>
   *          <ul>
   *             <li>
   *                <p>Use the ARN for the KMS key ID. For example,
   *                <code>arn:aws:kms:region:account-ID:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   *             </li>
   *             <li>
   *                <p>Use the ARN for the KMS key alias. For example,
   *                <code>arn:aws:kms:region:account-ID:alias/ExampleAlias</code>.</p>
   *             </li>
   *          </ul>
   *          <p>If you don't specify an encryption key, your output is encrypted with the default
   *          Amazon S3 key (SSE-S3).</p>
   *          <p>Note that the role specified in the <code>SinkIamRoleArn</code> request parameter must
   *          have permission to use the specified KMS key.</p>
   * @public
   */
  AwsKmsKeyId: string | undefined;

  /**
   * <p>Base64-encoded string of a UTF-8 encoded JSON, which contains the encryption context as
   *          non-secret key-value pair known as encryption context pairs, that provides an added layer
   *          of security for your data. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/encrypt_context.html">KMS encryption
   *             context</a> and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Asymmetric keys in KMS</a> in the <i>Key Management Service Developer
   *                      Guide</i>.</p>
   * @public
   */
  AwsKmsEncryptionContext?: string | undefined;
}

/**
 * <p>A key/value pair that grants users access to meeting resources.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key half of a tag.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value half of a tag.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateMediaCapturePipelineRequest {
  /**
   * <p>Source type from which the media artifacts are captured. A Chime SDK Meeting is the only
   *          supported source.</p>
   * @public
   */
  SourceType: MediaPipelineSourceType | undefined;

  /**
   * <p>ARN of the source from which the media artifacts are captured.</p>
   * @public
   */
  SourceArn: string | undefined;

  /**
   * <p>Destination type to which the media artifacts are saved. You must use an S3 bucket.</p>
   * @public
   */
  SinkType: MediaPipelineSinkType | undefined;

  /**
   * <p>The ARN of the sink type.</p>
   * @public
   */
  SinkArn: string | undefined;

  /**
   * <p>The unique identifier for the client request. The token makes the API request idempotent. Use a unique token for each media pipeline request.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>The configuration for a specified media pipeline. <code>SourceType</code> must
   *          be <code>ChimeSdkMeeting</code>.</p>
   * @public
   */
  ChimeSdkMeetingConfiguration?: ChimeSdkMeetingConfiguration | undefined;

  /**
   * <p>An object that contains server side encryption parameters to be used by media capture
   *          pipeline. The parameters can also be used by media concatenation pipeline taking media
   *          capture pipeline as a media source.</p>
   * @public
   */
  SseAwsKeyManagementParams?: SseAwsKeyManagementParams | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the sink role to be used with <code>AwsKmsKeyId</code>
   *          in <code>SseAwsKeyManagementParams</code>. Can only interact with <code>S3Bucket</code>
   *          sink type. The role must belong to the caller’s account and be able to act on behalf of the
   *          caller during the API call. All minimum policy permissions requirements for the caller to
   *          perform sink-related actions are the same for <code>SinkIamRoleArn</code>.</p>
   *          <p>Additionally, the role must have permission to <code>kms:GenerateDataKey</code> using
   *          KMS key supplied as <code>AwsKmsKeyId</code> in <code>SseAwsKeyManagementParams</code>. If
   *          media concatenation will be required later, the role must also have permission to
   *          <code>kms:Decrypt</code> for the same KMS key.</p>
   * @public
   */
  SinkIamRoleArn?: string | undefined;

  /**
   * <p>The tag key-value pairs.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
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
 * <p>A media pipeline object consisting of an ID, source type, source ARN, a sink
 *          type, a sink ARN, and a configuration object.</p>
 * @public
 */
export interface MediaCapturePipeline {
  /**
   * <p>The ID of a media pipeline.</p>
   * @public
   */
  MediaPipelineId?: string | undefined;

  /**
   * <p>The ARN of the media capture pipeline</p>
   * @public
   */
  MediaPipelineArn?: string | undefined;

  /**
   * <p>Source type from which media artifacts are saved. You must use
   *          <code>ChimeMeeting</code>.</p>
   * @public
   */
  SourceType?: MediaPipelineSourceType | undefined;

  /**
   * <p>ARN of the source from which the media artifacts are saved.</p>
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * <p>The status of the media pipeline.</p>
   * @public
   */
  Status?: MediaPipelineStatus | undefined;

  /**
   * <p>Destination type to which the media artifacts are saved. You must use an S3
   *          Bucket.</p>
   * @public
   */
  SinkType?: MediaPipelineSinkType | undefined;

  /**
   * <p>ARN of the destination to which the media artifacts are saved.</p>
   * @public
   */
  SinkArn?: string | undefined;

  /**
   * <p>The time at which the pipeline was created, in ISO 8601 format.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The time at which the pipeline was updated, in ISO 8601 format.</p>
   * @public
   */
  UpdatedTimestamp?: Date | undefined;

  /**
   * <p>The configuration for a specified media pipeline. <code>SourceType</code> must
   *          be <code>ChimeSdkMeeting</code>.</p>
   * @public
   */
  ChimeSdkMeetingConfiguration?: ChimeSdkMeetingConfiguration | undefined;

  /**
   * <p>An object that contains server side encryption parameters to be used by media capture
   *          pipeline. The parameters can also be used by media concatenation pipeline taking media
   *          capture pipeline as a media source.</p>
   * @public
   */
  SseAwsKeyManagementParams?: SseAwsKeyManagementParams | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the sink role to be used with <code>AwsKmsKeyId</code>
   *          in <code>SseAwsKeyManagementParams</code>.</p>
   * @public
   */
  SinkIamRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateMediaCapturePipelineResponse {
  /**
   * <p>A media pipeline object, the ID, source type, source ARN, sink type, and sink
   *          ARN of a media pipeline object.</p>
   * @public
   */
  MediaCapturePipeline?: MediaCapturePipeline | undefined;
}

/**
 * <p>The client is permanently forbidden from making the request.</p>
 * @public
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | undefined;
  Message?: string | undefined;
  /**
   * <p>The request id associated with the call responsible for the exception.</p>
   * @public
   */
  RequestId?: string | undefined;
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
 * <p>The request exceeds the resource limit.</p>
 * @public
 */
export class ResourceLimitExceededException extends __BaseException {
  readonly name: "ResourceLimitExceededException" = "ResourceLimitExceededException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | undefined;
  Message?: string | undefined;
  /**
   * <p>The request ID associated with the call responsible for the exception.</p>
   * @public
   */
  RequestId?: string | undefined;
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
 * <p>The service encountered an unexpected error.</p>
 * @public
 */
export class ServiceFailureException extends __BaseException {
  readonly name: "ServiceFailureException" = "ServiceFailureException";
  readonly $fault: "server" = "server";
  Code?: ErrorCode | undefined;
  Message?: string | undefined;
  /**
   * <p>The request ID associated with the call responsible for the exception.</p>
   * @public
   */
  RequestId?: string | undefined;
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
 * <p>The service is currently unavailable.</p>
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  Code?: ErrorCode | undefined;
  Message?: string | undefined;
  /**
   * <p>The request ID associated with the call responsible for the exception.</p>
   * @public
   */
  RequestId?: string | undefined;
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
 * <p>The client exceeded its request rate limit.</p>
 * @public
 */
export class ThrottledClientException extends __BaseException {
  readonly name: "ThrottledClientException" = "ThrottledClientException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | undefined;
  Message?: string | undefined;
  /**
   * <p>The request ID associated with the call responsible for the exception.</p>
   * @public
   */
  RequestId?: string | undefined;
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
 * <p>The client is not currently authorized to make the request.</p>
 * @public
 */
export class UnauthorizedClientException extends __BaseException {
  readonly name: "UnauthorizedClientException" = "UnauthorizedClientException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | undefined;
  Message?: string | undefined;
  /**
   * <p>The request ID associated with the call responsible for the exception.</p>
   * @public
   */
  RequestId?: string | undefined;
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
 * <p>The configuration settings for the S3 bucket.</p>
 * @public
 */
export interface S3BucketSinkConfiguration {
  /**
   * <p>The destination URL of the S3 bucket.</p>
   * @public
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
 * <p>The data sink of the configuration object.</p>
 * @public
 */
export interface ConcatenationSink {
  /**
   * <p>The type of data sink in the configuration object.</p>
   * @public
   */
  Type: ConcatenationSinkType | undefined;

  /**
   * <p>The configuration settings for an Amazon S3 bucket sink.</p>
   * @public
   */
  S3BucketSinkConfiguration: S3BucketSinkConfiguration | undefined;
}

/**
 * <p>The configuration object of the Amazon Chime SDK meeting concatenation for a specified
 *          media pipeline.</p>
 * @public
 */
export interface ChimeSdkMeetingConcatenationConfiguration {
  /**
   * <p>The configuration for the artifacts in an Amazon Chime SDK meeting concatenation.</p>
   * @public
   */
  ArtifactsConfiguration: ArtifactsConcatenationConfiguration | undefined;
}

/**
 * <p>The source configuration object of a media capture pipeline.</p>
 * @public
 */
export interface MediaCapturePipelineSourceConfiguration {
  /**
   * <p>The media pipeline ARN in the configuration object of a media capture pipeline.</p>
   * @public
   */
  MediaPipelineArn: string | undefined;

  /**
   * <p>The meeting configuration settings in a media capture pipeline configuration object. </p>
   * @public
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
 * <p>The source type and media pipeline configuration settings in a configuration object.</p>
 * @public
 */
export interface ConcatenationSource {
  /**
   * <p>The type of concatenation source in a configuration object.</p>
   * @public
   */
  Type: ConcatenationSourceType | undefined;

  /**
   * <p>The concatenation settings for the media pipeline in a configuration object.</p>
   * @public
   */
  MediaCapturePipelineSourceConfiguration: MediaCapturePipelineSourceConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateMediaConcatenationPipelineRequest {
  /**
   * <p>An object that specifies the sources for the media concatenation pipeline.</p>
   * @public
   */
  Sources: ConcatenationSource[] | undefined;

  /**
   * <p>An object that specifies the data sinks for the media concatenation pipeline.</p>
   * @public
   */
  Sinks: ConcatenationSink[] | undefined;

  /**
   * <p>The unique identifier for the client request. The token makes the API request
   *          idempotent. Use a unique token for each media concatenation pipeline request.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>The tags associated with the media concatenation pipeline.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Concatenates audio and video data from one or more data streams.</p>
 * @public
 */
export interface MediaConcatenationPipeline {
  /**
   * <p>The ID of the media pipeline being concatenated.</p>
   * @public
   */
  MediaPipelineId?: string | undefined;

  /**
   * <p>The ARN of the media pipeline that you specify in the <code>SourceConfiguration</code> object.</p>
   * @public
   */
  MediaPipelineArn?: string | undefined;

  /**
   * <p>The data sources being concatenated.</p>
   * @public
   */
  Sources?: ConcatenationSource[] | undefined;

  /**
   * <p>The data sinks of the concatenation pipeline.</p>
   * @public
   */
  Sinks?: ConcatenationSink[] | undefined;

  /**
   * <p>The status of the concatenation pipeline.</p>
   * @public
   */
  Status?: MediaPipelineStatus | undefined;

  /**
   * <p>The time at which the concatenation pipeline was created.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The time at which the concatenation pipeline was last updated.</p>
   * @public
   */
  UpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface CreateMediaConcatenationPipelineResponse {
  /**
   * <p>A media concatenation pipeline object, the ID, source type, <code>MediaPipelineARN</code>, and sink of a
   *          media concatenation pipeline object.</p>
   * @public
   */
  MediaConcatenationPipeline?: MediaConcatenationPipeline | undefined;
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
 * <p>The range of timestamps to return.</p>
 * @public
 */
export interface TimestampRange {
  /**
   * <p>The starting timestamp for the specified range.</p>
   * @public
   */
  StartTimestamp: Date | undefined;

  /**
   * <p>The ending timestamp for the specified range.</p>
   * @public
   */
  EndTimestamp: Date | undefined;
}

/**
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
 * @public
 */
export interface FragmentSelector {
  /**
   * <p>The origin of the timestamps to use, <code>Server</code> or <code>Producer</code>. For more information, see
   *          <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_dataplane_StartSelector.html">StartSelectorType</a> in the <i>Amazon Kinesis Video Streams Developer Guide</i>.</p>
   * @public
   */
  FragmentSelectorType: FragmentSelectorType | undefined;

  /**
   * <p>The range of timestamps to return.</p>
   * @public
   */
  TimestampRange: TimestampRange | undefined;
}

/**
 * <p>A structure that holds the settings for recording media.</p>
 * @public
 */
export interface RecordingStreamConfiguration {
  /**
   * <p>The ARN of the recording stream.</p>
   * @public
   */
  StreamArn?: string | undefined;
}

/**
 * <p>A structure that contains the runtime settings for recording a Kinesis video stream.</p>
 * @public
 */
export interface KinesisVideoStreamRecordingSourceRuntimeConfiguration {
  /**
   * <p>The stream or streams to be recorded.</p>
   * @public
   */
  Streams: RecordingStreamConfiguration[] | undefined;

  /**
   * <p>Describes the timestamp range and timestamp origin of a range of fragments in the Kinesis video stream.</p>
   * @public
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
 * <p>Defines a streaming channel.</p>
 * @public
 */
export interface StreamChannelDefinition {
  /**
   * <p>The number of channels in a streaming channel.</p>
   * @public
   */
  NumberOfChannels: number | undefined;

  /**
   * <p>The definitions of the channels in a streaming channel.</p>
   * @public
   */
  ChannelDefinitions?: ChannelDefinition[] | undefined;
}

/**
 * <p>The configuration settings for a stream.</p>
 * @public
 */
export interface StreamConfiguration {
  /**
   * <p>The ARN of the stream.</p>
   * @public
   */
  StreamArn: string | undefined;

  /**
   * <p>The unique identifier of the fragment to begin processing.</p>
   * @public
   */
  FragmentNumber?: string | undefined;

  /**
   * <p>The streaming channel definition in the stream configuration.</p>
   * @public
   */
  StreamChannelDefinition: StreamChannelDefinition | undefined;
}

/**
 * <p>The runtime configuration settings for the Kinesis video stream source.</p>
 * @public
 */
export interface KinesisVideoStreamSourceRuntimeConfiguration {
  /**
   * <p>The streams in the source runtime configuration of a Kinesis video stream.</p>
   * @public
   */
  Streams: StreamConfiguration[] | undefined;

  /**
   * <p>Specifies the encoding of your input audio. Supported format: PCM (only signed 16-bit little-endian audio formats, which does not include WAV)</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-input.html#how-input-audio">Media formats</a> in the <i>Amazon Transcribe Developer Guide</i>.</p>
   * @public
   */
  MediaEncoding: MediaEncoding | undefined;

  /**
   * <p>The sample rate of the input audio (in hertz). Low-quality audio, such as telephone
   *          audio, is typically around 8,000 Hz. High-quality audio typically ranges from 16,000 Hz to
   *          48,000 Hz. Note that the sample rate you specify must match that of your audio.</p>
   *          <p>Valid Range: Minimum value of 8000. Maximum value of 48000.</p>
   * @public
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
 * <p>A structure that holds the settings for transmitting media files to the Amazon S3 bucket. If specified, the settings in this structure override any settings in <code>S3RecordingSinkConfiguration</code>.</p>
 * @public
 */
export interface S3RecordingSinkRuntimeConfiguration {
  /**
   * <p>The URI of the S3 bucket used as the sink.</p>
   * @public
   */
  Destination: string | undefined;

  /**
   * <p>The file format for the media files sent to the Amazon S3 bucket.</p>
   * @public
   */
  RecordingFileFormat: RecordingFileFormat | undefined;
}

/**
 * @public
 */
export interface CreateMediaInsightsPipelineRequest {
  /**
   * <p>The ARN of the pipeline's configuration.</p>
   * @public
   */
  MediaInsightsPipelineConfigurationArn: string | undefined;

  /**
   * <p>The runtime configuration for the Kinesis video stream source of the media insights
   *          pipeline.</p>
   * @public
   */
  KinesisVideoStreamSourceRuntimeConfiguration?: KinesisVideoStreamSourceRuntimeConfiguration | undefined;

  /**
   * <p>The runtime metadata for the media insights pipeline. Consists of a key-value map of strings.</p>
   * @public
   */
  MediaInsightsRuntimeMetadata?: Record<string, string> | undefined;

  /**
   * <p>The runtime configuration for the Kinesis video recording stream source.</p>
   * @public
   */
  KinesisVideoStreamRecordingSourceRuntimeConfiguration?:
    | KinesisVideoStreamRecordingSourceRuntimeConfiguration
    | undefined;

  /**
   * <p>The runtime configuration for the S3 recording sink. If specified, the settings in this structure override any settings in <code>S3RecordingSinkConfiguration</code>.</p>
   * @public
   */
  S3RecordingSinkRuntimeConfiguration?: S3RecordingSinkRuntimeConfiguration | undefined;

  /**
   * <p>The tags assigned to the media insights pipeline.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The unique identifier for the media insights pipeline request.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;
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
 * <p>The status of the pipeline element.</p>
 * @public
 */
export interface MediaInsightsPipelineElementStatus {
  /**
   * <p>The type of status.</p>
   * @public
   */
  Type?: MediaInsightsPipelineConfigurationElementType | undefined;

  /**
   * <p>The element's status.</p>
   * @public
   */
  Status?: MediaPipelineElementStatus | undefined;
}

/**
 * <p>A media pipeline that streams call analytics data.</p>
 * @public
 */
export interface MediaInsightsPipeline {
  /**
   * <p>The ID of a media insights pipeline.</p>
   * @public
   */
  MediaPipelineId?: string | undefined;

  /**
   * <p>The ARN of a media insights pipeline.</p>
   * @public
   */
  MediaPipelineArn?: string | undefined;

  /**
   * <p>The ARN of a media insight pipeline's configuration settings.</p>
   * @public
   */
  MediaInsightsPipelineConfigurationArn?: string | undefined;

  /**
   * <p>The status of a media insights pipeline.</p>
   * @public
   */
  Status?: MediaPipelineStatus | undefined;

  /**
   * <p>The configuration settings for a Kinesis runtime video stream in a media insights pipeline.</p>
   * @public
   */
  KinesisVideoStreamSourceRuntimeConfiguration?: KinesisVideoStreamSourceRuntimeConfiguration | undefined;

  /**
   * <p>The runtime metadata of a media insights pipeline.</p>
   * @public
   */
  MediaInsightsRuntimeMetadata?: Record<string, string> | undefined;

  /**
   * <p>The runtime configuration settings for a Kinesis recording video stream in a media insights pipeline.</p>
   * @public
   */
  KinesisVideoStreamRecordingSourceRuntimeConfiguration?:
    | KinesisVideoStreamRecordingSourceRuntimeConfiguration
    | undefined;

  /**
   * <p>The runtime configuration of the Amazon S3 bucket that stores recordings in a media insights pipeline.</p>
   * @public
   */
  S3RecordingSinkRuntimeConfiguration?: S3RecordingSinkRuntimeConfiguration | undefined;

  /**
   * <p>The time at which the media insights pipeline was created.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The statuses that the elements in a media insights pipeline can have during data processing.</p>
   * @public
   */
  ElementStatuses?: MediaInsightsPipelineElementStatus[] | undefined;
}

/**
 * @public
 */
export interface CreateMediaInsightsPipelineResponse {
  /**
   * <p>The media insights pipeline object.</p>
   * @public
   */
  MediaInsightsPipeline: MediaInsightsPipeline | undefined;
}

/**
 * <p>One or more of the resources in the request does not exist in the system.</p>
 * @public
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | undefined;
  Message?: string | undefined;
  /**
   * <p>The request ID associated with the call responsible for the exception.</p>
   * @public
   */
  RequestId?: string | undefined;
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
 * <p>A structure that contains the configuration settings for a Kinesis Data Stream sink.</p>
 * @public
 */
export interface KinesisDataStreamSinkConfiguration {
  /**
   * <p>The ARN of the sink.</p>
   * @public
   */
  InsightsTarget?: string | undefined;
}

/**
 * <p>A structure that contains the configuration settings for an AWS Lambda function's data sink.</p>
 * @public
 */
export interface LambdaFunctionSinkConfiguration {
  /**
   * <p>The ARN of the sink.</p>
   * @public
   */
  InsightsTarget?: string | undefined;
}

/**
 * <p>The structure that holds the settings for transmitting media to the Amazon S3 bucket. These values are used as defaults if <code>S3RecordingSinkRuntimeConfiguration</code> is not specified.</p>
 * @public
 */
export interface S3RecordingSinkConfiguration {
  /**
   * <p>The default URI of the Amazon S3 bucket used as the recording sink.</p>
   * @public
   */
  Destination?: string | undefined;

  /**
   * <p>The default file format for the media files sent to the Amazon S3 bucket.</p>
   * @public
   */
  RecordingFileFormat?: RecordingFileFormat | undefined;
}

/**
 * <p>The configuration settings for the SNS topic sink.</p>
 * @public
 */
export interface SnsTopicSinkConfiguration {
  /**
   * <p>The ARN of the SNS sink.</p>
   * @public
   */
  InsightsTarget?: string | undefined;
}

/**
 * <p>The configuration settings for the SQS sink.</p>
 * @public
 */
export interface SqsQueueSinkConfiguration {
  /**
   * <p>The ARN of the SQS sink.</p>
   * @public
   */
  InsightsTarget?: string | undefined;
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
 * <p>The configuration settings for a voice analytics processor.</p>
 * @public
 */
export interface VoiceAnalyticsProcessorConfiguration {
  /**
   * <p>The status of the speaker search task.</p>
   * @public
   */
  SpeakerSearchStatus?: VoiceAnalyticsConfigurationStatus | undefined;

  /**
   * <p>The status of the voice tone analysis task.</p>
   * @public
   */
  VoiceToneAnalysisStatus?: VoiceAnalyticsConfigurationStatus | undefined;
}

/**
 * <p>A static structure that contains the configuration data for a <code>VoiceEnhancementSinkConfiguration</code> element.</p>
 * @public
 */
export interface VoiceEnhancementSinkConfiguration {
  /**
   * <p>Disables the <code>VoiceEnhancementSinkConfiguration</code> element.</p>
   * @public
   */
  Disabled?: boolean | undefined;
}

/**
 * <p>An element in a media insights pipeline configuration.</p>
 * @public
 */
export interface MediaInsightsPipelineConfigurationElement {
  /**
   * <p>The element type.</p>
   * @public
   */
  Type: MediaInsightsPipelineConfigurationElementType | undefined;

  /**
   * <p>The analytics configuration settings for transcribing audio in a media insights pipeline configuration element.</p>
   * @public
   */
  AmazonTranscribeCallAnalyticsProcessorConfiguration?: AmazonTranscribeCallAnalyticsProcessorConfiguration | undefined;

  /**
   * <p>The transcription processor configuration settings in a media insights pipeline
   *          configuration element.</p>
   * @public
   */
  AmazonTranscribeProcessorConfiguration?: AmazonTranscribeProcessorConfiguration | undefined;

  /**
   * <p>The configuration settings for the Kinesis Data Stream Sink in a media insights pipeline configuration element.</p>
   * @public
   */
  KinesisDataStreamSinkConfiguration?: KinesisDataStreamSinkConfiguration | undefined;

  /**
   * <p>The configuration settings for the Amazon S3 recording bucket in a media insights pipeline configuration element.</p>
   * @public
   */
  S3RecordingSinkConfiguration?: S3RecordingSinkConfiguration | undefined;

  /**
   * <p>The voice analytics configuration settings in a media insights pipeline configuration element.</p>
   * @public
   */
  VoiceAnalyticsProcessorConfiguration?: VoiceAnalyticsProcessorConfiguration | undefined;

  /**
   * <p>The configuration settings for the Amazon Web Services Lambda sink in a media insights pipeline configuration element.</p>
   * @public
   */
  LambdaFunctionSinkConfiguration?: LambdaFunctionSinkConfiguration | undefined;

  /**
   * <p>The configuration settings for an SQS queue sink in a media insights pipeline configuration element.</p>
   * @public
   */
  SqsQueueSinkConfiguration?: SqsQueueSinkConfiguration | undefined;

  /**
   * <p>The configuration settings for an SNS topic sink in a media insights pipeline configuration element.</p>
   * @public
   */
  SnsTopicSinkConfiguration?: SnsTopicSinkConfiguration | undefined;

  /**
   * <p>The configuration settings for voice enhancement sink in a media insights pipeline configuration element.</p>
   * @public
   */
  VoiceEnhancementSinkConfiguration?: VoiceEnhancementSinkConfiguration | undefined;
}

/**
 * <p>A structure that contains the configuration settings for an issue detection task.</p>
 * @public
 */
export interface IssueDetectionConfiguration {
  /**
   * <p>The name of the issue detection rule.</p>
   * @public
   */
  RuleName: string | undefined;
}

/**
 * <p>A structure that contains the settings for a keyword match task.</p>
 * @public
 */
export interface KeywordMatchConfiguration {
  /**
   * <p>The name of the keyword match rule.</p>
   * @public
   */
  RuleName: string | undefined;

  /**
   * <p>The keywords or phrases that you want to match.</p>
   * @public
   */
  Keywords: string[] | undefined;

  /**
   * <p>Matches keywords or phrases on their presence or absence. If set to <code>TRUE</code>, the rule matches when all
   *          the specified keywords or phrases are absent. Default: <code>FALSE</code>.</p>
   * @public
   */
  Negate?: boolean | undefined;
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
 * <p>A structure that contains the configuration settings for a sentiment analysis task.</p>
 * @public
 */
export interface SentimentConfiguration {
  /**
   * <p>The name of the rule in the sentiment configuration.</p>
   * @public
   */
  RuleName: string | undefined;

  /**
   * <p>The type of sentiment, <code>POSITIVE</code>, <code>NEGATIVE</code>, or <code>NEUTRAL</code>.</p>
   * @public
   */
  SentimentType: SentimentType | undefined;

  /**
   * <p>Specifies the analysis interval.</p>
   * @public
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
 * <p>Specifies the words or phrases that trigger an alert.</p>
 * @public
 */
export interface RealTimeAlertRule {
  /**
   * <p>The type of alert rule.</p>
   * @public
   */
  Type: RealTimeAlertRuleType | undefined;

  /**
   * <p>Specifies the settings for matching the keywords in a real-time alert rule.</p>
   * @public
   */
  KeywordMatchConfiguration?: KeywordMatchConfiguration | undefined;

  /**
   * <p>Specifies the settings for predicting sentiment in a real-time alert rule.</p>
   * @public
   */
  SentimentConfiguration?: SentimentConfiguration | undefined;

  /**
   * <p>Specifies the issue detection settings for a real-time alert rule.</p>
   * @public
   */
  IssueDetectionConfiguration?: IssueDetectionConfiguration | undefined;
}

/**
 * <p>A structure that contains the configuration settings for real-time alerts.</p>
 * @public
 */
export interface RealTimeAlertConfiguration {
  /**
   * <p>Turns off real-time alerts.</p>
   * @public
   */
  Disabled?: boolean | undefined;

  /**
   * <p>The rules in the alert. Rules specify the words or phrases that you want to be notified about.</p>
   * @public
   */
  Rules?: RealTimeAlertRule[] | undefined;
}

/**
 * @public
 */
export interface CreateMediaInsightsPipelineConfigurationRequest {
  /**
   * <p>The name of the media insights pipeline configuration.</p>
   * @public
   */
  MediaInsightsPipelineConfigurationName: string | undefined;

  /**
   * <p>The ARN of the role used by the service to access Amazon Web Services resources,
   *          including <code>Transcribe</code> and <code>Transcribe Call Analytics</code>, on the
   *          caller’s behalf.</p>
   * @public
   */
  ResourceAccessRoleArn: string | undefined;

  /**
   * <p>The configuration settings for the real-time alerts in a media insights pipeline configuration.</p>
   * @public
   */
  RealTimeAlertConfiguration?: RealTimeAlertConfiguration | undefined;

  /**
   * <p>The elements in the request, such as a processor for Amazon Transcribe or a sink for a Kinesis Data Stream.</p>
   * @public
   */
  Elements: MediaInsightsPipelineConfigurationElement[] | undefined;

  /**
   * <p>The tags assigned to the media insights pipeline configuration.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The unique identifier for the media insights pipeline configuration request.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * <p>A structure that contains the configuration settings for a media insights pipeline.</p>
 * @public
 */
export interface MediaInsightsPipelineConfiguration {
  /**
   * <p>The name of the configuration.</p>
   * @public
   */
  MediaInsightsPipelineConfigurationName?: string | undefined;

  /**
   * <p>The ARN of the configuration.</p>
   * @public
   */
  MediaInsightsPipelineConfigurationArn?: string | undefined;

  /**
   * <p>The ARN of the role used by the service to access Amazon Web Services resources.</p>
   * @public
   */
  ResourceAccessRoleArn?: string | undefined;

  /**
   * <p>Lists the rules that trigger a real-time alert.</p>
   * @public
   */
  RealTimeAlertConfiguration?: RealTimeAlertConfiguration | undefined;

  /**
   * <p>The elements in the configuration.</p>
   * @public
   */
  Elements?: MediaInsightsPipelineConfigurationElement[] | undefined;

  /**
   * <p>The ID of the configuration.</p>
   * @public
   */
  MediaInsightsPipelineConfigurationId?: string | undefined;

  /**
   * <p>The time at which the configuration was created.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The time at which the configuration was last updated.</p>
   * @public
   */
  UpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface CreateMediaInsightsPipelineConfigurationResponse {
  /**
   * <p>The configuration settings for the media insights pipeline.</p>
   * @public
   */
  MediaInsightsPipelineConfiguration?: MediaInsightsPipelineConfiguration | undefined;
}

/**
 * <p>The media pipeline's RTMP configuration object.</p>
 * @public
 */
export interface LiveConnectorRTMPConfiguration {
  /**
   * <p>The URL of the RTMP configuration.</p>
   * @public
   */
  Url: string | undefined;

  /**
   * <p>The audio channels set for the RTMP configuration</p>
   * @public
   */
  AudioChannels?: AudioChannelsOption | undefined;

  /**
   * <p>The audio sample rate set for the RTMP configuration. Default: 48000.</p>
   * @public
   */
  AudioSampleRate?: string | undefined;
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
 * <p>The media pipeline's sink configuration settings.</p>
 * @public
 */
export interface LiveConnectorSinkConfiguration {
  /**
   * <p>The sink configuration's sink type.</p>
   * @public
   */
  SinkType: LiveConnectorSinkType | undefined;

  /**
   * <p>The sink configuration's RTMP configuration settings.</p>
   * @public
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
 * <p>The media pipeline's configuration object.</p>
 * @public
 */
export interface ChimeSdkMeetingLiveConnectorConfiguration {
  /**
   * <p>The configuration object's Chime SDK meeting ARN.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The configuration object's multiplex type.</p>
   * @public
   */
  MuxType: LiveConnectorMuxType | undefined;

  /**
   * <p>The media pipeline's composited video.</p>
   * @public
   */
  CompositedVideo?: CompositedVideoArtifactsConfiguration | undefined;

  /**
   * <p>The source configuration settings of the media pipeline's configuration object.</p>
   * @public
   */
  SourceConfiguration?: SourceConfiguration | undefined;
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
 * <p>The data source configuration object of a streaming media pipeline.</p>
 * @public
 */
export interface LiveConnectorSourceConfiguration {
  /**
   * <p>The source configuration's media source type.</p>
   * @public
   */
  SourceType: LiveConnectorSourceType | undefined;

  /**
   * <p>The configuration settings of the connector pipeline.</p>
   * @public
   */
  ChimeSdkMeetingLiveConnectorConfiguration: ChimeSdkMeetingLiveConnectorConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateMediaLiveConnectorPipelineRequest {
  /**
   * <p>The media live connector pipeline's data sources.</p>
   * @public
   */
  Sources: LiveConnectorSourceConfiguration[] | undefined;

  /**
   * <p>The media live connector pipeline's data sinks.</p>
   * @public
   */
  Sinks: LiveConnectorSinkConfiguration[] | undefined;

  /**
   * <p>The token assigned to the client making the request.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>The tags associated with the media live connector pipeline.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>The connector pipeline.</p>
 * @public
 */
export interface MediaLiveConnectorPipeline {
  /**
   * <p>The connector pipeline's data sources.</p>
   * @public
   */
  Sources?: LiveConnectorSourceConfiguration[] | undefined;

  /**
   * <p>The connector pipeline's data sinks.</p>
   * @public
   */
  Sinks?: LiveConnectorSinkConfiguration[] | undefined;

  /**
   * <p>The connector pipeline's ID.</p>
   * @public
   */
  MediaPipelineId?: string | undefined;

  /**
   * <p>The connector pipeline's ARN.</p>
   * @public
   */
  MediaPipelineArn?: string | undefined;

  /**
   * <p>The connector pipeline's status.</p>
   * @public
   */
  Status?: MediaPipelineStatus | undefined;

  /**
   * <p>The time at which the connector pipeline was created.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The time at which the connector pipeline was last updated.</p>
   * @public
   */
  UpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface CreateMediaLiveConnectorPipelineResponse {
  /**
   * <p>The new media live connector pipeline.</p>
   * @public
   */
  MediaLiveConnectorPipeline?: MediaLiveConnectorPipeline | undefined;
}

/**
 * <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | undefined;
  Message?: string | undefined;
  /**
   * <p>The request ID associated with the call responsible for the exception.</p>
   * @public
   */
  RequestId?: string | undefined;
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
 * <p>The configuration of an Kinesis video stream.</p>
 *          <note>
 *             <p>If a meeting uses an opt-in Region as its
 *          <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_meeting-chime_CreateMeeting.html#chimesdk-meeting-chime_CreateMeeting-request-MediaRegion">MediaRegion</a>,
 *          the KVS stream must be in that same Region. For example, if a meeting uses the <code>af-south-1</code> Region, the KVS stream must also be in <code>af-south-1</code>. However, if the meeting uses a
 *          Region that AWS turns on by default, the KVS stream can be in any available Region, including an opt-in Region. For example, if the meeting uses <code>ca-central-1</code>, the KVS stream can be in
 *          <code>eu-west-2</code>, <code>us-east-1</code>, <code>af-south-1</code>, or any other Region that the Amazon Chime SDK supports.</p>
 *             <p>To learn  which AWS Region a meeting uses, call the <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_meeting-chime_GetMeeting.html">GetMeeting</a> API and
 *             use the <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_meeting-chime_CreateMeeting.html#chimesdk-meeting-chime_CreateMeeting-request-MediaRegion">MediaRegion</a>
 *             parameter from the response.</p>
 *             <p>For more information about opt-in Regions, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/sdk-available-regions.html">Available Regions</a> in the
 *             <i>Amazon Chime SDK Developer Guide</i>, and
 *             <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-regions.html#rande-manage-enable.html">Specify which AWS Regions your account can use</a>,
 *             in the <i>AWS Account Management Reference Guide</i>.</p>
 *          </note>
 * @public
 */
export interface KinesisVideoStreamConfiguration {
  /**
   * <p>The Amazon Web Services Region of the video stream.</p>
   * @public
   */
  Region: string | undefined;

  /**
   * <p>The amount of time that data is retained.</p>
   * @public
   */
  DataRetentionInHours?: number | undefined;
}

/**
 * @public
 */
export interface CreateMediaPipelineKinesisVideoStreamPoolRequest {
  /**
   * <p>The configuration settings for the stream.</p>
   * @public
   */
  StreamConfiguration: KinesisVideoStreamConfiguration | undefined;

  /**
   * <p>The name of the pool.</p>
   * @public
   */
  PoolName: string | undefined;

  /**
   * <p>The token assigned to the client making the request.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>The tags assigned to the stream pool.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
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
 * <p>The video stream pool configuration object.</p>
 * @public
 */
export interface KinesisVideoStreamPoolConfiguration {
  /**
   * <p>The ARN of the video stream pool configuration.</p>
   * @public
   */
  PoolArn?: string | undefined;

  /**
   * <p>The name of the video stream pool configuration.</p>
   * @public
   */
  PoolName?: string | undefined;

  /**
   * <p>The ID of the video stream pool in the configuration.</p>
   * @public
   */
  PoolId?: string | undefined;

  /**
   * <p>The status of the video stream pool in the configuration. </p>
   * @public
   */
  PoolStatus?: KinesisVideoStreamPoolStatus | undefined;

  /**
   * <p>The size of the video stream pool in the configuration.</p>
   * @public
   */
  PoolSize?: number | undefined;

  /**
   * <p>The Kinesis video stream pool configuration object.</p>
   * @public
   */
  StreamConfiguration?: KinesisVideoStreamConfiguration | undefined;

  /**
   * <p>The time at which the configuration was created.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The time at which the configuration was updated.</p>
   * @public
   */
  UpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface CreateMediaPipelineKinesisVideoStreamPoolResponse {
  /**
   * <p>The configuration for applying the streams to the pool.</p>
   *          <note>
   *             <p></p>
   *          </note>
   * @public
   */
  KinesisVideoStreamPoolConfiguration?: KinesisVideoStreamPoolConfiguration | undefined;
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
 * <p>Structure that contains the settings for a media stream sink.</p>
 * @public
 */
export interface MediaStreamSink {
  /**
   * <p>The ARN of the Kinesis Video Stream pool returned by the <a>CreateMediaPipelineKinesisVideoStreamPool</a> API.</p>
   * @public
   */
  SinkArn: string | undefined;

  /**
   * <p>The media stream sink's type.</p>
   * @public
   */
  SinkType: MediaStreamPipelineSinkType | undefined;

  /**
   * <p>Specifies the number of streams that the sink can accept.</p>
   * @public
   */
  ReservedStreamCapacity: number | undefined;

  /**
   * <p>The media stream sink's media stream type.</p>
   * @public
   */
  MediaStreamType: MediaStreamType | undefined;
}

/**
 * <p>Structure that contains the settings for media stream sources.</p>
 * @public
 */
export interface MediaStreamSource {
  /**
   * <p>The type of media stream source.</p>
   * @public
   */
  SourceType: MediaPipelineSourceType | undefined;

  /**
   * <p>The ARN of the meeting.</p>
   * @public
   */
  SourceArn: string | undefined;
}

/**
 * @public
 */
export interface CreateMediaStreamPipelineRequest {
  /**
   * <p>The data sources for the media pipeline.</p>
   * @public
   */
  Sources: MediaStreamSource[] | undefined;

  /**
   * <p>The data sink for the media pipeline.</p>
   * @public
   */
  Sinks: MediaStreamSink[] | undefined;

  /**
   * <p>The token assigned to the client making the request.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>The tags assigned to the media pipeline.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Structure that contains the settings for a media stream pipeline.</p>
 * @public
 */
export interface MediaStreamPipeline {
  /**
   * <p>The ID of the media stream pipeline</p>
   * @public
   */
  MediaPipelineId?: string | undefined;

  /**
   * <p>The ARN of the media stream pipeline.</p>
   * @public
   */
  MediaPipelineArn?: string | undefined;

  /**
   * <p>The time at which the media stream pipeline was created.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The time at which the media stream pipeline was updated.</p>
   * @public
   */
  UpdatedTimestamp?: Date | undefined;

  /**
   * <p>The status of the media stream pipeline.</p>
   * @public
   */
  Status?: MediaPipelineStatus | undefined;

  /**
   * <p>The media stream pipeline's data sources.</p>
   * @public
   */
  Sources?: MediaStreamSource[] | undefined;

  /**
   * <p>The media stream pipeline's data sinks.</p>
   * @public
   */
  Sinks?: MediaStreamSink[] | undefined;
}

/**
 * @public
 */
export interface CreateMediaStreamPipelineResponse {
  /**
   * <p>The requested media pipeline.</p>
   * @public
   */
  MediaStreamPipeline?: MediaStreamPipeline | undefined;
}

/**
 * @public
 */
export interface DeleteMediaCapturePipelineRequest {
  /**
   * <p>The ID of the media pipeline being deleted. </p>
   * @public
   */
  MediaPipelineId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMediaInsightsPipelineConfigurationRequest {
  /**
   * <p>The unique identifier of the resource to be deleted. Valid values include the name and ARN of the media insights pipeline configuration.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteMediaPipelineRequest {
  /**
   * <p>The ID of the media pipeline to delete.</p>
   * @public
   */
  MediaPipelineId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMediaPipelineKinesisVideoStreamPoolRequest {
  /**
   * <p>The unique identifier of the requested resource. Valid values include the name and ARN of the media pipeline Kinesis Video Stream pool.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetMediaCapturePipelineRequest {
  /**
   * <p>The ID of the pipeline that you want to get.</p>
   * @public
   */
  MediaPipelineId: string | undefined;
}

/**
 * @public
 */
export interface GetMediaCapturePipelineResponse {
  /**
   * <p>The media pipeline object.</p>
   * @public
   */
  MediaCapturePipeline?: MediaCapturePipeline | undefined;
}

/**
 * @public
 */
export interface GetMediaInsightsPipelineConfigurationRequest {
  /**
   * <p>The unique identifier of the requested resource.  Valid values include the name and ARN of the media insights pipeline configuration.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetMediaInsightsPipelineConfigurationResponse {
  /**
   * <p>The requested media insights pipeline configuration.</p>
   * @public
   */
  MediaInsightsPipelineConfiguration?: MediaInsightsPipelineConfiguration | undefined;
}

/**
 * @public
 */
export interface GetMediaPipelineRequest {
  /**
   * <p>The ID of the pipeline that you want to get.</p>
   * @public
   */
  MediaPipelineId: string | undefined;
}

/**
 * <p>A pipeline consisting of a media capture, media concatenation, or live-streaming pipeline.</p>
 * @public
 */
export interface MediaPipeline {
  /**
   * <p>A pipeline that enables users to capture audio and video.</p>
   * @public
   */
  MediaCapturePipeline?: MediaCapturePipeline | undefined;

  /**
   * <p>The connector pipeline of the media pipeline.</p>
   * @public
   */
  MediaLiveConnectorPipeline?: MediaLiveConnectorPipeline | undefined;

  /**
   * <p>The media concatenation pipeline in a media pipeline.</p>
   * @public
   */
  MediaConcatenationPipeline?: MediaConcatenationPipeline | undefined;

  /**
   * <p>The media insights pipeline of a media pipeline.</p>
   * @public
   */
  MediaInsightsPipeline?: MediaInsightsPipeline | undefined;

  /**
   * <p>Designates a media pipeline as a media stream pipeline.</p>
   * @public
   */
  MediaStreamPipeline?: MediaStreamPipeline | undefined;
}

/**
 * @public
 */
export interface GetMediaPipelineResponse {
  /**
   * <p>The media pipeline object.</p>
   * @public
   */
  MediaPipeline?: MediaPipeline | undefined;
}

/**
 * @public
 */
export interface GetMediaPipelineKinesisVideoStreamPoolRequest {
  /**
   * <p>The unique identifier of the requested resource. Valid values include the name and ARN of the media pipeline Kinesis Video Stream pool.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetMediaPipelineKinesisVideoStreamPoolResponse {
  /**
   * <p>The video stream pool configuration object.</p>
   * @public
   */
  KinesisVideoStreamPoolConfiguration?: KinesisVideoStreamPoolConfiguration | undefined;
}

/**
 * @public
 */
export interface GetSpeakerSearchTaskRequest {
  /**
   * <p>The unique identifier of the resource to be updated. Valid values include the ID and ARN of the media insights pipeline.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>The ID of the speaker search task.</p>
   * @public
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
 * <p>A representation of an asynchronous request to perform speaker search analysis on a
 *          media insights pipeline.</p>
 * @public
 */
export interface SpeakerSearchTask {
  /**
   * <p>The speaker search task ID.</p>
   * @public
   */
  SpeakerSearchTaskId?: string | undefined;

  /**
   * <p>The status of the speaker search task.</p>
   * @public
   */
  SpeakerSearchTaskStatus?: MediaPipelineTaskStatus | undefined;

  /**
   * <p>The time at which a speaker search task was created.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The time at which a speaker search task was updated.</p>
   * @public
   */
  UpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface GetSpeakerSearchTaskResponse {
  /**
   * <p>The details of the speaker search task.</p>
   * @public
   */
  SpeakerSearchTask?: SpeakerSearchTask | undefined;
}

/**
 * @public
 */
export interface GetVoiceToneAnalysisTaskRequest {
  /**
   * <p>The unique identifier of the resource to be updated. Valid values include the ID and ARN of the media insights pipeline.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>The ID of the voice tone analysis task.</p>
   * @public
   */
  VoiceToneAnalysisTaskId: string | undefined;
}

/**
 * <p>A representation of an asynchronous request to perform voice tone analysis on a media insights pipeline.</p>
 * @public
 */
export interface VoiceToneAnalysisTask {
  /**
   * <p>The ID of the voice tone analysis task.</p>
   * @public
   */
  VoiceToneAnalysisTaskId?: string | undefined;

  /**
   * <p>The status of a voice tone analysis task.</p>
   * @public
   */
  VoiceToneAnalysisTaskStatus?: MediaPipelineTaskStatus | undefined;

  /**
   * <p>The time at which a voice tone analysis task was created.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The time at which a voice tone analysis task was updated.</p>
   * @public
   */
  UpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface GetVoiceToneAnalysisTaskResponse {
  /**
   * <p>The details of the voice tone analysis task.</p>
   * @public
   */
  VoiceToneAnalysisTask?: VoiceToneAnalysisTask | undefined;
}

/**
 * @public
 */
export interface ListMediaCapturePipelinesRequest {
  /**
   * <p>The token used to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. Valid Range: 1 - 99.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>The summary data of a media capture pipeline.</p>
 * @public
 */
export interface MediaCapturePipelineSummary {
  /**
   * <p>The ID of the media pipeline in the summary.</p>
   * @public
   */
  MediaPipelineId?: string | undefined;

  /**
   * <p>The ARN of the media pipeline in the summary.</p>
   * @public
   */
  MediaPipelineArn?: string | undefined;
}

/**
 * @public
 */
export interface ListMediaCapturePipelinesResponse {
  /**
   * <p>The media pipeline objects in the list.</p>
   * @public
   */
  MediaCapturePipelines?: MediaCapturePipelineSummary[] | undefined;

  /**
   * <p>The token used to retrieve the next page of results. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMediaInsightsPipelineConfigurationsRequest {
  /**
   * <p>The token used to return the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A summary of the media insights pipeline configuration.</p>
 * @public
 */
export interface MediaInsightsPipelineConfigurationSummary {
  /**
   * <p>The name of the media insights pipeline configuration.</p>
   * @public
   */
  MediaInsightsPipelineConfigurationName?: string | undefined;

  /**
   * <p>The ID of the media insights pipeline configuration.</p>
   * @public
   */
  MediaInsightsPipelineConfigurationId?: string | undefined;

  /**
   * <p>The ARN of the media insights pipeline configuration.</p>
   * @public
   */
  MediaInsightsPipelineConfigurationArn?: string | undefined;
}

/**
 * @public
 */
export interface ListMediaInsightsPipelineConfigurationsResponse {
  /**
   * <p>The requested list of media insights pipeline configurations.</p>
   * @public
   */
  MediaInsightsPipelineConfigurations?: MediaInsightsPipelineConfigurationSummary[] | undefined;

  /**
   * <p>The token used to return the next page of results. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMediaPipelineKinesisVideoStreamPoolsRequest {
  /**
   * <p>The token used to return the next page of results. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A summary of the Kinesis video stream pool.</p>
 * @public
 */
export interface KinesisVideoStreamPoolSummary {
  /**
   * <p>The name of the video stream pool.</p>
   * @public
   */
  PoolName?: string | undefined;

  /**
   * <p>The ID of the video stream pool.</p>
   * @public
   */
  PoolId?: string | undefined;

  /**
   * <p>The ARN of the video stream pool.</p>
   * @public
   */
  PoolArn?: string | undefined;
}

/**
 * @public
 */
export interface ListMediaPipelineKinesisVideoStreamPoolsResponse {
  /**
   * <p>The list of video stream pools.</p>
   * @public
   */
  KinesisVideoStreamPools?: KinesisVideoStreamPoolSummary[] | undefined;

  /**
   * <p>The token used to return the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMediaPipelinesRequest {
  /**
   * <p>The token used to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. Valid Range: 1 - 99.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>The summary of the media pipeline.</p>
 * @public
 */
export interface MediaPipelineSummary {
  /**
   * <p>The ID of the media pipeline in the summary.</p>
   * @public
   */
  MediaPipelineId?: string | undefined;

  /**
   * <p>The ARN of the media pipeline in the summary.</p>
   * @public
   */
  MediaPipelineArn?: string | undefined;
}

/**
 * @public
 */
export interface ListMediaPipelinesResponse {
  /**
   * <p>The media pipeline objects in the list.</p>
   * @public
   */
  MediaPipelines?: MediaPipelineSummary[] | undefined;

  /**
   * <p>The token used to retrieve the next page of results. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the media pipeline associated with any tags. The ARN consists of the pipeline's region, resource ID, and pipeline ID.</p>
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags associated with the specified media pipeline.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>The task configuration settings for the Kinesis video stream source.</p>
 * @public
 */
export interface KinesisVideoStreamSourceTaskConfiguration {
  /**
   * <p>The ARN of the stream.</p>
   * @public
   */
  StreamArn: string | undefined;

  /**
   * <p>The channel ID.</p>
   * @public
   */
  ChannelId: number | undefined;

  /**
   * <p>The unique identifier of the fragment to begin processing.</p>
   * @public
   */
  FragmentNumber?: string | undefined;
}

/**
 * @public
 */
export interface StartSpeakerSearchTaskRequest {
  /**
   * <p>The unique identifier of the resource to be updated. Valid values include the ID and ARN of the media insights pipeline.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>The ARN of the voice profile domain that will store the voice profile.</p>
   * @public
   */
  VoiceProfileDomainArn: string | undefined;

  /**
   * <p>The task configuration for the Kinesis video stream source of the media insights
   *          pipeline.</p>
   * @public
   */
  KinesisVideoStreamSourceTaskConfiguration?: KinesisVideoStreamSourceTaskConfiguration | undefined;

  /**
   * <p>The unique identifier for the client request. Use a different token for different speaker search tasks.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface StartSpeakerSearchTaskResponse {
  /**
   * <p>The details of the speaker search task.</p>
   * @public
   */
  SpeakerSearchTask?: SpeakerSearchTask | undefined;
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
   * <p>The unique identifier of the resource to be updated. Valid values include the ID and ARN of the media insights pipeline.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>The language code.</p>
   * @public
   */
  LanguageCode: VoiceAnalyticsLanguageCode | undefined;

  /**
   * <p>The task configuration for the Kinesis video stream source of the media insights
   *          pipeline.</p>
   * @public
   */
  KinesisVideoStreamSourceTaskConfiguration?: KinesisVideoStreamSourceTaskConfiguration | undefined;

  /**
   * <p>The unique identifier for the client request. Use a different token for different voice tone analysis tasks.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface StartVoiceToneAnalysisTaskResponse {
  /**
   * <p>The details of the voice tone analysis task.</p>
   * @public
   */
  VoiceToneAnalysisTask?: VoiceToneAnalysisTask | undefined;
}

/**
 * @public
 */
export interface StopSpeakerSearchTaskRequest {
  /**
   * <p>The unique identifier of the resource to be updated. Valid values include the ID and ARN of the media insights pipeline.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>The speaker search task ID.</p>
   * @public
   */
  SpeakerSearchTaskId: string | undefined;
}

/**
 * @public
 */
export interface StopVoiceToneAnalysisTaskRequest {
  /**
   * <p>The unique identifier of the resource to be updated. Valid values include the ID and ARN of the media insights pipeline.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>The ID of the voice tone analysis task.</p>
   * @public
   */
  VoiceToneAnalysisTaskId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the media pipeline associated with any tags. The ARN consists of the pipeline's endpoint region, resource ID, and pipeline ID.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>The tags associated with the specified media pipeline.</p>
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
   * <p>The ARN of the pipeline that you want to untag.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>The key/value pairs in the tag that you want to remove.</p>
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
   * <p>The unique identifier for the resource to be updated. Valid values include the name and ARN of the media insights pipeline configuration.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>The ARN of the role used by the service to access Amazon Web Services resources.</p>
   * @public
   */
  ResourceAccessRoleArn: string | undefined;

  /**
   * <p>The configuration settings for real-time alerts for the media insights pipeline.</p>
   * @public
   */
  RealTimeAlertConfiguration?: RealTimeAlertConfiguration | undefined;

  /**
   * <p>The elements in the request, such as a processor for Amazon Transcribe or a sink for a Kinesis Data Stream..</p>
   * @public
   */
  Elements: MediaInsightsPipelineConfigurationElement[] | undefined;
}

/**
 * @public
 */
export interface UpdateMediaInsightsPipelineConfigurationResponse {
  /**
   * <p>The updated configuration settings.</p>
   * @public
   */
  MediaInsightsPipelineConfiguration?: MediaInsightsPipelineConfiguration | undefined;
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
   * <p>The unique identifier of the resource to be updated. Valid values include the ID and ARN of the media insights pipeline.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>The requested status of the media insights pipeline.</p>
   * @public
   */
  UpdateStatus: MediaPipelineStatusUpdate | undefined;
}

/**
 * <p>The updated Kinesis video stream configuration object.</p>
 * @public
 */
export interface KinesisVideoStreamConfigurationUpdate {
  /**
   * <p>The updated time that data is retained.</p>
   * @public
   */
  DataRetentionInHours?: number | undefined;
}

/**
 * @public
 */
export interface UpdateMediaPipelineKinesisVideoStreamPoolRequest {
  /**
   * <p>The unique identifier of the requested resource. Valid values include the name and ARN of the media pipeline Kinesis Video Stream pool.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>The configuration settings for the video stream.</p>
   * @public
   */
  StreamConfiguration?: KinesisVideoStreamConfigurationUpdate | undefined;
}

/**
 * @public
 */
export interface UpdateMediaPipelineKinesisVideoStreamPoolResponse {
  /**
   * <p>The video stream pool configuration object.</p>
   * @public
   */
  KinesisVideoStreamPoolConfiguration?: KinesisVideoStreamPoolConfiguration | undefined;
}
