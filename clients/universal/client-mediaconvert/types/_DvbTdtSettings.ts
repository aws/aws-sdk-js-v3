/**
 * Inserts DVB Time and Date Table (TDT) at the specified table repetition interval.
 */
export interface _DvbTdtSettings {
  /**
   * The number of milliseconds between instances of this table in the output transport stream.
   */
  TdtInterval?: number;
}

export type _UnmarshalledDvbTdtSettings = _DvbTdtSettings;
