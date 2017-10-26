import {List as _List_} from '@aws/types';
import {_GlobalSecondaryIndexUpdate} from './_GlobalSecondaryIndexUpdate';

export const _GlobalSecondaryIndexUpdateList: _List_ = {
    type: 'list',
    member: {
        shape: _GlobalSecondaryIndexUpdate,
    },
};