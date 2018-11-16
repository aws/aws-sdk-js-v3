import {_SubscribeToShardEvent, _UnmarshalledSubscribeToShardEvent} from './_SubscribeToShardEvent';

/**
 * _SubscribeToShardEventStream shape
 */
export interface _SubscribeToShardEventStream {
    /**
     * <p>After you call <a>SubscribeToShard</a>, Kinesis Data Streams sends events of this type to your consumer. </p>
     */
    SubscribeToShardEvent: _SubscribeToShardEvent;
}

export interface _UnmarshalledSubscribeToShardEventStream extends _SubscribeToShardEventStream {
    /**
     * <p>After you call <a>SubscribeToShard</a>, Kinesis Data Streams sends events of this type to your consumer. </p>
     */
    SubscribeToShardEvent: _UnmarshalledSubscribeToShardEvent;
}