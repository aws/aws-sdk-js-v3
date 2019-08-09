import { _Connector, _UnmarshalledConnector } from "./_Connector";

/**
 * Information about the connector definition version, which is a container for connectors.
 */
export interface _ConnectorDefinitionVersion {
  /**
   * A list of references to connectors in this version, with their corresponding configuration settings.
   */
  Connectors?: Array<_Connector> | Iterable<_Connector>;
}

export interface _UnmarshalledConnectorDefinitionVersion
  extends _ConnectorDefinitionVersion {
  /**
   * A list of references to connectors in this version, with their corresponding configuration settings.
   */
  Connectors?: Array<_UnmarshalledConnector>;
}
