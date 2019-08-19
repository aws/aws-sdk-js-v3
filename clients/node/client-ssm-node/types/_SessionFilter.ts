/**
 * <p>Describes a filter for Session Manager information.</p>
 */
export interface _SessionFilter {
  /**
   * <p>The name of the filter.</p>
   */
  key:
    | "InvokedAfter"
    | "InvokedBefore"
    | "Target"
    | "Owner"
    | "Status"
    | string;

  /**
   * <p>The filter value. Valid values for each filter key are as follows:</p> <ul> <li> <p>InvokedAfter: Specify a timestamp to limit your results. For example, specify 2018-08-29T00:00:00Z to see sessions that started August 29, 2018, and later.</p> </li> <li> <p>InvokedBefore: Specify a timestamp to limit your results. For example, specify 2018-08-29T00:00:00Z to see sessions that started before August 29, 2018.</p> </li> <li> <p>Target: Specify an instance to which session connections have been made.</p> </li> <li> <p>Owner: Specify an AWS user account to see a list of sessions started by that user.</p> </li> <li> <p>Status: Specify a valid session status to see a list of all sessions with that status. Status values you can specify include:</p> <ul> <li> <p>Connected</p> </li> <li> <p>Connecting</p> </li> <li> <p>Disconnected</p> </li> <li> <p>Terminated</p> </li> <li> <p>Terminating</p> </li> <li> <p>Failed</p> </li> </ul> </li> </ul>
   */
  value: string;
}

export type _UnmarshalledSessionFilter = _SessionFilter;
