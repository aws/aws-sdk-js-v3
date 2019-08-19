/**
 * <p>A description of a tag. Every tag is a key-value pair. You can add up to 50 tags to a single DAX cluster.</p> <p>AWS-assigned tag names and values are automatically assigned the <code>aws:</code> prefix, which the user cannot assign. AWS-assigned tag names do not count towards the tag limit of 50. User-assigned tag names have the prefix <code>user:</code>.</p> <p>You cannot backdate the application of a tag.</p>
 */
export interface _Tag {
  /**
   * <p>The key for the tag. Tag keys are case sensitive. Every DAX cluster can only have one tag with the same key. If you try to add an existing tag (same key), the existing tag value will be updated to the new value.</p>
   */
  Key?: string;

  /**
   * <p>The value of the tag. Tag values are case-sensitive and can be null. </p>
   */
  Value?: string;
}

export type _UnmarshalledTag = _Tag;
