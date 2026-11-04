// smithy-typescript generated code
import type { StreamingBlobTypes } from "@smithy/types";

import type {
  Engine,
  Gender,
  LanguageCode,
  OutputFormat,
  SpeechMarkType,
  TaskStatus,
  TextType,
  VoiceId,
} from "./enums";
import type {
  ServiceFailureException,
  ServiceQuotaExceededException,
  ThrottlingException,
  ValidationException,
} from "./errors";

/**
 * Contains a chunk of synthesized audio data.
 *
 * @public
 */
export interface AudioEvent {
  /**
   * A chunk of synthesized audio data encoded in the format specified by the `OutputFormat` parameter.
   *
   * @public
   */
  AudioChunk?: Uint8Array | undefined;
}

/**
 * Indicates the end of the input stream. After sending this event, the input stream will be closed and all audio will be returned.
 *
 * @public
 */
export interface CloseStreamEvent {}

/**
 * @public
 */
export interface DeleteLexiconInput {
  /**
   * The name of the lexicon to delete. Must be an existing lexicon in the region.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteLexiconOutput {}

/**
 * @public
 */
export interface DescribeVoicesInput {
  /**
   * Specifies the engine (`standard`, `neural`, `long-form` or `generative`) used by Amazon Polly when processing input text for speech synthesis.
   *
   * @public
   */
  Engine?: Engine | undefined;

  /**
   * The language identification tag (ISO 639 code for the language name-ISO 3166 country code) for filtering the list of voices returned. If you don't specify this optional parameter, all available voices are returned.
   *
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * Boolean value indicating whether to return any bilingual voices that use the specified language as an additional language. For instance, if you request all languages that use US English (es-US), and there is an Italian voice that speaks both Italian (it-IT) and US English, that voice will be included if you specify `yes` but not if you specify `no`.
   *
   * @public
   */
  IncludeAdditionalLanguageCodes?: boolean | undefined;

  /**
   * An opaque pagination token returned from the previous `DescribeVoices` operation. If present, this indicates where to continue the listing.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Description of the voice.
 *
 * @public
 */
export interface Voice {
  /**
   * Gender of the voice.
   *
   * @public
   */
  Gender?: Gender | undefined;

  /**
   * Amazon Polly assigned voice ID. This is the ID that you specify when calling the `SynthesizeSpeech` operation.
   *
   * @public
   */
  Id?: VoiceId | undefined;

  /**
   * Language code of the voice.
   *
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * Human readable name of the language in English.
   *
   * @public
   */
  LanguageName?: string | undefined;

  /**
   * Name of the voice (for example, Salli, Kendra, etc.). This provides a human readable voice name that you might display in your application.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Additional codes for languages available for the specified voice in addition to its default language.
   *
   * For example, the default language for Aditi is Indian English (en-IN) because it was first used for that language. Since Aditi is bilingual and fluent in both Indian English and Hindi, this parameter would show the code `hi-IN`.
   *
   * @public
   */
  AdditionalLanguageCodes?: LanguageCode[] | undefined;

  /**
   * Specifies which engines (`standard`, `neural`, `long-form` or `generative`) are supported by a given voice.
   *
   * @public
   */
  SupportedEngines?: Engine[] | undefined;
}

/**
 * @public
 */
export interface DescribeVoicesOutput {
  /**
   * A list of voices with their properties.
   *
   * @public
   */
  Voices?: Voice[] | undefined;

  /**
   * The pagination token to use in the next request to continue the listing of voices. `NextToken` is returned only if the response is truncated.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Configuration that controls when synthesized audio data is sent on the output stream.
 *
 * @public
 */
export interface FlushStreamConfiguration {
  /**
   * Specifies whether to force the synthesis engine to immediately write buffered audio data to the output stream.
   *
   * @public
   */
  Force?: boolean | undefined;
}

/**
 * @public
 */
export interface GetLexiconInput {
  /**
   * Name of the lexicon.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * Provides lexicon name and lexicon content in string format. For more information, see [Pronunciation Lexicon Specification (PLS) Version 1.0](https://www.w3.org/TR/pronunciation-lexicon/).
 *
 * @public
 */
export interface Lexicon {
  /**
   * Lexicon content in string format. The content of a lexicon must be in PLS format.
   *
   * @public
   */
  Content?: string | undefined;

  /**
   * Name of the lexicon.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Contains metadata describing the lexicon such as the number of lexemes, language code, and so on. For more information, see [Managing Lexicons](https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html).
 *
 * @public
 */
export interface LexiconAttributes {
  /**
   * Phonetic alphabet used in the lexicon. Valid values are `ipa`, `x-sampa`, `x-amazon-pinyin`, `x-amazon-jyutping`, `x-amazon-pron-kana`, and `x-amazon-yomigana`.
   *
   * @public
   */
  Alphabet?: string | undefined;

  /**
   * Language code that the lexicon applies to. A lexicon with a language code such as "en" would be applied to all English languages (en-GB, en-US, en-AUS, en-WLS, and so on.
   *
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * Date lexicon was last modified (a timestamp value).
   *
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * Amazon Resource Name (ARN) of the lexicon.
   *
   * @public
   */
  LexiconArn?: string | undefined;

  /**
   * Number of lexemes in the lexicon.
   *
   * @public
   */
  LexemesCount?: number | undefined;

  /**
   * Total size of the lexicon, in characters.
   *
   * @public
   */
  Size?: number | undefined;
}

/**
 * @public
 */
export interface GetLexiconOutput {
  /**
   * Lexicon object that provides name and the string content of the lexicon.
   *
   * @public
   */
  Lexicon?: Lexicon | undefined;

  /**
   * Metadata of the lexicon, including phonetic alphabetic used, language code, lexicon ARN, number of lexemes defined in the lexicon, and size of lexicon in bytes.
   *
   * @public
   */
  LexiconAttributes?: LexiconAttributes | undefined;
}

/**
 * @public
 */
export interface GetSpeechSynthesisTaskInput {
  /**
   * The Amazon Polly generated identifier for a speech synthesis task.
   *
   * @public
   */
  TaskId: string | undefined;
}

/**
 * SynthesisTask object that provides information about a speech synthesis task.
 *
 * @public
 */
export interface SynthesisTask {
  /**
   * Specifies the engine (`standard`, `neural`, `long-form` or `generative`) for Amazon Polly to use when processing input text for speech synthesis. Using a voice that is not supported for the engine selected will result in an error.
   *
   * @public
   */
  Engine?: Engine | undefined;

  /**
   * The Amazon Polly generated identifier for a speech synthesis task.
   *
   * @public
   */
  TaskId?: string | undefined;

  /**
   * Current status of the individual speech synthesis task.
   *
   * @public
   */
  TaskStatus?: TaskStatus | undefined;

  /**
   * Reason for the current status of a specific speech synthesis task, including errors if the task has failed.
   *
   * @public
   */
  TaskStatusReason?: string | undefined;

  /**
   * Pathway for the output speech file.
   *
   * @public
   */
  OutputUri?: string | undefined;

  /**
   * Timestamp for the time the synthesis task was started.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * Number of billable characters synthesized.
   *
   * @public
   */
  RequestCharacters?: number | undefined;

  /**
   * ARN for the SNS topic optionally used for providing status notification for a speech synthesis task.
   *
   * @public
   */
  SnsTopicArn?: string | undefined;

  /**
   * List of one or more pronunciation lexicon names you want the service to apply during synthesis. Lexicons are applied only if the language of the lexicon is the same as the language of the voice.
   *
   * @public
   */
  LexiconNames?: string[] | undefined;

  /**
   * The format in which the returned output will be encoded. For audio stream, this will be mp3, ogg_vorbis, ogg_opus, mu-law, a-law, or pcm. For speech marks, this will be json.
   *
   * @public
   */
  OutputFormat?: OutputFormat | undefined;

  /**
   * The audio frequency specified in Hz.
   *
   * The valid values for mp3 and ogg_vorbis are "8000", "16000", "22050", and "24000". The default value for standard voices is "22050". The default value for neural voices is "24000". The default value for long-form voices is "24000". The default value for generative voices is "24000".
   *
   * Valid values for pcm are "8000" and "16000" The default value is "16000".
   *
   * Valid value for ogg_opus is "48000".
   *
   * Valid value for mu-law and a-law is "8000".
   *
   * @public
   */
  SampleRate?: string | undefined;

  /**
   * The type of speech marks returned for the input text.
   *
   * @public
   */
  SpeechMarkTypes?: SpeechMarkType[] | undefined;

  /**
   * Specifies whether the input text is plain text or SSML. The default value is plain text.
   *
   * @public
   */
  TextType?: TextType | undefined;

  /**
   * Voice ID to use for the synthesis.
   *
   * @public
   */
  VoiceId?: VoiceId | undefined;

  /**
   * Optional language code for a synthesis task. This is only necessary if using a bilingual voice, such as Aditi, which can be used for either Indian English (en-IN) or Hindi (hi-IN).
   *
   * If a bilingual voice is used and no language code is specified, Amazon Polly uses the default language of the bilingual voice. The default language for any voice is the one returned by the [DescribeVoices](https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html) operation for the `LanguageCode` parameter. For example, if no language code is specified, Aditi will use Indian English rather than Hindi.
   *
   * @public
   */
  LanguageCode?: LanguageCode | undefined;
}

/**
 * @public
 */
export interface GetSpeechSynthesisTaskOutput {
  /**
   * SynthesisTask object that provides information from the requested task, including output format, creation time, task status, and so on.
   *
   * @public
   */
  SynthesisTask?: SynthesisTask | undefined;
}

/**
 * Describes the content of the lexicon.
 *
 * @public
 */
export interface LexiconDescription {
  /**
   * Name of the lexicon.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Provides lexicon metadata.
   *
   * @public
   */
  Attributes?: LexiconAttributes | undefined;
}

/**
 * @public
 */
export interface ListLexiconsInput {
  /**
   * An opaque pagination token returned from previous `ListLexicons` operation. If present, indicates where to continue the list of lexicons.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLexiconsOutput {
  /**
   * A list of lexicon names and attributes.
   *
   * @public
   */
  Lexicons?: LexiconDescription[] | undefined;

  /**
   * The pagination token to use in the next request to continue the listing of lexicons. `NextToken` is returned only if the response is truncated.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSpeechSynthesisTasksInput {
  /**
   * Maximum number of speech synthesis tasks returned in a List operation.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token to use in the next request to continue the listing of speech synthesis tasks.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Status of the speech synthesis tasks returned in a List operation
   *
   * @public
   */
  Status?: TaskStatus | undefined;
}

/**
 * @public
 */
export interface ListSpeechSynthesisTasksOutput {
  /**
   * An opaque pagination token returned from the previous List operation in this request. If present, this indicates where to continue the listing.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * List of SynthesisTask objects that provides information from the specified task in the list request, including output format, creation time, task status, and so on.
   *
   * @public
   */
  SynthesisTasks?: SynthesisTask[] | undefined;
}

/**
 * @public
 */
export interface PutLexiconInput {
  /**
   * Name of the lexicon. The name must follow the regular express format [0-9A-Za-z]\{1,20\}. That is, the name is a case-sensitive alphanumeric string up to 20 characters long.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Content of the PLS lexicon as string data.
   *
   * @public
   */
  Content: string | undefined;
}

/**
 * @public
 */
export interface PutLexiconOutput {}

/**
 * Contains text content to be synthesized into speech.
 *
 * @public
 */
export interface TextEvent {
  /**
   * The text content to synthesize. If you specify `ssml` as the `TextType`, follow the SSML format for the input text.
   *
   * @public
   */
  Text: string | undefined;

  /**
   * Specifies whether the input text is plain text or SSML. Default: plain text.
   *
   * @public
   */
  TextType?: TextType | undefined;

  /**
   * Configuration for controlling when synthesized audio flushes to the output stream.
   *
   * @public
   */
  FlushStreamConfiguration?: FlushStreamConfiguration | undefined;
}

/**
 * Inbound event stream for sending input and control events to manage bidirectional speech synthesis.
 *
 * @public
 */
export type StartSpeechSynthesisStreamActionStream =
  | StartSpeechSynthesisStreamActionStream.CloseStreamEventMember
  | StartSpeechSynthesisStreamActionStream.TextEventMember
  | StartSpeechSynthesisStreamActionStream.$UnknownMember;

/**
 * @public
 */
export namespace StartSpeechSynthesisStreamActionStream {
  /**
   * A text event containing content to be synthesized.
   *
   * @public
   */
  export interface TextEventMember {
    TextEvent: TextEvent;
    CloseStreamEvent?: never;
    $unknown?: never;
  }

  /**
   * An event indicating the end of the input stream.
   *
   * @public
   */
  export interface CloseStreamEventMember {
    TextEvent?: never;
    CloseStreamEvent: CloseStreamEvent;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    TextEvent?: never;
    CloseStreamEvent?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    TextEvent: (value: TextEvent) => T;
    CloseStreamEvent: (value: CloseStreamEvent) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface StartSpeechSynthesisStreamInput {
  /**
   * Specifies the engine for Amazon Polly to use when processing input text for speech synthesis. Currently, only the `generative` engine is supported. If you specify a voice that the selected engine doesn't support, Amazon Polly returns an error.
   *
   * @public
   */
  Engine: Engine | undefined;

  /**
   * An optional parameter that sets the language code for the speech synthesis request. Specify this parameter only when using a bilingual voice. If a bilingual voice is used and no language code is specified, Amazon Polly uses the default language of the bilingual voice.
   *
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * The names of one or more pronunciation lexicons for the service to apply during synthesis. Amazon Polly applies lexicons only when the lexicon language matches the voice language.
   *
   * @public
   */
  LexiconNames?: string[] | undefined;

  /**
   * The audio format for the synthesized speech. Currently, Amazon Polly does not support JSON speech marks.
   *
   * @public
   */
  OutputFormat: OutputFormat | undefined;

  /**
   * The audio frequency, specified in Hz.
   *
   * @public
   */
  SampleRate?: string | undefined;

  /**
   * The voice to use in synthesis. To get a list of available voice IDs, use the [DescribeVoices](https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html) operation.
   *
   * @public
   */
  VoiceId: VoiceId | undefined;

  /**
   * The input event stream that contains text events and stream control events.
   *
   * @public
   */
  ActionStream?: AsyncIterable<StartSpeechSynthesisStreamActionStream> | undefined;
}

/**
 * Indicates that the synthesis stream is closed and provides summary information.
 *
 * @public
 */
export interface StreamClosedEvent {
  /**
   * The total number of characters synthesized during the streaming session.
   *
   * @public
   */
  RequestCharacters?: number | undefined;
}

/**
 * Provides information about a specific throttling reason.
 *
 * @public
 */
export interface ThrottlingReason {
  /**
   * The reason code explaining why the request was throttled.
   *
   * @public
   */
  reason?: string | undefined;

  /**
   * The resource that caused the throttling.
   *
   * @public
   */
  resource?: string | undefined;
}

/**
 * Information about a field that failed validation.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the field that failed validation.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A message describing why the field failed validation.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * Outbound event stream that contains synthesized audio data and stream status events.
 *
 * @public
 */
export type StartSpeechSynthesisStreamEventStream =
  | StartSpeechSynthesisStreamEventStream.AudioEventMember
  | StartSpeechSynthesisStreamEventStream.ServiceFailureExceptionMember
  | StartSpeechSynthesisStreamEventStream.ServiceQuotaExceededExceptionMember
  | StartSpeechSynthesisStreamEventStream.StreamClosedEventMember
  | StartSpeechSynthesisStreamEventStream.ThrottlingExceptionMember
  | StartSpeechSynthesisStreamEventStream.ValidationExceptionMember
  | StartSpeechSynthesisStreamEventStream.$UnknownMember;

/**
 * @public
 */
export namespace StartSpeechSynthesisStreamEventStream {
  /**
   * An audio event containing synthesized speech.
   *
   * @public
   */
  export interface AudioEventMember {
    AudioEvent: AudioEvent;
    StreamClosedEvent?: never;
    ValidationException?: never;
    ServiceQuotaExceededException?: never;
    ServiceFailureException?: never;
    ThrottlingException?: never;
    $unknown?: never;
  }

  /**
   * An event, with summary information, indicating the stream has closed.
   *
   * @public
   */
  export interface StreamClosedEventMember {
    AudioEvent?: never;
    StreamClosedEvent: StreamClosedEvent;
    ValidationException?: never;
    ServiceQuotaExceededException?: never;
    ServiceFailureException?: never;
    ThrottlingException?: never;
    $unknown?: never;
  }

  /**
   * An exception indicating the input failed validation.
   *
   * @public
   */
  export interface ValidationExceptionMember {
    AudioEvent?: never;
    StreamClosedEvent?: never;
    ValidationException: ValidationException;
    ServiceQuotaExceededException?: never;
    ServiceFailureException?: never;
    ThrottlingException?: never;
    $unknown?: never;
  }

  /**
   * An exception indicating a service quota would be exceeded.
   *
   * @public
   */
  export interface ServiceQuotaExceededExceptionMember {
    AudioEvent?: never;
    StreamClosedEvent?: never;
    ValidationException?: never;
    ServiceQuotaExceededException: ServiceQuotaExceededException;
    ServiceFailureException?: never;
    ThrottlingException?: never;
    $unknown?: never;
  }

  /**
   * An unknown condition has caused a service failure.
   *
   * @public
   */
  export interface ServiceFailureExceptionMember {
    AudioEvent?: never;
    StreamClosedEvent?: never;
    ValidationException?: never;
    ServiceQuotaExceededException?: never;
    ServiceFailureException: ServiceFailureException;
    ThrottlingException?: never;
    $unknown?: never;
  }

  /**
   * An exception indicating the request was throttled.
   *
   * @public
   */
  export interface ThrottlingExceptionMember {
    AudioEvent?: never;
    StreamClosedEvent?: never;
    ValidationException?: never;
    ServiceQuotaExceededException?: never;
    ServiceFailureException?: never;
    ThrottlingException: ThrottlingException;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    AudioEvent?: never;
    StreamClosedEvent?: never;
    ValidationException?: never;
    ServiceQuotaExceededException?: never;
    ServiceFailureException?: never;
    ThrottlingException?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    AudioEvent: (value: AudioEvent) => T;
    StreamClosedEvent: (value: StreamClosedEvent) => T;
    ValidationException: (value: ValidationException) => T;
    ServiceQuotaExceededException: (value: ServiceQuotaExceededException) => T;
    ServiceFailureException: (value: ServiceFailureException) => T;
    ThrottlingException: (value: ThrottlingException) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface StartSpeechSynthesisStreamOutput {
  /**
   * The output event stream that contains synthesized audio events and stream status events.
   *
   * @public
   */
  EventStream?: AsyncIterable<StartSpeechSynthesisStreamEventStream> | undefined;
}

/**
 * @public
 */
export interface StartSpeechSynthesisTaskInput {
  /**
   * Specifies the engine (`standard`, `neural`, `long-form` or `generative`) for Amazon Polly to use when processing input text for speech synthesis. Using a voice that is not supported for the engine selected will result in an error.
   *
   * @public
   */
  Engine?: Engine | undefined;

  /**
   * Optional language code for the Speech Synthesis request. This is only necessary if using a bilingual voice, such as Aditi, which can be used for either Indian English (en-IN) or Hindi (hi-IN).
   *
   * If a bilingual voice is used and no language code is specified, Amazon Polly uses the default language of the bilingual voice. The default language for any voice is the one returned by the [DescribeVoices](https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html) operation for the `LanguageCode` parameter. For example, if no language code is specified, Aditi will use Indian English rather than Hindi.
   *
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * List of one or more pronunciation lexicon names you want the service to apply during synthesis. Lexicons are applied only if the language of the lexicon is the same as the language of the voice.
   *
   * @public
   */
  LexiconNames?: string[] | undefined;

  /**
   * The format in which the returned output will be encoded. For audio stream, this will be mp3, ogg_vorbis, ogg_opus, mu-law, a-law, or pcm. For speech marks, this will be json.
   *
   * @public
   */
  OutputFormat: OutputFormat | undefined;

  /**
   * Amazon S3 bucket name to which the output file will be saved.
   *
   * @public
   */
  OutputS3BucketName: string | undefined;

  /**
   * The Amazon S3 key prefix for the output speech file.
   *
   * @public
   */
  OutputS3KeyPrefix?: string | undefined;

  /**
   * The audio frequency specified in Hz.
   *
   * The valid values for mp3 and ogg_vorbis are "8000", "16000", "22050", and "24000". The default value for standard voices is "22050". The default value for neural voices is "24000". The default value for long-form voices is "24000". The default value for generative voices is "24000".
   *
   * Valid values for pcm are "8000" and "16000" The default value is "16000".
   *
   * Valid value for ogg_opus is "48000".
   *
   * Valid value for mu-law and a-law is "8000".
   *
   * @public
   */
  SampleRate?: string | undefined;

  /**
   * ARN for the SNS topic optionally used for providing status notification for a speech synthesis task.
   *
   * @public
   */
  SnsTopicArn?: string | undefined;

  /**
   * The type of speech marks returned for the input text.
   *
   * @public
   */
  SpeechMarkTypes?: SpeechMarkType[] | undefined;

  /**
   * The input text to synthesize. If you specify ssml as the TextType, follow the SSML format for the input text.
   *
   * @public
   */
  Text: string | undefined;

  /**
   * Specifies whether the input text is plain text or SSML. The default value is plain text.
   *
   * @public
   */
  TextType?: TextType | undefined;

  /**
   * Voice ID to use for the synthesis.
   *
   * @public
   */
  VoiceId: VoiceId | undefined;
}

/**
 * @public
 */
export interface StartSpeechSynthesisTaskOutput {
  /**
   * SynthesisTask object that provides information and attributes about a newly submitted speech synthesis task.
   *
   * @public
   */
  SynthesisTask?: SynthesisTask | undefined;
}

/**
 * @public
 */
export interface SynthesizeSpeechInput {
  /**
   * Specifies the engine (`standard`, `neural`, `long-form`, or `generative`) for Amazon Polly to use when processing input text for speech synthesis. Provide an engine that is supported by the voice you select. If you don't provide an engine, the standard engine is selected by default. If a chosen voice isn't supported by the standard engine, this will result in an error. For information on Amazon Polly voices and which voices are available for each engine, see [Available Voices](https://docs.aws.amazon.com/polly/latest/dg/voicelist.html).
   *
   * @public
   */
  Engine?: Engine | undefined;

  /**
   * Optional language code for the Synthesize Speech request. This is only necessary if using a bilingual voice, such as Aditi, which can be used for either Indian English (en-IN) or Hindi (hi-IN).
   *
   * If a bilingual voice is used and no language code is specified, Amazon Polly uses the default language of the bilingual voice. The default language for any voice is the one returned by the [DescribeVoices](https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html) operation for the `LanguageCode` parameter. For example, if no language code is specified, Aditi will use Indian English rather than Hindi.
   *
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * List of one or more pronunciation lexicon names you want the service to apply during synthesis. Lexicons are applied only if the language of the lexicon is the same as the language of the voice. For information about storing lexicons, see [PutLexicon](https://docs.aws.amazon.com/polly/latest/dg/API_PutLexicon.html).
   *
   * @public
   */
  LexiconNames?: string[] | undefined;

  /**
   * The format in which the returned output will be encoded. For audio stream, this will be mp3, ogg_vorbis, ogg_opus, mu-law, a-law or pcm. For speech marks, this will be json.
   *
   * When pcm is used, the content returned is audio/pcm in a signed 16-bit, 1 channel (mono), little-endian format.
   *
   * @public
   */
  OutputFormat: OutputFormat | undefined;

  /**
   * The audio frequency specified in Hz.
   *
   * The valid values for mp3 and ogg_vorbis are "8000", "16000", "22050", "24000", "44100" and "48000". The default value for standard voices is "22050". The default value for neural voices is "24000". The default value for long-form voices is "24000". The default value for generative voices is "24000".
   *
   * Valid values for pcm are "8000" and "16000" The default value is "16000".
   *
   * Valid value for ogg_opus is "48000".
   *
   * Valid value for mu-law and a-law is "8000".
   *
   * @public
   */
  SampleRate?: string | undefined;

  /**
   * The type of speech marks returned for the input text.
   *
   * @public
   */
  SpeechMarkTypes?: SpeechMarkType[] | undefined;

  /**
   * Input text to synthesize. If you specify `ssml` as the `TextType`, follow the SSML format for the input text.
   *
   * @public
   */
  Text: string | undefined;

  /**
   * Specifies whether the input text is plain text or SSML. The default value is plain text. For more information, see [Using SSML](https://docs.aws.amazon.com/polly/latest/dg/ssml.html).
   *
   * @public
   */
  TextType?: TextType | undefined;

  /**
   * Voice ID to use for the synthesis. You can get a list of available voice IDs by calling the [DescribeVoices](https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html) operation.
   *
   * @public
   */
  VoiceId: VoiceId | undefined;
}

/**
 * @public
 */
export interface SynthesizeSpeechOutput {
  /**
   * Stream containing the synthesized speech.
   *
   * @public
   */
  AudioStream?: StreamingBlobTypes | undefined;

  /**
   * Specifies the type audio stream. This should reflect the `OutputFormat` parameter in your request.
   *
   * - If you request `mp3` as the `OutputFormat`, the `ContentType` returned is audio/mpeg.
   * - If you request `ogg_vorbis` as the `OutputFormat`, the `ContentType` returned is audio/ogg.
   * - If you request `ogg_opus` as the `OutputFormat`, the `ContentType` returned is audio/ogg.
   * - If you request `pcm` as the `OutputFormat`, the `ContentType` returned is audio/pcm in a signed 16-bit, 1 channel (mono), little-endian format.
   * - If you request `mu-law` as the `OutputFormat`, the `ContentType` returned is audio/mulaw.
   * - If you request `a-law` as the `OutputFormat`, the `ContentType` returned is audio/alaw.
   * - If you request `json` as the `OutputFormat`, the `ContentType` returned is application/x-json-stream.
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * Number of characters synthesized.
   *
   * @public
   */
  RequestCharacters?: number | undefined;
}
