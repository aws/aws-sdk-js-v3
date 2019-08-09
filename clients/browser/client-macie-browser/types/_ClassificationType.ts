/**
 * <p>The classification type that Amazon Macie applies to the associated S3 resources. </p>
 */
export interface _ClassificationType {
  /**
   * <p>A one-time classification of all of the existing objects in a specified S3 bucket. </p>
   */
  oneTime: "FULL" | "NONE" | string;

  /**
   * <p>A continuous classification of the objects that are added to a specified S3 bucket. Amazon Macie begins performing continuous classification after a bucket is successfully associated with Amazon Macie. </p>
   */
  continuous: "FULL" | string;
}

export type _UnmarshalledClassificationType = _ClassificationType;
