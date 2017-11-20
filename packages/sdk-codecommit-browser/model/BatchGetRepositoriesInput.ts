import {_RepositoryNameList} from './_RepositoryNameList';
import {Structure as _Structure_} from '@aws/types';

export const BatchGetRepositoriesInput: _Structure_ = {
    type: 'structure',
    required: [
        'repositoryNames',
    ],
    members: {
        repositoryNames: {
            shape: _RepositoryNameList,
        },
    },
};