/**
 * <p>A key-value pair associated with a CloudWatch resource.</p>
 */
export interface _Tag {
  /**
   * <p>A string that you can use to assign a value. The combination of tag keys and values can help you organize and categorize your resources.</p>
   */
  Key: string;

  /**
   * <p>The value for the specified tag key.</p>
   */
  Value: string;
}

export type _UnmarshalledTag = _Tag;
