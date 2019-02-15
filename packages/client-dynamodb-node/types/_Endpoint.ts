/**
 * _Endpoint shape
 */
export interface _Endpoint {
    /**
     * _String shape
     */
    Address: string;

    /**
     * _Long shape
     */
    CachePeriodInMinutes: number;
}

export type _UnmarshalledEndpoint = _Endpoint;