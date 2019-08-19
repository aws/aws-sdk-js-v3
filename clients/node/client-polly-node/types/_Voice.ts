/**
 * <p>Description of the voice.</p>
 */
export interface _Voice {
  /**
   * <p>Gender of the voice.</p>
   */
  Gender?: "Female" | "Male" | string;

  /**
   * <p>Amazon Polly assigned voice ID. This is the ID that you specify when calling the <code>SynthesizeSpeech</code> operation.</p>
   */
  Id?:
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
   * <p>Language code of the voice.</p>
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
   * <p>Human readable name of the language in English.</p>
   */
  LanguageName?: string;

  /**
   * <p>Name of the voice (for example, Salli, Kendra, etc.). This provides a human readable voice name that you might display in your application.</p>
   */
  Name?: string;

  /**
   * <p>Additional codes for languages available for the specified voice in addition to its default language. </p> <p>For example, the default language for Aditi is Indian English (en-IN) because it was first used for that language. Since Aditi is bilingual and fluent in both Indian English and Hindi, this parameter would show the code <code>hi-IN</code>.</p>
   */
  AdditionalLanguageCodes?:
    | Array<
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
        | string
      >
    | Iterable<
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
        | string
      >;

  /**
   * <p>Specifies which engines (<code>standard</code> or <code>neural</code>) that are supported by a given voice.</p>
   */
  SupportedEngines?:
    | Array<"standard" | "neural" | string>
    | Iterable<"standard" | "neural" | string>;
}

export interface _UnmarshalledVoice extends _Voice {
  /**
   * <p>Additional codes for languages available for the specified voice in addition to its default language. </p> <p>For example, the default language for Aditi is Indian English (en-IN) because it was first used for that language. Since Aditi is bilingual and fluent in both Indian English and Hindi, this parameter would show the code <code>hi-IN</code>.</p>
   */
  AdditionalLanguageCodes?: Array<
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
    | string
  >;

  /**
   * <p>Specifies which engines (<code>standard</code> or <code>neural</code>) that are supported by a given voice.</p>
   */
  SupportedEngines?: Array<"standard" | "neural" | string>;
}
