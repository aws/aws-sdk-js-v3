import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeletePolicyInput shape
 */
export interface DeletePolicyInput {
  /**
   * <p>The ID of the policy that you want to delete. <code>PolicyId</code> is returned by <code>PutPolicy</code> and by <code>ListPolicies</code>.</p>
   */
  PolicyId: string;

  /**
   * <p>If <code>True</code>, the request will also perform a clean-up process that will:</p> <ul> <li> <p>Delete rule groups created by AWS Firewall Manager</p> </li> <li> <p>Remove web ACLs from in-scope resources</p> </li> <li> <p>Delete web ACLs that contain no rules or rule groups</p> </li> </ul> <p>After the cleanup, in-scope resources will no longer be protected by web ACLs in this policy. Protection of out-of-scope resources will remain unchanged. Scope is determined by tags and accounts associated with the policy. When creating the policy, if you specified that only resources in specific accounts or with specific tags be protected by the policy, those resources are in-scope. All others are out of scope. If you did not specify tags or accounts, all resources are in-scope. </p>
   */
  DeleteAllPolicyResources?: boolean;

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
