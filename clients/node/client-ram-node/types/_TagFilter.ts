/**
 * <p>Used to filter information based on tags.</p>
 */
export interface _TagFilter {
  /**
   * <p>The tag key.</p>
   */
  tagKey?: string;

  /**
   * <p>The tag values.</p>
   */
  tagValues?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledTagFilter extends _TagFilter {
  /**
   * <p>The tag values.</p>
   */
  tagValues?: Array<string>;
}
