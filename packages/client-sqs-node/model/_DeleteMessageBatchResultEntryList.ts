import {List as _List_} from '@aws-sdk/types';
import {_DeleteMessageBatchResultEntry} from './_DeleteMessageBatchResultEntry';

export const _DeleteMessageBatchResultEntryList: _List_ = {
    type: 'list',
    flattened: true,
    member: {
        shape: _DeleteMessageBatchResultEntry,
        locationName: 'DeleteMessageBatchResultEntry',
    },
};