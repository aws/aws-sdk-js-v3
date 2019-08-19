import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateAccountInput shape
 */
export interface CreateAccountInput {
  /**
   * <p>The email address of the owner to assign to the new member account. This email address must not already be associated with another AWS account. You must use a valid email address to complete account creation. You can't access the root user of the account or remove an account that was created with an invalid email address.</p>
   */
  Email: string;

  /**
   * <p>The friendly name of the member account.</p>
   */
  AccountName: string;

  /**
   * <p>(Optional)</p> <p>The name of an IAM role that AWS Organizations automatically preconfigures in the new member account. This role trusts the master account, allowing users in the master account to assume the role, as permitted by the master account administrator. The role has administrator permissions in the new member account.</p> <p>If you don't specify this parameter, the role name defaults to <code>OrganizationAccountAccessRole</code>.</p> <p>For more information about how to use this role to access the member account, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_access.html#orgs_manage_accounts_create-cross-account-role">Accessing and Administering the Member Accounts in Your Organization</a> in the <i>AWS Organizations User Guide</i>, and steps 2 and 3 in <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html">Tutorial: Delegate Access Across AWS Accounts Using IAM Roles</a> in the <i>IAM User Guide.</i> </p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> that is used to validate this parameter is a string of characters that can consist of uppercase letters, lowercase letters, digits with no spaces, and any of the following characters: =,.@-</p>
   */
  RoleName?: string;

  /**
   * <p>If set to <code>ALLOW</code>, the new account enables IAM users to access account billing information <i>if</i> they have the required permissions. If set to <code>DENY</code>, only the root user of the new account can access account billing information. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/grantaccess.html#ControllingAccessWebsite-Activate">Activating Access to the Billing and Cost Management Console</a> in the <i>AWS Billing and Cost Management User Guide</i>.</p> <p>If you don't specify this parameter, the value defaults to <code>ALLOW</code>, and IAM users and roles with the required permissions can access billing information for the new account.</p>
   */
  IamUserAccessToBilling?: "ALLOW" | "DENY" | string;

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
