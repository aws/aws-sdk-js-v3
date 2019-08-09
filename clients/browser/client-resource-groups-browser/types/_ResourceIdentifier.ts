/**
 * <p>The ARN of a resource, and its resource type.</p>
 */
export interface _ResourceIdentifier {
  /**
   * <p>The ARN of a resource.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The resource type of a resource, such as <code>AWS::EC2::Instance</code>.</p>
   */
  ResourceType?: string;
}

export type _UnmarshalledResourceIdentifier = _ResourceIdentifier;
