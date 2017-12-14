import {Structure as _Structure_} from '@aws/types';

export const _RepositoryMetadata: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        accountId: {
            shape: {
                type: 'string',
            },
        },
        repositoryId: {
            shape: {
                type: 'string',
            },
        },
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        repositoryDescription: {
            shape: {
                type: 'string',
            },
        },
        defaultBranch: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        lastModifiedDate: {
            shape: {
                type: 'timestamp',
            },
        },
        creationDate: {
            shape: {
                type: 'timestamp',
            },
        },
        cloneUrlHttp: {
            shape: {
                type: 'string',
            },
        },
        cloneUrlSsh: {
            shape: {
                type: 'string',
            },
        },
        Arn: {
            shape: {
                type: 'string',
            },
        },
    },
};