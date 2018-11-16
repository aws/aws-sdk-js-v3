import {Structure as _Structure_} from '@aws-sdk/types';

export const AddPermissionInput: _Structure_ = {
    type: 'structure',
    required: [
        'FunctionName',
        'StatementId',
        'Action',
        'Principal',
    ],
    members: {
        FunctionName: {
            shape: {
                type: 'string',
                min: 1,
            },
            location: 'uri',
            locationName: 'FunctionName',
        },
        StatementId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        Action: {
            shape: {
                type: 'string',
            },
        },
        Principal: {
            shape: {
                type: 'string',
            },
        },
        SourceArn: {
            shape: {
                type: 'string',
            },
        },
        SourceAccount: {
            shape: {
                type: 'string',
            },
        },
        EventSourceToken: {
            shape: {
                type: 'string',
            },
        },
        Qualifier: {
            shape: {
                type: 'string',
                min: 1,
            },
            location: 'querystring',
            locationName: 'Qualifier',
        },
        RevisionId: {
            shape: {
                type: 'string',
            },
        },
    },
};