import {
  _PolicyAttributeTypeDescription,
  _UnmarshalledPolicyAttributeTypeDescription
} from "./_PolicyAttributeTypeDescription";

/**
 * <p>Information about a policy type.</p>
 */
export interface _PolicyTypeDescription {
  /**
   * <p>The name of the policy type.</p>
   */
  PolicyTypeName?: string;

  /**
   * <p>A description of the policy type.</p>
   */
  Description?: string;

  /**
   * <p>The description of the policy attributes associated with the policies defined by Elastic Load Balancing.</p>
   */
  PolicyAttributeTypeDescriptions?:
    | Array<_PolicyAttributeTypeDescription>
    | Iterable<_PolicyAttributeTypeDescription>;
}

export interface _UnmarshalledPolicyTypeDescription
  extends _PolicyTypeDescription {
  /**
   * <p>The description of the policy attributes associated with the policies defined by Elastic Load Balancing.</p>
   */
  PolicyAttributeTypeDescriptions?: Array<
    _UnmarshalledPolicyAttributeTypeDescription
  >;
}
