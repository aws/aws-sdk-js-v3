import {List as _List_} from '@aws-sdk/types';
import {_FunctionConfiguration} from './_FunctionConfiguration';

export const _FunctionList: _List_ = {
    type: 'list',
    member: {
        shape: _FunctionConfiguration,
    },
};