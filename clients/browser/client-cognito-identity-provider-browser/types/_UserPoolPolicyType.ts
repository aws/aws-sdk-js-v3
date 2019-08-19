import {
  _PasswordPolicyType,
  _UnmarshalledPasswordPolicyType
} from "./_PasswordPolicyType";

/**
 * <p>The policy associated with a user pool.</p>
 */
export interface _UserPoolPolicyType {
  /**
   * <p>The password policy.</p>
   */
  PasswordPolicy?: _PasswordPolicyType;
}

export interface _UnmarshalledUserPoolPolicyType extends _UserPoolPolicyType {
  /**
   * <p>The password policy.</p>
   */
  PasswordPolicy?: _UnmarshalledPasswordPolicyType;
}
