import {
  _AudioLanguageSelection,
  _UnmarshalledAudioLanguageSelection
} from "./_AudioLanguageSelection";
import {
  _AudioPidSelection,
  _UnmarshalledAudioPidSelection
} from "./_AudioPidSelection";

/**
 * Audio Selector Settings
 */
export interface _AudioSelectorSettings {
  /**
   * Audio Language Selection
   */
  AudioLanguageSelection?: _AudioLanguageSelection;

  /**
   * Audio Pid Selection
   */
  AudioPidSelection?: _AudioPidSelection;
}

export interface _UnmarshalledAudioSelectorSettings
  extends _AudioSelectorSettings {
  /**
   * Audio Language Selection
   */
  AudioLanguageSelection?: _UnmarshalledAudioLanguageSelection;

  /**
   * Audio Pid Selection
   */
  AudioPidSelection?: _UnmarshalledAudioPidSelection;
}
