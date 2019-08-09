import {
  _HlsTimedMetadataScheduleActionSettings,
  _UnmarshalledHlsTimedMetadataScheduleActionSettings
} from "./_HlsTimedMetadataScheduleActionSettings";
import {
  _InputSwitchScheduleActionSettings,
  _UnmarshalledInputSwitchScheduleActionSettings
} from "./_InputSwitchScheduleActionSettings";
import {
  _PauseStateScheduleActionSettings,
  _UnmarshalledPauseStateScheduleActionSettings
} from "./_PauseStateScheduleActionSettings";
import {
  _Scte35ReturnToNetworkScheduleActionSettings,
  _UnmarshalledScte35ReturnToNetworkScheduleActionSettings
} from "./_Scte35ReturnToNetworkScheduleActionSettings";
import {
  _Scte35SpliceInsertScheduleActionSettings,
  _UnmarshalledScte35SpliceInsertScheduleActionSettings
} from "./_Scte35SpliceInsertScheduleActionSettings";
import {
  _Scte35TimeSignalScheduleActionSettings,
  _UnmarshalledScte35TimeSignalScheduleActionSettings
} from "./_Scte35TimeSignalScheduleActionSettings";
import {
  _StaticImageActivateScheduleActionSettings,
  _UnmarshalledStaticImageActivateScheduleActionSettings
} from "./_StaticImageActivateScheduleActionSettings";
import {
  _StaticImageDeactivateScheduleActionSettings,
  _UnmarshalledStaticImageDeactivateScheduleActionSettings
} from "./_StaticImageDeactivateScheduleActionSettings";

/**
 * Holds the settings for a single schedule action.
 */
export interface _ScheduleActionSettings {
  /**
   * Action to insert HLS metadata
   */
  HlsTimedMetadataSettings?: _HlsTimedMetadataScheduleActionSettings;

  /**
   * Action to switch the input
   */
  InputSwitchSettings?: _InputSwitchScheduleActionSettings;

  /**
   * Action to pause or unpause one or both channel pipelines
   */
  PauseStateSettings?: _PauseStateScheduleActionSettings;

  /**
   * Action to insert SCTE-35 return_to_network message
   */
  Scte35ReturnToNetworkSettings?: _Scte35ReturnToNetworkScheduleActionSettings;

  /**
   * Action to insert SCTE-35 splice_insert message
   */
  Scte35SpliceInsertSettings?: _Scte35SpliceInsertScheduleActionSettings;

  /**
   * Action to insert SCTE-35 time_signal message
   */
  Scte35TimeSignalSettings?: _Scte35TimeSignalScheduleActionSettings;

  /**
   * Action to activate a static image overlay
   */
  StaticImageActivateSettings?: _StaticImageActivateScheduleActionSettings;

  /**
   * Action to deactivate a static image overlay
   */
  StaticImageDeactivateSettings?: _StaticImageDeactivateScheduleActionSettings;
}

export interface _UnmarshalledScheduleActionSettings
  extends _ScheduleActionSettings {
  /**
   * Action to insert HLS metadata
   */
  HlsTimedMetadataSettings?: _UnmarshalledHlsTimedMetadataScheduleActionSettings;

  /**
   * Action to switch the input
   */
  InputSwitchSettings?: _UnmarshalledInputSwitchScheduleActionSettings;

  /**
   * Action to pause or unpause one or both channel pipelines
   */
  PauseStateSettings?: _UnmarshalledPauseStateScheduleActionSettings;

  /**
   * Action to insert SCTE-35 return_to_network message
   */
  Scte35ReturnToNetworkSettings?: _UnmarshalledScte35ReturnToNetworkScheduleActionSettings;

  /**
   * Action to insert SCTE-35 splice_insert message
   */
  Scte35SpliceInsertSettings?: _UnmarshalledScte35SpliceInsertScheduleActionSettings;

  /**
   * Action to insert SCTE-35 time_signal message
   */
  Scte35TimeSignalSettings?: _UnmarshalledScte35TimeSignalScheduleActionSettings;

  /**
   * Action to activate a static image overlay
   */
  StaticImageActivateSettings?: _UnmarshalledStaticImageActivateScheduleActionSettings;

  /**
   * Action to deactivate a static image overlay
   */
  StaticImageDeactivateSettings?: _UnmarshalledStaticImageDeactivateScheduleActionSettings;
}
