import {
  _SupportedPlatform,
  _UnmarshalledSupportedPlatform
} from "./_SupportedPlatform";

/**
 * <p>Describes an availability zone.</p>
 */
export interface _AvailabilityZone {
  /**
   * <p>The name of the availability zone.</p>
   */
  Name?: string;

  /**
   * <p/>
   */
  SupportedPlatforms?: Array<_SupportedPlatform> | Iterable<_SupportedPlatform>;
}

export interface _UnmarshalledAvailabilityZone extends _AvailabilityZone {
  /**
   * <p/>
   */
  SupportedPlatforms?: Array<_UnmarshalledSupportedPlatform>;
}
