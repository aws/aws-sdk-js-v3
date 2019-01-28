import {_SetDimension, _UnmarshalledSetDimension} from './_SetDimension';

/**
 * Segment demographic dimensions
 */
export interface _SegmentDemographics {
    /**
     * The app version criteria for the segment.
     */
    AppVersion?: _SetDimension;

    /**
     * The channel criteria for the segment.
     */
    Channel?: _SetDimension;

    /**
     * The device type criteria for the segment.
     */
    DeviceType?: _SetDimension;

    /**
     * The device make criteria for the segment.
     */
    Make?: _SetDimension;

    /**
     * The device model criteria for the segment.
     */
    Model?: _SetDimension;

    /**
     * The device platform criteria for the segment.
     */
    Platform?: _SetDimension;
}

export interface _UnmarshalledSegmentDemographics extends _SegmentDemographics {
    /**
     * The app version criteria for the segment.
     */
    AppVersion?: _UnmarshalledSetDimension;

    /**
     * The channel criteria for the segment.
     */
    Channel?: _UnmarshalledSetDimension;

    /**
     * The device type criteria for the segment.
     */
    DeviceType?: _UnmarshalledSetDimension;

    /**
     * The device make criteria for the segment.
     */
    Make?: _UnmarshalledSetDimension;

    /**
     * The device model criteria for the segment.
     */
    Model?: _UnmarshalledSetDimension;

    /**
     * The device platform criteria for the segment.
     */
    Platform?: _UnmarshalledSetDimension;
}