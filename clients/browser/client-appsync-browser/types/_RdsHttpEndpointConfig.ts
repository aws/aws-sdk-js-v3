/**
 * <p>The Amazon RDS HTTP endpoint configuration.</p>
 */
export interface _RdsHttpEndpointConfig {
  /**
   * <p>AWS Region for RDS HTTP endpoint.</p>
   */
  awsRegion?: string;

  /**
   * <p>Amazon RDS cluster identifier.</p>
   */
  dbClusterIdentifier?: string;

  /**
   * <p>Logical database name.</p>
   */
  databaseName?: string;

  /**
   * <p>Logical schema name.</p>
   */
  schema?: string;

  /**
   * <p>AWS secret store ARN for database credentials.</p>
   */
  awsSecretStoreArn?: string;
}

export type _UnmarshalledRdsHttpEndpointConfig = _RdsHttpEndpointConfig;
