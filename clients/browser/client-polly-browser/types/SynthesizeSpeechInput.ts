import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SynthesizeSpeechInput shape
 */
export interface SynthesizeSpeechInput {
  /**
   * <p>Specifies the engine (<code>standard</code> or <code>neural</code>) for Amazon Polly to use when processing input text for speech synthesis. Using a voice that is not supported for the engine selected will result in an error.</p>
   */
  Engine?: "standard" | "neural" | string;

  /**
   * <p>Optional language code for the Synthesize Speech request. This is only necessary if using a bilingual voice, such as Aditi, which can be used for either Indian English (en-IN) or Hindi (hi-IN). </p> <p>If a bilingual voice is used and no language code is specified, Amazon Polly will use the default language of the bilingual voice. The default language for any voice is the one returned by the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a> operation for the <code>LanguageCode</code> parameter. For example, if no language code is specified, Aditi will use Indian English rather than Hindi.</p>
   */
  LanguageCode?:
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
    | "is-IS"
    | "it-IT"
    | "ja-JP"
    | "hi-IN"
    | "ko-KR"
    | "nb-NO"
    | "nl-NL"
    | "pl-PL"
    | "pt-BR"
    | "pt-PT"
    | "ro-RO"
    | "ru-RU"
    | "sv-SE"
    | "tr-TR"
    | string;

  /**
   * <p>List of one or more pronunciation lexicon names you want the service to apply during synthesis. Lexicons are applied only if the language of the lexicon is the same as the language of the voice. For information about storing lexicons, see <a href="https://docs.aws.amazon.com/polly/latest/dg/API_PutLexicon.html">PutLexicon</a>.</p>
   */
  LexiconNames?: Array<string> | Iterable<string>;

  /**
   * <p> The format in which the returned output will be encoded. For audio stream, this will be mp3, ogg_vorbis, or pcm. For speech marks, this will be json. </p> <p>When pcm is used, the content returned is audio/pcm in a signed 16-bit, 1 channel (mono), little-endian format. </p>
   */
  OutputFormat: "json" | "mp3" | "ogg_vorbis" | "pcm" | string;

  /**
   * <p>The audio frequency specified in Hz.</p> <p>The valid values for mp3 and ogg_vorbis are "8000", "16000", "22050", and "24000". The default value for standard voices is "22050". The default value for neural voices is "24000".</p> <p>Valid values for pcm are "8000" and "16000" The default value is "16000". </p>
   */
  SampleRate?: string;

  /**
   * <p>The type of speech marks returned for the input text.</p>
   */
  SpeechMarkTypes?:
    | Array<"sentence" | "ssml" | "viseme" | "word" | string>
    | Iterable<"sentence" | "ssml" | "viseme" | "word" | string>;

  /**
   * <p> Input text to synthesize. If you specify <code>ssml</code> as the <code>TextType</code>, follow the SSML format for the input text. </p>
   */
  Text: string;

  /**
   * <p> Specifies whether the input text is plain text or SSML. The default value is plain text. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/ssml.html">Using SSML</a>.</p>
   */
  TextType?: "ssml" | "text" | string;

  /**
   * <p> Voice ID to use for the synthesis. You can get a list of available voice IDs by calling the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a> operation. </p>
   */
  VoiceId:
    | "Aditi"
    | "Amy"
    | "Astrid"
    | "Bianca"
    | "Brian"
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
    | "Zhiyu"
    | string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
