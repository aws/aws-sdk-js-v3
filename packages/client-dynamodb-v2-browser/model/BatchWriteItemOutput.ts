import {_BatchWriteItemRequestMap} from './_BatchWriteItemRequestMap';
import {_ItemCollectionMetricsPerTable} from './_ItemCollectionMetricsPerTable';
import {_ConsumedCapacityMultiple} from './_ConsumedCapacityMultiple';
import {Structure as _Structure_} from '@aws-sdk/types';

export const BatchWriteItemOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        UnprocessedItems: {
            shape: _BatchWriteItemRequestMap,
        },
        ItemCollectionMetrics: {
            shape: _ItemCollectionMetricsPerTable,
        },
        ConsumedCapacity: {
            shape: _ConsumedCapacityMultiple,
        },
    },
};