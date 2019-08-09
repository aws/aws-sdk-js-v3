/**
 * A list of schedule actions to delete.
 */
export interface _BatchScheduleActionDeleteRequest {
  /**
   * A list of schedule actions to delete.
   */
  ActionNames: Array<string> | Iterable<string>;
}

export interface _UnmarshalledBatchScheduleActionDeleteRequest
  extends _BatchScheduleActionDeleteRequest {
  /**
   * A list of schedule actions to delete.
   */
  ActionNames: Array<string>;
}
