// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { TranscribeServiceException as __BaseException } from "./TranscribeServiceException";

/**
 * <p>A time range, in milliseconds, between two points in your media file.</p>
 *         <p>You can use <code>StartTime</code> and <code>EndTime</code> to search a custom
 *             segment. For example, setting <code>StartTime</code> to 10000 and <code>EndTime</code>
 *             to 50000 only searches for your specified criteria in the audio contained between the 10,000
 *             millisecond mark and the 50,000 millisecond mark of your media file. You must use
 *             <code>StartTime</code> and <code>EndTime</code> as a set; that is, if you include one,
 *             you must include both.</p>
 *         <p>You can use also <code>First</code> to search from the start of the audio until the time
 *             you specify, or <code>Last</code> to search from the time you specify until the end of the
 *             audio. For example, setting <code>First</code> to 50000 only searches for your specified
 *             criteria in the audio contained between the start of the media file to the 50,000 millisecond
 *             mark. You can use <code>First</code> and <code>Last</code> independently of each
 *             other.</p>
 *         <p>If you prefer to use percentage instead of milliseconds, see
 *             .</p>
 */
export interface AbsoluteTimeRange {
  /**
   * <p>The time, in milliseconds, when Amazon Transcribe starts searching for the specified
   *             criteria in your audio. If you include <code>StartTime</code> in your request, you must also
   *             include <code>EndTime</code>.</p>
   */
  StartTime?: number;

  /**
   * <p>The time, in milliseconds, when Amazon Transcribe stops searching for the specified criteria
   *             in your audio. If you include <code>EndTime</code> in your request, you must also include
   *             <code>StartTime</code>.</p>
   */
  EndTime?: number;

  /**
   * <p>The time, in milliseconds, from the start of your media file until the value you specify in
   *             which Amazon Transcribe searches for your specified criteria.</p>
   */
  First?: number;

  /**
   * <p>The time, in milliseconds, from the value you specify until the end of your media file in
   *             which Amazon Transcribe searches for your specified criteria.</p>
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
 * <p>Your request didn't pass one or more validation tests. This can occur when the entity you're
 *             trying to delete doesn't exist or if it's in a non-terminal state (such as
 *             <code>IN PROGRESS</code>). See the exception message field for more information.</p>
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
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
 * <p>Allows you to specify which speaker is on which channel. For example, if your agent is the
 *             first participant to speak, you would set <code>ChannelId</code> to <code>0</code> (to
 *             indicate the first channel) and <code>ParticipantRole</code> to <code>AGENT</code> (to
 *             indicate that it's the agent speaking).</p>
 */
export interface ChannelDefinition {
  /**
   * <p>Specify the audio channel you want to define.</p>
   */
  ChannelId?: number;

  /**
   * <p>Specify the speaker you want to define. Omitting this parameter is equivalent to specifying
   *             both participants.</p>
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
 * <p>Describes the Amazon S3 location of the media file you want to use in your
 *             request.</p>
 */
export interface Media {
  /**
   * <p>The Amazon S3 location of the media file you want to transcribe. For
   *             example:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>s3://DOC-EXAMPLE-BUCKET/my-media-file.flac</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>s3://DOC-EXAMPLE-BUCKET/media-files/my-media-file.flac</code>
   *                </p>
   *             </li>
   *          </ul>
   *         <p>Note that the Amazon S3 bucket that contains your input media must be located
   *             in the same Amazon Web Services Region where you're making your transcription
   *             request.</p>
   */
  MediaFileUri?: string;

  /**
   * <p>The Amazon S3 location of the media file you want to redact. For
   *             example:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>s3://DOC-EXAMPLE-BUCKET/my-media-file.flac</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>s3://DOC-EXAMPLE-BUCKET/media-files/my-media-file.flac</code>
   *                </p>
   *             </li>
   *          </ul>
   *         <p>Note that the Amazon S3 bucket that contains your input media must be located
   *             in the same Amazon Web Services Region where you're making your transcription
   *             request.</p>
   *         <important>
   *             <p>
   *                <code>RedactedMediaFileUri</code> is only supported for Call Analytics
   *                 (<code>StartCallAnalyticsJob</code>) transcription requests.</p>
   *         </important>
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

export enum PiiEntityType {
  ADDRESS = "ADDRESS",
  ALL = "ALL",
  BANK_ACCOUNT_NUMBER = "BANK_ACCOUNT_NUMBER",
  BANK_ROUTING = "BANK_ROUTING",
  CREDIT_DEBIT_CVV = "CREDIT_DEBIT_CVV",
  CREDIT_DEBIT_EXPIRY = "CREDIT_DEBIT_EXPIRY",
  CREDIT_DEBIT_NUMBER = "CREDIT_DEBIT_NUMBER",
  EMAIL = "EMAIL",
  NAME = "NAME",
  PHONE = "PHONE",
  PIN = "PIN",
  SSN = "SSN",
}

export enum RedactionOutput {
  REDACTED = "redacted",
  REDACTED_AND_UNREDACTED = "redacted_and_unredacted",
}

export enum RedactionType {
  PII = "PII",
}

/**
 * <p>Allows you to redact or flag specified personally identifiable information (PII) in your transcript. If
 *             you use <code>ContentRedaction</code>, you must also include the sub-parameters:
 *             <code>PiiEntityTypes</code>, <code>RedactionOutput</code>, and
 *             <code>RedactionType</code>.</p>
 */
export interface ContentRedaction {
  /**
   * <p>Specify the category of information you want to redact; <code>PII</code> (personally
   *             identifiable information) is the only valid value. You can use <code>PiiEntityTypes</code> to
   *             choose which types of PII you want to redact.</p>
   */
  RedactionType: RedactionType | string | undefined;

  /**
   * <p>Specify if you want only a redacted transcript, or if you want a redacted and an unredacted
   *             transcript.</p>
   *         <p>When you choose <code>redacted</code> Amazon Transcribe creates only a redacted
   *             transcript.</p>
   *         <p>When you choose <code>redacted_and_unredacted</code> Amazon Transcribe creates
   *             a redacted and an unredacted transcript (as two separate files).</p>
   */
  RedactionOutput: RedactionOutput | string | undefined;

  /**
   * <p>Specify which types of personally identifiable information (PII) you want to redact in your
   *             transcript. You can include as many types as you'd like, or you can select
   *             <code>ALL</code>.</p>
   */
  PiiEntityTypes?: (PiiEntityType | string)[];
}

export namespace ContentRedaction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContentRedaction): any => ({
    ...obj,
  });
}

/**
 * <p>If using automatic language identification (<code>IdentifyLanguage</code>) in your request
 *             and you want to apply a custom language model, a custom vocabulary, or a custom vocabulary
 *             filter, include <code>LanguageIdSettings</code> with the relevant sub-parameters
 *             (<code>VocabularyName</code>, <code>LanguageModelName</code>, and
 *             <code>VocabularyFilterName</code>).</p>
 *         <p>You can specify two or more language codes that represent the languages you think may be
 *             present in your media; including more than five is not recommended. Each language code you
 *             include can have an associated custom language model, custom vocabulary, and custom
 *             vocabulary filter. The languages you specify must match the languages of the specified custom
 *             language models, custom vocabularies, and custom vocabulary filters.</p>
 *         <p>To include language options using <code>IdentifyLanguage</code>
 *             <b>without</b> including a custom language model, a custom
 *             vocabulary, or a custom vocabulary filter, use <code>LanguageOptions</code> instead of
 *             <code>LanguageIdSettings</code>. Including language options can improve the accuracy of
 *             automatic language identification.</p>
 *         <p>If you want to include a custom language model with your request but
 *             <b>do not</b> want to use automatic language identification,
 *             use instead the <code></code> parameter with the
 *             <code>LanguageModelName</code> sub-parameter.</p>
 *         <p>If you want to include a custom vocabulary or a custom vocabulary filter (or both) with
 *             your request but <b>do not</b> want to use automatic
 *             language identification, use instead the <code></code>
 *             parameter with the <code>VocabularyName</code> or
 *             <code>VocabularyFilterName</code> (or both) sub-parameter.</p>
 */
export interface LanguageIdSettings {
  /**
   * <p>The name of the custom vocabulary you want to use when processing your transcription job.
   *             Vocabulary names are case sensitive.</p>
   *         <p>The language of the specified vocabulary must match the language code you specify in
   *             your transcription request. If the languages don't match, the vocabulary isn't applied. There
   *             are no errors or warnings associated with a language mismatch.</p>
   */
  VocabularyName?: string;

  /**
   * <p>The name of the custom vocabulary filter you want to use when processing your
   *             transcription job. Vocabulary filter names are case sensitive.</p>
   *         <p>The language of the specified vocabulary filter must match the language code you specify
   *             in your transcription request. If the languages don't match, the vocabulary filter isn't applied.
   *             There are no errors or warnings associated with a language mismatch.</p>
   *         <p>Note that if you include <code>VocabularyFilterName</code> in your request, you must
   *             also include <code>VocabularyFilterMethod</code>.</p>
   */
  VocabularyFilterName?: string;

  /**
   * <p>The name of the custom language model you want to use when processing your
   *             transcription job. Note that language model names are case sensitive.</p>
   *         <p>The language of the specified language model must match the language code you specify
   *             in your transcription request. If the languages don't match, the language model isn't applied.
   *             There are no errors or warnings associated with a language mismatch.</p>
   */
  LanguageModelName?: string;
}

export namespace LanguageIdSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LanguageIdSettings): any => ({
    ...obj,
  });
}

export enum VocabularyFilterMethod {
  MASK = "mask",
  REMOVE = "remove",
  TAG = "tag",
}

/**
 * <p>Provides additional optional settings for your
 *             request, including content redaction, automatic language identification; allows you to apply
 *             custom language models, vocabulary filters, and custom vocabularies.</p>
 */
export interface CallAnalyticsJobSettings {
  /**
   * <p>The name of the custom vocabulary you want to include in your Call Analytics
   *             transcription request. Vocabulary names are case sensitive.</p>
   */
  VocabularyName?: string;

  /**
   * <p>The name of the custom vocabulary filter you want to include in your Call Analytics
   *             transcription request. Vocabulary filter names are case sensitive.</p>
   *         <p>Note that if you include <code>VocabularyFilterName</code> in your request, you must
   *             also include <code>VocabularyFilterMethod</code>.</p>
   */
  VocabularyFilterName?: string;

  /**
   * <p>Specify how you want your vocabulary filter applied to your transcript.</p>
   *         <p>To replace words with <code>***</code>, choose <code>mask</code>.</p>
   *         <p>To delete words, choose <code>remove</code>.</p>
   *         <p>To flag words without changing them, choose <code>tag</code>.</p>
   */
  VocabularyFilterMethod?: VocabularyFilterMethod | string;

  /**
   * <p>The name of the custom language model you want to use when processing your
   *             Call Analytics job. Note that language model names are case sensitive.</p>
   *         <p>The language of the specified language model must match the language code you specify
   *             in your transcription request. If the languages don't match, the language model isn't applied.
   *             There are no errors or warnings associated with a language mismatch.</p>
   */
  LanguageModelName?: string;

  /**
   * <p>Allows you to redact or flag specified personally identifiable information (PII) in your transcript. If
   *             you use <code>ContentRedaction</code>, you must also include the sub-parameters:
   *             <code>PiiEntityTypes</code>, <code>RedactionOutput</code>, and
   *             <code>RedactionType</code>.</p>
   */
  ContentRedaction?: ContentRedaction;

  /**
   * <p>You can specify two or more language codes that represent the languages you think may
   *             be present in your media; including more than five is not recommended. If you're unsure what
   *             languages are present, do not include this parameter.</p>
   *         <p>Including language options can improve the accuracy of language identification.</p>
   *         <p>For a list of languages supported with Call Analytics, refer to the <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported languages</a> table.</p>
   */
  LanguageOptions?: (LanguageCode | string)[];

  /**
   * <p>If using automatic language identification (<code>IdentifyLanguage</code>) in your request
   *             and you want to apply a custom language model, a custom vocabulary, or a custom vocabulary
   *             filter, include <code>LanguageIdSettings</code> with the relevant sub-parameters
   *             (<code>VocabularyName</code>, <code>LanguageModelName</code>, and
   *             <code>VocabularyFilterName</code>).</p>
   *         <p>You can specify two or more language codes that represent the languages you think may
   *             be present in your media; including more than five is not recommended. Each language code you
   *             include can have an associated custom language model, custom vocabulary, and custom
   *             vocabulary filter. The languages you specify must match the languages of the specified custom
   *             language models, custom vocabularies, and custom vocabulary filters.</p>
   *         <p>To include language options using <code>IdentifyLanguage</code>
   *             <b>without</b> including a custom language model, a custom
   *             vocabulary, or a custom vocabulary filter, use <code>LanguageOptions</code> instead of
   *             <code>LanguageIdSettings</code>. Including language options can improve the accuracy of
   *             automatic language identification.</p>
   *         <p>If you want to include a custom language model with your request but
   *             <b>do not</b> want to use automatic language identification,
   *             use instead the <code></code> parameter with the
   *             <code>LanguageModelName</code> sub-parameter.</p>
   *         <p>If you want to include a custom vocabulary or a custom vocabulary filter (or both) with
   *             your request but <b>do not</b> want to use automatic
   *             language identification, use instead the <code></code>
   *             parameter with the <code>VocabularyName</code> or
   *             <code>VocabularyFilterName</code> (or both) sub-parameter.</p>
   */
  LanguageIdSettings?: Record<string, LanguageIdSettings>;
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
 * <p>Provides you with the Amazon S3 URI you can use to access your transcript.</p>
 */
export interface Transcript {
  /**
   * <p>The Amazon S3 location of your transcript. You can use this URI to access or
   *             download your transcript.</p>
   *         <p>If you included <code>OutputBucketName</code> in your transcription job request, this is
   *             the URI of that bucket. If you also included <code>OutputKey</code> in your request, your
   *             output is located in the path you specified in your request.</p>
   *         <p>If you didn't include <code>OutputBucketName</code> in your transcription job request,
   *             your transcript is stored in a service-managed bucket, and <code>TranscriptFileUri</code>
   *             provides you with a temporary URI you can use for secure access to your transcript.</p>
   *         <note>
   *             <p>Temporary URIs for service-managed Amazon S3 buckets are only valid for 15
   *                 minutes. If you get an <code>AccesDenied</code> error, you can get a new temporary
   *                 URI by running a <code>GetTranscriptionJob</code> or
   *                 <code>ListTranscriptionJob</code> request.</p>
   *         </note>
   */
  TranscriptFileUri?: string;

  /**
   * <p>The Amazon S3 location of your redacted transcript. You can use this URI to access
   *             or download your transcript.</p>
   *         <p>If you included <code>OutputBucketName</code> in your transcription job request, this is
   *             the URI of that bucket. If you also included <code>OutputKey</code> in your request, your
   *             output is located in the path you specified in your request.</p>
   *         <p>If you didn't include <code>OutputBucketName</code> in your transcription job request,
   *             your transcript is stored in a service-managed bucket, and
   *             <code>RedactedTranscriptFileUri</code> provides you with a temporary URI you can use for
   *             secure access to your transcript.</p>
   *         <note>
   *             <p>Temporary URIs for service-managed Amazon S3 buckets are only valid for 15
   *                 minutes. If you get an <code>AccesDenied</code> error, you can get a new temporary
   *                 URI by running a <code>GetTranscriptionJob</code> or
   *                 <code>ListTranscriptionJob</code> request.</p>
   *         </note>
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
 * <p>Provides detailed information about a Call Analytics job.</p>
 *         <p>To view the job's status, refer to <code>CallAnalyticsJobStatus</code>. If the status is
 *             <code>COMPLETED</code>, the job is finished. You can find your completed transcript at
 *             the URI specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>,
 *             <code>FailureReason</code> provides details on why your transcription job failed.</p>
 *         <p>If you enabled personally identifiable information (PII) redaction, the redacted transcript
 *             appears at the location specified in <code>RedactedTranscriptFileUri</code>.</p>
 *         <p>If you chose to redact the audio in your media file, you can find your redacted media file
 *             at the location specified in the <code>RedactedMediaFileUri</code> field of your
 *             response.</p>
 */
export interface CallAnalyticsJob {
  /**
   * <p>The name of the Call Analytics job. Job names are case sensitive and must be unique
   *             within an Amazon Web Services account.</p>
   */
  CallAnalyticsJobName?: string;

  /**
   * <p>Provides the status of the specified Call Analytics job.</p>
   *         <p>If the status is <code>COMPLETED</code>, the job is finished and you can find the results
   *             at the location specified in <code>TranscriptFileUri</code> (or
   *             <code>RedactedTranscriptFileUri</code>, if you requested transcript redaction). If the status is
   *             <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription
   *             job failed.</p>
   */
  CallAnalyticsJobStatus?: CallAnalyticsJobStatus | string;

  /**
   * <p>The language code used to create your Call Analytics job. For a list of supported languages
   *             and their associated language codes, refer to the
   *             <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported
   *                 languages</a> table.</p>
   *         <p>If you don't know the language spoken in your media file, you can omit this field and let
   *             Amazon Transcribe automatically identify the language of your media. To improve the accuracy
   *             of language identification, you can include several language codes and Amazon Transcribe
   *             chooses the closest match for your transcription.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The sample rate, in Hertz, of the audio track in your input media file.</p>
   */
  MediaSampleRateHertz?: number;

  /**
   * <p>The format of the input media file.</p>
   */
  MediaFormat?: MediaFormat | string;

  /**
   * <p>Describes the Amazon S3 location of the media file you want to use in your
   *             request.</p>
   */
  Media?: Media;

  /**
   * <p>Provides you with the Amazon S3 URI you can use to access your transcript.</p>
   */
  Transcript?: Transcript;

  /**
   * <p>The date and time the specified Call Analytics job began processing.</p>
   *         <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.789000-07:00</code> represents a transcription job
   *             that started processing at 12:32 PM UTC-7 on May 4, 2022.</p>
   */
  StartTime?: Date;

  /**
   * <p>The date and time the specified Call Analytics job request was made.</p>
   *         <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents a transcription job
   *             that started processing at 12:32 PM UTC-7 on May 4, 2022.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The date and time the specified Call Analytics job finished processing.</p>
   *         <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:33:13.922000-07:00</code> represents a transcription job
   *             that started processing at 12:33 PM UTC-7 on May 4, 2022.</p>
   */
  CompletionTime?: Date;

  /**
   * <p>If <code>CallAnalyticsJobStatus</code> is <code>FAILED</code>,
   *             <code>FailureReason</code> contains information about why the Call Analytics job request
   *             failed.</p>
   *         <p>The <code>FailureReason</code> field contains one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>Unsupported media format</code>.</p>
   *                 <p>The media format specified in <code>MediaFormat</code> isn't valid. Refer to
   *                     <b>MediaFormat</b> for a list of supported formats.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>The media format provided does not match the detected media
   *                     format</code>.</p>
   *                 <p>The media format specified in <code>MediaFormat</code> doesn't match the
   *                     format of the input file. Check the media format of your media file and correct the
   *                     specified value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Invalid sample rate for audio file</code>.</p>
   *                 <p>The sample rate specified in <code>MediaSampleRateHertz</code> isn't valid.
   *                     The sample rate must be between 8,000 and 48,000 Hertz.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>The sample rate provided does not match the detected sample
   *                     rate</code>.</p>
   *                 <p>The sample rate specified in <code>MediaSampleRateHertz</code> doesn't
   *                     match the sample rate detected in your input media file. Check the sample rate of
   *                     your media file and correct the specified value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Invalid file size: file size too large</code>.</p>
   *                 <p>The size of your media file is larger than what Amazon Transcribe can process.
   *                     For more information, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/limits-guidelines.html#limits">Guidelines and
   *                         quotas</a>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Invalid number of channels: number of channels too large</code>.</p>
   *                 <p>Your audio contains more channels than Amazon Transcribe is able to process.
   *                     For more information, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/limits-guidelines.html#limits">Guidelines and
   *                         quotas</a>.</p>
   *             </li>
   *          </ul>
   */
  FailureReason?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that has permissions to
   *             access the Amazon S3 bucket that contains your input files. If the role you specify doesn’t
   *             have the appropriate permissions to access the specified Amazon S3 location, your request
   *             fails.</p>
   *         <p>IAM role ARNs have the format
   *             <code>arn:partition:iam::account:role/role-name-with-path</code>. For example:
   *             <code>arn:aws:iam::111122223333:role/Admin</code>.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns">IAM ARNs</a>.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>The confidence score associated with the language identified in your media file.</p>
   *         <p>Confidence scores are values between 0 and 1; a larger value indicates a higher
   *             probability that the identified language correctly matches the language spoken in your
   *             media.</p>
   */
  IdentifiedLanguageScore?: number;

  /**
   * <p>Allows additional optional settings in your
   *             request, including content redaction; allows you to apply custom language models, vocabulary
   *             filters, and custom vocabularies to your Call Analytics job.</p>
   */
  Settings?: CallAnalyticsJobSettings;

  /**
   * <p>Allows you to specify which speaker is on which channel in your Call Analytics job request.
   *             For example, if your agent is the first participant to speak, you would set
   *             <code>ChannelId</code> to <code>0</code> (to indicate the first channel) and
   *             <code>ParticipantRole</code> to <code>AGENT</code> (to indicate that it's the agent
   *             speaking).</p>
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
 * <p>Provides detailed information about a specific Call Analytics job.</p>
 */
export interface CallAnalyticsJobSummary {
  /**
   * <p>The name of the Call Analytics job. Job names are case sensitive and must be unique
   *             within an Amazon Web Services account.</p>
   */
  CallAnalyticsJobName?: string;

  /**
   * <p>The date and time the specified Call Analytics job request was made.</p>
   *         <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents a transcription job
   *             that started processing at 12:32 PM UTC-7 on May 4, 2022.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The date and time your Call Analytics job began processing.</p>
   *         <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.789000-07:00</code> represents a transcription job
   *             that started processing at 12:32 PM UTC-7 on May 4, 2022.</p>
   */
  StartTime?: Date;

  /**
   * <p>The date and time the specified Call Analytics job finished processing.</p>
   *         <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:33:13.922000-07:00</code> represents a transcription job
   *             that started processing at 12:33 PM UTC-7 on May 4, 2022.</p>
   */
  CompletionTime?: Date;

  /**
   * <p>The language code used to create your Call Analytics transcription.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>Provides the status of your Call Analytics job.</p>
   *         <p>If the status is <code>COMPLETED</code>, the job is finished and you can find the results
   *             at the location specified in <code>TranscriptFileUri</code> (or
   *             <code>RedactedTranscriptFileUri</code>, if you requested transcript redaction). If the status is
   *             <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription
   *             job failed.</p>
   */
  CallAnalyticsJobStatus?: CallAnalyticsJobStatus | string;

  /**
   * <p>If <code>CallAnalyticsJobStatus</code> is <code>FAILED</code>,
   *             <code>FailureReason</code> contains information about why the Call Analytics job
   *             failed. See also: <a href="https://docs.aws.amazon.com/transcribe/latest/APIReference/CommonErrors.html">Common Errors</a>.</p>
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
 * <p>A time range, in percentage, between two points in your media file.</p>
 *         <p>You can use <code>StartPercentage</code> and <code>EndPercentage</code> to
 *             search a custom segment. For example, setting <code>StartPercentage</code> to 10 and
 *             <code>EndPercentage</code> to 50 only searches for your specified criteria in the audio
 *             contained between the 10 percent mark and the 50 percent mark of your media file.</p>
 *         <p>You can use also <code>First</code> to search from the start of the media file until the
 *             time you specify, or <code>Last</code> to search from the time you specify until the end of
 *             the media file. For example, setting <code>First</code> to 10 only searches for your specified
 *             criteria in the audio contained in the first 10 percent of the media file.</p>
 *         <p>If you prefer to use milliseconds instead of percentage, see
 *             .</p>
 */
export interface RelativeTimeRange {
  /**
   * <p>The time, in percentage, when Amazon Transcribe starts searching for the specified
   *             criteria in your media file. If you include <code>StartPercentage</code> in your request, you
   *             must also include <code>EndPercentage</code>.</p>
   */
  StartPercentage?: number;

  /**
   * <p>The time, in percentage, when Amazon Transcribe stops searching for the specified criteria
   *             in your media file. If you include <code>EndPercentage</code> in your request, you must also
   *             include <code>StartPercentage</code>.</p>
   */
  EndPercentage?: number;

  /**
   * <p>The time, in percentage, from the start of your media file until the value you specify in
   *             which Amazon Transcribe searches for your specified criteria.</p>
   */
  First?: number;

  /**
   * <p>The time, in percentage, from the value you specify until the end of your media file in
   *             which Amazon Transcribe searches for your specified criteria.</p>
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
 * <p>Flag the presence or absence of interruptions in your Call Analytics transcription output.</p>
 *         <p>Rules using <code>InterruptionFilter</code> are designed to match:</p>
 *         <ul>
 *             <li>
 *                 <p>Instances where an agent interrupts a customer</p>
 *             </li>
 *             <li>
 *                 <p>Instances where a customer interrupts an agent</p>
 *             </li>
 *             <li>
 *                 <p>Either participant interrupting the other</p>
 *             </li>
 *             <li>
 *                 <p>A lack of interruptions</p>
 *             </li>
 *          </ul>
 *                 <p>See <a href="https://docs.aws.amazon.com/transcribe/latest/dg/call-analytics-create-categories.html#call-analytics-create-categories-rules">Rule
 *             criteria</a> for usage examples.</p>
 */
export interface InterruptionFilter {
  /**
   * <p>Specify the duration of the interruptions in milliseconds. For example, you can flag speech that
   *             contains more than 10000 milliseconds of interruptions.</p>
   */
  Threshold?: number;

  /**
   * <p>Specify the interrupter you want to flag. Omitting this parameter is equivalent to specifying
   *             both participants.</p>
   */
  ParticipantRole?: ParticipantRole | string;

  /**
   * <p>Allows you to specify a time range (in milliseconds) in your audio, during which you want
   *             to search for an interruption. See  for more
   *             detail.</p>
   */
  AbsoluteTimeRange?: AbsoluteTimeRange;

  /**
   * <p>Allows you to specify a time range (in percentage) in your media file, during which you
   *             want to search for an interruption. See  for more
   *             detail.</p>
   */
  RelativeTimeRange?: RelativeTimeRange;

  /**
   * <p>Set to <code>TRUE</code> to flag speech that does not contain interruptions. Set to
   *             <code>FALSE</code> to flag speech that contains interruptions.</p>
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
 * <p>Flag the presence or absence of periods of silence in your Call Analytics transcription
 *             output.</p>
 *         <p>Rules using <code>NonTalkTimeFilter</code> are designed to match:</p>
 *         <ul>
 *             <li>
 *                 <p>The presence of silence at specified periods throughout the call</p>
 *             </li>
 *             <li>
 *                 <p>The presence of speech at specified periods throughout the call</p>
 *             </li>
 *          </ul>
 *         <p>See <a href="https://docs.aws.amazon.com/transcribe/latest/dg/call-analytics-create-categories.html#call-analytics-create-categories-rules">Rule
 *             criteria</a> for usage examples.</p>
 */
export interface NonTalkTimeFilter {
  /**
   * <p>Specify the duration, in milliseconds, of the period of silence you want to flag. For
   *             example, you can flag a silent period that lasts 30000 milliseconds.</p>
   */
  Threshold?: number;

  /**
   * <p>Allows you to specify a time range (in milliseconds) in your audio, during which you want
   *             to search for a period of silence. See  for more
   *             detail.</p>
   */
  AbsoluteTimeRange?: AbsoluteTimeRange;

  /**
   * <p>Allows you to specify a time range (in percentage) in your media file, during which you
   *             want to search for a period of silence. See  for more
   *             detail.</p>
   */
  RelativeTimeRange?: RelativeTimeRange;

  /**
   * <p>Set to <code>TRUE</code> to flag periods of speech. Set to <code>FALSE</code> to flag
   *             periods of silence</p>
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
 * <p>Flag the presence or absence of specific sentiments detected in your Call Analytics
 *             transcription output.</p>
 *         <p>Rules using <code>SentimentFilter</code> are designed to match:</p>
 *         <ul>
 *             <li>
 *                 <p>The presence or absence of a positive sentiment felt by the customer, agent,
 *                     or both at specified points in the call</p>
 *             </li>
 *             <li>
 *                 <p>The presence or absence of a negative sentiment felt by the customer, agent,
 *                     or both at specified points in the call</p>
 *             </li>
 *             <li>
 *                 <p>The presence or absence of a neutral sentiment felt by the customer, agent, or
 *                     both at specified points in the call</p>
 *             </li>
 *             <li>
 *                 <p>The presence or absence of a mixed sentiment felt by the customer, the agent,
 *                     or both at specified points in the call</p>
 *             </li>
 *          </ul>
 *         <p>See <a href="https://docs.aws.amazon.com/transcribe/latest/dg/call-analytics-create-categories.html#call-analytics-create-categories-rules">Rule
 *             criteria</a> for examples.</p>
 */
export interface SentimentFilter {
  /**
   * <p>Specify the sentiments you want to flag.</p>
   */
  Sentiments: (SentimentValue | string)[] | undefined;

  /**
   * <p>Allows you to specify a time range (in milliseconds) in your audio, during which you want
   *             to search for the specified sentiments. See  for more
   *             detail.</p>
   */
  AbsoluteTimeRange?: AbsoluteTimeRange;

  /**
   * <p>Allows you to specify a time range (in percentage) in your media file, during which you
   *             want to search for the specified sentiments. See
   *             for more detail.</p>
   */
  RelativeTimeRange?: RelativeTimeRange;

  /**
   * <p>Specify the participant you want to flag. Omitting this parameter is equivalent to specifying
   *             both participants.</p>
   */
  ParticipantRole?: ParticipantRole | string;

  /**
   * <p>Set to <code>TRUE</code> to flag the sentiments you didn't include in your request. Set to
   *             <code>FALSE</code> to flag the sentiments you specified in your request.</p>
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
 * <p>Flag the presence or absence of specific words or phrases detected in your Call Analytics
 *             transcription output.</p>
 *         <p>Rules using <code>TranscriptFilter</code> are designed to match:</p>
 *         <ul>
 *             <li>
 *                 <p>Custom words or phrases spoken by the agent, the customer, or both</p>
 *             </li>
 *             <li>
 *                 <p>Custom words or phrases <b>not</b> spoken by the
 *                     agent, the customer, or either</p>
 *             </li>
 *             <li>
 *                 <p>Custom words or phrases that occur at a specific time frame</p>
 *             </li>
 *          </ul>
 *         <p>See <a href="https://docs.aws.amazon.com/transcribe/latest/dg/call-analytics-create-categories.html#call-analytics-create-categories-rules">Rule
 *             criteria</a> for examples.</p>
 */
export interface TranscriptFilter {
  /**
   * <p>Flag the presence or absence of an exact match to the phrases you specify. For example, if you
   *             specify the phrase "speak to a manager" as your <code>Targets</code> value, only that exact
   *             phrase is flagged.</p>
   *         <p>Note that semantic matching is not supported. For example, if your customer says "speak to
   *             <i>the</i> manager", instead of "speak to <i>a</i>
   *             manager", your content is not flagged.</p>
   */
  TranscriptFilterType: TranscriptFilterType | string | undefined;

  /**
   * <p>Allows you to specify a time range (in milliseconds) in your audio, during which you want to
   *             search for the specified key words or phrases. See
   *             for more detail.</p>
   */
  AbsoluteTimeRange?: AbsoluteTimeRange;

  /**
   * <p>Allows you to specify a time range (in percentage) in your media file, during which you
   *             want to search for the specified key words or phrases. See
   *              for more detail.</p>
   */
  RelativeTimeRange?: RelativeTimeRange;

  /**
   * <p>Specify the participant you want to flag. Omitting this parameter is equivalent to specifying
   *             both participants.</p>
   */
  ParticipantRole?: ParticipantRole | string;

  /**
   * <p>Set to <code>TRUE</code> to flag the absence of the phrase you specified in your request.
   *             Set to <code>FALSE</code> to flag the presence of the phrase you specified in your request.</p>
   */
  Negate?: boolean;

  /**
   * <p>Specify the phrases you want to flag.</p>
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
 * <p>A rule is a set of criteria you can specify to flag an attribute in your Call Analytics output.
 *             Rules define a Call Analytics category.</p>
 *         <p>Rules can include these parameters: ,
 *             , , and
 *             . To learn more about these parameters, refer to
 *             <a href="https://docs.aws.amazon.com/transcribe/latest/dg/call-analytics-create-categories.html#call-analytics-create-categories-rules">Rule
 *                 criteria</a>.</p>
 *         <p>To learn more about Call Analytics categories, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/call-analytics-create-categories.html">Creating categories</a>.</p>
 *         <p>To learn more about Call Analytics, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/call-analytics.html">Analyzing call center audio with Call
 *             Analytics</a>.</p>
 */
export type Rule =
  | Rule.InterruptionFilterMember
  | Rule.NonTalkTimeFilterMember
  | Rule.SentimentFilterMember
  | Rule.TranscriptFilterMember
  | Rule.$UnknownMember;

export namespace Rule {
  /**
   * <p>Flag the presence or absence of periods of silence in your Call Analytics transcription
   *             output. Refer to  for more detail.</p>
   */
  export interface NonTalkTimeFilterMember {
    NonTalkTimeFilter: NonTalkTimeFilter;
    InterruptionFilter?: never;
    TranscriptFilter?: never;
    SentimentFilter?: never;
    $unknown?: never;
  }

  /**
   * <p>Flag the presence or absence of interruptions in your Call Analytics transcription output. Refer to
   *              for more detail.</p>
   */
  export interface InterruptionFilterMember {
    NonTalkTimeFilter?: never;
    InterruptionFilter: InterruptionFilter;
    TranscriptFilter?: never;
    SentimentFilter?: never;
    $unknown?: never;
  }

  /**
   * <p>Flag the presence or absence of specific words or phrases in your Call Analytics transcription
   *             output. Refer to  for more detail.</p>
   */
  export interface TranscriptFilterMember {
    NonTalkTimeFilter?: never;
    InterruptionFilter?: never;
    TranscriptFilter: TranscriptFilter;
    SentimentFilter?: never;
    $unknown?: never;
  }

  /**
   * <p>Flag the presence or absence of specific sentiments in your Call Analytics transcription output.
   *             Refer to  for more detail.</p>
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
 * <p>Provides you with the properties of the Call Analytics category you specified in your
 *             request. This includes the list of rules that define the specified category.</p>
 */
export interface CategoryProperties {
  /**
   * <p>The name of the Call Analytics category. Category names are case sensitive and must be
   *             unique within an Amazon Web Services account.</p>
   */
  CategoryName?: string;

  /**
   * <p>The rules used to define a Call Analytics category. Each category can have between 1 and 20
   *             rules.</p>
   */
  Rules?: Rule[];

  /**
   * <p>The date and time the specified Call Analytics category was created.</p>
   *         <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents 12:32 PM UTC-7
   *             on May 4, 2022.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The date and time the specified Call Analytics category was last updated.</p>
   *         <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-05T12:45:32.691000-07:00</code> represents 12:45 PM UTC-7
   *             on May 5, 2022.</p>
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
 * <p>A resource already exists with this name. Resource names must be unique within an
 *             Amazon Web Services account.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

export interface CreateCallAnalyticsCategoryRequest {
  /**
   * <p>A unique name, chosen by you, for your Call Analytics category. It's helpful to use a detailed
   *             naming system that will make sense to you in the future. For example, it's better to use
   *             <code>sentiment-positive-last30seconds</code> for a category over a generic name like
   *             <code>test-category</code>.</p>
   *         <p>Category names are case sensitive.</p>
   */
  CategoryName: string | undefined;

  /**
   * <p>Rules define a Call Analytics category. When creating a new Call Analytics category, you must
   *             create between 1 and 20 rules for that category. For each rule, you specify a filter you want
   *             applied to the attributes of a call. For example, you can choose a sentiment filter that detects if a
   *             customer's sentiment was positive during the last 30 seconds of the call.</p>
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
   * <p>Provides you with the properties of your new category, including its associated rules.</p>
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
 * <p>There was an internal error. Check the error message, correct the issue, and try your
 *             request again.</p>
 */
export class InternalFailureException extends __BaseException {
  readonly name: "InternalFailureException" = "InternalFailureException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalFailureException, __BaseException>) {
    super({
      name: "InternalFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalFailureException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You've either sent too many requests or your input file is too long. Wait before retrying
 *             your request, or use a smaller file and try your request again.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Contains the Amazon S3 location of the training data you want to use to create a new
 *             custom language model, and permissions to access this location.</p>
 *         <p>When using <code>InputDataConfig</code>, you must include these sub-parameters:
 *             <code>S3Uri</code> and <code>DataAccessRoleArn</code>. You can optionally include
 *             <code>TuningDataS3Uri</code>.</p>
 */
export interface InputDataConfig {
  /**
   * <p>The Amazon S3 location (URI) of the text files you want to use to train your custom
   *             language model.</p>
   *         <p>Here's an example URI path:
   *             <code>s3://DOC-EXAMPLE-BUCKET/my-model-training-data/</code>
   *          </p>
   */
  S3Uri: string | undefined;

  /**
   * <p>The Amazon S3 location (URI) of the text files you want to use to tune your custom
   *             language model.</p>
   *         <p>Here's an example URI path:
   *             <code>s3://DOC-EXAMPLE-BUCKET/my-model-tuning-data/</code>
   *          </p>
   */
  TuningDataS3Uri?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that has permissions to
   *             access the Amazon S3 bucket that contains your input files. If the role you specify doesn’t
   *             have the appropriate permissions to access the specified Amazon S3 location, your request
   *             fails.</p>
   *         <p>IAM role ARNs have the format
   *             <code>arn:partition:iam::account:role/role-name-with-path</code>. For example:
   *             <code>arn:aws:iam::111122223333:role/Admin</code>.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns">IAM ARNs</a>.</p>
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
 * <p>Adds metadata, in the form of a key:value pair, to the specified resource.</p>
 *         <p>For example, you could add the tag <code>Department:Sales</code> to a
 *             resource to indicate that it pertains to your organization's sales department. You can also use
 *             tags for tag-based access control.</p>
 *         <p>To learn more about tagging, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging resources</a>.</p>
 */
export interface Tag {
  /**
   * <p>The first part of a key:value pair that forms a tag associated with a given resource. For
   *             example, in the tag <code>Department:Sales</code>, the key is 'Department'.</p>
   */
  Key: string | undefined;

  /**
   * <p>The second part of a key:value pair that forms a tag associated with a given resource.
   *             For example, in the tag <code>Department:Sales</code>, the value is 'Sales'.</p>
   *         <p>Note that you can set the value of a tag to an empty string, but you can't set the value of a
   *             tag to null. Omitting the tag value is the same as using an empty string.</p>
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
   * <p>The language code that represents the language of your model. Each language model must
   *             contain terms in only one language, and the language you select for your model must match the
   *             language of your training and tuning data.</p>
   *         <p>For a list of supported languages and their associated language codes, refer to the
   *             <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported
   *                 languages</a> table. Note that U.S. English (<code>en-US</code>) is the only language
   *             supported with Amazon Transcribe Medical.</p>
   *         <p>A custom language model can only be used to transcribe files in the same language as the
   *             model. For example, if you create a language model using US English (<code>en-US</code>), you
   *             can only apply this model to files that contain English audio.</p>
   */
  LanguageCode: CLMLanguageCode | string | undefined;

  /**
   * <p>The Amazon Transcribe standard language model, or base model, used to create your custom
   *             language model. Amazon Transcribe offers two options for base models: Wideband and
   *             Narrowband.</p>
   *         <p>If the audio you want to transcribe has a sample rate of 16,000 Hz or greater, choose
   *             <code>WideBand</code>. To transcribe audio with a sample rate less than 16,000 Hz, choose
   *             <code>NarrowBand</code>.</p>
   */
  BaseModelName: BaseModelName | string | undefined;

  /**
   * <p>A unique name, chosen by you, for your custom language model.</p>
   *         <p>This name is case sensitive, cannot contain spaces, and must be unique within an
   *             Amazon Web Services account. If you try to create a new language model with the same name
   *             as an existing language model, you get a <code>ConflictException</code> error.</p>
   */
  ModelName: string | undefined;

  /**
   * <p>Contains the Amazon S3 location of the training data you want to use to create a new
   *             custom language model, and permissions to access this location.</p>
   *         <p>When using <code>InputDataConfig</code>, you must include these sub-parameters:
   *             <code>S3Uri</code>, which is the Amazon S3 location of your training data, and
   *             <code>DataAccessRoleArn</code>, which is the Amazon Resource Name (ARN) of the role that
   *             has permission to access your specified Amazon S3 location. You can optionally include
   *             <code>TuningDataS3Uri</code>, which is the Amazon S3 location of your tuning data. If
   *             you specify different Amazon S3 locations for training and tuning data, the ARN you use
   *             must have permissions to access both locations.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>Adds one or more custom tags, each in the form of a key:value pair, to a new custom language
   *             model at the time you create this new model.</p>
   *         <p>To learn more about using tags with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging resources</a>.</p>
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
   * <p>The language code you selected for your custom language model.</p>
   */
  LanguageCode?: CLMLanguageCode | string;

  /**
   * <p>The Amazon Transcribe standard language model, or base model, you specified when creating
   *             your custom language model.</p>
   */
  BaseModelName?: BaseModelName | string;

  /**
   * <p>The name of your custom language model.</p>
   */
  ModelName?: string;

  /**
   * <p>Lists your data access role ARN (Amazon Resource Name) and the Amazon S3
   *             locations you provided for your training (<code>S3Uri</code>) and tuning
   *             (<code>TuningDataS3Uri</code>) data.</p>
   */
  InputDataConfig?: InputDataConfig;

  /**
   * <p>The status of your custom language model. When the status displays as
   *             <code>COMPLETED</code>, your model is ready to use.</p>
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
   * <p>A unique name, chosen by you, for your new custom medical vocabulary.</p>
   *         <p>This name is case sensitive, cannot contain spaces, and must be unique within an
   *             Amazon Web Services account. If you try to create a new medical vocabulary with the same name
   *             as an existing medical vocabulary, you get a <code>ConflictException</code> error.</p>
   */
  VocabularyName: string | undefined;

  /**
   * <p>The language code that represents the language of the entries in your custom
   *             vocabulary. US English (<code>en-US</code>) is the only language supported with
   *             Amazon Transcribe Medical.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>The Amazon S3 location (URI) of the text file that contains your custom medical
   *             vocabulary. The URI must be in the same Amazon Web Services Region as the resource you're
   *             calling.</p>
   *         <p>Here's an example URI path:
   *             <code>s3://DOC-EXAMPLE-BUCKET/my-vocab-file.txt</code>
   *          </p>
   */
  VocabularyFileUri: string | undefined;

  /**
   * <p>Adds one or more custom tags, each in the form of a key:value pair, to a new medical
   *             vocabulary at the time you create this new vocabulary.</p>
   *         <p>To learn more about using tags with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging resources</a>.</p>
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
   * <p>The name you chose for your custom medical vocabulary.</p>
   */
  VocabularyName?: string;

  /**
   * <p>The language code you selected for your medical vocabulary. US English
   *             (<code>en-US</code>) is the only language supported with Amazon Transcribe Medical.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The processing state of your custom medical vocabulary. If the state is
   *             <code>READY</code>, you can use the vocabulary in a
   *             <code>StartMedicalTranscriptionJob</code> request.</p>
   */
  VocabularyState?: VocabularyState | string;

  /**
   * <p>The date and time you created your custom medical vocabulary.</p>
   *         <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents 12:32 PM UTC-7
   *             on May 4, 2022.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>If <code>VocabularyState</code> is <code>FAILED</code>,
   *             <code>FailureReason</code> contains information about why the medical transcription job
   *             request failed. See also: <a href="https://docs.aws.amazon.com/transcribe/latest/APIReference/CommonErrors.html">Common Errors</a>.</p>
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
   * <p>A unique name, chosen by you, for your new custom vocabulary.</p>
   *         <p>This name is case sensitive, cannot contain spaces, and must be unique within an
   *             Amazon Web Services account. If you try to create a new vocabulary with the same name as an
   *             existing vocabulary, you get a <code>ConflictException</code> error.</p>
   */
  VocabularyName: string | undefined;

  /**
   * <p>The language code that represents the language of the entries in your custom
   *             vocabulary. Each vocabulary must contain terms in only one language.</p>
   *         <p>A custom vocabulary can only be used to transcribe files in the same language as the
   *             vocabulary. For example, if you create a vocabulary using US English (<code>en-US</code>),
   *             you can only apply this vocabulary to files that contain English audio.</p>
   *         <p>For a list of supported languages and their associated language codes, refer to the
   *             <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported
   *                 languages</a> table.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>Use this parameter if you want to create your vocabulary by including all desired terms, as
   *             comma-separated values, within your request. The other option for creating your vocabulary is to
   *             save your entries in a text file and upload them to an Amazon S3 bucket, then specify
   *             the location of your file using the <code>VocabularyFileUri</code> parameter.</p>
   *         <p>Note that if you include <code>Phrases</code> in your request, you cannot use
   *             <code>VocabularyFileUri</code>; you must choose one or the other.</p>
   *         <p>Each language has a character set that contains all allowed characters for that specific
   *             language. If you use unsupported characters, your vocabulary filter request fails. Refer to
   *             <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for
   *                 Custom Vocabularies</a> to get the character set for your language.</p>
   */
  Phrases?: string[];

  /**
   * <p>The Amazon S3 location of the text file that contains your custom vocabulary. The
   *             URI must be located in the same Amazon Web Services Region as the resource you're
   *             calling.</p>
   *         <p>Here's an example URI path:
   *             <code>s3://DOC-EXAMPLE-BUCKET/my-vocab-file.txt</code>
   *          </p>
   *         <p>Note that if you include <code>VocabularyFileUri</code> in your request, you
   *             cannot use the <code>Phrases</code> flag; you must choose one or the other.</p>
   */
  VocabularyFileUri?: string;

  /**
   * <p>Adds one or more custom tags, each in the form of a key:value pair, to a new custom
   *             vocabulary at the time you create this new vocabulary.</p>
   *         <p>To learn more about using tags with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging resources</a>.</p>
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
   * <p>The name you chose for your custom vocabulary.</p>
   */
  VocabularyName?: string;

  /**
   * <p>The language code you selected for your custom vocabulary.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The processing state of your custom vocabulary. If the state is <code>READY</code>, you
   *             can use the vocabulary in a <code>StartTranscriptionJob</code> request.</p>
   */
  VocabularyState?: VocabularyState | string;

  /**
   * <p>The date and time you created your custom vocabulary.</p>
   *         <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents 12:32 PM UTC-7
   *             on May 4, 2022.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>If <code>VocabularyState</code> is <code>FAILED</code>,
   *             <code>FailureReason</code> contains information about why the vocabulary request
   *             failed. See also: <a href="https://docs.aws.amazon.com/transcribe/latest/APIReference/CommonErrors.html">Common Errors</a>.</p>
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
   * <p>A unique name, chosen by you, for your new custom vocabulary filter.</p>
   *         <p>This name is case sensitive, cannot contain spaces, and must be unique within an
   *             Amazon Web Services account. If you try to create a new vocabulary filter with the same name
   *             as an existing vocabulary filter, you get a <code>ConflictException</code> error.</p>
   */
  VocabularyFilterName: string | undefined;

  /**
   * <p>The language code that represents the language of the entries in your vocabulary
   *             filter. Each vocabulary filter must contain terms in only one language.</p>
   *         <p>A vocabulary filter can only be used to transcribe files in the same language as the
   *             filter. For example, if you create a vocabulary filter using US English (<code>en-US</code>), you
   *             can only apply this filter to files that contain English audio.</p>
   *         <p>For a list of supported languages and their associated language codes, refer to the
   *             <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported
   *                 languages</a> table.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>Use this parameter if you want to create your vocabulary filter by including all desired terms,
   *             as comma-separated values, within your request. The other option for creating your vocabulary
   *             filter is to save your entries in a text file and upload them to an Amazon S3 bucket, then
   *             specify the location of your file using the <code>VocabularyFilterFileUri</code>
   *             parameter.</p>
   *         <p>Note that if you include <code>Words</code> in your request, you cannot use
   *             <code>VocabularyFilterFileUri</code>; you must choose one or the other.</p>
   *         <p>Each language has a character set that contains all allowed characters for that specific
   *             language. If you use unsupported characters, your vocabulary filter request fails. Refer to
   *             <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for
   *                 Custom Vocabularies</a> to get the character set for your language.</p>
   */
  Words?: string[];

  /**
   * <p>The Amazon S3 location of the text file that contains your custom vocabulary filter
   *             terms. The URI must be located in the same Amazon Web Services Region as the resource you're
   *             calling.</p>
   *         <p>Here's an example URI path:
   *             <code>s3://DOC-EXAMPLE-BUCKET/my-vocab-filter-file.txt</code>
   *          </p>
   *         <p>Note that if you include <code>VocabularyFilterFileUri</code> in your request, you
   *             cannot use <code>Words</code>; you must choose one or the other.</p>
   */
  VocabularyFilterFileUri?: string;

  /**
   * <p>Adds one or more custom tags, each in the form of a key:value pair, to a new custom
   *             vocabulary filter at the time you create this new filter.</p>
   *         <p>To learn more about using tags with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging resources</a>.</p>
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
   * <p>The name you chose for your custom vocabulary filter.</p>
   */
  VocabularyFilterName?: string;

  /**
   * <p>The language code you selected for your vocabulary filter.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The date and time you created your vocabulary filter.</p>
   *         <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents 12:32 PM UTC-7
   *             on May 4, 2022.</p>
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
   * <p>The name of the Call Analytics category you want to delete. Category names are
   *             case sensitive.</p>
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
 * <p>We can't find the requested resource. Check that the specified name is correct and try your
 *             request again.</p>
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

export interface DeleteCallAnalyticsJobRequest {
  /**
   * <p>The name of the Call Analytics job you want to delete. Job names are case sensitive.</p>
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
   * <p>The name of the custom language model you want to delete. Model names are
   *             case sensitive.</p>
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
   * <p>The name of the medical transcription job you want to delete. Job names are case
   *             sensitive.</p>
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
   * <p>The name of the custom medical vocabulary you want to delete. Vocabulary names are
   *             case sensitive.</p>
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
   * <p>The name of the transcription job you want to delete. Job names are case sensitive.</p>
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
   * <p>The name of the custom vocabulary you want to delete. Vocabulary names are
   *             case sensitive.</p>
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
   * <p>The name of the custom vocabulary filter you want to delete. Vocabulary filter names
   *             are case sensitive.</p>
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
   * <p>The name of the custom language model you want information about. Model names are
   *             case sensitive.</p>
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
 * <p>Provides information about a custom language model, including the base model name, when
 *             the model was created, the location of the files used to train the model, when the model was last
 *             modified, the name you chose for the model, its language, its processing state, and if there is an
 *             upgrade available for the base model.</p>
 */
export interface LanguageModel {
  /**
   * <p>A unique name, chosen by you, for your custom language model.</p>
   *         <p>This name is case sensitive, cannot contain spaces, and must be unique within an
   *             Amazon Web Services account.</p>
   */
  ModelName?: string;

  /**
   * <p>The date and time the specified custom language model was created.</p>
   *         <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents 12:32 PM UTC-7
   *             on May 4, 2022.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The date and time the specified language model was last modified.</p>
   *         <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents 12:32 PM UTC-7
   *             on May 4, 2022.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The language code used to create your custom language model. Each language model must
   *             contain terms in only one language, and the language you select for your model must match
   *             the language of your training and tuning data.</p>
   *         <p>For a list of supported languages and their associated language codes, refer to the
   *             <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported
   *                 languages</a> table. Note that U.S. English (<code>en-US</code>) is the only language
   *             supported with Amazon Transcribe Medical.</p>
   */
  LanguageCode?: CLMLanguageCode | string;

  /**
   * <p>The Amazon Transcribe standard language model, or base model, used to create your custom
   *             language model.</p>
   */
  BaseModelName?: BaseModelName | string;

  /**
   * <p>The status of the specified custom language model. When the status displays as
   *             <code>COMPLETED</code> the model is ready for use.</p>
   */
  ModelStatus?: ModelStatus | string;

  /**
   * <p>Shows if a more current base model is available for use with the specified custom language
   *             model.</p>
   *         <p>If <code>false</code>, your language model is using the most up-to-date base model.</p>
   *         <p>If <code>true</code>, there is a newer base model available than the one your language
   *             model is using.</p>
   *         <p>Note that to update a base model, you must recreate the custom language model using the
   *             new base model. Base model upgrades for existing custom language models are not
   *             supported.</p>
   */
  UpgradeAvailability?: boolean;

  /**
   * <p>If <code>ModelStatus</code> is <code>FAILED</code>, <code>FailureReason</code>
   *             contains information about why the custom language model request failed. See also:
   *             <a href="https://docs.aws.amazon.com/transcribe/latest/APIReference/CommonErrors.html">Common Errors</a>.</p>
   */
  FailureReason?: string;

  /**
   * <p>The Amazon S3 location of the input files used to train and tune your custom language
   *             model, in addition to the data access role ARN (Amazon Resource Name) that has permissions to
   *             access these data.</p>
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
   * <p>Provides information about the specified custom language model.</p>
   *         <p>This parameter also shows if the base language model you used to create your custom
   *             language model has been updated. If Amazon Transcribe has updated the base model, you can
   *             create a new custom language model using the updated base model.</p>
   *         <p>If you tried to create a new custom language model and the request wasn't successful,
   *             you can use this <code>DescribeLanguageModel</code> to help identify the reason for this
   *             failure.</p>
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
   * <p>The name of the Call Analytics category you want information about. Category names are
   *             case sensitive.</p>
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
   * <p>Provides you with the properties of the Call Analytics category you specified in your
   *             <code>GetCallAnalyticsCategory</code> request.</p>
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
   * <p>The name of the Call Analytics job you want information about. Job names are case
   *             sensitive.</p>
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
   * <p>Provides detailed information about the specified Call Analytics job, including job status
   *             and, if applicable, failure reason.</p>
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
   * <p>The name of the medical transcription job you want information about. Job names are case
   *             sensitive.</p>
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
 * <p>Allows additional optional settings in your
 *             request, including channel identification, alternative transcriptions, and speaker labeling; allows
 *             you to apply custom vocabularies to your medical transcription job.</p>
 */
export interface MedicalTranscriptionSetting {
  /**
   * <p>Enables speaker identification (diarization) in your transcription output. Speaker identification
   *             labels the speech from individual speakers in your media file.</p>
   *         <p>If you enable <code>ShowSpeakerLabels</code> in your request, you must also include
   *             <code>MaxSpeakerLabels</code>.</p>
   *         <p>You can't include both <code>ShowSpeakerLabels</code> and
   *             <code>ChannelIdentification</code> in the same request. Including both parameters
   *             returns a <code>BadRequestException</code>.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/diarization.html">Identifying speakers (diarization)</a>.</p>
   */
  ShowSpeakerLabels?: boolean;

  /**
   * <p>Specify the maximum number of speakers you want to identify in your media.</p>
   *         <p>Note that if your media contains more speakers than the specified number, multiple speakers
   *             will be identified as a single speaker.</p>
   *         <p>If you specify the <code>MaxSpeakerLabels</code> field, you must set the
   *             <code>ShowSpeakerLabels</code> field to true.</p>
   */
  MaxSpeakerLabels?: number;

  /**
   * <p>Enables channel identification in multi-channel audio.</p>
   *         <p>Channel identification transcribes the audio on each channel independently, then appends the
   *             output for each channel into one transcript.</p>
   *         <p>If you have multi-channel audio and do not enable channel identification, your audio is
   *             transcribed in a continuous manner and your transcript does not separate the speech by channel.</p>
   *         <p>You can't include both <code>ShowSpeakerLabels</code> and
   *             <code>ChannelIdentification</code> in the same request. Including both parameters
   *             returns a <code>BadRequestException</code>.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/channel-id.html">Transcribing multi-channel audio</a>.</p>
   */
  ChannelIdentification?: boolean;

  /**
   * <p>To include alternative transcriptions within your transcription output, include
   *             <code>ShowAlternatives</code> in your transcription request.</p>
   *         <p>If you include <code>ShowAlternatives</code>, you must also include
   *             <code>MaxAlternatives</code>, which is the maximum number of alternative transcriptions
   *             you want Amazon Transcribe Medical to generate.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-alternatives.html">Alternative transcriptions</a>.</p>
   */
  ShowAlternatives?: boolean;

  /**
   * <p>Indicate the maximum number of alternative transcriptions you want Amazon Transcribe
   *             Medical to include in your transcript.</p>
   *         <p>If you select a number greater than the number of alternative transcriptions generated by
   *             Amazon Transcribe Medical, only the actual number of alternative transcriptions are
   *             included.</p>
   *         <p>If you include <code>MaxAlternatives</code> in your request, you must also include
   *             <code>ShowAlternatives</code> with a value of <code>true</code>.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-alternatives.html">Alternative transcriptions</a>.</p>
   */
  MaxAlternatives?: number;

  /**
   * <p>The name of the custom vocabulary you want to use when processing your medical
   *             transcription job. Vocabulary names are case sensitive.</p>
   *         <p>The language of the specified vocabulary must match the language code you specify in
   *             your transcription request. If the languages don't match, the vocabulary isn't applied. There
   *             are no errors or warnings associated with a language mismatch. US English
   *             (<code>en-US</code>) is the only valid language for Amazon Transcribe Medical.</p>
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
 * <p>Provides you with the Amazon S3 URI you can use to access your transcript.</p>
 */
export interface MedicalTranscript {
  /**
   * <p>The Amazon S3 location of your transcript. You can use this URI to access or
   *             download your transcript.</p>
   *         <p>If you included <code>OutputBucketName</code> in your transcription job request, this is
   *             the URI of that bucket. If you also included <code>OutputKey</code> in your request, your
   *             output is located in the path you specified in your request.</p>
   *         <p>If you didn't include <code>OutputBucketName</code> in your transcription job request,
   *             your transcript is stored in a service-managed bucket, and <code>TranscriptFileUri</code>
   *             provides you with a temporary URI you can use for secure access to your transcript.</p>
   *         <note>
   *             <p>Temporary URIs for service-managed Amazon S3 buckets are only valid for 15
   *                 minutes. If you get an <code>AccesDenied</code> error, you can get a new temporary
   *                 URI by running a <code>GetTranscriptionJob</code> or
   *                 <code>ListTranscriptionJob</code> request.</p>
   *         </note>
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
 * <p>Provides detailed information about a medical transcription job.</p>
 *         <p>To view the status of the specified medical transcription job, check the
 *             <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the
 *             job is finished and you can find the results at the location specified in
 *             <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>,
 *             <code>FailureReason</code> provides details on why your transcription job failed.</p>
 */
export interface MedicalTranscriptionJob {
  /**
   * <p>The name of the medical transcription job. Job names are case sensitive and must be unique
   *             within an Amazon Web Services account.</p>
   */
  MedicalTranscriptionJobName?: string;

  /**
   * <p>Provides the status of the specified medical transcription job.</p>
   *         <p>If the status is <code>COMPLETED</code>, the job is finished and you can find the results
   *             at the location specified in <code>TranscriptFileUri</code>. If the status is
   *             <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription
   *             job failed.</p>
   */
  TranscriptionJobStatus?: TranscriptionJobStatus | string;

  /**
   * <p>The language code used to create your medical transcription job. US English
   *             (<code>en-US</code>) is the only supported language for medical transcriptions.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The sample rate, in Hertz, of the audio track in your input media file.</p>
   */
  MediaSampleRateHertz?: number;

  /**
   * <p>The format of the input media file.</p>
   */
  MediaFormat?: MediaFormat | string;

  /**
   * <p>Describes the Amazon S3 location of the media file you want to use in your
   *             request.</p>
   */
  Media?: Media;

  /**
   * <p>Provides you with the Amazon S3 URI you can use to access your transcript.</p>
   */
  Transcript?: MedicalTranscript;

  /**
   * <p>The date and time the specified medical transcription job began processing.</p>
   *         <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.789000-07:00</code> represents a transcription job
   *             that started processing at 12:32 PM UTC-7 on May 4, 2022.</p>
   */
  StartTime?: Date;

  /**
   * <p>The date and time the specified medical transcription job request was made.</p>
   *         <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents a transcription job
   *             that started processing at 12:32 PM UTC-7 on May 4, 2022.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The date and time the specified medical transcription job finished processing.</p>
   *         <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:33:13.922000-07:00</code> represents a transcription job
   *             that started processing at 12:33 PM UTC-7 on May 4, 2022.</p>
   */
  CompletionTime?: Date;

  /**
   * <p>If <code>TranscriptionJobStatus</code> is <code>FAILED</code>,
   *             <code>FailureReason</code> contains information about why the transcription job request
   *             failed.</p>
   *         <p>The <code>FailureReason</code> field contains one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>Unsupported media format</code>.</p>
   *                 <p>The media format specified in <code>MediaFormat</code> isn't valid. Refer to
   *                     <b>MediaFormat</b> for a list of supported formats.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>The media format provided does not match the detected media
   *                     format</code>.</p>
   *                 <p>The media format specified in <code>MediaFormat</code> doesn't match the
   *                     format of the input file. Check the media format of your media file and correct the
   *                     specified value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Invalid sample rate for audio file</code>.</p>
   *                 <p>The sample rate specified in <code>MediaSampleRateHertz</code> isn't valid.
   *                     The sample rate must be between 16,000 and 48,000 Hertz.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>The sample rate provided does not match the detected sample
   *                     rate</code>.</p>
   *                 <p>The sample rate specified in <code>MediaSampleRateHertz</code> doesn't
   *                     match the sample rate detected in your input media file. Check the sample rate of
   *                     your media file and correct the specified value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Invalid file size: file size too large</code>.</p>
   *                 <p>The size of your media file is larger than what Amazon Transcribe can process.
   *                     For more information, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/limits-guidelines.html#limits">Guidelines and
   *                         quotas</a>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Invalid number of channels: number of channels too large</code>.</p>
   *                 <p>Your audio contains more channels than Amazon Transcribe is able to process.
   *                     For more information, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/limits-guidelines.html#limits">Guidelines and
   *                         quotas</a>.</p>
   *             </li>
   *          </ul>
   */
  FailureReason?: string;

  /**
   * <p>Specify additional optional settings in your
   *             request, including channel identification, alternative transcriptions, and speaker labeling; allows
   *             you to apply custom vocabularies to your medical transcription job.</p>
   */
  Settings?: MedicalTranscriptionSetting;

  /**
   * <p>Labels all personal health information (PHI) identified in your transcript. For more information,
   *             see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/phi-id.html">Identifying personal health
   *                 information (PHI) in a transcription</a>.</p>
   */
  ContentIdentificationType?: MedicalContentIdentificationType | string;

  /**
   * <p>Describes the medical specialty represented in your media.</p>
   */
  Specialty?: Specialty | string;

  /**
   * <p>Indicates whether the input media is a dictation or a conversation, as specified in the
   *             <code>StartMedicalTranscriptionJob</code> request.</p>
   */
  Type?: Type | string;

  /**
   * <p>The tags, each in the form of a key:value pair, assigned to the specified medical
   *             transcription job.</p>
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
   * <p>Provides detailed information about the specified medical transcription job, including job
   *             status and, if applicable, failure reason.</p>
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
   * <p>The name of the custom medical vocabulary you want information about. Vocabulary names
   *             are case sensitive.</p>
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
   * <p>The name of the custom medical vocabulary you requested information about.</p>
   */
  VocabularyName?: string;

  /**
   * <p>The language code you selected for your medical vocabulary. US English
   *             (<code>en-US</code>) is the only language supported with Amazon Transcribe Medical.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The processing state of your custom medical vocabulary. If the state is
   *             <code>READY</code>, you can use the vocabulary in a
   *             <code>StartMedicalTranscriptionJob</code> request.</p>
   */
  VocabularyState?: VocabularyState | string;

  /**
   * <p>The date and time the specified custom medical vocabulary was last modified.</p>
   *         <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents 12:32 PM UTC-7
   *             on May 4, 2022.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>If <code>VocabularyState</code> is <code>FAILED</code>,
   *             <code>FailureReason</code> contains information about why the medical vocabulary
   *             request failed. See also: <a href="https://docs.aws.amazon.com/transcribe/latest/APIReference/CommonErrors.html">Common Errors</a>.</p>
   */
  FailureReason?: string;

  /**
   * <p>The S3 location where the specified medical vocabulary is stored; use this URI to view or
   *             download the vocabulary.</p>
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
   * <p>The name of the transcription job you want information about. Job names are case
   *             sensitive.</p>
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
 * <p>Allows you to control how your transcription job is processed. Currently, the only
 *             <code>JobExecutionSettings</code> modification you can choose is enabling job queueing using
 *             the <code>AllowDeferredExecution</code> sub-parameter.</p>
 *         <p>If you include <code>JobExecutionSettings</code> in your request, you must also include
 *             the sub-parameters: <code>AllowDeferredExecution</code> and
 *             <code>DataAccessRoleArn</code>.</p>
 */
export interface JobExecutionSettings {
  /**
   * <p>Allows you to enable job queuing when your concurrent request limit is exceeded. When
   *             <code>AllowDeferredExecution</code> is set to <code>true</code>, transcription job requests are
   *             placed in a queue until the number of jobs falls below the concurrent request limit. If
   *             <code>AllowDeferredExecution</code> is set to <code>false</code> and the number of transcription
   *             job requests exceed the concurrent request limit, you get a <code>LimitExceededException</code>
   *             error.</p>
   *         <p>Note that job queuing is enabled by default for Call Analytics jobs.</p>
   *         <p>If you include <code>AllowDeferredExecution</code> in your request, you must also include
   *             <code>DataAccessRoleArn</code>.</p>
   */
  AllowDeferredExecution?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that has permissions to
   *             access the Amazon S3 bucket that contains your input files. If the role you specify doesn’t
   *             have the appropriate permissions to access the specified Amazon S3 location, your request
   *             fails.</p>
   *         <p>IAM role ARNs have the format
   *             <code>arn:partition:iam::account:role/role-name-with-path</code>. For example:
   *             <code>arn:aws:iam::111122223333:role/Admin</code>. For more information, see
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns">IAM ARNs</a>.</p>
   *         <p>Note that if you include <code>DataAccessRoleArn</code> in your request, you must also include
   *             <code>AllowDeferredExecution</code>.</p>
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
 * <p>Provides information on the speech contained in a discreet utterance when
 *             multi-language identification is enabled in your request. This utterance represents a block
 *             of speech consisting of one language, preceded or followed by a block of speech in a different
 *             language.</p>
 */
export interface LanguageCodeItem {
  /**
   * <p>Provides the language code for each language identified in your media.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>Provides the total time, in seconds, each identified language is spoken in your media.</p>
   */
  DurationInSeconds?: number;
}

export namespace LanguageCodeItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LanguageCodeItem): any => ({
    ...obj,
  });
}

/**
 * <p>Provides the name of the custom language model that was included in the specified
 *             transcription job.</p>
 *         <p>Only use <code>ModelSettings</code> with the <code>LanguageModelName</code>
 *             sub-parameter if you're <b>not</b> using automatic language
 *             identification (<code></code>).
 *             If using <code>LanguageIdSettings</code> in your request, this parameter contains a
 *             <code>LanguageModelName</code> sub-parameter.</p>
 */
export interface ModelSettings {
  /**
   * <p>The name of the custom language model you want to use when processing your
   *             transcription job. Note that language model names are case sensitive.</p>
   *         <p>The language of the specified language model must match the language code you specify
   *             in your transcription request. If the languages don't match, the language model isn't applied.
   *             There are no errors or warnings associated with a language mismatch.</p>
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
 * <p>Allows additional optional settings in your
 *             request, including channel identification, alternative transcriptions, and speaker labeling; allows
 *             you to apply custom vocabularies to your transcription job.</p>
 */
export interface Settings {
  /**
   * <p>The name of the custom vocabulary you want to use in your transcription job request. This
   *             name is case sensitive, cannot contain spaces, and must be unique within an
   *             Amazon Web Services account.</p>
   */
  VocabularyName?: string;

  /**
   * <p>Enables speaker identification (diarization) in your transcription output. Speaker identification
   *             labels the speech from individual speakers in your media file.</p>
   *         <p>If you enable <code>ShowSpeakerLabels</code> in your request, you must also include
   *             <code>MaxSpeakerLabels</code>.</p>
   *         <p>You can't include both <code>ShowSpeakerLabels</code> and
   *             <code>ChannelIdentification</code> in the same request. Including both parameters
   *             returns a <code>BadRequestException</code>.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/diarization.html">Identifying speakers (diarization)</a>.</p>
   */
  ShowSpeakerLabels?: boolean;

  /**
   * <p>Specify the maximum number of speakers you want to identify in your media.</p>
   *         <p>Note that if your media contains more speakers than the specified number, multiple speakers
   *             will be identified as a single speaker.</p>
   *         <p>If you specify the <code>MaxSpeakerLabels</code> field, you must set the
   *             <code>ShowSpeakerLabels</code> field to true.</p>
   */
  MaxSpeakerLabels?: number;

  /**
   * <p>Enables channel identification in multi-channel audio.</p>
   *         <p>Channel identification transcribes the audio on each channel independently, then appends the
   *             output for each channel into one transcript.</p>
   *         <p>You can't include both <code>ShowSpeakerLabels</code> and
   *             <code>ChannelIdentification</code> in the same request. Including both parameters
   *             returns a <code>BadRequestException</code>.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/channel-id.html">Transcribing multi-channel audio</a>.</p>
   */
  ChannelIdentification?: boolean;

  /**
   * <p>To include alternative transcriptions within your transcription output, include
   *             <code>ShowAlternatives</code> in your transcription request.</p>
   *         <p>If you have multi-channel audio and do not enable channel identification, your audio is
   *             transcribed in a continuous manner and your transcript does not separate the speech by channel.</p>
   *         <p>If you include <code>ShowAlternatives</code>, you must also include
   *             <code>MaxAlternatives</code>, which is the maximum number of alternative transcriptions
   *             you want Amazon Transcribe to generate.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-alternatives.html">Alternative transcriptions</a>.</p>
   */
  ShowAlternatives?: boolean;

  /**
   * <p>Indicate the maximum number of alternative transcriptions you want Amazon Transcribe
   *             to include in your transcript.</p>
   *         <p>If you select a number greater than the number of alternative transcriptions generated by
   *             Amazon Transcribe, only the actual number of alternative transcriptions are included.</p>
   *         <p>If you include <code>MaxAlternatives</code> in your request, you must also include
   *             <code>ShowAlternatives</code> with a value of <code>true</code>.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-alternatives.html">Alternative transcriptions</a>.</p>
   */
  MaxAlternatives?: number;

  /**
   * <p>The name of the custom vocabulary filter you want to use in your transcription job request.
   *             This name is case sensitive, cannot contain spaces, and must be unique within an
   *             Amazon Web Services account.</p>
   *         <p>Note that if you include <code>VocabularyFilterName</code> in your request, you must
   *             also include <code>VocabularyFilterMethod</code>.</p>
   */
  VocabularyFilterName?: string;

  /**
   * <p>Specify how you want your vocabulary filter applied to your transcript.</p>
   *         <p>To replace words with <code>***</code>, choose <code>mask</code>.</p>
   *         <p>To delete words, choose <code>remove</code>.</p>
   *         <p>To flag words without changing them, choose <code>tag</code>.</p>
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

export enum SubtitleFormat {
  SRT = "srt",
  VTT = "vtt",
}

/**
 * <p>Provides information about your subtitle file, including format, start index, and
 *             Amazon S3 location.</p>
 */
export interface SubtitlesOutput {
  /**
   * <p>Provides the format of your subtitle files. If your request included both WebVTT
   *             (<code>vtt</code>) and SubRip (<code>srt</code>) formats, both formats are
   *             shown.</p>
   */
  Formats?: (SubtitleFormat | string)[];

  /**
   * <p>The Amazon S3 location of your transcript. You can use this URI to access or
   *             download your subtitle file. Your subtitle file is stored in the same location as your
   *             transcript. If you specified both WebVTT and SubRip subtitle formats, two URIs are
   *             provided.</p>
   *         <p>If you included <code>OutputBucketName</code> in your transcription job request, this is
   *             the URI of that bucket. If you also included <code>OutputKey</code> in your request, your
   *             output is located in the path you specified in your request.</p>
   *         <p>If you didn't include <code>OutputBucketName</code> in your transcription job request,
   *             your subtitle file is stored in a service-managed bucket, and <code>TranscriptFileUri</code>
   *             provides you with a temporary URI you can use for secure access to your subtitle file.</p>
   *         <note>
   *             <p>Temporary URIs for service-managed Amazon S3 buckets are only valid for 15
   *                 minutes. If you get an <code>AccesDenied</code> error, you can get a new temporary
   *                 URI by running a <code>GetTranscriptionJob</code> or
   *                 <code>ListTranscriptionJob</code> request.</p>
   *         </note>
   */
  SubtitleFileUris?: string[];

  /**
   * <p>Provides the start index value for your subtitle files. If you did not specify a value
   *             in your request, the default value of <code>0</code> is used.</p>
   */
  OutputStartIndex?: number;
}

export namespace SubtitlesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SubtitlesOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Provides detailed information about a transcription job.</p>
 *         <p>To view the status of the specified transcription job, check the
 *             <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the
 *             job is finished and you can find the results at the location specified in
 *             <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>,
 *             <code>FailureReason</code> provides details on why your transcription job failed.</p>
 *         <p>If you enabled content redaction, the redacted transcript
 *             can be found at the location specified in <code>RedactedTranscriptFileUri</code>.</p>
 */
export interface TranscriptionJob {
  /**
   * <p>The name of the transcription job. Job names are case sensitive and must be unique
   *             within an Amazon Web Services account.</p>
   */
  TranscriptionJobName?: string;

  /**
   * <p>Provides the status of the specified transcription job.</p>
   *         <p>If the status is <code>COMPLETED</code>, the job is finished and you can find the results
   *             at the location specified in <code>TranscriptFileUri</code> (or
   *             <code>RedactedTranscriptFileUri</code>, if you requested transcript redaction). If the status is
   *             <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription
   *             job failed.</p>
   */
  TranscriptionJobStatus?: TranscriptionJobStatus | string;

  /**
   * <p>The language code used to create your transcription job. For a list of supported languages
   *             and their associated language codes, refer to the <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported languages</a>
   *             table.</p>
   *         <p>Note that you must include one of <code>LanguageCode</code>,
   *             <code>IdentifyLanguage</code>, or <code>IdentifyMultipleLanguages</code> in your
   *             request. If you include more than one of these parameters, your transcription job
   *             fails.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The sample rate, in Hertz, of the audio track in your input media file.</p>
   */
  MediaSampleRateHertz?: number;

  /**
   * <p>The format of the input media file.</p>
   */
  MediaFormat?: MediaFormat | string;

  /**
   * <p>Describes the Amazon S3 location of the media file you want to use in your
   *             request.</p>
   */
  Media?: Media;

  /**
   * <p>Provides you with the Amazon S3 URI you can use to access your transcript.</p>
   */
  Transcript?: Transcript;

  /**
   * <p>The date and time the specified transcription job began processing.</p>
   *         <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.789000-07:00</code> represents a transcription job
   *             that started processing at 12:32 PM UTC-7 on May 4, 2022.</p>
   */
  StartTime?: Date;

  /**
   * <p>The date and time the specified transcription job request was made.</p>
   *         <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents a transcription job
   *             that started processing at 12:32 PM UTC-7 on May 4, 2022.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The date and time the specified transcription job finished processing.</p>
   *         <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:33:13.922000-07:00</code> represents a transcription job
   *             that started processing at 12:33 PM UTC-7 on May 4, 2022.</p>
   */
  CompletionTime?: Date;

  /**
   * <p>If <code>TranscriptionJobStatus</code> is <code>FAILED</code>,
   *             <code>FailureReason</code> contains information about why the transcription job request
   *             failed.</p>
   *         <p>The <code>FailureReason</code> field contains one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>Unsupported media format</code>.</p>
   *                 <p>The media format specified in <code>MediaFormat</code> isn't valid. Refer to
   *                     <b>MediaFormat</b> for a list of supported formats.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>The media format provided does not match the detected media
   *                     format</code>.</p>
   *                 <p>The media format specified in <code>MediaFormat</code> doesn't match the
   *                     format of the input file. Check the media format of your media file and correct the
   *                     specified value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Invalid sample rate for audio file</code>.</p>
   *                 <p>The sample rate specified in <code>MediaSampleRateHertz</code> isn't valid.
   *                     The sample rate must be between 8,000 and 48,000 Hertz.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>The sample rate provided does not match the detected sample
   *                     rate</code>.</p>
   *                 <p>The sample rate specified in <code>MediaSampleRateHertz</code> doesn't
   *                     match the sample rate detected in your input media file. Check the sample rate of
   *                     your media file and correct the specified value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Invalid file size: file size too large</code>.</p>
   *                 <p>The size of your media file is larger than what Amazon Transcribe can process.
   *                     For more information, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/limits-guidelines.html#limits">Guidelines and
   *                         quotas</a>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Invalid number of channels: number of channels too large</code>.</p>
   *                 <p>Your audio contains more channels than Amazon Transcribe is able to process.
   *                     For more information, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/limits-guidelines.html#limits">Guidelines and
   *                         quotas</a>.</p>
   *             </li>
   *          </ul>
   */
  FailureReason?: string;

  /**
   * <p>Specify additional optional settings in your
   *             request, including channel identification, alternative transcriptions, speaker labeling; allows you
   *             to apply custom vocabularies and vocabulary filters.</p>
   *         <p>If you want to include a custom vocabulary or a custom vocabulary filter (or both) with
   *             your request but <b>do not</b> want to use automatic
   *             language identification, use <code>Settings</code> with the <code>VocabularyName</code>
   *             or <code>VocabularyFilterName</code> (or both) sub-parameter.</p>
   *         <p>If you're using automatic language identification with your request and want to include a
   *             custom language model, a custom vocabulary, or a custom vocabulary filter, do not use the
   *             <code>Settings</code> parameter; use instead the
   *             <code></code>
   *             parameter with the <code>LanguageModelName</code>, <code>VocabularyName</code>
   *             or <code>VocabularyFilterName</code> sub-parameters.</p>
   */
  Settings?: Settings;

  /**
   * <p>The custom language model you want to include with your transcription job. If you include
   *             <code>ModelSettings</code> in your request, you must include the
   *             <code>LanguageModelName</code> sub-parameter.</p>
   */
  ModelSettings?: ModelSettings;

  /**
   * <p>Provides information about how your transcription job is being processed. This parameter shows
   *             if your request is queued and what data access role is being used.</p>
   */
  JobExecutionSettings?: JobExecutionSettings;

  /**
   * <p>Redacts or flags specified personally identifiable information (PII) in your transcript.</p>
   */
  ContentRedaction?: ContentRedaction;

  /**
   * <p>Indicates whether automatic language identification was enabled (<code>TRUE</code>)
   *             for the specified transcription job.</p>
   */
  IdentifyLanguage?: boolean;

  /**
   * <p>Indicates whether automatic multi-language identification was enabled
   *             (<code>TRUE</code>) for the specified transcription job.</p>
   */
  IdentifyMultipleLanguages?: boolean;

  /**
   * <p>You can specify two or more language codes that represent the languages you think may
   *             be present in your media; including more than five is not recommended. If you're unsure what
   *             languages are present, do not include this parameter.</p>
   *         <p>If you include <code>LanguageOptions</code> in your request, you must also include
   *             <code>IdentifyLanguage</code>.</p>
   *         <p>For more information, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported languages</a>.</p>
   *         <p>To transcribe speech in Modern Standard Arabic (<code>ar-SA</code>), your media file
   *             must be encoded at a sample rate of 16,000 Hz or higher.</p>
   */
  LanguageOptions?: (LanguageCode | string)[];

  /**
   * <p>The confidence score associated with the language identified in your media file.</p>
   *         <p>Confidence scores are values between 0 and 1; a larger value indicates a higher
   *             probability that the identified language correctly matches the language spoken in your
   *             media.</p>
   */
  IdentifiedLanguageScore?: number;

  /**
   * <p>The language codes used to create your transcription job. This parameter is used with
   *             multi-language identification. For single-language identification requests, refer to the singular
   *             version of this parameter, <code>LanguageCode</code>.</p>
   *         <p>For a list of supported languages and their associated language codes, refer to the
   *             <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported languages</a>
   *             table.</p>
   */
  LanguageCodes?: LanguageCodeItem[];

  /**
   * <p>Adds one or more custom tags, each in the form of a key:value pair, to a new transcription
   *             job at the time you start this new job.</p>
   *         <p>To learn more about using tags with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging resources</a>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Generate subtitles for your media file with your transcription request.</p>
   */
  Subtitles?: SubtitlesOutput;

  /**
   * <p>If using automatic language identification (<code>IdentifyLanguage</code>) in your request
   *             and you want to apply a custom language model, a custom vocabulary, or a custom vocabulary
   *             filter, include <code>LanguageIdSettings</code> with the relevant sub-parameters
   *             (<code>VocabularyName</code>, <code>LanguageModelName</code>, and
   *             <code>VocabularyFilterName</code>).</p>
   *         <p>You can specify two or more language codes that represent the languages you think may be
   *             present in your media; including more than five is not recommended. Each language code you
   *             include can have an associated custom language model, custom vocabulary, and custom
   *             vocabulary filter. The languages you specify must match the languages of the specified custom
   *             language models, custom vocabularies, and custom vocabulary filters.</p>
   *         <p>To include language options using <code>IdentifyLanguage</code>
   *             <b>without</b> including a custom language model, a custom
   *             vocabulary, or a custom vocabulary filter, use <code>LanguageOptions</code> instead of
   *             <code>LanguageIdSettings</code>. Including language options can improve the accuracy of
   *             automatic language identification.</p>
   *         <p>If you want to include a custom language model with your request but
   *             <b>do not</b> want to use automatic language identification,
   *             use instead the <code></code> parameter with the
   *             <code>LanguageModelName</code> sub-parameter.</p>
   *         <p>If you want to include a custom vocabulary or a custom vocabulary filter (or both) with
   *             your request but <b>do not</b> want to use automatic
   *             language identification, use instead the <code></code>
   *             parameter with the <code>VocabularyName</code> or
   *             <code>VocabularyFilterName</code> (or both) sub-parameter.</p>
   */
  LanguageIdSettings?: Record<string, LanguageIdSettings>;
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
   * <p>Provides detailed information about the specified transcription job, including job status
   *             and, if applicable, failure reason.</p>
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
   * <p>The name of the custom vocabulary you want information about. Vocabulary names are
   *             case sensitive.</p>
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
   * <p>The name of the custom vocabulary you requested information about.</p>
   */
  VocabularyName?: string;

  /**
   * <p>The language code you selected for your custom vocabulary.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The processing state of your custom vocabulary. If the state is <code>READY</code>, you
   *             can use the vocabulary in a <code>StartTranscriptionJob</code> request.</p>
   */
  VocabularyState?: VocabularyState | string;

  /**
   * <p>The date and time the specified vocabulary was last modified.</p>
   *         <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents 12:32 PM UTC-7
   *             on May 4, 2022.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>If <code>VocabularyState</code> is <code>FAILED</code>,
   *             <code>FailureReason</code> contains information about why the vocabulary request failed.
   *             See also: <a href="https://docs.aws.amazon.com/transcribe/latest/APIReference/CommonErrors.html">Common Errors</a>.</p>
   */
  FailureReason?: string;

  /**
   * <p>The S3 location where the vocabulary is stored; use this URI to view or download the
   *             vocabulary.</p>
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
   * <p>The name of the custom vocabulary filter you want information about. Vocabulary filter
   *             names are case sensitive.</p>
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
   * <p>The name of the custom vocabulary filter you requested information about.</p>
   */
  VocabularyFilterName?: string;

  /**
   * <p>The language code you selected for your vocabulary filter.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The date and time the specified vocabulary filter was last modified.</p>
   *         <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents 12:32 PM UTC-7
   *             on May 4, 2022.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The Amazon S3 location where the vocabulary filter is stored; use this URI to view or
   *             download the vocabulary filter.</p>
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
   * <p>If your <code>ListCallAnalyticsCategories</code> request returns more results than can
   *             be displayed, <code>NextToken</code> is displayed in the response with an associated string.
   *             To get the next page of results, copy this string and repeat your request, including
   *             <code>NextToken</code> with the value of the copied string. Repeat as needed to view all your
   *             results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of Call Analytics categories to return in each page of results. If there
   *             are fewer results than the value you specify, only the actual results are returned. If you don't
   *             specify a value, a default of 5 is used.</p>
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
   * <p>If <code>NextToken</code> is present in your response, it indicates that not all results
   *             are displayed. To view the next set of results, copy the string associated with the
   *             <code>NextToken</code> parameter in your results output, then run your request again
   *             including <code>NextToken</code> with the value of the copied string. Repeat as needed to
   *             view all your results.</p>
   */
  NextToken?: string;

  /**
   * <p>Provides detailed information about your Call Analytics categories, including all the rules
   *             associated with each category.</p>
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
   * <p>Returns only Call Analytics jobs with the specified status. Jobs are ordered by creation
   *             date, with the newest job first. If you don't include <code>Status</code>, all Call Analytics
   *             jobs are returned.</p>
   */
  Status?: CallAnalyticsJobStatus | string;

  /**
   * <p>Returns only the Call Analytics jobs that contain the specified string. The search is not
   *             case sensitive.</p>
   */
  JobNameContains?: string;

  /**
   * <p>If your <code>ListCallAnalyticsJobs</code> request returns more results than can be
   *             displayed, <code>NextToken</code> is displayed in the response with an associated string. To
   *             get the next page of results, copy this string and repeat your request, including
   *             <code>NextToken</code> with the value of the copied string. Repeat as needed to view all your
   *             results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of Call Analytics jobs to return in each page of results. If there are
   *             fewer results than the value you specify, only the actual results are returned. If you don't
   *             specify a value, a default of 5 is used.</p>
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
   * <p>Lists all Call Analytics jobs that have the status specified in your request. Jobs are
   *             ordered by creation date, with the newest job first.</p>
   */
  Status?: CallAnalyticsJobStatus | string;

  /**
   * <p>If <code>NextToken</code> is present in your response, it indicates that not all results
   *             are displayed. To view the next set of results, copy the string associated with the
   *             <code>NextToken</code> parameter in your results output, then run your request again
   *             including <code>NextToken</code> with the value of the copied string. Repeat as needed to
   *             view all your results.</p>
   */
  NextToken?: string;

  /**
   * <p>Provides a summary of information about each result.</p>
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
   * <p>Returns only custom language models with the specified status. Language
   *             models are ordered by creation date, with the newest model first. If you don't include
   *             <code>StatusEquals</code>, all custom language models are returned.</p>
   */
  StatusEquals?: ModelStatus | string;

  /**
   * <p>Returns only the custom language models that contain the specified string. The search
   *             is not case sensitive.</p>
   */
  NameContains?: string;

  /**
   * <p>If your <code>ListLanguageModels</code> request returns more results than can be
   *             displayed, <code>NextToken</code> is displayed in the response with an associated string. To
   *             get the next page of results, copy this string and repeat your request, including
   *             <code>NextToken</code> with the value of the copied string. Repeat as needed to view all your
   *             results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of custom language models to return in each page of results. If there
   *             are fewer results than the value you specify, only the actual results are returned. If you don't
   *             specify a value, a default of 5 is used.</p>
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
   * <p>If <code>NextToken</code> is present in your response, it indicates that not all results
   *             are displayed. To view the next set of results, copy the string associated with the
   *             <code>NextToken</code> parameter in your results output, then run your request again
   *             including <code>NextToken</code> with the value of the copied string.  Repeat as needed to
   *             view all your results.</p>
   */
  NextToken?: string;

  /**
   * <p>Provides information about the custom language models that match the criteria specified
   *             in your request.</p>
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
   * <p>Returns only medical transcription jobs with the specified status. Jobs are ordered by
   *             creation date, with the newest job first. If you don't include <code>Status</code>, all
   *             medical transcription jobs are returned.</p>
   */
  Status?: TranscriptionJobStatus | string;

  /**
   * <p>Returns only the medical transcription jobs that contain the specified string. The search
   *             is not case sensitive.</p>
   */
  JobNameContains?: string;

  /**
   * <p>If your <code>ListMedicalTranscriptionJobs</code> request returns more results than can
   *             be displayed, <code>NextToken</code> is displayed in the response with an associated string.
   *             To get the next page of results, copy this string and repeat your request, including
   *             <code>NextToken</code> with the value of the copied string. Repeat as needed to view all your
   *             results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of medical transcription jobs to return in each page of results. If there
   *             are fewer results than the value you specify, only the actual results are returned. If you don't
   *             specify a value, a default of 5 is used.</p>
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
 * <p>Provides detailed information about a specific medical transcription job.</p>
 */
export interface MedicalTranscriptionJobSummary {
  /**
   * <p>The name of the medical transcription job. Job names are case sensitive and must be unique
   *             within an Amazon Web Services account.</p>
   */
  MedicalTranscriptionJobName?: string;

  /**
   * <p>The date and time the specified medical transcription job request was made.</p>
   *         <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents a transcription job
   *             that started processing at 12:32 PM UTC-7 on May 4, 2022.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The date and time your medical transcription job began processing.</p>
   *         <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.789000-07:00</code> represents a transcription job
   *             that started processing at 12:32 PM UTC-7 on May 4, 2022.</p>
   */
  StartTime?: Date;

  /**
   * <p>The date and time the specified medical transcription job finished processing.</p>
   *         <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:33:13.922000-07:00</code> represents a transcription job
   *             that started processing at 12:33 PM UTC-7 on May 4, 2022.</p>
   */
  CompletionTime?: Date;

  /**
   * <p>The language code used to create your medical transcription. US English
   *             (<code>en-US</code>) is the only supported language for medical transcriptions.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>Provides the status of your medical transcription job.</p>
   *         <p>If the status is <code>COMPLETED</code>, the job is finished and you can find the results
   *             at the location specified in <code>TranscriptFileUri</code>. If the status is
   *             <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription
   *             job failed.</p>
   */
  TranscriptionJobStatus?: TranscriptionJobStatus | string;

  /**
   * <p>If <code>TranscriptionJobStatus</code> is <code>FAILED</code>,
   *             <code>FailureReason</code> contains information about why the transcription job
   *             failed. See also: <a href="https://docs.aws.amazon.com/transcribe/latest/APIReference/CommonErrors.html">Common Errors</a>.</p>
   */
  FailureReason?: string;

  /**
   * <p>Indicates where the specified medical transcription output is stored.</p>
   *         <p>If the value is <code>CUSTOMER_BUCKET</code>, the location is the Amazon S3
   *             bucket you specified using the <code>OutputBucketName</code> parameter in your
   *              request. If you also included
   *             <code>OutputKey</code> in your request, your output is located in the path you specified in your
   *             request.</p>
   *         <p>If the value is <code>SERVICE_BUCKET</code>, the location is a service-managed
   *             Amazon S3 bucket. To access a transcript stored in a service-managed bucket, use
   *             the URI shown in the <code>TranscriptFileUri</code> field.</p>
   */
  OutputLocationType?: OutputLocationType | string;

  /**
   * <p>Provides the medical specialty represented in your media.</p>
   */
  Specialty?: Specialty | string;

  /**
   * <p>Labels all personal health information (PHI) identified in your transcript. For more information,
   *             see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/phi-id.html">Identifying personal health
   *                 information (PHI) in a transcription</a>.</p>
   */
  ContentIdentificationType?: MedicalContentIdentificationType | string;

  /**
   * <p>Indicates whether the input media is a dictation or a conversation, as specified in the
   *             <code>StartMedicalTranscriptionJob</code> request.</p>
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
   * <p>Lists all medical transcription jobs that have the status specified in your request. Jobs are
   *             ordered by creation date, with the newest job first.</p>
   */
  Status?: TranscriptionJobStatus | string;

  /**
   * <p>If <code>NextToken</code> is present in your response, it indicates that not all results
   *             are displayed. To view the next set of results, copy the string associated with the
   *             <code>NextToken</code> parameter in your results output, then run your request again
   *             including <code>NextToken</code> with the value of the copied string. Repeat as needed to
   *             view all your results.</p>
   */
  NextToken?: string;

  /**
   * <p>Provides a summary of information about each result.</p>
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
   * <p>If your <code>ListMedicalVocabularies</code> request returns more results than can be
   *             displayed, <code>NextToken</code> is displayed in the response with an associated string. To
   *             get the next page of results, copy this string and repeat your request, including
   *             <code>NextToken</code> with the value of the copied string. Repeat as needed to view all your
   *             results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of custom medical vocabularies to return in each page of results. If
   *             there are fewer results than the value you specify, only the actual results are returned. If you
   *             don't specify a value, a default of 5 is used.</p>
   */
  MaxResults?: number;

  /**
   * <p>Returns only custom medical vocabularies with the specified state. Vocabularies are
   *             ordered by creation date, with the newest vocabulary first. If you don't include
   *             <code>StateEquals</code>, all custom medical vocabularies are returned.</p>
   */
  StateEquals?: VocabularyState | string;

  /**
   * <p>Returns only the custom medical vocabularies that contain the specified string. The search
   *             is not case sensitive.</p>
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
 * <p>Provides information about a custom vocabulary, including the language of the vocabulary,
 *             when it was last modified, its name, and the processing state.</p>
 */
export interface VocabularyInfo {
  /**
   * <p>A unique name, chosen by you, for your custom vocabulary. This name is case sensitive,
   *             cannot contain spaces, and must be unique within an Amazon Web Services account.</p>
   */
  VocabularyName?: string;

  /**
   * <p>The language code used to create your custom vocabulary. Each vocabulary must contain
   *             terms in only one language.</p>
   *         <p>A custom vocabulary can only be used to transcribe files in the same language as the
   *             vocabulary. For example, if you create a vocabulary using US English (<code>en-US</code>),
   *             you can only apply this vocabulary to files that contain English audio.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The date and time the specified vocabulary was last modified.</p>
   *         <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents 12:32 PM UTC-7
   *             on May 4, 2022.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The processing state of your custom vocabulary. If the state is <code>READY</code>, you
   *             can use the vocabulary in a <code>StartTranscriptionJob</code> request.</p>
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
   * <p>Lists all custom medical vocabularies that have the status specified in your request.
   *             Vocabularies are ordered by creation date, with the newest vocabulary first.</p>
   */
  Status?: VocabularyState | string;

  /**
   * <p>If <code>NextToken</code> is present in your response, it indicates that not all results
   *             are displayed. To view the next set of results, copy the string associated with the
   *             <code>NextToken</code> parameter in your results output, then run your request again
   *             including <code>NextToken</code> with the value of the copied string. Repeat as needed to
   *             view all your results.</p>
   */
  NextToken?: string;

  /**
   * <p>Provides information about the custom medical vocabularies that match the criteria specified
   *             in your request.</p>
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
   * <p>Returns a list of all tags associated with the specified Amazon Resource Name (ARN). ARNs
   *             have the format <code>arn:partition:service:region:account-id:resource-type/resource-id</code>.</p>
   *         <p>For example,
   *             <code>arn:aws:transcribe:us-west-2:account-id:transcription-job/transcription-job-name</code>.</p>
   *         <p>Valid values for <code>resource-type</code> are: <code>transcription-job</code>,
   *             <code>medical-transcription-job</code>, <code>vocabulary</code>,
   *             <code>medical-vocabulary</code>, <code>vocabulary-filter</code>, and
   *             <code>language-model</code>.</p>
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
   * <p>The Amazon Resource Name (ARN) specified in your request.</p>
   */
  ResourceArn?: string;

  /**
   * <p>Lists all tags associated with the given transcription job, vocabulary, model, or
   *             resource.</p>
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
   * <p>Returns only transcription jobs with the specified status. Jobs are ordered by creation
   *             date, with the newest job first. If you don't include <code>Status</code>, all transcription
   *             jobs are returned.</p>
   */
  Status?: TranscriptionJobStatus | string;

  /**
   * <p>Returns only the transcription jobs that contain the specified string. The search is not
   *             case sensitive.</p>
   */
  JobNameContains?: string;

  /**
   * <p>If your <code>ListTranscriptionJobs</code> request returns more results than can be
   *             displayed, <code>NextToken</code> is displayed in the response with an associated string. To
   *             get the next page of results, copy this string and repeat your request, including
   *             <code>NextToken</code> with the value of the copied string. Repeat as needed to view all your
   *             results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of transcription jobs to return in each page of results. If there are
   *             fewer results than the value you specify, only the actual results are returned. If you don't
   *             specify a value, a default of 5 is used.</p>
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
 * <p>Provides detailed information about a specific transcription job.</p>
 */
export interface TranscriptionJobSummary {
  /**
   * <p>The name of the transcription job. Job names are case sensitive and must be unique
   *             within an Amazon Web Services account.</p>
   */
  TranscriptionJobName?: string;

  /**
   * <p>The date and time the specified transcription job request was made.</p>
   *         <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents a transcription job
   *             that started processing at 12:32 PM UTC-7 on May 4, 2022.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The date and time your transcription job began processing.</p>
   *         <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.789000-07:00</code> represents a transcription job
   *             that started processing at 12:32 PM UTC-7 on May 4, 2022.</p>
   */
  StartTime?: Date;

  /**
   * <p>The date and time the specified transcription job finished processing.</p>
   *         <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:33:13.922000-07:00</code> represents a transcription job
   *             that started processing at 12:33 PM UTC-7 on May 4, 2022.</p>
   */
  CompletionTime?: Date;

  /**
   * <p>The language code used to create your transcription.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>Provides the status of your transcription job.</p>
   *         <p>If the status is <code>COMPLETED</code>, the job is finished and you can find the results
   *             at the location specified in <code>TranscriptFileUri</code> (or
   *             <code>RedactedTranscriptFileUri</code>, if you requested transcript redaction). If the status is
   *             <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription
   *             job failed.</p>
   */
  TranscriptionJobStatus?: TranscriptionJobStatus | string;

  /**
   * <p>If <code>TranscriptionJobStatus</code> is <code>FAILED</code>,
   *             <code>FailureReason</code> contains information about why the transcription job
   *             failed. See also: <a href="https://docs.aws.amazon.com/transcribe/latest/APIReference/CommonErrors.html">Common Errors</a>.</p>
   */
  FailureReason?: string;

  /**
   * <p>Indicates where the specified transcription output is stored.</p>
   *         <p>If the value is <code>CUSTOMER_BUCKET</code>, the location is the Amazon S3
   *             bucket you specified using the <code>OutputBucketName</code> parameter in your
   *              request. If you also included
   *             <code>OutputKey</code> in your request, your output is located in the path you specified in your
   *             request.</p>
   *         <p>If the value is <code>SERVICE_BUCKET</code>, the location is a service-managed
   *             Amazon S3 bucket. To access a transcript stored in a service-managed bucket, use
   *             the URI shown in the <code>TranscriptFileUri</code> or <code>RedactedTranscriptFileUri</code>
   *             field.</p>
   */
  OutputLocationType?: OutputLocationType | string;

  /**
   * <p>The content redaction settings of the transcription job.</p>
   */
  ContentRedaction?: ContentRedaction;

  /**
   * <p>Provides the name of the custom language model that was included in the specified
   *             transcription job.</p>
   *         <p>Only use <code>ModelSettings</code> with the <code>LanguageModelName</code>
   *             sub-parameter if you're <b>not</b> using automatic language
   *             identification (<code></code>).
   *             If using <code>LanguageIdSettings</code> in your request, this parameter contains a
   *             <code>LanguageModelName</code> sub-parameter.</p>
   */
  ModelSettings?: ModelSettings;

  /**
   * <p>Indicates whether automatic language identification was enabled (<code>TRUE</code>)
   *             for the specified transcription job.</p>
   */
  IdentifyLanguage?: boolean;

  /**
   * <p>Indicates whether automatic multi-language identification was enabled
   *             (<code>TRUE</code>) for the specified transcription job.</p>
   */
  IdentifyMultipleLanguages?: boolean;

  /**
   * <p>The confidence score associated with the language identified in your media file.</p>
   *         <p>Confidence scores are values between 0 and 1; a larger value indicates a higher
   *             probability that the identified language correctly matches the language spoken in your
   *             media.</p>
   */
  IdentifiedLanguageScore?: number;

  /**
   * <p>The language codes used to create your transcription job. This parameter is used with
   *             multi-language identification. For single-language identification, the singular version of this
   *             parameter, <code>LanguageCode</code>, is present.</p>
   */
  LanguageCodes?: LanguageCodeItem[];
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
   * <p>Lists all transcription jobs that have the status specified in your request. Jobs are
   *             ordered by creation date, with the newest job first.</p>
   */
  Status?: TranscriptionJobStatus | string;

  /**
   * <p>If <code>NextToken</code> is present in your response, it indicates that not all results
   *             are displayed. To view the next set of results, copy the string associated with the
   *             <code>NextToken</code> parameter in your results output, then run your request again
   *             including <code>NextToken</code> with the value of the copied string. Repeat as needed to
   *             view all your results.</p>
   */
  NextToken?: string;

  /**
   * <p>Provides a summary of information about each result.</p>
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
   * <p>If your <code>ListVocabularies</code> request returns more results than can be displayed,
   *             <code>NextToken</code> is displayed in the response with an associated string. To get the
   *             next page of results, copy this string and repeat your request, including
   *             <code>NextToken</code> with the value of the copied string. Repeat as needed to view all your
   *             results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of custom vocabularies to return in each page of results. If there
   *             are fewer results than the value you specify, only the actual results are returned. If you
   *             don't specify a value, a default of 5 is used.</p>
   */
  MaxResults?: number;

  /**
   * <p>Returns only custom vocabularies with the specified state. Vocabularies are ordered by
   *             creation date, with the newest vocabulary first. If you don't include
   *             <code>StateEquals</code>, all custom medical vocabularies are returned.</p>
   */
  StateEquals?: VocabularyState | string;

  /**
   * <p>Returns only the custom vocabularies that contain the specified string. The search is not
   *             case sensitive.</p>
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
   * <p>Lists all custom vocabularies that have the status specified in your request. Vocabularies
   *             are ordered by creation date, with the newest vocabulary first.</p>
   */
  Status?: VocabularyState | string;

  /**
   * <p>If <code>NextToken</code> is present in your response, it indicates that not all results
   *             are displayed. To view the next set of results, copy the string associated with the
   *             <code>NextToken</code> parameter in your results output, then run your request again
   *             including <code>NextToken</code> with the value of the copied string. Repeat as needed to
   *             view all your results.</p>
   */
  NextToken?: string;

  /**
   * <p>Provides information about the custom vocabularies that match the criteria specified in your
   *             request.</p>
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
   * <p>If your <code>ListVocabularyFilters</code> request returns more results than can
   *             be displayed, <code>NextToken</code> is displayed in the response with an associated string.
   *             To get the next page of results, copy this string and repeat your request, including
   *             <code>NextToken</code> with the value of the copied string. Repeat as needed to view all your
   *             results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of custom vocabulary filters to return in each page of results. If
   *             there are fewer results than the value you specify, only the actual results are returned. If you
   *             don't specify a value, a default of 5 is used.</p>
   */
  MaxResults?: number;

  /**
   * <p>Returns only the custom vocabulary filters that contain the specified string. The search
   *             is not case sensitive.</p>
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
 * <p>Provides information about a vocabulary filter, including the language of the filter, when it
 *             was last modified, and its name.</p>
 */
export interface VocabularyFilterInfo {
  /**
   * <p>A unique name, chosen by you, for your custom vocabulary filter. This name is case
   *             sensitive, cannot contain spaces, and must be unique within an
   *             Amazon Web Services account.</p>
   */
  VocabularyFilterName?: string;

  /**
   * <p>The language code that represents the language of the entries in your vocabulary
   *             filter. Each vocabulary filter must contain terms in only one language.</p>
   *         <p>A vocabulary filter can only be used to transcribe files in the same language as the
   *             filter. For example, if you create a vocabulary filter using US English (<code>en-US</code>), you
   *             can only apply this filter to files that contain English audio.</p>
   *         <p>For a list of supported languages and their associated language codes, refer to the
   *             <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported
   *                 languages</a> table.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The date and time the specified vocabulary filter was last modified.</p>
   *         <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents 12:32 PM UTC-7
   *             on May 4, 2022.</p>
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
   * <p>If <code>NextToken</code> is present in your response, it indicates that not all results
   *             are displayed. To view the next set of results, copy the string associated with the
   *             <code>NextToken</code> parameter in your results output, then run your request again
   *             including <code>NextToken</code> with the value of the copied string. Repeat as needed to
   *             view all your results.</p>
   */
  NextToken?: string;

  /**
   * <p>Provides information about the custom vocabulary filters that match the criteria specified
   *             in your request.</p>
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
   * <p>A unique name, chosen by you, for your Call Analytics job.</p>
   *         <p>This name is case sensitive, cannot contain spaces, and must be unique within an
   *             Amazon Web Services account. If you try to create a new job with the same name as an
   *             existing job, you get a <code>ConflictException</code> error.</p>
   */
  CallAnalyticsJobName: string | undefined;

  /**
   * <p>Describes the Amazon S3 location of the media file you want to use in your
   *             request.</p>
   */
  Media: Media | undefined;

  /**
   * <p>The Amazon S3 location where you want your Call Analytics transcription output
   *             stored. You can use any of the following formats to specify the output location:</p>
   *         <ol>
   *             <li>
   *                 <p>s3://DOC-EXAMPLE-BUCKET</p>
   *             </li>
   *             <li>
   *                 <p>s3://DOC-EXAMPLE-BUCKET/my-output-folder/</p>
   *             </li>
   *             <li>
   *                 <p>s3://DOC-EXAMPLE-BUCKET/my-output-folder/my-call-analytics-job.json</p>
   *             </li>
   *          </ol>
   *         <p>Unless you specify a file name (option 3), the name of your output file has a default
   *             value that matches the name you specified for your transcription job using the
   *             <code>CallAnalyticsJobName</code> parameter.</p>
   *         <p>You can specify a KMS key to encrypt your output using the
   *             <code>OutputEncryptionKMSKeyId</code> parameter. If you don't specify a
   *             KMS key, Amazon Transcribe uses the default Amazon S3 key for
   *             server-side encryption.</p>
   *         <p>If you don't specify <code>OutputLocation</code>, your transcript is placed in a
   *             service-managed Amazon S3 bucket and you are provided with a URI to access your
   *             transcript.</p>
   */
  OutputLocation?: string;

  /**
   * <p>The KMS key you want to use to encrypt your Call Analytics output.</p>
   *         <p>If using a key located in the <b>current</b>
   *             Amazon Web Services account, you can specify your KMS key in one of
   *             four ways:</p>
   *         <ol>
   *             <li>
   *                 <p>Use the KMS key ID itself. For example,
   *                     <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   *             </li>
   *             <li>
   *                 <p>Use an alias for the KMS key ID. For example,
   *                     <code>alias/ExampleAlias</code>.</p>
   *             </li>
   *             <li>
   *                 <p>Use the Amazon Resource Name (ARN) for the KMS key ID. For
   *                     example,
   *                     <code>arn:aws:kms:region:account-ID:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   *             </li>
   *             <li>
   *                 <p>Use the ARN for the KMS key alias. For example,
   *                     <code>arn:aws:kms:region:account-ID:alias/ExampleAlias</code>.</p>
   *             </li>
   *          </ol>
   *         <p>If using a key located in a <b>different</b>
   *             Amazon Web Services account than the current Amazon Web Services account, you can
   *             specify your KMS key in one of two ways:</p>
   *         <ol>
   *             <li>
   *                 <p>Use the ARN for the KMS key ID. For example,
   *                     <code>arn:aws:kms:region:account-ID:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   *             </li>
   *             <li>
   *                 <p>Use the ARN for the KMS key alias. For example,
   *                     <code>arn:aws:kms:region:account-ID:alias/ExampleAlias</code>.</p>
   *             </li>
   *          </ol>
   *         <p>If you don't specify an encryption key, your output is encrypted with the default
   *             Amazon S3 key (SSE-S3).</p>
   *         <p>If you specify a KMS key to encrypt your output, you must also specify
   *             an output location using the <code>OutputLocation</code> parameter.</p>
   *         <p>Note that the user making the
   *             request must have permission to use the specified KMS key.</p>
   */
  OutputEncryptionKMSKeyId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that has permissions to
   *             access the Amazon S3 bucket that contains your input files. If the role you specify doesn’t
   *             have the appropriate permissions to access the specified Amazon S3 location, your request
   *             fails.</p>
   *         <p>IAM role ARNs have the format
   *             <code>arn:partition:iam::account:role/role-name-with-path</code>. For example:
   *             <code>arn:aws:iam::111122223333:role/Admin</code>.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns">IAM ARNs</a>.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>Specify additional optional settings in your
   *             request, including content redaction; allows you to apply custom language models, vocabulary
   *             filters, and custom vocabularies to your Call Analytics job.</p>
   */
  Settings?: CallAnalyticsJobSettings;

  /**
   * <p>Allows you to specify which speaker is on which channel. For example, if your agent is the
   *             first participant to speak, you would set <code>ChannelId</code> to <code>0</code> (to
   *             indicate the first channel) and <code>ParticipantRole</code> to <code>AGENT</code> (to
   *             indicate that it's the agent speaking).</p>
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
   * <p>Provides detailed information about the current Call Analytics job, including job status
   *             and, if applicable, failure reason.</p>
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
   * <p>A unique name, chosen by you, for your medical transcription job. The name you specify is
   *             also used as the default name of your transcription output file. If you want to specify a different
   *             name for your transcription output, use the <code>OutputKey</code> parameter.</p>
   *         <p>This name is case sensitive, cannot contain spaces, and must be unique within an
   *             Amazon Web Services account. If you try to create a new job with the same name as an
   *             existing job, you get a <code>ConflictException</code> error.</p>
   */
  MedicalTranscriptionJobName: string | undefined;

  /**
   * <p>The language code that represents the language spoken in the input media file. US English
   *             (<code>en-US</code>) is the only valid value for medical transcription jobs. Any other value
   *             you enter for language code results in a <code>BadRequestException</code> error.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>The sample rate, in Hertz, of the audio track in your input media file.</p>
   *         <p>If you don't specify the media sample rate, Amazon Transcribe Medical determines it for
   *             you. If you specify the sample rate, it must match the rate detected by Amazon Transcribe
   *             Medical; if there's a mismatch between the value you specify and the value detected, your job
   *             fails. Therefore, in most cases, it's advised to omit <code>MediaSampleRateHertz</code> and let
   *             Amazon Transcribe Medical determine the sample rate.</p>
   */
  MediaSampleRateHertz?: number;

  /**
   * <p>Specify the format of your input media file.</p>
   */
  MediaFormat?: MediaFormat | string;

  /**
   * <p>Describes the Amazon S3 location of the media file you want to use in your
   *             request.</p>
   */
  Media: Media | undefined;

  /**
   * <p>The name of the Amazon S3 bucket where you want your medical transcription
   *             output stored. Do not include the <code>S3://</code> prefix of the specified bucket.</p>
   *         <p>If you want your output to go to a sub-folder of this bucket, specify it using the
   *             <code>OutputKey</code> parameter; <code>OutputBucketName</code> only accepts the
   *             name of a bucket.</p>
   *         <p>For example, if you want your output stored in <code>S3://DOC-EXAMPLE-BUCKET</code>,
   *             set <code>OutputBucketName</code> to <code>DOC-EXAMPLE-BUCKET</code>. However, if
   *             you want your output stored in <code>S3://DOC-EXAMPLE-BUCKET/test-files/</code>, set
   *             <code>OutputBucketName</code> to <code>DOC-EXAMPLE-BUCKET</code> and
   *             <code>OutputKey</code> to <code>test-files/</code>.</p>
   *         <p>Note that Amazon Transcribe must have permission to use the specified location. You
   *             can change Amazon S3 permissions using the <a href="https://console.aws.amazon.com/s3">Amazon Web Services Management Console</a>. See also <a href="https://docs.aws.amazon.com/transcribe/latest/dg/security_iam_id-based-policy-examples.html#auth-role-iam-user">Permissions
   *                 Required for IAM User Roles</a>.</p>
   *         <p>If you don't specify <code>OutputBucketName</code>, your transcript is placed in a
   *             service-managed Amazon S3 bucket and you are provided with a URI to access your
   *             transcript.</p>
   */
  OutputBucketName: string | undefined;

  /**
   * <p>Use in combination with <code>OutputBucketName</code> to specify the output location of
   *             your transcript and, optionally, a unique name for your output file. The default name for your
   *             transcription output is the same as the name you specified for your medical transcription job
   *             (<code>MedicalTranscriptionJobName</code>).</p>
   *         <p>Here are some examples of how you can use <code>OutputKey</code>:</p>
   *         <ul>
   *             <li>
   *                 <p>If you specify 'DOC-EXAMPLE-BUCKET' as the <code>OutputBucketName</code>
   *                     and 'my-transcript.json' as the <code>OutputKey</code>, your transcription output
   *                     path is <code>s3://DOC-EXAMPLE-BUCKET/my-transcript.json</code>.</p>
   *             </li>
   *             <li>
   *                 <p>If you specify 'my-first-transcription' as the <code>MedicalTranscriptionJobName</code>,
   *                     'DOC-EXAMPLE-BUCKET' as the <code>OutputBucketName</code>, and
   *                     'my-transcript' as the <code>OutputKey</code>, your transcription output path is
   *                     <code>s3://DOC-EXAMPLE-BUCKET/my-transcript/my-first-transcription.json</code>.</p>
   *             </li>
   *             <li>
   *                 <p>If you specify 'DOC-EXAMPLE-BUCKET' as the <code>OutputBucketName</code>
   *                     and 'test-files/my-transcript.json' as the <code>OutputKey</code>, your transcription output
   *                     path is <code>s3://DOC-EXAMPLE-BUCKET/test-files/my-transcript.json</code>.</p>
   *             </li>
   *             <li>
   *                 <p>If you specify 'my-first-transcription' as the <code>MedicalTranscriptionJobName</code>,
   *                     'DOC-EXAMPLE-BUCKET' as the <code>OutputBucketName</code>, and
   *                     'test-files/my-transcript' as the <code>OutputKey</code>, your transcription output path is
   *                     <code>s3://DOC-EXAMPLE-BUCKET/test-files/my-transcript/my-first-transcription.json</code>.</p>
   *             </li>
   *          </ul>
   *         <p>If you specify the name of an Amazon S3 bucket sub-folder that doesn't exist, one is
   *             created for you.</p>
   */
  OutputKey?: string;

  /**
   * <p>The KMS key you want to use to encrypt your medical transcription
   *             output.</p>
   *         <p>If using a key located in the <b>current</b>
   *             Amazon Web Services account, you can specify your KMS key in one of
   *             four ways:</p>
   *         <ol>
   *             <li>
   *                 <p>Use the KMS key ID itself. For example,
   *                     <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   *             </li>
   *             <li>
   *                 <p>Use an alias for the KMS key ID. For example,
   *                     <code>alias/ExampleAlias</code>.</p>
   *             </li>
   *             <li>
   *                 <p>Use the Amazon Resource Name (ARN) for the KMS key ID. For
   *                     example,                    <code>arn:aws:kms:region:account-ID:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   *             </li>
   *             <li>
   *                 <p>Use the ARN for the KMS key alias. For example,
   *                     <code>arn:aws:kms:region:account-ID:alias/ExampleAlias</code>.</p>
   *             </li>
   *          </ol>
   *         <p>If using a key located in a <b>different</b>
   *             Amazon Web Services account than the current Amazon Web Services account, you can
   *             specify your KMS key in one of two ways:</p>
   *         <ol>
   *             <li>
   *                 <p>Use the ARN for the KMS key ID. For example,                     <code>arn:aws:kms:region:account-ID:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   *             </li>
   *             <li>
   *                 <p>Use the ARN for the KMS key alias. For example,
   *                     <code>arn:aws:kms:region:account-ID:alias/ExampleAlias</code>.</p>
   *             </li>
   *          </ol>
   *         <p>If you don't specify an encryption key, your output is encrypted with the default
   *             Amazon S3 key (SSE-S3).</p>
   *         <p>If you specify a KMS key to encrypt your output, you must also specify
   *             an output location using the <code>OutputLocation</code> parameter.</p>
   *         <p>Note that the user making the
   *             request must have permission to use the specified KMS key.</p>
   */
  OutputEncryptionKMSKeyId?: string;

  /**
   * <p>A map of plain text, non-secret key:value pairs, known as encryption context pairs, that
   *             provide an added layer of security for your data. For more information, see
   *             <a href="https://docs.aws.amazon.com/transcribe/latest/dg/key-management.html#kms-context">KMS
   *                 encryption context</a> and <a href="https://docs.aws.amazon.com/transcribe/latest/dg/symmetric-asymmetric.html">Asymmetric keys in
   *                     KMS</a>.</p>
   */
  KMSEncryptionContext?: Record<string, string>;

  /**
   * <p>Specify additional optional settings in your
   *             request, including channel identification, alternative transcriptions, and speaker labeling; allows
   *             you to apply custom vocabularies to your transcription job.</p>
   */
  Settings?: MedicalTranscriptionSetting;

  /**
   * <p>Labels all personal health information (PHI) identified in your transcript. For more information,
   *             see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/phi-id.html">Identifying personal health
   *                 information (PHI) in a transcription</a>.</p>
   */
  ContentIdentificationType?: MedicalContentIdentificationType | string;

  /**
   * <p>Specify the predominant medical specialty represented in your media. For batch
   *             transcriptions, <code>PRIMARYCARE</code> is the only valid value. If you require additional
   *             specialties, refer to .</p>
   */
  Specialty: Specialty | string | undefined;

  /**
   * <p>Specify whether your input media contains only one person (<code>DICTATION</code>) or
   *             contains a conversation between two people (<code>CONVERSATION</code>).</p>
   *         <p>For example, <code>DICTATION</code> could be used for a medical professional wanting to
   *             transcribe voice memos; <code>CONVERSATION</code> could be used for transcribing the
   *             doctor-patient dialogue during the patient's office visit.</p>
   */
  Type: Type | string | undefined;

  /**
   * <p>Adds one or more custom tags, each in the form of a key:value pair, to a new medical
   *             transcription job at the time you start this new job.</p>
   *         <p>To learn more about using tags with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging resources</a>.</p>
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
   * <p>Provides detailed information about the current medical transcription job, including job
   *             status and, if applicable, failure reason.</p>
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

/**
 * <p>Generate subtitles for your media file with your transcription request.</p>
 *         <p>You can choose a start index of 0 or 1, and you can specify either WebVTT or SubRip (or
 *             both) as your output format.</p>
 *         <p>Note that your subtitle files are placed in the same location as your transcription
 *             output.</p>
 */
export interface Subtitles {
  /**
   * <p>Specify the output format for your subtitle file; if you select both WebVTT
   *             (<code>vtt</code>) and SubRip (<code>srt</code>) formats, two output files are
   *             generated.</p>
   */
  Formats?: (SubtitleFormat | string)[];

  /**
   * <p>Specify the starting value that is assigned to the first subtitle segment.</p>
   *         <p>The default start index for Amazon Transcribe is <code>0</code>, which differs from
   *             the more widely used standard of <code>1</code>. If you're uncertain which value to use,
   *             we recommend choosing <code>1</code>, as this may improve compatibility with other
   *             services.</p>
   */
  OutputStartIndex?: number;
}

export namespace Subtitles {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Subtitles): any => ({
    ...obj,
  });
}

export interface StartTranscriptionJobRequest {
  /**
   * <p>A unique name, chosen by you, for your transcription job. The name you specify is
   *             also used as the default name of your transcription output file. If you want to specify a different
   *             name for your transcription output, use the <code>OutputKey</code> parameter.</p>
   *         <p>This name is case sensitive, cannot contain spaces, and must be unique within an
   *             Amazon Web Services account. If you try to create a new job with the same name as an
   *             existing job, you get a <code>ConflictException</code> error.</p>
   */
  TranscriptionJobName: string | undefined;

  /**
   * <p>The language code that represents the language spoken in the input media file.</p>
   *         <p>If you're unsure of the language spoken in your media file, consider using
   *             <code>IdentifyLanguage</code> or <code>IdentifyMultipleLanguages</code> to enable
   *             automatic language identification.</p>
   *         <p>Note that you must include one of <code>LanguageCode</code>,
   *             <code>IdentifyLanguage</code>, or <code>IdentifyMultipleLanguages</code> in your
   *             request. If you include more than one of these parameters, your transcription job
   *             fails.</p>
   *         <p>For a list of supported languages and their associated language codes, refer to the
   *             <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported
   *                 languages</a> table.</p>
   *         <note>
   *             <p>To transcribe speech in Modern Standard Arabic (<code>ar-SA</code>), your media file
   *             must be encoded at a sample rate of 16,000 Hz or higher.</p>
   *         </note>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The sample rate, in Hertz, of the audio track in your input media file.</p>
   *         <p>If you don't specify the media sample rate, Amazon Transcribe determines it for you. If you
   *             specify the sample rate, it must match the rate detected by Amazon Transcribe; if there's a
   *             mismatch between the value you specify and the value detected, your job fails. Therefore, in most
   *             cases, it's advised to omit <code>MediaSampleRateHertz</code> and let Amazon Transcribe
   *             determine the sample rate.</p>
   */
  MediaSampleRateHertz?: number;

  /**
   * <p>Specify the format of your input media file.</p>
   */
  MediaFormat?: MediaFormat | string;

  /**
   * <p>Describes the Amazon S3 location of the media file you want to use in your
   *             request.</p>
   */
  Media: Media | undefined;

  /**
   * <p>The name of the Amazon S3 bucket where you want your transcription output
   *             stored. Do not include the <code>S3://</code> prefix of the specified bucket.</p>
   *         <p>If you want your output to go to a sub-folder of this bucket, specify it using the
   *             <code>OutputKey</code> parameter; <code>OutputBucketName</code> only accepts the
   *             name of a bucket.</p>
   *         <p>For example, if you want your output stored in <code>S3://DOC-EXAMPLE-BUCKET</code>,
   *             set <code>OutputBucketName</code> to <code>DOC-EXAMPLE-BUCKET</code>. However, if
   *             you want your output stored in <code>S3://DOC-EXAMPLE-BUCKET/test-files/</code>, set
   *             <code>OutputBucketName</code> to <code>DOC-EXAMPLE-BUCKET</code> and
   *             <code>OutputKey</code> to <code>test-files/</code>.</p>
   *         <p>Note that Amazon Transcribe must have permission to use the specified location. You
   *             can change Amazon S3 permissions using the <a href="https://console.aws.amazon.com/s3">Amazon Web Services Management Console</a>. See also <a href="https://docs.aws.amazon.com/transcribe/latest/dg/security_iam_id-based-policy-examples.html#auth-role-iam-user">Permissions
   *                     Required for IAM User Roles</a>.</p>
   *         <p>If you don't specify <code>OutputBucketName</code>, your transcript is placed in a
   *             service-managed Amazon S3 bucket and you are provided with a URI to access your
   *             transcript.</p>
   */
  OutputBucketName?: string;

  /**
   * <p>Use in combination with <code>OutputBucketName</code> to specify the output location of
   *             your transcript and, optionally, a unique name for your output file. The default name for your
   *             transcription output is the same as the name you specified for your transcription job
   *             (<code>TranscriptionJobName</code>).</p>
   *         <p>Here are some examples of how you can use <code>OutputKey</code>:</p>
   *         <ul>
   *             <li>
   *                 <p>If you specify 'DOC-EXAMPLE-BUCKET' as the <code>OutputBucketName</code>
   *                     and 'my-transcript.json' as the <code>OutputKey</code>, your transcription output
   *                     path is <code>s3://DOC-EXAMPLE-BUCKET/my-transcript.json</code>.</p>
   *             </li>
   *             <li>
   *                 <p>If you specify 'my-first-transcription' as the <code>TranscriptionJobName</code>,
   *                     'DOC-EXAMPLE-BUCKET' as the <code>OutputBucketName</code>, and
   *                     'my-transcript' as the <code>OutputKey</code>, your transcription output path is
   *                     <code>s3://DOC-EXAMPLE-BUCKET/my-transcript/my-first-transcription.json</code>.</p>
   *             </li>
   *             <li>
   *                 <p>If you specify 'DOC-EXAMPLE-BUCKET' as the <code>OutputBucketName</code>
   *                     and 'test-files/my-transcript.json' as the <code>OutputKey</code>, your transcription
   *                     output path is
   *                     <code>s3://DOC-EXAMPLE-BUCKET/test-files/my-transcript.json</code>.</p>
   *             </li>
   *             <li>
   *                 <p>If you specify 'my-first-transcription' as the <code>TranscriptionJobName</code>,
   *                     'DOC-EXAMPLE-BUCKET' as the <code>OutputBucketName</code>, and
   *                     'test-files/my-transcript' as the <code>OutputKey</code>, your transcription output
   *                     path is
   *                     <code>s3://DOC-EXAMPLE-BUCKET/test-files/my-transcript/my-first-transcription.json</code>.</p>
   *             </li>
   *          </ul>
   *         <p>If you specify the name of an Amazon S3 bucket sub-folder that doesn't exist, one is
   *             created for you.</p>
   */
  OutputKey?: string;

  /**
   * <p>The KMS key you want to use to encrypt your transcription output.</p>
   *         <p>If using a key located in the <b>current</b>
   *             Amazon Web Services account, you can specify your KMS key in one of
   *             four ways:</p>
   *         <ol>
   *             <li>
   *                 <p>Use the KMS key ID itself. For example,
   *                     <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   *             </li>
   *             <li>
   *                 <p>Use an alias for the KMS key ID. For example,
   *                     <code>alias/ExampleAlias</code>.</p>
   *             </li>
   *             <li>
   *                 <p>Use the Amazon Resource Name (ARN) for the KMS key ID. For
   *                     example,                    <code>arn:aws:kms:region:account-ID:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   *             </li>
   *             <li>
   *                 <p>Use the ARN for the KMS key alias. For example,
   *                     <code>arn:aws:kms:region:account-ID:alias/ExampleAlias</code>.</p>
   *             </li>
   *          </ol>
   *         <p>If using a key located in a <b>different</b>
   *             Amazon Web Services account than the current Amazon Web Services account, you can
   *             specify your KMS key in one of two ways:</p>
   *         <ol>
   *             <li>
   *                 <p>Use the ARN for the KMS key ID. For example,                     <code>arn:aws:kms:region:account-ID:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   *             </li>
   *             <li>
   *                 <p>Use the ARN for the KMS key alias. For example,
   *                     <code>arn:aws:kms:region:account-ID:alias/ExampleAlias</code>.</p>
   *             </li>
   *          </ol>
   *         <p>If you don't specify an encryption key, your output is encrypted with the default
   *             Amazon S3 key (SSE-S3).</p>
   *         <p>If you specify a KMS key to encrypt your output, you must also specify
   *             an output location using the <code>OutputLocation</code> parameter.</p>
   *         <p>Note that the user making the
   *             request must have permission to use the specified KMS key.</p>
   */
  OutputEncryptionKMSKeyId?: string;

  /**
   * <p>A map of plain text, non-secret key:value pairs, known as encryption context pairs, that
   *             provide an added layer of security for your data. For more information, see
   *             <a href="https://docs.aws.amazon.com/transcribe/latest/dg/key-management.html#kms-context">KMS
   *                 encryption context</a> and <a href="https://docs.aws.amazon.com/transcribe/latest/dg/symmetric-asymmetric.html">Asymmetric keys in
   *                     KMS</a>.</p>
   */
  KMSEncryptionContext?: Record<string, string>;

  /**
   * <p>Specify additional optional settings in your
   *             request, including channel identification, alternative transcriptions, speaker labeling; allows
   *             you to apply custom vocabularies and vocabulary filters.</p>
   *         <p>If you want to include a custom vocabulary or a custom vocabulary filter (or both) with
   *             your request but <b>do not</b> want to use automatic
   *             language identification, use <code>Settings</code> with the <code>VocabularyName</code>
   *             or <code>VocabularyFilterName</code> (or both) sub-parameter.</p>
   *         <p>If you're using automatic language identification with your request and want to include a
   *             custom language model, a custom vocabulary, or a custom vocabulary filter, use instead the
   *             <code></code> parameter with the
   *             <code>LanguageModelName</code>, <code>VocabularyName</code>
   *             or <code>VocabularyFilterName</code> sub-parameters.</p>
   */
  Settings?: Settings;

  /**
   * <p>Specify the custom language model you want to include with your transcription job. If you
   *             include <code>ModelSettings</code> in your request, you must include the
   *             <code>LanguageModelName</code> sub-parameter.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-language-models.html">Custom language
   *             models</a>.</p>
   */
  ModelSettings?: ModelSettings;

  /**
   * <p>Allows you to control how your transcription job is processed. Currently, the only
   *             <code>JobExecutionSettings</code> modification you can choose is enabling job queueing using
   *             the <code>AllowDeferredExecution</code> sub-parameter.</p>
   *         <p>If you include <code>JobExecutionSettings</code> in your request, you must also include
   *             the sub-parameters: <code>AllowDeferredExecution</code> and
   *             <code>DataAccessRoleArn</code>.</p>
   */
  JobExecutionSettings?: JobExecutionSettings;

  /**
   * <p>Allows you to redact or flag specified personally identifiable information (PII) in your transcript. If
   *             you use <code>ContentRedaction</code>, you must also include the sub-parameters:
   *             <code>PiiEntityTypes</code>, <code>RedactionOutput</code>, and
   *             <code>RedactionType</code>.</p>
   */
  ContentRedaction?: ContentRedaction;

  /**
   * <p>Enables automatic language identification in your transcription job request.</p>
   *         <p>If you include <code>IdentifyLanguage</code>, you can optionally include a list of
   *             language codes, using <code>LanguageOptions</code>, that you think may be present in
   *             your media file. Including language options can improve transcription accuracy.</p>
   *         <p>If you want to apply a custom language model, a custom vocabulary, or a custom
   *             vocabulary filter to your automatic language identification request, include
   *             <code>LanguageIdSettings</code> with the relevant sub-parameters
   *             (<code>VocabularyName</code>, <code>LanguageModelName</code>, and
   *             <code>VocabularyFilterName</code>).</p>
   *         <p>Note that you must include one of <code>LanguageCode</code>,
   *             <code>IdentifyLanguage</code>, or <code>IdentifyMultipleLanguages</code> in your
   *             request. If you include more than one of these parameters, your transcription job
   *             fails.</p>
   */
  IdentifyLanguage?: boolean;

  /**
   * <p>Enables automatic multi-language identification in your transcription job request. Use this
   *             parameter if your media file contains more than one language.</p>
   *         <p>If you include <code>IdentifyMultipleLanguages</code>, you can optionally include a list
   *             of language codes, using <code>LanguageOptions</code>, that you think may be present in
   *             your media file. Including language options can improve transcription accuracy.</p>
   *         <p>If you want to apply a custom vocabulary or a custom vocabulary filter to your automatic
   *             language identification request, include <code>LanguageIdSettings</code> with the relevant
   *             sub-parameters (<code>VocabularyName</code> and
   *             <code>VocabularyFilterName</code>).</p>
   *         <p>Note that you must include one of <code>LanguageCode</code>,
   *             <code>IdentifyLanguage</code>, or <code>IdentifyMultipleLanguages</code> in your
   *             request. If you include more than one of these parameters, your transcription job fails.</p>
   */
  IdentifyMultipleLanguages?: boolean;

  /**
   * <p>You can specify two or more language codes that represent the languages you think may
   *             be present in your media; including more than five is not recommended. If you're unsure what
   *             languages are present, do not include this parameter.</p>
   *         <p>If you include <code>LanguageOptions</code> in your request, you must also include
   *             <code>IdentifyLanguage</code>.</p>
   *         <p>For more information, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported languages</a>.</p>
   *         <p>To transcribe speech in Modern Standard Arabic (<code>ar-SA</code>), your media file
   *             must be encoded at a sample rate of 16,000 Hz or higher.</p>
   */
  LanguageOptions?: (LanguageCode | string)[];

  /**
   * <p>Produces subtitle files for your input media. You can specify WebVTT (*.vtt) and SubRip
   *             (*.srt) formats.</p>
   */
  Subtitles?: Subtitles;

  /**
   * <p>Adds one or more custom tags, each in the form of a key:value pair, to a new transcription
   *             job at the time you start this new job.</p>
   *         <p>To learn more about using tags with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging resources</a>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>If using automatic language identification (<code>IdentifyLanguage</code>) in your request
   *             and you want to apply a custom language model, a custom vocabulary, or a custom vocabulary
   *             filter, include <code>LanguageIdSettings</code> with the relevant sub-parameters
   *             (<code>VocabularyName</code>, <code>LanguageModelName</code>, and
   *             <code>VocabularyFilterName</code>).</p>
   *         <p>You can specify two or more language codes that represent the languages you think may be
   *             present in your media; including more than five is not recommended. Each language code you
   *             include can have an associated custom language model, custom vocabulary, and custom
   *             vocabulary filter. The languages you specify must match the languages of the specified custom
   *             language models, custom vocabularies, and custom vocabulary filters.</p>
   *         <p>To include language options using <code>IdentifyLanguage</code>
   *             <b>without</b> including a custom language model, a custom
   *             vocabulary, or a custom vocabulary filter, use <code>LanguageOptions</code> instead of
   *             <code>LanguageIdSettings</code>. Including language options can improve the accuracy of
   *             automatic language identification.</p>
   *         <p>If you want to include a custom language model with your request but
   *             <b>do not</b> want to use automatic language identification,
   *             use instead the <code></code> parameter with the
   *             <code>LanguageModelName</code> sub-parameter.</p>
   *         <p>If you want to include a custom vocabulary or a custom vocabulary filter (or both) with
   *             your request but <b>do not</b> want to use automatic
   *             language identification, use instead the <code></code>
   *             parameter with the <code>VocabularyName</code> or
   *             <code>VocabularyFilterName</code> (or both) sub-parameter.</p>
   */
  LanguageIdSettings?: Record<string, LanguageIdSettings>;
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
   * <p>Provides detailed information about the current transcription job, including job status
   *             and, if applicable, failure reason.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource you want to tag. ARNs have the format
   *             <code>arn:partition:service:region:account-id:resource-type/resource-id</code>.</p>
   *         <p>For example,
   *             <code>arn:aws:transcribe:us-west-2:account-id:transcription-job/transcription-job-name</code>.</p>
   *         <p>Valid values for <code>resource-type</code> are: <code>transcription-job</code>,
   *             <code>medical-transcription-job</code>, <code>vocabulary</code>,
   *             <code>medical-vocabulary</code>, <code>vocabulary-filter</code>, and
   *             <code>language-model</code>.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Adds one or more custom tags, each in the form of a key:value pair, to the specified
   *             resource.</p>
   *         <p>To learn more about using tags with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging resources</a>.</p>
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
   * <p>The Amazon Resource Name (ARN) of the Amazon Transcribe resource you want to remove
   *             tags from. ARNs have the format
   *             <code>arn:partition:service:region:account-id:resource-type/resource-id</code>.</p>
   *         <p>For example,
   *             <code>arn:aws:transcribe:us-west-2:account-id:transcription-job/transcription-job-name</code>.</p>
   *         <p>Valid values for <code>resource-type</code> are: <code>transcription-job</code>,
   *             <code>medical-transcription-job</code>, <code>vocabulary</code>,
   *             <code>medical-vocabulary</code>, <code>vocabulary-filter</code>, and
   *             <code>language-model</code>.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Removes the specified tag keys from the specified Amazon Transcribe resource.</p>
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
   * <p>The name of the Call Analytics category you want to update. Category names are case
   *             sensitive.</p>
   */
  CategoryName: string | undefined;

  /**
   * <p>The rules used for the updated Call Analytics category. The rules you provide in this field
   *             replace the ones that are currently being used in the specified category.</p>
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
   * <p>Provides you with the properties of the Call Analytics category you specified in your
   *             <code>UpdateCallAnalyticsCategory</code> request.</p>
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
   * <p>The name of the custom medical vocabulary you want to update. Vocabulary names are
   *             case sensitive.</p>
   */
  VocabularyName: string | undefined;

  /**
   * <p>The language code that represents the language of the entries in the custom vocabulary
   *             you want to update. US English (<code>en-US</code>) is the only language supported with
   *             Amazon Transcribe Medical.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>The Amazon S3 location of the text file that contains your custom medical
   *             vocabulary. The URI must be located in the same Amazon Web Services Region as the resource
   *             you're calling.</p>
   *         <p>Here's an example URI path:
   *             <code>s3://DOC-EXAMPLE-BUCKET/my-vocab-file.txt</code>
   *          </p>
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
   * <p>The name of the updated custom medical vocabulary.</p>
   */
  VocabularyName?: string;

  /**
   * <p>The language code you selected for your medical vocabulary. US English
   *             (<code>en-US</code>) is the only language supported with Amazon Transcribe Medical.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The date and time the specified custom medical vocabulary was last updated.</p>
   *         <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents 12:32 PM UTC-7
   *             on May 4, 2022.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The processing state of your custom medical vocabulary. If the state is
   *             <code>READY</code>, you can use the vocabulary in a
   *             <code>StartMedicalTranscriptionJob</code> request.</p>
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
   * <p>The name of the custom vocabulary you want to update. Vocabulary names are
   *             case sensitive.</p>
   */
  VocabularyName: string | undefined;

  /**
   * <p>The language code that represents the language of the entries in the custom vocabulary
   *             you want to update. Each vocabulary must contain terms in only one language.</p>
   *         <p>A custom vocabulary can only be used to transcribe files in the same language as the
   *             vocabulary. For example, if you create a vocabulary using US English (<code>en-US</code>),
   *             you can only apply this vocabulary to files that contain English audio.</p>
   *         <p>For a list of supported languages and their associated language codes, refer to the
   *             <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported
   *                 languages</a> table.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>Use this parameter if you want to update your vocabulary by including all desired terms, as
   *             comma-separated values, within your request. The other option for updating your vocabulary is to
   *             save your entries in a text file and upload them to an Amazon S3 bucket, then specify
   *             the location of your file using the <code>VocabularyFileUri</code> parameter.</p>
   *         <p>Note that if you include <code>Phrases</code> in your request, you cannot use
   *             <code>VocabularyFileUri</code>; you must choose one or the other.</p>
   *         <p>Each language has a character set that contains all allowed characters for that specific
   *             language. If you use unsupported characters, your vocabulary filter request fails. Refer to
   *             <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for
   *                 Custom Vocabularies</a> to get the character set for your language.</p>
   */
  Phrases?: string[];

  /**
   * <p>The Amazon S3 location of the text file that contains your custom vocabulary. The
   *             URI must be located in the same Amazon Web Services Region as the resource you're
   *             calling.</p>
   *         <p>Here's an example URI path:
   *             <code>s3://DOC-EXAMPLE-BUCKET/my-vocab-file.txt</code>
   *          </p>
   *         <p>Note that if you include <code>VocabularyFileUri</code> in your request, you
   *             cannot use the <code>Phrases</code> flag; you must choose one or the other.</p>
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
   * <p>The name of the updated custom vocabulary.</p>
   */
  VocabularyName?: string;

  /**
   * <p>The language code you selected for your custom vocabulary.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The date and time the specified vocabulary was last updated.</p>
   *         <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents 12:32 PM UTC-7
   *             on May 4, 2022.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The processing state of your custom vocabulary. If the state is <code>READY</code>, you
   *             can use the vocabulary in a <code>StartTranscriptionJob</code> request.</p>
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
   * <p>The name of the custom vocabulary filter you want to update. Vocabulary filter names
   *             are case sensitive.</p>
   */
  VocabularyFilterName: string | undefined;

  /**
   * <p>Use this parameter if you want to update your vocabulary filter by including all desired terms,
   *             as comma-separated values, within your request. The other option for updating your vocabulary
   *             filter is to save your entries in a text file and upload them to an Amazon S3 bucket, then
   *             specify the location of your file using the <code>VocabularyFilterFileUri</code>
   *             parameter.</p>
   *         <p>Note that if you include <code>Words</code> in your request, you cannot use
   *             <code>VocabularyFilterFileUri</code>; you must choose one or the other.</p>
   *         <p>Each language has a character set that contains all allowed characters for that specific
   *             language. If you use unsupported characters, your vocabulary filter request fails. Refer to
   *             <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for
   *                 Custom Vocabularies</a> to get the character set for your language.</p>
   */
  Words?: string[];

  /**
   * <p>The Amazon S3 location of the text file that contains your custom vocabulary filter
   *             terms. The URI must be located in the same Amazon Web Services Region as the resource you're
   *             calling.</p>
   *         <p>Here's an example URI path:
   *             <code>s3://DOC-EXAMPLE-BUCKET/my-vocab-filter-file.txt</code>
   *          </p>
   *         <p>Note that if you include <code>VocabularyFilterFileUri</code> in your request, you
   *             cannot use <code>Words</code>; you must choose one or the other.</p>
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
   * <p>The name of the updated custom vocabulary filter.</p>
   */
  VocabularyFilterName?: string;

  /**
   * <p>The language code you selected for your vocabulary filter.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The date and time the specified vocabulary filter was last updated.</p>
   *         <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents 12:32 PM UTC-7
   *             on May 4, 2022.</p>
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
