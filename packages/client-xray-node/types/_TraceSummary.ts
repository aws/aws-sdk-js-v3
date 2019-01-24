import {_Http, _UnmarshalledHttp} from './_Http';
import {_ValueWithServiceIds, _UnmarshalledValueWithServiceIds} from './_ValueWithServiceIds';
import {_TraceUser, _UnmarshalledTraceUser} from './_TraceUser';
import {_ServiceId, _UnmarshalledServiceId} from './_ServiceId';

/**
 * <p>Metadata generated from the segment documents in a trace.</p>
 */
export interface _TraceSummary {
    /**
     * <p>The unique identifier for the request that generated the trace's segments and subsegments.</p>
     */
    Id?: string;

    /**
     * <p>The length of time in seconds between the start time of the root segment and the end time of the last segment that completed.</p>
     */
    Duration?: number;

    /**
     * <p>The length of time in seconds between the start and end times of the root segment. If the service performs work asynchronously, the response time measures the time before the response is sent to the user, while the duration measures the amount of time before the last traced activity completes.</p>
     */
    ResponseTime?: number;

    /**
     * <p>One or more of the segment documents has a 500 series error.</p>
     */
    HasFault?: boolean;

    /**
     * <p>One or more of the segment documents has a 400 series error.</p>
     */
    HasError?: boolean;

    /**
     * <p>One or more of the segment documents has a 429 throttling error.</p>
     */
    HasThrottle?: boolean;

    /**
     * <p>One or more of the segment documents is in progress.</p>
     */
    IsPartial?: boolean;

    /**
     * <p>Information about the HTTP request served by the trace.</p>
     */
    Http?: _Http;

    /**
     * <p>Annotations from the trace's segment documents.</p>
     */
    Annotations?: {[key: string]: Array<_ValueWithServiceIds>|Iterable<_ValueWithServiceIds>}|Iterable<[string, Array<_ValueWithServiceIds>|Iterable<_ValueWithServiceIds>]>;

    /**
     * <p>Users from the trace's segment documents.</p>
     */
    Users?: Array<_TraceUser>|Iterable<_TraceUser>;

    /**
     * <p>Service IDs from the trace's segment documents.</p>
     */
    ServiceIds?: Array<_ServiceId>|Iterable<_ServiceId>;
}

export interface _UnmarshalledTraceSummary extends _TraceSummary {
    /**
     * <p>Information about the HTTP request served by the trace.</p>
     */
    Http?: _UnmarshalledHttp;

    /**
     * <p>Annotations from the trace's segment documents.</p>
     */
    Annotations?: {[key: string]: Array<_UnmarshalledValueWithServiceIds>};

    /**
     * <p>Users from the trace's segment documents.</p>
     */
    Users?: Array<_UnmarshalledTraceUser>;

    /**
     * <p>Service IDs from the trace's segment documents.</p>
     */
    ServiceIds?: Array<_UnmarshalledServiceId>;
}