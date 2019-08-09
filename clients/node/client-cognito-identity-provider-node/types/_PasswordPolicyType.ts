/**
 * <p>The password policy type.</p>
 */
export interface _PasswordPolicyType {
  /**
   * <p>The minimum length of the password policy that you have set. Cannot be less than 6.</p>
   */
  MinimumLength?: number;

  /**
   * <p>In the password policy that you have set, refers to whether you have required users to use at least one uppercase letter in their password.</p>
   */
  RequireUppercase?: boolean;

  /**
   * <p>In the password policy that you have set, refers to whether you have required users to use at least one lowercase letter in their password.</p>
   */
  RequireLowercase?: boolean;

  /**
   * <p>In the password policy that you have set, refers to whether you have required users to use at least one number in their password.</p>
   */
  RequireNumbers?: boolean;

  /**
   * <p>In the password policy that you have set, refers to whether you have required users to use at least one symbol in their password.</p>
   */
  RequireSymbols?: boolean;

  /**
   * _TemporaryPasswordValidityDaysType shape
   */
  TemporaryPasswordValidityDays?: number;
}

export type _UnmarshalledPasswordPolicyType = _PasswordPolicyType;
