/**
 * <p>Information about a policy attribute.</p>
 */
export interface _PolicyAttribute {
  /**
   * <p>The name of the attribute.</p>
   */
  AttributeName?: string;

  /**
   * <p>The value of the attribute.</p>
   */
  AttributeValue?: string;
}

export type _UnmarshalledPolicyAttribute = _PolicyAttribute;
