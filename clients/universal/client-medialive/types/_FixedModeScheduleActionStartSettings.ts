/**
 * Start time for the action.
 */
export interface _FixedModeScheduleActionStartSettings {
  /**
   * Start time for the action to start in the channel. (Not the time for the action to be added to the schedule: actions are always added to the schedule immediately.) UTC format: yyyy-mm-ddThh:mm:ss.nnnZ. All the letters are digits (for example, mm might be 01) except for the two constants "T" for time and "Z" for "UTC format".
   */
  Time: string;
}

export type _UnmarshalledFixedModeScheduleActionStartSettings = _FixedModeScheduleActionStartSettings;
