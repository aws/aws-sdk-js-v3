/**
 * <p>A key and value pair. This data type is used as a request parameter in the <a>SetTagsForResource</a> action and a response element in the <a>ListTagsForResource</a> action.</p>
 */
export interface _Tag {
  /**
   * <p>A tag key.</p>
   */
  key: string;

  /**
   * <p>A value assigned to a tag key.</p>
   */
  value?: string;
}

export type _UnmarshalledTag = _Tag;
