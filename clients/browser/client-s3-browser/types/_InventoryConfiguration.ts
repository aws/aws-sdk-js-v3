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
 * _InventoryConfiguration shape
 */
export interface _InventoryConfiguration {
  /**
   * <p>Contains information about where to publish the inventory results.</p>
   */
  Destination: _InventoryDestination;

  /**
   * <p>Specifies whether the inventory is enabled or disabled.</p>
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
   * <p>Specifies which object version(s) to included in the inventory results.</p>
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
    | string
  >;

  /**
   * <p>Specifies the schedule for generating inventory results.</p>
   */
  Schedule: _UnmarshalledInventorySchedule;
}
