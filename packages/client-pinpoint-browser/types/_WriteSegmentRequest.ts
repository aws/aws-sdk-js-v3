import {_SegmentDimensions, _UnmarshalledSegmentDimensions} from './_SegmentDimensions';
import {_SegmentGroupList, _UnmarshalledSegmentGroupList} from './_SegmentGroupList';

/**
 * Segment definition.
 */
export interface _WriteSegmentRequest {
    /**
     * The segment dimensions attributes.
     */
    Dimensions?: _SegmentDimensions;

    /**
     * The name of segment
     */
    Name?: string;

    /**
     * A segment group, which consists of zero or more source segments, plus dimensions that are applied to those source segments. Your request can only include one segment group. Your request can include either a SegmentGroups object or a Dimensions object, but not both.
     */
    SegmentGroups?: _SegmentGroupList;
}

export interface _UnmarshalledWriteSegmentRequest extends _WriteSegmentRequest {
    /**
     * The segment dimensions attributes.
     */
    Dimensions?: _UnmarshalledSegmentDimensions;

    /**
     * A segment group, which consists of zero or more source segments, plus dimensions that are applied to those source segments. Your request can only include one segment group. Your request can include either a SegmentGroups object or a Dimensions object, but not both.
     */
    SegmentGroups?: _UnmarshalledSegmentGroupList;
}