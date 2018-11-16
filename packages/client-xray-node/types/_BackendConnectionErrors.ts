/**
 * _BackendConnectionErrors shape
 */
export interface _BackendConnectionErrors {
    /**
     * _NullableInteger shape
     */
    TimeoutCount?: number;

    /**
     * _NullableInteger shape
     */
    ConnectionRefusedCount?: number;

    /**
     * _NullableInteger shape
     */
    HTTPCode4XXCount?: number;

    /**
     * _NullableInteger shape
     */
    HTTPCode5XXCount?: number;

    /**
     * _NullableInteger shape
     */
    UnknownHostCount?: number;

    /**
     * _NullableInteger shape
     */
    OtherCount?: number;
}

export type _UnmarshalledBackendConnectionErrors = _BackendConnectionErrors;