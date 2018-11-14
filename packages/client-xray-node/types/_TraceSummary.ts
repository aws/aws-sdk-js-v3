import {_Http, _UnmarshalledHttp} from './_Http';
import {_ValueWithServiceIds, _UnmarshalledValueWithServiceIds} from './_ValueWithServiceIds';
import {_TraceUser, _UnmarshalledTraceUser} from './_TraceUser';
import {_ServiceId, _UnmarshalledServiceId} from './_ServiceId';

/**
 * _TraceSummary shape
 */
export interface _TraceSummary {
    /**
     * _TraceId shape
     */
    Id?: string;

    /**
     * _NullableDouble shape
     */
    Duration?: number;

    /**
     * _NullableDouble shape
     */
    ResponseTime?: number;

    /**
     * _NullableBoolean shape
     */
    HasFault?: boolean;

    /**
     * _NullableBoolean shape
     */
    HasError?: boolean;

    /**
     * _NullableBoolean shape
     */
    HasThrottle?: boolean;

    /**
     * _NullableBoolean shape
     */
    IsPartial?: boolean;

    /**
     * _Http shape
     */
    Http?: _Http;

    /**
     * _Annotations shape
     */
    Annotations?: {[key: string]: Array<_ValueWithServiceIds>|Iterable<_ValueWithServiceIds>}|Iterable<[string, Array<_ValueWithServiceIds>|Iterable<_ValueWithServiceIds>]>;

    /**
     * _TraceUsers shape
     */
    Users?: Array<_TraceUser>|Iterable<_TraceUser>;

    /**
     * _ServiceIds shape
     */
    ServiceIds?: Array<_ServiceId>|Iterable<_ServiceId>;
}

export interface _UnmarshalledTraceSummary extends _TraceSummary {
    /**
     * _Http shape
     */
    Http?: _UnmarshalledHttp;

    /**
     * _Annotations shape
     */
    Annotations?: {[key: string]: Array<_UnmarshalledValueWithServiceIds>};

    /**
     * _TraceUsers shape
     */
    Users?: Array<_UnmarshalledTraceUser>;

    /**
     * _ServiceIds shape
     */
    ServiceIds?: Array<_UnmarshalledServiceId>;
}