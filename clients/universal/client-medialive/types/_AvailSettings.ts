import {
  _Scte35SpliceInsert,
  _UnmarshalledScte35SpliceInsert
} from "./_Scte35SpliceInsert";
import {
  _Scte35TimeSignalApos,
  _UnmarshalledScte35TimeSignalApos
} from "./_Scte35TimeSignalApos";

/**
 * Avail Settings
 */
export interface _AvailSettings {
  /**
   * Scte35 Splice Insert
   */
  Scte35SpliceInsert?: _Scte35SpliceInsert;

  /**
   * Scte35 Time Signal Apos
   */
  Scte35TimeSignalApos?: _Scte35TimeSignalApos;
}

export interface _UnmarshalledAvailSettings extends _AvailSettings {
  /**
   * Scte35 Splice Insert
   */
  Scte35SpliceInsert?: _UnmarshalledScte35SpliceInsert;

  /**
   * Scte35 Time Signal Apos
   */
  Scte35TimeSignalApos?: _UnmarshalledScte35TimeSignalApos;
}
