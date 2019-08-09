/**
 * <p>A filter name and value pair that is used to return a more specific list of results from a describe operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs. The filters supported by a <code>Describe</code> operation are documented with the <code>Describe</code> operation.</p>
 */
export interface _Filter {
  /**
   * <p>Name of the filter. Filter names are case-sensitive.</p>
   */
  Name?: string;

  /**
   * <p>One or more filter values. Filter values are case-sensitive.</p>
   */
  Values?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledFilter extends _Filter {
  /**
   * <p>One or more filter values. Filter values are case-sensitive.</p>
   */
  Values?: Array<string>;
}
