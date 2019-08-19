/**
 * <p>Defines a condition under which a trigger fires.</p>
 */
export interface _Condition {
  /**
   * <p>A logical operator.</p>
   */
  LogicalOperator?: "EQUALS" | string;

  /**
   * <p>The name of the job whose <code>JobRuns</code> this condition applies to, and on which this trigger waits.</p>
   */
  JobName?: string;

  /**
   * <p>The condition state. Currently, the values supported are <code>SUCCEEDED</code>, <code>STOPPED</code>, <code>TIMEOUT</code>, and <code>FAILED</code>.</p>
   */
  State?:
    | "STARTING"
    | "RUNNING"
    | "STOPPING"
    | "STOPPED"
    | "SUCCEEDED"
    | "FAILED"
    | "TIMEOUT"
    | string;

  /**
   * <p>The name of the crawler to which this condition applies.</p>
   */
  CrawlerName?: string;

  /**
   * <p>The state of the crawler to which this condition applies.</p>
   */
  CrawlState?: "RUNNING" | "SUCCEEDED" | "CANCELLED" | "FAILED" | string;
}

export type _UnmarshalledCondition = _Condition;
