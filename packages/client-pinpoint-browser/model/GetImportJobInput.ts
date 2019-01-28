import {Structure as _Structure_} from '@aws-sdk/types';

export const GetImportJobInput: _Structure_ = {
    type: 'structure',
    required: [
        'ApplicationId',
        'JobId',
    ],
    members: {
        ApplicationId: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'application-id',
        },
        JobId: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'job-id',
        },
    },
};