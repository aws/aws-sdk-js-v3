import {_ServiceId, _UnmarshalledServiceId} from './_ServiceId';

/**
 * _TraceUser shape
 */
export interface _TraceUser {
    /**
     * _String shape
     */
    UserName?: string;

    /**
     * _ServiceIds shape
     */
    ServiceIds?: Array<_ServiceId>|Iterable<_ServiceId>;
}

export interface _UnmarshalledTraceUser extends _TraceUser {
    /**
     * _ServiceIds shape
     */
    ServiceIds?: Array<_UnmarshalledServiceId>;
}