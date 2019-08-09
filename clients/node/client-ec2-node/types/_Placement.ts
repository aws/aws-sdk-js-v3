/**
 * <p>Describes the placement of an instance.</p>
 */
export interface _Placement {
  /**
   * <p>The Availability Zone of the instance.</p> <p>If not specified, an Availability Zone will be automatically chosen for you based on the load balancing criteria for the Region.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The affinity setting for the instance on the Dedicated Host. This parameter is not supported for the <a>ImportInstance</a> command.</p>
   */
  Affinity?: string;

  /**
   * <p>The name of the placement group the instance is in.</p>
   */
  GroupName?: string;

  /**
   * <p>The number of the partition the instance is in. Valid only if the placement group strategy is set to <code>partition</code>.</p>
   */
  PartitionNumber?: number;

  /**
   * <p>The ID of the Dedicated Host on which the instance resides. This parameter is not supported for the <a>ImportInstance</a> command.</p>
   */
  HostId?: string;

  /**
   * <p>The tenancy of the instance (if the instance is running in a VPC). An instance with a tenancy of <code>dedicated</code> runs on single-tenant hardware. The <code>host</code> tenancy is not supported for the <a>ImportInstance</a> command.</p>
   */
  Tenancy?: "default" | "dedicated" | "host" | string;

  /**
   * <p>Reserved for future use.</p>
   */
  SpreadDomain?: string;
}

export type _UnmarshalledPlacement = _Placement;
