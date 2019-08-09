import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeAlarmsInput shape
 */
export interface DescribeAlarmsInput {
  /**
   * <p>The names of the alarms.</p>
   */
  AlarmNames?: Array<string> | Iterable<string>;

  /**
   * <p>The alarm name prefix. If this parameter is specified, you cannot specify <code>AlarmNames</code>.</p>
   */
  AlarmNamePrefix?: string;

  /**
   * <p>The state value to be used in matching alarms.</p>
   */
  StateValue?: "OK" | "ALARM" | "INSUFFICIENT_DATA" | string;

  /**
   * <p>The action name prefix.</p>
   */
  ActionPrefix?: string;

  /**
   * <p>The maximum number of alarm descriptions to retrieve.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The token returned by a previous call to indicate that there is more data available.</p>
   */
  NextToken?: string;

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
