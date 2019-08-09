import {
  _AvailabilityZone,
  _UnmarshalledAvailabilityZone
} from "./_AvailabilityZone";

/**
 * <p>The options that are available for a DB instance.</p>
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
   * <p>Indicates whether a DB instance is in a virtual private cloud (VPC).</p>
   */
  Vpc?: boolean;
}

export interface _UnmarshalledOrderableDBInstanceOption
  extends _OrderableDBInstanceOption {
  /**
   * <p>A list of Availability Zones for a DB instance.</p>
   */
  AvailabilityZones?: Array<_UnmarshalledAvailabilityZone>;
}
