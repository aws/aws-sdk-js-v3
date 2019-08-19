import {
  _InventoryS3BucketDestination,
  _UnmarshalledInventoryS3BucketDestination
} from "./_InventoryS3BucketDestination";

/**
 * <p/>
 */
export interface _InventoryDestination {
  /**
   * <p>Contains the bucket name, file format, bucket owner (optional), and prefix (optional) where inventory results are published.</p>
   */
  S3BucketDestination: _InventoryS3BucketDestination;
}

export interface _UnmarshalledInventoryDestination
  extends _InventoryDestination {
  /**
   * <p>Contains the bucket name, file format, bucket owner (optional), and prefix (optional) where inventory results are published.</p>
   */
  S3BucketDestination: _UnmarshalledInventoryS3BucketDestination;
}
