import {Structure as _Structure_} from '@aws-sdk/types';

export const _TimeToLiveSpecification: _Structure_ = {
    type: 'structure',
    required: [
        'Enabled',
        'AttributeName',
    ],
    members: {
        Enabled: {
            shape: {
                type: 'boolean',
            },
        },
        AttributeName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};