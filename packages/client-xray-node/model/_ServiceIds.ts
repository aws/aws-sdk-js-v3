import {List as _List_} from '@aws-sdk/types';
import {_ServiceId} from './_ServiceId';

export const _ServiceIds: _List_ = {
    type: 'list',
    member: {
        shape: _ServiceId,
    },
};