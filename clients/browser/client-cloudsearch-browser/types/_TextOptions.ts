/**
 * <p>Options for text field. Present if <code>IndexFieldType</code> specifies the field is of type <code>text</code>. A <code>text</code> field is always searchable. All options are enabled by default.</p>
 */
export interface _TextOptions {
  /**
   * A value to use for the field if the field isn't specified for a document.
   */
  DefaultValue?: string;

  /**
   * <p>A string that represents the name of an index field. CloudSearch supports regular index fields as well as dynamic fields. A dynamic field's name defines a pattern that begins or ends with a wildcard. Any document fields that don't map to a regular index field but do match a dynamic field's pattern are configured with the dynamic field's indexing options. </p> <p>Regular field names begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore). Dynamic field names must begin or end with a wildcard (*). The wildcard can also be the only character in a dynamic field name. Multiple wildcards, and wildcards embedded within a string are not supported. </p> <p>The name <code>score</code> is reserved and cannot be used as a field name. To reference a document's ID, you can use the name <code>_id</code>. </p>
   */
  SourceField?: string;

  /**
   * <p>Whether the contents of the field can be returned in the search results.</p>
   */
  ReturnEnabled?: boolean;

  /**
   * <p>Whether the field can be used to sort the search results.</p>
   */
  SortEnabled?: boolean;

  /**
   * <p>Whether highlights can be returned for the field.</p>
   */
  HighlightEnabled?: boolean;

  /**
   * <p>The name of an analysis scheme for a <code>text</code> field.</p>
   */
  AnalysisScheme?: string;
}

export type _UnmarshalledTextOptions = _TextOptions;
