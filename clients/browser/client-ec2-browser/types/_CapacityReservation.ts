import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes a Capacity Reservation.</p>
 */
export interface _CapacityReservation {
  /**
   * <p>The ID of the Capacity Reservation.</p>
   */
  CapacityReservationId?: string;

  /**
   * _String shape
   */
  OwnerId?: string;

  /**
   * _String shape
   */
  CapacityReservationArn?: string;

  /**
   * _String shape
   */
  AvailabilityZoneId?: string;

  /**
   * <p>The type of instance for which the Capacity Reservation reserves capacity.</p>
   */
  InstanceType?: string;

  /**
   * <p>The type of operating system for which the Capacity Reservation reserves capacity.</p>
   */
  InstancePlatform?:
    | "Linux/UNIX"
    | "Red Hat Enterprise Linux"
    | "SUSE Linux"
    | "Windows"
    | "Windows with SQL Server"
    | "Windows with SQL Server Enterprise"
    | "Windows with SQL Server Standard"
    | "Windows with SQL Server Web"
    | "Linux with SQL Server Standard"
    | "Linux with SQL Server Web"
    | "Linux with SQL Server Enterprise"
    | string;

  /**
   * <p>The Availability Zone in which the capacity is reserved.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>Indicates the tenancy of the Capacity Reservation. A Capacity Reservation can have one of the following tenancy settings:</p> <ul> <li> <p> <code>default</code> - The Capacity Reservation is created on hardware that is shared with other AWS accounts.</p> </li> <li> <p> <code>dedicated</code> - The Capacity Reservation is created on single-tenant hardware that is dedicated to a single AWS account.</p> </li> </ul>
   */
  Tenancy?: "default" | "dedicated" | string;

  /**
   * <p>The number of instances for which the Capacity Reservation reserves capacity.</p>
   */
  TotalInstanceCount?: number;

  /**
   * <p>The remaining capacity. Indicates the number of instances that can be launched in the Capacity Reservation.</p>
   */
  AvailableInstanceCount?: number;

  /**
   * <p>Indicates whether the Capacity Reservation supports EBS-optimized instances. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS- optimized instance.</p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>Indicates whether the Capacity Reservation supports instances with temporary, block-level storage.</p>
   */
  EphemeralStorage?: boolean;

  /**
   * <p>The current state of the Capacity Reservation. A Capacity Reservation can be in one of the following states:</p> <ul> <li> <p> <code>active</code> - The Capacity Reservation is active and the capacity is available for your use.</p> </li> <li> <p> <code>cancelled</code> - The Capacity Reservation expired automatically at the date and time specified in your request. The reserved capacity is no longer available for your use.</p> </li> <li> <p> <code>expired</code> - The Capacity Reservation was manually cancelled. The reserved capacity is no longer available for your use.</p> </li> <li> <p> <code>pending</code> - The Capacity Reservation request was successful but the capacity provisioning is still pending.</p> </li> <li> <p> <code>failed</code> - The Capacity Reservation request has failed. A request might fail due to invalid request parameters, capacity constraints, or instance limit constraints. Failed requests are retained for 60 minutes.</p> </li> </ul>
   */
  State?: "active" | "expired" | "cancelled" | "pending" | "failed" | string;

  /**
   * <p>The date and time at which the Capacity Reservation expires. When a Capacity Reservation expires, the reserved capacity is released and you can no longer launch instances into it. The Capacity Reservation's state changes to <code>expired</code> when it reaches its end date and time.</p>
   */
  EndDate?: Date | string | number;

  /**
   * <p>Indicates the way in which the Capacity Reservation ends. A Capacity Reservation can have one of the following end types:</p> <ul> <li> <p> <code>unlimited</code> - The Capacity Reservation remains active until you explicitly cancel it.</p> </li> <li> <p> <code>limited</code> - The Capacity Reservation expires automatically at a specified date and time.</p> </li> </ul>
   */
  EndDateType?: "unlimited" | "limited" | string;

  /**
   * <p>Indicates the type of instance launches that the Capacity Reservation accepts. The options include:</p> <ul> <li> <p> <code>open</code> - The Capacity Reservation accepts all instances that have matching attributes (instance type, platform, and Availability Zone). Instances that have matching attributes launch into the Capacity Reservation automatically without specifying any additional parameters.</p> </li> <li> <p> <code>targeted</code> - The Capacity Reservation only accepts instances that have matching attributes (instance type, platform, and Availability Zone), and explicitly target the Capacity Reservation. This ensures that only permitted instances can use the reserved capacity. </p> </li> </ul>
   */
  InstanceMatchCriteria?: "open" | "targeted" | string;

  /**
   * <p>The date and time at which the Capacity Reservation was created.</p>
   */
  CreateDate?: Date | string | number;

  /**
   * <p>Any tags assigned to the Capacity Reservation.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledCapacityReservation extends _CapacityReservation {
  /**
   * <p>The date and time at which the Capacity Reservation expires. When a Capacity Reservation expires, the reserved capacity is released and you can no longer launch instances into it. The Capacity Reservation's state changes to <code>expired</code> when it reaches its end date and time.</p>
   */
  EndDate?: Date;

  /**
   * <p>The date and time at which the Capacity Reservation was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>Any tags assigned to the Capacity Reservation.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
