import {
  _ScheduleActionSettings,
  _UnmarshalledScheduleActionSettings
} from "./_ScheduleActionSettings";
import {
  _ScheduleActionStartSettings,
  _UnmarshalledScheduleActionStartSettings
} from "./_ScheduleActionStartSettings";

/**
 * Contains information on a single schedule action.
 */
export interface _ScheduleAction {
  /**
   * The name of the action, must be unique within the schedule. This name provides the main reference to an action once it is added to the schedule. A name is unique if it is no longer in the schedule. The schedule is automatically cleaned up to remove actions with a start time of more than 1 hour ago (approximately) so at that point a name can be reused.
   */
  ActionName: string;

  /**
   * Settings for this schedule action.
   */
  ScheduleActionSettings: _ScheduleActionSettings;

  /**
   * The time for the action to start in the channel.
   */
  ScheduleActionStartSettings: _ScheduleActionStartSettings;
}

export interface _UnmarshalledScheduleAction extends _ScheduleAction {
  /**
   * Settings for this schedule action.
   */
  ScheduleActionSettings: _UnmarshalledScheduleActionSettings;

  /**
   * The time for the action to start in the channel.
   */
  ScheduleActionStartSettings: _UnmarshalledScheduleActionStartSettings;
}
