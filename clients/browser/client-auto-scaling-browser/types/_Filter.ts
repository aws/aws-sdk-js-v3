/**
 * <p>Describes a filter.</p>
 */
export interface _Filter {
  /**
   * <p>The name of the filter. The valid values are: <code>"auto-scaling-group"</code>, <code>"key"</code>, <code>"value"</code>, and <code>"propagate-at-launch"</code>.</p>
   */
  Name?: string;

  /**
   * <p>The value of the filter.</p>
   */
  Values?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledFilter extends _Filter {
  /**
   * <p>The value of the filter.</p>
   */
  Values?: Array<string>;
}
