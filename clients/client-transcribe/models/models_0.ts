import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>A time range, set in seconds, between two points in the call.</p>
 */
export interface AbsoluteTimeRange {
  /**
   * <p>A value that indicates the beginning of the time range in seconds. To set absolute time range, you must specify a
   *             start time and an end time. For example, if you specify the following values:</p>
   *         <ul>
   *             <li>
   *                <p>StartTime - 10000</p>
   *             </li>
   *             <li>
   *                <p>Endtime - 50000</p>
   *             </li>
   *          </ul>
   *         <p>The time range is set between 10,000 milliseconds and 50,000 milliseconds into the call.</p>
   */
  StartTime?: number;

  /**
   * <p>A value that indicates the end of the time range in milliseconds. To set absolute time range, you must specify a start
   *             time and an end time. For example, if you specify the following values:</p>
   *         <ul>
   *             <li>
   *                <p>StartTime - 10000</p>
   *             </li>
   *             <li>
   *                <p>Endtime - 50000</p>
   *             </li>
   *          </ul>
   *         <p>The time range is set between 10,000 milliseconds and 50,000 milliseconds into the call. </p>
   */
  EndTime?: number;

  /**
   * <p>A time range from the beginning of the call to the value that you've specified. For example, if you specify 100000, the
   *             time range is set to the first 100,000 milliseconds of the call.</p>
   */
  First?: number;

  /**
   * <p>A time range from the value that you've specified to the end of the call. For example, if you specify 100000, the time
   *             range is set to the last 100,000 milliseconds of the call.</p>
   */
  Last?: number;
}

export namespace AbsoluteTimeRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AbsoluteTimeRange): any => ({
    ...obj,
  });
}

/**
 * <p>Your request didn't pass one or more validation tests. For example, if the entity that you're trying to delete
 *             doesn't exist or if it is in a non-terminal state (for example, it's "in progress"). See the exception <code>Message</code>
 *             field for more information.</p>
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  Message?: string;
}

export namespace BadRequestException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj,
  });
}

export enum BaseModelName {
  NARROW_BAND = "NarrowBand",
  WIDE_BAND = "WideBand",
}

export enum CallAnalyticsJobStatus {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  QUEUED = "QUEUED",
}

export enum ParticipantRole {
  AGENT = "AGENT",
  CUSTOMER = "CUSTOMER",
}

/**
 * <p>For a call analytics job, an object that indicates the audio channel that belongs to the agent and the audio
 *             channel that belongs to the customer.</p>
 */
export interface ChannelDefinition {
  /**
   * <p>A value that indicates the audio channel.</p>
   */
  ChannelId?: number;

  /**
   * <p>Indicates whether the person speaking on the audio channel is the agent or customer.</p>
   */
  ParticipantRole?: ParticipantRole | string;
}

export namespace ChannelDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChannelDefinition): any => ({
    ...obj,
  });
}

export enum LanguageCode {
  AF_ZA = "af-ZA",
  AR_AE = "ar-AE",
  AR_SA = "ar-SA",
  CY_GB = "cy-GB",
  DA_DK = "da-DK",
  DE_CH = "de-CH",
  DE_DE = "de-DE",
  EN_AB = "en-AB",
  EN_AU = "en-AU",
  EN_GB = "en-GB",
  EN_IE = "en-IE",
  EN_IN = "en-IN",
  EN_NZ = "en-NZ",
  EN_US = "en-US",
  EN_WL = "en-WL",
  EN_ZA = "en-ZA",
  ES_ES = "es-ES",
  ES_US = "es-US",
  FA_IR = "fa-IR",
  FR_CA = "fr-CA",
  FR_FR = "fr-FR",
  GA_IE = "ga-IE",
  GD_GB = "gd-GB",
  HE_IL = "he-IL",
  HI_IN = "hi-IN",
  ID_ID = "id-ID",
  IT_IT = "it-IT",
  JA_JP = "ja-JP",
  KO_KR = "ko-KR",
  MS_MY = "ms-MY",
  NL_NL = "nl-NL",
  PT_BR = "pt-BR",
  PT_PT = "pt-PT",
  RU_RU = "ru-RU",
  TA_IN = "ta-IN",
  TE_IN = "te-IN",
  TH_TH = "th-TH",
  TR_TR = "tr-TR",
  ZH_CN = "zh-CN",
  ZH_TW = "zh-TW",
}

/**
 * <p>Describes the input media file in a transcription request.</p>
 */
export interface Media {
  /**
   * <p>The S3 object location of the input media file. The URI must be in the same region as the API endpoint that you
   *             are calling. The general form is:</p>
   *
   *         <p>For example:</p>
   *
   *
   *         <p>For more information about S3 object names, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html#object-keys">Object Keys</a> in the <i>Amazon S3
   *                 Developer Guide</i>.</p>
   */
  MediaFileUri?: string;

  /**
   * <p> The S3 object location for your redacted output media file. This is only supported for call analytics jobs.</p>
   */
  RedactedMediaFileUri?: string;
}

export namespace Media {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Media): any => ({
    ...obj,
  });
}

export enum MediaFormat {
  AMR = "amr",
  FLAC = "flac",
  MP3 = "mp3",
  MP4 = "mp4",
  OGG = "ogg",
  WAV = "wav",
  WEBM = "webm",
}

export enum RedactionOutput {
  REDACTED = "redacted",
  REDACTED_AND_UNREDACTED = "redacted_and_unredacted",
}

export enum RedactionType {
  PII = "PII",
}

/**
 * <p>Settings for content redaction within a transcription job.</p>
 */
export interface ContentRedaction {
  /**
   * <p>Request parameter that defines the entities to be redacted. The only accepted value is <code>PII</code>.</p>
   */
  RedactionType: RedactionType | string | undefined;

  /**
   * <p>The output transcript file stored in either the default S3 bucket or in a bucket you specify.</p>
   *         <p>When you choose <code>redacted</code> Amazon Transcribe outputs only the redacted transcript.</p>
   *         <p>When you choose <code>redacted_and_unredacted</code> Amazon Transcribe outputs both the redacted and
   *             unredacted transcripts.</p>
   */
  RedactionOutput: RedactionOutput | string | undefined;
}

export namespace ContentRedaction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContentRedaction): any => ({
    ...obj,
  });
}

export enum VocabularyFilterMethod {
  MASK = "mask",
  REMOVE = "remove",
  TAG = "tag",
}

/**
 * <p>Provides optional settings for the <code>CallAnalyticsJob</code> operation. </p>
 */
export interface CallAnalyticsJobSettings {
  /**
   * <p>The name of a vocabulary to use when processing the call analytics job.</p>
   */
  VocabularyName?: string;

  /**
   * <p>The name of the vocabulary filter to use when running a call analytics job. The filter that you specify must have the
   *             same language code as the analytics job.</p>
   */
  VocabularyFilterName?: string;

  /**
   * <p>Set to mask to remove filtered text from the transcript and replace it with three asterisks ("***") as placeholder text.
   *             Set to <code>remove</code> to remove filtered text from the transcript without using placeholder text. Set to
   *             <code>tag</code> to mark the word in the transcription output that matches the vocabulary filter. When you set the
   *             filter method to <code>tag</code>, the words matching your vocabulary filter are not masked or removed.</p>
   */
  VocabularyFilterMethod?: VocabularyFilterMethod | string;

  /**
   * <p>The structure used to describe a custom language model.</p>
   */
  LanguageModelName?: string;

  /**
   * <p>Settings for content redaction within a transcription job.</p>
   */
  ContentRedaction?: ContentRedaction;

  /**
   * <p>When you run a call analytics job, you can specify the language spoken in the audio, or you can have Amazon Transcribe identify
   *             the language for you.</p>
   *         <p>To specify a language, specify an array with one language code. If you don't know the language, you can leave this
   *             field blank and Amazon Transcribe will use machine learning to identify the language for you. To improve the ability of Amazon Transcribe to
   *             correctly identify the language, you can provide an array of the languages that can be present in the audio. Refer to
   *             <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-it-works.html">Supported languages and language-specific
   *                 features</a> for additional information.</p>
   */
  LanguageOptions?: (LanguageCode | string)[];
}

export namespace CallAnalyticsJobSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CallAnalyticsJobSettings): any => ({
    ...obj,
  });
}

/**
 * <p>Identifies the location of a transcription.</p>
 */
export interface Transcript {
  /**
   * <p>The S3 object location of the transcript.</p>
   *         <p>Use this URI to access the transcript. If you specified an S3 bucket in the <code>OutputBucketName</code>
   *             field when you created the job, this is the URI of that bucket. If you chose to store the transcript in Amazon Transcribe, this is a
   *             shareable URL that provides secure access to that location.</p>
   */
  TranscriptFileUri?: string;

  /**
   * <p>The S3 object location of the redacted transcript.</p>
   *         <p>Use this URI to access the redacted transcript. If you specified an S3 bucket in the
   *             <code>OutputBucketName</code> field when you created the job, this is the URI of that bucket. If you chose to store
   *             the transcript in Amazon Transcribe, this is a shareable URL that provides secure access to that location.</p>
   */
  RedactedTranscriptFileUri?: string;
}

export namespace Transcript {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Transcript): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an asynchronous analytics job that was created with the <code>StartAnalyticsJob</code>
 *             operation.</p>
 */
export interface CallAnalyticsJob {
  /**
   * <p>The name of the call analytics job.</p>
   */
  CallAnalyticsJobName?: string;

  /**
   * <p>The status of the analytics job.</p>
   */
  CallAnalyticsJobStatus?: CallAnalyticsJobStatus | string;

  /**
   * <p>If you know the language spoken between the customer and the agent, specify a language code for this field.</p>
   *         <p>If you don't know the language, you can leave this field blank, and Amazon Transcribe will use machine learning to automatically
   *             identify the language. To improve the accuracy of language identification, you can provide an array containing the
   *             possible language codes for the language spoken in your audio. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-it-works.html">Supported languages and language-specific features</a> for
   *             additional information.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The sample rate, in Hertz, of the audio.</p>
   */
  MediaSampleRateHertz?: number;

  /**
   * <p>The format of the input audio file. Note: for call analytics jobs, only the following media formats are supported: MP3,
   *             MP4, WAV, FLAC, OGG, and WebM. </p>
   */
  MediaFormat?: MediaFormat | string;

  /**
   * <p>Describes the input media file in a transcription request.</p>
   */
  Media?: Media;

  /**
   * <p>Identifies the location of a transcription.</p>
   */
  Transcript?: Transcript;

  /**
   * <p>A timestamp that shows when the analytics job started processing.</p>
   */
  StartTime?: Date;

  /**
   * <p>A timestamp that shows when the analytics job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A timestamp that shows when the analytics job was completed.</p>
   */
  CompletionTime?: Date;

  /**
   * <p>If the <code>AnalyticsJobStatus</code> is <code>FAILED</code>, this field contains information about why
   *             the job failed.</p>
   *         <p>The <code>FailureReason</code> field can contain one of the following values:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>Unsupported media format</code>: The media format specified in the
   *                 <code>MediaFormat</code> field of the request isn't valid. See the description of the <code>MediaFormat</code>
   *                 field for a list of valid values.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>The media format provided does not match the detected media format</code>: The media
   *                 format of the audio file doesn't match the format specified in the <code>MediaFormat</code> field in the request.
   *                 Check the media format of your media file and make sure the two values match.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Invalid sample rate for audio file</code>: The sample rate specified in the
   *                 <code>MediaSampleRateHertz</code> of the request isn't valid. The sample rate must be between 8,000 and 48,000
   *                 Hertz.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>The sample rate provided does not match the detected sample rate</code>: The sample rate
   *                 in the audio file doesn't match the sample rate specified in the <code>MediaSampleRateHertz</code> field in the
   *                 request. Check the sample rate of your media file and make sure that the two values match.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Invalid file size: file size too large</code>: The size of your audio file is larger than what Amazon Transcribe Medical
   *                 can process. For more information, see <i>Guidelines and Quotas</i> in the Amazon Transcribe Medical
   *                 Guide.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Invalid number of channels: number of channels too large</code>: Your audio contains more
   *                 channels than Amazon Transcribe Medical is configured to process. To request additional channels, see Amazon Transcribe Medical Endpoints and Quotas in the
   *                 <a href="https://docs.aws.amazon.com/general/latest/gr/Welcome.html">Amazon Web Services General
   *                     Reference</a>.</p>
   *             </li>
   *          </ul>
   */
  FailureReason?: string;

  /**
   * <p>The Amazon Resource Number (ARN) that you use to get access to the analytics job.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>A value between zero and one that Amazon Transcribe assigned to the language that it identified in the source audio. This value
   *             appears only when you don't provide a single language code. Larger values indicate that Amazon Transcribe has higher confidence in
   *             the language that it identified</p>
   */
  IdentifiedLanguageScore?: number;

  /**
   * <p>Provides information about the settings used to run a transcription job.</p>
   */
  Settings?: CallAnalyticsJobSettings;

  /**
   * <p>Shows numeric values to indicate the channel assigned to the agent's audio and the channel assigned to the
   *             customer's audio. </p>
   */
  ChannelDefinitions?: ChannelDefinition[];
}

export namespace CallAnalyticsJob {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CallAnalyticsJob): any => ({
    ...obj,
  });
}

/**
 * <p>Provides summary information about a call analytics job.</p>
 */
export interface CallAnalyticsJobSummary {
  /**
   * <p>The name of the call analytics job.</p>
   */
  CallAnalyticsJobName?: string;

  /**
   * <p>A timestamp that shows when the call analytics job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A timestamp that shows when the job began processing.</p>
   */
  StartTime?: Date;

  /**
   * <p>A timestamp that shows when the job was completed.</p>
   */
  CompletionTime?: Date;

  /**
   * <p>The language of the transcript in the source audio file.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The status of the call analytics job.</p>
   */
  CallAnalyticsJobStatus?: CallAnalyticsJobStatus | string;

  /**
   * <p>If the <code>CallAnalyticsJobStatus</code> is <code>FAILED</code>, a description of the error.</p>
   */
  FailureReason?: string;
}

export namespace CallAnalyticsJobSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CallAnalyticsJobSummary): any => ({
    ...obj,
  });
}

/**
 * <p>An object that allows percentages to specify the proportion of the call where you would like to apply a filter. For
 *             example, you can specify the first half of the call. You can also specify the period of time between halfway through to
 *             three-quarters of the way through the call. Because the length of conversation can vary between calls, you can apply
 *             relative time ranges across all calls. </p>
 */
export interface RelativeTimeRange {
  /**
   * <p>A value that indicates the percentage of the beginning of the time range. To set a relative time range, you must
   *             specify a start percentage and an end percentage. For example, if you specify the following values:</p>
   *         <ul>
   *             <li>
   *                <p>StartPercentage - 10</p>
   *             </li>
   *             <li>
   *                <p>EndPercentage - 50</p>
   *             </li>
   *          </ul>
   *         <p>This looks at the time range starting from 10% of the way into the call to 50% of the way through the call. For
   *             a call that lasts 100,000 milliseconds, this example range would apply from the 10,000 millisecond mark to the
   *             50,000 millisecond mark.</p>
   */
  StartPercentage?: number;

  /**
   * <p>A value that indicates the percentage of the end of the time range. To set a relative time range, you must specify
   *             a start percentage and an end percentage. For example, if you specify the following values:</p>
   *         <ul>
   *             <li>
   *                <p>StartPercentage - 10</p>
   *             </li>
   *             <li>
   *                <p>EndPercentage - 50</p>
   *             </li>
   *          </ul>
   *         <p>This looks at the time range starting from 10% of the way into the call to 50% of the way through the call. For a
   *             call that lasts 100,000 milliseconds, this example range would apply from the 10,000 millisecond mark to the 50,000
   *             millisecond mark.</p>
   */
  EndPercentage?: number;

  /**
   * <p>A range that takes the portion of the call up to the time in milliseconds set by the value that you've specified. For
   *             example, if you specify <code>120000</code>, the time range is set for the first 120,000 milliseconds of the call.</p>
   */
  First?: number;

  /**
   * <p>A range that takes the portion of the call from the time in milliseconds set by the value that you've specified to
   *             the end of the call. For example, if you specify <code>120000</code>, the time range is set for the last 120,000
   *             milliseconds of the call.</p>
   */
  Last?: number;
}

export namespace RelativeTimeRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RelativeTimeRange): any => ({
    ...obj,
  });
}

/**
 * <p>An object that enables you to configure your category to be applied to call analytics jobs where either the
 *             customer or agent was interrupted.</p>
 */
export interface InterruptionFilter {
  /**
   * <p>The duration of the interruption.</p>
   */
  Threshold?: number;

  /**
   * <p>Indicates whether the caller or customer was interrupting.</p>
   */
  ParticipantRole?: ParticipantRole | string;

  /**
   * <p>An object you can use to specify a time range (in milliseconds) for when you'd want to find the interruption. For
   *             example, you could search for an interruption between the 30,000 millisecond mark and the 45,000 millisecond mark.
   *             You could also specify the time period as the first 15,000 milliseconds or the last 15,000 milliseconds. </p>
   */
  AbsoluteTimeRange?: AbsoluteTimeRange;

  /**
   * <p>An object that allows percentages to specify the proportion of the call where there was a interruption. For
   *             example, you can specify the first half of the call. You can also specify the period of time between halfway through to
   *             three-quarters of the way through the call. Because the length of conversation can vary between calls, you can apply
   *             relative time ranges across all calls.</p>
   */
  RelativeTimeRange?: RelativeTimeRange;

  /**
   * <p>Set to <code>TRUE</code> to look for a time period where there was no interruption.</p>
   */
  Negate?: boolean;
}

export namespace InterruptionFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InterruptionFilter): any => ({
    ...obj,
  });
}

/**
 * <p>An object that enables you to configure your category to be applied to call analytics jobs where either the
 *             customer or agent was interrupted.</p>
 */
export interface NonTalkTimeFilter {
  /**
   * <p>The duration of the period when neither the customer nor agent was talking.</p>
   */
  Threshold?: number;

  /**
   * <p>An object you can use to specify a time range (in milliseconds) for when no one is talking. For example, you
   *             could specify a time period between the 30,000 millisecond mark and the 45,000 millisecond mark. You could also
   *             specify the time period as the first 15,000 milliseconds or the last 15,000 milliseconds.</p>
   */
  AbsoluteTimeRange?: AbsoluteTimeRange;

  /**
   * <p>An object that allows percentages to specify the proportion of the call where there was silence. For example, you
   *             can specify the first half of the call. You can also specify the period of time between halfway through to three-quarters
   *             of the way through the call. Because the length of conversation can vary between calls, you can apply relative time
   *             ranges across all calls.</p>
   */
  RelativeTimeRange?: RelativeTimeRange;

  /**
   * <p>Set to <code>TRUE</code> to look for a time period when people were talking.</p>
   */
  Negate?: boolean;
}

export namespace NonTalkTimeFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NonTalkTimeFilter): any => ({
    ...obj,
  });
}

export enum SentimentValue {
  MIXED = "MIXED",
  NEGATIVE = "NEGATIVE",
  NEUTRAL = "NEUTRAL",
  POSITIVE = "POSITIVE",
}

/**
 * <p>An object that enables you to specify a particular customer or agent sentiment. If at least 50 percent of the
 *             conversation turns (the back-and-forth between two speakers) in a specified time period match the specified
 *             sentiment, Amazon Transcribe will consider the sentiment a match.</p>
 */
export interface SentimentFilter {
  /**
   * <p>An array that enables you to specify sentiments for the customer or agent. You can specify one or more values.</p>
   */
  Sentiments: (SentimentValue | string)[] | undefined;

  /**
   * <p>The time range, measured in seconds, of the sentiment.</p>
   */
  AbsoluteTimeRange?: AbsoluteTimeRange;

  /**
   * <p>The time range, set in percentages, that correspond to proportion of the call.</p>
   */
  RelativeTimeRange?: RelativeTimeRange;

  /**
   * <p>A value that determines whether the sentiment belongs to the customer or the agent.</p>
   */
  ParticipantRole?: ParticipantRole | string;

  /**
   * <p>Set to <code>TRUE</code> to look for sentiments that weren't specified in the request. </p>
   */
  Negate?: boolean;
}

export namespace SentimentFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SentimentFilter): any => ({
    ...obj,
  });
}

export enum TranscriptFilterType {
  EXACT = "EXACT",
}

/**
 * <p>Matches the output of the transcription to either the specific phrases that you specify, or the intent of the phrases
 *             that you specify.</p>
 */
export interface TranscriptFilter {
  /**
   * <p>Matches the phrase to the transcription output in a word for word fashion.
   *             For example, if you specify the phrase "I want to speak to the manager." Amazon Transcribe attempts to match that specific
   *             phrase to the transcription.</p>
   */
  TranscriptFilterType: TranscriptFilterType | string | undefined;

  /**
   * <p>A time range, set in seconds, between two points in the call.</p>
   */
  AbsoluteTimeRange?: AbsoluteTimeRange;

  /**
   * <p>An object that allows percentages to specify the proportion of the call where you would like to apply a filter. For
   *             example, you can specify the first half of the call. You can also specify the period of time between halfway through to
   *             three-quarters of the way through the call. Because the length of conversation can vary between calls, you can
   *             apply relative time ranges across all calls.</p>
   */
  RelativeTimeRange?: RelativeTimeRange;

  /**
   * <p>Determines whether the customer or the agent is speaking the phrases that you've specified.</p>
   */
  ParticipantRole?: ParticipantRole | string;

  /**
   * <p>If <code>TRUE</code>, the rule that you specify is applied to everything except for the phrases that you
   *             specify.</p>
   */
  Negate?: boolean;

  /**
   * <p>The phrases that you're specifying for the transcript filter to match.</p>
   */
  Targets: string[] | undefined;
}

export namespace TranscriptFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TranscriptFilter): any => ({
    ...obj,
  });
}

/**
 * <p>A condition in the call between the customer and the agent that you want to filter for.</p>
 */
export type Rule =
  | Rule.InterruptionFilterMember
  | Rule.NonTalkTimeFilterMember
  | Rule.SentimentFilterMember
  | Rule.TranscriptFilterMember
  | Rule.$UnknownMember;

export namespace Rule {
  /**
   * <p>A condition for a time period when neither the customer nor the agent was talking.</p>
   */
  export interface NonTalkTimeFilterMember {
    NonTalkTimeFilter: NonTalkTimeFilter;
    InterruptionFilter?: never;
    TranscriptFilter?: never;
    SentimentFilter?: never;
    $unknown?: never;
  }

  /**
   * <p>A condition for a time period when either the customer or agent was interrupting the
   *             other person. </p>
   */
  export interface InterruptionFilterMember {
    NonTalkTimeFilter?: never;
    InterruptionFilter: InterruptionFilter;
    TranscriptFilter?: never;
    SentimentFilter?: never;
    $unknown?: never;
  }

  /**
   * <p>A condition that catches particular words or phrases based on a exact match. For example, if you set the
   *             phrase "I want to speak to the manager", only that exact phrase will be returned.</p>
   */
  export interface TranscriptFilterMember {
    NonTalkTimeFilter?: never;
    InterruptionFilter?: never;
    TranscriptFilter: TranscriptFilter;
    SentimentFilter?: never;
    $unknown?: never;
  }

  /**
   * <p>A condition that is applied to a particular customer sentiment.</p>
   */
  export interface SentimentFilterMember {
    NonTalkTimeFilter?: never;
    InterruptionFilter?: never;
    TranscriptFilter?: never;
    SentimentFilter: SentimentFilter;
    $unknown?: never;
  }

  export interface $UnknownMember {
    NonTalkTimeFilter?: never;
    InterruptionFilter?: never;
    TranscriptFilter?: never;
    SentimentFilter?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    NonTalkTimeFilter: (value: NonTalkTimeFilter) => T;
    InterruptionFilter: (value: InterruptionFilter) => T;
    TranscriptFilter: (value: TranscriptFilter) => T;
    SentimentFilter: (value: SentimentFilter) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Rule, visitor: Visitor<T>): T => {
    if (value.NonTalkTimeFilter !== undefined) return visitor.NonTalkTimeFilter(value.NonTalkTimeFilter);
    if (value.InterruptionFilter !== undefined) return visitor.InterruptionFilter(value.InterruptionFilter);
    if (value.TranscriptFilter !== undefined) return visitor.TranscriptFilter(value.TranscriptFilter);
    if (value.SentimentFilter !== undefined) return visitor.SentimentFilter(value.SentimentFilter);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Rule): any => {
    if (obj.NonTalkTimeFilter !== undefined)
      return { NonTalkTimeFilter: NonTalkTimeFilter.filterSensitiveLog(obj.NonTalkTimeFilter) };
    if (obj.InterruptionFilter !== undefined)
      return { InterruptionFilter: InterruptionFilter.filterSensitiveLog(obj.InterruptionFilter) };
    if (obj.TranscriptFilter !== undefined)
      return { TranscriptFilter: TranscriptFilter.filterSensitiveLog(obj.TranscriptFilter) };
    if (obj.SentimentFilter !== undefined)
      return { SentimentFilter: SentimentFilter.filterSensitiveLog(obj.SentimentFilter) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>An object that contains the rules and additional information about a call analytics category.</p>
 */
export interface CategoryProperties {
  /**
   * <p>The name of the call analytics category.</p>
   */
  CategoryName?: string;

  /**
   * <p>The rules used to create a call analytics category.</p>
   */
  Rules?: Rule[];

  /**
   * <p>A timestamp that shows when the call analytics category was created.</p>
   */
  CreateTime?: Date;

  /**
   * <p>A timestamp that shows when the call analytics category was most recently updated.</p>
   */
  LastUpdateTime?: Date;
}

export namespace CategoryProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CategoryProperties): any => ({
    ...obj,
    ...(obj.Rules && { Rules: obj.Rules.map((item) => Rule.filterSensitiveLog(item)) }),
  });
}

export enum CLMLanguageCode {
  EN_AU = "en-AU",
  EN_GB = "en-GB",
  EN_US = "en-US",
  ES_US = "es-US",
  HI_IN = "hi-IN",
}

/**
 * <p>There is already a resource with that name.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Message?: string;
}

export namespace ConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

export interface CreateCallAnalyticsCategoryRequest {
  /**
   * <p>The name that you choose for your category when you create it. </p>
   */
  CategoryName: string | undefined;

  /**
   * <p>To create a category, you must specify between 1 and 20 rules. For each rule, you specify a
   *             filter to be applied to the attributes of the call. For example, you can specify a sentiment
   *             filter to detect if the customer's sentiment was negative or neutral. </p>
   */
  Rules: Rule[] | undefined;
}

export namespace CreateCallAnalyticsCategoryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCallAnalyticsCategoryRequest): any => ({
    ...obj,
    ...(obj.Rules && { Rules: obj.Rules.map((item) => Rule.filterSensitiveLog(item)) }),
  });
}

export interface CreateCallAnalyticsCategoryResponse {
  /**
   * <p>The rules and associated metadata used to create a category.</p>
   */
  CategoryProperties?: CategoryProperties;
}

export namespace CreateCallAnalyticsCategoryResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCallAnalyticsCategoryResponse): any => ({
    ...obj,
    ...(obj.CategoryProperties && {
      CategoryProperties: CategoryProperties.filterSensitiveLog(obj.CategoryProperties),
    }),
  });
}

/**
 * <p>There was an internal error. Check the error message and try your request again.</p>
 */
export interface InternalFailureException extends __SmithyException, $MetadataBearer {
  name: "InternalFailureException";
  $fault: "server";
  Message?: string;
}

export namespace InternalFailureException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalFailureException): any => ({
    ...obj,
  });
}

/**
 * <p>Either you have sent too many requests or your input file is too long. Wait before you resend your request, or
 *             use a smaller file and resend the request.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace LimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The object that contains the Amazon S3 object location and access role required to train and tune your custom
 *             language model.</p>
 */
export interface InputDataConfig {
  /**
   * <p>The Amazon S3 prefix you specify to access the plain text files that you use to train your custom language model.</p>
   */
  S3Uri: string | undefined;

  /**
   * <p>The Amazon S3 prefix you specify to access the plain text files that you use to tune your custom language model.</p>
   */
  TuningDataS3Uri?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the permissions you've given Amazon Transcribe to access your
   *             Amazon S3 buckets containing your media files or text data.</p>
   */
  DataAccessRoleArn: string | undefined;
}

export namespace InputDataConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputDataConfig): any => ({
    ...obj,
  });
}

/**
 * <p>A key:value pair that adds metadata to a resource used by Amazon Transcribe. For example, a tag with the key:value pair
 *             ‘Department’:’Sales’ might be added to a resource to indicate its use by your organization's sales department.</p>
 */
export interface Tag {
  /**
   * <p>The first part of a key:value pair that forms a tag associated with a given resource. For example, in the tag
   *             ‘Department’:’Sales’, the key is 'Department'.</p>
   */
  Key: string | undefined;

  /**
   * <p>The second part of a key:value pair that forms a tag associated with a given resource. For example, in the tag
   *             ‘Department’:’Sales’, the value is 'Sales'.</p>
   */
  Value: string | undefined;
}

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export interface CreateLanguageModelRequest {
  /**
   * <p>The language of the input text you're using to train your custom language
   *             model.</p>
   */
  LanguageCode: CLMLanguageCode | string | undefined;

  /**
   * <p>The Amazon Transcribe standard language model, or base model used to create your custom language model.</p>
   *         <p>If you want to use your custom language model to transcribe audio with a sample rate of 16,000 Hz or greater,
   *             choose <code>Wideband</code>.</p>
   *         <p>If you want to use your custom language model to transcribe audio with a sample rate that is less than
   *             16,000 Hz, choose <code>Narrowband</code>.</p>
   */
  BaseModelName: BaseModelName | string | undefined;

  /**
   * <p>The name you choose for your custom language model when you create it.</p>
   */
  ModelName: string | undefined;

  /**
   * <p>Contains the data access role and the Amazon S3 prefixes to read the required input files to create a custom
   *             language model.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>Adds one or more tags, each in the form of a key:value pair, to a new language model at the time you create
   *             this new model.</p>
   */
  Tags?: Tag[];
}

export namespace CreateLanguageModelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLanguageModelRequest): any => ({
    ...obj,
  });
}

export enum ModelStatus {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
}

export interface CreateLanguageModelResponse {
  /**
   * <p>The language code of the text you've used to create a custom language model.</p>
   */
  LanguageCode?: CLMLanguageCode | string;

  /**
   * <p>The Amazon Transcribe standard language model, or base model you've used to create a custom language model.</p>
   */
  BaseModelName?: BaseModelName | string;

  /**
   * <p>The name you've chosen for your custom language model.</p>
   */
  ModelName?: string;

  /**
   * <p>The data access role and Amazon S3 prefixes you've chosen to create your custom language model.</p>
   */
  InputDataConfig?: InputDataConfig;

  /**
   * <p>The status of the custom language model. When the status is <code>COMPLETED</code> the model is ready
   *             to use.</p>
   */
  ModelStatus?: ModelStatus | string;
}

export namespace CreateLanguageModelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLanguageModelResponse): any => ({
    ...obj,
  });
}

export interface CreateMedicalVocabularyRequest {
  /**
   * <p>The name of the custom vocabulary. This case-sensitive name must be unique within an Amazon Web Services
   *             account. If you try to create a vocabulary with the same name as a previous vocabulary, you get a
   *             <code>ConflictException</code> error.</p>
   */
  VocabularyName: string | undefined;

  /**
   * <p>The language code for the language used for the entries in your custom vocabulary. The language code of your
   *             custom vocabulary must match the language code of your transcription job. US English (en-US) is the only language
   *             code available for Amazon Transcribe Medical.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>The location in Amazon S3 of the text file you use to define your custom vocabulary. The URI must be in the same
   *             Amazon Web Services Region as the resource that you're calling. Enter information about your
   *             <code>VocabularyFileUri</code> in the following format:</p>
   *         <p>
   *             <code>
   *                 https://s3.<aws-region>.amazonaws.com/<bucket-name>/<keyprefix>/<objectkey>
   *             </code>
   *         </p>
   *         <p>The following is an example URI for a vocabulary file that is stored in Amazon S3:</p>
   *         <p>
   *             <code>https://s3.us-east-1.amazonaws.com/AWSDOC-EXAMPLE-BUCKET/vocab.txt</code>
   *          </p>
   *         <p>For more information about Amazon S3 object names, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html#object-keys">Object Keys</a> in the <i>Amazon S3
   *                 Developer Guide</i>.</p>
   *         <p>For more information about custom vocabularies, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-it-works.html#how-vocabulary-med">Medical Custom Vocabularies</a>.</p>
   */
  VocabularyFileUri: string | undefined;

  /**
   * <p>Adds one or more tags, each in the form of a key:value pair, to a new medical vocabulary at the time you
   *             create this new vocabulary.</p>
   */
  Tags?: Tag[];
}

export namespace CreateMedicalVocabularyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMedicalVocabularyRequest): any => ({
    ...obj,
  });
}

export enum VocabularyState {
  FAILED = "FAILED",
  PENDING = "PENDING",
  READY = "READY",
}

export interface CreateMedicalVocabularyResponse {
  /**
   * <p>The name of the vocabulary. The name must be unique within an Amazon Web Services account and is case
   *             sensitive.</p>
   */
  VocabularyName?: string;

  /**
   * <p>The language code for the entries in your custom vocabulary. US English (en-US) is the only valid language
   *             code for Amazon Transcribe Medical.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The processing state of your custom vocabulary in Amazon Transcribe Medical. If the state is <code>READY</code>, you can
   *             use the vocabulary in a <code>StartMedicalTranscriptionJob</code> request.</p>
   */
  VocabularyState?: VocabularyState | string;

  /**
   * <p>The date and time that you created the vocabulary.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>If the <code>VocabularyState</code> field is <code>FAILED</code>, this field contains information about
   *             why the job failed.</p>
   */
  FailureReason?: string;
}

export namespace CreateMedicalVocabularyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMedicalVocabularyResponse): any => ({
    ...obj,
  });
}

export interface CreateVocabularyRequest {
  /**
   * <p>The name of the vocabulary. The name must be unique within an Amazon Web Services account. The name
   *             is case sensitive. If you try to create a vocabulary with the same name as a previous vocabulary you will receive a
   *             <code>ConflictException</code> error.</p>
   */
  VocabularyName: string | undefined;

  /**
   * <p>The language code of the vocabulary entries. For a list of languages and their corresponding language
   *             codes, see <a>transcribe-whatis</a>.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>An array of strings that contains the vocabulary entries. </p>
   */
  Phrases?: string[];

  /**
   * <p>The S3 location of the text file that contains the definition of the custom vocabulary. The URI must be in the
   *             same region as the API endpoint that you are calling. The general form is:</p>
   *
   *
   *
   *         <p>For more information about S3 object names, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html#object-keys">Object Keys</a> in the
   *             <i>Amazon S3 Developer Guide</i>.</p>
   *         <p>For more information about custom vocabularies, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-vocabulary">Custom vocabularies</a>.</p>
   */
  VocabularyFileUri?: string;

  /**
   * <p>Adds one or more tags, each in the form of a key:value pair, to a new Amazon Transcribe vocabulary at the time you create
   *             this new vocabulary.</p>
   */
  Tags?: Tag[];
}

export namespace CreateVocabularyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVocabularyRequest): any => ({
    ...obj,
  });
}

export interface CreateVocabularyResponse {
  /**
   * <p>The name of the vocabulary.</p>
   */
  VocabularyName?: string;

  /**
   * <p>The language code of the vocabulary entries.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The processing state of the vocabulary. When the <code>VocabularyState</code> field contains
   *             <code>READY</code> the vocabulary is ready to be used in a <code>StartTranscriptionJob</code>
   *             request.</p>
   */
  VocabularyState?: VocabularyState | string;

  /**
   * <p>The date and time that the vocabulary was created.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>If the <code>VocabularyState</code> field is <code>FAILED</code>, this field contains information about
   *             why the job failed.</p>
   */
  FailureReason?: string;
}

export namespace CreateVocabularyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVocabularyResponse): any => ({
    ...obj,
  });
}

export interface CreateVocabularyFilterRequest {
  /**
   * <p>The vocabulary filter name. The name must be unique within the account that contains it. If you try to create a
   *             vocabulary filter with the same name as another vocabulary filter, you get a <code>ConflictException</code>
   *             error.</p>
   */
  VocabularyFilterName: string | undefined;

  /**
   * <p>The language code of the words in the vocabulary filter. All words in the filter must be in the same language.
   *             The vocabulary filter can only be used with transcription jobs in the specified language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>The words to use in the vocabulary filter. Only use characters from the character set defined for custom
   *             vocabularies. For a list of character sets, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-vocabulary.html#charsets">Character Sets for Custom Vocabularies</a>.</p>
   *         <p>If you provide a list of words in the <code>Words</code> parameter, you can't use the
   *             <code>VocabularyFilterFileUri</code> parameter.</p>
   */
  Words?: string[];

  /**
   * <p>The Amazon S3 location of a text file used as input to create the vocabulary filter. Only use characters from
   *             the character set defined for custom vocabularies. For a list of character sets, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-vocabulary.html#charsets">Character Sets for Custom Vocabularies</a>.</p>
   *         <p>The specified file must be less than 50 KB of UTF-8 characters.</p>
   *         <p>If you provide the location of a list of words in the <code>VocabularyFilterFileUri</code> parameter, you can't
   *             use the <code>Words</code> parameter.</p>
   */
  VocabularyFilterFileUri?: string;

  /**
   * <p>Adds one or more tags, each in the form of a key:value pair, to a new Amazon Transcribe vocabulary filter at the time you
   *             create this new vocabulary filter.</p>
   */
  Tags?: Tag[];
}

export namespace CreateVocabularyFilterRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVocabularyFilterRequest): any => ({
    ...obj,
  });
}

export interface CreateVocabularyFilterResponse {
  /**
   * <p>The name of the vocabulary filter.</p>
   */
  VocabularyFilterName?: string;

  /**
   * <p>The language code of the words in the collection.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The date and time that the vocabulary filter was modified.</p>
   */
  LastModifiedTime?: Date;
}

export namespace CreateVocabularyFilterResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVocabularyFilterResponse): any => ({
    ...obj,
  });
}

export interface DeleteCallAnalyticsCategoryRequest {
  /**
   * <p>The name of the call analytics category that you're choosing to delete. The value is case
   *             sensitive. </p>
   */
  CategoryName: string | undefined;
}

export namespace DeleteCallAnalyticsCategoryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCallAnalyticsCategoryRequest): any => ({
    ...obj,
  });
}

export interface DeleteCallAnalyticsCategoryResponse {}

export namespace DeleteCallAnalyticsCategoryResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCallAnalyticsCategoryResponse): any => ({
    ...obj,
  });
}

/**
 * <p>We can't find the requested resource. Check the name and try your request again.</p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace NotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj,
  });
}

export interface DeleteCallAnalyticsJobRequest {
  /**
   * <p>The name of the call analytics job you want to delete.</p>
   */
  CallAnalyticsJobName: string | undefined;
}

export namespace DeleteCallAnalyticsJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCallAnalyticsJobRequest): any => ({
    ...obj,
  });
}

export interface DeleteCallAnalyticsJobResponse {}

export namespace DeleteCallAnalyticsJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCallAnalyticsJobResponse): any => ({
    ...obj,
  });
}

export interface DeleteLanguageModelRequest {
  /**
   * <p>The name of the model you're choosing to delete.</p>
   */
  ModelName: string | undefined;
}

export namespace DeleteLanguageModelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLanguageModelRequest): any => ({
    ...obj,
  });
}

export interface DeleteMedicalTranscriptionJobRequest {
  /**
   * <p>The name you provide to the <code>DeleteMedicalTranscriptionJob</code> object to
   *             delete a transcription job.</p>
   */
  MedicalTranscriptionJobName: string | undefined;
}

export namespace DeleteMedicalTranscriptionJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMedicalTranscriptionJobRequest): any => ({
    ...obj,
  });
}

export interface DeleteMedicalVocabularyRequest {
  /**
   * <p>The name of the vocabulary that you want to delete.</p>
   */
  VocabularyName: string | undefined;
}

export namespace DeleteMedicalVocabularyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMedicalVocabularyRequest): any => ({
    ...obj,
  });
}

export interface DeleteTranscriptionJobRequest {
  /**
   * <p>The name of the transcription job to be deleted.</p>
   */
  TranscriptionJobName: string | undefined;
}

export namespace DeleteTranscriptionJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTranscriptionJobRequest): any => ({
    ...obj,
  });
}

export interface DeleteVocabularyRequest {
  /**
   * <p>The name of the vocabulary to delete. </p>
   */
  VocabularyName: string | undefined;
}

export namespace DeleteVocabularyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVocabularyRequest): any => ({
    ...obj,
  });
}

export interface DeleteVocabularyFilterRequest {
  /**
   * <p>The name of the vocabulary filter to remove.</p>
   */
  VocabularyFilterName: string | undefined;
}

export namespace DeleteVocabularyFilterRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVocabularyFilterRequest): any => ({
    ...obj,
  });
}

export interface DescribeLanguageModelRequest {
  /**
   * <p>The name of the custom language model you submit to get more information.</p>
   */
  ModelName: string | undefined;
}

export namespace DescribeLanguageModelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLanguageModelRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The structure used to describe a custom language model.</p>
 */
export interface LanguageModel {
  /**
   * <p>The name of the custom language model.</p>
   */
  ModelName?: string;

  /**
   * <p>The time the custom language model was created.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The most recent time the custom language model was modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The language code you used to create your custom language model.</p>
   */
  LanguageCode?: CLMLanguageCode | string;

  /**
   * <p>The Amazon Transcribe standard language model, or base model used to create the custom language model.</p>
   */
  BaseModelName?: BaseModelName | string;

  /**
   * <p>The creation status of a custom language model. When the status is <code>COMPLETED</code> the model is
   *             ready for use.</p>
   */
  ModelStatus?: ModelStatus | string;

  /**
   * <p>Whether the base model used for the custom language model is up to date. If this field is <code>true</code>
   *             then you are running the most up-to-date version of the base model in your custom language model.</p>
   */
  UpgradeAvailability?: boolean;

  /**
   * <p>The reason why the custom language model couldn't be created.</p>
   */
  FailureReason?: string;

  /**
   * <p>The data access role and Amazon S3 prefixes for the input files used to train the custom language model.</p>
   */
  InputDataConfig?: InputDataConfig;
}

export namespace LanguageModel {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LanguageModel): any => ({
    ...obj,
  });
}

export interface DescribeLanguageModelResponse {
  /**
   * <p>The name of the custom language model you requested more information about.</p>
   */
  LanguageModel?: LanguageModel;
}

export namespace DescribeLanguageModelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLanguageModelResponse): any => ({
    ...obj,
  });
}

export interface GetCallAnalyticsCategoryRequest {
  /**
   * <p>The name of the category you want information about. This value is case sensitive.</p>
   */
  CategoryName: string | undefined;
}

export namespace GetCallAnalyticsCategoryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCallAnalyticsCategoryRequest): any => ({
    ...obj,
  });
}

export interface GetCallAnalyticsCategoryResponse {
  /**
   * <p>The rules you've defined for a category.</p>
   */
  CategoryProperties?: CategoryProperties;
}

export namespace GetCallAnalyticsCategoryResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCallAnalyticsCategoryResponse): any => ({
    ...obj,
    ...(obj.CategoryProperties && {
      CategoryProperties: CategoryProperties.filterSensitiveLog(obj.CategoryProperties),
    }),
  });
}

export interface GetCallAnalyticsJobRequest {
  /**
   * <p>The name of the analytics job you want information about. This value is case
   *             sensitive. </p>
   */
  CallAnalyticsJobName: string | undefined;
}

export namespace GetCallAnalyticsJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCallAnalyticsJobRequest): any => ({
    ...obj,
  });
}

export interface GetCallAnalyticsJobResponse {
  /**
   * <p>An object that contains the results of your call analytics job.</p>
   */
  CallAnalyticsJob?: CallAnalyticsJob;
}

export namespace GetCallAnalyticsJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCallAnalyticsJobResponse): any => ({
    ...obj,
  });
}

export interface GetMedicalTranscriptionJobRequest {
  /**
   * <p>The name of the medical transcription job.</p>
   */
  MedicalTranscriptionJobName: string | undefined;
}

export namespace GetMedicalTranscriptionJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMedicalTranscriptionJobRequest): any => ({
    ...obj,
  });
}

export enum MedicalContentIdentificationType {
  PHI = "PHI",
}

/**
 * <p>Optional settings for the <a>StartMedicalTranscriptionJob</a>
 *             operation.</p>
 */
export interface MedicalTranscriptionSetting {
  /**
   * <p>Determines whether the transcription job uses speaker recognition to identify different speakers in the input
   *             audio. Speaker recognition labels individual speakers in the audio file. If you set the <code>ShowSpeakerLabels</code>
   *             field to true, you must also set the maximum number of speaker labels in the <code>MaxSpeakerLabels</code>
   *             field.</p>
   *         <p>You can't set both <code>ShowSpeakerLabels</code> and <code>ChannelIdentification</code> in the same
   *             request. If you set both, your request returns a <code>BadRequestException</code>.</p>
   */
  ShowSpeakerLabels?: boolean;

  /**
   * <p>The maximum number of speakers to identify in the input audio. If there are more speakers in the audio than this
   *             number, multiple speakers are identified as a single speaker. If you specify the <code>MaxSpeakerLabels</code> field,
   *             you must set the <code>ShowSpeakerLabels</code> field to true.</p>
   */
  MaxSpeakerLabels?: number;

  /**
   * <p>Instructs Amazon Transcribe Medical to process each audio channel separately and then merge the transcription output of each
   *             channel into a single transcription.</p>
   *         <p>Amazon Transcribe Medical also produces a transcription of each item detected on an audio channel, including the start time and end
   *             time of the item and alternative transcriptions of item. The alternative transcriptions also come with confidence scores
   *             provided by Amazon Transcribe Medical.</p>
   *         <p>You can't set both <code>ShowSpeakerLabels</code> and <code>ChannelIdentification</code> in the same
   *             request. If you set both, your request returns a <code>BadRequestException</code>
   *          </p>
   */
  ChannelIdentification?: boolean;

  /**
   * <p>Determines whether alternative transcripts are generated along with the transcript that has the highest confidence.
   *             If you set <code>ShowAlternatives</code> field to true, you must also set the maximum number of alternatives to
   *             return in the <code>MaxAlternatives</code> field.</p>
   */
  ShowAlternatives?: boolean;

  /**
   * <p>The maximum number of alternatives that you tell the service to return. If you specify the
   *             <code>MaxAlternatives</code> field, you must set the <code>ShowAlternatives</code> field to true.</p>
   */
  MaxAlternatives?: number;

  /**
   * <p>The name of the vocabulary to use when processing a medical transcription job.</p>
   */
  VocabularyName?: string;
}

export namespace MedicalTranscriptionSetting {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MedicalTranscriptionSetting): any => ({
    ...obj,
  });
}

export enum Specialty {
  PRIMARYCARE = "PRIMARYCARE",
}

/**
 * <p>Identifies the location of a medical transcript.</p>
 */
export interface MedicalTranscript {
  /**
   * <p>The S3 object location of the medical transcript.</p>
   *         <p>Use this URI to access the medical transcript. This URI points to the S3 bucket you created to store the medical
   *             transcript.</p>
   */
  TranscriptFileUri?: string;
}

export namespace MedicalTranscript {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MedicalTranscript): any => ({
    ...obj,
  });
}

export enum TranscriptionJobStatus {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  QUEUED = "QUEUED",
}

export enum Type {
  CONVERSATION = "CONVERSATION",
  DICTATION = "DICTATION",
}

/**
 * <p>The data structure that contains the information for a medical transcription job.</p>
 */
export interface MedicalTranscriptionJob {
  /**
   * <p>The name for a given medical transcription job.</p>
   */
  MedicalTranscriptionJobName?: string;

  /**
   * <p>The completion status of a medical transcription job.</p>
   */
  TranscriptionJobStatus?: TranscriptionJobStatus | string;

  /**
   * <p>The language code for the language spoken in the source audio file. US English (en-US) is the only supported
   *             language for medical transcriptions. Any other value you enter for language code results in a
   *             <code>BadRequestException</code> error.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The sample rate, in Hertz, of the source audio containing medical information.</p>
   *         <p>If you don't specify the sample rate, Amazon Transcribe Medical determines it for you. If you choose to specify the sample rate, it
   *             must match the rate detected by Amazon Transcribe Medical. In most cases, you should leave the
   *             <code>MedicalMediaSampleHertz</code> blank and let Amazon Transcribe Medical determine the sample rate.</p>
   */
  MediaSampleRateHertz?: number;

  /**
   * <p>The format of the input media file.</p>
   */
  MediaFormat?: MediaFormat | string;

  /**
   * <p>Describes the input media file in a transcription request.</p>
   */
  Media?: Media;

  /**
   * <p>An object that contains the <code>MedicalTranscript</code>. The <code>MedicalTranscript</code> contains the
   *             <code>TranscriptFileUri</code>.</p>
   */
  Transcript?: MedicalTranscript;

  /**
   * <p>A timestamp that shows when the job started processing.</p>
   */
  StartTime?: Date;

  /**
   * <p>A timestamp that shows when the job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A timestamp that shows when the job was completed.</p>
   */
  CompletionTime?: Date;

  /**
   * <p>If the <code>TranscriptionJobStatus</code> field is <code>FAILED</code>, this field contains information
   *             about why the job failed.</p>
   *         <p>The <code>FailureReason</code> field contains one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>Unsupported media format</code>- The media format specified in the
   *                     <code>MediaFormat</code> field of the request isn't valid. See the description of the
   *                     <code>MediaFormat</code> field for a list of valid values.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>The media format provided does not match the detected media format</code>- The media format
   *                     of the audio file doesn't match the format specified in the <code>MediaFormat</code> field in the request.
   *                     Check the media format of your media file and make sure the two values match.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Invalid sample rate for audio file</code>- The sample rate specified in the
   *                     <code>MediaSampleRateHertz</code> of the request isn't valid. The sample rate must be between 8,000 and
   *                     48,000 Hertz.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>The sample rate provided does not match the detected sample rate</code>- The sample rate in the
   *                     audio file doesn't match the sample rate specified in the <code>MediaSampleRateHertz</code> field in the request.
   *                     Check the sample rate of your media file and make sure that the two values match.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Invalid file size: file size too large</code>- The size of your audio file is larger than what Amazon Transcribe Medical can
   *                     process. For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/limits-guidelines.html#limits">Guidelines and Quotas</a> in the <i>Amazon Transcribe Medical
   *                             Guide</i>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Invalid number of channels: number of channels too large</code>- Your audio contains more channels
   *                     than Amazon Transcribe Medical is configured to process. To request additional channels, see <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe-medical.html">Amazon Transcribe Medical Endpoints and Quotas</a> in the <i>Amazon
   *                             Web Services General Reference</i>
   *                </p>
   *             </li>
   *          </ul>
   */
  FailureReason?: string;

  /**
   * <p>Object that contains  object.</p>
   */
  Settings?: MedicalTranscriptionSetting;

  /**
   * <p>Shows the type of content that you've configured Amazon Transcribe Medical to identify in a transcription job. If the value is
   *             <code>PHI</code>, you've configured the job to identify personal health information (PHI) in the transcription output.</p>
   */
  ContentIdentificationType?: MedicalContentIdentificationType | string;

  /**
   * <p>The medical specialty of any clinicians providing a dictation or having a conversation. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-medical-conversation.html">Transcribing a medical conversation</a>for a
   *             list of supported specialties.</p>
   */
  Specialty?: Specialty | string;

  /**
   * <p>The type of speech in the transcription job. <code>CONVERSATION</code> is generally used for patient-physician
   *             dialogues. <code>DICTATION</code> is the setting for physicians speaking their notes after seeing a patient. For more
   *             information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/what-is-transcribe-med.html">What is
   *                 Amazon Transcribe Medical?</a>.</p>
   */
  Type?: Type | string;

  /**
   * <p>A key:value pair assigned to a given medical transcription job.</p>
   */
  Tags?: Tag[];
}

export namespace MedicalTranscriptionJob {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MedicalTranscriptionJob): any => ({
    ...obj,
  });
}

export interface GetMedicalTranscriptionJobResponse {
  /**
   * <p>An object that contains the results of the medical transcription job.</p>
   */
  MedicalTranscriptionJob?: MedicalTranscriptionJob;
}

export namespace GetMedicalTranscriptionJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMedicalTranscriptionJobResponse): any => ({
    ...obj,
  });
}

export interface GetMedicalVocabularyRequest {
  /**
   * <p>The name of the vocabulary that you want information about. The value is case sensitive. </p>
   */
  VocabularyName: string | undefined;
}

export namespace GetMedicalVocabularyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMedicalVocabularyRequest): any => ({
    ...obj,
  });
}

export interface GetMedicalVocabularyResponse {
  /**
   * <p>The name of the vocabulary returned by Amazon Transcribe Medical.</p>
   */
  VocabularyName?: string;

  /**
   * <p>The valid language code for your vocabulary entries.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The processing state of the vocabulary. If the <code>VocabularyState</code> is <code>READY</code>
   *             then you can use it in the <code>StartMedicalTranscriptionJob</code> operation.</p>
   */
  VocabularyState?: VocabularyState | string;

  /**
   * <p>The date and time that the vocabulary was last modified with a text file different from the one that was
   *             previously used.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>If the <code>VocabularyState</code> is <code>FAILED</code>, this field contains information about why
   *             the job failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The location in Amazon S3 where the vocabulary is stored. Use this URI to get the contents of the vocabulary. You
   *             can download your vocabulary from the URI for a limited time.</p>
   */
  DownloadUri?: string;
}

export namespace GetMedicalVocabularyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMedicalVocabularyResponse): any => ({
    ...obj,
  });
}

export interface GetTranscriptionJobRequest {
  /**
   * <p>The name of the job.</p>
   */
  TranscriptionJobName: string | undefined;
}

export namespace GetTranscriptionJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTranscriptionJobRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about when a transcription job should be executed.</p>
 */
export interface JobExecutionSettings {
  /**
   * <p>Indicates whether a job should be queued by Amazon Transcribe when the concurrent execution limit is exceeded. When the
   *             <code>AllowDeferredExecution</code> field is true, jobs are queued and executed when the number of executing
   *             jobs falls below the concurrent execution limit. If the field is false, Amazon Transcribe returns a
   *             <code>LimitExceededException</code> exception.</p>
   *         <p>Note that job queuing is enabled by default for call analytics jobs.</p>
   *         <p>If you specify the <code>AllowDeferredExecution</code> field, you must specify the
   *             <code>DataAccessRoleArn</code> field.</p>
   */
  AllowDeferredExecution?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of a role that has access to the S3 bucket that contains the input files. Amazon Transcribe
   *             assumes this role to read queued media files. If you have specified an output S3 bucket for the transcription results,
   *             this role should have access to the output bucket as well.</p>
   *         <p>If you specify the <code>AllowDeferredExecution</code> field, you must specify the
   *             <code>DataAccessRoleArn</code> field.</p>
   */
  DataAccessRoleArn?: string;
}

export namespace JobExecutionSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JobExecutionSettings): any => ({
    ...obj,
  });
}

/**
 * <p>The object used to call your custom language model to your transcription job.</p>
 */
export interface ModelSettings {
  /**
   * <p>The name of your custom language model.</p>
   */
  LanguageModelName?: string;
}

export namespace ModelSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelSettings): any => ({
    ...obj,
  });
}

/**
 * <p>Provides optional settings for the <code>StartTranscriptionJob</code> operation.</p>
 */
export interface Settings {
  /**
   * <p>The name of a vocabulary to use when processing the transcription job.</p>
   */
  VocabularyName?: string;

  /**
   * <p>Determines whether the transcription job uses speaker recognition to identify different speakers in the input
   *             audio. Speaker recognition labels individual speakers in the audio file. If you set the <code>ShowSpeakerLabels</code>
   *             field to true, you must also set the maximum number of speaker labels <code>MaxSpeakerLabels</code> field.</p>
   *         <p>You can't set both <code>ShowSpeakerLabels</code> and <code>ChannelIdentification</code> in the same
   *             request. If you set both, your request returns a <code>BadRequestException</code>.</p>
   */
  ShowSpeakerLabels?: boolean;

  /**
   * <p>The maximum number of speakers to identify in the input audio. If there are more speakers in the audio than
   *             this number, multiple speakers are identified as a single speaker. If you specify the <code>MaxSpeakerLabels</code>
   *             field, you must set the <code>ShowSpeakerLabels</code> field to true.</p>
   */
  MaxSpeakerLabels?: number;

  /**
   * <p>Instructs Amazon Transcribe to process each audio channel separately and then merge the transcription output of each
   *             channel into a single transcription. </p>
   *         <p>Amazon Transcribe also produces a transcription of each item detected on an audio channel, including the start time and
   *             end time of the item and alternative transcriptions of the item including the confidence that Amazon Transcribe has in the
   *             transcription.</p>
   *         <p>You can't set both <code>ShowSpeakerLabels</code> and <code>ChannelIdentification</code> in the same
   *             request. If you set both, your request returns a <code>BadRequestException</code>.</p>
   */
  ChannelIdentification?: boolean;

  /**
   * <p>Determines whether the transcription contains alternative transcriptions. If you set the
   *             <code>ShowAlternatives</code> field to true, you must also set the maximum number of alternatives to return in the
   *             <code>MaxAlternatives</code> field.</p>
   */
  ShowAlternatives?: boolean;

  /**
   * <p>The number of alternative transcriptions that the service should return. If you specify the
   *             <code>MaxAlternatives</code> field, you must set the <code>ShowAlternatives</code> field to true.</p>
   */
  MaxAlternatives?: number;

  /**
   * <p>The name of the vocabulary filter to use when transcribing the audio. The filter that you specify must have the
   *             same language code as the transcription job.</p>
   */
  VocabularyFilterName?: string;

  /**
   * <p>Set to <code>mask</code> to remove filtered text from the transcript and replace it with three asterisks ("***")
   *             as placeholder text. Set to <code>remove</code> to remove filtered text from the transcript without using
   *             placeholder text. Set to <code>tag</code> to mark the word in the transcription output that matches the
   *             vocabulary filter. When you set the filter method to <code>tag</code>, the words matching your vocabulary filter
   *             are not masked or removed.</p>
   */
  VocabularyFilterMethod?: VocabularyFilterMethod | string;
}

export namespace Settings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Settings): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an asynchronous transcription job that was created with the <code>StartTranscriptionJob</code>
 *             operation. </p>
 */
export interface TranscriptionJob {
  /**
   * <p>The name of the transcription job.</p>
   */
  TranscriptionJobName?: string;

  /**
   * <p>The status of the transcription job.</p>
   */
  TranscriptionJobStatus?: TranscriptionJobStatus | string;

  /**
   * <p>The language code for the input speech.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The sample rate, in Hertz, of the audio track in the input media file. </p>
   */
  MediaSampleRateHertz?: number;

  /**
   * <p>The format of the input media file.</p>
   */
  MediaFormat?: MediaFormat | string;

  /**
   * <p>An object that describes the input media for the transcription job.</p>
   */
  Media?: Media;

  /**
   * <p>An object that describes the output of the transcription job.</p>
   */
  Transcript?: Transcript;

  /**
   * <p>A timestamp that shows when the job started processing.</p>
   */
  StartTime?: Date;

  /**
   * <p>A timestamp that shows when the job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A timestamp that shows when the job completed.</p>
   */
  CompletionTime?: Date;

  /**
   * <p>If the <code>TranscriptionJobStatus</code> field is <code>FAILED</code>, this field contains information
   *             about why the job failed.</p>
   *         <p>The <code>FailureReason</code> field can contain one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>Unsupported media format</code> - The media format specified in the <code>MediaFormat</code>
   *                     field of the request isn't valid. See the description of the <code>MediaFormat</code> field for a list of valid
   *                     values.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>The media format provided does not match the detected media format</code> - The media format
   *                     of the audio file doesn't match the format specified in the <code>MediaFormat</code> field in the request. Check
   *                     the media format of your media file and make sure that the two values match.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Invalid sample rate for audio file</code> - The sample rate specified in the
   *                     <code>MediaSampleRateHertz</code> of the request isn't valid. The sample rate must be between 8,000 and
   *                     48,000 Hertz.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>The sample rate provided does not match the detected sample rate</code> - The sample rate in the
   *                     audio file doesn't match the sample rate specified in the <code>MediaSampleRateHertz</code> field in the request.
   *                     Check the sample rate of your media file and make sure that the two values match.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Invalid file size: file size too large</code> - The size of your audio file is larger than Amazon Transcribe can process.
   *                     For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/limits-guidelines.html#limits">Limits</a> in the <i>Amazon Transcribe Developer Guide</i>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Invalid number of channels: number of channels too large</code> - Your audio contains more
   *                     channels than Amazon Transcribe is configured to process. To request additional channels, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits-amazon-transcribe">Amazon Transcribe Limits</a> in
   *                     the <i>Amazon Web Services General Reference</i>.</p>
   *             </li>
   *          </ul>
   */
  FailureReason?: string;

  /**
   * <p>Optional settings for the transcription job. Use these settings to turn on speaker recognition, to set the
   *             maximum number of speakers that should be identified and to specify a custom vocabulary to use when processing
   *             the transcription job.</p>
   */
  Settings?: Settings;

  /**
   * <p>An object containing the details of your custom language model.</p>
   */
  ModelSettings?: ModelSettings;

  /**
   * <p>Provides information about how a transcription job is executed.</p>
   */
  JobExecutionSettings?: JobExecutionSettings;

  /**
   * <p>An object that describes content redaction settings for the transcription job.</p>
   */
  ContentRedaction?: ContentRedaction;

  /**
   * <p>A value that shows if automatic language identification was enabled for a transcription job.</p>
   */
  IdentifyLanguage?: boolean;

  /**
   * <p>An object that shows the optional array of languages inputted for transcription jobs  with automatic language
   *             identification enabled.</p>
   */
  LanguageOptions?: (LanguageCode | string)[];

  /**
   * <p>A value between zero and one that Amazon Transcribe assigned to the language that it identified in the source audio. Larger
   *             values indicate that Amazon Transcribe has higher confidence in the language it identified.</p>
   */
  IdentifiedLanguageScore?: number;

  /**
   * <p>A key:value pair assigned to a given transcription job.</p>
   */
  Tags?: Tag[];
}

export namespace TranscriptionJob {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TranscriptionJob): any => ({
    ...obj,
  });
}

export interface GetTranscriptionJobResponse {
  /**
   * <p>An object that contains the results of the transcription job.</p>
   */
  TranscriptionJob?: TranscriptionJob;
}

export namespace GetTranscriptionJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTranscriptionJobResponse): any => ({
    ...obj,
  });
}

export interface GetVocabularyRequest {
  /**
   * <p>The name of the vocabulary to return information about. The name is case
   *             sensitive.</p>
   */
  VocabularyName: string | undefined;
}

export namespace GetVocabularyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetVocabularyRequest): any => ({
    ...obj,
  });
}

export interface GetVocabularyResponse {
  /**
   * <p>The name of the vocabulary to return.</p>
   */
  VocabularyName?: string;

  /**
   * <p>The language code of the vocabulary entries.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The processing state of the vocabulary.</p>
   */
  VocabularyState?: VocabularyState | string;

  /**
   * <p>The date and time that the vocabulary was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>If the <code>VocabularyState</code> field is <code>FAILED</code>, this field contains
   *             information about why the job failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The S3 location where the vocabulary is stored. Use this URI to get the contents of
   *             the vocabulary. The URI is available for a limited time.</p>
   */
  DownloadUri?: string;
}

export namespace GetVocabularyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetVocabularyResponse): any => ({
    ...obj,
  });
}

export interface GetVocabularyFilterRequest {
  /**
   * <p>The name of the vocabulary filter for which to return information.</p>
   */
  VocabularyFilterName: string | undefined;
}

export namespace GetVocabularyFilterRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetVocabularyFilterRequest): any => ({
    ...obj,
  });
}

export interface GetVocabularyFilterResponse {
  /**
   * <p>The name of the vocabulary filter.</p>
   */
  VocabularyFilterName?: string;

  /**
   * <p>The language code of the words in the vocabulary filter.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The date and time that the contents of the vocabulary filter were updated.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The URI of the list of words in the vocabulary filter. You can use this URI to get the list of words.</p>
   */
  DownloadUri?: string;
}

export namespace GetVocabularyFilterResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetVocabularyFilterResponse): any => ({
    ...obj,
  });
}

export interface ListCallAnalyticsCategoriesRequest {
  /**
   * <p>When included, <code>NextToken</code>fetches the next set of categories if the result
   *             of the previous request was truncated.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of categories to return in each page of results. If there are fewer
   *             results than the value you specify, only the actual results are returned. If you do not specify a
   *             value, the default of 5 is used.</p>
   */
  MaxResults?: number;
}

export namespace ListCallAnalyticsCategoriesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCallAnalyticsCategoriesRequest): any => ({
    ...obj,
  });
}

export interface ListCallAnalyticsCategoriesResponse {
  /**
   * <p>The  operation returns a page of jobs at a time. The
   *             maximum size of the list is set by the <code>MaxResults</code> parameter. If there are
   *             more categories in the list than the page size, Amazon Transcribe returns the <code>NextPage</code>
   *             token. Include the token in the next request to the
   *             operation to return the next page of analytics categories.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of objects containing information about analytics categories.</p>
   */
  Categories?: CategoryProperties[];
}

export namespace ListCallAnalyticsCategoriesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCallAnalyticsCategoriesResponse): any => ({
    ...obj,
    ...(obj.Categories && { Categories: obj.Categories.map((item) => CategoryProperties.filterSensitiveLog(item)) }),
  });
}

export interface ListCallAnalyticsJobsRequest {
  /**
   * <p>When specified, returns only call analytics jobs with the specified status. Jobs are ordered
   *             by creation date, with the most recent jobs returned first. If you don't specify a status, Amazon Transcribe
   *             returns all analytics jobs ordered by creation date.</p>
   */
  Status?: CallAnalyticsJobStatus | string;

  /**
   * <p>When specified, the jobs returned in the list are limited to jobs whose name contains the
   *             specified string.</p>
   */
  JobNameContains?: string;

  /**
   * <p>If you receive a truncated result in the previous request of
   *             ,
   *             include <code>NextToken</code> to fetch the next set of jobs.</p>
   */
  NextToken?: string;

  /**
   * <p>  The maximum number of call analytics jobs to return in each page of results. If there are
   *             fewer results than the value you specify, only the actual results are returned. If you do not
   *             specify a value, the default of 5 is used. </p>
   */
  MaxResults?: number;
}

export namespace ListCallAnalyticsJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCallAnalyticsJobsRequest): any => ({
    ...obj,
  });
}

export interface ListCallAnalyticsJobsResponse {
  /**
   * <p>When specified, returns only call analytics jobs with that status. Jobs are ordered
   *             by creation date, with the most recent jobs returned first. If you don't specify a status, Amazon Transcribe
   *             returns all transcription jobs ordered by creation date.</p>
   */
  Status?: CallAnalyticsJobStatus | string;

  /**
   * <p>The  operation returns a page of jobs at a time. The
   *             maximum size of the page is set by the <code>MaxResults</code> parameter. If there are more
   *             jobs in the list than the page size, Amazon Transcribe returns the <code>NextPage</code> token. Include the
   *             token in your next request to the  operation to return next page of jobs.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of objects containing summary information for a transcription job.</p>
   */
  CallAnalyticsJobSummaries?: CallAnalyticsJobSummary[];
}

export namespace ListCallAnalyticsJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCallAnalyticsJobsResponse): any => ({
    ...obj,
  });
}

export interface ListLanguageModelsRequest {
  /**
   * <p>When specified, returns only custom language models with the specified status. Language models are ordered
   *             by creation date, with the newest models first. If you don't specify a status, Amazon Transcribe returns all custom language
   *             models ordered by date.</p>
   */
  StatusEquals?: ModelStatus | string;

  /**
   * <p>When specified, the custom language model names returned contain the substring you've specified.</p>
   */
  NameContains?: string;

  /**
   * <p>When included, fetches the next set of jobs if the result of the previous request was truncated.</p>
   */
  NextToken?: string;

  /**
   * <p> The maximum number of language models to return in each page of results. If there are fewer results than the
   *             value you specify, only the actual results are returned. If you do not specify a value, the default of 5 is used.</p>
   */
  MaxResults?: number;
}

export namespace ListLanguageModelsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListLanguageModelsRequest): any => ({
    ...obj,
  });
}

export interface ListLanguageModelsResponse {
  /**
   * <p>The  operation returns a page of jobs at a time. The maximum size
   *             of the list is set by the MaxResults parameter. If there are more language models in the list than the page size, Amazon Transcribe
   *             returns the <code>NextPage</code> token. Include the token in the next request to the  operation to return the next page of language models.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of objects containing information about custom language models.</p>
   */
  Models?: LanguageModel[];
}

export namespace ListLanguageModelsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListLanguageModelsResponse): any => ({
    ...obj,
  });
}

export interface ListMedicalTranscriptionJobsRequest {
  /**
   * <p>When specified, returns only medical transcription jobs with the specified status. Jobs are ordered by creation
   *             date, with the newest jobs returned first. If you don't specify a status, Amazon Transcribe Medical returns all transcription jobs ordered
   *             by creation date.</p>
   */
  Status?: TranscriptionJobStatus | string;

  /**
   * <p>When specified, the jobs returned in the list are limited to jobs whose name contains the specified string.</p>
   */
  JobNameContains?: string;

  /**
   * <p>If you a receive a truncated result in the previous request of <code>ListMedicalTranscriptionJobs</code>,
   *             include <code>NextToken</code> to fetch the next set of jobs.</p>
   */
  NextToken?: string;

  /**
   * <p> The maximum number of medical transcription jobs to return in each page of results. If there are fewer
   *             results than the value you specify, only the actual results are returned. If you do not specify a value, the default of
   *             5 is used.</p>
   */
  MaxResults?: number;
}

export namespace ListMedicalTranscriptionJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMedicalTranscriptionJobsRequest): any => ({
    ...obj,
  });
}

export enum OutputLocationType {
  CUSTOMER_BUCKET = "CUSTOMER_BUCKET",
  SERVICE_BUCKET = "SERVICE_BUCKET",
}

/**
 * <p>Provides summary information about a transcription job.</p>
 */
export interface MedicalTranscriptionJobSummary {
  /**
   * <p>The name of a medical transcription job.</p>
   */
  MedicalTranscriptionJobName?: string;

  /**
   * <p>A timestamp that shows when the medical transcription job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A timestamp that shows when the job began processing.</p>
   */
  StartTime?: Date;

  /**
   * <p>A timestamp that shows when the job was completed.</p>
   */
  CompletionTime?: Date;

  /**
   * <p>The language of the transcript in the source audio file.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The status of the medical transcription job.</p>
   */
  TranscriptionJobStatus?: TranscriptionJobStatus | string;

  /**
   * <p>If the <code>TranscriptionJobStatus</code> field is <code>FAILED</code>, a description of the error.</p>
   */
  FailureReason?: string;

  /**
   * <p>Indicates the location of the transcription job's output. This field must be the path of an S3 bucket; if you don't
   *             already have an S3 bucket, one is created based on the path you add.</p>
   */
  OutputLocationType?: OutputLocationType | string;

  /**
   * <p>The medical specialty of the transcription job. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-medical-conversation.html">Transcribing a medical conversation</a>for a
   *             list of supported specialties.</p>
   */
  Specialty?: Specialty | string;

  /**
   * <p>Shows the type of information you've configured Amazon Transcribe Medical to identify in a transcription job. If the value is
   *             <code>PHI</code>, you've configured the transcription job to identify personal health information (PHI).</p>
   */
  ContentIdentificationType?: MedicalContentIdentificationType | string;

  /**
   * <p>The speech of the clinician in the input audio.</p>
   */
  Type?: Type | string;
}

export namespace MedicalTranscriptionJobSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MedicalTranscriptionJobSummary): any => ({
    ...obj,
  });
}

export interface ListMedicalTranscriptionJobsResponse {
  /**
   * <p>The requested status of the medical transcription jobs returned.</p>
   */
  Status?: TranscriptionJobStatus | string;

  /**
   * <p>The <code>ListMedicalTranscriptionJobs</code> operation returns a page of jobs at a time. The maximum
   *             size of the page is set by the <code>MaxResults</code> parameter. If the number of jobs exceeds what can fit on
   *             a page, Amazon Transcribe Medical returns the <code>NextPage</code> token. Include the token in the next request to the
   *             <code>ListMedicalTranscriptionJobs</code> operation to return in the next page of jobs.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of objects containing summary information for a transcription job.</p>
   */
  MedicalTranscriptionJobSummaries?: MedicalTranscriptionJobSummary[];
}

export namespace ListMedicalTranscriptionJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMedicalTranscriptionJobsResponse): any => ({
    ...obj,
  });
}

export interface ListMedicalVocabulariesRequest {
  /**
   * <p>If the result of your previous request to <code>ListMedicalVocabularies</code> was truncated, include the
   *             <code>NextToken</code> to fetch the next set of vocabularies.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of vocabularies to return in each page of results. If there are fewer results than the
   *             value you specify, only the actual results are returned. If you do not specify a value, the default of 5 is used.</p>
   */
  MaxResults?: number;

  /**
   * <p>When specified, returns only vocabularies with the <code>VocabularyState</code> equal to the specified
   *             vocabulary state. Use this field to see which vocabularies are ready for your medical transcription jobs.</p>
   */
  StateEquals?: VocabularyState | string;

  /**
   * <p>Returns vocabularies whose names contain the specified string. The search is not case sensitive.
   *             <code>ListMedicalVocabularies</code> returns both "<code>vocabularyname</code>" and
   *             "<code>VocabularyName</code>".</p>
   */
  NameContains?: string;
}

export namespace ListMedicalVocabulariesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMedicalVocabulariesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a custom vocabulary. </p>
 */
export interface VocabularyInfo {
  /**
   * <p>The name of the vocabulary.</p>
   */
  VocabularyName?: string;

  /**
   * <p>The language code of the vocabulary entries.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The date and time that the vocabulary was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The processing state of the vocabulary. If the state is <code>READY</code> you can use
   *             the vocabulary in a <code>StartTranscriptionJob</code> request.</p>
   */
  VocabularyState?: VocabularyState | string;
}

export namespace VocabularyInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VocabularyInfo): any => ({
    ...obj,
  });
}

export interface ListMedicalVocabulariesResponse {
  /**
   * <p>The requested vocabulary state.</p>
   */
  Status?: VocabularyState | string;

  /**
   * <p>The <code>ListMedicalVocabularies</code> operation returns a page of vocabularies at a time. You set the
   *             maximum number of vocabularies to return on a page with the <code>MaxResults</code> parameter. If there
   *             are more jobs in the list will fit on a page, Amazon Transcribe Medical returns the <code>NextPage</code> token. To return the next
   *             page of vocabularies, include the token in the next request to the <code>ListMedicalVocabularies</code>
   *             operation .</p>
   */
  NextToken?: string;

  /**
   * <p>A list of objects that describe the vocabularies that match your search criteria.</p>
   */
  Vocabularies?: VocabularyInfo[];
}

export namespace ListMedicalVocabulariesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMedicalVocabulariesResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>Lists all tags associated with a given Amazon Resource Name (ARN).</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>Lists all tags associated with the given Amazon Resource Name (ARN).</p>
   */
  ResourceArn?: string;

  /**
   * <p>Lists all tags associated with the given transcription job, vocabulary, or resource.</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface ListTranscriptionJobsRequest {
  /**
   * <p>When specified, returns only transcription jobs with the specified status. Jobs are ordered by creation date, with
   *             the newest jobs returned first. If you don’t specify a status, Amazon Transcribe returns all transcription jobs ordered by creation
   *             date.</p>
   */
  Status?: TranscriptionJobStatus | string;

  /**
   * <p>When specified, the jobs returned in the list are limited to jobs whose name contains the specified string.</p>
   */
  JobNameContains?: string;

  /**
   * <p>If the result of the previous request to <code>ListTranscriptionJobs</code> is truncated, include the
   *             <code>NextToken</code> to fetch the next set of jobs.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of jobs to return in each page of results. If there are fewer results than the value you
   *             specify, only the actual results are returned. If you do not specify a value, the default of 5 is used.</p>
   */
  MaxResults?: number;
}

export namespace ListTranscriptionJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTranscriptionJobsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a summary of information about a transcription job.</p>
 */
export interface TranscriptionJobSummary {
  /**
   * <p>The name of the transcription job.</p>
   */
  TranscriptionJobName?: string;

  /**
   * <p>A timestamp that shows when the job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A timestamp that shows when the job started processing.</p>
   */
  StartTime?: Date;

  /**
   * <p>A timestamp that shows when the job was completed.</p>
   */
  CompletionTime?: Date;

  /**
   * <p>The language code for the input speech.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The status of the transcription job. When the status is <code>COMPLETED</code>, use the
   *             <code>GetTranscriptionJob</code> operation to get the results of the transcription.</p>
   */
  TranscriptionJobStatus?: TranscriptionJobStatus | string;

  /**
   * <p>If the <code>TranscriptionJobStatus</code> field is <code>FAILED</code>, a description of the error.</p>
   */
  FailureReason?: string;

  /**
   * <p>Indicates the location of the output of the transcription job.</p>
   *         <p>If the value is <code>CUSTOMER_BUCKET</code> then the location is the S3 bucket specified in the
   *             <code>outputBucketName</code> field when the transcription job was started with the
   *             <code>StartTranscriptionJob</code> operation.</p>
   *         <p>If the value is <code>SERVICE_BUCKET</code> then the output is stored by Amazon Transcribe and can be retrieved using
   *             the URI in the <code>GetTranscriptionJob</code> response's <code>TranscriptFileUri</code> field.</p>
   */
  OutputLocationType?: OutputLocationType | string;

  /**
   * <p>The content redaction settings of the transcription job.</p>
   */
  ContentRedaction?: ContentRedaction;

  /**
   * <p>The object used to call your custom language model to your transcription job.</p>
   */
  ModelSettings?: ModelSettings;

  /**
   * <p>Whether automatic language identification was enabled for a transcription job.</p>
   */
  IdentifyLanguage?: boolean;

  /**
   * <p>A value between zero and one that Amazon Transcribe assigned to the language it identified in the source audio. A higher
   *             score indicates that Amazon Transcribe is more confident in the language it identified.</p>
   */
  IdentifiedLanguageScore?: number;
}

export namespace TranscriptionJobSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TranscriptionJobSummary): any => ({
    ...obj,
  });
}

export interface ListTranscriptionJobsResponse {
  /**
   * <p>The requested status of the jobs returned.</p>
   */
  Status?: TranscriptionJobStatus | string;

  /**
   * <p>The <code>ListTranscriptionJobs</code> operation returns a page of jobs at a time. The maximum size of the
   *             page is set by the <code>MaxResults</code> parameter. If there are more jobs in the list than the page size, Amazon Transcribe
   *             returns the <code>NextPage</code> token. Include the token in the next request to the
   *             <code>ListTranscriptionJobs</code> operation to return in the next page of jobs.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of objects containing summary information for a transcription job.</p>
   */
  TranscriptionJobSummaries?: TranscriptionJobSummary[];
}

export namespace ListTranscriptionJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTranscriptionJobsResponse): any => ({
    ...obj,
  });
}

export interface ListVocabulariesRequest {
  /**
   * <p>If the result of the previous request to <code>ListVocabularies</code> was truncated, include the
   *             <code>NextToken</code> to fetch the next set of jobs.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of vocabularies to return in each page of results. If there are fewer results than the
   *             value you specify, only the actual results are returned. If you do not specify a value, the default of 5 is used.</p>
   */
  MaxResults?: number;

  /**
   * <p>When specified, only returns vocabularies with the <code>VocabularyState</code> field equal to the
   *             specified state.</p>
   */
  StateEquals?: VocabularyState | string;

  /**
   * <p>When specified, the vocabularies returned in the list are limited to vocabularies whose name contains the
   *             specified string. The search is not case sensitive, <code>ListVocabularies</code> returns both "vocabularyname"
   *             and "VocabularyName" in the response list.</p>
   */
  NameContains?: string;
}

export namespace ListVocabulariesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListVocabulariesRequest): any => ({
    ...obj,
  });
}

export interface ListVocabulariesResponse {
  /**
   * <p>The requested vocabulary state.</p>
   */
  Status?: VocabularyState | string;

  /**
   * <p>The <code>ListVocabularies</code> operation returns a page of vocabularies at a time. The maximum size of
   *             the page is set in the <code>MaxResults</code> parameter. If there are more jobs in the list than will fit on the
   *             page, Amazon Transcribe returns the <code>NextPage</code> token. To return in the next page of jobs, include the token in the
   *             next request to the <code>ListVocabularies</code> operation.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of objects that describe the vocabularies that match the search criteria in the request.</p>
   */
  Vocabularies?: VocabularyInfo[];
}

export namespace ListVocabulariesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListVocabulariesResponse): any => ({
    ...obj,
  });
}

export interface ListVocabularyFiltersRequest {
  /**
   * <p>If the result of the previous request to <code>ListVocabularyFilters</code> was truncated, include the
   *             <code>NextToken</code> to fetch the next set of collections.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of filters to return in each page of results. If there are fewer results than the value you
   *             specify, only the actual results are returned. If you do not specify a value, the default of 5 is used.</p>
   */
  MaxResults?: number;

  /**
   * <p>Filters the response so that it only contains vocabulary filters whose name contains the specified string.</p>
   */
  NameContains?: string;
}

export namespace ListVocabularyFiltersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListVocabularyFiltersRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a vocabulary filter.</p>
 */
export interface VocabularyFilterInfo {
  /**
   * <p>The name of the vocabulary filter. The name must be unique in the account that holds the filter.</p>
   */
  VocabularyFilterName?: string;

  /**
   * <p>The language code of the words in the vocabulary filter.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The date and time that the vocabulary was last updated.</p>
   */
  LastModifiedTime?: Date;
}

export namespace VocabularyFilterInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VocabularyFilterInfo): any => ({
    ...obj,
  });
}

export interface ListVocabularyFiltersResponse {
  /**
   * <p>The <code>ListVocabularyFilters</code> operation returns a page of collections at a time. The maximum size
   *             of the page is set by the <code>MaxResults</code> parameter. If there are more jobs in the list than the page size,
   *             Amazon Transcribe returns the <code>NextPage</code> token. Include the token in the next request to the
   *             <code>ListVocabularyFilters</code> operation to return in the next page of jobs.</p>
   */
  NextToken?: string;

  /**
   * <p>The list of vocabulary filters. It contains at most <code>MaxResults</code> number of filters. If there are more
   *             filters, call the <code>ListVocabularyFilters</code> operation again with the <code>NextToken</code> parameter
   *             in the request set to the value of the <code>NextToken</code> field in the response.</p>
   */
  VocabularyFilters?: VocabularyFilterInfo[];
}

export namespace ListVocabularyFiltersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListVocabularyFiltersResponse): any => ({
    ...obj,
  });
}

export interface StartCallAnalyticsJobRequest {
  /**
   * <p>The name of the call analytics job. You can't use the string "." or ".." by themselves as the job name. The name
   *             must also be unique within an Amazon Web Services account. If you try to create a call analytics job with the same
   *             name as a previous call analytics job, you get a <code>ConflictException</code> error.</p>
   */
  CallAnalyticsJobName: string | undefined;

  /**
   * <p>Describes the input media file in a transcription request.</p>
   */
  Media: Media | undefined;

  /**
   * <p>The Amazon S3 location where the output of the call analytics job is stored. You can provide the following
   *             location types to store the output of call analytics job:</p>
   *         <ul>
   *             <li>
   *                <p>s3://DOC-EXAMPLE-BUCKET1</p>
   *                 <p> If you specify a bucket, Amazon Transcribe saves the output of the analytics job as a JSON file at the root level of the
   *                     bucket.</p>
   *             </li>
   *             <li>
   *                <p>s3://DOC-EXAMPLE-BUCKET1/folder/</p>
   *                 <p>f you specify a path, Amazon Transcribe saves the output of the analytics job as
   *                     s3://DOC-EXAMPLE-BUCKET1/folder/your-transcription-job-name.json</p>
   *                 <p>If you specify a folder, you must provide a trailing slash.</p>
   *             </li>
   *             <li>
   *                <p>s3://DOC-EXAMPLE-BUCKET1/folder/filename.json</p>
   *                 <p> If you provide a path that has the filename specified, Amazon Transcribe saves the output of the analytics job as
   *                     s3://DOC-EXAMPLEBUCKET1/folder/filename.json</p>
   *             </li>
   *          </ul>
   *         <p>You can specify an Amazon Web Services Key Management Service (KMS) key to encrypt the output of our
   *             analytics job using the <code>OutputEncryptionKMSKeyId</code> parameter. If you don't specify a KMS key,
   *             Amazon Transcribe uses the default Amazon S3 key for server-side encryption of the analytics job output that is placed in your
   *             S3 bucket.</p>
   */
  OutputLocation?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Key Management Service key used to encrypt
   *             the output of the call analytics job. The user calling the  operation must
   *             have permission to use the specified KMS key.</p>
   *         <p>You use either of the following to identify an Amazon Web Services KMS key in the current account:</p>
   *         <ul>
   *             <li>
   *                <p>KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab"</p>
   *             </li>
   *             <li>
   *                <p>KMS Key Alias: "alias/ExampleAlias"</p>
   *             </li>
   *          </ul>
   *         <p> You can use either of the following to identify a KMS key in the current account or another account:</p>
   *         <ul>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS key in the current account or another account:
   *                 "arn:aws:kms:region:account ID:key/1234abcd-12ab-34cd-56ef1234567890ab"</p>
   *             </li>
   *             <li>
   *                <p>ARN of a KMS Key Alias: "arn:aws:kms:region:account ID:alias/ExampleAlias"</p>
   *             </li>
   *          </ul>
   *         <p>If you don't specify an encryption key, the output of the call analytics job is encrypted with the default Amazon
   *             S3 key (SSE-S3).</p>
   *         <p>If you specify a KMS key to encrypt your output, you must also specify an output location in the
   *             <code>OutputLocation</code> parameter. </p>
   */
  OutputEncryptionKMSKeyId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of a role that has access to the S3 bucket that contains your input files.
   *             Amazon Transcribe assumes this role to read queued audio files. If you have specified an output S3 bucket for your transcription
   *             results, this role should have access to the output bucket as well.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>A <code>Settings</code> object that provides optional settings for a call analytics job. </p>
   */
  Settings?: CallAnalyticsJobSettings;

  /**
   * <p>When you start a call analytics job, you must pass an array that maps the agent and the customer to specific
   *             audio channels. The values you can assign to a channel are 0 and 1. The agent and the customer must each have
   *             their own channel. You can't assign more than one channel to an agent or customer. </p>
   */
  ChannelDefinitions?: ChannelDefinition[];
}

export namespace StartCallAnalyticsJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartCallAnalyticsJobRequest): any => ({
    ...obj,
  });
}

export interface StartCallAnalyticsJobResponse {
  /**
   * <p>An object containing the details of the asynchronous call analytics job.</p>
   */
  CallAnalyticsJob?: CallAnalyticsJob;
}

export namespace StartCallAnalyticsJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartCallAnalyticsJobResponse): any => ({
    ...obj,
  });
}

export interface StartMedicalTranscriptionJobRequest {
  /**
   * <p>The name of the medical transcription job. You can't use the strings "<code>.</code>" or "<code>..</code>"
   *             by themselves as the job name. The name must also be unique within an Amazon Web Services account. If you try to
   *             create a medical transcription job with the same name as a previous medical transcription job, you get a
   *             <code>ConflictException</code> error.</p>
   */
  MedicalTranscriptionJobName: string | undefined;

  /**
   * <p>The language code for the language spoken in the input media file. US English (en-US) is the valid value for
   *             medical transcription jobs. Any other value you enter for language code results in a
   *             <code>BadRequestException</code> error.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>The sample rate, in Hertz, of the audio track in the input media file.</p>
   *         <p>If you do not specify the media sample rate, Amazon Transcribe Medical determines the sample rate. If you specify the sample rate,
   *             it must match the rate detected by Amazon Transcribe Medical. In most cases, you should leave the
   *             <code>MediaSampleRateHertz</code> field blank and let Amazon Transcribe Medical determine the sample rate.</p>
   */
  MediaSampleRateHertz?: number;

  /**
   * <p>The audio format of the input media file.</p>
   */
  MediaFormat?: MediaFormat | string;

  /**
   * <p>Describes the input media file in a transcription request.</p>
   */
  Media: Media | undefined;

  /**
   * <p>The Amazon S3 location where the transcription is stored.</p>
   *         <p>You must set <code>OutputBucketName</code> for Amazon Transcribe Medical to store the transcription results. Your transcript
   *             appears in the S3 location you specify. When you call the <a>GetMedicalTranscriptionJob</a>, the operation
   *             returns this location in the <code>TranscriptFileUri</code> field. The S3 bucket must have permissions that allow
   *             Amazon Transcribe Medical to put files in the bucket. For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/security_iam_id-based-policy-examples.html#auth-role-iam-user">Permissions Required for
   *                 IAM User Roles</a>.</p>
   *         <p>You can specify an Amazon Web Services Key Management Service (KMS) key to encrypt the output of your
   *             transcription using the <code>OutputEncryptionKMSKeyId</code> parameter. If you don't specify a KMS key, Amazon Transcribe Medical
   *             uses the default Amazon S3 key for server-side encryption of transcripts that are placed in your S3 bucket.</p>
   */
  OutputBucketName: string | undefined;

  /**
   * <p>You can specify a location in an Amazon S3 bucket to store the output of your medical transcription job.</p>
   *         <p>If you don't specify an output key, Amazon Transcribe Medical stores the output of your transcription job in the Amazon S3 bucket you
   *             specified. By default, the object key is "your-transcription-job-name.json".</p>
   *         <p>You can use output keys to specify the Amazon S3 prefix and file name of the transcription output. For example,
   *             specifying the Amazon S3 prefix, "folder1/folder2/", as an output key would lead to the output being stored as
   *             "folder1/folder2/your-transcription-job-name.json". If you specify "my-other-job-name.json" as the output key, the object
   *             key is changed to "my-other-job-name.json". You can use an output key to change both the prefix and the file name, for
   *             example "folder/my-other-job-name.json".</p>
   *         <p>If you specify an output key, you must also specify an S3 bucket in the <code>OutputBucketName</code>
   *             parameter.</p>
   */
  OutputKey?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Key Management Service (KMS) key used to
   *             encrypt the output of the transcription job. The user calling the <a>StartMedicalTranscriptionJob</a>
   *             operation must have permission to use the specified KMS key.</p>
   *         <p>You use either of the following to identify a KMS key in the current account:</p>
   *         <ul>
   *             <li>
   *                 <p>KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab"</p>
   *             </li>
   *             <li>
   *                 <p>KMS Key Alias: "alias/ExampleAlias"</p>
   *             </li>
   *          </ul>
   *         <p>You can use either of the following to identify a KMS key in the current account or another account:</p>
   *         <ul>
   *             <li>
   *                 <p>Amazon Resource Name (ARN) of a KMS key in the current account or another
   *                     account: "arn:aws:kms:region:account ID:key/1234abcd-12ab-34cd-56ef-1234567890ab"</p>
   *             </li>
   *             <li>
   *                 <p>ARN of a KMS Key Alias: "arn:aws:kms:region:account ID:alias/ExampleAlias"</p>
   *             </li>
   *          </ul>
   *         <p>If you don't specify an encryption key, the output of the medical transcription job is encrypted with the default Amazon S3
   *             key (SSE-S3).</p>
   *         <p>If you specify a KMS key to encrypt your output, you must also specify an output location in the
   *             <code>OutputBucketName</code> parameter.</p>
   */
  OutputEncryptionKMSKeyId?: string;

  /**
   * <p>A map of plain text, non-secret key:value pairs, known as encryption context pairs, that provide an added
   *             layer of security for your data.</p>
   */
  KMSEncryptionContext?: { [key: string]: string };

  /**
   * <p>Optional settings for the medical transcription job.</p>
   */
  Settings?: MedicalTranscriptionSetting;

  /**
   * <p>You can configure Amazon Transcribe Medical to label content in the transcription output. If you specify <code>PHI</code>,
   *             Amazon Transcribe Medical labels the personal health information (PHI) that it identifies in the transcription output.</p>
   */
  ContentIdentificationType?: MedicalContentIdentificationType | string;

  /**
   * <p>The medical specialty of any clinician speaking in the input media.</p>
   */
  Specialty: Specialty | string | undefined;

  /**
   * <p>The type of speech in the input audio. <code>CONVERSATION</code> refers to conversations between two or
   *             more speakers, e.g., a conversations between doctors and patients. <code>DICTATION</code> refers to
   *             single-speaker dictated speech, such as clinical notes.</p>
   */
  Type: Type | string | undefined;

  /**
   * <p>Add tags to an Amazon Transcribe medical transcription job.</p>
   */
  Tags?: Tag[];
}

export namespace StartMedicalTranscriptionJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartMedicalTranscriptionJobRequest): any => ({
    ...obj,
  });
}

export interface StartMedicalTranscriptionJobResponse {
  /**
   * <p>A batch job submitted to transcribe medical speech to text.</p>
   */
  MedicalTranscriptionJob?: MedicalTranscriptionJob;
}

export namespace StartMedicalTranscriptionJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartMedicalTranscriptionJobResponse): any => ({
    ...obj,
  });
}

export interface StartTranscriptionJobRequest {
  /**
   * <p>The name of the job. You can't use the strings "<code>.</code>" or "<code>..</code>" by themselves as the
   *             job name. The name must also be unique within an Amazon Web Services account. If you try to create a transcription
   *             job with the same name as a previous transcription job, you get a <code>ConflictException</code> error.</p>
   */
  TranscriptionJobName: string | undefined;

  /**
   * <p>The language code for the language used in the input media file.</p>
   *         <p>To transcribe speech in Modern Standard Arabic (ar-SA), your audio or video file must be encoded at a sample
   *             rate of 16,000 Hz or higher.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The sample rate, in Hertz, of the audio track in the input media file. </p>
   *         <p>If you do not specify the media sample rate, Amazon Transcribe determines the sample rate. If you specify the sample rate, it
   *             must match the sample rate detected by Amazon Transcribe. In most cases, you should leave the
   *             <code>MediaSampleRateHertz</code> field blank and let Amazon Transcribe determine the sample rate.</p>
   */
  MediaSampleRateHertz?: number;

  /**
   * <p>The format of the input media file.</p>
   */
  MediaFormat?: MediaFormat | string;

  /**
   * <p>An object that describes the input media for a transcription job.</p>
   */
  Media: Media | undefined;

  /**
   * <p>The location where the transcription is stored.</p>
   *         <p>If you set the <code>OutputBucketName</code>, Amazon Transcribe puts the transcript in the specified S3 bucket. When
   *             you call the <a>GetTranscriptionJob</a> operation, the operation returns this location in the
   *             <code>TranscriptFileUri</code> field. If you enable content redaction, the redacted transcript appears in
   *             <code>RedactedTranscriptFileUri</code>. If you enable content redaction and choose to output an unredacted
   *             transcript, that transcript's location still appears in the <code>TranscriptFileUri</code>. The S3 bucket must have
   *             permissions that allow Amazon Transcribe to put files in the bucket. For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/security_iam_id-based-policy-examples.html#auth-role-iam-user">Permissions Required for
   *                 IAM User Roles</a>.</p>
   *         <p>You can specify an Amazon Web Services Key Management Service (KMS) key to encrypt the output of your
   *             transcription using the <code>OutputEncryptionKMSKeyId</code> parameter. If you don't specify a KMS key, Amazon Transcribe
   *             uses the default Amazon S3 key for server-side encryption of transcripts that are placed in your S3 bucket.</p>
   *         <p>If you don't set the <code>OutputBucketName</code>, Amazon Transcribe generates a pre-signed URL, a shareable URL that
   *             provides secure access to your transcription, and returns it in the <code>TranscriptFileUri</code> field. Use this URL
   *             to download the transcription.</p>
   */
  OutputBucketName?: string;

  /**
   * <p>You can specify a location in an Amazon S3 bucket to store the output of your transcription job.</p>
   *         <p>If you don't specify an output key, Amazon Transcribe stores the output of your transcription job in the Amazon S3 bucket you
   *             specified. By default, the object key is "your-transcription-job-name.json".</p>
   *         <p>You can use output keys to specify the Amazon S3 prefix and file name of the transcription output. For example,
   *             specifying the Amazon S3 prefix, "folder1/folder2/", as an output key would lead to the output being stored as
   *             "folder1/folder2/your-transcription-job-name.json". If you specify "my-other-job-name.json" as the output key, the
   *             object key is changed to "my-other-job-name.json". You can use an output key to change both the prefix and the file
   *             name, for example "folder/my-other-job-name.json".</p>
   *         <p>If you specify an output key, you must also specify an S3 bucket in the <code>OutputBucketName</code>
   *             parameter.</p>
   */
  OutputKey?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Key Management Service (KMS) key used to
   *             encrypt the output of the transcription job. The user calling the <code>StartTranscriptionJob</code>
   *             operation must have permission to use the specified KMS key.</p>
   *         <p>You can use either of the following to identify a KMS key in the current account:</p>
   *         <ul>
   *             <li>
   *                 <p>KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab"</p>
   *             </li>
   *             <li>
   *                 <p>KMS Key Alias: "alias/ExampleAlias"</p>
   *             </li>
   *          </ul>
   *         <p>You can use either of the following to identify a KMS key in the current account or another account:</p>
   *         <ul>
   *             <li>
   *                 <p>Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:region:account
   *                     ID:key/1234abcd-12ab-34cd-56ef-1234567890ab"</p>
   *             </li>
   *             <li>
   *                 <p>ARN of a KMS Key Alias: "arn:aws:kms:region:account ID:alias/ExampleAlias"</p>
   *             </li>
   *          </ul>
   *         <p>If you don't specify an encryption key, the output of the transcription job is encrypted with the default
   *             Amazon S3 key (SSE-S3).</p>
   *         <p>If you specify a KMS key to encrypt your output, you must also specify an output location in the
   *             <code>OutputBucketName</code> parameter.</p>
   */
  OutputEncryptionKMSKeyId?: string;

  /**
   * <p>A map of plain text, non-secret key:value pairs, known as encryption context pairs, that provide an added
   *             layer of security for your data.</p>
   */
  KMSEncryptionContext?: { [key: string]: string };

  /**
   * <p>A <code>Settings</code> object that provides optional settings for a transcription job.</p>
   */
  Settings?: Settings;

  /**
   * <p>Choose the custom language model you use for your transcription job in this parameter.</p>
   */
  ModelSettings?: ModelSettings;

  /**
   * <p>Provides information about how a transcription job is executed. Use this field to indicate that the job can be
   *             queued for deferred execution if the concurrency limit is reached and there are no slots available to immediately run
   *             the job.</p>
   */
  JobExecutionSettings?: JobExecutionSettings;

  /**
   * <p>An object that contains the request parameters for content redaction.</p>
   */
  ContentRedaction?: ContentRedaction;

  /**
   * <p>Set this field to <code>true</code> to enable automatic language identification. Automatic language identification
   *             is disabled by default. You receive a <code>BadRequestException</code> error if you enter a value for a
   *             <code>LanguageCode</code>.</p>
   */
  IdentifyLanguage?: boolean;

  /**
   * <p>An object containing a list of languages that might be present in your collection of audio files. Automatic language
   *             identification chooses a language that best matches the source audio from that list.</p>
   *         <p>To transcribe speech in Modern Standard Arabic (ar-SA), your audio or video file must be encoded at a sample
   *             rate of 16,000 Hz or higher.</p>
   */
  LanguageOptions?: (LanguageCode | string)[];

  /**
   * <p>Add tags to an Amazon Transcribe transcription job.</p>
   */
  Tags?: Tag[];
}

export namespace StartTranscriptionJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartTranscriptionJobRequest): any => ({
    ...obj,
  });
}

export interface StartTranscriptionJobResponse {
  /**
   * <p>An object containing details of the asynchronous transcription job.</p>
   */
  TranscriptionJob?: TranscriptionJob;
}

export namespace StartTranscriptionJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartTranscriptionJobResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Transcribe resource you want to tag.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags you are assigning to a given Amazon Transcribe resource.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Transcribe resource you want to remove tags from.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>A list of tag keys you want to remove from a specified Amazon Transcribe resource.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateCallAnalyticsCategoryRequest {
  /**
   * <p>The name of the analytics category to update. The name is case sensitive. If you try to update a call analytics
   *             category with the same name as a previous category you will receive a <code>ConflictException</code> error.</p>
   */
  CategoryName: string | undefined;

  /**
   * <p>The rules used for the updated analytics category. The rules that you provide in this field replace the ones
   *             that are currently being used. </p>
   */
  Rules: Rule[] | undefined;
}

export namespace UpdateCallAnalyticsCategoryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCallAnalyticsCategoryRequest): any => ({
    ...obj,
    ...(obj.Rules && { Rules: obj.Rules.map((item) => Rule.filterSensitiveLog(item)) }),
  });
}

export interface UpdateCallAnalyticsCategoryResponse {
  /**
   * <p>The attributes describing the analytics category. You can see information such as the rules that you've used
   *             to update the category and when the category was originally created. </p>
   */
  CategoryProperties?: CategoryProperties;
}

export namespace UpdateCallAnalyticsCategoryResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCallAnalyticsCategoryResponse): any => ({
    ...obj,
    ...(obj.CategoryProperties && {
      CategoryProperties: CategoryProperties.filterSensitiveLog(obj.CategoryProperties),
    }),
  });
}

export interface UpdateMedicalVocabularyRequest {
  /**
   * <p>The name of the vocabulary to update. The name is case sensitive. If you try to update a vocabulary with the
   *             same name as a vocabulary you've already made, you get a <code>ConflictException</code> error.</p>
   */
  VocabularyName: string | undefined;

  /**
   * <p>The language code of the language used for the entries in the updated vocabulary. US English (en-US) is the
   *             only valid language code in Amazon Transcribe Medical.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>The location in Amazon S3 of the text file that contains your custom vocabulary. The URI must be in the same
   *             Amazon Web Services Region as the resource that you are calling. The following is the format for a  URI:</p>
   *         <p>
   *             <code>
   *                 https://s3.<aws-region>.amazonaws.com/<bucket-name>/<keyprefix>/<objectkey>
   *             </code>
   *         </p>
   *         <p>For example:</p>
   *         <p>
   *             <code>https://s3.us-east-1.amazonaws.com/AWSDOC-EXAMPLE-BUCKET/vocab.txt</code>
   *          </p>
   *         <p>For more information about Amazon S3 object names, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html#object-keys">Object Keys</a> in the <i>Amazon S3
   *                 Developer Guide</i>.</p>
   *         <p>For more information about custom vocabularies in Amazon Transcribe Medical, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-it-works.html#how-vocabulary">Medical Custom Vocabularies</a>.</p>
   */
  VocabularyFileUri?: string;
}

export namespace UpdateMedicalVocabularyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMedicalVocabularyRequest): any => ({
    ...obj,
  });
}

export interface UpdateMedicalVocabularyResponse {
  /**
   * <p>The name of the updated vocabulary.</p>
   */
  VocabularyName?: string;

  /**
   * <p>The language code for the language of the text file used to update the custom vocabulary. US English (en-US)
   *             is the only language supported in Amazon Transcribe Medical.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The date and time that the vocabulary was updated.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The processing state of the update to the vocabulary. When the <code>VocabularyState</code> field is
   *             <code>READY</code>, the vocabulary is ready to be used in a <code>StartMedicalTranscriptionJob</code>
   *             request.</p>
   */
  VocabularyState?: VocabularyState | string;
}

export namespace UpdateMedicalVocabularyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMedicalVocabularyResponse): any => ({
    ...obj,
  });
}

export interface UpdateVocabularyRequest {
  /**
   * <p>The name of the vocabulary to update. The name is case sensitive. If you try to update a vocabulary with the
   *             same name as a previous vocabulary you will receive a <code>ConflictException</code> error.</p>
   */
  VocabularyName: string | undefined;

  /**
   * <p>The language code of the vocabulary entries. For a list of languages and their corresponding language codes,
   *             see <a>transcribe-whatis</a>.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>An array of strings containing the vocabulary entries.</p>
   */
  Phrases?: string[];

  /**
   * <p>The S3 location of the text file that contains the definition of the custom vocabulary. The URI must be in the
   *             same region as the API endpoint that you are calling. The general form is </p>
   *
   *         <p>For example:</p>
   *
   *         <p>For more information about S3 object names, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html#object-keys">Object Keys</a> in the <i>Amazon S3
   *                 Developer Guide</i>.</p>
   *         <p>For more information about custom vocabularies, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-it-works.html#how-vocabulary">Custom Vocabularies</a>.</p>
   */
  VocabularyFileUri?: string;
}

export namespace UpdateVocabularyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateVocabularyRequest): any => ({
    ...obj,
  });
}

export interface UpdateVocabularyResponse {
  /**
   * <p>The name of the vocabulary that was updated.</p>
   */
  VocabularyName?: string;

  /**
   * <p>The language code of the vocabulary entries.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The date and time that the vocabulary was updated.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The processing state of the vocabulary. When the <code>VocabularyState</code> field contains
   *             <code>READY</code> the vocabulary is ready to be used in a <code>StartTranscriptionJob</code>
   *             request.</p>
   */
  VocabularyState?: VocabularyState | string;
}

export namespace UpdateVocabularyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateVocabularyResponse): any => ({
    ...obj,
  });
}

export interface UpdateVocabularyFilterRequest {
  /**
   * <p>The name of the vocabulary filter to update. If you try to update a vocabulary filter with the same name as
   *             another vocabulary filter, you get a <code>ConflictException</code> error.</p>
   */
  VocabularyFilterName: string | undefined;

  /**
   * <p>The words to use in the vocabulary filter. Only use characters from the character set defined for custom
   *             vocabularies. For a list of character sets, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-vocabulary.html#charsets">Character Sets for Custom Vocabularies</a>.</p>
   *         <p>If you provide a list of words in the <code>Words</code> parameter, you can't use the
   *             <code>VocabularyFilterFileUri</code> parameter.</p>
   */
  Words?: string[];

  /**
   * <p>The Amazon S3 location of a text file used as input to create the vocabulary filter. Only use characters from
   *             the character set defined for custom vocabularies. For a list of character sets, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-vocabulary.html#charsets">Character Sets for Custom Vocabularies</a>.</p>
   *         <p>The specified file must be less than 50 KB of UTF-8 characters.</p>
   *         <p>If you provide the location of a list of words in the
   *             <code>VocabularyFilterFileUri</code> parameter, you can't use the <code>Words</code>
   *             parameter.</p>
   */
  VocabularyFilterFileUri?: string;
}

export namespace UpdateVocabularyFilterRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateVocabularyFilterRequest): any => ({
    ...obj,
  });
}

export interface UpdateVocabularyFilterResponse {
  /**
   * <p>The name of the updated vocabulary filter.</p>
   */
  VocabularyFilterName?: string;

  /**
   * <p>The language code of the words in the vocabulary filter.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The date and time that the vocabulary filter was updated.</p>
   */
  LastModifiedTime?: Date;
}

export namespace UpdateVocabularyFilterResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateVocabularyFilterResponse): any => ({
    ...obj,
  });
}
