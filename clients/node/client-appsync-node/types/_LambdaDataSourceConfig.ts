/**
 * <p>Describes an AWS Lambda data source configuration.</p>
 */
export interface _LambdaDataSourceConfig {
  /**
   * <p>The ARN for the Lambda function.</p>
   */
  lambdaFunctionArn: string;
}

export type _UnmarshalledLambdaDataSourceConfig = _LambdaDataSourceConfig;
