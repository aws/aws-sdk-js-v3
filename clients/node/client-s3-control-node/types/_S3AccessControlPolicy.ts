import {
  _S3AccessControlList,
  _UnmarshalledS3AccessControlList
} from "./_S3AccessControlList";

/**
 * <p/>
 */
export interface _S3AccessControlPolicy {
  /**
   * <p/>
   */
  AccessControlList?: _S3AccessControlList;

  /**
   * <p/>
   */
  CannedAccessControlList?:
    | "private"
    | "public-read"
    | "public-read-write"
    | "aws-exec-read"
    | "authenticated-read"
    | "bucket-owner-read"
    | "bucket-owner-full-control"
    | string;
}

export interface _UnmarshalledS3AccessControlPolicy
  extends _S3AccessControlPolicy {
  /**
   * <p/>
   */
  AccessControlList?: _UnmarshalledS3AccessControlList;
}
