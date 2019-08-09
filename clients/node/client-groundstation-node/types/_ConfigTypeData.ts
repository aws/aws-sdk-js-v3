import {
  _AntennaDownlinkConfig,
  _UnmarshalledAntennaDownlinkConfig
} from "./_AntennaDownlinkConfig";
import {
  _AntennaDownlinkDemodDecodeConfig,
  _UnmarshalledAntennaDownlinkDemodDecodeConfig
} from "./_AntennaDownlinkDemodDecodeConfig";
import {
  _AntennaUplinkConfig,
  _UnmarshalledAntennaUplinkConfig
} from "./_AntennaUplinkConfig";
import {
  _DataflowEndpointConfig,
  _UnmarshalledDataflowEndpointConfig
} from "./_DataflowEndpointConfig";
import {
  _TrackingConfig,
  _UnmarshalledTrackingConfig
} from "./_TrackingConfig";
import {
  _UplinkEchoConfig,
  _UnmarshalledUplinkEchoConfig
} from "./_UplinkEchoConfig";

/**
 * <p>Object containing the parameters for a <code>Config</code>.</p>
 *          <p>See the subtype definitions for what each type of <code>Config</code> contains.</p>
 */
export interface _ConfigTypeData {
  /**
   * <p>Information about how AWS Ground Station should configure an antenna for downlink during a contact.</p>
   */
  antennaDownlinkConfig?: _AntennaDownlinkConfig;

  /**
   * <p>Information about how AWS Ground Station should conﬁgure an antenna for downlink demod decode during a contact.</p>
   */
  antennaDownlinkDemodDecodeConfig?: _AntennaDownlinkDemodDecodeConfig;

  /**
   * <p>Information about how AWS Ground Station should conﬁgure an antenna for uplink during a contact.</p>
   */
  antennaUplinkConfig?: _AntennaUplinkConfig;

  /**
   * <p>Information about the dataflow endpoint <code>Config</code>.</p>
   */
  dataflowEndpointConfig?: _DataflowEndpointConfig;

  /**
   * <p>Object that determines whether tracking should be used during a contact executed with this <code>Config</code> in the mission profile. </p>
   */
  trackingConfig?: _TrackingConfig;

  /**
   * <p>Information about an uplink echo <code>Config</code>.</p>
   *          <p>Parameters from the <code>AntennaUplinkConfig</code>, corresponding to the specified <code>AntennaUplinkConfigArn</code>, are used when this <code>UplinkEchoConfig</code> is used in a contact.</p>
   */
  uplinkEchoConfig?: _UplinkEchoConfig;
}

export interface _UnmarshalledConfigTypeData extends _ConfigTypeData {
  /**
   * <p>Information about how AWS Ground Station should configure an antenna for downlink during a contact.</p>
   */
  antennaDownlinkConfig?: _UnmarshalledAntennaDownlinkConfig;

  /**
   * <p>Information about how AWS Ground Station should conﬁgure an antenna for downlink demod decode during a contact.</p>
   */
  antennaDownlinkDemodDecodeConfig?: _UnmarshalledAntennaDownlinkDemodDecodeConfig;

  /**
   * <p>Information about how AWS Ground Station should conﬁgure an antenna for uplink during a contact.</p>
   */
  antennaUplinkConfig?: _UnmarshalledAntennaUplinkConfig;

  /**
   * <p>Information about the dataflow endpoint <code>Config</code>.</p>
   */
  dataflowEndpointConfig?: _UnmarshalledDataflowEndpointConfig;

  /**
   * <p>Object that determines whether tracking should be used during a contact executed with this <code>Config</code> in the mission profile. </p>
   */
  trackingConfig?: _UnmarshalledTrackingConfig;

  /**
   * <p>Information about an uplink echo <code>Config</code>.</p>
   *          <p>Parameters from the <code>AntennaUplinkConfig</code>, corresponding to the specified <code>AntennaUplinkConfigArn</code>, are used when this <code>UplinkEchoConfig</code> is used in a contact.</p>
   */
  uplinkEchoConfig?: _UnmarshalledUplinkEchoConfig;
}
