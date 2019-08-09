/**
 * Information about a connector. Connectors run on the Greengrass core and contain built-in integration with local infrastructure, device protocols, AWS, and other cloud services.
 */
export interface _Connector {
  /**
   * The ARN of the connector.
   */
  ConnectorArn: string;

  /**
   * A descriptive or arbitrary ID for the connector. This value must be unique within the connector definition version. Max length is 128 characters with pattern [a-zA-Z0-9:_-]+.
   */
  Id: string;

  /**
   * The parameters or configuration that the connector uses.
   */
  Parameters?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledConnector extends _Connector {
  /**
   * The parameters or configuration that the connector uses.
   */
  Parameters?: { [key: string]: string };
}
