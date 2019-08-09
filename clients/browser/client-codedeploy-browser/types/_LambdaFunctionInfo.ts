/**
 * <p> Information about a Lambda function specified in a deployment. </p>
 */
export interface _LambdaFunctionInfo {
  /**
   * <p> The name of a Lambda function. </p>
   */
  functionName?: string;

  /**
   * <p> The alias of a Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/aliases-intro.html">Introduction to AWS Lambda Aliases</a>. </p>
   */
  functionAlias?: string;

  /**
   * <p> The version of a Lambda function that production traffic points to. </p>
   */
  currentVersion?: string;

  /**
   * <p> The version of a Lambda function that production traffic points to after the Lambda function is deployed. </p>
   */
  targetVersion?: string;

  /**
   * <p> The percentage of production traffic that the target version of a Lambda function receives. </p>
   */
  targetVersionWeight?: number;
}

export type _UnmarshalledLambdaFunctionInfo = _LambdaFunctionInfo;
