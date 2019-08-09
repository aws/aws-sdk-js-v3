/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, represents an update to the <a>InputLambdaProcessor</a> that is used to preprocess the records in the stream.</p>
 */
export interface _InputLambdaProcessorUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the new AWS Lambda function that is used to preprocess the records in the stream.</p> <note> <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: AWS Lambda</a> </p> </note>
   */
  ResourceARNUpdate: string;
}

export type _UnmarshalledInputLambdaProcessorUpdate = _InputLambdaProcessorUpdate;
