import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeEventsInput shape
 */
export interface DescribeEventsInput {
  /**
   * <p>The identifier of the event source for which events will be returned. If not specified, then all sources are included in the response.</p>
   */
  SourceName?: string;

  /**
   * <p>The event source to retrieve events for. If no value is specified, all events are returned.</p>
   */
  SourceType?: "CLUSTER" | "PARAMETER_GROUP" | "SUBNET_GROUP" | string;

  /**
   * <p>The beginning of the time interval to retrieve events for, specified in ISO 8601 format.</p>
   */
  StartTime?: Date | string | number;

  /**
   * <p>The end of the time interval for which to retrieve events, specified in ISO 8601 format.</p>
   */
  EndTime?: Date | string | number;

  /**
   * <p>The number of minutes' worth of events to retrieve.</p>
   */
  Duration?: number;

  /**
   * <p>The maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p> <p>The value for <code>MaxResults</code> must be between 20 and 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by <code>MaxResults</code>.</p>
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
