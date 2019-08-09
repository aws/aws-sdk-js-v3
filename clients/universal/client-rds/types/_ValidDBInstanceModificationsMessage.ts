import {
  _ValidStorageOptions,
  _UnmarshalledValidStorageOptions
} from "./_ValidStorageOptions";
import {
  _AvailableProcessorFeature,
  _UnmarshalledAvailableProcessorFeature
} from "./_AvailableProcessorFeature";

/**
 * <p>Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the <code>DescribeValidDBInstanceModifications</code> action. You can use this information when you call <code>ModifyDBInstance</code>. </p>
 */
export interface _ValidDBInstanceModificationsMessage {
  /**
   * <p>Valid storage options for your DB instance. </p>
   */
  Storage?: Array<_ValidStorageOptions> | Iterable<_ValidStorageOptions>;

  /**
   * <p>Valid processor features for your DB instance. </p>
   */
  ValidProcessorFeatures?:
    | Array<_AvailableProcessorFeature>
    | Iterable<_AvailableProcessorFeature>;
}

export interface _UnmarshalledValidDBInstanceModificationsMessage
  extends _ValidDBInstanceModificationsMessage {
  /**
   * <p>Valid storage options for your DB instance. </p>
   */
  Storage?: Array<_UnmarshalledValidStorageOptions>;

  /**
   * <p>Valid processor features for your DB instance. </p>
   */
  ValidProcessorFeatures?: Array<_UnmarshalledAvailableProcessorFeature>;
}
