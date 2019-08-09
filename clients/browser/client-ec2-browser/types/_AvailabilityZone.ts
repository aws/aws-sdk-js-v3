import {
  _AvailabilityZoneMessage,
  _UnmarshalledAvailabilityZoneMessage
} from "./_AvailabilityZoneMessage";

/**
 * <p>Describes an Availability Zone.</p>
 */
export interface _AvailabilityZone {
  /**
   * <p>The state of the Availability Zone.</p>
   */
  State?: "available" | "information" | "impaired" | "unavailable" | string;

  /**
   * <p>Any messages about the Availability Zone.</p>
   */
  Messages?:
    | Array<_AvailabilityZoneMessage>
    | Iterable<_AvailabilityZoneMessage>;

  /**
   * <p>The name of the Region.</p>
   */
  RegionName?: string;

  /**
   * <p>The name of the Availability Zone.</p>
   */
  ZoneName?: string;

  /**
   * <p>The ID of the Availability Zone.</p>
   */
  ZoneId?: string;
}

export interface _UnmarshalledAvailabilityZone extends _AvailabilityZone {
  /**
   * <p>Any messages about the Availability Zone.</p>
   */
  Messages?: Array<_UnmarshalledAvailabilityZoneMessage>;
}
