import {_LocalSecondaryIndexes} from './_LocalSecondaryIndexes';
import {_GlobalSecondaryIndexes} from './_GlobalSecondaryIndexes';
import {_StreamSpecification} from './_StreamSpecification';
import {_TimeToLiveDescription} from './_TimeToLiveDescription';
import {_SSEDescription} from './_SSEDescription';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _SourceTableFeatureDetails: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        LocalSecondaryIndexes: {
            shape: _LocalSecondaryIndexes,
        },
        GlobalSecondaryIndexes: {
            shape: _GlobalSecondaryIndexes,
        },
        StreamDescription: {
            shape: _StreamSpecification,
        },
        TimeToLiveDescription: {
            shape: _TimeToLiveDescription,
        },
        SSEDescription: {
            shape: _SSEDescription,
        },
    },
};