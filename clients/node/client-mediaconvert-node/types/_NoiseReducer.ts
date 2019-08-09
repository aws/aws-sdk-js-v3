import {
  _NoiseReducerFilterSettings,
  _UnmarshalledNoiseReducerFilterSettings
} from "./_NoiseReducerFilterSettings";
import {
  _NoiseReducerSpatialFilterSettings,
  _UnmarshalledNoiseReducerSpatialFilterSettings
} from "./_NoiseReducerSpatialFilterSettings";

/**
 * Enable the Noise reducer (NoiseReducer) feature to remove noise from your video output if necessary. Enable or disable this feature for each output individually. This setting is disabled by default. When you enable Noise reducer (NoiseReducer), you must also select a value for Noise reducer filter (NoiseReducerFilter).
 */
export interface _NoiseReducer {
  /**
   * Use Noise reducer filter (NoiseReducerFilter) to select one of the following spatial image filtering functions. To use this setting, you must also enable Noise reducer (NoiseReducer). * Bilateral is an edge preserving noise reduction filter. * Mean (softest), Gaussian, Lanczos, and Sharpen (sharpest) are convolution filters. * Conserve is a min/max noise reduction filter. * Spatial is a frequency-domain filter based on JND principles.
   */
  Filter?:
    | "BILATERAL"
    | "MEAN"
    | "GAUSSIAN"
    | "LANCZOS"
    | "SHARPEN"
    | "CONSERVE"
    | "SPATIAL"
    | string;

  /**
   * Settings for a noise reducer filter
   */
  FilterSettings?: _NoiseReducerFilterSettings;

  /**
   * Noise reducer filter settings for spatial filter.
   */
  SpatialFilterSettings?: _NoiseReducerSpatialFilterSettings;
}

export interface _UnmarshalledNoiseReducer extends _NoiseReducer {
  /**
   * Settings for a noise reducer filter
   */
  FilterSettings?: _UnmarshalledNoiseReducerFilterSettings;

  /**
   * Noise reducer filter settings for spatial filter.
   */
  SpatialFilterSettings?: _UnmarshalledNoiseReducerSpatialFilterSettings;
}
