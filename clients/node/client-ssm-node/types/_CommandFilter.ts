/**
 * <p>Describes a command filter.</p>
 */
export interface _CommandFilter {
  /**
   * <p>The name of the filter.</p>
   */
  key:
    | "InvokedAfter"
    | "InvokedBefore"
    | "Status"
    | "ExecutionStage"
    | "DocumentName"
    | string;

  /**
   * <p>The filter value. Valid values for each filter key are as follows:</p> <ul> <li> <p> <b>InvokedAfter</b>: Specify a timestamp to limit your results. For example, specify <code>2018-07-07T00:00:00Z</code> to see a list of command executions occurring July 7, 2018, and later.</p> </li> <li> <p> <b>InvokedBefore</b>: Specify a timestamp to limit your results. For example, specify <code>2018-07-07T00:00:00Z</code> to see a list of command executions from before July 7, 2018.</p> </li> <li> <p> <b>Status</b>: Specify a valid command status to see a list of all command executions with that status. Status values you can specify include:</p> <ul> <li> <p> <code>Pending</code> </p> </li> <li> <p> <code>InProgress</code> </p> </li> <li> <p> <code>Success</code> </p> </li> <li> <p> <code>Cancelled</code> </p> </li> <li> <p> <code>Failed</code> </p> </li> <li> <p> <code>TimedOut</code> </p> </li> <li> <p> <code>Cancelling</code> </p> </li> </ul> </li> <li> <p> <b>DocumentName</b>: Specify name of the SSM document for which you want to see command execution results. For example, specify <code>AWS-RunPatchBaseline</code> to see command executions that used this SSM document to perform security patching operations on instances. </p> </li> <li> <p> <b>ExecutionStage</b>: Specify one of the following values:</p> <ul> <li> <p> <code>Executing</code>: Returns a list of command executions that are currently still running.</p> </li> <li> <p> <code>Complete</code>: Returns a list of command executions that have already completed. </p> </li> </ul> </li> </ul>
   */
  value: string;
}

export type _UnmarshalledCommandFilter = _CommandFilter;
