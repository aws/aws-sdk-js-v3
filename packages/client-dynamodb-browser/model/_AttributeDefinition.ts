import {Structure as _Structure_} from '@aws-sdk/types';

export const _AttributeDefinition: _Structure_ = {
    type: 'structure',
    required: [
        'AttributeName',
        'AttributeType',
    ],
    members: {
        AttributeName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        AttributeType: {
            shape: {
                type: 'string',
            },
        },
    },
};