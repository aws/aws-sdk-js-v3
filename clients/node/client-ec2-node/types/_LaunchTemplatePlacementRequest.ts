/**
 * <p>Describes the placement of an instance.</p>
 */
export interface _LaunchTemplatePlacementRequest {
  /**
   * <p>The Availability Zone for the instance.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The affinity setting for an instance on a Dedicated Host.</p>
   */
  Affinity?: string;

  /**
   * <p>The name of the placement group for the instance.</p>
   */
  GroupName?: string;

  /**
   * <p>The ID of the Dedicated Host for the instance.</p>
   */
  HostId?: string;

  /**
   * <p>The tenancy of the instance (if the instance is running in a VPC). An instance with a tenancy of dedicated runs on single-tenant hardware.</p>
   */
  Tenancy?: "default" | "dedicated" | "host" | string;

  /**
   * <p>Reserved for future use.</p>
   */
  SpreadDomain?: string;
}

export type _UnmarshalledLaunchTemplatePlacementRequest = _LaunchTemplatePlacementRequest;
