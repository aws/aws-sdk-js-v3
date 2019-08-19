import {
  _OutputSettings,
  _UnmarshalledOutputSettings
} from "./_OutputSettings";

/**
 * Output settings. There can be multiple outputs within a group.
 */
export interface _Output {
  /**
   * The names of the AudioDescriptions used as audio sources for this output.
   */
  AudioDescriptionNames?: Array<string> | Iterable<string>;

  /**
   * The names of the CaptionDescriptions used as caption sources for this output.
   */
  CaptionDescriptionNames?: Array<string> | Iterable<string>;

  /**
   * The name used to identify an output.
   */
  OutputName?: string;

  /**
   * Output type-specific settings.
   */
  OutputSettings: _OutputSettings;

  /**
   * The name of the VideoDescription used as the source for this output.
   */
  VideoDescriptionName?: string;
}

export interface _UnmarshalledOutput extends _Output {
  /**
   * The names of the AudioDescriptions used as audio sources for this output.
   */
  AudioDescriptionNames?: Array<string>;

  /**
   * The names of the CaptionDescriptions used as caption sources for this output.
   */
  CaptionDescriptionNames?: Array<string>;

  /**
   * Output type-specific settings.
   */
  OutputSettings: _UnmarshalledOutputSettings;
}
