import {Structure as _Structure_} from '@aws-sdk/types';

export const GetFileOutput: _Structure_ = {
    type: 'structure',
    required: [
        'commitId',
        'blobId',
        'filePath',
        'fileMode',
        'fileSize',
        'fileContent',
    ],
    members: {
        commitId: {
            shape: {
                type: 'string',
            },
        },
        blobId: {
            shape: {
                type: 'string',
            },
        },
        filePath: {
            shape: {
                type: 'string',
            },
        },
        fileMode: {
            shape: {
                type: 'string',
            },
        },
        fileSize: {
            shape: {
                type: 'integer',
            },
        },
        fileContent: {
            shape: {
                type: 'blob',
            },
        },
    },
};