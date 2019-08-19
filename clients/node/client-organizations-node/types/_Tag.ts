/**
 * <p>A custom key-value pair associated with a resource such as an account within your organization. </p>
 */
export interface _Tag {
  /**
   * <p>The key identifier, or name, of the tag.</p>
   */
  Key: string;

  /**
   * <p>The string value that's associated with the key of the tag. You can set the value of a tag to an empty string, but you can't set the value of a tag to null.</p>
   */
  Value: string;
}

export type _UnmarshalledTag = _Tag;
