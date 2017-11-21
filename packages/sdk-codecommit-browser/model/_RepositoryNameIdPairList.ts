import {List as _List_} from '@aws/types';
import {_RepositoryNameIdPair} from './_RepositoryNameIdPair';

export const _RepositoryNameIdPairList: _List_ = {
    type: 'list',
    member: {
        shape: _RepositoryNameIdPair,
    },
};