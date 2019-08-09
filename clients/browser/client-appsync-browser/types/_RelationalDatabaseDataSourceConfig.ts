import {
  _RdsHttpEndpointConfig,
  _UnmarshalledRdsHttpEndpointConfig
} from "./_RdsHttpEndpointConfig";

/**
 * <p>Describes a relational database data source configuration.</p>
 */
export interface _RelationalDatabaseDataSourceConfig {
  /**
   * <p>Source type for the relational database.</p> <ul> <li> <p> <b>RDS_HTTP_ENDPOINT</b>: The relational database source type is an Amazon RDS HTTP endpoint.</p> </li> </ul>
   */
  relationalDatabaseSourceType?: "RDS_HTTP_ENDPOINT" | string;

  /**
   * <p>Amazon RDS HTTP endpoint settings.</p>
   */
  rdsHttpEndpointConfig?: _RdsHttpEndpointConfig;
}

export interface _UnmarshalledRelationalDatabaseDataSourceConfig
  extends _RelationalDatabaseDataSourceConfig {
  /**
   * <p>Amazon RDS HTTP endpoint settings.</p>
   */
  rdsHttpEndpointConfig?: _UnmarshalledRdsHttpEndpointConfig;
}
