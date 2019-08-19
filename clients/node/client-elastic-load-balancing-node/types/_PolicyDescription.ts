import {
  _PolicyAttributeDescription,
  _UnmarshalledPolicyAttributeDescription
} from "./_PolicyAttributeDescription";

/**
 * <p>Information about a policy.</p>
 */
export interface _PolicyDescription {
  /**
   * <p>The name of the policy.</p>
   */
  PolicyName?: string;

  /**
   * <p>The name of the policy type.</p>
   */
  PolicyTypeName?: string;

  /**
   * <p>The policy attributes.</p>
   */
  PolicyAttributeDescriptions?:
    | Array<_PolicyAttributeDescription>
    | Iterable<_PolicyAttributeDescription>;
}

export interface _UnmarshalledPolicyDescription extends _PolicyDescription {
  /**
   * <p>The policy attributes.</p>
   */
  PolicyAttributeDescriptions?: Array<_UnmarshalledPolicyAttributeDescription>;
}
