import {Structure as _Structure_} from '@aws-sdk/types';

export const GetTraceSummariesInput: _Structure_ = {
    type: 'structure',
    required: [
        'StartTime',
        'EndTime',
    ],
    members: {
        StartTime: {
            shape: {
                type: 'timestamp',
            },
        },
        EndTime: {
            shape: {
                type: 'timestamp',
            },
        },
        Sampling: {
            shape: {
                type: 'boolean',
            },
        },
        FilterExpression: {
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