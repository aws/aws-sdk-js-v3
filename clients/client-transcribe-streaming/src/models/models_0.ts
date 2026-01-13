// smithy-typescript generated code
import {
  CallAnalyticsLanguageCode,
  ClinicalNoteGenerationStatus,
  ContentIdentificationType,
  ContentRedactionOutput,
  ContentRedactionType,
  ItemType,
  LanguageCode,
  MediaEncoding,
  MedicalContentIdentificationType,
  MedicalScribeLanguageCode,
  MedicalScribeMediaEncoding,
  MedicalScribeNoteTemplate,
  MedicalScribeParticipantRole,
  MedicalScribeSessionControlEventType,
  MedicalScribeStreamStatus,
  MedicalScribeTranscriptItemType,
  MedicalScribeVocabularyFilterMethod,
  PartialResultsStability,
  ParticipantRole,
  Pronouns,
  Sentiment,
  Specialty,
  Type,
  VocabularyFilterMethod,
} from "./enums";
import {
  BadRequestException,
  ConflictException,
  InternalFailureException,
  LimitExceededException,
  ServiceUnavailableException,
} from "./errors";

/**
 * <p>Contains entities identified as personally identifiable information (PII) in your
 *       transcription output, along with various associated attributes. Examples include category,
 *       confidence score, type, stability score, and start and end times.</p>
 * @public
 */
export interface Entity {
  /**
   * <p>The start time of the utterance that was identified as PII in seconds, with millisecond precision (e.g., 1.056)</p>
   * @public
   */
  StartTime?: number | undefined;

  /**
   * <p>The end time of the utterance that was identified as PII in seconds, with millisecond precision (e.g., 1.056)</p>
   * @public
   */
  EndTime?: number | undefined;

  /**
   * <p>The category of information identified. The only category is <code>PII</code>.</p>
   * @public
   */
  Category?: string | undefined;

  /**
   * <p>The type of PII identified. For example, <code>NAME</code> or
   *       <code>CREDIT_DEBIT_NUMBER</code>.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The word or words identified as PII.</p>
   * @public
   */
  Content?: string | undefined;

  /**
   * <p>The confidence score associated with the identified PII entity in your audio.</p>
   *          <p>Confidence scores are values between 0 and 1. A larger value indicates a higher
   *       probability that the identified entity correctly matches the entity spoken in your
   *       media.</p>
   * @public
   */
  Confidence?: number | undefined;
}

/**
 * <p>A word, phrase, or punctuation mark in your transcription output, along with various associated
 *       attributes, such as confidence score, type, and start and end times.</p>
 * @public
 */
export interface Item {
  /**
   * <p>The start time of the transcribed item in seconds, with millisecond precision (e.g., 1.056)</p>
   * @public
   */
  StartTime?: number | undefined;

  /**
   * <p>The end time of the transcribed item in seconds, with millisecond precision (e.g., 1.056)</p>
   * @public
   */
  EndTime?: number | undefined;

  /**
   * <p>The type of item identified. Options are: <code>PRONUNCIATION</code> (spoken words) and
   *       <code>PUNCTUATION</code>.</p>
   * @public
   */
  Type?: ItemType | undefined;

  /**
   * <p>The word or punctuation that was transcribed.</p>
   * @public
   */
  Content?: string | undefined;

  /**
   * <p>Indicates whether the specified item matches a word in the vocabulary filter included in
   *       your request. If <code>true</code>, there is a vocabulary filter match.</p>
   * @public
   */
  VocabularyFilterMatch?: boolean | undefined;

  /**
   * <p>If speaker partitioning is enabled, <code>Speaker</code> labels the speaker of the
   *       specified item.</p>
   * @public
   */
  Speaker?: string | undefined;

  /**
   * <p>The confidence score associated with a word or phrase in your transcript.</p>
   *          <p>Confidence scores are values between 0 and 1. A larger value indicates a higher
   *       probability that the identified item correctly matches the item spoken in your media.</p>
   * @public
   */
  Confidence?: number | undefined;

  /**
   * <p>If partial result stabilization is enabled, <code>Stable</code> indicates whether the specified
   *       item is stable (<code>true</code>) or if it may change when the segment is complete
   *       (<code>false</code>).</p>
   * @public
   */
  Stable?: boolean | undefined;
}

/**
 * <p>A list of possible alternative transcriptions for the input audio. Each alternative may contain
 *       one or more of <code>Items</code>, <code>Entities</code>, or <code>Transcript</code>.</p>
 * @public
 */
export interface Alternative {
  /**
   * <p>Contains transcribed text.</p>
   * @public
   */
  Transcript?: string | undefined;

  /**
   * <p>Contains words, phrases, or punctuation marks in your transcription output.</p>
   * @public
   */
  Items?: Item[] | undefined;

  /**
   * <p>Contains entities identified as personally identifiable information (PII) in your transcription
   *       output.</p>
   * @public
   */
  Entities?: Entity[] | undefined;
}

/**
 * <p>A wrapper for your audio chunks. Your audio stream consists of one or more audio
 *       events, which consist of one or more audio chunks.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/event-stream.html">Event stream encoding</a>.</p>
 * @public
 */
export interface AudioEvent {
  /**
   * <p>
   *     An audio blob containing the next segment of audio from your application,
   *     with a maximum duration of 1 second.
   *     The maximum size in bytes varies based on audio properties.
   *   </p>
   *          <p>Find recommended size in <a href="https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html#best-practices">Transcribing streaming best practices</a>.
   *   </p>
   *          <p>
   *     Size calculation: <code>Duration (s) * Sample Rate (Hz) * Number of Channels * 2 (Bytes per Sample)</code>
   *          </p>
   *          <p>
   *     For example, a 1-second chunk of 16 kHz, 2-channel, 16-bit audio would be
   *     <code>1 * 16000 * 2 * 2 = 64000 bytes</code>.
   *   </p>
   *          <p>
   *     For 8 kHz, 1-channel, 16-bit audio, a 1-second chunk would be
   *     <code>1 * 8000 * 1 * 2 = 16000 bytes</code>.
   *   </p>
   * @public
   */
  AudioChunk?: Uint8Array | undefined;
}

/**
 * <p>Makes it possible to specify which speaker is on which audio channel. For example, if your
 *       agent is the first participant to speak, you would set <code>ChannelId</code> to
 *       <code>0</code> (to indicate the first channel) and <code>ParticipantRole</code> to
 *       <code>AGENT</code> (to indicate that it's the agent speaking).</p>
 * @public
 */
export interface ChannelDefinition {
  /**
   * <p>Specify the audio channel you want to define.</p>
   * @public
   */
  ChannelId: number | undefined;

  /**
   * <p>Specify the speaker you want to define. Omitting this parameter is equivalent to
   *       specifying both participants.</p>
   * @public
   */
  ParticipantRole: ParticipantRole | undefined;
}

/**
 * <p>Allows you to specify additional settings for your Call Analytics post-call request,
 *       including output locations for your redacted transcript, which IAM role to use,
 *       and which encryption key to use.</p>
 *          <p>
 *             <code>DataAccessRoleArn</code> and <code>OutputLocation</code> are required
 *       fields.</p>
 *          <p>
 *             <code>PostCallAnalyticsSettings</code> provides you with the same insights as a
 *       Call Analytics post-call transcription. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-post-call.html">Post-call analytics</a> for more information
 *       on this feature.</p>
 * @public
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
   * @public
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
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>Specify whether you want only a redacted transcript or both a redacted and an unredacted
   *       transcript. If you choose redacted and unredacted, two JSON files are generated and stored in the
   *       Amazon S3 output location you specify.</p>
   *          <p>Note that to include <code>ContentRedactionOutput</code> in your request, you must
   *       enable content redaction (<code>ContentRedactionType</code>).</p>
   * @public
   */
  ContentRedactionOutput?: ContentRedactionOutput | undefined;

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
   *          <p>Note that the role making the
   *       request must have permission to use the specified KMS key.</p>
   * @public
   */
  OutputEncryptionKMSKeyId?: string | undefined;
}

/**
 * <p>Allows you to set audio channel definitions and post-call analytics settings.</p>
 * @public
 */
export interface ConfigurationEvent {
  /**
   * <p>Indicates which speaker is on which audio channel.</p>
   * @public
   */
  ChannelDefinitions?: ChannelDefinition[] | undefined;

  /**
   * <p>Provides additional optional settings for your Call Analytics post-call request, including
   *       encryption and output locations for your redacted transcript.</p>
   *          <p>
   *             <code>PostCallAnalyticsSettings</code> provides you with the same insights as a
   *       Call Analytics post-call transcription. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-post-call.html">Post-call analytics</a> for more information
   *       on this feature.</p>
   * @public
   */
  PostCallAnalyticsSettings?: PostCallAnalyticsSettings | undefined;
}

/**
 * <p>An encoded stream of audio blobs. Audio streams are encoded as either HTTP/2 or WebSocket
 *       data frames.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html">Transcribing streaming audio</a>.</p>
 * @public
 */
export type AudioStream =
  | AudioStream.AudioEventMember
  | AudioStream.ConfigurationEventMember
  | AudioStream.$UnknownMember;

/**
 * @public
 */
export namespace AudioStream {
  /**
   * <p>A blob of audio from your application. Your audio stream consists of one or more audio
   *       events.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/event-stream.html">Event stream encoding</a>.</p>
   * @public
   */
  export interface AudioEventMember {
    AudioEvent: AudioEvent;
    ConfigurationEvent?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains audio channel definitions and post-call analytics settings.</p>
   * @public
   */
  export interface ConfigurationEventMember {
    AudioEvent?: never;
    ConfigurationEvent: ConfigurationEvent;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    AudioEvent?: never;
    ConfigurationEvent?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    AudioEvent: (value: AudioEvent) => T;
    ConfigurationEvent: (value: ConfigurationEvent) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Contains entities identified as personally identifiable information (PII) in your
 *       transcription output, along with various associated attributes. Examples include category,
 *       confidence score, content, type, and start and end times.</p>
 * @public
 */
export interface CallAnalyticsEntity {
  /**
   * <p>The time, in milliseconds, from the beginning of the audio stream to the start of the identified entity.</p>
   * @public
   */
  BeginOffsetMillis?: number | undefined;

  /**
   * <p>The time, in milliseconds, from the beginning of the audio stream to the end of the identified entity.</p>
   * @public
   */
  EndOffsetMillis?: number | undefined;

  /**
   * <p>The category of information identified. For example, <code>PII</code>.</p>
   * @public
   */
  Category?: string | undefined;

  /**
   * <p>The type of PII identified. For example, <code>NAME</code> or
   *       <code>CREDIT_DEBIT_NUMBER</code>.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The word or words that represent the identified entity.</p>
   * @public
   */
  Content?: string | undefined;

  /**
   * <p>The confidence score associated with the identification of an entity in your transcript.</p>
   *          <p>Confidence scores are values between 0 and 1. A larger value indicates a higher
   *       probability that the identified entity correctly matches the entity spoken in your
   *       media.</p>
   * @public
   */
  Confidence?: number | undefined;
}

/**
 * <p>A word, phrase, or punctuation mark in your Call Analytics transcription output, along with various
 *       associated attributes, such as confidence score, type, and start and end times.</p>
 * @public
 */
export interface CallAnalyticsItem {
  /**
   * <p>The time, in milliseconds, from the beginning of the audio stream to the start of the identified item.</p>
   * @public
   */
  BeginOffsetMillis?: number | undefined;

  /**
   * <p>The time, in milliseconds, from the beginning of the audio stream to the end of the identified item.</p>
   * @public
   */
  EndOffsetMillis?: number | undefined;

  /**
   * <p>The type of item identified. Options are: <code>PRONUNCIATION</code> (spoken words) and
   *       <code>PUNCTUATION</code>.</p>
   * @public
   */
  Type?: ItemType | undefined;

  /**
   * <p>The word or punctuation that was transcribed.</p>
   * @public
   */
  Content?: string | undefined;

  /**
   * <p>The confidence score associated with a word or phrase in your transcript.</p>
   *          <p>Confidence scores are values between 0 and 1. A larger value indicates a higher
   *       probability that the identified item correctly matches the item spoken in your media.</p>
   * @public
   */
  Confidence?: number | undefined;

  /**
   * <p>Indicates whether the specified item matches a word in the vocabulary filter included in
   *       your Call Analytics request. If <code>true</code>, there is a vocabulary filter match.</p>
   * @public
   */
  VocabularyFilterMatch?: boolean | undefined;

  /**
   * <p>If partial result stabilization is enabled, <code>Stable</code> indicates whether the specified
   *       item is stable (<code>true</code>) or if it may change when the segment is complete
   *       (<code>false</code>).</p>
   * @public
   */
  Stable?: boolean | undefined;
}

/**
 * <p>The language code that represents the language identified in your audio, including the associated
 *       confidence score.</p>
 * @public
 */
export interface CallAnalyticsLanguageWithScore {
  /**
   * <p>The language code of the identified language.</p>
   * @public
   */
  LanguageCode?: CallAnalyticsLanguageCode | undefined;

  /**
   * <p>The confidence score associated with the identified language code. Confidence scores are values between zero and one; larger values indicate a higher confidence in the identified language.</p>
   * @public
   */
  Score?: number | undefined;
}

/**
 * <p>Contains the timestamp range (start time through end time) of a matched category.</p>
 * @public
 */
export interface TimestampRange {
  /**
   * <p>The time, in milliseconds, from the beginning of the audio stream to the start of the category
   *       match.</p>
   * @public
   */
  BeginOffsetMillis?: number | undefined;

  /**
   * <p>The time, in milliseconds, from the beginning of the audio stream to the end of the category
   *       match.</p>
   * @public
   */
  EndOffsetMillis?: number | undefined;
}

/**
 * <p>Contains the timestamps of matched categories.</p>
 * @public
 */
export interface PointsOfInterest {
  /**
   * <p>Contains the timestamp ranges (start time through end time) of matched categories and rules.</p>
   * @public
   */
  TimestampRanges?: TimestampRange[] | undefined;
}

/**
 * <p>Provides information on any <code>TranscriptFilterType</code> categories that matched your
 *       transcription output. Matches are identified for each segment upon completion of that segment.</p>
 * @public
 */
export interface CategoryEvent {
  /**
   * <p>Lists the categories that were matched in your audio segment.</p>
   * @public
   */
  MatchedCategories?: string[] | undefined;

  /**
   * <p>Contains information about the matched categories, including category names and timestamps.</p>
   * @public
   */
  MatchedDetails?: Record<string, PointsOfInterest> | undefined;
}

/**
 * <p>Provides the location, using character count, in your transcript where a match is identified. For example,
 *       the location of an issue or a category match within a segment.</p>
 * @public
 */
export interface CharacterOffsets {
  /**
   * <p>Provides the character count of the first character where a match is identified. For example, the first
   *       character associated with an issue or a category match in a segment transcript.</p>
   * @public
   */
  Begin?: number | undefined;

  /**
   * <p>Provides the character count of the last character where a match is identified. For example, the last
   *       character associated with an issue or a category match in a segment transcript.</p>
   * @public
   */
  End?: number | undefined;
}

/**
 * <p>Lists the issues that were identified in your audio segment.</p>
 * @public
 */
export interface IssueDetected {
  /**
   * <p>Provides the timestamps that identify when in an audio segment the specified issue occurs.</p>
   * @public
   */
  CharacterOffsets?: CharacterOffsets | undefined;
}

/**
 * <p>Contains set of transcription results from one or more audio segments, along with additional
 *       information about the parameters included in your request. For example, channel definitions, partial result
 *       stabilization, sentiment, and issue detection.</p>
 * @public
 */
export interface UtteranceEvent {
  /**
   * <p>The unique identifier that is associated with the specified <code>UtteranceEvent</code>.</p>
   * @public
   */
  UtteranceId?: string | undefined;

  /**
   * <p>Indicates whether the segment in the <code>UtteranceEvent</code> is complete
   *       (<code>FALSE</code>) or partial (<code>TRUE</code>).</p>
   * @public
   */
  IsPartial?: boolean | undefined;

  /**
   * <p>Provides the role of the speaker for each audio channel, either <code>CUSTOMER</code> or
   *       <code>AGENT</code>.</p>
   * @public
   */
  ParticipantRole?: ParticipantRole | undefined;

  /**
   * <p>The time, in milliseconds, from the beginning of the audio stream to the start of the
   *       <code>UtteranceEvent</code>.</p>
   * @public
   */
  BeginOffsetMillis?: number | undefined;

  /**
   * <p>The time, in milliseconds, from the beginning of the audio stream to the start of the
   *       <code>UtteranceEvent</code>.</p>
   * @public
   */
  EndOffsetMillis?: number | undefined;

  /**
   * <p>Contains transcribed text.</p>
   * @public
   */
  Transcript?: string | undefined;

  /**
   * <p>Contains words, phrases, or punctuation marks that are associated with the specified
   *       <code>UtteranceEvent</code>.</p>
   * @public
   */
  Items?: CallAnalyticsItem[] | undefined;

  /**
   * <p>Contains entities identified as personally identifiable information (PII) in your transcription
   *       output.</p>
   * @public
   */
  Entities?: CallAnalyticsEntity[] | undefined;

  /**
   * <p>Provides the sentiment that was detected in the specified segment.</p>
   * @public
   */
  Sentiment?: Sentiment | undefined;

  /**
   * <p>Provides the issue that was detected in the specified segment.</p>
   * @public
   */
  IssuesDetected?: IssueDetected[] | undefined;

  /**
   * <p>The language code that represents the language spoken in your audio stream.</p>
   * @public
   */
  LanguageCode?: CallAnalyticsLanguageCode | undefined;

  /**
   * <p>The language code of the dominant language identified in your stream.</p>
   * @public
   */
  LanguageIdentification?: CallAnalyticsLanguageWithScore[] | undefined;
}

/**
 * <p>Contains detailed information about your real-time Call Analytics session. These details are
 *       provided in the <code>UtteranceEvent</code> and <code>CategoryEvent</code> objects.</p>
 * @public
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

/**
 * @public
 */
export namespace CallAnalyticsTranscriptResultStream {
  /**
   * <p>Contains set of transcription results from one or more audio segments, along with additional
   *       information per your request parameters. This can include information relating to channel definitions,
   *       partial result stabilization, sentiment, issue detection, and other transcription-related data.</p>
   * @public
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
   * @public
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
   *       used unsupported values. Check the specified parameters and try your request again.</p>
   * @public
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
   * @public
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
   * @public
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
   * @public
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
   * @public
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

  /**
   * @public
   */
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
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
}

/**
 * <p>The details for clinical note generation,
 *       including status, and output locations for clinical note and aggregated transcript if the analytics completed,
 *       or failure reason if the analytics failed.
 *     </p>
 * @public
 */
export interface ClinicalNoteGenerationResult {
  /**
   * <p>Holds the Amazon S3 URI for the output Clinical Note. </p>
   * @public
   */
  ClinicalNoteOutputLocation?: string | undefined;

  /**
   * <p>Holds the Amazon S3 URI for the output Transcript. </p>
   * @public
   */
  TranscriptOutputLocation?: string | undefined;

  /**
   * <p>The status of the clinical note generation.</p>
   *          <p>Possible Values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETED</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *       After audio streaming finishes, and you send a <code>MedicalScribeSessionControlEvent</code> event (with END_OF_SESSION as the Type),
   *       the status is set to <code>IN_PROGRESS</code>.
   *       If the status is <code>COMPLETED</code>, the analytics completed successfully, and you can find the
   *       results at the locations specified in <code>ClinicalNoteOutputLocation</code> and <code>TranscriptOutputLocation</code>.
   *       If the status is <code>FAILED</code>, <code>FailureReason</code> provides details about the failure.
   *     </p>
   * @public
   */
  Status?: ClinicalNoteGenerationStatus | undefined;

  /**
   * <p>If <code>ClinicalNoteGenerationResult</code> is <code>FAILED</code>, information about why it failed. </p>
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * <p>The output configuration for aggregated transcript and clinical note generation.</p>
 * @public
 */
export interface ClinicalNoteGenerationSettings {
  /**
   * <p>The name of the Amazon S3 bucket where you want the output of Amazon Web Services HealthScribe post-stream analytics stored. Don't include the <code>S3://</code> prefix of the specified bucket. </p>
   *          <p>HealthScribe outputs transcript and clinical note files under the prefix:
   *         <code>S3://$output-bucket-name/healthscribe-streaming/session-id/post-stream-analytics/clinical-notes</code>
   *          </p>
   *          <p>The role <code>ResourceAccessRoleArn</code> specified in the <code>MedicalScribeConfigurationEvent</code> must have
   *       permission to use the specified location. You can change Amazon S3 permissions using the <a href="https://console.aws.amazon.com/s3">
   *         Amazon Web Services Management Console
   *       </a>. See also <a href="https://docs.aws.amazon.com/transcribe/latest/dg/security_iam_id-based-policy-examples.html#auth-role-iam-user">Permissions Required for IAM User Roles </a> . </p>
   * @public
   */
  OutputBucketName: string | undefined;

  /**
   * <p>Specify one of the following templates to use for the clinical note summary. The default is <code>HISTORY_AND_PHYSICAL</code>.</p>
   *          <ul>
   *             <li>
   *                <p>HISTORY_AND_PHYSICAL: Provides summaries for key sections of the clinical documentation. Examples of sections include Chief Complaint, History of Present Illness, Review of Systems, Past Medical History, Assessment, and Plan.
   *         </p>
   *             </li>
   *             <li>
   *                <p>GIRPP: Provides summaries based on the patients progress toward goals. Examples of sections include Goal, Intervention,
   *           Response, Progress, and Plan.</p>
   *             </li>
   *             <li>
   *                <p>BIRP: Focuses on the patient's behavioral patterns and responses. Examples of sections include Behavior, Intervention, Response, and Plan.</p>
   *             </li>
   *             <li>
   *                <p>SIRP: Emphasizes the situational context of therapy. Examples of sections include Situation, Intervention, Response, and Plan.</p>
   *             </li>
   *             <li>
   *                <p>DAP: Provides a simplified format for clinical documentation. Examples of sections include Data, Assessment, and Plan.</p>
   *             </li>
   *             <li>
   *                <p>BEHAVIORAL_SOAP: Behavioral health focused documentation format. Examples of sections include Subjective, Objective, Assessment, and Plan.</p>
   *             </li>
   *             <li>
   *                <p>PHYSICAL_SOAP: Physical health focused documentation format. Examples of sections include Subjective, Objective, Assessment, and Plan.</p>
   *             </li>
   *          </ul>
   * @public
   */
  NoteTemplate?: MedicalScribeNoteTemplate | undefined;
}

/**
 * @public
 */
export interface GetMedicalScribeStreamRequest {
  /**
   * <p>The identifier of the HealthScribe streaming session you want information about.</p>
   * @public
   */
  SessionId: string | undefined;
}

/**
 * <p>Makes it possible to specify which speaker is on which channel.
 *       For example, if the clinician is the first participant to speak, you would set the <code>ChannelId</code> of the first
 *       <code>ChannelDefinition</code>
 *       in the list to <code>0</code> (to indicate the first channel) and <code>ParticipantRole</code> to
 *       <code>CLINICIAN</code>
 *       (to indicate that it's the clinician speaking).
 *       Then you would set the <code>ChannelId</code> of the second <code>ChannelDefinition</code> in the list to
 *       <code>1</code>
 *       (to indicate the second channel) and <code>ParticipantRole</code> to <code>PATIENT</code> (to indicate that it's the patient speaking).
 *     </p>
 *          <p>If you don't specify a channel definition, HealthScribe will diarize the transcription and identify speaker roles for each speaker.</p>
 * @public
 */
export interface MedicalScribeChannelDefinition {
  /**
   * <p>Specify the audio channel you want to define.</p>
   * @public
   */
  ChannelId: number | undefined;

  /**
   * <p>Specify the participant that you want to flag.
   *       The allowed options are <code>CLINICIAN</code> and
   *       <code>PATIENT</code>.
   *     </p>
   * @public
   */
  ParticipantRole: MedicalScribeParticipantRole | undefined;
}

/**
 * <p>Contains encryption related settings to be used for data encryption with Key Management Service, including KmsEncryptionContext and KmsKeyId.
 *      The KmsKeyId is required, while KmsEncryptionContext is optional for additional layer of security.
 *     </p>
 *          <p>By default, Amazon Web Services HealthScribe provides encryption at rest to protect sensitive customer data using Amazon S3-managed keys. HealthScribe uses the KMS key you specify as a second layer of
 *       encryption.</p>
 *          <p>
 *       Your <code>ResourceAccessRoleArn</code>
 *       must permission to use your KMS key.
 *       For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/health-scribe-encryption.html">Data Encryption at rest for Amazon Web Services HealthScribe</a>.
 *     </p>
 * @public
 */
export interface MedicalScribeEncryptionSettings {
  /**
   * <p>A map of plain text, non-secret key:value pairs, known as encryption context pairs, that provide an added layer of
   *       security for your data. For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/key-management.html#kms-context">KMSencryption context </a> and <a href="https://docs.aws.amazon.com/transcribe/latest/dg/symmetric-asymmetric.html">Asymmetric keys in KMS
   *       </a>. </p>
   * @public
   */
  KmsEncryptionContext?: Record<string, string> | undefined;

  /**
   * <p>The ID of the KMS key you want to use for your streaming session. You
   *       can specify its KMS key ID, key Amazon Resource Name (ARN), alias name, or alias ARN. When using an alias name, prefix it with <code>"alias/"</code>.
   *       To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN.</p>
   *          <p>For example:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab</p>
   *             </li>
   *             <li>
   *                <p>Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</p>
   *             </li>
   *             <li>
   *                <p>
   *           Alias name: alias/ExampleAlias</p>
   *             </li>
   *             <li>
   *                <p>
   *           Alias ARN: arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias
   *         </p>
   *             </li>
   *          </ul>
   *          <p>
   *       To get the key ID and key ARN for a KMS key, use the <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_ListKeys.html">ListKeys</a> or <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html">DescribeKey</a> KMS API operations.
   *       To get the alias name and alias ARN, use <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_ListAliases.html">ListKeys</a> API operation.
   *     </p>
   * @public
   */
  KmsKeyId: string | undefined;
}

/**
 * <p>Contains details for the result of post-stream analytics.
 *     </p>
 * @public
 */
export interface MedicalScribePostStreamAnalyticsResult {
  /**
   * <p>Provides the Clinical Note Generation result for post-stream analytics.</p>
   * @public
   */
  ClinicalNoteGenerationResult?: ClinicalNoteGenerationResult | undefined;
}

/**
 * <p>The settings for post-stream analytics.
 *     </p>
 * @public
 */
export interface MedicalScribePostStreamAnalyticsSettings {
  /**
   * <p>Specify settings for the post-stream clinical note generation.</p>
   * @public
   */
  ClinicalNoteGenerationSettings: ClinicalNoteGenerationSettings | undefined;
}

/**
 * <p>Contains details about a Amazon Web Services HealthScribe streaming session.</p>
 * @public
 */
export interface MedicalScribeStreamDetails {
  /**
   * <p>The identifier of the HealthScribe streaming session.</p>
   * @public
   */
  SessionId?: string | undefined;

  /**
   * <p>The date and time when the HealthScribe streaming session was created.</p>
   * @public
   */
  StreamCreatedAt?: Date | undefined;

  /**
   * <p>The date and time when the HealthScribe streaming session was ended.</p>
   * @public
   */
  StreamEndedAt?: Date | undefined;

  /**
   * <p>The Language Code of the HealthScribe streaming session.</p>
   * @public
   */
  LanguageCode?: MedicalScribeLanguageCode | undefined;

  /**
   * <p>The sample rate (in hertz) of the HealthScribe streaming session.</p>
   * @public
   */
  MediaSampleRateHertz?: number | undefined;

  /**
   * <p>The Media Encoding of the HealthScribe streaming session.</p>
   * @public
   */
  MediaEncoding?: MedicalScribeMediaEncoding | undefined;

  /**
   * <p>The vocabulary name of the HealthScribe streaming session.</p>
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * <p>The name of the vocabulary filter used for the HealthScribe streaming session .</p>
   * @public
   */
  VocabularyFilterName?: string | undefined;

  /**
   * <p>The method of the vocabulary filter for the HealthScribe streaming session.</p>
   * @public
   */
  VocabularyFilterMethod?: MedicalScribeVocabularyFilterMethod | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the role used in the HealthScribe streaming session.</p>
   * @public
   */
  ResourceAccessRoleArn?: string | undefined;

  /**
   * <p>The Channel Definitions of the HealthScribe streaming session.</p>
   * @public
   */
  ChannelDefinitions?: MedicalScribeChannelDefinition[] | undefined;

  /**
   * <p>The Encryption Settings of the HealthScribe streaming session.</p>
   * @public
   */
  EncryptionSettings?: MedicalScribeEncryptionSettings | undefined;

  /**
   * <p>The streaming status of the HealthScribe streaming session.</p>
   *          <p>Possible Values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PAUSED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETED</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>This status is specific to real-time streaming.
   *       A <code>COMPLETED</code> status doesn't mean that the post-stream analytics is complete.
   *       To get status of an analytics result, check the <code>Status</code> field for the analytics result within the
   *       <code>MedicalScribePostStreamAnalyticsResult</code>. For example, you can view the status of the
   *       <code>ClinicalNoteGenerationResult</code>.
   *     </p>
   *          </note>
   * @public
   */
  StreamStatus?: MedicalScribeStreamStatus | undefined;

  /**
   * <p>The post-stream analytics settings of the HealthScribe streaming session.</p>
   * @public
   */
  PostStreamAnalyticsSettings?: MedicalScribePostStreamAnalyticsSettings | undefined;

  /**
   * <p>The result of post-stream analytics for the HealthScribe streaming session.</p>
   * @public
   */
  PostStreamAnalyticsResult?: MedicalScribePostStreamAnalyticsResult | undefined;

  /**
   * <p>Indicates whether the <code>MedicalScribeContext</code> object was provided when the stream was started.</p>
   * @public
   */
  MedicalScribeContextProvided?: boolean | undefined;
}

/**
 * @public
 */
export interface GetMedicalScribeStreamResponse {
  /**
   * <p>Provides details about a HealthScribe streaming session.</p>
   * @public
   */
  MedicalScribeStreamDetails?: MedicalScribeStreamDetails | undefined;
}

/**
 * <p>The language code that represents the language identified in your audio, including the associated
 *       confidence score. If you enabled channel identification in your request and each channel contained a
 *       different language, you will have more than one <code>LanguageWithScore</code> result.</p>
 * @public
 */
export interface LanguageWithScore {
  /**
   * <p>The language code of the identified language.</p>
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * <p>The confidence score associated with the identified language code. Confidence scores are values
   *       between zero and one; larger values indicate a higher confidence in the identified language.</p>
   * @public
   */
  Score?: number | undefined;
}

/**
 * <p>Contains entities identified as personal health information (PHI) in your
 *             transcription output, along with various associated attributes. Examples include
 *             category, confidence score, type, stability score, and start and end times.</p>
 * @public
 */
export interface MedicalEntity {
  /**
   * <p>The start time, in seconds, of the utterance that was identified as PHI.</p>
   * @public
   */
  StartTime?: number | undefined;

  /**
   * <p>The end time, in seconds, of the utterance that was identified as PHI.</p>
   * @public
   */
  EndTime?: number | undefined;

  /**
   * <p>The category of information identified. The only category is <code>PHI</code>.</p>
   * @public
   */
  Category?: string | undefined;

  /**
   * <p>The word or words identified as PHI.</p>
   * @public
   */
  Content?: string | undefined;

  /**
   * <p>The confidence score associated with the identified PHI entity in your audio.</p>
   *          <p>Confidence scores are values between 0 and 1. A larger value indicates a higher
   *             probability that the identified entity correctly matches the entity spoken in your
   *             media.</p>
   * @public
   */
  Confidence?: number | undefined;
}

/**
 * <p>A word, phrase, or punctuation mark in your transcription output, along with various
 *             associated attributes, such as confidence score, type, and start and end times.</p>
 * @public
 */
export interface MedicalItem {
  /**
   * <p>The start time, in seconds, of the transcribed item.</p>
   * @public
   */
  StartTime?: number | undefined;

  /**
   * <p>The end time, in seconds, of the transcribed item.</p>
   * @public
   */
  EndTime?: number | undefined;

  /**
   * <p>The type of item identified. Options are: <code>PRONUNCIATION</code> (spoken
   *             words) and <code>PUNCTUATION</code>.</p>
   * @public
   */
  Type?: ItemType | undefined;

  /**
   * <p>The word or punctuation that was transcribed.</p>
   * @public
   */
  Content?: string | undefined;

  /**
   * <p>The confidence score associated with a word or phrase in your transcript.</p>
   *          <p>Confidence scores are values between 0 and 1. A larger value indicates a higher
   *             probability that the identified item correctly matches the item spoken in your
   *             media.</p>
   * @public
   */
  Confidence?: number | undefined;

  /**
   * <p>If speaker partitioning is enabled, <code>Speaker</code> labels the speaker of the
   *             specified item.</p>
   * @public
   */
  Speaker?: string | undefined;
}

/**
 * <p>A list of possible alternative transcriptions for the input audio. Each alternative may
 *             contain one or more of <code>Items</code>, <code>Entities</code>, or
 *             <code>Transcript</code>.</p>
 * @public
 */
export interface MedicalAlternative {
  /**
   * <p>Contains transcribed text.</p>
   * @public
   */
  Transcript?: string | undefined;

  /**
   * <p>Contains words, phrases, or punctuation marks in your transcription output.</p>
   * @public
   */
  Items?: MedicalItem[] | undefined;

  /**
   * <p>Contains entities identified as personal health information (PHI) in your transcription
   *             output.</p>
   * @public
   */
  Entities?: MedicalEntity[] | undefined;
}

/**
 * <p>The <code>Result</code> associated with a
 *             <code></code>.</p>
 *          <p>Contains a set of transcription results from one or more audio segments, along with
 *             additional information per your request parameters. This can include information relating to
 *             alternative transcriptions, channel identification, partial result stabilization, language
 *             identification, and other transcription-related data.</p>
 * @public
 */
export interface MedicalResult {
  /**
   * <p>Provides a unique identifier for the <code>Result</code>.</p>
   * @public
   */
  ResultId?: string | undefined;

  /**
   * <p>The start time, in seconds, of the <code>Result</code>.</p>
   * @public
   */
  StartTime?: number | undefined;

  /**
   * <p>The end time, in seconds, of the <code>Result</code>.</p>
   * @public
   */
  EndTime?: number | undefined;

  /**
   * <p>Indicates if the segment is complete.</p>
   *          <p>If <code>IsPartial</code> is <code>true</code>, the segment is not complete. If
   *                 <code>IsPartial</code> is <code>false</code>, the segment is complete.</p>
   * @public
   */
  IsPartial?: boolean | undefined;

  /**
   * <p>A list of possible alternative transcriptions for the input audio. Each alternative may
   *             contain one or more of <code>Items</code>, <code>Entities</code>, or
   *             <code>Transcript</code>.</p>
   * @public
   */
  Alternatives?: MedicalAlternative[] | undefined;

  /**
   * <p>Indicates the channel identified for the <code>Result</code>.</p>
   * @public
   */
  ChannelId?: string | undefined;
}

/**
 * <p>A wrapper for your audio chunks</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/event-stream.html">Event stream encoding</a>.
 *     </p>
 * @public
 */
export interface MedicalScribeAudioEvent {
  /**
   * <p>
   *     An audio blob containing the next segment of audio from your application,
   *     with a maximum duration of 1 second.
   *     The maximum size in bytes varies based on audio properties.
   *   </p>
   *          <p>Find recommended size in <a href="https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html#best-practices">Transcribing streaming best practices</a>.
   *   </p>
   *          <p>
   *     Size calculation: <code>Duration (s) * Sample Rate (Hz) * Number of Channels * 2 (Bytes per Sample)</code>
   *          </p>
   *          <p>
   *     For example, a 1-second chunk of 16 kHz, 2-channel, 16-bit audio would be
   *     <code>1 * 16000 * 2 * 2 = 64000 bytes</code>.
   *   </p>
   *          <p>
   *     For 8 kHz, 1-channel, 16-bit audio, a 1-second chunk would be
   *     <code>1 * 8000 * 1 * 2 = 16000 bytes</code>.
   *   </p>
   * @public
   */
  AudioChunk: Uint8Array | undefined;
}

/**
 * <p>Contains patient-specific information. </p>
 * @public
 */
export interface MedicalScribePatientContext {
  /**
   * <p>The patient's preferred pronouns that the user wants to provide as a context for clinical note generation .</p>
   * @public
   */
  Pronouns?: Pronouns | undefined;
}

/**
 * <p>The <code>MedicalScribeContext</code> object that contains contextual information which is used during clinical note generation
 *             to add relevant context to the note.</p>
 * @public
 */
export interface MedicalScribeContext {
  /**
   * <p>Contains patient-specific information used to customize the clinical note generation.</p>
   * @public
   */
  PatientContext?: MedicalScribePatientContext | undefined;
}

/**
 * <p>Specify details to configure the streaming session, including channel definitions, encryption settings, post-stream analytics
 *       settings, resource access role ARN and vocabulary settings.
 *     </p>
 *          <p>Whether you are starting a new session or resuming an existing session,
 *       your first event must be a <code>MedicalScribeConfigurationEvent</code>.
 *       If you are resuming a session, then this event must have the same configurations that you provided to start the session.
 *     </p>
 * @public
 */
export interface MedicalScribeConfigurationEvent {
  /**
   * <p>Specify the name of the custom vocabulary you want to use for your streaming session.
   *       Custom vocabulary names are case-sensitive.
   *     </p>
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * <p>Specify the name of the custom vocabulary filter you want to include in your streaming session.
   *       Custom vocabulary filter names are case-sensitive.
   *     </p>
   *          <p>If you include <code>VocabularyFilterName</code> in the <code>MedicalScribeConfigurationEvent</code>,
   *       you must also include <code>VocabularyFilterMethod</code>.
   *     </p>
   * @public
   */
  VocabularyFilterName?: string | undefined;

  /**
   * <p>Specify how you want your custom vocabulary filter applied to the streaming session.</p>
   *          <p>To replace words with <code>***</code>, specify <code>mask</code>.
   *     </p>
   *          <p>To delete words, specify <code>remove</code>.
   *     </p>
   *          <p>To flag words without changing them, specify <code>tag</code>.
   *     </p>
   * @public
   */
  VocabularyFilterMethod?: MedicalScribeVocabularyFilterMethod | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 output
   *       bucket you specified, and use your KMS key if supplied. If the role that you specify doesn’t have the
   *       appropriate permissions, your request fails. </p>
   *          <p>
   *       IAM
   *       role ARNs have the format
   *       <code>arn:partition:iam::account:role/role-name-with-path</code>.
   *       For example: <code>arn:aws:iam::111122223333:role/Admin</code>.
   *     </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/health-scribe-streaming.html">Amazon Web Services HealthScribe</a>.</p>
   * @public
   */
  ResourceAccessRoleArn: string | undefined;

  /**
   * <p>Specify which speaker is on which audio channel.</p>
   * @public
   */
  ChannelDefinitions?: MedicalScribeChannelDefinition[] | undefined;

  /**
   * <p>Specify the encryption settings for your streaming session.</p>
   * @public
   */
  EncryptionSettings?: MedicalScribeEncryptionSettings | undefined;

  /**
   * <p>Specify settings for post-stream analytics.</p>
   * @public
   */
  PostStreamAnalyticsSettings: MedicalScribePostStreamAnalyticsSettings | undefined;

  /**
   * <p>The <code>MedicalScribeContext</code> object that contains contextual information used to generate
   *             customized clinical notes.</p>
   * @public
   */
  MedicalScribeContext?: MedicalScribeContext | undefined;
}

/**
 * <p>Specify the lifecycle of your streaming session.</p>
 * @public
 */
export interface MedicalScribeSessionControlEvent {
  /**
   * <p>The type of <code>MedicalScribeSessionControlEvent</code>.
   *     </p>
   *          <p>Possible Values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>END_OF_SESSION</code> - Indicates the audio streaming is complete. After you
   *           send an END_OF_SESSION event, Amazon Web Services HealthScribe starts the post-stream analytics.
   *           The session can't be resumed after this event is sent. After Amazon Web Services HealthScribe processes the event, the real-time <code>StreamStatus</code> is <code>COMPLETED</code>.
   *           You get the <code>StreamStatus</code> and other stream details with the <a href="https://docs.aws.amazon.com/transcribe/latest/APIReference/API_streaming_GetMedicalScribeStream.html">GetMedicalScribeStream</a> API operation.
   *           For more information about different streaming statuses, see the <code>StreamStatus</code> description in the <a href="https://docs.aws.amazon.com/transcribe/latest/APIReference/API_streaming_MedicalScribeStreamDetails.html">MedicalScribeStreamDetails</a>.
   *         </p>
   *             </li>
   *          </ul>
   * @public
   */
  Type: MedicalScribeSessionControlEventType | undefined;
}

/**
 * <p>An encoded stream of events. The stream is encoded as HTTP/2 data frames.</p>
 *          <p>An input stream consists of the following types of events. The first element of the input stream must be the <code>MedicalScribeConfigurationEvent</code> event type.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>MedicalScribeConfigurationEvent</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>MedicalScribeAudioEvent</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>MedicalScribeSessionControlEvent</code>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export type MedicalScribeInputStream =
  | MedicalScribeInputStream.AudioEventMember
  | MedicalScribeInputStream.ConfigurationEventMember
  | MedicalScribeInputStream.SessionControlEventMember
  | MedicalScribeInputStream.$UnknownMember;

/**
 * @public
 */
export namespace MedicalScribeInputStream {
  /**
   * <p>A wrapper for your audio chunks</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/event-stream.html">Event stream encoding</a>.
   *     </p>
   * @public
   */
  export interface AudioEventMember {
    AudioEvent: MedicalScribeAudioEvent;
    SessionControlEvent?: never;
    ConfigurationEvent?: never;
    $unknown?: never;
  }

  /**
   * <p>Specify the lifecycle of your streaming session, such as ending the session.</p>
   * @public
   */
  export interface SessionControlEventMember {
    AudioEvent?: never;
    SessionControlEvent: MedicalScribeSessionControlEvent;
    ConfigurationEvent?: never;
    $unknown?: never;
  }

  /**
   * <p>Specify additional streaming session configurations beyond those provided in your initial start request headers. For example, specify
   *       channel definitions, encryption settings, and post-stream analytics settings.
   *     </p>
   *          <p>Whether you are starting a new session or resuming an existing session,
   *       your first event must be a <code>MedicalScribeConfigurationEvent</code>.
   *     </p>
   * @public
   */
  export interface ConfigurationEventMember {
    AudioEvent?: never;
    SessionControlEvent?: never;
    ConfigurationEvent: MedicalScribeConfigurationEvent;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    AudioEvent?: never;
    SessionControlEvent?: never;
    ConfigurationEvent?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    AudioEvent: (value: MedicalScribeAudioEvent) => T;
    SessionControlEvent: (value: MedicalScribeSessionControlEvent) => T;
    ConfigurationEvent: (value: MedicalScribeConfigurationEvent) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>A word, phrase, or punctuation mark in your transcription output, along with various associated
 *       attributes, such as confidence score, type, and start and end times.
 *     </p>
 * @public
 */
export interface MedicalScribeTranscriptItem {
  /**
   * <p>The start time, in milliseconds, of the transcribed item.</p>
   * @public
   */
  BeginAudioTime?: number | undefined;

  /**
   * <p>The end time, in milliseconds, of the transcribed item.</p>
   * @public
   */
  EndAudioTime?: number | undefined;

  /**
   * <p>The type of item identified. Options are: <code>PRONUNCIATION</code> (spoken words)
   *       and <code>PUNCTUATION</code>.
   *     </p>
   * @public
   */
  Type?: MedicalScribeTranscriptItemType | undefined;

  /**
   * <p>The confidence score associated with a word or phrase in your transcript.</p>
   *          <p>Confidence scores are values between 0 and 1. A larger value indicates a higher
   *       probability that the identified item correctly matches the item spoken in your media.
   *     </p>
   * @public
   */
  Confidence?: number | undefined;

  /**
   * <p>The word, phrase or punctuation mark that was transcribed.</p>
   * @public
   */
  Content?: string | undefined;

  /**
   * <p>Indicates whether the specified item matches a word in the vocabulary filter included in
   *       your configuration event. If <code>true</code>, there is a vocabulary filter match.
   *     </p>
   * @public
   */
  VocabularyFilterMatch?: boolean | undefined;
}

/**
 * <p>Contains a set of transcription results, along with additional information of the segment.</p>
 * @public
 */
export interface MedicalScribeTranscriptSegment {
  /**
   * <p>The identifier of the segment.</p>
   * @public
   */
  SegmentId?: string | undefined;

  /**
   * <p>The start time, in milliseconds, of the segment.</p>
   * @public
   */
  BeginAudioTime?: number | undefined;

  /**
   * <p>The end time, in milliseconds, of the segment.</p>
   * @public
   */
  EndAudioTime?: number | undefined;

  /**
   * <p>Contains transcribed text of the segment.</p>
   * @public
   */
  Content?: string | undefined;

  /**
   * <p>Contains words, phrases, or punctuation marks in your segment.</p>
   * @public
   */
  Items?: MedicalScribeTranscriptItem[] | undefined;

  /**
   * <p>Indicates if the segment is complete.</p>
   *          <p>If <code>IsPartial</code> is <code>true</code>, the segment is not complete.
   *       If <code>IsPartial</code> is <code>false</code>, the segment is complete.
   *     </p>
   * @public
   */
  IsPartial?: boolean | undefined;

  /**
   * <p>Indicates which audio channel is associated with the <code>MedicalScribeTranscriptSegment</code>.
   *     </p>
   *          <p>If <code>MedicalScribeChannelDefinition</code> is not provided in the <code>MedicalScribeConfigurationEvent</code>,
   *       then this field will not be included.
   *     </p>
   * @public
   */
  ChannelId?: string | undefined;
}

/**
 * <p>The event associated with <code>MedicalScribeResultStream</code>.
 *     </p>
 *          <p>Contains <code>MedicalScribeTranscriptSegment</code>, which contains segment related information.
 *     </p>
 * @public
 */
export interface MedicalScribeTranscriptEvent {
  /**
   * <p>The <code>TranscriptSegment</code> associated with a <code>MedicalScribeTranscriptEvent</code>.
   *     </p>
   * @public
   */
  TranscriptSegment?: MedicalScribeTranscriptSegment | undefined;
}

/**
 * <p>Result stream where you will receive the output events.
 *       The details are provided in the <code>MedicalScribeTranscriptEvent</code> object.
 *     </p>
 * @public
 */
export type MedicalScribeResultStream =
  | MedicalScribeResultStream.BadRequestExceptionMember
  | MedicalScribeResultStream.ConflictExceptionMember
  | MedicalScribeResultStream.InternalFailureExceptionMember
  | MedicalScribeResultStream.LimitExceededExceptionMember
  | MedicalScribeResultStream.ServiceUnavailableExceptionMember
  | MedicalScribeResultStream.TranscriptEventMember
  | MedicalScribeResultStream.$UnknownMember;

/**
 * @public
 */
export namespace MedicalScribeResultStream {
  /**
   * <p>The transcript event that contains real-time transcription results.
   *     </p>
   * @public
   */
  export interface TranscriptEventMember {
    TranscriptEvent: MedicalScribeTranscriptEvent;
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
   *       used unsupported values. Check the specified parameters and try your request again.</p>
   * @public
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
   * @public
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
   * @public
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
   * @public
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
   * @public
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

  /**
   * @public
   */
  export interface $UnknownMember {
    TranscriptEvent?: never;
    BadRequestException?: never;
    LimitExceededException?: never;
    InternalFailureException?: never;
    ConflictException?: never;
    ServiceUnavailableException?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    TranscriptEvent: (value: MedicalScribeTranscriptEvent) => T;
    BadRequestException: (value: BadRequestException) => T;
    LimitExceededException: (value: LimitExceededException) => T;
    InternalFailureException: (value: InternalFailureException) => T;
    ConflictException: (value: ConflictException) => T;
    ServiceUnavailableException: (value: ServiceUnavailableException) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The <code>MedicalTranscript</code> associated with a
 *             <code></code>.</p>
 *          <p>
 *             <code>MedicalTranscript</code> contains <code>Results</code>, which contains a set of
 *             transcription results from one or more audio segments, along with additional information per your
 *             request parameters.</p>
 * @public
 */
export interface MedicalTranscript {
  /**
   * <p>Contains a set of transcription results from one or more audio segments, along with
   *             additional information per your request parameters. This can include information relating to
   *             alternative transcriptions, channel identification, partial result stabilization, language
   *             identification, and other transcription-related data.</p>
   * @public
   */
  Results?: MedicalResult[] | undefined;
}

/**
 * <p>The <code>MedicalTranscriptEvent</code> associated with a
 *             <code>MedicalTranscriptResultStream</code>.</p>
 *          <p>Contains a set of transcription results from one or more audio segments, along with additional
 *             information per your request parameters.</p>
 * @public
 */
export interface MedicalTranscriptEvent {
  /**
   * <p>Contains <code>Results</code>, which contains a set of transcription results from one or
   *             more audio segments, along with additional information per your request parameters. This can
   *             include information relating to alternative transcriptions, channel identification, partial result
   *             stabilization, language identification, and other transcription-related data.</p>
   * @public
   */
  Transcript?: MedicalTranscript | undefined;
}

/**
 * <p>Contains detailed information about your streaming session.</p>
 * @public
 */
export type MedicalTranscriptResultStream =
  | MedicalTranscriptResultStream.BadRequestExceptionMember
  | MedicalTranscriptResultStream.ConflictExceptionMember
  | MedicalTranscriptResultStream.InternalFailureExceptionMember
  | MedicalTranscriptResultStream.LimitExceededExceptionMember
  | MedicalTranscriptResultStream.ServiceUnavailableExceptionMember
  | MedicalTranscriptResultStream.TranscriptEventMember
  | MedicalTranscriptResultStream.$UnknownMember;

/**
 * @public
 */
export namespace MedicalTranscriptResultStream {
  /**
   * <p>The <code>MedicalTranscriptEvent</code> associated with a
   *             <code>MedicalTranscriptResultStream</code>.</p>
   *          <p>Contains a set of transcription results from one or more audio segments, along with
   *             additional information per your request parameters. This can include information relating to
   *             alternative transcriptions, channel identification, partial result stabilization, language
   *             identification, and other transcription-related data.</p>
   * @public
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
   *       used unsupported values. Check the specified parameters and try your request again.</p>
   * @public
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
   * @public
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
   * @public
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
   * @public
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
   * @public
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

  /**
   * @public
   */
  export interface $UnknownMember {
    TranscriptEvent?: never;
    BadRequestException?: never;
    LimitExceededException?: never;
    InternalFailureException?: never;
    ConflictException?: never;
    ServiceUnavailableException?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    TranscriptEvent: (value: MedicalTranscriptEvent) => T;
    BadRequestException: (value: BadRequestException) => T;
    LimitExceededException: (value: LimitExceededException) => T;
    InternalFailureException: (value: InternalFailureException) => T;
    ConflictException: (value: ConflictException) => T;
    ServiceUnavailableException: (value: ServiceUnavailableException) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The <code>Result</code> associated with a
 *       <code></code>.</p>
 *          <p>Contains a set of transcription results from one or more audio segments, along with additional
 *       information per your request parameters. This can include information relating to alternative
 *       transcriptions, channel identification, partial result stabilization, language identification, and other
 *       transcription-related data.</p>
 * @public
 */
export interface Result {
  /**
   * <p>Provides a unique identifier for the <code>Result</code>.</p>
   * @public
   */
  ResultId?: string | undefined;

  /**
   * <p>The start time of the <code>Result</code> in seconds, with millisecond precision (e.g., 1.056).</p>
   * @public
   */
  StartTime?: number | undefined;

  /**
   * <p>The end time of the <code>Result</code> in seconds, with millisecond precision (e.g., 1.056).</p>
   * @public
   */
  EndTime?: number | undefined;

  /**
   * <p>Indicates if the segment is complete.</p>
   *          <p>If <code>IsPartial</code> is <code>true</code>, the segment is not complete. If
   *         <code>IsPartial</code> is <code>false</code>, the segment is complete.</p>
   * @public
   */
  IsPartial?: boolean | undefined;

  /**
   * <p>A list of possible alternative transcriptions for the input audio. Each alternative may contain
   *       one or more of <code>Items</code>, <code>Entities</code>, or <code>Transcript</code>.</p>
   * @public
   */
  Alternatives?: Alternative[] | undefined;

  /**
   * <p>Indicates which audio channel is associated with the <code>Result</code>.</p>
   * @public
   */
  ChannelId?: string | undefined;

  /**
   * <p>The language code that represents the language spoken in your audio stream.</p>
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * <p>The language code of the dominant language identified in your stream.</p>
   *          <p>If you enabled channel identification and each channel of your audio contains a different language,
   *       you may have more than one result.</p>
   * @public
   */
  LanguageIdentification?: LanguageWithScore[] | undefined;
}

/**
 * @public
 */
export interface StartCallAnalyticsStreamTranscriptionRequest {
  /**
   * <p>Specify the language code that represents the language spoken in your audio.</p>
   *          <p>For a list of languages supported with real-time Call Analytics, refer to the
   *       <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported
   *         languages</a> table.</p>
   * @public
   */
  LanguageCode?: CallAnalyticsLanguageCode | undefined;

  /**
   * <p>The sample rate of the input audio (in hertz). Low-quality audio, such as telephone audio,
   *       is typically around 8,000 Hz. High-quality audio typically ranges from 16,000 Hz to 48,000 Hz.
   *       Note that the sample rate you specify must match that of your audio.</p>
   * @public
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
   * @public
   */
  MediaEncoding: MediaEncoding | undefined;

  /**
   * <p>Specify the name of the custom vocabulary that you want to use when processing your
   *       transcription. Note that vocabulary names are case sensitive.</p>
   *          <p>If the language of the specified custom vocabulary doesn't match the language identified in
   *       your media, the custom vocabulary is not applied to your transcription.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html">Custom vocabularies</a>.</p>
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * <p>Specify a name for your Call Analytics transcription session. If you don't include this parameter
   *       in your request, Amazon Transcribe generates an ID and returns it in the response.</p>
   * @public
   */
  SessionId?: string | undefined;

  /**
   * <p>An encoded stream of audio blobs. Audio streams are encoded as either HTTP/2 or WebSocket
   *       data frames.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html">Transcribing streaming audio</a>.</p>
   * @public
   */
  AudioStream: AsyncIterable<AudioStream> | undefined;

  /**
   * <p>Specify the name of the custom vocabulary filter that you want to use when processing your
   *       transcription. Note that vocabulary filter names are case sensitive.</p>
   *          <p>If the language of the specified custom vocabulary filter doesn't match the language identified in
   *       your media, the vocabulary filter is not applied to your transcription.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/vocabulary-filtering.html">Using vocabulary filtering with unwanted
   *       words</a>.</p>
   * @public
   */
  VocabularyFilterName?: string | undefined;

  /**
   * <p>Specify how you want your vocabulary filter applied to your transcript.</p>
   *          <p>To replace words with <code>***</code>, choose <code>mask</code>.</p>
   *          <p>To delete words, choose <code>remove</code>.</p>
   *          <p>To flag words without changing them, choose <code>tag</code>.</p>
   * @public
   */
  VocabularyFilterMethod?: VocabularyFilterMethod | undefined;

  /**
   * <p>Specify the name of the custom language model that you want to use when processing your
   *       transcription. Note that language model names are case sensitive.</p>
   *          <p>The language of the specified language model must match the language code you specify
   *       in your transcription request. If the languages don't match, the custom language model isn't applied.
   *       There are no errors or warnings associated with a language mismatch.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-language-models.html">Custom language models</a>.</p>
   * @public
   */
  LanguageModelName?: string | undefined;

  /**
   * <p>Enables automatic language identification for your Call Analytics transcription.</p>
   *          <p>If you include <code>IdentifyLanguage</code>, you must include a list of
   *       language codes, using <code>LanguageOptions</code>, that you think may be present in
   *       your audio stream. You must provide a minimum of two language selections.</p>
   *          <p>You can also include a preferred language using <code>PreferredLanguage</code>. Adding a
   *       preferred language can help Amazon Transcribe identify the language faster than if you omit this
   *       parameter.</p>
   *          <p>Note that you must include either <code>LanguageCode</code> or
   *       <code>IdentifyLanguage</code> in your request. If you include both parameters, your transcription job
   *       fails.</p>
   * @public
   */
  IdentifyLanguage?: boolean | undefined;

  /**
   * <p>Specify two or more language codes that represent the languages you think may be present
   *       in your media.</p>
   *          <p>Including language options can improve the accuracy of language identification.</p>
   *          <p>If you include <code>LanguageOptions</code> in your request, you must also include
   *       <code>IdentifyLanguage</code>.</p>
   *          <p>For a list of languages supported with Call Analytics streaming, refer to the
   *       <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported
   *         languages</a> table.</p>
   *          <important>
   *             <p>You can only include one language dialect per language per stream. For example, you
   *         cannot include <code>en-US</code> and <code>en-AU</code> in the same request.</p>
   *          </important>
   * @public
   */
  LanguageOptions?: string | undefined;

  /**
   * <p>Specify a preferred language from the subset of languages codes you specified in
   *       <code>LanguageOptions</code>.</p>
   *          <p>You can only use this parameter if you've included <code>IdentifyLanguage</code> and
   *         <code>LanguageOptions</code> in your request.</p>
   * @public
   */
  PreferredLanguage?: CallAnalyticsLanguageCode | undefined;

  /**
   * <p>Specify the names of the custom vocabularies that you want to use when processing your
   *       Call Analytics transcription. Note that vocabulary names are case sensitive.</p>
   *          <p>If the custom vocabulary's language doesn't match the identified media language, it won't be applied to the transcription.</p>
   *          <important>
   *             <p>This parameter is only intended for use <b>with</b> the
   *           <code>IdentifyLanguage</code> parameter. If you're <b>not</b>
   *         including <code>IdentifyLanguage</code> in your request and want to use a custom vocabulary
   *         with your transcription, use the <code>VocabularyName</code> parameter instead.</p>
   *          </important>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html">Custom vocabularies</a>.</p>
   * @public
   */
  VocabularyNames?: string | undefined;

  /**
   * <p>Specify the names of the custom vocabulary filters that you want to use when processing
   *       your Call Analytics transcription. Note that vocabulary filter names are case sensitive.</p>
   *          <p>These filters serve to customize the transcript output.</p>
   *          <important>
   *             <p>This parameter is only intended for use <b>with</b>
   *         the <code>IdentifyLanguage</code> parameter. If you're <b>not</b>
   *         including <code>IdentifyLanguage</code> in your request and want to use a custom vocabulary filter
   *         with your transcription, use the <code>VocabularyFilterName</code> parameter instead.</p>
   *          </important>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/vocabulary-filtering.html">Using vocabulary filtering with unwanted
   *       words</a>.</p>
   * @public
   */
  VocabularyFilterNames?: string | undefined;

  /**
   * <p>Enables partial result stabilization for your transcription. Partial result stabilization can reduce
   *       latency in your output, but may impact accuracy. For more information, see
   *       <a href="https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html#streaming-partial-result-stabilization">Partial-result
   *         stabilization</a>.</p>
   * @public
   */
  EnablePartialResultsStabilization?: boolean | undefined;

  /**
   * <p>Specify the level of stability to use when you enable partial results stabilization
   *       (<code>EnablePartialResultsStabilization</code>).</p>
   *          <p>Low stability provides the highest accuracy. High stability transcribes faster, but with slightly
   *       lower accuracy.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html#streaming-partial-result-stabilization">Partial-result
   *       stabilization</a>.</p>
   * @public
   */
  PartialResultsStability?: PartialResultsStability | undefined;

  /**
   * <p>Labels all personally identifiable information (PII) identified in your transcript.</p>
   *          <p>Content identification is performed at the segment level; PII specified in
   *       <code>PiiEntityTypes</code> is flagged upon complete transcription of an audio segment. If you don't
   *       include <code>PiiEntityTypes</code> in your request, all PII is identified.</p>
   *          <p>You can’t set <code>ContentIdentificationType</code> and <code>ContentRedactionType</code>
   *       in the same request. If you set both, your request returns a
   *       <code>BadRequestException</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/pii-redaction.html">Redacting or identifying personally identifiable
   *       information</a>.</p>
   * @public
   */
  ContentIdentificationType?: ContentIdentificationType | undefined;

  /**
   * <p>Redacts all personally identifiable information (PII) identified in your transcript.</p>
   *          <p>Content redaction is performed at the segment level; PII specified in
   *       <code>PiiEntityTypes</code> is redacted upon complete transcription of an audio segment. If you don't
   *       include <code>PiiEntityTypes</code> in your request, all PII is redacted.</p>
   *          <p>You can’t set <code>ContentRedactionType</code> and <code>ContentIdentificationType</code>
   *       in the same request. If you set both, your request returns a <code>BadRequestException</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/pii-redaction.html">Redacting or identifying personally identifiable
   *       information</a>.</p>
   * @public
   */
  ContentRedactionType?: ContentRedactionType | undefined;

  /**
   * <p>Specify which types of personally identifiable information (PII) you want to redact in your
   *       transcript. You can include as many types as you'd like, or you can select
   *       <code>ALL</code>.</p>
   *          <p>Values must be comma-separated and can include: <code>ADDRESS</code>,
   *       <code>BANK_ACCOUNT_NUMBER</code>, <code>BANK_ROUTING</code>,
   *       <code>CREDIT_DEBIT_CVV</code>, <code>CREDIT_DEBIT_EXPIRY</code>,
   *       <code>CREDIT_DEBIT_NUMBER</code>, <code>EMAIL</code>,
   *       <code>NAME</code>, <code>PHONE</code>, <code>PIN</code>,
   *       <code>SSN</code>, or <code>ALL</code>.</p>
   *          <p>Note that if you include <code>PiiEntityTypes</code> in your request, you must also include
   *       <code>ContentIdentificationType</code> or <code>ContentRedactionType</code>.</p>
   *          <p>If you include <code>ContentRedactionType</code> or
   *       <code>ContentIdentificationType</code> in your request, but do not include
   *       <code>PiiEntityTypes</code>, all PII is redacted or identified.</p>
   * @public
   */
  PiiEntityTypes?: string | undefined;
}

/**
 * @public
 */
export interface StartCallAnalyticsStreamTranscriptionResponse {
  /**
   * <p>Provides the identifier for your real-time Call Analytics request.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>Provides the language code that you specified in your Call Analytics request.</p>
   * @public
   */
  LanguageCode?: CallAnalyticsLanguageCode | undefined;

  /**
   * <p>Provides the sample rate that you specified in your Call Analytics request.</p>
   * @public
   */
  MediaSampleRateHertz?: number | undefined;

  /**
   * <p>Provides the media encoding you specified in your Call Analytics request.</p>
   * @public
   */
  MediaEncoding?: MediaEncoding | undefined;

  /**
   * <p>Provides the name of the custom vocabulary that you specified in your Call Analytics request.</p>
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * <p>Provides the identifier for your Call Analytics transcription session.</p>
   * @public
   */
  SessionId?: string | undefined;

  /**
   * <p>Provides detailed information about your real-time Call Analytics session.</p>
   * @public
   */
  CallAnalyticsTranscriptResultStream?: AsyncIterable<CallAnalyticsTranscriptResultStream> | undefined;

  /**
   * <p>Provides the name of the custom vocabulary filter that you specified in your Call Analytics
   *       request.</p>
   * @public
   */
  VocabularyFilterName?: string | undefined;

  /**
   * <p>Provides the vocabulary filtering method used in your Call Analytics transcription.</p>
   * @public
   */
  VocabularyFilterMethod?: VocabularyFilterMethod | undefined;

  /**
   * <p>Provides the name of the custom language model that you specified in your Call Analytics
   *       request.</p>
   * @public
   */
  LanguageModelName?: string | undefined;

  /**
   * <p>Shows whether automatic language identification was enabled for your Call Analytics transcription.</p>
   * @public
   */
  IdentifyLanguage?: boolean | undefined;

  /**
   * <p>Provides the language codes that you specified in your Call Analytics request.</p>
   * @public
   */
  LanguageOptions?: string | undefined;

  /**
   * <p>Provides the preferred language that you specified in your Call Analytics request.</p>
   * @public
   */
  PreferredLanguage?: CallAnalyticsLanguageCode | undefined;

  /**
   * <p>Provides the names of the custom vocabularies that you specified in your Call Analytics request.</p>
   * @public
   */
  VocabularyNames?: string | undefined;

  /**
   * <p>Provides the names of the custom vocabulary filters that you specified in your Call Analytics request.</p>
   * @public
   */
  VocabularyFilterNames?: string | undefined;

  /**
   * <p>Shows whether partial results stabilization was enabled for your Call Analytics transcription.</p>
   * @public
   */
  EnablePartialResultsStabilization?: boolean | undefined;

  /**
   * <p>Provides the stabilization level used for your transcription.</p>
   * @public
   */
  PartialResultsStability?: PartialResultsStability | undefined;

  /**
   * <p>Shows whether content identification was enabled for your Call Analytics transcription.</p>
   * @public
   */
  ContentIdentificationType?: ContentIdentificationType | undefined;

  /**
   * <p>Shows whether content redaction was enabled for your Call Analytics transcription.</p>
   * @public
   */
  ContentRedactionType?: ContentRedactionType | undefined;

  /**
   * <p>Lists the PII entity types you specified in your Call Analytics request.</p>
   * @public
   */
  PiiEntityTypes?: string | undefined;
}

/**
 * @public
 */
export interface StartMedicalScribeStreamRequest {
  /**
   * <p>Specify an identifier for your streaming session (in UUID format).
   *       If you don't include a SessionId in your request,
   *       Amazon Web Services HealthScribe generates an ID and returns it in the response.
   *     </p>
   * @public
   */
  SessionId?: string | undefined;

  /**
   * <p>Specify the language code for your HealthScribe streaming session.</p>
   * @public
   */
  LanguageCode: MedicalScribeLanguageCode | undefined;

  /**
   * <p>Specify the sample rate of the input audio (in hertz).
   *       Amazon Web Services HealthScribe supports a range from 16,000 Hz to 48,000 Hz.
   *       The sample rate you specify must match that of your audio.
   *     </p>
   * @public
   */
  MediaSampleRateHertz: number | undefined;

  /**
   * <p>Specify the encoding used for the input audio.</p>
   *          <p>Supported formats are:</p>
   *          <ul>
   *             <li>
   *                <p>FLAC</p>
   *             </li>
   *             <li>
   *                <p>OPUS-encoded audio in an Ogg container</p>
   *             </li>
   *             <li>
   *                <p>PCM (only signed 16-bit little-endian audio formats, which does not include
   *           WAV)
   *         </p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-input.html#how-input-audio">Media
   *       formats</a>.
   *     </p>
   * @public
   */
  MediaEncoding: MedicalScribeMediaEncoding | undefined;

  /**
   * <p>Specify the input stream where you will send events in real time.</p>
   *          <p>The first element of the input stream must be a <code>MedicalScribeConfigurationEvent</code>.
   *     </p>
   * @public
   */
  InputStream: AsyncIterable<MedicalScribeInputStream> | undefined;
}

/**
 * @public
 */
export interface StartMedicalScribeStreamResponse {
  /**
   * <p>The identifier (in UUID format) for your streaming session.</p>
   *          <p>If you already started streaming, this is same ID as the one you specified in your initial <code>StartMedicalScribeStreamRequest</code>.
   *     </p>
   * @public
   */
  SessionId?: string | undefined;

  /**
   * <p>The unique identifier for your streaming request.
   *     </p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>The Language Code that you specified in your request.
   *       Same as provided in the <code>StartMedicalScribeStreamRequest</code>.
   *     </p>
   * @public
   */
  LanguageCode?: MedicalScribeLanguageCode | undefined;

  /**
   * <p>The sample rate (in hertz) that you specified in your request.
   *       Same as provided in the
   *       <code>StartMedicalScribeStreamRequest</code>
   *          </p>
   * @public
   */
  MediaSampleRateHertz?: number | undefined;

  /**
   * <p>The Media Encoding you specified in your request.
   *       Same as provided in the
   *       <code>StartMedicalScribeStreamRequest</code>
   *          </p>
   * @public
   */
  MediaEncoding?: MedicalScribeMediaEncoding | undefined;

  /**
   * <p>The result stream where you will receive the output events.
   *     </p>
   * @public
   */
  ResultStream?: AsyncIterable<MedicalScribeResultStream> | undefined;
}

/**
 * @public
 */
export interface StartMedicalStreamTranscriptionRequest {
  /**
   * <p>Specify the language code that represents the language spoken in your audio.</p>
   *          <important>
   *             <p>Amazon Transcribe Medical only supports US English (<code>en-US</code>).</p>
   *          </important>
   * @public
   */
  LanguageCode: LanguageCode | undefined;

  /**
   * <p>The sample rate of the input audio (in hertz). Amazon Transcribe Medical supports a
   *             range from 16,000 Hz to 48,000 Hz. Note that the sample rate you specify must match that
   *             of your audio.</p>
   * @public
   */
  MediaSampleRateHertz: number | undefined;

  /**
   * <p>Specify the encoding used for the input audio. Supported formats are:</p>
   *          <ul>
   *             <li>
   *                <p>FLAC</p>
   *             </li>
   *             <li>
   *                <p>OPUS-encoded audio in an Ogg container</p>
   *             </li>
   *             <li>
   *                <p>PCM (only signed 16-bit little-endian audio formats, which does not include
   *                     WAV)</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-input.html#how-input-audio">Media formats</a>.</p>
   * @public
   */
  MediaEncoding: MediaEncoding | undefined;

  /**
   * <p>Specify the name of the custom vocabulary that you want to use when processing your
   *             transcription. Note that vocabulary names are case sensitive.</p>
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * <p>Specify the medical specialty contained in your audio.</p>
   * @public
   */
  Specialty: Specialty | undefined;

  /**
   * <p>Specify the type of input audio. For example, choose <code>DICTATION</code> for a
   *             provider dictating patient notes and <code>CONVERSATION</code> for a dialogue between a
   *             patient and a medical professional.</p>
   * @public
   */
  Type: Type | undefined;

  /**
   * <p>Enables speaker partitioning (diarization) in your transcription output. Speaker
   *             partitioning labels the speech from individual speakers in your media file.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/diarization.html">Partitioning speakers (diarization)</a>.</p>
   * @public
   */
  ShowSpeakerLabel?: boolean | undefined;

  /**
   * <p>Specify a name for your transcription session. If you don't include this parameter in
   *             your request, Amazon Transcribe Medical generates an ID and returns it in the
   *             response.</p>
   * @public
   */
  SessionId?: string | undefined;

  /**
   * <p>An encoded stream of audio blobs. Audio streams are encoded as either HTTP/2 or WebSocket
   *       data frames.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html">Transcribing streaming audio</a>.</p>
   * @public
   */
  AudioStream: AsyncIterable<AudioStream> | undefined;

  /**
   * <p>Enables channel identification in multi-channel audio.</p>
   *          <p>Channel identification transcribes the audio on each channel independently, then appends
   *             the output for each channel into one transcript.</p>
   *          <p>If you have multi-channel audio and do not enable channel identification, your audio is
   *             transcribed in a continuous manner and your transcript is not separated by channel.</p>
   *          <p>If you include <code>EnableChannelIdentification</code> in your request, you must also
   *             include <code>NumberOfChannels</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/channel-id.html">Transcribing multi-channel audio</a>.</p>
   * @public
   */
  EnableChannelIdentification?: boolean | undefined;

  /**
   * <p>Specify the number of channels in your audio stream. This value must be
   *             <code>2</code>, as only two channels are supported. If your audio doesn't contain
   *             multiple channels, do not include this parameter in your request.</p>
   *          <p>If you include <code>NumberOfChannels</code> in your request, you must also
   *             include <code>EnableChannelIdentification</code>.</p>
   * @public
   */
  NumberOfChannels?: number | undefined;

  /**
   * <p>Labels all personal health information (PHI) identified in your transcript.</p>
   *          <p>Content identification is performed at the segment level; PHI is flagged upon complete
   *             transcription of an audio segment.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/phi-id.html">Identifying personal health information (PHI) in a
   *             transcription</a>.</p>
   * @public
   */
  ContentIdentificationType?: MedicalContentIdentificationType | undefined;
}

/**
 * @public
 */
export interface StartMedicalStreamTranscriptionResponse {
  /**
   * <p>Provides the identifier for your streaming request.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>Provides the language code that you specified in your request. This must be
   *                 <code>en-US</code>.</p>
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * <p>Provides the sample rate that you specified in your request.</p>
   * @public
   */
  MediaSampleRateHertz?: number | undefined;

  /**
   * <p>Provides the media encoding you specified in your request.</p>
   * @public
   */
  MediaEncoding?: MediaEncoding | undefined;

  /**
   * <p>Provides the name of the custom vocabulary that you specified in your request.</p>
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * <p>Provides the medical specialty that you specified in your request.</p>
   * @public
   */
  Specialty?: Specialty | undefined;

  /**
   * <p>Provides the type of audio you specified in your request.</p>
   * @public
   */
  Type?: Type | undefined;

  /**
   * <p>Shows whether speaker partitioning was enabled for your transcription.</p>
   * @public
   */
  ShowSpeakerLabel?: boolean | undefined;

  /**
   * <p>Provides the identifier for your transcription session.</p>
   * @public
   */
  SessionId?: string | undefined;

  /**
   * <p>Provides detailed information about your streaming session.</p>
   * @public
   */
  TranscriptResultStream?: AsyncIterable<MedicalTranscriptResultStream> | undefined;

  /**
   * <p>Shows whether channel identification was enabled for your transcription.</p>
   * @public
   */
  EnableChannelIdentification?: boolean | undefined;

  /**
   * <p>Provides the number of channels that you specified in your request.</p>
   * @public
   */
  NumberOfChannels?: number | undefined;

  /**
   * <p>Shows whether content identification was enabled for your transcription.</p>
   * @public
   */
  ContentIdentificationType?: MedicalContentIdentificationType | undefined;
}

/**
 * @public
 */
export interface StartStreamTranscriptionRequest {
  /**
   * <p>Specify the language code that represents the language spoken in your audio.</p>
   *          <p>If you're unsure of the language spoken in your audio, consider using
   *       <code>IdentifyLanguage</code> to enable automatic language identification.</p>
   *          <p>For a list of languages supported with Amazon Transcribe streaming, refer to the
   *       <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported
   *         languages</a> table.</p>
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * <p>The sample rate of the input audio (in hertz). Low-quality audio, such as telephone audio,
   *       is typically around 8,000 Hz. High-quality audio typically ranges from 16,000 Hz to 48,000 Hz.
   *       Note that the sample rate you specify must match that of your audio.</p>
   * @public
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
   * @public
   */
  MediaEncoding: MediaEncoding | undefined;

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
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * <p>Specify a name for your transcription session. If you don't include this parameter in your request,
   *       Amazon Transcribe generates an ID and returns it in the response.</p>
   * @public
   */
  SessionId?: string | undefined;

  /**
   * <p>An encoded stream of audio blobs. Audio streams are encoded as either HTTP/2 or WebSocket
   *       data frames.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html">Transcribing streaming audio</a>.</p>
   * @public
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
   * @public
   */
  VocabularyFilterName?: string | undefined;

  /**
   * <p>Specify how you want your vocabulary filter applied to your transcript.</p>
   *          <p>To replace words with <code>***</code>, choose <code>mask</code>.</p>
   *          <p>To delete words, choose <code>remove</code>.</p>
   *          <p>To flag words without changing them, choose <code>tag</code>.</p>
   * @public
   */
  VocabularyFilterMethod?: VocabularyFilterMethod | undefined;

  /**
   * <p>Enables speaker partitioning (diarization) in your transcription output. Speaker partitioning
   *       labels the speech from individual speakers in your media file.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/diarization.html">Partitioning speakers (diarization)</a>.</p>
   * @public
   */
  ShowSpeakerLabel?: boolean | undefined;

  /**
   * <p>Enables channel identification in multi-channel audio.</p>
   *          <p>Channel identification transcribes the audio on each channel independently, then appends the
   *       output for each channel into one transcript.</p>
   *          <p>If you have multi-channel audio and do not enable channel identification, your audio is
   *       transcribed in a continuous manner and your transcript is not separated by channel.</p>
   *          <p>If you include <code>EnableChannelIdentification</code> in your request, you must also
   *       include <code>NumberOfChannels</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/channel-id.html">Transcribing multi-channel audio</a>.</p>
   * @public
   */
  EnableChannelIdentification?: boolean | undefined;

  /**
   * <p>Specify the number of channels in your audio stream. This value must be
   *       <code>2</code>, as only two channels are supported. If your audio doesn't contain
   *       multiple channels, do not include this parameter in your request.</p>
   *          <p>If you include <code>NumberOfChannels</code> in your request, you must also
   *       include <code>EnableChannelIdentification</code>.</p>
   * @public
   */
  NumberOfChannels?: number | undefined;

  /**
   * <p>Enables partial result stabilization for your transcription. Partial result stabilization can reduce
   *       latency in your output, but may impact accuracy. For more information, see
   *       <a href="https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html#streaming-partial-result-stabilization">Partial-result
   *       stabilization</a>.</p>
   * @public
   */
  EnablePartialResultsStabilization?: boolean | undefined;

  /**
   * <p>Specify the level of stability to use when you enable partial results stabilization
   *       (<code>EnablePartialResultsStabilization</code>).</p>
   *          <p>Low stability provides the highest accuracy. High stability transcribes faster, but with slightly
   *       lower accuracy.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html#streaming-partial-result-stabilization">Partial-result
   *       stabilization</a>.</p>
   * @public
   */
  PartialResultsStability?: PartialResultsStability | undefined;

  /**
   * <p>Labels all personally identifiable information (PII) identified in your transcript.</p>
   *          <p>Content identification is performed at the segment level; PII specified in
   *       <code>PiiEntityTypes</code> is flagged upon complete transcription of an audio segment. If you don't
   *       include <code>PiiEntityTypes</code> in your request, all PII is identified.</p>
   *          <p>You can’t set <code>ContentIdentificationType</code> and <code>ContentRedactionType</code>
   *       in the same request. If you set both, your request returns a
   *       <code>BadRequestException</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/pii-redaction.html">Redacting or identifying personally identifiable
   *       information</a>.</p>
   * @public
   */
  ContentIdentificationType?: ContentIdentificationType | undefined;

  /**
   * <p>Redacts all personally identifiable information (PII) identified in your transcript.</p>
   *          <p>Content redaction is performed at the segment level; PII specified in
   *       <code>PiiEntityTypes</code> is redacted upon complete transcription of an audio segment. If you don't
   *       include <code>PiiEntityTypes</code> in your request, all PII is redacted.</p>
   *          <p>You can’t set <code>ContentRedactionType</code> and <code>ContentIdentificationType</code>
   *       in the same request. If you set both, your request returns a <code>BadRequestException</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/pii-redaction.html">Redacting or identifying personally identifiable
   *       information</a>.</p>
   * @public
   */
  ContentRedactionType?: ContentRedactionType | undefined;

  /**
   * <p>Specify which types of personally identifiable information (PII) you want to redact in your
   *       transcript. You can include as many types as you'd like, or you can select
   *       <code>ALL</code>.</p>
   *          <p>Values must be comma-separated and can include: <code>ADDRESS</code>,
   *       <code>BANK_ACCOUNT_NUMBER</code>, <code>BANK_ROUTING</code>,
   *       <code>CREDIT_DEBIT_CVV</code>, <code>CREDIT_DEBIT_EXPIRY</code>,
   *       <code>CREDIT_DEBIT_NUMBER</code>, <code>EMAIL</code>,
   *       <code>NAME</code>, <code>PHONE</code>, <code>PIN</code>,
   *       <code>SSN</code>, or <code>ALL</code>.</p>
   *          <p>Note that if you include <code>PiiEntityTypes</code> in your request, you must also include
   *       <code>ContentIdentificationType</code> or <code>ContentRedactionType</code>.</p>
   *          <p>If you include <code>ContentRedactionType</code> or
   *       <code>ContentIdentificationType</code> in your request, but do not include
   *       <code>PiiEntityTypes</code>, all PII is redacted or identified.</p>
   * @public
   */
  PiiEntityTypes?: string | undefined;

  /**
   * <p>Specify the name of the custom language model that you want to use when processing your
   *       transcription. Note that language model names are case sensitive.</p>
   *          <p>The language of the specified language model must match the language code you specify
   *       in your transcription request. If the languages don't match, the custom language model isn't applied.
   *       There are no errors or warnings associated with a language mismatch.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-language-models.html">Custom language models</a>.</p>
   * @public
   */
  LanguageModelName?: string | undefined;

  /**
   * <p>Enables automatic language identification for your transcription.</p>
   *          <p>If you include <code>IdentifyLanguage</code>, you must include a list of
   *       language codes, using <code>LanguageOptions</code>, that you think may be present in
   *       your audio stream. </p>
   *          <p>You can also include a preferred language using <code>PreferredLanguage</code>. Adding a
   *       preferred language can help Amazon Transcribe identify the language faster than if you omit this
   *       parameter.</p>
   *          <p>If you have multi-channel audio that contains different languages on each channel, and you've
   *       enabled channel identification, automatic language identification identifies the dominant language on
   *       each audio channel.</p>
   *          <p>Note that you must include either <code>LanguageCode</code> or
   *       <code>IdentifyLanguage</code> or <code>IdentifyMultipleLanguages</code> in your request. If you include more than one of these parameters, your transcription job
   *       fails.</p>
   *          <p>Streaming language identification can't be combined with custom language models or
   *       redaction.</p>
   * @public
   */
  IdentifyLanguage?: boolean | undefined;

  /**
   * <p>Specify two or more language codes that represent the languages you think may be present
   *       in your media; including more than five is not recommended.</p>
   *          <p>Including language options can improve the accuracy of language identification.</p>
   *          <p>If you include <code>LanguageOptions</code> in your request, you must also include
   *       <code>IdentifyLanguage</code> or <code>IdentifyMultipleLanguages</code>.</p>
   *          <p>For a list of languages supported with Amazon Transcribe streaming, refer to the
   *       <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported
   *         languages</a> table.</p>
   *          <important>
   *             <p>You can only include one language dialect per language per stream. For example, you
   *         cannot include <code>en-US</code> and <code>en-AU</code> in the same request.</p>
   *          </important>
   * @public
   */
  LanguageOptions?: string | undefined;

  /**
   * <p>Specify a preferred language from the subset of languages codes you specified in
   *       <code>LanguageOptions</code>.</p>
   *          <p>You can only use this parameter if you've included <code>IdentifyLanguage</code> and
   *         <code>LanguageOptions</code> in your request.</p>
   * @public
   */
  PreferredLanguage?: LanguageCode | undefined;

  /**
   * <p>Enables automatic multi-language identification in your transcription job request. Use this parameter if your stream contains more than one language. If your stream contains only one language, use IdentifyLanguage instead.</p>
   *          <p>If you include <code>IdentifyMultipleLanguages</code>, you must include a list of language codes, using <code>LanguageOptions</code>, that you think may be present in your stream.</p>
   *          <p>If you want to apply a custom vocabulary or a custom vocabulary filter to your automatic multiple language identification request, include <code>VocabularyNames</code> or <code>VocabularyFilterNames</code>.</p>
   *          <p>Note that you must include one of <code>LanguageCode</code>, <code>IdentifyLanguage</code>, or <code>IdentifyMultipleLanguages</code> in your request. If you include more than one of these parameters, your transcription job fails.</p>
   * @public
   */
  IdentifyMultipleLanguages?: boolean | undefined;

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
   * @public
   */
  VocabularyNames?: string | undefined;

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
   * @public
   */
  VocabularyFilterNames?: string | undefined;
}

/**
 * <p>The <code>Transcript</code> associated with a
 *       <code></code>.</p>
 *          <p>
 *             <code>Transcript</code> contains <code>Results</code>, which contains a set of transcription
 *       results from one or more audio segments, along with additional information per your request
 *       parameters.</p>
 * @public
 */
export interface Transcript {
  /**
   * <p>Contains a set of transcription results from one or more audio segments, along with additional
   *       information per your request parameters. This can include information relating to alternative
   *       transcriptions, channel identification, partial result stabilization, language identification, and other
   *       transcription-related data.</p>
   * @public
   */
  Results?: Result[] | undefined;
}

/**
 * <p>The <code>TranscriptEvent</code> associated with a
 *       <code>TranscriptResultStream</code>.</p>
 *          <p>Contains a set of transcription results from one or more audio segments, along with additional
 *       information per your request parameters.</p>
 * @public
 */
export interface TranscriptEvent {
  /**
   * <p>Contains <code>Results</code>, which contains a set of transcription results from one or
   *       more audio segments, along with additional information per your request parameters. This can
   *       include information relating to alternative transcriptions, channel identification, partial
   *       result stabilization, language identification, and other transcription-related data.</p>
   * @public
   */
  Transcript?: Transcript | undefined;
}

/**
 * <p>Contains detailed information about your streaming session.</p>
 * @public
 */
export type TranscriptResultStream =
  | TranscriptResultStream.BadRequestExceptionMember
  | TranscriptResultStream.ConflictExceptionMember
  | TranscriptResultStream.InternalFailureExceptionMember
  | TranscriptResultStream.LimitExceededExceptionMember
  | TranscriptResultStream.ServiceUnavailableExceptionMember
  | TranscriptResultStream.TranscriptEventMember
  | TranscriptResultStream.$UnknownMember;

/**
 * @public
 */
export namespace TranscriptResultStream {
  /**
   * <p>Contains <code>Transcript</code>, which contains <code>Results</code>. The
   *       <code></code> object contains a set of transcription
   *       results from one or more audio segments, along with additional information per your request
   *       parameters.</p>
   * @public
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
   * @public
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
   * @public
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
   * @public
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
   * @public
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
   * @public
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

  /**
   * @public
   */
  export interface $UnknownMember {
    TranscriptEvent?: never;
    BadRequestException?: never;
    LimitExceededException?: never;
    InternalFailureException?: never;
    ConflictException?: never;
    ServiceUnavailableException?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    TranscriptEvent: (value: TranscriptEvent) => T;
    BadRequestException: (value: BadRequestException) => T;
    LimitExceededException: (value: LimitExceededException) => T;
    InternalFailureException: (value: InternalFailureException) => T;
    ConflictException: (value: ConflictException) => T;
    ServiceUnavailableException: (value: ServiceUnavailableException) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface StartStreamTranscriptionResponse {
  /**
   * <p>Provides the identifier for your streaming request.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>Provides the language code that you specified in your request.</p>
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * <p>Provides the sample rate that you specified in your request.</p>
   * @public
   */
  MediaSampleRateHertz?: number | undefined;

  /**
   * <p>Provides the media encoding you specified in your request.</p>
   * @public
   */
  MediaEncoding?: MediaEncoding | undefined;

  /**
   * <p>Provides the name of the custom vocabulary that you specified in your request.</p>
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * <p>Provides the identifier for your transcription session.</p>
   * @public
   */
  SessionId?: string | undefined;

  /**
   * <p>Provides detailed information about your streaming session.</p>
   * @public
   */
  TranscriptResultStream?: AsyncIterable<TranscriptResultStream> | undefined;

  /**
   * <p>Provides the name of the custom vocabulary filter that you specified in your
   *       request.</p>
   * @public
   */
  VocabularyFilterName?: string | undefined;

  /**
   * <p>Provides the vocabulary filtering method used in your transcription.</p>
   * @public
   */
  VocabularyFilterMethod?: VocabularyFilterMethod | undefined;

  /**
   * <p>Shows whether speaker partitioning was enabled for your transcription.</p>
   * @public
   */
  ShowSpeakerLabel?: boolean | undefined;

  /**
   * <p>Shows whether channel identification was enabled for your transcription.</p>
   * @public
   */
  EnableChannelIdentification?: boolean | undefined;

  /**
   * <p>Provides the number of channels that you specified in your request.</p>
   * @public
   */
  NumberOfChannels?: number | undefined;

  /**
   * <p>Shows whether partial results stabilization was enabled for your transcription.</p>
   * @public
   */
  EnablePartialResultsStabilization?: boolean | undefined;

  /**
   * <p>Provides the stabilization level used for your transcription.</p>
   * @public
   */
  PartialResultsStability?: PartialResultsStability | undefined;

  /**
   * <p>Shows whether content identification was enabled for your transcription.</p>
   * @public
   */
  ContentIdentificationType?: ContentIdentificationType | undefined;

  /**
   * <p>Shows whether content redaction was enabled for your transcription.</p>
   * @public
   */
  ContentRedactionType?: ContentRedactionType | undefined;

  /**
   * <p>Lists the PII entity types you specified in your request.</p>
   * @public
   */
  PiiEntityTypes?: string | undefined;

  /**
   * <p>Provides the name of the custom language model that you specified in your request.</p>
   * @public
   */
  LanguageModelName?: string | undefined;

  /**
   * <p>Shows whether automatic language identification was enabled for your
   *       transcription.</p>
   * @public
   */
  IdentifyLanguage?: boolean | undefined;

  /**
   * <p>Provides the language codes that you specified in your request.</p>
   * @public
   */
  LanguageOptions?: string | undefined;

  /**
   * <p>Provides the preferred language that you specified in your request.</p>
   * @public
   */
  PreferredLanguage?: LanguageCode | undefined;

  /**
   * <p>Shows whether automatic multi-language identification was enabled for your transcription.</p>
   * @public
   */
  IdentifyMultipleLanguages?: boolean | undefined;

  /**
   * <p>Provides the names of the custom vocabularies that you specified in your request.</p>
   * @public
   */
  VocabularyNames?: string | undefined;

  /**
   * <p>Provides the names of the custom vocabulary filters that you specified in your
   *       request.</p>
   * @public
   */
  VocabularyFilterNames?: string | undefined;
}
