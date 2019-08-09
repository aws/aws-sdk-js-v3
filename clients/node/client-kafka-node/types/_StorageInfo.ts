import {
  _EBSStorageInfo,
  _UnmarshalledEBSStorageInfo
} from "./_EBSStorageInfo";

/**
 *
 *             <p>Contains information about storage volumes attached to MSK broker nodes.</p>
 *
 */
export interface _StorageInfo {
  /**
   *
   *             <p>EBS volume information.</p>
   *
   */
  EbsStorageInfo?: _EBSStorageInfo;
}

export interface _UnmarshalledStorageInfo extends _StorageInfo {
  /**
   *
   *             <p>EBS volume information.</p>
   *
   */
  EbsStorageInfo?: _UnmarshalledEBSStorageInfo;
}
