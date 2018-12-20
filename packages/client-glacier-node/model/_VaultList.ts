import {List as _List_} from '@aws-sdk/types';
import {_DescribeVaultOutput} from './_DescribeVaultOutput';

export const _VaultList: _List_ = {
    type: 'list',
    member: {
        shape: _DescribeVaultOutput,
    },
};