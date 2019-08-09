/**
 * <p>Used to filter the closed workflow executions in visibility APIs by their close status.</p>
 */
export interface _CloseStatusFilter {
  /**
   * <p> The close status that must match the close status of an execution for it to meet the criteria of this filter.</p>
   */
  status:
    | "COMPLETED"
    | "FAILED"
    | "CANCELED"
    | "TERMINATED"
    | "CONTINUED_AS_NEW"
    | "TIMED_OUT"
    | string;
}

export type _UnmarshalledCloseStatusFilter = _CloseStatusFilter;
