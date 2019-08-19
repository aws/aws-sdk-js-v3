/**
 * <p>An object representing metadata for a resource.</p>
 */
export interface _ResourceMetadata {
  /**
   * <p>The full Amazon Resource Name (ARN) for the resource.</p>
   */
  arn: string;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
   */
  createdAt: Date | string | number;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was last updated.</p>
   */
  lastUpdatedAt: Date | string | number;

  /**
   * <p>The unique identifier for the resource.</p>
   */
  uid: string;

  /**
   * <p>The version of the resource. Resources are created at version 1, and this version is
   *          incremented each time that they're updated.</p>
   */
  version: number;
}

export interface _UnmarshalledResourceMetadata extends _ResourceMetadata {
  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
   */
  createdAt: Date;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was last updated.</p>
   */
  lastUpdatedAt: Date;
}
