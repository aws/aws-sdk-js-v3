/**
 * <p>Information about one CloudWatch Logs Insights query that matches the request in a <code>DescribeQueries</code> operation. </p>
 */
export interface _QueryInfo {
  /**
   * <p>The unique ID number of this query.</p>
   */
  queryId?: string;

  /**
   * <p>The query string used in this query.</p>
   */
  queryString?: string;

  /**
   * <p>The status of this query. Possible values are <code>Cancelled</code>, <code>Complete</code>, <code>Failed</code>, <code>Running</code>, <code>Scheduled</code>, and <code>Unknown</code>.</p>
   */
  status?:
    | "Scheduled"
    | "Running"
    | "Complete"
    | "Failed"
    | "Cancelled"
    | string;

  /**
   * <p>The date and time that this query was created.</p>
   */
  createTime?: number;

  /**
   * <p>The name of the log group scanned by this query.</p>
   */
  logGroupName?: string;
}

export type _UnmarshalledQueryInfo = _QueryInfo;
