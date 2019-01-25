import {List as _List_} from '@aws-sdk/types';
import {_ChangeMessageVisibilityBatchResultEntry} from './_ChangeMessageVisibilityBatchResultEntry';

export const _ChangeMessageVisibilityBatchResultEntryList: _List_ = {
    type: 'list',
    flattened: true,
    member: {
        shape: _ChangeMessageVisibilityBatchResultEntry,
        locationName: 'ChangeMessageVisibilityBatchResultEntry',
    },
};