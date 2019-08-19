import { _MaintenanceWindowFilter } from "./_MaintenanceWindowFilter";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeMaintenanceWindowsInput shape
 */
export interface DescribeMaintenanceWindowsInput {
  /**
   * <p>Optional filters used to narrow down the scope of the returned maintenance windows. Supported filter keys are <b>Name</b> and <b>Enabled</b>.</p>
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
