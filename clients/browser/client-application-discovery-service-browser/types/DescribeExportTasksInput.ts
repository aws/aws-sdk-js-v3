import { _ExportFilter } from "./_ExportFilter";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeExportTasksInput shape
 */
export interface DescribeExportTasksInput {
  /**
   * <p>One or more unique identifiers used to query the status of an export request.</p>
   */
  exportIds?: Array<string> | Iterable<string>;

  /**
   * <p>One or more filters.</p> <ul> <li> <p> <code>AgentId</code> - ID of the agent whose collected data will be exported</p> </li> </ul>
   */
  filters?: Array<_ExportFilter> | Iterable<_ExportFilter>;

  /**
   * <p>The maximum number of volume results returned by <code>DescribeExportTasks</code> in paginated output. When this parameter is used, <code>DescribeExportTasks</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element.</p>
   */
  maxResults?: number;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeExportTasks</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is null when there are no more results to return.</p>
   */
  nextToken?: string;

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
