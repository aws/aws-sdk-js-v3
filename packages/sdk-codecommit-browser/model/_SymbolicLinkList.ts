import {List as _List_} from '@aws/types';
import {_SymbolicLink} from './_SymbolicLink';

export const _SymbolicLinkList: _List_ = {
    type: 'list',
    member: {
        shape: _SymbolicLink,
    },
};