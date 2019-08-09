import { _HlsSettings, _UnmarshalledHlsSettings } from "./_HlsSettings";

/**
 * Specific settings for this type of output.
 */
export interface _OutputSettings {
  /**
   * Settings for HLS output groups
   */
  HlsSettings?: _HlsSettings;
}

export interface _UnmarshalledOutputSettings extends _OutputSettings {
  /**
   * Settings for HLS output groups
   */
  HlsSettings?: _UnmarshalledHlsSettings;
}
