/**
 * Settings specific to TTML caption outputs, including Pass style information (TtmlStylePassthrough).
 */
export interface _TtmlDestinationSettings {
  /**
   * Pass through style and position information from a TTML-like input source (TTML, SMPTE-TT, CFF-TT) to the CFF-TT output or TTML output.
   */
  StylePassthrough?: "ENABLED" | "DISABLED" | string;
}

export type _UnmarshalledTtmlDestinationSettings = _TtmlDestinationSettings;
