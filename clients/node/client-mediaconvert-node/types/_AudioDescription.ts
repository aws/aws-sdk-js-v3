import {
  _AudioNormalizationSettings,
  _UnmarshalledAudioNormalizationSettings
} from "./_AudioNormalizationSettings";
import {
  _AudioCodecSettings,
  _UnmarshalledAudioCodecSettings
} from "./_AudioCodecSettings";
import { _RemixSettings, _UnmarshalledRemixSettings } from "./_RemixSettings";

/**
 * Description of audio output
 */
export interface _AudioDescription {
  /**
   * Advanced audio normalization settings. Ignore these settings unless you need to comply with a loudness standard.
   */
  AudioNormalizationSettings?: _AudioNormalizationSettings;

  /**
   * Specifies which audio data to use from each input. In the simplest case, specify an "Audio Selector":#inputs-audio_selector by name based on its order within each input. For example if you specify "Audio Selector 3", then the third audio selector will be used from each input. If an input does not have an "Audio Selector 3", then the audio selector marked as "default" in that input will be used. If there is no audio selector marked as "default", silence will be inserted for the duration of that input. Alternatively, an "Audio Selector Group":#inputs-audio_selector_group name may be specified, with similar default/silence behavior. If no audio_source_name is specified, then "Audio Selector 1" will be chosen automatically.
   */
  AudioSourceName?: string;

  /**
   * Applies only if Follow Input Audio Type is unchecked (false). A number between 0 and 255. The following are defined in ISO-IEC 13818-1: 0 = Undefined, 1 = Clean Effects, 2 = Hearing Impaired, 3 = Visually Impaired Commentary, 4-255 = Reserved.
   */
  AudioType?: number;

  /**
   * When set to FOLLOW_INPUT, if the input contains an ISO 639 audio_type, then that value is passed through to the output. If the input contains no ISO 639 audio_type, the value in Audio Type is included in the output. Otherwise the value in Audio Type is included in the output. Note that this field and audioType are both ignored if audioDescriptionBroadcasterMix is set to BROADCASTER_MIXED_AD.
   */
  AudioTypeControl?: "FOLLOW_INPUT" | "USE_CONFIGURED" | string;

  /**
   * Audio codec settings (CodecSettings) under (AudioDescriptions) contains the group of settings related to audio encoding. The settings in this group vary depending on the value that you choose for Audio codec (Codec). For each codec enum that you choose, define the corresponding settings object. The following lists the codec enum, settings object pairs. * AAC, AacSettings * MP2, Mp2Settings * WAV, WavSettings * AIFF, AiffSettings * AC3, Ac3Settings * EAC3, Eac3Settings * EAC3_ATMOS, Eac3AtmosSettings
   */
  CodecSettings?: _AudioCodecSettings;

  /**
   * Specify the language for this audio output track, using the ISO 639-2 or ISO 639-3 three-letter language code. The language specified will be used when 'Follow Input Language Code' is not selected or when 'Follow Input Language Code' is selected but there is no ISO 639 language code specified by the input.
   */
  CustomLanguageCode?: string;

  /**
   * Indicates the language of the audio output track. The ISO 639 language specified in the 'Language Code' drop down will be used when 'Follow Input Language Code' is not selected or when 'Follow Input Language Code' is selected but there is no ISO 639 language code specified by the input.
   */
  LanguageCode?:
    | "ENG"
    | "SPA"
    | "FRA"
    | "DEU"
    | "GER"
    | "ZHO"
    | "ARA"
    | "HIN"
    | "JPN"
    | "RUS"
    | "POR"
    | "ITA"
    | "URD"
    | "VIE"
    | "KOR"
    | "PAN"
    | "ABK"
    | "AAR"
    | "AFR"
    | "AKA"
    | "SQI"
    | "AMH"
    | "ARG"
    | "HYE"
    | "ASM"
    | "AVA"
    | "AVE"
    | "AYM"
    | "AZE"
    | "BAM"
    | "BAK"
    | "EUS"
    | "BEL"
    | "BEN"
    | "BIH"
    | "BIS"
    | "BOS"
    | "BRE"
    | "BUL"
    | "MYA"
    | "CAT"
    | "KHM"
    | "CHA"
    | "CHE"
    | "NYA"
    | "CHU"
    | "CHV"
    | "COR"
    | "COS"
    | "CRE"
    | "HRV"
    | "CES"
    | "DAN"
    | "DIV"
    | "NLD"
    | "DZO"
    | "ENM"
    | "EPO"
    | "EST"
    | "EWE"
    | "FAO"
    | "FIJ"
    | "FIN"
    | "FRM"
    | "FUL"
    | "GLA"
    | "GLG"
    | "LUG"
    | "KAT"
    | "ELL"
    | "GRN"
    | "GUJ"
    | "HAT"
    | "HAU"
    | "HEB"
    | "HER"
    | "HMO"
    | "HUN"
    | "ISL"
    | "IDO"
    | "IBO"
    | "IND"
    | "INA"
    | "ILE"
    | "IKU"
    | "IPK"
    | "GLE"
    | "JAV"
    | "KAL"
    | "KAN"
    | "KAU"
    | "KAS"
    | "KAZ"
    | "KIK"
    | "KIN"
    | "KIR"
    | "KOM"
    | "KON"
    | "KUA"
    | "KUR"
    | "LAO"
    | "LAT"
    | "LAV"
    | "LIM"
    | "LIN"
    | "LIT"
    | "LUB"
    | "LTZ"
    | "MKD"
    | "MLG"
    | "MSA"
    | "MAL"
    | "MLT"
    | "GLV"
    | "MRI"
    | "MAR"
    | "MAH"
    | "MON"
    | "NAU"
    | "NAV"
    | "NDE"
    | "NBL"
    | "NDO"
    | "NEP"
    | "SME"
    | "NOR"
    | "NOB"
    | "NNO"
    | "OCI"
    | "OJI"
    | "ORI"
    | "ORM"
    | "OSS"
    | "PLI"
    | "FAS"
    | "POL"
    | "PUS"
    | "QUE"
    | "QAA"
    | "RON"
    | "ROH"
    | "RUN"
    | "SMO"
    | "SAG"
    | "SAN"
    | "SRD"
    | "SRB"
    | "SNA"
    | "III"
    | "SND"
    | "SIN"
    | "SLK"
    | "SLV"
    | "SOM"
    | "SOT"
    | "SUN"
    | "SWA"
    | "SSW"
    | "SWE"
    | "TGL"
    | "TAH"
    | "TGK"
    | "TAM"
    | "TAT"
    | "TEL"
    | "THA"
    | "BOD"
    | "TIR"
    | "TON"
    | "TSO"
    | "TSN"
    | "TUR"
    | "TUK"
    | "TWI"
    | "UIG"
    | "UKR"
    | "UZB"
    | "VEN"
    | "VOL"
    | "WLN"
    | "CYM"
    | "FRY"
    | "WOL"
    | "XHO"
    | "YID"
    | "YOR"
    | "ZHA"
    | "ZUL"
    | "ORJ"
    | "QPC"
    | "TNG"
    | string;

  /**
   * Choosing FOLLOW_INPUT will cause the ISO 639 language code of the output to follow the ISO 639 language code of the input. The language specified for languageCode' will be used when USE_CONFIGURED is selected or when FOLLOW_INPUT is selected but there is no ISO 639 language code specified by the input.
   */
  LanguageCodeControl?: "FOLLOW_INPUT" | "USE_CONFIGURED" | string;

  /**
   * Advanced audio remixing settings.
   */
  RemixSettings?: _RemixSettings;

  /**
   * Used for MS Smooth and Apple HLS outputs. Indicates the name displayed by the player (eg. English, or Director Commentary). Alphanumeric characters, spaces, and underscore are legal.
   */
  StreamName?: string;
}

export interface _UnmarshalledAudioDescription extends _AudioDescription {
  /**
   * Advanced audio normalization settings. Ignore these settings unless you need to comply with a loudness standard.
   */
  AudioNormalizationSettings?: _UnmarshalledAudioNormalizationSettings;

  /**
   * Audio codec settings (CodecSettings) under (AudioDescriptions) contains the group of settings related to audio encoding. The settings in this group vary depending on the value that you choose for Audio codec (Codec). For each codec enum that you choose, define the corresponding settings object. The following lists the codec enum, settings object pairs. * AAC, AacSettings * MP2, Mp2Settings * WAV, WavSettings * AIFF, AiffSettings * AC3, Ac3Settings * EAC3, Eac3Settings * EAC3_ATMOS, Eac3AtmosSettings
   */
  CodecSettings?: _UnmarshalledAudioCodecSettings;

  /**
   * Advanced audio remixing settings.
   */
  RemixSettings?: _UnmarshalledRemixSettings;
}
