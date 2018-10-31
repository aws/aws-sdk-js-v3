import {List as _List_} from '@aws-sdk/types';
import {_UnprocessedIdentityId} from './_UnprocessedIdentityId';

export const _UnprocessedIdentityIdList: _List_ = {
    type: 'list',
    member: {
        shape: _UnprocessedIdentityId,
    },
};