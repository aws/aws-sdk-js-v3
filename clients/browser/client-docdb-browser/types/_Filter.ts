/**
 * <p>A named set of filter values, used to return a more specific list of results. You can use a filter to match a set of resources by specific criteria, such as IDs.</p> <p>Wildcards are not supported in filters.</p>
 */
export interface _Filter {
  /**
   * <p>The name of the filter. Filter names are case sensitive.</p>
   */
  Name: string;

  /**
   * <p>One or more filter values. Filter values are case sensitive.</p>
   */
  Values: Array<string> | Iterable<string>;
}

export interface _UnmarshalledFilter extends _Filter {
  /**
   * <p>One or more filter values. Filter values are case sensitive.</p>
   */
  Values: Array<string>;
}
