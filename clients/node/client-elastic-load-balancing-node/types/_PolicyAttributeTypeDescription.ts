/**
 * <p>Information about a policy attribute type.</p>
 */
export interface _PolicyAttributeTypeDescription {
  /**
   * <p>The name of the attribute.</p>
   */
  AttributeName?: string;

  /**
   * <p>The type of the attribute. For example, <code>Boolean</code> or <code>Integer</code>.</p>
   */
  AttributeType?: string;

  /**
   * <p>A description of the attribute.</p>
   */
  Description?: string;

  /**
   * <p>The default value of the attribute, if applicable.</p>
   */
  DefaultValue?: string;

  /**
   * <p>The cardinality of the attribute.</p> <p>Valid values:</p> <ul> <li> <p>ONE(1) : Single value required</p> </li> <li> <p>ZERO_OR_ONE(0..1) : Up to one value is allowed</p> </li> <li> <p>ZERO_OR_MORE(0..*) : Optional. Multiple values are allowed</p> </li> <li> <p>ONE_OR_MORE(1..*0) : Required. Multiple values are allowed</p> </li> </ul>
   */
  Cardinality?: string;
}

export type _UnmarshalledPolicyAttributeTypeDescription = _PolicyAttributeTypeDescription;
