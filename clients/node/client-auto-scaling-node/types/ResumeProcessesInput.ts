import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ResumeProcessesInput shape
 */
export interface ResumeProcessesInput {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string;

  /**
   * <p>One or more of the following processes. If you omit this parameter, all processes are specified.</p> <ul> <li> <p> <code>Launch</code> </p> </li> <li> <p> <code>Terminate</code> </p> </li> <li> <p> <code>HealthCheck</code> </p> </li> <li> <p> <code>ReplaceUnhealthy</code> </p> </li> <li> <p> <code>AZRebalance</code> </p> </li> <li> <p> <code>AlarmNotification</code> </p> </li> <li> <p> <code>ScheduledActions</code> </p> </li> <li> <p> <code>AddToLoadBalancer</code> </p> </li> </ul>
   */
  ScalingProcesses?: Array<string> | Iterable<string>;

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
