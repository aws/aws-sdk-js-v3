import {Structure as _Structure_} from '@aws-sdk/types';

export const CreateTrafficPolicyVersionInput: _Structure_ = {
    type: 'structure',
    required: [
        'Id',
        'Document',
    ],
    members: {
        Id: {
            shape: {
                type: 'string',
                min: 1,
            },
            location: 'uri',
            locationName: 'Id',
        },
        Document: {
            shape: {
                type: 'string',
            },
        },
        Comment: {
            shape: {
                type: 'string',
            },
        },
    },
};