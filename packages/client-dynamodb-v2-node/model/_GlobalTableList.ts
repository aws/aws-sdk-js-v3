import {List as _List_} from '@aws-sdk/types';
import {_GlobalTable} from './_GlobalTable';

export const _GlobalTableList: _List_ = {
    type: 'list',
    member: {
        shape: _GlobalTable,
    },
};