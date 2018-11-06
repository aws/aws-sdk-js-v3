/**
 * _Stats shape
 */
export interface _Stats {
    /**
     * <p>Total number of object bytes scanned.</p>
     */
    BytesScanned?: number;

    /**
     * <p>Total number of uncompressed object bytes processed.</p>
     */
    BytesProcessed?: number;

    /**
     * <p>Total number of bytes of records payload data returned.</p>
     */
    BytesReturned?: number;
}

export type _UnmarshalledStats = _Stats;