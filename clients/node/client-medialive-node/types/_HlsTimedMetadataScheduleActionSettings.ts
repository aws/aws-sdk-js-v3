/**
 * Settings for the action to emit HLS metadata
 */
export interface _HlsTimedMetadataScheduleActionSettings {
  /**
   * Base64 string formatted according to the ID3 specification: http://id3.org/id3v2.4.0-structure
   */
  Id3: string;
}

export type _UnmarshalledHlsTimedMetadataScheduleActionSettings = _HlsTimedMetadataScheduleActionSettings;
