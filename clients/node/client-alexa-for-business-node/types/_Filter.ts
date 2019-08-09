/**
 * <p>A filter name and value pair that is used to return a more specific list of results. Filters can be used to match a set of resources by various criteria.</p>
 */
export interface _Filter {
  /**
   * <p>The key of a filter.</p>
   */
  Key: string;

  /**
   * <p>The values of a filter.</p>
   */
  Values: Array<string> | Iterable<string>;
}

export interface _UnmarshalledFilter extends _Filter {
  /**
   * <p>The values of a filter.</p>
   */
  Values: Array<string>;
}
