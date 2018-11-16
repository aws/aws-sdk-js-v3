/**
 * _StartingPosition shape
 */
export interface _StartingPosition {
    /**
     * _ShardIteratorType shape
     */
    Type: 'AT_SEQUENCE_NUMBER'|'AFTER_SEQUENCE_NUMBER'|'TRIM_HORIZON'|'LATEST'|'AT_TIMESTAMP'|string;

    /**
     * _SequenceNumber shape
     */
    SequenceNumber?: string;

    /**
     * _Timestamp shape
     */
    Timestamp?: Date|string|number;
}

export interface _UnmarshalledStartingPosition extends _StartingPosition {
    /**
     * _Timestamp shape
     */
    Timestamp?: Date;
}