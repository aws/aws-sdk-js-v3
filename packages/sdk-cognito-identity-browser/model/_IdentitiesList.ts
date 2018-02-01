import {List as _List_} from '@aws/types';
import {_IdentityDescription} from './_IdentityDescription';

export const _IdentitiesList: _List_ = {
    type: 'list',
    member: {
        shape: _IdentityDescription,
    },
};