/**
 * DVB Sub Source Settings
 */
export interface _DvbSubSourceSettings {
  /**
   * When using DVB-Sub with Burn-In or SMPTE-TT, use this PID for the source content. Unused for DVB-Sub passthrough. All DVB-Sub content is passed through, regardless of selectors.
   */
  Pid?: number;
}

export type _UnmarshalledDvbSubSourceSettings = _DvbSubSourceSettings;
