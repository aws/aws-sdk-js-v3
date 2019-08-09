import {
  _Scte35Descriptor,
  _UnmarshalledScte35Descriptor
} from "./_Scte35Descriptor";

/**
 * Settings for a SCTE-35 time_signal.
 */
export interface _Scte35TimeSignalScheduleActionSettings {
  /**
   * The list of SCTE-35 descriptors accompanying the SCTE-35 time_signal.
   */
  Scte35Descriptors: Array<_Scte35Descriptor> | Iterable<_Scte35Descriptor>;
}

export interface _UnmarshalledScte35TimeSignalScheduleActionSettings
  extends _Scte35TimeSignalScheduleActionSettings {
  /**
   * The list of SCTE-35 descriptors accompanying the SCTE-35 time_signal.
   */
  Scte35Descriptors: Array<_UnmarshalledScte35Descriptor>;
}
