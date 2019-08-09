import {
  _AttributeDimension,
  _UnmarshalledAttributeDimension
} from "./_AttributeDimension";
import {
  _SegmentBehaviors,
  _UnmarshalledSegmentBehaviors
} from "./_SegmentBehaviors";
import {
  _SegmentDemographics,
  _UnmarshalledSegmentDemographics
} from "./_SegmentDemographics";
import {
  _SegmentLocation,
  _UnmarshalledSegmentLocation
} from "./_SegmentLocation";
import {
  _MetricDimension,
  _UnmarshalledMetricDimension
} from "./_MetricDimension";

/**
 * <p>Specifies the dimension settings for a segment.</p>
 */
export interface _SegmentDimensions {
  /**
   * <p>One or more custom attributes to use as criteria for the segment.</p>
   */
  Attributes?:
    | { [key: string]: _AttributeDimension }
    | Iterable<[string, _AttributeDimension]>;

  /**
   * <p>The behavior-based criteria, such as how recently users have used your app, for the segment.</p>
   */
  Behavior?: _SegmentBehaviors;

  /**
   * <p>The demographic-based criteria, such as device platform, for the segment.</p>
   */
  Demographic?: _SegmentDemographics;

  /**
   * <p>The location-based criteria, such as region or GPS coordinates, for the segment.</p>
   */
  Location?: _SegmentLocation;

  /**
   * <p>One or more custom metrics to use as criteria for the segment.</p>
   */
  Metrics?:
    | { [key: string]: _MetricDimension }
    | Iterable<[string, _MetricDimension]>;

  /**
   * <p>One or more custom user attributes to use as criteria for the segment.</p>
   */
  UserAttributes?:
    | { [key: string]: _AttributeDimension }
    | Iterable<[string, _AttributeDimension]>;
}

export interface _UnmarshalledSegmentDimensions extends _SegmentDimensions {
  /**
   * <p>One or more custom attributes to use as criteria for the segment.</p>
   */
  Attributes?: { [key: string]: _UnmarshalledAttributeDimension };

  /**
   * <p>The behavior-based criteria, such as how recently users have used your app, for the segment.</p>
   */
  Behavior?: _UnmarshalledSegmentBehaviors;

  /**
   * <p>The demographic-based criteria, such as device platform, for the segment.</p>
   */
  Demographic?: _UnmarshalledSegmentDemographics;

  /**
   * <p>The location-based criteria, such as region or GPS coordinates, for the segment.</p>
   */
  Location?: _UnmarshalledSegmentLocation;

  /**
   * <p>One or more custom metrics to use as criteria for the segment.</p>
   */
  Metrics?: { [key: string]: _UnmarshalledMetricDimension };

  /**
   * <p>One or more custom user attributes to use as criteria for the segment.</p>
   */
  UserAttributes?: { [key: string]: _UnmarshalledAttributeDimension };
}
