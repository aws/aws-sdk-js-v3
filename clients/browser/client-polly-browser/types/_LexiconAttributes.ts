/**
 * <p>Contains metadata describing the lexicon such as the number of lexemes, language code, and so on. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.</p>
 */
export interface _LexiconAttributes {
  /**
   * <p>Phonetic alphabet used in the lexicon. Valid values are <code>ipa</code> and <code>x-sampa</code>.</p>
   */
  Alphabet?: string;

  /**
   * <p>Language code that the lexicon applies to. A lexicon with a language code such as "en" would be applied to all English languages (en-GB, en-US, en-AUS, en-WLS, and so on.</p>
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
   * <p>Date lexicon was last modified (a timestamp value).</p>
   */
  LastModified?: Date | string | number;

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

export interface _UnmarshalledLexiconAttributes extends _LexiconAttributes {
  /**
   * <p>Date lexicon was last modified (a timestamp value).</p>
   */
  LastModified?: Date;
}
