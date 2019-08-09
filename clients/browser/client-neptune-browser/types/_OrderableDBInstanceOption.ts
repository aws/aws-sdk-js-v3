import {
  _AvailabilityZone,
  _UnmarshalledAvailabilityZone
} from "./_AvailabilityZone";

/**
 * <p>Contains a list of available options for a DB instance.</p> <p> This data type is used as a response element in the <a>DescribeOrderableDBInstanceOptions</a> action.</p>
 */
export interface _OrderableDBInstanceOption {
  /**
   * <p>The engine type of a DB instance.</p>
   */
  Engine?: string;

  /**
   * <p>The engine version of a DB instance.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The DB instance class for a DB instance.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>The license model for a DB instance.</p>
   */
  LicenseModel?: string;

  /**
   * <p>A list of Availability Zones for a DB instance.</p>
   */
  AvailabilityZones?: Array<_AvailabilityZone> | Iterable<_AvailabilityZone>;

  /**
   * <p>Indicates whether a DB instance is Multi-AZ capable.</p>
   */
  MultiAZCapable?: boolean;

  /**
   * <p>Indicates whether a DB instance can have a Read Replica.</p>
   */
  ReadReplicaCapable?: boolean;

  /**
   * <p>Indicates whether a DB instance is in a VPC.</p>
   */
  Vpc?: boolean;

  /**
   * <p>Indicates whether a DB instance supports encrypted storage.</p>
   */
  SupportsStorageEncryption?: boolean;

  /**
   * <p>Indicates the storage type for a DB instance.</p>
   */
  StorageType?: string;

  /**
   * <p>Indicates whether a DB instance supports provisioned IOPS.</p>
   */
  SupportsIops?: boolean;

  /**
   * <p>Indicates whether a DB instance supports Enhanced Monitoring at intervals from 1 to 60 seconds.</p>
   */
  SupportsEnhancedMonitoring?: boolean;

  /**
   * <p>Indicates whether a DB instance supports IAM database authentication.</p>
   */
  SupportsIAMDatabaseAuthentication?: boolean;

  /**
   * <p>True if a DB instance supports Performance Insights, otherwise false.</p>
   */
  SupportsPerformanceInsights?: boolean;

  /**
   * <p>Minimum storage size for a DB instance.</p>
   */
  MinStorageSize?: number;

  /**
   * <p>Maximum storage size for a DB instance.</p>
   */
  MaxStorageSize?: number;

  /**
   * <p>Minimum total provisioned IOPS for a DB instance.</p>
   */
  MinIopsPerDbInstance?: number;

  /**
   * <p>Maximum total provisioned IOPS for a DB instance.</p>
   */
  MaxIopsPerDbInstance?: number;

  /**
   * <p>Minimum provisioned IOPS per GiB for a DB instance.</p>
   */
  MinIopsPerGib?: number;

  /**
   * <p>Maximum provisioned IOPS per GiB for a DB instance.</p>
   */
  MaxIopsPerGib?: number;
}

export interface _UnmarshalledOrderableDBInstanceOption
  extends _OrderableDBInstanceOption {
  /**
   * <p>A list of Availability Zones for a DB instance.</p>
   */
  AvailabilityZones?: Array<_UnmarshalledAvailabilityZone>;
}
