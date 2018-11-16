import {_Record, _UnmarshalledRecord} from './_Record';

/**
 * <p>After you call <a>SubscribeToShard</a>, Kinesis Data Streams sends events of this type to your consumer. </p>
 */
export interface _SubscribeToShardEvent {
    /**
     * <p/>
     */
    Records: Array<_Record>|Iterable<_Record>;

    /**
     * <p>Use this as <code>StartingSequenceNumber</code> in the next call to <a>SubscribeToShard</a>.</p>
     */
    ContinuationSequenceNumber: string;

    /**
     * <p>The number of milliseconds the read records are from the tip of the stream, indicating how far behind current time the consumer is. A value of zero indicates that record processing is caught up, and there are no new records to process at this moment.</p>
     */
    MillisBehindLatest: number;
}

export interface _UnmarshalledSubscribeToShardEvent extends _SubscribeToShardEvent {
    /**
     * <p/>
     */
    Records: Array<_UnmarshalledRecord>;
}