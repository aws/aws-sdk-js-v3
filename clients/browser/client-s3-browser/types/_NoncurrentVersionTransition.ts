/**
 * <p>Container for the transition rule that describes when noncurrent objects transition to the <code>STANDARD_IA</code>, <code>ONEZONE_IA</code>, <code>INTELLIGENT_TIERING</code>, <code>GLACIER</code>, or <code>DEEP_ARCHIVE</code> storage class. If your bucket is versioning-enabled (or versioning is suspended), you can set this action to request that Amazon S3 transition noncurrent object versions to the <code>STANDARD_IA</code>, <code>ONEZONE_IA</code>, <code>INTELLIGENT_TIERING</code>, <code>GLACIER</code>, or <code>DEEP_ARCHIVE</code> storage class at a specific period in the object's lifetime.</p>
 */
export interface _NoncurrentVersionTransition {
  /**
   * <p>Specifies the number of days an object is noncurrent before Amazon S3 can perform the associated action. For information about the noncurrent days calculations, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-access-control.html">How Amazon S3 Calculates When an Object Became Noncurrent</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  NoncurrentDays?: number;

  /**
   * <p>The class of storage used to store the object.</p>
   */
  StorageClass?:
    | "GLACIER"
    | "STANDARD_IA"
    | "ONEZONE_IA"
    | "INTELLIGENT_TIERING"
    | "DEEP_ARCHIVE"
    | string;
}

export type _UnmarshalledNoncurrentVersionTransition = _NoncurrentVersionTransition;
