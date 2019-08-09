/**
 * <p>Used to filter the workflow executions in visibility APIs by various time-based rules. Each parameter, if specified, defines a rule that must be satisfied by each returned query result. The parameter values are in the <a href="https://en.wikipedia.org/wiki/Unix_time">Unix Time format</a>. For example: <code>"oldestDate": 1325376070.</code> </p>
 */
export interface _ExecutionTimeFilter {
  /**
   * <p>Specifies the oldest start or close date and time to return.</p>
   */
  oldestDate: Date | string | number;

  /**
   * <p>Specifies the latest start or close date and time to return.</p>
   */
  latestDate?: Date | string | number;
}

export interface _UnmarshalledExecutionTimeFilter extends _ExecutionTimeFilter {
  /**
   * <p>Specifies the oldest start or close date and time to return.</p>
   */
  oldestDate: Date;

  /**
   * <p>Specifies the latest start or close date and time to return.</p>
   */
  latestDate?: Date;
}
