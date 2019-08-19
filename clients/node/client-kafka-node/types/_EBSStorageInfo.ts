/**
 *
 *             <p>Contains information about the EBS storage volumes attached to Kafka broker nodes.</p>
 *
 */
export interface _EBSStorageInfo {
  /**
   *
   *             <p>The size in GiB of the EBS volume for the data drive on each broker node.</p>
   *
   */
  VolumeSize?: number;
}

export type _UnmarshalledEBSStorageInfo = _EBSStorageInfo;
