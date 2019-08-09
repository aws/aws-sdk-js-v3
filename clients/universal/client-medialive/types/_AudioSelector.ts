import {
  _AudioSelectorSettings,
  _UnmarshalledAudioSelectorSettings
} from "./_AudioSelectorSettings";

/**
 * Audio Selector
 */
export interface _AudioSelector {
  /**
   * The name of this AudioSelector. AudioDescriptions will use this name to uniquely identify this Selector.  Selector names should be unique per input.
   */
  Name: string;

  /**
   * The audio selector settings.
   */
  SelectorSettings?: _AudioSelectorSettings;
}

export interface _UnmarshalledAudioSelector extends _AudioSelector {
  /**
   * The audio selector settings.
   */
  SelectorSettings?: _UnmarshalledAudioSelectorSettings;
}
