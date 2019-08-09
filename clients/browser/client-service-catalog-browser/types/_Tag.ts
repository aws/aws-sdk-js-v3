/**
 * <p>Information about a tag. A tag is a key-value pair. Tags are propagated to the resources created when provisioning a product.</p>
 */
export interface _Tag {
  /**
   * <p>The tag key.</p>
   */
  Key: string;

  /**
   * <p>The value for this key.</p>
   */
  Value: string;
}

export type _UnmarshalledTag = _Tag;
