import {List as _List_} from '@aws-sdk/types';
import {_BackupSummary} from './_BackupSummary';

export const _BackupSummaries: _List_ = {
    type: 'list',
    member: {
        shape: _BackupSummary,
    },
};