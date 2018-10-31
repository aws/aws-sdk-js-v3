import {List as _List_} from '@aws-sdk/types';
import {_File} from './_File';

export const _FileList: _List_ = {
    type: 'list',
    member: {
        shape: _File,
    },
};