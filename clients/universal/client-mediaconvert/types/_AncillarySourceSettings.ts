/**
 * Settings for ancillary captions source.
 */
export interface _AncillarySourceSettings {
  /**
   * Specifies the 608 channel number in the ancillary data track from which to extract captions. Unused for passthrough.
   */
  SourceAncillaryChannelNumber?: number;
}

export type _UnmarshalledAncillarySourceSettings = _AncillarySourceSettings;
