import { _Filter } from "./_Filter";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface DescribeEventsInput {
  /**
   * <p> The identifier of an event source.</p>
   */
  SourceIdentifier?: string;

  /**
   * <p>The type of AWS DMS resource that generates events.</p> <p>Valid values: replication-instance | replication-task</p>
   */
  SourceType?: "replication-instance" | string;

  /**
   * <p>The start time for the events to be listed.</p>
   */
  StartTime?: Date | string | number;

  /**
   * <p>The end time for the events to be listed.</p>
   */
  EndTime?: Date | string | number;

  /**
   * <p>The duration of the events to be listed.</p>
   */
  Duration?: number;

  /**
   * <p>A list of event categories for the source type that you've chosen.</p>
   */
  EventCategories?: Array<string> | Iterable<string>;

  /**
   * <p>Filters applied to the action.</p>
   */
  Filters?: Array<_Filter> | Iterable<_Filter>;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. </p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>
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
