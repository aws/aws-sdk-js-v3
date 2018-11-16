import {List as _List_} from '@aws-sdk/types';
import {_Service} from './_Service';

export const _ServiceList: _List_ = {
    type: 'list',
    member: {
        shape: _Service,
    },
};