/**
 * <p>Provides lexicon name and lexicon content in string format. For more information, see <a href="https://www.w3.org/TR/pronunciation-lexicon/">Pronunciation Lexicon Specification (PLS) Version 1.0</a>.</p>
 */
export interface _Lexicon {
  /**
   * <p>Lexicon content in string format. The content of a lexicon must be in PLS format.</p>
   */
  Content?: string;

  /**
   * <p>Name of the lexicon.</p>
   */
  Name?: string;
}

export type _UnmarshalledLexicon = _Lexicon;
