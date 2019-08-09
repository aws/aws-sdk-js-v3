/**
 * <p>An activity that runs a Lambda function to modify the message.</p>
 */
export interface _LambdaActivity {
  /**
   * <p>The name of the 'lambda' activity.</p>
   */
  name: string;

  /**
   * <p>The name of the Lambda function that is run on the message.</p>
   */
  lambdaName: string;

  /**
   * <p>The number of messages passed to the Lambda function for processing.</p> <p>The AWS Lambda function must be able to process all of these messages within five minutes, which is the maximum timeout duration for Lambda functions.</p>
   */
  batchSize: number;

  /**
   * <p>The next activity in the pipeline.</p>
   */
  next?: string;
}

export type _UnmarshalledLambdaActivity = _LambdaActivity;
