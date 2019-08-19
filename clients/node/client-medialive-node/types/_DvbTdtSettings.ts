/**
 * DVB Time and Date Table (SDT)
 */
export interface _DvbTdtSettings {
  /**
   * The number of milliseconds between instances of this table in the output transport stream.
   */
  RepInterval?: number;
}

export type _UnmarshalledDvbTdtSettings = _DvbTdtSettings;
