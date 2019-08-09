import { _Range, _UnmarshalledRange } from "./_Range";
import { _DoubleRange, _UnmarshalledDoubleRange } from "./_DoubleRange";

/**
 * <p>Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the <code>DescribeValidDBInstanceModifications</code> action. </p>
 */
export interface _ValidStorageOptions {
  /**
   * <p>The valid storage types for your DB instance. For example, gp2, io1. </p>
   */
  StorageType?: string;

  /**
   * <p>The valid range of storage in gibibytes. For example, 100 to 16384. </p>
   */
  StorageSize?: Array<_Range> | Iterable<_Range>;

  /**
   * <p>The valid range of provisioned IOPS. For example, 1000-20000. </p>
   */
  ProvisionedIops?: Array<_Range> | Iterable<_Range>;

  /**
   * <p>The valid range of Provisioned IOPS to gibibytes of storage multiplier. For example, 3-10, which means that provisioned IOPS can be between 3 and 10 times storage. </p>
   */
  IopsToStorageRatio?: Array<_DoubleRange> | Iterable<_DoubleRange>;

  /**
   * <p>Whether or not Amazon RDS can automatically scale storage for DB instances that use the new instance class.</p>
   */
  SupportsStorageAutoscaling?: boolean;
}

export interface _UnmarshalledValidStorageOptions extends _ValidStorageOptions {
  /**
   * <p>The valid range of storage in gibibytes. For example, 100 to 16384. </p>
   */
  StorageSize?: Array<_UnmarshalledRange>;

  /**
   * <p>The valid range of provisioned IOPS. For example, 1000-20000. </p>
   */
  ProvisionedIops?: Array<_UnmarshalledRange>;

  /**
   * <p>The valid range of Provisioned IOPS to gibibytes of storage multiplier. For example, 3-10, which means that provisioned IOPS can be between 3 and 10 times storage. </p>
   */
  IopsToStorageRatio?: Array<_UnmarshalledDoubleRange>;
}
