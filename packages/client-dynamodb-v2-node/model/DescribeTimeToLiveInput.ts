import {Structure as _Structure_} from '@aws-sdk/types';

export const DescribeTimeToLiveInput: _Structure_ = {
    type: 'structure',
    required: [
        'TableName',
    ],
    members: {
        TableName: {
            shape: {
                type: 'string',
                min: 3,
            },
        },
    },
};