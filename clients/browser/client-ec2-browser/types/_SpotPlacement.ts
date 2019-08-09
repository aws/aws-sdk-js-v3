/**
 * <p>Describes Spot Instance placement.</p>
 */
export interface _SpotPlacement {
  /**
   * <p>The Availability Zone.</p> <p>[Spot Fleet only] To specify multiple Availability Zones, separate them using commas; for example, "us-west-2a, us-west-2b".</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The name of the placement group.</p>
   */
  GroupName?: string;

  /**
   * <p>The tenancy of the instance (if the instance is running in a VPC). An instance with a tenancy of <code>dedicated</code> runs on single-tenant hardware. The <code>host</code> tenancy is not supported for Spot Instances.</p>
   */
  Tenancy?: "default" | "dedicated" | "host" | string;
}

export type _UnmarshalledSpotPlacement = _SpotPlacement;
