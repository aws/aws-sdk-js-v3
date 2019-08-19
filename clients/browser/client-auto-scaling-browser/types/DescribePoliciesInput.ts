import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribePoliciesInput shape
 */
export interface DescribePoliciesInput {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName?: string;

  /**
   * <p>The names of one or more policies. If you omit this parameter, all policies are described. If a group name is provided, the results are limited to that group. This list is limited to 50 items. If you specify an unknown policy name, it is ignored with no error.</p>
   */
  PolicyNames?: Array<string> | Iterable<string>;

  /**
   * <p>One or more policy types. The valid values are <code>SimpleScaling</code>, <code>StepScaling</code>, and <code>TargetTrackingScaling</code>.</p>
   */
  PolicyTypes?: Array<string> | Iterable<string>;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous call.)</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to be returned with each call. The default value is <code>50</code> and the maximum value is <code>100</code>.</p>
   */
  MaxRecords?: number;

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
