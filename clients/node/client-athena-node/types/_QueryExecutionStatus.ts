/**
 * <p>The completion date, current state, submission time, and state change reason (if applicable) for the query execution.</p>
 */
export interface _QueryExecutionStatus {
  /**
   * <p>The state of query execution. <code>QUEUED</code> state is listed but is not used by Athena and is reserved for future use. <code>RUNNING</code> indicates that the query has been submitted to the service, and Athena will execute the query as soon as resources are available. <code>SUCCEEDED</code> indicates that the query completed without errors. <code>FAILED</code> indicates that the query experienced an error and did not complete processing. <code>CANCELLED</code> indicates that a user input interrupted query execution. </p>
   */
  State?: "QUEUED" | "RUNNING" | "SUCCEEDED" | "FAILED" | "CANCELLED" | string;

  /**
   * <p>Further detail about the status of the query.</p>
   */
  StateChangeReason?: string;

  /**
   * <p>The date and time that the query was submitted.</p>
   */
  SubmissionDateTime?: Date | string | number;

  /**
   * <p>The date and time that the query completed.</p>
   */
  CompletionDateTime?: Date | string | number;
}

export interface _UnmarshalledQueryExecutionStatus
  extends _QueryExecutionStatus {
  /**
   * <p>The date and time that the query was submitted.</p>
   */
  SubmissionDateTime?: Date;

  /**
   * <p>The date and time that the query completed.</p>
   */
  CompletionDateTime?: Date;
}
