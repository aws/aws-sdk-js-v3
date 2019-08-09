/**
 * <p>Specifies whether the attribute is standard or custom.</p>
 */
export interface _AttributeType {
  /**
   * <p>The name of the attribute.</p>
   */
  Name: string;

  /**
   * <p>The value of the attribute.</p>
   */
  Value?: string;
}

export type _UnmarshalledAttributeType = _AttributeType;
