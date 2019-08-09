/**
 * <p>Inventory data for installed discovery connectors.</p>
 */
export interface _CustomerConnectorInfo {
  /**
   * <p>Number of active discovery connectors.</p>
   */
  activeConnectors: number;

  /**
   * <p>Number of healthy discovery connectors.</p>
   */
  healthyConnectors: number;

  /**
   * <p>Number of blacklisted discovery connectors.</p>
   */
  blackListedConnectors: number;

  /**
   * <p>Number of discovery connectors with status SHUTDOWN,</p>
   */
  shutdownConnectors: number;

  /**
   * <p>Number of unhealthy discovery connectors.</p>
   */
  unhealthyConnectors: number;

  /**
   * <p>Total number of discovery connectors.</p>
   */
  totalConnectors: number;

  /**
   * <p>Number of unknown discovery connectors.</p>
   */
  unknownConnectors: number;
}

export type _UnmarshalledCustomerConnectorInfo = _CustomerConnectorInfo;
