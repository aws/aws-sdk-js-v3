import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdatePolicyInput shape
 */
export interface UpdatePolicyInput {
  /**
   * <p>The unique identifier (ID) of the policy that you want to update.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a policy ID string requires "p-" followed by from 8 to 128 lower-case letters or digits.</p>
   */
  PolicyId: string;

  /**
   * <p>If provided, the new name for the policy.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> that is used to validate this parameter is a string of any of the characters in the ASCII character range.</p>
   */
  Name?: string;

  /**
   * <p>If provided, the new description for the policy.</p>
   */
  Description?: string;

  /**
   * <p>If provided, the new content for the policy. The text must be correctly formatted JSON that complies with the syntax for the policy's type. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_scp-syntax.html">Service Control Policy Syntax</a> in the <i>AWS Organizations User Guide.</i> </p>
   */
  Content?: string;

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
