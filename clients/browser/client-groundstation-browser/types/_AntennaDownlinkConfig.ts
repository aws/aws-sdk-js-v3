import {
  _SpectrumConfig,
  _UnmarshalledSpectrumConfig
} from "./_SpectrumConfig";

/**
 * <p>Information about how AWS Ground Station should configure an
 *          antenna for downlink during a contact.</p>
 */
export interface _AntennaDownlinkConfig {
  /**
   * <p>Object that describes a spectral <code>Config</code>.</p>
   */
  spectrumConfig: _SpectrumConfig;
}

export interface _UnmarshalledAntennaDownlinkConfig
  extends _AntennaDownlinkConfig {
  /**
   * <p>Object that describes a spectral <code>Config</code>.</p>
   */
  spectrumConfig: _UnmarshalledSpectrumConfig;
}
