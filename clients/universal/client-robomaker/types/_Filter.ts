/**
 * <p>Information about a filter.</p>
 */
export interface _Filter {
  /**
   * <p>The name of the filter.</p>
   */
  name?: string;

  /**
   * <p>A list of values.</p>
   */
  values?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledFilter extends _Filter {
  /**
   * <p>A list of values.</p>
   */
  values?: Array<string>;
}
