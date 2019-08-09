/**
 * <p>A key-value pair that identifies or specifies metadata about an AWS CloudHSM resource.</p>
 */
export interface _Tag {
  /**
   * <p>The key of the tag.</p>
   */
  Key: string;

  /**
   * <p>The value of the tag.</p>
   */
  Value: string;
}

export type _UnmarshalledTag = _Tag;
