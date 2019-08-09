import {
  _AvailabilityZone,
  _UnmarshalledAvailabilityZone
} from "./_AvailabilityZone";

/**
 * <p>Describes the AWS Region.</p>
 */
export interface _Region {
  /**
   * <p>The continent code (e.g., <code>NA</code>, meaning North America).</p>
   */
  continentCode?: string;

  /**
   * <p>The description of the AWS Region (e.g., <code>This region is recommended to serve users in the eastern United States and eastern Canada</code>).</p>
   */
  description?: string;

  /**
   * <p>The display name (e.g., <code>Ohio</code>).</p>
   */
  displayName?: string;

  /**
   * <p>The region name (e.g., <code>us-east-2</code>).</p>
   */
  name?:
    | "us-east-1"
    | "us-east-2"
    | "us-west-1"
    | "us-west-2"
    | "eu-west-1"
    | "eu-west-2"
    | "eu-west-3"
    | "eu-central-1"
    | "ca-central-1"
    | "ap-south-1"
    | "ap-southeast-1"
    | "ap-southeast-2"
    | "ap-northeast-1"
    | "ap-northeast-2"
    | string;

  /**
   * <p>The Availability Zones. Follows the format <code>us-east-2a</code> (case-sensitive).</p>
   */
  availabilityZones?: Array<_AvailabilityZone> | Iterable<_AvailabilityZone>;

  /**
   * <p>The Availability Zones for databases. Follows the format <code>us-east-2a</code> (case-sensitive).</p>
   */
  relationalDatabaseAvailabilityZones?:
    | Array<_AvailabilityZone>
    | Iterable<_AvailabilityZone>;
}

export interface _UnmarshalledRegion extends _Region {
  /**
   * <p>The Availability Zones. Follows the format <code>us-east-2a</code> (case-sensitive).</p>
   */
  availabilityZones?: Array<_UnmarshalledAvailabilityZone>;

  /**
   * <p>The Availability Zones for databases. Follows the format <code>us-east-2a</code> (case-sensitive).</p>
   */
  relationalDatabaseAvailabilityZones?: Array<_UnmarshalledAvailabilityZone>;
}
