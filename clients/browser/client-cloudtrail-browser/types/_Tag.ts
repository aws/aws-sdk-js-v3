/**
 * <p>A custom key-value pair associated with a resource such as a CloudTrail trail.</p>
 */
export interface _Tag {
  /**
   * <p>The key in a key-value pair. The key must be must be no longer than 128 Unicode characters. The key must be unique for the resource to which it applies.</p>
   */
  Key: string;

  /**
   * <p>The value in a key-value pair of a tag. The value must be no longer than 256 Unicode characters.</p>
   */
  Value?: string;
}

export type _UnmarshalledTag = _Tag;
