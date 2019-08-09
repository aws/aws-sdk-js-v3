import { _SetDimension, _UnmarshalledSetDimension } from "./_SetDimension";

/**
 * <p>Specifies demographic-based dimension settings for including or excluding endpoints from a segment. These settings derive from characteristics of endpoint devices, such as platform, make, and model.</p>
 */
export interface _SegmentDemographics {
  /**
   * <p>The app version criteria for the segment.</p>
   */
  AppVersion?: _SetDimension;

  /**
   * <p>The channel criteria for the segment.</p>
   */
  Channel?: _SetDimension;

  /**
   * <p>The device type criteria for the segment.</p>
   */
  DeviceType?: _SetDimension;

  /**
   * <p>The device make criteria for the segment.</p>
   */
  Make?: _SetDimension;

  /**
   * <p>The device model criteria for the segment.</p>
   */
  Model?: _SetDimension;

  /**
   * <p>The device platform criteria for the segment.</p>
   */
  Platform?: _SetDimension;
}

export interface _UnmarshalledSegmentDemographics extends _SegmentDemographics {
  /**
   * <p>The app version criteria for the segment.</p>
   */
  AppVersion?: _UnmarshalledSetDimension;

  /**
   * <p>The channel criteria for the segment.</p>
   */
  Channel?: _UnmarshalledSetDimension;

  /**
   * <p>The device type criteria for the segment.</p>
   */
  DeviceType?: _UnmarshalledSetDimension;

  /**
   * <p>The device make criteria for the segment.</p>
   */
  Make?: _UnmarshalledSetDimension;

  /**
   * <p>The device model criteria for the segment.</p>
   */
  Model?: _UnmarshalledSetDimension;

  /**
   * <p>The device platform criteria for the segment.</p>
   */
  Platform?: _UnmarshalledSetDimension;
}
