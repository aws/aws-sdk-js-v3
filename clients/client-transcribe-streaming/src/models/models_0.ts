// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { TranscribeStreamingServiceException as __BaseException } from "./TranscribeStreamingServiceException";

/**
 * <p>Contains entities identified as personally identifiable information (PII) in your
 *       transcription output, along with various associated attributes. Examples include category,
 *       confidence score, type, stability score, and start and end times.</p>
 */
export interface Entity {
  /**
   * <p>The start time, in milliseconds, of the utterance that was identified as PII.</p>
   */
  StartTime?: number;

  /**
   * <p>The end time, in milliseconds, of the utterance that was identified as PII.</p>
   */
  EndTime?: number;

  /**
   * <p>The category of information identified. The only category is <code>PII</code>.</p>
   */
  Category?: string;

  /**
   * <p>The type of PII identified. For example, <code>NAME</code> or
   *       <code>CREDIT_DEBIT_NUMBER</code>.</p>
   */
  Type?: string;

  /**
   * <p>The word or words identified as PII.</p>
   */
  Content?: string;

  /**
   * <p>The confidence score associated with the identified PII entity in your audio.</p>
   *          <p>Confidence scores are values between 0 and 1. A larger value indicates a higher
   *       probability that the identified entity correctly matches the entity spoken in your
   *       media.</p>
   */
  Confidence?: number;
}

export enum ItemType {
  PRONUNCIATION = "pronunciation",
  PUNCTUATION = "punctuation",
}

/**
 * <p>A word, phrase, or punctuation mark in your transcription output, along with various associated
 *       attributes, such as confidence score, type, and start and end times.</p>
 */
export interface Item {
  /**
   * <p>The start time, in milliseconds, of the transcribed item.</p>
   */
  StartTime?: number;

  /**
   * <p>The end time, in milliseconds, of the transcribed item.</p>
   */
  EndTime?: number;

  /**
   * <p>The type of item identified. Options are: <code>PRONUNCIATION</code> (spoken words) and
   *       <code>PUNCTUATION</code>.</p>
   */
  Type?: ItemType | string;

  /**
   * <p>The word or punctuation that was transcribed.</p>
   */
  Content?: string;

  /**
   * <p>Indicates whether the specified item matches a word in the vocabulary filter included in
   *       your request. If <code>true</code>, there is a vocabulary filter match.</p>
   */
  VocabularyFilterMatch?: boolean;

  /**
   * <p>If speaker partitioning is enabled, <code>Speaker</code> labels the speaker of the
   *       specified item.</p>
   */
  Speaker?: string;

  /**
   * <p>The confidence score associated with a word or phrase in your transcript.</p>
   *          <p>Confidence scores are values between 0 and 1. A larger value indicates a higher
   *       probability that the identified item correctly matches the item spoken in your media.</p>
   */
  Confidence?: number;

  /**
   * <p>If partial result stabilization is enabled, <code>Stable</code> indicates whether the specified
   *       item is stable (<code>true</code>) or if it may change when the segment is complete
   *       (<code>false</code>).</p>
   */
  Stable?: boolean;
}

/**
 * <p>A list of possible alternative transcriptions for the input audio. Each alternative may contain
 *       one or more of <code>Items</code>, <code>Entities</code>, or <code>Transcript</code>.</p>
 */
export interface Alternative {
  /**
   * <p>Contains transcribed text.</p>
   */
  Transcript?: string;

  /**
   * <p>Contains words, phrases, or punctuation marks in your transcription output.</p>
   */
  Items?: Item[];

  /**
   * <p>Contains entities identified as personally identifiable information (PII) in your transcription
   *       output.</p>
   */
  Entities?: Entity[];
}

/**
 * <p>A wrapper for your audio chunks. Your audio stream consists of one or more audio
 *       events, which consist of one or more audio chunks.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/event-stream.html">Event stream encoding</a>.</p>
 */
export interface AudioEvent {
  /**
   * <p>An audio blob that contains the next part of the audio that you want to transcribe. The
   *       maximum audio chunk size is 32 KB.</p>
   */
  AudioChunk?: Uint8Array;
}

export enum ParticipantRole {
  AGENT = "AGENT",
  CUSTOMER = "CUSTOMER",
}

/**
 * <p>Makes it possible to specify which speaker is on which audio channel. For example, if your
 *       agent is the first participant to speak, you would set <code>ChannelId</code> to
 *       <code>0</code> (to indicate the first channel) and <code>ParticipantRole</code> to
 *       <code>AGENT</code> (to indicate that it's the agent speaking).</p>
 */
export interface ChannelDefinition {
  /**
   * <p>Specify the audio channel you want to define.</p>
   */
  ChannelId: number | undefined;

  /**
   * <p>Specify the speaker you want to define. Omitting this parameter is equivalent to
   *       specifying both participants.</p>
   */
  ParticipantRole: ParticipantRole | string | undefined;
}

export enum ContentRedactionOutput {
  REDACTED = "redacted",
  REDACTED_AND_UNREDACTED = "redacted_and_unredacted",
}

/**
 * <p>Allows you to specify additional settings for your streaming Call Analytics
 *       post-call request, including output locations for your redacted and unredacted
 *       transcript, which IAM role to use, and, optionally, which encryption key to
 *       use.</p>
 *          <p>
 *             <code>ContentRedactionOutput</code>, <code>DataAccessRoleArn</code>, and
 *       <code>OutputLocation</code> are required fields.</p>
 */
export interface PostCallAnalyticsSettings {
  /**
   * <p>The Amazon S3 location where you want your Call Analytics post-call
   *       transcription output stored. You can use any of the following formats to specify the output
   *       location:</p>
   *          <ol>
   *             <li>
   *                <p>s3://DOC-EXAMPLE-BUCKET</p>
   *             </li>
   *             <li>
   *                <p>s3://DOC-EXAMPLE-BUCKET/my-output-folder/</p>
   *             </li>
   *             <li>
   *                <p>s3://DOC-EXAMPLE-BUCKET/my-output-folder/my-call-analytics-job.json</p>
   *             </li>
   *          </ol>
   */
  OutputLocation: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that has permissions to
   *       access the Amazon S3 bucket that contains your input files. If the role that you
   *       specify doesn’t have the appropriate permissions to access the specified Amazon S3
   *       location, your request fails.</p>
   *          <p>IAM role ARNs have the format
   *       <code>arn:partition:iam::account:role/role-name-with-path</code>. For example:
   *       <code>arn:aws:iam::111122223333:role/Admin</code>. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns">IAM
   *         ARNs</a>.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>Specify whether you want only a redacted transcript or both a redacted and an unredacted
   *       transcript. If you choose redacted and unredacted, two JSON files are generated and stored in the
   *       Amazon S3 output location you specify.</p>
   *          <p>Note that to include <code>ContentRedactionOutput</code> in your request, you must
   *       enable content redaction (<code>ContentRedactionType</code>).</p>
   */
  ContentRedactionOutput?: ContentRedactionOutput | string;

  /**
   * <p>The KMS key you want to use to encrypt your Call Analytics post-call
   *       output.</p>
   *          <p>If using a key located in the <b>current</b>
   *       Amazon Web Services account, you can specify your KMS key in one of four
   *       ways:</p>
   *          <ol>
   *             <li>
   *                <p>Use the KMS key ID itself. For example,
   *           <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   *             </li>
   *             <li>
   *                <p>Use an alias for the KMS key ID. For example,
   *           <code>alias/ExampleAlias</code>.</p>
   *             </li>
   *             <li>
   *                <p>Use the Amazon Resource Name (ARN) for the KMS key ID. For
   *           example,
   *           <code>arn:aws:kms:region:account-ID:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   *             </li>
   *             <li>
   *                <p>Use the ARN for the KMS key alias. For example,
   *           <code>arn:aws:kms:region:account-ID:alias/ExampleAlias</code>.</p>
   *             </li>
   *          </ol>
   *          <p>If using a key located in a <b>different</b>
   *       Amazon Web Services account than the current Amazon Web Services account, you can specify
   *       your KMS key in one of two ways:</p>
   *          <ol>
   *             <li>
   *                <p>Use the ARN for the KMS key ID. For example,
   *           <code>arn:aws:kms:region:account-ID:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   *             </li>
   *             <li>
   *                <p>Use the ARN for the KMS key alias. For example,
   *           <code>arn:aws:kms:region:account-ID:alias/ExampleAlias</code>.</p>
   *             </li>
   *          </ol>
   *          <p>Note that the user making the  request must
   *       have permission to use the specified KMS key.</p>
   */
  OutputEncryptionKMSKeyId?: string;
}

/**
 * <p>Allows you to set audio channel definitions and post-call analytics settings.</p>
 */
export interface ConfigurationEvent {
  /**
   * <p>Indicates which speaker is on which audio channel.</p>
   */
  ChannelDefinitions?: ChannelDefinition[];

  /**
   * <p>Provides additional optional settings for your Call Analytics post-call request, including
   *       encryption and output locations for your redacted and unredacted transcript.</p>
   */
  PostCallAnalyticsSettings?: PostCallAnalyticsSettings;
}

/**
 * <p>An encoded stream of audio blobs. Audio streams are encoded as either HTTP/2 or WebSocket
 *       data frames.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html">Transcribing streaming audio</a>.</p>
 */
export type AudioStream =
  | AudioStream.AudioEventMember
  | AudioStream.ConfigurationEventMember
  | AudioStream.$UnknownMember;

export namespace AudioStream {
  /**
   * <p>A blob of audio from your application. Your audio stream consists of one or more audio
   *       events.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/event-stream.html">Event stream encoding</a>.</p>
   */
  export interface AudioEventMember {
    AudioEvent: AudioEvent;
    ConfigurationEvent?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains audio channel definitions and post-call analytics settings.</p>
   */
  export interface ConfigurationEventMember {
    AudioEvent?: never;
    ConfigurationEvent: ConfigurationEvent;
    $unknown?: never;
  }

  export interface $UnknownMember {
    AudioEvent?: never;
    ConfigurationEvent?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    AudioEvent: (value: AudioEvent) => T;
    ConfigurationEvent: (value: ConfigurationEvent) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AudioStream, visitor: Visitor<T>): T => {
    if (value.AudioEvent !== undefined) return visitor.AudioEvent(value.AudioEvent);
    if (value.ConfigurationEvent !== undefined) return visitor.ConfigurationEvent(value.ConfigurationEvent);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>One or more arguments to the <code>StartStreamTranscription</code>,
 *       <code>StartMedicalStreamTranscription</code>, or <code>StartCallAnalyticsStreamTranscription</code>
 *       operation was not valid. For example, <code>MediaEncoding</code> or <code>LanguageCode</code>
 *       used not valid values. Check the specified parameters and try your request again.</p>
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

/**
 * <p>Contains entities identified as personally identifiable information (PII) in your
 *       transcription output, along with various associated attributes. Examples include category,
 *       confidence score, content, type, and start and end times.</p>
 */
export interface CallAnalyticsEntity {
  /**
   * <p>The time, in milliseconds, from the beginning of the audio stream to the start of the identified entity.</p>
   */
  BeginOffsetMillis?: number;

  /**
   * <p>The time, in milliseconds, from the beginning of the audio stream to the end of the identified entity.</p>
   */
  EndOffsetMillis?: number;

  /**
   * <p>The category of information identified. For example, <code>PII</code>.</p>
   */
  Category?: string;

  /**
   * <p>The type of PII identified. For example, <code>NAME</code> or
   *       <code>CREDIT_DEBIT_NUMBER</code>.</p>
   */
  Type?: string;

  /**
   * <p>The word or words that represent the identified entity.</p>
   */
  Content?: string;

  /**
   * <p>The confidence score associated with the identification of an entity in your transcript.</p>
   *          <p>Confidence scores are values between 0 and 1. A larger value indicates a higher
   *       probability that the identified entity correctly matches the entity spoken in your
   *       media.</p>
   */
  Confidence?: number;
}

/**
 * <p>A word, phrase, or punctuation mark in your Call Analytics transcription output, along with various
 *       associated attributes, such as confidence score, type, and start and end times.</p>
 */
export interface CallAnalyticsItem {
  /**
   * <p>The time, in milliseconds, from the beginning of the audio stream to the start of the identified item.</p>
   */
  BeginOffsetMillis?: number;

  /**
   * <p>The time, in milliseconds, from the beginning of the audio stream to the end of the identified item.</p>
   */
  EndOffsetMillis?: number;

  /**
   * <p>The type of item identified. Options are: <code>PRONUNCIATION</code> (spoken words) and
   *       <code>PUNCTUATION</code>.</p>
   */
  Type?: ItemType | string;

  /**
   * <p>The word or punctuation that was transcribed.</p>
   */
  Content?: string;

  /**
   * <p>The confidence score associated with a word or phrase in your transcript.</p>
   *          <p>Confidence scores are values between 0 and 1. A larger value indicates a higher
   *       probability that the identified item correctly matches the item spoken in your media.</p>
   */
  Confidence?: number;

  /**
   * <p>Indicates whether the specified item matches a word in the vocabulary filter included in
   *       your Call Analytics request. If <code>true</code>, there is a vocabulary filter match.</p>
   */
  VocabularyFilterMatch?: boolean;

  /**
   * <p>If partial result stabilization is enabled, <code>Stable</code> indicates whether the specified
   *       item is stable (<code>true</code>) or if it may change when the segment is complete
   *       (<code>false</code>).</p>
   */
  Stable?: boolean;
}

export enum CallAnalyticsLanguageCode {
  DE_DE = "de-DE",
  EN_AU = "en-AU",
  EN_GB = "en-GB",
  EN_US = "en-US",
  ES_US = "es-US",
  FR_CA = "fr-CA",
  FR_FR = "fr-FR",
  IT_IT = "it-IT",
  PT_BR = "pt-BR",
}

/**
 * <p>Contains the timestamp range (start time through end time) of a matched category.</p>
 */
export interface TimestampRange {
  /**
   * <p>The time, in milliseconds, from the beginning of the audio stream to the start of the category
   *       match.</p>
   */
  BeginOffsetMillis?: number;

  /**
   * <p>The time, in milliseconds, from the beginning of the audio stream to the end of the category
   *       match.</p>
   */
  EndOffsetMillis?: number;
}

/**
 * <p>Contains the timestamps of matched categories.</p>
 */
export interface PointsOfInterest {
  /**
   * <p>Contains the timestamp ranges (start time through end time) of matched categories and rules.</p>
   */
  TimestampRanges?: TimestampRange[];
}

/**
 * <p>Provides information on any <code>TranscriptFilterType</code> categories that matched your
 *       transcription output. Matches are identified for each segment upon completion of that segment.</p>
 */
export interface CategoryEvent {
  /**
   * <p>Lists the categories that were matched in your audio segment.</p>
   */
  MatchedCategories?: string[];

  /**
   * <p>Contains information about the matched categories, including category names and timestamps.</p>
   */
  MatchedDetails?: Record<string, PointsOfInterest>;
}

/**
 * <p>A new stream started with the same session ID. The current stream has been terminated.</p>
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

/**
 * <p>A problem occurred while processing the audio. Amazon Transcribe terminated
 *       processing.</p>
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
 * <p>Your client has exceeded one of the Amazon Transcribe limits. This is typically the audio length
 *       limit. Break your audio stream into smaller chunks and try your request again.</p>
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
 * <p>The service is currently unavailable. Try your request later.</p>
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>Provides the location, using character count, in your transcript where a match is identified. For example,
 *       the location of an issue or a category match within a segment.</p>
 */
export interface CharacterOffsets {
  /**
   * <p>Provides the character count of the first character where a match is identified. For example, the first
   *       character associated with an issue or a category match in a segment transcript.</p>
   */
  Begin?: number;

  /**
   * <p>Provides the character count of the last character where a match is identified. For example, the last
   *       character associated with an issue or a category match in a segment transcript.</p>
   */
  End?: number;
}

/**
 * <p>Lists the issues that were identified in your audio segment.</p>
 */
export interface IssueDetected {
  /**
   * <p>Provides the timestamps that identify when in an audio segment the specified issue occurs.</p>
   */
  CharacterOffsets?: CharacterOffsets;
}

export enum Sentiment {
  MIXED = "MIXED",
  NEGATIVE = "NEGATIVE",
  NEUTRAL = "NEUTRAL",
  POSITIVE = "POSITIVE",
}

/**
 * <p>Contains set of transcription results from one or more audio segments, along with additional
 *       information about the parameters included in your request. For example, channel definitions, partial result
 *       stabilization, sentiment, and issue detection.</p>
 */
export interface UtteranceEvent {
  /**
   * <p>The unique identifier that is associated with the specified <code>UtteranceEvent</code>.</p>
   */
  UtteranceId?: string;

  /**
   * <p>Indicates whether the segment in the <code>UtteranceEvent</code> is complete
   *       (<code>FALSE</code>) or partial (<code>TRUE</code>).</p>
   */
  IsPartial?: boolean;

  /**
   * <p>Provides the role of the speaker for each audio channel, either <code>CUSTOMER</code> or
   *       <code>AGENT</code>.</p>
   */
  ParticipantRole?: ParticipantRole | string;

  /**
   * <p>The time, in milliseconds, from the beginning of the audio stream to the start of the
   *       <code>UtteranceEvent</code>.</p>
   */
  BeginOffsetMillis?: number;

  /**
   * <p>The time, in milliseconds, from the beginning of the audio stream to the start of the
   *       <code>UtteranceEvent</code>.</p>
   */
  EndOffsetMillis?: number;

  /**
   * <p>Contains transcribed text.</p>
   */
  Transcript?: string;

  /**
   * <p>Contains words, phrases, or punctuation marks that are associated with the specified
   *       <code>UtteranceEvent</code>.</p>
   */
  Items?: CallAnalyticsItem[];

  /**
   * <p>Contains entities identified as personally identifiable information (PII) in your transcription
   *       output.</p>
   */
  Entities?: CallAnalyticsEntity[];

  /**
   * <p>Provides the sentiment that was detected in the specified segment.</p>
   */
  Sentiment?: Sentiment | string;

  /**
   * <p>Provides the issue that was detected in the specified segment.</p>
   */
  IssuesDetected?: IssueDetected[];
}

/**
 * <p>Contains detailed information about your Call Analytics streaming session. These details are
 *       provided in the <code>UtteranceEvent</code> and <code>CategoryEvent</code> objects.</p>
 */
export type CallAnalyticsTranscriptResultStream =
  | CallAnalyticsTranscriptResultStream.BadRequestExceptionMember
  | CallAnalyticsTranscriptResultStream.CategoryEventMember
  | CallAnalyticsTranscriptResultStream.ConflictExceptionMember
  | CallAnalyticsTranscriptResultStream.InternalFailureExceptionMember
  | CallAnalyticsTranscriptResultStream.LimitExceededExceptionMember
  | CallAnalyticsTranscriptResultStream.ServiceUnavailableExceptionMember
  | CallAnalyticsTranscriptResultStream.UtteranceEventMember
  | CallAnalyticsTranscriptResultStream.$UnknownMember;

export namespace CallAnalyticsTranscriptResultStream {
  /**
   * <p>Contains set of transcription results from one or more audio segments, along with additional
   *       information per your request parameters. This can include information relating to channel definitions,
   *       partial result stabilization, sentiment, issue detection, and other transcription-related data.</p>
   */
  export interface UtteranceEventMember {
    UtteranceEvent: UtteranceEvent;
    CategoryEvent?: never;
    BadRequestException?: never;
    LimitExceededException?: never;
    InternalFailureException?: never;
    ConflictException?: never;
    ServiceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * <p>Provides information on matched categories that were used to generate real-time supervisor
   *       alerts.</p>
   */
  export interface CategoryEventMember {
    UtteranceEvent?: never;
    CategoryEvent: CategoryEvent;
    BadRequestException?: never;
    LimitExceededException?: never;
    InternalFailureException?: never;
    ConflictException?: never;
    ServiceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * <p>One or more arguments to the <code>StartStreamTranscription</code>,
   *       <code>StartMedicalStreamTranscription</code>, or <code>StartCallAnalyticsStreamTranscription</code>
   *       operation was not valid. For example, <code>MediaEncoding</code> or <code>LanguageCode</code>
   *       used not valid values. Check the specified parameters and try your request again.</p>
   */
  export interface BadRequestExceptionMember {
    UtteranceEvent?: never;
    CategoryEvent?: never;
    BadRequestException: BadRequestException;
    LimitExceededException?: never;
    InternalFailureException?: never;
    ConflictException?: never;
    ServiceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * <p>Your client has exceeded one of the Amazon Transcribe limits. This is typically the audio length
   *       limit. Break your audio stream into smaller chunks and try your request again.</p>
   */
  export interface LimitExceededExceptionMember {
    UtteranceEvent?: never;
    CategoryEvent?: never;
    BadRequestException?: never;
    LimitExceededException: LimitExceededException;
    InternalFailureException?: never;
    ConflictException?: never;
    ServiceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * <p>A problem occurred while processing the audio. Amazon Transcribe terminated
   *       processing.</p>
   */
  export interface InternalFailureExceptionMember {
    UtteranceEvent?: never;
    CategoryEvent?: never;
    BadRequestException?: never;
    LimitExceededException?: never;
    InternalFailureException: InternalFailureException;
    ConflictException?: never;
    ServiceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * <p>A new stream started with the same session ID. The current stream has been terminated.</p>
   */
  export interface ConflictExceptionMember {
    UtteranceEvent?: never;
    CategoryEvent?: never;
    BadRequestException?: never;
    LimitExceededException?: never;
    InternalFailureException?: never;
    ConflictException: ConflictException;
    ServiceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * <p>The service is currently unavailable. Try your request later.</p>
   */
  export interface ServiceUnavailableExceptionMember {
    UtteranceEvent?: never;
    CategoryEvent?: never;
    BadRequestException?: never;
    LimitExceededException?: never;
    InternalFailureException?: never;
    ConflictException?: never;
    ServiceUnavailableException: ServiceUnavailableException;
    $unknown?: never;
  }

  export interface $UnknownMember {
    UtteranceEvent?: never;
    CategoryEvent?: never;
    BadRequestException?: never;
    LimitExceededException?: never;
    InternalFailureException?: never;
    ConflictException?: never;
    ServiceUnavailableException?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    UtteranceEvent: (value: UtteranceEvent) => T;
    CategoryEvent: (value: CategoryEvent) => T;
    BadRequestException: (value: BadRequestException) => T;
    LimitExceededException: (value: LimitExceededException) => T;
    InternalFailureException: (value: InternalFailureException) => T;
    ConflictException: (value: ConflictException) => T;
    ServiceUnavailableException: (value: ServiceUnavailableException) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: CallAnalyticsTranscriptResultStream, visitor: Visitor<T>): T => {
    if (value.UtteranceEvent !== undefined) return visitor.UtteranceEvent(value.UtteranceEvent);
    if (value.CategoryEvent !== undefined) return visitor.CategoryEvent(value.CategoryEvent);
    if (value.BadRequestException !== undefined) return visitor.BadRequestException(value.BadRequestException);
    if (value.LimitExceededException !== undefined) return visitor.LimitExceededException(value.LimitExceededException);
    if (value.InternalFailureException !== undefined)
      return visitor.InternalFailureException(value.InternalFailureException);
    if (value.ConflictException !== undefined) return visitor.ConflictException(value.ConflictException);
    if (value.ServiceUnavailableException !== undefined)
      return visitor.ServiceUnavailableException(value.ServiceUnavailableException);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

export enum ContentIdentificationType {
  PII = "PII",
}

export enum ContentRedactionType {
  PII = "PII",
}

export enum LanguageCode {
  DE_DE = "de-DE",
  EN_AU = "en-AU",
  EN_GB = "en-GB",
  EN_US = "en-US",
  ES_US = "es-US",
  FR_CA = "fr-CA",
  FR_FR = "fr-FR",
  HI_IN = "hi-IN",
  IT_IT = "it-IT",
  JA_JP = "ja-JP",
  KO_KR = "ko-KR",
  PT_BR = "pt-BR",
  TH_TH = "th-TH",
  ZH_CN = "zh-CN",
}

/**
 * <p>The language code that represents the language identified in your audio, including the associated
 *       confidence score. If you enabled channel identification in your request and each channel contained a
 *       different language, you will have more than one <code>LanguageWithScore</code> result.</p>
 */
export interface LanguageWithScore {
  /**
   * <p>The language code of the identified language.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The confidence score associated with the identified language code. Confidence scores are values
   *       between zero and one; larger values indicate a higher confidence in the identified language.</p>
   */
  Score?: number;
}

export enum MediaEncoding {
  FLAC = "flac",
  OGG_OPUS = "ogg-opus",
  PCM = "pcm",
}

/**
 * <p>Contains entities identified as personal health information (PHI) in your
 *             transcription output, along with various associated attributes. Examples include
 *             category, confidence score, type, stability score, and start and end times.</p>
 */
export interface MedicalEntity {
  /**
   * <p>The start time, in milliseconds, of the utterance that was identified as PHI.</p>
   */
  StartTime?: number;

  /**
   * <p>The end time, in milliseconds, of the utterance that was identified as PHI.</p>
   */
  EndTime?: number;

  /**
   * <p>The category of information identified. The only category is <code>PHI</code>.</p>
   */
  Category?: string;

  /**
   * <p>The word or words identified as PHI.</p>
   */
  Content?: string;

  /**
   * <p>The confidence score associated with the identified PHI entity in your audio.</p>
   *         <p>Confidence scores are values between 0 and 1. A larger value indicates a higher
   *             probability that the identified entity correctly matches the entity spoken in your
   *             media.</p>
   */
  Confidence?: number;
}

/**
 * <p>A word, phrase, or punctuation mark in your transcription output, along with various
 *             associated attributes, such as confidence score, type, and start and end times.</p>
 */
export interface MedicalItem {
  /**
   * <p>The start time, in milliseconds, of the transcribed item.</p>
   */
  StartTime?: number;

  /**
   * <p>The end time, in milliseconds, of the transcribed item.</p>
   */
  EndTime?: number;

  /**
   * <p>The type of item identified. Options are: <code>PRONUNCIATION</code> (spoken
   *             words) and <code>PUNCTUATION</code>.</p>
   */
  Type?: ItemType | string;

  /**
   * <p>The word or punctuation that was transcribed.</p>
   */
  Content?: string;

  /**
   * <p>The confidence score associated with a word or phrase in your transcript.</p>
   *         <p>Confidence scores are values between 0 and 1. A larger value indicates a higher
   *             probability that the identified item correctly matches the item spoken in your
   *             media.</p>
   */
  Confidence?: number;

  /**
   * <p>If speaker partitioning is enabled, <code>Speaker</code> labels the speaker of the
   *             specified item.</p>
   */
  Speaker?: string;
}

/**
 * <p>A list of possible alternative transcriptions for the input audio. Each alternative may
 *             contain one or more of <code>Items</code>, <code>Entities</code>, or
 *             <code>Transcript</code>.</p>
 */
export interface MedicalAlternative {
  /**
   * <p>Contains transcribed text.</p>
   */
  Transcript?: string;

  /**
   * <p>Contains words, phrases, or punctuation marks in your transcription output.</p>
   */
  Items?: MedicalItem[];

  /**
   * <p>Contains entities identified as personal health information (PHI) in your transcription
   *             output.</p>
   */
  Entities?: MedicalEntity[];
}

export enum MedicalContentIdentificationType {
  PHI = "PHI",
}

/**
 * <p>The <code>Result</code> associated with a
 *             <code></code>.</p>
 *         <p>Contains a set of transcription results from one or more audio segments, along with
 *             additional information per your request parameters. This can include information relating to
 *             alternative transcriptions, channel identification, partial result stabilization, language
 *             identification, and other transcription-related data.</p>
 */
export interface MedicalResult {
  /**
   * <p>Provides a unique identifier for the <code>Result</code>.</p>
   */
  ResultId?: string;

  /**
   * <p>The start time, in milliseconds, of the <code>Result</code>.</p>
   */
  StartTime?: number;

  /**
   * <p>The end time, in milliseconds, of the <code>Result</code>.</p>
   */
  EndTime?: number;

  /**
   * <p>Indicates if the segment is complete.</p>
   *         <p>If <code>IsPartial</code> is <code>true</code>, the segment is not complete. If
   *                 <code>IsPartial</code> is <code>false</code>, the segment is complete.</p>
   */
  IsPartial?: boolean;

  /**
   * <p>A list of possible alternative transcriptions for the input audio. Each alternative may
   *             contain one or more of <code>Items</code>, <code>Entities</code>, or
   *             <code>Transcript</code>.</p>
   */
  Alternatives?: MedicalAlternative[];

  /**
   * <p>Indicates the channel identified for the <code>Result</code>.</p>
   */
  ChannelId?: string;
}

/**
 * <p>The <code>MedicalTranscript</code> associated with a
 *             <code></code>.</p>
 *         <p>
 *             <code>MedicalTranscript</code> contains <code>Results</code>, which contains a set of
 *             transcription results from one or more audio segments, along with additional information per your
 *             request parameters.</p>
 */
export interface MedicalTranscript {
  /**
   * <p>Contains a set of transcription results from one or more audio segments, along with
   *             additional information per your request parameters. This can include information relating to
   *             alternative transcriptions, channel identification, partial result stabilization, language
   *             identification, and other transcription-related data.</p>
   */
  Results?: MedicalResult[];
}

/**
 * <p>The <code>MedicalTranscriptEvent</code> associated with a
 *             <code>MedicalTranscriptResultStream</code>.</p>
 *         <p>Contains a set of transcription results from one or more audio segments, along with additional
 *             information per your request parameters.</p>
 */
export interface MedicalTranscriptEvent {
  /**
   * <p>Contains <code>Results</code>, which contains a set of transcription results from one or
   *             more audio segments, along with additional information per your request parameters. This can
   *             include information relating to alternative transcriptions, channel identification, partial result
   *             stabilization, language identification, and other transcription-related data.</p>
   */
  Transcript?: MedicalTranscript;
}

/**
 * <p>Contains detailed information about your streaming session.</p>
 */
export type MedicalTranscriptResultStream =
  | MedicalTranscriptResultStream.BadRequestExceptionMember
  | MedicalTranscriptResultStream.ConflictExceptionMember
  | MedicalTranscriptResultStream.InternalFailureExceptionMember
  | MedicalTranscriptResultStream.LimitExceededExceptionMember
  | MedicalTranscriptResultStream.ServiceUnavailableExceptionMember
  | MedicalTranscriptResultStream.TranscriptEventMember
  | MedicalTranscriptResultStream.$UnknownMember;

export namespace MedicalTranscriptResultStream {
  /**
   * <p>The <code>MedicalTranscriptEvent</code> associated with a
   *             <code>MedicalTranscriptResultStream</code>.</p>
   *         <p>Contains a set of transcription results from one or more audio segments, along with
   *             additional information per your request parameters. This can include information relating to
   *             alternative transcriptions, channel identification, partial result stabilization, language
   *             identification, and other transcription-related data.</p>
   */
  export interface TranscriptEventMember {
    TranscriptEvent: MedicalTranscriptEvent;
    BadRequestException?: never;
    LimitExceededException?: never;
    InternalFailureException?: never;
    ConflictException?: never;
    ServiceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * <p>One or more arguments to the <code>StartStreamTranscription</code>,
   *       <code>StartMedicalStreamTranscription</code>, or <code>StartCallAnalyticsStreamTranscription</code>
   *       operation was not valid. For example, <code>MediaEncoding</code> or <code>LanguageCode</code>
   *       used not valid values. Check the specified parameters and try your request again.</p>
   */
  export interface BadRequestExceptionMember {
    TranscriptEvent?: never;
    BadRequestException: BadRequestException;
    LimitExceededException?: never;
    InternalFailureException?: never;
    ConflictException?: never;
    ServiceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * <p>Your client has exceeded one of the Amazon Transcribe limits. This is typically the audio length
   *       limit. Break your audio stream into smaller chunks and try your request again.</p>
   */
  export interface LimitExceededExceptionMember {
    TranscriptEvent?: never;
    BadRequestException?: never;
    LimitExceededException: LimitExceededException;
    InternalFailureException?: never;
    ConflictException?: never;
    ServiceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * <p>A problem occurred while processing the audio. Amazon Transcribe terminated
   *       processing.</p>
   */
  export interface InternalFailureExceptionMember {
    TranscriptEvent?: never;
    BadRequestException?: never;
    LimitExceededException?: never;
    InternalFailureException: InternalFailureException;
    ConflictException?: never;
    ServiceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * <p>A new stream started with the same session ID. The current stream has been terminated.</p>
   */
  export interface ConflictExceptionMember {
    TranscriptEvent?: never;
    BadRequestException?: never;
    LimitExceededException?: never;
    InternalFailureException?: never;
    ConflictException: ConflictException;
    ServiceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * <p>The service is currently unavailable. Try your request later.</p>
   */
  export interface ServiceUnavailableExceptionMember {
    TranscriptEvent?: never;
    BadRequestException?: never;
    LimitExceededException?: never;
    InternalFailureException?: never;
    ConflictException?: never;
    ServiceUnavailableException: ServiceUnavailableException;
    $unknown?: never;
  }

  export interface $UnknownMember {
    TranscriptEvent?: never;
    BadRequestException?: never;
    LimitExceededException?: never;
    InternalFailureException?: never;
    ConflictException?: never;
    ServiceUnavailableException?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    TranscriptEvent: (value: MedicalTranscriptEvent) => T;
    BadRequestException: (value: BadRequestException) => T;
    LimitExceededException: (value: LimitExceededException) => T;
    InternalFailureException: (value: InternalFailureException) => T;
    ConflictException: (value: ConflictException) => T;
    ServiceUnavailableException: (value: ServiceUnavailableException) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: MedicalTranscriptResultStream, visitor: Visitor<T>): T => {
    if (value.TranscriptEvent !== undefined) return visitor.TranscriptEvent(value.TranscriptEvent);
    if (value.BadRequestException !== undefined) return visitor.BadRequestException(value.BadRequestException);
    if (value.LimitExceededException !== undefined) return visitor.LimitExceededException(value.LimitExceededException);
    if (value.InternalFailureException !== undefined)
      return visitor.InternalFailureException(value.InternalFailureException);
    if (value.ConflictException !== undefined) return visitor.ConflictException(value.ConflictException);
    if (value.ServiceUnavailableException !== undefined)
      return visitor.ServiceUnavailableException(value.ServiceUnavailableException);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

export enum PartialResultsStability {
  HIGH = "high",
  LOW = "low",
  MEDIUM = "medium",
}

/**
 * <p>The <code>Result</code> associated with a
 *       <code></code>.</p>
 *          <p>Contains a set of transcription results from one or more audio segments, along with additional
 *       information per your request parameters. This can include information relating to alternative
 *       transcriptions, channel identification, partial result stabilization, language identification, and other
 *       transcription-related data.</p>
 */
export interface Result {
  /**
   * <p>Provides a unique identifier for the <code>Result</code>.</p>
   */
  ResultId?: string;

  /**
   * <p>The start time, in milliseconds, of the <code>Result</code>.</p>
   */
  StartTime?: number;

  /**
   * <p>The end time, in milliseconds, of the <code>Result</code>.</p>
   */
  EndTime?: number;

  /**
   * <p>Indicates if the segment is complete.</p>
   *          <p>If <code>IsPartial</code> is <code>true</code>, the segment is not complete. If
   *         <code>IsPartial</code> is <code>false</code>, the segment is complete.</p>
   */
  IsPartial?: boolean;

  /**
   * <p>A list of possible alternative transcriptions for the input audio. Each alternative may contain
   *       one or more of <code>Items</code>, <code>Entities</code>, or <code>Transcript</code>.</p>
   */
  Alternatives?: Alternative[];

  /**
   * <p>Indicates which audio channel is associated with the <code>Result</code>.</p>
   */
  ChannelId?: string;

  /**
   * <p>The language code that represents the language spoken in your audio stream.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The language code of the dominant language identified in your stream.</p>
   *          <p>If you enabled channel identification and each channel of your audio contains a different language,
   *       you may have more than one result.</p>
   */
  LanguageIdentification?: LanguageWithScore[];
}

export enum Specialty {
  CARDIOLOGY = "CARDIOLOGY",
  NEUROLOGY = "NEUROLOGY",
  ONCOLOGY = "ONCOLOGY",
  PRIMARYCARE = "PRIMARYCARE",
  RADIOLOGY = "RADIOLOGY",
  UROLOGY = "UROLOGY",
}

export enum VocabularyFilterMethod {
  MASK = "mask",
  REMOVE = "remove",
  TAG = "tag",
}

export interface StartCallAnalyticsStreamTranscriptionRequest {
  /**
   * <p>Specify the language code that represents the language spoken in your audio.</p>
   *          <p>If you're unsure of the language spoken in your audio, consider using
   *       <code>IdentifyLanguage</code> to enable automatic language identification.</p>
   *          <p>For a list of languages supported with streaming Call Analytics, refer to the
   *       <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported
   *         languages</a> table.</p>
   */
  LanguageCode: CallAnalyticsLanguageCode | string | undefined;

  /**
   * <p>The sample rate of the input audio (in hertz). Low-quality audio, such as telephone audio,
   *       is typically around 8,000 Hz. High-quality audio typically ranges from 16,000 Hz to 48,000 Hz.
   *       Note that the sample rate you specify must match that of your audio.</p>
   */
  MediaSampleRateHertz: number | undefined;

  /**
   * <p>Specify the encoding of your input audio. Supported formats are:</p>
   *          <ul>
   *             <li>
   *                <p>FLAC</p>
   *             </li>
   *             <li>
   *                <p>OPUS-encoded audio in an Ogg container</p>
   *             </li>
   *             <li>
   *                <p>PCM (only signed 16-bit little-endian audio formats, which does not include WAV)</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-input.html#how-input-audio">Media formats</a>.</p>
   */
  MediaEncoding: MediaEncoding | string | undefined;

  /**
   * <p>Specify the name of the custom vocabulary that you want to use when processing your
   *       transcription. Note that vocabulary names are case sensitive.</p>
   *          <p>If the language of the specified custom vocabulary doesn't match the language identified in
   *       your media, the custom vocabulary is not applied to your transcription.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html">Custom vocabularies</a>.</p>
   */
  VocabularyName?: string;

  /**
   * <p>Specify a name for your Call Analytics transcription session. If you don't include this parameter
   *       in your request, Amazon Transcribe generates an ID and returns it in the response.</p>
   *          <p>You can use a session ID to retry a streaming session.</p>
   */
  SessionId?: string;

  /**
   * <p>An encoded stream of audio blobs. Audio streams are encoded as either HTTP/2 or WebSocket
   *       data frames.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html">Transcribing streaming audio</a>.</p>
   */
  AudioStream: AsyncIterable<AudioStream> | undefined;

  /**
   * <p>Specify the name of the custom vocabulary filter that you want to use when processing your
   *       transcription. Note that vocabulary filter names are case sensitive.</p>
   *          <p>If the language of the specified custom vocabulary filter doesn't match the language identified in
   *       your media, the vocabulary filter is not applied to your transcription.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/vocabulary-filtering.html">Using vocabulary filtering with unwanted
   *       words</a>.</p>
   */
  VocabularyFilterName?: string;

  /**
   * <p>Specify how you want your vocabulary filter applied to your transcript.</p>
   *          <p>To replace words with <code>***</code>, choose <code>mask</code>.</p>
   *          <p>To delete words, choose <code>remove</code>.</p>
   *          <p>To flag words without changing them, choose <code>tag</code>.</p>
   */
  VocabularyFilterMethod?: VocabularyFilterMethod | string;

  /**
   * <p>Specify the name of the custom language model that you want to use when processing your
   *       transcription. Note that language model names are case sensitive.</p>
   *          <p>The language of the specified language model must match the language code you specify
   *       in your transcription request. If the languages don't match, the custom language model isn't applied.
   *       There are no errors or warnings associated with a language mismatch.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-language-models.html">Custom language models</a>.</p>
   */
  LanguageModelName?: string;

  /**
   * <p>Enables partial result stabilization for your transcription. Partial result stabilization can reduce
   *       latency in your output, but may impact accuracy. For more information, see
   *       <a href="https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html#streaming-partial-result-stabilization">Partial-result
   *         stabilization</a>.</p>
   */
  EnablePartialResultsStabilization?: boolean;

  /**
   * <p>Specify the level of stability to use when you enable partial results stabilization
   *       (<code>EnablePartialResultsStabilization</code>).</p>
   *          <p>Low stability provides the highest accuracy. High stability transcribes faster, but with slightly
   *       lower accuracy.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html#streaming-partial-result-stabilization">Partial-result
   *       stabilization</a>.</p>
   */
  PartialResultsStability?: PartialResultsStability | string;

  /**
   * <p>Labels all personally identifiable information (PII) identified in your transcript.</p>
   *          <p>Content identification is performed at the segment level; PII specified in
   *       <code>PiiEntityTypes</code> is flagged upon complete transcription of an audio segment.</p>
   *          <p>You can’t set <code>ContentIdentificationType</code> and <code>ContentRedactionType</code>
   *       in the same request. If you set both, your request returns a
   *       <code>BadRequestException</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/pii-redaction.html">Redacting or identifying personally identifiable
   *       information</a>.</p>
   */
  ContentIdentificationType?: ContentIdentificationType | string;

  /**
   * <p>Redacts all personally identifiable information (PII) identified in your transcript.</p>
   *          <p>Content redaction is performed at the segment level; PII specified in
   *       <code>PiiEntityTypes</code> is redacted upon complete transcription of an audio segment.</p>
   *          <p>You can’t set <code>ContentRedactionType</code> and <code>ContentIdentificationType</code>
   *       in the same request. If you set both, your request returns a
   *       <code>BadRequestException</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/pii-redaction.html">Redacting or identifying personally identifiable
   *       information</a>.</p>
   */
  ContentRedactionType?: ContentRedactionType | string;

  /**
   * <p>Specify which types of personally identifiable information (PII) you want to redact in your
   *       transcript. You can include as many types as you'd like, or you can select
   *       <code>ALL</code>.</p>
   *          <p>To include <code>PiiEntityTypes</code> in your Call Analytics request, you must also include
   *       either <code>ContentIdentificationType</code> or <code>ContentRedactionType</code>.</p>
   *          <p>Values must be comma-separated and can include:
   *       <code>BANK_ACCOUNT_NUMBER</code>, <code>BANK_ROUTING</code>,
   *       <code>CREDIT_DEBIT_NUMBER</code>, <code>CREDIT_DEBIT_CVV</code>,
   *       <code>CREDIT_DEBIT_EXPIRY</code>, <code>PIN</code>, <code>EMAIL</code>,
   *       <code>ADDRESS</code>, <code>NAME</code>, <code>PHONE</code>,
   *       <code>SSN</code>, or <code>ALL</code>.</p>
   */
  PiiEntityTypes?: string;
}

export interface StartCallAnalyticsStreamTranscriptionResponse {
  /**
   * <p>Provides the identifier for your Call Analytics streaming request.</p>
   */
  RequestId?: string;

  /**
   * <p>Provides the language code that you specified in your Call Analytics request.</p>
   */
  LanguageCode?: CallAnalyticsLanguageCode | string;

  /**
   * <p>Provides the sample rate that you specified in your Call Analytics request.</p>
   */
  MediaSampleRateHertz?: number;

  /**
   * <p>Provides the media encoding you specified in your Call Analytics request.</p>
   */
  MediaEncoding?: MediaEncoding | string;

  /**
   * <p>Provides the name of the custom vocabulary that you specified in your Call Analytics request.</p>
   */
  VocabularyName?: string;

  /**
   * <p>Provides the identifier for your Call Analytics transcription session.</p>
   */
  SessionId?: string;

  /**
   * <p>Provides detailed information about your Call Analytics streaming session.</p>
   */
  CallAnalyticsTranscriptResultStream?: AsyncIterable<CallAnalyticsTranscriptResultStream>;

  /**
   * <p>Provides the name of the custom vocabulary filter that you specified in your Call Analytics
   *       request.</p>
   */
  VocabularyFilterName?: string;

  /**
   * <p>Provides the vocabulary filtering method used in your Call Analytics transcription.</p>
   */
  VocabularyFilterMethod?: VocabularyFilterMethod | string;

  /**
   * <p>Provides the name of the custom language model that you specified in your Call Analytics
   *       request.</p>
   */
  LanguageModelName?: string;

  /**
   * <p>Shows whether partial results stabilization was enabled for your Call Analytics transcription.</p>
   */
  EnablePartialResultsStabilization?: boolean;

  /**
   * <p>Provides the stabilization level used for your transcription.</p>
   */
  PartialResultsStability?: PartialResultsStability | string;

  /**
   * <p>Shows whether content identification was enabled for your Call Analytics transcription.</p>
   */
  ContentIdentificationType?: ContentIdentificationType | string;

  /**
   * <p>Shows whether content redaction was enabled for your Call Analytics transcription.</p>
   */
  ContentRedactionType?: ContentRedactionType | string;

  /**
   * <p>Lists the PII entity types you specified in your Call Analytics request.</p>
   */
  PiiEntityTypes?: string;
}

export enum Type {
  CONVERSATION = "CONVERSATION",
  DICTATION = "DICTATION",
}

export interface StartMedicalStreamTranscriptionRequest {
  /**
   * <p>Specify the language code that represents the language spoken in your audio.</p>
   *         <important>
   *             <p>Amazon Transcribe Medical only supports US English (<code>en-US</code>).</p>
   *         </important>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>The sample rate of the input audio (in hertz). Amazon Transcribe Medical supports a
   *             range from 16,000 Hz to 48,000 Hz. Note that the sample rate you specify must match that
   *             of your audio.</p>
   */
  MediaSampleRateHertz: number | undefined;

  /**
   * <p>Specify the encoding used for the input audio. Supported formats are:</p>
   *         <ul>
   *             <li>
   *                 <p>FLAC</p>
   *             </li>
   *             <li>
   *                 <p>OPUS-encoded audio in an Ogg container</p>
   *             </li>
   *             <li>
   *                 <p>PCM (only signed 16-bit little-endian audio formats, which does not include
   *                     WAV)</p>
   *             </li>
   *          </ul>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-input.html#how-input-audio">Media formats</a>.</p>
   */
  MediaEncoding: MediaEncoding | string | undefined;

  /**
   * <p>Specify the name of the custom vocabulary that you want to use when processing your
   *             transcription. Note that vocabulary names are case sensitive.</p>
   */
  VocabularyName?: string;

  /**
   * <p>Specify the medical specialty contained in your audio.</p>
   */
  Specialty: Specialty | string | undefined;

  /**
   * <p>Specify the type of input audio. For example, choose <code>DICTATION</code> for a
   *             provider dictating patient notes and <code>CONVERSATION</code> for a dialogue between a
   *             patient and a medical professional.</p>
   */
  Type: Type | string | undefined;

  /**
   * <p>Enables speaker partitioning (diarization) in your transcription output. Speaker
   *             partitioning labels the speech from individual speakers in your media file.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/diarization.html">Partitioning speakers (diarization)</a>.</p>
   */
  ShowSpeakerLabel?: boolean;

  /**
   * <p>Specify a name for your transcription session. If you don't include this parameter in
   *             your request, Amazon Transcribe Medical generates an ID and returns it in the
   *             response.</p>
   *         <p>You can use a session ID to retry a streaming session.</p>
   */
  SessionId?: string;

  /**
   * <p>An encoded stream of audio blobs. Audio streams are encoded as either HTTP/2 or WebSocket
   *       data frames.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html">Transcribing streaming audio</a>.</p>
   */
  AudioStream: AsyncIterable<AudioStream> | undefined;

  /**
   * <p>Enables channel identification in multi-channel audio.</p>
   *         <p>Channel identification transcribes the audio on each channel independently, then appends
   *             the output for each channel into one transcript.</p>
   *         <p>If you have multi-channel audio and do not enable channel identification, your audio is
   *             transcribed in a continuous manner and your transcript is not separated by channel.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/channel-id.html">Transcribing multi-channel audio</a>.</p>
   */
  EnableChannelIdentification?: boolean;

  /**
   * <p>Specify the number of channels in your audio stream. Up to two channels are
   *             supported.</p>
   */
  NumberOfChannels?: number;

  /**
   * <p>Labels all personal health information (PHI) identified in your transcript.</p>
   *         <p>Content identification is performed at the segment level; PHI is flagged upon complete
   *             transcription of an audio segment.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/phi-id.html">Identifying personal health information (PHI) in a
   *             transcription</a>.</p>
   */
  ContentIdentificationType?: MedicalContentIdentificationType | string;
}

export interface StartMedicalStreamTranscriptionResponse {
  /**
   * <p>Provides the identifier for your streaming request.</p>
   */
  RequestId?: string;

  /**
   * <p>Provides the language code that you specified in your request. This must be
   *                 <code>en-US</code>.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>Provides the sample rate that you specified in your request.</p>
   */
  MediaSampleRateHertz?: number;

  /**
   * <p>Provides the media encoding you specified in your request.</p>
   */
  MediaEncoding?: MediaEncoding | string;

  /**
   * <p>Provides the name of the custom vocabulary that you specified in your request.</p>
   */
  VocabularyName?: string;

  /**
   * <p>Provides the medical specialty that you specified in your request.</p>
   */
  Specialty?: Specialty | string;

  /**
   * <p>Provides the type of audio you specified in your request.</p>
   */
  Type?: Type | string;

  /**
   * <p>Shows whether speaker partitioning was enabled for your transcription.</p>
   */
  ShowSpeakerLabel?: boolean;

  /**
   * <p>Provides the identifier for your transcription session.</p>
   */
  SessionId?: string;

  /**
   * <p>Provides detailed information about your streaming session.</p>
   */
  TranscriptResultStream?: AsyncIterable<MedicalTranscriptResultStream>;

  /**
   * <p>Shows whether channel identification was enabled for your transcription.</p>
   */
  EnableChannelIdentification?: boolean;

  /**
   * <p>Provides the number of channels that you specified in your request.</p>
   */
  NumberOfChannels?: number;

  /**
   * <p>Shows whether content identification was enabled for your transcription.</p>
   */
  ContentIdentificationType?: MedicalContentIdentificationType | string;
}

export interface StartStreamTranscriptionRequest {
  /**
   * <p>Specify the language code that represents the language spoken in your audio.</p>
   *          <p>If you're unsure of the language spoken in your audio, consider using
   *       <code>IdentifyLanguage</code> to enable automatic language identification.</p>
   *          <p>For a list of languages supported with Amazon Transcribe streaming, refer to the
   *       <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported
   *         languages</a> table.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The sample rate of the input audio (in hertz). Low-quality audio, such as telephone audio,
   *       is typically around 8,000 Hz. High-quality audio typically ranges from 16,000 Hz to 48,000 Hz.
   *       Note that the sample rate you specify must match that of your audio.</p>
   */
  MediaSampleRateHertz: number | undefined;

  /**
   * <p>Specify the encoding of your input audio. Supported formats are:</p>
   *          <ul>
   *             <li>
   *                <p>FLAC</p>
   *             </li>
   *             <li>
   *                <p>OPUS-encoded audio in an Ogg container</p>
   *             </li>
   *             <li>
   *                <p>PCM (only signed 16-bit little-endian audio formats, which does not include WAV)</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-input.html#how-input-audio">Media formats</a>.</p>
   */
  MediaEncoding: MediaEncoding | string | undefined;

  /**
   * <p>Specify the name of the custom vocabulary that you want to use when processing your
   *       transcription. Note that vocabulary names are case sensitive.</p>
   *          <p>If the language of the specified custom vocabulary doesn't match the language identified in
   *       your media, the custom vocabulary is not applied to your transcription.</p>
   *          <important>
   *             <p>This parameter is <b>not</b> intended for use with the
   *           <code>IdentifyLanguage</code> parameter. If you're including <code>IdentifyLanguage</code>
   *         in your request and want to use one or more custom vocabularies with your transcription, use
   *         the <code>VocabularyNames</code> parameter instead.</p>
   *          </important>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html">Custom vocabularies</a>.</p>
   */
  VocabularyName?: string;

  /**
   * <p>Specify a name for your transcription session. If you don't include this parameter in your request,
   *       Amazon Transcribe generates an ID and returns it in the response.</p>
   *          <p>You can use a session ID to retry a streaming session.</p>
   */
  SessionId?: string;

  /**
   * <p>An encoded stream of audio blobs. Audio streams are encoded as either HTTP/2 or WebSocket
   *       data frames.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html">Transcribing streaming audio</a>.</p>
   */
  AudioStream: AsyncIterable<AudioStream> | undefined;

  /**
   * <p>Specify the name of the custom vocabulary filter that you want to use when processing your
   *       transcription. Note that vocabulary filter names are case sensitive.</p>
   *          <p>If the language of the specified custom vocabulary filter doesn't match the language identified in
   *       your media, the vocabulary filter is not applied to your transcription.</p>
   *          <important>
   *             <p>This parameter is <b>not</b> intended for use with the
   *           <code>IdentifyLanguage</code> parameter. If you're including <code>IdentifyLanguage</code>
   *         in your request and want to use one or more vocabulary filters with your transcription, use
   *         the <code>VocabularyFilterNames</code> parameter instead.</p>
   *          </important>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/vocabulary-filtering.html">Using vocabulary filtering with unwanted
   *       words</a>.</p>
   */
  VocabularyFilterName?: string;

  /**
   * <p>Specify how you want your vocabulary filter applied to your transcript.</p>
   *          <p>To replace words with <code>***</code>, choose <code>mask</code>.</p>
   *          <p>To delete words, choose <code>remove</code>.</p>
   *          <p>To flag words without changing them, choose <code>tag</code>.</p>
   */
  VocabularyFilterMethod?: VocabularyFilterMethod | string;

  /**
   * <p>Enables speaker partitioning (diarization) in your transcription output. Speaker partitioning
   *       labels the speech from individual speakers in your media file.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/diarization.html">Partitioning speakers (diarization)</a>.</p>
   */
  ShowSpeakerLabel?: boolean;

  /**
   * <p>Enables channel identification in multi-channel audio.</p>
   *          <p>Channel identification transcribes the audio on each channel independently, then appends the
   *       output for each channel into one transcript.</p>
   *          <p>If you have multi-channel audio and do not enable channel identification, your audio is
   *       transcribed in a continuous manner and your transcript is not separated by channel.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/channel-id.html">Transcribing multi-channel audio</a>.</p>
   */
  EnableChannelIdentification?: boolean;

  /**
   * <p>Specify the number of channels in your audio stream. Up to two channels are
   *       supported.</p>
   */
  NumberOfChannels?: number;

  /**
   * <p>Enables partial result stabilization for your transcription. Partial result stabilization can reduce
   *       latency in your output, but may impact accuracy. For more information, see
   *       <a href="https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html#streaming-partial-result-stabilization">Partial-result
   *       stabilization</a>.</p>
   */
  EnablePartialResultsStabilization?: boolean;

  /**
   * <p>Specify the level of stability to use when you enable partial results stabilization
   *       (<code>EnablePartialResultsStabilization</code>).</p>
   *          <p>Low stability provides the highest accuracy. High stability transcribes faster, but with slightly
   *       lower accuracy.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html#streaming-partial-result-stabilization">Partial-result
   *       stabilization</a>.</p>
   */
  PartialResultsStability?: PartialResultsStability | string;

  /**
   * <p>Labels all personally identifiable information (PII) identified in your transcript.</p>
   *          <p>Content identification is performed at the segment level; PII specified in
   *       <code>PiiEntityTypes</code> is flagged upon complete transcription of an audio segment.</p>
   *          <p>You can’t set <code>ContentIdentificationType</code> and <code>ContentRedactionType</code>
   *       in the same request. If you set both, your request returns a
   *       <code>BadRequestException</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/pii-redaction.html">Redacting or identifying personally identifiable
   *       information</a>.</p>
   */
  ContentIdentificationType?: ContentIdentificationType | string;

  /**
   * <p>Redacts all personally identifiable information (PII) identified in your transcript.</p>
   *          <p>Content redaction is performed at the segment level; PII specified in
   *       <code>PiiEntityTypes</code> is redacted upon complete transcription of an audio segment.</p>
   *          <p>You can’t set <code>ContentRedactionType</code> and <code>ContentIdentificationType</code>
   *       in the same request. If you set both, your request returns a
   *       <code>BadRequestException</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/pii-redaction.html">Redacting or identifying personally identifiable
   *       information</a>.</p>
   */
  ContentRedactionType?: ContentRedactionType | string;

  /**
   * <p>Specify which types of personally identifiable information (PII) you want to redact in your
   *       transcript. You can include as many types as you'd like, or you can select
   *       <code>ALL</code>.</p>
   *          <p>To include <code>PiiEntityTypes</code> in your request, you must also include either
   *       <code>ContentIdentificationType</code> or <code>ContentRedactionType</code>.</p>
   *          <p>Values must be comma-separated and can include:
   *       <code>BANK_ACCOUNT_NUMBER</code>, <code>BANK_ROUTING</code>,
   *       <code>CREDIT_DEBIT_NUMBER</code>, <code>CREDIT_DEBIT_CVV</code>,
   *       <code>CREDIT_DEBIT_EXPIRY</code>, <code>PIN</code>, <code>EMAIL</code>,
   *       <code>ADDRESS</code>, <code>NAME</code>, <code>PHONE</code>,
   *       <code>SSN</code>, or <code>ALL</code>.</p>
   */
  PiiEntityTypes?: string;

  /**
   * <p>Specify the name of the custom language model that you want to use when processing your
   *       transcription. Note that language model names are case sensitive.</p>
   *          <p>The language of the specified language model must match the language code you specify
   *       in your transcription request. If the languages don't match, the custom language model isn't applied.
   *       There are no errors or warnings associated with a language mismatch.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-language-models.html">Custom language models</a>.</p>
   */
  LanguageModelName?: string;

  /**
   * <p>Enables automatic language identification for your transcription.</p>
   *          <p>If you include <code>IdentifyLanguage</code>, you can optionally include a list of
   *       language codes, using <code>LanguageOptions</code>, that you think may be present in
   *       your audio stream. Including language options can improve transcription accuracy.</p>
   *          <p>You can also include a preferred language using <code>PreferredLanguage</code>. Adding a
   *       preferred language can help Amazon Transcribe identify the language faster than if you omit this
   *       parameter.</p>
   *          <p>If you have multi-channel audio that contains different languages on each channel, and you've
   *       enabled channel identification, automatic language identification identifies the dominant language on
   *       each audio channel.</p>
   *          <p>Note that you must include either <code>LanguageCode</code> or
   *       <code>IdentifyLanguage</code> in your request. If you include both parameters, your request
   *       fails.</p>
   *          <p>Streaming language identification can't be combined with custom language models or
   *       redaction.</p>
   */
  IdentifyLanguage?: boolean;

  /**
   * <p>Specify two or more language codes that represent the languages you think may be present
   *       in your media; including more than five is not recommended. If you're unsure what languages are present, do
   *       not include this parameter.</p>
   *          <p>Including language options can improve the accuracy of language identification.</p>
   *          <p>If you include <code>LanguageOptions</code> in your request, you must also include
   *       <code>IdentifyLanguage</code>.</p>
   *          <p>For a list of languages supported with Amazon Transcribe streaming, refer to the
   *       <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported
   *         languages</a> table.</p>
   *          <important>
   *             <p>You can only include one language dialect per language per stream. For example, you
   *         cannot include <code>en-US</code> and <code>en-AU</code> in the same request.</p>
   *          </important>
   */
  LanguageOptions?: string;

  /**
   * <p>Specify a preferred language from the subset of languages codes you specified in
   *       <code>LanguageOptions</code>.</p>
   *          <p>You can only use this parameter if you've included <code>IdentifyLanguage</code> and
   *         <code>LanguageOptions</code> in your request.</p>
   */
  PreferredLanguage?: LanguageCode | string;

  /**
   * <p>Specify the names of the custom vocabularies that you want to use when processing your
   *       transcription. Note that vocabulary names are case sensitive.</p>
   *          <p>If none of the languages of the specified custom vocabularies match the language identified in
   *       your media, your job fails.</p>
   *          <important>
   *             <p>This parameter is only intended for use <b>with</b> the
   *           <code>IdentifyLanguage</code> parameter. If you're <b>not</b>
   *         including <code>IdentifyLanguage</code> in your request and want to use a custom vocabulary
   *         with your transcription, use the <code>VocabularyName</code> parameter instead.</p>
   *          </important>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html">Custom vocabularies</a>.</p>
   */
  VocabularyNames?: string;

  /**
   * <p>Specify the names of the custom vocabulary filters that you want to use when processing
   *       your transcription. Note that vocabulary filter names are case sensitive.</p>
   *          <p>If none of the languages of the specified custom vocabulary filters match the language identified
   *       in your media, your job fails.</p>
   *          <important>
   *             <p>This parameter is only intended for use <b>with</b>
   *         the <code>IdentifyLanguage</code> parameter. If you're <b>not</b>
   *         including <code>IdentifyLanguage</code> in your request and want to use a custom vocabulary filter
   *         with your transcription, use the <code>VocabularyFilterName</code> parameter instead.</p>
   *          </important>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/vocabulary-filtering.html">Using vocabulary filtering with unwanted
   *       words</a>.</p>
   */
  VocabularyFilterNames?: string;
}

/**
 * <p>The <code>Transcript</code> associated with a
 *       <code></code>.</p>
 *          <p>
 *             <code>Transcript</code> contains <code>Results</code>, which contains a set of transcription
 *       results from one or more audio segments, along with additional information per your request
 *       parameters.</p>
 */
export interface Transcript {
  /**
   * <p>Contains a set of transcription results from one or more audio segments, along with additional
   *       information per your request parameters. This can include information relating to alternative
   *       transcriptions, channel identification, partial result stabilization, language identification, and other
   *       transcription-related data.</p>
   */
  Results?: Result[];
}

/**
 * <p>The <code>TranscriptEvent</code> associated with a
 *       <code>TranscriptResultStream</code>.</p>
 *          <p>Contains a set of transcription results from one or more audio segments, along with additional
 *       information per your request parameters.</p>
 */
export interface TranscriptEvent {
  /**
   * <p>Contains <code>Results</code>, which contains a set of transcription results from one or
   *       more audio segments, along with additional information per your request parameters. This can
   *       include information relating to alternative transcriptions, channel identification, partial
   *       result stabilization, language identification, and other transcription-related data.</p>
   */
  Transcript?: Transcript;
}

/**
 * <p>Contains detailed information about your streaming session.</p>
 */
export type TranscriptResultStream =
  | TranscriptResultStream.BadRequestExceptionMember
  | TranscriptResultStream.ConflictExceptionMember
  | TranscriptResultStream.InternalFailureExceptionMember
  | TranscriptResultStream.LimitExceededExceptionMember
  | TranscriptResultStream.ServiceUnavailableExceptionMember
  | TranscriptResultStream.TranscriptEventMember
  | TranscriptResultStream.$UnknownMember;

export namespace TranscriptResultStream {
  /**
   * <p>Contains <code>Transcript</code>, which contains <code>Results</code>. The
   *       <code></code> object contains a set of transcription
   *       results from one or more audio segments, along with additional information per your request
   *       parameters.</p>
   */
  export interface TranscriptEventMember {
    TranscriptEvent: TranscriptEvent;
    BadRequestException?: never;
    LimitExceededException?: never;
    InternalFailureException?: never;
    ConflictException?: never;
    ServiceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * <p>A client error occurred when the stream was created. Check the parameters of the request
   *       and try your request again.</p>
   */
  export interface BadRequestExceptionMember {
    TranscriptEvent?: never;
    BadRequestException: BadRequestException;
    LimitExceededException?: never;
    InternalFailureException?: never;
    ConflictException?: never;
    ServiceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * <p>Your client has exceeded one of the Amazon Transcribe limits. This is typically the audio length
   *       limit. Break your audio stream into smaller chunks and try your request again.</p>
   */
  export interface LimitExceededExceptionMember {
    TranscriptEvent?: never;
    BadRequestException?: never;
    LimitExceededException: LimitExceededException;
    InternalFailureException?: never;
    ConflictException?: never;
    ServiceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * <p>A problem occurred while processing the audio. Amazon Transcribe terminated
   *       processing.</p>
   */
  export interface InternalFailureExceptionMember {
    TranscriptEvent?: never;
    BadRequestException?: never;
    LimitExceededException?: never;
    InternalFailureException: InternalFailureException;
    ConflictException?: never;
    ServiceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * <p>A new stream started with the same session ID. The current stream has been
   *       terminated.</p>
   */
  export interface ConflictExceptionMember {
    TranscriptEvent?: never;
    BadRequestException?: never;
    LimitExceededException?: never;
    InternalFailureException?: never;
    ConflictException: ConflictException;
    ServiceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * <p>The service is currently unavailable. Try your request later.</p>
   */
  export interface ServiceUnavailableExceptionMember {
    TranscriptEvent?: never;
    BadRequestException?: never;
    LimitExceededException?: never;
    InternalFailureException?: never;
    ConflictException?: never;
    ServiceUnavailableException: ServiceUnavailableException;
    $unknown?: never;
  }

  export interface $UnknownMember {
    TranscriptEvent?: never;
    BadRequestException?: never;
    LimitExceededException?: never;
    InternalFailureException?: never;
    ConflictException?: never;
    ServiceUnavailableException?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    TranscriptEvent: (value: TranscriptEvent) => T;
    BadRequestException: (value: BadRequestException) => T;
    LimitExceededException: (value: LimitExceededException) => T;
    InternalFailureException: (value: InternalFailureException) => T;
    ConflictException: (value: ConflictException) => T;
    ServiceUnavailableException: (value: ServiceUnavailableException) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: TranscriptResultStream, visitor: Visitor<T>): T => {
    if (value.TranscriptEvent !== undefined) return visitor.TranscriptEvent(value.TranscriptEvent);
    if (value.BadRequestException !== undefined) return visitor.BadRequestException(value.BadRequestException);
    if (value.LimitExceededException !== undefined) return visitor.LimitExceededException(value.LimitExceededException);
    if (value.InternalFailureException !== undefined)
      return visitor.InternalFailureException(value.InternalFailureException);
    if (value.ConflictException !== undefined) return visitor.ConflictException(value.ConflictException);
    if (value.ServiceUnavailableException !== undefined)
      return visitor.ServiceUnavailableException(value.ServiceUnavailableException);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

export interface StartStreamTranscriptionResponse {
  /**
   * <p>Provides the identifier for your streaming request.</p>
   */
  RequestId?: string;

  /**
   * <p>Provides the language code that you specified in your request.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>Provides the sample rate that you specified in your request.</p>
   */
  MediaSampleRateHertz?: number;

  /**
   * <p>Provides the media encoding you specified in your request.</p>
   */
  MediaEncoding?: MediaEncoding | string;

  /**
   * <p>Provides the name of the custom vocabulary that you specified in your request.</p>
   */
  VocabularyName?: string;

  /**
   * <p>Provides the identifier for your transcription session.</p>
   */
  SessionId?: string;

  /**
   * <p>Provides detailed information about your streaming session.</p>
   */
  TranscriptResultStream?: AsyncIterable<TranscriptResultStream>;

  /**
   * <p>Provides the name of the custom vocabulary filter that you specified in your
   *       request.</p>
   */
  VocabularyFilterName?: string;

  /**
   * <p>Provides the vocabulary filtering method used in your transcription.</p>
   */
  VocabularyFilterMethod?: VocabularyFilterMethod | string;

  /**
   * <p>Shows whether speaker partitioning was enabled for your transcription.</p>
   */
  ShowSpeakerLabel?: boolean;

  /**
   * <p>Shows whether  channel identification was enabled for your transcription.</p>
   */
  EnableChannelIdentification?: boolean;

  /**
   * <p>Provides the number of channels that you specified in your request.</p>
   */
  NumberOfChannels?: number;

  /**
   * <p>Shows whether partial results stabilization was enabled for your transcription.</p>
   */
  EnablePartialResultsStabilization?: boolean;

  /**
   * <p>Provides the stabilization level used for your transcription.</p>
   */
  PartialResultsStability?: PartialResultsStability | string;

  /**
   * <p>Shows whether content identification was enabled for your transcription.</p>
   */
  ContentIdentificationType?: ContentIdentificationType | string;

  /**
   * <p>Shows whether content redaction was enabled for your transcription.</p>
   */
  ContentRedactionType?: ContentRedactionType | string;

  /**
   * <p>Lists the PII entity types you specified in your request.</p>
   */
  PiiEntityTypes?: string;

  /**
   * <p>Provides the name of the custom language model that you specified in your request.</p>
   */
  LanguageModelName?: string;

  /**
   * <p>Shows whether automatic language identification was enabled for your
   *       transcription.</p>
   */
  IdentifyLanguage?: boolean;

  /**
   * <p>Provides the language codes that you specified in your request.</p>
   */
  LanguageOptions?: string;

  /**
   * <p>Provides the preferred language that you specified in your request.</p>
   */
  PreferredLanguage?: LanguageCode | string;

  /**
   * <p>Provides the names of the custom vocabularies that you specified in your request.</p>
   */
  VocabularyNames?: string;

  /**
   * <p>Provides the names of the custom vocabulary filters that you specified in your
   *       request.</p>
   */
  VocabularyFilterNames?: string;
}

/**
 * @internal
 */
export const EntityFilterSensitiveLog = (obj: Entity): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ItemFilterSensitiveLog = (obj: Item): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AlternativeFilterSensitiveLog = (obj: Alternative): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AudioEventFilterSensitiveLog = (obj: AudioEvent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ChannelDefinitionFilterSensitiveLog = (obj: ChannelDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PostCallAnalyticsSettingsFilterSensitiveLog = (obj: PostCallAnalyticsSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConfigurationEventFilterSensitiveLog = (obj: ConfigurationEvent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AudioStreamFilterSensitiveLog = (obj: AudioStream): any => {
  if (obj.AudioEvent !== undefined) return { AudioEvent: AudioEventFilterSensitiveLog(obj.AudioEvent) };
  if (obj.ConfigurationEvent !== undefined)
    return { ConfigurationEvent: ConfigurationEventFilterSensitiveLog(obj.ConfigurationEvent) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const CallAnalyticsEntityFilterSensitiveLog = (obj: CallAnalyticsEntity): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CallAnalyticsItemFilterSensitiveLog = (obj: CallAnalyticsItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TimestampRangeFilterSensitiveLog = (obj: TimestampRange): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PointsOfInterestFilterSensitiveLog = (obj: PointsOfInterest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CategoryEventFilterSensitiveLog = (obj: CategoryEvent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CharacterOffsetsFilterSensitiveLog = (obj: CharacterOffsets): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IssueDetectedFilterSensitiveLog = (obj: IssueDetected): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UtteranceEventFilterSensitiveLog = (obj: UtteranceEvent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CallAnalyticsTranscriptResultStreamFilterSensitiveLog = (
  obj: CallAnalyticsTranscriptResultStream
): any => {
  if (obj.UtteranceEvent !== undefined) return { UtteranceEvent: UtteranceEventFilterSensitiveLog(obj.UtteranceEvent) };
  if (obj.CategoryEvent !== undefined) return { CategoryEvent: CategoryEventFilterSensitiveLog(obj.CategoryEvent) };
  if (obj.BadRequestException !== undefined) return { BadRequestException: obj.BadRequestException };
  if (obj.LimitExceededException !== undefined) return { LimitExceededException: obj.LimitExceededException };
  if (obj.InternalFailureException !== undefined) return { InternalFailureException: obj.InternalFailureException };
  if (obj.ConflictException !== undefined) return { ConflictException: obj.ConflictException };
  if (obj.ServiceUnavailableException !== undefined)
    return { ServiceUnavailableException: obj.ServiceUnavailableException };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const LanguageWithScoreFilterSensitiveLog = (obj: LanguageWithScore): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MedicalEntityFilterSensitiveLog = (obj: MedicalEntity): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MedicalItemFilterSensitiveLog = (obj: MedicalItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MedicalAlternativeFilterSensitiveLog = (obj: MedicalAlternative): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MedicalResultFilterSensitiveLog = (obj: MedicalResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MedicalTranscriptFilterSensitiveLog = (obj: MedicalTranscript): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MedicalTranscriptEventFilterSensitiveLog = (obj: MedicalTranscriptEvent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MedicalTranscriptResultStreamFilterSensitiveLog = (obj: MedicalTranscriptResultStream): any => {
  if (obj.TranscriptEvent !== undefined)
    return { TranscriptEvent: MedicalTranscriptEventFilterSensitiveLog(obj.TranscriptEvent) };
  if (obj.BadRequestException !== undefined) return { BadRequestException: obj.BadRequestException };
  if (obj.LimitExceededException !== undefined) return { LimitExceededException: obj.LimitExceededException };
  if (obj.InternalFailureException !== undefined) return { InternalFailureException: obj.InternalFailureException };
  if (obj.ConflictException !== undefined) return { ConflictException: obj.ConflictException };
  if (obj.ServiceUnavailableException !== undefined)
    return { ServiceUnavailableException: obj.ServiceUnavailableException };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const ResultFilterSensitiveLog = (obj: Result): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartCallAnalyticsStreamTranscriptionRequestFilterSensitiveLog = (
  obj: StartCallAnalyticsStreamTranscriptionRequest
): any => ({
  ...obj,
  ...(obj.AudioStream && { AudioStream: "STREAMING_CONTENT" }),
});

/**
 * @internal
 */
export const StartCallAnalyticsStreamTranscriptionResponseFilterSensitiveLog = (
  obj: StartCallAnalyticsStreamTranscriptionResponse
): any => ({
  ...obj,
  ...(obj.CallAnalyticsTranscriptResultStream && { CallAnalyticsTranscriptResultStream: "STREAMING_CONTENT" }),
});

/**
 * @internal
 */
export const StartMedicalStreamTranscriptionRequestFilterSensitiveLog = (
  obj: StartMedicalStreamTranscriptionRequest
): any => ({
  ...obj,
  ...(obj.AudioStream && { AudioStream: "STREAMING_CONTENT" }),
});

/**
 * @internal
 */
export const StartMedicalStreamTranscriptionResponseFilterSensitiveLog = (
  obj: StartMedicalStreamTranscriptionResponse
): any => ({
  ...obj,
  ...(obj.TranscriptResultStream && { TranscriptResultStream: "STREAMING_CONTENT" }),
});

/**
 * @internal
 */
export const StartStreamTranscriptionRequestFilterSensitiveLog = (obj: StartStreamTranscriptionRequest): any => ({
  ...obj,
  ...(obj.AudioStream && { AudioStream: "STREAMING_CONTENT" }),
});

/**
 * @internal
 */
export const TranscriptFilterSensitiveLog = (obj: Transcript): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TranscriptEventFilterSensitiveLog = (obj: TranscriptEvent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TranscriptResultStreamFilterSensitiveLog = (obj: TranscriptResultStream): any => {
  if (obj.TranscriptEvent !== undefined)
    return { TranscriptEvent: TranscriptEventFilterSensitiveLog(obj.TranscriptEvent) };
  if (obj.BadRequestException !== undefined) return { BadRequestException: obj.BadRequestException };
  if (obj.LimitExceededException !== undefined) return { LimitExceededException: obj.LimitExceededException };
  if (obj.InternalFailureException !== undefined) return { InternalFailureException: obj.InternalFailureException };
  if (obj.ConflictException !== undefined) return { ConflictException: obj.ConflictException };
  if (obj.ServiceUnavailableException !== undefined)
    return { ServiceUnavailableException: obj.ServiceUnavailableException };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const StartStreamTranscriptionResponseFilterSensitiveLog = (obj: StartStreamTranscriptionResponse): any => ({
  ...obj,
  ...(obj.TranscriptResultStream && { TranscriptResultStream: "STREAMING_CONTENT" }),
});
