import {
  _ScheduleAction,
  _UnmarshalledScheduleAction
} from "./_ScheduleAction";

/**
 * List of actions that have been deleted from the schedule.
 */
export interface _BatchScheduleActionDeleteResult {
  /**
   * List of actions that have been deleted from the schedule.
   */
  ScheduleActions: Array<_ScheduleAction> | Iterable<_ScheduleAction>;
}

export interface _UnmarshalledBatchScheduleActionDeleteResult
  extends _BatchScheduleActionDeleteResult {
  /**
   * List of actions that have been deleted from the schedule.
   */
  ScheduleActions: Array<_UnmarshalledScheduleAction>;
}
