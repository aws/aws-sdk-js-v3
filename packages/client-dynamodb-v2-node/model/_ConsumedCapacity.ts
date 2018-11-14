import {_Capacity} from './_Capacity';
import {_SecondaryIndexesCapacityMap} from './_SecondaryIndexesCapacityMap';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _ConsumedCapacity: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        TableName: {
            shape: {
                type: 'string',
                min: 3,
            },
        },
        CapacityUnits: {
            shape: {
                type: 'float',
            },
        },
        Table: {
            shape: _Capacity,
        },
        LocalSecondaryIndexes: {
            shape: _SecondaryIndexesCapacityMap,
        },
        GlobalSecondaryIndexes: {
            shape: _SecondaryIndexesCapacityMap,
        },
    },
};