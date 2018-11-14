import {_BackendConnectionErrors, _UnmarshalledBackendConnectionErrors} from './_BackendConnectionErrors';

/**
 * _TelemetryRecord shape
 */
export interface _TelemetryRecord {
    /**
     * _Timestamp shape
     */
    Timestamp: Date|string|number;

    /**
     * _NullableInteger shape
     */
    SegmentsReceivedCount?: number;

    /**
     * _NullableInteger shape
     */
    SegmentsSentCount?: number;

    /**
     * _NullableInteger shape
     */
    SegmentsSpilloverCount?: number;

    /**
     * _NullableInteger shape
     */
    SegmentsRejectedCount?: number;

    /**
     * _BackendConnectionErrors shape
     */
    BackendConnectionErrors?: _BackendConnectionErrors;
}

export interface _UnmarshalledTelemetryRecord extends _TelemetryRecord {
    /**
     * _Timestamp shape
     */
    Timestamp: Date;

    /**
     * _BackendConnectionErrors shape
     */
    BackendConnectionErrors?: _UnmarshalledBackendConnectionErrors;
}