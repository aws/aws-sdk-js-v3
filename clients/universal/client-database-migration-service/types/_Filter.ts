/**
 * <p/>
 */
export interface _Filter {
  /**
   * <p>The name of the filter.</p>
   */
  Name: string;

  /**
   * <p>The filter value.</p>
   */
  Values: Array<string> | Iterable<string>;
}

export interface _UnmarshalledFilter extends _Filter {
  /**
   * <p>The filter value.</p>
   */
  Values: Array<string>;
}
