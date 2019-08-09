/**
 * <p>Options for a field that contains an array of dates. Present if <code>IndexFieldType</code> specifies the field is of type <code>date-array</code>. All options are enabled by default.</p>
 */
export interface _DateArrayOptions {
  /**
   * A value to use for the field if the field isn't specified for a document.
   */
  DefaultValue?: string;

  /**
   * <p>A list of source fields to map to the field. </p>
   */
  SourceFields?: string;

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
}

export type _UnmarshalledDateArrayOptions = _DateArrayOptions;
