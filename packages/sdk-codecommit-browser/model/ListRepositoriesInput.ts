import {Structure as _Structure_} from '@aws/types';

export const ListRepositoriesInput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        nextToken: {
            shape: {
                type: 'string',
            },
        },
        sortBy: {
            shape: {
                type: 'string',
            },
        },
        order: {
            shape: {
                type: 'string',
            },
        },
    },
};