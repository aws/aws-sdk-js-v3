import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ReportInstanceStatusInput shape
 */
export interface ReportInstanceStatusInput {
  /**
   * <p>Descriptive text about the health state of your instance.</p>
   */
  Description?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The time at which the reported instance health state ended.</p>
   */
  EndTime?: Date | string | number;

  /**
   * <p>The instances.</p>
   */
  Instances: Array<string> | Iterable<string>;

  /**
   * <p>The reason codes that describe the health state of your instance.</p> <ul> <li> <p> <code>instance-stuck-in-state</code>: My instance is stuck in a state.</p> </li> <li> <p> <code>unresponsive</code>: My instance is unresponsive.</p> </li> <li> <p> <code>not-accepting-credentials</code>: My instance is not accepting my credentials.</p> </li> <li> <p> <code>password-not-available</code>: A password is not available for my instance.</p> </li> <li> <p> <code>performance-network</code>: My instance is experiencing performance problems that I believe are network related.</p> </li> <li> <p> <code>performance-instance-store</code>: My instance is experiencing performance problems that I believe are related to the instance stores.</p> </li> <li> <p> <code>performance-ebs-volume</code>: My instance is experiencing performance problems that I believe are related to an EBS volume.</p> </li> <li> <p> <code>performance-other</code>: My instance is experiencing performance problems.</p> </li> <li> <p> <code>other</code>: [explain using the description parameter]</p> </li> </ul>
   */
  ReasonCodes:
    | Array<
        | "instance-stuck-in-state"
        | "unresponsive"
        | "not-accepting-credentials"
        | "password-not-available"
        | "performance-network"
        | "performance-instance-store"
        | "performance-ebs-volume"
        | "performance-other"
        | "other"
        | string
      >
    | Iterable<
        | "instance-stuck-in-state"
        | "unresponsive"
        | "not-accepting-credentials"
        | "password-not-available"
        | "performance-network"
        | "performance-instance-store"
        | "performance-ebs-volume"
        | "performance-other"
        | "other"
        | string
      >;

  /**
   * <p>The time at which the reported instance health state began.</p>
   */
  StartTime?: Date | string | number;

  /**
   * <p>The status of all instances listed.</p>
   */
  Status: "ok" | "impaired" | string;

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
