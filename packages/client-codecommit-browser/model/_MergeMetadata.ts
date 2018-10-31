import {Structure as _Structure_} from '@aws-sdk/types';

export const _MergeMetadata: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        isMerged: {
            shape: {
                type: 'boolean',
            },
        },
        mergedBy: {
            shape: {
                type: 'string',
            },
        },
    },
};