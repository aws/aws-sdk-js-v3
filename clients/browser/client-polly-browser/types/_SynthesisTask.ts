/**
 * <p>SynthesisTask object that provides information about a speech synthesis task.</p>
 */
export interface _SynthesisTask {
  /**
   * <p>Specifies the engine (<code>standard</code> or <code>neural</code>) for Amazon Polly to use when processing input text for speech synthesis. Using a voice that is not supported for the engine selected will result in an error.</p>
   */
  Engine?: "standard" | "neural" | string;

  /**
   * <p>The Amazon Polly generated identifier for a speech synthesis task.</p>
   */
  TaskId?: string;

  /**
   * <p>Current status of the individual speech synthesis task.</p>
   */
  TaskStatus?: "scheduled" | "inProgress" | "completed" | "failed" | string;

  /**
   * <p>Reason for the current status of a specific speech synthesis task, including errors if the task has failed.</p>
   */
  TaskStatusReason?: string;

  /**
   * <p>Pathway for the output speech file.</p>
   */
  OutputUri?: string;

  /**
   * <p>Timestamp for the time the synthesis task was started.</p>
   */
  CreationTime?: Date | string | number;

  /**
   * <p>Number of billable characters synthesized.</p>
   */
  RequestCharacters?: number;

  /**
   * <p>ARN for the SNS topic optionally used for providing status notification for a speech synthesis task.</p>
   */
  SnsTopicArn?: string;

  /**
   * <p>List of one or more pronunciation lexicon names you want the service to apply during synthesis. Lexicons are applied only if the language of the lexicon is the same as the language of the voice. </p>
   */
  LexiconNames?: Array<string> | Iterable<string>;

  /**
   * <p>The format in which the returned output will be encoded. For audio stream, this will be mp3, ogg_vorbis, or pcm. For speech marks, this will be json. </p>
   */
  OutputFormat?: "json" | "mp3" | "ogg_vorbis" | "pcm" | string;

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
   * <p>Specifies whether the input text is plain text or SSML. The default value is plain text. </p>
   */
  TextType?: "ssml" | "text" | string;

  /**
   * <p>Voice ID to use for the synthesis. </p>
   */
  VoiceId?:
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
   * <p>Optional language code for a synthesis task. This is only necessary if using a bilingual voice, such as Aditi, which can be used for either Indian English (en-IN) or Hindi (hi-IN). </p> <p>If a bilingual voice is used and no language code is specified, Amazon Polly will use the default language of the bilingual voice. The default language for any voice is the one returned by the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html">DescribeVoices</a> operation for the <code>LanguageCode</code> parameter. For example, if no language code is specified, Aditi will use Indian English rather than Hindi.</p>
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
}

export interface _UnmarshalledSynthesisTask extends _SynthesisTask {
  /**
   * <p>Timestamp for the time the synthesis task was started.</p>
   */
  CreationTime?: Date;

  /**
   * <p>List of one or more pronunciation lexicon names you want the service to apply during synthesis. Lexicons are applied only if the language of the lexicon is the same as the language of the voice. </p>
   */
  LexiconNames?: Array<string>;

  /**
   * <p>The type of speech marks returned for the input text.</p>
   */
  SpeechMarkTypes?: Array<"sentence" | "ssml" | "viseme" | "word" | string>;
}
