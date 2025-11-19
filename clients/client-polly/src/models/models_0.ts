// smithy-typescript generated code
import { StreamingBlobTypes } from "@smithy/types";

import { Engine, Gender, LanguageCode, OutputFormat, SpeechMarkType, TaskStatus, TextType, VoiceId } from "./enums";

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
 * <p>Description of the voice.</p>
 * @public
 */
export interface Voice {
  /**
   * <p>Gender of the voice.</p>
   * @public
   */
  Gender?: Gender | undefined;

  /**
   * <p>Amazon Polly assigned voice ID. This is the ID that you specify when
   *       calling the <code>SynthesizeSpeech</code> operation.</p>
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
   * <p>Name of the voice (for example, Salli, Kendra, etc.). This provides
   *       a human readable voice name that you might display in your
   *       application.</p>
   * @public
   */
  Name?: string | undefined;

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
   *         <code>ipa</code> and <code>x-sampa</code>.</p>
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
   *       stream, this will be mp3, ogg_vorbis, or pcm. For speech marks, this will
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
export interface PutLexiconInput {
  /**
   * <p>Name of the lexicon. The name must follow the regular express
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
}

/**
 * @public
 */
export interface PutLexiconOutput {}

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
   *       stream, this will be mp3, ogg_vorbis, or pcm. For speech marks, this will
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
   * <p>Voice ID to use for the synthesis. </p>
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
   *       stream, this will be mp3, ogg_vorbis, or pcm. For speech marks, this will
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
   * <p> Voice ID to use for the synthesis. You can get a list of available
   *       voice IDs by calling the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a> operation. </p>
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
   *                <p> If you request <code>pcm</code> as the
   *             <code>OutputFormat</code>, the <code>ContentType</code> returned is
   *           audio/pcm in a signed 16-bit, 1 channel (mono), little-endian format.
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
