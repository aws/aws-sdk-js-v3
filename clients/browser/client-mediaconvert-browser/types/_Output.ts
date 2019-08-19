import {
  _AudioDescription,
  _UnmarshalledAudioDescription
} from "./_AudioDescription";
import {
  _CaptionDescription,
  _UnmarshalledCaptionDescription
} from "./_CaptionDescription";
import {
  _ContainerSettings,
  _UnmarshalledContainerSettings
} from "./_ContainerSettings";
import {
  _OutputSettings,
  _UnmarshalledOutputSettings
} from "./_OutputSettings";
import {
  _VideoDescription,
  _UnmarshalledVideoDescription
} from "./_VideoDescription";

/**
 * An output object describes the settings for a single output file or stream in an output group.
 */
export interface _Output {
  /**
   * (AudioDescriptions) contains groups of audio encoding settings organized by audio codec. Include one instance of (AudioDescriptions) per output. (AudioDescriptions) can contain multiple groups of encoding settings.
   */
  AudioDescriptions?: Array<_AudioDescription> | Iterable<_AudioDescription>;

  /**
   * (CaptionDescriptions) contains groups of captions settings. For each output that has captions, include one instance of (CaptionDescriptions). (CaptionDescriptions) can contain multiple groups of captions settings.
   */
  CaptionDescriptions?:
    | Array<_CaptionDescription>
    | Iterable<_CaptionDescription>;

  /**
   * Container specific settings.
   */
  ContainerSettings?: _ContainerSettings;

  /**
   * Use Extension (Extension) to specify the file extension for outputs in File output groups. If you do not specify a value, the service will use default extensions by container type as follows * MPEG-2 transport stream, m2ts * Quicktime, mov * MXF container, mxf * MPEG-4 container, mp4 * No Container, the service will use codec extensions (e.g. AAC, H265, H265, AC3)
   */
  Extension?: string;

  /**
   * Use Name modifier (NameModifier) to have the service add a string to the end of each output filename. You specify the base filename as part of your destination URI. When you create multiple outputs in the same output group, Name modifier (NameModifier) is required. Name modifier also accepts format identifiers. For DASH ISO outputs, if you use the format identifiers $Number$ or $Time$ in one output, you must use them in the same way in all outputs of the output group.
   */
  NameModifier?: string;

  /**
   * Specific settings for this type of output.
   */
  OutputSettings?: _OutputSettings;

  /**
   * Use Preset (Preset) to specifiy a preset for your transcoding settings. Provide the system or custom preset name. You can specify either Preset (Preset) or Container settings (ContainerSettings), but not both.
   */
  Preset?: string;

  /**
   * (VideoDescription) contains a group of video encoding settings. The specific video settings depend on the video codec that you choose when you specify a value for Video codec (codec). Include one instance of (VideoDescription) per output.
   */
  VideoDescription?: _VideoDescription;
}

export interface _UnmarshalledOutput extends _Output {
  /**
   * (AudioDescriptions) contains groups of audio encoding settings organized by audio codec. Include one instance of (AudioDescriptions) per output. (AudioDescriptions) can contain multiple groups of encoding settings.
   */
  AudioDescriptions?: Array<_UnmarshalledAudioDescription>;

  /**
   * (CaptionDescriptions) contains groups of captions settings. For each output that has captions, include one instance of (CaptionDescriptions). (CaptionDescriptions) can contain multiple groups of captions settings.
   */
  CaptionDescriptions?: Array<_UnmarshalledCaptionDescription>;

  /**
   * Container specific settings.
   */
  ContainerSettings?: _UnmarshalledContainerSettings;

  /**
   * Specific settings for this type of output.
   */
  OutputSettings?: _UnmarshalledOutputSettings;

  /**
   * (VideoDescription) contains a group of video encoding settings. The specific video settings depend on the video codec that you choose when you specify a value for Video codec (codec). Include one instance of (VideoDescription) per output.
   */
  VideoDescription?: _UnmarshalledVideoDescription;
}
