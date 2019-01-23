/**
 * <p/>
 */
export interface _BackendConnectionErrors {
    /**
     * <p/>
     */
    TimeoutCount?: number;

    /**
     * <p/>
     */
    ConnectionRefusedCount?: number;

    /**
     * <p/>
     */
    HTTPCode4XXCount?: number;

    /**
     * <p/>
     */
    HTTPCode5XXCount?: number;

    /**
     * <p/>
     */
    UnknownHostCount?: number;

    /**
     * <p/>
     */
    OtherCount?: number;
}

export type _UnmarshalledBackendConnectionErrors = _BackendConnectionErrors;