import { _AacSettings, _UnmarshalledAacSettings } from "./_AacSettings";
import { _Ac3Settings, _UnmarshalledAc3Settings } from "./_Ac3Settings";
import { _Eac3Settings, _UnmarshalledEac3Settings } from "./_Eac3Settings";
import { _Mp2Settings, _UnmarshalledMp2Settings } from "./_Mp2Settings";
import {
  _PassThroughSettings,
  _UnmarshalledPassThroughSettings
} from "./_PassThroughSettings";

/**
 * Audio Codec Settings
 */
export interface _AudioCodecSettings {
  /**
   * Aac Settings
   */
  AacSettings?: _AacSettings;

  /**
   * Ac3 Settings
   */
  Ac3Settings?: _Ac3Settings;

  /**
   * Eac3 Settings
   */
  Eac3Settings?: _Eac3Settings;

  /**
   * Mp2 Settings
   */
  Mp2Settings?: _Mp2Settings;

  /**
   * Pass Through Settings
   */
  PassThroughSettings?: _PassThroughSettings;
}

export interface _UnmarshalledAudioCodecSettings extends _AudioCodecSettings {
  /**
   * Aac Settings
   */
  AacSettings?: _UnmarshalledAacSettings;

  /**
   * Ac3 Settings
   */
  Ac3Settings?: _UnmarshalledAc3Settings;

  /**
   * Eac3 Settings
   */
  Eac3Settings?: _UnmarshalledEac3Settings;

  /**
   * Mp2 Settings
   */
  Mp2Settings?: _UnmarshalledMp2Settings;

  /**
   * Pass Through Settings
   */
  PassThroughSettings?: _UnmarshalledPassThroughSettings;
}
