import {Structure as _Structure_} from '@aws-sdk/types';

export const DeleteAliasInput: _Structure_ = {
    type: 'structure',
    required: [
        'FunctionName',
        'Name',
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
        Name: {
            shape: {
                type: 'string',
                min: 1,
            },
            location: 'uri',
            locationName: 'Name',
        },
    },
};