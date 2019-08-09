import {
  _AttributeDimension,
  _UnmarshalledAttributeDimension
} from "./_AttributeDimension";
import { _SetDimension, _UnmarshalledSetDimension } from "./_SetDimension";
import {
  _MetricDimension,
  _UnmarshalledMetricDimension
} from "./_MetricDimension";

/**
 * <p>Specifies the dimensions for an event filter that determines when a campaign is sent.</p>
 */
export interface _EventDimensions {
  /**
   * <p>One or more custom attributes that your app reports to Amazon Pinpoint. You can use these attributes as selection criteria when you create an event filter.</p>
   */
  Attributes?:
    | { [key: string]: _AttributeDimension }
    | Iterable<[string, _AttributeDimension]>;

  /**
   * <p>The name of the event that causes the campaign to be sent. This can be a standard type of event that Amazon Pinpoint generates, such as _session.start, or a custom event that's specific to your app.</p>
   */
  EventType?: _SetDimension;

  /**
   * <p>One or more custom metrics that your app reports to Amazon Pinpoint. You can use these metrics as selection criteria when you create an event filter.</p>
   */
  Metrics?:
    | { [key: string]: _MetricDimension }
    | Iterable<[string, _MetricDimension]>;
}

export interface _UnmarshalledEventDimensions extends _EventDimensions {
  /**
   * <p>One or more custom attributes that your app reports to Amazon Pinpoint. You can use these attributes as selection criteria when you create an event filter.</p>
   */
  Attributes?: { [key: string]: _UnmarshalledAttributeDimension };

  /**
   * <p>The name of the event that causes the campaign to be sent. This can be a standard type of event that Amazon Pinpoint generates, such as _session.start, or a custom event that's specific to your app.</p>
   */
  EventType?: _UnmarshalledSetDimension;

  /**
   * <p>One or more custom metrics that your app reports to Amazon Pinpoint. You can use these metrics as selection criteria when you create an event filter.</p>
   */
  Metrics?: { [key: string]: _UnmarshalledMetricDimension };
}
