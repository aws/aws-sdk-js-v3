/**
 * <p>Describes an Amazon DynamoDB data source configuration.</p>
 */
export interface _DynamodbDataSourceConfig {
  /**
   * <p>The table name.</p>
   */
  tableName: string;

  /**
   * <p>The AWS Region.</p>
   */
  awsRegion: string;

  /**
   * <p>Set to TRUE to use Amazon Cognito credentials with this data source.</p>
   */
  useCallerCredentials?: boolean;
}

export type _UnmarshalledDynamodbDataSourceConfig = _DynamodbDataSourceConfig;
