/**
 * <p>A list of tags (keys and values) that are used to specify the associated resources.</p>
 */
export interface _TagFilter {
  /**
   * <p>One part of a key-value pair that make up a tag. A key is a general label that acts like a category for more specific tag values.</p>
   */
  Key?: string;

  /**
   * <p>The optional part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key).</p>
   */
  Values?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledTagFilter extends _TagFilter {
  /**
   * <p>The optional part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key).</p>
   */
  Values?: Array<string>;
}
