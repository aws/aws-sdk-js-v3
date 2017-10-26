import {_ItemCollectionKeyAttributeMap} from './_ItemCollectionKeyAttributeMap';
import {_ItemCollectionSizeEstimateRange} from './_ItemCollectionSizeEstimateRange';
import {Structure as _Structure_} from '@aws/types';

export const _ItemCollectionMetrics: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        ItemCollectionKey: {
            shape: _ItemCollectionKeyAttributeMap,
        },
        SizeEstimateRangeGB: {
            shape: _ItemCollectionSizeEstimateRange,
        },
    },
};