import {
  _FrequencyBandwidth,
  _UnmarshalledFrequencyBandwidth
} from "./_FrequencyBandwidth";
import { _Frequency, _UnmarshalledFrequency } from "./_Frequency";

/**
 * <p>Object that describes a spectral <code>Config</code>.</p>
 */
export interface _SpectrumConfig {
  /**
   * <p>Bandwidth of a spectral <code>Config</code>.</p>
   */
  bandwidth: _FrequencyBandwidth;

  /**
   * <p>Center frequency of a spectral <code>Config</code>.</p>
   */
  centerFrequency: _Frequency;

  /**
   * <p>Polarization of a spectral <code>Config</code>.</p>
   */
  polarization?: "LEFT_HAND" | "NONE" | "RIGHT_HAND" | string;
}

export interface _UnmarshalledSpectrumConfig extends _SpectrumConfig {
  /**
   * <p>Bandwidth of a spectral <code>Config</code>.</p>
   */
  bandwidth: _UnmarshalledFrequencyBandwidth;

  /**
   * <p>Center frequency of a spectral <code>Config</code>.</p>
   */
  centerFrequency: _UnmarshalledFrequency;
}
