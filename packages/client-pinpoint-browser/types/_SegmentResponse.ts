import {_SegmentDimensions, _UnmarshalledSegmentDimensions} from './_SegmentDimensions';
import {_SegmentImportResource, _UnmarshalledSegmentImportResource} from './_SegmentImportResource';
import {_SegmentGroupList, _UnmarshalledSegmentGroupList} from './_SegmentGroupList';

/**
 * Segment definition.
 */
export interface _SegmentResponse {
    /**
     * The ID of the application that the segment applies to.
     */
    ApplicationId?: string;

    /**
     * The date and time when the segment was created.
     */
    CreationDate?: string;

    /**
     * The segment dimensions attributes.
     */
    Dimensions?: _SegmentDimensions;

    /**
     * The unique segment ID.
     */
    Id?: string;

    /**
     * The import job settings.
     */
    ImportDefinition?: _SegmentImportResource;

    /**
     * The date and time when the segment was last modified.
     */
    LastModifiedDate?: string;

    /**
     * The name of the segment.
     */
    Name?: string;

    /**
     * A segment group, which consists of zero or more source segments, plus dimensions that are applied to those source segments.
     */
    SegmentGroups?: _SegmentGroupList;

    /**
     * The segment type:
     * DIMENSIONAL - A dynamic segment built from selection criteria based on endpoint data reported by your app. You create this type of segment by using the segment builder in the Amazon Pinpoint console or by making a POST request to the segments resource.
     * IMPORT - A static segment built from an imported set of endpoint definitions. You create this type of segment by importing a segment in the Amazon Pinpoint console or by making a POST request to the jobs/import resource.
     */
    SegmentType?: 'DIMENSIONAL'|'IMPORT'|string;

    /**
     * The segment version number.
     */
    Version?: number;
}

export interface _UnmarshalledSegmentResponse extends _SegmentResponse {
    /**
     * The segment dimensions attributes.
     */
    Dimensions?: _UnmarshalledSegmentDimensions;

    /**
     * The import job settings.
     */
    ImportDefinition?: _UnmarshalledSegmentImportResource;

    /**
     * A segment group, which consists of zero or more source segments, plus dimensions that are applied to those source segments.
     */
    SegmentGroups?: _UnmarshalledSegmentGroupList;
}