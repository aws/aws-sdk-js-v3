/**
 * <p>Options for a 64-bit signed integer field. Present if <code>IndexFieldType</code> specifies the field is of type <code>int</code>. All options are enabled by default.</p>
 */
export interface _IntOptions {
  /**
   * A value to use for the field if the field isn't specified for a document. This can be important if you are using the field in an expression and that field is not present in every document.
   */
  DefaultValue?: number;

  /**
   * <p>The name of the source field to map to the field. </p>
   */
  SourceField?: string;

  /**
   * <p>Whether facet information can be returned for the field.</p>
   */
  FacetEnabled?: boolean;

  /**
   * <p>Whether the contents of the field are searchable.</p>
   */
  SearchEnabled?: boolean;

  /**
   * <p>Whether the contents of the field can be returned in the search results.</p>
   */
  ReturnEnabled?: boolean;

  /**
   * <p>Whether the field can be used to sort the search results.</p>
   */
  SortEnabled?: boolean;
}

export type _UnmarshalledIntOptions = _IntOptions;
