import {List as _List_} from '@aws/types';
import {_LocalSecondaryIndex} from './_LocalSecondaryIndex';

export const _LocalSecondaryIndexList: _List_ = {
    type: 'list',
    member: {
        shape: _LocalSecondaryIndex,
    },
};