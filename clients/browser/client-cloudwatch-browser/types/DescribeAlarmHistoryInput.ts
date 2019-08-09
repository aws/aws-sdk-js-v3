import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeAlarmHistoryInput shape
 */
export interface DescribeAlarmHistoryInput {
  /**
   * <p>The name of the alarm.</p>
   */
  AlarmName?: string;

  /**
   * <p>The type of alarm histories to retrieve.</p>
   */
  HistoryItemType?: "ConfigurationUpdate" | "StateUpdate" | "Action" | string;

  /**
   * <p>The starting date to retrieve alarm history.</p>
   */
  StartDate?: Date | string | number;

  /**
   * <p>The ending date to retrieve alarm history.</p>
   */
  EndDate?: Date | string | number;

  /**
   * <p>The maximum number of alarm history records to retrieve.</p>
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
