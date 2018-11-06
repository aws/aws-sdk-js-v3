import {List as _List_} from '@aws-sdk/types';
import {_Grant} from './_Grant';

export const _Grants: _List_ = {
    type: 'list',
    member: {
        shape: _Grant,
        locationName: 'Grant',
    },
};