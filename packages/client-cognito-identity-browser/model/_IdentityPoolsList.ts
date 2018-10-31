import {List as _List_} from '@aws-sdk/types';
import {_IdentityPoolShortDescription} from './_IdentityPoolShortDescription';

export const _IdentityPoolsList: _List_ = {
    type: 'list',
    member: {
        shape: _IdentityPoolShortDescription,
    },
};