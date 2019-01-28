import {_AttributeDimension, _UnmarshalledAttributeDimension} from './_AttributeDimension';
import {_SegmentBehaviors, _UnmarshalledSegmentBehaviors} from './_SegmentBehaviors';
import {_SegmentDemographics, _UnmarshalledSegmentDemographics} from './_SegmentDemographics';
import {_SegmentLocation, _UnmarshalledSegmentLocation} from './_SegmentLocation';
import {_MetricDimension, _UnmarshalledMetricDimension} from './_MetricDimension';

/**
 * Segment dimensions
 */
export interface _SegmentDimensions {
    /**
     * Custom segment attributes.
     */
    Attributes?: {[key: string]: _AttributeDimension}|Iterable<[string, _AttributeDimension]>;

    /**
     * The segment behaviors attributes.
     */
    Behavior?: _SegmentBehaviors;

    /**
     * The segment demographics attributes.
     */
    Demographic?: _SegmentDemographics;

    /**
     * The segment location attributes.
     */
    Location?: _SegmentLocation;

    /**
     * Custom segment metrics.
     */
    Metrics?: {[key: string]: _MetricDimension}|Iterable<[string, _MetricDimension]>;

    /**
     * Custom segment user attributes.
     */
    UserAttributes?: {[key: string]: _AttributeDimension}|Iterable<[string, _AttributeDimension]>;
}

export interface _UnmarshalledSegmentDimensions extends _SegmentDimensions {
    /**
     * Custom segment attributes.
     */
    Attributes?: {[key: string]: _UnmarshalledAttributeDimension};

    /**
     * The segment behaviors attributes.
     */
    Behavior?: _UnmarshalledSegmentBehaviors;

    /**
     * The segment demographics attributes.
     */
    Demographic?: _UnmarshalledSegmentDemographics;

    /**
     * The segment location attributes.
     */
    Location?: _UnmarshalledSegmentLocation;

    /**
     * Custom segment metrics.
     */
    Metrics?: {[key: string]: _UnmarshalledMetricDimension};

    /**
     * Custom segment user attributes.
     */
    UserAttributes?: {[key: string]: _UnmarshalledAttributeDimension};
}