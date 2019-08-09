import { _AudioSelector, _UnmarshalledAudioSelector } from "./_AudioSelector";
import {
  _CaptionSelector,
  _UnmarshalledCaptionSelector
} from "./_CaptionSelector";
import {
  _NetworkInputSettings,
  _UnmarshalledNetworkInputSettings
} from "./_NetworkInputSettings";
import { _VideoSelector, _UnmarshalledVideoSelector } from "./_VideoSelector";

/**
 * Live Event input parameters. There can be multiple inputs in a single Live Event.
 */
export interface _InputSettings {
  /**
   * Used to select the audio stream to decode for inputs that have multiple available.
   */
  AudioSelectors?: Array<_AudioSelector> | Iterable<_AudioSelector>;

  /**
   * Used to select the caption input to use for inputs that have multiple available.
   */
  CaptionSelectors?: Array<_CaptionSelector> | Iterable<_CaptionSelector>;

  /**
   * Enable or disable the deblock filter when filtering.
   */
  DeblockFilter?: "DISABLED" | "ENABLED" | string;

  /**
   * Enable or disable the denoise filter when filtering.
   */
  DenoiseFilter?: "DISABLED" | "ENABLED" | string;

  /**
   * Adjusts the magnitude of filtering from 1 (minimal) to 5 (strongest).
   */
  FilterStrength?: number;

  /**
   * Turns on the filter for this input. MPEG-2 inputs have the deblocking filter enabled by default.
   * 1) auto - filtering will be applied depending on input type/quality
   * 2) disabled - no filtering will be applied to the input
   * 3) forced - filtering will be applied regardless of input type
   */
  InputFilter?: "AUTO" | "DISABLED" | "FORCED" | string;

  /**
   * Input settings.
   */
  NetworkInputSettings?: _NetworkInputSettings;

  /**
   * Loop input if it is a file. This allows a file input to be streamed indefinitely.
   */
  SourceEndBehavior?: "CONTINUE" | "LOOP" | string;

  /**
   * Informs which video elementary stream to decode for input types that have multiple available.
   */
  VideoSelector?: _VideoSelector;
}

export interface _UnmarshalledInputSettings extends _InputSettings {
  /**
   * Used to select the audio stream to decode for inputs that have multiple available.
   */
  AudioSelectors?: Array<_UnmarshalledAudioSelector>;

  /**
   * Used to select the caption input to use for inputs that have multiple available.
   */
  CaptionSelectors?: Array<_UnmarshalledCaptionSelector>;

  /**
   * Input settings.
   */
  NetworkInputSettings?: _UnmarshalledNetworkInputSettings;

  /**
   * Informs which video elementary stream to decode for input types that have multiple available.
   */
  VideoSelector?: _UnmarshalledVideoSelector;
}
