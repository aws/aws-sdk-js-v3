import { _AacSettings, _UnmarshalledAacSettings } from "./_AacSettings";
import { _Ac3Settings, _UnmarshalledAc3Settings } from "./_Ac3Settings";
import { _AiffSettings, _UnmarshalledAiffSettings } from "./_AiffSettings";
import {
  _Eac3AtmosSettings,
  _UnmarshalledEac3AtmosSettings
} from "./_Eac3AtmosSettings";
import { _Eac3Settings, _UnmarshalledEac3Settings } from "./_Eac3Settings";
import { _Mp2Settings, _UnmarshalledMp2Settings } from "./_Mp2Settings";
import { _WavSettings, _UnmarshalledWavSettings } from "./_WavSettings";

/**
 * Audio codec settings (CodecSettings) under (AudioDescriptions) contains the group of settings related to audio encoding. The settings in this group vary depending on the value that you choose for Audio codec (Codec). For each codec enum that you choose, define the corresponding settings object. The following lists the codec enum, settings object pairs. * AAC, AacSettings * MP2, Mp2Settings * WAV, WavSettings * AIFF, AiffSettings * AC3, Ac3Settings * EAC3, Eac3Settings * EAC3_ATMOS, Eac3AtmosSettings
 */
export interface _AudioCodecSettings {
  /**
   * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AAC. The service accepts one of two mutually exclusive groups of AAC settings--VBR and CBR. To select one of these modes, set the value of Bitrate control mode (rateControlMode) to "VBR" or "CBR".  In VBR mode, you control the audio quality with the setting VBR quality (vbrQuality). In CBR mode, you use the setting Bitrate (bitrate). Defaults and valid values depend on the rate control mode.
   */
  AacSettings?: _AacSettings;

  /**
   * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AC3.
   */
  Ac3Settings?: _Ac3Settings;

  /**
   * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AIFF.
   */
  AiffSettings?: _AiffSettings;

  /**
   * Type of Audio codec.
   */
  Codec?:
    | "AAC"
    | "MP2"
    | "WAV"
    | "AIFF"
    | "AC3"
    | "EAC3"
    | "EAC3_ATMOS"
    | "PASSTHROUGH"
    | string;

  /**
   * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value EAC3_ATMOS.
   */
  Eac3AtmosSettings?: _Eac3AtmosSettings;

  /**
   * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value EAC3.
   */
  Eac3Settings?: _Eac3Settings;

  /**
   * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value MP2.
   */
  Mp2Settings?: _Mp2Settings;

  /**
   * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value WAV.
   */
  WavSettings?: _WavSettings;
}

export interface _UnmarshalledAudioCodecSettings extends _AudioCodecSettings {
  /**
   * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AAC. The service accepts one of two mutually exclusive groups of AAC settings--VBR and CBR. To select one of these modes, set the value of Bitrate control mode (rateControlMode) to "VBR" or "CBR".  In VBR mode, you control the audio quality with the setting VBR quality (vbrQuality). In CBR mode, you use the setting Bitrate (bitrate). Defaults and valid values depend on the rate control mode.
   */
  AacSettings?: _UnmarshalledAacSettings;

  /**
   * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AC3.
   */
  Ac3Settings?: _UnmarshalledAc3Settings;

  /**
   * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AIFF.
   */
  AiffSettings?: _UnmarshalledAiffSettings;

  /**
   * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value EAC3_ATMOS.
   */
  Eac3AtmosSettings?: _UnmarshalledEac3AtmosSettings;

  /**
   * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value EAC3.
   */
  Eac3Settings?: _UnmarshalledEac3Settings;

  /**
   * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value MP2.
   */
  Mp2Settings?: _UnmarshalledMp2Settings;

  /**
   * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value WAV.
   */
  WavSettings?: _UnmarshalledWavSettings;
}
