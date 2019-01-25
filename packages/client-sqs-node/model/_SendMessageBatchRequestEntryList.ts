import {List as _List_} from '@aws-sdk/types';
import {_SendMessageBatchRequestEntry} from './_SendMessageBatchRequestEntry';

export const _SendMessageBatchRequestEntryList: _List_ = {
    type: 'list',
    flattened: true,
    member: {
        shape: _SendMessageBatchRequestEntry,
        locationName: 'SendMessageBatchRequestEntry',
    },
};