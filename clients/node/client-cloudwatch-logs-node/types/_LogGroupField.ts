/**
 * <p>The fields contained in log events found by a <code>GetLogGroupFields</code> operation, along with the percentage of queried log events in which each field appears.</p>
 */
export interface _LogGroupField {
  /**
   * <p>The name of a log field.</p>
   */
  name?: string;

  /**
   * <p>The percentage of log events queried that contained the field.</p>
   */
  percent?: number;
}

export type _UnmarshalledLogGroupField = _LogGroupField;
