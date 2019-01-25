import {List as _List_} from '@aws-sdk/types';
import {_DeleteMessageBatchRequestEntry} from './_DeleteMessageBatchRequestEntry';

export const _DeleteMessageBatchRequestEntryList: _List_ = {
    type: 'list',
    flattened: true,
    member: {
        shape: _DeleteMessageBatchRequestEntry,
        locationName: 'DeleteMessageBatchRequestEntry',
    },
};