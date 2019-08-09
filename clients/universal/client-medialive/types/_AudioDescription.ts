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
 * Audio Description
 */
export interface _AudioDescription {
  /**
   * Advanced audio normalization settings.
   */
  AudioNormalizationSettings?: _AudioNormalizationSettings;

  /**
   * The name of the AudioSelector used as the source for this AudioDescription.
   */
  AudioSelectorName: string;

  /**
   * Applies only if audioTypeControl is useConfigured. The values for audioType are defined in ISO-IEC 13818-1.
   */
  AudioType?:
    | "CLEAN_EFFECTS"
    | "HEARING_IMPAIRED"
    | "UNDEFINED"
    | "VISUAL_IMPAIRED_COMMENTARY"
    | string;

  /**
   * Determines how audio type is determined.
   *   followInput: If the input contains an ISO 639 audioType, then that value is passed through to the output. If the input contains no ISO 639 audioType, the value in Audio Type is included in the output.
   *   useConfigured: The value in Audio Type is included in the output.
   * Note that this field and audioType are both ignored if inputType is broadcasterMixedAd.
   */
  AudioTypeControl?: "FOLLOW_INPUT" | "USE_CONFIGURED" | string;

  /**
   * Audio codec settings.
   */
  CodecSettings?: _AudioCodecSettings;

  /**
   * Indicates the language of the audio output track. Only used if languageControlMode is useConfigured, or there is no ISO 639 language code specified in the input.
   */
  LanguageCode?: string;

  /**
   * Choosing followInput will cause the ISO 639 language code of the output to follow the ISO 639 language code of the input. The languageCode will be used when useConfigured is set, or when followInput is selected but there is no ISO 639 language code specified by the input.
   */
  LanguageCodeControl?: "FOLLOW_INPUT" | "USE_CONFIGURED" | string;

  /**
   * The name of this AudioDescription. Outputs will use this name to uniquely identify this AudioDescription.  Description names should be unique within this Live Event.
   */
  Name: string;

  /**
   * Settings that control how input audio channels are remixed into the output audio channels.
   */
  RemixSettings?: _RemixSettings;

  /**
   * Used for MS Smooth and Apple HLS outputs. Indicates the name displayed by the player (eg. English, or Director Commentary).
   */
  StreamName?: string;
}

export interface _UnmarshalledAudioDescription extends _AudioDescription {
  /**
   * Advanced audio normalization settings.
   */
  AudioNormalizationSettings?: _UnmarshalledAudioNormalizationSettings;

  /**
   * Audio codec settings.
   */
  CodecSettings?: _UnmarshalledAudioCodecSettings;

  /**
   * Settings that control how input audio channels are remixed into the output audio channels.
   */
  RemixSettings?: _UnmarshalledRemixSettings;
}
