/**
 * <p>The output for the product created as the result of a request. For example, the output for a CloudFormation-backed product that creates an S3 bucket would include the S3 bucket URL.</p>
 */
export interface _RecordOutput {
  /**
   * <p>The output key.</p>
   */
  OutputKey?: string;

  /**
   * <p>The output value.</p>
   */
  OutputValue?: string;

  /**
   * <p>The description of the output.</p>
   */
  Description?: string;
}

export type _UnmarshalledRecordOutput = _RecordOutput;
