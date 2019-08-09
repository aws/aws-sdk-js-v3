/**
 * <p>The S3 bucket name and file name that identifies the document.</p> <p>The AWS Region for the S3 bucket that contains the document must match the Region that you use for Amazon Textract operations.</p> <p>For Amazon Textract to process a file in an S3 bucket, the user must have permission to access the S3 bucket and file. </p>
 */
export interface _S3Object {
  /**
   * <p>The name of the S3 bucket.</p>
   */
  Bucket?: string;

  /**
   * <p>The file name of the input document. It must be an image file (.JPG or .PNG format). Asynchronous operations also support PDF files.</p>
   */
  Name?: string;

  /**
   * <p>If the bucket has versioning enabled, you can specify the object version. </p>
   */
  Version?: string;
}

export type _UnmarshalledS3Object = _S3Object;
