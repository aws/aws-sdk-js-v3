import {List as _List_} from '@aws-sdk/types';

export const _BinaryList: _List_ = {
    type: 'list',
    member: {
        shape: {
            type: 'blob',
        },
        locationName: 'BinaryListValue',
    },
};