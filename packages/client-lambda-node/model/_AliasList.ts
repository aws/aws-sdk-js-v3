import {List as _List_} from '@aws-sdk/types';
import {_AliasConfiguration} from './_AliasConfiguration';

export const _AliasList: _List_ = {
    type: 'list',
    member: {
        shape: _AliasConfiguration,
    },
};