import {Structure as _Structure_} from '@aws-sdk/types';

export const _Folder: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        treeId: {
            shape: {
                type: 'string',
            },
        },
        absolutePath: {
            shape: {
                type: 'string',
            },
        },
        relativePath: {
            shape: {
                type: 'string',
            },
        },
    },
};