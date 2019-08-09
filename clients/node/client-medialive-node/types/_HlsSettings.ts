import {
  _AudioOnlyHlsSettings,
  _UnmarshalledAudioOnlyHlsSettings
} from "./_AudioOnlyHlsSettings";
import {
  _StandardHlsSettings,
  _UnmarshalledStandardHlsSettings
} from "./_StandardHlsSettings";

/**
 * Hls Settings
 */
export interface _HlsSettings {
  /**
   * Audio Only Hls Settings
   */
  AudioOnlyHlsSettings?: _AudioOnlyHlsSettings;

  /**
   * Standard Hls Settings
   */
  StandardHlsSettings?: _StandardHlsSettings;
}

export interface _UnmarshalledHlsSettings extends _HlsSettings {
  /**
   * Audio Only Hls Settings
   */
  AudioOnlyHlsSettings?: _UnmarshalledAudioOnlyHlsSettings;

  /**
   * Standard Hls Settings
   */
  StandardHlsSettings?: _UnmarshalledStandardHlsSettings;
}
