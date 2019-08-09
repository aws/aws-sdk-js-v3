/**
 * <p>Describes a tag.</p>
 */
export interface _Tag {
  /**
   * <p>The key of the tag.</p> <p>Constraints: Tag keys are case-sensitive and accept a maximum of 127 Unicode characters. May not begin with <code>aws:</code>.</p>
   */
  Key?: string;

  /**
   * <p>The value of the tag.</p> <p>Constraints: Tag values are case-sensitive and accept a maximum of 255 Unicode characters.</p>
   */
  Value?: string;
}

export type _UnmarshalledTag = _Tag;
