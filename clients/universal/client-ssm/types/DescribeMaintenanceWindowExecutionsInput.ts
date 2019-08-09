import { _MaintenanceWindowFilter } from "./_MaintenanceWindowFilter";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeMaintenanceWindowExecutionsInput shape
 */
export interface DescribeMaintenanceWindowExecutionsInput {
  /**
   * <p>The ID of the maintenance window whose executions should be retrieved.</p>
   */
  WindowId: string;

  /**
   * <p>Each entry in the array is a structure containing:</p> <p>Key (string, between 1 and 128 characters)</p> <p>Values (array of strings, each string is between 1 and 256 characters)</p> <p>The supported Keys are ExecutedBefore and ExecutedAfter with the value being a date/time string such as 2016-11-04T05:00:00Z.</p>
   */
  Filters?:
    | Array<_MaintenanceWindowFilter>
    | Iterable<_MaintenanceWindowFilter>;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous call.)</p>
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
