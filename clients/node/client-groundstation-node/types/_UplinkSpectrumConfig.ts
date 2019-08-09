import { _Frequency, _UnmarshalledFrequency } from "./_Frequency";

/**
 * <p>Information about the uplink spectral <code>Config</code>.</p>
 */
export interface _UplinkSpectrumConfig {
  /**
   * <p>Center frequency of an uplink spectral <code>Config</code>.</p>
   */
  centerFrequency: _Frequency;

  /**
   * <p>Polarization of an uplink spectral <code>Config</code>.</p>
   */
  polarization?: "LEFT_HAND" | "NONE" | "RIGHT_HAND" | string;
}

export interface _UnmarshalledUplinkSpectrumConfig
  extends _UplinkSpectrumConfig {
  /**
   * <p>Center frequency of an uplink spectral <code>Config</code>.</p>
   */
  centerFrequency: _UnmarshalledFrequency;
}
