import { _ScheduledInstancesLaunchSpecification } from "./_ScheduledInstancesLaunchSpecification";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the parameters for RunScheduledInstances.</p>
 */
export interface RunScheduledInstancesInput {
  /**
   * <p>Unique, case-sensitive identifier that ensures the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The number of instances.</p> <p>Default: 1</p>
   */
  InstanceCount?: number;

  /**
   * <p>The launch specification. You must match the instance type, Availability Zone, network, and platform of the schedule that you purchased.</p>
   */
  LaunchSpecification: _ScheduledInstancesLaunchSpecification;

  /**
   * <p>The Scheduled Instance ID.</p>
   */
  ScheduledInstanceId: string;

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
