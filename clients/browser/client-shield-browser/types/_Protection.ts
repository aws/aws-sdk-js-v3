/**
 * <p>An object that represents a resource that is under DDoS protection.</p>
 */
export interface _Protection {
  /**
   * <p>The unique identifier (ID) of the protection.</p>
   */
  Id?: string;

  /**
   * <p>The friendly name of the protection. For example, <code>My CloudFront distributions</code>.</p>
   */
  Name?: string;

  /**
   * <p>The ARN (Amazon Resource Name) of the AWS resource that is protected.</p>
   */
  ResourceArn?: string;
}

export type _UnmarshalledProtection = _Protection;
