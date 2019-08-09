/**
 * <p>Contains information about the account password policy.</p> <p> This data type is used as a response element in the <a>GetAccountPasswordPolicy</a> operation. </p>
 */
export interface _PasswordPolicy {
  /**
   * <p>Minimum length to require for IAM user passwords.</p>
   */
  MinimumPasswordLength?: number;

  /**
   * <p>Specifies whether to require symbols for IAM user passwords.</p>
   */
  RequireSymbols?: boolean;

  /**
   * <p>Specifies whether to require numbers for IAM user passwords.</p>
   */
  RequireNumbers?: boolean;

  /**
   * <p>Specifies whether to require uppercase characters for IAM user passwords.</p>
   */
  RequireUppercaseCharacters?: boolean;

  /**
   * <p>Specifies whether to require lowercase characters for IAM user passwords.</p>
   */
  RequireLowercaseCharacters?: boolean;

  /**
   * <p>Specifies whether IAM users are allowed to change their own password.</p>
   */
  AllowUsersToChangePassword?: boolean;

  /**
   * <p>Indicates whether passwords in the account expire. Returns true if <code>MaxPasswordAge</code> contains a value greater than 0. Returns false if MaxPasswordAge is 0 or not present.</p>
   */
  ExpirePasswords?: boolean;

  /**
   * <p>The number of days that an IAM user password is valid.</p>
   */
  MaxPasswordAge?: number;

  /**
   * <p>Specifies the number of previous passwords that IAM users are prevented from reusing.</p>
   */
  PasswordReusePrevention?: number;

  /**
   * <p>Specifies whether IAM users are prevented from setting a new password after their password has expired.</p>
   */
  HardExpiry?: boolean;
}

export type _UnmarshalledPasswordPolicy = _PasswordPolicy;
