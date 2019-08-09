import {
  _InventoryDestination,
  _UnmarshalledInventoryDestination
} from "./_InventoryDestination";
import {
  _InventoryFilter,
  _UnmarshalledInventoryFilter
} from "./_InventoryFilter";
import {
  _InventorySchedule,
  _UnmarshalledInventorySchedule
} from "./_InventorySchedule";

/**
 * <p>Specifies the inventory configuration for an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketGETInventoryConfig.html">GET Bucket inventory</a> in the <i>Amazon Simple Storage Service API Reference</i>. </p>
 */
export interface _InventoryConfiguration {
  /**
   * <p>Contains information about where to publish the inventory results.</p>
   */
  Destination: _InventoryDestination;

  /**
   * <p>Specifies whether the inventory is enabled or disabled. If set to <code>True</code>, an inventory list is generated. If set to <code>False</code>, no inventory list is generated.</p>
   */
  IsEnabled: boolean;

  /**
   * <p>Specifies an inventory filter. The inventory only includes objects that meet the filter's criteria.</p>
   */
  Filter?: _InventoryFilter;

  /**
   * <p>The ID used to identify the inventory configuration.</p>
   */
  Id: string;

  /**
   * <p>Object versions to include in the inventory list. If set to <code>All</code>, the list includes all the object versions, which adds the version-related fields <code>VersionId</code>, <code>IsLatest</code>, and <code>DeleteMarker</code> to the list. If set to <code>Current</code>, the list does not contain these version-related fields.</p>
   */
  IncludedObjectVersions: "All" | "Current" | string;

  /**
   * <p>Contains the optional fields that are included in the inventory results.</p>
   */
  OptionalFields?:
    | Array<
        | "Size"
        | "LastModifiedDate"
        | "StorageClass"
        | "ETag"
        | "IsMultipartUploaded"
        | "ReplicationStatus"
        | "EncryptionStatus"
        | "ObjectLockRetainUntilDate"
        | "ObjectLockMode"
        | "ObjectLockLegalHoldStatus"
        | string
      >
    | Iterable<
        | "Size"
        | "LastModifiedDate"
        | "StorageClass"
        | "ETag"
        | "IsMultipartUploaded"
        | "ReplicationStatus"
        | "EncryptionStatus"
        | "ObjectLockRetainUntilDate"
        | "ObjectLockMode"
        | "ObjectLockLegalHoldStatus"
        | string
      >;

  /**
   * <p>Specifies the schedule for generating inventory results.</p>
   */
  Schedule: _InventorySchedule;
}

export interface _UnmarshalledInventoryConfiguration
  extends _InventoryConfiguration {
  /**
   * <p>Contains information about where to publish the inventory results.</p>
   */
  Destination: _UnmarshalledInventoryDestination;

  /**
   * <p>Specifies an inventory filter. The inventory only includes objects that meet the filter's criteria.</p>
   */
  Filter?: _UnmarshalledInventoryFilter;

  /**
   * <p>Contains the optional fields that are included in the inventory results.</p>
   */
  OptionalFields?: Array<
    | "Size"
    | "LastModifiedDate"
    | "StorageClass"
    | "ETag"
    | "IsMultipartUploaded"
    | "ReplicationStatus"
    | "EncryptionStatus"
    | "ObjectLockRetainUntilDate"
    | "ObjectLockMode"
    | "ObjectLockLegalHoldStatus"
    | string
  >;

  /**
   * <p>Specifies the schedule for generating inventory results.</p>
   */
  Schedule: _UnmarshalledInventorySchedule;
}
