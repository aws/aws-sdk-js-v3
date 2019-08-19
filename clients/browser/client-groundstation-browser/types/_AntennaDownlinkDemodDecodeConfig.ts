import { _DecodeConfig, _UnmarshalledDecodeConfig } from "./_DecodeConfig";
import {
  _DemodulationConfig,
  _UnmarshalledDemodulationConfig
} from "./_DemodulationConfig";
import {
  _SpectrumConfig,
  _UnmarshalledSpectrumConfig
} from "./_SpectrumConfig";

/**
 * <p>Information about how AWS Ground Station should conﬁgure an antenna for downlink demod decode during a contact.</p>
 */
export interface _AntennaDownlinkDemodDecodeConfig {
  /**
   * <p>Information about the decode <code>Config</code>.</p>
   */
  decodeConfig: _DecodeConfig;

  /**
   * <p>Information about the demodulation <code>Config</code>.</p>
   */
  demodulationConfig: _DemodulationConfig;

  /**
   * <p>Information about the spectral <code>Config</code>.</p>
   */
  spectrumConfig: _SpectrumConfig;
}

export interface _UnmarshalledAntennaDownlinkDemodDecodeConfig
  extends _AntennaDownlinkDemodDecodeConfig {
  /**
   * <p>Information about the decode <code>Config</code>.</p>
   */
  decodeConfig: _UnmarshalledDecodeConfig;

  /**
   * <p>Information about the demodulation <code>Config</code>.</p>
   */
  demodulationConfig: _UnmarshalledDemodulationConfig;

  /**
   * <p>Information about the spectral <code>Config</code>.</p>
   */
  spectrumConfig: _UnmarshalledSpectrumConfig;
}
