/**
 * <p>Describes a storage location in Amazon S3.</p>
 */
export interface _StorageLocation {
  /**
   * <p>The name of the S3 bucket.</p>
   */
  Bucket?: string;

  /**
   * <p>The key.</p>
   */
  Key?: string;
}

export type _UnmarshalledStorageLocation = _StorageLocation;
