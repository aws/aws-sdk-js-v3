import { _S3Storage, _UnmarshalledS3Storage } from "./_S3Storage";

/**
 * <p>Describes the storage location for an instance store-backed AMI.</p>
 */
export interface _Storage {
  /**
   * <p>An Amazon S3 storage location.</p>
   */
  S3?: _S3Storage;
}

export interface _UnmarshalledStorage extends _Storage {
  /**
   * <p>An Amazon S3 storage location.</p>
   */
  S3?: _UnmarshalledS3Storage;
}
