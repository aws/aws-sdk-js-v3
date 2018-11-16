import {_SubscribeToShardEvent} from './_SubscribeToShardEvent';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _SubscribeToShardEventStream: _Structure_ = {
    type: 'structure',
    required: [
        'SubscribeToShardEvent',
    ],
    members: {
        SubscribeToShardEvent: {
            shape: _SubscribeToShardEvent,
        },
    },
};