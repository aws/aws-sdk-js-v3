import {Structure as _Structure_} from '@aws-sdk/types';

export const CreateEventSourceMappingInput: _Structure_ = {
    type: 'structure',
    required: [
        'EventSourceArn',
        'FunctionName',
    ],
    members: {
        EventSourceArn: {
            shape: {
                type: 'string',
            },
        },
        FunctionName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        Enabled: {
            shape: {
                type: 'boolean',
            },
        },
        BatchSize: {
            shape: {
                type: 'integer',
                min: 1,
            },
        },
        StartingPosition: {
            shape: {
                type: 'string',
            },
        },
        StartingPositionTimestamp: {
            shape: {
                type: 'timestamp',
            },
        },
    },
};