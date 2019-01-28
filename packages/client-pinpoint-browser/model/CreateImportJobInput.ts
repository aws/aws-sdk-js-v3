import {_ImportJobRequest} from './_ImportJobRequest';
import {Structure as _Structure_} from '@aws-sdk/types';

export const CreateImportJobInput: _Structure_ = {
    type: 'structure',
    required: [
        'ApplicationId',
        'ImportJobRequest',
    ],
    members: {
        ApplicationId: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'application-id',
        },
        ImportJobRequest: {
            shape: _ImportJobRequest,
        },
    },
    payload: 'ImportJobRequest',
};