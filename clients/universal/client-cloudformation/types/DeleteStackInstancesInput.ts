import { _StackSetOperationPreferences } from "./_StackSetOperationPreferences";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteStackInstancesInput shape
 */
export interface DeleteStackInstancesInput {
  /**
   * <p>The name or unique ID of the stack set that you want to delete stack instances for.</p>
   */
  StackSetName: string;

  /**
   * <p>The names of the AWS accounts that you want to delete stack instances for.</p>
   */
  Accounts: Array<string> | Iterable<string>;

  /**
   * <p>The regions where you want to delete stack set instances. </p>
   */
  Regions: Array<string> | Iterable<string>;

  /**
   * <p>Preferences for how AWS CloudFormation performs this stack set operation.</p>
   */
  OperationPreferences?: _StackSetOperationPreferences;

  /**
   * <p>Removes the stack instances from the specified stack set, but doesn't delete the stacks. You can't reassociate a retained stack or add an existing, saved stack to a new stack set.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p>
   */
  RetainStacks: boolean;

  /**
   * <p>The unique identifier for this stack set operation. </p> <p>If you don't specify an operation ID, the SDK generates one automatically. </p> <p>The operation ID also functions as an idempotency token, to ensure that AWS CloudFormation performs the stack set operation only once, even if you retry the request multiple times. You can retry stack set operation requests to ensure that AWS CloudFormation successfully received them.</p> <p>Repeating this stack set operation with a new operation ID retries all stack instances whose status is <code>OUTDATED</code>. </p>
   */
  OperationId?: string;

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
