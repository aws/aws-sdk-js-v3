// smithy-typescript generated code
import type {
  BaseModelName,
  CallAnalyticsFeature,
  CallAnalyticsJobStatus,
  CallAnalyticsSkippedReasonCode,
  CLMLanguageCode,
  InputType,
  LanguageCode,
  MediaFormat,
  MedicalContentIdentificationType,
  MedicalScribeJobStatus,
  MedicalScribeLanguageCode,
  MedicalScribeNoteTemplate,
  MedicalScribeParticipantRole,
  ModelStatus,
  OutputLocationType,
  ParticipantRole,
  PiiEntityType,
  Pronouns,
  RedactionOutput,
  RedactionType,
  SentimentValue,
  Specialty,
  SubtitleFormat,
  ToxicityCategory,
  TranscriptFilterType,
  TranscriptionJobStatus,
  Type,
  VocabularyFilterMethod,
  VocabularyState,
} from "./enums";

/**
 * A time range, in milliseconds, between two points in your media file.
 *
 * You can use `StartTime` and `EndTime` to search a custom segment. For example, setting `StartTime` to 10000 and `EndTime` to 50000 only searches for your specified criteria in the audio contained between the 10,000 millisecond mark and the 50,000 millisecond mark of your media file. You must use `StartTime` and `EndTime` as a set; that is, if you include one, you must include both.
 *
 * You can use also `First` to search from the start of the audio until the time that you specify, or `Last` to search from the time that you specify until the end of the audio. For example, setting `First` to 50000 only searches for your specified criteria in the audio contained between the start of the media file to the 50,000 millisecond mark. You can use `First` and `Last` independently of each other.
 *
 * If you prefer to use percentage instead of milliseconds, see .
 *
 * @public
 */
export interface AbsoluteTimeRange {
  /**
   * The time, in milliseconds, when Amazon Transcribe starts searching for the specified criteria in your audio. If you include `StartTime` in your request, you must also include `EndTime`.
   *
   * @public
   */
  StartTime?: number | undefined;

  /**
   * The time, in milliseconds, when Amazon Transcribe stops searching for the specified criteria in your audio. If you include `EndTime` in your request, you must also include `StartTime`.
   *
   * @public
   */
  EndTime?: number | undefined;

  /**
   * The time, in milliseconds, from the start of your media file until the specified value. Amazon Transcribe searches for your specified criteria in this time segment.
   *
   * @public
   */
  First?: number | undefined;

  /**
   * The time, in milliseconds, from the specified value until the end of your media file. Amazon Transcribe searches for your specified criteria in this time segment.
   *
   * @public
   */
  Last?: number | undefined;
}

/**
 * Represents a skipped analytics feature during the analysis of a call analytics job.
 *
 * The `Feature` field indicates the type of analytics feature that was skipped.
 *
 * The `Message` field contains additional information or a message explaining why the analytics feature was skipped.
 *
 * The `ReasonCode` field provides a code indicating the reason why the analytics feature was skipped.
 *
 * @public
 */
export interface CallAnalyticsSkippedFeature {
  /**
   * Indicates the type of analytics feature that was skipped during the analysis of a call analytics job.
   *
   * @public
   */
  Feature?: CallAnalyticsFeature | undefined;

  /**
   * Provides a code indicating the reason why a specific analytics feature was skipped during the analysis of a call analytics job.
   *
   * @public
   */
  ReasonCode?: CallAnalyticsSkippedReasonCode | undefined;

  /**
   * Contains additional information or a message explaining why a specific analytics feature was skipped during the analysis of a call analytics job.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Contains details about a call analytics job, including information about skipped analytics features.
 *
 * @public
 */
export interface CallAnalyticsJobDetails {
  /**
   * Contains information about any skipped analytics features during the analysis of a call analytics job.
   *
   * This array lists all the analytics features that were skipped, along with their corresponding reason code and message.
   *
   * @public
   */
  Skipped?: CallAnalyticsSkippedFeature[] | undefined;
}

/**
 * Makes it possible to specify which speaker is on which channel. For example, if your agent is the first participant to speak, you would set `ChannelId` to `0` (to indicate the first channel) and `ParticipantRole` to `AGENT` (to indicate that it's the agent speaking).
 *
 * @public
 */
export interface ChannelDefinition {
  /**
   * Specify the audio channel you want to define.
   *
   * @public
   */
  ChannelId?: number | undefined;

  /**
   * Specify the speaker you want to define. Omitting this parameter is equivalent to specifying both participants.
   *
   * @public
   */
  ParticipantRole?: ParticipantRole | undefined;
}

/**
 * Describes the Amazon S3 location of the media file you want to use in your request.
 *
 * For information on supported media formats, refer to the `MediaFormat` parameter or the [Media formats](https://docs.aws.amazon.com/transcribe/latest/dg/how-input.html#how-input-audio) section in the Amazon S3 Developer Guide.
 *
 * @public
 */
export interface Media {
  /**
   * The Amazon S3 location of the media file you want to transcribe. For example:
   *
   * - `s3://DOC-EXAMPLE-BUCKET/my-media-file.flac`
   * - `s3://DOC-EXAMPLE-BUCKET/media-files/my-media-file.flac`
   *
   * Note that the Amazon S3 bucket that contains your input media must be located in the same Amazon Web Services Region where you're making your transcription request.
   *
   * @public
   */
  MediaFileUri?: string | undefined;

  /**
   * The Amazon S3 location of the media file you want to redact. For example:
   *
   * - `s3://DOC-EXAMPLE-BUCKET/my-media-file.flac`
   * - `s3://DOC-EXAMPLE-BUCKET/media-files/my-media-file.flac`
   *
   * Note that the Amazon S3 bucket that contains your input media must be located in the same Amazon Web Services Region where you're making your transcription request.
   *
   * > **Important:** `RedactedMediaFileUri` produces a redacted audio file in addition to a redacted transcript. It is only supported for Call Analytics (`StartCallAnalyticsJob`) transcription requests.
   *
   * @public
   */
  RedactedMediaFileUri?: string | undefined;
}

/**
 * Makes it possible to redact or flag specified personally identifiable information (PII) in your transcript. If you use `ContentRedaction`, you must also include the sub-parameters: `RedactionOutput` and `RedactionType`. You can optionally include `PiiEntityTypes` to choose which types of PII you want to redact.
 *
 * @public
 */
export interface ContentRedaction {
  /**
   * Specify the category of information you want to redact; `PII` (personally identifiable information) is the only valid value. You can use `PiiEntityTypes` to choose which types of PII you want to redact. If you do not include `PiiEntityTypes` in your request, all PII is redacted.
   *
   * @public
   */
  RedactionType: RedactionType | undefined;

  /**
   * Specify if you want only a redacted transcript, or if you want a redacted and an unredacted transcript.
   *
   * When you choose `redacted` Amazon Transcribe creates only a redacted transcript.
   *
   * When you choose `redacted_and_unredacted` Amazon Transcribe creates a redacted and an unredacted transcript (as two separate files).
   *
   * @public
   */
  RedactionOutput: RedactionOutput | undefined;

  /**
   * Specify which types of personally identifiable information (PII) you want to redact in your transcript. You can include as many types as you'd like, or you can select `ALL`. If you do not include `PiiEntityTypes` in your request, all PII is redacted.
   *
   * @public
   */
  PiiEntityTypes?: PiiEntityType[] | undefined;
}

/**
 * If using automatic language identification in your request and you want to apply a custom language model, a custom vocabulary, or a custom vocabulary filter, include `LanguageIdSettings` with the relevant sub-parameters (`VocabularyName`, `LanguageModelName`, and `VocabularyFilterName`). Note that multi-language identification (`IdentifyMultipleLanguages`) doesn't support custom language models.
 *
 * `LanguageIdSettings` supports two to five language codes. Each language code you include can have an associated custom language model, custom vocabulary, and custom vocabulary filter. The language codes that you specify must match the languages of the associated custom language models, custom vocabularies, and custom vocabulary filters.
 *
 * It's recommended that you include `LanguageOptions` when using `LanguageIdSettings` to ensure that the correct language dialect is identified. For example, if you specify a custom vocabulary that is in `en-US` but Amazon Transcribe determines that the language spoken in your media is `en-AU`, your custom vocabulary *is not* applied to your transcription. If you include `LanguageOptions` and include `en-US` as the only English language dialect, your custom vocabulary *is* applied to your transcription.
 *
 * If you want to include a custom language model with your request but **do not** want to use automatic language identification, use instead the parameter with the `LanguageModelName` sub-parameter. If you want to include a custom vocabulary or a custom vocabulary filter (or both) with your request but **do not** want to use automatic language identification, use instead the parameter with the `VocabularyName` or `VocabularyFilterName` (or both) sub-parameter.
 *
 * @public
 */
export interface LanguageIdSettings {
  /**
   * The name of the custom vocabulary you want to use when processing your transcription job. Custom vocabulary names are case sensitive.
   *
   * The language of the specified custom vocabulary must match the language code that you specify in your transcription request. If the languages do not match, the custom vocabulary isn't applied. There are no errors or warnings associated with a language mismatch.
   *
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * The name of the custom vocabulary filter you want to use when processing your transcription job. Custom vocabulary filter names are case sensitive.
   *
   * The language of the specified custom vocabulary filter must match the language code that you specify in your transcription request. If the languages do not match, the custom vocabulary filter isn't applied. There are no errors or warnings associated with a language mismatch.
   *
   * Note that if you include `VocabularyFilterName` in your request, you must also include `VocabularyFilterMethod`.
   *
   * @public
   */
  VocabularyFilterName?: string | undefined;

  /**
   * The name of the custom language model you want to use when processing your transcription job. Note that custom language model names are case sensitive.
   *
   * The language of the specified custom language model must match the language code that you specify in your transcription request. If the languages do not match, the custom language model isn't applied. There are no errors or warnings associated with a language mismatch.
   *
   * @public
   */
  LanguageModelName?: string | undefined;
}

/**
 * Contains `GenerateAbstractiveSummary`, which is a required parameter if you want to enable Generative call summarization in your Call Analytics request.
 *
 * @public
 */
export interface Summarization {
  /**
   * Enables Generative call summarization in your Call Analytics request
   *
   * Generative call summarization provides a summary of the transcript including important components discussed in the conversation.
   *
   * For more information, see [Enabling generative call summarization](https://docs.aws.amazon.com/transcribe/latest/dg/tca-enable-summarization.html).
   *
   * @public
   */
  GenerateAbstractiveSummary: boolean | undefined;
}

/**
 * Provides additional optional settings for your request, including content redaction, automatic language identification; allows you to apply custom language models, custom vocabulary filters, and custom vocabularies.
 *
 * @public
 */
export interface CallAnalyticsJobSettings {
  /**
   * The name of the custom vocabulary you want to include in your Call Analytics transcription request. Custom vocabulary names are case sensitive.
   *
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * The name of the custom vocabulary filter you want to include in your Call Analytics transcription request. Custom vocabulary filter names are case sensitive.
   *
   * Note that if you include `VocabularyFilterName` in your request, you must also include `VocabularyFilterMethod`.
   *
   * @public
   */
  VocabularyFilterName?: string | undefined;

  /**
   * Specify how you want your custom vocabulary filter applied to your transcript.
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
   * The name of the custom language model you want to use when processing your Call Analytics job. Note that custom language model names are case sensitive.
   *
   * The language of the specified custom language model must match the language code that you specify in your transcription request. If the languages do not match, the custom language model isn't applied. There are no errors or warnings associated with a language mismatch.
   *
   * @public
   */
  LanguageModelName?: string | undefined;

  /**
   * Makes it possible to redact or flag specified personally identifiable information (PII) in your transcript. If you use `ContentRedaction`, you must also include the sub-parameters: `RedactionOutput` and `RedactionType`. You can optionally include `PiiEntityTypes` to choose which types of PII you want to redact.
   *
   * @public
   */
  ContentRedaction?: ContentRedaction | undefined;

  /**
   * You can specify two or more language codes that represent the languages you think may be present in your media. Including more than five is not recommended. If you're unsure what languages are present, do not include this parameter.
   *
   * Including language options can improve the accuracy of language identification.
   *
   * For a list of languages supported with Call Analytics, refer to the [Supported languages](https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html) table.
   *
   * To transcribe speech in Modern Standard Arabic (`ar-SA`) in Amazon Web Services GovCloud (US) (US-West, us-gov-west-1), Amazon Web Services GovCloud (US) (US-East, us-gov-east-1), Canada (Calgary) ca-west-1 and Africa (Cape Town) af-south-1, your media file must be encoded at a sample rate of 16,000 Hz or higher.
   *
   * @public
   */
  LanguageOptions?: LanguageCode[] | undefined;

  /**
   * If using automatic language identification in your request and you want to apply a custom language model, a custom vocabulary, or a custom vocabulary filter, include `LanguageIdSettings` with the relevant sub-parameters (`VocabularyName`, `LanguageModelName`, and `VocabularyFilterName`).
   *
   * `LanguageIdSettings` supports two to five language codes. Each language code you include can have an associated custom language model, custom vocabulary, and custom vocabulary filter. The language codes that you specify must match the languages of the associated custom language models, custom vocabularies, and custom vocabulary filters.
   *
   * It's recommended that you include `LanguageOptions` when using `LanguageIdSettings` to ensure that the correct language dialect is identified. For example, if you specify a custom vocabulary that is in `en-US` but Amazon Transcribe determines that the language spoken in your media is `en-AU`, your custom vocabulary *is not* applied to your transcription. If you include `LanguageOptions` and include `en-US` as the only English language dialect, your custom vocabulary *is* applied to your transcription.
   *
   * If you want to include a custom language model, custom vocabulary, or custom vocabulary filter with your request but **do not** want to use automatic language identification, use instead the parameter with the `LanguageModelName`, `VocabularyName`, or `VocabularyFilterName` sub-parameters.
   *
   * For a list of languages supported with Call Analytics, refer to [Supported languages and language-specific features](https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html).
   *
   * @public
   */
  LanguageIdSettings?: Partial<Record<LanguageCode, LanguageIdSettings>> | undefined;

  /**
   * Contains `GenerateAbstractiveSummary`, which is a required parameter if you want to enable Generative call summarization in your Call Analytics request.
   *
   * @public
   */
  Summarization?: Summarization | undefined;
}

/**
 * Adds metadata, in the form of a key:value pair, to the specified resource.
 *
 * For example, you could add the tag `Department:Sales` to a resource to indicate that it pertains to your organization's sales department. You can also use tags for tag-based access control.
 *
 * To learn more about tagging, see [Tagging resources](https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html).
 *
 * @public
 */
export interface Tag {
  /**
   * The first part of a key:value pair that forms a tag associated with a given resource. For example, in the tag `Department:Sales`, the key is 'Department'.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The second part of a key:value pair that forms a tag associated with a given resource. For example, in the tag `Department:Sales`, the value is 'Sales'.
   *
   * Note that you can set the value of a tag to an empty string, but you can't set the value of a tag to null. Omitting the tag value is the same as using an empty string.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Provides you with the Amazon S3 URI you can use to access your transcript.
 *
 * @public
 */
export interface Transcript {
  /**
   * The Amazon S3 location of your transcript. You can use this URI to access or download your transcript.
   *
   * If you included `OutputBucketName` in your transcription job request, this is the URI of that bucket. If you also included `OutputKey` in your request, your output is located in the path you specified in your request.
   *
   * If you didn't include `OutputBucketName` in your transcription job request, your transcript is stored in a service-managed bucket, and `TranscriptFileUri` provides you with a temporary URI you can use for secure access to your transcript.
   *
   * > **Note:** Temporary URIs for service-managed Amazon S3 buckets are only valid for 15 minutes. If you get an `AccesDenied` error, you can get a new temporary URI by running a `GetTranscriptionJob` or `ListTranscriptionJob` request.
   *
   * @public
   */
  TranscriptFileUri?: string | undefined;

  /**
   * The Amazon S3 location of your redacted transcript. You can use this URI to access or download your transcript.
   *
   * If you included `OutputBucketName` in your transcription job request, this is the URI of that bucket. If you also included `OutputKey` in your request, your output is located in the path you specified in your request.
   *
   * If you didn't include `OutputBucketName` in your transcription job request, your transcript is stored in a service-managed bucket, and `RedactedTranscriptFileUri` provides you with a temporary URI you can use for secure access to your transcript.
   *
   * > **Note:** Temporary URIs for service-managed Amazon S3 buckets are only valid for 15 minutes. If you get an `AccesDenied` error, you can get a new temporary URI by running a `GetTranscriptionJob` or `ListTranscriptionJob` request.
   *
   * @public
   */
  RedactedTranscriptFileUri?: string | undefined;
}

/**
 * Provides detailed information about a Call Analytics job.
 *
 * To view the job's status, refer to `CallAnalyticsJobStatus`. If the status is `COMPLETED`, the job is finished. You can find your completed transcript at the URI specified in `TranscriptFileUri`. If the status is `FAILED`, `FailureReason` provides details on why your transcription job failed.
 *
 * If you enabled personally identifiable information (PII) redaction, the redacted transcript appears at the location specified in `RedactedTranscriptFileUri`.
 *
 * If you chose to redact the audio in your media file, you can find your redacted media file at the location specified in the `RedactedMediaFileUri` field of your response.
 *
 * @public
 */
export interface CallAnalyticsJob {
  /**
   * The name of the Call Analytics job. Job names are case sensitive and must be unique within an Amazon Web Services account.
   *
   * @public
   */
  CallAnalyticsJobName?: string | undefined;

  /**
   * Provides the status of the specified Call Analytics job.
   *
   * If the status is `COMPLETED`, the job is finished and you can find the results at the location specified in `TranscriptFileUri` (or `RedactedTranscriptFileUri`, if you requested transcript redaction). If the status is `FAILED`, `FailureReason` provides details on why your transcription job failed.
   *
   * @public
   */
  CallAnalyticsJobStatus?: CallAnalyticsJobStatus | undefined;

  /**
   * Provides detailed information about a call analytics job, including information about skipped analytics features.
   *
   * @public
   */
  CallAnalyticsJobDetails?: CallAnalyticsJobDetails | undefined;

  /**
   * The language code used to create your Call Analytics job. For a list of supported languages and their associated language codes, refer to the [Supported languages](https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html) table.
   *
   * If you do not know the language spoken in your media file, you can omit this field and let Amazon Transcribe automatically identify the language of your media. To improve the accuracy of language identification, you can include several language codes and Amazon Transcribe chooses the closest match for your transcription.
   *
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * The sample rate, in hertz, of the audio track in your input media file.
   *
   * @public
   */
  MediaSampleRateHertz?: number | undefined;

  /**
   * The format of the input media file.
   *
   * @public
   */
  MediaFormat?: MediaFormat | undefined;

  /**
   * Provides the Amazon S3 location of the media file you used in your Call Analytics request.
   *
   * @public
   */
  Media?: Media | undefined;

  /**
   * Provides you with the Amazon S3 URI you can use to access your transcript.
   *
   * @public
   */
  Transcript?: Transcript | undefined;

  /**
   * The date and time the specified Call Analytics job began processing.
   *
   * Timestamps are in the format `YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC`. For example, `2022-05-04T12:32:58.789000-07:00` represents a transcription job that started processing at 12:32 PM UTC-7 on May 4, 2022.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The date and time the specified Call Analytics job request was made.
   *
   * Timestamps are in the format `YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC`. For example, `2022-05-04T12:32:58.761000-07:00` represents a transcription job that started processing at 12:32 PM UTC-7 on May 4, 2022.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The date and time the specified Call Analytics job finished processing.
   *
   * Timestamps are in the format `YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC`. For example, `2022-05-04T12:33:13.922000-07:00` represents a transcription job that started processing at 12:33 PM UTC-7 on May 4, 2022.
   *
   * @public
   */
  CompletionTime?: Date | undefined;

  /**
   * If `CallAnalyticsJobStatus` is `FAILED`, `FailureReason` contains information about why the Call Analytics job request failed.
   *
   * The `FailureReason` field contains one of the following values:
   *
   * - `Unsupported media format`.
   *
   *   The media format specified in `MediaFormat` isn't valid. Refer to refer to the `MediaFormat` parameter for a list of supported formats.
   * - `The media format provided does not match the detected media format`.
   *
   *   The media format specified in `MediaFormat` doesn't match the format of the input file. Check the media format of your media file and correct the specified value.
   * - `Invalid sample rate for audio file`.
   *
   *   The sample rate specified in `MediaSampleRateHertz` isn't valid. The sample rate must be between 8,000 and 48,000 hertz.
   * - `The sample rate provided does not match the detected sample rate`.
   *
   *   The sample rate specified in `MediaSampleRateHertz` doesn't match the sample rate detected in your input media file. Check the sample rate of your media file and correct the specified value.
   * - `Invalid file size: file size too large`.
   *
   *   The size of your media file is larger than what Amazon Transcribe can process. For more information, refer to [Service quotas](https://docs.aws.amazon.com/general/latest/gr/transcribe.html#limits-amazon-transcribe).
   * - `Invalid number of channels: number of channels too large`.
   *
   *   Your audio contains more channels than Amazon Transcribe is able to process. For more information, refer to [Service quotas](https://docs.aws.amazon.com/general/latest/gr/transcribe.html#limits-amazon-transcribe).
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) you included in your request.
   *
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * The confidence score associated with the language identified in your media file.
   *
   * Confidence scores are values between 0 and 1; a larger value indicates a higher probability that the identified language correctly matches the language spoken in your media.
   *
   * @public
   */
  IdentifiedLanguageScore?: number | undefined;

  /**
   * Provides information on any additional settings that were included in your request. Additional settings include content redaction and language identification settings.
   *
   * @public
   */
  Settings?: CallAnalyticsJobSettings | undefined;

  /**
   * Indicates which speaker is on which channel.
   *
   * @public
   */
  ChannelDefinitions?: ChannelDefinition[] | undefined;

  /**
   * The tags, each in the form of a key:value pair, assigned to the specified call analytics job.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Provides detailed information about a specific Call Analytics job.
 *
 * @public
 */
export interface CallAnalyticsJobSummary {
  /**
   * The name of the Call Analytics job. Job names are case sensitive and must be unique within an Amazon Web Services account.
   *
   * @public
   */
  CallAnalyticsJobName?: string | undefined;

  /**
   * The date and time the specified Call Analytics job request was made.
   *
   * Timestamps are in the format `YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC`. For example, `2022-05-04T12:32:58.761000-07:00` represents a transcription job that started processing at 12:32 PM UTC-7 on May 4, 2022.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The date and time your Call Analytics job began processing.
   *
   * Timestamps are in the format `YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC`. For example, `2022-05-04T12:32:58.789000-07:00` represents a transcription job that started processing at 12:32 PM UTC-7 on May 4, 2022.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The date and time the specified Call Analytics job finished processing.
   *
   * Timestamps are in the format `YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC`. For example, `2022-05-04T12:33:13.922000-07:00` represents a transcription job that started processing at 12:33 PM UTC-7 on May 4, 2022.
   *
   * @public
   */
  CompletionTime?: Date | undefined;

  /**
   * The language code used to create your Call Analytics transcription.
   *
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * Provides the status of your Call Analytics job.
   *
   * If the status is `COMPLETED`, the job is finished and you can find the results at the location specified in `TranscriptFileUri` (or `RedactedTranscriptFileUri`, if you requested transcript redaction). If the status is `FAILED`, `FailureReason` provides details on why your transcription job failed.
   *
   * @public
   */
  CallAnalyticsJobStatus?: CallAnalyticsJobStatus | undefined;

  /**
   * Provides detailed information about a call analytics job, including information about skipped analytics features.
   *
   * @public
   */
  CallAnalyticsJobDetails?: CallAnalyticsJobDetails | undefined;

  /**
   * If `CallAnalyticsJobStatus` is `FAILED`, `FailureReason` contains information about why the Call Analytics job failed. See also: [Common Errors](https://docs.aws.amazon.com/transcribe/latest/APIReference/CommonErrors.html).
   *
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * A time range, in percentage, between two points in your media file.
 *
 * You can use `StartPercentage` and `EndPercentage` to search a custom segment. For example, setting `StartPercentage` to 10 and `EndPercentage` to 50 only searches for your specified criteria in the audio contained between the 10 percent mark and the 50 percent mark of your media file.
 *
 * You can use also `First` to search from the start of the media file until the time that you specify. Or use `Last` to search from the time that you specify until the end of the media file. For example, setting `First` to 10 only searches for your specified criteria in the audio contained in the first 10 percent of the media file.
 *
 * If you prefer to use milliseconds instead of percentage, see .
 *
 * @public
 */
export interface RelativeTimeRange {
  /**
   * The time, in percentage, when Amazon Transcribe starts searching for the specified criteria in your media file. If you include `StartPercentage` in your request, you must also include `EndPercentage`.
   *
   * @public
   */
  StartPercentage?: number | undefined;

  /**
   * The time, in percentage, when Amazon Transcribe stops searching for the specified criteria in your media file. If you include `EndPercentage` in your request, you must also include `StartPercentage`.
   *
   * @public
   */
  EndPercentage?: number | undefined;

  /**
   * The time, in percentage, from the start of your media file until the specified value. Amazon Transcribe searches for your specified criteria in this time segment.
   *
   * @public
   */
  First?: number | undefined;

  /**
   * The time, in percentage, from the specified value until the end of your media file. Amazon Transcribe searches for your specified criteria in this time segment.
   *
   * @public
   */
  Last?: number | undefined;
}

/**
 * Flag the presence or absence of interruptions in your Call Analytics transcription output.
 *
 * Rules using `InterruptionFilter` are designed to match:
 *
 * - Instances where an agent interrupts a customer
 * - Instances where a customer interrupts an agent
 * - Either participant interrupting the other
 * - A lack of interruptions
 *
 * See [Rule criteria for post-call categories](https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html#tca-rules-batch) for usage examples.
 *
 * @public
 */
export interface InterruptionFilter {
  /**
   * Specify the duration of the interruptions in milliseconds. For example, you can flag speech that contains more than 10,000 milliseconds of interruptions.
   *
   * @public
   */
  Threshold?: number | undefined;

  /**
   * Specify the interrupter that you want to flag. Omitting this parameter is equivalent to specifying both participants.
   *
   * @public
   */
  ParticipantRole?: ParticipantRole | undefined;

  /**
   * Makes it possible to specify a time range (in milliseconds) in your audio, during which you want to search for an interruption. See for more detail.
   *
   * @public
   */
  AbsoluteTimeRange?: AbsoluteTimeRange | undefined;

  /**
   * Makes it possible to specify a time range (in percentage) in your media file, during which you want to search for an interruption. See for more detail.
   *
   * @public
   */
  RelativeTimeRange?: RelativeTimeRange | undefined;

  /**
   * Set to `TRUE` to flag speech that does not contain interruptions. Set to `FALSE` to flag speech that contains interruptions.
   *
   * @public
   */
  Negate?: boolean | undefined;
}

/**
 * Flag the presence or absence of periods of silence in your Call Analytics transcription output.
 *
 * Rules using `NonTalkTimeFilter` are designed to match:
 *
 * - The presence of silence at specified periods throughout the call
 * - The presence of speech at specified periods throughout the call
 *
 * See [Rule criteria for post-call categories](https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html#tca-rules-batch) for usage examples.
 *
 * @public
 */
export interface NonTalkTimeFilter {
  /**
   * Specify the duration, in milliseconds, of the period of silence that you want to flag. For example, you can flag a silent period that lasts 30,000 milliseconds.
   *
   * @public
   */
  Threshold?: number | undefined;

  /**
   * Makes it possible to specify a time range (in milliseconds) in your audio, during which you want to search for a period of silence. See for more detail.
   *
   * @public
   */
  AbsoluteTimeRange?: AbsoluteTimeRange | undefined;

  /**
   * Makes it possible to specify a time range (in percentage) in your media file, during which you want to search for a period of silence. See for more detail.
   *
   * @public
   */
  RelativeTimeRange?: RelativeTimeRange | undefined;

  /**
   * Set to `TRUE` to flag periods of speech. Set to `FALSE` to flag periods of silence
   *
   * @public
   */
  Negate?: boolean | undefined;
}

/**
 * Flag the presence or absence of specific sentiments detected in your Call Analytics transcription output.
 *
 * Rules using `SentimentFilter` are designed to match:
 *
 * - The presence or absence of a positive sentiment felt by the customer, agent, or both at specified points in the call
 * - The presence or absence of a negative sentiment felt by the customer, agent, or both at specified points in the call
 * - The presence or absence of a neutral sentiment felt by the customer, agent, or both at specified points in the call
 * - The presence or absence of a mixed sentiment felt by the customer, the agent, or both at specified points in the call
 *
 * See [Rule criteria for post-call categories](https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html#tca-rules-batch) for usage examples.
 *
 * @public
 */
export interface SentimentFilter {
  /**
   * Specify the sentiments that you want to flag.
   *
   * @public
   */
  Sentiments: SentimentValue[] | undefined;

  /**
   * Makes it possible to specify a time range (in milliseconds) in your audio, during which you want to search for the specified sentiments. See for more detail.
   *
   * @public
   */
  AbsoluteTimeRange?: AbsoluteTimeRange | undefined;

  /**
   * Makes it possible to specify a time range (in percentage) in your media file, during which you want to search for the specified sentiments. See for more detail.
   *
   * @public
   */
  RelativeTimeRange?: RelativeTimeRange | undefined;

  /**
   * Specify the participant that you want to flag. Omitting this parameter is equivalent to specifying both participants.
   *
   * @public
   */
  ParticipantRole?: ParticipantRole | undefined;

  /**
   * Set to `TRUE` to flag the sentiments that you didn't include in your request. Set to `FALSE` to flag the sentiments that you specified in your request.
   *
   * @public
   */
  Negate?: boolean | undefined;
}

/**
 * Flag the presence or absence of specific words or phrases detected in your Call Analytics transcription output.
 *
 * Rules using `TranscriptFilter` are designed to match:
 *
 * - Custom words or phrases spoken by the agent, the customer, or both
 * - Custom words or phrases **not** spoken by the agent, the customer, or either
 * - Custom words or phrases that occur at a specific time frame
 *
 * See [Rule criteria for post-call categories](https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html#tca-rules-batch) and [Rule criteria for streaming categories](https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-stream.html#tca-rules-stream) for usage examples.
 *
 * @public
 */
export interface TranscriptFilter {
  /**
   * Flag the presence or absence of an exact match to the phrases that you specify. For example, if you specify the phrase "speak to a manager" as your `Targets` value, only that exact phrase is flagged.
   *
   * Note that semantic matching is not supported. For example, if your customer says "speak to *the* manager", instead of "speak to *a* manager", your content is not flagged.
   *
   * @public
   */
  TranscriptFilterType: TranscriptFilterType | undefined;

  /**
   * Makes it possible to specify a time range (in milliseconds) in your audio, during which you want to search for the specified key words or phrases. See for more detail.
   *
   * @public
   */
  AbsoluteTimeRange?: AbsoluteTimeRange | undefined;

  /**
   * Makes it possible to specify a time range (in percentage) in your media file, during which you want to search for the specified key words or phrases. See for more detail.
   *
   * @public
   */
  RelativeTimeRange?: RelativeTimeRange | undefined;

  /**
   * Specify the participant that you want to flag. Omitting this parameter is equivalent to specifying both participants.
   *
   * @public
   */
  ParticipantRole?: ParticipantRole | undefined;

  /**
   * Set to `TRUE` to flag the absence of the phrase that you specified in your request. Set to `FALSE` to flag the presence of the phrase that you specified in your request.
   *
   * @public
   */
  Negate?: boolean | undefined;

  /**
   * Specify the phrases that you want to flag.
   *
   * @public
   */
  Targets: string[] | undefined;
}

/**
 * A rule is a set of criteria that you can specify to flag an attribute in your Call Analytics output. Rules define a Call Analytics category.
 *
 * Rules can include these parameters: , , , and .
 *
 * To learn more about Call Analytics rules and categories, see [Creating categories for post-call transcriptions](https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html) and [Creating categories for real-time transcriptions](https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-stream.html).
 *
 * To learn more about Call Analytics, see [Analyzing call center audio with Call Analytics](https://docs.aws.amazon.com/transcribe/latest/dg/call-analytics.html).
 *
 * @public
 */
export type Rule =
  | Rule.InterruptionFilterMember
  | Rule.NonTalkTimeFilterMember
  | Rule.SentimentFilterMember
  | Rule.TranscriptFilterMember
  | Rule.$UnknownMember;

/**
 * @public
 */
export namespace Rule {
  /**
   * Flag the presence or absence of periods of silence in your Call Analytics transcription output. Refer to for more detail.
   *
   * @public
   */
  export interface NonTalkTimeFilterMember {
    NonTalkTimeFilter: NonTalkTimeFilter;
    InterruptionFilter?: never;
    TranscriptFilter?: never;
    SentimentFilter?: never;
    $unknown?: never;
  }

  /**
   * Flag the presence or absence of interruptions in your Call Analytics transcription output. Refer to for more detail.
   *
   * @public
   */
  export interface InterruptionFilterMember {
    NonTalkTimeFilter?: never;
    InterruptionFilter: InterruptionFilter;
    TranscriptFilter?: never;
    SentimentFilter?: never;
    $unknown?: never;
  }

  /**
   * Flag the presence or absence of specific words or phrases in your Call Analytics transcription output. Refer to for more detail.
   *
   * @public
   */
  export interface TranscriptFilterMember {
    NonTalkTimeFilter?: never;
    InterruptionFilter?: never;
    TranscriptFilter: TranscriptFilter;
    SentimentFilter?: never;
    $unknown?: never;
  }

  /**
   * Flag the presence or absence of specific sentiments in your Call Analytics transcription output. Refer to for more detail.
   *
   * @public
   */
  export interface SentimentFilterMember {
    NonTalkTimeFilter?: never;
    InterruptionFilter?: never;
    TranscriptFilter?: never;
    SentimentFilter: SentimentFilter;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    NonTalkTimeFilter?: never;
    InterruptionFilter?: never;
    TranscriptFilter?: never;
    SentimentFilter?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    NonTalkTimeFilter: (value: NonTalkTimeFilter) => T;
    InterruptionFilter: (value: InterruptionFilter) => T;
    TranscriptFilter: (value: TranscriptFilter) => T;
    SentimentFilter: (value: SentimentFilter) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Provides you with the properties of the Call Analytics category you specified in your request. This includes the list of rules that define the specified category.
 *
 * @public
 */
export interface CategoryProperties {
  /**
   * The name of the Call Analytics category. Category names are case sensitive and must be unique within an Amazon Web Services account.
   *
   * @public
   */
  CategoryName?: string | undefined;

  /**
   * The rules used to define a Call Analytics category. Each category can have between 1 and 20 rules.
   *
   * @public
   */
  Rules?: Rule[] | undefined;

  /**
   * The date and time the specified Call Analytics category was created.
   *
   * Timestamps are in the format `YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC`. For example, `2022-05-04T12:32:58.761000-07:00` represents 12:32 PM UTC-7 on May 4, 2022.
   *
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * The date and time the specified Call Analytics category was last updated.
   *
   * Timestamps are in the format `YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC`. For example, `2022-05-05T12:45:32.691000-07:00` represents 12:45 PM UTC-7 on May 5, 2022.
   *
   * @public
   */
  LastUpdateTime?: Date | undefined;

  /**
   * The tags, each in the form of a key:value pair, assigned to the specified call analytics category.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The input type associated with the specified category. `POST_CALL` refers to a category that is applied to batch transcriptions; `REAL_TIME` refers to a category that is applied to streaming transcriptions.
   *
   * @public
   */
  InputType?: InputType | undefined;
}

/**
 * The output configuration for clinical note generation.
 *
 * @public
 */
export interface ClinicalNoteGenerationSettings {
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
export interface CreateCallAnalyticsCategoryRequest {
  /**
   * A unique name, chosen by you, for your Call Analytics category. It's helpful to use a detailed naming system that will make sense to you in the future. For example, it's better to use `sentiment-positive-last30seconds` for a category over a generic name like `test-category`.
   *
   * Category names are case sensitive.
   *
   * @public
   */
  CategoryName: string | undefined;

  /**
   * Rules define a Call Analytics category. When creating a new category, you must create between 1 and 20 rules for that category. For each rule, you specify a filter you want applied to the attributes of a call. For example, you can choose a sentiment filter that detects if a customer's sentiment was positive during the last 30 seconds of the call.
   *
   * @public
   */
  Rules: Rule[] | undefined;

  /**
   * Adds one or more custom tags, each in the form of a key:value pair, to a new call analytics category at the time you start this new job.
   *
   * To learn more about using tags with Amazon Transcribe, refer to [Tagging resources](https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html).
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Choose whether you want to create a real-time or a post-call category for your Call Analytics transcription.
   *
   * Specifying `POST_CALL` assigns your category to post-call transcriptions; categories with this input type cannot be applied to streaming (real-time) transcriptions.
   *
   * Specifying `REAL_TIME` assigns your category to streaming transcriptions; categories with this input type cannot be applied to post-call transcriptions.
   *
   * If you do not include `InputType`, your category is created as a post-call category by default.
   *
   * @public
   */
  InputType?: InputType | undefined;
}

/**
 * @public
 */
export interface CreateCallAnalyticsCategoryResponse {
  /**
   * Provides you with the properties of your new category, including its associated rules.
   *
   * @public
   */
  CategoryProperties?: CategoryProperties | undefined;
}

/**
 * Encryption configuration for the invocation
 * @public
 */
export interface EncryptionConfiguration {
  /**
   * A map of plain text, non-secret key:value pairs, known as encryption context pairs, that provide an added layer of security for your data. For more information, see [KMS encryption context](https://docs.aws.amazon.com/transcribe/latest/dg/key-management.html#kms-context).
   *
   * @public
   */
  KMSEncryptionContext?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key you want to use to encrypt your resource artifacts. Only full KMS key ARN format is supported.
   *
   * KMS key ARNs have the format `arn:partition:kms:region:account:key/key-id`. For example: `arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`.
   *
   * For more information, see [KMS key ARNs](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN).
   *
   * @public
   */
  KMSKey: string | undefined;
}

/**
 * Contains the Amazon S3 location of the training data you want to use to create a new custom language model, and permissions to access this location.
 *
 * When using `InputDataConfig`, you must include these sub-parameters: `S3Uri` and `DataAccessRoleArn`. You can optionally include `TuningDataS3Uri`.
 *
 * @public
 */
export interface InputDataConfig {
  /**
   * The Amazon S3 location (URI) of the text files you want to use to train your custom language model.
   *
   * Here's an example URI path: `s3://DOC-EXAMPLE-BUCKET/my-model-training-data/`
   *
   * @public
   */
  S3Uri: string | undefined;

  /**
   * The Amazon S3 location (URI) of the text files you want to use to tune your custom language model.
   *
   * Here's an example URI path: `s3://DOC-EXAMPLE-BUCKET/my-model-tuning-data/`
   *
   * @public
   */
  TuningDataS3Uri?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input files. If the role that you specify doesn’t have the appropriate permissions to access the specified Amazon S3 location, your request fails.
   *
   * IAM role ARNs have the format `arn:partition:iam::account:role/role-name-with-path`. For example: `arn:aws:iam::111122223333:role/Admin`.
   *
   * For more information, see [IAM ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns).
   *
   * @public
   */
  DataAccessRoleArn: string | undefined;
}

/**
 * @public
 */
export interface CreateLanguageModelRequest {
  /**
   * The language code that represents the language of your model. Each custom language model must contain terms in only one language, and the language you select for your custom language model must match the language of your training and tuning data.
   *
   * For a list of supported languages and their associated language codes, refer to the [Supported languages](https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html) table. Note that US English (`en-US`) is the only language supported with Amazon Transcribe Medical.
   *
   * A custom language model can only be used to transcribe files in the same language as the model. For example, if you create a custom language model using US English (`en-US`), you can only apply this model to files that contain English audio.
   *
   * @public
   */
  LanguageCode: CLMLanguageCode | undefined;

  /**
   * The Amazon Transcribe standard language model, or base model, used to create your custom language model. Amazon Transcribe offers two options for base models: Wideband and Narrowband.
   *
   * If the audio you want to transcribe has a sample rate of 16,000 Hz or greater, choose `WideBand`. To transcribe audio with a sample rate less than 16,000 Hz, choose `NarrowBand`.
   *
   * @public
   */
  BaseModelName: BaseModelName | undefined;

  /**
   * A unique name, chosen by you, for your custom language model.
   *
   * This name is case sensitive, cannot contain spaces, and must be unique within an Amazon Web Services account. If you try to create a new custom language model with the same name as an existing custom language model, you get a `ConflictException` error.
   *
   * @public
   */
  ModelName: string | undefined;

  /**
   * Contains the Amazon S3 location of the training data you want to use to create a new custom language model, and permissions to access this location.
   *
   * When using `InputDataConfig`, you must include these sub-parameters: `S3Uri`, which is the Amazon S3 location of your training data, and `DataAccessRoleArn`, which is the Amazon Resource Name (ARN) of the role that has permission to access your specified Amazon S3 location. You can optionally include `TuningDataS3Uri`, which is the Amazon S3 location of your tuning data. If you specify different Amazon S3 locations for training and tuning data, the ARN you use must have permissions to access both locations.
   *
   * @public
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * Specifies the encryption configuration for your custom language model. Your model artifacts are encrypted with the specified KMS key or with an AWS-owned key if a key is not supplied.
   *
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * Adds one or more custom tags, each in the form of a key:value pair, to a new custom language model at the time you create this new model.
   *
   * To learn more about using tags with Amazon Transcribe, refer to [Tagging resources](https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html).
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateLanguageModelResponse {
  /**
   * The language code you selected for your custom language model.
   *
   * @public
   */
  LanguageCode?: CLMLanguageCode | undefined;

  /**
   * The Amazon Transcribe standard language model, or base model, you specified when creating your custom language model.
   *
   * @public
   */
  BaseModelName?: BaseModelName | undefined;

  /**
   * The name of your custom language model.
   *
   * @public
   */
  ModelName?: string | undefined;

  /**
   * Lists your data access role ARN (Amazon Resource Name) and the Amazon S3 locations you provided for your training (`S3Uri`) and tuning (`TuningDataS3Uri`) data.
   *
   * @public
   */
  InputDataConfig?: InputDataConfig | undefined;

  /**
   * The status of your custom language model. When the status displays as `COMPLETED`, your model is ready to use.
   *
   * @public
   */
  ModelStatus?: ModelStatus | undefined;
}

/**
 * @public
 */
export interface CreateMedicalVocabularyRequest {
  /**
   * A unique name, chosen by you, for your new custom medical vocabulary.
   *
   * This name is case sensitive, cannot contain spaces, and must be unique within an Amazon Web Services account. If you try to create a new custom medical vocabulary with the same name as an existing custom medical vocabulary, you get a `ConflictException` error.
   *
   * @public
   */
  VocabularyName: string | undefined;

  /**
   * The language code that represents the language of the entries in your custom vocabulary. US English (`en-US`) is the only language supported with Amazon Transcribe Medical.
   *
   * @public
   */
  LanguageCode: LanguageCode | undefined;

  /**
   * The Amazon S3 location (URI) of the text file that contains your custom medical vocabulary. The URI must be in the same Amazon Web Services Region as the resource you're calling.
   *
   * Here's an example URI path: `s3://DOC-EXAMPLE-BUCKET/my-vocab-file.txt`
   *
   * @public
   */
  VocabularyFileUri: string | undefined;

  /**
   * Adds one or more custom tags, each in the form of a key:value pair, to a new custom medical vocabulary at the time you create this new custom vocabulary.
   *
   * To learn more about using tags with Amazon Transcribe, refer to [Tagging resources](https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html).
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateMedicalVocabularyResponse {
  /**
   * The name you chose for your custom medical vocabulary.
   *
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * The language code you selected for your custom medical vocabulary. US English (`en-US`) is the only language supported with Amazon Transcribe Medical.
   *
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * The processing state of your custom medical vocabulary. If the state is `READY`, you can use the custom vocabulary in a `StartMedicalTranscriptionJob` request.
   *
   * @public
   */
  VocabularyState?: VocabularyState | undefined;

  /**
   * The date and time you created your custom medical vocabulary.
   *
   * Timestamps are in the format `YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC`. For example, `2022-05-04T12:32:58.761000-07:00` represents 12:32 PM UTC-7 on May 4, 2022.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * If `VocabularyState` is `FAILED`, `FailureReason` contains information about why the medical transcription job request failed. See also: [Common Errors](https://docs.aws.amazon.com/transcribe/latest/APIReference/CommonErrors.html).
   *
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * @public
 */
export interface CreateVocabularyRequest {
  /**
   * A unique name, chosen by you, for your new custom vocabulary.
   *
   * This name is case sensitive, cannot contain spaces, and must be unique within an Amazon Web Services account. If you try to create a new custom vocabulary with the same name as an existing custom vocabulary, you get a `ConflictException` error.
   *
   * @public
   */
  VocabularyName: string | undefined;

  /**
   * The language code that represents the language of the entries in your custom vocabulary. Each custom vocabulary must contain terms in only one language.
   *
   * A custom vocabulary can only be used to transcribe files in the same language as the custom vocabulary. For example, if you create a custom vocabulary using US English (`en-US`), you can only apply this custom vocabulary to files that contain English audio.
   *
   * For a list of supported languages and their associated language codes, refer to the [Supported languages](https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html) table.
   *
   * @public
   */
  LanguageCode: LanguageCode | undefined;

  /**
   * Use this parameter if you want to create your custom vocabulary by including all desired terms, as comma-separated values, within your request. The other option for creating your custom vocabulary is to save your entries in a text file and upload them to an Amazon S3 bucket, then specify the location of your file using the `VocabularyFileUri` parameter.
   *
   * Note that if you include `Phrases` in your request, you cannot use `VocabularyFileUri`; you must choose one or the other.
   *
   * Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary filter request fails. Refer to [Character Sets for Custom Vocabularies](https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html) to get the character set for your language.
   *
   * @public
   */
  Phrases?: string[] | undefined;

  /**
   * The Amazon S3 location of the text file that contains your custom vocabulary. The URI must be located in the same Amazon Web Services Region as the resource you're calling.
   *
   * Here's an example URI path: `s3://DOC-EXAMPLE-BUCKET/my-vocab-file.txt`
   *
   * Note that if you include `VocabularyFileUri` in your request, you cannot use the `Phrases` flag; you must choose one or the other.
   *
   * @public
   */
  VocabularyFileUri?: string | undefined;

  /**
   * Adds one or more custom tags, each in the form of a key:value pair, to a new custom vocabulary at the time you create this new custom vocabulary.
   *
   * To learn more about using tags with Amazon Transcribe, refer to [Tagging resources](https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html).
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input files (in this case, your custom vocabulary). If you include `EncryptionConfiguration` in your request, this role must also have permissions to access the specified KMS key. If the role that you specify doesn’t have the appropriate permissions, your request fails.
   *
   * IAM role ARNs have the format `arn:partition:iam::account:role/role-name-with-path`. For example: `arn:aws:iam::111122223333:role/Admin`.
   *
   * For more information, see [IAM ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns).
   *
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * Specifies the encryption configuration for your custom vocabulary. Your vocabulary artifacts are encrypted with the specified KMS key or with an AWS-owned key if a key is not supplied.
   *
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateVocabularyResponse {
  /**
   * The name you chose for your custom vocabulary.
   *
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * The language code you selected for your custom vocabulary.
   *
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * The processing state of your custom vocabulary. If the state is `READY`, you can use the custom vocabulary in a `StartTranscriptionJob` request.
   *
   * @public
   */
  VocabularyState?: VocabularyState | undefined;

  /**
   * The date and time you created your custom vocabulary.
   *
   * Timestamps are in the format `YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC`. For example, `2022-05-04T12:32:58.761000-07:00` represents 12:32 PM UTC-7 on May 4, 2022.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * If `VocabularyState` is `FAILED`, `FailureReason` contains information about why the custom vocabulary request failed. See also: [Common Errors](https://docs.aws.amazon.com/transcribe/latest/APIReference/CommonErrors.html).
   *
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * @public
 */
export interface CreateVocabularyFilterRequest {
  /**
   * A unique name, chosen by you, for your new custom vocabulary filter.
   *
   * This name is case sensitive, cannot contain spaces, and must be unique within an Amazon Web Services account. If you try to create a new custom vocabulary filter with the same name as an existing custom vocabulary filter, you get a `ConflictException` error.
   *
   * @public
   */
  VocabularyFilterName: string | undefined;

  /**
   * The language code that represents the language of the entries in your vocabulary filter. Each custom vocabulary filter must contain terms in only one language.
   *
   * A custom vocabulary filter can only be used to transcribe files in the same language as the filter. For example, if you create a custom vocabulary filter using US English (`en-US`), you can only apply this filter to files that contain English audio.
   *
   * For a list of supported languages and their associated language codes, refer to the [Supported languages](https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html) table.
   *
   * @public
   */
  LanguageCode: LanguageCode | undefined;

  /**
   * Use this parameter if you want to create your custom vocabulary filter by including all desired terms, as comma-separated values, within your request. The other option for creating your vocabulary filter is to save your entries in a text file and upload them to an Amazon S3 bucket, then specify the location of your file using the `VocabularyFilterFileUri` parameter.
   *
   * Note that if you include `Words` in your request, you cannot use `VocabularyFilterFileUri`; you must choose one or the other.
   *
   * Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary filter request fails. Refer to [Character Sets for Custom Vocabularies](https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html) to get the character set for your language.
   *
   * @public
   */
  Words?: string[] | undefined;

  /**
   * The Amazon S3 location of the text file that contains your custom vocabulary filter terms. The URI must be located in the same Amazon Web Services Region as the resource you're calling.
   *
   * Here's an example URI path: `s3://DOC-EXAMPLE-BUCKET/my-vocab-filter-file.txt`
   *
   * Note that if you include `VocabularyFilterFileUri` in your request, you cannot use `Words`; you must choose one or the other.
   *
   * @public
   */
  VocabularyFilterFileUri?: string | undefined;

  /**
   * Adds one or more custom tags, each in the form of a key:value pair, to a new custom vocabulary filter at the time you create this new vocabulary filter.
   *
   * To learn more about using tags with Amazon Transcribe, refer to [Tagging resources](https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html).
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input files (in this case, your custom vocabulary filter). If you include `EncryptionConfiguration` in your request, this role must also have permissions to access the specified KMS key. If the role that you specify doesn’t have the appropriate permissions, your request fails.
   *
   * IAM role ARNs have the format `arn:partition:iam::account:role/role-name-with-path`. For example: `arn:aws:iam::111122223333:role/Admin`.
   *
   * For more information, see [IAM ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns).
   *
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * Specifies the encryption configuration for your custom vocabulary filter. Your vocabulary filter artifacts are encrypted with the specified KMS key or with an AWS-owned key if a key is not supplied.
   *
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateVocabularyFilterResponse {
  /**
   * The name you chose for your custom vocabulary filter.
   *
   * @public
   */
  VocabularyFilterName?: string | undefined;

  /**
   * The language code you selected for your custom vocabulary filter.
   *
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * The date and time you created your custom vocabulary filter.
   *
   * Timestamps are in the format `YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC`. For example, `2022-05-04T12:32:58.761000-07:00` represents 12:32 PM UTC-7 on May 4, 2022.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteCallAnalyticsCategoryRequest {
  /**
   * The name of the Call Analytics category you want to delete. Category names are case sensitive.
   *
   * @public
   */
  CategoryName: string | undefined;
}

/**
 * @public
 */
export interface DeleteCallAnalyticsCategoryResponse {}

/**
 * @public
 */
export interface DeleteCallAnalyticsJobRequest {
  /**
   * The name of the Call Analytics job you want to delete. Job names are case sensitive.
   *
   * @public
   */
  CallAnalyticsJobName: string | undefined;
}

/**
 * @public
 */
export interface DeleteCallAnalyticsJobResponse {}

/**
 * @public
 */
export interface DeleteLanguageModelRequest {
  /**
   * The name of the custom language model you want to delete. Model names are case sensitive.
   *
   * @public
   */
  ModelName: string | undefined;
}

/**
 * @public
 */
export interface DeleteMedicalScribeJobRequest {
  /**
   * The name of the Medical Scribe job you want to delete. Job names are case sensitive.
   *
   * @public
   */
  MedicalScribeJobName: string | undefined;
}

/**
 * @public
 */
export interface DeleteMedicalTranscriptionJobRequest {
  /**
   * The name of the medical transcription job you want to delete. Job names are case sensitive.
   *
   * @public
   */
  MedicalTranscriptionJobName: string | undefined;
}

/**
 * @public
 */
export interface DeleteMedicalVocabularyRequest {
  /**
   * The name of the custom medical vocabulary you want to delete. Custom medical vocabulary names are case sensitive.
   *
   * @public
   */
  VocabularyName: string | undefined;
}

/**
 * @public
 */
export interface DeleteTranscriptionJobRequest {
  /**
   * The name of the transcription job you want to delete. Job names are case sensitive.
   *
   * @public
   */
  TranscriptionJobName: string | undefined;
}

/**
 * @public
 */
export interface DeleteVocabularyRequest {
  /**
   * The name of the custom vocabulary you want to delete. Custom vocabulary names are case sensitive.
   *
   * @public
   */
  VocabularyName: string | undefined;
}

/**
 * @public
 */
export interface DeleteVocabularyFilterRequest {
  /**
   * The name of the custom vocabulary filter you want to delete. Custom vocabulary filter names are case sensitive.
   *
   * @public
   */
  VocabularyFilterName: string | undefined;
}

/**
 * @public
 */
export interface DescribeLanguageModelRequest {
  /**
   * The name of the custom language model you want information about. Model names are case sensitive.
   *
   * @public
   */
  ModelName: string | undefined;
}

/**
 * Provides information about a custom language model, including:
 *
 * - The base model name
 * - When the model was created
 * - The location of the files used to train the model
 * - When the model was last modified
 * - The name you chose for the model
 * - The model's language
 * - The model's processing state
 * - Any available upgrades for the base model
 *
 * @public
 */
export interface LanguageModel {
  /**
   * A unique name, chosen by you, for your custom language model.
   *
   * This name is case sensitive, cannot contain spaces, and must be unique within an Amazon Web Services account.
   *
   * @public
   */
  ModelName?: string | undefined;

  /**
   * The date and time the specified custom language model was created.
   *
   * Timestamps are in the format `YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC`. For example, `2022-05-04T12:32:58.761000-07:00` represents 12:32 PM UTC-7 on May 4, 2022.
   *
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * The date and time the specified custom language model was last modified.
   *
   * Timestamps are in the format `YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC`. For example, `2022-05-04T12:32:58.761000-07:00` represents 12:32 PM UTC-7 on May 4, 2022.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The language code used to create your custom language model. Each custom language model must contain terms in only one language, and the language you select for your custom language model must match the language of your training and tuning data.
   *
   * For a list of supported languages and their associated language codes, refer to the [Supported languages](https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html) table. Note that US English (`en-US`) is the only language supported with Amazon Transcribe Medical.
   *
   * @public
   */
  LanguageCode?: CLMLanguageCode | undefined;

  /**
   * The Amazon Transcribe standard language model, or base model, used to create your custom language model.
   *
   * @public
   */
  BaseModelName?: BaseModelName | undefined;

  /**
   * The status of the specified custom language model. When the status displays as `COMPLETED` the model is ready for use.
   *
   * @public
   */
  ModelStatus?: ModelStatus | undefined;

  /**
   * Shows if a more current base model is available for use with the specified custom language model.
   *
   * If `false`, your custom language model is using the most up-to-date base model.
   *
   * If `true`, there is a newer base model available than the one your language model is using.
   *
   * Note that to update a base model, you must recreate the custom language model using the new base model. Base model upgrades for existing custom language models are not supported.
   *
   * @public
   */
  UpgradeAvailability?: boolean | undefined;

  /**
   * If `ModelStatus` is `FAILED`, `FailureReason` contains information about why the custom language model request failed. See also: [Common Errors](https://docs.aws.amazon.com/transcribe/latest/APIReference/CommonErrors.html).
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The Amazon S3 location of the input files used to train and tune your custom language model, in addition to the data access role ARN (Amazon Resource Name) that has permissions to access these data.
   *
   * @public
   */
  InputDataConfig?: InputDataConfig | undefined;

  /**
   * The encryption configuration used for your custom language model.
   *
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeLanguageModelResponse {
  /**
   * Provides information about the specified custom language model.
   *
   * This parameter also shows if the base language model you used to create your custom language model has been updated. If Amazon Transcribe has updated the base model, you can create a new custom language model using the updated base model.
   *
   * If you tried to create a new custom language model and the request wasn't successful, you can use this `DescribeLanguageModel` to help identify the reason for this failure.
   *
   * @public
   */
  LanguageModel?: LanguageModel | undefined;
}

/**
 * @public
 */
export interface GetCallAnalyticsCategoryRequest {
  /**
   * The name of the Call Analytics category you want information about. Category names are case sensitive.
   *
   * @public
   */
  CategoryName: string | undefined;
}

/**
 * @public
 */
export interface GetCallAnalyticsCategoryResponse {
  /**
   * Provides you with the properties of the Call Analytics category you specified in your `GetCallAnalyticsCategory` request.
   *
   * @public
   */
  CategoryProperties?: CategoryProperties | undefined;
}

/**
 * @public
 */
export interface GetCallAnalyticsJobRequest {
  /**
   * The name of the Call Analytics job you want information about. Job names are case sensitive.
   *
   * @public
   */
  CallAnalyticsJobName: string | undefined;
}

/**
 * @public
 */
export interface GetCallAnalyticsJobResponse {
  /**
   * Provides detailed information about the specified Call Analytics job, including job status and, if applicable, failure reason.
   *
   * @public
   */
  CallAnalyticsJob?: CallAnalyticsJob | undefined;
}

/**
 * @public
 */
export interface GetMedicalScribeJobRequest {
  /**
   * The name of the Medical Scribe job you want information about. Job names are case sensitive.
   *
   * @public
   */
  MedicalScribeJobName: string | undefined;
}

/**
 * Indicates which speaker is on which channel. The options are `CLINICIAN` and `PATIENT`
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
   * Specify the participant that you want to flag. The options are `CLINICIAN` and `PATIENT`
   *
   * @public
   */
  ParticipantRole: MedicalScribeParticipantRole | undefined;
}

/**
 * The location of the output of your Medical Scribe job. `ClinicalDocumentUri` holds the Amazon S3 URI for the Clinical Document and `TranscriptFileUri` holds the Amazon S3 URI for the Transcript.
 *
 * @public
 */
export interface MedicalScribeOutput {
  /**
   * Holds the Amazon S3 URI for the Transcript.
   *
   * @public
   */
  TranscriptFileUri: string | undefined;

  /**
   * Holds the Amazon S3 URI for the Clinical Document.
   *
   * @public
   */
  ClinicalDocumentUri: string | undefined;
}

/**
 * Makes it possible to control how your Medical Scribe job is processed using a `MedicalScribeSettings` object. Specify `ChannelIdentification` if `ChannelDefinitions` are set. Enabled `ShowSpeakerLabels` if `ChannelIdentification` and `ChannelDefinitions` are not set. One and only one of `ChannelIdentification` and `ShowSpeakerLabels` must be set. If `ShowSpeakerLabels` is set, `MaxSpeakerLabels` must also be set. Use `Settings` to specify a vocabulary or vocabulary filter or both using `VocabularyName`, `VocabularyFilterName`. `VocabularyFilterMethod` must be specified if `VocabularyFilterName` is set.
 *
 * @public
 */
export interface MedicalScribeSettings {
  /**
   * Enables speaker partitioning (diarization) in your Medical Scribe output. Speaker partitioning labels the speech from individual speakers in your media file.
   *
   * If you enable `ShowSpeakerLabels` in your request, you must also include `MaxSpeakerLabels`.
   *
   * For more information, see [Partitioning speakers (diarization)](https://docs.aws.amazon.com/transcribe/latest/dg/diarization.html).
   *
   * @public
   */
  ShowSpeakerLabels?: boolean | undefined;

  /**
   * Specify the maximum number of speakers you want to partition in your media.
   *
   * Note that if your media contains more speakers than the specified number, multiple speakers are treated as a single speaker.
   *
   * If you specify the `MaxSpeakerLabels` field, you must set the `ShowSpeakerLabels` field to true.
   *
   * @public
   */
  MaxSpeakerLabels?: number | undefined;

  /**
   * Enables channel identification in multi-channel audio.
   *
   * Channel identification transcribes the audio on each channel independently, then appends the output for each channel into one transcript.
   *
   * For more information, see [Transcribing multi-channel audio](https://docs.aws.amazon.com/transcribe/latest/dg/channel-id.html).
   *
   * @public
   */
  ChannelIdentification?: boolean | undefined;

  /**
   * The name of the custom vocabulary you want to include in your Medical Scribe request. Custom vocabulary names are case sensitive.
   *
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * The name of the custom vocabulary filter you want to include in your Medical Scribe request. Custom vocabulary filter names are case sensitive.
   *
   * Note that if you include `VocabularyFilterName` in your request, you must also include `VocabularyFilterMethod`.
   *
   * @public
   */
  VocabularyFilterName?: string | undefined;

  /**
   * Specify how you want your custom vocabulary filter applied to your transcript.
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
   * Specify settings for the clinical note generation.
   *
   * @public
   */
  ClinicalNoteGenerationSettings?: ClinicalNoteGenerationSettings | undefined;
}

/**
 * Provides detailed information about a Medical Scribe job.
 *
 * To view the status of the specified Medical Scribe job, check the `MedicalScribeJobStatus` field. If the status is `COMPLETED`, the job is finished and you can find the results at the locations specified in `MedicalScribeOutput`. If the status is `FAILED`, `FailureReason` provides details on why your Medical Scribe job failed.
 *
 * @public
 */
export interface MedicalScribeJob {
  /**
   * The name of the Medical Scribe job. Job names are case sensitive and must be unique within an Amazon Web Services account.
   *
   * @public
   */
  MedicalScribeJobName?: string | undefined;

  /**
   * Provides the status of the specified Medical Scribe job.
   *
   * If the status is `COMPLETED`, the job is finished and you can find the results at the location specified in `MedicalScribeOutput` If the status is `FAILED`, `FailureReason` provides details on why your Medical Scribe job failed.
   *
   * @public
   */
  MedicalScribeJobStatus?: MedicalScribeJobStatus | undefined;

  /**
   * The language code used to create your Medical Scribe job. US English (`en-US`) is the only supported language for Medical Scribe jobs.
   *
   * @public
   */
  LanguageCode?: MedicalScribeLanguageCode | undefined;

  /**
   * Describes the Amazon S3 location of the media file you want to use in your request.
   *
   * For information on supported media formats, refer to the `MediaFormat` parameter or the [Media formats](https://docs.aws.amazon.com/transcribe/latest/dg/how-input.html#how-input-audio) section in the Amazon S3 Developer Guide.
   *
   * @public
   */
  Media?: Media | undefined;

  /**
   * The location of the output of your Medical Scribe job. `ClinicalDocumentUri` holds the Amazon S3 URI for the Clinical Document and `TranscriptFileUri` holds the Amazon S3 URI for the Transcript.
   *
   * @public
   */
  MedicalScribeOutput?: MedicalScribeOutput | undefined;

  /**
   * The date and time your Medical Scribe job began processing.
   *
   * Timestamps are in the format `YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC`. For example, `2022-05-04T12:32:58.789000-07:00` represents a Medical Scribe job that started processing at 12:32 PM UTC-7 on May 4, 2022.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The date and time the specified Medical Scribe job request was made.
   *
   * Timestamps are in the format `YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC`. For example, `2022-05-04T12:32:58.761000-07:00` represents a Medical Scribe job that started processing at 12:32 PM UTC-7 on May 4, 2022.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The date and time the specified Medical Scribe job finished processing.
   *
   * Timestamps are in the format `YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC`. For example, `2022-05-04T12:32:58.761000-07:00` represents a Medical Scribe job that finished processing at 12:32 PM UTC-7 on May 4, 2022.
   *
   * @public
   */
  CompletionTime?: Date | undefined;

  /**
   * If `MedicalScribeJobStatus` is `FAILED`, `FailureReason` contains information about why the transcription job failed. See also: [Common Errors](https://docs.aws.amazon.com/transcribe/latest/APIReference/CommonErrors.html).
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * Makes it possible to control how your Medical Scribe job is processed using a `MedicalScribeSettings` object. Specify `ChannelIdentification` if `ChannelDefinitions` are set. Enabled `ShowSpeakerLabels` if `ChannelIdentification` and `ChannelDefinitions` are not set. One and only one of `ChannelIdentification` and `ShowSpeakerLabels` must be set. If `ShowSpeakerLabels` is set, `MaxSpeakerLabels` must also be set. Use `Settings` to specify a vocabulary or vocabulary filter or both using `VocabularyName`, `VocabularyFilterName`. `VocabularyFilterMethod` must be specified if `VocabularyFilterName` is set.
   *
   * @public
   */
  Settings?: MedicalScribeSettings | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input files, write to the output bucket, and use your KMS key if supplied. If the role that you specify doesn’t have the appropriate permissions your request fails.
   *
   * IAM role ARNs have the format `arn:partition:iam::account:role/role-name-with-path`. For example: `arn:aws:iam::111122223333:role/Admin`.
   *
   * For more information, see [IAM ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns).
   *
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * Makes it possible to specify which speaker is on which channel. For example, if the clinician is the first participant to speak, you would set `ChannelId` of the first `ChannelDefinition` in the list to `0` (to indicate the first channel) and `ParticipantRole` to `CLINICIAN` (to indicate that it's the clinician speaking). Then you would set the `ChannelId` of the second `ChannelDefinition` in the list to `1` (to indicate the second channel) and `ParticipantRole` to `PATIENT` (to indicate that it's the patient speaking).
   *
   * @public
   */
  ChannelDefinitions?: MedicalScribeChannelDefinition[] | undefined;

  /**
   * Indicates whether the `MedicalScribeContext` object was provided when the Medical Scribe job was started.
   *
   * @public
   */
  MedicalScribeContextProvided?: boolean | undefined;

  /**
   * Adds one or more custom tags, each in the form of a key:value pair, to the Medical Scribe job.
   *
   * To learn more about using tags with Amazon Transcribe, refer to [Tagging resources](https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html).
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface GetMedicalScribeJobResponse {
  /**
   * Provides detailed information about the specified Medical Scribe job, including job status and, if applicable, failure reason
   *
   * @public
   */
  MedicalScribeJob?: MedicalScribeJob | undefined;
}

/**
 * @public
 */
export interface GetMedicalTranscriptionJobRequest {
  /**
   * The name of the medical transcription job you want information about. Job names are case sensitive.
   *
   * @public
   */
  MedicalTranscriptionJobName: string | undefined;
}

/**
 * Allows additional optional settings in your request, including channel identification, alternative transcriptions, and speaker partitioning. You can use that to apply custom vocabularies to your medical transcription job.
 *
 * @public
 */
export interface MedicalTranscriptionSetting {
  /**
   * Enables speaker partitioning (diarization) in your transcription output. Speaker partitioning labels the speech from individual speakers in your media file.
   *
   * If you enable `ShowSpeakerLabels` in your request, you must also include `MaxSpeakerLabels`.
   *
   * For more information, see [Partitioning speakers (diarization)](https://docs.aws.amazon.com/transcribe/latest/dg/diarization.html).
   *
   * @public
   */
  ShowSpeakerLabels?: boolean | undefined;

  /**
   * Specify the maximum number of speakers you want to partition in your media.
   *
   * Note that if your media contains more speakers than the specified number, multiple speakers are treated as a single speaker.
   *
   * If you specify the `MaxSpeakerLabels` field, you must set the `ShowSpeakerLabels` field to true.
   *
   * @public
   */
  MaxSpeakerLabels?: number | undefined;

  /**
   * Enables channel identification in multi-channel audio.
   *
   * Channel identification transcribes the audio on each channel independently, then appends the output for each channel into one transcript.
   *
   * If you have multi-channel audio and do not enable channel identification, your audio is transcribed in a continuous manner and your transcript does not separate the speech by channel.
   *
   * For more information, see [Transcribing multi-channel audio](https://docs.aws.amazon.com/transcribe/latest/dg/channel-id.html).
   *
   * @public
   */
  ChannelIdentification?: boolean | undefined;

  /**
   * To include alternative transcriptions within your transcription output, include `ShowAlternatives` in your transcription request.
   *
   * If you include `ShowAlternatives`, you must also include `MaxAlternatives`, which is the maximum number of alternative transcriptions you want Amazon Transcribe Medical to generate.
   *
   * For more information, see [Alternative transcriptions](https://docs.aws.amazon.com/transcribe/latest/dg/how-alternatives.html).
   *
   * @public
   */
  ShowAlternatives?: boolean | undefined;

  /**
   * Indicate the maximum number of alternative transcriptions you want Amazon Transcribe Medical to include in your transcript.
   *
   * If you select a number greater than the number of alternative transcriptions generated by Amazon Transcribe Medical, only the actual number of alternative transcriptions are included.
   *
   * If you include `MaxAlternatives` in your request, you must also include `ShowAlternatives` with a value of `true`.
   *
   * For more information, see [Alternative transcriptions](https://docs.aws.amazon.com/transcribe/latest/dg/how-alternatives.html).
   *
   * @public
   */
  MaxAlternatives?: number | undefined;

  /**
   * The name of the custom vocabulary you want to use when processing your medical transcription job. Custom vocabulary names are case sensitive.
   *
   * The language of the specified custom vocabulary must match the language code that you specify in your transcription request. If the languages do not match, the custom vocabulary isn't applied. There are no errors or warnings associated with a language mismatch. US English (`en-US`) is the only valid language for Amazon Transcribe Medical.
   *
   * @public
   */
  VocabularyName?: string | undefined;
}

/**
 * Provides you with the Amazon S3 URI you can use to access your transcript.
 *
 * @public
 */
export interface MedicalTranscript {
  /**
   * The Amazon S3 location of your transcript. You can use this URI to access or download your transcript.
   *
   * Note that this is the Amazon S3 location you specified in your request using the `OutputBucketName` parameter.
   *
   * @public
   */
  TranscriptFileUri?: string | undefined;
}

/**
 * Provides detailed information about a medical transcription job.
 *
 * To view the status of the specified medical transcription job, check the `TranscriptionJobStatus` field. If the status is `COMPLETED`, the job is finished and you can find the results at the location specified in `TranscriptFileUri`. If the status is `FAILED`, `FailureReason` provides details on why your transcription job failed.
 *
 * @public
 */
export interface MedicalTranscriptionJob {
  /**
   * The name of the medical transcription job. Job names are case sensitive and must be unique within an Amazon Web Services account.
   *
   * @public
   */
  MedicalTranscriptionJobName?: string | undefined;

  /**
   * Provides the status of the specified medical transcription job.
   *
   * If the status is `COMPLETED`, the job is finished and you can find the results at the location specified in `TranscriptFileUri`. If the status is `FAILED`, `FailureReason` provides details on why your transcription job failed.
   *
   * @public
   */
  TranscriptionJobStatus?: TranscriptionJobStatus | undefined;

  /**
   * The language code used to create your medical transcription job. US English (`en-US`) is the only supported language for medical transcriptions.
   *
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * The sample rate, in hertz, of the audio track in your input media file.
   *
   * @public
   */
  MediaSampleRateHertz?: number | undefined;

  /**
   * The format of the input media file.
   *
   * @public
   */
  MediaFormat?: MediaFormat | undefined;

  /**
   * Describes the Amazon S3 location of the media file you want to use in your request.
   *
   * For information on supported media formats, refer to the `MediaFormat` parameter or the [Media formats](https://docs.aws.amazon.com/transcribe/latest/dg/how-input.html#how-input-audio) section in the Amazon S3 Developer Guide.
   *
   * @public
   */
  Media?: Media | undefined;

  /**
   * Provides you with the Amazon S3 URI you can use to access your transcript.
   *
   * @public
   */
  Transcript?: MedicalTranscript | undefined;

  /**
   * The date and time the specified medical transcription job began processing.
   *
   * Timestamps are in the format `YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC`. For example, `2022-05-04T12:32:58.789000-07:00` represents a transcription job that started processing at 12:32 PM UTC-7 on May 4, 2022.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The date and time the specified medical transcription job request was made.
   *
   * Timestamps are in the format `YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC`. For example, `2022-05-04T12:32:58.761000-07:00` represents a transcription job that started processing at 12:32 PM UTC-7 on May 4, 2022.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The date and time the specified medical transcription job finished processing.
   *
   * Timestamps are in the format `YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC`. For example, `2022-05-04T12:33:13.922000-07:00` represents a transcription job that started processing at 12:33 PM UTC-7 on May 4, 2022.
   *
   * @public
   */
  CompletionTime?: Date | undefined;

  /**
   * If `TranscriptionJobStatus` is `FAILED`, `FailureReason` contains information about why the transcription job request failed.
   *
   * The `FailureReason` field contains one of the following values:
   *
   * - `Unsupported media format`.
   *
   *   The media format specified in `MediaFormat` isn't valid. Refer to refer to the `MediaFormat` parameter for a list of supported formats.
   * - `The media format provided does not match the detected media format`.
   *
   *   The media format specified in `MediaFormat` doesn't match the format of the input file. Check the media format of your media file and correct the specified value.
   * - `Invalid sample rate for audio file`.
   *
   *   The sample rate specified in `MediaSampleRateHertz` isn't valid. The sample rate must be between 16,000 and 48,000 hertz.
   * - `The sample rate provided does not match the detected sample rate`.
   *
   *   The sample rate specified in `MediaSampleRateHertz` doesn't match the sample rate detected in your input media file. Check the sample rate of your media file and correct the specified value.
   * - `Invalid file size: file size too large`.
   *
   *   The size of your media file is larger than what Amazon Transcribe can process. For more information, refer to [Service quotas](https://docs.aws.amazon.com/general/latest/gr/transcribe.html#limits-amazon-transcribe).
   * - `Invalid number of channels: number of channels too large`.
   *
   *   Your audio contains more channels than Amazon Transcribe is able to process. For more information, refer to [Service quotas](https://docs.aws.amazon.com/general/latest/gr/transcribe.html#limits-amazon-transcribe).
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * Provides information on any additional settings that were included in your request. Additional settings include channel identification, alternative transcriptions, speaker partitioning, custom vocabularies, and custom vocabulary filters.
   *
   * @public
   */
  Settings?: MedicalTranscriptionSetting | undefined;

  /**
   * Indicates whether content identification was enabled for your transcription request.
   *
   * @public
   */
  ContentIdentificationType?: MedicalContentIdentificationType | undefined;

  /**
   * Describes the medical specialty represented in your media.
   *
   * @public
   */
  Specialty?: Specialty | undefined;

  /**
   * Indicates whether the input media is a dictation or a conversation, as specified in the `StartMedicalTranscriptionJob` request.
   *
   * @public
   */
  Type?: Type | undefined;

  /**
   * The tags, each in the form of a key:value pair, assigned to the specified medical transcription job.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface GetMedicalTranscriptionJobResponse {
  /**
   * Provides detailed information about the specified medical transcription job, including job status and, if applicable, failure reason.
   *
   * @public
   */
  MedicalTranscriptionJob?: MedicalTranscriptionJob | undefined;
}

/**
 * @public
 */
export interface GetMedicalVocabularyRequest {
  /**
   * The name of the custom medical vocabulary you want information about. Custom medical vocabulary names are case sensitive.
   *
   * @public
   */
  VocabularyName: string | undefined;
}

/**
 * @public
 */
export interface GetMedicalVocabularyResponse {
  /**
   * The name of the custom medical vocabulary you requested information about.
   *
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * The language code you selected for your custom medical vocabulary. US English (`en-US`) is the only language supported with Amazon Transcribe Medical.
   *
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * The processing state of your custom medical vocabulary. If the state is `READY`, you can use the custom vocabulary in a `StartMedicalTranscriptionJob` request.
   *
   * @public
   */
  VocabularyState?: VocabularyState | undefined;

  /**
   * The date and time the specified custom medical vocabulary was last modified.
   *
   * Timestamps are in the format `YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC`. For example, `2022-05-04T12:32:58.761000-07:00` represents 12:32 PM UTC-7 on May 4, 2022.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * If `VocabularyState` is `FAILED`, `FailureReason` contains information about why the custom medical vocabulary request failed. See also: [Common Errors](https://docs.aws.amazon.com/transcribe/latest/APIReference/CommonErrors.html).
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The Amazon S3 location where the specified custom medical vocabulary is stored; use this URI to view or download the custom vocabulary.
   *
   * @public
   */
  DownloadUri?: string | undefined;
}

/**
 * @public
 */
export interface GetTranscriptionJobRequest {
  /**
   * The name of the transcription job you want information about. Job names are case sensitive.
   *
   * @public
   */
  TranscriptionJobName: string | undefined;
}

/**
 * Makes it possible to control how your transcription job is processed. Currently, the only `JobExecutionSettings` modification you can choose is enabling job queueing using the `AllowDeferredExecution` sub-parameter.
 *
 * If you include `JobExecutionSettings` in your request, you must also include the sub-parameters: `AllowDeferredExecution` and `DataAccessRoleArn`.
 *
 * @public
 */
export interface JobExecutionSettings {
  /**
   * Makes it possible to enable job queuing when your concurrent request limit is exceeded. When `AllowDeferredExecution` is set to `true`, transcription job requests are placed in a queue until the number of jobs falls below the concurrent request limit. If `AllowDeferredExecution` is set to `false` and the number of transcription job requests exceed the concurrent request limit, you get a `LimitExceededException` error.
   *
   * If you include `AllowDeferredExecution` in your request, you must also include `DataAccessRoleArn`.
   *
   * @public
   */
  AllowDeferredExecution?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input files. If the role that you specify doesn’t have the appropriate permissions to access the specified Amazon S3 location, your request fails.
   *
   * IAM role ARNs have the format `arn:partition:iam::account:role/role-name-with-path`. For example: `arn:aws:iam::111122223333:role/Admin`. For more information, see [IAM ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns).
   *
   * Note that if you include `DataAccessRoleArn` in your request, you must also include `AllowDeferredExecution`.
   *
   * @public
   */
  DataAccessRoleArn?: string | undefined;
}

/**
 * Provides information on the speech contained in a discreet utterance when multi-language identification is enabled in your request. This utterance represents a block of speech consisting of one language, preceded or followed by a block of speech in a different language.
 *
 * @public
 */
export interface LanguageCodeItem {
  /**
   * Provides the language code for each language identified in your media.
   *
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * Provides the total time, in seconds, each identified language is spoken in your media.
   *
   * @public
   */
  DurationInSeconds?: number | undefined;
}

/**
 * Provides the name of the custom language model that was included in the specified transcription job.
 *
 * Only use `ModelSettings` with the `LanguageModelName` sub-parameter if you're **not** using automatic language identification (). If using `LanguageIdSettings` in your request, this parameter contains a `LanguageModelName` sub-parameter.
 *
 * @public
 */
export interface ModelSettings {
  /**
   * The name of the custom language model you want to use when processing your transcription job. Note that custom language model names are case sensitive.
   *
   * The language of the specified custom language model must match the language code that you specify in your transcription request. If the languages do not match, the custom language model isn't applied. There are no errors or warnings associated with a language mismatch.
   *
   * @public
   */
  LanguageModelName?: string | undefined;
}

/**
 * Allows additional optional settings in your request, including channel identification, alternative transcriptions, and speaker partitioning. You can use that to apply custom vocabularies to your transcription job.
 *
 * @public
 */
export interface Settings {
  /**
   * The name of the custom vocabulary you want to use in your transcription job request. This name is case sensitive, cannot contain spaces, and must be unique within an Amazon Web Services account.
   *
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * Enables speaker partitioning (diarization) in your transcription output. Speaker partitioning labels the speech from individual speakers in your media file.
   *
   * If you enable `ShowSpeakerLabels` in your request, you must also include `MaxSpeakerLabels`.
   *
   * For more information, see [Partitioning speakers (diarization)](https://docs.aws.amazon.com/transcribe/latest/dg/diarization.html).
   *
   * @public
   */
  ShowSpeakerLabels?: boolean | undefined;

  /**
   * Specify the maximum number of speakers you want to partition in your media.
   *
   * Note that if your media contains more speakers than the specified number, multiple speakers are treated as a single speaker.
   *
   * If you specify the `MaxSpeakerLabels` field, you must set the `ShowSpeakerLabels` field to true.
   *
   * @public
   */
  MaxSpeakerLabels?: number | undefined;

  /**
   * Enables channel identification in multi-channel audio.
   *
   * Channel identification transcribes the audio on each channel independently, then appends the output for each channel into one transcript.
   *
   * For more information, see [Transcribing multi-channel audio](https://docs.aws.amazon.com/transcribe/latest/dg/channel-id.html).
   *
   * @public
   */
  ChannelIdentification?: boolean | undefined;

  /**
   * To include alternative transcriptions within your transcription output, include `ShowAlternatives` in your transcription request.
   *
   * If you have multi-channel audio and do not enable channel identification, your audio is transcribed in a continuous manner and your transcript does not separate the speech by channel.
   *
   * If you include `ShowAlternatives`, you must also include `MaxAlternatives`, which is the maximum number of alternative transcriptions you want Amazon Transcribe to generate.
   *
   * For more information, see [Alternative transcriptions](https://docs.aws.amazon.com/transcribe/latest/dg/how-alternatives.html).
   *
   * @public
   */
  ShowAlternatives?: boolean | undefined;

  /**
   * Indicate the maximum number of alternative transcriptions you want Amazon Transcribe to include in your transcript.
   *
   * If you select a number greater than the number of alternative transcriptions generated by Amazon Transcribe, only the actual number of alternative transcriptions are included.
   *
   * If you include `MaxAlternatives` in your request, you must also include `ShowAlternatives` with a value of `true`.
   *
   * For more information, see [Alternative transcriptions](https://docs.aws.amazon.com/transcribe/latest/dg/how-alternatives.html).
   *
   * @public
   */
  MaxAlternatives?: number | undefined;

  /**
   * The name of the custom vocabulary filter you want to use in your transcription job request. This name is case sensitive, cannot contain spaces, and must be unique within an Amazon Web Services account.
   *
   * Note that if you include `VocabularyFilterName` in your request, you must also include `VocabularyFilterMethod`.
   *
   * @public
   */
  VocabularyFilterName?: string | undefined;

  /**
   * Specify how you want your custom vocabulary filter applied to your transcript.
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
}

/**
 * Provides information about your subtitle file, including format, start index, and Amazon S3 location.
 *
 * @public
 */
export interface SubtitlesOutput {
  /**
   * Provides the format of your subtitle files. If your request included both WebVTT (`vtt`) and SubRip (`srt`) formats, both formats are shown.
   *
   * @public
   */
  Formats?: SubtitleFormat[] | undefined;

  /**
   * The Amazon S3 location of your transcript. You can use this URI to access or download your subtitle file. Your subtitle file is stored in the same location as your transcript. If you specified both WebVTT and SubRip subtitle formats, two URIs are provided.
   *
   * If you included `OutputBucketName` in your transcription job request, this is the URI of that bucket. If you also included `OutputKey` in your request, your output is located in the path you specified in your request.
   *
   * If you didn't include `OutputBucketName` in your transcription job request, your subtitle file is stored in a service-managed bucket, and `TranscriptFileUri` provides you with a temporary URI you can use for secure access to your subtitle file.
   *
   * > **Note:** Temporary URIs for service-managed Amazon S3 buckets are only valid for 15 minutes. If you get an `AccesDenied` error, you can get a new temporary URI by running a `GetTranscriptionJob` or `ListTranscriptionJob` request.
   *
   * @public
   */
  SubtitleFileUris?: string[] | undefined;

  /**
   * Provides the start index value for your subtitle files. If you did not specify a value in your request, the default value of `0` is used.
   *
   * @public
   */
  OutputStartIndex?: number | undefined;
}

/**
 * Contains `ToxicityCategories`, which is a required parameter if you want to enable toxicity detection (`ToxicityDetection`) in your transcription request.
 *
 * @public
 */
export interface ToxicityDetectionSettings {
  /**
   * If you include `ToxicityDetection` in your transcription request, you must also include `ToxicityCategories`. The only accepted value for this parameter is `ALL`.
   *
   * @public
   */
  ToxicityCategories: ToxicityCategory[] | undefined;
}

/**
 * Provides detailed information about a transcription job.
 *
 * To view the status of the specified transcription job, check the `TranscriptionJobStatus` field. If the status is `COMPLETED`, the job is finished and you can find the results at the location specified in `TranscriptFileUri`. If the status is `FAILED`, `FailureReason` provides details on why your transcription job failed.
 *
 * If you enabled content redaction, the redacted transcript can be found at the location specified in `RedactedTranscriptFileUri`.
 *
 * @public
 */
export interface TranscriptionJob {
  /**
   * The name of the transcription job. Job names are case sensitive and must be unique within an Amazon Web Services account.
   *
   * @public
   */
  TranscriptionJobName?: string | undefined;

  /**
   * Provides the status of the specified transcription job.
   *
   * If the status is `COMPLETED`, the job is finished and you can find the results at the location specified in `TranscriptFileUri` (or `RedactedTranscriptFileUri`, if you requested transcript redaction). If the status is `FAILED`, `FailureReason` provides details on why your transcription job failed.
   *
   * @public
   */
  TranscriptionJobStatus?: TranscriptionJobStatus | undefined;

  /**
   * The language code used to create your transcription job. This parameter is used with single-language identification. For multi-language identification requests, refer to the plural version of this parameter, `LanguageCodes`.
   *
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * The sample rate, in hertz, of the audio track in your input media file.
   *
   * @public
   */
  MediaSampleRateHertz?: number | undefined;

  /**
   * The format of the input media file.
   *
   * @public
   */
  MediaFormat?: MediaFormat | undefined;

  /**
   * Provides the Amazon S3 location of the media file you used in your request.
   *
   * @public
   */
  Media?: Media | undefined;

  /**
   * Provides you with the Amazon S3 URI you can use to access your transcript.
   *
   * @public
   */
  Transcript?: Transcript | undefined;

  /**
   * The date and time the specified transcription job began processing.
   *
   * Timestamps are in the format `YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC`. For example, `2022-05-04T12:32:58.789000-07:00` represents a transcription job that started processing at 12:32 PM UTC-7 on May 4, 2022.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The date and time the specified transcription job request was made.
   *
   * Timestamps are in the format `YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC`. For example, `2022-05-04T12:32:58.761000-07:00` represents a transcription job that started processing at 12:32 PM UTC-7 on May 4, 2022.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The date and time the specified transcription job finished processing.
   *
   * Timestamps are in the format `YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC`. For example, `2022-05-04T12:33:13.922000-07:00` represents a transcription job that started processing at 12:33 PM UTC-7 on May 4, 2022.
   *
   * @public
   */
  CompletionTime?: Date | undefined;

  /**
   * If `TranscriptionJobStatus` is `FAILED`, `FailureReason` contains information about why the transcription job request failed.
   *
   * The `FailureReason` field contains one of the following values:
   *
   * - `Unsupported media format`.
   *
   *   The media format specified in `MediaFormat` isn't valid. Refer to refer to the `MediaFormat` parameter for a list of supported formats.
   * - `The media format provided does not match the detected media format`.
   *
   *   The media format specified in `MediaFormat` doesn't match the format of the input file. Check the media format of your media file and correct the specified value.
   * - `Invalid sample rate for audio file`.
   *
   *   The sample rate specified in `MediaSampleRateHertz` isn't valid. The sample rate must be between 8,000 and 48,000 hertz.
   * - `The sample rate provided does not match the detected sample rate`.
   *
   *   The sample rate specified in `MediaSampleRateHertz` doesn't match the sample rate detected in your input media file. Check the sample rate of your media file and correct the specified value.
   * - `Invalid file size: file size too large`.
   *
   *   The size of your media file is larger than what Amazon Transcribe can process. For more information, refer to [Service quotas](https://docs.aws.amazon.com/general/latest/gr/transcribe.html#limits-amazon-transcribe).
   * - `Invalid number of channels: number of channels too large`.
   *
   *   Your audio contains more channels than Amazon Transcribe is able to process. For more information, refer to [Service quotas](https://docs.aws.amazon.com/general/latest/gr/transcribe.html#limits-amazon-transcribe).
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * Provides information on any additional settings that were included in your request. Additional settings include channel identification, alternative transcriptions, speaker partitioning, custom vocabularies, and custom vocabulary filters.
   *
   * @public
   */
  Settings?: Settings | undefined;

  /**
   * Provides information on the custom language model you included in your request.
   *
   * @public
   */
  ModelSettings?: ModelSettings | undefined;

  /**
   * Provides information about how your transcription job was processed. This parameter shows if your request was queued and what data access role was used.
   *
   * @public
   */
  JobExecutionSettings?: JobExecutionSettings | undefined;

  /**
   * Indicates whether redaction was enabled in your transcript.
   *
   * @public
   */
  ContentRedaction?: ContentRedaction | undefined;

  /**
   * Indicates whether automatic language identification was enabled (`TRUE`) for the specified transcription job.
   *
   * @public
   */
  IdentifyLanguage?: boolean | undefined;

  /**
   * Indicates whether automatic multi-language identification was enabled (`TRUE`) for the specified transcription job.
   *
   * @public
   */
  IdentifyMultipleLanguages?: boolean | undefined;

  /**
   * Provides the language codes you specified in your request.
   *
   * @public
   */
  LanguageOptions?: LanguageCode[] | undefined;

  /**
   * The confidence score associated with the language identified in your media file.
   *
   * Confidence scores are values between 0 and 1; a larger value indicates a higher probability that the identified language correctly matches the language spoken in your media.
   *
   * @public
   */
  IdentifiedLanguageScore?: number | undefined;

  /**
   * The language codes used to create your transcription job. This parameter is used with multi-language identification. For single-language identification requests, refer to the singular version of this parameter, `LanguageCode`.
   *
   * @public
   */
  LanguageCodes?: LanguageCodeItem[] | undefined;

  /**
   * The tags, each in the form of a key:value pair, assigned to the specified transcription job.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Indicates whether subtitles were generated with your transcription.
   *
   * @public
   */
  Subtitles?: SubtitlesOutput | undefined;

  /**
   * Provides the name and language of all custom language models, custom vocabularies, and custom vocabulary filters that you included in your request.
   *
   * @public
   */
  LanguageIdSettings?: Partial<Record<LanguageCode, LanguageIdSettings>> | undefined;

  /**
   * Provides information about the toxicity detection settings applied to your transcription.
   *
   * @public
   */
  ToxicityDetection?: ToxicityDetectionSettings[] | undefined;
}

/**
 * @public
 */
export interface GetTranscriptionJobResponse {
  /**
   * Provides detailed information about the specified transcription job, including job status and, if applicable, failure reason.
   *
   * @public
   */
  TranscriptionJob?: TranscriptionJob | undefined;
}

/**
 * @public
 */
export interface GetVocabularyRequest {
  /**
   * The name of the custom vocabulary you want information about. Custom vocabulary names are case sensitive.
   *
   * @public
   */
  VocabularyName: string | undefined;
}

/**
 * @public
 */
export interface GetVocabularyResponse {
  /**
   * The name of the custom vocabulary you requested information about.
   *
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * The language code you selected for your custom vocabulary.
   *
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * The processing state of your custom vocabulary. If the state is `READY`, you can use the custom vocabulary in a `StartTranscriptionJob` request.
   *
   * @public
   */
  VocabularyState?: VocabularyState | undefined;

  /**
   * The date and time the specified custom vocabulary was last modified.
   *
   * Timestamps are in the format `YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC`. For example, `2022-05-04T12:32:58.761000-07:00` represents 12:32 PM UTC-7 on May 4, 2022.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * If `VocabularyState` is `FAILED`, `FailureReason` contains information about why the custom vocabulary request failed. See also: [Common Errors](https://docs.aws.amazon.com/transcribe/latest/APIReference/CommonErrors.html).
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The Amazon S3 location where the custom vocabulary is stored; use this URI to view or download the custom vocabulary.
   *
   * @public
   */
  DownloadUri?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role used to access the Amazon S3 bucket that contains your input files and, if applicable, the KMS key specified in `EncryptionConfiguration`.
   *
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * The encryption configuration used for your custom vocabulary.
   *
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface GetVocabularyFilterRequest {
  /**
   * The name of the custom vocabulary filter you want information about. Custom vocabulary filter names are case sensitive.
   *
   * @public
   */
  VocabularyFilterName: string | undefined;
}

/**
 * @public
 */
export interface GetVocabularyFilterResponse {
  /**
   * The name of the custom vocabulary filter you requested information about.
   *
   * @public
   */
  VocabularyFilterName?: string | undefined;

  /**
   * The language code you selected for your custom vocabulary filter.
   *
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * The date and time the specified custom vocabulary filter was last modified.
   *
   * Timestamps are in the format `YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC`. For example, `2022-05-04T12:32:58.761000-07:00` represents 12:32 PM UTC-7 on May 4, 2022.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The Amazon S3 location where the custom vocabulary filter is stored; use this URI to view or download the custom vocabulary filter.
   *
   * @public
   */
  DownloadUri?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role used to access the Amazon S3 bucket that contains your input files and, if applicable, the KMS key specified in `EncryptionConfiguration`.
   *
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * The encryption configuration used for your custom vocabulary filter.
   *
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface ListCallAnalyticsCategoriesRequest {
  /**
   * If your `ListCallAnalyticsCategories` request returns more results than can be displayed, `NextToken` is displayed in the response with an associated string. To get the next page of results, copy this string and repeat your request, including `NextToken` with the value of the copied string. Repeat as needed to view all your results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of Call Analytics categories to return in each page of results. If there are fewer results than the value that you specify, only the actual results are returned. If you do not specify a value, a default of 5 is used.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListCallAnalyticsCategoriesResponse {
  /**
   * If `NextToken` is present in your response, it indicates that not all results are displayed. To view the next set of results, copy the string associated with the `NextToken` parameter in your results output, then run your request again including `NextToken` with the value of the copied string. Repeat as needed to view all your results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Provides detailed information about your Call Analytics categories, including all the rules associated with each category.
   *
   * @public
   */
  Categories?: CategoryProperties[] | undefined;
}

/**
 * @public
 */
export interface ListCallAnalyticsJobsRequest {
  /**
   * Returns only Call Analytics jobs with the specified status. Jobs are ordered by creation date, with the newest job first. If you do not include `Status`, all Call Analytics jobs are returned.
   *
   * @public
   */
  Status?: CallAnalyticsJobStatus | undefined;

  /**
   * Returns only the Call Analytics jobs that contain the specified string. The search is not case sensitive.
   *
   * @public
   */
  JobNameContains?: string | undefined;

  /**
   * If your `ListCallAnalyticsJobs` request returns more results than can be displayed, `NextToken` is displayed in the response with an associated string. To get the next page of results, copy this string and repeat your request, including `NextToken` with the value of the copied string. Repeat as needed to view all your results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of Call Analytics jobs to return in each page of results. If there are fewer results than the value that you specify, only the actual results are returned. If you do not specify a value, a default of 5 is used.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListCallAnalyticsJobsResponse {
  /**
   * Lists all Call Analytics jobs that have the status specified in your request. Jobs are ordered by creation date, with the newest job first.
   *
   * @public
   */
  Status?: CallAnalyticsJobStatus | undefined;

  /**
   * If `NextToken` is present in your response, it indicates that not all results are displayed. To view the next set of results, copy the string associated with the `NextToken` parameter in your results output, then run your request again including `NextToken` with the value of the copied string. Repeat as needed to view all your results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Provides a summary of information about each result.
   *
   * @public
   */
  CallAnalyticsJobSummaries?: CallAnalyticsJobSummary[] | undefined;
}

/**
 * @public
 */
export interface ListLanguageModelsRequest {
  /**
   * Returns only custom language models with the specified status. Language models are ordered by creation date, with the newest model first. If you do not include `StatusEquals`, all custom language models are returned.
   *
   * @public
   */
  StatusEquals?: ModelStatus | undefined;

  /**
   * Returns only the custom language models that contain the specified string. The search is not case sensitive.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * If your `ListLanguageModels` request returns more results than can be displayed, `NextToken` is displayed in the response with an associated string. To get the next page of results, copy this string and repeat your request, including `NextToken` with the value of the copied string. Repeat as needed to view all your results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of custom language models to return in each page of results. If there are fewer results than the value that you specify, only the actual results are returned. If you do not specify a value, a default of 5 is used.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListLanguageModelsResponse {
  /**
   * If `NextToken` is present in your response, it indicates that not all results are displayed. To view the next set of results, copy the string associated with the `NextToken` parameter in your results output, then run your request again including `NextToken` with the value of the copied string. Repeat as needed to view all your results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Provides information about the custom language models that match the criteria specified in your request.
   *
   * @public
   */
  Models?: LanguageModel[] | undefined;
}

/**
 * @public
 */
export interface ListMedicalScribeJobsRequest {
  /**
   * Returns only Medical Scribe jobs with the specified status. Jobs are ordered by creation date, with the newest job first. If you do not include `Status`, all Medical Scribe jobs are returned.
   *
   * @public
   */
  Status?: MedicalScribeJobStatus | undefined;

  /**
   * Returns only the Medical Scribe jobs that contain the specified string. The search is not case sensitive.
   *
   * @public
   */
  JobNameContains?: string | undefined;

  /**
   * If your `ListMedicalScribeJobs` request returns more results than can be displayed, `NextToken` is displayed in the response with an associated string. To get the next page of results, copy this string and repeat your request, including `NextToken` with the value of the copied string. Repeat as needed to view all your results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of Medical Scribe jobs to return in each page of results. If there are fewer results than the value that you specify, only the actual results are returned. If you do not specify a value, a default of 5 is used.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Provides detailed information about a specific Medical Scribe job.
 *
 * @public
 */
export interface MedicalScribeJobSummary {
  /**
   * The name of the Medical Scribe job. Job names are case sensitive and must be unique within an Amazon Web Services account.
   *
   * @public
   */
  MedicalScribeJobName?: string | undefined;

  /**
   * The date and time the specified Medical Scribe job request was made.
   *
   * Timestamps are in the format `YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC`. For example, `2022-05-04T12:32:58.761000-07:00` represents a Medical Scribe job that started processing at 12:32 PM UTC-7 on May 4, 2022.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The date and time your Medical Scribe job began processing.
   *
   * Timestamps are in the format `YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC`. For example, `2022-05-04T12:32:58.789000-07:00` represents a Medical Scribe job that started processing at 12:32 PM UTC-7 on May 4, 2022.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The date and time the specified Medical Scribe job finished processing.
   *
   * Timestamps are in the format `YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC`. For example, `2022-05-04T12:32:58.761000-07:00` represents a Medical Scribe job that finished processing at 12:32 PM UTC-7 on May 4, 2022.
   *
   * @public
   */
  CompletionTime?: Date | undefined;

  /**
   * The language code used to create your Medical Scribe job. US English (`en-US`) is the only supported language for Medical Scribe jobs.
   *
   * @public
   */
  LanguageCode?: MedicalScribeLanguageCode | undefined;

  /**
   * Provides the status of the specified Medical Scribe job.
   *
   * If the status is `COMPLETED`, the job is finished and you can find the results at the location specified in `MedicalScribeOutput` If the status is `FAILED`, `FailureReason` provides details on why your Medical Scribe job failed.
   *
   * @public
   */
  MedicalScribeJobStatus?: MedicalScribeJobStatus | undefined;

  /**
   * If `MedicalScribeJobStatus` is `FAILED`, `FailureReason` contains information about why the transcription job failed. See also: [Common Errors](https://docs.aws.amazon.com/transcribe/latest/APIReference/CommonErrors.html).
   *
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * @public
 */
export interface ListMedicalScribeJobsResponse {
  /**
   * Lists all Medical Scribe jobs that have the status specified in your request. Jobs are ordered by creation date, with the newest job first.
   *
   * @public
   */
  Status?: MedicalScribeJobStatus | undefined;

  /**
   * If `NextToken` is present in your response, it indicates that not all results are displayed. To view the next set of results, copy the string associated with the `NextToken` parameter in your results output, then run your request again including `NextToken` with the value of the copied string. Repeat as needed to view all your results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Provides a summary of information about each result.
   *
   * @public
   */
  MedicalScribeJobSummaries?: MedicalScribeJobSummary[] | undefined;
}

/**
 * @public
 */
export interface ListMedicalTranscriptionJobsRequest {
  /**
   * Returns only medical transcription jobs with the specified status. Jobs are ordered by creation date, with the newest job first. If you do not include `Status`, all medical transcription jobs are returned.
   *
   * @public
   */
  Status?: TranscriptionJobStatus | undefined;

  /**
   * Returns only the medical transcription jobs that contain the specified string. The search is not case sensitive.
   *
   * @public
   */
  JobNameContains?: string | undefined;

  /**
   * If your `ListMedicalTranscriptionJobs` request returns more results than can be displayed, `NextToken` is displayed in the response with an associated string. To get the next page of results, copy this string and repeat your request, including `NextToken` with the value of the copied string. Repeat as needed to view all your results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of medical transcription jobs to return in each page of results. If there are fewer results than the value that you specify, only the actual results are returned. If you do not specify a value, a default of 5 is used.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Provides detailed information about a specific medical transcription job.
 *
 * @public
 */
export interface MedicalTranscriptionJobSummary {
  /**
   * The name of the medical transcription job. Job names are case sensitive and must be unique within an Amazon Web Services account.
   *
   * @public
   */
  MedicalTranscriptionJobName?: string | undefined;

  /**
   * The date and time the specified medical transcription job request was made.
   *
   * Timestamps are in the format `YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC`. For example, `2022-05-04T12:32:58.761000-07:00` represents a transcription job that started processing at 12:32 PM UTC-7 on May 4, 2022.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The date and time your medical transcription job began processing.
   *
   * Timestamps are in the format `YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC`. For example, `2022-05-04T12:32:58.789000-07:00` represents a transcription job that started processing at 12:32 PM UTC-7 on May 4, 2022.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The date and time the specified medical transcription job finished processing.
   *
   * Timestamps are in the format `YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC`. For example, `2022-05-04T12:33:13.922000-07:00` represents a transcription job that started processing at 12:33 PM UTC-7 on May 4, 2022.
   *
   * @public
   */
  CompletionTime?: Date | undefined;

  /**
   * The language code used to create your medical transcription. US English (`en-US`) is the only supported language for medical transcriptions.
   *
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * Provides the status of your medical transcription job.
   *
   * If the status is `COMPLETED`, the job is finished and you can find the results at the location specified in `TranscriptFileUri`. If the status is `FAILED`, `FailureReason` provides details on why your transcription job failed.
   *
   * @public
   */
  TranscriptionJobStatus?: TranscriptionJobStatus | undefined;

  /**
   * If `TranscriptionJobStatus` is `FAILED`, `FailureReason` contains information about why the transcription job failed. See also: [Common Errors](https://docs.aws.amazon.com/transcribe/latest/APIReference/CommonErrors.html).
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * Indicates where the specified medical transcription output is stored.
   *
   * If the value is `CUSTOMER_BUCKET`, the location is the Amazon S3 bucket you specified using the `OutputBucketName` parameter in your request. If you also included `OutputKey` in your request, your output is located in the path you specified in your request.
   *
   * If the value is `SERVICE_BUCKET`, the location is a service-managed Amazon S3 bucket. To access a transcript stored in a service-managed bucket, use the URI shown in the `TranscriptFileUri` field.
   *
   * @public
   */
  OutputLocationType?: OutputLocationType | undefined;

  /**
   * Provides the medical specialty represented in your media.
   *
   * @public
   */
  Specialty?: Specialty | undefined;

  /**
   * Labels all personal health information (PHI) identified in your transcript. For more information, see [Identifying personal health information (PHI) in a transcription](https://docs.aws.amazon.com/transcribe/latest/dg/phi-id.html).
   *
   * @public
   */
  ContentIdentificationType?: MedicalContentIdentificationType | undefined;

  /**
   * Indicates whether the input media is a dictation or a conversation, as specified in the `StartMedicalTranscriptionJob` request.
   *
   * @public
   */
  Type?: Type | undefined;
}

/**
 * @public
 */
export interface ListMedicalTranscriptionJobsResponse {
  /**
   * Lists all medical transcription jobs that have the status specified in your request. Jobs are ordered by creation date, with the newest job first.
   *
   * @public
   */
  Status?: TranscriptionJobStatus | undefined;

  /**
   * If `NextToken` is present in your response, it indicates that not all results are displayed. To view the next set of results, copy the string associated with the `NextToken` parameter in your results output, then run your request again including `NextToken` with the value of the copied string. Repeat as needed to view all your results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Provides a summary of information about each result.
   *
   * @public
   */
  MedicalTranscriptionJobSummaries?: MedicalTranscriptionJobSummary[] | undefined;
}

/**
 * @public
 */
export interface ListMedicalVocabulariesRequest {
  /**
   * If your `ListMedicalVocabularies` request returns more results than can be displayed, `NextToken` is displayed in the response with an associated string. To get the next page of results, copy this string and repeat your request, including `NextToken` with the value of the copied string. Repeat as needed to view all your results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of custom medical vocabularies to return in each page of results. If there are fewer results than the value that you specify, only the actual results are returned. If you do not specify a value, a default of 5 is used.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Returns only custom medical vocabularies with the specified state. Custom vocabularies are ordered by creation date, with the newest vocabulary first. If you do not include `StateEquals`, all custom medical vocabularies are returned.
   *
   * @public
   */
  StateEquals?: VocabularyState | undefined;

  /**
   * Returns only the custom medical vocabularies that contain the specified string. The search is not case sensitive.
   *
   * @public
   */
  NameContains?: string | undefined;
}

/**
 * Provides information about a custom vocabulary, including the language of the custom vocabulary, when it was last modified, its name, and the processing state.
 *
 * @public
 */
export interface VocabularyInfo {
  /**
   * A unique name, chosen by you, for your custom vocabulary. This name is case sensitive, cannot contain spaces, and must be unique within an Amazon Web Services account.
   *
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * The language code used to create your custom vocabulary. Each custom vocabulary must contain terms in only one language.
   *
   * A custom vocabulary can only be used to transcribe files in the same language as the custom vocabulary. For example, if you create a custom vocabulary using US English (`en-US`), you can only apply this custom vocabulary to files that contain English audio.
   *
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * The date and time the specified custom vocabulary was last modified.
   *
   * Timestamps are in the format `YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC`. For example, `2022-05-04T12:32:58.761000-07:00` represents 12:32 PM UTC-7 on May 4, 2022.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The processing state of your custom vocabulary. If the state is `READY`, you can use the custom vocabulary in a `StartTranscriptionJob` request.
   *
   * @public
   */
  VocabularyState?: VocabularyState | undefined;
}

/**
 * @public
 */
export interface ListMedicalVocabulariesResponse {
  /**
   * Lists all custom medical vocabularies that have the status specified in your request. Custom vocabularies are ordered by creation date, with the newest vocabulary first.
   *
   * @public
   */
  Status?: VocabularyState | undefined;

  /**
   * If `NextToken` is present in your response, it indicates that not all results are displayed. To view the next set of results, copy the string associated with the `NextToken` parameter in your results output, then run your request again including `NextToken` with the value of the copied string. Repeat as needed to view all your results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Provides information about the custom medical vocabularies that match the criteria specified in your request.
   *
   * @public
   */
  Vocabularies?: VocabularyInfo[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * Returns a list of all tags associated with the specified Amazon Resource Name (ARN). ARNs have the format `arn:partition:service:region:account-id:resource-type/resource-id`.
   *
   * For example, `arn:aws:transcribe:us-west-2:111122223333:transcription-job/transcription-job-name`.
   *
   * Valid values for `resource-type` are: `transcription-job`, `medical-transcription-job`, `vocabulary`, `medical-vocabulary`, `vocabulary-filter`, and `language-model`.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The Amazon Resource Name (ARN) specified in your request.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * Lists all tags associated with the given transcription job, vocabulary, model, or resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListTranscriptionJobsRequest {
  /**
   * Returns only transcription jobs with the specified status. Jobs are ordered by creation date, with the newest job first. If you do not include `Status`, all transcription jobs are returned.
   *
   * @public
   */
  Status?: TranscriptionJobStatus | undefined;

  /**
   * Returns only the transcription jobs that contain the specified string. The search is not case sensitive.
   *
   * @public
   */
  JobNameContains?: string | undefined;

  /**
   * If your `ListTranscriptionJobs` request returns more results than can be displayed, `NextToken` is displayed in the response with an associated string. To get the next page of results, copy this string and repeat your request, including `NextToken` with the value of the copied string. Repeat as needed to view all your results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of transcription jobs to return in each page of results. If there are fewer results than the value that you specify, only the actual results are returned. If you do not specify a value, a default of 5 is used.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Provides detailed information about a specific transcription job.
 *
 * @public
 */
export interface TranscriptionJobSummary {
  /**
   * The name of the transcription job. Job names are case sensitive and must be unique within an Amazon Web Services account.
   *
   * @public
   */
  TranscriptionJobName?: string | undefined;

  /**
   * The date and time the specified transcription job request was made.
   *
   * Timestamps are in the format `YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC`. For example, `2022-05-04T12:32:58.761000-07:00` represents a transcription job that started processing at 12:32 PM UTC-7 on May 4, 2022.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The date and time your transcription job began processing.
   *
   * Timestamps are in the format `YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC`. For example, `2022-05-04T12:32:58.789000-07:00` represents a transcription job that started processing at 12:32 PM UTC-7 on May 4, 2022.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The date and time the specified transcription job finished processing.
   *
   * Timestamps are in the format `YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC`. For example, `2022-05-04T12:33:13.922000-07:00` represents a transcription job that started processing at 12:33 PM UTC-7 on May 4, 2022.
   *
   * @public
   */
  CompletionTime?: Date | undefined;

  /**
   * The language code used to create your transcription.
   *
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * Provides the status of your transcription job.
   *
   * If the status is `COMPLETED`, the job is finished and you can find the results at the location specified in `TranscriptFileUri` (or `RedactedTranscriptFileUri`, if you requested transcript redaction). If the status is `FAILED`, `FailureReason` provides details on why your transcription job failed.
   *
   * @public
   */
  TranscriptionJobStatus?: TranscriptionJobStatus | undefined;

  /**
   * If `TranscriptionJobStatus` is `FAILED`, `FailureReason` contains information about why the transcription job failed. See also: [Common Errors](https://docs.aws.amazon.com/transcribe/latest/APIReference/CommonErrors.html).
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * Indicates where the specified transcription output is stored.
   *
   * If the value is `CUSTOMER_BUCKET`, the location is the Amazon S3 bucket you specified using the `OutputBucketName` parameter in your request. If you also included `OutputKey` in your request, your output is located in the path you specified in your request.
   *
   * If the value is `SERVICE_BUCKET`, the location is a service-managed Amazon S3 bucket. To access a transcript stored in a service-managed bucket, use the URI shown in the `TranscriptFileUri` or `RedactedTranscriptFileUri` field.
   *
   * @public
   */
  OutputLocationType?: OutputLocationType | undefined;

  /**
   * The content redaction settings of the transcription job.
   *
   * @public
   */
  ContentRedaction?: ContentRedaction | undefined;

  /**
   * Provides the name of the custom language model that was included in the specified transcription job.
   *
   * Only use `ModelSettings` with the `LanguageModelName` sub-parameter if you're **not** using automatic language identification (). If using `LanguageIdSettings` in your request, this parameter contains a `LanguageModelName` sub-parameter.
   *
   * @public
   */
  ModelSettings?: ModelSettings | undefined;

  /**
   * Indicates whether automatic language identification was enabled (`TRUE`) for the specified transcription job.
   *
   * @public
   */
  IdentifyLanguage?: boolean | undefined;

  /**
   * Indicates whether automatic multi-language identification was enabled (`TRUE`) for the specified transcription job.
   *
   * @public
   */
  IdentifyMultipleLanguages?: boolean | undefined;

  /**
   * The confidence score associated with the language identified in your media file.
   *
   * Confidence scores are values between 0 and 1; a larger value indicates a higher probability that the identified language correctly matches the language spoken in your media.
   *
   * @public
   */
  IdentifiedLanguageScore?: number | undefined;

  /**
   * The language codes used to create your transcription job. This parameter is used with multi-language identification. For single-language identification, the singular version of this parameter, `LanguageCode`, is present.
   *
   * @public
   */
  LanguageCodes?: LanguageCodeItem[] | undefined;

  /**
   * Indicates whether toxicity detection was enabled for the specified transcription job.
   *
   * @public
   */
  ToxicityDetection?: ToxicityDetectionSettings[] | undefined;
}

/**
 * @public
 */
export interface ListTranscriptionJobsResponse {
  /**
   * Lists all transcription jobs that have the status specified in your request. Jobs are ordered by creation date, with the newest job first.
   *
   * @public
   */
  Status?: TranscriptionJobStatus | undefined;

  /**
   * If `NextToken` is present in your response, it indicates that not all results are displayed. To view the next set of results, copy the string associated with the `NextToken` parameter in your results output, then run your request again including `NextToken` with the value of the copied string. Repeat as needed to view all your results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Provides a summary of information about each result.
   *
   * @public
   */
  TranscriptionJobSummaries?: TranscriptionJobSummary[] | undefined;
}

/**
 * @public
 */
export interface ListVocabulariesRequest {
  /**
   * If your `ListVocabularies` request returns more results than can be displayed, `NextToken` is displayed in the response with an associated string. To get the next page of results, copy this string and repeat your request, including `NextToken` with the value of the copied string. Repeat as needed to view all your results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of custom vocabularies to return in each page of results. If there are fewer results than the value that you specify, only the actual results are returned. If you do not specify a value, a default of 5 is used.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Returns only custom vocabularies with the specified state. Vocabularies are ordered by creation date, with the newest vocabulary first. If you do not include `StateEquals`, all custom medical vocabularies are returned.
   *
   * @public
   */
  StateEquals?: VocabularyState | undefined;

  /**
   * Returns only the custom vocabularies that contain the specified string. The search is not case sensitive.
   *
   * @public
   */
  NameContains?: string | undefined;
}

/**
 * @public
 */
export interface ListVocabulariesResponse {
  /**
   * Lists all custom vocabularies that have the status specified in your request. Vocabularies are ordered by creation date, with the newest vocabulary first.
   *
   * @public
   */
  Status?: VocabularyState | undefined;

  /**
   * If `NextToken` is present in your response, it indicates that not all results are displayed. To view the next set of results, copy the string associated with the `NextToken` parameter in your results output, then run your request again including `NextToken` with the value of the copied string. Repeat as needed to view all your results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Provides information about the custom vocabularies that match the criteria specified in your request.
   *
   * @public
   */
  Vocabularies?: VocabularyInfo[] | undefined;
}

/**
 * @public
 */
export interface ListVocabularyFiltersRequest {
  /**
   * If your `ListVocabularyFilters` request returns more results than can be displayed, `NextToken` is displayed in the response with an associated string. To get the next page of results, copy this string and repeat your request, including `NextToken` with the value of the copied string. Repeat as needed to view all your results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of custom vocabulary filters to return in each page of results. If there are fewer results than the value that you specify, only the actual results are returned. If you do not specify a value, a default of 5 is used.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Returns only the custom vocabulary filters that contain the specified string. The search is not case sensitive.
   *
   * @public
   */
  NameContains?: string | undefined;
}

/**
 * Provides information about a custom vocabulary filter, including the language of the filter, when it was last modified, and its name.
 *
 * @public
 */
export interface VocabularyFilterInfo {
  /**
   * A unique name, chosen by you, for your custom vocabulary filter. This name is case sensitive, cannot contain spaces, and must be unique within an Amazon Web Services account.
   *
   * @public
   */
  VocabularyFilterName?: string | undefined;

  /**
   * The language code that represents the language of the entries in your vocabulary filter. Each custom vocabulary filter must contain terms in only one language.
   *
   * A custom vocabulary filter can only be used to transcribe files in the same language as the filter. For example, if you create a custom vocabulary filter using US English (`en-US`), you can only apply this filter to files that contain English audio.
   *
   * For a list of supported languages and their associated language codes, refer to the [Supported languages](https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html) table.
   *
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * The date and time the specified custom vocabulary filter was last modified.
   *
   * Timestamps are in the format `YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC`. For example, `2022-05-04T12:32:58.761000-07:00` represents 12:32 PM UTC-7 on May 4, 2022.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListVocabularyFiltersResponse {
  /**
   * If `NextToken` is present in your response, it indicates that not all results are displayed. To view the next set of results, copy the string associated with the `NextToken` parameter in your results output, then run your request again including `NextToken` with the value of the copied string. Repeat as needed to view all your results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Provides information about the custom vocabulary filters that match the criteria specified in your request.
   *
   * @public
   */
  VocabularyFilters?: VocabularyFilterInfo[] | undefined;
}

/**
 * Contains patient-specific information used to customize the clinical note generation.
 *
 * @public
 */
export interface MedicalScribePatientContext {
  /**
   * The patient's preferred pronouns that the user wants to provide as a context for clinical note generation.
   *
   * @public
   */
  Pronouns?: Pronouns | undefined;
}

/**
 * The `MedicalScribeContext` object that contains contextual information used to generate customized clinical notes.
 *
 * @public
 */
export interface MedicalScribeContext {
  /**
   * Contains patient-specific information.
   *
   * @public
   */
  PatientContext?: MedicalScribePatientContext | undefined;
}

/**
 * @public
 */
export interface StartCallAnalyticsJobRequest {
  /**
   * A unique name, chosen by you, for your Call Analytics job.
   *
   * This name is case sensitive, cannot contain spaces, and must be unique within an Amazon Web Services account. If you try to create a new job with the same name as an existing job, you get a `ConflictException` error.
   *
   * @public
   */
  CallAnalyticsJobName: string | undefined;

  /**
   * Describes the Amazon S3 location of the media file you want to use in your Call Analytics request.
   *
   * @public
   */
  Media: Media | undefined;

  /**
   * The Amazon S3 location where you want your Call Analytics transcription output stored. You can use any of the following formats to specify the output location:
   *
   * 1. s3://DOC-EXAMPLE-BUCKET
   * 2. s3://DOC-EXAMPLE-BUCKET/my-output-folder/
   * 3. s3://DOC-EXAMPLE-BUCKET/my-output-folder/my-call-analytics-job.json
   *
   * Unless you specify a file name (option 3), the name of your output file has a default value that matches the name you specified for your transcription job using the `CallAnalyticsJobName` parameter.
   *
   * You can specify a KMS key to encrypt your output using the `OutputEncryptionKMSKeyId` parameter. If you do not specify a KMS key, Amazon Transcribe uses the default Amazon S3 key for server-side encryption.
   *
   * If you do not specify `OutputLocation`, your transcript is placed in a service-managed Amazon S3 bucket and you are provided with a URI to access your transcript.
   *
   * @public
   */
  OutputLocation?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a KMS key that you want to use to encrypt your Call Analytics output.
   *
   * KMS key ARNs have the format `arn:partition:kms:region:account:key/key-id`. For example: `arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`. For more information, see [KMS key ARNs](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN).
   *
   * If you do not specify an encryption key, your output is encrypted with the default Amazon S3 key (SSE-S3).
   *
   * Note that the role making the request and the role specified in the `DataAccessRoleArn` request parameter (if present) must have permission to use the specified KMS key.
   *
   * @public
   */
  OutputEncryptionKMSKeyId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input files. If the role that you specify doesn’t have the appropriate permissions to access the specified Amazon S3 location, your request fails.
   *
   * IAM role ARNs have the format `arn:partition:iam::account:role/role-name-with-path`. For example: `arn:aws:iam::111122223333:role/Admin`.
   *
   * For more information, see [IAM ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns).
   *
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * Specify additional optional settings in your request, including content redaction; allows you to apply custom language models, vocabulary filters, and custom vocabularies to your Call Analytics job.
   *
   * @public
   */
  Settings?: CallAnalyticsJobSettings | undefined;

  /**
   * Adds one or more custom tags, each in the form of a key:value pair, to a new call analytics job at the time you start this new job.
   *
   * To learn more about using tags with Amazon Transcribe, refer to [Tagging resources](https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html).
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Makes it possible to specify which speaker is on which channel. For example, if your agent is the first participant to speak, you would set `ChannelId` to `0` (to indicate the first channel) and `ParticipantRole` to `AGENT` (to indicate that it's the agent speaking).
   *
   * @public
   */
  ChannelDefinitions?: ChannelDefinition[] | undefined;
}

/**
 * @public
 */
export interface StartCallAnalyticsJobResponse {
  /**
   * Provides detailed information about the current Call Analytics job, including job status and, if applicable, failure reason.
   *
   * @public
   */
  CallAnalyticsJob?: CallAnalyticsJob | undefined;
}

/**
 * @public
 */
export interface StartMedicalScribeJobRequest {
  /**
   * A unique name, chosen by you, for your Medical Scribe job.
   *
   * This name is case sensitive, cannot contain spaces, and must be unique within an Amazon Web Services account. If you try to create a new job with the same name as an existing job, you get a `ConflictException` error.
   *
   * @public
   */
  MedicalScribeJobName: string | undefined;

  /**
   * Describes the Amazon S3 location of the media file you want to use in your request.
   *
   * For information on supported media formats, refer to the `MediaFormat` parameter or the [Media formats](https://docs.aws.amazon.com/transcribe/latest/dg/how-input.html#how-input-audio) section in the Amazon S3 Developer Guide.
   *
   * @public
   */
  Media: Media | undefined;

  /**
   * The name of the Amazon S3 bucket where you want your Medical Scribe output stored. Do not include the `S3://` prefix of the specified bucket.
   *
   * Note that the role specified in the `DataAccessRoleArn` request parameter must have permission to use the specified location. You can change Amazon S3 permissions using the [Amazon Web Services Management Console](https://console.aws.amazon.com/s3). See also [Permissions Required for IAM User Roles](https://docs.aws.amazon.com/transcribe/latest/dg/security_iam_id-based-policy-examples.html#auth-role-iam-user).
   *
   * @public
   */
  OutputBucketName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a KMS key that you want to use to encrypt your Medical Scribe output.
   *
   * KMS key ARNs have the format `arn:partition:kms:region:account:key/key-id`. For example: `arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`. For more information, see [KMS key ARNs](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN).
   *
   * If you do not specify an encryption key, your output is encrypted with the default Amazon S3 key (SSE-S3).
   *
   * Note that the role making the request and the role specified in the `DataAccessRoleArn` request parameter (if present) must have permission to use the specified KMS key.
   *
   * @public
   */
  OutputEncryptionKMSKeyId?: string | undefined;

  /**
   * A map of plain text, non-secret key:value pairs, known as encryption context pairs, that provide an added layer of security for your data. For more information, see [KMS encryption context](https://docs.aws.amazon.com/transcribe/latest/dg/key-management.html#kms-context) and [Asymmetric keys in KMS](https://docs.aws.amazon.com/transcribe/latest/dg/symmetric-asymmetric.html).
   *
   * @public
   */
  KMSEncryptionContext?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input files, write to the output bucket, and use your KMS key if supplied. If the role that you specify doesn’t have the appropriate permissions your request fails.
   *
   * IAM role ARNs have the format `arn:partition:iam::account:role/role-name-with-path`. For example: `arn:aws:iam::111122223333:role/Admin`.
   *
   * For more information, see [IAM ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns).
   *
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * Makes it possible to control how your Medical Scribe job is processed using a `MedicalScribeSettings` object. Specify `ChannelIdentification` if `ChannelDefinitions` are set. Enabled `ShowSpeakerLabels` if `ChannelIdentification` and `ChannelDefinitions` are not set. One and only one of `ChannelIdentification` and `ShowSpeakerLabels` must be set. If `ShowSpeakerLabels` is set, `MaxSpeakerLabels` must also be set. Use `Settings` to specify a vocabulary or vocabulary filter or both using `VocabularyName`, `VocabularyFilterName`. `VocabularyFilterMethod` must be specified if `VocabularyFilterName` is set.
   *
   * @public
   */
  Settings: MedicalScribeSettings | undefined;

  /**
   * Makes it possible to specify which speaker is on which channel. For example, if the clinician is the first participant to speak, you would set `ChannelId` of the first `ChannelDefinition` in the list to `0` (to indicate the first channel) and `ParticipantRole` to `CLINICIAN` (to indicate that it's the clinician speaking). Then you would set the `ChannelId` of the second `ChannelDefinition` in the list to `1` (to indicate the second channel) and `ParticipantRole` to `PATIENT` (to indicate that it's the patient speaking).
   *
   * @public
   */
  ChannelDefinitions?: MedicalScribeChannelDefinition[] | undefined;

  /**
   * Adds one or more custom tags, each in the form of a key:value pair, to the Medical Scribe job.
   *
   * To learn more about using tags with Amazon Transcribe, refer to [Tagging resources](https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html).
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The `MedicalScribeContext` object that contains contextual information which is used during clinical note generation to add relevant context to the note.
   *
   * @public
   */
  MedicalScribeContext?: MedicalScribeContext | undefined;
}

/**
 * @public
 */
export interface StartMedicalScribeJobResponse {
  /**
   * Provides detailed information about the current Medical Scribe job, including job status and, if applicable, failure reason.
   *
   * @public
   */
  MedicalScribeJob?: MedicalScribeJob | undefined;
}

/**
 * @public
 */
export interface StartMedicalTranscriptionJobRequest {
  /**
   * A unique name, chosen by you, for your medical transcription job. The name that you specify is also used as the default name of your transcription output file. If you want to specify a different name for your transcription output, use the `OutputKey` parameter.
   *
   * This name is case sensitive, cannot contain spaces, and must be unique within an Amazon Web Services account. If you try to create a new job with the same name as an existing job, you get a `ConflictException` error.
   *
   * @public
   */
  MedicalTranscriptionJobName: string | undefined;

  /**
   * The language code that represents the language spoken in the input media file. US English (`en-US`) is the only valid value for medical transcription jobs. Any other value you enter for language code results in a `BadRequestException` error.
   *
   * @public
   */
  LanguageCode: LanguageCode | undefined;

  /**
   * The sample rate, in hertz, of the audio track in your input media file.
   *
   * If you do not specify the media sample rate, Amazon Transcribe Medical determines it for you. If you specify the sample rate, it must match the rate detected by Amazon Transcribe Medical; if there's a mismatch between the value that you specify and the value detected, your job fails. Therefore, in most cases, it's advised to omit `MediaSampleRateHertz` and let Amazon Transcribe Medical determine the sample rate.
   *
   * @public
   */
  MediaSampleRateHertz?: number | undefined;

  /**
   * Specify the format of your input media file.
   *
   * @public
   */
  MediaFormat?: MediaFormat | undefined;

  /**
   * Describes the Amazon S3 location of the media file you want to use in your request.
   *
   * For information on supported media formats, refer to the `MediaFormat` parameter or the [Media formats](https://docs.aws.amazon.com/transcribe/latest/dg/how-input.html#how-input-audio) section in the Amazon S3 Developer Guide.
   *
   * @public
   */
  Media: Media | undefined;

  /**
   * The name of the Amazon S3 bucket where you want your medical transcription output stored. Do not include the `S3://` prefix of the specified bucket.
   *
   * If you want your output to go to a sub-folder of this bucket, specify it using the `OutputKey` parameter; `OutputBucketName` only accepts the name of a bucket.
   *
   * For example, if you want your output stored in `S3://DOC-EXAMPLE-BUCKET`, set `OutputBucketName` to `DOC-EXAMPLE-BUCKET`. However, if you want your output stored in `S3://DOC-EXAMPLE-BUCKET/test-files/`, set `OutputBucketName` to `DOC-EXAMPLE-BUCKET` and `OutputKey` to `test-files/`.
   *
   * Note that Amazon Transcribe must have permission to use the specified location. You can change Amazon S3 permissions using the [Amazon Web Services Management Console](https://console.aws.amazon.com/s3). See also [Permissions Required for IAM User Roles](https://docs.aws.amazon.com/transcribe/latest/dg/security_iam_id-based-policy-examples.html#auth-role-iam-user).
   *
   * @public
   */
  OutputBucketName: string | undefined;

  /**
   * Use in combination with `OutputBucketName` to specify the output location of your transcript and, optionally, a unique name for your output file. The default name for your transcription output is the same as the name you specified for your medical transcription job (`MedicalTranscriptionJobName`).
   *
   * Here are some examples of how you can use `OutputKey`:
   *
   * - If you specify 'DOC-EXAMPLE-BUCKET' as the `OutputBucketName` and 'my-transcript.json' as the `OutputKey`, your transcription output path is `s3://DOC-EXAMPLE-BUCKET/my-transcript.json`.
   * - If you specify 'my-first-transcription' as the `MedicalTranscriptionJobName`, 'DOC-EXAMPLE-BUCKET' as the `OutputBucketName`, and 'my-transcript' as the `OutputKey`, your transcription output path is `s3://DOC-EXAMPLE-BUCKET/my-transcript/my-first-transcription.json`.
   * - If you specify 'DOC-EXAMPLE-BUCKET' as the `OutputBucketName` and 'test-files/my-transcript.json' as the `OutputKey`, your transcription output path is `s3://DOC-EXAMPLE-BUCKET/test-files/my-transcript.json`.
   * - If you specify 'my-first-transcription' as the `MedicalTranscriptionJobName`, 'DOC-EXAMPLE-BUCKET' as the `OutputBucketName`, and 'test-files/my-transcript' as the `OutputKey`, your transcription output path is `s3://DOC-EXAMPLE-BUCKET/test-files/my-transcript/my-first-transcription.json`.
   *
   * If you specify the name of an Amazon S3 bucket sub-folder that doesn't exist, one is created for you.
   *
   * @public
   */
  OutputKey?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a KMS key that you want to use to encrypt your medical transcription output.
   *
   * KMS key ARNs have the format `arn:partition:kms:region:account:key/key-id`. For example: `arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`. For more information, see [KMS key ARNs](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN).
   *
   * If you do not specify an encryption key, your output is encrypted with the default Amazon S3 key (SSE-S3).
   *
   * Note that the role making the request and the role specified in the `DataAccessRoleArn` request parameter (if present) must have permission to use the specified KMS key.
   *
   * @public
   */
  OutputEncryptionKMSKeyId?: string | undefined;

  /**
   * A map of plain text, non-secret key:value pairs, known as encryption context pairs, that provide an added layer of security for your data. For more information, see [KMS encryption context](https://docs.aws.amazon.com/transcribe/latest/dg/key-management.html#kms-context) and [Asymmetric keys in KMS](https://docs.aws.amazon.com/transcribe/latest/dg/symmetric-asymmetric.html).
   *
   * @public
   */
  KMSEncryptionContext?: Record<string, string> | undefined;

  /**
   * Specify additional optional settings in your request, including channel identification, alternative transcriptions, and speaker partitioning. You can use that to apply custom vocabularies to your transcription job.
   *
   * @public
   */
  Settings?: MedicalTranscriptionSetting | undefined;

  /**
   * Labels all personal health information (PHI) identified in your transcript. For more information, see [Identifying personal health information (PHI) in a transcription](https://docs.aws.amazon.com/transcribe/latest/dg/phi-id.html).
   *
   * @public
   */
  ContentIdentificationType?: MedicalContentIdentificationType | undefined;

  /**
   * Specify the predominant medical specialty represented in your media. For batch transcriptions, `PRIMARYCARE` is the only valid value. If you require additional specialties, refer to .
   *
   * @public
   */
  Specialty: Specialty | undefined;

  /**
   * Specify whether your input media contains only one person (`DICTATION`) or contains a conversation between two people (`CONVERSATION`).
   *
   * For example, `DICTATION` could be used for a medical professional wanting to transcribe voice memos; `CONVERSATION` could be used for transcribing the doctor-patient dialogue during the patient's office visit.
   *
   * @public
   */
  Type: Type | undefined;

  /**
   * Adds one or more custom tags, each in the form of a key:value pair, to a new medical transcription job at the time you start this new job.
   *
   * To learn more about using tags with Amazon Transcribe, refer to [Tagging resources](https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html).
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface StartMedicalTranscriptionJobResponse {
  /**
   * Provides detailed information about the current medical transcription job, including job status and, if applicable, failure reason.
   *
   * @public
   */
  MedicalTranscriptionJob?: MedicalTranscriptionJob | undefined;
}

/**
 * Generate subtitles for your media file with your transcription request.
 *
 * You can choose a start index of 0 or 1, and you can specify either WebVTT or SubRip (or both) as your output format.
 *
 * Note that your subtitle files are placed in the same location as your transcription output.
 *
 * @public
 */
export interface Subtitles {
  /**
   * Specify the output format for your subtitle file; if you select both WebVTT (`vtt`) and SubRip (`srt`) formats, two output files are generated.
   *
   * @public
   */
  Formats?: SubtitleFormat[] | undefined;

  /**
   * Specify the starting value that is assigned to the first subtitle segment.
   *
   * The default start index for Amazon Transcribe is `0`, which differs from the more widely used standard of `1`. If you're uncertain which value to use, we recommend choosing `1`, as this may improve compatibility with other services.
   *
   * @public
   */
  OutputStartIndex?: number | undefined;
}

/**
 * @public
 */
export interface StartTranscriptionJobRequest {
  /**
   * A unique name, chosen by you, for your transcription job. The name that you specify is also used as the default name of your transcription output file. If you want to specify a different name for your transcription output, use the `OutputKey` parameter.
   *
   * This name is case sensitive, cannot contain spaces, and must be unique within an Amazon Web Services account. If you try to create a new job with the same name as an existing job, you get a `ConflictException` error.
   *
   * @public
   */
  TranscriptionJobName: string | undefined;

  /**
   * The language code that represents the language spoken in the input media file.
   *
   * If you're unsure of the language spoken in your media file, consider using `IdentifyLanguage` or `IdentifyMultipleLanguages` to enable automatic language identification.
   *
   * Note that you must include one of `LanguageCode`, `IdentifyLanguage`, or `IdentifyMultipleLanguages` in your request. If you include more than one of these parameters, your transcription job fails.
   *
   * For a list of supported languages and their associated language codes, refer to the [Supported languages](https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html) table.
   *
   * > **Note:** To transcribe speech in Modern Standard Arabic (`ar-SA`) in Amazon Web Services GovCloud (US) (US-West, us-gov-west-1), Amazon Web Services GovCloud (US) (US-East, us-gov-east-1), Canada (Calgary, ca-west-1) and Africa (Cape Town, af-south-1), your media file must be encoded at a sample rate of 16,000 Hz or higher.
   *
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * The sample rate, in hertz, of the audio track in your input media file.
   *
   * If you do not specify the media sample rate, Amazon Transcribe determines it for you. If you specify the sample rate, it must match the rate detected by Amazon Transcribe. If there's a mismatch between the value that you specify and the value detected, your job fails. In most cases, you can omit `MediaSampleRateHertz` and let Amazon Transcribe determine the sample rate.
   *
   * @public
   */
  MediaSampleRateHertz?: number | undefined;

  /**
   * Specify the format of your input media file.
   *
   * @public
   */
  MediaFormat?: MediaFormat | undefined;

  /**
   * Describes the Amazon S3 location of the media file you want to use in your request.
   *
   * @public
   */
  Media: Media | undefined;

  /**
   * The name of the Amazon S3 bucket where you want your transcription output stored. Do not include the `S3://` prefix of the specified bucket.
   *
   * If you want your output to go to a sub-folder of this bucket, specify it using the `OutputKey` parameter; `OutputBucketName` only accepts the name of a bucket.
   *
   * For example, if you want your output stored in `S3://DOC-EXAMPLE-BUCKET`, set `OutputBucketName` to `DOC-EXAMPLE-BUCKET`. However, if you want your output stored in `S3://DOC-EXAMPLE-BUCKET/test-files/`, set `OutputBucketName` to `DOC-EXAMPLE-BUCKET` and `OutputKey` to `test-files/`.
   *
   * Note that Amazon Transcribe must have permission to use the specified location. You can change Amazon S3 permissions using the [Amazon Web Services Management Console](https://console.aws.amazon.com/s3). See also [Permissions Required for IAM User Roles](https://docs.aws.amazon.com/transcribe/latest/dg/security_iam_id-based-policy-examples.html#auth-role-iam-user).
   *
   * If you do not specify `OutputBucketName`, your transcript is placed in a service-managed Amazon S3 bucket and you are provided with a URI to access your transcript.
   *
   * @public
   */
  OutputBucketName?: string | undefined;

  /**
   * Use in combination with `OutputBucketName` to specify the output location of your transcript and, optionally, a unique name for your output file. The default name for your transcription output is the same as the name you specified for your transcription job (`TranscriptionJobName`).
   *
   * Here are some examples of how you can use `OutputKey`:
   *
   * - If you specify 'DOC-EXAMPLE-BUCKET' as the `OutputBucketName` and 'my-transcript.json' as the `OutputKey`, your transcription output path is `s3://DOC-EXAMPLE-BUCKET/my-transcript.json`.
   * - If you specify 'my-first-transcription' as the `TranscriptionJobName`, 'DOC-EXAMPLE-BUCKET' as the `OutputBucketName`, and 'my-transcript' as the `OutputKey`, your transcription output path is `s3://DOC-EXAMPLE-BUCKET/my-transcript/my-first-transcription.json`.
   * - If you specify 'DOC-EXAMPLE-BUCKET' as the `OutputBucketName` and 'test-files/my-transcript.json' as the `OutputKey`, your transcription output path is `s3://DOC-EXAMPLE-BUCKET/test-files/my-transcript.json`.
   * - If you specify 'my-first-transcription' as the `TranscriptionJobName`, 'DOC-EXAMPLE-BUCKET' as the `OutputBucketName`, and 'test-files/my-transcript' as the `OutputKey`, your transcription output path is `s3://DOC-EXAMPLE-BUCKET/test-files/my-transcript/my-first-transcription.json`.
   *
   * If you specify the name of an Amazon S3 bucket sub-folder that doesn't exist, one is created for you.
   *
   * @public
   */
  OutputKey?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a KMS key that you want to use to encrypt your transcription output.
   *
   * KMS key ARNs have the format `arn:partition:kms:region:account:key/key-id`. For example: `arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`. For more information, see [KMS key ARNs](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN).
   *
   * If you do not specify an encryption key, your output is encrypted with the default Amazon S3 key (SSE-S3).
   *
   * Note that the role making the request and the role specified in the `DataAccessRoleArn` request parameter (if present) must have permission to use the specified KMS key.
   *
   * @public
   */
  OutputEncryptionKMSKeyId?: string | undefined;

  /**
   * A map of plain text, non-secret key:value pairs, known as encryption context pairs, that provide an added layer of security for your data. For more information, see [KMS encryption context](https://docs.aws.amazon.com/transcribe/latest/dg/key-management.html#kms-context) and [Asymmetric keys in KMS](https://docs.aws.amazon.com/transcribe/latest/dg/symmetric-asymmetric.html).
   *
   * @public
   */
  KMSEncryptionContext?: Record<string, string> | undefined;

  /**
   * Specify additional optional settings in your request, including channel identification, alternative transcriptions, speaker partitioning. You can use that to apply custom vocabularies and vocabulary filters.
   *
   * If you want to include a custom vocabulary or a custom vocabulary filter (or both) with your request but **do not** want to use automatic language identification, use `Settings` with the `VocabularyName` or `VocabularyFilterName` (or both) sub-parameter.
   *
   * If you're using automatic language identification with your request and want to include a custom language model, a custom vocabulary, or a custom vocabulary filter, use instead the parameter with the `LanguageModelName`, `VocabularyName` or `VocabularyFilterName` sub-parameters.
   *
   * @public
   */
  Settings?: Settings | undefined;

  /**
   * Specify the custom language model you want to include with your transcription job. If you include `ModelSettings` in your request, you must include the `LanguageModelName` sub-parameter.
   *
   * For more information, see [Custom language models](https://docs.aws.amazon.com/transcribe/latest/dg/custom-language-models.html).
   *
   * @public
   */
  ModelSettings?: ModelSettings | undefined;

  /**
   * Makes it possible to control how your transcription job is processed. Currently, the only `JobExecutionSettings` modification you can choose is enabling job queueing using the `AllowDeferredExecution` sub-parameter.
   *
   * If you include `JobExecutionSettings` in your request, you must also include the sub-parameters: `AllowDeferredExecution` and `DataAccessRoleArn`.
   *
   * @public
   */
  JobExecutionSettings?: JobExecutionSettings | undefined;

  /**
   * Makes it possible to redact or flag specified personally identifiable information (PII) in your transcript. If you use `ContentRedaction`, you must also include the sub-parameters: `RedactionOutput` and `RedactionType`. You can optionally include `PiiEntityTypes` to choose which types of PII you want to redact. If you do not include `PiiEntityTypes` in your request, all PII is redacted.
   *
   * @public
   */
  ContentRedaction?: ContentRedaction | undefined;

  /**
   * Enables automatic language identification in your transcription job request. Use this parameter if your media file contains only one language. If your media contains multiple languages, use `IdentifyMultipleLanguages` instead.
   *
   * If you include `IdentifyLanguage`, you can optionally include a list of language codes, using `LanguageOptions`, that you think may be present in your media file. Including `LanguageOptions` restricts `IdentifyLanguage` to only the language options that you specify, which can improve transcription accuracy.
   *
   * If you want to apply a custom language model, a custom vocabulary, or a custom vocabulary filter to your automatic language identification request, include `LanguageIdSettings` with the relevant sub-parameters (`VocabularyName`, `LanguageModelName`, and `VocabularyFilterName`). If you include `LanguageIdSettings`, also include `LanguageOptions`.
   *
   * Note that you must include one of `LanguageCode`, `IdentifyLanguage`, or `IdentifyMultipleLanguages` in your request. If you include more than one of these parameters, your transcription job fails.
   *
   * @public
   */
  IdentifyLanguage?: boolean | undefined;

  /**
   * Enables automatic multi-language identification in your transcription job request. Use this parameter if your media file contains more than one language. If your media contains only one language, use `IdentifyLanguage` instead.
   *
   * If you include `IdentifyMultipleLanguages`, you can optionally include a list of language codes, using `LanguageOptions`, that you think may be present in your media file. Including `LanguageOptions` restricts `IdentifyLanguage` to only the language options that you specify, which can improve transcription accuracy.
   *
   * If you want to apply a custom vocabulary or a custom vocabulary filter to your automatic language identification request, include `LanguageIdSettings` with the relevant sub-parameters (`VocabularyName` and `VocabularyFilterName`). If you include `LanguageIdSettings`, also include `LanguageOptions`.
   *
   * Note that you must include one of `LanguageCode`, `IdentifyLanguage`, or `IdentifyMultipleLanguages` in your request. If you include more than one of these parameters, your transcription job fails.
   *
   * @public
   */
  IdentifyMultipleLanguages?: boolean | undefined;

  /**
   * You can specify two or more language codes that represent the languages you think may be present in your media. Including more than five is not recommended. If you're unsure what languages are present, do not include this parameter.
   *
   * If you include `LanguageOptions` in your request, you must also include `IdentifyLanguage`.
   *
   * For more information, refer to [Supported languages](https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html).
   *
   * To transcribe speech in Modern Standard Arabic (`ar-SA`)in Amazon Web Services GovCloud (US) (US-West, us-gov-west-1), Amazon Web Services GovCloud (US) (US-East, us-gov-east-1), in Canada (Calgary) ca-west-1 and Africa (Cape Town) af-south-1, your media file must be encoded at a sample rate of 16,000 Hz or higher.
   *
   * @public
   */
  LanguageOptions?: LanguageCode[] | undefined;

  /**
   * Produces subtitle files for your input media. You can specify WebVTT (*.vtt) and SubRip (*.srt) formats.
   *
   * @public
   */
  Subtitles?: Subtitles | undefined;

  /**
   * Adds one or more custom tags, each in the form of a key:value pair, to a new transcription job at the time you start this new job.
   *
   * To learn more about using tags with Amazon Transcribe, refer to [Tagging resources](https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html).
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * If using automatic language identification in your request and you want to apply a custom language model, a custom vocabulary, or a custom vocabulary filter, include `LanguageIdSettings` with the relevant sub-parameters (`VocabularyName`, `LanguageModelName`, and `VocabularyFilterName`). Note that multi-language identification (`IdentifyMultipleLanguages`) doesn't support custom language models.
   *
   * `LanguageIdSettings` supports two to five language codes. Each language code you include can have an associated custom language model, custom vocabulary, and custom vocabulary filter. The language codes that you specify must match the languages of the associated custom language models, custom vocabularies, and custom vocabulary filters.
   *
   * It's recommended that you include `LanguageOptions` when using `LanguageIdSettings` to ensure that the correct language dialect is identified. For example, if you specify a custom vocabulary that is in `en-US` but Amazon Transcribe determines that the language spoken in your media is `en-AU`, your custom vocabulary *is not* applied to your transcription. If you include `LanguageOptions` and include `en-US` as the only English language dialect, your custom vocabulary *is* applied to your transcription.
   *
   * If you want to include a custom language model with your request but **do not** want to use automatic language identification, use instead the parameter with the `LanguageModelName` sub-parameter. If you want to include a custom vocabulary or a custom vocabulary filter (or both) with your request but **do not** want to use automatic language identification, use instead the parameter with the `VocabularyName` or `VocabularyFilterName` (or both) sub-parameter.
   *
   * @public
   */
  LanguageIdSettings?: Partial<Record<LanguageCode, LanguageIdSettings>> | undefined;

  /**
   * Enables toxic speech detection in your transcript. If you include `ToxicityDetection` in your request, you must also include `ToxicityCategories`.
   *
   * For information on the types of toxic speech Amazon Transcribe can detect, see [Detecting toxic speech](https://docs.aws.amazon.com/transcribe/latest/dg/toxic-language.html).
   *
   * @public
   */
  ToxicityDetection?: ToxicityDetectionSettings[] | undefined;
}

/**
 * @public
 */
export interface StartTranscriptionJobResponse {
  /**
   * Provides detailed information about the current transcription job, including job status and, if applicable, failure reason.
   *
   * @public
   */
  TranscriptionJob?: TranscriptionJob | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource you want to tag. ARNs have the format `arn:partition:service:region:account-id:resource-type/resource-id`.
   *
   * For example, `arn:aws:transcribe:us-west-2:111122223333:transcription-job/transcription-job-name`.
   *
   * Valid values for `resource-type` are: `transcription-job`, `medical-transcription-job`, `vocabulary`, `medical-vocabulary`, `vocabulary-filter`, and `language-model`.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Adds one or more custom tags, each in the form of a key:value pair, to the specified resource.
   *
   * To learn more about using tags with Amazon Transcribe, refer to [Tagging resources](https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html).
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
   * The Amazon Resource Name (ARN) of the Amazon Transcribe resource you want to remove tags from. ARNs have the format `arn:partition:service:region:account-id:resource-type/resource-id`.
   *
   * For example, `arn:aws:transcribe:us-west-2:111122223333:transcription-job/transcription-job-name`.
   *
   * Valid values for `resource-type` are: `transcription-job`, `medical-transcription-job`, `vocabulary`, `medical-vocabulary`, `vocabulary-filter`, and `language-model`.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Removes the specified tag keys from the specified Amazon Transcribe resource.
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
export interface UpdateCallAnalyticsCategoryRequest {
  /**
   * The name of the Call Analytics category you want to update. Category names are case sensitive.
   *
   * @public
   */
  CategoryName: string | undefined;

  /**
   * The rules used for the updated Call Analytics category. The rules you provide in this field replace the ones that are currently being used in the specified category.
   *
   * @public
   */
  Rules: Rule[] | undefined;

  /**
   * Choose whether you want to update a real-time or a post-call category. The input type you specify must match the input type specified when the category was created. For example, if you created a category with the `POST_CALL` input type, you must use `POST_CALL` as the input type when updating this category.
   *
   * @public
   */
  InputType?: InputType | undefined;
}

/**
 * @public
 */
export interface UpdateCallAnalyticsCategoryResponse {
  /**
   * Provides you with the properties of the Call Analytics category you specified in your `UpdateCallAnalyticsCategory` request.
   *
   * @public
   */
  CategoryProperties?: CategoryProperties | undefined;
}

/**
 * @public
 */
export interface UpdateLanguageModelRequest {
  /**
   * The name of the custom language model you want to update. Model names are case sensitive.
   *
   * @public
   */
  ModelName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role. If you include `EncryptionConfiguration` in your request, this role must have permissions to access the specified KMS key. If the role that you specify doesn't have the appropriate permissions, your request fails.
   *
   * IAM role ARNs have the format `arn:partition:iam::account:role/role-name-with-path`. For example: `arn:aws:iam::111122223333:role/Admin`.
   *
   * For more information, see [IAM ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns).
   *
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * Specifies the new encryption configuration for your custom language model. The model artifacts are re-encrypted in place using the specified KMS key or with an AWS-owned key if a key is not supplied.
   *
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateLanguageModelResponse {
  /**
   * The name of the custom language model that was updated.
   *
   * @public
   */
  ModelName?: string | undefined;

  /**
   * The status of the specified custom language model.
   *
   * @public
   */
  ModelStatus?: ModelStatus | undefined;

  /**
   * The date and time the specified custom language model was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateMedicalVocabularyRequest {
  /**
   * The name of the custom medical vocabulary you want to update. Custom medical vocabulary names are case sensitive.
   *
   * @public
   */
  VocabularyName: string | undefined;

  /**
   * The language code that represents the language of the entries in the custom vocabulary you want to update. US English (`en-US`) is the only language supported with Amazon Transcribe Medical.
   *
   * @public
   */
  LanguageCode: LanguageCode | undefined;

  /**
   * The Amazon S3 location of the text file that contains your custom medical vocabulary. The URI must be located in the same Amazon Web Services Region as the resource you're calling.
   *
   * Here's an example URI path: `s3://DOC-EXAMPLE-BUCKET/my-vocab-file.txt`
   *
   * @public
   */
  VocabularyFileUri: string | undefined;
}

/**
 * @public
 */
export interface UpdateMedicalVocabularyResponse {
  /**
   * The name of the updated custom medical vocabulary.
   *
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * The language code you selected for your custom medical vocabulary. US English (`en-US`) is the only language supported with Amazon Transcribe Medical.
   *
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * The date and time the specified custom medical vocabulary was last updated.
   *
   * Timestamps are in the format `YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC`. For example, `2022-05-04T12:32:58.761000-07:00` represents 12:32 PM UTC-7 on May 4, 2022.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The processing state of your custom medical vocabulary. If the state is `READY`, you can use the custom vocabulary in a `StartMedicalTranscriptionJob` request.
   *
   * @public
   */
  VocabularyState?: VocabularyState | undefined;
}

/**
 * @public
 */
export interface UpdateVocabularyRequest {
  /**
   * The name of the custom vocabulary you want to update. Custom vocabulary names are case sensitive.
   *
   * @public
   */
  VocabularyName: string | undefined;

  /**
   * The language code that represents the language of the entries in the custom vocabulary you want to update. Each custom vocabulary must contain terms in only one language.
   *
   * A custom vocabulary can only be used to transcribe files in the same language as the custom vocabulary. For example, if you create a custom vocabulary using US English (`en-US`), you can only apply this custom vocabulary to files that contain English audio.
   *
   * For a list of supported languages and their associated language codes, refer to the [Supported languages](https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html) table.
   *
   * @public
   */
  LanguageCode: LanguageCode | undefined;

  /**
   * Use this parameter if you want to update your custom vocabulary by including all desired terms, as comma-separated values, within your request. The other option for updating your custom vocabulary is to save your entries in a text file and upload them to an Amazon S3 bucket, then specify the location of your file using the `VocabularyFileUri` parameter.
   *
   * Note that if you include `Phrases` in your request, you cannot use `VocabularyFileUri`; you must choose one or the other.
   *
   * Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary filter request fails. Refer to [Character Sets for Custom Vocabularies](https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html) to get the character set for your language.
   *
   * @public
   */
  Phrases?: string[] | undefined;

  /**
   * The Amazon S3 location of the text file that contains your custom vocabulary. The URI must be located in the same Amazon Web Services Region as the resource you're calling.
   *
   * Here's an example URI path: `s3://DOC-EXAMPLE-BUCKET/my-vocab-file.txt`
   *
   * Note that if you include `VocabularyFileUri` in your request, you cannot use the `Phrases` flag; you must choose one or the other.
   *
   * @public
   */
  VocabularyFileUri?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input files (in this case, your custom vocabulary). If you include `EncryptionConfiguration` in your request, this role must also have permissions to access the specified KMS key. If the role that you specify doesn’t have the appropriate permissions, your request fails.
   *
   * IAM role ARNs have the format `arn:partition:iam::account:role/role-name-with-path`. For example: `arn:aws:iam::111122223333:role/Admin`.
   *
   * For more information, see [IAM ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns).
   *
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * Specifies the new encryption configuration for your custom vocabulary. The vocabulary artifacts are re-encrypted in place using the specified KMS key or with an AWS-owned key if a key is not supplied.
   *
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateVocabularyResponse {
  /**
   * The name of the updated custom vocabulary.
   *
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * The language code you selected for your custom vocabulary.
   *
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * The date and time the specified custom vocabulary was last updated.
   *
   * Timestamps are in the format `YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC`. For example, `2022-05-04T12:32:58.761000-07:00` represents 12:32 PM UTC-7 on May 4, 2022.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The processing state of your custom vocabulary. If the state is `READY`, you can use the custom vocabulary in a `StartTranscriptionJob` request.
   *
   * @public
   */
  VocabularyState?: VocabularyState | undefined;
}

/**
 * @public
 */
export interface UpdateVocabularyFilterRequest {
  /**
   * The name of the custom vocabulary filter you want to update. Custom vocabulary filter names are case sensitive.
   *
   * @public
   */
  VocabularyFilterName: string | undefined;

  /**
   * Use this parameter if you want to update your custom vocabulary filter by including all desired terms, as comma-separated values, within your request. The other option for updating your vocabulary filter is to save your entries in a text file and upload them to an Amazon S3 bucket, then specify the location of your file using the `VocabularyFilterFileUri` parameter.
   *
   * Note that if you include `Words` in your request, you cannot use `VocabularyFilterFileUri`; you must choose one or the other.
   *
   * Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary filter request fails. Refer to [Character Sets for Custom Vocabularies](https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html) to get the character set for your language.
   *
   * @public
   */
  Words?: string[] | undefined;

  /**
   * The Amazon S3 location of the text file that contains your custom vocabulary filter terms. The URI must be located in the same Amazon Web Services Region as the resource you're calling.
   *
   * Here's an example URI path: `s3://DOC-EXAMPLE-BUCKET/my-vocab-filter-file.txt`
   *
   * Note that if you include `VocabularyFilterFileUri` in your request, you cannot use `Words`; you must choose one or the other.
   *
   * @public
   */
  VocabularyFilterFileUri?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input files (in this case, your custom vocabulary filter). If you include `EncryptionConfiguration` in your request, this role must also have permissions to access the specified KMS key. If the role that you specify doesn’t have the appropriate permissions, your request fails.
   *
   * IAM role ARNs have the format `arn:partition:iam::account:role/role-name-with-path`. For example: `arn:aws:iam::111122223333:role/Admin`.
   *
   * For more information, see [IAM ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns).
   *
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * Specifies the new encryption configuration for your custom vocabulary filter. The vocabulary filter artifacts are re-encrypted in place using the specified KMS key or with an AWS-owned key if a key is not supplied.
   *
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateVocabularyFilterResponse {
  /**
   * The name of the updated custom vocabulary filter.
   *
   * @public
   */
  VocabularyFilterName?: string | undefined;

  /**
   * The language code you selected for your custom vocabulary filter.
   *
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * The date and time the specified custom vocabulary filter was last updated.
   *
   * Timestamps are in the format `YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC`. For example, `2022-05-04T12:32:58.761000-07:00` represents 12:32 PM UTC-7 on May 4, 2022.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}
