import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeScheduledActionsInput shape
 */
export interface DescribeScheduledActionsInput {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName?: string;

  /**
   * <p>The names of one or more scheduled actions. You can specify up to 50 actions. If you omit this parameter, all scheduled actions are described. If you specify an unknown scheduled action, it is ignored with no error.</p>
   */
  ScheduledActionNames?: Array<string> | Iterable<string>;

  /**
   * <p>The earliest scheduled start time to return. If scheduled action names are provided, this parameter is ignored.</p>
   */
  StartTime?: Date | string | number;

  /**
   * <p>The latest scheduled start time to return. If scheduled action names are provided, this parameter is ignored.</p>
   */
  EndTime?: Date | string | number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous call.)</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return with this call. The default value is <code>50</code> and the maximum value is <code>100</code>.</p>
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
