/**
 * Settings for F4v container
 */
export interface _F4vSettings {
  /**
   * If set to PROGRESSIVE_DOWNLOAD, the MOOV atom is relocated to the beginning of the archive as required for progressive downloading. Otherwise it is placed normally at the end.
   */
  MoovPlacement?: "PROGRESSIVE_DOWNLOAD" | "NORMAL" | string;
}

export type _UnmarshalledF4vSettings = _F4vSettings;
