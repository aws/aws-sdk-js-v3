// smithy-typescript generated code
import type { StreamingBlobTypes } from "@smithy/types";

import type {
  AudioFormat,
  CustomVoiceLanguageCode,
  Engine,
  Gender,
  LanguageCode,
  OutputFormat,
  SpeechMarkType,
  TaskStatus,
  TextType,
  VoiceId,
  VoiceOrigin,
  VoiceStatus,
} from "./enums";
import type {
  ServiceFailureException,
  ServiceQuotaExceededException,
  ThrottlingException,
  ValidationException,
} from "./errors";

/**
 * <p>Contains a chunk of synthesized audio data.</p>
 * @public
 */
export interface AudioEvent {
  /**
   * <p>A chunk of synthesized audio data encoded in the format specified by the
   *       <code>OutputFormat</code> parameter.</p>
   * @public
   */
  AudioChunk?: Uint8Array | undefined;
}

/**
 * <p>Indicates the end of the input stream. After sending this event, the input stream
 *      will be closed and all audio will be returned.</p>
 * @public
 */
export interface CloseStreamEvent {}

/**
 * <p>The customer managed key that encrypts your custom voice. If you
 *       don't specify a key, Amazon Polly encrypts the voice with an Amazon Web Services owned
 *       key.</p>
 * @public
 */
export interface CustomerManagedEncryption {
  /**
   * <p>The Amazon Resource Name (ARN) of the key. The key must be a
   *       symmetric encryption key in the same Amazon Web Services Region as the voice. To create
   *       the voice, you need <code>kms:DescribeKey</code>,
   *       <code>kms:GenerateDataKey</code>, and <code>kms:Decrypt</code> permissions
   *       on the key. To synthesize speech with the voice, you need
   *       <code>kms:Decrypt</code> permission on the key.</p>
   * @public
   */
  KmsKeyArn: string | undefined;

  /**
   * <p>The key-value pairs that Amazon Polly includes as the encryption context
   *       when it encrypts or decrypts the voice with the key. You can use these
   *       pairs in key policy conditions. Don't use keys that start with
   *       <code>aws:</code>, which are reserved.</p>
   * @public
   */
  EncryptionContext?: Record<string, string> | undefined;
}

/**
 * <p>The audio source of a recording. In a <code>CreateVoice</code>
 *       request, specify exactly one of <code>S3Url</code> and <code>Bytes</code>.
 *       In a response, a recording that Amazon Polly read from Amazon S3 includes its
 *       <code>S3Url</code>. A recording that you passed as <code>Bytes</code>
 *       includes neither field, because Amazon Polly doesn't return the
 *       audio.</p>
 * @public
 */
export interface RecordingData {
  /**
   * <p>The Amazon S3 URL of the audio object, in the form
   *       <code>s3://bucket/key</code>. You need <code>s3:GetObject</code>
   *       permission on the object.</p>
   * @public
   */
  S3Url?: string | undefined;

  /**
   * <p>The audio data, passed directly in the request. The data must be
   *       in the format that <code>Format</code> specifies and can be up to 5 MB.
   *       Amazon Polly doesn't store the audio after it creates the voice, and doesn't
   *       return this field in responses.</p>
   * @public
   */
  Bytes?: Uint8Array | undefined;
}

/**
 * <p>A recording of the speaker whose voice you want to create. The
 *       recording specifies its audio format and its audio source.</p>
 * @public
 */
export interface Recording {
  /**
   * <p>The audio format of the recording: <code>wav</code>,
   *       <code>flac</code>, <code>ogg_vorbis</code>, or <code>mp3</code>. The
   *       format must match the audio data.</p>
   * @public
   */
  Format: AudioFormat | undefined;

  /**
   * <p>The audio source of the recording. Specify either an Amazon S3
   *       object or the audio data.</p>
   * @public
   */
  Data: RecordingData | undefined;
}

/**
 * <p>The audio that you provide to create a custom voice.</p>
 * @public
 */
export interface VoiceCreationData {
  /**
   * <p>The recordings of the speaker. Each recording specifies its audio
   *       format and its audio source.</p>
   * @public
   */
  Recordings: Recording[] | undefined;
}

/**
 * @public
 */
export interface CreateVoiceInput {
  /**
   * <p>The name of the voice. Use the name to identify the voice in your
   *       application. The name can contain letters, digits, hyphens, and
   *       underscores, and can be up to 64 characters long. The name doesn't have to
   *       be unique. The name isn't the voice ID, which Amazon Polly assigns.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The language of the recordings, for example, <code>en-US</code>.
   *       Amazon Polly doesn't detect the language from the recordings.</p>
   * @public
   */
  LanguageCode: CustomVoiceLanguageCode | undefined;

  /**
   * <p>Confirms the following two statements:</p>
   *          <ul>
   *             <li>
   *                <p>"I confirm that I have obtained all necessary consents required
   *           under any applicable laws and regulations, including biometric privacy
   *           laws, from the owner of this voice to clone these voice
   *           samples."</p>
   *             </li>
   *             <li>
   *                <p>"I confirm that I will not use the generated content for any
   *           illegal, fraudulent, or harmful purpose and reaffirm my obligation to
   *           abide by the AWS Service Terms, Biometric Notice and Consent Terms,
   *           AWS Responsible AI Policy, and AWS Acceptable Use Policy."</p>
   *             </li>
   *          </ul>
   *          <p>You can read the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a>, the <a href="https://aws.amazon.com/legal/biometric-notice-and-consent-terms/">Biometric Notice and Consent Terms</a>, the <a href="https://aws.amazon.com/ai/responsible-ai/policy/">AWS Responsible
   *         AI Policy</a>, and the <a href="https://aws.amazon.com/aup/">AWS
   *         Acceptable Use Policy</a> on the Amazon Web Services website.</p>
   *          <p>You must set this parameter to <code>true</code> to create a voice.
   *       Otherwise, the request fails with <code>ValidationException</code>.</p>
   * @public
   */
  TermsAccepted: boolean | undefined;

  /**
   * <p>The recordings that Amazon Polly uses to create the voice.</p>
   * @public
   */
  VoiceCreationData: VoiceCreationData | undefined;

  /**
   * <p>The customer managed key that you want Amazon Polly to encrypt the voice
   *       with. If you omit this parameter, Amazon Polly encrypts the voice with an Amazon Web Services
   *       owned key.</p>
   * @public
   */
  CustomerManagedEncryption?: CustomerManagedEncryption | undefined;

  /**
   * <p>The tags that you apply to the voice to help you categorize and
   *       organize it. Each tag consists of a key and an optional value, both of
   *       which you define.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the
   *       idempotency of the request. If you don't specify a client token, the
   *       Amazon Web Services SDKs generate one for you. If you retry a request that succeeded
   *       with the same client token and the same parameters, Amazon Polly returns the
   *       voice that the first request created and doesn't create a second
   *       voice.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * <p>Describes a voice. Amazon Polly provides voices, and you can create custom
 *       voices with <code>CreateVoice</code>. <code>Origin</code> indicates
 *       whether Amazon Polly provides the voice or you created it.
 *       <code>DescribeVoices</code> returns a subset of the fields for each
 *       voice. <code>GetVoice</code> returns all fields of a custom
 *       voice.</p>
 * @public
 */
export interface Voice {
  /**
   * <p>The Amazon Resource Name (ARN) of a custom voice, in the form
   *       <code>arn:partition:polly:region:account-id:voice/voice-id</code>.
   *       <code>CreateVoice</code> and <code>GetVoice</code> return this field.
   *       Voices that Amazon Polly provides don't have an ARN.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The gender of the voice. Custom voices don't include this
   *       field.</p>
   * @public
   */
  Gender?: Gender | undefined;

  /**
   * <p>The voice ID that Amazon Polly assigns. You specify this ID when you
   *       call the <code>SynthesizeSpeech</code> operation. For a custom voice,
   *       Amazon Polly assigns an ID that consists of <code>vc-</code> followed by
   *       hexadecimal characters, for example, <code>vc-9a8fa85dd3</code>.</p>
   * @public
   */
  Id?: VoiceId | undefined;

  /**
   * <p>Language code of the voice.</p>
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * <p>Human readable name of the language in English.</p>
   * @public
   */
  LanguageName?: string | undefined;

  /**
   * <p>The name of the voice, for example, Salli or Kendra. The name is
   *       human-readable, and you might display it in your application. For a custom
   *       voice, this is the <code>Name</code> that you specified in
   *       <code>CreateVoice</code>.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Indicates who provides the voice. The origin is one of the
   *       following:</p>
   *          <dl>
   *             <dt>aws</dt>
   *             <dd>
   *                <p>A voice that Amazon Polly provides.</p>
   *             </dd>
   *             <dt>customer</dt>
   *             <dd>
   *                <p>A custom voice that you created with
   *             <code>CreateVoice</code>.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  Origin?: VoiceOrigin | undefined;

  /**
   * <p>The status of a custom voice. Voices that Amazon Polly provides don't
   *       include this field. The status is one of the following:</p>
   *          <dl>
   *             <dt>pending</dt>
   *             <dd>
   *                <p>Amazon Polly is creating the voice.</p>
   *             </dd>
   *             <dt>active</dt>
   *             <dd>
   *                <p>The voice is ready for speech synthesis.</p>
   *             </dd>
   *             <dt>failed</dt>
   *             <dd>
   *                <p>Amazon Polly couldn't create the voice. <code>StatusReason</code>
   *             describes why.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  Status?: VoiceStatus | undefined;

  /**
   * <p>Additional information about the status of a custom voice. When the
   *       status is <code>failed</code>, this field describes why Amazon Polly couldn't
   *       create the voice.</p>
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * <p>Additional codes for languages available for the specified voice in
   *       addition to its default language. </p>
   *          <p>For example, the default language for Aditi is Indian English (en-IN)
   *       because it was first used for that language. Since Aditi is bilingual and
   *       fluent in both Indian English and Hindi, this parameter would show the
   *       code <code>hi-IN</code>.</p>
   * @public
   */
  AdditionalLanguageCodes?: LanguageCode[] | undefined;

  /**
   * <p>Specifies which engines (<code>standard</code>, <code>neural</code>,
   *       <code>long-form</code> or <code>generative</code>) are supported by a given voice.</p>
   * @public
   */
  SupportedEngines?: Engine[] | undefined;

  /**
   * <p>The data from which you created the custom voice.
   *       <code>CreateVoice</code> and <code>GetVoice</code> return this field. The
   *       response doesn't include the audio: a recording that Amazon Polly read from
   *       Amazon S3 includes its <code>S3Url</code>, and a recording that you passed
   *       as <code>Bytes</code> has no fields in <code>Data</code>.</p>
   * @public
   */
  VoiceCreationData?: VoiceCreationData | undefined;

  /**
   * <p>The customer managed key that encrypts your custom voice.
   *       <code>CreateVoice</code> and <code>GetVoice</code> return this field if
   *       you specified a key in <code>CreateVoice</code>.</p>
   * @public
   */
  CustomerManagedEncryption?: CustomerManagedEncryption | undefined;

  /**
   * <p>The date and time when you created the custom voice. Voices that
   *       Amazon Polly provides don't include this field.</p>
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * @public
 */
export interface CreateVoiceOutput {
  /**
   * <p>The new voice, in <code>pending</code> status.</p>
   * @public
   */
  Voice?: Voice | undefined;
}

/**
 * <p>Provides information about a specific throttling reason.</p>
 * @public
 */
export interface ThrottlingReason {
  /**
   * <p>The reason code explaining why the request was throttled.</p>
   * @public
   */
  reason?: string | undefined;

  /**
   * <p>The resource that caused the throttling.</p>
   * @public
   */
  resource?: string | undefined;
}

/**
 * <p>Information about a field that failed validation.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the field that failed validation.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A message describing why the field failed validation.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface DeleteLexiconInput {
  /**
   * <p>The name of the lexicon to delete. Must be an existing lexicon in
   *       the region.</p>
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
export interface DeleteVoiceInput {
  /**
   * <p>The ID of the custom voice to delete, for example,
   *       <code>vc-9a8fa85dd3</code>. You can't specify the ARN of the
   *       voice.</p>
   * @public
   */
  VoiceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceOutput {}

/**
 * @public
 */
export interface DescribeVoicesInput {
  /**
   * <p>Specifies the engine (<code>standard</code>, <code>neural</code>,
   *       <code>long-form</code> or <code>generative</code>) used by Amazon Polly when
   *       processing input text for speech synthesis. </p>
   * @public
   */
  Engine?: Engine | undefined;

  /**
   * <p> The language identification tag (ISO 639 code for the language
   *       name-ISO 3166 country code) for filtering the list of voices returned. If
   *       you don't specify this optional parameter, all available voices are
   *       returned. </p>
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * <p>Boolean value indicating whether to return any bilingual voices that
   *       use the specified language as an additional language. For instance, if you
   *       request all languages that use US English (es-US), and there is an Italian
   *       voice that speaks both Italian (it-IT) and US English, that voice will be
   *       included if you specify <code>yes</code> but not if you specify
   *         <code>no</code>.</p>
   * @public
   */
  IncludeAdditionalLanguageCodes?: boolean | undefined;

  /**
   * <p>An opaque pagination token returned from the previous
   *         <code>DescribeVoices</code> operation. If present, this indicates where
   *       to continue the listing.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVoicesOutput {
  /**
   * <p>A list of voices with their properties.</p>
   * @public
   */
  Voices?: Voice[] | undefined;

  /**
   * <p>The pagination token to use in the next request to continue the
   *       listing of voices. <code>NextToken</code> is returned only if the response
   *       is truncated.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Configuration that controls when synthesized audio data is sent on the output stream.</p>
 * @public
 */
export interface FlushStreamConfiguration {
  /**
   * <p>Specifies whether to force the synthesis engine to immediately
   *       write buffered audio data to the output stream.</p>
   * @public
   */
  Force?: boolean | undefined;
}

/**
 * @public
 */
export interface GetLexiconInput {
  /**
   * <p>Name of the lexicon.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>Provides lexicon name and lexicon content in string format. For
 *       more information, see <a href="https://www.w3.org/TR/pronunciation-lexicon/">Pronunciation Lexicon
 *         Specification (PLS) Version 1.0</a>.</p>
 * @public
 */
export interface Lexicon {
  /**
   * <p>Lexicon content in string format. The content of a lexicon must be
   *       in PLS format.</p>
   * @public
   */
  Content?: string | undefined;

  /**
   * <p>Name of the lexicon.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>Contains metadata describing the lexicon such as the number of
 *       lexemes, language code, and so on. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.</p>
 * @public
 */
export interface LexiconAttributes {
  /**
   * <p>Phonetic alphabet used in the lexicon. Valid values are
   *         <code>ipa</code>, <code>x-sampa</code>, <code>x-amazon-pinyin</code>,
   *         <code>x-amazon-jyutping</code>, <code>x-amazon-pron-kana</code>, and
   *         <code>x-amazon-yomigana</code>.</p>
   * @public
   */
  Alphabet?: string | undefined;

  /**
   * <p>Language code that the lexicon applies to. A lexicon with a
   *       language code such as "en" would be applied to all English languages
   *       (en-GB, en-US, en-AUS, en-WLS, and so on.</p>
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * <p>Date lexicon was last modified (a timestamp value).</p>
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of the lexicon.</p>
   * @public
   */
  LexiconArn?: string | undefined;

  /**
   * <p>Number of lexemes in the lexicon.</p>
   * @public
   */
  LexemesCount?: number | undefined;

  /**
   * <p>Total size of the lexicon, in characters.</p>
   * @public
   */
  Size?: number | undefined;
}

/**
 * @public
 */
export interface GetLexiconOutput {
  /**
   * <p>Lexicon object that provides name and the string content of the
   *       lexicon. </p>
   * @public
   */
  Lexicon?: Lexicon | undefined;

  /**
   * <p>Metadata of the lexicon, including phonetic alphabetic used,
   *       language code, lexicon ARN, number of lexemes defined in the lexicon, and
   *       size of lexicon in bytes.</p>
   * @public
   */
  LexiconAttributes?: LexiconAttributes | undefined;
}

/**
 * @public
 */
export interface GetSpeechSynthesisTaskInput {
  /**
   * <p>The Amazon Polly generated identifier for a speech synthesis task.</p>
   * @public
   */
  TaskId: string | undefined;
}

/**
 * <p>SynthesisTask object that provides information about a speech
 *       synthesis task.</p>
 * @public
 */
export interface SynthesisTask {
  /**
   * <p>Specifies the engine (<code>standard</code>, <code>neural</code>,
   *       <code>long-form</code> or <code>generative</code>) for Amazon Polly to use
   *       when processing input text for speech synthesis. Using a voice that
   *       is not supported for the engine selected will result in an error.</p>
   * @public
   */
  Engine?: Engine | undefined;

  /**
   * <p>The Amazon Polly generated identifier for a speech synthesis task.</p>
   * @public
   */
  TaskId?: string | undefined;

  /**
   * <p>Current status of the individual speech synthesis task.</p>
   * @public
   */
  TaskStatus?: TaskStatus | undefined;

  /**
   * <p>Reason for the current status of a specific speech synthesis task,
   *       including errors if the task has failed.</p>
   * @public
   */
  TaskStatusReason?: string | undefined;

  /**
   * <p>Pathway for the output speech file.</p>
   * @public
   */
  OutputUri?: string | undefined;

  /**
   * <p>Timestamp for the time the synthesis task was started.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>Number of billable characters synthesized.</p>
   * @public
   */
  RequestCharacters?: number | undefined;

  /**
   * <p>ARN for the SNS topic optionally used for providing status
   *       notification for a speech synthesis task.</p>
   * @public
   */
  SnsTopicArn?: string | undefined;

  /**
   * <p>List of one or more pronunciation lexicon names you want the service
   *       to apply during synthesis. Lexicons are applied only if the language of
   *       the lexicon is the same as the language of the voice. </p>
   * @public
   */
  LexiconNames?: string[] | undefined;

  /**
   * <p>The format in which the returned output will be encoded. For audio
   *       stream, this will be mp3, ogg_vorbis, ogg_opus, mu-law, a-law, or pcm. For speech marks, this will
   *       be json. </p>
   * @public
   */
  OutputFormat?: OutputFormat | undefined;

  /**
   * <p>The audio frequency specified in Hz.</p>
   *          <p>The valid values for mp3 and ogg_vorbis are "8000", "16000", "22050",
   *       and "24000". The default value for standard voices is "22050". The default
   *       value for neural voices is "24000". The default value for long-form voices
   *       is "24000". The default value for generative voices is "24000".</p>
   *          <p>Valid values for pcm are "8000" and "16000" The default value is
   *       "16000". </p>
   *          <p>Valid value for ogg_opus is "48000". </p>
   *          <p>Valid value for mu-law and a-law is "8000". </p>
   * @public
   */
  SampleRate?: string | undefined;

  /**
   * <p>The type of speech marks returned for the input text.</p>
   * @public
   */
  SpeechMarkTypes?: SpeechMarkType[] | undefined;

  /**
   * <p>Specifies whether the input text is plain text or SSML. The default
   *       value is plain text. </p>
   * @public
   */
  TextType?: TextType | undefined;

  /**
   * <p>Voice ID to use for the synthesis. </p>
   * @public
   */
  VoiceId?: VoiceId | undefined;

  /**
   * <p>Optional language code for a synthesis task. This is only necessary if
   *       using a bilingual voice, such as Aditi, which can be used for either
   *       Indian English (en-IN) or Hindi (hi-IN). </p>
   *          <p>If a bilingual voice is used and no language code is specified, Amazon Polly
   *       uses the default language of the bilingual voice. The default language for
   *       any voice is the one returned by the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a> operation for the <code>LanguageCode</code>
   *       parameter. For example, if no language code is specified, Aditi will use
   *       Indian English rather than Hindi.</p>
   * @public
   */
  LanguageCode?: LanguageCode | undefined;
}

/**
 * @public
 */
export interface GetSpeechSynthesisTaskOutput {
  /**
   * <p>SynthesisTask object that provides information from the requested
   *       task, including output format, creation time, task status, and so
   *       on.</p>
   * @public
   */
  SynthesisTask?: SynthesisTask | undefined;
}

/**
 * @public
 */
export interface GetVoiceInput {
  /**
   * <p>The ID of the custom voice that <code>CreateVoice</code> returned,
   *       for example, <code>vc-9a8fa85dd3</code>. You can't specify the ARN of the
   *       voice.</p>
   * @public
   */
  VoiceId: string | undefined;
}

/**
 * @public
 */
export interface GetVoiceOutput {
  /**
   * <p>The custom voice.</p>
   * @public
   */
  Voice?: Voice | undefined;
}

/**
 * <p>Describes the content of the lexicon.</p>
 * @public
 */
export interface LexiconDescription {
  /**
   * <p>Name of the lexicon.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Provides lexicon metadata.</p>
   * @public
   */
  Attributes?: LexiconAttributes | undefined;
}

/**
 * @public
 */
export interface ListLexiconsInput {
  /**
   * <p>An opaque pagination token returned from previous
   *         <code>ListLexicons</code> operation. If present, indicates where to
   *       continue the list of lexicons.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLexiconsOutput {
  /**
   * <p>A list of lexicon names and attributes.</p>
   * @public
   */
  Lexicons?: LexiconDescription[] | undefined;

  /**
   * <p>The pagination token to use in the next request to continue the
   *       listing of lexicons. <code>NextToken</code> is returned only if the
   *       response is truncated.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSpeechSynthesisTasksInput {
  /**
   * <p>Maximum number of speech synthesis tasks returned in a List
   *       operation.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token to use in the next request to continue the
   *       listing of speech synthesis tasks. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Status of the speech synthesis tasks returned in a List
   *       operation</p>
   * @public
   */
  Status?: TaskStatus | undefined;
}

/**
 * @public
 */
export interface ListSpeechSynthesisTasksOutput {
  /**
   * <p>An opaque pagination token returned from the previous List operation
   *       in this request. If present, this indicates where to continue the
   *       listing.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>List of SynthesisTask objects that provides information from the
   *       specified task in the list request, including output format, creation
   *       time, task status, and so on.</p>
   * @public
   */
  SynthesisTasks?: SynthesisTask[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to list the tags for.
   *       You can tag Amazon Polly lexicons and custom voices.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>The tags for the resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutLexiconInput {
  /**
   * <p>Name of the lexicon. The name must follow the regular expression
   *       format [0-9A-Za-z]\{1,20\}. That is, the name is a case-sensitive
   *       alphanumeric string up to 20 characters long. </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Content of the PLS lexicon as string data.</p>
   * @public
   */
  Content: string | undefined;

  /**
   * <p>The metadata that you apply to the lexicon to help you categorize and
   *       organize it. Each tag consists of a key and an optional value, both of
   *       which you define. Tag keys can have a maximum character length of 128
   *       characters, and tag values can have a maximum length of 256
   *       characters. You can't replace the tags of an existing lexicon by
   *       overwriting it with PutLexicon.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutLexiconOutput {}

/**
 * <p>Contains text content to be synthesized into speech.</p>
 * @public
 */
export interface TextEvent {
  /**
   * <p>The text content to synthesize. If you specify <code>ssml</code> as the
   *       <code>TextType</code>, follow the SSML format for the input text.</p>
   * @public
   */
  Text: string | undefined;

  /**
   * <p>Specifies whether the input text is plain text or SSML. Default: plain text.</p>
   * @public
   */
  TextType?: TextType | undefined;

  /**
   * <p>Configuration for controlling when synthesized audio flushes to the output stream.</p>
   * @public
   */
  FlushStreamConfiguration?: FlushStreamConfiguration | undefined;
}

/**
 * <p>Inbound event stream for sending input and control events to manage bidirectional speech synthesis.</p>
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
   * <p>A text event containing content to be synthesized.</p>
   * @public
   */
  export interface TextEventMember {
    TextEvent: TextEvent;
    CloseStreamEvent?: never;
    $unknown?: never;
  }

  /**
   * <p>An event indicating the end of the input stream.</p>
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
   * <p>Specifies the engine for Amazon Polly to use when processing input text for speech synthesis.
   *       Currently, only the <code>generative</code> engine is supported.
   *       If you specify a voice that the selected engine doesn't support, Amazon Polly returns an error.</p>
   * @public
   */
  Engine: Engine | undefined;

  /**
   * <p>An optional parameter that sets the language code for the speech synthesis request. Specify this parameter only
   *       when using a bilingual voice. If a bilingual voice is used and no language code is specified, Amazon Polly
   *       uses the default language of the bilingual voice.</p>
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * <p>The names of one or more pronunciation lexicons for the service to apply
   *       during synthesis. Amazon Polly applies lexicons only when the lexicon language matches the voice language.</p>
   * @public
   */
  LexiconNames?: string[] | undefined;

  /**
   * <p>The audio format for the synthesized speech. Currently, Amazon Polly does not support JSON speech marks.</p>
   * @public
   */
  OutputFormat: OutputFormat | undefined;

  /**
   * <p>The audio frequency, specified in Hz.</p>
   * @public
   */
  SampleRate?: string | undefined;

  /**
   * <p>The voice ID to use for the synthesis. To get a list of available voice IDs, use the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a> operation. To use a custom voice, specify the voice ID that <code>CreateVoice</code> returned, for example, <code>vc-9a8fa85dd3</code>. You can't specify the ARN of a voice.</p>
   * @public
   */
  VoiceId: VoiceId | undefined;

  /**
   * <p>The input event stream that contains text events and stream control events.</p>
   * @public
   */
  ActionStream?: AsyncIterable<StartSpeechSynthesisStreamActionStream> | undefined;
}

/**
 * <p>Indicates that the synthesis stream is closed and provides summary information.</p>
 * @public
 */
export interface StreamClosedEvent {
  /**
   * <p>The total number of characters synthesized during the streaming session.</p>
   * @public
   */
  RequestCharacters?: number | undefined;
}

/**
 * <p>Outbound event stream that contains synthesized audio data and stream status events.</p>
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
   * <p>An audio event containing synthesized speech.</p>
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
   * <p>An event, with summary information, indicating the stream has closed.</p>
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
   * <p>An exception indicating the input failed validation.</p>
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
   * <p>An exception indicating a service quota would be exceeded.</p>
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
   * <p>An unknown condition has caused a service failure.</p>
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
   * <p>An exception indicating the request was throttled.</p>
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
   * <p>The output event stream that contains synthesized audio events and stream status events.</p>
   * @public
   */
  EventStream?: AsyncIterable<StartSpeechSynthesisStreamEventStream> | undefined;
}

/**
 * @public
 */
export interface StartSpeechSynthesisTaskInput {
  /**
   * <p>Specifies the engine (<code>standard</code>, <code>neural</code>,
   *       <code>long-form</code> or <code>generative</code>) for Amazon Polly to use
   *       when processing input text for speech synthesis. Using a voice that
   *       is not supported for the engine selected will result in an error.</p>
   * @public
   */
  Engine?: Engine | undefined;

  /**
   * <p>Optional language code for the Speech Synthesis request. This is only
   *       necessary if using a bilingual voice, such as Aditi, which can be used for
   *       either Indian English (en-IN) or Hindi (hi-IN). </p>
   *          <p>If a bilingual voice is used and no language code is specified, Amazon Polly
   *       uses the default language of the bilingual voice. The default language for
   *       any voice is the one returned by the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a> operation for the <code>LanguageCode</code>
   *       parameter. For example, if no language code is specified, Aditi will use
   *       Indian English rather than Hindi.</p>
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * <p>List of one or more pronunciation lexicon names you want the service
   *       to apply during synthesis. Lexicons are applied only if the language of
   *       the lexicon is the same as the language of the voice. </p>
   * @public
   */
  LexiconNames?: string[] | undefined;

  /**
   * <p>The format in which the returned output will be encoded. For audio
   *       stream, this will be mp3, ogg_vorbis, ogg_opus, mu-law, a-law, or pcm. For speech marks, this will
   *       be json. </p>
   * @public
   */
  OutputFormat: OutputFormat | undefined;

  /**
   * <p>Amazon S3 bucket name to which the output file will be saved.</p>
   * @public
   */
  OutputS3BucketName: string | undefined;

  /**
   * <p>The Amazon S3 key prefix for the output speech file.</p>
   * @public
   */
  OutputS3KeyPrefix?: string | undefined;

  /**
   * <p>The audio frequency specified in Hz.</p>
   *          <p>The valid values for mp3 and ogg_vorbis are "8000", "16000", "22050",
   *       and "24000". The default value for standard voices is "22050". The default
   *       value for neural voices is "24000". The default value for long-form voices
   *       is "24000". The default value for generative voices is "24000".</p>
   *          <p>Valid values for pcm are "8000" and "16000" The default value is
   *       "16000". </p>
   *          <p>Valid value for ogg_opus is "48000". </p>
   *          <p>Valid value for mu-law and a-law is "8000". </p>
   * @public
   */
  SampleRate?: string | undefined;

  /**
   * <p>ARN for the SNS topic optionally used for providing status
   *       notification for a speech synthesis task.</p>
   * @public
   */
  SnsTopicArn?: string | undefined;

  /**
   * <p>The type of speech marks returned for the input text.</p>
   * @public
   */
  SpeechMarkTypes?: SpeechMarkType[] | undefined;

  /**
   * <p>The input text to synthesize. If you specify ssml as the TextType,
   *       follow the SSML format for the input text. </p>
   * @public
   */
  Text: string | undefined;

  /**
   * <p>Specifies whether the input text is plain text or SSML. The default
   *       value is plain text. </p>
   * @public
   */
  TextType?: TextType | undefined;

  /**
   * <p>The voice ID to use for the synthesis. To use a custom voice, specify the
   *       voice ID that <code>CreateVoice</code> returned, for example,
   *       <code>vc-9a8fa85dd3</code>. You can't specify the ARN of a voice.</p>
   * @public
   */
  VoiceId: VoiceId | undefined;
}

/**
 * @public
 */
export interface StartSpeechSynthesisTaskOutput {
  /**
   * <p>SynthesisTask object that provides information and attributes about a
   *       newly submitted speech synthesis task.</p>
   * @public
   */
  SynthesisTask?: SynthesisTask | undefined;
}

/**
 * @public
 */
export interface SynthesizeSpeechInput {
  /**
   * <p>Specifies the engine (<code>standard</code>, <code>neural</code>,
   *       <code>long-form</code>, or <code>generative</code>) for Amazon Polly
   *       to use when processing input text for speech synthesis. Provide an engine
   *       that is supported by the voice you select. If you don't provide an engine,
   *       the standard engine is selected by default. If a chosen voice isn't supported
   *       by the standard engine, this will result in an error. For information on
   *       Amazon Polly voices and which voices are available for each engine, see <a href="https://docs.aws.amazon.com/polly/latest/dg/voicelist.html">Available Voices</a>.</p>
   * @public
   */
  Engine?: Engine | undefined;

  /**
   * <p>Optional language code for the Synthesize Speech request. This is only
   *       necessary if using a bilingual voice, such as Aditi, which can be used for
   *       either Indian English (en-IN) or Hindi (hi-IN). </p>
   *          <p>If a bilingual voice is used and no language code is specified, Amazon Polly
   *       uses the default language of the bilingual voice. The default language for
   *       any voice is the one returned by the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a> operation for the <code>LanguageCode</code>
   *       parameter. For example, if no language code is specified, Aditi will use
   *       Indian English rather than Hindi.</p>
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * <p>List of one or more pronunciation lexicon names you want the
   *       service to apply during synthesis. Lexicons are applied only if the
   *       language of the lexicon is the same as the language of the voice. For
   *       information about storing lexicons, see <a href="https://docs.aws.amazon.com/polly/latest/dg/API_PutLexicon.html">PutLexicon</a>.</p>
   * @public
   */
  LexiconNames?: string[] | undefined;

  /**
   * <p> The format in which the returned output will be encoded. For audio
   *       stream, this will be mp3, ogg_vorbis, ogg_opus, mu-law, a-law or pcm. For speech marks, this will
   *       be json. </p>
   *          <p>When pcm is used, the content returned is audio/pcm in a signed
   *       16-bit, 1 channel (mono), little-endian format. </p>
   * @public
   */
  OutputFormat: OutputFormat | undefined;

  /**
   * <p>The audio frequency specified in Hz.</p>
   *          <p>The valid values for mp3 and ogg_vorbis are "8000", "16000", "22050", "24000", "44100" and "48000". The default value for standard voices is "22050". The default
   *       value for neural voices is "24000". The default value for long-form voices
   *       is "24000". The default value for generative voices is "24000".</p>
   *          <p>Valid values for pcm are "8000" and "16000" The default value is
   *       "16000". </p>
   *          <p>Valid value for ogg_opus is "48000". </p>
   *          <p>Valid value for mu-law and a-law is "8000". </p>
   * @public
   */
  SampleRate?: string | undefined;

  /**
   * <p>The type of speech marks returned for the input text.</p>
   * @public
   */
  SpeechMarkTypes?: SpeechMarkType[] | undefined;

  /**
   * <p> Input text to synthesize. If you specify <code>ssml</code> as the
   *         <code>TextType</code>, follow the SSML format for the input text.
   *     </p>
   * @public
   */
  Text: string | undefined;

  /**
   * <p> Specifies whether the input text is plain text or SSML. The
   *       default value is plain text. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/ssml.html">Using
   *         SSML</a>.</p>
   * @public
   */
  TextType?: TextType | undefined;

  /**
   * <p>The voice ID to use for the synthesis. You can get a list of available
   *       voice IDs by calling the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a> operation. To use a custom voice, specify the
   *       voice ID that <code>CreateVoice</code> returned, for example,
   *       <code>vc-9a8fa85dd3</code>. You can't specify the ARN of a voice.</p>
   * @public
   */
  VoiceId: VoiceId | undefined;
}

/**
 * @public
 */
export interface SynthesizeSpeechOutput {
  /**
   * <p> Stream containing the synthesized speech. </p>
   * @public
   */
  AudioStream?: StreamingBlobTypes | undefined;

  /**
   * <p> Specifies the type audio stream. This should reflect the
   *         <code>OutputFormat</code> parameter in your request. </p>
   *          <ul>
   *             <li>
   *                <p> If you request <code>mp3</code> as the
   *             <code>OutputFormat</code>, the <code>ContentType</code> returned is
   *           audio/mpeg. </p>
   *             </li>
   *             <li>
   *                <p> If you request <code>ogg_vorbis</code> as the
   *             <code>OutputFormat</code>, the <code>ContentType</code> returned is
   *           audio/ogg. </p>
   *             </li>
   *             <li>
   *                <p> If you request <code>ogg_opus</code> as the
   *             <code>OutputFormat</code>, the <code>ContentType</code> returned is
   *           audio/ogg. </p>
   *             </li>
   *             <li>
   *                <p> If you request <code>pcm</code> as the
   *             <code>OutputFormat</code>, the <code>ContentType</code> returned is
   *           audio/pcm in a signed 16-bit, 1 channel (mono), little-endian format.
   *         </p>
   *             </li>
   *             <li>
   *                <p> If you request <code>mu-law</code> as the
   *             <code>OutputFormat</code>, the <code>ContentType</code> returned is
   *           audio/mulaw.
   *         </p>
   *             </li>
   *             <li>
   *                <p> If you request <code>a-law</code> as the
   *             <code>OutputFormat</code>, the <code>ContentType</code> returned is
   *           audio/alaw.
   *         </p>
   *             </li>
   *             <li>
   *                <p>If you request <code>json</code> as the
   *             <code>OutputFormat</code>, the <code>ContentType</code> returned is
   *           application/x-json-stream.</p>
   *             </li>
   *          </ul>
   *          <p> </p>
   * @public
   */
  ContentType?: string | undefined;

  /**
   * <p>Number of characters synthesized.</p>
   * @public
   */
  RequestCharacters?: number | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to add tags to. You
   *       can tag Amazon Polly lexicons and custom voices.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource, as key-value pairs. Tag keys can have
   *       a maximum character length of 128 characters, and tag values can have a
   *       maximum length of 256 characters.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to remove tags from.
   *       You can tag Amazon Polly lexicons and custom voices.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The keys of the tags to be removed.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}
