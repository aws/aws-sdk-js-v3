/**
 * <p> The settings in JSON format for the DMS Transfer type source endpoint. </p>
 */
export interface _DmsTransferSettings {
  /**
   * <p> The IAM role that has permission to access the Amazon S3 bucket. </p>
   */
  ServiceAccessRoleArn?: string;

  /**
   * <p> The name of the S3 bucket to use. </p>
   */
  BucketName?: string;
}

export type _UnmarshalledDmsTransferSettings = _DmsTransferSettings;
