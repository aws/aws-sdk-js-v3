import {List as _List_} from '@aws/types';

export const _SAMLProviderList: _List_ = {
    type: 'list',
    member: {
        shape: {
            type: 'string',
            min: 20,
        },
    },
};