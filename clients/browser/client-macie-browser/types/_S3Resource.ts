/**
 * <p>Contains information about the S3 resource. This data type is used as a request parameter in the DisassociateS3Resources action and can be used as a response parameter in the AssociateS3Resources and UpdateS3Resources actions. </p>
 */
export interface _S3Resource {
  /**
   * <p>The name of the S3 bucket.</p>
   */
  bucketName: string;

  /**
   * <p>The prefix of the S3 bucket. </p>
   */
  prefix?: string;
}

export type _UnmarshalledS3Resource = _S3Resource;
