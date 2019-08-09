import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreatePolicyInput shape
 */
export interface CreatePolicyInput {
  /**
   * <p>The policy content to add to the new policy. For example, if you create a <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html">service control policy</a> (SCP), this string must be JSON text that specifies the permissions that admins in attached accounts can delegate to their users, groups, and roles. For more information about the SCP syntax, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_scp-syntax.html">Service Control Policy Syntax</a> in the <i>AWS Organizations User Guide.</i> </p>
   */
  Content: string;

  /**
   * <p>An optional description to assign to the policy.</p>
   */
  Description: string;

  /**
   * <p>The friendly name to assign to the policy.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> that is used to validate this parameter is a string of any of the characters in the ASCII character range.</p>
   */
  Name: string;

  /**
   * <p>The type of policy to create.</p> <note> <p>In the current release, the only type of policy that you can create is a service control policy (SCP).</p> </note>
   */
  Type: "SERVICE_CONTROL_POLICY" | string;

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
