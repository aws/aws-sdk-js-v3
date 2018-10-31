import {_RepositoryMetadata} from './_RepositoryMetadata';
import {Structure as _Structure_} from '@aws-sdk/types';

export const GetRepositoryOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        repositoryMetadata: {
            shape: _RepositoryMetadata,
        },
    },
};