/**
 * <p>Represents a tag.</p>
 */
export interface _TagFilter {
  /**
   * <p>The tag key.</p>
   */
  Key?: string;

  /**
   * <p>The tag values (0 to 20).</p>
   */
  Values?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledTagFilter extends _TagFilter {
  /**
   * <p>The tag values (0 to 20).</p>
   */
  Values?: Array<string>;
}
