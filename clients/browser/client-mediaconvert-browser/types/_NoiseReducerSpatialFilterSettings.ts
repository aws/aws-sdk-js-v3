/**
 * Noise reducer filter settings for spatial filter.
 */
export interface _NoiseReducerSpatialFilterSettings {
  /**
   * Specify strength of post noise reduction sharpening filter, with 0 disabling the filter and 3 enabling it at maximum strength.
   */
  PostFilterSharpenStrength?: number;

  /**
   * The speed of the filter, from -2 (lower speed) to 3 (higher speed), with 0 being the nominal value.
   */
  Speed?: number;

  /**
   * Relative strength of noise reducing filter. Higher values produce stronger filtering.
   */
  Strength?: number;
}

export type _UnmarshalledNoiseReducerSpatialFilterSettings = _NoiseReducerSpatialFilterSettings;
