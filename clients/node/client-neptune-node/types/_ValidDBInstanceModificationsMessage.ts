import {
  _ValidStorageOptions,
  _UnmarshalledValidStorageOptions
} from "./_ValidStorageOptions";

/**
 * <p>Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the <a>DescribeValidDBInstanceModifications</a> action. You can use this information when you call <a>ModifyDBInstance</a>. </p>
 */
export interface _ValidDBInstanceModificationsMessage {
  /**
   * <p>Valid storage options for your DB instance.</p>
   */
  Storage?: Array<_ValidStorageOptions> | Iterable<_ValidStorageOptions>;
}

export interface _UnmarshalledValidDBInstanceModificationsMessage
  extends _ValidDBInstanceModificationsMessage {
  /**
   * <p>Valid storage options for your DB instance.</p>
   */
  Storage?: Array<_UnmarshalledValidStorageOptions>;
}
