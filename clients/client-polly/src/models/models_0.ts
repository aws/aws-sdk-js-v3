// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { Readable } from "stream";

import { PollyServiceException as __BaseException } from "./PollyServiceException";

export interface DeleteLexiconInput {
  /**
   * <p>The name of the lexicon to delete. Must be an existing lexicon in
   *       the region.</p>
   */
  Name: string | undefined;
}

export interface DeleteLexiconOutput {}

/**
 * <p>Amazon Polly can't find the specified lexicon. This could be caused by a
 *       lexicon that is missing, its name is misspelled or specifying a lexicon
 *       that is in a different region.</p>
 *          <p>Verify that the lexicon exists, is in the region (see <a>ListLexicons</a>) and that you spelled its name is spelled
 *       correctly. Then try again.</p>
 */
export class LexiconNotFoundException extends __BaseException {
  readonly name: "LexiconNotFoundException" = "LexiconNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LexiconNotFoundException, __BaseException>) {
    super({
      name: "LexiconNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LexiconNotFoundException.prototype);
  }
}

/**
 * <p>An unknown condition has caused a service failure.</p>
 */
export class ServiceFailureException extends __BaseException {
  readonly name: "ServiceFailureException" = "ServiceFailureException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceFailureException, __BaseException>) {
    super({
      name: "ServiceFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceFailureException.prototype);
  }
}

export enum Engine {
  NEURAL = "neural",
  STANDARD = "standard",
}

export enum LanguageCode {
  ar_AE = "ar-AE",
  arb = "arb",
  ca_ES = "ca-ES",
  cmn_CN = "cmn-CN",
  cy_GB = "cy-GB",
  da_DK = "da-DK",
  de_AT = "de-AT",
  de_DE = "de-DE",
  en_AU = "en-AU",
  en_GB = "en-GB",
  en_GB_WLS = "en-GB-WLS",
  en_IN = "en-IN",
  en_NZ = "en-NZ",
  en_US = "en-US",
  en_ZA = "en-ZA",
  es_ES = "es-ES",
  es_MX = "es-MX",
  es_US = "es-US",
  fi_FI = "fi-FI",
  fr_CA = "fr-CA",
  fr_FR = "fr-FR",
  hi_IN = "hi-IN",
  is_IS = "is-IS",
  it_IT = "it-IT",
  ja_JP = "ja-JP",
  ko_KR = "ko-KR",
  nb_NO = "nb-NO",
  nl_NL = "nl-NL",
  pl_PL = "pl-PL",
  pt_BR = "pt-BR",
  pt_PT = "pt-PT",
  ro_RO = "ro-RO",
  ru_RU = "ru-RU",
  sv_SE = "sv-SE",
  tr_TR = "tr-TR",
  yue_CN = "yue-CN",
}

export interface DescribeVoicesInput {
  /**
   * <p>Specifies the engine (<code>standard</code> or <code>neural</code>)
   *       used by Amazon Polly when processing input text for speech synthesis. </p>
   */
  Engine?: Engine | string;

  /**
   * <p> The language identification tag (ISO 639 code for the language
   *       name-ISO 3166 country code) for filtering the list of voices returned. If
   *       you don't specify this optional parameter, all available voices are
   *       returned. </p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>Boolean value indicating whether to return any bilingual voices that
   *       use the specified language as an additional language. For instance, if you
   *       request all languages that use US English (es-US), and there is an Italian
   *       voice that speaks both Italian (it-IT) and US English, that voice will be
   *       included if you specify <code>yes</code> but not if you specify
   *         <code>no</code>.</p>
   */
  IncludeAdditionalLanguageCodes?: boolean;

  /**
   * <p>An opaque pagination token returned from the previous
   *         <code>DescribeVoices</code> operation. If present, this indicates where
   *       to continue the listing.</p>
   */
  NextToken?: string;
}

export enum Gender {
  Female = "Female",
  Male = "Male",
}

export enum VoiceId {
  Aditi = "Aditi",
  Adriano = "Adriano",
  Amy = "Amy",
  Andres = "Andres",
  Aria = "Aria",
  Arlet = "Arlet",
  Arthur = "Arthur",
  Astrid = "Astrid",
  Ayanda = "Ayanda",
  Bianca = "Bianca",
  Brian = "Brian",
  Camila = "Camila",
  Carla = "Carla",
  Carmen = "Carmen",
  Celine = "Celine",
  Chantal = "Chantal",
  Conchita = "Conchita",
  Cristiano = "Cristiano",
  Daniel = "Daniel",
  Dora = "Dora",
  Elin = "Elin",
  Emma = "Emma",
  Enrique = "Enrique",
  Ewa = "Ewa",
  Filiz = "Filiz",
  Gabrielle = "Gabrielle",
  Geraint = "Geraint",
  Giorgio = "Giorgio",
  Gwyneth = "Gwyneth",
  Hala = "Hala",
  Hannah = "Hannah",
  Hans = "Hans",
  Hiujin = "Hiujin",
  Ida = "Ida",
  Ines = "Ines",
  Ivy = "Ivy",
  Jacek = "Jacek",
  Jan = "Jan",
  Joanna = "Joanna",
  Joey = "Joey",
  Justin = "Justin",
  Kajal = "Kajal",
  Karl = "Karl",
  Kendra = "Kendra",
  Kevin = "Kevin",
  Kimberly = "Kimberly",
  Laura = "Laura",
  Lea = "Lea",
  Liam = "Liam",
  Liv = "Liv",
  Lotte = "Lotte",
  Lucia = "Lucia",
  Lupe = "Lupe",
  Mads = "Mads",
  Maja = "Maja",
  Marlene = "Marlene",
  Mathieu = "Mathieu",
  Matthew = "Matthew",
  Maxim = "Maxim",
  Mia = "Mia",
  Miguel = "Miguel",
  Mizuki = "Mizuki",
  Naja = "Naja",
  Nicole = "Nicole",
  Ola = "Ola",
  Olivia = "Olivia",
  Pedro = "Pedro",
  Penelope = "Penelope",
  Raveena = "Raveena",
  Remi = "Remi",
  Ricardo = "Ricardo",
  Ruben = "Ruben",
  Russell = "Russell",
  Salli = "Salli",
  Seoyeon = "Seoyeon",
  Sergio = "Sergio",
  Suvi = "Suvi",
  Takumi = "Takumi",
  Tatyana = "Tatyana",
  Thiago = "Thiago",
  Vicki = "Vicki",
  Vitoria = "Vitoria",
  Zeina = "Zeina",
  Zhiyu = "Zhiyu",
}

/**
 * <p>Description of the voice.</p>
 */
export interface Voice {
  /**
   * <p>Gender of the voice.</p>
   */
  Gender?: Gender | string;

  /**
   * <p>Amazon Polly assigned voice ID. This is the ID that you specify when
   *       calling the <code>SynthesizeSpeech</code> operation.</p>
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
   * <p>Name of the voice (for example, Salli, Kendra, etc.). This provides
   *       a human readable voice name that you might display in your
   *       application.</p>
   */
  Name?: string;

  /**
   * <p>Additional codes for languages available for the specified voice in
   *       addition to its default language. </p>
   *          <p>For example, the default language for Aditi is Indian English (en-IN)
   *       because it was first used for that language. Since Aditi is bilingual and
   *       fluent in both Indian English and Hindi, this parameter would show the
   *       code <code>hi-IN</code>.</p>
   */
  AdditionalLanguageCodes?: (LanguageCode | string)[];

  /**
   * <p>Specifies which engines (<code>standard</code> or <code>neural</code>)
   *       that are supported by a given voice.</p>
   */
  SupportedEngines?: (Engine | string)[];
}

export interface DescribeVoicesOutput {
  /**
   * <p>A list of voices with their properties.</p>
   */
  Voices?: Voice[];

  /**
   * <p>The pagination token to use in the next request to continue the
   *       listing of voices. <code>NextToken</code> is returned only if the response
   *       is truncated.</p>
   */
  NextToken?: string;
}

/**
 * <p>The NextToken is invalid. Verify that it's spelled correctly, and
 *       then try again.</p>
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name: "InvalidNextTokenException" = "InvalidNextTokenException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNextTokenException, __BaseException>) {
    super({
      name: "InvalidNextTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextTokenException.prototype);
  }
}

/**
 * <p>This engine is not compatible with the voice that you have designated.
 *       Choose a new voice that is compatible with the engine or change the engine
 *       and restart the operation.</p>
 */
export class EngineNotSupportedException extends __BaseException {
  readonly name: "EngineNotSupportedException" = "EngineNotSupportedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EngineNotSupportedException, __BaseException>) {
    super({
      name: "EngineNotSupportedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EngineNotSupportedException.prototype);
  }
}

export interface GetLexiconInput {
  /**
   * <p>Name of the lexicon.</p>
   */
  Name: string | undefined;
}

/**
 * <p>Provides lexicon name and lexicon content in string format. For
 *       more information, see <a href="https://www.w3.org/TR/pronunciation-lexicon/">Pronunciation Lexicon
 *         Specification (PLS) Version 1.0</a>.</p>
 */
export interface Lexicon {
  /**
   * <p>Lexicon content in string format. The content of a lexicon must be
   *       in PLS format.</p>
   */
  Content?: string;

  /**
   * <p>Name of the lexicon.</p>
   */
  Name?: string;
}

/**
 * <p>Contains metadata describing the lexicon such as the number of
 *       lexemes, language code, and so on. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.</p>
 */
export interface LexiconAttributes {
  /**
   * <p>Phonetic alphabet used in the lexicon. Valid values are
   *         <code>ipa</code> and <code>x-sampa</code>.</p>
   */
  Alphabet?: string;

  /**
   * <p>Language code that the lexicon applies to. A lexicon with a
   *       language code such as "en" would be applied to all English languages
   *       (en-GB, en-US, en-AUS, en-WLS, and so on.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>Date lexicon was last modified (a timestamp value).</p>
   */
  LastModified?: Date;

  /**
   * <p>Amazon Resource Name (ARN) of the lexicon.</p>
   */
  LexiconArn?: string;

  /**
   * <p>Number of lexemes in the lexicon.</p>
   */
  LexemesCount?: number;

  /**
   * <p>Total size of the lexicon, in characters.</p>
   */
  Size?: number;
}

export interface GetLexiconOutput {
  /**
   * <p>Lexicon object that provides name and the string content of the
   *       lexicon. </p>
   */
  Lexicon?: Lexicon;

  /**
   * <p>Metadata of the lexicon, including phonetic alphabetic used,
   *       language code, lexicon ARN, number of lexemes defined in the lexicon, and
   *       size of lexicon in bytes.</p>
   */
  LexiconAttributes?: LexiconAttributes;
}

export interface GetSpeechSynthesisTaskInput {
  /**
   * <p>The Amazon Polly generated identifier for a speech synthesis task.</p>
   */
  TaskId: string | undefined;
}

export enum OutputFormat {
  JSON = "json",
  MP3 = "mp3",
  OGG_VORBIS = "ogg_vorbis",
  PCM = "pcm",
}

export enum SpeechMarkType {
  SENTENCE = "sentence",
  SSML = "ssml",
  VISEME = "viseme",
  WORD = "word",
}

export enum TaskStatus {
  COMPLETED = "completed",
  FAILED = "failed",
  IN_PROGRESS = "inProgress",
  SCHEDULED = "scheduled",
}

export enum TextType {
  SSML = "ssml",
  TEXT = "text",
}

/**
 * <p>SynthesisTask object that provides information about a speech
 *       synthesis task.</p>
 */
export interface SynthesisTask {
  /**
   * <p>Specifies the engine (<code>standard</code> or <code>neural</code>)
   *       for Amazon Polly to use when processing input text for speech synthesis. Using a
   *       voice that is not supported for the engine selected will result in an
   *       error.</p>
   */
  Engine?: Engine | string;

  /**
   * <p>The Amazon Polly generated identifier for a speech synthesis task.</p>
   */
  TaskId?: string;

  /**
   * <p>Current status of the individual speech synthesis task.</p>
   */
  TaskStatus?: TaskStatus | string;

  /**
   * <p>Reason for the current status of a specific speech synthesis task,
   *       including errors if the task has failed.</p>
   */
  TaskStatusReason?: string;

  /**
   * <p>Pathway for the output speech file.</p>
   */
  OutputUri?: string;

  /**
   * <p>Timestamp for the time the synthesis task was started.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Number of billable characters synthesized.</p>
   */
  RequestCharacters?: number;

  /**
   * <p>ARN for the SNS topic optionally used for providing status
   *       notification for a speech synthesis task.</p>
   */
  SnsTopicArn?: string;

  /**
   * <p>List of one or more pronunciation lexicon names you want the service
   *       to apply during synthesis. Lexicons are applied only if the language of
   *       the lexicon is the same as the language of the voice. </p>
   */
  LexiconNames?: string[];

  /**
   * <p>The format in which the returned output will be encoded. For audio
   *       stream, this will be mp3, ogg_vorbis, or pcm. For speech marks, this will
   *       be json. </p>
   */
  OutputFormat?: OutputFormat | string;

  /**
   * <p>The audio frequency specified in Hz.</p>
   *          <p>The valid values for mp3 and ogg_vorbis are "8000", "16000", "22050",
   *       and "24000". The default value for standard voices is "22050". The default
   *       value for neural voices is "24000".</p>
   *          <p>Valid values for pcm are "8000" and "16000" The default value is
   *       "16000". </p>
   */
  SampleRate?: string;

  /**
   * <p>The type of speech marks returned for the input text.</p>
   */
  SpeechMarkTypes?: (SpeechMarkType | string)[];

  /**
   * <p>Specifies whether the input text is plain text or SSML. The default
   *       value is plain text. </p>
   */
  TextType?: TextType | string;

  /**
   * <p>Voice ID to use for the synthesis. </p>
   */
  VoiceId?: VoiceId | string;

  /**
   * <p>Optional language code for a synthesis task. This is only necessary if
   *       using a bilingual voice, such as Aditi, which can be used for either
   *       Indian English (en-IN) or Hindi (hi-IN). </p>
   *          <p>If a bilingual voice is used and no language code is specified, Amazon Polly
   *       uses the default language of the bilingual voice. The default language for
   *       any voice is the one returned by the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a> operation for the <code>LanguageCode</code>
   *       parameter. For example, if no language code is specified, Aditi will use
   *       Indian English rather than Hindi.</p>
   */
  LanguageCode?: LanguageCode | string;
}

export interface GetSpeechSynthesisTaskOutput {
  /**
   * <p>SynthesisTask object that provides information from the requested
   *       task, including output format, creation time, task status, and so
   *       on.</p>
   */
  SynthesisTask?: SynthesisTask;
}

/**
 * <p>The provided Task ID is not valid. Please provide a valid Task ID and
 *       try again.</p>
 */
export class InvalidTaskIdException extends __BaseException {
  readonly name: "InvalidTaskIdException" = "InvalidTaskIdException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTaskIdException, __BaseException>) {
    super({
      name: "InvalidTaskIdException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTaskIdException.prototype);
  }
}

/**
 * <p>The Speech Synthesis task with requested Task ID cannot be
 *       found.</p>
 */
export class SynthesisTaskNotFoundException extends __BaseException {
  readonly name: "SynthesisTaskNotFoundException" = "SynthesisTaskNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SynthesisTaskNotFoundException, __BaseException>) {
    super({
      name: "SynthesisTaskNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SynthesisTaskNotFoundException.prototype);
  }
}

/**
 * <p>Amazon Polly can't find the specified lexicon. Verify that the lexicon's
 *       name is spelled correctly, and then try again.</p>
 */
export class InvalidLexiconException extends __BaseException {
  readonly name: "InvalidLexiconException" = "InvalidLexiconException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidLexiconException, __BaseException>) {
    super({
      name: "InvalidLexiconException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidLexiconException.prototype);
  }
}

/**
 * <p>The provided Amazon S3 bucket name is invalid. Please check your input
 *       with S3 bucket naming requirements and try again.</p>
 */
export class InvalidS3BucketException extends __BaseException {
  readonly name: "InvalidS3BucketException" = "InvalidS3BucketException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidS3BucketException, __BaseException>) {
    super({
      name: "InvalidS3BucketException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidS3BucketException.prototype);
  }
}

/**
 * <p>The provided Amazon S3 key prefix is invalid. Please provide a valid
 *       S3 object key name.</p>
 */
export class InvalidS3KeyException extends __BaseException {
  readonly name: "InvalidS3KeyException" = "InvalidS3KeyException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidS3KeyException, __BaseException>) {
    super({
      name: "InvalidS3KeyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidS3KeyException.prototype);
  }
}

/**
 * <p>The specified sample rate is not valid.</p>
 */
export class InvalidSampleRateException extends __BaseException {
  readonly name: "InvalidSampleRateException" = "InvalidSampleRateException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSampleRateException, __BaseException>) {
    super({
      name: "InvalidSampleRateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSampleRateException.prototype);
  }
}

/**
 * <p>The provided SNS topic ARN is invalid. Please provide a valid SNS
 *       topic ARN and try again.</p>
 */
export class InvalidSnsTopicArnException extends __BaseException {
  readonly name: "InvalidSnsTopicArnException" = "InvalidSnsTopicArnException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSnsTopicArnException, __BaseException>) {
    super({
      name: "InvalidSnsTopicArnException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSnsTopicArnException.prototype);
  }
}

/**
 * <p>The SSML you provided is invalid. Verify the SSML syntax, spelling
 *       of tags and values, and then try again.</p>
 */
export class InvalidSsmlException extends __BaseException {
  readonly name: "InvalidSsmlException" = "InvalidSsmlException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSsmlException, __BaseException>) {
    super({
      name: "InvalidSsmlException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSsmlException.prototype);
  }
}

/**
 * <p>The language specified is not currently supported by Amazon Polly in this
 *       capacity.</p>
 */
export class LanguageNotSupportedException extends __BaseException {
  readonly name: "LanguageNotSupportedException" = "LanguageNotSupportedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LanguageNotSupportedException, __BaseException>) {
    super({
      name: "LanguageNotSupportedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LanguageNotSupportedException.prototype);
  }
}

/**
 * <p>Describes the content of the lexicon.</p>
 */
export interface LexiconDescription {
  /**
   * <p>Name of the lexicon.</p>
   */
  Name?: string;

  /**
   * <p>Provides lexicon metadata.</p>
   */
  Attributes?: LexiconAttributes;
}

/**
 * <p>The maximum size of the specified lexicon would be exceeded by this
 *       operation.</p>
 */
export class LexiconSizeExceededException extends __BaseException {
  readonly name: "LexiconSizeExceededException" = "LexiconSizeExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LexiconSizeExceededException, __BaseException>) {
    super({
      name: "LexiconSizeExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LexiconSizeExceededException.prototype);
  }
}

export interface ListLexiconsInput {
  /**
   * <p>An opaque pagination token returned from previous
   *         <code>ListLexicons</code> operation. If present, indicates where to
   *       continue the list of lexicons.</p>
   */
  NextToken?: string;
}

export interface ListLexiconsOutput {
  /**
   * <p>A list of lexicon names and attributes.</p>
   */
  Lexicons?: LexiconDescription[];

  /**
   * <p>The pagination token to use in the next request to continue the
   *       listing of lexicons. <code>NextToken</code> is returned only if the
   *       response is truncated.</p>
   */
  NextToken?: string;
}

export interface ListSpeechSynthesisTasksInput {
  /**
   * <p>Maximum number of speech synthesis tasks returned in a List
   *       operation.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token to use in the next request to continue the
   *       listing of speech synthesis tasks. </p>
   */
  NextToken?: string;

  /**
   * <p>Status of the speech synthesis tasks returned in a List
   *       operation</p>
   */
  Status?: TaskStatus | string;
}

export interface ListSpeechSynthesisTasksOutput {
  /**
   * <p>An opaque pagination token returned from the previous List operation
   *       in this request. If present, this indicates where to continue the
   *       listing.</p>
   */
  NextToken?: string;

  /**
   * <p>List of SynthesisTask objects that provides information from the
   *       specified task in the list request, including output format, creation
   *       time, task status, and so on.</p>
   */
  SynthesisTasks?: SynthesisTask[];
}

/**
 * <p>Speech marks are not supported for the <code>OutputFormat</code>
 *       selected. Speech marks are only available for content in <code>json</code>
 *       format.</p>
 */
export class MarksNotSupportedForFormatException extends __BaseException {
  readonly name: "MarksNotSupportedForFormatException" = "MarksNotSupportedForFormatException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MarksNotSupportedForFormatException, __BaseException>) {
    super({
      name: "MarksNotSupportedForFormatException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MarksNotSupportedForFormatException.prototype);
  }
}

/**
 * <p>The maximum size of the lexeme would be exceeded by this
 *       operation.</p>
 */
export class MaxLexemeLengthExceededException extends __BaseException {
  readonly name: "MaxLexemeLengthExceededException" = "MaxLexemeLengthExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaxLexemeLengthExceededException, __BaseException>) {
    super({
      name: "MaxLexemeLengthExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaxLexemeLengthExceededException.prototype);
  }
}

/**
 * <p>The maximum number of lexicons would be exceeded by this
 *       operation.</p>
 */
export class MaxLexiconsNumberExceededException extends __BaseException {
  readonly name: "MaxLexiconsNumberExceededException" = "MaxLexiconsNumberExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaxLexiconsNumberExceededException, __BaseException>) {
    super({
      name: "MaxLexiconsNumberExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaxLexiconsNumberExceededException.prototype);
  }
}

export interface PutLexiconInput {
  /**
   * <p>Name of the lexicon. The name must follow the regular express
   *       format [0-9A-Za-z]{1,20}. That is, the name is a case-sensitive
   *       alphanumeric string up to 20 characters long. </p>
   */
  Name: string | undefined;

  /**
   * <p>Content of the PLS lexicon as string data.</p>
   */
  Content: string | undefined;
}

export interface PutLexiconOutput {}

/**
 * <p>The alphabet specified by the lexicon is not a supported alphabet.
 *       Valid values are <code>x-sampa</code> and <code>ipa</code>.</p>
 */
export class UnsupportedPlsAlphabetException extends __BaseException {
  readonly name: "UnsupportedPlsAlphabetException" = "UnsupportedPlsAlphabetException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedPlsAlphabetException, __BaseException>) {
    super({
      name: "UnsupportedPlsAlphabetException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedPlsAlphabetException.prototype);
  }
}

/**
 * <p>The language specified in the lexicon is unsupported. For a list of
 *       supported languages, see <a href="https://docs.aws.amazon.com/polly/latest/dg/API_LexiconAttributes.html">Lexicon Attributes</a>.</p>
 */
export class UnsupportedPlsLanguageException extends __BaseException {
  readonly name: "UnsupportedPlsLanguageException" = "UnsupportedPlsLanguageException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedPlsLanguageException, __BaseException>) {
    super({
      name: "UnsupportedPlsLanguageException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedPlsLanguageException.prototype);
  }
}

/**
 * <p>SSML speech marks are not supported for plain text-type
 *       input.</p>
 */
export class SsmlMarksNotSupportedForTextTypeException extends __BaseException {
  readonly name: "SsmlMarksNotSupportedForTextTypeException" = "SsmlMarksNotSupportedForTextTypeException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SsmlMarksNotSupportedForTextTypeException, __BaseException>) {
    super({
      name: "SsmlMarksNotSupportedForTextTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SsmlMarksNotSupportedForTextTypeException.prototype);
  }
}

export interface StartSpeechSynthesisTaskInput {
  /**
   * <p>Specifies the engine (<code>standard</code> or <code>neural</code>)
   *       for Amazon Polly to use when processing input text for speech synthesis. Using a
   *       voice that is not supported for the engine selected will result in an
   *       error.</p>
   */
  Engine?: Engine | string;

  /**
   * <p>Optional language code for the Speech Synthesis request. This is only
   *       necessary if using a bilingual voice, such as Aditi, which can be used for
   *       either Indian English (en-IN) or Hindi (hi-IN). </p>
   *          <p>If a bilingual voice is used and no language code is specified, Amazon Polly
   *       uses the default language of the bilingual voice. The default language for
   *       any voice is the one returned by the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a> operation for the <code>LanguageCode</code>
   *       parameter. For example, if no language code is specified, Aditi will use
   *       Indian English rather than Hindi.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>List of one or more pronunciation lexicon names you want the service
   *       to apply during synthesis. Lexicons are applied only if the language of
   *       the lexicon is the same as the language of the voice. </p>
   */
  LexiconNames?: string[];

  /**
   * <p>The format in which the returned output will be encoded. For audio
   *       stream, this will be mp3, ogg_vorbis, or pcm. For speech marks, this will
   *       be json. </p>
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
   *          <p>The valid values for mp3 and ogg_vorbis are "8000", "16000", "22050",
   *       and "24000". The default value for standard voices is "22050". The default
   *       value for neural voices is "24000".</p>
   *          <p>Valid values for pcm are "8000" and "16000" The default value is
   *       "16000". </p>
   */
  SampleRate?: string;

  /**
   * <p>ARN for the SNS topic optionally used for providing status
   *       notification for a speech synthesis task.</p>
   */
  SnsTopicArn?: string;

  /**
   * <p>The type of speech marks returned for the input text.</p>
   */
  SpeechMarkTypes?: (SpeechMarkType | string)[];

  /**
   * <p>The input text to synthesize. If you specify ssml as the TextType,
   *       follow the SSML format for the input text. </p>
   */
  Text: string | undefined;

  /**
   * <p>Specifies whether the input text is plain text or SSML. The default
   *       value is plain text. </p>
   */
  TextType?: TextType | string;

  /**
   * <p>Voice ID to use for the synthesis. </p>
   */
  VoiceId: VoiceId | string | undefined;
}

export interface StartSpeechSynthesisTaskOutput {
  /**
   * <p>SynthesisTask object that provides information and attributes about a
   *       newly submitted speech synthesis task.</p>
   */
  SynthesisTask?: SynthesisTask;
}

/**
 * <p>The value of the "Text" parameter is longer than the accepted
 *       limits. For the <code>SynthesizeSpeech</code> API, the limit for input
 *       text is a maximum of 6000 characters total, of which no more than 3000 can
 *       be billed characters. For the <code>StartSpeechSynthesisTask</code> API,
 *       the maximum is 200,000 characters, of which no more than 100,000 can be
 *       billed characters. SSML tags are not counted as billed
 *       characters.</p>
 */
export class TextLengthExceededException extends __BaseException {
  readonly name: "TextLengthExceededException" = "TextLengthExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TextLengthExceededException, __BaseException>) {
    super({
      name: "TextLengthExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TextLengthExceededException.prototype);
  }
}

export interface SynthesizeSpeechInput {
  /**
   * <p>Specifies the engine (<code>standard</code> or <code>neural</code>)
   *       for Amazon Polly to use when processing input text for speech synthesis. For
   *       information on Amazon Polly voices and which voices are available in
   *       standard-only, NTTS-only, and both standard and NTTS formats, see <a href="https://docs.aws.amazon.com/polly/latest/dg/voicelist.html">Available Voices</a>.</p>
   *          <p>
   *             <b>NTTS-only voices</b>
   *          </p>
   *          <p>When using NTTS-only voices such as Kevin (en-US), this parameter is
   *       required and must be set to <code>neural</code>. If the engine is not
   *       specified, or is set to <code>standard</code>, this will result in an
   *       error. </p>
   *          <p>Type: String</p>
   *          <p>Valid Values: <code>standard</code> | <code>neural</code>
   *          </p>
   *          <p>Required: Yes</p>
   *          <p>
   *             <b>Standard voices</b>
   *          </p>
   *          <p>For standard voices, this is not required; the engine parameter
   *       defaults to <code>standard</code>. If the engine is not specified, or is
   *       set to <code>standard</code> and an NTTS-only voice is selected, this will
   *       result in an error. </p>
   */
  Engine?: Engine | string;

  /**
   * <p>Optional language code for the Synthesize Speech request. This is only
   *       necessary if using a bilingual voice, such as Aditi, which can be used for
   *       either Indian English (en-IN) or Hindi (hi-IN). </p>
   *          <p>If a bilingual voice is used and no language code is specified, Amazon Polly
   *       uses the default language of the bilingual voice. The default language for
   *       any voice is the one returned by the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a> operation for the <code>LanguageCode</code>
   *       parameter. For example, if no language code is specified, Aditi will use
   *       Indian English rather than Hindi.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>List of one or more pronunciation lexicon names you want the
   *       service to apply during synthesis. Lexicons are applied only if the
   *       language of the lexicon is the same as the language of the voice. For
   *       information about storing lexicons, see <a href="https://docs.aws.amazon.com/polly/latest/dg/API_PutLexicon.html">PutLexicon</a>.</p>
   */
  LexiconNames?: string[];

  /**
   * <p> The format in which the returned output will be encoded. For audio
   *       stream, this will be mp3, ogg_vorbis, or pcm. For speech marks, this will
   *       be json. </p>
   *          <p>When pcm is used, the content returned is audio/pcm in a signed
   *       16-bit, 1 channel (mono), little-endian format. </p>
   */
  OutputFormat: OutputFormat | string | undefined;

  /**
   * <p>The audio frequency specified in Hz.</p>
   *          <p>The valid values for mp3 and ogg_vorbis are "8000", "16000", "22050",
   *       and "24000". The default value for standard voices is "22050". The default
   *       value for neural voices is "24000".</p>
   *          <p>Valid values for pcm are "8000" and "16000" The default value is
   *       "16000". </p>
   */
  SampleRate?: string;

  /**
   * <p>The type of speech marks returned for the input text.</p>
   */
  SpeechMarkTypes?: (SpeechMarkType | string)[];

  /**
   * <p> Input text to synthesize. If you specify <code>ssml</code> as the
   *         <code>TextType</code>, follow the SSML format for the input text.
   *     </p>
   */
  Text: string | undefined;

  /**
   * <p> Specifies whether the input text is plain text or SSML. The
   *       default value is plain text. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/ssml.html">Using
   *         SSML</a>.</p>
   */
  TextType?: TextType | string;

  /**
   * <p> Voice ID to use for the synthesis. You can get a list of available
   *       voice IDs by calling the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a> operation. </p>
   */
  VoiceId: VoiceId | string | undefined;
}

export interface SynthesizeSpeechOutput {
  /**
   * <p> Stream containing the synthesized speech. </p>
   */
  AudioStream?: Readable | ReadableStream | Blob;

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
   */
  ContentType?: string;

  /**
   * <p>Number of characters synthesized.</p>
   */
  RequestCharacters?: number;
}

/**
 * @internal
 */
export const DeleteLexiconInputFilterSensitiveLog = (obj: DeleteLexiconInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLexiconOutputFilterSensitiveLog = (obj: DeleteLexiconOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVoicesInputFilterSensitiveLog = (obj: DescribeVoicesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VoiceFilterSensitiveLog = (obj: Voice): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVoicesOutputFilterSensitiveLog = (obj: DescribeVoicesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLexiconInputFilterSensitiveLog = (obj: GetLexiconInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LexiconFilterSensitiveLog = (obj: Lexicon): any => ({
  ...obj,
  ...(obj.Content && { Content: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const LexiconAttributesFilterSensitiveLog = (obj: LexiconAttributes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLexiconOutputFilterSensitiveLog = (obj: GetLexiconOutput): any => ({
  ...obj,
  ...(obj.Lexicon && { Lexicon: LexiconFilterSensitiveLog(obj.Lexicon) }),
});

/**
 * @internal
 */
export const GetSpeechSynthesisTaskInputFilterSensitiveLog = (obj: GetSpeechSynthesisTaskInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SynthesisTaskFilterSensitiveLog = (obj: SynthesisTask): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSpeechSynthesisTaskOutputFilterSensitiveLog = (obj: GetSpeechSynthesisTaskOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LexiconDescriptionFilterSensitiveLog = (obj: LexiconDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLexiconsInputFilterSensitiveLog = (obj: ListLexiconsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLexiconsOutputFilterSensitiveLog = (obj: ListLexiconsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSpeechSynthesisTasksInputFilterSensitiveLog = (obj: ListSpeechSynthesisTasksInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSpeechSynthesisTasksOutputFilterSensitiveLog = (obj: ListSpeechSynthesisTasksOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutLexiconInputFilterSensitiveLog = (obj: PutLexiconInput): any => ({
  ...obj,
  ...(obj.Content && { Content: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PutLexiconOutputFilterSensitiveLog = (obj: PutLexiconOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartSpeechSynthesisTaskInputFilterSensitiveLog = (obj: StartSpeechSynthesisTaskInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartSpeechSynthesisTaskOutputFilterSensitiveLog = (obj: StartSpeechSynthesisTaskOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SynthesizeSpeechInputFilterSensitiveLog = (obj: SynthesizeSpeechInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SynthesizeSpeechOutputFilterSensitiveLog = (obj: SynthesizeSpeechOutput): any => ({
  ...obj,
});
