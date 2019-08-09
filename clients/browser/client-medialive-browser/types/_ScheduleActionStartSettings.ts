import {
  _FixedModeScheduleActionStartSettings,
  _UnmarshalledFixedModeScheduleActionStartSettings
} from "./_FixedModeScheduleActionStartSettings";
import {
  _FollowModeScheduleActionStartSettings,
  _UnmarshalledFollowModeScheduleActionStartSettings
} from "./_FollowModeScheduleActionStartSettings";
import {
  _ImmediateModeScheduleActionStartSettings,
  _UnmarshalledImmediateModeScheduleActionStartSettings
} from "./_ImmediateModeScheduleActionStartSettings";

/**
 * Settings to specify when an action should occur. Only one of the options must be selected.
 */
export interface _ScheduleActionStartSettings {
  /**
   * Option for specifying the start time for an action.
   */
  FixedModeScheduleActionStartSettings?: _FixedModeScheduleActionStartSettings;

  /**
   * Option for specifying an action as relative to another action.
   */
  FollowModeScheduleActionStartSettings?: _FollowModeScheduleActionStartSettings;

  /**
   * Option for specifying an action that should be applied immediately.
   */
  ImmediateModeScheduleActionStartSettings?: _ImmediateModeScheduleActionStartSettings;
}

export interface _UnmarshalledScheduleActionStartSettings
  extends _ScheduleActionStartSettings {
  /**
   * Option for specifying the start time for an action.
   */
  FixedModeScheduleActionStartSettings?: _UnmarshalledFixedModeScheduleActionStartSettings;

  /**
   * Option for specifying an action as relative to another action.
   */
  FollowModeScheduleActionStartSettings?: _UnmarshalledFollowModeScheduleActionStartSettings;

  /**
   * Option for specifying an action that should be applied immediately.
   */
  ImmediateModeScheduleActionStartSettings?: _UnmarshalledImmediateModeScheduleActionStartSettings;
}
