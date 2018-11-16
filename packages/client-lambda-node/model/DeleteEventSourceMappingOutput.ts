import {Structure as _Structure_} from '@aws-sdk/types';

export const DeleteEventSourceMappingOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        UUID: {
            shape: {
                type: 'string',
            },
        },
        BatchSize: {
            shape: {
                type: 'integer',
                min: 1,
            },
        },
        EventSourceArn: {
            shape: {
                type: 'string',
            },
        },
        FunctionArn: {
            shape: {
                type: 'string',
            },
        },
        LastModified: {
            shape: {
                type: 'timestamp',
            },
        },
        LastProcessingResult: {
            shape: {
                type: 'string',
            },
        },
        State: {
            shape: {
                type: 'string',
            },
        },
        StateTransitionReason: {
            shape: {
                type: 'string',
            },
        },
    },
};