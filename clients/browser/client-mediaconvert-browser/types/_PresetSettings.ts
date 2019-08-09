import {
  _AudioDescription,
  _UnmarshalledAudioDescription
} from "./_AudioDescription";
import {
  _CaptionDescriptionPreset,
  _UnmarshalledCaptionDescriptionPreset
} from "./_CaptionDescriptionPreset";
import {
  _ContainerSettings,
  _UnmarshalledContainerSettings
} from "./_ContainerSettings";
import {
  _VideoDescription,
  _UnmarshalledVideoDescription
} from "./_VideoDescription";

/**
 * Settings for preset
 */
export interface _PresetSettings {
  /**
   * (AudioDescriptions) contains groups of audio encoding settings organized by audio codec. Include one instance of (AudioDescriptions) per output. (AudioDescriptions) can contain multiple groups of encoding settings.
   */
  AudioDescriptions?: Array<_AudioDescription> | Iterable<_AudioDescription>;

  /**
   * Caption settings for this preset. There can be multiple caption settings in a single output.
   */
  CaptionDescriptions?:
    | Array<_CaptionDescriptionPreset>
    | Iterable<_CaptionDescriptionPreset>;

  /**
   * Container specific settings.
   */
  ContainerSettings?: _ContainerSettings;

  /**
   * (VideoDescription) contains a group of video encoding settings. The specific video settings depend on the video codec that you choose when you specify a value for Video codec (codec). Include one instance of (VideoDescription) per output.
   */
  VideoDescription?: _VideoDescription;
}

export interface _UnmarshalledPresetSettings extends _PresetSettings {
  /**
   * (AudioDescriptions) contains groups of audio encoding settings organized by audio codec. Include one instance of (AudioDescriptions) per output. (AudioDescriptions) can contain multiple groups of encoding settings.
   */
  AudioDescriptions?: Array<_UnmarshalledAudioDescription>;

  /**
   * Caption settings for this preset. There can be multiple caption settings in a single output.
   */
  CaptionDescriptions?: Array<_UnmarshalledCaptionDescriptionPreset>;

  /**
   * Container specific settings.
   */
  ContainerSettings?: _UnmarshalledContainerSettings;

  /**
   * (VideoDescription) contains a group of video encoding settings. The specific video settings depend on the video codec that you choose when you specify a value for Video codec (codec). Include one instance of (VideoDescription) per output.
   */
  VideoDescription?: _UnmarshalledVideoDescription;
}
