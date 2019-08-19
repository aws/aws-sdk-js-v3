/**
 * <p>The list of tags to be added to the specified topic.</p>
 */
export interface _Tag {
  /**
   * <p>The required key portion of the tag.</p>
   */
  Key: string;

  /**
   * <p>The optional value portion of the tag.</p>
   */
  Value: string;
}

export type _UnmarshalledTag = _Tag;
