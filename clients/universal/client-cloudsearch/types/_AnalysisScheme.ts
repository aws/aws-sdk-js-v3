import {
  _AnalysisOptions,
  _UnmarshalledAnalysisOptions
} from "./_AnalysisOptions";

/**
 * <p>Configuration information for an analysis scheme. Each analysis scheme has a unique name and specifies the language of the text to be processed. The following options can be configured for an analysis scheme: <code>Synonyms</code>, <code>Stopwords</code>, <code>StemmingDictionary</code>, <code>JapaneseTokenizationDictionary</code> and <code>AlgorithmicStemming</code>.</p>
 */
export interface _AnalysisScheme {
  /**
   * <p>Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).</p>
   */
  AnalysisSchemeName: string;

  /**
   * <p>An <a href="http://tools.ietf.org/html/rfc4646" target="_blank">IETF RFC 4646</a> language code or <code>mul</code> for multiple languages.</p>
   */
  AnalysisSchemeLanguage:
    | "ar"
    | "bg"
    | "ca"
    | "cs"
    | "da"
    | "de"
    | "el"
    | "en"
    | "es"
    | "eu"
    | "fa"
    | "fi"
    | "fr"
    | "ga"
    | "gl"
    | "he"
    | "hi"
    | "hu"
    | "hy"
    | "id"
    | "it"
    | "ja"
    | "ko"
    | "lv"
    | "mul"
    | "nl"
    | "no"
    | "pt"
    | "ro"
    | "ru"
    | "sv"
    | "th"
    | "tr"
    | "zh-Hans"
    | "zh-Hant"
    | string;

  /**
   * <p>Synonyms, stopwords, and stemming options for an analysis scheme. Includes tokenization dictionary for Japanese.</p>
   */
  AnalysisOptions?: _AnalysisOptions;
}

export interface _UnmarshalledAnalysisScheme extends _AnalysisScheme {
  /**
   * <p>Synonyms, stopwords, and stemming options for an analysis scheme. Includes tokenization dictionary for Japanese.</p>
   */
  AnalysisOptions?: _UnmarshalledAnalysisOptions;
}
