import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
import { Readable } from "stream";

export interface DeleteLexiconInput {
  __type?: "DeleteLexiconInput";
  /**
   * <p>The name of the lexicon to delete.
   *       Must be an existing lexicon in the region.</p>
   */
  Name: string | undefined;
}

export namespace DeleteLexiconInput {
  export const filterSensitiveLog = (obj: DeleteLexiconInput): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is DeleteLexiconInput => __isa(o, "DeleteLexiconInput");
}

export interface DeleteLexiconOutput {
  __type?: "DeleteLexiconOutput";
}

export namespace DeleteLexiconOutput {
  export const filterSensitiveLog = (obj: DeleteLexiconOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteLexiconOutput => __isa(o, "DeleteLexiconOutput");
}

export interface DescribeVoicesInput {
  __type?: "DescribeVoicesInput";
  /**
   * <p>Specifies the engine (<code>standard</code> or <code>neural</code>) used by Amazon Polly when processing input text for speech synthesis. </p>
   */
  Engine?: Engine | string;

  /**
   * <p>Boolean value indicating whether to return any bilingual voices that use the specified language as an additional language. For instance, if
   *     you request all languages that use US English (es-US), and there is an Italian voice that speaks both Italian (it-IT) and US English, that voice will
   *     be included if you specify <code>yes</code> but not if you specify <code>no</code>.</p>
   */
  IncludeAdditionalLanguageCodes?: boolean;

  /**
   * <p>
   *
   *       The language identification tag (ISO 639 code for the language name-ISO 3166 country code)
   *       for filtering the list of voices returned.
   *     If you don't specify this optional parameter, all available voices are returned.
   *     </p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>An opaque pagination token returned from the previous
   *     <code>DescribeVoices</code> operation. If present, this indicates where to
   *     continue the listing.</p>
   */
  NextToken?: string;
}

export namespace DescribeVoicesInput {
  export const filterSensitiveLog = (obj: DescribeVoicesInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeVoicesInput => __isa(o, "DescribeVoicesInput");
}

export interface DescribeVoicesOutput {
  __type?: "DescribeVoicesOutput";
  /**
   * <p>The pagination token to use in the next request to continue
   *     the listing of voices. <code>NextToken</code> is returned only if
   *     the response is truncated.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of voices with their properties.</p>
   */
  Voices?: Voice[];
}

export namespace DescribeVoicesOutput {
  export const filterSensitiveLog = (obj: DescribeVoicesOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeVoicesOutput => __isa(o, "DescribeVoicesOutput");
}

export enum Engine {
  NEURAL = "neural",
  STANDARD = "standard",
}

/**
 * <p>This engine is not compatible with the voice that you have designated. Choose a new voice that is compatible with the engine or change the engine
 *       and restart the operation.</p>
 */
export interface EngineNotSupportedException extends __SmithyException, $MetadataBearer {
  name: "EngineNotSupportedException";
  $fault: "client";
  message?: string;
}

export namespace EngineNotSupportedException {
  export const filterSensitiveLog = (obj: EngineNotSupportedException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EngineNotSupportedException => __isa(o, "EngineNotSupportedException");
}

export type Gender = "Female" | "Male";

export interface GetLexiconInput {
  __type?: "GetLexiconInput";
  /**
   * <p>Name of the lexicon.</p>
   */
  Name: string | undefined;
}

export namespace GetLexiconInput {
  export const filterSensitiveLog = (obj: GetLexiconInput): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is GetLexiconInput => __isa(o, "GetLexiconInput");
}

export interface GetLexiconOutput {
  __type?: "GetLexiconOutput";
  /**
   * <p>Lexicon object that provides name and the string content of the
   *     lexicon. </p>
   */
  Lexicon?: Lexicon;

  /**
   * <p>Metadata of the lexicon, including phonetic alphabetic used, language code,
   *     lexicon ARN, number of lexemes defined in the lexicon, and size of lexicon in bytes.</p>
   */
  LexiconAttributes?: LexiconAttributes;
}

export namespace GetLexiconOutput {
  export const filterSensitiveLog = (obj: GetLexiconOutput): any => ({
    ...obj,
    ...(obj.Lexicon && { Lexicon: Lexicon.filterSensitiveLog(obj.Lexicon) }),
  });
  export const isa = (o: any): o is GetLexiconOutput => __isa(o, "GetLexiconOutput");
}

export interface GetSpeechSynthesisTaskInput {
  __type?: "GetSpeechSynthesisTaskInput";
  /**
   * <p>The Amazon Polly generated identifier for a speech synthesis task.</p>
   */
  TaskId: string | undefined;
}

export namespace GetSpeechSynthesisTaskInput {
  export const filterSensitiveLog = (obj: GetSpeechSynthesisTaskInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetSpeechSynthesisTaskInput => __isa(o, "GetSpeechSynthesisTaskInput");
}

export interface GetSpeechSynthesisTaskOutput {
  __type?: "GetSpeechSynthesisTaskOutput";
  /**
   * <p>SynthesisTask object that provides information from the requested task,
   *       including output format, creation time, task status, and so on.</p>
   */
  SynthesisTask?: SynthesisTask;
}

export namespace GetSpeechSynthesisTaskOutput {
  export const filterSensitiveLog = (obj: GetSpeechSynthesisTaskOutput): any => ({
    ...obj,
    ...(obj.SynthesisTask && { SynthesisTask: SynthesisTask.filterSensitiveLog(obj.SynthesisTask) }),
  });
  export const isa = (o: any): o is GetSpeechSynthesisTaskOutput => __isa(o, "GetSpeechSynthesisTaskOutput");
}

/**
 * <p>Amazon Polly can't find the specified lexicon.
 *       Verify that the lexicon's name is spelled correctly, and then try again.</p>
 */
export interface InvalidLexiconException extends __SmithyException, $MetadataBearer {
  name: "InvalidLexiconException";
  $fault: "client";
  message?: string;
}

export namespace InvalidLexiconException {
  export const filterSensitiveLog = (obj: InvalidLexiconException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidLexiconException => __isa(o, "InvalidLexiconException");
}

/**
 * <p>The NextToken is invalid.
 *       Verify that it's spelled correctly, and then try again.</p>
 */
export interface InvalidNextTokenException extends __SmithyException, $MetadataBearer {
  name: "InvalidNextTokenException";
  $fault: "client";
  message?: string;
}

export namespace InvalidNextTokenException {
  export const filterSensitiveLog = (obj: InvalidNextTokenException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidNextTokenException => __isa(o, "InvalidNextTokenException");
}

/**
 * <p>The provided Amazon S3 bucket name is invalid. Please check your input with S3 bucket
 *       naming requirements and try again.</p>
 */
export interface InvalidS3BucketException extends __SmithyException, $MetadataBearer {
  name: "InvalidS3BucketException";
  $fault: "client";
  message?: string;
}

export namespace InvalidS3BucketException {
  export const filterSensitiveLog = (obj: InvalidS3BucketException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidS3BucketException => __isa(o, "InvalidS3BucketException");
}

/**
 * <p>The provided Amazon S3 key prefix is invalid. Please provide a valid S3 object key name.</p>
 */
export interface InvalidS3KeyException extends __SmithyException, $MetadataBearer {
  name: "InvalidS3KeyException";
  $fault: "client";
  message?: string;
}

export namespace InvalidS3KeyException {
  export const filterSensitiveLog = (obj: InvalidS3KeyException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidS3KeyException => __isa(o, "InvalidS3KeyException");
}

/**
 * <p>The specified sample rate is not valid.</p>
 */
export interface InvalidSampleRateException extends __SmithyException, $MetadataBearer {
  name: "InvalidSampleRateException";
  $fault: "client";
  message?: string;
}

export namespace InvalidSampleRateException {
  export const filterSensitiveLog = (obj: InvalidSampleRateException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidSampleRateException => __isa(o, "InvalidSampleRateException");
}

/**
 * <p>The provided SNS topic ARN is invalid. Please provide a valid SNS topic ARN and try again.</p>
 */
export interface InvalidSnsTopicArnException extends __SmithyException, $MetadataBearer {
  name: "InvalidSnsTopicArnException";
  $fault: "client";
  message?: string;
}

export namespace InvalidSnsTopicArnException {
  export const filterSensitiveLog = (obj: InvalidSnsTopicArnException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidSnsTopicArnException => __isa(o, "InvalidSnsTopicArnException");
}

/**
 * <p>The SSML you provided is invalid.
 *       Verify the SSML syntax, spelling of tags and values, and then try again.</p>
 */
export interface InvalidSsmlException extends __SmithyException, $MetadataBearer {
  name: "InvalidSsmlException";
  $fault: "client";
  message?: string;
}

export namespace InvalidSsmlException {
  export const filterSensitiveLog = (obj: InvalidSsmlException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidSsmlException => __isa(o, "InvalidSsmlException");
}

/**
 * <p>The provided Task ID is not valid. Please provide a valid Task ID and try again.</p>
 */
export interface InvalidTaskIdException extends __SmithyException, $MetadataBearer {
  name: "InvalidTaskIdException";
  $fault: "client";
  message?: string;
}

export namespace InvalidTaskIdException {
  export const filterSensitiveLog = (obj: InvalidTaskIdException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidTaskIdException => __isa(o, "InvalidTaskIdException");
}

export type LanguageCode =
  | "arb"
  | "cmn-CN"
  | "cy-GB"
  | "da-DK"
  | "de-DE"
  | "en-AU"
  | "en-GB"
  | "en-GB-WLS"
  | "en-IN"
  | "en-US"
  | "es-ES"
  | "es-MX"
  | "es-US"
  | "fr-CA"
  | "fr-FR"
  | "hi-IN"
  | "is-IS"
  | "it-IT"
  | "ja-JP"
  | "ko-KR"
  | "nb-NO"
  | "nl-NL"
  | "pl-PL"
  | "pt-BR"
  | "pt-PT"
  | "ro-RO"
  | "ru-RU"
  | "sv-SE"
  | "tr-TR";

/**
 * <p>The language specified is not currently supported by Amazon Polly in this capacity.</p>
 */
export interface LanguageNotSupportedException extends __SmithyException, $MetadataBearer {
  name: "LanguageNotSupportedException";
  $fault: "client";
  message?: string;
}

export namespace LanguageNotSupportedException {
  export const filterSensitiveLog = (obj: LanguageNotSupportedException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LanguageNotSupportedException => __isa(o, "LanguageNotSupportedException");
}

/**
 * <p>Provides lexicon name and lexicon content in string format.
 *       For more information, see <a href="https://www.w3.org/TR/pronunciation-lexicon/">Pronunciation Lexicon Specification (PLS) Version 1.0</a>.</p>
 */
export interface Lexicon {
  __type?: "Lexicon";
  /**
   * <p>Lexicon content in string format.
   *       The content of a lexicon must be in PLS format.</p>
   */
  Content?: string;

  /**
   * <p>Name of the lexicon.</p>
   */
  Name?: string;
}

export namespace Lexicon {
  export const filterSensitiveLog = (obj: Lexicon): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is Lexicon => __isa(o, "Lexicon");
}

/**
 * <p>Contains metadata describing the lexicon such as the number of lexemes, language code,
 *       and so on.
 *       For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.</p>
 */
export interface LexiconAttributes {
  __type?: "LexiconAttributes";
  /**
   * <p>Phonetic alphabet used in the lexicon.
   *       Valid values are <code>ipa</code> and <code>x-sampa</code>.</p>
   */
  Alphabet?: string;

  /**
   * <p>Language code that the lexicon applies to.
   *       A lexicon with a language code such as "en" would be
   *       applied to all English languages (en-GB, en-US, en-AUS,
   *       en-WLS, and so on.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>Date lexicon was last modified (a timestamp value).</p>
   */
  LastModified?: Date;

  /**
   * <p>Number of lexemes in the lexicon.</p>
   */
  LexemesCount?: number;

  /**
   * <p>Amazon Resource Name (ARN) of the lexicon.</p>
   */
  LexiconArn?: string;

  /**
   * <p>Total size of the lexicon, in characters.</p>
   */
  Size?: number;
}

export namespace LexiconAttributes {
  export const filterSensitiveLog = (obj: LexiconAttributes): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LexiconAttributes => __isa(o, "LexiconAttributes");
}

/**
 * <p>Describes the content of the lexicon.</p>
 */
export interface LexiconDescription {
  __type?: "LexiconDescription";
  /**
   * <p>Provides lexicon metadata.</p>
   */
  Attributes?: LexiconAttributes;

  /**
   * <p>Name of the lexicon.</p>
   */
  Name?: string;
}

export namespace LexiconDescription {
  export const filterSensitiveLog = (obj: LexiconDescription): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is LexiconDescription => __isa(o, "LexiconDescription");
}

/**
 * <p>Amazon Polly can't find the specified lexicon.
 *       This could be caused by a lexicon that is missing, its name is misspelled or specifying a lexicon
 *       that is in a different region.</p>
 *          <p>Verify that the lexicon exists, is in the region (see <a>ListLexicons</a>)
 *       and that you spelled its name is spelled correctly. Then try again.</p>
 */
export interface LexiconNotFoundException extends __SmithyException, $MetadataBearer {
  name: "LexiconNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace LexiconNotFoundException {
  export const filterSensitiveLog = (obj: LexiconNotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LexiconNotFoundException => __isa(o, "LexiconNotFoundException");
}

/**
 * <p>The maximum size of the specified lexicon would be exceeded by this operation.</p>
 */
export interface LexiconSizeExceededException extends __SmithyException, $MetadataBearer {
  name: "LexiconSizeExceededException";
  $fault: "client";
  message?: string;
}

export namespace LexiconSizeExceededException {
  export const filterSensitiveLog = (obj: LexiconSizeExceededException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LexiconSizeExceededException => __isa(o, "LexiconSizeExceededException");
}

export interface ListLexiconsInput {
  __type?: "ListLexiconsInput";
  /**
   * <p>An opaque pagination token returned from previous
   *       <code>ListLexicons</code> operation. If present, indicates where to
   *       continue the list of lexicons.</p>
   */
  NextToken?: string;
}

export namespace ListLexiconsInput {
  export const filterSensitiveLog = (obj: ListLexiconsInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListLexiconsInput => __isa(o, "ListLexiconsInput");
}

export interface ListLexiconsOutput {
  __type?: "ListLexiconsOutput";
  /**
   * <p>A list of lexicon names and attributes.</p>
   */
  Lexicons?: LexiconDescription[];

  /**
   * <p>The pagination token to use in the next request to continue
   *       the listing of lexicons. <code>NextToken</code> is returned only if
   *       the response is truncated.</p>
   */
  NextToken?: string;
}

export namespace ListLexiconsOutput {
  export const filterSensitiveLog = (obj: ListLexiconsOutput): any => ({
    ...obj,
    ...(obj.Lexicons && { Lexicons: obj.Lexicons.map((item) => LexiconDescription.filterSensitiveLog(item)) }),
  });
  export const isa = (o: any): o is ListLexiconsOutput => __isa(o, "ListLexiconsOutput");
}

export interface ListSpeechSynthesisTasksInput {
  __type?: "ListSpeechSynthesisTasksInput";
  /**
   * <p>Maximum number of speech synthesis tasks returned in a List operation.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token to use in the next request to continue the listing of speech synthesis
   *       tasks. </p>
   */
  NextToken?: string;

  /**
   * <p>Status of the speech synthesis tasks returned in a List operation</p>
   */
  Status?: TaskStatus | string;
}

export namespace ListSpeechSynthesisTasksInput {
  export const filterSensitiveLog = (obj: ListSpeechSynthesisTasksInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListSpeechSynthesisTasksInput => __isa(o, "ListSpeechSynthesisTasksInput");
}

export interface ListSpeechSynthesisTasksOutput {
  __type?: "ListSpeechSynthesisTasksOutput";
  /**
   * <p>An opaque pagination token returned from the previous List operation
   *       in this request. If present, this indicates where to continue the listing.</p>
   */
  NextToken?: string;

  /**
   * <p>List of SynthesisTask objects that provides information from the specified task in the list request,
   *       including output format, creation time, task status, and so on.</p>
   */
  SynthesisTasks?: SynthesisTask[];
}

export namespace ListSpeechSynthesisTasksOutput {
  export const filterSensitiveLog = (obj: ListSpeechSynthesisTasksOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListSpeechSynthesisTasksOutput => __isa(o, "ListSpeechSynthesisTasksOutput");
}

/**
 * <p>Speech marks are not supported for the <code>OutputFormat</code> selected.
 *       Speech marks are only available for content in <code>json</code> format.</p>
 */
export interface MarksNotSupportedForFormatException extends __SmithyException, $MetadataBearer {
  name: "MarksNotSupportedForFormatException";
  $fault: "client";
  message?: string;
}

export namespace MarksNotSupportedForFormatException {
  export const filterSensitiveLog = (obj: MarksNotSupportedForFormatException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MarksNotSupportedForFormatException =>
    __isa(o, "MarksNotSupportedForFormatException");
}

/**
 * <p>The maximum size of the lexeme would be exceeded by this operation.</p>
 */
export interface MaxLexemeLengthExceededException extends __SmithyException, $MetadataBearer {
  name: "MaxLexemeLengthExceededException";
  $fault: "client";
  message?: string;
}

export namespace MaxLexemeLengthExceededException {
  export const filterSensitiveLog = (obj: MaxLexemeLengthExceededException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MaxLexemeLengthExceededException => __isa(o, "MaxLexemeLengthExceededException");
}

/**
 * <p>The maximum number of lexicons would be exceeded by this operation.</p>
 */
export interface MaxLexiconsNumberExceededException extends __SmithyException, $MetadataBearer {
  name: "MaxLexiconsNumberExceededException";
  $fault: "client";
  message?: string;
}

export namespace MaxLexiconsNumberExceededException {
  export const filterSensitiveLog = (obj: MaxLexiconsNumberExceededException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MaxLexiconsNumberExceededException =>
    __isa(o, "MaxLexiconsNumberExceededException");
}

export enum OutputFormat {
  JSON = "json",
  MP3 = "mp3",
  OGG_VORBIS = "ogg_vorbis",
  PCM = "pcm",
}

export interface PutLexiconInput {
  __type?: "PutLexiconInput";
  /**
   * <p>Content of the PLS lexicon as string data.</p>
   */
  Content: string | undefined;

  /**
   * <p>Name of the lexicon. The name must follow the regular express format
   *       [0-9A-Za-z]{1,20}.
   *       That is, the name is a case-sensitive alphanumeric string up to 20 characters long.
   *     </p>
   */
  Name: string | undefined;
}

export namespace PutLexiconInput {
  export const filterSensitiveLog = (obj: PutLexiconInput): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is PutLexiconInput => __isa(o, "PutLexiconInput");
}

export interface PutLexiconOutput {
  __type?: "PutLexiconOutput";
}

export namespace PutLexiconOutput {
  export const filterSensitiveLog = (obj: PutLexiconOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutLexiconOutput => __isa(o, "PutLexiconOutput");
}

/**
 * <p>An unknown condition has caused a service failure.</p>
 */
export interface ServiceFailureException extends __SmithyException, $MetadataBearer {
  name: "ServiceFailureException";
  $fault: "server";
  message?: string;
}

export namespace ServiceFailureException {
  export const filterSensitiveLog = (obj: ServiceFailureException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ServiceFailureException => __isa(o, "ServiceFailureException");
}

export enum SpeechMarkType {
  SENTENCE = "sentence",
  SSML = "ssml",
  VISEME = "viseme",
  WORD = "word",
}

/**
 * <p>SSML speech marks are not supported for plain text-type input.</p>
 */
export interface SsmlMarksNotSupportedForTextTypeException extends __SmithyException, $MetadataBearer {
  name: "SsmlMarksNotSupportedForTextTypeException";
  $fault: "client";
  message?: string;
}

export namespace SsmlMarksNotSupportedForTextTypeException {
  export const filterSensitiveLog = (obj: SsmlMarksNotSupportedForTextTypeException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SsmlMarksNotSupportedForTextTypeException =>
    __isa(o, "SsmlMarksNotSupportedForTextTypeException");
}

export interface StartSpeechSynthesisTaskInput {
  __type?: "StartSpeechSynthesisTaskInput";
  /**
   * <p>Specifies the engine (<code>standard</code> or <code>neural</code>) for Amazon Polly to use when processing input text for speech synthesis. Using a voice that is not supported for the engine
   *       selected will result in an error.</p>
   */
  Engine?: Engine | string;

  /**
   * <p>Optional language code for the Speech Synthesis request. This is only necessary if using a bilingual voice,
   *       such as Aditi, which can be used for either Indian English (en-IN) or Hindi (hi-IN). </p>
   *          <p>If a bilingual voice is used and no language code is specified, Amazon Polly will use the default language of the bilingual voice.
   *         The default language for any voice is the one returned by the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a>
   *         operation for the <code>LanguageCode</code> parameter. For example, if no language code is specified, Aditi will use Indian English rather than Hindi.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>List of one or more pronunciation lexicon names you want the service
   *       to apply during synthesis. Lexicons are applied only if the language
   *       of the lexicon is the same as the language of the voice. </p>
   */
  LexiconNames?: string[];

  /**
   * <p>The format in which the returned output will be encoded. For
   *       audio stream, this will be mp3, ogg_vorbis, or pcm. For speech
   *       marks, this will be json. </p>
   */
  OutputFormat: OutputFormat | string | undefined;

  /**
   * <p>Amazon S3 bucket name to which the output file will be saved.</p>
   */
  OutputS3BucketName: string | undefined;

  /**
   * <p>The Amazon S3 key prefix for the output speech file.</p>
   */
  OutputS3KeyPrefix?: string;

  /**
   * <p>The audio frequency specified in Hz.</p>
   *          <p>The valid values for mp3 and ogg_vorbis are "8000", "16000", "22050", and "24000". The
   *       default value for standard voices is "22050". The default value for neural voices is "24000".</p>
   *          <p>Valid values for pcm are "8000" and "16000" The default value is "16000". </p>
   */
  SampleRate?: string;

  /**
   * <p>ARN for the SNS topic optionally used for providing status notification for a speech synthesis task.</p>
   */
  SnsTopicArn?: string;

  /**
   * <p>The type of speech marks returned for the input text.</p>
   */
  SpeechMarkTypes?: (SpeechMarkType | string)[];

  /**
   * <p>The input text to synthesize. If you specify
   *       ssml as the TextType, follow the SSML format for the input text. </p>
   */
  Text: string | undefined;

  /**
   * <p>Specifies whether the input text is plain text or SSML. The default value is plain text. </p>
   */
  TextType?: TextType | string;

  /**
   * <p>Voice ID to use for the synthesis. </p>
   */
  VoiceId: VoiceId | string | undefined;
}

export namespace StartSpeechSynthesisTaskInput {
  export const filterSensitiveLog = (obj: StartSpeechSynthesisTaskInput): any => ({
    ...obj,
    ...(obj.LexiconNames && { LexiconNames: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is StartSpeechSynthesisTaskInput => __isa(o, "StartSpeechSynthesisTaskInput");
}

export interface StartSpeechSynthesisTaskOutput {
  __type?: "StartSpeechSynthesisTaskOutput";
  /**
   * <p>SynthesisTask object that provides information and attributes about a newly submitted speech synthesis task.</p>
   */
  SynthesisTask?: SynthesisTask;
}

export namespace StartSpeechSynthesisTaskOutput {
  export const filterSensitiveLog = (obj: StartSpeechSynthesisTaskOutput): any => ({
    ...obj,
    ...(obj.SynthesisTask && { SynthesisTask: SynthesisTask.filterSensitiveLog(obj.SynthesisTask) }),
  });
  export const isa = (o: any): o is StartSpeechSynthesisTaskOutput => __isa(o, "StartSpeechSynthesisTaskOutput");
}

/**
 * <p>SynthesisTask object that provides information about a speech synthesis task.</p>
 */
export interface SynthesisTask {
  __type?: "SynthesisTask";
  /**
   * <p>Timestamp for the time the synthesis task was started.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Specifies the engine (<code>standard</code> or <code>neural</code>) for Amazon Polly to use when processing input text for speech synthesis. Using a voice that is not supported for the engine
   *       selected will result in an error.</p>
   */
  Engine?: Engine | string;

  /**
   * <p>Optional language code for a synthesis task. This is only necessary if using a bilingual voice, such as
   *       Aditi, which can be used for either Indian English (en-IN) or Hindi (hi-IN). </p>
   *          <p>If a bilingual voice is used and no language code is specified, Amazon Polly will use the default language
   *         of the bilingual voice. The default language for any voice is the one returned by the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a>
   *         operation for the <code>LanguageCode</code> parameter. For example, if no language code is specified, Aditi will use Indian English rather
   *       than Hindi.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>List of one or more pronunciation lexicon names you want the service
   *       to apply during synthesis. Lexicons are applied only if the language
   *       of the lexicon is the same as the language of the voice. </p>
   */
  LexiconNames?: string[];

  /**
   * <p>The format in which the returned output will be encoded. For
   *       audio stream, this will be mp3, ogg_vorbis, or pcm. For speech
   *       marks, this will be json. </p>
   */
  OutputFormat?: OutputFormat | string;

  /**
   * <p>Pathway for the output speech file.</p>
   */
  OutputUri?: string;

  /**
   * <p>Number of billable characters synthesized.</p>
   */
  RequestCharacters?: number;

  /**
   * <p>The audio frequency specified in Hz.</p>
   *          <p>The valid values for mp3 and ogg_vorbis are "8000", "16000", "22050", and "24000". The
   *       default value for standard voices is "22050". The default value for neural voices is "24000".</p>
   *          <p>Valid values for pcm are "8000" and "16000" The default value is "16000". </p>
   */
  SampleRate?: string;

  /**
   * <p>ARN for the SNS topic optionally used for providing status notification for a speech synthesis task.</p>
   */
  SnsTopicArn?: string;

  /**
   * <p>The type of speech marks returned for the input text.</p>
   */
  SpeechMarkTypes?: (SpeechMarkType | string)[];

  /**
   * <p>The Amazon Polly generated identifier for a speech synthesis task.</p>
   */
  TaskId?: string;

  /**
   * <p>Current status of the individual speech synthesis task.</p>
   */
  TaskStatus?: TaskStatus | string;

  /**
   * <p>Reason for the current status of a specific speech synthesis task, including
   *       errors if the task has failed.</p>
   */
  TaskStatusReason?: string;

  /**
   * <p>Specifies whether the input text is plain text or SSML. The default value is plain text. </p>
   */
  TextType?: TextType | string;

  /**
   * <p>Voice ID to use for the synthesis. </p>
   */
  VoiceId?: VoiceId | string;
}

export namespace SynthesisTask {
  export const filterSensitiveLog = (obj: SynthesisTask): any => ({
    ...obj,
    ...(obj.LexiconNames && { LexiconNames: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is SynthesisTask => __isa(o, "SynthesisTask");
}

/**
 * <p>The Speech Synthesis task with requested Task ID cannot be found.</p>
 */
export interface SynthesisTaskNotFoundException extends __SmithyException, $MetadataBearer {
  name: "SynthesisTaskNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace SynthesisTaskNotFoundException {
  export const filterSensitiveLog = (obj: SynthesisTaskNotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SynthesisTaskNotFoundException => __isa(o, "SynthesisTaskNotFoundException");
}

export interface SynthesizeSpeechInput {
  __type?: "SynthesizeSpeechInput";
  /**
   * <p>Specifies the engine (<code>standard</code> or <code>neural</code>) for Amazon Polly to use when processing input text for speech synthesis. Using a voice that is not supported for the engine
   *       selected will result in an error.</p>
   */
  Engine?: Engine | string;

  /**
   * <p>Optional language code for the Synthesize Speech request. This is only necessary if using a bilingual voice,
   *       such as Aditi, which can be used for either Indian English (en-IN) or Hindi (hi-IN). </p>
   *          <p>If a bilingual voice is used and no language code is specified, Amazon Polly will use the default language
   *         of the bilingual voice. The default language for any voice is the one returned by the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a>
   *         operation for the <code>LanguageCode</code> parameter. For example, if no language code is specified, Aditi will use Indian English rather than
   *       Hindi.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>List of one or more pronunciation lexicon names you want the service to apply
   *       during synthesis. Lexicons are applied only if the language of the lexicon is the same
   *       as the language of the voice. For information about storing lexicons,
   *       see <a href="https://docs.aws.amazon.com/polly/latest/dg/API_PutLexicon.html">PutLexicon</a>.</p>
   */
  LexiconNames?: string[];

  /**
   * <p>
   *       The format in which the returned output will be encoded. For audio stream, this will be mp3, ogg_vorbis, or pcm.
   *       For speech marks, this will be json.  </p>
   *          <p>When pcm is used, the content returned is audio/pcm in a signed 16-bit, 1 channel (mono), little-endian format. </p>
   */
  OutputFormat: OutputFormat | string | undefined;

  /**
   * <p>The audio frequency specified in Hz.</p>
   *          <p>The valid values for mp3 and ogg_vorbis are "8000", "16000", "22050", and "24000". The
   *       default value for standard voices is "22050". The default value for neural voices is "24000".</p>
   *          <p>Valid values for pcm are "8000" and "16000" The default value is "16000". </p>
   */
  SampleRate?: string;

  /**
   * <p>The type of speech marks returned for the input text.</p>
   */
  SpeechMarkTypes?: (SpeechMarkType | string)[];

  /**
   * <p>
   *       Input text to synthesize. If you specify
   *       <code>ssml</code> as the <code>TextType</code>, follow the SSML format for the
   *       input text.
   *     </p>
   */
  Text: string | undefined;

  /**
   * <p>
   *       Specifies whether the input text is plain text or SSML. The default value is plain text.
   *       For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/ssml.html">Using SSML</a>.</p>
   */
  TextType?: TextType | string;

  /**
   * <p>
   *       Voice ID to use for the synthesis. You can get a list of
   *       available voice IDs by calling the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a> operation.
   *     </p>
   */
  VoiceId: VoiceId | string | undefined;
}

export namespace SynthesizeSpeechInput {
  export const filterSensitiveLog = (obj: SynthesizeSpeechInput): any => ({
    ...obj,
    ...(obj.LexiconNames && { LexiconNames: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is SynthesizeSpeechInput => __isa(o, "SynthesizeSpeechInput");
}

export interface SynthesizeSpeechOutput {
  __type?: "SynthesizeSpeechOutput";
  /**
   * <p>
   *       Stream containing the synthesized speech.
   *     </p>
   */
  AudioStream?: Readable | ReadableStream | Blob;

  /**
   * <p>
   *       Specifies the type audio stream. This should reflect the
   *       <code>OutputFormat</code> parameter in your request.
   *     </p>
   *          <ul>
   *             <li>
   *                <p>
   *           If you request <code>mp3</code> as the <code>OutputFormat</code>,
   *           the <code>ContentType</code> returned is audio/mpeg.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           If you request <code>ogg_vorbis</code> as the <code>OutputFormat</code>,
   *           the <code>ContentType</code> returned is audio/ogg.
   *         </p>
   *             </li>
   *             <li>
   *                <p> If you request <code>pcm</code> as the <code>OutputFormat</code>, the
   *             <code>ContentType</code> returned is audio/pcm   in a signed 16-bit, 1 channel (mono),
   *           little-endian format. </p>
   *             </li>
   *             <li>
   *                <p>If you request <code>json</code> as the <code>OutputFormat</code>, the <code>ContentType</code>
   *           returned is audio/json.</p>
   *             </li>
   *          </ul>
   *          <p>
   *
   *     </p>
   */
  ContentType?: string;

  /**
   * <p>Number of characters synthesized.</p>
   */
  RequestCharacters?: number;
}

export namespace SynthesizeSpeechOutput {
  export const filterSensitiveLog = (obj: SynthesizeSpeechOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SynthesizeSpeechOutput => __isa(o, "SynthesizeSpeechOutput");
}

export enum TaskStatus {
  COMPLETED = "completed",
  FAILED = "failed",
  IN_PROGRESS = "inProgress",
  SCHEDULED = "scheduled",
}

/**
 * <p>The value of the "Text" parameter is longer than the accepted limits. For the <code>SynthesizeSpeech</code> API, the limit for
 *       input text is a maximum of 6000 characters total, of which no more than 3000 can be billed characters. For the <code>StartSpeechSynthesisTask</code> API, the maximum
 *       is 200,000 characters, of which no more than 100,000 can be billed characters.
 *       SSML tags are not counted as billed characters.</p>
 */
export interface TextLengthExceededException extends __SmithyException, $MetadataBearer {
  name: "TextLengthExceededException";
  $fault: "client";
  message?: string;
}

export namespace TextLengthExceededException {
  export const filterSensitiveLog = (obj: TextLengthExceededException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TextLengthExceededException => __isa(o, "TextLengthExceededException");
}

export enum TextType {
  SSML = "ssml",
  TEXT = "text",
}

/**
 * <p>The alphabet specified by the lexicon is not a supported alphabet.
 *       Valid values are <code>x-sampa</code> and <code>ipa</code>.</p>
 */
export interface UnsupportedPlsAlphabetException extends __SmithyException, $MetadataBearer {
  name: "UnsupportedPlsAlphabetException";
  $fault: "client";
  message?: string;
}

export namespace UnsupportedPlsAlphabetException {
  export const filterSensitiveLog = (obj: UnsupportedPlsAlphabetException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UnsupportedPlsAlphabetException => __isa(o, "UnsupportedPlsAlphabetException");
}

/**
 * <p>The language specified in the lexicon is unsupported. For a list of
 *       supported languages, see <a href="https://docs.aws.amazon.com/polly/latest/dg/API_LexiconAttributes.html">Lexicon Attributes</a>.</p>
 */
export interface UnsupportedPlsLanguageException extends __SmithyException, $MetadataBearer {
  name: "UnsupportedPlsLanguageException";
  $fault: "client";
  message?: string;
}

export namespace UnsupportedPlsLanguageException {
  export const filterSensitiveLog = (obj: UnsupportedPlsLanguageException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UnsupportedPlsLanguageException => __isa(o, "UnsupportedPlsLanguageException");
}

/**
 * <p>Description of the voice.</p>
 */
export interface Voice {
  __type?: "Voice";
  /**
   * <p>Additional codes for languages available for the specified voice in addition to its default language. </p>
   *          <p>For example, the default language for Aditi is Indian English (en-IN) because it was first used for that language. Since
   *     Aditi is bilingual and fluent in both Indian English and Hindi, this parameter would show the code <code>hi-IN</code>.</p>
   */
  AdditionalLanguageCodes?: (LanguageCode | string)[];

  /**
   * <p>Gender of the voice.</p>
   */
  Gender?: Gender | string;

  /**
   * <p>Amazon Polly assigned voice ID. This is the ID that you specify
   *     when calling the <code>SynthesizeSpeech</code> operation.</p>
   */
  Id?: VoiceId | string;

  /**
   * <p>Language code of the voice.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>Human readable name of the language in English.</p>
   */
  LanguageName?: string;

  /**
   * <p>Name of the voice (for example, Salli, Kendra, etc.).
   *       This provides a human readable voice name that you might display
   *     in your application.</p>
   */
  Name?: string;

  /**
   * <p>Specifies which engines (<code>standard</code> or <code>neural</code>) that are supported by a given voice.</p>
   */
  SupportedEngines?: (Engine | string)[];
}

export namespace Voice {
  export const filterSensitiveLog = (obj: Voice): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Voice => __isa(o, "Voice");
}

export type VoiceId =
  | "Aditi"
  | "Amy"
  | "Astrid"
  | "Bianca"
  | "Brian"
  | "Camila"
  | "Carla"
  | "Carmen"
  | "Celine"
  | "Chantal"
  | "Conchita"
  | "Cristiano"
  | "Dora"
  | "Emma"
  | "Enrique"
  | "Ewa"
  | "Filiz"
  | "Geraint"
  | "Giorgio"
  | "Gwyneth"
  | "Hans"
  | "Ines"
  | "Ivy"
  | "Jacek"
  | "Jan"
  | "Joanna"
  | "Joey"
  | "Justin"
  | "Karl"
  | "Kendra"
  | "Kimberly"
  | "Lea"
  | "Liv"
  | "Lotte"
  | "Lucia"
  | "Lupe"
  | "Mads"
  | "Maja"
  | "Marlene"
  | "Mathieu"
  | "Matthew"
  | "Maxim"
  | "Mia"
  | "Miguel"
  | "Mizuki"
  | "Naja"
  | "Nicole"
  | "Penelope"
  | "Raveena"
  | "Ricardo"
  | "Ruben"
  | "Russell"
  | "Salli"
  | "Seoyeon"
  | "Takumi"
  | "Tatyana"
  | "Vicki"
  | "Vitoria"
  | "Zeina"
  | "Zhiyu";
