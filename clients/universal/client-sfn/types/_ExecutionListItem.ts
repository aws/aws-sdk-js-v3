/**
 * <p>Contains details about an execution.</p>
 */
export interface _ExecutionListItem {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the execution.</p>
   */
  executionArn: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the executed state machine.</p>
   */
  stateMachineArn: string;

  /**
   * <p>The name of the execution.</p> <p>A name must <i>not</i> contain:</p> <ul> <li> <p>whitespace</p> </li> <li> <p>brackets <code>&lt; &gt; { } [ ]</code> </p> </li> <li> <p>wildcard characters <code>? *</code> </p> </li> <li> <p>special characters <code>" # % \ ^ | ~ ` $ &amp; , ; : /</code> </p> </li> <li> <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>)</p> </li> </ul>
   */
  name: string;

  /**
   * <p>The current status of the execution.</p>
   */
  status: "RUNNING" | "SUCCEEDED" | "FAILED" | "TIMED_OUT" | "ABORTED" | string;

  /**
   * <p>The date the execution started.</p>
   */
  startDate: Date | string | number;

  /**
   * <p>If the execution already ended, the date the execution stopped.</p>
   */
  stopDate?: Date | string | number;
}

export interface _UnmarshalledExecutionListItem extends _ExecutionListItem {
  /**
   * <p>The date the execution started.</p>
   */
  startDate: Date;

  /**
   * <p>If the execution already ended, the date the execution stopped.</p>
   */
  stopDate?: Date;
}
