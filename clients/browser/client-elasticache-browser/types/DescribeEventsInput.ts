import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the input of a <code>DescribeEvents</code> operation.</p>
 */
export interface DescribeEventsInput {
  /**
   * <p>The identifier of the event source for which events are returned. If not specified, all sources are included in the response.</p>
   */
  SourceIdentifier?: string;

  /**
   * <p>The event source to retrieve events for. If no value is specified, all events are returned.</p>
   */
  SourceType?:
    | "cache-cluster"
    | "cache-parameter-group"
    | "cache-security-group"
    | "cache-subnet-group"
    | "replication-group"
    | string;

  /**
   * <p>The beginning of the time interval to retrieve events for, specified in ISO 8601 format.</p> <p> <b>Example:</b> 2017-03-30T07:03:49.555Z</p>
   */
  StartTime?: Date | string | number;

  /**
   * <p>The end of the time interval for which to retrieve events, specified in ISO 8601 format.</p> <p> <b>Example:</b> 2017-03-30T07:03:49.555Z</p>
   */
  EndTime?: Date | string | number;

  /**
   * <p>The number of minutes worth of events to retrieve.</p>
   */
  Duration?: number;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

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
