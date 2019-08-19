/**
 * Settings for a noise reducer filter
 */
export interface _NoiseReducerFilterSettings {
  /**
   * Relative strength of noise reducing filter. Higher values produce stronger filtering.
   */
  Strength?: number;
}

export type _UnmarshalledNoiseReducerFilterSettings = _NoiseReducerFilterSettings;
