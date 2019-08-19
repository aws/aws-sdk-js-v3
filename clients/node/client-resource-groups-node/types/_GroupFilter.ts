/**
 * <p>A filter name and value pair that is used to obtain more specific results from a list of groups.</p>
 */
export interface _GroupFilter {
  /**
   * <p>The name of the filter. Filter names are case-sensitive.</p>
   */
  Name: "resource-type" | string;

  /**
   * <p>One or more filter values. Allowed filter values vary by group filter name, and are case-sensitive.</p>
   */
  Values: Array<string> | Iterable<string>;
}

export interface _UnmarshalledGroupFilter extends _GroupFilter {
  /**
   * <p>One or more filter values. Allowed filter values vary by group filter name, and are case-sensitive.</p>
   */
  Values: Array<string>;
}
