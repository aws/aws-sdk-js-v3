import { _M3u8Settings, _UnmarshalledM3u8Settings } from "./_M3u8Settings";

/**
 * Standard Hls Settings
 */
export interface _StandardHlsSettings {
  /**
   * List all the audio groups that are used with the video output stream. Input all the audio GROUP-IDs that are associated to the video, separate by ','.
   */
  AudioRenditionSets?: string;

  /**
   * Settings information for the .m3u8 container
   */
  M3u8Settings: _M3u8Settings;
}

export interface _UnmarshalledStandardHlsSettings extends _StandardHlsSettings {
  /**
   * Settings information for the .m3u8 container
   */
  M3u8Settings: _UnmarshalledM3u8Settings;
}
