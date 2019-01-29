import {List as _List_} from '@aws-sdk/types';
import {_EndpointBatchItem} from './_EndpointBatchItem';

export const _ListOfEndpointBatchItem: _List_ = {
    type: 'list',
    member: {
        shape: _EndpointBatchItem,
    },
};