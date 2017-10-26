import {Structure as _Structure_} from '@aws/types';

export const ListTagsOfResourceInput: _Structure_ = {
    type: 'structure',
    required: [
        'ResourceArn',
    ],
    members: {
        ResourceArn: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        NextToken: {
            shape: {
                type: 'string',
            },
        },
    },
};