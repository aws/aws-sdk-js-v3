/**
 * Settings to specify if an action follows another.
 */
export interface _FollowModeScheduleActionStartSettings {
  /**
   * Identifies whether this action starts relative to the start or relative to the end of the reference action.
   */
  FollowPoint: "END" | "START" | string;

  /**
   * The action name of another action that this one refers to.
   */
  ReferenceActionName: string;
}

export type _UnmarshalledFollowModeScheduleActionStartSettings = _FollowModeScheduleActionStartSettings;
