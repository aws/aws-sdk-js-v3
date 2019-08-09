import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetServiceGraphInput shape
 */
export interface GetServiceGraphInput {
  /**
   * <p>The start of the time frame for which to generate a graph.</p>
   */
  StartTime: Date | string | number;

  /**
   * <p>The end of the timeframe for which to generate a graph.</p>
   */
  EndTime: Date | string | number;

  /**
   * <p>The name of a group to generate a graph based on.</p>
   */
  GroupName?: string;

  /**
   * <p>The ARN of a group to generate a graph based on.</p>
   */
  GroupARN?: string;

  /**
   * <p>Pagination token. Not used.</p>
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
