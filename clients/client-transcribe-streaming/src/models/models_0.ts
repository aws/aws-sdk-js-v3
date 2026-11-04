// smithy-typescript generated code
import type {
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
  TranscriptFormat,
  Type,
  VocabularyFilterMethod,
} from "./enums";
import type {
  BadRequestException,
  ConflictException,
  InternalFailureException,
  LimitExceededException,
  ServiceUnavailableException,
} from "./errors";

/**
 * Contains entities identified as personally identifiable information (PII) in your transcription output, along with various associated attributes. Examples include category, confidence score, type, stability score, and start and end times.
 *
 * @public
 */
export interface Entity {
  /**
   * The start time of the utterance that was identified as PII in seconds, with millisecond precision (e.g., 1.056)
   *
   * @public
   */
  StartTime?: number | undefined;

  /**
   * The end time of the utterance that was identified as PII in seconds, with millisecond precision (e.g., 1.056)
   *
   * @public
   */
  EndTime?: number | undefined;

  /**
   * The category of information identified. The only category is `PII`.
   *
   * @public
   */
  Category?: string | undefined;

  /**
   * The type of PII identified. For example, `NAME` or `CREDIT_DEBIT_NUMBER`.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The word or words identified as PII.
   *
   * @public
   */
  Content?: string | undefined;

  /**
   * The confidence score associated with the identified PII entity in your audio.
   *
   * Confidence scores are values between 0 and 1. A larger value indicates a higher probability that the identified entity correctly matches the entity spoken in your media.
   *
   * @public
   */
  Confidence?: number | undefined;
}

/**
 * A word, phrase, or punctuation mark in your transcription output, along with various associated attributes, such as confidence score, type, and start and end times.
 *
 * @public
 */
export interface Item {
  /**
   * The start time of the transcribed item in seconds, with millisecond precision (e.g., 1.056)
   *
   * @public
   */
  StartTime?: number | undefined;

  /**
   * The end time of the transcribed item in seconds, with millisecond precision (e.g., 1.056)
   *
   * @public
   */
  EndTime?: number | undefined;

  /**
   * The type of item identified. Options are: `PRONUNCIATION` (spoken words) and `PUNCTUATION`.
   *
   * @public
   */
  Type?: ItemType | undefined;

  /**
   * The word or punctuation that was transcribed.
   *
   * @public
   */
  Content?: string | undefined;

  /**
   * Indicates whether the specified item matches a word in the vocabulary filter included in your request. If `true`, there is a vocabulary filter match.
   *
   * @public
   */
  VocabularyFilterMatch?: boolean | undefined;

  /**
   * If speaker partitioning is enabled, `Speaker` labels the speaker of the specified item.
   *
   * @public
   */
  Speaker?: string | undefined;

  /**
   * The confidence score associated with a word or phrase in your transcript.
   *
   * Confidence scores are values between 0 and 1. A larger value indicates a higher probability that the identified item correctly matches the item spoken in your media.
   *
   * @public
   */
  Confidence?: number | undefined;

  /**
   * If partial result stabilization is enabled, `Stable` indicates whether the specified item is stable (`true`) or if it may change when the segment is complete (`false`).
   *
   * @public
   */
  Stable?: boolean | undefined;
}

/**
 * A list of possible alternative transcriptions for the input audio. Each alternative may contain one or more of `Items`, `Entities`, or `Transcript`.
 *
 * @public
 */
export interface Alternative {
  /**
   * Contains transcribed text.
   *
   * @public
   */
  Transcript?: string | undefined;

  /**
   * Contains words, phrases, or punctuation marks in your transcription output.
   *
   * @public
   */
  Items?: Item[] | undefined;

  /**
   * Contains entities identified as personally identifiable information (PII) in your transcription output.
   *
   * @public
   */
  Entities?: Entity[] | undefined;
}

/**
 * A wrapper for your audio chunks. Your audio stream consists of one or more audio events, which consist of one or more audio chunks.
 *
 * For more information, see [Event stream encoding](https://docs.aws.amazon.com/transcribe/latest/dg/event-stream.html).
 *
 * @public
 */
export interface AudioEvent {
  /**
   * An audio blob containing the next segment of audio from your application, with a maximum duration of 1 second. The maximum size in bytes varies based on audio properties.
   *
   * Find recommended size in [Transcribing streaming best practices](https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html#best-practices).
   *
   * Size calculation: `Duration (s) * Sample Rate (Hz) * Number of Channels * 2 (Bytes per Sample)`
   *
   * For example, a 1-second chunk of 16 kHz, 2-channel, 16-bit audio would be `1 * 16000 * 2 * 2 = 64000 bytes`.
   *
   * For 8 kHz, 1-channel, 16-bit audio, a 1-second chunk would be `1 * 8000 * 1 * 2 = 16000 bytes`.
   *
   * @public
   */
  AudioChunk?: Uint8Array | undefined;
}

/**
 * Makes it possible to specify which speaker is on which audio channel. For example, if your agent is the first participant to speak, you would set `ChannelId` to `0` (to indicate the first channel) and `ParticipantRole` to `AGENT` (to indicate that it's the agent speaking).
 *
 * @public
 */
export interface ChannelDefinition {
  /**
   * Specify the audio channel you want to define.
   *
   * @public
   */
  ChannelId: number | undefined;

  /**
   * Specify the speaker you want to define. Omitting this parameter is equivalent to specifying both participants.
   *
   * @public
   */
  ParticipantRole: ParticipantRole | undefined;
}

/**
 * Allows you to specify additional settings for your Call Analytics post-call request, including output locations for your redacted transcript, which IAM role to use, and which encryption key to use.
 *
 * `DataAccessRoleArn` and `OutputLocation` are required fields.
 *
 * `PostCallAnalyticsSettings` provides you with the same insights as a Call Analytics post-call transcription. Refer to [Post-call analytics](https://docs.aws.amazon.com/transcribe/latest/dg/tca-post-call.html) for more information on this feature.
 *
 * @public
 */
export interface PostCallAnalyticsSettings {
  /**
   * The Amazon S3 location where you want your Call Analytics post-call transcription output stored. You can use any of the following formats to specify the output location:
   *
   * 1. s3://DOC-EXAMPLE-BUCKET
   * 2. s3://DOC-EXAMPLE-BUCKET/my-output-folder/
   * 3. s3://DOC-EXAMPLE-BUCKET/my-output-folder/my-call-analytics-job.json
   *
   * @public
   */
  OutputLocation: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input files. If the role that you specify doesn’t have the appropriate permissions to access the specified Amazon S3 location, your request fails.
   *
   * IAM role ARNs have the format `arn:partition:iam::account:role/role-name-with-path`. For example: `arn:aws:iam::111122223333:role/Admin`. For more information, see [IAM ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns).
   *
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * Specify whether you want only a redacted transcript or both a redacted and an unredacted transcript. If you choose redacted and unredacted, two JSON files are generated and stored in the Amazon S3 output location you specify.
   *
   * Note that to include `ContentRedactionOutput` in your request, you must enable content redaction (`ContentRedactionType`).
   *
   * @public
   */
  ContentRedactionOutput?: ContentRedactionOutput | undefined;

  /**
   * The KMS key you want to use to encrypt your Call Analytics post-call output.
   *
   * If using a key located in the **current** Amazon Web Services account, you can specify your KMS key in one of four ways:
   *
   * 1. Use the KMS key ID itself. For example, `1234abcd-12ab-34cd-56ef-1234567890ab`.
   * 2. Use an alias for the KMS key ID. For example, `alias/ExampleAlias`.
   * 3. Use the Amazon Resource Name (ARN) for the KMS key ID. For example, `arn:aws:kms:region:account-ID:key/1234abcd-12ab-34cd-56ef-1234567890ab`.
   * 4. Use the ARN for the KMS key alias. For example, `arn:aws:kms:region:account-ID:alias/ExampleAlias`.
   *
   * If using a key located in a **different** Amazon Web Services account than the current Amazon Web Services account, you can specify your KMS key in one of two ways:
   *
   * 1. Use the ARN for the KMS key ID. For example, `arn:aws:kms:region:account-ID:key/1234abcd-12ab-34cd-56ef-1234567890ab`.
   * 2. Use the ARN for the KMS key alias. For example, `arn:aws:kms:region:account-ID:alias/ExampleAlias`.
   *
   * Note that the role making the request must have permission to use the specified KMS key.
   *
   * @public
   */
  OutputEncryptionKMSKeyId?: string | undefined;
}

/**
 * Allows you to set audio channel definitions and post-call analytics settings.
 *
 * @public
 */
export interface ConfigurationEvent {
  /**
   * Indicates which speaker is on which audio channel.
   *
   * @public
   */
  ChannelDefinitions?: ChannelDefinition[] | undefined;

  /**
   * Provides additional optional settings for your Call Analytics post-call request, including encryption and output locations for your redacted transcript.
   *
   * `PostCallAnalyticsSettings` provides you with the same insights as a Call Analytics post-call transcription. Refer to [Post-call analytics](https://docs.aws.amazon.com/transcribe/latest/dg/tca-post-call.html) for more information on this feature.
   *
   * @public
   */
  PostCallAnalyticsSettings?: PostCallAnalyticsSettings | undefined;
}

/**
 * An encoded stream of audio blobs. Audio streams are encoded as either HTTP/2 or WebSocket data frames.
 *
 * For more information, see [Transcribing streaming audio](https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html).
 *
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
   * A blob of audio from your application. Your audio stream consists of one or more audio events.
   *
   * For more information, see [Event stream encoding](https://docs.aws.amazon.com/transcribe/latest/dg/event-stream.html).
   *
   * @public
   */
  export interface AudioEventMember {
    AudioEvent: AudioEvent;
    ConfigurationEvent?: never;
    $unknown?: never;
  }

  /**
   * Contains audio channel definitions and post-call analytics settings.
   *
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
 * Contains entities identified as personally identifiable information (PII) in your transcription output, along with various associated attributes. Examples include category, confidence score, content, type, and start and end times.
 *
 * @public
 */
export interface CallAnalyticsEntity {
  /**
   * The time, in milliseconds, from the beginning of the audio stream to the start of the identified entity.
   *
   * @public
   */
  BeginOffsetMillis?: number | undefined;

  /**
   * The time, in milliseconds, from the beginning of the audio stream to the end of the identified entity.
   *
   * @public
   */
  EndOffsetMillis?: number | undefined;

  /**
   * The category of information identified. For example, `PII`.
   *
   * @public
   */
  Category?: string | undefined;

  /**
   * The type of PII identified. For example, `NAME` or `CREDIT_DEBIT_NUMBER`.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The word or words that represent the identified entity.
   *
   * @public
   */
  Content?: string | undefined;

  /**
   * The confidence score associated with the identification of an entity in your transcript.
   *
   * Confidence scores are values between 0 and 1. A larger value indicates a higher probability that the identified entity correctly matches the entity spoken in your media.
   *
   * @public
   */
  Confidence?: number | undefined;
}

/**
 * A word, phrase, or punctuation mark in your Call Analytics transcription output, along with various associated attributes, such as confidence score, type, and start and end times.
 *
 * @public
 */
export interface CallAnalyticsItem {
  /**
   * The time, in milliseconds, from the beginning of the audio stream to the start of the identified item.
   *
   * @public
   */
  BeginOffsetMillis?: number | undefined;

  /**
   * The time, in milliseconds, from the beginning of the audio stream to the end of the identified item.
   *
   * @public
   */
  EndOffsetMillis?: number | undefined;

  /**
   * The type of item identified. Options are: `PRONUNCIATION` (spoken words) and `PUNCTUATION`.
   *
   * @public
   */
  Type?: ItemType | undefined;

  /**
   * The word or punctuation that was transcribed.
   *
   * @public
   */
  Content?: string | undefined;

  /**
   * The confidence score associated with a word or phrase in your transcript.
   *
   * Confidence scores are values between 0 and 1. A larger value indicates a higher probability that the identified item correctly matches the item spoken in your media.
   *
   * @public
   */
  Confidence?: number | undefined;

  /**
   * Indicates whether the specified item matches a word in the vocabulary filter included in your Call Analytics request. If `true`, there is a vocabulary filter match.
   *
   * @public
   */
  VocabularyFilterMatch?: boolean | undefined;

  /**
   * If partial result stabilization is enabled, `Stable` indicates whether the specified item is stable (`true`) or if it may change when the segment is complete (`false`).
   *
   * @public
   */
  Stable?: boolean | undefined;
}

/**
 * The language code that represents the language identified in your audio, including the associated confidence score.
 *
 * @public
 */
export interface CallAnalyticsLanguageWithScore {
  /**
   * The language code of the identified language.
   *
   * @public
   */
  LanguageCode?: CallAnalyticsLanguageCode | undefined;

  /**
   * The confidence score associated with the identified language code. Confidence scores are values between zero and one; larger values indicate a higher confidence in the identified language.
   *
   * @public
   */
  Score?: number | undefined;
}

/**
 * Contains the timestamp range (start time through end time) of a matched category.
 *
 * @public
 */
export interface TimestampRange {
  /**
   * The time, in milliseconds, from the beginning of the audio stream to the start of the category match.
   *
   * @public
   */
  BeginOffsetMillis?: number | undefined;

  /**
   * The time, in milliseconds, from the beginning of the audio stream to the end of the category match.
   *
   * @public
   */
  EndOffsetMillis?: number | undefined;
}

/**
 * Contains the timestamps of matched categories.
 *
 * @public
 */
export interface PointsOfInterest {
  /**
   * Contains the timestamp ranges (start time through end time) of matched categories and rules.
   *
   * @public
   */
  TimestampRanges?: TimestampRange[] | undefined;
}

/**
 * Provides information on any `TranscriptFilterType` categories that matched your transcription output. Matches are identified for each segment upon completion of that segment.
 *
 * @public
 */
export interface CategoryEvent {
  /**
   * Lists the categories that were matched in your audio segment.
   *
   * @public
   */
  MatchedCategories?: string[] | undefined;

  /**
   * Contains information about the matched categories, including category names and timestamps.
   *
   * @public
   */
  MatchedDetails?: Record<string, PointsOfInterest> | undefined;
}

/**
 * Provides the location, using character count, in your transcript where a match is identified. For example, the location of an issue or a category match within a segment.
 *
 * @public
 */
export interface CharacterOffsets {
  /**
   * Provides the character count of the first character where a match is identified. For example, the first character associated with an issue or a category match in a segment transcript.
   *
   * @public
   */
  Begin?: number | undefined;

  /**
   * Provides the character count of the last character where a match is identified. For example, the last character associated with an issue or a category match in a segment transcript.
   *
   * @public
   */
  End?: number | undefined;
}

/**
 * Lists the issues that were identified in your audio segment.
 *
 * @public
 */
export interface IssueDetected {
  /**
   * Provides the timestamps that identify when in an audio segment the specified issue occurs.
   *
   * @public
   */
  CharacterOffsets?: CharacterOffsets | undefined;
}

/**
 * Contains set of transcription results from one or more audio segments, along with additional information about the parameters included in your request. For example, channel definitions, partial result stabilization, sentiment, and issue detection.
 *
 * @public
 */
export interface UtteranceEvent {
  /**
   * The unique identifier that is associated with the specified `UtteranceEvent`.
   *
   * @public
   */
  UtteranceId?: string | undefined;

  /**
   * Indicates whether the segment in the `UtteranceEvent` is complete (`FALSE`) or partial (`TRUE`).
   *
   * @public
   */
  IsPartial?: boolean | undefined;

  /**
   * Provides the role of the speaker for each audio channel, either `CUSTOMER` or `AGENT`.
   *
   * @public
   */
  ParticipantRole?: ParticipantRole | undefined;

  /**
   * The time, in milliseconds, from the beginning of the audio stream to the start of the `UtteranceEvent`.
   *
   * @public
   */
  BeginOffsetMillis?: number | undefined;

  /**
   * The time, in milliseconds, from the beginning of the audio stream to the start of the `UtteranceEvent`.
   *
   * @public
   */
  EndOffsetMillis?: number | undefined;

  /**
   * Contains transcribed text.
   *
   * @public
   */
  Transcript?: string | undefined;

  /**
   * Contains words, phrases, or punctuation marks that are associated with the specified `UtteranceEvent`.
   *
   * @public
   */
  Items?: CallAnalyticsItem[] | undefined;

  /**
   * Contains entities identified as personally identifiable information (PII) in your transcription output.
   *
   * @public
   */
  Entities?: CallAnalyticsEntity[] | undefined;

  /**
   * Provides the sentiment that was detected in the specified segment.
   *
   * @public
   */
  Sentiment?: Sentiment | undefined;

  /**
   * Provides the issue that was detected in the specified segment.
   *
   * @public
   */
  IssuesDetected?: IssueDetected[] | undefined;

  /**
   * The language code that represents the language spoken in your audio stream.
   *
   * @public
   */
  LanguageCode?: CallAnalyticsLanguageCode | undefined;

  /**
   * The language code of the dominant language identified in your stream.
   *
   * @public
   */
  LanguageIdentification?: CallAnalyticsLanguageWithScore[] | undefined;
}

/**
 * Contains detailed information about your real-time Call Analytics session. These details are provided in the `UtteranceEvent` and `CategoryEvent` objects.
 *
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
   * Contains set of transcription results from one or more audio segments, along with additional information per your request parameters. This can include information relating to channel definitions, partial result stabilization, sentiment, issue detection, and other transcription-related data.
   *
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
   * Provides information on matched categories that were used to generate real-time supervisor alerts.
   *
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
   * One or more arguments to the `StartStreamTranscription`, `StartMedicalStreamTranscription`, or `StartCallAnalyticsStreamTranscription` operation was not valid. For example, `MediaEncoding` or `LanguageCode` used unsupported values. Check the specified parameters and try your request again.
   *
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
   * Your client has exceeded one of the Amazon Transcribe limits, typically the concurrent stream service quota. This error can also occur if a stream exceeds the maximum session duration. In rare cases, this error can also occur if you increase your number of concurrent streams too quickly. Reduce your number of concurrent streams and try your request again using an exponential backoff strategy.
   *
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
   * A problem occurred while processing the audio. Amazon Transcribe terminated processing.
   *
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
   * A new stream started with the same session ID. The current stream has been terminated.
   *
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
   * The service is currently unavailable. Try your request later.
   *
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
 * The details for clinical note generation, including status, and output locations for clinical note and aggregated transcript if the analytics completed, or failure reason if the analytics failed.
 *
 * @public
 */
export interface ClinicalNoteGenerationResult {
  /**
   * Holds the Amazon S3 URI for the output Clinical Note.
   *
   * @public
   */
  ClinicalNoteOutputLocation?: string | undefined;

  /**
   * Holds the Amazon S3 URI for the output Transcript.
   *
   * @public
   */
  TranscriptOutputLocation?: string | undefined;

  /**
   * The status of the clinical note generation.
   *
   * Possible Values:
   *
   * - `IN_PROGRESS`
   * - `FAILED`
   * - `COMPLETED`
   *
   * After audio streaming finishes, and you send a `MedicalScribeSessionControlEvent` event (with END_OF_SESSION as the Type), the status is set to `IN_PROGRESS`. If the status is `COMPLETED`, the analytics completed successfully, and you can find the results at the locations specified in `ClinicalNoteOutputLocation` and `TranscriptOutputLocation`. If the status is `FAILED`, `FailureReason` provides details about the failure.
   *
   * @public
   */
  Status?: ClinicalNoteGenerationStatus | undefined;

  /**
   * If `ClinicalNoteGenerationResult` is `FAILED`, information about why it failed.
   *
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * The output configuration for aggregated transcript and clinical note generation.
 *
 * @public
 */
export interface ClinicalNoteGenerationSettings {
  /**
   * The name of the Amazon S3 bucket where you want the output of Amazon Web Services HealthScribe post-stream analytics stored. Don't include the `S3://` prefix of the specified bucket.
   *
   * HealthScribe outputs transcript and clinical note files under the prefix: `S3://$output-bucket-name/healthscribe-streaming/session-id/post-stream-analytics/clinical-notes`
   *
   * The role `ResourceAccessRoleArn` specified in the `MedicalScribeConfigurationEvent` must have permission to use the specified location. You can change Amazon S3 permissions using the [Amazon Web Services Management Console](https://console.aws.amazon.com/s3). See also [Permissions Required for IAM User Roles](https://docs.aws.amazon.com/transcribe/latest/dg/security_iam_id-based-policy-examples.html#auth-role-iam-user) .
   *
   * @public
   */
  OutputBucketName: string | undefined;

  /**
   * Specify one of the following templates to use for the clinical note summary. The default is `HISTORY_AND_PHYSICAL`.
   *
   * - HISTORY_AND_PHYSICAL: Provides summaries for key sections of the clinical documentation. Examples of sections include Chief Complaint, History of Present Illness, Review of Systems, Past Medical History, Assessment, and Plan.
   * - GIRPP: Provides summaries based on the patients progress toward goals. Examples of sections include Goal, Intervention, Response, Progress, and Plan.
   * - BIRP: Focuses on the patient's behavioral patterns and responses. Examples of sections include Behavior, Intervention, Response, and Plan.
   * - SIRP: Emphasizes the situational context of therapy. Examples of sections include Situation, Intervention, Response, and Plan.
   * - DAP: Provides a simplified format for clinical documentation. Examples of sections include Data, Assessment, and Plan.
   * - BEHAVIORAL_SOAP: Behavioral health focused documentation format. Examples of sections include Subjective, Objective, Assessment, and Plan.
   * - PHYSICAL_SOAP: Physical health focused documentation format. Examples of sections include Subjective, Objective, Assessment, and Plan.
   *
   * @public
   */
  NoteTemplate?: MedicalScribeNoteTemplate | undefined;
}

/**
 * @public
 */
export interface GetMedicalScribeStreamRequest {
  /**
   * The identifier of the HealthScribe streaming session you want information about.
   *
   * @public
   */
  SessionId: string | undefined;
}

/**
 * Makes it possible to specify which speaker is on which channel. For example, if the clinician is the first participant to speak, you would set the `ChannelId` of the first `ChannelDefinition` in the list to `0` (to indicate the first channel) and `ParticipantRole` to `CLINICIAN` (to indicate that it's the clinician speaking). Then you would set the `ChannelId` of the second `ChannelDefinition` in the list to `1` (to indicate the second channel) and `ParticipantRole` to `PATIENT` (to indicate that it's the patient speaking).
 *
 * If you don't specify a channel definition, HealthScribe will diarize the transcription and identify speaker roles for each speaker.
 *
 * @public
 */
export interface MedicalScribeChannelDefinition {
  /**
   * Specify the audio channel you want to define.
   *
   * @public
   */
  ChannelId: number | undefined;

  /**
   * Specify the participant that you want to flag. The allowed options are `CLINICIAN` and `PATIENT`.
   *
   * @public
   */
  ParticipantRole: MedicalScribeParticipantRole | undefined;
}

/**
 * Contains encryption related settings to be used for data encryption with Key Management Service, including KmsEncryptionContext and KmsKeyId. The KmsKeyId is required, while KmsEncryptionContext is optional for additional layer of security.
 *
 * By default, Amazon Web Services HealthScribe provides encryption at rest to protect sensitive customer data using Amazon S3-managed keys. HealthScribe uses the KMS key you specify as a second layer of encryption.
 *
 * Your `ResourceAccessRoleArn` must permission to use your KMS key. For more information, see [Data Encryption at rest for Amazon Web Services HealthScribe](https://docs.aws.amazon.com/transcribe/latest/dg/health-scribe-encryption.html).
 *
 * @public
 */
export interface MedicalScribeEncryptionSettings {
  /**
   * A map of plain text, non-secret key:value pairs, known as encryption context pairs, that provide an added layer of security for your data. For more information, see [KMSencryption context](https://docs.aws.amazon.com/transcribe/latest/dg/key-management.html#kms-context) and [Asymmetric keys in KMS](https://docs.aws.amazon.com/transcribe/latest/dg/symmetric-asymmetric.html).
   *
   * @public
   */
  KmsEncryptionContext?: Record<string, string> | undefined;

  /**
   * The ID of the KMS key you want to use for your streaming session. You can specify its KMS key ID, key Amazon Resource Name (ARN), alias name, or alias ARN. When using an alias name, prefix it with `"alias/"`. To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN.
   *
   * For example:
   *
   * - Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab
   * - Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab
   * - Alias name: alias/ExampleAlias
   * - Alias ARN: arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias
   *
   * To get the key ID and key ARN for a KMS key, use the [ListKeys](https://docs.aws.amazon.com/kms/latest/APIReference/API_ListKeys.html) or [DescribeKey](https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html) KMS API operations. To get the alias name and alias ARN, use [ListKeys](https://docs.aws.amazon.com/kms/latest/APIReference/API_ListAliases.html) API operation.
   *
   * @public
   */
  KmsKeyId: string | undefined;
}

/**
 * Contains details for the result of post-stream analytics.
 *
 * @public
 */
export interface MedicalScribePostStreamAnalyticsResult {
  /**
   * Provides the Clinical Note Generation result for post-stream analytics.
   *
   * @public
   */
  ClinicalNoteGenerationResult?: ClinicalNoteGenerationResult | undefined;
}

/**
 * The settings for post-stream analytics.
 *
 * @public
 */
export interface MedicalScribePostStreamAnalyticsSettings {
  /**
   * Specify settings for the post-stream clinical note generation.
   *
   * @public
   */
  ClinicalNoteGenerationSettings: ClinicalNoteGenerationSettings | undefined;
}

/**
 * Contains details about a Amazon Web Services HealthScribe streaming session.
 *
 * @public
 */
export interface MedicalScribeStreamDetails {
  /**
   * The identifier of the HealthScribe streaming session.
   *
   * @public
   */
  SessionId?: string | undefined;

  /**
   * The date and time when the HealthScribe streaming session was created.
   *
   * @public
   */
  StreamCreatedAt?: Date | undefined;

  /**
   * The date and time when the HealthScribe streaming session was ended.
   *
   * @public
   */
  StreamEndedAt?: Date | undefined;

  /**
   * The Language Code of the HealthScribe streaming session.
   *
   * @public
   */
  LanguageCode?: MedicalScribeLanguageCode | undefined;

  /**
   * The sample rate (in hertz) of the HealthScribe streaming session.
   *
   * @public
   */
  MediaSampleRateHertz?: number | undefined;

  /**
   * The Media Encoding of the HealthScribe streaming session.
   *
   * @public
   */
  MediaEncoding?: MedicalScribeMediaEncoding | undefined;

  /**
   * The vocabulary name of the HealthScribe streaming session.
   *
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * The name of the vocabulary filter used for the HealthScribe streaming session .
   *
   * @public
   */
  VocabularyFilterName?: string | undefined;

  /**
   * The method of the vocabulary filter for the HealthScribe streaming session.
   *
   * @public
   */
  VocabularyFilterMethod?: MedicalScribeVocabularyFilterMethod | undefined;

  /**
   * The Amazon Resource Name (ARN) of the role used in the HealthScribe streaming session.
   *
   * @public
   */
  ResourceAccessRoleArn?: string | undefined;

  /**
   * The Channel Definitions of the HealthScribe streaming session.
   *
   * @public
   */
  ChannelDefinitions?: MedicalScribeChannelDefinition[] | undefined;

  /**
   * The Encryption Settings of the HealthScribe streaming session.
   *
   * @public
   */
  EncryptionSettings?: MedicalScribeEncryptionSettings | undefined;

  /**
   * The streaming status of the HealthScribe streaming session.
   *
   * Possible Values:
   *
   * - `IN_PROGRESS`
   * - `PAUSED`
   * - `FAILED`
   * - `COMPLETED`
   *
   * > **Note:** This status is specific to real-time streaming. A `COMPLETED` status doesn't mean that the post-stream analytics is complete. To get status of an analytics result, check the `Status` field for the analytics result within the `MedicalScribePostStreamAnalyticsResult`. For example, you can view the status of the `ClinicalNoteGenerationResult`.
   *
   * @public
   */
  StreamStatus?: MedicalScribeStreamStatus | undefined;

  /**
   * The post-stream analytics settings of the HealthScribe streaming session.
   *
   * @public
   */
  PostStreamAnalyticsSettings?: MedicalScribePostStreamAnalyticsSettings | undefined;

  /**
   * The result of post-stream analytics for the HealthScribe streaming session.
   *
   * @public
   */
  PostStreamAnalyticsResult?: MedicalScribePostStreamAnalyticsResult | undefined;

  /**
   * Indicates whether the `MedicalScribeContext` object was provided when the stream was started.
   *
   * @public
   */
  MedicalScribeContextProvided?: boolean | undefined;
}

/**
 * @public
 */
export interface GetMedicalScribeStreamResponse {
  /**
   * Provides details about a HealthScribe streaming session.
   *
   * @public
   */
  MedicalScribeStreamDetails?: MedicalScribeStreamDetails | undefined;
}

/**
 * The language code that represents the language identified in your audio, including the associated confidence score. If you enabled channel identification in your request and each channel contained a different language, you will have more than one `LanguageWithScore` result.
 *
 * @public
 */
export interface LanguageWithScore {
  /**
   * The language code of the identified language.
   *
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * The confidence score associated with the identified language code. Confidence scores are values between zero and one; larger values indicate a higher confidence in the identified language.
   *
   * @public
   */
  Score?: number | undefined;
}

/**
 * Contains entities identified as personal health information (PHI) in your transcription output, along with various associated attributes. Examples include category, confidence score, type, stability score, and start and end times.
 *
 * @public
 */
export interface MedicalEntity {
  /**
   * The start time, in seconds, of the utterance that was identified as PHI.
   *
   * @public
   */
  StartTime?: number | undefined;

  /**
   * The end time, in seconds, of the utterance that was identified as PHI.
   *
   * @public
   */
  EndTime?: number | undefined;

  /**
   * The category of information identified. The only category is `PHI`.
   *
   * @public
   */
  Category?: string | undefined;

  /**
   * The word or words identified as PHI.
   *
   * @public
   */
  Content?: string | undefined;

  /**
   * The confidence score associated with the identified PHI entity in your audio.
   *
   * Confidence scores are values between 0 and 1. A larger value indicates a higher probability that the identified entity correctly matches the entity spoken in your media.
   *
   * @public
   */
  Confidence?: number | undefined;
}

/**
 * A word, phrase, or punctuation mark in your transcription output, along with various associated attributes, such as confidence score, type, and start and end times.
 *
 * @public
 */
export interface MedicalItem {
  /**
   * The start time, in seconds, of the transcribed item.
   *
   * @public
   */
  StartTime?: number | undefined;

  /**
   * The end time, in seconds, of the transcribed item.
   *
   * @public
   */
  EndTime?: number | undefined;

  /**
   * The type of item identified. Options are: `PRONUNCIATION` (spoken words) and `PUNCTUATION`.
   *
   * @public
   */
  Type?: ItemType | undefined;

  /**
   * The word or punctuation that was transcribed.
   *
   * @public
   */
  Content?: string | undefined;

  /**
   * The confidence score associated with a word or phrase in your transcript.
   *
   * Confidence scores are values between 0 and 1. A larger value indicates a higher probability that the identified item correctly matches the item spoken in your media.
   *
   * @public
   */
  Confidence?: number | undefined;

  /**
   * If speaker partitioning is enabled, `Speaker` labels the speaker of the specified item.
   *
   * @public
   */
  Speaker?: string | undefined;
}

/**
 * A list of possible alternative transcriptions for the input audio. Each alternative may contain one or more of `Items`, `Entities`, or `Transcript`.
 *
 * @public
 */
export interface MedicalAlternative {
  /**
   * Contains transcribed text.
   *
   * @public
   */
  Transcript?: string | undefined;

  /**
   * Contains words, phrases, or punctuation marks in your transcription output.
   *
   * @public
   */
  Items?: MedicalItem[] | undefined;

  /**
   * Contains entities identified as personal health information (PHI) in your transcription output.
   *
   * @public
   */
  Entities?: MedicalEntity[] | undefined;
}

/**
 * The `Result` associated with a .
 *
 * Contains a set of transcription results from one or more audio segments, along with additional information per your request parameters. This can include information relating to alternative transcriptions, channel identification, partial result stabilization, language identification, and other transcription-related data.
 *
 * @public
 */
export interface MedicalResult {
  /**
   * Provides a unique identifier for the `Result`.
   *
   * @public
   */
  ResultId?: string | undefined;

  /**
   * The start time, in seconds, of the `Result`.
   *
   * @public
   */
  StartTime?: number | undefined;

  /**
   * The end time, in seconds, of the `Result`.
   *
   * @public
   */
  EndTime?: number | undefined;

  /**
   * Indicates if the segment is complete.
   *
   * If `IsPartial` is `true`, the segment is not complete. If `IsPartial` is `false`, the segment is complete.
   *
   * @public
   */
  IsPartial?: boolean | undefined;

  /**
   * A list of possible alternative transcriptions for the input audio. Each alternative may contain one or more of `Items`, `Entities`, or `Transcript`.
   *
   * @public
   */
  Alternatives?: MedicalAlternative[] | undefined;

  /**
   * Indicates the channel identified for the `Result`.
   *
   * @public
   */
  ChannelId?: string | undefined;
}

/**
 * A wrapper for your audio chunks
 *
 * For more information, see [Event stream encoding](https://docs.aws.amazon.com/transcribe/latest/dg/event-stream.html).
 *
 * @public
 */
export interface MedicalScribeAudioEvent {
  /**
   * An audio blob containing the next segment of audio from your application, with a maximum duration of 1 second. The maximum size in bytes varies based on audio properties.
   *
   * Find recommended size in [Transcribing streaming best practices](https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html#best-practices).
   *
   * Size calculation: `Duration (s) * Sample Rate (Hz) * Number of Channels * 2 (Bytes per Sample)`
   *
   * For example, a 1-second chunk of 16 kHz, 2-channel, 16-bit audio would be `1 * 16000 * 2 * 2 = 64000 bytes`.
   *
   * For 8 kHz, 1-channel, 16-bit audio, a 1-second chunk would be `1 * 8000 * 1 * 2 = 16000 bytes`.
   *
   * @public
   */
  AudioChunk: Uint8Array | undefined;
}

/**
 * Contains patient-specific information.
 *
 * @public
 */
export interface MedicalScribePatientContext {
  /**
   * The patient's preferred pronouns that the user wants to provide as a context for clinical note generation .
   *
   * @public
   */
  Pronouns?: Pronouns | undefined;
}

/**
 * The `MedicalScribeContext` object that contains contextual information which is used during clinical note generation to add relevant context to the note.
 *
 * @public
 */
export interface MedicalScribeContext {
  /**
   * Contains patient-specific information used to customize the clinical note generation.
   *
   * @public
   */
  PatientContext?: MedicalScribePatientContext | undefined;
}

/**
 * Specify details to configure the streaming session, including channel definitions, encryption settings, post-stream analytics settings, resource access role ARN and vocabulary settings.
 *
 * Whether you are starting a new session or resuming an existing session, your first event must be a `MedicalScribeConfigurationEvent`. If you are resuming a session, then this event must have the same configurations that you provided to start the session.
 *
 * @public
 */
export interface MedicalScribeConfigurationEvent {
  /**
   * Specify the name of the custom vocabulary you want to use for your streaming session. Custom vocabulary names are case-sensitive.
   *
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * Specify the name of the custom vocabulary filter you want to include in your streaming session. Custom vocabulary filter names are case-sensitive.
   *
   * If you include `VocabularyFilterName` in the `MedicalScribeConfigurationEvent`, you must also include `VocabularyFilterMethod`.
   *
   * @public
   */
  VocabularyFilterName?: string | undefined;

  /**
   * Specify how you want your custom vocabulary filter applied to the streaming session.
   *
   * To replace words with `***`, specify `mask`.
   *
   * To delete words, specify `remove`.
   *
   * To flag words without changing them, specify `tag`.
   *
   * @public
   */
  VocabularyFilterMethod?: MedicalScribeVocabularyFilterMethod | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 output bucket you specified, and use your KMS key if supplied. If the role that you specify doesn’t have the appropriate permissions, your request fails.
   *
   * IAM role ARNs have the format `arn:partition:iam::account:role/role-name-with-path`. For example: `arn:aws:iam::111122223333:role/Admin`.
   *
   * For more information, see [Amazon Web Services HealthScribe](https://docs.aws.amazon.com/transcribe/latest/dg/health-scribe-streaming.html).
   *
   * @public
   */
  ResourceAccessRoleArn: string | undefined;

  /**
   * Specify which speaker is on which audio channel.
   *
   * @public
   */
  ChannelDefinitions?: MedicalScribeChannelDefinition[] | undefined;

  /**
   * Specify the encryption settings for your streaming session.
   *
   * @public
   */
  EncryptionSettings?: MedicalScribeEncryptionSettings | undefined;

  /**
   * Specify settings for post-stream analytics.
   *
   * @public
   */
  PostStreamAnalyticsSettings: MedicalScribePostStreamAnalyticsSettings | undefined;

  /**
   * The `MedicalScribeContext` object that contains contextual information used to generate customized clinical notes.
   *
   * @public
   */
  MedicalScribeContext?: MedicalScribeContext | undefined;
}

/**
 * Specify the lifecycle of your streaming session.
 *
 * @public
 */
export interface MedicalScribeSessionControlEvent {
  /**
   * The type of `MedicalScribeSessionControlEvent`.
   *
   * Possible Values:
   *
   * - `END_OF_SESSION` - Indicates the audio streaming is complete. After you send an END_OF_SESSION event, Amazon Web Services HealthScribe starts the post-stream analytics. The session can't be resumed after this event is sent. After Amazon Web Services HealthScribe processes the event, the real-time `StreamStatus` is `COMPLETED`. You get the `StreamStatus` and other stream details with the [GetMedicalScribeStream](https://docs.aws.amazon.com/transcribe/latest/APIReference/API_streaming_GetMedicalScribeStream.html) API operation. For more information about different streaming statuses, see the `StreamStatus` description in the [MedicalScribeStreamDetails](https://docs.aws.amazon.com/transcribe/latest/APIReference/API_streaming_MedicalScribeStreamDetails.html).
   *
   * @public
   */
  Type: MedicalScribeSessionControlEventType | undefined;
}

/**
 * An encoded stream of events. The stream is encoded as HTTP/2 data frames.
 *
 * An input stream consists of the following types of events. The first element of the input stream must be the `MedicalScribeConfigurationEvent` event type.
 *
 * - `MedicalScribeConfigurationEvent`
 * - `MedicalScribeAudioEvent`
 * - `MedicalScribeSessionControlEvent`
 *
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
   * A wrapper for your audio chunks
   *
   * For more information, see [Event stream encoding](https://docs.aws.amazon.com/transcribe/latest/dg/event-stream.html).
   *
   * @public
   */
  export interface AudioEventMember {
    AudioEvent: MedicalScribeAudioEvent;
    SessionControlEvent?: never;
    ConfigurationEvent?: never;
    $unknown?: never;
  }

  /**
   * Specify the lifecycle of your streaming session, such as ending the session.
   *
   * @public
   */
  export interface SessionControlEventMember {
    AudioEvent?: never;
    SessionControlEvent: MedicalScribeSessionControlEvent;
    ConfigurationEvent?: never;
    $unknown?: never;
  }

  /**
   * Specify additional streaming session configurations beyond those provided in your initial start request headers. For example, specify channel definitions, encryption settings, and post-stream analytics settings.
   *
   * Whether you are starting a new session or resuming an existing session, your first event must be a `MedicalScribeConfigurationEvent`.
   *
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
 * A word, phrase, or punctuation mark in your transcription output, along with various associated attributes, such as confidence score, type, and start and end times.
 *
 * @public
 */
export interface MedicalScribeTranscriptItem {
  /**
   * The start time, in milliseconds, of the transcribed item.
   *
   * @public
   */
  BeginAudioTime?: number | undefined;

  /**
   * The end time, in milliseconds, of the transcribed item.
   *
   * @public
   */
  EndAudioTime?: number | undefined;

  /**
   * The type of item identified. Options are: `PRONUNCIATION` (spoken words) and `PUNCTUATION`.
   *
   * @public
   */
  Type?: MedicalScribeTranscriptItemType | undefined;

  /**
   * The confidence score associated with a word or phrase in your transcript.
   *
   * Confidence scores are values between 0 and 1. A larger value indicates a higher probability that the identified item correctly matches the item spoken in your media.
   *
   * @public
   */
  Confidence?: number | undefined;

  /**
   * The word, phrase or punctuation mark that was transcribed.
   *
   * @public
   */
  Content?: string | undefined;

  /**
   * Indicates whether the specified item matches a word in the vocabulary filter included in your configuration event. If `true`, there is a vocabulary filter match.
   *
   * @public
   */
  VocabularyFilterMatch?: boolean | undefined;
}

/**
 * Contains a set of transcription results, along with additional information of the segment.
 *
 * @public
 */
export interface MedicalScribeTranscriptSegment {
  /**
   * The identifier of the segment.
   *
   * @public
   */
  SegmentId?: string | undefined;

  /**
   * The start time, in milliseconds, of the segment.
   *
   * @public
   */
  BeginAudioTime?: number | undefined;

  /**
   * The end time, in milliseconds, of the segment.
   *
   * @public
   */
  EndAudioTime?: number | undefined;

  /**
   * Contains transcribed text of the segment.
   *
   * @public
   */
  Content?: string | undefined;

  /**
   * Contains words, phrases, or punctuation marks in your segment.
   *
   * @public
   */
  Items?: MedicalScribeTranscriptItem[] | undefined;

  /**
   * Indicates if the segment is complete.
   *
   * If `IsPartial` is `true`, the segment is not complete. If `IsPartial` is `false`, the segment is complete.
   *
   * @public
   */
  IsPartial?: boolean | undefined;

  /**
   * Indicates which audio channel is associated with the `MedicalScribeTranscriptSegment`.
   *
   * If `MedicalScribeChannelDefinition` is not provided in the `MedicalScribeConfigurationEvent`, then this field will not be included.
   *
   * @public
   */
  ChannelId?: string | undefined;
}

/**
 * The event associated with `MedicalScribeResultStream`.
 *
 * Contains `MedicalScribeTranscriptSegment`, which contains segment related information.
 *
 * @public
 */
export interface MedicalScribeTranscriptEvent {
  /**
   * The `TranscriptSegment` associated with a `MedicalScribeTranscriptEvent`.
   *
   * @public
   */
  TranscriptSegment?: MedicalScribeTranscriptSegment | undefined;
}

/**
 * Result stream where you will receive the output events. The details are provided in the `MedicalScribeTranscriptEvent` object.
 *
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
   * The transcript event that contains real-time transcription results.
   *
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
   * One or more arguments to the `StartStreamTranscription`, `StartMedicalStreamTranscription`, or `StartCallAnalyticsStreamTranscription` operation was not valid. For example, `MediaEncoding` or `LanguageCode` used unsupported values. Check the specified parameters and try your request again.
   *
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
   * Your client has exceeded one of the Amazon Transcribe limits, typically the concurrent stream service quota. This error can also occur if a stream exceeds the maximum session duration. In rare cases, this error can also occur if you increase your number of concurrent streams too quickly. Reduce your number of concurrent streams and try your request again using an exponential backoff strategy.
   *
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
   * A problem occurred while processing the audio. Amazon Transcribe terminated processing.
   *
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
   * A new stream started with the same session ID. The current stream has been terminated.
   *
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
   * The service is currently unavailable. Try your request later.
   *
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
 * The `MedicalTranscript` associated with a .
 *
 * `MedicalTranscript` contains `Results`, which contains a set of transcription results from one or more audio segments, along with additional information per your request parameters.
 *
 * @public
 */
export interface MedicalTranscript {
  /**
   * Contains a set of transcription results from one or more audio segments, along with additional information per your request parameters. This can include information relating to alternative transcriptions, channel identification, partial result stabilization, language identification, and other transcription-related data.
   *
   * @public
   */
  Results?: MedicalResult[] | undefined;
}

/**
 * The `MedicalTranscriptEvent` associated with a `MedicalTranscriptResultStream`.
 *
 * Contains a set of transcription results from one or more audio segments, along with additional information per your request parameters.
 *
 * @public
 */
export interface MedicalTranscriptEvent {
  /**
   * Contains `Results`, which contains a set of transcription results from one or more audio segments, along with additional information per your request parameters. This can include information relating to alternative transcriptions, channel identification, partial result stabilization, language identification, and other transcription-related data.
   *
   * @public
   */
  Transcript?: MedicalTranscript | undefined;
}

/**
 * Contains detailed information about your streaming session.
 *
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
   * The `MedicalTranscriptEvent` associated with a `MedicalTranscriptResultStream`.
   *
   * Contains a set of transcription results from one or more audio segments, along with additional information per your request parameters. This can include information relating to alternative transcriptions, channel identification, partial result stabilization, language identification, and other transcription-related data.
   *
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
   * One or more arguments to the `StartStreamTranscription`, `StartMedicalStreamTranscription`, or `StartCallAnalyticsStreamTranscription` operation was not valid. For example, `MediaEncoding` or `LanguageCode` used unsupported values. Check the specified parameters and try your request again.
   *
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
   * Your client has exceeded one of the Amazon Transcribe limits, typically the concurrent stream service quota. This error can also occur if a stream exceeds the maximum session duration. In rare cases, this error can also occur if you increase your number of concurrent streams too quickly. Reduce your number of concurrent streams and try your request again using an exponential backoff strategy.
   *
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
   * A problem occurred while processing the audio. Amazon Transcribe terminated processing.
   *
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
   * A new stream started with the same session ID. The current stream has been terminated.
   *
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
   * The service is currently unavailable. Try your request later.
   *
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
 * The `Result` associated with a .
 *
 * Contains a set of transcription results from one or more audio segments, along with additional information per your request parameters. This can include information relating to alternative transcriptions, channel identification, partial result stabilization, language identification, and other transcription-related data.
 *
 * @public
 */
export interface Result {
  /**
   * Provides a unique identifier for the `Result`.
   *
   * @public
   */
  ResultId?: string | undefined;

  /**
   * The start time of the `Result` in seconds, with millisecond precision (e.g., 1.056).
   *
   * @public
   */
  StartTime?: number | undefined;

  /**
   * The end time of the `Result` in seconds, with millisecond precision (e.g., 1.056).
   *
   * @public
   */
  EndTime?: number | undefined;

  /**
   * Indicates if the segment is complete.
   *
   * If `IsPartial` is `true`, the segment is not complete. If `IsPartial` is `false`, the segment is complete.
   *
   * @public
   */
  IsPartial?: boolean | undefined;

  /**
   * A list of possible alternative transcriptions for the input audio. Each alternative may contain one or more of `Items`, `Entities`, or `Transcript`.
   *
   * @public
   */
  Alternatives?: Alternative[] | undefined;

  /**
   * Indicates which audio channel is associated with the `Result`.
   *
   * @public
   */
  ChannelId?: string | undefined;

  /**
   * The language code that represents the language spoken in your audio stream.
   *
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * The language code of the dominant language identified in your stream.
   *
   * If you enabled channel identification and each channel of your audio contains a different language, you may have more than one result.
   *
   * @public
   */
  LanguageIdentification?: LanguageWithScore[] | undefined;
}

/**
 * @public
 */
export interface StartCallAnalyticsStreamTranscriptionRequest {
  /**
   * Specify the language code that represents the language spoken in your audio.
   *
   * For a list of languages supported with real-time Call Analytics, refer to the [Supported languages](https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html) table.
   *
   * @public
   */
  LanguageCode?: CallAnalyticsLanguageCode | undefined;

  /**
   * The sample rate of the input audio (in hertz). Low-quality audio, such as telephone audio, is typically around 8,000 Hz. High-quality audio typically ranges from 16,000 Hz to 48,000 Hz. Note that the sample rate you specify must match that of your audio.
   *
   * @public
   */
  MediaSampleRateHertz: number | undefined;

  /**
   * Specify the encoding of your input audio. Supported formats are:
   *
   * - FLAC
   * - OPUS-encoded audio in an Ogg container
   * - PCM (only signed 16-bit little-endian audio formats, which does not include WAV)
   *
   * For more information, see [Media formats](https://docs.aws.amazon.com/transcribe/latest/dg/how-input.html#how-input-audio).
   *
   * @public
   */
  MediaEncoding: MediaEncoding | undefined;

  /**
   * Specify the name of the custom vocabulary that you want to use when processing your transcription. Note that vocabulary names are case sensitive.
   *
   * If the language of the specified custom vocabulary doesn't match the language identified in your media, the custom vocabulary is not applied to your transcription.
   *
   * For more information, see [Custom vocabularies](https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html).
   *
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * Specify a name for your Call Analytics transcription session. If you don't include this parameter in your request, Amazon Transcribe generates an ID and returns it in the response.
   *
   * @public
   */
  SessionId?: string | undefined;

  /**
   * An encoded stream of audio blobs. Audio streams are encoded as either HTTP/2 or WebSocket data frames.
   *
   * For more information, see [Transcribing streaming audio](https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html).
   *
   * @public
   */
  AudioStream: AsyncIterable<AudioStream> | undefined;

  /**
   * Specify the name of the custom vocabulary filter that you want to use when processing your transcription. Note that vocabulary filter names are case sensitive.
   *
   * If the language of the specified custom vocabulary filter doesn't match the language identified in your media, the vocabulary filter is not applied to your transcription.
   *
   * For more information, see [Using vocabulary filtering with unwanted words](https://docs.aws.amazon.com/transcribe/latest/dg/vocabulary-filtering.html).
   *
   * @public
   */
  VocabularyFilterName?: string | undefined;

  /**
   * Specify how you want your vocabulary filter applied to your transcript.
   *
   * To replace words with `***`, choose `mask`.
   *
   * To delete words, choose `remove`.
   *
   * To flag words without changing them, choose `tag`.
   *
   * @public
   */
  VocabularyFilterMethod?: VocabularyFilterMethod | undefined;

  /**
   * Specify the name of the custom language model that you want to use when processing your transcription. Note that language model names are case sensitive.
   *
   * The language of the specified language model must match the language code you specify in your transcription request. If the languages don't match, the custom language model isn't applied. There are no errors or warnings associated with a language mismatch.
   *
   * For more information, see [Custom language models](https://docs.aws.amazon.com/transcribe/latest/dg/custom-language-models.html).
   *
   * @public
   */
  LanguageModelName?: string | undefined;

  /**
   * Enables automatic language identification for your Call Analytics transcription.
   *
   * If you include `IdentifyLanguage`, you must include a list of language codes, using `LanguageOptions`, that you think may be present in your audio stream. You must provide a minimum of two language selections.
   *
   * You can also include a preferred language using `PreferredLanguage`. Adding a preferred language can help Amazon Transcribe identify the language faster than if you omit this parameter.
   *
   * Note that you must include either `LanguageCode` or `IdentifyLanguage` in your request. If you include both parameters, your transcription job fails.
   *
   * @public
   */
  IdentifyLanguage?: boolean | undefined;

  /**
   * Specify two or more language codes that represent the languages you think may be present in your media.
   *
   * Including language options can improve the accuracy of language identification.
   *
   * If you include `LanguageOptions` in your request, you must also include `IdentifyLanguage`.
   *
   * For a list of languages supported with Call Analytics streaming, refer to the [Supported languages](https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html) table.
   *
   * > **Important:** You can only include one language dialect per language per stream. For example, you cannot include `en-US` and `en-AU` in the same request.
   *
   * @public
   */
  LanguageOptions?: string | undefined;

  /**
   * Specify a preferred language from the subset of languages codes you specified in `LanguageOptions`.
   *
   * You can only use this parameter if you've included `IdentifyLanguage` and `LanguageOptions` in your request.
   *
   * @public
   */
  PreferredLanguage?: CallAnalyticsLanguageCode | undefined;

  /**
   * Specify the names of the custom vocabularies that you want to use when processing your Call Analytics transcription. Note that vocabulary names are case sensitive.
   *
   * If the custom vocabulary's language doesn't match the identified media language, it won't be applied to the transcription.
   *
   * > **Important:** This parameter is only intended for use **with** the `IdentifyLanguage` parameter. If you're **not** including `IdentifyLanguage` in your request and want to use a custom vocabulary with your transcription, use the `VocabularyName` parameter instead.
   *
   * For more information, see [Custom vocabularies](https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html).
   *
   * @public
   */
  VocabularyNames?: string | undefined;

  /**
   * Specify the names of the custom vocabulary filters that you want to use when processing your Call Analytics transcription. Note that vocabulary filter names are case sensitive.
   *
   * These filters serve to customize the transcript output.
   *
   * > **Important:** This parameter is only intended for use **with** the `IdentifyLanguage` parameter. If you're **not** including `IdentifyLanguage` in your request and want to use a custom vocabulary filter with your transcription, use the `VocabularyFilterName` parameter instead.
   *
   * For more information, see [Using vocabulary filtering with unwanted words](https://docs.aws.amazon.com/transcribe/latest/dg/vocabulary-filtering.html).
   *
   * @public
   */
  VocabularyFilterNames?: string | undefined;

  /**
   * Enables partial result stabilization for your transcription. Partial result stabilization can reduce latency in your output, but may impact accuracy. For more information, see [Partial-result stabilization](https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html#streaming-partial-result-stabilization).
   *
   * @public
   */
  EnablePartialResultsStabilization?: boolean | undefined;

  /**
   * Specify the level of stability to use when you enable partial results stabilization (`EnablePartialResultsStabilization`).
   *
   * Low stability provides the highest accuracy. High stability transcribes faster, but with slightly lower accuracy.
   *
   * For more information, see [Partial-result stabilization](https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html#streaming-partial-result-stabilization).
   *
   * @public
   */
  PartialResultsStability?: PartialResultsStability | undefined;

  /**
   * Labels all personally identifiable information (PII) identified in your transcript.
   *
   * Content identification is performed at the segment level; PII specified in `PiiEntityTypes` is flagged upon complete transcription of an audio segment. If you don't include `PiiEntityTypes` in your request, all PII is identified.
   *
   * You can’t set `ContentIdentificationType` and `ContentRedactionType` in the same request. If you set both, your request returns a `BadRequestException`.
   *
   * For more information, see [Redacting or identifying personally identifiable information](https://docs.aws.amazon.com/transcribe/latest/dg/pii-redaction.html).
   *
   * @public
   */
  ContentIdentificationType?: ContentIdentificationType | undefined;

  /**
   * Redacts all personally identifiable information (PII) identified in your transcript.
   *
   * Content redaction is performed at the segment level; PII specified in `PiiEntityTypes` is redacted upon complete transcription of an audio segment. If you don't include `PiiEntityTypes` in your request, all PII is redacted.
   *
   * You can’t set `ContentRedactionType` and `ContentIdentificationType` in the same request. If you set both, your request returns a `BadRequestException`.
   *
   * For more information, see [Redacting or identifying personally identifiable information](https://docs.aws.amazon.com/transcribe/latest/dg/pii-redaction.html).
   *
   * @public
   */
  ContentRedactionType?: ContentRedactionType | undefined;

  /**
   * Specify which types of personally identifiable information (PII) you want to redact in your transcript. You can include as many types as you'd like, or you can select `ALL`.
   *
   * Values must be comma-separated and can include: `ADDRESS`, `BANK_ACCOUNT_NUMBER`, `BANK_ROUTING`, `CREDIT_DEBIT_CVV`, `CREDIT_DEBIT_EXPIRY`, `CREDIT_DEBIT_NUMBER`, `EMAIL`, `NAME`, `PHONE`, `PIN`, `SSN`, or `ALL`.
   *
   * Note that if you include `PiiEntityTypes` in your request, you must also include `ContentIdentificationType` or `ContentRedactionType`.
   *
   * If you include `ContentRedactionType` or `ContentIdentificationType` in your request, but do not include `PiiEntityTypes`, all PII is redacted or identified.
   *
   * @public
   */
  PiiEntityTypes?: string | undefined;
}

/**
 * @public
 */
export interface StartCallAnalyticsStreamTranscriptionResponse {
  /**
   * Provides the identifier for your real-time Call Analytics request.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * Provides the language code that you specified in your Call Analytics request.
   *
   * @public
   */
  LanguageCode?: CallAnalyticsLanguageCode | undefined;

  /**
   * Provides the sample rate that you specified in your Call Analytics request.
   *
   * @public
   */
  MediaSampleRateHertz?: number | undefined;

  /**
   * Provides the media encoding you specified in your Call Analytics request.
   *
   * @public
   */
  MediaEncoding?: MediaEncoding | undefined;

  /**
   * Provides the name of the custom vocabulary that you specified in your Call Analytics request.
   *
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * Provides the identifier for your Call Analytics transcription session.
   *
   * @public
   */
  SessionId?: string | undefined;

  /**
   * Provides detailed information about your real-time Call Analytics session.
   *
   * @public
   */
  CallAnalyticsTranscriptResultStream?: AsyncIterable<CallAnalyticsTranscriptResultStream> | undefined;

  /**
   * Provides the name of the custom vocabulary filter that you specified in your Call Analytics request.
   *
   * @public
   */
  VocabularyFilterName?: string | undefined;

  /**
   * Provides the vocabulary filtering method used in your Call Analytics transcription.
   *
   * @public
   */
  VocabularyFilterMethod?: VocabularyFilterMethod | undefined;

  /**
   * Provides the name of the custom language model that you specified in your Call Analytics request.
   *
   * @public
   */
  LanguageModelName?: string | undefined;

  /**
   * Shows whether automatic language identification was enabled for your Call Analytics transcription.
   *
   * @public
   */
  IdentifyLanguage?: boolean | undefined;

  /**
   * Provides the language codes that you specified in your Call Analytics request.
   *
   * @public
   */
  LanguageOptions?: string | undefined;

  /**
   * Provides the preferred language that you specified in your Call Analytics request.
   *
   * @public
   */
  PreferredLanguage?: CallAnalyticsLanguageCode | undefined;

  /**
   * Provides the names of the custom vocabularies that you specified in your Call Analytics request.
   *
   * @public
   */
  VocabularyNames?: string | undefined;

  /**
   * Provides the names of the custom vocabulary filters that you specified in your Call Analytics request.
   *
   * @public
   */
  VocabularyFilterNames?: string | undefined;

  /**
   * Shows whether partial results stabilization was enabled for your Call Analytics transcription.
   *
   * @public
   */
  EnablePartialResultsStabilization?: boolean | undefined;

  /**
   * Provides the stabilization level used for your transcription.
   *
   * @public
   */
  PartialResultsStability?: PartialResultsStability | undefined;

  /**
   * Shows whether content identification was enabled for your Call Analytics transcription.
   *
   * @public
   */
  ContentIdentificationType?: ContentIdentificationType | undefined;

  /**
   * Shows whether content redaction was enabled for your Call Analytics transcription.
   *
   * @public
   */
  ContentRedactionType?: ContentRedactionType | undefined;

  /**
   * Lists the PII entity types you specified in your Call Analytics request.
   *
   * @public
   */
  PiiEntityTypes?: string | undefined;
}

/**
 * @public
 */
export interface StartMedicalScribeStreamRequest {
  /**
   * Specify an identifier for your streaming session (in UUID format). If you don't include a SessionId in your request, Amazon Web Services HealthScribe generates an ID and returns it in the response.
   *
   * @public
   */
  SessionId?: string | undefined;

  /**
   * Specify the language code for your HealthScribe streaming session.
   *
   * @public
   */
  LanguageCode: MedicalScribeLanguageCode | undefined;

  /**
   * Specify the sample rate of the input audio (in hertz). Amazon Web Services HealthScribe supports a range from 16,000 Hz to 48,000 Hz. The sample rate you specify must match that of your audio.
   *
   * @public
   */
  MediaSampleRateHertz: number | undefined;

  /**
   * Specify the encoding used for the input audio.
   *
   * Supported formats are:
   *
   * - FLAC
   * - OPUS-encoded audio in an Ogg container
   * - PCM (only signed 16-bit little-endian audio formats, which does not include WAV)
   *
   * For more information, see [Media formats](https://docs.aws.amazon.com/transcribe/latest/dg/how-input.html#how-input-audio).
   *
   * @public
   */
  MediaEncoding: MedicalScribeMediaEncoding | undefined;

  /**
   * Specify the input stream where you will send events in real time.
   *
   * The first element of the input stream must be a `MedicalScribeConfigurationEvent`.
   *
   * @public
   */
  InputStream: AsyncIterable<MedicalScribeInputStream> | undefined;
}

/**
 * @public
 */
export interface StartMedicalScribeStreamResponse {
  /**
   * The identifier (in UUID format) for your streaming session.
   *
   * If you already started streaming, this is same ID as the one you specified in your initial `StartMedicalScribeStreamRequest`.
   *
   * @public
   */
  SessionId?: string | undefined;

  /**
   * The unique identifier for your streaming request.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The Language Code that you specified in your request. Same as provided in the `StartMedicalScribeStreamRequest`.
   *
   * @public
   */
  LanguageCode?: MedicalScribeLanguageCode | undefined;

  /**
   * The sample rate (in hertz) that you specified in your request. Same as provided in the `StartMedicalScribeStreamRequest`
   *
   * @public
   */
  MediaSampleRateHertz?: number | undefined;

  /**
   * The Media Encoding you specified in your request. Same as provided in the `StartMedicalScribeStreamRequest`
   *
   * @public
   */
  MediaEncoding?: MedicalScribeMediaEncoding | undefined;

  /**
   * The result stream where you will receive the output events.
   *
   * @public
   */
  ResultStream?: AsyncIterable<MedicalScribeResultStream> | undefined;
}

/**
 * @public
 */
export interface StartMedicalStreamTranscriptionRequest {
  /**
   * Specify the language code that represents the language spoken in your audio.
   *
   * > **Important:** Amazon Transcribe Medical only supports US English (`en-US`).
   *
   * @public
   */
  LanguageCode: LanguageCode | undefined;

  /**
   * The sample rate of the input audio (in hertz). Amazon Transcribe Medical supports a range from 16,000 Hz to 48,000 Hz. Note that the sample rate you specify must match that of your audio.
   *
   * @public
   */
  MediaSampleRateHertz: number | undefined;

  /**
   * Specify the encoding used for the input audio. Supported formats are:
   *
   * - FLAC
   * - OPUS-encoded audio in an Ogg container
   * - PCM (only signed 16-bit little-endian audio formats, which does not include WAV)
   *
   * For more information, see [Media formats](https://docs.aws.amazon.com/transcribe/latest/dg/how-input.html#how-input-audio).
   *
   * @public
   */
  MediaEncoding: MediaEncoding | undefined;

  /**
   * Specify the name of the custom vocabulary that you want to use when processing your transcription. Note that vocabulary names are case sensitive.
   *
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * Specify the medical specialty contained in your audio.
   *
   * @public
   */
  Specialty: Specialty | undefined;

  /**
   * Specify the type of input audio. For example, choose `DICTATION` for a provider dictating patient notes and `CONVERSATION` for a dialogue between a patient and a medical professional.
   *
   * @public
   */
  Type: Type | undefined;

  /**
   * Enables speaker partitioning (diarization) in your transcription output. Speaker partitioning labels the speech from individual speakers in your media file.
   *
   * For more information, see [Partitioning speakers (diarization)](https://docs.aws.amazon.com/transcribe/latest/dg/diarization.html).
   *
   * @public
   */
  ShowSpeakerLabel?: boolean | undefined;

  /**
   * Specify a name for your transcription session. If you don't include this parameter in your request, Amazon Transcribe Medical generates an ID and returns it in the response.
   *
   * @public
   */
  SessionId?: string | undefined;

  /**
   * An encoded stream of audio blobs. Audio streams are encoded as either HTTP/2 or WebSocket data frames.
   *
   * For more information, see [Transcribing streaming audio](https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html).
   *
   * @public
   */
  AudioStream: AsyncIterable<AudioStream> | undefined;

  /**
   * Enables channel identification in multi-channel audio.
   *
   * Channel identification transcribes the audio on each channel independently, then appends the output for each channel into one transcript.
   *
   * If you have multi-channel audio and do not enable channel identification, your audio is transcribed in a continuous manner and your transcript is not separated by channel.
   *
   * If you include `EnableChannelIdentification` in your request, you must also include `NumberOfChannels`.
   *
   * For more information, see [Transcribing multi-channel audio](https://docs.aws.amazon.com/transcribe/latest/dg/channel-id.html).
   *
   * @public
   */
  EnableChannelIdentification?: boolean | undefined;

  /**
   * Specify the number of channels in your audio stream. This value must be `2`, as only two channels are supported. If your audio doesn't contain multiple channels, do not include this parameter in your request.
   *
   * If you include `NumberOfChannels` in your request, you must also include `EnableChannelIdentification`.
   *
   * @public
   */
  NumberOfChannels?: number | undefined;

  /**
   * Labels all personal health information (PHI) identified in your transcript.
   *
   * Content identification is performed at the segment level; PHI is flagged upon complete transcription of an audio segment.
   *
   * For more information, see [Identifying personal health information (PHI) in a transcription](https://docs.aws.amazon.com/transcribe/latest/dg/phi-id.html).
   *
   * @public
   */
  ContentIdentificationType?: MedicalContentIdentificationType | undefined;
}

/**
 * @public
 */
export interface StartMedicalStreamTranscriptionResponse {
  /**
   * Provides the identifier for your streaming request.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * Provides the language code that you specified in your request. This must be `en-US`.
   *
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * Provides the sample rate that you specified in your request.
   *
   * @public
   */
  MediaSampleRateHertz?: number | undefined;

  /**
   * Provides the media encoding you specified in your request.
   *
   * @public
   */
  MediaEncoding?: MediaEncoding | undefined;

  /**
   * Provides the name of the custom vocabulary that you specified in your request.
   *
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * Provides the medical specialty that you specified in your request.
   *
   * @public
   */
  Specialty?: Specialty | undefined;

  /**
   * Provides the type of audio you specified in your request.
   *
   * @public
   */
  Type?: Type | undefined;

  /**
   * Shows whether speaker partitioning was enabled for your transcription.
   *
   * @public
   */
  ShowSpeakerLabel?: boolean | undefined;

  /**
   * Provides the identifier for your transcription session.
   *
   * @public
   */
  SessionId?: string | undefined;

  /**
   * Provides detailed information about your streaming session.
   *
   * @public
   */
  TranscriptResultStream?: AsyncIterable<MedicalTranscriptResultStream> | undefined;

  /**
   * Shows whether channel identification was enabled for your transcription.
   *
   * @public
   */
  EnableChannelIdentification?: boolean | undefined;

  /**
   * Provides the number of channels that you specified in your request.
   *
   * @public
   */
  NumberOfChannels?: number | undefined;

  /**
   * Shows whether content identification was enabled for your transcription.
   *
   * @public
   */
  ContentIdentificationType?: MedicalContentIdentificationType | undefined;
}

/**
 * @public
 */
export interface StartStreamTranscriptionRequest {
  /**
   * Specify the language code that represents the language spoken in your audio.
   *
   * If you're unsure of the language spoken in your audio, consider using `IdentifyLanguage` to enable automatic language identification.
   *
   * For a list of languages supported with Amazon Transcribe streaming, refer to the [Supported languages](https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html) table.
   *
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * The sample rate of the input audio (in hertz). Low-quality audio, such as telephone audio, is typically around 8,000 Hz. High-quality audio typically ranges from 16,000 Hz to 48,000 Hz. Note that the sample rate you specify must match that of your audio.
   *
   * @public
   */
  MediaSampleRateHertz: number | undefined;

  /**
   * Specify the encoding of your input audio. Supported formats are:
   *
   * - FLAC
   * - OPUS-encoded audio in an Ogg container
   * - PCM (only signed 16-bit little-endian audio formats, which does not include WAV)
   *
   * For more information, see [Media formats](https://docs.aws.amazon.com/transcribe/latest/dg/how-input.html#how-input-audio).
   *
   * @public
   */
  MediaEncoding: MediaEncoding | undefined;

  /**
   * Specify the name of the custom vocabulary that you want to use when processing your transcription. Note that vocabulary names are case sensitive.
   *
   * If the language of the specified custom vocabulary doesn't match the language identified in your media, the custom vocabulary is not applied to your transcription.
   *
   * > **Important:** This parameter is **not** intended for use with the `IdentifyLanguage` parameter. If you're including `IdentifyLanguage` in your request and want to use one or more custom vocabularies with your transcription, use the `VocabularyNames` parameter instead.
   *
   * For more information, see [Custom vocabularies](https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html).
   *
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * Specify a name for your transcription session. If you don't include this parameter in your request, Amazon Transcribe generates an ID and returns it in the response.
   *
   * @public
   */
  SessionId?: string | undefined;

  /**
   * An encoded stream of audio blobs. Audio streams are encoded as either HTTP/2 or WebSocket data frames.
   *
   * For more information, see [Transcribing streaming audio](https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html).
   *
   * @public
   */
  AudioStream: AsyncIterable<AudioStream> | undefined;

  /**
   * Specify the name of the custom vocabulary filter that you want to use when processing your transcription. Note that vocabulary filter names are case sensitive.
   *
   * If the language of the specified custom vocabulary filter doesn't match the language identified in your media, the vocabulary filter is not applied to your transcription.
   *
   * > **Important:** This parameter is **not** intended for use with the `IdentifyLanguage` parameter. If you're including `IdentifyLanguage` in your request and want to use one or more vocabulary filters with your transcription, use the `VocabularyFilterNames` parameter instead.
   *
   * For more information, see [Using vocabulary filtering with unwanted words](https://docs.aws.amazon.com/transcribe/latest/dg/vocabulary-filtering.html).
   *
   * @public
   */
  VocabularyFilterName?: string | undefined;

  /**
   * Specify how you want your vocabulary filter applied to your transcript.
   *
   * To replace words with `***`, choose `mask`.
   *
   * To delete words, choose `remove`.
   *
   * To flag words without changing them, choose `tag`.
   *
   * @public
   */
  VocabularyFilterMethod?: VocabularyFilterMethod | undefined;

  /**
   * Enables speaker partitioning (diarization) in your transcription output. Speaker partitioning labels the speech from individual speakers in your media file.
   *
   * For more information, see [Partitioning speakers (diarization)](https://docs.aws.amazon.com/transcribe/latest/dg/diarization.html).
   *
   * @public
   */
  ShowSpeakerLabel?: boolean | undefined;

  /**
   * Enables channel identification in multi-channel audio.
   *
   * Channel identification transcribes the audio on each channel independently, then appends the output for each channel into one transcript.
   *
   * If you have multi-channel audio and do not enable channel identification, your audio is transcribed in a continuous manner and your transcript is not separated by channel.
   *
   * If you include `EnableChannelIdentification` in your request, you must also include `NumberOfChannels`.
   *
   * For more information, see [Transcribing multi-channel audio](https://docs.aws.amazon.com/transcribe/latest/dg/channel-id.html).
   *
   * @public
   */
  EnableChannelIdentification?: boolean | undefined;

  /**
   * Specify the number of channels in your audio stream. This value must be `2`, as only two channels are supported. If your audio doesn't contain multiple channels, do not include this parameter in your request.
   *
   * If you include `NumberOfChannels` in your request, you must also include `EnableChannelIdentification`.
   *
   * @public
   */
  NumberOfChannels?: number | undefined;

  /**
   * Enables partial result stabilization for your transcription. Partial result stabilization can reduce latency in your output, but may impact accuracy. For more information, see [Partial-result stabilization](https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html#streaming-partial-result-stabilization).
   *
   * @public
   */
  EnablePartialResultsStabilization?: boolean | undefined;

  /**
   * Specify the level of stability to use when you enable partial results stabilization (`EnablePartialResultsStabilization`).
   *
   * Low stability provides the highest accuracy. High stability transcribes faster, but with slightly lower accuracy.
   *
   * For more information, see [Partial-result stabilization](https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html#streaming-partial-result-stabilization).
   *
   * @public
   */
  PartialResultsStability?: PartialResultsStability | undefined;

  /**
   * Labels all personally identifiable information (PII) identified in your transcript.
   *
   * Content identification is performed at the segment level; PII specified in `PiiEntityTypes` is flagged upon complete transcription of an audio segment. If you don't include `PiiEntityTypes` in your request, all PII is identified.
   *
   * You can’t set `ContentIdentificationType` and `ContentRedactionType` in the same request. If you set both, your request returns a `BadRequestException`.
   *
   * For more information, see [Redacting or identifying personally identifiable information](https://docs.aws.amazon.com/transcribe/latest/dg/pii-redaction.html).
   *
   * @public
   */
  ContentIdentificationType?: ContentIdentificationType | undefined;

  /**
   * Redacts all personally identifiable information (PII) identified in your transcript.
   *
   * Content redaction is performed at the segment level; PII specified in `PiiEntityTypes` is redacted upon complete transcription of an audio segment. If you don't include `PiiEntityTypes` in your request, all PII is redacted.
   *
   * You can’t set `ContentRedactionType` and `ContentIdentificationType` in the same request. If you set both, your request returns a `BadRequestException`.
   *
   * For more information, see [Redacting or identifying personally identifiable information](https://docs.aws.amazon.com/transcribe/latest/dg/pii-redaction.html).
   *
   * @public
   */
  ContentRedactionType?: ContentRedactionType | undefined;

  /**
   * Specify which types of personally identifiable information (PII) you want to redact in your transcript. You can include as many types as you'd like, or you can select `ALL`.
   *
   * Values must be comma-separated and can include: `ADDRESS`, `BANK_ACCOUNT_NUMBER`, `BANK_ROUTING`, `CREDIT_DEBIT_CVV`, `CREDIT_DEBIT_EXPIRY`, `CREDIT_DEBIT_NUMBER`, `EMAIL`, `NAME`, `PHONE`, `PIN`, `SSN`, `AGE`, `DATE_TIME`, `LICENSE_PLATE`, `PASSPORT_NUMBER`, `PASSWORD`, `USERNAME`, `VEHICLE_IDENTIFICATION_NUMBER`, or `ALL`.
   *
   * Note that if you include `PiiEntityTypes` in your request, you must also include `ContentIdentificationType` or `ContentRedactionType`.
   *
   * If you include `ContentRedactionType` or `ContentIdentificationType` in your request, but do not include `PiiEntityTypes`, all PII is redacted or identified.
   *
   * @public
   */
  PiiEntityTypes?: string | undefined;

  /**
   * Specify the name of the custom language model that you want to use when processing your transcription. Note that language model names are case sensitive.
   *
   * The language of the specified language model must match the language code you specify in your transcription request. If the languages don't match, the custom language model isn't applied. There are no errors or warnings associated with a language mismatch.
   *
   * For more information, see [Custom language models](https://docs.aws.amazon.com/transcribe/latest/dg/custom-language-models.html).
   *
   * @public
   */
  LanguageModelName?: string | undefined;

  /**
   * Enables automatic language identification for your transcription.
   *
   * If you include `IdentifyLanguage`, you must include a list of language codes, using `LanguageOptions`, that you think may be present in your audio stream.
   *
   * You can also include a preferred language using `PreferredLanguage`. Adding a preferred language can help Amazon Transcribe identify the language faster than if you omit this parameter.
   *
   * If you have multi-channel audio that contains different languages on each channel, and you've enabled channel identification, automatic language identification identifies the dominant language on each audio channel.
   *
   * Note that you must include either `LanguageCode` or `IdentifyLanguage` or `IdentifyMultipleLanguages` in your request. If you include more than one of these parameters, your transcription job fails.
   *
   * Streaming language identification can't be combined with custom language models or redaction.
   *
   * @public
   */
  IdentifyLanguage?: boolean | undefined;

  /**
   * Specify two or more language codes that represent the languages you think may be present in your media; including more than five is not recommended.
   *
   * Including language options can improve the accuracy of language identification.
   *
   * If you include `LanguageOptions` in your request, you must also include `IdentifyLanguage` or `IdentifyMultipleLanguages`.
   *
   * For a list of languages supported with Amazon Transcribe streaming, refer to the [Supported languages](https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html) table.
   *
   * > **Important:** You can only include one language dialect per language per stream. For example, you cannot include `en-US` and `en-AU` in the same request.
   *
   * @public
   */
  LanguageOptions?: string | undefined;

  /**
   * Specify a preferred language from the subset of languages codes you specified in `LanguageOptions`.
   *
   * You can only use this parameter if you've included `IdentifyLanguage` and `LanguageOptions` in your request.
   *
   * @public
   */
  PreferredLanguage?: LanguageCode | undefined;

  /**
   * Enables automatic multi-language identification in your transcription job request. Use this parameter if your stream contains more than one language. If your stream contains only one language, use IdentifyLanguage instead.
   *
   * If you include `IdentifyMultipleLanguages`, you must include a list of language codes, using `LanguageOptions`, that you think may be present in your stream.
   *
   * If you want to apply a custom vocabulary or a custom vocabulary filter to your automatic multiple language identification request, include `VocabularyNames` or `VocabularyFilterNames`.
   *
   * Note that you must include one of `LanguageCode`, `IdentifyLanguage`, or `IdentifyMultipleLanguages` in your request. If you include more than one of these parameters, your transcription job fails.
   *
   * @public
   */
  IdentifyMultipleLanguages?: boolean | undefined;

  /**
   * Specify the names of the custom vocabularies that you want to use when processing your transcription. Note that vocabulary names are case sensitive.
   *
   * If none of the languages of the specified custom vocabularies match the language identified in your media, your job fails.
   *
   * > **Important:** This parameter is only intended for use **with** the `IdentifyLanguage` parameter. If you're **not** including `IdentifyLanguage` in your request and want to use a custom vocabulary with your transcription, use the `VocabularyName` parameter instead.
   *
   * For more information, see [Custom vocabularies](https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html).
   *
   * @public
   */
  VocabularyNames?: string | undefined;

  /**
   * Specify the names of the custom vocabulary filters that you want to use when processing your transcription. Note that vocabulary filter names are case sensitive.
   *
   * If none of the languages of the specified custom vocabulary filters match the language identified in your media, your job fails.
   *
   * > **Important:** This parameter is only intended for use **with** the `IdentifyLanguage` parameter. If you're **not** including `IdentifyLanguage` in your request and want to use a custom vocabulary filter with your transcription, use the `VocabularyFilterName` parameter instead.
   *
   * For more information, see [Using vocabulary filtering with unwanted words](https://docs.aws.amazon.com/transcribe/latest/dg/vocabulary-filtering.html).
   *
   * @public
   */
  VocabularyFilterNames?: string | undefined;

  /**
   * Specify the time window, in minutes, during which your transcription session can be resumed, measured from the stream start time. This optional parameter accepts integer values from 1 to 300 (5 hours).
   *
   * For example, if your stream starts at 1 PM and you specify a `SessionResumeWindow` of 30 minutes, you can reconnect to the session as many times as you want until 1:30 PM.
   *
   * @public
   */
  SessionResumeWindow?: number | undefined;

  /**
   * Specify how numbers, dates, and other alphanumeric entities are rendered in your transcription results.
   *
   * - `WRITTEN` renders these entities in their standard written form (for example, `$50`, `10:30 AM`, and `101`).
   * - `SPOKEN` renders these entities as words, exactly as they were spoken (for example, `fifty dollars`, `ten thirty a m`, and `one oh one`).
   *
   * If you don't specify a value, Amazon Transcribe uses `WRITTEN` by default.
   *
   * @public
   */
  TranscriptFormat?: TranscriptFormat | undefined;
}

/**
 * The `Transcript` associated with a .
 *
 * `Transcript` contains `Results`, which contains a set of transcription results from one or more audio segments, along with additional information per your request parameters.
 *
 * @public
 */
export interface Transcript {
  /**
   * Contains a set of transcription results from one or more audio segments, along with additional information per your request parameters. This can include information relating to alternative transcriptions, channel identification, partial result stabilization, language identification, and other transcription-related data.
   *
   * @public
   */
  Results?: Result[] | undefined;
}

/**
 * The `TranscriptEvent` associated with a `TranscriptResultStream`.
 *
 * Contains a set of transcription results from one or more audio segments, along with additional information per your request parameters.
 *
 * @public
 */
export interface TranscriptEvent {
  /**
   * Contains `Results`, which contains a set of transcription results from one or more audio segments, along with additional information per your request parameters. This can include information relating to alternative transcriptions, channel identification, partial result stabilization, language identification, and other transcription-related data.
   *
   * @public
   */
  Transcript?: Transcript | undefined;
}

/**
 * Contains detailed information about your streaming session.
 *
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
   * Contains `Transcript`, which contains `Results`. The object contains a set of transcription results from one or more audio segments, along with additional information per your request parameters.
   *
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
   * A client error occurred when the stream was created. Check the parameters of the request and try your request again.
   *
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
   * Your client has exceeded one of the Amazon Transcribe limits, typically the concurrent stream service quota. This error can also occur if a stream exceeds the maximum session duration. In rare cases, this error can also occur if you increase your number of concurrent streams too quickly. Reduce your number of concurrent streams and try your request again using an exponential backoff strategy.
   *
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
   * A problem occurred while processing the audio. Amazon Transcribe terminated processing.
   *
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
   * A new stream started with the same session ID. The current stream has been terminated.
   *
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
   * The service is currently unavailable. Try your request later.
   *
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
   * Provides the identifier for your streaming request.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * Provides the language code that you specified in your request.
   *
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * Provides the sample rate that you specified in your request.
   *
   * @public
   */
  MediaSampleRateHertz?: number | undefined;

  /**
   * Provides the media encoding you specified in your request.
   *
   * @public
   */
  MediaEncoding?: MediaEncoding | undefined;

  /**
   * Provides the name of the custom vocabulary that you specified in your request.
   *
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * Provides the identifier for your transcription session.
   *
   * @public
   */
  SessionId?: string | undefined;

  /**
   * Provides detailed information about your streaming session.
   *
   * @public
   */
  TranscriptResultStream?: AsyncIterable<TranscriptResultStream> | undefined;

  /**
   * Provides the name of the custom vocabulary filter that you specified in your request.
   *
   * @public
   */
  VocabularyFilterName?: string | undefined;

  /**
   * Provides the vocabulary filtering method used in your transcription.
   *
   * @public
   */
  VocabularyFilterMethod?: VocabularyFilterMethod | undefined;

  /**
   * Shows whether speaker partitioning was enabled for your transcription.
   *
   * @public
   */
  ShowSpeakerLabel?: boolean | undefined;

  /**
   * Shows whether channel identification was enabled for your transcription.
   *
   * @public
   */
  EnableChannelIdentification?: boolean | undefined;

  /**
   * Provides the number of channels that you specified in your request.
   *
   * @public
   */
  NumberOfChannels?: number | undefined;

  /**
   * Shows whether partial results stabilization was enabled for your transcription.
   *
   * @public
   */
  EnablePartialResultsStabilization?: boolean | undefined;

  /**
   * Provides the stabilization level used for your transcription.
   *
   * @public
   */
  PartialResultsStability?: PartialResultsStability | undefined;

  /**
   * Shows whether content identification was enabled for your transcription.
   *
   * @public
   */
  ContentIdentificationType?: ContentIdentificationType | undefined;

  /**
   * Shows whether content redaction was enabled for your transcription.
   *
   * @public
   */
  ContentRedactionType?: ContentRedactionType | undefined;

  /**
   * Lists the PII entity types you specified in your request.
   *
   * @public
   */
  PiiEntityTypes?: string | undefined;

  /**
   * Provides the name of the custom language model that you specified in your request.
   *
   * @public
   */
  LanguageModelName?: string | undefined;

  /**
   * Shows whether automatic language identification was enabled for your transcription.
   *
   * @public
   */
  IdentifyLanguage?: boolean | undefined;

  /**
   * Provides the language codes that you specified in your request.
   *
   * @public
   */
  LanguageOptions?: string | undefined;

  /**
   * Provides the preferred language that you specified in your request.
   *
   * @public
   */
  PreferredLanguage?: LanguageCode | undefined;

  /**
   * Shows whether automatic multi-language identification was enabled for your transcription.
   *
   * @public
   */
  IdentifyMultipleLanguages?: boolean | undefined;

  /**
   * Provides the names of the custom vocabularies that you specified in your request.
   *
   * @public
   */
  VocabularyNames?: string | undefined;

  /**
   * Provides the names of the custom vocabulary filters that you specified in your request.
   *
   * @public
   */
  VocabularyFilterNames?: string | undefined;

  /**
   * Provides the session resume window, in minutes, that you specified in your request.
   *
   * @public
   */
  SessionResumeWindow?: number | undefined;

  /**
   * Provides the transcript format that you specified in your request.
   *
   * @public
   */
  TranscriptFormat?: TranscriptFormat | undefined;
}
