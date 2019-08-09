import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SetAlarmStateInput shape
 */
export interface SetAlarmStateInput {
  /**
   * <p>The name for the alarm. This name must be unique within the AWS account. The maximum length is 255 characters.</p>
   */
  AlarmName: string;

  /**
   * <p>The value of the state.</p>
   */
  StateValue: "OK" | "ALARM" | "INSUFFICIENT_DATA" | string;

  /**
   * <p>The reason that this alarm is set to this specific state, in text format.</p>
   */
  StateReason: string;

  /**
   * <p>The reason that this alarm is set to this specific state, in JSON format.</p>
   */
  StateReasonData?: string;

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
