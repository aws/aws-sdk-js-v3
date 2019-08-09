/**
 * <p>Information about an uplink echo <code>Config</code>.</p>
 *          <p>Parameters from the <code>AntennaUplinkConfig</code>, corresponding to the
 *          specified <code>AntennaUplinkConfigArn</code>, are used when this <code>UplinkEchoConfig</code>
 *          is used in a contact.</p>
 */
export interface _UplinkEchoConfig {
  /**
   * <p>ARN of an uplink <code>Config</code>.</p>
   */
  antennaUplinkConfigArn: string;

  /**
   * <p>Whether or not an uplink <code>Config</code> is enabled.</p>
   */
  enabled: boolean;
}

export type _UnmarshalledUplinkEchoConfig = _UplinkEchoConfig;
