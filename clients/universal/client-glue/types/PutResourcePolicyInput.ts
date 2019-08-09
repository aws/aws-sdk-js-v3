import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutResourcePolicyInput shape
 */
export interface PutResourcePolicyInput {
  /**
   * <p>Contains the policy document to set, in JSON format.</p>
   */
  PolicyInJson: string;

  /**
   * <p>The hash value returned when the previous policy was set using <code>PutResourcePolicy</code>. Its purpose is to prevent concurrent modifications of a policy. Do not use this parameter if no previous policy has been set.</p>
   */
  PolicyHashCondition?: string;

  /**
   * <p>A value of <code>MUST_EXIST</code> is used to update a policy. A value of <code>NOT_EXIST</code> is used to create a new policy. If a value of <code>NONE</code> or a null value is used, the call will not depend on the existence of a policy.</p>
   */
  PolicyExistsCondition?: "MUST_EXIST" | "NOT_EXIST" | "NONE" | string;

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
