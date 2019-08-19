import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateAccountPasswordPolicyInput shape
 */
export interface UpdateAccountPasswordPolicyInput {
  /**
   * <p>The minimum number of characters allowed in an IAM user password.</p> <p>If you do not specify a value for this parameter, then the operation uses the default value of <code>6</code>.</p>
   */
  MinimumPasswordLength?: number;

  /**
   * <p>Specifies whether IAM user passwords must contain at least one of the following non-alphanumeric characters:</p> <p>! @ # $ % ^ &amp; * ( ) _ + - = [ ] { } | '</p> <p>If you do not specify a value for this parameter, then the operation uses the default value of <code>false</code>. The result is that passwords do not require at least one symbol character.</p>
   */
  RequireSymbols?: boolean;

  /**
   * <p>Specifies whether IAM user passwords must contain at least one numeric character (0 to 9).</p> <p>If you do not specify a value for this parameter, then the operation uses the default value of <code>false</code>. The result is that passwords do not require at least one numeric character.</p>
   */
  RequireNumbers?: boolean;

  /**
   * <p>Specifies whether IAM user passwords must contain at least one uppercase character from the ISO basic Latin alphabet (A to Z).</p> <p>If you do not specify a value for this parameter, then the operation uses the default value of <code>false</code>. The result is that passwords do not require at least one uppercase character.</p>
   */
  RequireUppercaseCharacters?: boolean;

  /**
   * <p>Specifies whether IAM user passwords must contain at least one lowercase character from the ISO basic Latin alphabet (a to z).</p> <p>If you do not specify a value for this parameter, then the operation uses the default value of <code>false</code>. The result is that passwords do not require at least one lowercase character.</p>
   */
  RequireLowercaseCharacters?: boolean;

  /**
   * <p> Allows all IAM users in your account to use the AWS Management Console to change their own passwords. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/HowToPwdIAMUser.html">Letting IAM Users Change Their Own Passwords</a> in the <i>IAM User Guide</i>.</p> <p>If you do not specify a value for this parameter, then the operation uses the default value of <code>false</code>. The result is that IAM users in the account do not automatically have permissions to change their own password.</p>
   */
  AllowUsersToChangePassword?: boolean;

  /**
   * <p>The number of days that an IAM user password is valid.</p> <p>If you do not specify a value for this parameter, then the operation uses the default value of <code>0</code>. The result is that IAM user passwords never expire.</p>
   */
  MaxPasswordAge?: number;

  /**
   * <p>Specifies the number of previous passwords that IAM users are prevented from reusing.</p> <p>If you do not specify a value for this parameter, then the operation uses the default value of <code>0</code>. The result is that IAM users are not prevented from reusing previous passwords.</p>
   */
  PasswordReusePrevention?: number;

  /**
   * <p>Prevents IAM users from setting a new password after their password has expired. The IAM user cannot be accessed until an administrator resets the password.</p> <p>If you do not specify a value for this parameter, then the operation uses the default value of <code>false</code>. The result is that IAM users can change their passwords after they expire and continue to sign in as the user.</p>
   */
  HardExpiry?: boolean;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
