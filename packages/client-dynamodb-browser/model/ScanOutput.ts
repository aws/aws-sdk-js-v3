import {_ItemList} from './_ItemList';
import {_Key} from './_Key';
import {_ConsumedCapacity} from './_ConsumedCapacity';
import {Structure as _Structure_} from '@aws-sdk/types';

export const ScanOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Items: {
            shape: _ItemList,
        },
        Count: {
            shape: {
                type: 'integer',
            },
        },
        ScannedCount: {
            shape: {
                type: 'integer',
            },
        },
        LastEvaluatedKey: {
            shape: _Key,
        },
        ConsumedCapacity: {
            shape: _ConsumedCapacity,
        },
    },
};