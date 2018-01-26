import {List as _List_} from '@aws/types';

export const _LoginsList: _List_ = {
    type: 'list',
    member: {
        shape: {
            type: 'string',
            min: 1,
        },
    },
};