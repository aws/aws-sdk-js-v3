import {
  _AudioDescription,
  _UnmarshalledAudioDescription
} from "./_AudioDescription";
import { _AvailBlanking, _UnmarshalledAvailBlanking } from "./_AvailBlanking";
import {
  _AvailConfiguration,
  _UnmarshalledAvailConfiguration
} from "./_AvailConfiguration";
import { _BlackoutSlate, _UnmarshalledBlackoutSlate } from "./_BlackoutSlate";
import {
  _CaptionDescription,
  _UnmarshalledCaptionDescription
} from "./_CaptionDescription";
import {
  _GlobalConfiguration,
  _UnmarshalledGlobalConfiguration
} from "./_GlobalConfiguration";
import { _OutputGroup, _UnmarshalledOutputGroup } from "./_OutputGroup";
import {
  _TimecodeConfig,
  _UnmarshalledTimecodeConfig
} from "./_TimecodeConfig";
import {
  _VideoDescription,
  _UnmarshalledVideoDescription
} from "./_VideoDescription";

/**
 * Encoder Settings
 */
export interface _EncoderSettings {
  /**
   * Placeholder documentation for __listOfAudioDescription
   */
  AudioDescriptions: Array<_AudioDescription> | Iterable<_AudioDescription>;

  /**
   * Settings for ad avail blanking.
   */
  AvailBlanking?: _AvailBlanking;

  /**
   * Event-wide configuration settings for ad avail insertion.
   */
  AvailConfiguration?: _AvailConfiguration;

  /**
   * Settings for blackout slate.
   */
  BlackoutSlate?: _BlackoutSlate;

  /**
   * Settings for caption decriptions
   */
  CaptionDescriptions?:
    | Array<_CaptionDescription>
    | Iterable<_CaptionDescription>;

  /**
   * Configuration settings that apply to the event as a whole.
   */
  GlobalConfiguration?: _GlobalConfiguration;

  /**
   * Placeholder documentation for __listOfOutputGroup
   */
  OutputGroups: Array<_OutputGroup> | Iterable<_OutputGroup>;

  /**
   * Contains settings used to acquire and adjust timecode information from inputs.
   */
  TimecodeConfig: _TimecodeConfig;

  /**
   * Placeholder documentation for __listOfVideoDescription
   */
  VideoDescriptions: Array<_VideoDescription> | Iterable<_VideoDescription>;
}

export interface _UnmarshalledEncoderSettings extends _EncoderSettings {
  /**
   * Placeholder documentation for __listOfAudioDescription
   */
  AudioDescriptions: Array<_UnmarshalledAudioDescription>;

  /**
   * Settings for ad avail blanking.
   */
  AvailBlanking?: _UnmarshalledAvailBlanking;

  /**
   * Event-wide configuration settings for ad avail insertion.
   */
  AvailConfiguration?: _UnmarshalledAvailConfiguration;

  /**
   * Settings for blackout slate.
   */
  BlackoutSlate?: _UnmarshalledBlackoutSlate;

  /**
   * Settings for caption decriptions
   */
  CaptionDescriptions?: Array<_UnmarshalledCaptionDescription>;

  /**
   * Configuration settings that apply to the event as a whole.
   */
  GlobalConfiguration?: _UnmarshalledGlobalConfiguration;

  /**
   * Placeholder documentation for __listOfOutputGroup
   */
  OutputGroups: Array<_UnmarshalledOutputGroup>;

  /**
   * Contains settings used to acquire and adjust timecode information from inputs.
   */
  TimecodeConfig: _UnmarshalledTimecodeConfig;

  /**
   * Placeholder documentation for __listOfVideoDescription
   */
  VideoDescriptions: Array<_UnmarshalledVideoDescription>;
}
