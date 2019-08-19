import {
  _DocumentSuggesterOptions,
  _UnmarshalledDocumentSuggesterOptions
} from "./_DocumentSuggesterOptions";

/**
 * <p>Configuration information for a search suggester. Each suggester has a unique name and specifies the text field you want to use for suggestions. The following options can be configured for a suggester: <code>FuzzyMatching</code>, <code>SortExpression</code>. </p>
 */
export interface _Suggester {
  /**
   * <p>Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).</p>
   */
  SuggesterName: string;

  /**
   * <p>Options for a search suggester.</p>
   */
  DocumentSuggesterOptions: _DocumentSuggesterOptions;
}

export interface _UnmarshalledSuggester extends _Suggester {
  /**
   * <p>Options for a search suggester.</p>
   */
  DocumentSuggesterOptions: _UnmarshalledDocumentSuggesterOptions;
}
