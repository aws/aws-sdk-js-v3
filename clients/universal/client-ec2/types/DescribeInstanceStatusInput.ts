import { _Filter } from "./_Filter";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeInstanceStatusInput shape
 */
export interface DescribeInstanceStatusInput {
  /**
   * <p>The filters.</p> <ul> <li> <p> <code>availability-zone</code> - The Availability Zone of the instance.</p> </li> <li> <p> <code>event.code</code> - The code for the scheduled event (<code>instance-reboot</code> | <code>system-reboot</code> | <code>system-maintenance</code> | <code>instance-retirement</code> | <code>instance-stop</code>).</p> </li> <li> <p> <code>event.description</code> - A description of the event.</p> </li> <li> <p> <code>event.instance-event-id</code> - The ID of the event whose date and time you are modifying.</p> </li> <li> <p> <code>event.not-after</code> - The latest end time for the scheduled event (for example, <code>2014-09-15T17:15:20.000Z</code>).</p> </li> <li> <p> <code>event.not-before</code> - The earliest start time for the scheduled event (for example, <code>2014-09-15T17:15:20.000Z</code>).</p> </li> <li> <p> <code>event.not-before-deadline</code> - The deadline for starting the event (for example, <code>2014-09-15T17:15:20.000Z</code>).</p> </li> <li> <p> <code>instance-state-code</code> - The code for the instance state, as a 16-bit unsigned integer. The high byte is used for internal purposes and should be ignored. The low byte is set based on the state represented. The valid values are 0 (pending), 16 (running), 32 (shutting-down), 48 (terminated), 64 (stopping), and 80 (stopped).</p> </li> <li> <p> <code>instance-state-name</code> - The state of the instance (<code>pending</code> | <code>running</code> | <code>shutting-down</code> | <code>terminated</code> | <code>stopping</code> | <code>stopped</code>).</p> </li> <li> <p> <code>instance-status.reachability</code> - Filters on instance status where the name is <code>reachability</code> (<code>passed</code> | <code>failed</code> | <code>initializing</code> | <code>insufficient-data</code>).</p> </li> <li> <p> <code>instance-status.status</code> - The status of the instance (<code>ok</code> | <code>impaired</code> | <code>initializing</code> | <code>insufficient-data</code> | <code>not-applicable</code>).</p> </li> <li> <p> <code>system-status.reachability</code> - Filters on system status where the name is <code>reachability</code> (<code>passed</code> | <code>failed</code> | <code>initializing</code> | <code>insufficient-data</code>).</p> </li> <li> <p> <code>system-status.status</code> - The system status of the instance (<code>ok</code> | <code>impaired</code> | <code>initializing</code> | <code>insufficient-data</code> | <code>not-applicable</code>).</p> </li> </ul>
   */
  Filters?: Array<_Filter> | Iterable<_Filter>;

  /**
   * <p>The instance IDs.</p> <p>Default: Describes all your instances.</p> <p>Constraints: Maximum 100 explicitly specified instance IDs.</p>
   */
  InstanceIds?: Array<string> | Iterable<string>;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned <code>NextToken</code> value. This value can be between 5 and 1000. You cannot specify this parameter and the instance IDs parameter in the same call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>When <code>true</code>, includes the health status for all instances. When <code>false</code>, includes the health status for running instances only.</p> <p>Default: <code>false</code> </p>
   */
  IncludeAllInstances?: boolean;

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
