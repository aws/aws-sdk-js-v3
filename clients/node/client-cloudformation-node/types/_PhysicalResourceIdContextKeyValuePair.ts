/**
 * <p>Context information that enables AWS CloudFormation to uniquely identify a resource. AWS CloudFormation uses context key-value pairs in cases where a resource's logical and physical IDs are not enough to uniquely identify that resource. Each context key-value pair specifies a resource that contains the targeted resource.</p>
 */
export interface _PhysicalResourceIdContextKeyValuePair {
  /**
   * <p>The resource context key.</p>
   */
  Key: string;

  /**
   * <p>The resource context value.</p>
   */
  Value: string;
}

export type _UnmarshalledPhysicalResourceIdContextKeyValuePair = _PhysicalResourceIdContextKeyValuePair;
