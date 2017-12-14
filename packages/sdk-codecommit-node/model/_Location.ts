import {Structure as _Structure_} from '@aws/types';

export const _Location: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        filePath: {
            shape: {
                type: 'string',
            },
        },
        filePosition: {
            shape: {
                type: 'integer',
            },
        },
        relativeFileVersion: {
            shape: {
                type: 'string',
            },
        },
    },
};