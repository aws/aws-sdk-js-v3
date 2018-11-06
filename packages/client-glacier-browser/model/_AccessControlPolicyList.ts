import {List as _List_} from '@aws-sdk/types';
import {_Grant} from './_Grant';

export const _AccessControlPolicyList: _List_ = {
    type: 'list',
    member: {
        shape: _Grant,
    },
};