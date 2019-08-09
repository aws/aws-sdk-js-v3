import {
  _LexiconAttributes,
  _UnmarshalledLexiconAttributes
} from "./_LexiconAttributes";

/**
 * <p>Describes the content of the lexicon.</p>
 */
export interface _LexiconDescription {
  /**
   * <p>Name of the lexicon.</p>
   */
  Name?: string;

  /**
   * <p>Provides lexicon metadata.</p>
   */
  Attributes?: _LexiconAttributes;
}

export interface _UnmarshalledLexiconDescription extends _LexiconDescription {
  /**
   * <p>Provides lexicon metadata.</p>
   */
  Attributes?: _UnmarshalledLexiconAttributes;
}
