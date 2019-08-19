/**
 * Ttml Destination Settings
 */
export interface _TtmlDestinationSettings {
  /**
   * When set to passthrough, passes through style and position information from a TTML-like input source (TTML, SMPTE-TT, CFF-TT) to the CFF-TT output or TTML output.
   */
  StyleControl?: "PASSTHROUGH" | "USE_CONFIGURED" | string;
}

export type _UnmarshalledTtmlDestinationSettings = _TtmlDestinationSettings;
