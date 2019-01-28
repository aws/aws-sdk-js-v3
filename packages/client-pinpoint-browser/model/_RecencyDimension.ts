import {Structure as _Structure_} from '@aws-sdk/types';

export const _RecencyDimension: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Duration: {
            shape: {
                type: 'string',
            },
        },
        RecencyType: {
            shape: {
                type: 'string',
            },
        },
    },
};