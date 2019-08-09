import {
  _UplinkSpectrumConfig,
  _UnmarshalledUplinkSpectrumConfig
} from "./_UplinkSpectrumConfig";
import { _Eirp, _UnmarshalledEirp } from "./_Eirp";

/**
 * <p>Information about the uplink <code>Config</code> of an antenna.</p>
 */
export interface _AntennaUplinkConfig {
  /**
   * <p>Information about the uplink spectral <code>Config</code>.</p>
   */
  spectrumConfig: _UplinkSpectrumConfig;

  /**
   * <p>EIRP of the target.</p>
   */
  targetEirp: _Eirp;
}

export interface _UnmarshalledAntennaUplinkConfig extends _AntennaUplinkConfig {
  /**
   * <p>Information about the uplink spectral <code>Config</code>.</p>
   */
  spectrumConfig: _UnmarshalledUplinkSpectrumConfig;

  /**
   * <p>EIRP of the target.</p>
   */
  targetEirp: _UnmarshalledEirp;
}
