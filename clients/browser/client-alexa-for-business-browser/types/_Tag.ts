/**
 * <p>A key-value pair that can be associated with a resource. </p>
 */
export interface _Tag {
  /**
   * <p>The key of a tag. Tag keys are case-sensitive. </p>
   */
  Key: string;

  /**
   * <p>The value of a tag. Tag values are case-sensitive and can be null.</p>
   */
  Value: string;
}

export type _UnmarshalledTag = _Tag;
