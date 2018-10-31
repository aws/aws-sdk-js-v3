import {List as _List_} from '@aws-sdk/types';
import {_RepositoryMetadata} from './_RepositoryMetadata';

export const _RepositoryMetadataList: _List_ = {
    type: 'list',
    member: {
        shape: _RepositoryMetadata,
    },
};