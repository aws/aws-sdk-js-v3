/**
 * <p>A summary of the call execution that includes an execution ID, the type of execution (for example, <code>Command</code>), and the date/time of the execution using a datetime object that is saved in the following format: yyyy-MM-dd'T'HH:mm:ss'Z'.</p>
 */
export interface _ComplianceExecutionSummary {
  /**
   * <p>The time the execution ran as a datetime object that is saved in the following format: yyyy-MM-dd'T'HH:mm:ss'Z'.</p>
   */
  ExecutionTime: Date | string | number;

  /**
   * <p>An ID created by the system when <code>PutComplianceItems</code> was called. For example, <code>CommandID</code> is a valid execution ID. You can use this ID in subsequent calls.</p>
   */
  ExecutionId?: string;

  /**
   * <p>The type of execution. For example, <code>Command</code> is a valid execution type.</p>
   */
  ExecutionType?: string;
}

export interface _UnmarshalledComplianceExecutionSummary
  extends _ComplianceExecutionSummary {
  /**
   * <p>The time the execution ran as a datetime object that is saved in the following format: yyyy-MM-dd'T'HH:mm:ss'Z'.</p>
   */
  ExecutionTime: Date;
}
