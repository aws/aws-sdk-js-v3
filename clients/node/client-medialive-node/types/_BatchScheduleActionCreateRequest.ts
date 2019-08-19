import {
  _ScheduleAction,
  _UnmarshalledScheduleAction
} from "./_ScheduleAction";

/**
 * A list of schedule actions to create (in a request) or that have been created (in a response).
 */
export interface _BatchScheduleActionCreateRequest {
  /**
   * A list of schedule actions to create.
   */
  ScheduleActions: Array<_ScheduleAction> | Iterable<_ScheduleAction>;
}

export interface _UnmarshalledBatchScheduleActionCreateRequest
  extends _BatchScheduleActionCreateRequest {
  /**
   * A list of schedule actions to create.
   */
  ScheduleActions: Array<_UnmarshalledScheduleAction>;
}
