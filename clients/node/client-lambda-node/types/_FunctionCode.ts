/**
 * <p>The code for the Lambda function. You can specify either an object in Amazon S3, or upload a deployment package directly.</p>
 */
export interface _FunctionCode {
  /**
   * <p>The base64-encoded contents of the deployment package. AWS SDK and AWS CLI clients handle the encoding for you.</p>
   */
  ZipFile?: ArrayBuffer | ArrayBufferView | string;

  /**
   * <p>An Amazon S3 bucket in the same AWS Region as your function. The bucket can be in a different AWS account.</p>
   */
  S3Bucket?: string;

  /**
   * <p>The Amazon S3 key of the deployment package.</p>
   */
  S3Key?: string;

  /**
   * <p>For versioned objects, the version of the deployment package object to use.</p>
   */
  S3ObjectVersion?: string;
}

export interface _UnmarshalledFunctionCode extends _FunctionCode {
  /**
   * <p>The base64-encoded contents of the deployment package. AWS SDK and AWS CLI clients handle the encoding for you.</p>
   */
  ZipFile?: Uint8Array;
}
