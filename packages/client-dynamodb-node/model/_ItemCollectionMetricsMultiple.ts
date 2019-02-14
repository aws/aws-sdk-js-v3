import {List as _List_} from '@aws-sdk/types';
import {_ItemCollectionMetrics} from './_ItemCollectionMetrics';

export const _ItemCollectionMetricsMultiple: _List_ = {
    type: 'list',
    member: {
        shape: _ItemCollectionMetrics,
    },
};