/**
 * <p>The values that are available for a tag.</p>
 */
export interface _TagValues {
  /**
   * <p>The key for the tag.</p>
   */
  Key?: string;

  /**
   * <p>The specific value of the tag.</p>
   */
  Values?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledTagValues extends _TagValues {
  /**
   * <p>The specific value of the tag.</p>
   */
  Values?: Array<string>;
}
