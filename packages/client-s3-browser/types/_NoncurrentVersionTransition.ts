/**
 * <p>Container for the transition rule that describes when noncurrent objects transition to the STANDARD_IA, ONEZONE_IA or GLACIER storage class. If your bucket is versioning-enabled (or versioning is suspended), you can set this action to request that Amazon S3 transition noncurrent object versions to the STANDARD_IA, ONEZONE_IA or GLACIER storage class at a specific period in the object's lifetime.</p>
 */
export interface _NoncurrentVersionTransition {
  /**
   * <p>Specifies the number of days an object is noncurrent before Amazon S3 can perform the associated action. For information about the noncurrent days calculations, see <a href="http://docs.aws.amazon.com/AmazonS3/latest/dev/s3-access-control.html">How Amazon S3 Calculates When an Object Became Noncurrent</a> in the Amazon Simple Storage Service Developer Guide.</p>
   */
  NoncurrentDays?: number;

  /**
   * <p>The class of storage used to store the object.</p>
   */
  StorageClass?: "GLACIER" | "STANDARD_IA" | "ONEZONE_IA" | string;
}

export type _UnmarshalledNoncurrentVersionTransition = _NoncurrentVersionTransition;
