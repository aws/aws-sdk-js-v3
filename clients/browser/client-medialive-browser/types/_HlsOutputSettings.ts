import { _HlsSettings, _UnmarshalledHlsSettings } from "./_HlsSettings";

/**
 * Hls Output Settings
 */
export interface _HlsOutputSettings {
  /**
   * Settings regarding the underlying stream. These settings are different for audio-only outputs.
   */
  HlsSettings: _HlsSettings;

  /**
   * String concatenated to the end of the destination filename. Accepts \"Format Identifiers\":#formatIdentifierParameters.
   */
  NameModifier?: string;

  /**
   * String concatenated to end of segment filenames.
   */
  SegmentModifier?: string;
}

export interface _UnmarshalledHlsOutputSettings extends _HlsOutputSettings {
  /**
   * Settings regarding the underlying stream. These settings are different for audio-only outputs.
   */
  HlsSettings: _UnmarshalledHlsSettings;
}
