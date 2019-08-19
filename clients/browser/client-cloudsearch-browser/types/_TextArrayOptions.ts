/**
 * <p>Options for a field that contains an array of text strings. Present if <code>IndexFieldType</code> specifies the field is of type <code>text-array</code>. A <code>text-array</code> field is always searchable. All options are enabled by default.</p>
 */
export interface _TextArrayOptions {
  /**
   * A value to use for the field if the field isn't specified for a document.
   */
  DefaultValue?: string;

  /**
   * <p>A list of source fields to map to the field. </p>
   */
  SourceFields?: string;

  /**
   * <p>Whether the contents of the field can be returned in the search results.</p>
   */
  ReturnEnabled?: boolean;

  /**
   * <p>Whether highlights can be returned for the field.</p>
   */
  HighlightEnabled?: boolean;

  /**
   * <p>The name of an analysis scheme for a <code>text-array</code> field.</p>
   */
  AnalysisScheme?: string;
}

export type _UnmarshalledTextArrayOptions = _TextArrayOptions;
