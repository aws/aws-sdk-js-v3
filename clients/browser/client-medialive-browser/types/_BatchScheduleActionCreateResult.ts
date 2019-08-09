import {
  _ScheduleAction,
  _UnmarshalledScheduleAction
} from "./_ScheduleAction";

/**
 * List of actions that have been created in the schedule.
 */
export interface _BatchScheduleActionCreateResult {
  /**
   * List of actions that have been created in the schedule.
   */
  ScheduleActions: Array<_ScheduleAction> | Iterable<_ScheduleAction>;
}

export interface _UnmarshalledBatchScheduleActionCreateResult
  extends _BatchScheduleActionCreateResult {
  /**
   * List of actions that have been created in the schedule.
   */
  ScheduleActions: Array<_UnmarshalledScheduleAction>;
}
