import {
  _InventoryEncryption,
  _UnmarshalledInventoryEncryption
} from "./_InventoryEncryption";

/**
 * <p/>
 */
export interface _InventoryS3BucketDestination {
  /**
   * <p>The ID of the account that owns the destination bucket.</p>
   */
  AccountId?: string;

  /**
   * <p>The Amazon resource name (ARN) of the bucket where inventory results will be published.</p>
   */
  Bucket: string;

  /**
   * <p>Specifies the output format of the inventory results.</p>
   */
  Format: "CSV" | "ORC" | "Parquet" | string;

  /**
   * <p>The prefix that is prepended to all inventory results.</p>
   */
  Prefix?: string;

  /**
   * <p>Contains the type of server-side encryption used to encrypt the inventory results.</p>
   */
  Encryption?: _InventoryEncryption;
}

export interface _UnmarshalledInventoryS3BucketDestination
  extends _InventoryS3BucketDestination {
  /**
   * <p>Contains the type of server-side encryption used to encrypt the inventory results.</p>
   */
  Encryption?: _UnmarshalledInventoryEncryption;
}
