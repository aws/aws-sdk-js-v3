/**
 * <p>Metadata that help you categorize IT assets.</p>
 */
export interface _Tag {
  /**
   * <p>The type of tag on which to filter.</p>
   */
  key: string;

  /**
   * <p>A value for a tag key on which to filter.</p>
   */
  value: string;
}

export type _UnmarshalledTag = _Tag;
